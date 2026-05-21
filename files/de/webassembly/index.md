---
title: WebAssembly
slug: WebAssembly
l10n:
  sourceCommit: 0abb70602b0b3b11a2909c417a03e10eabd607a8
---

WebAssembly ist eine Art von Code, der in modernen Webbrowsern ausgeführt werden kann. Es ist eine low-level, assemblerähnliche Sprache mit einem kompakten binären Format, das mit nahezu nativer Leistung läuft, und bietet Sprachen wie C/C++, C# und Rust ein Kompilierungsziel, sodass sie im Web laufen können.

WebAssembly ist so konzipiert, dass es JavaScript ergänzt und parallel dazu ausgeführt wird – mithilfe der WebAssembly-JavaScript-APIs können Sie WebAssembly-Module in eine JavaScript-Anwendung laden und die Funktionalität zwischen beiden teilen. Dies ermöglicht es Ihnen, die Leistungsfähigkeit und den Aufwand von WebAssembly zusammen mit der Ausdruckskraft und Flexibilität von JavaScript in derselben Anwendung zu nutzen, selbst wenn Sie nicht wissen, wie man WebAssembly-Code schreibt.

WebAssembly hat große Auswirkungen auf die Web-Plattform, nicht nur weil es eine Möglichkeit bietet, Code, der in mehreren Sprachen geschrieben wurde, mit nahezu nativer Geschwindigkeit im Web auszuführen, sondern auch, weil es ermöglicht, clientseitige Anwendungen im Web auszuführen, die zuvor nicht konnten.

