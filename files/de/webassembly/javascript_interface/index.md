---
title: WebAssembly
slug: WebAssembly/JavaScript_interface
l10n:
  sourceCommit: c640274a19227cd5790912ea76841732baa6731f
---

{{WebAssemblySidebar}}

Das **`WebAssembly`** JavaScript-Objekt dient als Namensraum für alle [WebAssembly](/de/docs/WebAssembly)-bezogenen Funktionen.

Im Gegensatz zu den meisten anderen globalen Objekten ist `WebAssembly` kein Konstruktor (es ist kein Funktionsobjekt). Es kann mit {{jsxref("Math")}} verglichen werden, das ebenfalls ein Namensraumobjekt für mathematische Konstanten und Funktionen ist, oder mit {{jsxref("Intl")}}, das ein Namensraumobjekt für Internationalisierungskonstruktoren und andere sprachabhängige Funktionen ist.

## Beschreibung

Die Hauptanwendungen des `WebAssembly`-Objekts sind:

- Laden von WebAssembly-Code mit der Funktion [`WebAssembly.instantiate()`](/de/docs/WebAssembly/JavaScript_interface/instantiate_static).
- Erstellen neuer Speicher- und Tabelleneinheiten über die Konstruktoren [`WebAssembly.Memory()`](/de/docs/WebAssembly/JavaScript_interface/Memory)/[`WebAssembly.Table()`](/de/docs/WebAssembly/JavaScript_interface/Table).
- Bereitstellung von Einrichtungen zur Behandlung von Fehlern, die in WebAssembly auftreten, über die Konstruktoren [`WebAssembly.CompileError()`](/de/docs/WebAssembly/JavaScript_interface/CompileError)/[`WebAssembly.LinkError()`](/de/docs/WebAssembly/JavaScript_interface/LinkError)/[`WebAssembly.RuntimeError()`](/de/docs/WebAssembly/JavaScript_interface/RuntimeError).

## Schnittstellen

- [`WebAssembly.CompileError`](/de/docs/WebAssembly/JavaScript_interface/CompileError)
  - : Gibt einen Fehler während der WebAssembly-Dekodierung oder -Validierung an.
- [`WebAssembly.Global`](/de/docs/WebAssembly/JavaScript_interface/Global)
  - : Stellt eine Instanz einer globalen Variablen dar, die sowohl von JavaScript aus zugänglich als auch über eine oder mehrere [`WebAssembly.Module`](/de/docs/WebAssembly/JavaScript_interface/Module)-Instanzen importierbar/exportierbar ist. Dies ermöglicht dynamisches Verlinken mehrerer Module.
- [`WebAssembly.Instance`](/de/docs/WebAssembly/JavaScript_interface/Instance)
  - : Ist eine zustandsbehaftete, ausführbare Instanz eines [`WebAssembly.Module`](/de/docs/WebAssembly/JavaScript_interface/Module).
