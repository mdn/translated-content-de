---
title: Werkzeuge für die Spieleentwicklung
slug: Games/Tools
l10n:
  sourceCommit: 86d64877f1c71af0421e5f6cd19771c8d58895c5
---

{{GamesSidebar}}

Auf dieser Seite finden Sie Links zu unseren Artikeln über Spieleentwicklungswerkzeuge, die letztendlich Frameworks, Compiler und Debugging-Tools abdecken sollen.

- [asm.js](/de/docs/Games/Tools/asm.js)
  - : asm.js ist ein sehr eingeschränkter Teil der JavaScript-Sprache, der erheblich optimiert werden kann und in einer Ahead-of-Time (AOT) Kompilierungsmaschine für eine viel schnellere Leistung als die typische JavaScript-Leistung ausgeführt wird. Dies ist natürlich großartig für Spiele.
- [Emscripten](https://github.com/emscripten-core/emscripten/wiki)
  - : Ein LLVM zu JavaScript Compiler; mit Emscripten können Sie C++ und andere Sprachen, die in LLVM-Bytecode kompiliert werden können, in hochleistungsfähiges JavaScript kompilieren. Dies ist ein ausgezeichnetes Werkzeug, um Anwendungen auf das Web zu portieren! Es gibt ein [nützliches Emscripten-Tutorial](https://github.com/emscripten-core/emscripten/wiki/Tutorial) im Wiki.
- [Firefox Profiler](https://profiler.firefox.com/docs/#/)
  - : Der Firefox Profiler ermöglicht es Ihnen, Ihren Code zu profilieren, um herauszufinden, wo Ihre Leistungsprobleme liegen, damit Sie Ihr Spiel mit Höchstgeschwindigkeit laufen lassen können.
- Werkzeugkette für die Entwicklung und das Debugging von Spielen

  - : Wie unterscheidet sich dies vom normalen Debugging von Web-Apps? Welche speziellen Werkzeuge sind verfügbar? Vieles davon wird von Will in [Werkzeuge](https://firefox-source-docs.mozilla.org/devtools-user/index.html) behandelt, aber hier sollten wir eine Art praktisches Werkzeugketten-Tutorial für das Debugging von Spielen bereitstellen, mit Links zu Wills Material:

    - Grundlegender Überblick über Werkzeuge
    - [Shader-Editor](https://firefox-source-docs.mozilla.org/devtools-user/shader_editor/index.html)
    - Leistungswerkzeuge (noch in Produktion, voraussichtlich Anfang 2014)
