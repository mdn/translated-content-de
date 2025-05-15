---
title: WebAssembly
slug: WebAssembly
l10n:
  sourceCommit: 049e8715d907f47677e85637b5f8292d5376a9f1
---

WebAssembly ist eine Art von Code, die in modernen Web-Browsern ausgeführt werden kann. Es handelt sich um eine Low-Level-Assembler-ähnliche Sprache mit einem kompakten Binärformat, das nahezu native Leistung bietet und Sprachen wie C/C++, C# und Rust ein Kompilationsziel bietet, sodass sie im Web laufen können. Es ist auch so konzipiert, dass es zusammen mit JavaScript ausgeführt werden kann, damit beide zusammenarbeiten können.

WebAssembly wurde entwickelt, um JavaScript zu ergänzen und daneben ausgeführt zu werden – mit den WebAssembly JavaScript-APIs können Sie WebAssembly-Module in eine JavaScript-App laden und Funktionalität zwischen beiden teilen. Dies ermöglicht es Ihnen, die Leistung und Leistung von WebAssembly sowie die Ausdruckskraft und Flexibilität von JavaScript in derselben App zu nutzen, selbst wenn Sie nicht wissen, wie man WebAssembly-Code schreibt.

WebAssembly hat große Auswirkungen auf die Web-Plattform, nicht nur, weil es einen Weg bietet, Code, der in mehreren Sprachen geschrieben wurde, mit nahezu nativer Geschwindigkeit im Web auszuführen, sondern auch, weil es ermöglicht, Client-Apps im Web auszuführen, die zuvor nicht möglich waren.

