---
title: WebAssembly.Global() Konstruktor
slug: WebAssembly/Reference/JavaScript_interface/Global/Global
l10n:
  sourceCommit: 006c05b688814b45a01ad965bbe4ebfc15513e74
---

Ein **`WebAssembly.Global()`** Konstruktor erstellt ein neues `Global` Objekt, das eine globale Variableninstanz darstellt, die sowohl von JavaScript aus zugänglich ist als auch über eine oder mehrere [`WebAssembly.Module`](/de/docs/WebAssembly/Reference/JavaScript_interface/Module) Instanzen importiert/exportiert werden kann. Dies ermöglicht die dynamische Verknüpfung mehrerer Module.

## Syntax

```js-nolint
new WebAssembly.Global(descriptor, value)
```

### Parameter

- `descriptor`

  - : Ein Objekt, das zwei Eigenschaften enthält:

    - `value`: Ein String, der den Datentyp der globalen Variable darstellt. Dies kann einer der folgenden sein:
      - `i32`: Ein 32-Bit Ganzzahl.
      - `i64`: Ein 64-Bit Ganzzahl. (In JavaScript wird dies als {{jsxref("BigInt")}} dargestellt)
      - `f32`: Eine 32-Bit Gleitkommazahl.
      - `f64`: Eine 64-Bit Gleitkommazahl.
      - `v128`: Ein 128-Bit Vektor.
      - `externref`: Ein Hostverweis.
      - `anyfunc`: Ein Funktionsverweis.
    - `mutable`: Ein boolescher Wert, der bestimmt, ob die globale Variable veränderlich ist oder nicht. Standardmäßig ist dies `false`.

- `value`
  - : Der Wert, den die Variable enthält. Dies kann jeder Wert sein, solange sein Typ mit dem Datentyp der Variablen übereinstimmt. Wenn kein Wert angegeben ist, wird ein typisierter 0-Wert verwendet, wo der Wert von `descriptor.value` einer von `i32`, `i64`, `f32` oder `f64` ist, und `null` wird verwendet, wenn `descriptor.value` `externref` oder `anyfunc` ist (gemäß dem [`DefaultValue` Algorithmus](https://webassembly.github.io/spec/js-api/#defaultvalue)).

## Beispiele

### Erstellen einer neuen Global Instanz

Das folgende Beispiel zeigt, wie eine neue globale Instanz mit dem `WebAssembly.Global()` Konstruktor erstellt wird. Sie wird als veränderlicher `i32` Typ definiert, mit einem Wert von 0.

Der Wert der globalen Variable wird dann geändert, zunächst auf `42` unter Verwendung der `Global.value` Eigenschaft und dann auf 43 unter Verwendung der `incGlobal()` Funktion, die aus dem `global.wasm` Modul exportiert wird (dieses fügt dem gegebenen Wert 1 hinzu und gibt dann den neuen Wert zurück).

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
> Sie können das Beispiel [live auf GitHub ansehen](https://mdn.github.io/webassembly-examples/js-api-examples/global.html);
> siehe auch den [Quellcode](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/global.html).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebAssembly](/de/docs/WebAssembly) Übersicht
- [WebAssembly Konzepte](/de/docs/WebAssembly/Guides/Concepts)
- [Verwendung der WebAssembly JavaScript API](/de/docs/WebAssembly/Guides/Using_the_JavaScript_API)
- [Import/Export veränderliche globale Vorschläge](https://github.com/WebAssembly/mutable-global/blob/master/proposals/mutable-global/Overview.md)
