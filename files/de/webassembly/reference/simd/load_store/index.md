---
title: WebAssembly SIMD-Lade-/Speicherbefehle
slug: WebAssembly/Reference/SIMD/load_store
l10n:
  sourceCommit: ca1301872404bbc0305fa945cf3e3fb2351863bf
---

WebAssembly SIMD-Lade-/Speicherbefehle.

## Laden und Lage laden

- [`load`](/de/docs/WebAssembly/Reference/SIMD/load_store/load)
  - : Lädt alle Lanes einer [`v128`](/de/docs/WebAssembly/Reference/Value_types/v128)-Wertinterpretation mit Werten von einer angegebenen Speicheradresse.
- [`load8_lane`](/de/docs/WebAssembly/Reference/SIMD/load_store/load8_lane)
  - : Lädt einen einzelnen Wert von einer angegebenen Speicheradresse in die angegebene Lane einer `v128` `i8x16`-Wertinterpretation.
- [`load16_lane`](/de/docs/WebAssembly/Reference/SIMD/load_store/load16_lane)
  - : Lädt einen einzelnen Wert von einer angegebenen Speicheradresse in die angegebene Lane einer `v128` `i16x8`-Wertinterpretation.
- [`load32_lane`](/de/docs/WebAssembly/Reference/SIMD/load_store/load32_lane)
  - : Lädt einen einzelnen Wert von einer angegebenen Speicheradresse in die angegebene Lane einer `v128` `i32x4`-Wertinterpretation.
- [`load64_lane`](/de/docs/WebAssembly/Reference/SIMD/load_store/load64_lane)
  - : Lädt einen einzelnen Wert von einer angegebenen Speicheradresse in die angegebene Lane einer `v128` `i64x2`-Wertinterpretation.

## Laden und Erweitern

- [`load8x8_s`](/de/docs/WebAssembly/Reference/SIMD/load_store/load8x8_s)
  - : Lädt acht 8-Bit-Ganzzahlen von einer angegebenen Speicheradresse und signiert erweitert jede in eine 16-Bit-Lane, wobei eine `v128` `i16x8`-Wertinterpretation ergebniswert wird.
- [`load8x8_u`](/de/docs/WebAssembly/Reference/SIMD/load_store/load8x8_u)
  - : Lädt acht 8-Bit-Ganzzahlen von einer angegebenen Speicheradresse und nullt erweitert jede in eine 16-Bit-Lane, wobei eine `v128` `i16x8`-Wertinterpretation ergebniswert wird.
- [`load16x4_s`](/de/docs/WebAssembly/Reference/SIMD/load_store/load16x4_s)
  - : Lädt vier 16-Bit-Ganzzahlen von einer angegebenen Speicheradresse und signiert erweitert jede in eine 32-Bit-Lane, wobei eine `v128` `i32x4`-Wertinterpretation ergebniswert wird.
- [`load16x4_u`](/de/docs/WebAssembly/Reference/SIMD/load_store/load16x4_u)
  - : Lädt vier 16-Bit-Ganzzahlen von einer angegebenen Speicheradresse und nullt erweitert jede in eine 32-Bit-Lane, wobei eine `v128` `i32x4`-Wertinterpretation ergebniswert wird.
- [`load32x2_s`](/de/docs/WebAssembly/Reference/SIMD/load_store/load32x2_s)
  - : Lädt zwei 32-Bit-Ganzzahlen von einer angegebenen Speicheradresse und signiert erweitert jede in eine 64-Bit-Lane, wobei eine `v128` `i64x2`-Wertinterpretation ergebniswert wird.
- [`load32x2_u`](/de/docs/WebAssembly/Reference/SIMD/load_store/load32x2_u)
  - : Lädt zwei 32-Bit-Ganzzahlen von einer angegebenen Speicheradresse und nullt erweitert jede in eine 64-Bit-Lane, wobei eine `v128` `i64x2`-Wertinterpretation ergebniswert wird.

## Laden und Verteilen

- [`load8_splat`](/de/docs/WebAssembly/Reference/SIMD/load_store/load8_splat)
  - : Lädt einen einzelnen Wert von einer angegebenen Speicheradresse in alle Lanes einer `v128` `i8x16`-Wertinterpretation.
- [`load16_splat`](/de/docs/WebAssembly/Reference/SIMD/load_store/load16_splat)
  - : Lädt einen einzelnen Wert von einer angegebenen Speicheradresse in alle Lanes einer `v128` `i16x8`-Wertinterpretation.
- [`load32_splat`](/de/docs/WebAssembly/Reference/SIMD/load_store/load32_splat)
  - : Lädt einen einzelnen Wert von einer angegebenen Speicheradresse in alle Lanes einer `v128` `i32x4`-Wertinterpretation.
- [`load64_splat`](/de/docs/WebAssembly/Reference/SIMD/load_store/load64_splat)
  - : Lädt einen einzelnen Wert von einer angegebenen Speicheradresse in alle Lanes einer `v128` `i64x2`-Wertinterpretation.

## Laden und Nullauffüllen

- [`load32_zero`](/de/docs/WebAssembly/Reference/SIMD/load_store/load32_zero)
  - : Lädt einen einzelnen Wert von einer angegebenen Speicheradresse in die erste Lane einer `v128` `i32x4`-Wertinterpretation und initialisiert die anderen Lanes mit `0`.
- [`load64_zero`](/de/docs/WebAssembly/Reference/SIMD/load_store/load64_zero)
  - : Lädt einen einzelnen Wert von einer angegebenen Speicheradresse in die erste Lane einer `v128` `i64x2`-Wertinterpretation und initialisiert die andere Lane mit `0`.

## Speichern und Lage speichern

- [`store`](/de/docs/WebAssembly/Reference/SIMD/load_store/store)
  - : Speichert alle Lanes einer `v128`-Wertinterpretation an einer angegebenen Speicheradresse.
- [`store8_lane`](/de/docs/WebAssembly/Reference/SIMD/load_store/store8_lane)
  - : Speichert eine spezifizierte Lane einer `v128` `i8x16`-Wertinterpretation an einer angegebenen Speicheradresse.
- [`store16_lane`](/de/docs/WebAssembly/Reference/SIMD/load_store/store16_lane)
  - : Speichert eine spezifizierte Lane einer `v128` `i16x8`-Wertinterpretation an einer angegebenen Speicheradresse.
- [`store32_lane`](/de/docs/WebAssembly/Reference/SIMD/load_store/store32_lane)
  - : Speichert eine spezifizierte Lane einer `v128` `i32x4`-Wertinterpretation an einer angegebenen Speicheradresse.
- [`store64_lane`](/de/docs/WebAssembly/Reference/SIMD/load_store/store64_lane)
  - : Speichert eine spezifizierte Lane einer `v128` `i64x2`-Wertinterpretation an einer angegebenen Speicheradresse.
