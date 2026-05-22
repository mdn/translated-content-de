---
title: WebAssembly
slug: WebAssembly/Reference/JavaScript_interface
l10n:
  sourceCommit: 48b0dc43b7c13a2c9a5d2c56f110444d2550b90e
---

Das **`WebAssembly`** JavaScript-Objekt dient als Namensraum für alle [WebAssembly](/de/docs/WebAssembly)-bezogenen Funktionen.

Anders als die meisten anderen globalen Objekte ist `WebAssembly` kein Konstruktor (es ist kein Funktionsobjekt). Sie können es mit {{jsxref("Math")}} vergleichen, das ebenfalls ein Namensraumobjekt für mathematische Konstanten und Funktionen ist, oder mit {{jsxref("Intl")}}, das das Namensraumobjekt für Internationalisierungs-Konstruktoren und andere sprachempfindliche Funktionen ist.

## Beschreibung

Die Hauptanwendungen des `WebAssembly`-Objekts sind:

- Laden von WebAssembly-Code mit der Funktion [`WebAssembly.instantiate()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiate_static).
- Erstellen neuer Speicher- und Tabelleninstanzen über die Konstruktoren [`WebAssembly.Memory()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory)/[`WebAssembly.Table()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Table).
- Bereitstellen von Möglichkeiten, um Fehler, die in WebAssembly auftreten, zu behandeln, über die Konstruktoren [`WebAssembly.CompileError()`](/de/docs/WebAssembly/Reference/JavaScript_interface/CompileError)/[`WebAssembly.LinkError()`](/de/docs/WebAssembly/Reference/JavaScript_interface/LinkError)/[`WebAssembly.RuntimeError()`](/de/docs/WebAssembly/Reference/JavaScript_interface/RuntimeError).

## Schnittstellen

- [`WebAssembly.CompileError`](/de/docs/WebAssembly/Reference/JavaScript_interface/CompileError)
  - : Gibt einen Fehler während des Decodings oder der Validierung von WebAssembly an.
- [`WebAssembly.Global`](/de/docs/WebAssembly/Reference/JavaScript_interface/Global)
  - : Stellt eine Instanz einer globalen Variablen dar, die sowohl von JavaScript aus zugänglich als auch importierbar/exportierbar über ein oder mehrere [`WebAssembly.Module`](/de/docs/WebAssembly/Reference/JavaScript_interface/Module)-Instanzen ist. Dies ermöglicht dynamisches Verknüpfen mehrerer Module.
- [`WebAssembly.Instance`](/de/docs/WebAssembly/Reference/JavaScript_interface/Instance)
  - : Ist eine zustandsbehaftete, ausführbare Instanz eines [`WebAssembly.Module`](/de/docs/WebAssembly/Reference/JavaScript_interface/Module).
- [`WebAssembly.LinkError`](/de/docs/WebAssembly/Reference/JavaScript_interface/LinkError)
  - : Gibt einen Fehler während der Modulinstanziierung an (außer [Traps](https://webassembly.github.io/simd/core/intro/overview.html#trap) aus der Startfunktion).
- [`WebAssembly.Memory`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory)
  - : Ein Objekt, dessen [`buffer`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory/buffer)-Eigenschaft ein skalierbarer {{jsxref("ArrayBuffer")}} ist, der die Rohdaten des Speichers enthält, auf den eine WebAssembly-`Instance` zugreift.
- [`WebAssembly.Module`](/de/docs/WebAssembly/Reference/JavaScript_interface/Module)
  - : Enthält zustandslosen WebAssembly-Code, der vom Browser bereits kompiliert wurde und effizient [mit Workers geteilt](/de/docs/Web/API/Worker/postMessage) und mehrfach instanziiert werden kann.
- [`WebAssembly.RuntimeError`](/de/docs/WebAssembly/Reference/JavaScript_interface/RuntimeError)
  - : Fehlerart, die immer dann ausgelöst wird, wenn WebAssembly eine [Trap](https://webassembly.github.io/simd/core/intro/overview.html#trap) angibt.
- [`WebAssembly.Table`](/de/docs/WebAssembly/Reference/JavaScript_interface/Table)
  - : Eine arrayähnliche Struktur, die eine WebAssembly-Tabelle darstellt, die [Referenzen](https://webassembly.github.io/spec/core/syntax/types.html#syntax-reftype) speichert, wie z.B. Funktionsreferenzen.
- [`WebAssembly.Tag`](/de/docs/WebAssembly/Reference/JavaScript_interface/Tag)
  - : Ein Objekt, das einen Typ einer WebAssembly-Ausnahme darstellt.
- [`WebAssembly.Exception`](/de/docs/WebAssembly/Reference/JavaScript_interface/Exception)
  - : Ein WebAssembly-Ausnahmeobjekt, das sowohl innerhalb als auch über WebAssembly/JavaScript-Grenzen hinweg geworfen, gefangen und erneut geworfen werden kann.

## Statische Eigenschaften

- [`WebAssembly.JSTag`](/de/docs/WebAssembly/Reference/JavaScript_interface/JSTag_static)
  - : Ein eingebauter [`WebAssembly.Tag`](/de/docs/WebAssembly/Reference/JavaScript_interface/Tag), der Ausnahmen darstellt, die im JavaScript-Host ausgelöst werden — er ermöglicht die Behandlung von Ausnahmen, die in JavaScript ausgelöst werden, von innerhalb eines Wasm-Moduls aus.

## Statische Methoden

- [`WebAssembly.compile()`](/de/docs/WebAssembly/Reference/JavaScript_interface/compile_static)
  - : Kompiliert ein [`WebAssembly.Module`](/de/docs/WebAssembly/Reference/JavaScript_interface/Module) aus WebAssembly-Binärcode, wobei die Instanziierung als separater Schritt verbleibt.
- [`WebAssembly.compileStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/compileStreaming_static)
  - : Kompiliert ein [`WebAssembly.Module`](/de/docs/WebAssembly/Reference/JavaScript_interface/Module) direkt aus einer gestreamten zugrunde liegenden Quelle, wobei die Instanziierung als separater Schritt verbleibt.
