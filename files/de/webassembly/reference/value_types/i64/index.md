---
title: "i64: Wasm-Werttyp"
short-title: i64
slug: WebAssembly/Reference/Value_types/i64
l10n:
  sourceCommit: add2e734fb5804f451b32bafe631bcc69e71cd48
---

Der **`i64`**-Werttyp speichert eine 64-Bit ganze Zahl.

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

`i64`-Werte sind 64 Bit breit und weder von Natur aus signiert noch unsigniert. Jede Anweisung wählt ihre Interpretation: Signierte Varianten wie `i64.div_s` behandeln Operanden als Zweierkomplement, während unsignierte Varianten wie `i64.div_u` dies nicht tun. Operationen, deren Ergebnis durch das Vorzeichen nicht beeinflusst wird, wie Addition, Subtraktion, Multiplikation und Bitoperationen, haben eine einzige Anweisung.

`i64` ist _transparent_: Sein Bitmuster ist beobachtbar, und `i64`-Werte können im [linearen Speicher](/de/docs/WebAssembly/Reference/Memory) gespeichert werden.

### `i64`-Integration mit JavaScript BigInt

Der `Number`-Typ von JavaScript kann den gesamten Bereich von `i64` nicht verlustfrei darstellen, daher werden `i64`-Werte bei der Überschreitung der JavaScript-Grenze in [`BigInt`](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt)-Werte (und umgekehrt) umgewandelt; zum Beispiel beim Exportieren oder Importieren von Funktionen, die `i64`-Parameter oder Rückgabewerte beinhalten.

Beim Exportieren einer Wasm-Funktion mit der Signatur: `[i64] -> [i64]` muss der Parameter als `BigInt`-Wert ausgedrückt werden:

```js
const result = wasmInstance.exports.myFunc(42n);
console.log(result); // also a BigInt
```

Ein `i64`-Rückgabewert wird in JavaScript automatisch zu einem `BigInt`.

Beim Übergang von JavaScript zu Wasm wird ein als `i64`-Argument übergebener `BigInt` auf 64 Bit gekürzt, modul 2⁶⁴ "umwickelt". Das Übergeben einer normalen `Number`, wo ein `i64` erwartet wird, führt zu einem `TypeError`.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`i32`](/de/docs/WebAssembly/Reference/Value_types/i32)
- [`f32`](/de/docs/WebAssembly/Reference/Value_types/f32), [`f64`](/de/docs/WebAssembly/Reference/Value_types/f64)
- [Numerische Anweisungen](/de/docs/WebAssembly/Reference/Numeric)
