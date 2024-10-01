---
title: Compile
slug: Glossary/Compile
l10n:
  sourceCommit: 06fb3fd5a4967ea68a766f318d08fd9d1bd46e9d
---

{{GlossarySidebar}}

**Kompilieren** ist der Prozess der Umwandlung eines Computerprogramms, das in einer bestimmten {{Glossary("computer_programming", "Sprache")}} geschrieben wurde, in eine Menge von Anweisungen in einem anderen Format oder einer anderen Sprache. Ein **Compiler** ist ein Computerprogramm, das diese Aufgabe ausführt.

Ein Compiler wandelt typischerweise Code, der in einer höheren Programmiersprache wie [C++](https://en.wikipedia.org/wiki/C++), [Rust](<https://en.wikipedia.org/wiki/Rust_(programming_language)>) oder [Java](<https://en.wikipedia.org/wiki/Java_(programming_language)>) geschrieben wurde, in ausführbaren (lauffähigen) Code um – sogenannter **Binärcode** oder **Maschinencode**. [WebAssembly](/de/docs/WebAssembly) ist zum Beispiel eine Form von ausführbarem Binärcode, der [aus in C++, Rust, C#, Go, Swift und mehreren anderen Sprachen geschriebenem Code kompiliert werden kann](https://webassembly.org/getting-started/developers-guide/) und auf jeder Webseite ausgeführt werden kann, wobei die meisten Funktionen in modernen Browsern unterstützt werden (siehe [Browser-Kompatibilitätstabelle](/de/docs/WebAssembly#browser_compatibility)).

Die meisten Compiler führen entweder Ahead-of-Time (AOT)-Kompilierung oder Just-in-Time (JIT)-Kompilierung durch.

Der GNU `gcc` Compiler ist ein bekanntes Beispiel für einen AOT-Compiler. AOT-Compiler werden typischerweise von der Befehlszeile in einer Shell-Umgebung (über ein Terminal oder eine Konsole) oder innerhalb einer {{Glossary("IDE", "IDE")}} aufgerufen.

JIT-Compiler werden in der Regel nicht direkt aufgerufen, sondern sind in Software-Laufzeitumgebungen integriert, um die Leistung zu verbessern. Zum Beispiel verwenden alle großen Browser jetzt JavaScript-Engines, die eingebaute JIT-Compiler haben.

Compiler können auch zwischen höherstufigen Sprachen übersetzen – zum Beispiel von TypeScript zu {{Glossary("JavaScript", "JavaScript")}} – in diesem Fall werden sie oft als **Transpiler** bezeichnet.

## Siehe auch

- [Compiler](https://en.wikipedia.org/wiki/Compiler) auf Wikipedia
- [WebAssembly](/de/docs/WebAssembly)
