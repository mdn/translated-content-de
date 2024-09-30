---
title: WebAssembly
slug: WebAssembly
l10n:
  sourceCommit: e7314460d3614ad8cd4cb971f5f685ece2b31d28
---

{{WebAssemblySidebar}}

WebAssembly ist eine Art von Code, der in modernen Webbrowsern ausgeführt werden kann. Es handelt sich um eine niedrigstufige, assemblierähnliche Sprache mit einem kompakten Binärformat, die nahezu mit nativer Geschwindigkeit läuft. Sie bietet Sprachen wie C/C++, C# und Rust ein Kompilierungsziel, sodass sie im Web ausgeführt werden können. WebAssembly ist auch dazu gedacht, neben JavaScript ausgeführt zu werden, wodurch beide zusammenarbeiten können.

## In Kürze

WebAssembly hat große Auswirkungen auf die Webplattform — es bietet eine Möglichkeit, Code, der in mehreren Sprachen geschrieben wurde, mit nahezu nativer Geschwindigkeit im Web auszuführen, wobei Client-Apps im Web laufen, die dies vorher nicht konnten.

WebAssembly ist darauf ausgelegt, JavaScript zu ergänzen und zusammen mit ihm ausgeführt zu werden. Mithilfe der WebAssembly-JavaScript-APIs können Sie WebAssembly-Module in eine JavaScript-Anwendung laden und die Funktionalitäten zwischen beiden teilen. Dies ermöglicht es Ihnen, die Leistung und Leistungsfähigkeit von WebAssembly sowie den Ausdrucks- und Flexibilitätsreichtum von JavaScript in derselben Anwendung zu nutzen, selbst wenn Sie nicht wissen, wie man WebAssembly-Code schreibt.

