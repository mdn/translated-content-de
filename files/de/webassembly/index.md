---
title: WebAssembly
slug: WebAssembly
l10n:
  sourceCommit: a21bf857ac668ad72a36aad0d8ad7e87c6bdc4d8
---

WebAssembly ist eine Art von Code, der in modernen Webbrowsern ausgeführt werden kann. Es handelt sich um eine Low-Level-ähnliche Assemblersprache mit einem kompakten binären Format, das nahezu native Leistung bietet und Sprachen wie C/C++, C# und Rust ein Kompilierungsziel bietet, sodass sie im Web ausgeführt werden können.

WebAssembly ist so konzipiert, dass es JavaScript ergänzt und parallel dazu läuft — mit den WebAssembly JavaScript-APIs können Sie WebAssembly-Module in eine JavaScript-Anwendung laden und Funktionalitäten zwischen beiden teilen. Dadurch können Sie die Leistung und Leistungsfähigkeit von WebAssembly sowie die Ausdruckskraft und Flexibilität von JavaScript in derselben Anwendung nutzen, auch wenn Sie nicht wissen, wie man WebAssembly-Code schreibt.

WebAssembly hat große Auswirkungen auf die Webplattform, nicht nur weil es ermöglicht, dass Code, der in mehreren Sprachen geschrieben wurde, mit nahezu nativer Geschwindigkeit im Web läuft, sondern auch weil es ermöglicht, dass Client-Anwendungen, die bisher nicht im Web laufen konnten, nun im Web ausgeführt werden.

