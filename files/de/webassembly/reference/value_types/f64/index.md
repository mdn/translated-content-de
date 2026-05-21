---
title: "f64: Wasm-Typ"
short-title: f64
slug: WebAssembly/Reference/Value_types/f64
l10n:
  sourceCommit: ca1301872404bbc0305fa945cf3e3fb2351863bf
---

Der **`f64`** Wertetyp hält einen 64-Bit-Doppelpräzisions-Fließkommawert.

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

`f64`-Werte folgen dem [IEEE 754](https://en.wikipedia.org/wiki/IEEE_754) binary64 (Doppelpräzisions)-Format: ein Vorzeichenbit, elf Exponentenbits und zweiundfünfzig Signifikantenbits. Sie decken grob fünfzehn bis siebzehn Dezimalstellen über den Bereich ±1,8 × 10³⁰⁸ ab, sowie die speziellen Werte ±0, ±∞ und NaN.

Arithmetische Anweisungen ([`f64.add`](/de/docs/WebAssembly/Reference/Numeric/add), [`f64.mul`](/de/docs/WebAssembly/Reference/Numeric/mul) usw.) folgen den IEEE 754 Rundungsregeln „Runden zur nächsten geraden Zahl“. Das genaue Bitmuster eines durch Arithmetik erzeugten NaN ist nicht deterministisch, daher sollten Sie sich nicht darauf verlassen, dass spezifische NaN-Payloads über Implementierungen oder Architekturen hinweg gleich bleiben.

`f64` ist _transparent_: Sein Bitmuster ist beobachtbar und `f64`-Werte können im [linearen Speicher](/de/docs/WebAssembly/Reference/Memory) gespeichert werden. `f64.reinterpret_i64` und dessen Umkehrung ermöglichen es, Bits zwischen `f64` und `i64` ohne Konvertierung zu verschieben.

### JavaScript-Grenze

`f64` entspricht exakt der Darstellung von JavaScript [`Number`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number), sodass Werte die Grenze ohne Präzisionsverlust überschreiten (mit der einen Ausnahme, dass JavaScript nur einen einzigen NaN-Wert hat).

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`f32`](/de/docs/WebAssembly/Reference/Value_types/f32)
- [`i32`](/de/docs/WebAssembly/Reference/Value_types/i32), [`i64`](/de/docs/WebAssembly/Reference/Value_types/i64)
- [Numerische Anweisungen](/de/docs/WebAssembly/Reference/Numeric)
