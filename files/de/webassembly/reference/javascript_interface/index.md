---
title: WebAssembly
slug: WebAssembly/Reference/JavaScript_interface
l10n:
  sourceCommit: 006c05b688814b45a01ad965bbe4ebfc15513e74
---

Das **`WebAssembly`** JavaScript-Objekt fungiert als Namensraum für alle mit [WebAssembly](/de/docs/WebAssembly) verbundenen Funktionen.

Anders als die meisten anderen globalen Objekte ist `WebAssembly` kein Konstruktor (es ist kein Funktionsobjekt). Sie können es mit {{jsxref("Math")}} vergleichen, das ebenfalls ein Namensraumobjekt für mathematische Konstanten und Funktionen ist, oder mit {{jsxref("Intl")}}, welches das Namensraumobjekt für Internationalisierungskonstruktoren und andere sprachsensitive Funktionen ist.

## Beschreibung

Die Hauptanwendungen des `WebAssembly`-Objekts sind:

- Laden von WebAssembly-Code mit der Funktion [`WebAssembly.instantiate()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiate_static).
- Erstellen neuer Speicher- und Tabelleninstanzen über die Konstruktoren [`WebAssembly.Memory()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory)/[`WebAssembly.Table()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Table).
- Bereitstellung von Einrichtungen zur Handhabung von Fehlern, die in WebAssembly über die Konstruktoren [`WebAssembly.CompileError()`](/de/docs/WebAssembly/Reference/JavaScript_interface/CompileError)/[`WebAssembly.LinkError()`](/de/docs/WebAssembly/Reference/JavaScript_interface/LinkError)/[`WebAssembly.RuntimeError()`](/de/docs/WebAssembly/Reference/JavaScript_interface/RuntimeError) auftreten.

## Schnittstellen

- [`WebAssembly.CompileError`](/de/docs/WebAssembly/Reference/JavaScript_interface/CompileError)
  - : Weist auf einen Fehler bei der WebAssembly-Dekodierung oder -Validierung hin.
- [`WebAssembly.Global`](/de/docs/WebAssembly/Reference/JavaScript_interface/Global)
  - : Stellt eine globale Variableninstanz dar, die sowohl von JavaScript aus zugänglich ist als auch über eine oder mehrere [`WebAssembly.Module`](/de/docs/WebAssembly/Reference/JavaScript_interface/Module)-Instanzen importiert/exportiert werden kann. Dies ermöglicht das dynamische Verlinken mehrerer Module.
- [`WebAssembly.Instance`](/de/docs/WebAssembly/Reference/JavaScript_interface/Instance)
  - : Ist eine zustandsbehaftete, ausführbare Instanz eines [`WebAssembly.Module`](/de/docs/WebAssembly/Reference/JavaScript_interface/Module).
- [`WebAssembly.LinkError`](/de/docs/WebAssembly/Reference/JavaScript_interface/LinkError)
  - : Weist auf einen Fehler bei der Modulinstanziierung hin (abgesehen von [Traps](https://webassembly.github.io/simd/core/intro/overview.html#trap) aus der Startfunktion).
- [`WebAssembly.Memory`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory)
  - : Ein Objekt, dessen [`buffer`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory/buffer)-Eigenschaft ein skalierbarer {{jsxref("ArrayBuffer")}} ist, der die Rohbytes des Speichers enthält, auf die von einer WebAssembly `Instance` zugegriffen wird.
- [`WebAssembly.Module`](/de/docs/WebAssembly/Reference/JavaScript_interface/Module)
  - : Enthält zustandslosen WebAssembly-Code, der bereits vom Browser kompiliert wurde und effizient [mit Arbeitern geteilt werden kann](/de/docs/Web/API/Worker/postMessage) und mehrfach instanziiert werden kann.
- [`WebAssembly.RuntimeError`](/de/docs/WebAssembly/Reference/JavaScript_interface/RuntimeError)
  - : Fehlertyp, der immer dann ausgelöst wird, wenn WebAssembly eine [Trap](https://webassembly.github.io/simd/core/intro/overview.html#trap) angibt.
- [`WebAssembly.Table`](/de/docs/WebAssembly/Reference/JavaScript_interface/Table)
  - : Eine arrayähnliche Struktur, die eine WebAssembly-Tabelle darstellt, die [Referenzen](https://webassembly.github.io/spec/core/syntax/types.html#syntax-reftype) wie Funktionsreferenzen speichert.
- [`WebAssembly.Tag`](/de/docs/WebAssembly/Reference/JavaScript_interface/Tag)
  - : Ein Objekt, das einen Typ einer WebAssembly-Ausnahme darstellt.
- [`WebAssembly.Exception`](/de/docs/WebAssembly/Reference/JavaScript_interface/Exception)
  - : Ein WebAssembly-Ausnahmeobjekt, das geworfen, gefangen und sowohl innerhalb als auch über die Grenzen von WebAssembly/JavaScript hinweg erneut geworfen werden kann.

## Statische Methoden

- [`WebAssembly.compile()`](/de/docs/WebAssembly/Reference/JavaScript_interface/compile_static)
  - : Kompiliert ein [`WebAssembly.Module`](/de/docs/WebAssembly/Reference/JavaScript_interface/Module) aus WebAssembly-Binärcode, wobei die Instanziierung als separater Schritt belassen wird.
- [`WebAssembly.compileStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/compileStreaming_static)
  - : Kompiliert ein [`WebAssembly.Module`](/de/docs/WebAssembly/Reference/JavaScript_interface/Module) direkt aus einer gestreamten zugrunde liegenden Quelle, wobei die Instanziierung als separater Schritt belassen wird.
- [`WebAssembly.instantiate()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiate_static)
  - : Die primäre API zum Kompilieren und Instanzieren von WebAssembly-Code, die sowohl ein `Module` als auch seine erste `Instance` zurückgibt.
- [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static)
  - : Kompiliert und instanziiert ein WebAssembly-Modul direkt aus einer gestreamten zugrunde liegenden Quelle und gibt sowohl ein `Module` als auch seine erste `Instance` zurück.
- [`WebAssembly.validate()`](/de/docs/WebAssembly/Reference/JavaScript_interface/validate_static)
  - : Validiert ein gegebenes typisiertes Array aus WebAssembly-Binärcode und gibt zurück, ob die Bytes gültiger WebAssembly-Code (`true`) sind oder nicht (`false`).

## Beispiele

### Ein Wasm-Modul streamen, dann kompilieren und instanziieren

Das folgende Beispiel (siehe unser [instantiate-streaming.html](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/instantiate-streaming.html) Demo auf GitHub und [sehen Sie es live](https://mdn.github.io/webassembly-examples/js-api-examples/instantiate-streaming.html) auch) streamt direkt ein Wasm-Modul aus einer zugrunde liegenden Quelle, kompiliert und instanziiert es dann, wobei das Versprechen mit einem `ResultObject` erfüllt wird. Da die `instantiateStreaming()`-Funktion ein Versprechen für ein [`Response`](/de/docs/Web/API/Response) Objekt akzeptiert, können Sie ihr direkt einen [`fetch()`](/de/docs/Web/API/Window/fetch) Aufruf übergeben, und es wird die Antwort in die Funktion übergeben, wenn sie erfüllt wird.

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

- [WebAssembly](/de/docs/WebAssembly) Überblick
- [WebAssembly Konzepte](/de/docs/WebAssembly/Guides/Concepts)
- [Verwendung der WebAssembly JavaScript-API](/de/docs/WebAssembly/Guides/Using_the_JavaScript_API)