Und was noch besser ist: Es wird als Webstandard durch die [W3C WebAssembly Working Group](https://www.w3.org/groups/wg/wasm/) und die [Community Group](https://www.w3.org/community/webassembly/) mit aktiver Teilnahme aller großen Browseranbieter entwickelt.

## Leitfäden

Die [WebAssembly-Leitfäden](/de/docs/WebAssembly/Guides) behandeln Themen wie hochrangige Konzepte, das Kompilieren aus verschiedenen Sprachen, die textuelle Darstellung des Wasm-Binärformats und wie WebAssembly ausgeführt wird.

- [WebAssembly-Konzepte](/de/docs/WebAssembly/Guides/Concepts)
  - : Beginnen Sie, indem Sie die hochrangigen Konzepte hinter WebAssembly lesen — was es ist, warum es so nützlich ist, wie es in die Webplattform (und darüber hinaus) passt und wie man es verwendet.
- [Ein neues C/C++-Modul in WebAssembly kompilieren](/de/docs/WebAssembly/Guides/C_to_Wasm)
  - : Wenn Sie Code in C/C++ geschrieben haben, können Sie ihn mit einem Tool wie [Emscripten](https://emscripten.org/) in Wasm kompilieren. Schauen wir uns an, wie das funktioniert.
- [Ein bestehendes C-Modul in WebAssembly kompilieren](/de/docs/WebAssembly/Guides/Existing_C_to_Wasm)
  - : Ein zentrales Anwendungsgebiet von WebAssembly besteht darin, das bestehende Ökosystem von C-Bibliotheken zu nutzen und Entwicklern zu ermöglichen, sie im Web zu verwenden.
- [Von Rust zu WebAssembly kompilieren](/de/docs/WebAssembly/Guides/Rust_to_Wasm)
  - : Wenn Sie Rust-Code geschrieben haben, können Sie ihn in WebAssembly kompilieren! Dieses Tutorial führt Sie durch alles, was Sie wissen müssen, um ein Rust-Projekt in Wasm zu kompilieren und es in einer bestehenden Webanwendung zu verwenden.
- [WebAssembly-Code laden und ausführen](/de/docs/WebAssembly/Guides/Loading_and_running)
  - : Nachdem Sie ein Wasm-Modul haben, behandelt dieser Artikel, wie man es abruft, kompiliert und instanziiert, indem man die [WebAssembly JavaScript](/de/docs/WebAssembly/Reference/JavaScript_interface)-API mit den [Fetch](/de/docs/Web/API/Fetch_API)- oder [XHR](/de/docs/Web/API/XMLHttpRequest)-APIs kombiniert.
- [Die WebAssembly JavaScript-API verwenden](/de/docs/WebAssembly/Guides/Using_the_JavaScript_API)
  - : Sobald Sie ein Wasm-Modul geladen haben, möchten Sie es verwenden. In diesem Artikel zeigen wir Ihnen, wie Sie WebAssembly über die WebAssembly JavaScript-API verwenden.
- [Exportierte WebAssembly-Funktionen](/de/docs/WebAssembly/Guides/Exported_functions)
  - : Exportierte WebAssembly-Funktionen sind die JavaScript-Entsprechungen von WebAssembly-Funktionen, die es ermöglichen, WebAssembly-Code von JavaScript aus aufzurufen. Dieser Artikel beschreibt, was sie sind.
- [Das WebAssembly-Textformat verstehen](/de/docs/WebAssembly/Guides/Understanding_the_text_format)
  - : Dieser Artikel erklärt das Wasm-Textformat. Dies ist die niedrigstufige textuelle Darstellung eines Wasm-Moduls, die in Entwicklertools des Browsers beim Debuggen angezeigt wird.
- [Das WebAssembly-Textformat in Wasm umwandeln](/de/docs/WebAssembly/Guides/Text_format_to_Wasm)
  - : Dieser Artikel bietet eine Anleitung, wie man ein in Textformat geschriebenes WebAssembly-Modul in ein Wasm-Binärformat umwandelt.

## API-Referenz

- [WebAssembly-Befehlsreferenz](/de/docs/WebAssembly/Reference)
  - : Referenzdokumentation mit interaktiven Beispielen für die Reihe von WebAssembly-Operatoren.
- [WebAssembly JavaScript-Schnittstelle](/de/docs/WebAssembly/Reference/JavaScript_interface)
  - : Dieses Objekt fungiert als Namensraum für alle WebAssembly-bezogenen Funktionalitäten.
- [`WebAssembly.Global()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Global)
  - : Ein `WebAssembly.Global`-Objekt stellt eine globale Variable dar, auf die sowohl von JavaScript aus zugegriffen werden kann als auch die über mehrere [`WebAssembly.Module`](/de/docs/WebAssembly/Reference/JavaScript_interface/Module)-Instanzen hinweg importiert/exportiert werden kann. Dies ermöglicht dynamisches Verlinken mehrerer Module.
- [`WebAssembly.Module()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Module)
  - : Ein `WebAssembly.Module`-Objekt enthält zustandslosen WebAssembly-Code, der bereits vom Browser kompiliert wurde und effizient [mit Workern geteilt](/de/docs/Web/API/Worker/postMessage) und mehrfach instanziiert werden kann.
- [`WebAssembly.Instance()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Instance)
  - : Ein `WebAssembly.Instance`-Objekt ist eine zustandsbehaftete, ausführbare Instanz eines `Module`. `Instance`-Objekte enthalten alle [exportierten WebAssembly-Funktionen](/de/docs/WebAssembly/Guides/Exported_functions), die es ermöglichen, WebAssembly-Code von JavaScript aus aufzurufen.
- [`WebAssembly.compile()`](/de/docs/WebAssembly/Reference/JavaScript_interface/compile_static)
  - : Die Funktion `WebAssembly.compile()` kompiliert WebAssembly-Binärcode in ein `WebAssembly.Module`-Objekt.
- [`WebAssembly.compileStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/compileStreaming_static)
  - : Die Funktion `WebAssembly.compileStreaming()` kompiliert ein `WebAssembly.Module` direkt aus einer gestreamten Quellbasis.
- [`WebAssembly.instantiate()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiate_static)
  - : Die Funktion `WebAssembly.instantiate()` ermöglicht das Kompilieren und Instanziieren von WebAssembly-Code.
- [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static)
  - : Die Funktion `WebAssembly.instantiateStreaming()` ist die primäre API für das Kompilieren und Instanziieren von WebAssembly-Code und gibt sowohl ein `Module` als auch seine erste `Instance` zurück.
- [`WebAssembly.validate()`](/de/docs/WebAssembly/Reference/JavaScript_interface/validate_static)
  - : Die Funktion `WebAssembly.validate()` validiert ein gegebenes typisiertes Array von WebAssembly-Binärcode.
- [`WebAssembly.Memory()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory)
  - : Ein `WebAssembly.Memory`-Objekt ist ein veränderbares {{jsxref("Global_objects/ArrayBuffer", "ArrayBuffer")}}, das die rohen Bytes des Speichers enthält, auf den eine `Instance` zugreift.
- [`WebAssembly.Table()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Table)
  - : Ein `WebAssembly.Table`-Objekt ist ein veränderbares typisiertes Array von undurchsichtigen Werten, wie Funktionsreferenzen, auf die eine `Instance` zugreift.
- [`WebAssembly.Tag()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Tag)
  - : Das `WebAssembly.Tag`-Objekt definiert eine Art von WebAssembly-Ausnahme, die von/zu WebAssembly-Code ausgelöst werden kann.
- [`WebAssembly.Exception()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Exception)
  - : Das `WebAssembly.Exception`-Objekt stellt eine Laufzeitausnahme dar, die von WebAssembly zu JavaScript geworfen wird oder von JavaScript zu einem WebAssembly-Ausnahmehandler geworfen wird.
- [`WebAssembly.CompileError()`](/de/docs/WebAssembly/Reference/JavaScript_interface/CompileError)
  - : Erstellt ein neues WebAssembly `CompileError`-Objekt.
- [`WebAssembly.LinkError()`](/de/docs/WebAssembly/Reference/JavaScript_interface/LinkError)
  - : Erstellt ein neues WebAssembly `LinkError`-Objekt.
- [`WebAssembly.RuntimeError()`](/de/docs/WebAssembly/Reference/JavaScript_interface/RuntimeError)
  - : Erstellt ein neues WebAssembly `RuntimeError`-Objekt.

## Beispielprojekte

- [WASMSobel](https://github.com/JasonWeathersby/WASMSobel)
- Sehen Sie sich unser [webassembly-examples](https://github.com/mdn/webassembly-examples/)-Repository für weitere Beispiele an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebAssembly auf Mozilla Research](https://research.mozilla.org/)
- [webassembly.org](https://webassembly.org/)
- [WebAssembly-Artikel im Mozilla Hacks Blog](https://hacks.mozilla.org/category/webassembly/)
- [W3C WebAssembly Community Group](https://www.w3.org/community/webassembly/)
- [Emscripting a C Library to Wasm](https://web.dev/articles/emscripting-a-c-library)
