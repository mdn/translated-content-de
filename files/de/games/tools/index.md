---
title: Werkzeuge für die Spieleentwicklung
slug: Games/Tools
l10n:
  sourceCommit: b25798255cfb773885c94557b74179400ac7153d
---

Auf dieser Seite finden Sie Links zu unseren Artikeln über Werkzeuge für die Spieleentwicklung. Diese sollen künftig Frameworks, Compiler und Debugging-Werkzeuge abdecken.

- [asm.js](/de/docs/Games/Tools/asm.js)
  - : asm.js ist eine stark eingeschränkte Teilmenge der JavaScript-Sprache. Sie lässt sich erheblich optimieren und in einer Engine mit Ahead-of-Time-Kompilierung (AOT) ausführen, was eine deutlich höhere Leistung als bei gewöhnlichem JavaScript ermöglicht. Das ist für Spiele besonders nützlich.
- [Emscripten](https://github.com/emscripten-core/emscripten/wiki)
  - : Ein Compiler von LLVM nach JavaScript. Mit Emscripten können Sie C++ und andere Sprachen, die sich zu LLVM-Bytecode kompilieren lassen, in leistungsfähiges JavaScript übersetzen. Das ist ein hervorragendes Werkzeug, um Anwendungen ins Web zu portieren! Im Wiki finden Sie ein [hilfreiches Emscripten-Tutorial](https://github.com/emscripten-core/emscripten/wiki/Tutorial).
- [Firefox Profiler](https://profiler.firefox.com/docs/#/)
  - : Mit Firefox Profiler können Sie Ihren Code profilieren und Leistungsprobleme aufspüren, damit Ihr Spiel möglichst schnell läuft.
- Werkzeugkette für die Entwicklung und das Debugging von Spielen
  - : Worin unterscheidet sich das vom Debugging gewöhnlicher Webanwendungen? Welche spezialisierten Werkzeuge gibt es? Will behandelt vieles davon unter [Werkzeuge](https://firefox-source-docs.mozilla.org/devtools-user/index.html). Hier sollten wir jedoch eine praxisorientierte Anleitung zur Werkzeugkette für das Debugging von Spielen bereitstellen, mit Links zu Wills Inhalten:
    - Überblick über grundlegende Werkzeuge
    - [Shader-Editor](https://firefox-source-docs.mozilla.org/devtools-user/shader_editor/index.html)
    - Performance-Werkzeuge (noch in Entwicklung, voraussichtlich Anfang 2014)

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
        <a href="/de/docs/Web/API/Touch_events">Touch-Ereignisse</a>,
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
        <a href="/de/docs/Web/JavaScript">JavaScript</a> (oder C/C++, das mit
        <a href="https://github.com/emscripten-core/emscripten/wiki">Emscripten</a>
        zu JavaScript kompiliert wird)
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
      <td><strong>Datenspeicherung</strong></td>
      <td>
        <a href="/de/docs/Web/API/IndexedDB_API">IndexedDB</a> oder die „Cloud“
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
  - : Senden und empfangen Sie beliebige Daten über einen Webserver: Laden Sie beispielsweise neue Spiellevel und Grafiken herunter oder tauschen Sie Informationen zum Spielstatus aus, die nicht in Echtzeit übertragen werden müssen.
- [Full Screen API](/de/docs/Web/API/Fullscreen_API)
  - : Spielen Sie im Vollbildmodus.
- [Gamepad API](/de/docs/Web/API/Gamepad_API/Using_the_Gamepad_API)
  - : Verwenden Sie Gamepads oder andere Spielcontroller.
- [HTML](/de/docs/Web/HTML) und [CSS](/de/docs/Web/CSS)
  - : Erstellen, gestalten und strukturieren Sie die Benutzeroberfläche Ihres Spiels.
- [HTML-Audio](/de/docs/Web/HTML/Reference/Elements/audio)
  - : Spielen Sie einfache Soundeffekte und Musik unkompliziert ab.
- [IndexedDB](/de/docs/Web/API/IndexedDB_API)
  - : Speichern Sie Benutzerdaten auf dem Computer oder Gerät der Benutzer.
- [JavaScript](/de/docs/Web/JavaScript)
  - : Eine schnelle Web-Programmiersprache, mit der Sie den Code für Ihr Spiel schreiben können.
    Um vorhandene Spiele einfach zu portieren, verwenden Sie [Emscripten](https://github.com/emscripten-core/emscripten/wiki) oder [Asm.js](https://en.wikipedia.org/wiki/Asm.js).
- [Pointer Lock API](/de/docs/Web/API/Pointer_Lock_API)
  - : Binden Sie die Maus oder ein anderes Zeigegerät an die Benutzeroberfläche Ihres Spiels.
- [SVG](/de/docs/Web/SVG) (skalierbare Vektorgrafiken)
  - : Erstellen Sie Vektorgrafiken, die unabhängig von der Größe oder Auflösung des Bildschirms der Benutzer ohne Qualitätsverlust skaliert werden.
- [Typed Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays)
  - : Greifen Sie aus JavaScript auf binäre Rohdaten zu, um GL-Texturen, Spieldaten oder andere Daten zu bearbeiten.
- [Web Audio API](/de/docs/Web/API/Web_Audio_API)
  - : Steuern Sie die Wiedergabe, Synthese und Verarbeitung von Audio in Echtzeit.
- [WebGL](/de/docs/Web/API/WebGL_API)
  - : Erstellen Sie leistungsfähige, hardwarebeschleunigte 3D- und 2D-Grafiken. [OpenGL ES](https://www.khronos.org/opengles/) 2.0.
- [WebRTC](/de/docs/Web/API/WebRTC_API)
  - : Nutzen Sie Echtzeitkommunikation zur Verarbeitung von Audio- und Videodaten, unter anderem für Videokonferenzen sowie für den Austausch anderer Anwendungsdaten zwischen zwei Benutzern, etwa in einem Chat.
- [WebSockets](/de/docs/Web/API/WebSockets_API)
  - : Verbinden Sie Ihre Anwendung oder Website mit einem Server, um Daten in Echtzeit auszutauschen. Ideal für Multiplayer-Spiele, Chat-Dienste und Ähnliches.
- [Web Workers](/de/docs/Web/API/Web_Workers_API/Using_web_workers)
  - : Starten Sie Hintergrund-Threads, die auf Mehrkernprozessoren eigenen JavaScript-Code ausführen.

## Native Spiele ins Web portieren

Wenn Sie native Anwendungen entwickeln, beispielsweise Spiele in C++ schreiben, und wissen möchten, wie Sie Ihre Spiele ins Web portieren können, sollten Sie sich mit unserem Werkzeug [Emscripten](https://emscripten.org/index.html) vertraut machen. Dieser Compiler von LLVM nach JavaScript nimmt LLVM-Bytecode entgegen – etwa solchen, der mit Clang aus C/C++ oder aus einer anderen Sprache erzeugt wurde – und kompiliert ihn zu [asm.js](/de/docs/Games/Tools/asm.js), das im Web ausgeführt werden kann.

Für den Einstieg empfehlen wir:

- [Über Emscripten](https://emscripten.org/docs/introducing_emscripten/about_emscripten.html) für eine Einführung mit einem allgemeinen Überblick.
- [Herunterladen und installieren](https://emscripten.org/docs/getting_started/downloads.html) für die Installation der Werkzeugkette.
- [Emscripten-Tutorial](https://emscripten.org/docs/getting_started/Tutorial.html) für eine schrittweise Einführung.
