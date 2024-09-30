---
title: Einrichtung
slug: Web/API/WebRTC_API/Build_a_phone_with_peerjs/Setup
l10n:
  sourceCommit: 3f7036e4dbe83e50c873c42a88a5a7d1d80a478e
---

{{DefaultAPISidebar("WebRTC")}}

{{PreviousMenuNext("Web/API/WebRTC_API/Build_a_phone_with_peerjs", "Web/API/WebRTC_API/Build_a_phone_with_peerjs/Build_the_server")}}

Fangen wir also damit an, die Grundlage für unsere WebRTC-gestützte Telefon-App einzurichten.

1. Finden Sie zunächst einen geeigneten Platz in Ihrer lokalen Dateistruktur und führen Sie `mkdir audio_app` aus und dann `cd audio_app`, um ein Verzeichnis für Ihre App zu erstellen und es zu betreten.
2. Erstellen Sie als Nächstes eine neue App, indem Sie `yarn init` ausführen. Folgen Sie den Eingabeaufforderungen und geben Sie einen Namen, eine Version, eine Beschreibung usw. für Ihr Projekt an.
3. Installieren Sie anschließend die erforderlichen Abhängigkeiten mit den folgenden Befehlen:

   - [Express](https://expressjs.com/): `yarn add express`
   - [PeerJS](https://peerjs.com/docs/): `yarn add peerjs`
   - [Peer](https://github.com/peers/peerjs-server): `yarn add peer`

   Peer wird für den Peerserver verwendet und PeerJS wird verwendet, um auf die PeerJS-API und das Framework zuzugreifen. Ihre `package.json` sollte in etwa so aussehen, wenn Sie die Abhängigkeiten fertig installiert haben:

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

4. Um die Einrichtung abzuschließen, sollten Sie die folgenden [HTML](https://gist.github.com/lolaodelola/578d692e4700dfe2c9d239c80bbdbabc)- und [CSS](https://gist.github.com/lolaodelola/b4498288b86ddce995603546a64abb29)-Dateien in das Stammverzeichnis Ihres Projektordners kopieren. Sie können beide Dateien 'index' nennen, sodass die HTML-Datei 'index.html' und die CSS-Datei 'index.css' heißen. Sie werden diese in den folgenden Artikeln kaum ändern müssen.

{{PreviousMenuNext("Web/API/WebRTC_API/Build_a_phone_with_peerjs", "Web/API/WebRTC_API/Build_a_phone_with_peerjs/Build_the_server")}}
