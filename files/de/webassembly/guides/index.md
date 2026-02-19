---
title: WebAssembly-Leitfäden
short-title: Guides
slug: WebAssembly/Guides
l10n:
  sourceCommit: e134d50d779647ba26ee41d7bbefc8d3b4e8fba6
---

Die [WebAssembly](/de/docs/WebAssembly) Leitfäden behandeln Themen wie High-Level-Konzepte, das Kompilieren aus verschiedenen Programmiersprachen, die textuelle Darstellung des Wasm-Binärformats und wie man WebAssembly ausführt.

- [WebAssembly-Konzepte](/de/docs/WebAssembly/Guides/Concepts)
  - : Dieser Artikel erklärt die Konzepte, wie WebAssembly funktioniert, einschließlich seiner Ziele, der Probleme, die es löst, und wie es im JavaScript-Engine des Webbrowsers ausgeführt wird.

## Kompilieren von WebAssembly

- [Kompilieren eines neuen C/C++ Moduls zu WebAssembly](/de/docs/WebAssembly/Guides/C_to_Wasm)
  - : Wenn Sie ein neues Code-Modul in einer Sprache wie C/C++ geschrieben haben, können Sie es mit einem Tool wie [Emscripten](https://emscripten.org/) in WebAssembly kompilieren. Lassen Sie uns ansehen, wie das funktioniert.
- [Kompilieren eines bestehenden C Moduls zu WebAssembly](/de/docs/WebAssembly/Guides/Existing_C_to_Wasm)
  - : Ein Hauptanwendungsfall für WebAssembly besteht darin, das bestehende Ökosystem von C-Bibliotheken ins Web zu bringen.
- [Kompilieren von Rust zu WebAssembly](/de/docs/WebAssembly/Guides/Rust_to_Wasm)
  - : Diese Anleitung zeigt Ihnen, wie Sie ein Rust-Projekt in WebAssembly kompilieren und in einer bestehenden Webanwendung verwenden.

## WebAssembly-Sprachleitfaden

- [Verstehen des WebAssembly-Textformats](/de/docs/WebAssembly/Guides/Understanding_the_text_format)
  - : Um WebAssembly für Menschen lesbar und editierbar zu machen, gibt es eine textuelle Darstellung des Wasm-Binärformats. Dies ist eine Zwischenform, die in Texteditoren, Browser-Entwicklertools und ähnlichen Umgebungen angezeigt werden soll. Dieser Artikel erklärt, wie das Textformat hinsichtlich seiner rohen Syntax funktioniert und wie es sich auf den zugrunde liegenden Bytecode bezieht, den es darstellt, sowie auf die Wrapper-Objekte, die Wasm in JavaScript repräsentieren.
- [Konvertieren des WebAssembly-Textformats in Binärformat](/de/docs/WebAssembly/Guides/Text_format_to_Wasm)
  - : WebAssembly hat eine auf S-Expressions basierende textuelle Darstellung, eine Zwischenform, die in Texteditoren, Browser-Entwicklertools, etc. angezeigt werden soll. Dieser Artikel erklärt ein wenig über ihre Funktionsweise und wie man verfügbare Werkzeuge verwendet, um Textformat-Dateien in das Wasm-Format zu konvertieren.
- [Exportierte WebAssembly-Funktionen](/de/docs/WebAssembly/Guides/Exported_functions)
  - : Exportierte WebAssembly-Funktionen sind die Art und Weise, wie WebAssembly-Funktionen in JavaScript repräsentiert werden. Dieser Artikel beschreibt sie etwas detaillierter.
- [WebAssembly JavaScript Builtins](/de/docs/WebAssembly/Guides/JavaScript_builtins)
  - : WebAssembly JavaScript Builtins sind Wasm-Äquivalente von JavaScript-Operationen, die eine Möglichkeit bieten, JavaScript-Funktionen innerhalb von Wasm-Modulen zu verwenden, ohne JavaScript-Kleincode importieren zu müssen, um eine Brücke zwischen JavaScript- und WebAssembly-Werten und -Aufrufkonventionen zu schlagen.
- [Importierte globale String-Konstanten in WebAssembly](/de/docs/WebAssembly/Guides/Imported_string_constants)
  - : Importierte globale String-Konstanten in WebAssembly erleichtern die Arbeit mit JavaScript-Strings innerhalb von Wasm-Modulen, indem der Bedarf an viel Boilerplate-Code, der mit traditionellen String-Imports verbunden ist, entfällt.

## JavaScript API-Leitfaden

- [Verwendung der WebAssembly JavaScript-API](/de/docs/WebAssembly/Guides/Using_the_JavaScript_API)
  - : Dieser Artikel lehrt Sie, wie Sie die wichtigsten Funktionen der WebAssembly JavaScript-API verwenden, einschließlich des Ladens von Wasm-Modulen und des Manipulierens von WebAssembly-Speichern, -Tabellen und -Globale.
- [Laden und Ausführen von WebAssembly-Code](/de/docs/WebAssembly/Guides/Loading_and_running)
  - : Um WebAssembly in JavaScript zu verwenden, müssen Sie zuerst Ihr Modul ins Gedächtnis laden, bevor Sie es kompilieren/instanziieren. Dieser Artikel bietet eine Referenz zu den verschiedenen Mechanismen, die verwendet werden können, um WebAssembly-Bytecode abzurufen, sowie wie man ihn kompiliert/instanziiert und dann ausführt.

## Siehe auch

- [WebAssembly](/de/docs/WebAssembly)
