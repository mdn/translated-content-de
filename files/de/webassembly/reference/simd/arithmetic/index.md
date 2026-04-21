---
title: WebAssembly SIMD-spezifische Arithmetikinstruktionen
short-title: Arithmetische Instruktionen
slug: WebAssembly/Reference/SIMD/arithmetic
l10n:
  sourceCommit: 76b3f4216320b4ecdbc8b95028dc46aa67e1468e
---

WebAssembly SIMD-spezifische Arithmetikinstruktionen.

## Adjacent pairs hinzufügen

- [`extadd_pairwise_i8x16_s`](/de/docs/WebAssembly/Reference/SIMD/arithmetic/extadd_pairwise_i8x16_s)
  - : Addiert jedes benachbarte Paar von Lanes einer signed [`v128`](/de/docs/WebAssembly/Reference/Types/v128) `i8x16` Wertinterpretation und gibt die Ergebnisse als `i16x8` Wertinterpretation aus.
- [`extadd_pairwise_i8x16_u`](/de/docs/WebAssembly/Reference/SIMD/arithmetic/extadd_pairwise_i8x16_u)
  - : Addiert jedes benachbarte Paar von Lanes einer unsigned `v128` `i8x16` Wertinterpretation und gibt die Ergebnisse als `i16x8` Wertinterpretation aus.
- [`extadd_pairwise_i16x8_s`](/de/docs/WebAssembly/Reference/SIMD/arithmetic/extadd_pairwise_i16x8_s)
  - : Addiert jedes benachbarte Paar von Lanes einer signed `v128` `i16x8` Wertinterpretation und gibt die Ergebnisse als `i32x4` Wertinterpretation aus.
- [`extadd_pairwise_i16x8_u`](/de/docs/WebAssembly/Reference/SIMD/arithmetic/extadd_pairwise_i16x8_u)
  - : Addiert jedes benachbarte Paar von Lanes einer unsigned `v128` `i16x8` Wertinterpretation und gibt die Ergebnisse als `i32x4` Wertinterpretation aus.

## Ganzzahliges Punktprodukt

- [`dot_i16x8_s`](/de/docs/WebAssembly/Reference/SIMD/arithmetic/dot_i16x8_s)
  - : Führt eine Punktproduktberechnung auf zwei signed `v128` `i16x8` Wertinterpretationen durch. Die entsprechenden Lanes der Eingabewerte werden miteinander multipliziert, dann werden jeweils benachbarte Paare von Produkten zusammen addiert. Die vier Ergebnisse dieser Additionen werden als `i32x4` Wertinterpretation ausgegeben.

## Lane-weise gerundeter Durchschnitt

- [`avgr_u`](/de/docs/WebAssembly/Reference/SIMD/arithmetic/avgr_u)
  - : Führt einen gerundeten Durchschnitt zweier unsigned `v128` Wertinterpretationen durch. Jede Lane des Ausgabewerts ist `(a + b + 1) / 2`, gerundet nach oben (Decken-Division).

## Lane-weise sättigende Rundungsmultiplikation

