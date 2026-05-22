---
title: "i32: Wasm-Datentyp"
short-title: i32
slug: WebAssembly/Reference/Value_types/i32
l10n:
  sourceCommit: 48b0dc43b7c13a2c9a5d2c56f110444d2550b90e
---

Der **`i32`**-Datentyp hält einen 32-Bit-Ganzzahlwert.

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

`i32`-Werte sind 32 Bit breit und sind nicht von Natur aus signiert oder unsigniert. Die Interpretation wird von jeder Anweisung bestimmt: [`i32.div_s`](/de/docs/WebAssembly/Reference/Numeric/div) beispielsweise behandelt seine Operanden als zweierkomplementäre Ganzzahlen, während `i32.div_u` sie als unsignierte Zahlen behandelt. Wo die Unterscheidung das Ergebnis nicht beeinflusst, wie bei der Addition, Subtraktion, Multiplikation und Bitoperationen, übernimmt eine einzige Anweisung beide Interpretationen.

`i32` ist der Standardadressentyp für Speicher- und Tabellenvorgänge. Adressen, Offsets und Größen, die an Anweisungen wie [`i32.load`](/de/docs/WebAssembly/Reference/Memory/load) und [`table.get`](/de/docs/WebAssembly/Reference/Table/get) übergeben werden, sind `i32`, es sei denn, ein Modul entscheidet sich für einen breiteren Adressentyp für den Speicher.

`i32` ist _transparent_: sein Bitmuster ist beobachtbar, und `i32`-Werte können im [linearen Speicher](/de/docs/WebAssembly/Reference/Memory) gespeichert werden.

### JavaScript-Grenze

An der JavaScript-Grenze werden `i32`-Werte als JavaScript-[`Number`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number)-Werte übergeben. Zahlen, die außerhalb des Bereichs von JavaScript liegen, werden modulo 2³² umschlossen.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`i64`](/de/docs/WebAssembly/Reference/Value_types/i64)
- [`f32`](/de/docs/WebAssembly/Reference/Value_types/f32), [`f64`](/de/docs/WebAssembly/Reference/Value_types/f64)
- [Numerische Anweisungen](/de/docs/WebAssembly/Reference/Numeric)