- [`WebAssembly.instantiate()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiate_static)
  - : Die primäre API zum Kompilieren und Instanziieren von WebAssembly-Code, die sowohl ein `Module` als auch seine erste `Instance` zurückgibt.
- [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static)
  - : Kompiliert und instanziiert ein WebAssembly-Modul direkt aus einer gestreamten zugrunde liegenden Quelle, wobei sowohl ein `Module` als auch seine erste `Instance` zurückgegeben werden.
- [`WebAssembly.validate()`](/de/docs/WebAssembly/Reference/JavaScript_interface/validate_static)
  - : Validiert ein gegebenes typisiertes Array von WebAssembly-Binärcode und gibt zurück, ob die Bytes gültiger WebAssembly-Code (`true`) sind oder nicht (`false`).

## Beispiele

### Streamen Sie ein Wasm-Modul, dann kompilieren und instanziieren Sie es

Das folgende Beispiel (siehe unser [instantiate-streaming.html](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/instantiate-streaming.html)-Demo auf GitHub und [sehen Sie es live](https://mdn.github.io/webassembly-examples/js-api-examples/instantiate-streaming.html) an) streamt direkt ein Wasm-Modul aus einer zugrunde liegenden Quelle, dann kompiliert und instanziiert es, wobei das Versprechen mit einem `ResultObject` erfüllt wird. Da die Funktion `instantiateStreaming()` ein Versprechen für ein [`Response`](/de/docs/Web/API/Response)-Objekt akzeptiert, können Sie direkt einen [`fetch()`](/de/docs/Web/API/Window/fetch)-Aufruf übergeben, und es wird die Antwort in die Funktion übergeben, wenn es erfüllt wird.

```js
const importObject = {
  my_namespace: { imported_func: (arg) => console.log(arg) },
};

WebAssembly.instantiateStreaming(fetch("simple.wasm"), importObject).then(
  (obj) => obj.instance.exports.exported_func(),
);
```

Die `.instance`-Eigenschaft des `ResultObject` wird dann aufgerufen, und die enthaltene exportierte Funktion wird ausgeführt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebAssembly](/de/docs/WebAssembly)-Übersicht
- [WebAssembly-Konzepte](/de/docs/WebAssembly/Guides/Concepts)
- [Verwendung der WebAssembly-JavaScript-API](/de/docs/WebAssembly/Guides/Using_the_JavaScript_API)
