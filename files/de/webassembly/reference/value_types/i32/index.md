---
title: "i32: Wasm-Typ"
short-title: i32
slug: WebAssembly/Reference/Value_types/i32
l10n:
  sourceCommit: ca1301872404bbc0305fa945cf3e3fb2351863bf
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

`i32`-Werte sind 32 Bits breit und sind nicht von Natur aus vorzeichenbehaftet oder vorzeichenlos. Die Interpretation wird von jeder Anweisung gewählt: [`i32.div_s`](/de/docs/WebAssembly/Reference/Numeric/div) behandelt beispielsweise seine Operanden als Zweierkomplement vorzeichenbehafteter Integer, während `i32.div_u` sie als vorzeichenlos behandelt. Wo die Unterscheidung das Ergebnis nicht beeinflusst, wie bei Addition, Subtraktion, Multiplikation und bitweisen Operationen, behandelt eine einzelne Anweisung beide Interpretationen.

`i32` ist der Standardadressentyp für Speicher- und Tabellenvorgänge. Adressen, Offsets und Größen, die an Anweisungen wie [`i32.load`](/de/docs/WebAssembly/Reference/Memory/load) und [`table.get`](/de/docs/WebAssembly/Reference/Table/get) übergeben werden, sind `i32`, es sei denn, ein Modul entscheidet sich für einen breiteren Adressentyp für den Speicher.

`i32` ist _transparent_: sein Bitmuster ist beobachtbar, und `i32`-Werte können im [linearen Speicher](/de/docs/WebAssembly/Reference/Memory) gespeichert werden.

### JavaScript-Grenze

An der JavaScript-Grenze werden `i32`-Werte als JavaScript-[`Number`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number)-Werte übergeben. JavaScript-Zahlen außerhalb des Bereichs wickeln sich modulo 2³².

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`i64`](/de/docs/WebAssembly/Reference/Value_types/i64)
- [`f32`](/de/docs/WebAssembly/Reference/Value_types/f32), [`f64`](/de/docs/WebAssembly/Reference/Value_types/f64)
- [Numerische Anweisungen](/de/docs/WebAssembly/Reference/Numeric)
