---
title: WebAssembly
slug: WebAssembly/JavaScript_interface
l10n:
  sourceCommit: c640274a19227cd5790912ea76841732baa6731f
---

{{WebAssemblySidebar}}

Das **`WebAssembly`** JavaScript-Objekt dient als Namensraum für alle mit [WebAssembly](/de/docs/WebAssembly) verbundenen Funktionen.

Im Gegensatz zu den meisten anderen globalen Objekten ist `WebAssembly` kein Konstruktor (es ist kein Funktionsobjekt). Sie können es mit {{jsxref("Math")}} vergleichen, das ebenfalls ein Namensraumobjekt für mathematische Konstanten und Funktionen ist, oder mit {{jsxref("Intl")}}, welches das Namensraumobjekt für Internationalisierungskonstruktoren und andere sprachsensitive Funktionen ist.

## Beschreibung

Die Hauptanwendungen des `WebAssembly`-Objekts sind:

- Laden von WebAssembly-Code mit der Funktion [`WebAssembly.instantiate()`](/de/docs/WebAssembly/JavaScript_interface/instantiate_static).
- Erstellen neuer Speicher- und Tabelleninstanzen über die Konstruktoren [`WebAssembly.Memory()`](/de/docs/WebAssembly/JavaScript_interface/Memory)/[`WebAssembly.Table()`](/de/docs/WebAssembly/JavaScript_interface/Table).
- Bereitstellung von Mechanismen zur Behandlung von Fehlern, die in WebAssembly auftreten, über die Konstruktoren [`WebAssembly.CompileError()`](/de/docs/WebAssembly/JavaScript_interface/CompileError)/[`WebAssembly.LinkError()`](/de/docs/WebAssembly/JavaScript_interface/LinkError)/[`WebAssembly.RuntimeError()`](/de/docs/WebAssembly/JavaScript_interface/RuntimeError).

## Schnittstellen

- [`WebAssembly.CompileError`](/de/docs/WebAssembly/JavaScript_interface/CompileError)
  - : Weist auf einen Fehler während der WebAssembly-Dekodierung oder -Validierung hin.
- [`WebAssembly.Global`](/de/docs/WebAssembly/JavaScript_interface/Global)
  - : Repräsentiert eine globale Variableninstanz, die sowohl von JavaScript zugänglich als auch über eine oder mehrere [`WebAssembly.Module`](/de/docs/WebAssembly/JavaScript_interface/Module)-Instanzen importierbar/exportierbar ist. Dies ermöglicht das dynamische Verlinken mehrerer Module.
- [`WebAssembly.Instance`](/de/docs/WebAssembly/JavaScript_interface/Instance)
  - : Ist eine zustandsbehaftete, ausführbare Instanz eines [`WebAssembly.Module`](/de/docs/WebAssembly/JavaScript_interface/Module).
