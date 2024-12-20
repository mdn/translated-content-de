---
title: WebAssembly
slug: WebAssembly/JavaScript_interface
l10n:
  sourceCommit: ac338a2e458dba2162743b4e69c2ab2addad8b7c
---

{{WebAssemblySidebar}}

Das **`WebAssembly`** JavaScript-Objekt fungiert als Namensraum für alle mit [WebAssembly](/de/docs/WebAssembly) verbundenen Funktionalitäten.

Im Gegensatz zu den meisten anderen globalen Objekten ist `WebAssembly` kein Konstruktor (es ist kein Funktionsobjekt). Sie können es mit {{jsxref("Math")}} vergleichen, welches ebenfalls ein Namensraumobjekt für mathematische Konstanten und Funktionen ist, oder mit {{jsxref("Intl")}}, welches das Namensraumobjekt für Internationalisierungskonstruktoren und andere sprachsensitive Funktionen ist.

## Beschreibung

Die Hauptverwendungen des `WebAssembly`-Objekts sind:

- Laden von WebAssembly-Code, mithilfe der Funktion [`WebAssembly.instantiate()`](/de/docs/WebAssembly/JavaScript_interface/instantiate_static).
- Erstellen neuer Speicher- und Tabellinstanzen über die Konstruktoren [`WebAssembly.Memory()`](/de/docs/WebAssembly/JavaScript_interface/Memory)/[`WebAssembly.Table()`](/de/docs/WebAssembly/JavaScript_interface/Table).
- Bereitstellen von Einrichtungen zur Behandlung von in WebAssembly auftretenden Fehlern über die Konstruktoren [`WebAssembly.CompileError()`](/de/docs/WebAssembly/JavaScript_interface/CompileError)/[`WebAssembly.LinkError()`](/de/docs/WebAssembly/JavaScript_interface/LinkError)/[`WebAssembly.RuntimeError()`](/de/docs/WebAssembly/JavaScript_interface/RuntimeError).

## Schnittstellen

- [`WebAssembly.CompileError`](/de/docs/WebAssembly/JavaScript_interface/CompileError)
  - : Zeigt einen Fehler während des Dekodierens oder der Validierung von WebAssembly an.
- [`WebAssembly.Global`](/de/docs/WebAssembly/JavaScript_interface/Global)
  - : Stellt eine globale Variableninstanz dar, die sowohl von JavaScript aus zugänglich als auch innerhalb eines oder mehrerer [`WebAssembly.Module`](/de/docs/WebAssembly/JavaScript_interface/Module)-Instanzen importierbar/exportierbar ist. Dies ermöglicht eine dynamische Verknüpfung mehrerer Module.
- [`WebAssembly.Instance`](/de/docs/WebAssembly/JavaScript_interface/Instance)
  - : Ist eine zustandsbehaftete, ausführbare Instanz eines [`WebAssembly.Module`](/de/docs/WebAssembly/JavaScript_interface/Module).
