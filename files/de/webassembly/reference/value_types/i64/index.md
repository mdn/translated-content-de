---
title: "i64: Wasm-Typ"
short-title: i64
slug: WebAssembly/Reference/Value_types/i64
l10n:
  sourceCommit: ca1301872404bbc0305fa945cf3e3fb2351863bf
---

Der **`i64`**-Wertetyp hält einen 64-Bit-Integer.

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

`i64`-Werte sind 64 Bit breit und sind nicht von Natur aus vorzeichenbehaftet oder vorzeichenlos. Jede Anweisung wählt ihre Interpretation: Vorzeichenbehaftete Varianten wie `i64.div_s` behandeln Operanden als Zweierkomplement, während vorzeichenlose Varianten wie `i64.div_u` dies nicht tun. Operationen, deren Ergebnis nicht von Vorzeichenhaftigkeit beeinflusst wird, wie Addition, Subtraktion, Multiplikation und bitweise Operationen, haben eine einzige Anweisung.

`i64` ist _transparent_: sein Bitmuster ist sichtbar, und `i64`-Werte können im [linearen Speicher](/de/docs/WebAssembly/Reference/Memory) gespeichert werden.

### JavaScript-Grenze

Der `Number`-Typ in JavaScript kann den gesamten `i64`-Bereich nicht verlustfrei darstellen, daher überschreiten `i64`-Werte die JavaScript-Grenze als [`BigInt`](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt). Außerhalb des Bereichs liegende BigInts werden modulo 2⁶⁴ umgeschlagen. Das Übergeben einer einfachen `Number`, wo ein `i64` erwartet wird, führt zu einem `TypeError`.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`i32`](/de/docs/WebAssembly/Reference/Value_types/i32)
- [`f32`](/de/docs/WebAssembly/Reference/Value_types/f32), [`f64`](/de/docs/WebAssembly/Reference/Value_types/f64)
- [Numerische Anweisungen](/de/docs/WebAssembly/Reference/Numeric)
