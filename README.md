ng g component modal/InsertCoin

ng g page maintainer
ng g page machinery


ionic cordova build android --prod --release && 
jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore ../vmcs.keystore  platforms/android/app/build/outputs/apk/release/app-release-unsigned.apk vmcs &&
rm -f platforms/android/app/build/outputs/apk/release/android-release-signed.apk &&
./zipalign -v 4 platforms/android/app/build/outputs/apk/release/app-release-unsigned.apk platforms/android/app/build/outputs/apk/release/android-release-signed.apk