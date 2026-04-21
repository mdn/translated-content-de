---
title: WebAssembly SIMD-Konvertierungsanweisungen
short-title: Conversion instructions
slug: WebAssembly/Reference/SIMD/conversion
l10n:
  sourceCommit: 76b3f4216320b4ecdbc8b95028dc46aa67e1468e
---

WebAssembly SIMD-Konvertierungsanweisungen.

## Konvertieren zwischen Typen

- [`convert_low_i32x4_s`](/de/docs/WebAssembly/Reference/SIMD/conversion/convert_low_i32x4_s)
  - : Konvertiert die Lanes einer [`v128`](/de/docs/WebAssembly/Reference/Types/v128) `f64x2`-Wertinterpretation in eine signierte `i32x4`-Wertinterpretation.
- [`convert_low_i32x4_u`](/de/docs/WebAssembly/Reference/SIMD/conversion/convert_low_i32x4_u)
  - : Konvertiert die Lanes einer `v128` `f64x2`-Wertinterpretation in eine unsignierte `i32x4`-Wertinterpretation.
- [`convert_i32x4_s`](/de/docs/WebAssembly/Reference/SIMD/conversion/convert_i32x4_s)
  - : Konvertiert die Lanes einer `v128` `f32x4`-Wertinterpretation in eine signierte `i32x4`-Wertinterpretation.
- [`convert_i32x4_u`](/de/docs/WebAssembly/Reference/SIMD/conversion/convert_i32x4_u)
  - : Konvertiert die Lanes einer `v128` `f32x4`-Wertinterpretation in eine unsignierte `i32x4`-Wertinterpretation.
- [`demote_f64x2_zero`](/de/docs/WebAssembly/Reference/SIMD/conversion/demote_f64x2_zero)
  - : Konvertiert die Lanes einer `v128` `f64x2`-Wertinterpretation in eine `f32x4`-Wertinterpretation. Die zwei höheren Lanes des Ergebnisses werden auf null gesetzt.
- [`promote_low_f32x4`](/de/docs/WebAssembly/Reference/SIMD/conversion/promote_low_f32x4)
  - : Konvertiert die ersten zwei Lanes einer `v128` `f32x4`-Wertinterpretation in eine `f64x2`-Wertinterpretation.

## Konvertieren von schmaleren zu breiteren Typen

- [`extend_high_i8x16_s`](/de/docs/WebAssembly/Reference/SIMD/conversion/extend_high_i8x16_s)
  - : Konvertiert die Lanes 8–15 einer signierten `v128` `i8x16`-Wertinterpretation in eine `i16x8`-Wertinterpretation.
- [`extend_high_i8x16_u`](/de/docs/WebAssembly/Reference/SIMD/conversion/extend_high_i8x16_u)
  - : Konvertiert die Lanes 8–15 einer unsignierten `v128` `i8x16`-Wertinterpretation in eine `i16x8`-Wertinterpretation.
- [`extend_high_i16x8_s`](/de/docs/WebAssembly/Reference/SIMD/conversion/extend_high_i16x8_s)
  - : Konvertiert die Lanes 4–7 einer signierten `v128` `i16x8`-Wertinterpretation in eine `i32x4`-Wertinterpretation.
- [`extend_high_i16x8_u`](/de/docs/WebAssembly/Reference/SIMD/conversion/extend_high_i16x8_u)
  - : Konvertiert die Lanes 4–7 einer unsignierten `v128` `i16x8`-Wertinterpretation in eine `i32x4`-Wertinterpretation.
- [`extend_high_i32x4_s`](/de/docs/WebAssembly/Reference/SIMD/conversion/extend_high_i32x4_s)
  - : Konvertiert die Lanes 2–3 einer signierten `v128` `i32x4`-Wertinterpretation in eine `i64x2`-Wertinterpretation.
- [`extend_high_i32x4_u`](/de/docs/WebAssembly/Reference/SIMD/conversion/extend_high_i32x4_u)
  - : Konvertiert die Lanes 2–3 einer unsignierten `v128` `i32x4`-Wertinterpretation in eine `i64x2`-Wertinterpretation.
- [`extend_low_i8x16_s`](/de/docs/WebAssembly/Reference/SIMD/conversion/extend_low_i8x16_s)
  - : Konvertiert die Lanes 0–7 einer signierten `v128` `i8x16`-Wertinterpretation in eine `i16x8`-Wertinterpretation.
- [`extend_low_i8x16_u`](/de/docs/WebAssembly/Reference/SIMD/conversion/extend_low_i8x16_u)
  - : Konvertiert die Lanes 0–7 einer unsignierten `v128` `i8x16`-Wertinterpretation in eine `i16x8`-Wertinterpretation.
- [`extend_low_i16x8_s`](/de/docs/WebAssembly/Reference/SIMD/conversion/extend_low_i16x8_s)
  - : Konvertiert die Lanes 0–3 einer signierten `v128` `i16x8`-Wertinterpretation in eine `i32x4`-Wertinterpretation.
- [`extend_low_i16x8_u`](/de/docs/WebAssembly/Reference/SIMD/conversion/extend_low_i16x8_u)
  - : Konvertiert die Lanes 0–3 einer unsignierten `v128` `i16x8`-Wertinterpretation in eine `i32x4`-Wertinterpretation.
