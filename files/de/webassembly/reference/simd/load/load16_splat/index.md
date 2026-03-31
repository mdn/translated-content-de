---
title: "load16_splat: Wasm SIMD-Ladeanweisung"
short-title: load16_splat
slug: WebAssembly/Reference/SIMD/load/load16_splat
l10n:
  sourceCommit: d3b22d8099235ad3a0ef2a494106fc2ea178863d
---

Die **`load16_splat`** [SIMD-Ladeanweisung](/de/docs/WebAssembly/Reference/SIMD/load) lädt einen einzelnen Wert von einer gegebenen Speicheradresse in alle Lanes eines [`v128`](/de/docs/WebAssembly/Reference/Types/v128) Typs `i16x8` Wertinterpretation.

{{InteractiveExample("Wat Demo: load16_splat", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i32)))
  (memory $memory 1)
  (data (i32.const 0) "\01\02\03\04\05\06\07\08\09\0a\0b\0c\0d\0e\0f\00\01\02\03")
  (func $main
    i32.const 1
    v128.load16_splat
    i16x8.extract_lane_s 6
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
v128.load16_splat

;; With optional immediates
v128.load16_splat memidx offset=int align=int
```

- `v128.load16_splat`
  - : Die `v128.load16_splat` Anweisung.
- `memidx` {{optional_inline}}
  - : Ein ganzzahliger Wert, der den Speicherindex darstellt, falls das Modul mehrere Speicher verwendet. Der Standardwert ist `0`.
- `offset=int` {{optional_inline}}
  - : Ein ganzzahliger Wert, der eine konstante Anzahl von Bytes darstellt, die zur Speicheradresse hinzugefügt werden, bevor geladen wird. Der Standardwert ist `0`.
- `align=int` {{optional_inline}}
  - : Ein ganzzahliger Wert, der der Wasm-Engine einen Hinweis darauf gibt, welche Ausrichtung für die endgültige Adresse erwartet wird. Der Mindestwert ist `1`, und der Standard- und Maximalwert ist `2`. Ein `align`-Wert muss eine Potenz von `2` sein.

### Typ

```plain
[memory_address] -> [output]
```

- `memory_address`
  - : Ein ganzzahliger Wert, der die Speicheradresse darstellt, von der geladen wird.
- `output`
  - : Die Ausgabe `v128` Typ `i16x8` Wertinterpretation.

### Binärcodierung

| Anweisung           | Binärformat                                 | Beispieltext => binär                                           |
| ------------------- | ------------------------------------------- | --------------------------------------------------------------- |
| `v128.load16_splat` | `0xFD 8:u32 memidx:u8 offset:u32 align:u32` | `v128.load16_splat 0 offset=0 align=2` => `0xfd 0x08 0x01 0x00` |

> [!NOTE]
> Während das Wasm-Textformat den wörtlichen `align`-Wert angibt, stellt das binäre Äquivalent den Exponenten der Formel `2^x` dar, die zur Berechnung der Ausrichtung verwendet wird. Zum Beispiel entspricht `align=1` `0x00` (`2^0`), während `align=2` `0x01` (`2^1`) entspricht.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [SIMD-Ladeanweisungen](/de/docs/WebAssembly/Reference/SIMD/load)