Und das Beste daran ist, dass es als Webstandard durch die [W3C WebAssembly Arbeitsgruppe](https://www.w3.org/wasm/) und [Community-Gruppe](https://www.w3.org/community/webassembly/) mit aktiver Beteiligung aller großen Browseranbieter entwickelt wird.

## Leitfäden

- [WebAssembly-Konzepte](/de/docs/WebAssembly/Concepts)
  - : Fangen Sie an, indem Sie die grundlegenden Konzepte von WebAssembly lesen — was es ist, warum es so nützlich ist, wie es in die Webplattform (und darüber hinaus) passt und wie man es benutzt.
- [Kompilieren eines neuen C/C++-Moduls zu WebAssembly](/de/docs/WebAssembly/C_to_Wasm)
  - : Wenn Sie Code in C/C++ geschrieben haben, können Sie diesen mithilfe eines Tools wie [Emscripten](https://emscripten.org/) in Wasm kompilieren. Schauen wir uns an, wie das funktioniert.
- [Kompilieren eines bestehenden C-Moduls zu WebAssembly](/de/docs/WebAssembly/existing_C_to_Wasm)
  - : Ein zentraler Anwendungsfall für WebAssembly besteht darin, das bestehende Ökosystem von C-Bibliotheken zu verwenden und Entwicklern zu ermöglichen, sie im Web zu nutzen.
- [Kompilieren von Rust zu WebAssembly](/de/docs/WebAssembly/Rust_to_Wasm)
  - : Wenn Sie Rust-Code geschrieben haben, können Sie diesen in WebAssembly kompilieren! Dieses Tutorial zeigt Ihnen alles, was Sie wissen müssen, um ein Rust-Projekt in Wasm zu kompilieren und in einer bestehenden Web-App zu verwenden.
- [WebAssembly-Code laden und ausführen](/de/docs/WebAssembly/Loading_and_running)
  - : Nachdem Sie ein Wasm-Modul haben, wird in diesem Artikel beschrieben, wie man es abruft, kompiliert und instanziiert, indem man die [WebAssembly JavaScript](/de/docs/WebAssembly/JavaScript_interface)-API mit den [Fetch](/de/docs/Web/API/Fetch_API)- oder [XHR](/de/docs/Web/API/XMLHttpRequest)-APIs kombiniert.
- [Die WebAssembly-JavaScript-API verwenden](/de/docs/WebAssembly/Using_the_JavaScript_API)
  - : Sobald Sie ein Wasm-Modul geladen haben, möchten Sie es verwenden. In diesem Artikel zeigen wir Ihnen, wie Sie WebAssembly über die WebAssembly-JavaScript-API nutzen können.
- [Exportierte WebAssembly-Funktionen](/de/docs/WebAssembly/Exported_functions)
  - : Exportierte WebAssembly-Funktionen sind die JavaScript-Entsprechungen von WebAssembly-Funktionen, die es ermöglichen, WebAssembly-Code von JavaScript aus aufzurufen. Dieser Artikel beschreibt, was sie sind.
- [Verstehen des WebAssembly-Textformats](/de/docs/WebAssembly/Understanding_the_text_format)
  - : Dieser Artikel erklärt das Wasm-Textformat. Dies ist die niedrigstufige, textuelle Darstellung eines Wasm-Moduls, die beim Debuggen in den Entwicklertools des Browsers angezeigt wird.
- [Konvertieren des WebAssembly-Textformats zu Wasm](/de/docs/WebAssembly/Text_format_to_Wasm)
  - : Dieser Artikel bietet einen Leitfaden, wie man ein in Textformat geschriebenes WebAssembly-Modul in ein Wasm-Binärformat umwandelt.

## API-Referenz

- [WebAssembly-Anweisungsreferenz](/de/docs/WebAssembly/Reference)
  - : Referenzdokumentation mit interaktiven Beispielen für die Menge der WebAssembly-Operatoren.
- [WebAssembly-JavaScript-Schnittstelle](/de/docs/WebAssembly/JavaScript_interface)
  - : Dieses Objekt fungiert als Namespace für alle WebAssembly-bezogenen Funktionen.
- [`WebAssembly.Global()`](/de/docs/WebAssembly/JavaScript_interface/Global)
  - : Ein `WebAssembly.Global`-Objekt stellt eine globale Variableninstanz dar, die sowohl von JavaScript aus zugänglich als auch über eine oder mehrere [`WebAssembly.Module`](/de/docs/WebAssembly/JavaScript_interface/Module)-Instanzen import- und exportierbar ist. Dies ermöglicht die dynamische Verknüpfung mehrerer Module.
- [`WebAssembly.Module()`](/de/docs/WebAssembly/JavaScript_interface/Module)
  - : Ein `WebAssembly.Module`-Objekt enthält zustandslosen WebAssembly-Code, der vom Browser bereits kompiliert wurde und effizient [mit Arbeitern geteilt](/de/docs/Web/API/Worker/postMessage) und mehrfach instanziiert werden kann.
- [`WebAssembly.Instance()`](/de/docs/WebAssembly/JavaScript_interface/Instance)
  - : Ein `WebAssembly.Instance`-Objekt ist eine zustandsbehaftete, ausführbare Instanz eines `Module`. `Instance`-Objekte enthalten alle [exportierten WebAssembly-Funktionen](/de/docs/WebAssembly/Exported_functions), die den Aufruf in WebAssembly-Code von JavaScript aus ermöglichen.
- [`WebAssembly.compile()`](/de/docs/WebAssembly/JavaScript_interface/compile_static)
  - : Die `WebAssembly.compile()`-Funktion kompiliert WebAssembly-Binärcode in ein `WebAssembly.Module`-Objekt.
- [`WebAssembly.compileStreaming()`](/de/docs/WebAssembly/JavaScript_interface/compileStreaming_static)
  - : Die `WebAssembly.compileStreaming()`-Funktion kompiliert ein `WebAssembly.Module` direkt aus einer gestreamten Quelle.
- [`WebAssembly.instantiate()`](/de/docs/WebAssembly/JavaScript_interface/instantiate_static)
  - : Die `WebAssembly.instantiate()`-Funktion ermöglicht es Ihnen, WebAssembly-Code zu kompilieren und zu instanziieren.
- [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/JavaScript_interface/instantiateStreaming_static)
  - : Die `WebAssembly.instantiateStreaming()`-Funktion ist die primäre API zum Kompilieren und Instanziieren von WebAssembly-Code und gibt sowohl ein `Module` als auch seine erste `Instance` zurück.
- [`WebAssembly.validate()`](/de/docs/WebAssembly/JavaScript_interface/validate_static)
  - : Die `WebAssembly.validate()`-Funktion validiert ein gegebenes typisiertes Array von WebAssembly-Binärcode.
- [`WebAssembly.Memory()`](/de/docs/WebAssembly/JavaScript_interface/Memory)
  - : Ein `WebAssembly.Memory`-Objekt ist ein anpassbarer {{jsxref("Global_objects/ArrayBuffer", "ArrayBuffer")}}, der die rohen Bytes des Speichers enthält, auf die von einer `Instance` zugegriffen wird.
- [`WebAssembly.Table()`](/de/docs/WebAssembly/JavaScript_interface/Table)
  - : Ein `WebAssembly.Table`-Objekt ist ein anpassbares typisiertes Array aus undurchsichtigen Werten, wie Funktionsreferenzen, auf die von einer `Instance` zugegriffen wird.
- [`WebAssembly.Tag()`](/de/docs/WebAssembly/JavaScript_interface/Tag)
  - : Das `WebAssembly.Tag`-Objekt definiert eine Art von WebAssembly-Ausnahme, die zu/von WebAssembly-Code geworfen werden kann.
- [`WebAssembly.Exception()`](/de/docs/WebAssembly/JavaScript_interface/Exception)
  - : Das `WebAssembly.Exception`-Objekt stellt eine Laufzeitausnahme dar, die von WebAssembly zu JavaScript oder von JavaScript zu einem WebAssembly-Ausnahmebehandler geworfen wird.
- [`WebAssembly.CompileError()`](/de/docs/WebAssembly/JavaScript_interface/CompileError)
  - : Erstellt ein neues WebAssembly `CompileError`-Objekt.
- [`WebAssembly.LinkError()`](/de/docs/WebAssembly/JavaScript_interface/LinkError)
  - : Erstellt ein neues WebAssembly `LinkError`-Objekt.
- [`WebAssembly.RuntimeError()`](/de/docs/WebAssembly/JavaScript_interface/RuntimeError)
  - : Erstellt ein neues WebAssembly `RuntimeError`-Objekt.

## Beispiele

- [WASMSobel](https://github.com/JasonWeathersby/WASMSobel)
- Sehen Sie in unserem [webassembly-examples](https://github.com/mdn/webassembly-examples/)-Repository für eine Reihe weiterer Beispiele.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebAssembly auf Mozilla Research](https://research.mozilla.org/)
- [webassembly.org](https://webassembly.org/)
- [WebAssembly-Artikel im Mozilla Hacks-Blog](https://hacks.mozilla.org/category/webassembly/)
- [W3C WebAssembly Community Group](https://www.w3.org/community/webassembly/)
- [Emscripting einer C-Bibliothek in Wasm](https://web.dev/articles/emscripting-a-c-library)