- [`WebAssembly.LinkError`](/de/docs/WebAssembly/JavaScript_interface/LinkError)
  - : Zeigt einen Fehler während der Modulerstellung an (außer [Traps](https://webassembly.github.io/simd/core/intro/overview.html#trap) aus der Startfunktion).
- [`WebAssembly.Memory`](/de/docs/WebAssembly/JavaScript_interface/Memory)
  - : Ein Objekt, dessen [`buffer`](/de/docs/WebAssembly/JavaScript_interface/Memory/buffer)-Eigenschaft ein anpassbares {{jsxref("ArrayBuffer")}} ist, das die Rohbytes des Speichers hält, auf den eine WebAssembly-`Instance` zugreift.
- [`WebAssembly.Module`](/de/docs/WebAssembly/JavaScript_interface/Module)
  - : Enthält zustandslosen WebAssembly-Code, der bereits vom Browser kompiliert wurde und effizient mit [Workers geteilt](/de/docs/Web/API/Worker/postMessage) und mehrfach instanziiert werden kann.
- [`WebAssembly.RuntimeError`](/de/docs/WebAssembly/JavaScript_interface/RuntimeError)
  - : Fehlertyp, der ausgelöst wird, wenn immer WebAssembly eine [Trap](https://webassembly.github.io/simd/core/intro/overview.html#trap) spezifiziert.
- [`WebAssembly.Table`](/de/docs/WebAssembly/JavaScript_interface/Table)
  - : Eine arrayähnliche Struktur, die eine WebAssembly-Tabelle darstellt und [Referenzen](https://webassembly.github.io/spec/core/syntax/types.html#syntax-reftype) speichert, z.B. Funktionsreferenzen.
- [`WebAssembly.Tag`](/de/docs/WebAssembly/JavaScript_interface/Tag)
  - : Ein Objekt, das eine Art von WebAssembly-Ausnahme darstellt.
- [`WebAssembly.Exception`](/de/docs/WebAssembly/JavaScript_interface/Exception)
  - : Ein WebAssembly-Ausnahmeobjekt, das ausgelöst, aufgefangen und sowohl innerhalb als auch über WebAssembly/JavaScript-Grenzen hinweg erneut geworfen werden kann.

## Statische Methoden

- [`WebAssembly.compile()`](/de/docs/WebAssembly/JavaScript_interface/compile_static)
  - : Kompiliert ein [`WebAssembly.Module`](/de/docs/WebAssembly/JavaScript_interface/Module) aus WebAssembly-Binärcode, wobei die Instanziierung als separater Schritt belassen wird.
- [`WebAssembly.compileStreaming()`](/de/docs/WebAssembly/JavaScript_interface/compileStreaming_static)
  - : Kompiliert ein [`WebAssembly.Module`](/de/docs/WebAssembly/JavaScript_interface/Module) direkt aus einer gestreamten unterliegenden Quelle, wobei die Instanziierung als separater Schritt belassen wird.
- [`WebAssembly.instantiate()`](/de/docs/WebAssembly/JavaScript_interface/instantiate_static)
  - : Die primäre API zum Kompilieren und Instanziieren von WebAssembly-Code, die sowohl ein `Module` als auch seine erste `Instance` zurückgibt.
- [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/JavaScript_interface/instantiateStreaming_static)
  - : Kompiliert und instanziiert ein WebAssembly-Modul direkt aus einer gestreamten unterliegenden Quelle, gibt sowohl ein `Module` als auch seine erste `Instance` zurück.
- [`WebAssembly.validate()`](/de/docs/WebAssembly/JavaScript_interface/validate_static)
  - : Validiert ein gegebenes typisiertes Array von WebAssembly-Binärcode, wobei zurückgegeben wird, ob die Bytes gültiger WebAssembly-Code sind (`true`) oder nicht (`false`).

## Beispiele

### Ein Wasm-Modul streamen, dann kompilieren und instanziieren

Das folgende Beispiel (sehen Sie unser [instantiate-streaming.html](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/instantiate-streaming.html)-Demo auf GitHub an und [sehen Sie es live](https://mdn.github.io/webassembly-examples/js-api-examples/instantiate-streaming.html) auch) streamt direkt ein Wasm-Modul aus einer unterliegenden Quelle, dann kompiliert und instanziiert es dieses, wobei das Versprechen mit einem `ResultObject` erfüllt wird. Da die Funktion `instantiateStreaming()` ein Versprechen für ein [`Response`](/de/docs/Web/API/Response)-Objekt akzeptiert, können Sie ihr direkt einen [`fetch()`](/de/docs/Web/API/Window/fetch)-Aufruf übergeben, und es wird die Antwort in die Funktion übergeben, wenn es erfüllt wird.

```js
const importObject = {
  my_namespace: { imported_func: (arg) => console.log(arg) },
};

WebAssembly.instantiateStreaming(fetch("simple.wasm"), importObject).then(
  (obj) => obj.instance.exports.exported_func(),
);
```

Die `.instance`-Eigenschaft des `ResultObject` wird dann aufgerufen und die enthaltene exportierte Funktion aufgerufen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebAssembly](/de/docs/WebAssembly) Überblicksseite
- [WebAssembly-Konzepte](/de/docs/WebAssembly/Concepts)
- [Verwendung der WebAssembly-JavaScript-API](/de/docs/WebAssembly/Using_the_JavaScript_API)
