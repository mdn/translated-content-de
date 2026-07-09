---
title: WebAssembly
slug: WebAssembly/Reference/JavaScript_interface
l10n:
  sourceCommit: 3934778cdfee0d5d2ae4c93b9f5568701008a628
---

Das **`WebAssembly`** JavaScript Objekt fungiert als Namensraum für alle mit [WebAssembly](/de/docs/WebAssembly) verbundenen Funktionen.

Im Gegensatz zu den meisten anderen globalen Objekten ist `WebAssembly` kein Konstruktor (es ist kein Funktionsobjekt). Sie können es mit {{jsxref("Math")}} vergleichen, das ebenfalls ein Namensraumobjekt für mathematische Konstanten und Funktionen ist, oder mit {{jsxref("Intl")}}, das das Namensraumobjekt für Internationalisierungs-Konstruktoren und andere sprachsensitive Funktionen ist.

## Beschreibung

Die Hauptverwendungen für das `WebAssembly`-Objekt sind:

- Laden von WebAssembly-Code mit der Funktion [`WebAssembly.instantiate()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiate_static).
- Erstellen neuer Speicher- und Tabelleninstanzen über die Konstruktoren [`WebAssembly.Memory()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory)/[`WebAssembly.Table()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Table).
- Bereitstellung von Funktionen zur Behandlung von Fehlern, die in WebAssembly auftreten, über die Konstruktoren [`WebAssembly.CompileError()`](/de/docs/WebAssembly/Reference/JavaScript_interface/CompileError)/[`WebAssembly.LinkError()`](/de/docs/WebAssembly/Reference/JavaScript_interface/LinkError)/[`WebAssembly.RuntimeError()`](/de/docs/WebAssembly/Reference/JavaScript_interface/RuntimeError).

## Schnittstellen

- [`WebAssembly.CompileError`](/de/docs/WebAssembly/Reference/JavaScript_interface/CompileError)
  - : Gibt einen Fehler beim Dekodieren oder Validieren von WebAssembly an.
- [`WebAssembly.Global`](/de/docs/WebAssembly/Reference/JavaScript_interface/Global)
  - : Repräsentiert eine globale Variableninstanz, die sowohl von JavaScript aus zugänglich ist als auch über eine oder mehrere [`WebAssembly.Module`](/de/docs/WebAssembly/Reference/JavaScript_interface/Module)-Instanzen importiert/exportiert werden kann. Dies ermöglicht das dynamische Verknüpfen mehrerer Module.
- [`WebAssembly.Instance`](/de/docs/WebAssembly/Reference/JavaScript_interface/Instance)
  - : Ist eine zustandsbehaftete, ausführbare Instanz eines [`WebAssembly.Module`](/de/docs/WebAssembly/Reference/JavaScript_interface/Module).
- [`WebAssembly.LinkError`](/de/docs/WebAssembly/Reference/JavaScript_interface/LinkError)
  - : Gibt einen Fehler während der Modulinstanziierung an (außer [traps](https://webassembly.github.io/simd/core/intro/overview.html#trap) aus der Startfunktion).
- [`WebAssembly.Memory`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory)
  - : Ein Objekt, dessen [`buffer`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory/buffer)-Eigenschaft ein anpassbares {{jsxref("ArrayBuffer")}} ist, der die rohen Bytes des Speichers hält, auf die eine WebAssembly-`Instance` zugreift.
- [`WebAssembly.Module`](/de/docs/WebAssembly/Reference/JavaScript_interface/Module)
  - : Enthält zustandslosen WebAssembly-Code, der bereits vom Browser kompiliert wurde und effizient [mit Workers geteilt](/de/docs/Web/API/Worker/postMessage) und mehrfach instanziiert werden kann.
- [`WebAssembly.RuntimeError`](/de/docs/WebAssembly/Reference/JavaScript_interface/RuntimeError)
  - : Fehlertyp, der immer dann ausgelöst wird, wenn WebAssembly eine [trap](https://webassembly.github.io/simd/core/intro/overview.html#trap) angibt.
- [`WebAssembly.Suspending`](/de/docs/WebAssembly/Reference/JavaScript_interface/Suspending)
  - : Repräsentiert eine aussetzende Funktion — eine asynchrone ({{jsxref("Promise")}}-basierte) JavaScript-Funktion, die, wenn sie in ein Wasm-Modul importiert und von innen aufgerufen wird, dazu führt, dass die Ausführung ausgesetzt wird, bis das Versprechen erfüllt ist.
- [`WebAssembly.Table`](/de/docs/WebAssembly/Reference/JavaScript_interface/Table)
  - : Eine array-ähnliche Struktur, die eine WebAssembly-Tabelle repräsentiert und [Referenzen](https://webassembly.github.io/spec/core/syntax/types.html#syntax-reftype), wie z.B. Funktionsreferenzen, speichert.
- [`WebAssembly.Tag`](/de/docs/WebAssembly/Reference/JavaScript_interface/Tag)
  - : Ein Objekt, das eine Art von WebAssembly-Ausnahme darstellt.
- [`WebAssembly.Exception`](/de/docs/WebAssembly/Reference/JavaScript_interface/Exception)
  - : Ein WebAssembly-Ausnahmeobjekt, das innerhalb und über WebAssembly/JavaScript-Grenzen hinweg geworfen, gefangen und erneut geworfen werden kann.

## Statische Eigenschaften

- [`WebAssembly.JSTag`](/de/docs/WebAssembly/Reference/JavaScript_interface/JSTag_static)
  - : Ein eingebauter [`WebAssembly.Tag`](/de/docs/WebAssembly/Reference/JavaScript_interface/Tag), der Ausnahmen darstellt, die im JavaScript-Host ausgelöst werden — damit können Ausnahmen, die in JavaScript ausgelöst werden, von innen in einem Wasm-Modul behandelt werden.

## Statische Methoden

- [`WebAssembly.compile()`](/de/docs/WebAssembly/Reference/JavaScript_interface/compile_static)
  - : Kompiliert ein [`WebAssembly.Module`](/de/docs/WebAssembly/Reference/JavaScript_interface/Module) aus WebAssembly-Binärcode, wobei die Instanziierung ein separater Schritt bleibt.
- [`WebAssembly.compileStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/compileStreaming_static)
  - : Kompiliert ein [`WebAssembly.Module`](/de/docs/WebAssembly/Reference/JavaScript_interface/Module) direkt aus einem gestreamten zugrundeliegenden Quellcode und lässt die Instanziierung als separaten Schritt.
