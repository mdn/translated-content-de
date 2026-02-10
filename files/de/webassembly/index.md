---
title: WebAssembly
slug: WebAssembly
l10n:
  sourceCommit: d2769cc4ee162b7608e70bc7e208add3e183b939
---

WebAssembly ist eine Art von Code, der in modernen Webbrowsern ausgeführt werden kann. Es handelt sich um eine low-level, assemblerähnliche Sprache mit einem kompakten Binärformat, das mit nahezu nativer Leistung ausgeführt wird und Sprachen wie C/C++, C# und Rust ein Kompilierungsziel bietet, damit sie im Web laufen können.

WebAssembly ist so konzipiert, dass es JavaScript ergänzt und daneben ausgeführt wird – mit den WebAssembly JavaScript-APIs können Sie WebAssembly-Module in eine JavaScript-Anwendung laden und Funktionen zwischen beiden teilen. Dies ermöglicht, die Leistung und Power von WebAssembly sowie die Ausdruckskraft und Flexibilität von JavaScript in derselben Anwendung zu nutzen, selbst wenn Sie nicht wissen, wie man WebAssembly-Code schreibt.

WebAssembly hat große Auswirkungen auf die Web-Plattform, nicht nur weil es ermöglicht, dass Code, der in mehreren Sprachen geschrieben wurde, mit annähernd nativer Geschwindigkeit im Web laufen kann, sondern auch weil es Clientanwendungen ermöglicht, im Web ausgeführt zu werden, die vorher nicht laufen konnten.

