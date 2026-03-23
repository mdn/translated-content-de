---
title: WebAssembly SIMD-Konvertierungsanweisungen
short-title: Conversion instructions
slug: WebAssembly/Reference/SIMD/conversion
l10n:
  sourceCommit: 54f08abfc534ac02e9f56a65080cd839fd126b2d
---

WebAssembly SIMD-Konvertierungsanweisungen.

## Zwischen Typen konvertieren

- [`convert_low_i32x4_s`](/de/docs/WebAssembly/Reference/SIMD/conversion/convert_low_i32x4_s)
  - : Konvertiert die Bahnen einer [`v128`](/de/docs/WebAssembly/Reference/Types/v128) `f64x2` Wertinterpretation in eine signierte `i32x4` Wertinterpretation.
- [`convert_low_i32x4_u`](/de/docs/WebAssembly/Reference/SIMD/conversion/convert_low_i32x4_u)
  - : Konvertiert die Bahnen einer `v128` `f64x2` Wertinterpretation in eine unsignierte `i32x4` Wertinterpretation.
- [`convert_i32x4_s`](/de/docs/WebAssembly/Reference/SIMD/conversion/convert_i32x4_s)
  - : Konvertiert die Bahnen einer `v128` `f32x4` Wertinterpretation in eine signierte `i32x4` Wertinterpretation.
- [`convert_i32x4_u`](/de/docs/WebAssembly/Reference/SIMD/conversion/convert_i32x4_u)
  - : Konvertiert die Bahnen einer `v128` `f32x4` Wertinterpretation in eine unsignierte `i32x4` Wertinterpretation.
- [`demote_f64x2_zero`](/de/docs/WebAssembly/Reference/SIMD/conversion/demote_f64x2_zero)
  - : Konvertiert die Bahnen einer `v128` `f64x2` Wertinterpretation in eine `f32x4` Wertinterpretation. Die beiden höheren Bahnen des Ergebnisses werden auf null gesetzt.
- [`promote_low_f32x4`](/de/docs/WebAssembly/Reference/SIMD/conversion/promote_low_f32x4)
  - : Konvertiert die ersten beiden Bahnen einer `v128` `f32x4` Wertinterpretation in eine `f64x2` Wertinterpretation.

## Wert ersetzen

- [`replace_lane`](/de/docs/WebAssembly/Reference/SIMD/conversion/replace_lane)
  - : Ersetzt die angegebene Bahn einer `v128` Wertinterpretation mit einem neuen Wert und gibt die resultierende `v128` Wertinterpretation zurück.
- [`shuffle`](/de/docs/WebAssembly/Reference/SIMD/conversion/shuffle)
  - : Gibt eine neue `v128` Wertinterpretation zurück, deren Bahnwerte aus zwei Eingabe-`v128`-Werten ausgewählt werden, bestimmt durch bereitgestellte Indexwerte.
- [`splat`](/de/docs/WebAssembly/Reference/SIMD/conversion/splat)
  - : Kopiert denselben Wert in alle Bahnen einer `v128` Wertinterpretation.
- [`swizzle`](/de/docs/WebAssembly/Reference/SIMD/conversion/swizzle)
  - : Gibt eine neue `v128` Wertinterpretation zurück, deren Bahnwerte aus einem Eingabe-`v128`-Wert ausgewählt werden, bestimmt durch Indizes, die in einem zweiten Eingabe-`v128`-Wert bereitgestellt werden.

## Werte runden

- [`ceil`](/de/docs/WebAssembly/Reference/SIMD/conversion/ceil)
  - : Rundet den Wert in jeder Bahn einer `v128` Wertinterpretation auf die nächste ganze Zahl oben ab.
- [`floor`](/de/docs/WebAssembly/Reference/SIMD/conversion/floor)
  - : Rundet den Wert in jeder Bahn einer `v128` Wertinterpretation auf die nächste ganze Zahl unten ab.
- [`trunc`](/de/docs/WebAssembly/Reference/SIMD/conversion/trunc)
  - : Rundet den Wert in jeder Bahn einer `v128` Wertinterpretation auf die nächste ganze Zahl in Richtung null ab.
- [`trunc_sat_f32x4_s`](/de/docs/WebAssembly/Reference/SIMD/conversion/trunc_sat_f32x4_s)
  - : Führt eine sättigende Konvertierung der Bahnen einer `v128` `f32x4` Wertinterpretation in eine signierte `i32x4` Wertinterpretation durch.
- [`trunc_sat_f32x4_u`](/de/docs/WebAssembly/Reference/SIMD/conversion/trunc_sat_f32x4_u)
  - : Führt eine sättigende Konvertierung der Bahnen einer `v128` `f32x4` Wertinterpretation in eine unsignierte `i32x4` Wertinterpretation durch.
- [`trunc_sat_f64x2_s_zero`](/de/docs/WebAssembly/Reference/SIMD/conversion/trunc_sat_f64x2_s_zero)
  - : Führt eine sättigende Konvertierung der Bahnen einer `v128` `f64x2` Wertinterpretation in eine signierte `i32x4` Wertinterpretation durch. Die beiden höheren Bahnen des Ergebnisses werden auf null gesetzt.
- [`trunc_sat_f64x2_u_zero`](/de/docs/WebAssembly/Reference/SIMD/conversion/trunc_sat_f64x2_u_zero)
  - : Führt eine sättigende Konvertierung der Bahnen einer `v128` `f64x2` Wertinterpretation in eine unsignierte `i32x4` Wertinterpretation durch. Die beiden höheren Bahnen des Ergebnisses werden auf null gesetzt.
