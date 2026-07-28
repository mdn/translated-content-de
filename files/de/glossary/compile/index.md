---
title: Kompilieren
slug: Glossary/Compile
l10n:
  sourceCommit: 453a2a29e3e7a3ef64e65acc6121914f54334bc7
---

**Kompilieren** ist der Prozess, ein Computerprogramm, das in einer gegebenen {{Glossary("computer_programming", "Sprache")}} geschrieben ist, in eine Reihe von Anweisungen in einem anderen Format oder einer anderen Sprache zu transformieren. Ein **Compiler** ist ein Computerprogramm, das diese Aufgabe ausführt.

Typischerweise wandelt ein Compiler Code, der in einer höherstufigen Sprache wie [C++](https://en.wikipedia.org/wiki/C++), [Rust](<https://en.wikipedia.org/wiki/Rust_(programming_language)>), oder [Java](<https://en.wikipedia.org/wiki/Java_(programming_language)>) geschrieben ist, in ausführbaren (laufbaren) Code um — sogenannten **Binärcode** oder **Maschinencode**. [WebAssembly](/de/docs/WebAssembly) ist beispielsweise eine Form von ausführbarem Binärcode, die [aus Code, der in C++, Rust, C#, Go, Swift und mehreren anderen Sprachen geschrieben ist, kompiliert werden kann](https://webassembly.org/getting-started/developers-guide/) und auf jeder Webseite ausgeführt werden kann, mit guter Unterstützung quer durch moderne Browser.

Die meisten Compiler führen entweder eine Ahead-of-Time (AOT) Compilation oder eine {{Glossary("Just_In_Time_Compilation", "Just-In-Time (JIT)")}} Compilation durch.

Der GNU `gcc` Compiler ist ein bekanntes Beispiel für einen AOT-Compiler. AOT-Compiler werden typischerweise über die Kommandozeile in einer Shell-Umgebung (innerhalb eines Terminals oder einer Konsole) oder innerhalb einer {{Glossary("IDE", "IDE")}} aufgerufen.

JIT-Compiler werden in der Regel nicht direkt aufgerufen, sondern sind intern in Software-Laufzeitumgebungen eingebaut, um die Leistung zu verbessern. Alle großen Browser nutzen zum Beispiel jetzt JavaScript-Engines, die eingebettete JIT-Compiler haben.

Compiler können auch zwischen höherstufigen Sprachen übersetzen — zum Beispiel von TypeScript zu {{Glossary("JavaScript", "JavaScript")}} — in diesem Fall werden sie oft auch als **Transpiler** bezeichnet.

## Siehe auch

- [Compiler](https://en.wikipedia.org/wiki/Compiler) auf Wikipedia
- [WebAssembly](/de/docs/WebAssembly)
- Verwandte Glossarbegriffe:
  - {{Glossary("Just_In_Time_Compilation", "Just-In-Time (JIT)")}}