- [`q15mulr_sat_s`](/de/docs/WebAssembly/Reference/SIMD/arithmetic/q15mulr_sat_s)
  - : Führt eine lane-weise [sättigende](https://en.wikipedia.org/wiki/Saturation_arithmetic) Rundungsmultiplikation im Q15-Format auf zwei signed `v128` `i16x8` Wertinterpretationen durch — Begrenzung der Ausgabe auf den durch den Werttyp erlaubten Bereich (eine einzige `i16x8` Wertinterpretation).

## Minimum und Maximum

- [`max_s`](/de/docs/WebAssembly/Reference/SIMD/arithmetic/max_s)
  - : Vergleicht zwei `v128` signed integer Wertinterpretationen und gibt eine neue Interpretation zurück, wobei jede Lane auf den größeren Wert dieses Lane-Indexes der beiden Eingaben gesetzt wird.
- [`max_u`](/de/docs/WebAssembly/Reference/SIMD/arithmetic/max_u)
  - : Vergleicht zwei `v128` unsigned integer Wertinterpretationen und gibt eine neue Interpretation zurück, wobei jede Lane auf den größeren Wert dieses Lane-Indexes der beiden Eingaben gesetzt wird.
- [`min_s`](/de/docs/WebAssembly/Reference/SIMD/arithmetic/min_s)
  - : Vergleicht zwei `v128` signed integer Wertinterpretationen und gibt eine neue Interpretation zurück, wobei jede Lane auf den kleineren Wert dieses Lane-Indexes der beiden Eingaben gesetzt wird.
- [`min_u`](/de/docs/WebAssembly/Reference/SIMD/arithmetic/min_u)
  - : Vergleicht zwei `v128` unsigned integer Wertinterpretationen und gibt eine neue Interpretation zurück, wobei jede Lane auf den kleineren Wert dieses Lane-Indexes der beiden Eingaben gesetzt wird.
- [`pmax`](/de/docs/WebAssembly/Reference/SIMD/arithmetic/pmax)
  - : Vergleicht zwei `v128` Gleitpunktwertinterpretationen und gibt eine neue Interpretation zurück, wobei jede Ausgabelane auf den größeren der entsprechenden Eingabelanes gesetzt wird.
- [`pmin`](/de/docs/WebAssembly/Reference/SIMD/arithmetic/pmin)
  - : Vergleicht zwei `v128` Gleitpunktwertinterpretationen und gibt eine neue Interpretation zurück, wobei jede Ausgabelane auf den kleineren der entsprechenden Eingabelanes gesetzt wird.

## Multiplizieren und erweitern

- [`extmul_low_i8x16_s`](/de/docs/WebAssembly/Reference/SIMD/arithmetic/extmul_low_i8x16_s)
  - : Nimmt Lanes 0–7 von zwei signed `v128` `i8x16` Wertinterpretationen, multipliziert die Werte in den entsprechenden Lanes und gibt das Ergebnis dieser Operationen als `i16x8` Wertinterpretation aus.
- [`extmul_high_i8x16_s`](/de/docs/WebAssembly/Reference/SIMD/arithmetic/extmul_high_i8x16_s)
  - : Nimmt Lanes 8–15 von zwei signed `v128` `i8x16` Wertinterpretationen, multipliziert die Werte in den entsprechenden Lanes und gibt das Ergebnis dieser Operationen als `i16x8` Wertinterpretation aus.
- [`extmul_low_i8x16_u`](/de/docs/WebAssembly/Reference/SIMD/arithmetic/extmul_low_i8x16_u)
  - : Nimmt Lanes 0–7 von zwei unsigned `v128` `i8x16` Wertinterpretationen, multipliziert die Werte in den entsprechenden Lanes und gibt das Ergebnis dieser Operationen als `i16x8` Wertinterpretation aus.
- [`extmul_high_i8x16_u`](/de/docs/WebAssembly/Reference/SIMD/arithmetic/extmul_high_i8x16_u)
  - : Nimmt Lanes 8–15 von zwei unsigned `v128` `i8x16` Wertinterpretationen, multipliziert die Werte in den entsprechenden Lanes und gibt das Ergebnis dieser Operationen als `i16x8` Wertinterpretation aus.
- [`extmul_low_i16x8_s`](/de/docs/WebAssembly/Reference/SIMD/arithmetic/extmul_low_i16x8_s)
  - : Nimmt Lanes 0–3 von zwei signed `v128` `i16x8` Wertinterpretationen, multipliziert die Werte in den entsprechenden Lanes und gibt das Ergebnis dieser Operationen als `i32x4` Wertinterpretation aus.
- [`extmul_high_i16x8_s`](/de/docs/WebAssembly/Reference/SIMD/arithmetic/extmul_high_i16x8_s)
  - : Nimmt Lanes 4–7 von zwei signed `v128` `i16x8` Wertinterpretationen, multipliziert die Werte in den entsprechenden Lanes und gibt das Ergebnis dieser Operationen als `i32x4` Wertinterpretation aus.
- [`extmul_low_i16x8_u`](/de/docs/WebAssembly/Reference/SIMD/arithmetic/extmul_low_i16x8_u)
  - : Nimmt Lanes 0–3 von zwei unsigned `v128` `i16x8` Wertinterpretationen, multipliziert die Werte in den entsprechenden Lanes und gibt das Ergebnis dieser Operationen als `i32x4` Wertinterpretation aus.
- [`extmul_high_i16x8_u`](/de/docs/WebAssembly/Reference/SIMD/arithmetic/extmul_high_i16x8_u)
  - : Nimmt Lanes 4–7 von zwei unsigned `v128` `i16x8` Wertinterpretationen, multipliziert die Werte in den entsprechenden Lanes und gibt das Ergebnis dieser Operationen als `i32x4` Wertinterpretation aus.
- [`extmul_low_i32x4_s`](/de/docs/WebAssembly/Reference/SIMD/arithmetic/extmul_low_i32x4_s)
  - : Nimmt Lanes 0–1 von zwei signed `v128` `i32x4` Wertinterpretationen, multipliziert die Werte in den entsprechenden Lanes und gibt das Ergebnis dieser Operationen als `i64x2` Wertinterpretation aus.
- [`extmul_high_i32x4_s`](/de/docs/WebAssembly/Reference/SIMD/arithmetic/extmul_high_i32x4_s)
  - : Nimmt Lanes 2–3 von zwei signed `v128` `i32x4` Wertinterpretationen, multipliziert die Werte in den entsprechenden Lanes und gibt das Ergebnis dieser Operationen als `i64x2` Wertinterpretation aus.
- [`extmul_low_i32x4_u`](/de/docs/WebAssembly/Reference/SIMD/arithmetic/extmul_low_i32x4_u)
  - : Nimmt Lanes 0–1 von zwei unsigned `v128` `i32x4` Wertinterpretationen, multipliziert die Werte in den entsprechenden Lanes und gibt das Ergebnis dieser Operationen als `i64x2` Wertinterpretation aus.
- [`extmul_high_i32x4_u`](/de/docs/WebAssembly/Reference/SIMD/arithmetic/extmul_high_i32x4_u)
  - : Nimmt Lanes 2–3 von zwei unsigned `v128` `i32x4` Wertinterpretationen, multipliziert die Werte in den entsprechenden Lanes und gibt das Ergebnis dieser Operationen als `i64x2` Wertinterpretation aus.

## Sättigende Addition und Subtraktion

- [`add_sat_s`](/de/docs/WebAssembly/Reference/SIMD/arithmetic/add_sat_s)
  - : Führt eine [sättigende](https://en.wikipedia.org/wiki/Saturation_arithmetic) Addition von zwei signed `v128` Wertinterpretationen durch — Begrenzung der Ausgabe auf den durch den Werttyp erlaubten Bereich. Jede Lane des Ausgabewerts ist das Ergebnis der Addition der entsprechenden Lanes der Eingabewerte.
- [`add_sat_u`](/de/docs/WebAssembly/Reference/SIMD/arithmetic/add_sat_u)
  - : Führt eine sättigende Addition von zwei unsigned `v128` Wertinterpretationen durch — Begrenzung der Ausgabe auf den durch den Werttyp erlaubten Bereich. Jede Lane des Ausgabewerts ist das Ergebnis der Addition der entsprechenden Lanes der Eingabewerte.
- [`sub_sat_s`](/de/docs/WebAssembly/Reference/SIMD/arithmetic/sub_sat_s)
  - : Führt eine sättigende Subtraktion von zwei signed `v128` Wertinterpretationen durch — Begrenzung der Ausgabe auf den durch den Werttyp erlaubten Bereich. Jede Lane des Ausgabewerts ist das Ergebnis der Subtraktion der entsprechenden Lane des zweiten Eingabewerts von der entsprechenden Lane des ersten Eingabewerts.
- [`sub_sat_u`](/de/docs/WebAssembly/Reference/SIMD/arithmetic/sub_sat_u)
  - : Führt eine sättigende Subtraktion von zwei unsigned `v128` Wertinterpretationen durch — Begrenzung der Ausgabe auf den durch den Werttyp erlaubten Bereich. Jede Lane des Ausgabewerts ist das Ergebnis der Subtraktion der entsprechenden Lane des zweiten Eingabewerts von der entsprechenden Lane des ersten Eingabewerts.

## Siehe auch

- [WebAssembly numerische Instruktionen](/de/docs/WebAssembly/Reference/Numeric)
