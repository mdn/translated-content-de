---
title: WebAssembly
slug: WebAssembly
l10n:
  sourceCommit: e7314460d3614ad8cd4cb971f5f685ece2b31d28
---

{{WebAssemblySidebar}}

WebAssembly ist eine Art von Code, der in modernen Webbrowsern ausgeführt werden kann — es ist eine niedrigstufige, assemblierungsähnliche Sprache mit einem kompakten binären Format, die nahezu native Leistung erzielt und Sprachen wie C/C++, C# und Rust ein Kompilierungsziel bietet, sodass sie im Web laufen können. Es ist auch dafür ausgelegt, neben JavaScript zu laufen, sodass beide zusammenarbeiten können.

## In Kürze

WebAssembly hat enorme Auswirkungen auf die Web-Plattform — es bietet eine Möglichkeit, Code, der in mehreren Sprachen geschrieben wurde, im Web mit nahezu nativer Geschwindigkeit auszuführen, wobei Client-Apps im Web laufen, die dies zuvor nicht hätten tun können.

WebAssembly ist darauf ausgelegt, JavaScript zu ergänzen und daneben zu laufen — mithilfe der WebAssembly JavaScript-APIs können Sie WebAssembly-Module in eine JavaScript-App laden und Funktionalität zwischen beiden teilen. Dies ermöglicht es Ihnen, die Leistung und Kraft von WebAssembly und die Ausdrucksstärke und Flexibilität von JavaScript in derselben App zu nutzen, selbst wenn Sie nicht wissen, wie man WebAssembly-Code schreibt.

