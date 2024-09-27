---
title: Kompilieren
slug: Glossary/Compile
l10n:
  sourceCommit: 06fb3fd5a4967ea68a766f318d08fd9d1bd46e9d
---

{{GlossarySidebar}}

**Kompilieren** ist der Prozess der Umwandlung eines Computerprogramms, das in einer bestimmten [Programmiersprache](/de/docs/Glossary/computer_programming) geschrieben wurde, in eine Reihe von Anweisungen in einem anderen Format oder einer anderen Sprache. Ein **Compiler** ist ein Computerprogramm, das diese Aufgabe ausführt.

Typischerweise wandelt ein Compiler Code, der in einer höheren Programmiersprache wie [C++](https://en.wikipedia.org/wiki/C++), [Rust](<https://en.wikipedia.org/wiki/Rust_(programming_language)>) oder [Java](<https://en.wikipedia.org/wiki/Java_(programming_language)>) geschrieben ist, in ausführbaren (lauffähigen) Code um — sogenannten **Binärcode** oder **Maschinencode**. [WebAssembly](/de/docs/WebAssembly) ist zum Beispiel eine Form von ausführbarem Binärcode, der [aus Code, der in C++, Rust, C#, Go, Swift und mehreren anderen Sprachen geschrieben wurde, kompiliert werden kann](https://webassembly.org/getting-started/developers-guide/) und auf jeder Webseite ausgeführt werden kann, wobei die meisten Funktionen in modernen Browsern unterstützt werden (siehe [Browser-Kompatibilitätstabelle](/de/docs/WebAssembly#browser_compatibility)).

Die meisten Compiler führen entweder eine Ahead-of-Time (AOT)-Kompilierung oder eine Just-in-Time (JIT)-Kompilierung durch.

Der GNU `gcc` Compiler ist ein bekanntes Beispiel für einen AOT-Compiler. AOT-Compiler werden typischerweise über die Befehlszeile in einer Shell-Umgebung (innerhalb eines Terminals oder einer Konsole) oder innerhalb einer [IDE](/de/docs/Glossary/IDE) aufgerufen.

JIT-Compiler werden normalerweise nicht direkt aufgerufen, sondern sind in Software-Laufzeitumgebungen integriert, um die Leistung zu verbessern. Beispielsweise verwenden alle großen Browser jetzt JavaScript-Engines, die eingebaute JIT-Compiler haben.

Compiler können auch zwischen höheren Programmiersprachen übersetzen — zum Beispiel von TypeScript zu [JavaScript](/de/docs/Glossary/JavaScript) — in diesem Fall werden sie oft als **Transpiler** bezeichnet.

## Siehe auch

- [Compiler](https://en.wikipedia.org/wiki/Compiler) auf Wikipedia
- [WebAssembly](/de/docs/WebAssembly)
