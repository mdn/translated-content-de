---
title: "i64: Wasm-Werttyp"
short-title: i64
slug: WebAssembly/Reference/Value_types/i64
l10n:
  sourceCommit: b9ea307536ef3c128102bdd5d090b57bfca93143
---

Der **`i64`**-Werttyp enthält einen 64-Bit-Integer.

## Syntax

```wat
;; Function returning an i64 constant
(func (result i64)
  i64.const 9000000000
)

;; i64 parameter and local
(func (param $p i64) (local $tmp i64)
  ;; ...
)

;; Mutable i64 global
(global $count (mut i64) (i64.const 0))
```

## Beschreibung

`i64`-Werte sind 64 Bit breit und weder von Natur aus signiert noch unsigniert. Jede Anweisung bestimmt ihre Interpretation: Signierte Varianten wie `i64.div_s` behandeln Operanden als Zweierkomplement, während unsignierte Varianten wie `i64.div_u` dies nicht tun. Operationen, deren Ergebnis von der Signierung unbeeinflusst ist, wie Addition, Subtraktion, Multiplikation und bitweise Operationen, haben eine einzige Anweisung.

`i64` ist _transparent_: Das Bitmuster ist beobachtbar, und `i64`-Werte können im [linearen Speicher](/de/docs/WebAssembly/Reference/Memory) gespeichert werden.

### `i64`-Integration mit JavaScript BigInt

Der JavaScript-`Number`-Typ kann den gesamten `i64`-Bereich nicht verlustfrei darstellen, daher werden `i64`-Werte in [`BigInt`](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt)-Werte umgewandelt (und umgekehrt), wenn sie die JavaScript-Grenze überschreiten; zum Beispiel beim Export oder Import von Funktionen mit `i64`-Parametern oder Rückgabewerten.

Beim Export einer Wasm-Funktion mit der Signatur: `[i64] -> [i64]` muss der Parameter als `BigInt`-Wert ausgedrückt werden:

```js
const result = wasmInstance.exports.myFunc(42n);
console.log(result); // also a BigInt
```

Ein `i64`-Rückgabewert wird in JavaScript automatisch zu einem `BigInt`.

Wenn von JavaScript zu Wasm gewechselt wird, wird ein als `i64`-Argument übergebener `BigInt` auf 64 Bit gekürzt und modulo 2⁶⁴ gewickelt. Das Übergeben einer einfachen `Number`, wo ein `i64` erwartet wird, führt zu einem `TypeError`.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`i32`](/de/docs/WebAssembly/Reference/Value_types/i32)
- [`f32`](/de/docs/WebAssembly/Reference/Value_types/f32), [`f64`](/de/docs/WebAssembly/Reference/Value_types/f64)
- [Numerische Anweisungen](/de/docs/WebAssembly/Reference/Numeric)
