---
title: "i32: Wasm Werttyp"
short-title: i32
slug: WebAssembly/Reference/Value_types/i32
l10n:
  sourceCommit: 187220197832f482878607080ae9e7c1edabe108
---

Der **`i32`** Werttyp hält einen 32-Bit-Integer.

## Syntax

```wat
;; Function returning an i32 constant
(func (result i32)
  i32.const 42
)

;; i32 parameter and local
(func (param $p i32) (local $tmp i32)
  ;; ...
)

;; Mutable i32 global
(global $count (mut i32) (i32.const 0))
```

## Beschreibung

`i32`-Werte sind 32 Bit breit und nicht von Natur aus unterzeichnet oder nicht unterzeichnet. Die Interpretation wird von jeder Anweisung gewählt: [`i32.div_s`](/de/docs/WebAssembly/Reference/Numeric/div) behandelt beispielsweise seine Operanden als Zweierkomplement-Ganzzahlen, während `i32.div_u` sie als nicht unterzeichnet behandelt. Wo die Unterscheidung das Ergebnis nicht beeinflusst, wie bei Addition, Subtraktion, Multiplikation und Bitoperationen, verarbeitet eine einzige Anweisung beide Interpretationen.

`i32` ist der Standardadressentyp für Speicher- und Tabellenoperationen. Adressen, Offsets und Größen, die an Anweisungen wie [`i32.load`](/de/docs/WebAssembly/Reference/Memory/load) und [`table.get`](/de/docs/WebAssembly/Reference/Table/get) übergeben werden, sind `i32`, es sei denn, ein Modul entscheidet sich für einen breiteren Adresstyp für den Speicher.

`i32` ist _transparent_: Sein Bitmuster ist beobachtbar, und `i32`-Werte können im [linearen Speicher](/de/docs/WebAssembly/Reference/Memory) gespeichert werden.

### JavaScript-Schnittstelle

An der JavaScript-Grenze werden `i32`-Werte als JavaScript [`Number`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number) Werte übergeben. JavaScript-Zahlen außerhalb des Bereichs werden modulo 2³² gewickelt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`i64`](/de/docs/WebAssembly/Reference/Value_types/i64)
- [`f32`](/de/docs/WebAssembly/Reference/Value_types/f32), [`f64`](/de/docs/WebAssembly/Reference/Value_types/f64)
- [Numerische Anweisungen](/de/docs/WebAssembly/Reference/Numeric)
