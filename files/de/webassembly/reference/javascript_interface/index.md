---
title: WebAssembly
slug: WebAssembly/Reference/JavaScript_interface
l10n:
  sourceCommit: df9d06402163f77fc3e2d327ab63f9dd4af15b38
---

Das **`WebAssembly`** JavaScript-Objekt dient als Namespace für alle mit [WebAssembly](/de/docs/WebAssembly) verbundenen Funktionen.

Im Gegensatz zu den meisten anderen globalen Objekten ist `WebAssembly` kein Konstruktor (es ist kein Funktionsobjekt). Sie können es mit {{jsxref("Math")}} vergleichen, das ebenfalls ein Namespace-Objekt für mathematische Konstanten und Funktionen ist, oder mit {{jsxref("Intl")}}, das ein Namespace-Objekt für Internationalisierungskonstruktoren und andere sprachsensitiv Funktionen ist.

## Beschreibung

Die Hauptanwendungen des `WebAssembly`-Objekts sind:

- Laden von WebAssembly-Code mit der Funktion [`WebAssembly.instantiate()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiate_static).
- Erstellen neuer Speicher- und Tabelleninstanzen über die Konstruktoren [`WebAssembly.Memory()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory)/[`WebAssembly.Table()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Table).
- Bereitstellung von Einrichtungen zur Behandlung von Fehlern, die in WebAssembly auftreten, über die Konstruktoren [`WebAssembly.CompileError()`](/de/docs/WebAssembly/Reference/JavaScript_interface/CompileError)/[`WebAssembly.LinkError()`](/de/docs/WebAssembly/Reference/JavaScript_interface/LinkError)/[`WebAssembly.RuntimeError()`](/de/docs/WebAssembly/Reference/JavaScript_interface/RuntimeError).

## Schnittstellen

- [`WebAssembly.CompileError`](/de/docs/WebAssembly/Reference/JavaScript_interface/CompileError)
  - : Zeigt einen Fehler beim Dekodieren oder Validieren von WebAssembly an.
- [`WebAssembly.Global`](/de/docs/WebAssembly/Reference/JavaScript_interface/Global)
  - : Repräsentiert eine globale Variableninstanz, die sowohl von JavaScript zugänglich als auch über ein oder mehrere [`WebAssembly.Module`](/de/docs/WebAssembly/Reference/JavaScript_interface/Module) Instanzen importierbar/exportierbar ist. Dies ermöglicht die dynamische Verknüpfung mehrerer Module.
- [`WebAssembly.Instance`](/de/docs/WebAssembly/Reference/JavaScript_interface/Instance)
  - : Ist eine zustandsbehaftete, ausführbare Instanz eines [`WebAssembly.Module`](/de/docs/WebAssembly/Reference/JavaScript_interface/Module).
- [`WebAssembly.LinkError`](/de/docs/WebAssembly/Reference/JavaScript_interface/LinkError)
  - : Zeigt einen Fehler bei der Modulinstanziierung an (außer [Traps](https://webassembly.github.io/simd/core/intro/overview.html#trap) von der Startfunktion).
- [`WebAssembly.Memory`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory)
  - : Ein Objekt, dessen [`buffer`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory/buffer) Eigenschaft ein veränderbarer {{jsxref("ArrayBuffer")}} ist, der die rohen Bytes des Speichers enthält, auf die von einer WebAssembly `Instance` zugegriffen wird.
- [`WebAssembly.Module`](/de/docs/WebAssembly/Reference/JavaScript_interface/Module)
  - : Enthält zustandslosen WebAssembly-Code, der bereits vom Browser kompiliert wurde und effizient [mit Workern geteilt](/de/docs/Web/API/Worker/postMessage) und mehrfach instanziiert werden kann.
- [`WebAssembly.RuntimeError`](/de/docs/WebAssembly/Reference/JavaScript_interface/RuntimeError)
  - : Error-Typ, der geworfen wird, wenn immer WebAssembly eine [Trap](https://webassembly.github.io/simd/core/intro/overview.html#trap) spezifiziert.
- [`WebAssembly.Table`](/de/docs/WebAssembly/Reference/JavaScript_interface/Table)
  - : Eine array-ähnliche Struktur, die eine WebAssembly-Tabelle darstellt und [Referenzen](https://webassembly.github.io/spec/core/syntax/types.html#syntax-reftype) speichert, wie z.B. Funktionsreferenzen.
- [`WebAssembly.Tag`](/de/docs/WebAssembly/Reference/JavaScript_interface/Tag)
  - : Ein Objekt, das einen Typ von WebAssembly-Ausnahme darstellt.
- [`WebAssembly.Exception`](/de/docs/WebAssembly/Reference/JavaScript_interface/Exception)
  - : Ein WebAssembly-Ausnahmeobjekt, das sowohl innerhalb als auch über WebAssembly/JavaScript-Grenzen hinweg geworfen, gefangen und wieder geworfen werden kann.

## Statische Methoden

- [`WebAssembly.compile()`](/de/docs/WebAssembly/Reference/JavaScript_interface/compile_static)
  - : Kompiliert ein [`WebAssembly.Module`](/de/docs/WebAssembly/Reference/JavaScript_interface/Module) aus WebAssembly-Binärcode, wobei die Instanziierung ein separater Schritt bleibt.
- [`WebAssembly.compileStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/compileStreaming_static)
  - : Kompiliert ein [`WebAssembly.Module`](/de/docs/WebAssembly/Reference/JavaScript_interface/Module) direkt aus einer gestreamten zugrunde liegenden Quelle, wobei die Instanziierung ein separater Schritt bleibt.
