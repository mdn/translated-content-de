---
title: Kompilieren
slug: Glossary/Compile
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

Das **Kompilieren** ist der Prozess der Umwandlung eines Computerprogramms, das in einer bestimmten {{Glossary("computer_programming", "Sprache")}} geschrieben wurde, in eine Reihe von Anweisungen in einem anderen Format oder einer anderen Sprache. Ein **Compiler** ist ein Computerprogramm, das diese Aufgabe ausführt.

Typischerweise transformiert ein Compiler Code, der in einer höheren Programmiersprache wie [C++](https://en.wikipedia.org/wiki/C++), [Rust](<https://en.wikipedia.org/wiki/Rust_(programming_language)>), oder [Java](<https://en.wikipedia.org/wiki/Java_(programming_language)>) geschrieben wurde, in ausführbaren (startbaren) Code — sogenannter **Binärcode** oder **Maschinencode**. [WebAssembly](/de/docs/WebAssembly) ist zum Beispiel eine Form von ausführbarem Binärcode, der [aus Code, der in C++, Rust, C#, Go, Swift und mehreren anderen Sprachen geschrieben ist, kompiliert werden kann](https://webassembly.org/getting-started/developers-guide/) und auf jeder Webseite ausgeführt werden kann, mit den meisten Funktionen, die in modernen Browsern unterstützt werden (siehe [Browser-Kompatibilitätstabelle](/de/docs/WebAssembly#browser_compatibility)).

Die meisten Compiler führen entweder eine Ahead-of-Time (AOT) Kompilierung oder eine {{Glossary("Just_In_Time_Compilation", "Just-In-Time (JIT)")}} Kompilierung durch.

Der GNU `gcc` Compiler ist ein bekanntes Beispiel für einen AOT-Compiler. AOT-Compiler werden typischerweise über die Befehlszeile in einer Shell-Umgebung (innerhalb eines Terminals oder einer Konsole) oder innerhalb einer {{Glossary("IDE", "IDE")}} aufgerufen.

JIT-Compiler werden typischerweise nicht direkt aufgerufen, sondern sind intern in Software-Runtimes integriert, um die Leistung zu verbessern. Zum Beispiel verwenden alle großen Browser mittlerweile JavaScript-Engines, die eingebaute JIT-Compiler besitzen.

Compiler können auch Übersetzungen zwischen höheren Programmiersprachen durchführen — zum Beispiel von TypeScript zu {{Glossary("JavaScript", "JavaScript")}} —, in welchem Fall sie oft auch als **Transpiler** bezeichnet werden.

## Siehe auch

- [Compiler](https://en.wikipedia.org/wiki/Compiler) auf Wikipedia
- [WebAssembly](/de/docs/WebAssembly)
- Verwandte Glossarbegriffe:
  - {{Glossary("Just_In_Time_Compilation", "Just-In-Time (JIT)")}}