- [`WebAssembly.LinkError`](/de/docs/WebAssembly/JavaScript_interface/LinkError)
  - : Weist auf einen Fehler bei der Modulinstanziierung hin (abgesehen von [Traps](https://webassembly.github.io/simd/core/intro/overview.html#trap) aus der Startfunktion).
- [`WebAssembly.Memory`](/de/docs/WebAssembly/JavaScript_interface/Memory)
  - : Ein Objekt, dessen [`buffer`](/de/docs/WebAssembly/JavaScript_interface/Memory/buffer)-Eigenschaft ein resizables {{jsxref("ArrayBuffer")}} ist, das die rohen Bytes des Speichers enthält, auf den von einer WebAssembly-`Instance` zugegriffen wird.
- [`WebAssembly.Module`](/de/docs/WebAssembly/JavaScript_interface/Module)
  - : Enthält zustandslosen WebAssembly-Code, der bereits vom Browser kompiliert wurde und effizient [mit Workern geteilt](/de/docs/Web/API/Worker/postMessage) und mehrfach instanziiert werden kann.
- [`WebAssembly.RuntimeError`](/de/docs/WebAssembly/JavaScript_interface/RuntimeError)
  - : Fehlerstyp, der immer dann ausgelöst wird, wenn WebAssembly eine [Trap](https://webassembly.github.io/simd/core/intro/overview.html#trap) angibt.
- [`WebAssembly.Table`](/de/docs/WebAssembly/JavaScript_interface/Table)
  - : Eine array-ähnliche Struktur, die eine WebAssembly-Tabelle darstellt, welche [Referenzen](https://webassembly.github.io/spec/core/syntax/types.html#syntax-reftype), wie z.B. Funktionsreferenzen, speichert.
- [`WebAssembly.Tag`](/de/docs/WebAssembly/JavaScript_interface/Tag)
  - : Ein Objekt, das eine Art von WebAssembly-Ausnahme darstellt.
- [`WebAssembly.Exception`](/de/docs/WebAssembly/JavaScript_interface/Exception)
  - : Ein WebAssembly-Ausnahmeobjekt, das sowohl innerhalb als auch über WebAssembly/JavaScript-Grenzen hinweg geworfen, gefangen und erneut geworfen werden kann.

## Statische Methoden

- [`WebAssembly.instantiate()`](/de/docs/WebAssembly/JavaScript_interface/instantiate_static)
  - : Die primäre API zum Kompilieren und Instanziieren von WebAssembly-Code, die sowohl ein `Module` als auch seine erste `Instance` zurückgibt.
- [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/JavaScript_interface/instantiateStreaming_static)
  - : Kompiliert und instanziiert ein WebAssembly-Modul direkt aus einer gestreamten zugrundeliegenden Quelle und gibt sowohl ein `Module` als auch seine erste `Instance` zurück.
- [`WebAssembly.compile()`](/de/docs/WebAssembly/JavaScript_interface/compile_static)
  - : Kompiliert ein [`WebAssembly.Module`](/de/docs/WebAssembly/JavaScript_interface/Module) aus WebAssembly-Binärcode, wobei die Instanziierung als separater Schritt verbleibt.
- [`WebAssembly.compileStreaming()`](/de/docs/WebAssembly/JavaScript_interface/compileStreaming_static)
  - : Kompiliert ein [`WebAssembly.Module`](/de/docs/WebAssembly/JavaScript_interface/Module) direkt aus einer gestreamten zugrundeliegenden Quelle, wobei die Instanziierung als separater Schritt verbleibt.
- [`WebAssembly.validate()`](/de/docs/WebAssembly/JavaScript_interface/validate_static)
  - : Validiert ein gegebenes typisiertes Array von WebAssembly-Binärcode und gibt zurück, ob die Bytes gültiger WebAssembly-Code sind (`true`) oder nicht (`false`).

## Beispiele

### Ein Wasm-Modul streamen, dann kompilieren und instanziieren

Das folgende Beispiel (sehen Sie sich unser [instantiate-streaming.html](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/instantiate-streaming.html)-Demo auf GitHub an und [sehen Sie es live](https://mdn.github.io/webassembly-examples/js-api-examples/instantiate-streaming.html)) streamt direkt ein Wasm-Modul aus einer zugrundeliegenden Quelle, kompiliert und instanziiert es dann, wobei das Versprechen mit einem `ResultObject` erfüllt wird. Da die Funktion `instantiateStreaming()` ein Versprechen für ein [`Response`](/de/docs/Web/API/Response)-Objekt akzeptiert, können Sie direkt einen [`fetch()`](/de/docs/Web/API/Window/fetch)-Aufruf übergeben, und es wird die Antwort in die Funktion übergeben, wenn es erfüllt wird.

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

- Überblicksseite zu [WebAssembly](/de/docs/WebAssembly)
- [WebAssembly-Konzepte](/de/docs/WebAssembly/Concepts)
- [Verwendung der WebAssembly-JavaScript-API](/de/docs/WebAssembly/Using_the_JavaScript_API)
