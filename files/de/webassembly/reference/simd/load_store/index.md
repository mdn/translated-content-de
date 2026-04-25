---
title: WebAssembly SIMD Lade-/Speicheranweisungen
slug: WebAssembly/Reference/SIMD/load_store
l10n:
  sourceCommit: 76b3f4216320b4ecdbc8b95028dc46aa67e1468e
---

WebAssembly SIMD Lade-/Speicheranweisungen.

## Laden und Laden-Element

- [`load`](/de/docs/WebAssembly/Reference/SIMD/load_store/load)
  - : Lädt alle Lanes einer [`v128`](/de/docs/WebAssembly/Reference/Types/v128) Werteinterpretation mit Werten von einer gegebenen Speicheradresse.
- [`load8_lane`](/de/docs/WebAssembly/Reference/SIMD/load_store/load8_lane)
  - : Lädt einen einzelnen Wert von einer gegebenen Speicheradresse in die spezifizierte Lane einer `v128` `i8x16` Werteinterpretation.
- [`load16_lane`](/de/docs/WebAssembly/Reference/SIMD/load_store/load16_lane)
  - : Lädt einen einzelnen Wert von einer gegebenen Speicheradresse in die spezifizierte Lane einer `v128` `i16x8` Werteinterpretation.
- [`load32_lane`](/de/docs/WebAssembly/Reference/SIMD/load_store/load32_lane)
  - : Lädt einen einzelnen Wert von einer gegebenen Speicheradresse in die spezifizierte Lane einer `v128` `i32x4` Werteinterpretation.
- [`load64_lane`](/de/docs/WebAssembly/Reference/SIMD/load_store/load64_lane)
  - : Lädt einen einzelnen Wert von einer gegebenen Speicheradresse in die spezifizierte Lane einer `v128` `i64x2` Werteinterpretation.

## Laden und Erweitern

- [`load8x8_s`](/de/docs/WebAssembly/Reference/SIMD/load_store/load8x8_s)
  - : Lädt acht 8-Bit-Ganzzahlen von einer gegebenen Speicheradresse und erweitert jede davon vorzeichenbehaftet auf eine 16-Bit-Lane, wodurch eine `v128` `i16x8` Werteinterpretation ausgegeben wird.
- [`load8x8_u`](/de/docs/WebAssembly/Reference/SIMD/load_store/load8x8_u)
  - : Lädt acht 8-Bit-Ganzzahlen von einer gegebenen Speicheradresse und erweitert jede davon unverändert auf eine 16-Bit-Lane, wodurch eine `v128` `i16x8` Werteinterpretation ausgegeben wird.
- [`load16x4_s`](/de/docs/WebAssembly/Reference/SIMD/load_store/load16x4_s)
  - : Lädt vier 16-Bit-Ganzzahlen von einer gegebenen Speicheradresse und erweitert jede davon vorzeichenbehaftet auf eine 32-Bit-Lane, wodurch eine `v128` `i32x4` Werteinterpretation ausgegeben wird.
- [`load16x4_u`](/de/docs/WebAssembly/Reference/SIMD/load_store/load16x4_u)
  - : Lädt vier 16-Bit-Ganzzahlen von einer gegebenen Speicheradresse und erweitert jede davon unverändert auf eine 32-Bit-Lane, wodurch eine `v128` `i32x4` Werteinterpretation ausgegeben wird.
- [`load32x2_s`](/de/docs/WebAssembly/Reference/SIMD/load_store/load32x2_s)
  - : Lädt zwei 32-Bit-Ganzzahlen von einer gegebenen Speicheradresse und erweitert jede davon vorzeichenbehaftet auf eine 64-Bit-Lane, wodurch eine `v128` `i64x2` Werteinterpretation ausgegeben wird.
- [`load32x2_u`](/de/docs/WebAssembly/Reference/SIMD/load_store/load32x2_u)
  - : Lädt zwei 32-Bit-Ganzzahlen von einer gegebenen Speicheradresse und erweitert jede davon unverändert auf eine 64-Bit-Lane, wodurch eine `v128` `i64x2` Werteinterpretation ausgegeben wird.

## Laden und Duplizieren

- [`load8_splat`](/de/docs/WebAssembly/Reference/SIMD/load_store/load8_splat)
  - : Lädt einen einzelnen Wert von einer gegebenen Speicheradresse in alle Lanes einer `v128` `i8x16` Werteinterpretation.
- [`load16_splat`](/de/docs/WebAssembly/Reference/SIMD/load_store/load16_splat)
  - : Lädt einen einzelnen Wert von einer gegebenen Speicheradresse in alle Lanes einer `v128` `i16x8` Werteinterpretation.
- [`load32_splat`](/de/docs/WebAssembly/Reference/SIMD/load_store/load32_splat)
  - : Lädt einen einzelnen Wert von einer gegebenen Speicheradresse in alle Lanes einer `v128` `i32x4` Werteinterpretation.
- [`load64_splat`](/de/docs/WebAssembly/Reference/SIMD/load_store/load64_splat)
  - : Lädt einen einzelnen Wert von einer gegebenen Speicheradresse in alle Lanes einer `v128` `i64x2` Werteinterpretation.

## Laden und Nullauffüllen

- [`load32_zero`](/de/docs/WebAssembly/Reference/SIMD/load_store/load32_zero)
  - : Lädt einen einzelnen Wert von einer gegebenen Speicheradresse in die erste Lane einer `v128` `i32x4` Werteinterpretation und initialisiert die anderen Lanes mit `0`.
- [`load64_zero`](/de/docs/WebAssembly/Reference/SIMD/load_store/load64_zero)
  - : Lädt einen einzelnen Wert von einer gegebenen Speicheradresse in die erste Lane einer `v128` `i64x2` Werteinterpretation und initialisiert die andere Lane mit `0`.

## Speichern und Speicherelement

- [`store`](/de/docs/WebAssembly/Reference/SIMD/load_store/store)
  - : Speichert alle Lanes einer `v128` Werteinterpretation an einer gegebenen Speicheradresse.
- [`store8_lane`](/de/docs/WebAssembly/Reference/SIMD/load_store/store8_lane)
  - : Speichert eine spezifizierte Lane einer `v128` `i8x16` Werteinterpretation an einer gegebenen Speicheradresse.
- [`store16_lane`](/de/docs/WebAssembly/Reference/SIMD/load_store/store16_lane)
  - : Speichert eine spezifizierte Lane einer `v128` `i16x8` Werteinterpretation an einer gegebenen Speicheradresse.
- [`store32_lane`](/de/docs/WebAssembly/Reference/SIMD/load_store/store32_lane)
  - : Speichert eine spezifizierte Lane einer `v128` `i32x4` Werteinterpretation an einer gegebenen Speicheradresse.
- [`store64_lane`](/de/docs/WebAssembly/Reference/SIMD/load_store/store64_lane)
  - : Speichert eine spezifizierte Lane einer `v128` `i64x2` Werteinterpretation an einer gegebenen Speicheradresse.
