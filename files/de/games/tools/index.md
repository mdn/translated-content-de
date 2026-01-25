---
title: Werkzeuge für die Spieleentwicklung
slug: Games/Tools
l10n:
  sourceCommit: 06e6e54baef7032c4e81ca93291fde0a0585de8b
---

Auf dieser Seite finden Sie Links zu unseren Artikeln über Spieleentwicklungswerkzeuge, die letztlich Frameworks, Compiler und Debugging-Tools abdecken sollen.

- [asm.js](/de/docs/Games/Tools/asm.js)
  - : asm.js ist ein sehr begrenzter Teil der JavaScript-Sprache, der erheblich optimiert werden kann und in einem Ahead-of-Time (AOT) Compiler-Engines viel schneller ausgeführt werden kann als die typische JavaScript-Performance. Dies ist natürlich großartig für Spiele.
- [Emscripten](https://github.com/emscripten-core/emscripten/wiki)
  - : Ein LLVM zu JavaScript Compiler; mit Emscripten können Sie C++ und andere Sprachen, die zu LLVM-Bytecode kompiliert werden können, in hochleistungsfähiges JavaScript umwandeln. Dies ist ein hervorragendes Werkzeug, um Anwendungen ins Web zu portieren! Es gibt ein [nützliches Emscripten-Tutorial](https://github.com/emscripten-core/emscripten/wiki/Tutorial) im Wiki.
- [Firefox Profiler](https://profiler.firefox.com/docs/#/)
  - : Der Firefox Profiler ermöglicht es Ihnen, Ihren Code zu profilieren, um herauszufinden, wo Ihre Performance-Probleme liegen, sodass Sie Ihr Spiel mit Höchstgeschwindigkeit laufen lassen können.
- Toolchain für die Entwicklung und das Debuggen von Spielen
  - : Wie unterscheidet sich dies vom normalen Debugging von Web-Apps? Welche speziellen Werkzeuge sind verfügbar? Vieles davon wird von Will in [Tools](https://firefox-source-docs.mozilla.org/devtools-user/index.html) behandelt, aber hier sollten wir eine Art praktisches Toolchain-Tutorial zum Debuggen von Spielen bereitstellen, mit Links zu Wills Materialien:
    - Grundlegende Werkzeuge Übersicht
    - [Shader-Editor](https://firefox-source-docs.mozilla.org/devtools-user/shader_editor/index.html)
    - Performance-Tools (noch in Produktion, geschätzt Anfang 2014)

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
        <a href="/de/docs/Web/API/Touch_events">Touch-Events</a>,
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
        <a href="/de/docs/Web/JavaScript">JavaScript</a> (oder C/C++ mithilfe von
        <a href="https://github.com/emscripten-core/emscripten/wiki">Emscripten</a>, um
        zu JavaScript zu kompilieren)
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
  - : Senden und empfangen Sie beliebige Daten von einem Webserver, z.B. um neue Spielebenen und Grafiken herunterzuladen oder um nicht in Echtzeit übertragene Spielstatusinformationen hin- und herzuschicken.
- [Full Screen API](/de/docs/Web/API/Fullscreen_API)
  - : Vollbild-Spiel.
- [Gamepad API](/de/docs/Web/API/Gamepad_API/Using_the_Gamepad_API)
  - : Verwenden Sie Gamepads oder andere Spielcontroller.
- [HTML](/de/docs/Web/HTML) und [CSS](/de/docs/Web/CSS)
  - : Erstellen, gestalten und layouten Sie die Benutzeroberfläche Ihres Spiels.
- [HTML Audio](/de/docs/Web/HTML/Reference/Elements/audio)
  - : Einfach das Abspielen von Soundeffekten und Musik.
- [IndexedDB](/de/docs/Web/API/IndexedDB_API)
  - : Speichern Sie Benutzerdaten auf dem eigenen Computer oder Gerät des Benutzers.
- [JavaScript](/de/docs/Web/JavaScript)
  - : Schnelle Web-Programmiersprache, um den Code für Ihr Spiel zu schreiben.
    Um Ihre bestehenden Spiele leicht zu portieren, verwenden Sie [Emscripten](https://github.com/emscripten-core/emscripten/wiki) oder [Asm.js](http://asmjs.org/spec/latest/).
- [Pointer Lock API](/de/docs/Web/API/Pointer_Lock_API)
  - : Sperren Sie die Maus oder ein anderes Zeigegerät innerhalb der Benutzeroberfläche Ihres Spiels.
- [SVG](/de/docs/Web/SVG) (Scalable Vector Graphics)
  - : Bauen Sie Vektorgrafiken, die sich unabhängig von Größe oder Auflösung des Benutzerbildschirms reibungslos skalieren.
- [Typed Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays)
  - : Zugriff auf rohe Binärdaten innerhalb von JavaScript; Manipulieren Sie GL-Texturen, Spieldaten oder alles andere.
- [Web Audio API](/de/docs/Web/API/Web_Audio_API)
  - : Kontrolle der Wiedergabe, Synthese und Manipulation von Audio in Echtzeit.
- [WebGL](/de/docs/Web/API/WebGL_API)
  - : Erstellen Sie leistungsstarke, hardwarebeschleunigte 3D-Grafiken (und 2D). [OpenGL ES](https://www.khronos.org/opengles/) 2.0.
- [WebRTC](/de/docs/Web/API/WebRTC_API)
  - : Echtzeitkommunikation zur Steuerung von Audio- und Videodaten, einschließlich Videokonferenzen und Übertragung anderer Anwendungsdaten zwischen zwei Benutzern, ähnlich wie Chat.
- [WebSockets](/de/docs/Web/API/WebSockets_API)
  - : Verbinden Sie Ihre App oder Website mit einem Server, um Daten in Echtzeit hin- und herzuschicken. Perfekt für Mehrspieler-Spielaktionen, Chat-Dienste usw.
- [Web Workers](/de/docs/Web/API/Web_Workers_API/Using_web_workers)
  - : Erzeugen Sie Hintergrundthreads, die ihren eigenen JavaScript-Code für Multicore-Prozessoren ausführen.

## Native Spiele ins Web portieren

Wenn Sie ein nativer Entwickler sind (z.B. Spiele in C++ schreiben) und daran interessiert sind, wie Sie Ihre Spiele ins Web portieren können, sollten Sie mehr über unser [Emscripten](https://emscripten.org/index.html) Tool erfahren — dies ist ein LLVM zu JavaScript Compiler, der LLVM-Bytecode (z.B. generiert aus C/C++ mit Clang oder aus einer anderen Sprache) in [asm.js](/de/docs/Games/Tools/asm.js) kompiliert, das im Web ausgeführt werden kann.

Um loszulegen, siehe:

- [Über Emscripten](https://emscripten.org/docs/introducing_emscripten/about_emscripten.html) für eine Einführung mit hochrangigen Details.
- [Herunterladen und Installieren](https://emscripten.org/docs/getting_started/downloads.html) für die Installation der Toolchain.
- [Emscripten-Tutorial](https://emscripten.org/docs/getting_started/Tutorial.html) für ein Tutorial, das Ihnen zeigt, wie man startet.
