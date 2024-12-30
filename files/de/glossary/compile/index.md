---
title: Kompilieren
slug: Glossary/Compile
l10n:
  sourceCommit: fabc398130abaab48f84f0e21c6755c8fb6dc836
---

{{GlossarySidebar}}

**Kompilieren** ist der Prozess, ein Computerprogramm, das in einer bestimmten {{Glossary("computer_programming", "Sprache")}} geschrieben ist, in eine Reihe von Anweisungen in einem anderen Format oder einer anderen Sprache umzuwandeln. Ein **Compiler** ist ein Computerprogramm, das diese Aufgabe ausführt.

Typischerweise wandelt ein Compiler Code, der in einer höheren Programmiersprache wie [C++](https://en.wikipedia.org/wiki/C++), [Rust](<https://en.wikipedia.org/wiki/Rust_(programming_language)>) oder [Java](<https://en.wikipedia.org/wiki/Java_(programming_language)>) geschrieben ist, in ausführbaren (ausführbaren) Code um — sogenannten **Binärcode** oder **Maschinencode**. [WebAssembly](/de/docs/WebAssembly) ist beispielsweise eine Form von ausführbarem Binärcode, der [aus Code, der in C++, Rust, C#, Go, Swift und verschiedenen anderen Sprachen geschrieben ist, kompiliert werden kann](https://webassembly.org/getting-started/developers-guide/) und auf jeder Webseite ausgeführt werden kann, mit den meisten Funktionen, die in modernen Browsern unterstützt werden (siehe [Browser-Kompatibilitätstabelle](/de/docs/WebAssembly#browser_compatibility)).

Die meisten Compiler führen entweder Ahead-of-Time (AOT)-Kompilierung oder {{Glossary("Just_In_Time_Compilation", "Just-in-Time (JIT)")}}-Kompilierung durch.

Der GNU `gcc` Compiler ist ein bekanntes Beispiel für einen AOT-Compiler. AOT-Compiler werden typischerweise von der Befehlszeile in einer Shell-Umgebung (innerhalb eines Terminals oder einer Konsole) oder innerhalb einer {{Glossary("IDE", "IDE")}} aufgerufen.

JIT-Compiler werden typischerweise nicht direkt aufgerufen, sondern sind stattdessen intern in Software-Runtimes eingebaut, um die Leistung zu verbessern. Beispielsweise verwenden alle großen Browser jetzt JavaScript-Engines, die eingebaute JIT-Compiler haben.

Compiler können auch zwischen höheren Programmiersprachen übersetzen — zum Beispiel von TypeScript zu {{Glossary("JavaScript", "JavaScript")}} — in diesem Fall werden sie oft als **Transpiler** bezeichnet.

## Siehe auch

- [Compiler](https://en.wikipedia.org/wiki/Compiler) auf Wikipedia
- [WebAssembly](/de/docs/WebAssembly)
- Verwandte Glossarbegriffe:
  - {{Glossary("Just_In_Time_Compilation", "Just-In-Time (JIT)")}}
