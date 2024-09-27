---
title: WebAssembly
slug: WebAssembly
l10n:
  sourceCommit: e7314460d3614ad8cd4cb971f5f685ece2b31d28
---

{{WebAssemblySidebar}}

WebAssembly ist eine Art von Code, der in modernen Webbrowsern ausgeführt werden kann – es handelt sich um eine niedrigstufige, assemblierungsähnliche Sprache mit einem kompakten binären Format, das nahezu native Leistung bietet und Sprachen wie C/C++, C# und Rust ein Kompilierungsziel bietet, damit sie im Web ausgeführt werden können. Es ist auch dafür konzipiert, neben JavaScript zu laufen, sodass beide zusammenarbeiten können.

## Kurz gesagt

WebAssembly hat enorme Auswirkungen auf die Webplattform – es bietet eine Möglichkeit, Code, der in mehreren Sprachen geschrieben wurde, mit nahezu nativer Geschwindigkeit im Web auszuführen. Damit können Client-Anwendungen im Web laufen, die es bisher nicht konnten.

WebAssembly ist dazu gedacht, JavaScript zu ergänzen und daneben zu laufen – mithilfe der WebAssembly JavaScript-APIs können Sie WebAssembly-Module in eine JavaScript-Anwendung laden und die Funktionalität zwischen beiden teilen. Auf diese Weise können Sie die Leistungsfähigkeit von WebAssembly und die Ausdrucksfähigkeit sowie Flexibilität von JavaScript in derselben Anwendung nutzen, selbst wenn Sie nicht wissen, wie man WebAssembly-Code schreibt.