Und das Beste daran ist, dass es als Webstandard über die [W3C WebAssembly Working Group](https://www.w3.org/wasm/) und [Community Group](https://www.w3.org/community/webassembly/) mit aktiver Teilnahme aller großen Browser-Hersteller entwickelt wird.

## Leitfäden

Die [WebAssembly-Leitfäden](/de/docs/WebAssembly/Guides) behandeln Themen wie hochrangige Konzepte, Kompilierung aus verschiedenen Sprachen, die textuelle Darstellung des Wasm-Binärformats und wie WebAssembly ausgeführt wird.

- [WebAssembly-Konzepte](/de/docs/WebAssembly/Guides/Concepts)
  - : Fangen Sie an, indem Sie die hochrangigen Konzepte hinter WebAssembly lesen — was es ist, warum es so nützlich ist, wie es in die Web-Plattform (und darüber hinaus) passt und wie es genutzt wird.
- [Ein neues C/C++-Modul nach WebAssembly kompilieren](/de/docs/WebAssembly/Guides/C_to_Wasm)
  - : Wenn Sie Code in C/C++ geschrieben haben, können Sie ihn mit einem Tool wie [Emscripten](https://emscripten.org/) in Wasm kompilieren. Schauen wir uns an, wie es funktioniert.
- [Ein bestehendes C-Modul nach WebAssembly kompilieren](/de/docs/WebAssembly/Guides/Existing_C_to_Wasm)
  - : Ein Hauptanwendungsfall für WebAssembly besteht darin, das bestehende Ökosystem von C-Bibliotheken zu nutzen und Entwicklern zu ermöglichen, sie im Web zu verwenden.
- [Von Rust zu WebAssembly kompilieren](/de/docs/WebAssembly/Guides/Rust_to_Wasm)
  - : Wenn Sie Rust-Code geschrieben haben, können Sie ihn in WebAssembly kompilieren! Dieses Tutorial führt Sie durch alles, was Sie wissen müssen, um ein Rust-Projekt zu Wasm zu kompilieren und in einer bestehenden Web-App zu verwenden.
- [WebAssembly-Code laden und ausführen](/de/docs/WebAssembly/Guides/Loading_and_running)
  - : Nachdem Sie ein Wasm-Modul haben, behandelt dieser Artikel, wie man es abruft, kompiliert und instanziiert und kombiniert die [WebAssembly JavaScript](/de/docs/WebAssembly/Reference/JavaScript_interface) API mit den [Fetch](/de/docs/Web/API/Fetch_API) oder [XHR](/de/docs/Web/API/XMLHttpRequest) APIs.
- [Die WebAssembly JavaScript API verwenden](/de/docs/WebAssembly/Guides/Using_the_JavaScript_API)
  - : Sobald Sie ein Wasm-Modul geladen haben, möchten Sie es nutzen. In diesem Artikel zeigen wir Ihnen, wie Sie WebAssembly über die WebAssembly JavaScript API verwenden.
- [Exportierte WebAssembly-Funktionen](/de/docs/WebAssembly/Guides/Exported_functions)
  - : Exportierte WebAssembly-Funktionen sind die JavaScript-Reflexe der WebAssembly-Funktionen, die das Aufrufen von WebAssembly-Code aus JavaScript ermöglichen. Dieser Artikel beschreibt, was sie sind.
- [Das WebAssembly-Textformat verstehen](/de/docs/WebAssembly/Guides/Understanding_the_text_format)
  - : Dieser Artikel erklärt das Wasm-Textformat. Dies ist die niedrigstufige textuelle Darstellung eines Wasm-Moduls, die in den Entwicklerwerkzeugen des Browsers beim Debuggen angezeigt wird.
- [WebAssembly-Textformat in Wasm konvertieren](/de/docs/WebAssembly/Guides/Text_format_to_Wasm)
  - : Dieser Artikel bietet eine Anleitung, wie man ein in Textformat geschriebenes WebAssembly-Modul in ein Wasm-Binärformat konvertiert.

## API-Referenz

- [WebAssembly-Befehlsreferenz](/de/docs/WebAssembly/Reference)
  - : Referenzdokumentation mit interaktiven Beispielen für die Menge der WebAssembly-Operatoren.
- [WebAssembly-JavaScript-Schnittstelle](/de/docs/WebAssembly/Reference/JavaScript_interface)
  - : Dieses Objekt fungiert als Namespace für alle WebAssembly-bezogenen Funktionen.
- [`WebAssembly.Global()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Global)
  - : Ein `WebAssembly.Global`-Objekt stellt eine globale Variableninstanz dar, die sowohl aus JavaScript zugänglich ist als auch über eine oder mehrere [`WebAssembly.Module`](/de/docs/WebAssembly/Reference/JavaScript_interface/Module)-Instanzen importierbar/exportierbar ist. Dies ermöglicht das dynamische Verknüpfen mehrerer Module.
- [`WebAssembly.Module()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Module)
  - : Ein `WebAssembly.Module`-Objekt enthält zustandslosen WebAssembly-Code, der bereits vom Browser kompiliert wurde und effizient [mit Workern geteilt](/de/docs/Web/API/Worker/postMessage) und mehrfach instanziiert werden kann.
- [`WebAssembly.Instance()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Instance)
  - : Ein `WebAssembly.Instance`-Objekt ist eine zustandsbehaftete, ausführbare Instanz eines `Module`. `Instance`-Objekte enthalten alle [exportierten WebAssembly-Funktionen](/de/docs/WebAssembly/Guides/Exported_functions), die das Aufrufen von WebAssembly-Code aus JavaScript ermöglichen.
- [`WebAssembly.compile()`](/de/docs/WebAssembly/Reference/JavaScript_interface/compile_static)
  - : Die `WebAssembly.compile()`-Funktion kompiliert WebAssembly-Binärcode in ein `WebAssembly.Module`-Objekt.
- [`WebAssembly.compileStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/compileStreaming_static)
  - : Die `WebAssembly.compileStreaming()`-Funktion kompiliert ein `WebAssembly.Module` direkt aus einer gestreamten Quelle.
- [`WebAssembly.instantiate()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiate_static)
  - : Die `WebAssembly.instantiate()`-Funktion ermöglicht das Kompilieren und Instanziieren von WebAssembly-Code.
- [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static)
  - : Die `WebAssembly.instantiateStreaming()`-Funktion ist die Haupt-API zum Kompilieren und Instanziieren von WebAssembly-Code und gibt sowohl ein `Module` als auch seine erste `Instance` zurück.
- [`WebAssembly.validate()`](/de/docs/WebAssembly/Reference/JavaScript_interface/validate_static)
  - : Die `WebAssembly.validate()`-Funktion validiert ein gegebenes typisiertes Array von WebAssembly-Binärcode.
- [`WebAssembly.Memory()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory)
  - : Ein `WebAssembly.Memory`-Objekt ist ein erweiterbarer {{jsxref("Global_objects/ArrayBuffer", "ArrayBuffer")}}, der die rohen Bytes des von einer `Instance` zugegriffenen Speichers hält.
- [`WebAssembly.Table()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Table)
  - : Ein `WebAssembly.Table`-Objekt ist ein erweiterbares typisiertes Array von undurchsichtigen Werten wie Funktionsreferenzen, auf die von einer `Instance` zugegriffen wird.
- [`WebAssembly.Tag()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Tag)
  - : Das `WebAssembly.Tag`-Objekt definiert eine Art von WebAssembly-Ausnahme, die zu/von WebAssembly-Code geworfen werden kann.
- [`WebAssembly.Exception()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Exception)
  - : Das `WebAssembly.Exception`-Objekt stellt eine Laufzeitausnahme dar, die von WebAssembly zu JavaScript oder von JavaScript zu einem WebAssembly-Ausnahmebehandlung geworfen wird.
- [`WebAssembly.CompileError()`](/de/docs/WebAssembly/Reference/JavaScript_interface/CompileError)
  - : Erstellt ein neues `CompileError`-Objekt von WebAssembly.
- [`WebAssembly.LinkError()`](/de/docs/WebAssembly/Reference/JavaScript_interface/LinkError)
  - : Erstellt ein neues `LinkError`-Objekt von WebAssembly.
- [`WebAssembly.RuntimeError()`](/de/docs/WebAssembly/Reference/JavaScript_interface/RuntimeError)
  - : Erstellt ein neues `RuntimeError`-Objekt von WebAssembly.

## Beispielprojekte

- [WASMSobel](https://github.com/JasonWeathersby/WASMSobel)
- Sehen Sie sich unser [webassembly-examples](https://github.com/mdn/webassembly-examples/) Repo für eine Reihe anderer Beispiele an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebAssembly auf Mozilla Forschung](https://research.mozilla.org/)
- [webassembly.org](https://webassembly.org/)
- [WebAssembly-Artikel auf dem Mozilla Hacks Blog](https://hacks.mozilla.org/category/webassembly/)
- [W3C WebAssembly Community Group](https://www.w3.org/community/webassembly/)
- [Emscripting a C Library to Wasm](https://web.dev/articles/emscripting-a-c-library)
