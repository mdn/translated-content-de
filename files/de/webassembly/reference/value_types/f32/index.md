---
title: "f32: Wasm-Datentyp"
short-title: f32
slug: WebAssembly/Reference/Value_types/f32
l10n:
  sourceCommit: 48b0dc43b7c13a2c9a5d2c56f110444d2550b90e
---

Der **`f32`**-Datentyp hält einen 32-Bit Gleitkommawert mit einfacher Genauigkeit.

## Syntax

```wat
;; Function returning an f32 constant
(func (result f32)
  f32.const 3.14)

;; f32 parameter and local
(func (param $p f32) (local $tmp f32)
  ;; ...
)

;; Mutable f32 global
(global $ratio (mut f32) (f32.const 1.0))
```

## Beschreibung

`f32`-Werte folgen dem [IEEE 754](https://en.wikipedia.org/wiki/IEEE_754) binary32 (Einzelpräzisions)-Format: ein Vorzeichenbit, acht Exponentenbits und dreiundzwanzig Mantissenbits. Sie decken ungefähr sieben Dezimalstellen Genauigkeit über den Bereich ±3,4 × 10³⁸ ab, plus die speziellen Werte ±0, ±∞ und NaN.

Arithmetische Anweisungen ([`f32.add`](/de/docs/WebAssembly/Reference/Numeric/add), [`f32.mul`](/de/docs/WebAssembly/Reference/Numeric/mul), und so weiter) folgen der IEEE 754 Rundung-zu-Nächstem-Werte-Tie-Break-semantik. Das genaue Bitmuster eines durch Arithmetik erzeugten NaN ist nicht deterministisch, daher sollten Sie sich nicht darauf verlassen, dass bestimmte NaN-Payloads zwischen Implementierungen oder Architekturen gleich sind.

`f32` ist _transparent_: sein Bitmuster ist beobachtbar, und `f32`-Werte können im [linearen Speicher](/de/docs/WebAssembly/Reference/Memory) gespeichert werden. `f32.reinterpret_i32` und sein Inverses ermöglichen es, Bits zwischen `f32` und `i32` zu bewegen, ohne Konvertierung.

### JavaScript-Grenze

`f32`-Werte überschreiten die JavaScript-Grenze als JavaScript-[`Number`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number)-Werte. Werte aus JavaScript werden auf den nächsten darstellbaren `f32` gerundet.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`f64`](/de/docs/WebAssembly/Reference/Value_types/f64)
- [`i32`](/de/docs/WebAssembly/Reference/Value_types/i32), [`i64`](/de/docs/WebAssembly/Reference/Value_types/i64)
- [Numerische Anweisungen](/de/docs/WebAssembly/Reference/Numeric)
