---
title: "load8x8_s: Wasm SIMD Ladeanweisung"
short-title: load8x8_s
slug: WebAssembly/Reference/SIMD/load/load8x8_s
l10n:
  sourceCommit: d3b22d8099235ad3a0ef2a494106fc2ea178863d
---

Die **`load8x8_s`** [SIMD Ladeanweisung](/de/docs/WebAssembly/Reference/SIMD/load) lädt acht 8-Bit-Integer von einer angegebenen Speicheradresse und erweitert jedes Zeichen auf einen 16-Bit-Lane, was eine [`v128`](/de/docs/WebAssembly/Reference/Types/v128) Typ `i16x8` Werteininterpretation ausgibt.

{{InteractiveExample("Wat Demo: load8x8_s", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i32)))
  (memory $memory 1)
  (data (i32.const 0) "\01\02\03\04\05\06\07\08\09\0a\0b\0c\0d\0e\0f\00\01\02\03")
  (func $main
    i32.const 0
    v128.load8x8_s
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
v128.load8x8_s

;; With optional immediates
v128.load8x8_s memidx offset=int align=int
```

- `v128.load8x8_s`
  - : Die `v128.load8x8_s` Anweisung.
- `memidx` {{optional_inline}}
  - : Ein Integer, der den Speicherindex darstellt, in Fällen, in denen das Modul mehrere Speicher verwendet. Der Standardwert ist `0`.
- `offset=int` {{optional_inline}}
  - : Ein Integer, der eine konstante Anzahl von Bytes darstellt, die zur Speicheradresse hinzugefügt werden, bevor geladen wird. Der Standardwert ist `0`.
- `align=int` {{optional_inline}}
  - : Ein Integer, der der Wasm-Engine einen Hinweis darüber gibt, welche Ausrichtung für die finale Adresse zu erwarten ist. Der Mindestwert ist `1`, der Standard- und Maximalwert ist `8`. Ein `align` Wert muss eine Potenz von `2` sein.

### Typ

```plain
[memory_address] -> [output]
```

- `memory_address`
  - : Ein Integer, der die Speicheradresse darstellt, von der geladen wird.
- `output`
  - : Die Ausgabe `v128` Typ `i16x8` Werteininterpretation.

### Binärkodierung

| Anweisung        | Binärformat                                 | Beispieltext => binär                                        |
| ---------------- | ------------------------------------------- | ------------------------------------------------------------ |
| `v128.load8x8_s` | `0xFD 1:u32 memidx:u8 offset:u32 align:u32` | `v128.load8x8_s 0 offset=0 align=2` => `0xfd 0x01 0x01 0x00` |

> [!NOTE]
> Während das Wasm-Textformat den buchstäblichen `align` Wert angibt, stellt das binäre Äquivalent den Exponenten der Formel `2^x` dar, die zur Berechnung der Ausrichtung verwendet wird. Zum Beispiel ist `align=1` gleichwertig mit `0x00` (`2^0`), während `align=8` gleichwertig mit `0x03` (`2^3`) ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [SIMD Ladeanweisungen](/de/docs/WebAssembly/Reference/SIMD/load)
