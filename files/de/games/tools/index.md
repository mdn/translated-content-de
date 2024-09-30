---
title: Werkzeuge für die Spieleentwicklung
slug: Games/Tools
l10n:
  sourceCommit: 86d64877f1c71af0421e5f6cd19771c8d58895c5
---

{{GamesSidebar}}

Auf dieser Seite finden Sie Links zu unseren Artikeln über Werkzeuge für die Spieleentwicklung, die letztendlich Frameworks, Compiler und Debugging-Tools abdecken sollen.

- [asm.js](/de/docs/Games/Tools/asm.js)
  - : asm.js ist ein sehr eingeschränkter Teil der JavaScript-Sprache, der erheblich optimiert und in einer Ahead-of-Time (AOT) Kompilierungs-Engine ausgeführt werden kann, um eine deutlich schnellere Leistung als die übliche JavaScript-Leistung zu erzielen. Das ist natürlich großartig für Spiele.
- [Emscripten](https://github.com/emscripten-core/emscripten/wiki)
  - : Ein LLVM-zu-JavaScript-Compiler; mit Emscripten können Sie C++ und andere Sprachen, die in LLVM-Bytecode kompiliert werden können, in hochleistungsfähiges JavaScript kompilieren. Dies ist ein hervorragendes Werkzeug, um Anwendungen ins Web zu portieren! Es gibt ein [nützliches Emscripten-Tutorial](https://github.com/emscripten-core/emscripten/wiki/Tutorial) im Wiki.
- [Firefox Profiler](https://profiler.firefox.com/docs/#/)
  - : Der Firefox Profiler ermöglicht es Ihnen, Ihren Code zu analysieren, um herauszufinden, wo Ihre Leistungsprobleme liegen, damit Sie Ihr Spiel mit höchster Geschwindigkeit laufen lassen können.
- Toolchain für die Entwicklung und das Debugging von Spielen

  - : Wie unterscheidet sich dies vom normalen Debugging von Webanwendungen? Welche speziellen Werkzeuge stehen zur Verfügung? Vieles davon wird von Will in [tools](https://firefox-source-docs.mozilla.org/devtools-user/index.html) behandelt, aber hier sollten wir eine Art praxisnahes Toolchain-Tutorial für das Debugging von Spielen bereitstellen, mit Links zu Wills Materialien:

    - Übersicht der grundlegenden Werkzeuge
    - [Shader Editor](https://firefox-source-docs.mozilla.org/devtools-user/shader_editor/index.html)
    - Leistungstools (noch in Produktion, geschätzt Anfang 2014)