Und was noch besser ist: Es wird als Webstandard über die [W3C WebAssembly Working Group](https://www.w3.org/wasm/) und die [Community Group](https://www.w3.org/community/webassembly/) entwickelt, mit aktiver Beteiligung aller großen Browseranbieter.

## Leitfäden

- [WebAssembly-Konzepte](/de/docs/WebAssembly/Concepts)
  - : Beginnen Sie, indem Sie die grundlegenden Konzepte von WebAssembly kennenlernen – was es ist, warum es so nützlich ist, wie es in die Webplattform (und darüber hinaus) passt und wie es verwendet wird.
- [Kompilieren eines neuen C/C++-Moduls zu WebAssembly](/de/docs/WebAssembly/C_to_Wasm)
  - : Wenn Sie Code in C/C++ geschrieben haben, können Sie ihn mithilfe eines Tools wie [Emscripten](https://emscripten.org/) in Wasm kompilieren. Lassen Sie uns schauen, wie das funktioniert.
- [Kompilieren eines bestehenden C-Moduls zu WebAssembly](/de/docs/WebAssembly/existing_C_to_Wasm)
  - : Ein zentraler Anwendungsfall für WebAssembly besteht darin, das bestehende Ökosystem von C-Bibliotheken zu nutzen und Entwicklern zu ermöglichen, sie im Web zu verwenden.
- [Kompilieren von Rust zu WebAssembly](/de/docs/WebAssembly/Rust_to_Wasm)
  - : Wenn Sie Rust-Code geschrieben haben, können Sie ihn zu WebAssembly kompilieren! Dieses Tutorial führt Sie durch alles, was Sie wissen müssen, um ein Rust-Projekt zu Wasm zu kompilieren und in einer bestehenden Webanwendung zu verwenden.
- [Laden und Ausführen von WebAssembly-Code](/de/docs/WebAssembly/Loading_and_running)
  - : Nachdem Sie ein Wasm-Modul haben, behandelt dieser Artikel, wie Sie es abrufen, kompilieren und instanziieren, indem Sie die [WebAssembly JavaScript](/de/docs/WebAssembly/JavaScript_interface) API mit den [Fetch](/de/docs/Web/API/Fetch_API) oder [XHR](/de/docs/Web/API/XMLHttpRequest) APIs kombinieren.
- [Verwenden der WebAssembly JavaScript API](/de/docs/WebAssembly/Using_the_JavaScript_API)
  - : Sobald Sie ein Wasm-Modul geladen haben, möchten Sie es verwenden. In diesem Artikel zeigen wir Ihnen, wie Sie WebAssembly über die WebAssembly JavaScript API verwenden.
- [Exportierte WebAssembly-Funktionen](/de/docs/WebAssembly/Exported_functions)
  - : Exportierte WebAssembly-Funktionen sind die JavaScript-Abbilder von WebAssembly-Funktionen, die das Aufrufen von WebAssembly-Code aus JavaScript ermöglichen. Dieser Artikel beschreibt, was sie sind.
- [Verständnis des WebAssembly-Textformats](/de/docs/WebAssembly/Understanding_the_text_format)
  - : Dieser Artikel erklärt das Wasm-Textformat. Dies ist die niedrigstufige textuelle Darstellung eines Wasm-Moduls, die in den Entwicklertools des Browsers beim Debuggen gezeigt wird.
- [Konvertierung des WebAssembly-Textformats in Wasm](/de/docs/WebAssembly/Text_format_to_Wasm)
  - : Dieser Artikel bietet eine Anleitung dazu, wie man ein WebAssembly-Modul, das im Textformat geschrieben ist, in ein Wasm-Binärformat umwandelt.

## API-Referenz

- [WebAssembly-Befehlsreferenz](/de/docs/WebAssembly/Reference)
  - : Referenzdokumentation mit interaktiven Beispielen für die Menge der WebAssembly-Operatoren.
- [WebAssembly JavaScript-Schnittstelle](/de/docs/WebAssembly/JavaScript_interface)
  - : Dieses Objekt fungiert als Namensraum für alle mit WebAssembly verbundenen Funktionen.
- [`WebAssembly.Global()`](/de/docs/WebAssembly/JavaScript_interface/Global)
  - : Ein `WebAssembly.Global`-Objekt stellt eine globale Variableninstanz dar, die sowohl von JavaScript als auch über eine oder mehrere [`WebAssembly.Module`](/de/docs/WebAssembly/JavaScript_interface/Module)-Instanzen importierbar/exportierbar ist. Dies ermöglicht das dynamische Verlinken mehrerer Module.
- [`WebAssembly.Module()`](/de/docs/WebAssembly/JavaScript_interface/Module)
  - : Ein `WebAssembly.Module`-Objekt enthält zustandslosen WebAssembly-Code, der bereits vom Browser kompiliert wurde und effizient [mit Workers geteilt](/de/docs/Web/API/Worker/postMessage) und mehrfach instanziiert werden kann.
- [`WebAssembly.Instance()`](/de/docs/WebAssembly/JavaScript_interface/Instance)
  - : Ein `WebAssembly.Instance`-Objekt ist eine zustandsbehaftete, ausführbare Instanz eines `Module`. `Instance`-Objekte enthalten alle [exportierten WebAssembly-Funktionen](/de/docs/WebAssembly/Exported_functions), die das Aufrufen von WebAssembly-Code aus JavaScript ermöglichen.
- [`WebAssembly.compile()`](/de/docs/WebAssembly/JavaScript_interface/compile_static)
  - : Die Funktion `WebAssembly.compile()` kompiliert WebAssembly-Binärcode in ein `WebAssembly.Module`-Objekt.
- [`WebAssembly.compileStreaming()`](/de/docs/WebAssembly/JavaScript_interface/compileStreaming_static)
  - : Die Funktion `WebAssembly.compileStreaming()` kompiliert ein `WebAssembly.Module` direkt aus einer gestreamten Quelle.
- [`WebAssembly.instantiate()`](/de/docs/WebAssembly/JavaScript_interface/instantiate_static)
  - : Die Funktion `WebAssembly.instantiate()` ermöglicht es Ihnen, WebAssembly-Code zu kompilieren und instanziieren.
- [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/JavaScript_interface/instantiateStreaming_static)
  - : Die Funktion `WebAssembly.instantiateStreaming()` ist die primäre API zum Kompilieren und Instanziieren von WebAssembly-Code und liefert sowohl ein `Module` als auch seine erste `Instance`.
- [`WebAssembly.validate()`](/de/docs/WebAssembly/JavaScript_interface/validate_static)
  - : Die Funktion `WebAssembly.validate()` validiert ein gegebenes typisiertes Array von WebAssembly-Binärcode.
- [`WebAssembly.Memory()`](/de/docs/WebAssembly/JavaScript_interface/Memory)
  - : Ein `WebAssembly.Memory`-Objekt ist ein erweiterbarer {{jsxref("Global_objects/ArrayBuffer", "ArrayBuffer")}}, der die rohen Bytes des Speichers hält, auf die eine `Instance` zugreift.
- [`WebAssembly.Table()`](/de/docs/WebAssembly/JavaScript_interface/Table)
  - : Ein `WebAssembly.Table`-Objekt ist ein erweiterbares typisiertes Array von undurchsichtigen Werten, wie Funktionsreferenzen, auf das eine `Instance` zugreift.
- [`WebAssembly.Tag()`](/de/docs/WebAssembly/JavaScript_interface/Tag)
  - : Das `WebAssembly.Tag`-Objekt definiert einen Typ von WebAssembly-Ausnahme, die zu/von WebAssembly-Code geworfen werden kann.
- [`WebAssembly.Exception()`](/de/docs/WebAssembly/JavaScript_interface/Exception)
  - : Das `WebAssembly.Exception`-Objekt stellt eine Laufzeitausnahme dar, die von WebAssembly zu JavaScript oder von JavaScript zu einem WebAssembly-Ausnahme-Handler geworfen wird.
- [`WebAssembly.CompileError()`](/de/docs/WebAssembly/JavaScript_interface/CompileError)
  - : Erzeugt ein neues WebAssembly-`CompileError`-Objekt.
- [`WebAssembly.LinkError()`](/de/docs/WebAssembly/JavaScript_interface/LinkError)
  - : Erzeugt ein neues WebAssembly-`LinkError`-Objekt.
- [`WebAssembly.RuntimeError()`](/de/docs/WebAssembly/JavaScript_interface/RuntimeError)
  - : Erzeugt ein neues WebAssembly-`RuntimeError`-Objekt.

## Beispiele

- [WASMSobel](https://github.com/JasonWeathersby/WASMSobel)
- Schauen Sie sich unser [webassembly-examples](https://github.com/mdn/webassembly-examples/) Repository für eine Anzahl weiterer Beispiele an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebAssembly bei Mozilla Research](https://research.mozilla.org/)
- [webassembly.org](https://webassembly.org/)
- [WebAssembly-Artikel auf dem Mozilla Hacks Blog](https://hacks.mozilla.org/category/webassembly/)
- [W3C WebAssembly Community Group](https://www.w3.org/community/webassembly/)
- [Emscripting einer C-Bibliothek zu Wasm](https://web.dev/articles/emscripting-a-c-library)