Und was noch besser ist, es wird als Webstandard von der [W3C WebAssembly Working Group](https://www.w3.org/groups/wg/wasm/) und der [Community Group](https://www.w3.org/community/webassembly/) entwickelt, mit aktiver Teilnahme aller großen Browseranbieter.

## Leitfäden

Die [WebAssembly-Leitfäden](/de/docs/WebAssembly/Guides) behandeln Themen wie Konzepte auf hoher Ebene, das Kompilieren aus verschiedenen Sprachen, die textuelle Darstellung des Wasm-Binärformats und wie man WebAssembly ausführt.

- [WebAssembly-Konzepte](/de/docs/WebAssembly/Guides/Concepts)
  - : Fangen Sie an, indem Sie die Konzepte auf hoher Ebene hinter WebAssembly lesen – was es ist, warum es so nützlich ist, wie es in die Web-Plattform passt (und darüber hinaus) und wie man es verwendet.
- [Ein neues C/C++-Modul nach WebAssembly kompilieren](/de/docs/WebAssembly/Guides/C_to_Wasm)
  - : Wenn Sie Code in C/C++ geschrieben haben, können Sie ihn mit einem Tool wie [Emscripten](https://emscripten.org/) in Wasm kompilieren. Lassen Sie uns schauen, wie das funktioniert.
- [Ein vorhandenes C-Modul nach WebAssembly kompilieren](/de/docs/WebAssembly/Guides/Existing_C_to_Wasm)
  - : Ein zentraler Anwendungsfall für WebAssembly ist es, das bestehende Ökosystem von C-Bibliotheken zu nutzen und Entwicklern zu ermöglichen, diese im Web zu nutzen.
- [Kompilieren von Rust nach WebAssembly](/de/docs/WebAssembly/Guides/Rust_to_Wasm)
  - : Wenn Sie etwas Rust-Code geschrieben haben, können Sie ihn in WebAssembly kompilieren! Dieses Tutorial führt Sie durch alles, was Sie wissen müssen, um ein Rust-Projekt in Wasm zu kompilieren und in einer vorhandenen Webanwendung zu verwenden.
- [Laden und Ausführen von WebAssembly-Code](/de/docs/WebAssembly/Guides/Loading_and_running)
  - : Nachdem Sie ein Wasm-Modul haben, behandelt dieser Artikel, wie man es abruft, kompiliert und instanziiert und die [WebAssembly JavaScript](/de/docs/WebAssembly/Reference/JavaScript_interface)-API mit der [Fetch](/de/docs/Web/API/Fetch_API)-oder [XHR](/de/docs/Web/API/XMLHttpRequest)-API kombiniert.
- [Verwenden der WebAssembly JavaScript API](/de/docs/WebAssembly/Guides/Using_the_JavaScript_API)
  - : Sobald Sie ein Wasm-Modul geladen haben, möchten Sie es nutzen. In diesem Artikel zeigen wir Ihnen, wie Sie WebAssembly über die WebAssembly JavaScript API verwenden.
- [Exportierte WebAssembly-Funktionen](/de/docs/WebAssembly/Guides/Exported_functions)
  - : Exportierte WebAssembly-Funktionen sind die JavaScript-Reflexionen von WebAssembly-Funktionen, die es ermöglichen, WebAssembly-Code aus JavaScript aufzurufen. Dieser Artikel beschreibt, was sie sind.
- [Verstehen des WebAssembly-Textformats](/de/docs/WebAssembly/Guides/Understanding_the_text_format)
  - : Dieser Artikel erklärt das Wasm-Textformat. Dies ist die low-level, textuelle Darstellung eines Wasm-Moduls, die in den Entwickler-Tools des Browsers beim Debuggen angezeigt wird.
- [Konvertieren des WebAssembly-Textformats in Wasm](/de/docs/WebAssembly/Guides/Text_format_to_Wasm)
  - : Dieser Artikel bietet einen Leitfaden, wie man ein in Textformat geschriebenes WebAssembly-Modul in ein Wasm-Binärformat konvertiert.

## API-Referenz

- [WebAssembly-Instruktionsreferenz](/de/docs/WebAssembly/Reference)
  - : Referenzdokumentation mit interaktiven Beispielen für die Menge der WebAssembly-Operatoren.
- [WebAssembly-JavaScript-Interface](/de/docs/WebAssembly/Reference/JavaScript_interface)
  - : Dieses Objekt fungiert als Namensraum für alle WebAssembly-bezogenen Funktionen.
- [`WebAssembly.Global()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Global)
  - : Ein `WebAssembly.Global`-Objekt stellt eine globale Variableninstanz dar, die sowohl von JavaScript aus zugänglich als auch über eine oder mehrere [`WebAssembly.Module`](/de/docs/WebAssembly/Reference/JavaScript_interface/Module)-Instanzen importierbar/exportierbar ist. Dies ermöglicht dynamisches Verlinken mehrerer Module.
- [`WebAssembly.Module()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Module)
  - : Ein `WebAssembly.Module`-Objekt enthält zustandslosen WebAssembly-Code, der bereits vom Browser kompiliert wurde und effizient [mit Workern geteilt](/de/docs/Web/API/Worker/postMessage) und mehrfach instantiiert werden kann.
- [`WebAssembly.Instance()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Instance)
  - : Ein `WebAssembly.Instance`-Objekt ist eine zustandsbehaftete, ausführbare Instanz eines `Module`. `Instance`-Objekte enthalten alle [exportierten WebAssembly-Funktionen](/de/docs/WebAssembly/Guides/Exported_functions), die es ermöglichen, aus JavaScript heraus in WebAssembly-Code zu gelangen.
- [`WebAssembly.compile()`](/de/docs/WebAssembly/Reference/JavaScript_interface/compile_static)
  - : Die Funktion `WebAssembly.compile()` kompiliert WebAssembly-Binärcode in ein `WebAssembly.Module`-Objekt.
- [`WebAssembly.compileStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/compileStreaming_static)
  - : Die Funktion `WebAssembly.compileStreaming()` kompiliert ein `WebAssembly.Module` direkt aus einer gestreamten zugrunde liegenden Quelle.
- [`WebAssembly.instantiate()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiate_static)
  - : Die Funktion `WebAssembly.instantiate()` ermöglicht es, WebAssembly-Code zu kompilieren und zu instanziieren.
- [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static)
  - : Die Funktion `WebAssembly.instantiateStreaming()` ist die primäre API zum Kompilieren und Instanziieren von WebAssembly-Code und gibt sowohl ein `Module` als auch seine erste `Instance` zurück.
- [`WebAssembly.validate()`](/de/docs/WebAssembly/Reference/JavaScript_interface/validate_static)
  - : Die Funktion `WebAssembly.validate()` validiert ein gegebenes typisiertes Array von WebAssembly-Binärcode.
- [`WebAssembly.Memory()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory)
  - : Ein `WebAssembly.Memory`-Objekt ist ein anpassbarer {{jsxref("Global_objects/ArrayBuffer", "ArrayBuffer")}}, der die rohen Bytes des Speichers enthält, die von einer `Instance` angesprochen werden.
- [`WebAssembly.Table()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Table)
  - : Ein `WebAssembly.Table`-Objekt ist ein anpassbares typisiertes Array aus undurchsichtigen Werten, wie Funktionsreferenzen, die von einer `Instance` angesprochen werden.
- [`WebAssembly.Tag()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Tag)
  - : Das `WebAssembly.Tag`-Objekt definiert einen Typ von WebAssembly-Ausnahme, die zu/von WebAssembly-Code geworfen werden kann.
- [`WebAssembly.Exception()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Exception)
  - : Das `WebAssembly.Exception`-Objekt stellt eine zur Laufzeit von WebAssembly an JavaScript, oder von JavaScript zu einem WebAssembly-Ausnahme-Handler geworfene Ausnahme dar.
- [`WebAssembly.CompileError()`](/de/docs/WebAssembly/Reference/JavaScript_interface/CompileError)
  - : Erstellt ein neues WebAssembly-`CompileError`-Objekt.
- [`WebAssembly.LinkError()`](/de/docs/WebAssembly/Reference/JavaScript_interface/LinkError)
  - : Erstellt ein neues WebAssembly-`LinkError`-Objekt.
- [`WebAssembly.RuntimeError()`](/de/docs/WebAssembly/Reference/JavaScript_interface/RuntimeError)
  - : Erstellt ein neues WebAssembly-`RuntimeError`-Objekt.

## Beispielprojekte

- [WASMSobel](https://github.com/JasonWeathersby/WASMSobel)
- Sehen Sie sich unser [webassembly-examples](https://github.com/mdn/webassembly-examples/)-Repo für eine Reihe weiterer Beispiele an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebAssembly auf Mozilla Research](https://research.mozilla.org/)
- [webassembly.org](https://webassembly.org/)
- [WebAssembly-Artikel auf dem Mozilla Hacks Blog](https://hacks.mozilla.org/category/webassembly/)
- [W3C WebAssembly Community Group](https://www.w3.org/community/webassembly/)
- [Emscripting einer C-Bibliothek zu Wasm](https://web.dev/articles/emscripting-a-c-library)
