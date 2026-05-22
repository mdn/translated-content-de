---
title: WebAssembly
slug: WebAssembly
l10n:
  sourceCommit: 48b0dc43b7c13a2c9a5d2c56f110444d2550b90e
---

WebAssembly ist eine Art von Code, der in modernen Webbrowsern ausgeführt werden kann. Es handelt sich um eine niedrigstufige, assemblierungsähnliche Sprache mit einem kompakten Binärformat, das nahezu native Leistung erbringt und Sprachen wie C/C++, C# und Rust ein Kompilationsziel bietet, damit sie im Web ausgeführt werden können.

WebAssembly ist so konzipiert, dass es JavaScript ergänzt und neben ihm läuft — mithilfe der WebAssembly JavaScript-APIs können Sie WebAssembly-Module in eine JavaScript-Anwendung laden und Funktionalität zwischen den beiden teilen. Dadurch können Sie die Leistung und Stärke von WebAssembly und die Ausdruckskraft und Flexibilität von JavaScript in derselben App nutzen, selbst wenn Sie nicht wissen, wie man WebAssembly-Code schreibt.

WebAssembly bietet eine Möglichkeit, Code, der in mehreren Sprachen geschrieben wurde, im Web mit nahezu nativer Geschwindigkeit auszuführen, und es ermöglicht Client-Anwendungen, im Web zu laufen, die zuvor nicht ausgeführt werden konnten.

## Leitfäden

Die [WebAssembly-Leitfäden](/de/docs/WebAssembly/Guides) behandeln Themen wie hochrangige Konzepte, das Kompilieren aus verschiedenen Sprachen, die textuelle Darstellung des Wasm-Binärformats und wie man WebAssembly ausführt.

- [WebAssembly-Konzepte](/de/docs/WebAssembly/Guides/Concepts)
  - : Starten Sie mit dem Lesen der hochrangigen Konzepte von WebAssembly — was es ist, warum es so nützlich ist, wie es in die Webplattform (und darüber hinaus) passt, und wie man es benutzt.
