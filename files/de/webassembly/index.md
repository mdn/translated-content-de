---
title: WebAssembly
slug: WebAssembly
l10n:
  sourceCommit: df9d06402163f77fc3e2d327ab63f9dd4af15b38
---

WebAssembly ist eine Art Code, der in modernen Webbrowsern ausgeführt werden kann – es handelt sich um eine low-level, assembliesprachähnliche Programmiersprache mit einem kompakten binären Format, das fast in nativer Geschwindigkeit läuft und Sprachen wie C/C++, C# und Rust ein Kompilationsziel bietet, sodass sie im Web laufen können. Außerdem ist es darauf ausgelegt, neben JavaScript zu arbeiten, sodass beide zusammenarbeiten können.

## Auf einen Blick

WebAssembly hat große Auswirkungen auf die Webplattform – es bietet eine Möglichkeit, Code, der in mehreren Sprachen geschrieben wurde, mit nahezu nativer Geschwindigkeit im Web auszuführen. Dadurch können clientseitige Anwendungen im Web laufen, die dies zuvor nicht konnten.

WebAssembly ist darauf ausgelegt, JavaScript zu ergänzen und zusammen mit ihm zu arbeiten – mit den WebAssembly JavaScript-APIs können Sie WebAssembly-Module in eine JavaScript-Anwendung laden und Funktionalität zwischen beiden teilen. Dies ermöglicht es Ihnen, sowohl die Leistung und Stärke von WebAssembly als auch die Ausdruckskraft und Flexibilität von JavaScript in derselben Anwendung zu nutzen, selbst wenn Sie nicht wissen, wie man WebAssembly-Code schreibt.

