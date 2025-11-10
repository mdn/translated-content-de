---
title: Werkzeuge für die Spieleentwicklung
slug: Games/Tools
l10n:
  sourceCommit: 21addd31954b2629ab3e186dacdf7edca813dc7d
---

Auf dieser Seite finden Sie Links zu unseren Artikeln über Spieleentwicklungstools, die sich schließlich mit Frameworks, Compilern und Debugging-Tools befassen sollen.

- [asm.js](/de/docs/Games/Tools/asm.js)
  - : asm.js ist ein sehr eingeschränkter Teil der JavaScript-Sprache, der signifikant optimiert werden kann und in einer Vorab-Compile-Engine für viel schnellere Leistung als die typische JavaScript-Leistung ausgeführt werden kann. Das ist natürlich großartig für Spiele.
- [Emscripten](https://github.com/emscripten-core/emscripten/wiki)
  - : Ein LLVM-zu-JavaScript-Compiler; mit Emscripten können Sie C++ und andere Sprachen, die in LLVM-Bytecode kompiliert werden können, in leistungsstarkes JavaScript kompilieren. Dies ist ein ausgezeichnetes Werkzeug, um Anwendungen ins Web zu portieren! Es gibt ein [nützliches Emscripten-Tutorial](https://github.com/emscripten-core/emscripten/wiki/Tutorial) im Wiki.
- [Firefox Profiler](https://profiler.firefox.com/docs/#/)
  - : Der Firefox Profiler ermöglicht es Ihnen, Ihren Code zu profilieren, um herauszufinden, wo Ihre Leistungsprobleme liegen, damit Sie Ihr Spiel auf Höchstgeschwindigkeit bringen können.
- Toolchain für die Entwicklung und das Debuggen von Spielen
  - : Wie unterscheidet sich dies vom normalen Debuggen von Web-Apps? Welche spezialisierten Tools sind verfügbar? Vieles davon wird von Will in [tools](https://firefox-source-docs.mozilla.org/devtools-user/index.html) behandelt, aber hier sollten wir eine Art praktisches Toolchain-Tutorial für das Debuggen von Spielen bereitstellen, mit Links zu Wills Inhalten:
    - Grundlegende Werkzeuge Übersicht
    - [Shader-Editor](https://firefox-source-docs.mozilla.org/devtools-user/shader_editor/index.html)
    - Leistungswerkzeuge (noch in Produktion, voraussichtlich Anfang 2014)

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
        <a href="/de/docs/Web/API/Fullscreen_API">Vollbild-API</a>,
        <a href="/de/docs/Web/API/Pointer_Lock_API">Pointer Lock API</a>
      </td>
    </tr>
    <tr>
      <td><strong>Sprache</strong></td>
      <td>
        <a href="/de/docs/Web/JavaScript">JavaScript</a> (oder C/C++ unter Verwendung von
        <a href="https://github.com/emscripten-core/emscripten/wiki">Emscripten</a> zum Kompilieren in JavaScript)
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
  - : Senden und Empfangen von beliebigen Daten, die Sie von einem Webserver wünschen, wie das Herunterladen neuer Spielebenen und Grafiken oder das Übertragen von nicht-echtzeitspiel-spezifischen Informationen hin und her.
- [Vollbild-API](/de/docs/Web/API/Fullscreen_API)
  - : Vollbild-Spielerlebnis.
- [Gamepad API](/de/docs/Web/API/Gamepad_API/Using_the_Gamepad_API)
  - : Verwendung von Gamepads oder anderen Spielsteuerungen.
- [HTML](/de/docs/Web/HTML) und [CSS](/de/docs/Web/CSS)
  - : Aufbau, Gestaltung und Layout der Benutzeroberfläche Ihres Spiels.
- [HTML-Audio](/de/docs/Web/HTML/Reference/Elements/audio)
  - : Einfaches Abspielen einfacher Soundeffekte und Musik.
- [IndexedDB](/de/docs/Web/API/IndexedDB_API)
  - : Speichern von Benutzerdaten auf ihrem eigenen Computer oder Gerät.
- [JavaScript](/de/docs/Web/JavaScript)
  - : Schnelle Web-Programmiersprache zur Erstellung des Codes für Ihr Spiel.
    Zum einfachen Portieren Ihrer vorhandenen Spiele [Emscripten](https://github.com/emscripten-core/emscripten/wiki) oder [Asm.js](http://asmjs.org/spec/latest/)
- [Pointer Lock API](/de/docs/Web/API/Pointer_Lock_API)
  - : Sperren der Maus oder eines anderen Zeigegeräts innerhalb der Benutzeroberfläche Ihres Spiels.
- [SVG](/de/docs/Web/SVG) (Scalable Vector Graphics)
  - : Erstellung von Vektorgrafiken, die unabhängig von Größe oder Auflösung des Benutzerbildschirms nahtlos skaliert werden.
- [Typed Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays)
  - : Zugriff auf rohe Binärdaten innerhalb von JavaScript; Manipulation von GL-Texturen, Spieledaten oder allem anderen.
- [Web Audio API](/de/docs/Web/API/Web_Audio_API)
  - : Steuerung der Wiedergabe, Synthese und Manipulation von Audio in Echtzeit.
- [WebGL](/de/docs/Web/API/WebGL_API)
  - : Erstellung von leistungsstarken, hardwarebeschleunigten 3D- (und 2D-)Grafiken. [OpenGL ES](https://www.khronos.org/opengles/) 2.0.
- [WebRTC](/de/docs/Web/API/WebRTC_API)
  - : Echtzeitkommunikation zur Steuerung von Audio- und Videodaten, einschließlich Videokonferenzen und Übertragung anderer Anwendungsdaten zwischen zwei Benutzern, z. B. Chat.
- [WebSockets](/de/docs/Web/API/WebSockets_API)
  - : Verbindung Ihrer App oder Website mit einem Server zur Übertragung von Daten in Echtzeit hin und her. Ideal für Mehrspieler-Spiele, Chat-Dienste und vieles mehr.
- [Web Workers](/de/docs/Web/API/Web_Workers_API/Using_web_workers)
  - : Starten von Hintergrund-Threads, die ihren eigenen JavaScript-Code für Multicore-Prozessoren ausführen.

## Native Spiele ins Web portieren

Wenn Sie ein nativer Entwickler sind (zum Beispiel Spiele in C++ schreiben) und daran interessiert sind, wie Sie Ihre Spiele ins Web portieren können, sollten Sie mehr über unser [Emscripten](https://emscripten.org/index.html)-Werkzeug erfahren — dies ist ein LLVM-zu-JavaScript-Compiler, der LLVM-Bytecode (z. B. generiert aus C/C++ mit Clang oder aus einer anderen Sprache) in [asm.js](/de/docs/Games/Tools/asm.js) kompiliert, das im Web ausgeführt werden kann.

Um anzufangen, sehen Sie:

- [Über Emscripten](https://emscripten.org/docs/introducing_emscripten/about_emscripten.html) für eine Einführung einschließlich einer Übersicht.
- [Download und Installation](https://emscripten.org/docs/getting_started/downloads.html) für die Installation der Toolchain.
- [Emscripten Tutorial](https://emscripten.org/docs/getting_started/Tutorial.html) für ein Tutorial, das Ihnen zeigt, wie Sie loslegen können.
