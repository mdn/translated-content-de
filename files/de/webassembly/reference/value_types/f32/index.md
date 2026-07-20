---
title: "f32: Wasm-Werttyp"
short-title: f32
slug: WebAssembly/Reference/Value_types/f32
l10n:
  sourceCommit: 187220197832f482878607080ae9e7c1edabe108
---

Der **`f32`**-Werttyp hält einen 32-Bit-Gleitkommawert mit einfacher Genauigkeit.

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

`f32`-Werte folgen dem [IEEE 754](https://en.wikipedia.org/wiki/IEEE_754)-Format binary32 (Einfachpräzision): ein Vorzeichenbit, acht Exponentenbits und dreiundzwanzig Mantissenbits. Sie umfassen ungefähr sieben Dezimalstellen Genauigkeit über den Bereich ±3,4 × 10³⁸, plus die speziellen Werte ±0, ±∞ und NaN.

Arithmetische Anweisungen ([`f32.add`](/de/docs/WebAssembly/Reference/Numeric/add), [`f32.mul`](/de/docs/WebAssembly/Reference/Numeric/mul) und so weiter) folgen den IEEE 754 Rundungsregeln auf das nächste Doppelte, Binden an gerade. Das genaue Bitmuster eines durch Arithmetik erzeugten NaN ist nicht deterministisch; daher sollte man sich nicht darauf verlassen, dass spezifische NaN-Payloads über Implementierungen oder Architekturen hinweg gleich sind.

`f32` ist _transparent_: sein Bitmuster ist beobachtbar und `f32`-Werte können im [linearen Speicher](/de/docs/WebAssembly/Reference/Memory) gespeichert werden. `f32.reinterpret_i32` und ihr Umkehrschluss erlauben es, Bits zwischen `f32` und `i32` ohne Konvertierung zu verschieben.

### JavaScript-Grenze

`f32`-Werte überschreiten die JavaScript-Grenze als JavaScript-[`Number`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number)-Werte. Werte aus JavaScript werden auf die nächste darstellbare `f32`-Zahl gerundet.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`f64`](/de/docs/WebAssembly/Reference/Value_types/f64)
- [`i32`](/de/docs/WebAssembly/Reference/Value_types/i32), [`i64`](/de/docs/WebAssembly/Reference/Value_types/i64)
- [Numerische Anweisungen](/de/docs/WebAssembly/Reference/Numeric)
