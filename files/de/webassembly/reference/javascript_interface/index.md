---
title: WebAssembly
slug: WebAssembly/Reference/JavaScript_interface
l10n:
  sourceCommit: 5d93ed6aeae01238cb44b1a9b5f092d8c8194530
---

Das **`WebAssembly`** JavaScript-Objekt dient als Namensraum für alle [WebAssembly](/de/docs/WebAssembly)-bezogenen Funktionen.

Im Gegensatz zu den meisten anderen globalen Objekten ist `WebAssembly` kein Konstruktor (es ist kein Funktionsobjekt). Sie können es mit {{jsxref("Math")}} vergleichen, das ebenfalls ein Namensraumobjekt für mathematische Konstanten und Funktionen ist, oder mit {{jsxref("Intl")}}, das das Namensraumobjekt für Internationalisierungskonstruktoren und andere sprachsensitive Funktionen ist.

## Beschreibung

Die Hauptanwendungen des `WebAssembly`-Objekts sind:

- Laden von WebAssembly-Code mit der [`WebAssembly.instantiate()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiate_static) Funktion.
- Erstellen neuer Speicher- und Tabelleninstanzen über die [`WebAssembly.Memory()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory)/[`WebAssembly.Table()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Table) Konstruktoren.
- Bereitstellung von Einrichtungen zur Behandlung von Fehlern, die in WebAssembly über die [`WebAssembly.CompileError()`](/de/docs/WebAssembly/Reference/JavaScript_interface/CompileError)/[`WebAssembly.LinkError()`](/de/docs/WebAssembly/Reference/JavaScript_interface/LinkError)/[`WebAssembly.RuntimeError()`](/de/docs/WebAssembly/Reference/JavaScript_interface/RuntimeError) Konstruktoren auftreten.

## Schnittstellen

- [`WebAssembly.CompileError`](/de/docs/WebAssembly/Reference/JavaScript_interface/CompileError)
  - : Weist auf einen Fehler beim Dekodieren oder Validieren von WebAssembly hin.
- [`WebAssembly.Global`](/de/docs/WebAssembly/Reference/JavaScript_interface/Global)
  - : Stellt eine Instanz einer globalen Variablen dar, die sowohl von JavaScript aus zugänglich ist als auch über eine oder mehrere [`WebAssembly.Module`](/de/docs/WebAssembly/Reference/JavaScript_interface/Module) Instanzen importiert/exportiert werden kann. Dies ermöglicht das dynamische Verknüpfen mehrerer Module.
- [`WebAssembly.Instance`](/de/docs/WebAssembly/Reference/JavaScript_interface/Instance)
  - : Ist eine zustandsbehaftete, ausführbare Instanz eines [`WebAssembly.Module`](/de/docs/WebAssembly/Reference/JavaScript_interface/Module)
- [`WebAssembly.LinkError`](/de/docs/WebAssembly/Reference/JavaScript_interface/LinkError)
  - : Weist auf einen Fehler bei der Modulinstanziierung hin (außer [Traps](https://webassembly.github.io/simd/core/intro/overview.html#trap) aus der Startfunktion).
- [`WebAssembly.Memory`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory)
  - : Ein Objekt, dessen [`buffer`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory/buffer) Eigenschaft ein veränderbares {{jsxref("ArrayBuffer")}} ist, das die Rohbytes des Speichers enthält, auf die von einer WebAssembly `Instance` zugegriffen wird.
- [`WebAssembly.Module`](/de/docs/WebAssembly/Reference/JavaScript_interface/Module)
  - : Enthält zustandslosen WebAssembly-Code, der bereits vom Browser kompiliert wurde und effizient [mit Workern geteilt](/de/docs/Web/API/Worker/postMessage) und mehrfach instanziiert werden kann.
- [`WebAssembly.RuntimeError`](/de/docs/WebAssembly/Reference/JavaScript_interface/RuntimeError)
  - : Fehlertyp, der ausgelöst wird, wenn WebAssembly einen [Trap](https://webassembly.github.io/simd/core/intro/overview.html#trap) angibt.
- [`WebAssembly.Table`](/de/docs/WebAssembly/Reference/JavaScript_interface/Table)
  - : Eine array-ähnliche Struktur, die eine WebAssembly-Tabelle darstellt und [Referenzen](https://webassembly.github.io/spec/core/syntax/types.html#syntax-reftype) speichert, wie z. B. Funktionsreferenzen.
- [`WebAssembly.Tag`](/de/docs/WebAssembly/Reference/JavaScript_interface/Tag)
  - : Ein Objekt, das einen Typ von WebAssembly-Ausnahmen repräsentiert.
- [`WebAssembly.Exception`](/de/docs/WebAssembly/Reference/JavaScript_interface/Exception)
  - : Ein WebAssembly-Ausnahmeobjekt, das sowohl innerhalb von als auch über WebAssembly/JavaScript-Grenzen hinweg geworfen, gefangen und erneut geworfen werden kann.

## Statische Methoden

- [`WebAssembly.compile()`](/de/docs/WebAssembly/Reference/JavaScript_interface/compile_static)
  - : Kompiliert ein [`WebAssembly.Module`](/de/docs/WebAssembly/Reference/JavaScript_interface/Module) aus WebAssembly-Binärcode und lässt die Instanziierung als separaten Schritt.
- [`WebAssembly.compileStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/compileStreaming_static)
  - : Kompiliert ein [`WebAssembly.Module`](/de/docs/WebAssembly/Reference/JavaScript_interface/Module) direkt aus einer gestreamten zugrunde liegenden Quelle und lässt die Instanziierung als separaten Schritt.