Und das Beste daran ist, dass es als Webstandard über die [W3C WebAssembly Arbeitsgruppe](https://www.w3.org/wasm/) und die [Community-Gruppe](https://www.w3.org/community/webassembly/) mit aktiver Beteiligung aller großen Browseranbieter entwickelt wird.

## Leitfäden

- [WebAssembly-Konzepte](/de/docs/WebAssembly/Guides/Concepts)
  - : Beginnen Sie, indem Sie die übergeordneten Konzepte von WebAssembly lesen – was es ist, warum es so nützlich ist, wie es sich in die Webplattform (und darüber hinaus) einfügt und wie man es verwendet.
- [Ein neues C/C++ Modul zu WebAssembly kompilieren](/de/docs/WebAssembly/Guides/C_to_Wasm)
  - : Wenn Sie Code in C/C++ geschrieben haben, können Sie ihn mit einem Tool wie [Emscripten](https://emscripten.org/) in Wasm kompilieren. Lassen Sie uns ansehen, wie es funktioniert.
- [Ein bestehendes C-Modul zu WebAssembly kompilieren](/de/docs/WebAssembly/Guides/Existing_C_to_Wasm)
  - : Ein Hauptanwendungsfall für WebAssembly besteht darin, das bestehende Ökosystem von C-Bibliotheken ins Web zu bringen.
- [Aus Rust zu WebAssembly kompilieren](/de/docs/WebAssembly/Guides/Rust_to_Wasm)
  - : Wenn Sie etwas Rust-Code geschrieben haben, können Sie ihn in WebAssembly kompilieren! Dieses Tutorial erklärt alles, was Sie wissen müssen, um ein Rust-Projekt in Wasm zu kompilieren und in einer vorhandenen Webanwendung zu verwenden.
- [WebAssembly-Code laden und ausführen](/de/docs/WebAssembly/Guides/Loading_and_running)
  - : Nachdem Sie ein Wasm-Modul haben, behandelt dieser Artikel, wie man es abruft, kompiliert und initialisiert, indem man die [WebAssembly JavaScript](/de/docs/WebAssembly/Reference/JavaScript_interface) API mit der [Fetch](/de/docs/Web/API/Fetch_API) oder [XHR](/de/docs/Web/API/XMLHttpRequest) API kombiniert.
- [Verwendung der WebAssembly JavaScript API](/de/docs/WebAssembly/Guides/Using_the_JavaScript_API)
  - : Sobald Sie ein Wasm-Modul geladen haben, möchten Sie es verwenden. In diesem Artikel zeigen wir Ihnen, wie Sie WebAssembly über die WebAssembly JavaScript API nutzen können.
- [Exportierte WebAssembly-Funktionen](/de/docs/WebAssembly/Guides/Exported_functions)
  - : Exportierte WebAssembly-Funktionen sind die JavaScript-Gegenstücke zu WebAssembly-Funktionen, die es ermöglichen, WebAssembly-Code aus JavaScript aufzurufen. Dieser Artikel beschreibt, was sie sind.
- [Textformat von WebAssembly verstehen](/de/docs/WebAssembly/Guides/Understanding_the_text_format)
  - : Dieser Artikel erklärt das Wasm-Textformat. Dies ist die low-level textuelle Darstellung eines Wasm-Moduls, die in den Entwicklerwerkzeugen des Browsers beim Debuggen angezeigt wird.
- [Konvertierung des WebAssembly-Textformats in Wasm](/de/docs/WebAssembly/Guides/Text_format_to_Wasm)
  - : Dieser Artikel bietet eine Anleitung dazu, wie man ein in Textformat geschriebenes WebAssembly-Modul in ein Wasm-Binärformat umwandelt.

## API-Referenz

- [WebAssembly Instruktionsreferenz](/de/docs/WebAssembly/Reference)
  - : Referenzdokumentation mit interaktiven Beispielen für die Menge an WebAssembly-Operatoren.
- [WebAssembly JavaScript-Schnittstelle](/de/docs/WebAssembly/Reference/JavaScript_interface)
  - : Dieses Objekt fungiert als Namensraum für alle WebAssembly-bezogene Funktionalitäten.
- [`WebAssembly.Global()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Global)
  - : Ein `WebAssembly.Global`-Objekt repräsentiert eine globale Variableninstanz, die sowohl von JavaScript aus zugänglich ist als auch über eine oder mehrere [`WebAssembly.Module`](/de/docs/WebAssembly/Reference/JavaScript_interface/Module)-Instanzen importiert/exportiert werden kann. Dies ermöglicht das dynamische Verknüpfen mehrerer Module.
- [`WebAssembly.Module()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Module)
  - : Ein `WebAssembly.Module`-Objekt enthält zustandslosen WebAssembly-Code, der bereits vom Browser kompiliert wurde und effizient mit [Workers geteilt](/de/docs/Web/API/Worker/postMessage) und mehrfach instanziiert werden kann.
- [`WebAssembly.Instance()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Instance)
  - : Ein `WebAssembly.Instance`-Objekt ist eine zustandsbehaftete, ausführbare Instanz eines `Module`. `Instance`-Objekte enthalten alle [Exportierte WebAssembly-Funktionen](/de/docs/WebAssembly/Guides/Exported_functions), die das Aufrufen von WebAssembly-Code aus JavaScript ermöglichen.
- [`WebAssembly.compile()`](/de/docs/WebAssembly/Reference/JavaScript_interface/compile_static)
  - : Die `WebAssembly.compile()`-Funktion kompiliert WebAssembly-Binärcode in ein `WebAssembly.Module`-Objekt.
- [`WebAssembly.compileStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/compileStreaming_static)
  - : Die `WebAssembly.compileStreaming()`-Funktion kompiliert ein `WebAssembly.Module` direkt aus einer gestreamten zugrunde liegenden Quelle.
- [`WebAssembly.instantiate()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiate_static)
  - : Die `WebAssembly.instantiate()`-Funktion ermöglicht es Ihnen, WebAssembly-Code zu kompilieren und zu initialisieren.
- [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static)
  - : Die `WebAssembly.instantiateStreaming()`-Funktion ist die primäre API zum Kompilieren und Instanziieren von WebAssembly-Code und gibt sowohl ein `Module` als auch seine erste `Instance` zurück.
- [`WebAssembly.validate()`](/de/docs/WebAssembly/Reference/JavaScript_interface/validate_static)
  - : Die `WebAssembly.validate()`-Funktion validiert ein gegebenes typisiertes Array von WebAssembly-Binärcode.
- [`WebAssembly.Memory()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory)
  - : Ein `WebAssembly.Memory`-Objekt ist ein dynamisch vergrößerbarer {{jsxref("Global_objects/ArrayBuffer", "ArrayBuffer")}}, der die Rohdatenbytes speichert, auf die von einer `Instance` zugegriffen wird.
- [`WebAssembly.Table()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Table)
  - : Ein `WebAssembly.Table`-Objekt ist ein dynamisch vergrößerbares typisiertes Array undurchsichtiger Werte, wie Funktionsreferenzen, auf die von einer `Instance` zugegriffen wird.
- [`WebAssembly.Tag()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Tag)
  - : Das `WebAssembly.Tag`-Objekt definiert eine Art von WebAssembly-Ausnahme, die von/nach WebAssembly-Code geworfen werden kann.
- [`WebAssembly.Exception()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Exception)
  - : Das `WebAssembly.Exception`-Objekt stellt eine Laufzeitausnahme dar, die von WebAssembly zu JavaScript oder von JavaScript zu einem WebAssembly-Ausnahme-Handler geworfen wird.
- [`WebAssembly.CompileError()`](/de/docs/WebAssembly/Reference/JavaScript_interface/CompileError)
  - : Erzeugt ein neues WebAssembly `CompileError`-Objekt.
- [`WebAssembly.LinkError()`](/de/docs/WebAssembly/Reference/JavaScript_interface/LinkError)
  - : Erzeugt ein neues WebAssembly `LinkError`-Objekt.
- [`WebAssembly.RuntimeError()`](/de/docs/WebAssembly/Reference/JavaScript_interface/RuntimeError)
  - : Erzeugt ein neues WebAssembly `RuntimeError`-Objekt.

## Beispiele

- [WASMSobel](https://github.com/JasonWeathersby/WASMSobel)
- Sehen Sie sich unser [webassembly-examples](https://github.com/mdn/webassembly-examples/) Repository für eine Anzahl anderer Beispiele an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebAssembly auf Mozilla Research](https://research.mozilla.org/)
- [webassembly.org](https://webassembly.org/)
- [WebAssembly-Artikel auf dem Mozilla Hacks-Blog](https://hacks.mozilla.org/category/webassembly/)
- [W3C WebAssembly Community-Gruppe](https://www.w3.org/community/webassembly/)
- [Emscripting einer C-Bibliothek zu Wasm](https://web.dev/articles/emscripting-a-c-library)