- [`WebAssembly.instantiate()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiate_static)
  - : Die primäre API zum Kompilieren und Instanziieren von WebAssembly-Code, die sowohl ein `Module` als auch dessen erste `Instance` zurückgibt.
- [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static)
  - : Kompiliert und instanziiert ein WebAssembly-Modul direkt aus einem gestreamten zugrundeliegenden Quellcode und gibt sowohl ein `Module` als auch dessen erste `Instance` zurück.
- [`WebAssembly.promising()`](/de/docs/WebAssembly/Reference/JavaScript_interface/promising_static)
  - : Verpackt eine exportierte Wasm-Funktion, die von einem asynchronen Vorgang abhängt (d.h. eine importierte aussetzende Funktion, die über den Konstruktor [`WebAssembly.Suspending()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Suspending/Suspending) erstellt wurde) und verwandelt sie in ein {{jsxref("Promise")}}.
- [`WebAssembly.validate()`](/de/docs/WebAssembly/Reference/JavaScript_interface/validate_static)
  - : Validiert ein gegebenes typisiertes Array von WebAssembly-Binärcode und gibt zurück, ob die Bytes gültiger WebAssembly-Code sind (`true`) oder nicht (`false`).

## Beispiele

### Streamen eines Wasm-Moduls, dann kompilieren und instanziieren

Das folgende Beispiel (siehe unser [instantiate-streaming.html](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/instantiate-streaming.html) Demo auf GitHub und [sehen Sie es live](https://mdn.github.io/webassembly-examples/js-api-examples/instantiate-streaming.html) auch) streamt direkt ein Wasm-Modul aus einem zugrundeliegenden Quellcode, kompiliert und instanziiert es und erfüllt das Versprechen mit einem `ResultObject`. Da die `instantiateStreaming()`-Funktion ein Versprechen für ein [`Response`](/de/docs/Web/API/Response)-Objekt akzeptiert, können Sie direkt einen [`fetch()`](/de/docs/Web/API/Window/fetch)-Aufruf übergeben und es wird die Antwort in die Funktion einfügen, wenn sie erfüllt wird.

```js
const importObject = {
  my_namespace: { imported_func: (arg) => console.log(arg) },
};

WebAssembly.instantiateStreaming(fetch("simple.wasm"), importObject).then(
  (obj) => obj.instance.exports.exported_func(),
);
```

Die `.instance`-Eigenschaft des `ResultObject` wird dann aufgerufen und die enthaltene exportierte Funktion ausgeführt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebAssembly](/de/docs/WebAssembly) Übersicht
- [WebAssembly Konzepte](/de/docs/WebAssembly/Guides/Concepts)
- [Verwendung der WebAssembly JavaScript API](/de/docs/WebAssembly/Guides/Using_the_JavaScript_API)
