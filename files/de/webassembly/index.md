---
title: WebAssembly
slug: WebAssembly
l10n:
  sourceCommit: c1564acf160ef4b320fb7b89ab65211b9c50cf1b
---

WebAssembly ist eine Art von Code, der in modernen Webbrowsern ausgeführt werden kann. Es handelt sich um eine niedrigstufige, assemblerähnliche Sprache mit einem kompakten Binärformat, das nahezu native Leistung bietet und Sprachen wie C/C++, C# und Rust ein Kompilierungsziel bietet, damit sie im Web ausgeführt werden können. Es ist auch dafür konzipiert, neben JavaScript ausgeführt zu werden, wodurch beide zusammenarbeiten können.

WebAssembly ist darauf ausgelegt, JavaScript zu ergänzen und daneben zu laufen — mit den WebAssembly-JavaScript-APIs können Sie WebAssembly-Module in eine JavaScript-App laden und Funktionalitäten zwischen beiden teilen. Dies ermöglicht es Ihnen, die Leistung und Stärke von WebAssembly sowie die Ausdruckskraft und Flexibilität von JavaScript in derselben App zu nutzen, selbst wenn Sie nicht wissen, wie man WebAssembly-Code schreibt.

WebAssembly hat große Auswirkungen auf die Webplattform, nicht nur weil es ermöglicht, dass Code in mehreren Sprachen im Web mit nahezu nativer Geschwindigkeit ausgeführt werden kann, sondern auch weil es Client-Apps ermöglicht, im Web ausgeführt zu werden, die zuvor nicht ausgeführt werden konnten.

