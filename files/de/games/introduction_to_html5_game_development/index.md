---
title: Einführung in die HTML-Spielentwicklung
slug: Games/Introduction_to_HTML5_Game_Development
l10n:
  sourceCommit: e72890bafe775a38620def9a74beda8cf9c47411
---

{{GamesSidebar}}

## Vorteile

1. Spiele, die mit HTML entwickelt wurden, funktionieren auf Smartphones, Tablets, PCs und Smart-TVs.
2. Bewerben und fördern Sie Ihr Spiel im gesamten Web sowie in anderen Medien.
3. Zahlungen. Verlangen Sie, was Sie möchten, und verwenden Sie jeden Zahlungsabwicklungsdienst, den Sie mögen.
4. Aktualisieren Sie Ihr Spiel, wann immer Sie möchten.
5. Sammeln Sie Ihre eigenen Analysen!
6. Treten Sie in engeren Kontakt mit Ihren Kunden.
7. Spieler können das Spiel überall und jederzeit spielen.

## Web-Technologien

<table class="no-markdown standard-table">
  <caption>Web-Technologien in der Spielentwicklung und deren Funktion</caption>
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
        <a href="/de/docs/Web/JavaScript">JavaScript</a> (oder C/C++ unter Verwendung von
        <a href="https://github.com/emscripten-core/emscripten/wiki">Emscripten</a> zur
        Kompilierung in JavaScript)
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
  - : Versenden und Empfangen jeder Art von Daten von einem Webserver, wie z.B. das Herunterladen neuer Spiellevel und Grafiken bis hin zur Übertragung von nicht-echtzeitlichen Spielstatusinformationen.
- [Full Screen API](/de/docs/Web/API/Fullscreen_API)
  - : Vollbild-Spielbarkeit.
- [Gamepad API](/de/docs/Web/API/Gamepad_API/Using_the_Gamepad_API)
  - : Nutzen Sie Gamepads oder andere Spielcontroller.
- [HTML](/de/docs/Web/HTML) und [CSS](/de/docs/Web/CSS)
  - : Bauen, stylen und layouten Sie die Benutzeroberfläche Ihres Spiels.
- [HTML audio](/de/docs/Web/HTML/Element/audio)
  - : Spielen Sie einfach Soundeffekte und Musik ab.
- [IndexedDB](/de/docs/Web/API/IndexedDB_API)
  - : Speichern Sie Benutzerdaten auf dem eigenen Computer oder Gerät.
- [JavaScript](/de/docs/Web/JavaScript)
  - : Schnelle Web-Programmiersprache, um den Code für Ihr Spiel zu schreiben.
    Um Ihre bestehenden Spiele einfach zu portieren, verwenden Sie [Emscripten](https://github.com/emscripten-core/emscripten/wiki) oder [Asm.js](http://asmjs.org/spec/latest/)
- [Pointer Lock API](/de/docs/Web/API/Pointer_Lock_API)
  - : Sperren Sie die Maus oder ein anderes Zeigegerät innerhalb der Benutzeroberfläche Ihres Spiels.
- [SVG](/de/docs/Web/SVG) (Scalable Vector Graphics)
  - : Erstellen Sie Vektorgrafiken, die sich unabhängig von Größe oder Auflösung des Benutzerdisplays reibungslos skalieren lassen.
- [Typed Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays)
  - : Greifen Sie auf rohe Binärdaten innerhalb von JavaScript zu; Manipulieren Sie GL-Texturen, Spieldaten oder alles andere.
- [Web Audio API](/de/docs/Web/API/Web_Audio_API)
  - : Steuerung der Wiedergabe, Synthese und Manipulation von Audio in Echtzeit.
- [WebGL](/de/docs/Web/API/WebGL_API)
  - : Erstellen Sie hochleistungsfähige, hardwarebeschleunigte 3D- (und 2D-)Grafiken. [OpenGL ES](https://www.khronos.org/opengles/) 2.0.
- [WebRTC](/de/docs/Web/API/WebRTC_API)
  - : Echtzeitkommunikation zur Steuerung von Audio- und Videodaten, einschließlich Videokonferenzen und Übertragung anderer Anwendungsdaten zwischen zwei Benutzern, wie z.B. Chat.
- [WebSockets](/de/docs/Web/API/WebSockets_API)
  - : Verbinden Sie Ihre App oder Website mit einem Server, um Daten in Echtzeit hin und her zu übertragen. Perfekt für Multiplayer-Gaming-Action, Chat-Dienste und dergleichen.
- [Web Workers](/de/docs/Web/API/Web_Workers_API/Using_web_workers)
  - : Starten Sie Hintergrund-Threads, die ihren eigenen JavaScript-Code für Multicore-Prozessoren ausführen.
