---
title: Einführung in die HTML-Spielentwicklung
slug: Games/Introduction_to_HTML5_Game_Development
l10n:
  sourceCommit: e72890bafe775a38620def9a74beda8cf9c47411
---

{{GamesSidebar}}

## Vorteile

1. Spiele, die mit HTML erstellt wurden, funktionieren auf Smartphones, Tablets, PCs und Smart-TVs.
2. Werben und bewerben Sie Ihr Spiel im gesamten Web sowie in anderen Medien.
3. Zahlungen. Verlangen Sie, was Sie möchten, und verwenden Sie jeden beliebigen Zahlungsdienst.
4. Aktualisieren Sie Ihr Spiel wann immer Sie möchten.
5. Sammeln Sie Ihre eigenen Analysen!
6. Verbinden Sie sich enger mit Ihren Kunden.
7. Spieler können das Spiel überall und jederzeit spielen.

## Webtechnologien

<table class="no-markdown standard-table">
  <caption>Webtechnologien in der Spieleentwicklung und ihre Funktion</caption>
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
      <td><strong>Grafik</strong></td>
      <td>
        <a href="/de/docs/Web/API/WebGL_API">WebGL</a> (<a
          href="https://www.khronos.org/opengles/"
          >OpenGL ES</a
        >
        2.0)
      </td>
    </tr>
    <tr>
      <td><strong>Eingabe</strong></td>
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
  - : Senden und Empfangen jeglicher Art von Daten von einem Webserver, wie das Herunterladen neuer Spielebenen und Grafiken oder das Übertragen von nicht-zeitkritischen Spielstatusinformationen hin und her.
- [Full Screen API](/de/docs/Web/API/Fullscreen_API)
  - : Vollbildspielmodus.
- [Gamepad API](/de/docs/Web/API/Gamepad_API/Using_the_Gamepad_API)
  - : Verwendung von Gamepads oder anderen Spielsteuerungen.
- [HTML](/de/docs/Web/HTML) und [CSS](/de/docs/Web/CSS)
  - : Erstellen, gestalten und gestalten Sie die Benutzeroberfläche Ihres Spiels.
- [HTML audio](/de/docs/Web/HTML/Element/audio)
  - : Einfaches Abspielen von Soundeffekten und Musik.
- [IndexedDB](/de/docs/Web/API/IndexedDB_API)
  - : Speichern von Benutzerdaten auf ihrem eigenen Computer oder Gerät.
- [JavaScript](/de/docs/Web/JavaScript)
  - : Schnelle Web-Programmiersprache zur Erstellung des Codes für Ihr Spiel.
    Zum einfachen Portieren Ihrer bestehenden Spiele [Emscripten](https://github.com/emscripten-core/emscripten/wiki) oder [Asm.js](http://asmjs.org/spec/latest/)
- [Pointer Lock API](/de/docs/Web/API/Pointer_Lock_API)
  - : Sperren der Maus oder eines anderen Zeigegeräts innerhalb der Benutzeroberfläche Ihres Spiels.
- [SVG](/de/docs/Web/SVG) (Scalable Vector Graphics)
  - : Erstellen Sie Vektorgrafiken, die unabhängig von der Größe oder Auflösung des Benutzerdisplays reibungslos skalieren.
- [Typed Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays)
  - : Zugriff auf rohe Binärdaten innerhalb von JavaScript; Manipulieren von GL-Texturen, Spieldaten oder anderen Daten.
- [Web Audio API](/de/docs/Web/API/Web_Audio_API)
  - : Steuerung der Wiedergabe, Synthese und Manipulation von Audio in Echtzeit.
- [WebGL](/de/docs/Web/API/WebGL_API)
  - : Erstellen Sie leistungsstarke, hardware-beschleunigte 3D- (und 2D-) Grafiken. [OpenGL ES](https://www.khronos.org/opengles/) 2.0.
- [WebRTC](/de/docs/Web/API/WebRTC_API)
  - : Echtzeitkommunikation zur Steuerung von Audio- und Videodaten, einschließlich Telefonkonferenzen und Übertragung anderer Anwendungsdaten zwischen zwei Benutzern wie Chat.
- [WebSockets](/de/docs/Web/API/WebSockets_API)
  - : Verbinden Sie Ihre App oder Website mit einem Server, um Daten in Echtzeit hin und her zu übertragen. Perfekt für Multiplayer-Spielaktionen, Chat-Dienste und so weiter.
- [Web Workers](/de/docs/Web/API/Web_Workers_API/Using_web_workers)
  - : Starten von Hintergrundthreads, die ihren eigenen JavaScript-Code für Mehrkern-Prozessoren ausführen.
