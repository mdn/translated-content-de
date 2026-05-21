---
title: WebAssembly SIMD Konvertierungsanweisungen
short-title: Conversion instructions
slug: WebAssembly/Reference/SIMD/conversion
l10n:
  sourceCommit: ca1301872404bbc0305fa945cf3e3fb2351863bf
---

WebAssembly SIMD Konvertierungsanweisungen.

## Umwandlung zwischen Typen

- [`convert_low_i32x4_s`](/de/docs/WebAssembly/Reference/SIMD/conversion/convert_low_i32x4_s)
  - : Konvertiert die Lanes einer [`v128`](/de/docs/WebAssembly/Reference/Value_types/v128) `f64x2` Werteinterpretation in eine signierte `i32x4` Werteinterpretation.
- [`convert_low_i32x4_u`](/de/docs/WebAssembly/Reference/SIMD/conversion/convert_low_i32x4_u)
  - : Konvertiert die Lanes einer `v128` `f64x2` Werteinterpretation in eine unsignierte `i32x4` Werteinterpretation.
- [`convert_i32x4_s`](/de/docs/WebAssembly/Reference/SIMD/conversion/convert_i32x4_s)
  - : Konvertiert die Lanes einer `v128` `f32x4` Werteinterpretation in eine signierte `i32x4` Werteinterpretation.
- [`convert_i32x4_u`](/de/docs/WebAssembly/Reference/SIMD/conversion/convert_i32x4_u)
  - : Konvertiert die Lanes einer `v128` `f32x4` Werteinterpretation in eine unsignierte `i32x4` Werteinterpretation.
- [`demote_f64x2_zero`](/de/docs/WebAssembly/Reference/SIMD/conversion/demote_f64x2_zero)
  - : Konvertiert die Lanes einer `v128` `f64x2` Werteinterpretation in eine `f32x4` Werteinterpretation. Die beiden höheren Lanes des Ergebnisses werden auf null gesetzt.
- [`promote_low_f32x4`](/de/docs/WebAssembly/Reference/SIMD/conversion/promote_low_f32x4)
  - : Konvertiert die ersten zwei Lanes einer `v128` `f32x4` Werteinterpretation in eine `f64x2` Werteinterpretation.

## Umwandlung von schmaleren zu breiteren Typen

- [`extend_high_i8x16_s`](/de/docs/WebAssembly/Reference/SIMD/conversion/extend_high_i8x16_s)
  - : Konvertiert Lanes 8–15 einer signierten `v128` `i8x16` Werteinterpretation in eine `i16x8` Werteinterpretation.
- [`extend_high_i8x16_u`](/de/docs/WebAssembly/Reference/SIMD/conversion/extend_high_i8x16_u)
  - : Konvertiert Lanes 8–15 einer unsignierten `v128` `i8x16` Werteinterpretation in eine `i16x8` Werteinterpretation.
- [`extend_high_i16x8_s`](/de/docs/WebAssembly/Reference/SIMD/conversion/extend_high_i16x8_s)
  - : Konvertiert Lanes 4–7 einer signierten `v128` `i16x8` Werteinterpretation in eine `i32x4` Werteinterpretation.
- [`extend_high_i16x8_u`](/de/docs/WebAssembly/Reference/SIMD/conversion/extend_high_i16x8_u)
  - : Konvertiert Lanes 4–7 einer unsignierten `v128` `i16x8` Werteinterpretation in eine `i32x4` Werteinterpretation.
- [`extend_high_i32x4_s`](/de/docs/WebAssembly/Reference/SIMD/conversion/extend_high_i32x4_s)
  - : Konvertiert Lanes 2–3 einer signierten `v128` `i32x4` Werteinterpretation in eine `i64x2` Werteinterpretation.
- [`extend_high_i32x4_u`](/de/docs/WebAssembly/Reference/SIMD/conversion/extend_high_i32x4_u)
  - : Konvertiert Lanes 2–3 einer unsignierten `v128` `i32x4` Werteinterpretation in eine `i64x2` Werteinterpretation.
- [`extend_low_i8x16_s`](/de/docs/WebAssembly/Reference/SIMD/conversion/extend_low_i8x16_s)
  - : Konvertiert Lanes 0–7 einer signierten `v128` `i8x16` Werteinterpretation in eine `i16x8` Werteinterpretation.
- [`extend_low_i8x16_u`](/de/docs/WebAssembly/Reference/SIMD/conversion/extend_low_i8x16_u)
  - : Konvertiert Lanes 0–7 einer unsignierten `v128` `i8x16` Werteinterpretation in eine `i16x8` Werteinterpretation.
- [`extend_low_i16x8_s`](/de/docs/WebAssembly/Reference/SIMD/conversion/extend_low_i16x8_s)
  - : Konvertiert Lanes 0–3 einer signierten `v128` `i16x8` Werteinterpretation in eine `i32x4` Werteinterpretation.
- [`extend_low_i16x8_u`](/de/docs/WebAssembly/Reference/SIMD/conversion/extend_low_i16x8_u)
  - : Konvertiert Lanes 0–3 einer unsignierten `v128` `i16x8` Werteinterpretation in eine `i32x4` Werteinterpretation.
