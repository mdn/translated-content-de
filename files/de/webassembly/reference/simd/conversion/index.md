---
title: WebAssembly SIMD Konvertierungsanweisungen
short-title: Conversion instructions
slug: WebAssembly/Reference/SIMD/conversion
l10n:
  sourceCommit: 9851fc885f1bbc916f529378b506471c150fae98
---

WebAssembly SIMD Konvertierungsanweisungen.

## Konvertierung zwischen Typen

- [`convert_low_i32x4_s`](/de/docs/WebAssembly/Reference/SIMD/conversion/convert_low_i32x4_s)
  - : Konvertiert die Lanes einer [`v128`](/de/docs/WebAssembly/Reference/Types/v128) `f64x2` Wertinterpretation in eine vorzeichenbehaftete `i32x4` Wertinterpretation.
- [`convert_low_i32x4_u`](/de/docs/WebAssembly/Reference/SIMD/conversion/convert_low_i32x4_u)
  - : Konvertiert die Lanes einer `v128` `f64x2` Wertinterpretation in eine vorzeichenlose `i32x4` Wertinterpretation.
- [`convert_i32x4_s`](/de/docs/WebAssembly/Reference/SIMD/conversion/convert_i32x4_s)
  - : Konvertiert die Lanes einer `v128` `f32x4` Wertinterpretation in eine vorzeichenbehaftete `i32x4` Wertinterpretation.
- [`convert_i32x4_u`](/de/docs/WebAssembly/Reference/SIMD/conversion/convert_i32x4_u)
  - : Konvertiert die Lanes einer `v128` `f32x4` Wertinterpretation in eine vorzeichenlose `i32x4` Wertinterpretation.
- [`demote_f64x2_zero`](/de/docs/WebAssembly/Reference/SIMD/conversion/demote_f64x2_zero)
  - : Konvertiert die Lanes einer `v128` `f64x2` Wertinterpretation in eine `f32x4` Wertinterpretation. Die beiden höheren Lanes des Ergebnisses werden auf Null gesetzt.
- [`promote_low_f32x4`](/de/docs/WebAssembly/Reference/SIMD/conversion/promote_low_f32x4)
  - : Konvertiert die ersten zwei Lanes einer `v128` `f32x4` Wertinterpretation in eine `f64x2` Wertinterpretation.

## Wert ersetzen

- [`replace_lane`](/de/docs/WebAssembly/Reference/SIMD/conversion/replace_lane)
  - : Ersetzt die angegebene Lane einer `v128` Wertinterpretation mit einem neuen Wert und gibt die resultierende `v128` Wertinterpretation zurück.
- [`shuffle`](/de/docs/WebAssembly/Reference/SIMD/conversion/shuffle)
  - : Gibt eine neue `v128` Wertinterpretation zurück, deren Lane-Werte aus zwei Eingabe-`v128`-Werten ausgewählt werden, bestimmt durch die angegebenen Indexwerte.
- [`splat`](/de/docs/WebAssembly/Reference/SIMD/conversion/splat)
  - : Kopiert denselben Wert in alle Lanes einer `v128` Wertinterpretation.
- [`swizzle`](/de/docs/WebAssembly/Reference/SIMD/conversion/swizzle)
  - : Gibt eine neue `v128` Wertinterpretation zurück, deren Lane-Werte aus einem Eingabe-`v128`-Wert ausgewählt werden, bestimmt durch Indizes, die in einem zweiten Eingabe-`v128` bereitgestellt werden.

## SIMD-spezifische Trunkierungsanweisungen

- [`trunc_sat_f32x4_s`](/de/docs/WebAssembly/Reference/SIMD/conversion/trunc_sat_f32x4_s)
  - : Führt eine sättigende Konvertierung der Lanes einer `v128` `f32x4` Wertinterpretation in eine vorzeichenbehaftete `i32x4` Wertinterpretation durch.
- [`trunc_sat_f32x4_u`](/de/docs/WebAssembly/Reference/SIMD/conversion/trunc_sat_f32x4_u)
  - : Führt eine sättigende Konvertierung der Lanes einer `v128` `f32x4` Wertinterpretation in eine vorzeichenlose `i32x4` Wertinterpretation durch.
- [`trunc_sat_f64x2_s_zero`](/de/docs/WebAssembly/Reference/SIMD/conversion/trunc_sat_f64x2_s_zero)
  - : Führt eine sättigende Konvertierung der Lanes einer `v128` `f64x2` Wertinterpretation in eine vorzeichenbehaftete `i32x4` Wertinterpretation durch. Die beiden höheren Lanes des Ergebnisses werden auf Null gesetzt.
- [`trunc_sat_f64x2_u_zero`](/de/docs/WebAssembly/Reference/SIMD/conversion/trunc_sat_f64x2_u_zero)
  - : Führt eine sättigende Konvertierung der Lanes einer `v128` `f64x2` Wertinterpretation in eine vorzeichenlose `i32x4` Wertinterpretation durch. Die beiden höheren Lanes des Ergebnisses werden auf Null gesetzt.

> [!NOTE]
> Siehe auch die nicht-SIMD-spezifische [`trunc`](/de/docs/WebAssembly/Reference/Numeric/trunc) Anweisung.