- [`WebAssembly.instantiate()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiate_static)
  - : Die primäre API zum Kompilieren und Instanziieren von WebAssembly-Code, die sowohl ein `Module` als auch dessen erste `Instance` zurückgibt.
- [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static)
  - : Kompiliert und instanziiert ein WebAssembly-Modul direkt aus einer gestreamten zugrunde liegenden Quelle, wobei sowohl ein `Module` als auch dessen erste `Instance` zurückgegeben werden.
- [`WebAssembly.validate()`](/de/docs/WebAssembly/Reference/JavaScript_interface/validate_static)
  - : Validiert ein gegebenes typisiertes Array von WebAssembly-Binärcode und gibt zurück, ob die Bytes gültiger WebAssembly-Code sind (`true`) oder nicht (`false`).

## Beispiele

### Streamen Sie ein Wasm-Modul, dann kompilieren und instanziieren Sie es

Das folgende Beispiel (sehen Sie sich unser [instantiate-streaming.html](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/instantiate-streaming.html) Demo auf GitHub an und [zeigen Sie es live an](https://mdn.github.io/webassembly-examples/js-api-examples/instantiate-streaming.html)) streamt ein Wasm-Modul direkt aus einer zugrunde liegenden Quelle, kompiliert und instanziiert es, wobei das Versprechen mit einem `ResultObject` erfüllt wird. Da die `instantiateStreaming()` Funktion ein Versprechen für ein [`Response`](/de/docs/Web/API/Response) Objekt akzeptiert, können Sie direkt einen [`fetch()`](/de/docs/Web/API/Window/fetch) Aufruf übergeben, und es wird die Antwort in die Funktion übergeben, wenn es erfüllt wird.

```js
const importObject = {
  my_namespace: { imported_func: (arg) => console.log(arg) },
};

WebAssembly.instantiateStreaming(fetch("simple.wasm"), importObject).then(
  (obj) => obj.instance.exports.exported_func(),
);
```

Die `.instance` Eigenschaft des `ResultObject` wird dann abgerufen und die enthaltene exportierte Funktion aufgerufen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebAssembly](/de/docs/WebAssembly) Übersichtsseite
- [WebAssembly-Konzepte](/de/docs/WebAssembly/Guides/Concepts)
- [Verwendung der WebAssembly JavaScript API](/de/docs/WebAssembly/Guides/Using_the_JavaScript_API)