- [Ein neues C/C++-Modul in WebAssembly kompilieren](/de/docs/WebAssembly/Guides/C_to_Wasm)
  - : Wenn Sie Code in C/C++ geschrieben haben, können Sie ihn dann mit einem Tool wie [Emscripten](https://emscripten.org/) in Wasm kompilieren. Lassen Sie uns schauen, wie es funktioniert.
- [Ein bestehendes C-Modul in WebAssembly kompilieren](/de/docs/WebAssembly/Guides/Existing_C_to_Wasm)
  - : Ein Hauptanwendungsfall für WebAssembly ist, das bestehende Ökosystem von C-Bibliotheken zu nutzen und Entwicklern zu ermöglichen, sie im Web zu verwenden.
- [Von Rust nach WebAssembly kompilieren](/de/docs/WebAssembly/Guides/Rust_to_Wasm)
  - : Wenn Sie Rust-Code geschrieben haben, können Sie ihn in WebAssembly kompilieren! Diese Anleitung führt Sie durch alles, was Sie wissen müssen, um ein Rust-Projekt in Wasm zu kompilieren und in einer bestehenden Webanwendung zu verwenden.
- [WebAssembly-Code laden und ausführen](/de/docs/WebAssembly/Guides/Loading_and_running)
  - : Nachdem Sie ein Wasm-Modul haben, deckt dieser Artikel ab, wie man es abruft, kompiliert und instanziiert, indem die [WebAssembly JavaScript](/de/docs/WebAssembly/Reference/JavaScript_interface) API mit den [Fetch](/de/docs/Web/API/Fetch_API) oder [XHR](/de/docs/Web/API/XMLHttpRequest) APIs kombiniert wird.
- [Die WebAssembly JavaScript API verwenden](/de/docs/WebAssembly/Guides/Using_the_JavaScript_API)
  - : Sobald Sie ein Wasm-Modul geladen haben, werden Sie es verwenden wollen. In diesem Artikel zeigen wir Ihnen, wie man WebAssembly über die WebAssembly JavaScript API verwendet.
- [Exportierte WebAssembly-Funktionen](/de/docs/WebAssembly/Guides/Exported_functions)
  - : Exportierte WebAssembly-Funktionen sind die JavaScript-Widerspiegelungen von WebAssembly-Funktionen, die es ermöglichen, WebAssembly-Code von JavaScript aufzurufen. Dieser Artikel beschreibt, was sie sind.
- [Das WebAssembly-Textformat verstehen](/de/docs/WebAssembly/Guides/Understanding_the_text_format)
  - : Dieser Artikel erklärt das Wasm-Textformat. Dies ist die niedrigstufige textuelle Darstellung eines Wasm-Moduls, die beim Debuggen in den Entwickler-Tools des Browsers angezeigt wird.
- [WebAssembly-Textformat in Wasm umwandeln](/de/docs/WebAssembly/Guides/Text_format_to_Wasm)
  - : Dieser Artikel bietet eine Anleitung, wie man ein WebAssembly-Modul, das im Textformat geschrieben ist, in ein Wasm-Binärformat umwandelt.

## API-Referenz

- [WebAssembly-Anweisungsreferenz](/de/docs/WebAssembly/Reference)
  - : Referenzdokumentation mit interaktiven Beispielen für die Menge der WebAssembly-Operatoren.
- [WebAssembly-JavaScript-Schnittstelle](/de/docs/WebAssembly/Reference/JavaScript_interface)
  - : Dieses Objekt fungiert als Namensraum für alle mit WebAssembly verbundenen Funktionalitäten.
- [`WebAssembly.Global()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Global)
  - : Ein `WebAssembly.Global`-Objekt stellt eine globale Variableninstanz dar, die sowohl von JavaScript aus zugänglich als auch über eine oder mehrere [`WebAssembly.Module`](/de/docs/WebAssembly/Reference/JavaScript_interface/Module)-Instanzen importierbar/exportierbar ist. Dies ermöglicht das dynamische Verknüpfen mehrerer Module.
- [`WebAssembly.Module()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Module)
  - : Ein `WebAssembly.Module`-Objekt enthält zustandslosen WebAssembly-Code, der bereits vom Browser kompiliert wurde und effizient [mit Workern geteilt werden](/de/docs/Web/API/Worker/postMessage) und mehrfach instanziiert werden kann.
- [`WebAssembly.Instance()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Instance)
  - : Ein `WebAssembly.Instance`-Objekt ist eine zustandsbehaftete, ausführbare Instanz eines `Module`. `Instance`-Objekte enthalten alle [exportierten WebAssembly-Funktionen](/de/docs/WebAssembly/Guides/Exported_functions), die es ermöglichen, von JavaScript aus auf WebAssembly-Code zuzugreifen.
- [`WebAssembly.compile()`](/de/docs/WebAssembly/Reference/JavaScript_interface/compile_static)
  - : Die `WebAssembly.compile()`-Funktion kompiliert WebAssembly-Binärcode in ein `WebAssembly.Module`-Objekt.
- [`WebAssembly.compileStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/compileStreaming_static)
  - : Die `WebAssembly.compileStreaming()`-Funktion kompiliert ein `WebAssembly.Module` direkt aus einer gestreamten zugrunde liegenden Quelle.
- [`WebAssembly.instantiate()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiate_static)
  - : Die `WebAssembly.instantiate()`-Funktion ermöglicht das Kompilieren und Instanziieren von WebAssembly-Code.
- [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static)
  - : Die `WebAssembly.instantiateStreaming()`-Funktion ist die primäre API zum Kompilieren und Instanziieren von WebAssembly-Code und gibt sowohl ein `Module` als auch seine erste `Instance` zurück.
- [`WebAssembly.validate()`](/de/docs/WebAssembly/Reference/JavaScript_interface/validate_static)
  - : Die `WebAssembly.validate()`-Funktion validiert ein gegebenes typisiertes Array von WebAssembly-Binärcode.
- [`WebAssembly.Memory()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory)
  - : Ein `WebAssembly.Memory`-Objekt ist ein skalierbarer {{jsxref("Global_Objects/ArrayBuffer", "ArrayBuffer")}}, das die rohen Bytes des Speichers enthält, auf die eine `Instance` zugreift.
- [`WebAssembly.Table()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Table)
  - : Ein `WebAssembly.Table`-Objekt ist ein skalierbares typisiertes Array von undurchsichtigen Werten, wie Funktionsreferenzen, auf die eine `Instance` zugreift.
- [`WebAssembly.Tag()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Tag)
  - : Das `WebAssembly.Tag`-Objekt definiert einen Typ von WebAssembly-Ausnahme, der von/zur WebAssembly-Code geworfen werden kann.
- [`WebAssembly.Exception()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Exception)
  - : Das `WebAssembly.Exception`-Objekt repräsentiert eine Laufzeitausnahme, die von WebAssembly nach JavaScript geworfen wird oder von JavaScript zu einem WebAssembly-Ausnahmehandler.
- [`WebAssembly.CompileError()`](/de/docs/WebAssembly/Reference/JavaScript_interface/CompileError)
  - : Erzeugt ein neues WebAssembly `CompileError`-Objekt.
- [`WebAssembly.LinkError()`](/de/docs/WebAssembly/Reference/JavaScript_interface/LinkError)
  - : Erzeugt ein neues WebAssembly `LinkError`-Objekt.
- [`WebAssembly.RuntimeError()`](/de/docs/WebAssembly/Reference/JavaScript_interface/RuntimeError)
  - : Erzeugt ein neues WebAssembly `RuntimeError`-Objekt.

## Beispielprojekte

- [WASMSobel](https://github.com/JasonWeathersby/WASMSobel)
- Sehen Sie sich unser [webassembly-examples](https://github.com/mdn/webassembly-examples/)-Repository für eine Reihe weiterer Beispiele an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebAssembly auf Mozilla Research](https://research.mozilla.org/)
- [webassembly.org](https://webassembly.org/)
- [WebAssembly-Artikel auf dem Mozilla Hacks Blog](https://hacks.mozilla.org/category/webassembly/)
- [W3C WebAssembly Community Gruppe](https://www.w3.org/community/webassembly/)
- [Ein C-Bibliothek zu Wasm emskripten](https://web.dev/articles/emscripting-a-c-library)
