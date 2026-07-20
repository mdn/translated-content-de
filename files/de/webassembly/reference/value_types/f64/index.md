---
title: "f64: Wasm-Werttyp"
short-title: f64
slug: WebAssembly/Reference/Value_types/f64
l10n:
  sourceCommit: 187220197832f482878607080ae9e7c1edabe108
---

Der **`f64`**-Werttyp hält einen 64-Bit-Gleitkommawert mit doppelter Genauigkeit.

## Syntax

```wat
;; Function returning an f64 constant
(func (result f64)
  f64.const 3.141592653589793)

;; f64 parameter and local
(func (param $p f64) (local $tmp f64)
  ;; ...
)

;; Mutable f64 global
(global $ratio (mut f64) (f64.const 1.0))
```

## Beschreibung

`f64`-Werte folgen dem [IEEE 754](https://en.wikipedia.org/wiki/IEEE_754) binary64-Format (doppelte Genauigkeit): ein Vorzeichenbit, elf Exponentenbits und zweiundfünfzig Mantissenbits. Sie decken ungefähr fünfzehn bis siebzehn Dezimalstellen der Genauigkeit über den Bereich von ±1,8 × 10³⁰⁸ ab, plus die speziellen Werte ±0, ±∞ und NaN.

Arithmetische Anweisungen ([`f64.add`](/de/docs/WebAssembly/Reference/Numeric/add), [`f64.mul`](/de/docs/WebAssembly/Reference/Numeric/mul) usw.) folgen den IEEE 754 Rundung-auf-nächsten-Gerade-Werten-Semantik. Das genaue Bitmuster eines durch Arithmetik erzeugten NaN ist nicht deterministisch, daher sollte man sich nicht darauf verlassen, dass spezifische NaN-Nutzlasten zwischen Implementierungen oder Architekturen gleich sind.

`f64` ist _transparent_: sein Bitmuster ist beobachtbar, und `f64`-Werte können im [linearen Speicher](/de/docs/WebAssembly/Reference/Memory) gespeichert werden. `f64.reinterpret_i64` und sein Umkehrwert ermöglichen es Ihnen, Bits zwischen `f64` und `i64` ohne Konvertierung zu verschieben.

### JavaScript-Grenze

`f64` stimmt genau mit der Darstellung des JavaScript-[`Number`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number) überein, sodass Werte die Grenze ohne Präzisionsverlust überschreiten (mit der einen Ausnahme, dass JavaScript nur einen singulären NaN-Wert hat).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`f32`](/de/docs/WebAssembly/Reference/Value_types/f32)
- [`i32`](/de/docs/WebAssembly/Reference/Value_types/i32), [`i64`](/de/docs/WebAssembly/Reference/Value_types/i64)
- [Numerische Anweisungen](/de/docs/WebAssembly/Reference/Numeric)