- [`extend_low_i32x4_s`](/de/docs/WebAssembly/Reference/SIMD/conversion/extend_low_i32x4_s)
  - : Konvertiert die Lanes 0–1 einer signierten `v128` `i32x4`-Wertinterpretation in eine `i64x2`-Wertinterpretation.
- [`extend_low_i32x4_u`](/de/docs/WebAssembly/Reference/SIMD/conversion/extend_low_i32x4_u)
  - : Konvertiert die Lanes 0–1 einer unsignierten `v128` `i32x4`-Wertinterpretation in eine `i64x2`-Wertinterpretation.

## Konvertieren von breiteren zu schmaleren Typen

- [`narrow_i16x8_s`](/de/docs/WebAssembly/Reference/SIMD/conversion/narrow_i16x8_s)
  - : Konvertiert zwei signierte `v128` `i16x8`-Wertinterpretationen in eine `i8x16`-Wertinterpretation.
- [`narrow_i16x8_u`](/de/docs/WebAssembly/Reference/SIMD/conversion/narrow_i16x8_u)
  - : Konvertiert zwei signierte `v128` `i16x8`-Wertinterpretationen in eine `i8x16`-Wertinterpretation unter Verwendung der unsignierten Sättigung.
- [`narrow_i32x4_s`](/de/docs/WebAssembly/Reference/SIMD/conversion/narrow_i32x4_s)
  - : Konvertiert zwei signierte `v128` `i32x4`-Wertinterpretationen in eine `i16x8`-Wertinterpretation.
- [`narrow_i32x4_u`](/de/docs/WebAssembly/Reference/SIMD/conversion/narrow_i32x4_u)
  - : Konvertiert zwei signierte `v128` `i32x4`-Wertinterpretationen in eine `i16x8`-Wertinterpretation unter Verwendung der unsignierten Sättigung.

## Wert-Ersetzung

- [`replace_lane`](/de/docs/WebAssembly/Reference/SIMD/conversion/replace_lane)
  - : Ersetzt die angegebene Lane einer `v128`-Wertinterpretation durch einen neuen Wert und gibt die resultierende `v128`-Wertinterpretation zurück.
- [`shuffle`](/de/docs/WebAssembly/Reference/SIMD/conversion/shuffle)
  - : Gibt eine neue `v128`-Wertinterpretation zurück, deren Lane-Werte aus zwei Eingabe-`v128`-Werten ausgewählt werden, bestimmt durch die bereitgestellten Indexwerte.
- [`splat`](/de/docs/WebAssembly/Reference/SIMD/conversion/splat)
  - : Kopiert denselben Wert auf alle Lanes einer `v128`-Wertinterpretation.
- [`swizzle`](/de/docs/WebAssembly/Reference/SIMD/conversion/swizzle)
  - : Gibt eine neue `v128`-Wertinterpretation zurück, deren Lane-Werte aus einem Eingabe-`v128`-Wert ausgewählt werden, bestimmt durch die Indizes, die in einem zweiten Eingabe-`v128` bereitgestellt werden.

## SIMD-spezifische trunc-Anweisungen

- [`trunc_sat_f32x4_s`](/de/docs/WebAssembly/Reference/SIMD/conversion/trunc_sat_f32x4_s)
  - : Führt eine [saturierende](https://en.wikipedia.org/wiki/Saturation_arithmetic) Konvertierung der Lanes einer `v128` `f32x4`-Wertinterpretation in eine signierte `i32x4`-Wertinterpretation durch und klemmt die Ausgabe auf den Bereich, der durch den Werttyp erlaubt ist.
- [`trunc_sat_f32x4_u`](/de/docs/WebAssembly/Reference/SIMD/conversion/trunc_sat_f32x4_u)
  - : Führt eine saturierende Konvertierung der Lanes einer `v128` `f32x4`-Wertinterpretation in eine unsignierte `i32x4`-Wertinterpretation durch und klemmt die Ausgabe auf den Bereich, der durch den Werttyp erlaubt ist.
- [`trunc_sat_f64x2_s_zero`](/de/docs/WebAssembly/Reference/SIMD/conversion/trunc_sat_f64x2_s_zero)
  - : Führt eine saturierende Konvertierung der Lanes einer `v128` `f64x2`-Wertinterpretation in eine signierte `i32x4`-Wertinterpretation durch und klemmt die Ausgabe auf den Bereich, der durch den Werttyp erlaubt ist. Die zwei höheren Lanes des Ergebnisses werden auf null gesetzt.
- [`trunc_sat_f64x2_u_zero`](/de/docs/WebAssembly/Reference/SIMD/conversion/trunc_sat_f64x2_u_zero)
  - : Führt eine saturierende Konvertierung der Lanes einer `v128` `f64x2`-Wertinterpretation in eine unsignierte `i32x4`-Wertinterpretation durch und klemmt die Ausgabe auf den Bereich, der durch den Werttyp erlaubt ist. Die zwei höheren Lanes des Ergebnisses werden auf null gesetzt.

> [!NOTE]
> Siehe auch die nicht-SIMD-spezifische [`trunc`](/de/docs/WebAssembly/Reference/Numeric/trunc)-Anweisung.
