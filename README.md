# Linkshelf

A private link library with groups and subgroups, thumbnails, notes, tags, favourites, search and a built-in YouTube player.
It is hosted free on GitHub Pages, and your links are stored in a free Firebase (Firestore) database behind Google sign-in.

## Turning on the cloud database (free Firebase Spark plan)

1. Go to https://console.firebase.google.com, click **Add project**, give it a name (Google Analytics is not needed).
2. **Build → Authentication → Get started → Sign-in method → Google → Enable → Save.**
3. **Authentication → Settings → Authorized domains → Add domain** and enter `<your-github-username>.github.io`.
4. **Build → Firestore Database → Create database** (production mode, any location). Then open the **Rules** tab, paste in the contents of `firestore.rules`, and click **Publish**.
5. **Project settings (gear) → General → Your apps → Web (`</>`)**: register an app, then copy the `firebaseConfig` object.
6. Paste that object into `config.js` in place of `null`, then commit and push.

Until step 6 is done, the site still works and saves links in your browser only.

## Moving your links over from Quiet Reel

1. Open the old `quiet-reel.html` in the browser you normally use with it.
2. Press **F12**, open the **Console** tab, type `copy(localStorage.getItem("quietreel.v2"))`, and press Enter.
3. In Linkshelf, click **Import**, paste with Ctrl+V, pick a group, and click **Import**.
