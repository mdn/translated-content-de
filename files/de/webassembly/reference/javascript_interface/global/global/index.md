---
title: WebAssembly.Global() Konstruktor
short-title: Global()
slug: WebAssembly/Reference/JavaScript_interface/Global/Global
l10n:
  sourceCommit: ca1301872404bbc0305fa945cf3e3fb2351863bf
---

Ein **`WebAssembly.Global()`** Konstruktor erstellt ein neues `Global`-Objekt, das eine Instanz einer globalen Variablen darstellt, die sowohl von JavaScript zugänglich als auch über ein oder mehrere [`WebAssembly.Module`](/de/docs/WebAssembly/Reference/JavaScript_interface/Module) Instanzen importierbar/exportierbar ist.
Dies ermöglicht die dynamische Verknüpfung mehrerer Module.

## Syntax

```js-nolint
new WebAssembly.Global(descriptor, value)
```

### Parameter

- `descriptor`
  - : Ein Objekt, das zwei Eigenschaften enthält:
    - `value`
      - : Ein String, der den Datentyp der globalen Variablen darstellt. Dies kann sein:
        - `i32`: Ein 32-Bit-Ganzzahl.
        - `i64`: Ein 64-Bit-Ganzzahl. (In JavaScript wird dies als {{jsxref("BigInt")}} dargestellt)
        - `f32`: Eine 32-Bit-Gleitkommazahl.
        - `f64`: Eine 64-Bit-Gleitkommazahl.
        - [`funcref`](/de/docs/WebAssembly/Reference/Value_types/funcref)
        - [`externref`](/de/docs/WebAssembly/Reference/Value_types/externref)
    - `mutable`
      - : Ein boolescher Wert, der bestimmt, ob die globale Variable veränderlich ist oder nicht. Standardmäßig ist dies `false`.

- `value`
  - : Der Wert, den die Variable enthält. Dies kann jeder Wert sein, solange sein Typ mit dem Datentyp der Variablen übereinstimmt.
    Wenn kein Wert angegeben wird, wird ein typisierter `0`-Wert verwendet, wenn der Wert von `descriptor.value` einer der `i32`, `i64`, `f32` oder `f64` ist, und `null` wird verwendet, wenn `descriptor.value` `externref` oder `anyfunc` ist.

## Beispiele

### Erstellen einer neuen Global-Instanz

Das folgende Beispiel zeigt, wie eine neue globale Instanz mit dem `WebAssembly.Global()` Konstruktor erstellt wird.
Sie wird als veränderlicher `i32`-Typ definiert, mit einem Wert von 0.

Der Wert der globalen Variable wird dann geändert, zuerst auf `42` mit der Eigenschaft `Global.value`, und dann auf 43 mit der Funktion `incGlobal()`, die aus dem `global.wasm` Modul exportiert wird (diese addiert 1 zu jedem übergebenen Wert und gibt dann den neuen Wert zurück).

```js
const output = document.getElementById("output");

function assertEq(msg, got, expected) {
  const result =
    got === expected
      ? `SUCCESS! Got: ${got}\n`
      : `FAIL!\nGot: ${got}\nExpected: ${expected}\n`;
  output.innerText += `Testing ${msg}: ${result}`;
}

assertEq("WebAssembly.Global exists", typeof WebAssembly.Global, "function");

const global = new WebAssembly.Global({ value: "i32", mutable: true }, 0);

WebAssembly.instantiateStreaming(fetch("global.wasm"), { js: { global } }).then(
  ({ instance }) => {
    assertEq(
      "getting initial value from wasm",
      instance.exports.getGlobal(),
      0,
    );
    global.value = 42;
    assertEq(
      "getting JS-updated value from wasm",
      instance.exports.getGlobal(),
      42,
    );
    instance.exports.incGlobal();
    assertEq("getting wasm-updated value from JS", global.value, 43);
  },
);
```

> [!NOTE]
> Sie können das Beispiel [live auf GitHub ausführen](https://mdn.github.io/webassembly-examples/js-api-examples/global.html);
> siehe auch den [Quellcode](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/global.html).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`global`](/de/docs/WebAssembly/Reference/Definitions/global) Definition
- [WebAssembly](/de/docs/WebAssembly) Übersicht
- [WebAssembly-Konzepte](/de/docs/WebAssembly/Guides/Concepts)
- [Verwendung der WebAssembly JavaScript API](/de/docs/WebAssembly/Guides/Using_the_JavaScript_API)
