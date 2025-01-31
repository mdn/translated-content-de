---
title: WebAssembly.Global()-Konstruktor
slug: WebAssembly/Reference/JavaScript_interface/Global/Global
l10n:
  sourceCommit: df9d06402163f77fc3e2d327ab63f9dd4af15b38
---

Ein **`WebAssembly.Global()`**-Konstruktor erstellt ein neues `Global`-Objekt, das eine Instanz einer globalen Variablen darstellt. Diese ist sowohl von JavaScript aus zugänglich als auch importierbar/exportierbar über eine oder mehrere [`WebAssembly.Module`](/de/docs/WebAssembly/Reference/JavaScript_interface/Module)-Instanzen. Dies ermöglicht die dynamische Verknüpfung mehrerer Module.

## Syntax

```js-nolint
new WebAssembly.Global(descriptor, value)
```

### Parameter

- `descriptor`

  - : Ein Objekt, das zwei Eigenschaften enthält:

    - `value`: Ein String, der den Datentyp der globalen Variablen darstellt. Dies kann einer der folgenden sein:
      - `i32`: Ein 32-Bit-Integer.
      - `i64`: Ein 64-Bit-Integer. (In JavaScript wird dies als {{jsxref("BigInt")}} dargestellt.)
      - `f32`: Eine 32-Bit-Gleitkommazahl.
      - `f64`: Eine 64-Bit-Gleitkommazahl.
      - `v128`: Ein 128-Bit-Vektor.
      - `externref`: Eine Host-Referenz.
      - `anyfunc`: Eine Funktionsreferenz.
    - `mutable`: Ein booleanischer Wert, der bestimmt, ob die globale Variable änderbar ist oder nicht. Standardmäßig ist dies `false`.

- `value`
  - : Der Wert, den die Variable enthält. Dieser kann beliebig sein, solange sein Typ dem Datentyp der Variablen entspricht. Wenn kein Wert angegeben ist, wird ein typisierter Wert von 0 verwendet, wenn der Wert von `descriptor.value` einer der folgenden ist: `i32`, `i64`, `f32` oder `f64`; und `null` wird verwendet, wenn `descriptor.value` `externref` oder `anyfunc` ist (wie im [`DefaultValue`-Algorithmus](https://webassembly.github.io/spec/js-api/#defaultvalue) festgelegt).

## Beispiele

### Erstellen einer neuen Global-Instanz

Das folgende Beispiel zeigt, wie eine neue globale Instanz mit dem `WebAssembly.Global()`-Konstruktor erstellt wird. Sie wird als veränderbarer `i32`-Typ definiert, mit einem Wert von 0.

Der Wert der globalen Variable wird dann zuerst auf `42` mit der `Global.value`-Eigenschaft und dann auf 43 mittels der `incGlobal()`-Funktion geändert, die aus dem `global.wasm`-Modul exportiert wird (dies addiert 1 zu jedem gegebenen Wert und gibt dann den neuen Wert zurück).

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

- [WebAssembly](/de/docs/WebAssembly) Übersichtsseite
- [WebAssembly-Konzepte](/de/docs/WebAssembly/Guides/Concepts)
- [Verwendung der WebAssembly JavaScript-API](/de/docs/WebAssembly/Guides/Using_the_JavaScript_API)
- [Import/Export-Proposal für veränderbare globale Variablen](https://github.com/WebAssembly/mutable-global/blob/master/proposals/mutable-global/Overview.md)
