---
title: Einrichtung
slug: Web/API/WebRTC_API/Build_a_phone_with_peerjs/Setup
l10n:
  sourceCommit: c49748a0ce4fdf77427e29cb6edbca8953a514e7
---

{{DefaultAPISidebar("WebRTC")}}

{{PreviousMenuNext("Web/API/WebRTC_API/Build_a_phone_with_peerjs", "Web/API/WebRTC_API/Build_a_phone_with_peerjs/Build_the_server")}}

Lassen Sie uns mit der Einrichtung der Grundlage für unsere WebRTC-gestützte Telefon-App beginnen.

1. Suchen Sie zuerst eine geeignete Stelle in Ihrer lokalen Dateistruktur und führen Sie `mkdir audio_app` und dann `cd audio_app` aus, um ein Verzeichnis für Ihre App zu erstellen und dieses zu betreten.
2. Erstellen Sie als Nächstes eine neue App, indem Sie `yarn init` ausführen. Folgen Sie den Eingabeaufforderungen und geben Sie einen Namen, eine Version, eine Beschreibung usw. für Ihr Projekt an.
3. Installieren Sie als Nächstes die erforderlichen Abhängigkeiten mit den folgenden Befehlen:
   - [Express](https://expressjs.com/): `yarn add express`
   - [PeerJS](https://peerjs.com/): `yarn add peerjs`
   - [Peer](https://github.com/peers/peerjs-server): `yarn add peer`

   Peer wird für den Peer-Server verwendet und PeerJS wird verwendet, um auf die PeerJS-API und das Framework zuzugreifen. Ihr `package.json` sollte ungefähr so aussehen, wenn Sie die Abhängigkeiten fertig installiert haben:

   ```json
   {
     "name": "audio_app",
     "version": "1.0.0",
     "description": "An audio app using WebRTC",
     "scripts": {
       "start": "node server.js",
       "test": "echo \"Error: no test specified\" && exit 1"
     },
     "keywords": [],
     "author": "Lola Odelola",
     "license": "MIT",
     "dependencies": {
       "express": "^4.17.1",
       "peer": "^0.5.3",
       "peerjs": "^1.3.1"
     }
   }
   ```

4. Um die Einrichtung abzuschließen, sollten Sie die folgenden HTML- und CSS-Dateien in das Stammverzeichnis Ihres Projektordners kopieren. Sie können beide Dateien `index` nennen, sodass die HTML-Datei `index.html` und die CSS-Datei `index.css` sein wird. Sie müssen diese in den nachfolgenden Artikeln nicht wesentlich ändern.

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Lola's Web Phone!</title>
    <meta
      property="og:description"
      content="Cast your computer to your devices as a teleprompter" />

    <!-- import the webpage's stylesheet -->
    <link rel="stylesheet" href="/index.css" />
    <!-- import the javascript -->
    <script src="script.js" defer></script>
    <script src="https://unpkg.com/peerjs@1.3.1/dist/peerjs.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/davidshimjs-qrcodejs@0.0.2/qrcode.min.js"></script>
  </head>
  <body>
    <div class="container">
      <h1>Phone a friend</h1>
      <p id="cast-status" class="big">Connecting...</p>
      <p>Please use headphones!</p>
      <button class="call-btn">Call</button>
      <section class="call-container" hidden>
        <div class="audio-container">
          <p>You're automatically muted, unmute yourself!</p>
          <audio controls id="remoteAudio" muted="true"></audio>
          <audio controls id="localAudio" muted="true"></audio>
        </div>
        <button class="hangup-btn">Hang up</button>
      </section>
    </div>

    <section class="modal" hidden>
      <div id="close">close</div>
      <div class="inner-modal">
        <label>Give us your friend's device ID</label>
        <input placeholder="Enter your friend's device ID" aria-colcount="10" />
        <button class="connect-btn">Connect</button>
      </div>
    </section>
  </body>
</html>
```

```css
*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  color: darkslategrey;
  display: flex;
  align-items: center;
  justify-content: center;
  background: antiquewhite;
}

h1 {
  font-size: 6rem;
  letter-spacing: 0.2rem;
  margin-bottom: auto;
}

p {
  text-align: center;
  font-size: 2rem;
}

button {
  background-color: light-dark(white, black);
  padding: 1rem 10rem;
  border-radius: 3rem;
  border: none;
  cursor: pointer;
}

.call-btn {
  background-color: darkslategrey;
  color: antiquewhite;
  font-size: 3rem;
  margin-left: 7rem;
}

.hangup-btn {
  background-color: darkred;
  color: white;
  font-size: 1.5rem;
  margin-left: 6rem;
  margin-top: 4rem;
}

.modal {
  padding: 5rem;
  background-color: whitesmoke;
  border-radius: 2rem;
  width: 40rem;
  height: 20rem;
}

.inner-modal {
  text-align: center;
}

.modal label {
  font-size: 1.5rem;
}
.modal input {
  margin: 1rem 7rem 3rem;
  display: block;
  padding: 1rem;
  border-radius: 3rem;
  box-shadow: 0 0 15px 4px rgb(0 0 0 / 0.19);
  border: none;
  width: 50%;
}

.connect-btn {
  background-color: #0c1d1d;
  color: whitesmoke;
  font-size: 1.5rem;
}
```

{{PreviousMenuNext("Web/API/WebRTC_API/Build_a_phone_with_peerjs", "Web/API/WebRTC_API/Build_a_phone_with_peerjs/Build_the_server")}}
