---
title: Tools für die Spieleentwicklung
slug: Games/Tools
l10n:
  sourceCommit: 86d64877f1c71af0421e5f6cd19771c8d58895c5
---

{{GamesSidebar}}

Auf dieser Seite finden Sie Links zu unseren Artikeln über Spielentwicklungswerkzeuge, die schließlich Frameworks, Compiler und Debugging-Tools abdecken sollen.

- [asm.js](/de/docs/Games/Tools/asm.js)
  - : asm.js ist ein sehr eingeschränkter Teil der JavaScript-Sprache, der erheblich optimiert werden kann und in einer Ahead-of-Time (AOT) Kompilierungs-Engine für eine wesentlich schnellere Leistung als die typische JavaScript-Leistung ausgeführt werden kann. Dies ist natürlich großartig für Spiele.
- [Emscripten](https://github.com/emscripten-core/emscripten/wiki)
  - : Ein LLVM-zu-JavaScript-Compiler; mit Emscripten können Sie C++ und andere Sprachen, die zu LLVM-Bytecode kompiliert werden können, in performantes JavaScript übersetzen. Dies ist ein hervorragendes Tool, um Anwendungen ins Web zu portieren! Es gibt ein [nützliches Emscripten-Tutorial](https://github.com/emscripten-core/emscripten/wiki/Tutorial) im Wiki.
- [Firefox Profiler](https://profiler.firefox.com/docs/#/)
  - : Der Firefox Profiler ermöglicht es Ihnen, Ihren Code zu profilieren, um herauszufinden, wo Ihre Leistungsprobleme liegen, damit Sie Ihr Spiel mit Höchstgeschwindigkeit laufen lassen können.
- Toolchain für die Entwicklung und das Debugging von Spielen

  - : Wodurch unterscheidet sich dies vom normalen Debugging von Webanwendungen? Welche Spezialwerkzeuge sind verfügbar? Vieles davon wird von Will in [tools](https://firefox-source-docs.mozilla.org/devtools-user/index.html) behandelt, aber hier sollten wir eine Art praktisches Toolchain-Tutorial für das Debuggen von Spielen bereitstellen, mit Links zu Wills Material:

    - Grundlegender Überblick über Werkzeuge
    - [Shader-Editor](https://firefox-source-docs.mozilla.org/devtools-user/shader_editor/index.html)
    - Performance-Tools (noch in Produktion, voraussichtlich Anfang 2014)
