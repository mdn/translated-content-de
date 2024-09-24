---
title: Kompilieren
slug: Glossary/Compile
l10n:
  sourceCommit: 06fb3fd5a4967ea68a766f318d08fd9d1bd46e9d
---

{{GlossarySidebar}}

**Kompilieren** ist der Prozess der Umwandlung eines Computerprogramms, das in einer bestimmten {{Glossary("computer programming", "Sprache")}} geschrieben ist, in eine Reihe von Anweisungen in einem anderen Format oder einer anderen Sprache. Ein **Compiler** ist ein Computerprogramm, das diese Aufgabe ausführt.

Typischerweise wandelt ein Compiler Code, der in einer höherstufigen Sprache wie [C++](https://en.wikipedia.org/wiki/C++), [Rust](<https://en.wikipedia.org/wiki/Rust_(programming_language)>), oder [Java](<https://en.wikipedia.org/wiki/Java_(programming_language)>) geschrieben ist, in ausführbaren (laufenden) Code um – sogenannter **Binärcode** oder **Maschinencode**. [WebAssembly](/de/docs/WebAssembly) ist zum Beispiel eine Form von ausführbarem Binärcode, der [aus Code kompiliert werden kann, der in C++, Rust, C#, Go, Swift und mehreren anderen Sprachen geschrieben ist](https://webassembly.org/getting-started/developers-guide/) und auf jeder Webseite ausgeführt werden kann, wobei die meisten Funktionen in modernen Browsern unterstützt werden (siehe [Browser-Kompatibilitätstabelle](/de/docs/WebAssembly#browser_compatibility)).

Die meisten Compiler führen entweder Ahead-of-Time (AOT) Kompilierung oder Just-in-Time (JIT) Kompilierung durch.

Der GNU `gcc` Compiler ist ein bekanntes Beispiel für einen AOT-Compiler. AOT-Compiler werden typischerweise von der Befehlszeile in einer Shell-Umgebung (innerhalb eines Terminals oder einer Konsole) oder innerhalb einer {{Glossary("IDE")}} aufgerufen.

JIT-Compiler werden typischerweise nicht direkt aufgerufen, sondern sind intern in Software-Laufzeiten eingebaut, um die Leistung zu verbessern. Beispielsweise verwenden jetzt alle großen Browser JavaScript-Engines, die eingebaute JIT-Compiler haben.

Compiler können auch zwischen höherstufigen Sprachen übersetzen – zum Beispiel von TypeScript nach {{Glossary("JavaScript")}} – in diesem Fall werden sie oft als **Transpiler** bezeichnet.

## Siehe auch

- [Compiler](https://en.wikipedia.org/wiki/Compiler) auf Wikipedia
- [WebAssembly](/de/docs/WebAssembly)
