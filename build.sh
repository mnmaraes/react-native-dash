# clean up previous remains, if any
rm -rf Contents/Resources
rm -rf ReactNative.docset
mkdir -p Contents/Resources/Documents
# create a fresh sqlite db
cd Contents/Resources
sqlite3 docSet.dsidx 'CREATE TABLE searchIndex(id INTEGER PRIMARY KEY, name TEXT, type TEXT, path TEXT)'
sqlite3 docSet.dsidx 'CREATE UNIQUE INDEX anchor ON searchIndex (name, type, path)'
# fetch the whole doc site
# TODO: Include Videos for offline possibly.
cd Documents
wget -m -p -E -k -np http://facebook.github.io/react-native/
# move it around a bit
mv facebook.github.io/react-native ./
rm -rf facebook.github.io
cd ../../../
# change the documentation markup layout a bit to fit dash's small window
node src/modifyDocsHTML.js
# read the previously fetched doc site and parse it into sqlite
node src/index.js
# bundle up!
mkdir ReactNative.docset
cp -r Contents ReactNative.docset
cp src/icon* ReactNative.docset
