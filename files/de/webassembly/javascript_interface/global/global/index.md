---
title: WebAssembly.Global() Konstruktor
slug: WebAssembly/JavaScript_interface/Global/Global
l10n:
  sourceCommit: 0865cb85617d68725d2e11d4ea8eb48c099c7fb3
---

{{WebAssemblySidebar}}

Ein **`WebAssembly.Global()`** Konstruktor erstellt ein neues `Global`-Objekt, das eine globale Variable darstellt, die sowohl von JavaScript aus zugänglich als auch über ein oder mehrere [`WebAssembly.Module`](/de/docs/WebAssembly/JavaScript_interface/Module) Instanzen importierbar/exportierbar ist.
Dies ermöglicht die dynamische Verknüpfung mehrerer Module.

## Syntax

```js-nolint
new WebAssembly.Global(descriptor, value)
```

### Parameter

- `descriptor`

  - : Ein Objekt, das zwei Eigenschaften enthält:

    - `value`: Ein String, der den
      Datentyp der globalen Variable darstellt. Dies kann einer der folgenden sein:
      - `i32`: Ein 32-Bit-Integer.
      - `i64`: Ein 64-Bit-Integer. (In JavaScript wird dies als {{jsxref("BigInt")}} dargestellt)
      - `f32`: Eine 32-Bit-Gleitkommazahl.
      - `f64`: Eine 64-Bit-Gleitkommazahl.
      - `v128`: Ein 128-Bit-Vektor.
      - `externref`: Ein Host-Referenz.
      - `anyfunc`: Ein Funktionsreferenz.
    - `mutable`: Ein boolescher Wert, der bestimmt, ob die globale Variable
      veränderlich ist oder nicht. Standardmäßig ist dies `false`.

- `value`
  - : Der Wert, den die Variable enthält. Dies kann jeder Wert sein, solange er zum Datentyp der Variable passt.
    Wenn kein Wert angegeben ist, wird ein typisierter 0-Wert verwendet, wenn der Wert von `descriptor.value` einer der `i32`, `i64`, `f32` oder `f64` ist, und `null` wird verwendet, wenn `descriptor.value` `externref` oder `anyfunc` ist (wie im [`DefaultValue` Algorithmus](https://webassembly.github.io/spec/js-api/#defaultvalue) angegeben).

## Beispiele

### Erstellen einer neuen Global-Instanz

Das folgende Beispiel zeigt das Erstellen einer neuen globalen Instanz mit dem `WebAssembly.Global()` Konstruktor.
Es wird als veränderlicher `i32`-Typ mit einem Wert von 0 definiert.

Der Wert der globalen Variable wird dann geändert, zuerst auf `42` mit der `Global.value` Eigenschaft und dann auf 43 mit der `incGlobal()` Funktion, die aus dem `global.wasm`-Modul exportiert wird (diese fügt dem gegebenen Wert 1 hinzu und gibt dann den neuen Wert zurück).

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

- [WebAssembly](/de/docs/WebAssembly) Übersichtsseite
- [WebAssembly-Konzepte](/de/docs/WebAssembly/Concepts)
- [Verwendung der WebAssembly JavaScript-API](/de/docs/WebAssembly/Using_the_JavaScript_API)
- [Import/Export veränderlicher globaler Variablen Vorschlag](https://github.com/WebAssembly/mutable-global/blob/master/proposals/mutable-global/Overview.md)
