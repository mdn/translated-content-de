---
title: "load8x8_u: Wasm SIMD-Ladeanweisung"
short-title: load8x8_u
slug: WebAssembly/Reference/SIMD/load/load8x8_u
l10n:
  sourceCommit: d3b22d8099235ad3a0ef2a494106fc2ea178863d
---

Die **`load8x8_u`** [SIMD-Ladeanweisung](/de/docs/WebAssembly/Reference/SIMD/load) lädt acht 8-Bit-Ganzzahlen von einer angegebenen Speicheradresse und erweitert jede auf null auf eine 16-Bit-Spur, was in einer [`v128`](/de/docs/WebAssembly/Reference/Types/v128)-Typ-`i16x8`-Wertinterpretation resultiert.

{{InteractiveExample("Wat Demo: load8x8_u", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i32)))
  (memory $memory 1)
  (data (i32.const 0) "\01\02\03\04\05\06\07\08\09\0a\0b\0c\0d\0e\0f\00\01\02\03")
  (func $main
    i32.const 0
    v128.load8x8_u
    i16x8.extract_lane_s 7
    call $log
  )
  (start $main)
)
```

```js interactive-example
WebAssembly.instantiateStreaming(fetch("{%wasm-url%}"), { console });
```

## Syntax

```plain
;; Common usage
v128.load8x8_u

;; With optional immediates
v128.load8x8_u memidx offset=int align=int
```

- `v128.load8x8_u`
  - : Die `v128.load8x8_u` Anweisung.
- `memidx` {{optional_inline}}
  - : Eine ganze Zahl, die den Speicherindex darstellt, in Fällen, in denen das Modul mehrere Speicher verwendet. Der Standardwert ist `0`.
- `offset=int` {{optional_inline}}
  - : Eine ganze Zahl, die eine konstante Anzahl von Bytes repräsentiert, die vor dem Laden zur Speicheradresse hinzugefügt werden. Der Standardwert ist `0`.
- `align=int` {{optional_inline}}
  - : Eine ganze Zahl, die einen Hinweis an die Wasm-Engine darüber gibt, welche Ausrichtung für die endgültige Adresse erwartet werden kann. Der Mindestwert ist `1`, der Standard- und Höchstwert ist `8`. Ein `align`-Wert muss eine Potenz von `2` sein.

### Typ

```plain
[memory_address] -> [output]
```

- `memory_address`
  - : Eine ganze Zahl, die die Speicheradresse darstellt, von der geladen werden soll.
- `output`
  - : Die Ausgabe `v128` Typ `i16x8` Wertinterpretation.

### Binärcodierung

| Anweisung        | Binärformat                                 | Beispieltext => Binär                                        |
| ---------------- | ------------------------------------------- | ------------------------------------------------------------ |
| `v128.load8x8_u` | `0xFD 2:u32 memidx:u8 offset:u32 align:u32` | `v128.load8x8_u 0 offset=0 align=2` => `0xfd 0x02 0x01 0x00` |

> [!NOTE]
> Während das Wasm-Textformat den literal `align`-Wert angibt, stellt das Binäräquivalent den Exponenten der Formel `2^x` dar, die zur Berechnung der Ausrichtung verwendet wird. Beispielsweise ist `align=1` gleichbedeutend mit `0x00` (`2^0`), während `align=8` gleichbedeutend mit `0x03` (`2^3`) ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [SIMD-Ladeanweisungen](/de/docs/WebAssembly/Reference/SIMD/load)
