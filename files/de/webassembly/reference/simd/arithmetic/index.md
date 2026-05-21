---
title: WebAssembly SIMD-spezifische Arithmetik-Instruktionen
short-title: Arithmetic instructions
slug: WebAssembly/Reference/SIMD/arithmetic
l10n:
  sourceCommit: ca1301872404bbc0305fa945cf3e3fb2351863bf
---

WebAssembly SIMD-spezifische Arithmetik-Instruktionen.

## Addition paarweiser benachbarter Werte

- [`extadd_pairwise_i8x16_s`](/de/docs/WebAssembly/Reference/SIMD/arithmetic/extadd_pairwise_i8x16_s)
  - : Addiert jedes benachbarte Paar von Lanes einer vorzeichenbehafteten [`v128`](/de/docs/WebAssembly/Reference/Value_types/v128) `i8x16`-Wertinterpretation und gibt die Ergebnisse als `i16x8`-Wertinterpretation aus.
- [`extadd_pairwise_i8x16_u`](/de/docs/WebAssembly/Reference/SIMD/arithmetic/extadd_pairwise_i8x16_u)
  - : Addiert jedes benachbarte Paar von Lanes einer vorzeichenlosen `v128` `i8x16`-Wertinterpretation und gibt die Ergebnisse als `i16x8`-Wertinterpretation aus.
- [`extadd_pairwise_i16x8_s`](/de/docs/WebAssembly/Reference/SIMD/arithmetic/extadd_pairwise_i16x8_s)
  - : Addiert jedes benachbarte Paar von Lanes einer vorzeichenbehafteten `v128` `i16x8`-Wertinterpretation und gibt die Ergebnisse als `i32x4`-Wertinterpretation aus.
- [`extadd_pairwise_i16x8_u`](/de/docs/WebAssembly/Reference/SIMD/arithmetic/extadd_pairwise_i16x8_u)
  - : Addiert jedes benachbarte Paar von Lanes einer vorzeichenlosen `v128` `i16x8`-Wertinterpretation und gibt die Ergebnisse als `i32x4`-Wertinterpretation aus.

## Ganzzahliges Skalarprodukt

- [`dot_i16x8_s`](/de/docs/WebAssembly/Reference/SIMD/arithmetic/dot_i16x8_s)
  - : Führt eine Skalarproduktberechnung auf zwei vorzeichenbehafteten `v128` `i16x8`-Wertinterpretationen durch. Die entsprechenden Lanes der Eingabewerte werden miteinander multipliziert und dann wird jedes benachbarte Paar von Produkten zusammen addiert. Die vier Ergebnisse dieser Additionen werden als `i32x4`-Wertinterpretation ausgegeben.

## Lane-Weise gerundeter Durchschnitt

- [`avgr_u`](/de/docs/WebAssembly/Reference/SIMD/arithmetic/avgr_u)
  - : Führt einen gerundeten Durchschnitt von zwei vorzeichenlosen `v128`-Wertinterpretationen durch. Jede Lane des Ausgabe-Wertes ist `(a + b + 1) / 2`, aufgerundet (Ceiling-Division).

## Lane-Weise sättigende Rundungsmultiplikation

