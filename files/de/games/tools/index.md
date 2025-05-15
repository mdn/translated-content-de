---
title: Werkzeuge für die Spieleentwicklung
slug: Games/Tools
l10n:
  sourceCommit: d9e11f88996e97a259d2ec47f47a660062c12c4f
---

{{GamesSidebar}}

Auf dieser Seite finden Sie Links zu unseren Artikeln über Werkzeuge zur Spieleentwicklung, die letztendlich Frameworks, Compiler und Debugging-Werkzeuge abdecken sollen.

- [asm.js](/de/docs/Games/Tools/asm.js)
  - : asm.js ist ein sehr eingeschränkter Teilbereich der JavaScript-Sprache, der erheblich optimiert und in einer Ahead-of-Time (AOT) Compiler-Engine ausgeführt werden kann, um eine wesentlich schnellere Leistung als die typische JavaScript-Leistung zu erreichen. Das ist natürlich großartig für Spiele.
- [Emscripten](https://github.com/emscripten-core/emscripten/wiki)
  - : Ein LLVM zu JavaScript Compiler; mit Emscripten können Sie C++ und andere Sprachen, die in LLVM-Bytecode kompiliert werden können, in leistungsstarkes JavaScript kompilieren. Dies ist ein ausgezeichnetes Werkzeug für die Portierung von Anwendungen ins Web! Es gibt ein [nützliches Emscripten-Tutorial](https://github.com/emscripten-core/emscripten/wiki/Tutorial) auf der Wiki-Seite.
- [Firefox Profiler](https://profiler.firefox.com/docs/#/)
  - : Der Firefox Profiler ermöglicht es Ihnen, Ihren Code zu profilieren, um herauszufinden, wo Ihre Leistungsprobleme liegen, damit Sie Ihr Spiel mit Höchstgeschwindigkeit ausführen können.
- Toolkette zur Entwicklung und zum Debuggen von Spielen

  - : Worin unterscheidet sich dies vom normalen Debugging von Webanwendungen? Welche spezialisierten Werkzeuge stehen zur Verfügung? Vieles davon wird von Will in den [Werkzeugen](https://firefox-source-docs.mozilla.org/devtools-user/index.html) behandelt, aber hier sollten wir eine Art praktisches Toolchain-Tutorial zum Debuggen von Spielen anbieten, mit Links zu Wills Inhalten:

    - Grundlegende Übersicht über Werkzeuge
    - [Shader Editor](https://firefox-source-docs.mozilla.org/devtools-user/shader_editor/index.html)
    - Leistungstools (noch in Produktion, geschätzt Anfang 2014)

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
        <a href="/de/docs/Web/API/Fullscreen_API">Full Screen API</a>,
        <a href="/de/docs/Web/API/Pointer_Lock_API">Pointer Lock API</a>
      </td>
    </tr>
    <tr>
      <td><strong>Sprache</strong></td>
      <td>
        <a href="/de/docs/Web/JavaScript">JavaScript</a> (oder C/C++ unter
        Verwendung von <a href="https://github.com/emscripten-core/emscripten/wiki">Emscripten</a> zur
        Kompilierung nach JavaScript)
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
  - : Senden und empfangen Sie jede Art von Daten, die Sie von einem Webserver möchten, z.B. das Herunterladen neuer Spielebenen und Grafiken bis zum Übertragen von nicht Echtzeit-Spielstatusinformationen hin und her.
- [Full Screen API](/de/docs/Web/API/Fullscreen_API)
  - : Vollbild-Spielerlebnis.
- [Gamepad API](/de/docs/Web/API/Gamepad_API/Using_the_Gamepad_API)
  - : Verwenden Sie Gamepads oder andere Spielcontroller.
- [HTML](/de/docs/Web/HTML) und [CSS](/de/docs/Web/CSS)
  - : Erstellen, stylen und gestalten Sie die Benutzeroberfläche Ihres Spiels.
- [HTML Audio](/de/docs/Web/HTML/Reference/Elements/audio)
  - : Einfaches Abspielen von Soundeffekten und Musik.
- [IndexedDB](/de/docs/Web/API/IndexedDB_API)
  - : Speichern Sie Benutzerdaten auf deren eigenem Computer oder Gerät.
- [JavaScript](/de/docs/Web/JavaScript)
  - : Schnelle Web-Programmiersprache, um den Code für Ihr Spiel zu schreiben.
    Um Ihre bestehenden Spiele einfach zu portieren, nutzen Sie [Emscripten](https://github.com/emscripten-core/emscripten/wiki) oder [Asm.js](http://asmjs.org/spec/latest/)
- [Pointer Lock API](/de/docs/Web/API/Pointer_Lock_API)
  - : Sperren Sie die Maus oder ein anderes Zeigegerät innerhalb der Benutzeroberfläche Ihres Spiels.
- [SVG](/de/docs/Web/SVG) (Skalierbare Vektorgrafiken)
  - : Erstellen Sie Vektorgrafiken, die unabhängig von Größe oder Auflösung des Benutzerbildschirms sanft skalieren.
- [Typed Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays)
  - : Greifen Sie auf rohe Binärdaten innerhalb von JavaScript zu; Manipulieren Sie GL-Texturen, Spieledaten oder alles andere.
- [Web Audio API](/de/docs/Web/API/Web_Audio_API)
  - : Steuern Sie die Wiedergabe, Synthese und Manipulation von Audio in Echtzeit.
- [WebGL](/de/docs/Web/API/WebGL_API)
  - : Erstellen Sie leistungsstarke, hardwarebeschleunigte 3D- (und 2D-)Grafiken. [OpenGL ES](https://www.khronos.org/opengles/) 2.0.
- [WebRTC](/de/docs/Web/API/WebRTC_API)
  - : Echtzeitkommunikation zur Steuerung von Audio- und Videodaten, einschließlich Videokonferenzen und Übertragen anderer Anwendungsdaten zwischen zwei Benutzern wie Chat.
- [WebSockets](/de/docs/Web/API/WebSockets_API)
  - : Verbinden Sie Ihre App oder Website mit einem Server, um in Echtzeit Daten hin- und herzutauschen. Perfekt für Multiplayer-Spielaktionen, Chatdienste und so weiter.
- [Web Workers](/de/docs/Web/API/Web_Workers_API/Using_web_workers)
  - : Starten Sie Hintergrundthreads, die ihren eigenen JavaScript-Code auf Mehrkernprozessoren ausführen.

## Native Spiele ins Web portieren

Wenn Sie ein nativer Entwickler sind (beispielsweise Spiele in C++ schreiben) und daran interessiert sind, wie Sie Ihre Spiele ins Web portieren können, sollten Sie mehr über unser [Emscripten](https://emscripten.org/index.html) Tool erfahren — dies ist ein LLVM zu JavaScript Compiler, der LLVM-Bytecode (z.B. generiert aus C/C++ mit Clang oder aus einer anderen Sprache) nimmt und in [asm.js](/de/docs/Games/Tools/asm.js) kompiliert, welches im Web ausgeführt werden kann.

Um zu beginnen, sehen Sie sich Folgendes an:

- [Über Emscripten](https://emscripten.org/docs/introducing_emscripten/about_emscripten.html) für eine Einführung sowie Details auf hoher Ebene.
- [Download and Install](https://emscripten.org/docs/getting_started/downloads.html) zur Installation der Toolchain.
- [Emscripten Tutorial](https://emscripten.org/docs/getting_started/Tutorial.html) für ein Tutorial, das Ihnen zeigt, wie Sie anfangen können.