- [`extend_low_i32x4_s`](/de/docs/WebAssembly/Reference/SIMD/conversion/extend_low_i32x4_s)
  - : Konvertiert Lanes 0–1 einer signierten `v128` `i32x4` Werteinterpretation in eine `i64x2` Werteinterpretation.
- [`extend_low_i32x4_u`](/de/docs/WebAssembly/Reference/SIMD/conversion/extend_low_i32x4_u)
  - : Konvertiert Lanes 0–1 einer unsignierten `v128` `i32x4` Werteinterpretation in eine `i64x2` Werteinterpretation.

## Umwandlung von breiteren zu schmaleren Typen

- [`narrow_i16x8_s`](/de/docs/WebAssembly/Reference/SIMD/conversion/narrow_i16x8_s)
  - : Konvertiert zwei signierte `v128` `i16x8` Werteinterpretationen in eine `i8x16` Werteinterpretation.
- [`narrow_i16x8_u`](/de/docs/WebAssembly/Reference/SIMD/conversion/narrow_i16x8_u)
  - : Konvertiert zwei signierte `v128` `i16x8` Werteinterpretationen in eine `i8x16` Werteinterpretation unter Anwendung der unsignierten Sättigung.
- [`narrow_i32x4_s`](/de/docs/WebAssembly/Reference/SIMD/conversion/narrow_i32x4_s)
  - : Konvertiert zwei signierte `v128` `i32x4` Werteinterpretationen in eine `i16x8` Werteinterpretation.
- [`narrow_i32x4_u`](/de/docs/WebAssembly/Reference/SIMD/conversion/narrow_i32x4_u)
  - : Konvertiert zwei signierte `v128` `i32x4` Werteinterpretationen in eine `i16x8` Werteinterpretation unter Anwendung der unsignierten Sättigung.

## Wert-Ersatz

- [`replace_lane`](/de/docs/WebAssembly/Reference/SIMD/conversion/replace_lane)
  - : Ersetzt die angegebene Lane einer `v128` Werteinterpretation durch einen neuen Wert und gibt die resultierende `v128` Werteinterpretation zurück.
- [`shuffle`](/de/docs/WebAssembly/Reference/SIMD/conversion/shuffle)
  - : Gibt eine neue `v128` Werteinterpretation zurück, deren Lane-Werte aus zwei Eingabe-`v128`-Werten ausgewählt werden, bestimmt durch die bereitgestellten Indexwerte.
- [`splat`](/de/docs/WebAssembly/Reference/SIMD/conversion/splat)
  - : Kopiert denselben Wert in alle Lanes einer `v128` Werteinterpretation.
- [`swizzle`](/de/docs/WebAssembly/Reference/SIMD/conversion/swizzle)
  - : Gibt eine neue `v128` Werteinterpretation zurück, deren Lane-Werte aus einem Eingabe-`v128`-Wert ausgewählt werden, bestimmt durch Indizes, die in einem zweiten Eingabe-`v128` bereitgestellt werden.

## SIMD-spezifische Trunkierungsanweisungen

- [`trunc_sat_f32x4_s`](/de/docs/WebAssembly/Reference/SIMD/conversion/trunc_sat_f32x4_s)
  - : Führt eine [sättigende](https://en.wikipedia.org/wiki/Saturation_arithmetic) Umwandlung der Lanes einer `v128` `f32x4` Werteinterpretation in eine signierte `i32x4` Werteinterpretation durch, wobei die Ausgabe auf den Bereich begrenzt wird, der durch den Wertetyp erlaubt ist.
- [`trunc_sat_f32x4_u`](/de/docs/WebAssembly/Reference/SIMD/conversion/trunc_sat_f32x4_u)
  - : Führt eine sättigende Umwandlung der Lanes einer `v128` `f32x4` Werteinterpretation in eine unsignierte `i32x4` Werteinterpretation durch, wobei die Ausgabe auf den Bereich begrenzt wird, der durch den Wertetyp erlaubt ist.
- [`trunc_sat_f64x2_s_zero`](/de/docs/WebAssembly/Reference/SIMD/conversion/trunc_sat_f64x2_s_zero)
  - : Führt eine sättigende Umwandlung der Lanes einer `v128` `f64x2` Werteinterpretation in eine signierte `i32x4` Werteinterpretation durch, wobei die Ausgabe auf den Bereich begrenzt wird, der durch den Wertetyp erlaubt ist. Die beiden höheren Lanes des Ergebnisses werden auf null gesetzt.
- [`trunc_sat_f64x2_u_zero`](/de/docs/WebAssembly/Reference/SIMD/conversion/trunc_sat_f64x2_u_zero)
  - : Führt eine sättigende Umwandlung der Lanes einer `v128` `f64x2` Werteinterpretation in eine unsignierte `i32x4` Werteinterpretation durch, wobei die Ausgabe auf den Bereich begrenzt wird, der durch den Wertetyp erlaubt ist. Die beiden höheren Lanes des Ergebnisses werden auf null gesetzt.

> [!NOTE]
> Siehe auch die nicht-SIMD-spezifische [`trunc`](/de/docs/WebAssembly/Reference/Numeric/trunc) Anweisung.