- [`q15mulr_sat_s`](/de/docs/WebAssembly/Reference/SIMD/arithmetic/q15mulr_sat_s)
  - : Führt eine lane-weise [sättigende](https://en.wikipedia.org/wiki/Saturation_arithmetic) Rundungsmultiplikation im Q15-Format auf zwei vorzeichenbehafteten `v128` `i16x8`-Wertinterpretationen durch — begrenzt die Ausgabe auf den Bereich, der durch den Werttyp erlaubt ist (eine einzelne `i16x8`-Wertinterpretation).

## Minimum und Maximum

- [`max_s`](/de/docs/WebAssembly/Reference/SIMD/arithmetic/max_s)
  - : Vergleicht zwei `v128` vorzeichenbehaftete Ganzzahl-Wertinterpretationen und gibt eine neue Interpretation zurück, bei der jede Lane auf den größeren Wert dieses Lane-Indexes bei den beiden Eingaben gesetzt wird.
- [`max_u`](/de/docs/WebAssembly/Reference/SIMD/arithmetic/max_u)
  - : Vergleicht zwei `v128` vorzeichenlose Ganzzahl-Wertinterpretationen und gibt eine neue Interpretation zurück, bei der jede Lane auf den größeren Wert dieses Lane-Indexes bei den beiden Eingaben gesetzt wird.
- [`min_s`](/de/docs/WebAssembly/Reference/SIMD/arithmetic/min_s)
  - : Vergleicht zwei `v128` vorzeichenbehaftete Ganzzahl-Wertinterpretationen und gibt eine neue Interpretation zurück, bei der jede Lane auf den kleineren Wert dieses Lane-Indexes bei den beiden Eingaben gesetzt wird.
- [`min_u`](/de/docs/WebAssembly/Reference/SIMD/arithmetic/min_u)
  - : Vergleicht zwei `v128` vorzeichenlose Ganzzahl-Wertinterpretationen und gibt eine neue Interpretation zurück, bei der jede Lane auf den kleineren Wert dieses Lane-Indexes bei den beiden Eingaben gesetzt wird.
- [`pmax`](/de/docs/WebAssembly/Reference/SIMD/arithmetic/pmax)
  - : Vergleicht zwei `v128` Gleitkomma-Wertinterpretationen und gibt eine neue Interpretation mit jeweils den größeren korrespondierenden Eingabe-Lanes zurück.
- [`pmin`](/de/docs/WebAssembly/Reference/SIMD/arithmetic/pmin)
  - : Vergleicht zwei `v128` Gleitkomma-Wertinterpretationen und gibt eine neue Interpretation mit jeweils den kleineren korrespondierenden Eingabe-Lanes zurück.

## Multiplizieren und Erweitern

- [`extmul_low_i8x16_s`](/de/docs/WebAssembly/Reference/SIMD/arithmetic/extmul_low_i8x16_s)
  - : Nimmt die Lanes 0–7 von zwei vorzeichenbehafteten `v128` `i8x16`-Wertinterpretationen, multipliziert die Werte in den entsprechenden Lanes und gibt das Ergebnis dieser Operationen als `i16x8`-Wertinterpretation aus.
- [`extmul_high_i8x16_s`](/de/docs/WebAssembly/Reference/SIMD/arithmetic/extmul_high_i8x16_s)
  - : Nimmt die Lanes 8–15 von zwei vorzeichenbehafteten `v128` `i8x16`-Wertinterpretationen, multipliziert die Werte in den entsprechenden Lanes und gibt das Ergebnis dieser Operationen als `i16x8`-Wertinterpretation aus.
- [`extmul_low_i8x16_u`](/de/docs/WebAssembly/Reference/SIMD/arithmetic/extmul_low_i8x16_u)
  - : Nimmt die Lanes 0–7 von zwei vorzeichenlosen `v128` `i8x16`-Wertinterpretationen, multipliziert die Werte in den entsprechenden Lanes und gibt das Ergebnis dieser Operationen als `i16x8`-Wertinterpretation aus.
- [`extmul_high_i8x16_u`](/de/docs/WebAssembly/Reference/SIMD/arithmetic/extmul_high_i8x16_u)
  - : Nimmt die Lanes 8–15 von zwei vorzeichenlosen `v128` `i8x16`-Wertinterpretationen, multipliziert die Werte in den entsprechenden Lanes und gibt das Ergebnis dieser Operationen als `i16x8`-Wertinterpretation aus.
- [`extmul_low_i16x8_s`](/de/docs/WebAssembly/Reference/SIMD/arithmetic/extmul_low_i16x8_s)
  - : Nimmt die Lanes 0–3 von zwei vorzeichenbehafteten `v128` `i16x8`-Wertinterpretationen, multipliziert die Werte in den entsprechenden Lanes und gibt das Ergebnis dieser Operationen als `i32x4`-Wertinterpretation aus.
- [`extmul_high_i16x8_s`](/de/docs/WebAssembly/Reference/SIMD/arithmetic/extmul_high_i16x8_s)
  - : Nimmt die Lanes 4–7 von zwei vorzeichenbehafteten `v128` `i16x8`-Wertinterpretationen, multipliziert die Werte in den entsprechenden Lanes und gibt das Ergebnis dieser Operationen als `i32x4`-Wertinterpretation aus.
- [`extmul_low_i16x8_u`](/de/docs/WebAssembly/Reference/SIMD/arithmetic/extmul_low_i16x8_u)
  - : Nimmt die Lanes 0–3 von zwei vorzeichenlosen `v128` `i16x8`-Wertinterpretationen, multipliziert die Werte in den entsprechenden Lanes und gibt das Ergebnis dieser Operationen als `i32x4`-Wertinterpretation aus.
- [`extmul_high_i16x8_u`](/de/docs/WebAssembly/Reference/SIMD/arithmetic/extmul_high_i16x8_u)
  - : Nimmt die Lanes 4–7 von zwei vorzeichenlosen `v128` `i16x8`-Wertinterpretationen, multipliziert die Werte in den entsprechenden Lanes und gibt das Ergebnis dieser Operationen als `i32x4`-Wertinterpretation aus.
- [`extmul_low_i32x4_s`](/de/docs/WebAssembly/Reference/SIMD/arithmetic/extmul_low_i32x4_s)
  - : Nimmt die Lanes 0–1 von zwei vorzeichenbehafteten `v128` `i32x4`-Wertinterpretationen, multipliziert die Werte in den entsprechenden Lanes und gibt das Ergebnis dieser Operationen als `i64x2`-Wertinterpretation aus.
- [`extmul_high_i32x4_s`](/de/docs/WebAssembly/Reference/SIMD/arithmetic/extmul_high_i32x4_s)
  - : Nimmt die Lanes 2–3 von zwei vorzeichenbehafteten `v128` `i32x4`-Wertinterpretationen, multipliziert die Werte in den entsprechenden Lanes und gibt das Ergebnis dieser Operationen als `i64x2`-Wertinterpretation aus.
- [`extmul_low_i32x4_u`](/de/docs/WebAssembly/Reference/SIMD/arithmetic/extmul_low_i32x4_u)
  - : Nimmt die Lanes 0–1 von zwei vorzeichenlosen `v128` `i32x4`-Wertinterpretationen, multipliziert die Werte in den entsprechenden Lanes und gibt das Ergebnis dieser Operationen als `i64x2`-Wertinterpretation aus.
- [`extmul_high_i32x4_u`](/de/docs/WebAssembly/Reference/SIMD/arithmetic/extmul_high_i32x4_u)
  - : Nimmt die Lanes 2–3 von zwei vorzeichenlosen `v128` `i32x4`-Wertinterpretationen, multipliziert die Werte in den entsprechenden Lanes und gibt das Ergebnis dieser Operationen als `i64x2`-Wertinterpretation aus.

## Sättigendes Addieren und Subtrahieren

- [`add_sat_s`](/de/docs/WebAssembly/Reference/SIMD/arithmetic/add_sat_s)
  - : Führt eine [sättigende](https://en.wikipedia.org/wiki/Saturation_arithmetic) Addition von zwei vorzeichenbehafteten `v128`-Wertinterpretationen durch — begrenzt die Ausgabe auf den Bereich, der durch den Werttyp erlaubt ist. Jede Lane des Ausgabe-Wertes ist das Ergebnis der Addition der entsprechenden Lanes des Eingabewertes.
- [`add_sat_u`](/de/docs/WebAssembly/Reference/SIMD/arithmetic/add_sat_u)
  - : Führt eine sättigende Addition von zwei vorzeichenlosen `v128`-Wertinterpretationen durch — begrenzt die Ausgabe auf den Bereich, der durch den Werttyp erlaubt ist. Jede Lane des Ausgabe-Wertes ist das Ergebnis der Addition der entsprechenden Lanes des Eingabewertes.
- [`sub_sat_s`](/de/docs/WebAssembly/Reference/SIMD/arithmetic/sub_sat_s)
  - : Führt eine sättigende Subtraktion von zwei vorzeichenbehafteten `v128`-Wertinterpretationen durch — begrenzt die Ausgabe auf den Bereich, der durch den Werttyp erlaubt ist. Jede Lane des Ausgabe-Wertes ist das Ergebnis der Subtraktion der entsprechenden Lane der zweiten Eingabe von der entsprechenden Lane der ersten Eingabe.
- [`sub_sat_u`](/de/docs/WebAssembly/Reference/SIMD/arithmetic/sub_sat_u)
  - : Führt eine sättigende Subtraktion von zwei vorzeichenlosen `v128`-Wertinterpretationen durch — begrenzt die Ausgabe auf den Bereich, der durch den Werttyp erlaubt ist. Jede Lane des Ausgabe-Wertes ist das Ergebnis der Subtraktion der entsprechenden Lane der zweiten Eingabe von der entsprechenden Lane der ersten Eingabe.

## Siehe auch

- [WebAssembly numerische Instruktionen](/de/docs/WebAssembly/Reference/Numeric)
