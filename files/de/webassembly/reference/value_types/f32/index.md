---
title: "f32: Wasm-Typ"
short-title: f32
slug: WebAssembly/Reference/Value_types/f32
l10n:
  sourceCommit: ca1301872404bbc0305fa945cf3e3fb2351863bf
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

`f32`-Werte folgen dem [IEEE 754](https://en.wikipedia.org/wiki/IEEE_754) binary32 (Einzelpräzision) Format: ein Vorzeichenbit, acht Exponentenbits und dreiundzwanzig Signifikantenbits. Sie umfassen ungefähr sieben Dezimalstellen der Genauigkeit über den Bereich ±3,4 × 10³⁸, plus die Sonderwerte ±0, ±∞ und NaN.

Arithmetische Anweisungen ([`f32.add`](/de/docs/WebAssembly/Reference/Numeric/add), [`f32.mul`](/de/docs/WebAssembly/Reference/Numeric/mul) und so weiter) folgen dem Round-to-Nearest-Ties-to-Even-Semantik von IEEE 754. Das genaue Bitmuster eines durch Arithmetik erzeugten NaN ist nicht deterministisch, daher sollten Sie sich nicht darauf verlassen, dass spezifische NaN-Payloads zwischen Implementierungen oder Architekturen gleich sind.

`f32` ist _transparent_: Sein Bitmuster ist beobachtbar, und `f32`-Werte können im [linearer Speicher](/de/docs/WebAssembly/Reference/Memory) gespeichert werden. `f32.reinterpret_i32` und seine Umkehrung ermöglichen es Ihnen, Bits zwischen `f32` und `i32` ohne Umwandlung zu verschieben.

### JavaScript-Grenze

`f32`-Werte überqueren die JavaScript-Grenze als JavaScript-[`Number`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number)-Werte. Werte aus JavaScript werden auf den nächsten darstellbaren `f32` gerundet.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`f64`](/de/docs/WebAssembly/Reference/Value_types/f64)
- [`i32`](/de/docs/WebAssembly/Reference/Value_types/i32), [`i64`](/de/docs/WebAssembly/Reference/Value_types/i64)
- [Numerische Anweisungen](/de/docs/WebAssembly/Reference/Numeric)
