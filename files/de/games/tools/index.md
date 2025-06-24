---
title: Werkzeuge für die Spieleentwicklung
slug: Games/Tools
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{GamesSidebar}}

Auf dieser Seite finden Sie Links zu unseren Artikeln über Spieleentwicklungswerkzeuge, die letztendlich Frameworks, Compiler und Debugging-Tools abdecken sollen.

- [asm.js](/de/docs/Games/Tools/asm.js)
  - : asm.js ist ein sehr eingeschränkter Teil der JavaScript-Sprache, der erheblich optimiert und in einer Ahead-of-Time (AOT) Compiling-Engine ausgeführt werden kann, um eine viel schnellere Leistung als die typische JavaScript-Leistung zu erreichen. Dies ist natürlich großartig für Spiele.
- [Emscripten](https://github.com/emscripten-core/emscripten/wiki)
  - : Ein LLVM-zu-JavaScript-Compiler; mit Emscripten können Sie C++ und andere Sprachen, die in LLVM-Bytecode kompiliert werden können, in hochleistungsfähiges JavaScript kompilieren. Dies ist ein ausgezeichnetes Werkzeug zum Portieren von Anwendungen ins Web! Es gibt ein [nützliches Emscripten-Tutorial](https://github.com/emscripten-core/emscripten/wiki/Tutorial) auf der Wiki.
- [Firefox Profiler](https://profiler.firefox.com/docs/#/)
  - : Der Firefox Profiler ermöglicht es Ihnen, Ihren Code zu profilieren, um herauszufinden, wo Ihre Leistungsprobleme liegen, damit Sie Ihr Spiel auf Höchstgeschwindigkeit laufen lassen können.
- Werkzeugkette für die Entwicklung und das Debuggen von Spielen
  - : Wie unterscheidet sich dies vom normalen Debugging von Web-Apps? Welche speziellen Werkzeuge sind verfügbar? Vieles davon wird von Will in [tools](https://firefox-source-docs.mozilla.org/devtools-user/index.html) behandelt, aber hier sollten wir eine Art praktisches Werkzeugketten-Tutorial zum Debuggen von Spielen bereitstellen, mit Links zu Wills Materialien:
    - Grundlegender Überblick über die Werkzeuge
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
        <a href="/de/docs/Web/JavaScript">JavaScript</a> (oder C/C++ unter
        Verwendung von
        <a href="https://github.com/emscripten-core/emscripten/wiki">Emscripten</a>,
        um in JavaScript zu kompilieren)
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
  - : Senden und Empfangen jeder Art von Daten, die Sie von einem Webserver benötigen, wie das Herunterladen neuer Spielebenen und Grafikdateien bis hin zur Übertragung von nicht echtzeitkritischen Spielstatusinformationen hin und her.
- [Full Screen API](/de/docs/Web/API/Fullscreen_API)
  - : Vollbild-Spielverlauf.
- [Gamepad API](/de/docs/Web/API/Gamepad_API/Using_the_Gamepad_API)
  - : Verwenden Sie Gamepads oder andere Game-Controller.
- [HTML](/de/docs/Web/HTML) und [CSS](/de/docs/Web/CSS)
  - : Erstellen, gestalten und layouten Sie die Benutzeroberfläche Ihres Spiels.
- [HTML-Audio](/de/docs/Web/HTML/Reference/Elements/audio)
  - : Einfaches Abspielen von Soundeffekten und Musik.
- [IndexedDB](/de/docs/Web/API/IndexedDB_API)
  - : Speichern Sie Benutzerdaten auf ihrem eigenen Computer oder Gerät.
- [JavaScript](/de/docs/Web/JavaScript)
  - : Schnelle Web-Programmiersprache, um den Code für Ihr Spiel zu schreiben.
    Um Ihre bestehenden Spiele einfach zu portieren, verwenden Sie [Emscripten](https://github.com/emscripten-core/emscripten/wiki) oder [Asm.js](http://asmjs.org/spec/latest/)
- [Pointer Lock API](/de/docs/Web/API/Pointer_Lock_API)
  - : Sperren Sie die Maus oder ein anderes Zeigegerät innerhalb der Benutzeroberfläche Ihres Spiels.
- [SVG](/de/docs/Web/SVG) (Scalable Vector Graphics)
  - : Erstellen Sie Vektorgrafiken, die unabhängig von der Größe oder Auflösung des Benutzerdisplays sanft skaliert werden.
- [Typed Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays)
  - : Greifen Sie auf rohe Binärdaten innerhalb von JavaScript zu; Manipulieren Sie GL-Texturen, Spieldaten oder alles andere.
- [Web Audio API](/de/docs/Web/API/Web_Audio_API)
  - : Kontrollieren Sie die Wiedergabe, Synthese und Manipulation von Audio in Echtzeit.
- [WebGL](/de/docs/Web/API/WebGL_API)
  - : Erstellen Sie hochleistungsfähige, hardwarebeschleunigte 3D- (und 2D-) Grafiken. [OpenGL ES](https://www.khronos.org/opengles/) 2.0.
- [WebRTC](/de/docs/Web/API/WebRTC_API)
  - : Echtzeitkommunikation zur Steuerung von Audio- und Videodaten, einschließlich Videokonferenzen und dem Senden anderer Anwendungsdaten zwischen zwei Benutzern wie Chat.
- [Websockets](/de/docs/Web/API/WebSockets_API)
  - : Verbinden Sie Ihre App oder Website mit einem Server, um Daten in Echtzeit hin und her zu übertragen. Perfekt für Mehrspieler-Gaming, Chat-Dienste und dergleichen.
- [Web Workers](/de/docs/Web/API/Web_Workers_API/Using_web_workers)
  - : Erzeugen Sie Hintergrund-Threads, die ihren eigenen JavaScript-Code für Multicore-Prozessoren ausführen.

## Native Spiele ins Web portieren

Wenn Sie ein nativer Entwickler sind (zum Beispiel Spiele in C++ schreiben) und daran interessiert sind, wie Sie Ihre Spiele ins Web portieren können, sollten Sie mehr über unser [Emscripten](https://emscripten.org/index.html)-Tool erfahren - dies ist ein LLVM-zu-JavaScript-Compiler, der LLVM-Bytecode (z.B. generiert aus C/C++ mit Clang oder aus einer anderen Sprache) nimmt und in [asm.js](/de/docs/Games/Tools/asm.js) kompiliert, das im Web ausgeführt werden kann.

Um loszulegen, sehen Sie sich an:

- [Über Emscripten](https://emscripten.org/docs/introducing_emscripten/about_emscripten.html) für eine Einführung mit umfassenden Details.
- [Download und Installation](https://emscripten.org/docs/getting_started/downloads.html) für die Installation des Werkzeugketten.
- [Emscripten-Tutorial](https://emscripten.org/docs/getting_started/Tutorial.html) für ein Tutorial, das Ihnen zeigt, wie Sie anfangen können.