Und was noch besser ist, es wird als Webstandard über die [W3C WebAssembly Working Group](https://www.w3.org/groups/wg/wasm/) und [Community Group](https://www.w3.org/community/webassembly/) entwickelt, mit aktiver Teilnahme aller großen Browserhersteller.

## Leitfäden

Die [WebAssembly-Leitfäden](/de/docs/WebAssembly/Guides) behandeln Themen wie Konzepte auf hoher Ebene, Kompilierung aus verschiedenen Sprachen, die textuelle Darstellung des Wasm-binären Formats und wie man WebAssembly ausführt.

- [WebAssembly-Konzepte](/de/docs/WebAssembly/Guides/Concepts)
  - : Beginnen Sie, indem Sie die Konzepte auf hoher Ebene von WebAssembly lesen – was es ist, warum es so nützlich ist, wie es in die Web-Plattform (und darüber hinaus) passt und wie man es verwendet.
- [Ein neues C/C++-Modul zu WebAssembly kompilieren](/de/docs/WebAssembly/Guides/C_to_Wasm)
  - : Wenn Sie Code in C/C++ geschrieben haben, können Sie ihn mit einem Tool wie [Emscripten](https://emscripten.org/) in Wasm kompilieren. Lassen Sie uns sehen, wie es funktioniert.
- [Ein vorhandenes C-Modul zu WebAssembly kompilieren](/de/docs/WebAssembly/Guides/Existing_C_to_Wasm)
  - : Ein zentraler Anwendungsfall für WebAssembly besteht darin, das bestehende Ökosystem von C-Bibliotheken zu nutzen und Entwicklern zu ermöglichen, sie im Web zu verwenden.
- [Von Rust zu WebAssembly kompilieren](/de/docs/WebAssembly/Guides/Rust_to_Wasm)
  - : Wenn Sie Rust-Code geschrieben haben, können Sie ihn in WebAssembly kompilieren! Dieses Tutorial führt Sie durch alles, was Sie wissen müssen, um ein Rust-Projekt zu Wasm zu kompilieren und in eine bestehende Webanwendung zu integrieren.
- [WebAssembly-Code laden und ausführen](/de/docs/WebAssembly/Guides/Loading_and_running)
  - : Nachdem Sie ein Wasm-Modul haben, behandelt dieser Artikel, wie man es abruft, kompiliert und instanziiert, indem die [WebAssembly-JavaScript](/de/docs/WebAssembly/Reference/JavaScript_interface)-API mit der [Fetch](/de/docs/Web/API/Fetch_API)- oder [XHR](/de/docs/Web/API/XMLHttpRequest)-API kombiniert wird.
- [Die WebAssembly-JavaScript-API verwenden](/de/docs/WebAssembly/Guides/Using_the_JavaScript_API)
  - : Sobald Sie ein Wasm-Modul geladen haben, möchten Sie es verwenden. In diesem Artikel zeigen wir Ihnen, wie man WebAssembly über die WebAssembly-JavaScript-API verwendet.
- [Exportierte WebAssembly-Funktionen](/de/docs/WebAssembly/Guides/Exported_functions)
  - : Exportierte WebAssembly-Funktionen sind die JavaScript-Reflexionen von WebAssembly-Funktionen, die es ermöglichen, WebAssembly-Code aus JavaScript aufzurufen. Dieser Artikel beschreibt, was sie sind.
- [Das WebAssembly-Textformat verstehen](/de/docs/WebAssembly/Guides/Understanding_the_text_format)
  - : Dieser Artikel erklärt das Wasm-Textformat. Dies ist die low-level textuelle Darstellung eines Wasm-Moduls, die in den Entwicklerwerkzeugen des Browsers beim Debuggen angezeigt wird.
- [Das WebAssembly-Textformat in Wasm konvertieren](/de/docs/WebAssembly/Guides/Text_format_to_Wasm)
  - : Dieser Artikel bietet einen Leitfaden, wie man ein in Textformat geschriebenes WebAssembly-Modul in ein Wasm-Binärformat umwandelt.

## API-Referenz

- [WebAssembly-Befehlsreferenz](/de/docs/WebAssembly/Reference)
  - : Referenzdokumentation mit interaktiven Beispielen für den Satz von WebAssembly-Operatoren.
- [WebAssembly-JavaScript-Schnittstelle](/de/docs/WebAssembly/Reference/JavaScript_interface)
  - : Dieses Objekt dient als Namensraum für alle mit WebAssembly verbundenen Funktionalitäten.
- [`WebAssembly.Global()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Global)
  - : Ein `WebAssembly.Global`-Objekt repräsentiert eine globale Variableninstanz, die sowohl aus JavaScript zugänglich als auch über eine oder mehrere [`WebAssembly.Module`](/de/docs/WebAssembly/Reference/JavaScript_interface/Module)-Instanzen importierbar/exportierbar ist. Dies ermöglicht die dynamische Verlinkung mehrerer Module.
- [`WebAssembly.Module()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Module)
  - : Ein `WebAssembly.Module`-Objekt enthält zustandslosen WebAssembly-Code, der bereits vom Browser kompiliert wurde und effizient [mit Arbeitern geteilt](/de/docs/Web/API/Worker/postMessage) und mehrfach instanziiert werden kann.
- [`WebAssembly.Instance()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Instance)
  - : Ein `WebAssembly.Instance`-Objekt ist eine zustandsbehaftete, ausführbare Instanz eines `Module`. `Instance`-Objekte enthalten alle [exportierten WebAssembly-Funktionen](/de/docs/WebAssembly/Guides/Exported_functions), die es ermöglichen, WebAssembly-Code aus JavaScript aufzurufen.
- [`WebAssembly.compile()`](/de/docs/WebAssembly/Reference/JavaScript_interface/compile_static)
  - : Die Funktion `WebAssembly.compile()` kompiliert WebAssembly-Binärcode in ein `WebAssembly.Module`-Objekt.
- [`WebAssembly.compileStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/compileStreaming_static)
  - : Die Funktion `WebAssembly.compileStreaming()` kompiliert ein `WebAssembly.Module` direkt aus einer gestreamten zugrunde liegenden Quelle.
- [`WebAssembly.instantiate()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiate_static)
  - : Mit der Funktion `WebAssembly.instantiate()` können Sie WebAssembly-Code kompilieren und instanziieren.
- [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static)
  - : Die Funktion `WebAssembly.instantiateStreaming()` ist die Haupt-API zum Kompilieren und Instanziieren von WebAssembly-Code, die sowohl ein `Module` als auch seine erste `Instance` zurückgibt.
- [`WebAssembly.validate()`](/de/docs/WebAssembly/Reference/JavaScript_interface/validate_static)
  - : Die Funktion `WebAssembly.validate()` validiert ein gegebenes typisiertes Array von WebAssembly-Binärcode.
- [`WebAssembly.Memory()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory)
  - : Ein `WebAssembly.Memory`-Objekt ist ein skalierbarer {{jsxref("Global_Objects/ArrayBuffer", "ArrayBuffer")}}, der die rohen Bytes des Speichers enthält, auf die eine `Instance` zugreift.
- [`WebAssembly.Table()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Table)
  - : Ein `WebAssembly.Table`-Objekt ist ein skalierbares typisiertes Array undurchsichtiger Werte, wie Funktionsreferenzen, auf die eine `Instance` zugreift.
- [`WebAssembly.Tag()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Tag)
  - : Das `WebAssembly.Tag`-Objekt definiert einen Typ von WebAssembly-Ausnahme, der geworfen werden kann aus/in WebAssembly-Code.
- [`WebAssembly.Exception()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Exception)
  - : Das `WebAssembly.Exception`-Objekt stellt eine Laufzeitausnahme dar, die von WebAssembly zu JavaScript oder von JavaScript zu einem WebAssembly-Ausnahmehandler geworfen wird.
- [`WebAssembly.CompileError()`](/de/docs/WebAssembly/Reference/JavaScript_interface/CompileError)
  - : Erstellt ein neues WebAssembly-`CompileError`-Objekt.
- [`WebAssembly.LinkError()`](/de/docs/WebAssembly/Reference/JavaScript_interface/LinkError)
  - : Erstellt ein neues WebAssembly-`LinkError`-Objekt.
- [`WebAssembly.RuntimeError()`](/de/docs/WebAssembly/Reference/JavaScript_interface/RuntimeError)
  - : Erstellt ein neues WebAssembly-`RuntimeError`-Objekt.

## Beispielprojekte

- [WASMSobel](https://github.com/JasonWeathersby/WASMSobel)
- Siehe unser [webassembly-examples](https://github.com/mdn/webassembly-examples/) Repository für eine Reihe weiterer Beispiele.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebAssembly bei Mozilla Research](https://research.mozilla.org/)
- [webassembly.org](https://webassembly.org/)
- [WebAssembly-Artikel im Mozilla Hacks Blog](https://hacks.mozilla.org/category/webassembly/)
- [W3C WebAssembly Community Group](https://www.w3.org/community/webassembly/)
- [Emscripting einer C-Bibliothek zu Wasm](https://web.dev/articles/emscripting-a-c-library)