- [`WebAssembly.instantiate()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiate_static)
  - : Die primäre API zum Kompilieren und Instanziieren von WebAssembly-Code, bei der sowohl ein `Module` als auch seine erste `Instance` zurückgegeben werden.
- [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static)
  - : Kompiliert und instanziiert ein WebAssembly-Modul direkt aus einer gestreamten zugrunde liegenden Quelle und gibt dabei sowohl ein `Module` als auch dessen erste `Instance` zurück.
- [`WebAssembly.validate()`](/de/docs/WebAssembly/Reference/JavaScript_interface/validate_static)
  - : Validiert ein gegebenes typisiertes Array von WebAssembly-Binärcode und gibt zurück, ob die Bytes gültiger WebAssembly-Code (`true`) oder nicht (`false`) sind.

## Beispiele

### Streamen eines Wasm-Moduls, dann kompilieren und instanziieren

Das folgende Beispiel (sehen Sie sich unser [instantiate-streaming.html](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/instantiate-streaming.html) Demo auf GitHub an und [sehen Sie es live an](https://mdn.github.io/webassembly-examples/js-api-examples/instantiate-streaming.html)) streamt direkt ein Wasm-Modul von einer zugrunde liegenden Quelle, kompiliert und instanziiert es dann, wobei das Versprechen mit einem `ResultObject` erfüllt wird. Da die Funktion `instantiateStreaming()` ein Versprechen für ein [`Response`](/de/docs/Web/API/Response) Objekt akzeptiert, können Sie ihr direkt einen [`fetch()`](/de/docs/Web/API/Window/fetch) Aufruf übergeben, und es wird die Antwort in die Funktion übergeben, wenn sie erfüllt wird.

```js
const importObject = {
  my_namespace: { imported_func: (arg) => console.log(arg) },
};

WebAssembly.instantiateStreaming(fetch("simple.wasm"), importObject).then(
  (obj) => obj.instance.exports.exported_func(),
);
```

Die `.instance`-Eigenschaft des `ResultObject` wird dann abgerufen und die darin enthaltene exportierte Funktion aufgerufen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebAssembly](/de/docs/WebAssembly) Übersichtsseite
- [WebAssembly-Konzepte](/de/docs/WebAssembly/Guides/Concepts)
- [Verwendung der WebAssembly-JavaScript-API](/de/docs/WebAssembly/Guides/Using_the_JavaScript_API)