Und das Beste ist, dass es als Webstandard über die [W3C WebAssembly Working Group](https://www.w3.org/groups/wg/wasm/) und die [Community Group](https://www.w3.org/community/webassembly/) mit aktiver Beteiligung aller großen Browser-Anbieter entwickelt wird.

## Leitfaden

Die [WebAssembly-Leitfäden](/de/docs/WebAssembly/Guides) behandeln Themen wie Konzepte auf hoher Ebene, das Kompilieren aus verschiedenen Sprachen, die textuelle Darstellung des Wasm-Binärformats und wie WebAssembly ausgeführt wird.

- [WebAssembly-Konzepte](/de/docs/WebAssembly/Guides/Concepts)
  - : Beginnen Sie mit dem Lesen der Konzepte auf hoher Ebene hinter WebAssembly — was es ist, warum es so nützlich ist, wie es in die Webplattform (und darüber hinaus) passt und wie es verwendet wird.
- [Kompilierung eines neuen C/C++-Moduls zu WebAssembly](/de/docs/WebAssembly/Guides/C_to_Wasm)
  - : Wenn Sie Code in C/C++ geschrieben haben, können Sie ihn mit einem Tool wie [Emscripten](https://emscripten.org/) in Wasm kompilieren. Schauen wir uns an, wie das funktioniert.
- [Kompilierung eines bestehenden C-Moduls zu WebAssembly](/de/docs/WebAssembly/Guides/Existing_C_to_Wasm)
  - : Ein Hauptanwendungsfall für WebAssembly ist es, das bestehende Ökosystem von C-Bibliotheken zu nutzen und Entwicklern zu ermöglichen, sie im Web zu verwenden.
- [Kompilieren von Rust zu WebAssembly](/de/docs/WebAssembly/Guides/Rust_to_Wasm)
  - : Wenn Sie Rust-Code geschrieben haben, können Sie ihn in WebAssembly kompilieren! Dieses Tutorial führt Sie durch alles, was Sie wissen müssen, um ein Rust-Projekt zu Wasm zu kompilieren und in einer bestehenden Web-App zu verwenden.
- [Laden und Ausführen von WebAssembly-Code](/de/docs/WebAssembly/Guides/Loading_and_running)
  - : Nachdem Sie ein Wasm-Modul haben, behandelt dieser Artikel, wie man es abrufen, kompilieren und instanziieren kann, indem man die [WebAssembly-JavaScript](/de/docs/WebAssembly/Reference/JavaScript_interface)-API mit den [Fetch](/de/docs/Web/API/Fetch_API)- oder [XHR](/de/docs/Web/API/XMLHttpRequest)-APIs kombiniert.
- [Verwenden der WebAssembly-JavaScript-API](/de/docs/WebAssembly/Guides/Using_the_JavaScript_API)
  - : Sobald Sie ein Wasm-Modul geladen haben, möchten Sie es verwenden. In diesem Artikel zeigen wir Ihnen, wie man WebAssembly über die WebAssembly-JavaScript-API nutzt.
- [Exportierte WebAssembly-Funktionen](/de/docs/WebAssembly/Guides/Exported_functions)
  - : Exportierte WebAssembly-Funktionen sind die JavaScript-Spiegelungen von WebAssembly-Funktionen, die das Aufrufen von WebAssembly-Code aus JavaScript ermöglichen. Dieser Artikel beschreibt, was sie sind.
- [Verstehen des WebAssembly-Textformats](/de/docs/WebAssembly/Guides/Understanding_the_text_format)
  - : Dieser Artikel erklärt das Wasm-Textformat. Dies ist die niedrigstufige textuelle Darstellung eines Wasm-Moduls, die in den Entwickler-Tools des Browsers beim Debugging angezeigt wird.
- [Konvertierung des WebAssembly-Textformats in Wasm](/de/docs/WebAssembly/Guides/Text_format_to_Wasm)
  - : Dieser Artikel bietet eine Anleitung, wie man ein in Textformat geschriebenes WebAssembly-Modul in ein Wasm-Binärformat konvertiert.

## API-Referenz

- [WebAssembly-Instruktionsreferenz](/de/docs/WebAssembly/Reference)
  - : Referenzdokumentation mit interaktiven Beispielen für die Menge der WebAssembly-Operatoren.
- [WebAssembly-JavaScript-Schnittstelle](/de/docs/WebAssembly/Reference/JavaScript_interface)
  - : Dieses Objekt fungiert als Namensraum für alle WebAssembly-bezogenen Funktionen.
- [`WebAssembly.Global()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Global)
  - : Ein `WebAssembly.Global`-Objekt stellt eine globale Variableninstanz dar, die sowohl von JavaScript aus zugänglich als auch in/zwischen mehreren [`WebAssembly.Module`](/de/docs/WebAssembly/Reference/JavaScript_interface/Module)-Instanzen importierbar/exportierbar ist. Dies ermöglicht das dynamische Verknüpfen mehrerer Module.
- [`WebAssembly.Module()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Module)
  - : Ein `WebAssembly.Module`-Objekt enthält zustandslosen WebAssembly-Code, der bereits vom Browser kompiliert wurde und effizient [mit Workern geteilt](/de/docs/Web/API/Worker/postMessage) und mehrfach instanziiert werden kann.
- [`WebAssembly.Instance()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Instance)
  - : Ein `WebAssembly.Instance`-Objekt ist eine zustandsbehaftete, ausführbare Instanz eines `Module`. `Instance`-Objekte enthalten alle [exportierten WebAssembly-Funktionen](/de/docs/WebAssembly/Guides/Exported_functions), die das Aufrufen von WebAssembly-Code aus JavaScript ermöglichen.
- [`WebAssembly.compile()`](/de/docs/WebAssembly/Reference/JavaScript_interface/compile_static)
  - : Die Funktion `WebAssembly.compile()` kompiliert WebAssembly-Binärcode in ein `WebAssembly.Module`-Objekt.
- [`WebAssembly.compileStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/compileStreaming_static)
  - : Die Funktion `WebAssembly.compileStreaming()` kompiliert ein `WebAssembly.Module` direkt aus einer gestreamten zugrunde liegenden Quelle.
- [`WebAssembly.instantiate()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiate_static)
  - : Die Funktion `WebAssembly.instantiate()` ermöglicht es Ihnen, WebAssembly-Code zu kompilieren und zu instanziieren.
- [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static)
  - : Die Funktion `WebAssembly.instantiateStreaming()` ist die primäre API zum Kompilieren und Instanziieren von WebAssembly-Code und gibt sowohl ein `Module` als auch seine erste `Instance` zurück.
- [`WebAssembly.validate()`](/de/docs/WebAssembly/Reference/JavaScript_interface/validate_static)
  - : Die Funktion `WebAssembly.validate()` validiert ein gegebenes typisiertes Array von WebAssembly-Binärcode.
- [`WebAssembly.Memory()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory)
  - : Ein `WebAssembly.Memory`-Objekt ist ein anpassbares {{jsxref("Global_objects/ArrayBuffer", "ArrayBuffer")}}, das die rohen Byte von Speicher enthält, auf die eine `Instance` zugreift.
- [`WebAssembly.Table()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Table)
  - : Ein `WebAssembly.Table`-Objekt ist ein anpassbares typisiertes Array von undurchsichtigen Werten, wie Funktionsreferenzen, die von einer `Instance` zugegriffen werden.
- [`WebAssembly.Tag()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Tag)
  - : Das `WebAssembly.Tag`-Objekt definiert eine Art von WebAssembly-Ausnahme, die in/zur WebAssembly-Code geworfen werden kann.
- [`WebAssembly.Exception()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Exception)
  - : Das `WebAssembly.Exception`-Objekt stellt eine Laufzeitausnahme dar, die von WebAssembly zu JavaScript oder von JavaScript zu einem WebAssembly-Ausnahmehandler geworfen wird.
- [`WebAssembly.CompileError()`](/de/docs/WebAssembly/Reference/JavaScript_interface/CompileError)
  - : Erstellt ein neues WebAssembly `CompileError` Objekt.
- [`WebAssembly.LinkError()`](/de/docs/WebAssembly/Reference/JavaScript_interface/LinkError)
  - : Erstellt ein neues WebAssembly `LinkError` Objekt.
- [`WebAssembly.RuntimeError()`](/de/docs/WebAssembly/Reference/JavaScript_interface/RuntimeError)
  - : Erstellt ein neues WebAssembly `RuntimeError` Objekt.

## Beispielprojekte

- [WASMSobel](https://github.com/JasonWeathersby/WASMSobel)
- Sehen Sie sich unser [webassembly-examples](https://github.com/mdn/webassembly-examples/) Repository für eine Reihe weiterer Beispiele an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebAssembly auf Mozilla Research](https://research.mozilla.org/)
- [webassembly.org](https://webassembly.org/)
- [WebAssembly-Artikel im Mozilla Hacks Blog](https://hacks.mozilla.org/category/webassembly/)
- [W3C WebAssembly Community Group](https://www.w3.org/community/webassembly/)
- [Emscripting einer C-Bibliothek zu Wasm](https://web.dev/articles/emscripting-a-c-library)