- [`WebAssembly.LinkError`](/de/docs/WebAssembly/JavaScript_interface/LinkError)
  - : Gibt einen Fehler während der Modulinstitution an (außer [Fallen](https://webassembly.github.io/simd/core/intro/overview.html#trap) aus der Startfunktion).
- [`WebAssembly.Memory`](/de/docs/WebAssembly/JavaScript_interface/Memory)
  - : Ein Objekt, dessen [`buffer`](/de/docs/WebAssembly/JavaScript_interface/Memory/buffer)-Eigenschaft ein größenveränderbarer {{jsxref("ArrayBuffer")}} ist, der die Rohbytes des Speichers enthält, auf den eine WebAssembly-`Instance` zugreift.
- [`WebAssembly.Module`](/de/docs/WebAssembly/JavaScript_interface/Module)
  - : Enthält zustandslosen WebAssembly-Code, der bereits vom Browser kompiliert wurde und effizient [mit Arbeitern geteilt](/de/docs/Web/API/Worker/postMessage) sowie mehrfach instanziiert werden kann.
- [`WebAssembly.RuntimeError`](/de/docs/WebAssembly/JavaScript_interface/RuntimeError)
  - : Fehlertyp, der immer dann ausgelöst wird, wenn WebAssembly eine [Falle](https://webassembly.github.io/simd/core/intro/overview.html#trap) spezifiziert.
- [`WebAssembly.Table`](/de/docs/WebAssembly/JavaScript_interface/Table)
  - : Eine array-ähnliche Struktur, die eine WebAssembly-Tabelle darstellt, die [Referenzen](https://webassembly.github.io/spec/core/syntax/types.html#syntax-reftype) speichert, wie Funktionsreferenzen.
- [`WebAssembly.Tag`](/de/docs/WebAssembly/JavaScript_interface/Tag)
  - : Ein Objekt, das einen Typ einer WebAssembly-Ausnahme repräsentiert.
- [`WebAssembly.Exception`](/de/docs/WebAssembly/JavaScript_interface/Exception)
  - : Ein WebAssembly-Ausnahmeobjekt, das innerhalb und über die Grenzen von WebAssembly/JavaScript hinweg geworfen, gefangen und erneut geworfen werden kann.

## Statische Methoden

- [`WebAssembly.instantiate()`](/de/docs/WebAssembly/JavaScript_interface/instantiate_static)
  - : Die primäre API zum Kompilieren und Instanziieren von WebAssembly-Code, die sowohl ein `Modul` als auch seine erste `Instanz` zurückgibt.
- [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/JavaScript_interface/instantiateStreaming_static)
  - : Kompiliert und instanziiert ein WebAssembly-Modul direkt aus einer gestreamten zugrunde liegenden Quelle und gibt sowohl ein `Modul` als auch seine erste `Instanz` zurück.
- [`WebAssembly.compile()`](/de/docs/WebAssembly/JavaScript_interface/compile_static)
  - : Kompiliert ein [`WebAssembly.Module`](/de/docs/WebAssembly/JavaScript_interface/Module) aus WebAssembly-Binärcode, wobei die Instanziierung als separater Schritt verbleibt.
- [`WebAssembly.compileStreaming()`](/de/docs/WebAssembly/JavaScript_interface/compileStreaming_static)
  - : Kompiliert ein [`WebAssembly.Module`](/de/docs/WebAssembly/JavaScript_interface/Module) direkt aus einer gestreamten zugrunde liegenden Quelle, wobei die Instanziierung als separater Schritt verbleibt.
- [`WebAssembly.validate()`](/de/docs/WebAssembly/JavaScript_interface/validate_static)
  - : Validiert ein gegebenes typisiertes Array von WebAssembly-Binärcode und gibt zurück, ob die Bytes gültiger WebAssembly-Code (`true`) oder nicht (`false`) sind.

## Beispiele

### Streamen eines Wasm-Moduls, dann Kompilieren und Instanziieren

Das folgende Beispiel (siehe unser [instantiate-streaming.html](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/instantiate-streaming.html) Demo auf GitHub und [sehen Sie es live](https://mdn.github.io/webassembly-examples/js-api-examples/instantiate-streaming.html) auch) streamt ein Wasm-Modul direkt aus einer zugrunde liegenden Quelle, kompiliert und instanziiert es, wobei das Versprechen mit einem `ResultObject` erfüllt wird. Da die Funktion `instantiateStreaming()` ein Versprechen für ein [`Response`](/de/docs/Web/API/Response)-Objekt akzeptiert, können Sie direkt einen [`fetch()`](/de/docs/Web/API/Window/fetch)-Aufruf übergeben, und sie wird die Antwort in die Funktion übergeben, sobald sie erfüllt ist.

```js
const importObject = {
  my_namespace: { imported_func: (arg) => console.log(arg) },
};

WebAssembly.instantiateStreaming(fetch("simple.wasm"), importObject).then(
  (obj) => obj.instance.exports.exported_func(),
);
```

Auf die `.instance`-Eigenschaft des `ResultObject` wird dann zugegriffen und die enthaltene exportierte Funktion aufgerufen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebAssembly](/de/docs/WebAssembly) Übersichtsseite
- [WebAssembly-Konzepte](/de/docs/WebAssembly/Concepts)
- [Verwendung der WebAssembly JavaScript-API](/de/docs/WebAssembly/Using_the_JavaScript_API)