Und noch besser ist, dass es als Webstandard über die [W3C WebAssembly Working Group](https://www.w3.org/wasm/) und [Community Group](https://www.w3.org/community/webassembly/) mit aktiver Beteiligung aller großen Browseranbieter entwickelt wird.

## Anleitungen

- [WebAssembly-Konzepte](/de/docs/WebAssembly/Concepts)
  - : Beginnen Sie mit einer Einführung in die grundlegenden Konzepte von WebAssembly — was es ist, warum es so nützlich ist, wie es in die Web-Plattform passt (und darüber hinaus) und wie man es benutzt.
- [Ein neues C/C++-Modul zu WebAssembly kompilieren](/de/docs/WebAssembly/C_to_Wasm)
  - : Wenn Sie in C/C++ geschriebenen Code haben, können Sie diesen dann mithilfe eines Tools wie [Emscripten](https://emscripten.org/) in Wasm kompilieren. Lassen Sie uns anschauen, wie es funktioniert.
- [Ein bestehendes C-Modul zu WebAssembly kompilieren](/de/docs/WebAssembly/existing_C_to_Wasm)
  - : Ein Hauptanwendungsfall für WebAssembly besteht darin, das bestehende Ökosystem von C-Bibliotheken zu verwenden und Entwicklern zu ermöglichen, diese im Web zu nutzen.
- [Von Rust zu WebAssembly kompilieren](/de/docs/WebAssembly/Rust_to_Wasm)
  - : Wenn Sie Rust-Code geschrieben haben, können Sie diesen in WebAssembly kompilieren! Dieses Tutorial führt Sie durch alles, was Sie wissen müssen, um ein Rust-Projekt zu Wasm zu kompilieren und in einer vorhandenen Web-App zu verwenden.
- [WebAssembly-Code laden und ausführen](/de/docs/WebAssembly/Loading_and_running)
  - : Nachdem Sie ein Wasm-Modul haben, behandelt dieser Artikel, wie man es abruft, kompiliert und instanziiert, indem man die [WebAssembly JavaScript](/de/docs/WebAssembly/JavaScript_interface)-API mit den [Fetch](/de/docs/Web/API/Fetch_API)- oder [XHR](/de/docs/Web/API/XMLHttpRequest)-APIs kombiniert.
- [Die WebAssembly JavaScript API verwenden](/de/docs/WebAssembly/Using_the_JavaScript_API)
  - : Sobald Sie ein Wasm-Modul geladen haben, möchten Sie es nutzen. In diesem Artikel zeigen wir Ihnen, wie Sie WebAssembly über die WebAssembly JavaScript API verwenden.
- [Exportierte WebAssembly-Funktionen](/de/docs/WebAssembly/Exported_functions)
  - : Exportierte WebAssembly-Funktionen sind die JavaScript-Reflexionen von WebAssembly-Funktionen, die es ermöglichen, WebAssembly-Code aus JavaScript aufzurufen. Dieser Artikel beschreibt, was sie sind.
- [WebAssembly-Textformat verstehen](/de/docs/WebAssembly/Understanding_the_text_format)
  - : Dieser Artikel erklärt das Wasm-Textformat. Dies ist die niedrigstufige textuelle Darstellung eines Wasm-Moduls, die bei der Fehlersuche in den Entwicklertools des Browsers angezeigt wird.
- [WebAssembly-Textformat in Wasm konvertieren](/de/docs/WebAssembly/Text_format_to_Wasm)
  - : Dieser Artikel bietet eine Anleitung, wie man ein in Textformat geschriebenes WebAssembly-Modul in ein Wasm-Binärformat konvertiert.

## API-Referenz

- [WebAssembly-Instruktionsreferenz](/de/docs/WebAssembly/Reference)
  - : Referenzdokumentation mit interaktiven Beispielen für die Menge von WebAssembly-Operatoren.
- [WebAssembly JavaScript-Schnittstelle](/de/docs/WebAssembly/JavaScript_interface)
  - : Dieses Objekt fungiert als Namespace für alle WebAssembly-bezogenen Funktionen.
- [`WebAssembly.Global()`](/de/docs/WebAssembly/JavaScript_interface/Global)
  - : Ein `WebAssembly.Global`-Objekt repräsentiert eine globale Variableninstanz, die sowohl von JavaScript aus zugänglich als auch über eine oder mehrere [`WebAssembly.Module`](/de/docs/WebAssembly/JavaScript_interface/Module)-Instanzen importierbar/exportierbar ist. Dies ermöglicht das dynamische Verlinken mehrerer Module.
- [`WebAssembly.Module()`](/de/docs/WebAssembly/JavaScript_interface/Module)
  - : Ein `WebAssembly.Module`-Objekt enthält zustandslosen WebAssembly-Code, der bereits vom Browser kompiliert wurde und effizient [mit Workern geteilt](/de/docs/Web/API/Worker/postMessage) und mehrfach instanziiert werden kann.
- [`WebAssembly.Instance()`](/de/docs/WebAssembly/JavaScript_interface/Instance)
  - : Ein `WebAssembly.Instance`-Objekt ist eine zustandsbehaftete, ausführbare Instanz eines `Modul`. `Instanz`-Objekte enthalten alle [exportierten WebAssembly-Funktionen](/de/docs/WebAssembly/Exported_functions), die es ermöglichen, von JavaScript aus in WebAssembly-Code zu gelangen.
- [`WebAssembly.compile()`](/de/docs/WebAssembly/JavaScript_interface/compile_static)
  - : Die `WebAssembly.compile()`-Funktion kompiliert WebAssembly-Binärcode in ein `WebAssembly.Module`-Objekt.
- [`WebAssembly.compileStreaming()`](/de/docs/WebAssembly/JavaScript_interface/compileStreaming_static)
  - : Die `WebAssembly.compileStreaming()`-Funktion kompiliert ein `WebAssembly.Module` direkt aus einer gestreamten zugrundeliegenden Quelle.
- [`WebAssembly.instantiate()`](/de/docs/WebAssembly/JavaScript_interface/instantiate_static)
  - : Die `WebAssembly.instantiate()`-Funktion ermöglicht es Ihnen, WebAssembly-Code zu kompilieren und zu instanziieren.
- [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/JavaScript_interface/instantiateStreaming_static)
  - : Die `WebAssembly.instantiateStreaming()`-Funktion ist die Haupt-API zum Kompilieren und Instanziieren von WebAssembly-Code und gibt sowohl ein `Modul` als auch seine erste `Instanz` zurück.
- [`WebAssembly.validate()`](/de/docs/WebAssembly/JavaScript_interface/validate_static)
  - : Die `WebAssembly.validate()`-Funktion validiert ein gegebenes typisiertes Array von WebAssembly-Binärcode.
- [`WebAssembly.Memory()`](/de/docs/WebAssembly/JavaScript_interface/Memory)
  - : Ein `WebAssembly.Memory`-Objekt ist ein anpassbares {{jsxref("Global_objects/ArrayBuffer", "ArrayBuffer")}}, das die rohen Bytes des Speichers hält, auf die eine `Instanz` zugreift.
- [`WebAssembly.Table()`](/de/docs/WebAssembly/JavaScript_interface/Table)
  - : Ein `WebAssembly.Table`-Objekt ist ein anpassbares typisiertes Array mit undurchsichtigen Werten, wie Funktionsreferenzen, auf die eine `Instanz` zugreift.
- [`WebAssembly.Tag()`](/de/docs/WebAssembly/JavaScript_interface/Tag)
  - : Das `WebAssembly.Tag`-Objekt definiert eine Art von WebAssembly-Ausnahme, die von/zu WebAssembly-Code ausgelöst werden kann.
- [`WebAssembly.Exception()`](/de/docs/WebAssembly/JavaScript_interface/Exception)
  - : Das `WebAssembly.Exception`-Objekt repräsentiert eine zur Laufzeit von WebAssembly zu JavaScript geworfene Ausnahme oder von JavaScript zu einem WebAssembly-Ausnahmehandler.
- [`WebAssembly.CompileError()`](/de/docs/WebAssembly/JavaScript_interface/CompileError)
  - : Erstellt ein neues WebAssembly-`CompileError`-Objekt.
- [`WebAssembly.LinkError()`](/de/docs/WebAssembly/JavaScript_interface/LinkError)
  - : Erstellt ein neues WebAssembly-`LinkError`-Objekt.
- [`WebAssembly.RuntimeError()`](/de/docs/WebAssembly/JavaScript_interface/RuntimeError)
  - : Erstellt ein neues WebAssembly-`RuntimeError`-Objekt.

## Beispiele

- [WASMSobel](https://github.com/JasonWeathersby/WASMSobel)
- Sehen Sie sich unser [webassembly-examples](https://github.com/mdn/webassembly-examples/)-Repo für weitere Beispiele an.

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- [WebAssembly auf Mozilla Research](https://research.mozilla.org/)
- [webassembly.org](https://webassembly.org/)
- [WebAssembly-Artikel auf dem Mozilla Hacks-Blog](https://hacks.mozilla.org/category/webassembly/)
- [W3C WebAssembly Community Group](https://www.w3.org/community/webassembly/)
- [Emscriptieren einer C-Bibliothek auf Wasm](https://web.dev/articles/emscripting-a-c-library)
