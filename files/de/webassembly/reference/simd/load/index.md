---
title: WebAssembly SIMD Ladeanweisungen
slug: WebAssembly/Reference/SIMD/load
l10n:
  sourceCommit: d3b22d8099235ad3a0ef2a494106fc2ea178863d
---

WebAssembly SIMD Ladeanweisungen.

## Laden und Lanes laden

- [`load`](/de/docs/WebAssembly/Reference/SIMD/load/load)
  - : Lädt alle Lanes einer [`v128`](/de/docs/WebAssembly/Reference/Types/v128) Wertinterpretation mit Werten von einer gegebenen Speicheradresse.
- [`load8_lane`](/de/docs/WebAssembly/Reference/SIMD/load/load8_lane)
  - : Lädt einen einzelnen Wert von einer gegebenen Speicheradresse in die angegebene Lane einer `v128` `i8x16` Wertinterpretation.
- [`load16_lane`](/de/docs/WebAssembly/Reference/SIMD/load/load16_lane)
  - : Lädt einen einzelnen Wert von einer gegebenen Speicheradresse in die angegebene Lane einer `v128` `i16x8` Wertinterpretation.
- [`load32_lane`](/de/docs/WebAssembly/Reference/SIMD/load/load32_lane)
  - : Lädt einen einzelnen Wert von einer gegebenen Speicheradresse in die angegebene Lane einer `v128` `i32x4` Wertinterpretation.
- [`load64_lane`](/de/docs/WebAssembly/Reference/SIMD/load/load64_lane)
  - : Lädt einen einzelnen Wert von einer gegebenen Speicheradresse in die angegebene Lane einer `v128` `i64x2` Wertinterpretation.

## Laden und erweitern

- [`load8x8_s`](/de/docs/WebAssembly/Reference/SIMD/load/load8x8_s)
  - : Lädt acht 8-Bit-Ganzzahlen von einer gegebenen Speicheradresse und ergänzt jede durch Vorzeichen auf eine 16-Bit-Lane, wobei eine `v128` `i16x8` Wertinterpretation ausgegeben wird.
- [`load8x8_u`](/de/docs/WebAssembly/Reference/SIMD/load/load8x8_u)
  - : Lädt acht 8-Bit-Ganzzahlen von einer gegebenen Speicheradresse und ergänzt jede durch Null auf eine 16-Bit-Lane, wobei eine `v128` `i16x8` Wertinterpretation ausgegeben wird.
- [`load16x4_s`](/de/docs/WebAssembly/Reference/SIMD/load/load16x4_s)
  - : Lädt vier 16-Bit-Ganzzahlen von einer gegebenen Speicheradresse und ergänzt jede durch Vorzeichen auf eine 32-Bit-Lane, wobei eine `v128` `i32x4` Wertinterpretation ausgegeben wird.
- [`load16x4_u`](/de/docs/WebAssembly/Reference/SIMD/load/load16x4_u)
  - : Lädt vier 16-Bit-Ganzzahlen von einer gegebenen Speicheradresse und ergänzt jede durch Null auf eine 32-Bit-Lane, wobei eine `v128` `i32x4` Wertinterpretation ausgegeben wird.
- [`load32x2_s`](/de/docs/WebAssembly/Reference/SIMD/load/load32x2_s)
  - : Lädt zwei 32-Bit-Ganzzahlen von einer gegebenen Speicheradresse und ergänzt jede durch Vorzeichen auf eine 64-Bit-Lane, wobei eine `v128` `i64x2` Wertinterpretation ausgegeben wird.
- [`load32x2_u`](/de/docs/WebAssembly/Reference/SIMD/load/load32x2_u)
  - : Lädt zwei 32-Bit-Ganzzahlen von einer gegebenen Speicheradresse und ergänzt jede durch Null auf eine 64-Bit-Lane, wobei eine `v128` `i64x2` Wertinterpretation ausgegeben wird.

## Laden und Splat

- [`load8_splat`](/de/docs/WebAssembly/Reference/SIMD/load/load8_splat)
  - : Lädt einen einzelnen Wert von einer gegebenen Speicheradresse in alle Lanes einer `v128` `i8x16` Wertinterpretation.
- [`load16_splat`](/de/docs/WebAssembly/Reference/SIMD/load/load16_splat)
  - : Lädt einen einzelnen Wert von einer gegebenen Speicheradresse in alle Lanes einer `v128` `i16x8` Wertinterpretation.
- [`load32_splat`](/de/docs/WebAssembly/Reference/SIMD/load/load32_splat)
  - : Lädt einen einzelnen Wert von einer gegebenen Speicheradresse in alle Lanes einer `v128` `i32x4` Wertinterpretation.
- [`load64_splat`](/de/docs/WebAssembly/Reference/SIMD/load/load64_splat)
  - : Lädt einen einzelnen Wert von einer gegebenen Speicheradresse in alle Lanes einer `v128` `i64x2` Wertinterpretation.

## Laden und Null-Pad

- [`load32_zero`](/de/docs/WebAssembly/Reference/SIMD/load/load32_zero)
  - : Lädt einen einzelnen Wert von einer gegebenen Speicheradresse in die erste Lane einer `v128` `i32x4` Wertinterpretation und initialisiert die anderen Lanes mit `0`.
- [`load64_zero`](/de/docs/WebAssembly/Reference/SIMD/load/load64_zero)
  - : Lädt einen einzelnen Wert von einer gegebenen Speicheradresse in die erste Lane einer `v128` `i64x2` Wertinterpretation und initialisiert die andere Lane mit `0`.
