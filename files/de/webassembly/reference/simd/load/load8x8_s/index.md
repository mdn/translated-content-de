---
title: "load8x8_s: Wasm SIMD Ladeinstruktion"
short-title: load8x8_s
slug: WebAssembly/Reference/SIMD/load/load8x8_s
l10n:
  sourceCommit: 09d8ff096be97b28ea415fc4c68fb1cff0ff8af9
---

Die **`load8x8_s`** [SIMD Ladeinstruktion](/de/docs/WebAssembly/Reference/SIMD/load) lädt acht 8-Bit-Ganzzahlen von einer gegebenen Speicheradresse und erweitert jede von ihnen vorzeichenbehaftet auf eine 16-Bit-Spur, was eine [`v128`](/de/docs/WebAssembly/Reference/Types/v128) Typ `i16x8` Wertinterpretation ausgibt.

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

;; With optional immediate operands
v128.load8x8_s mem_idx offset=int align=int
```

- `v128.load8x8_s`
  - : Die `v128.load8x8_s` Instruktion.
- `mem_idx` {{optional_inline}}
  - : Ein Ganzzahlwert, der den Speicherindex darstellt, in Fällen, in denen das Modul mehrere Speicher verwendet. Der Standardwert ist `0`.
- `offset=int` {{optional_inline}}
  - : Ein Ganzzahlwert, der eine konstante Anzahl von Bytes darstellt, die zur Speicheradresse addiert werden, bevor geladen wird. Der Standardwert ist `0`.
- `align=int` {{optional_inline}}
  - : Ein Ganzzahlwert, der der Wasm-Engine einen Hinweis darauf gibt, welche Ausrichtung für die finale Adresse zu erwarten ist. Der Mindestwert ist `1`, der Standard- und Höchstwert ist `8`. Ein `align`-Wert muss eine Potenz von `2` sein.

### Typ

```plain
[memory_address] -> [output]
```

- `memory_address`
  - : Ein Ganzzahlwert, der die Speicheradresse darstellt, von der geladen werden soll.
- `output`
  - : Die Ausgabe `v128` Typ `i16x8` Wertinterpretation.

### Binäre Kodierung

| Instruktion      | Binärformat                                  | Beispieltext => binär                                        |
| ---------------- | -------------------------------------------- | ------------------------------------------------------------ |
| `v128.load8x8_s` | `0xFD 1:u32 mem_idx:u8 offset:u32 align:u32` | `v128.load8x8_s 0 offset=0 align=2` => `0xfd 0x01 0x01 0x00` |

> [!NOTE]
> Während das Wasm-Textformat den literal `align` Wert angibt, stellt das binäre Äquivalent den Exponenten der Formel `2^x` dar, der zur Berechnung der Ausrichtung verwendet wird. Also ist zum Beispiel `align=1` gleichbedeutend mit `0x00` (`2^0`), während `align=8` gleichbedeutend mit `0x03` (`2^3`) ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [SIMD Ladeinstruktionen](/de/docs/WebAssembly/Reference/SIMD/load)
