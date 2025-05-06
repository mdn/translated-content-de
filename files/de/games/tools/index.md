---
title: Werkzeuge für die Spieleentwicklung
slug: Games/Tools
l10n:
  sourceCommit: 3de81901850e08f1c6bbc47f6cf9f6e458317102
---

{{GamesSidebar}}

Auf dieser Seite finden Sie Links zu unseren Artikeln über Werkzeuge für die Spieleentwicklung, die letztendlich Frameworks, Compiler und Debugging-Werkzeuge abdecken sollen.

- [asm.js](/de/docs/Games/Tools/asm.js)
  - : asm.js ist ein sehr begrenzter Teil der JavaScript-Sprache, der erheblich optimiert werden kann und in einer "Ahead-of-Time" (AOT) Compiler-Engine für eine wesentlich schnellere Leistung als die übliche JavaScript-Leistung ausgeführt werden kann. Das ist natürlich großartig für Spiele.
- [Emscripten](https://github.com/emscripten-core/emscripten/wiki)
  - : Ein LLVM-zu-JavaScript-Compiler; Mit Emscripten können Sie C++ und andere Sprachen, die zu LLVM-Bytecode kompiliert werden können, in leistungsstarkes JavaScript kompilieren. Das ist ein hervorragendes Werkzeug, um Anwendungen ins Web zu portieren! Es gibt ein [nützliches Emscripten-Tutorial](https://github.com/emscripten-core/emscripten/wiki/Tutorial) im Wiki.
- [Firefox Profiler](https://profiler.firefox.com/docs/#/)
  - : Der Firefox Profiler ermöglicht es Ihnen, Ihren Code zu profilieren, um herauszufinden, wo Ihre Leistungsprobleme liegen, damit Sie Ihr Spiel mit Höchstgeschwindigkeit ausführen können.
- Werkzeugkette zur Entwicklung und Fehlersuche bei Spielen

  - : Wie unterscheidet sich dies von normalem Web-App-Debugging? Welche speziellen Werkzeuge stehen zur Verfügung? Vieles davon wird von Will in [tools](https://firefox-source-docs.mozilla.org/devtools-user/index.html) abgedeckt, aber hier sollten wir eine Art praktisches Toolchain-Tutorial für die Fehlersuche bei Spielen bereitstellen, mit Links zu Wills Sachen:

    - Überblick über grundlegende Werkzeuge
    - [Shader-Editor](https://firefox-source-docs.mozilla.org/devtools-user/shader_editor/index.html)
    - Leistungswerkzeuge (noch in Produktion, geschätzt Anfang 2014)

## Web-Technologien

<table class="no-markdown standard-table">
  <caption>Web-Technologien in der Spieleentwicklung und ihre Funktion</caption>
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
        <a href="/de/docs/Web/API/Touch_events">Touch Events</a>,
        <a href="/de/docs/Web/API/Gamepad_API/Using_the_Gamepad_API"
          >Gamepad API</a
        >, Gerätesensoren, <a href="/de/docs/Web/API/WebRTC_API">WebRTC</a>,
        <a href="/de/docs/Web/API/Fullscreen_API">Fullscreen-API</a>,
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
      <td><strong>Speicher</strong></td>
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
  - : Senden und Empfangen jeder Art von Daten von einem Webserver, z. B. Herunterladen neuer Spielebenen und Grafiken bis hin zur Übertragung von Echtzeit-Spielstatusinformationen hin und her.
- [Fullscreen-API](/de/docs/Web/API/Fullscreen_API)
  - : Spiel im Vollbildmodus.
- [Gamepad API](/de/docs/Web/API/Gamepad_API/Using_the_Gamepad_API)
  - : Verwenden Sie Gamepads oder andere Spielcontroller.
- [HTML](/de/docs/Web/HTML) und [CSS](/de/docs/Web/CSS)
  - : Bauen, gestalten und layouten Sie die Benutzeroberfläche Ihres Spiels.
- [HTML audio](/de/docs/Web/HTML/Reference/Elements/audio)
  - : Einfach Soundeffekte und Musik abspielen.
- [IndexedDB](/de/docs/Web/API/IndexedDB_API)
  - : Speichern Sie Benutzerdaten auf deren eigenem Computer oder Gerät.
- [JavaScript](/de/docs/Web/JavaScript)
  - : Schnelle Web-Progammier-Sprache, um den Code Ihres Spiels zu schreiben.
    Um Ihre bestehenden Spiele einfach zu portieren [Emscripten](https://github.com/emscripten-core/emscripten/wiki) oder [Asm.js](http://asmjs.org/spec/latest/)
- [Pointer Lock API](/de/docs/Web/API/Pointer_Lock_API)
  - : Sperren der Maus oder eines anderen Zeigegeräts innerhalb der Benutzeroberfläche Ihres Spiels.
- [SVG](/de/docs/Web/SVG) (Scalable Vector Graphics)
  - : Erstellen Sie Vektorgrafiken, die unabhängig von der Größe oder Auflösung des Displays des Benutzers reibungslos skaliert werden.
- [Typed Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays)
  - : Zugriff auf rohe Binärdaten innerhalb von JavaScript; Manipulation von GL-Texturen, Spieldaten oder allem anderen.
- [Web Audio API](/de/docs/Web/API/Web_Audio_API)
  - : Steuerung der Wiedergabe, Synthese und Manipulation von Audio in Echtzeit.
- [WebGL](/de/docs/Web/API/WebGL_API)
  - : Erstellen Sie leistungsstarke, hardwarebeschleunigte 3D- (und 2D-) Grafiken. [OpenGL ES](https://www.khronos.org/opengles/) 2.0.
- [WebRTC](/de/docs/Web/API/WebRTC_API)
  - : Echtzeitkommunikation zur Steuerung von Audio- und Videodaten, einschließlich Videokonferenzen und Übertragung anderer Anwendungsdaten zwischen zwei Benutzern, z. B. Chat.
- [WebSockets](/de/docs/Web/API/WebSockets_API)
  - : Verbinden Sie Ihre App oder Website mit einem Server, um Daten in Echtzeit hin und her zu übertragen. Perfekt für Multiplayer-Spielaktionen, Chat-Dienste und so weiter.
- [Web Workers](/de/docs/Web/API/Web_Workers_API/Using_web_workers)
  - : Erstellen Sie Hintergrund-Threads, die ihren eigenen JavaScript-Code für Multicore-Prozessoren ausführen.
