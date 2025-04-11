---
title: Einführung in die HTML-Spielentwicklung
slug: Games/Introduction_to_HTML5_Game_Development
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{GamesSidebar}}

## Vorteile

1. Spiele, die mit HTML erstellt wurden, funktionieren auf Smartphones, Tablets, PCs und Smart TVs.
2. Bewerben und vermarkten Sie Ihr Spiel im gesamten Web sowie in anderen Medien.
3. Zahlungen. Erheben Sie, was Sie möchten, und nutzen Sie den Zahlungsabwicklungsservice, den Sie bevorzugen.
4. Aktualisieren Sie Ihr Spiel, wann immer Sie wollen.
5. Sammeln Sie Ihre eigenen Analysen!
6. Treten Sie in engeren Kontakt mit Ihren Kunden.
7. Spieler können das Spiel überall und jederzeit spielen.

## Webtechnologien

<table class="no-markdown standard-table">
  <caption>Webtechnologien in der Spielentwicklung und ihre Funktion</caption>
  <thead>
    <tr>
      <th scope="col"><strong>Funktion</strong></th>
      <th scope="col"><strong>Technologie</strong></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Audio</strong></td>
      <td><a href="/de/docs/Web/API/Web_Audio_API">Web Audio API</a></td>
    </tr>
    <tr>
      <td><strong>Grafiken</strong></td>
      <td>
        <a href="/de/docs/Web/API/WebGL_API">WebGL</a> (<a
          href="https://www.khronos.org/opengles/"
          >OpenGL ES</a
        >
        2.0)
      </td>
    </tr>
    <tr>
      <td><strong>Eingaben</strong></td>
      <td>
        <a href="/de/docs/Web/API/Touch_events">Touch events</a>,
        <a href="/de/docs/Web/API/Gamepad_API/Using_the_Gamepad_API"
          >Gamepad API</a
        >, Gerätesensoren, <a href="/de/docs/Web/API/WebRTC_API">WebRTC</a>,
        <a href="/de/docs/Web/API/Fullscreen_API">Full Screen API</a>,
        <a href="/de/docs/Web/API/Pointer_Lock_API">Pointer Lock API</a>
      </td>
    </tr>
    <tr>
      <td><strong>Sprache</strong></td>
      <td>
        <a href="/de/docs/Web/JavaScript">JavaScript</a> (oder C/C++ mit
        <a href="https://github.com/emscripten-core/emscripten/wiki">Emscripten</a> zu
        JavaScript kompilieren)
      </td>
    </tr>
    <tr>
      <td><strong>Netzwerk</strong></td>
      <td>
        <a href="/de/docs/Web/API/WebRTC_API">WebRTC</a> und/oder
        <a href="/de/docs/Web/API/WebSockets_API">WebSockets</a>
      </td>
    </tr>
    <tr>
      <td><strong>Speicherung</strong></td>
      <td>
        <a href="/de/docs/Web/API/IndexedDB_API">IndexedDB</a> oder die "Cloud"
      </td>
    </tr>
    <tr>
      <td><strong>Web</strong></td>
      <td>
        <a href="/de/docs/Web/HTML">HTML</a>,
        <a href="/de/docs/Web/CSS">CSS</a>,
        <a href="/de/docs/Web/SVG">SVG</a> (und vieles mehr!)
      </td>
    </tr>
  </tbody>
</table>

- [Fetch API](/de/docs/Web/API/Fetch_API)
  - : Senden und Empfangen von beliebigen Daten von einem Webserver, wie das Herunterladen neuer Spielebenen und -grafiken sowie das Übertragen von nicht echtzeitbasierten Spielstatusinformationen hin und her.
- [Full Screen API](/de/docs/Web/API/Fullscreen_API)
  - : Vollbild-Spielerlebnis.
- [Gamepad API](/de/docs/Web/API/Gamepad_API/Using_the_Gamepad_API)
  - : Verwendung von Gamepads oder anderen Spielcontrollern.
- [HTML](/de/docs/Web/HTML) und [CSS](/de/docs/Web/CSS)
  - : Erstellen, gestalten und layouten Sie die Benutzeroberfläche Ihres Spiels.
- [HTML-Audio](/de/docs/Web/HTML/Reference/Elements/audio)
  - : Einfaches Abspielen von Soundeffekten und Musik.
- [IndexedDB](/de/docs/Web/API/IndexedDB_API)
  - : Benutzerbezogene Daten auf deren eigenem Computer oder Gerät speichern.
- [JavaScript](/de/docs/Web/JavaScript)
  - : Schnelle Web-Programmiersprache zum Schreiben des Codes für Ihr Spiel.
    Um bestehende Spiele einfach zu portieren [Emscripten](https://github.com/emscripten-core/emscripten/wiki) oder [Asm.js](http://asmjs.org/spec/latest/)
- [Pointer Lock API](/de/docs/Web/API/Pointer_Lock_API)
  - : Die Maus oder ein anderes Zeigegerät innerhalb der Benutzeroberfläche Ihres Spiels sperren.
- [SVG](/de/docs/Web/SVG) (Scalable Vector Graphics)
  - : Erstellen von Vektorgrafiken, die unabhängig von Größe oder Auflösung des Displays des Benutzers gleichbleibende Qualität bieten.
- [Typed Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays)
  - : Zugriff auf rohe Binärdaten aus JavaScript heraus; Manipulation von GL-Texturen, Spieldaten oder anderen Informationen.
- [Web Audio API](/de/docs/Web/API/Web_Audio_API)
  - : Steuerung der Wiedergabe, Synthese und Manipulation von Audio in Echtzeit.
- [WebGL](/de/docs/Web/API/WebGL_API)
  - : Erstellung von hochleistungsfähigen, hardwarebeschleunigten 3D- (und 2D-)Grafiken. [OpenGL ES](https://www.khronos.org/opengles/) 2.0.
- [WebRTC](/de/docs/Web/API/WebRTC_API)
  - : Echtzeitkommunikation zur Kontrolle von Audio- und Videodaten, inklusive Telefonkonferenzen und Übertragung anderer Anwendungsdaten zwischen zwei Benutzern, wie Chat.
- [WebSockets](/de/docs/Web/API/WebSockets_API)
  - : Verbinden Sie Ihre App oder Website mit einem Server, um Daten in Echtzeit zu übertragen. Ideal für Multiplayer-Spiele, Chat-Dienste usw.
- [Web Workers](/de/docs/Web/API/Web_Workers_API/Using_web_workers)
  - : Starten Sie Hintergrund-Threads, die ihren eigenen JavaScript-Code für Mehrkernprozessoren ausführen.
