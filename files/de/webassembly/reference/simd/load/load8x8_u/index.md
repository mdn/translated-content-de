---
title: "load8x8_u: Wasm SIMD Ladebefehl"
short-title: load8x8_u
slug: WebAssembly/Reference/SIMD/load/load8x8_u
l10n:
  sourceCommit: 09d8ff096be97b28ea415fc4c68fb1cff0ff8af9
---

Der **`load8x8_u`** [SIMD Ladebefehl](/de/docs/WebAssembly/Reference/SIMD/load) lädt acht 8-Bit-Integer von einer gegebenen Speicheradresse und erweitert jede auf eine 16-Bit-Spur, wobei ein [`v128`](/de/docs/WebAssembly/Reference/Types/v128) Typ `i16x8` Wertinterpretation ausgegeben wird.

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

;; With optional immediate operands
v128.load8x8_u mem_idx offset=int align=int
```

- `v128.load8x8_u`
  - : Der `v128.load8x8_u`-Befehl.
- `mem_idx` {{optional_inline}}
  - : Ein Ganzzahlwert, der den Speicherindex darstellt, in Fällen, in denen das Modul mehrere Speicher verwendet. Der Standardwert ist `0`.
- `offset=int` {{optional_inline}}
  - : Eine Ganzzahl, die eine konstante Anzahl von Bytes darstellt, die zur Speicheradresse hinzugefügt werden, bevor geladen wird. Der Standardwert ist `0`.
- `align=int` {{optional_inline}}
  - : Eine Ganzzahl, die der Wasm-Engine einen Hinweis gibt, welche Ausrichtung für die endgültige Adresse erwartet wird. Der Mindestwert ist `1` und der Standard- und Höchstwert ist `8`. Ein `align`-Wert muss eine Potenz von `2` sein.

### Typ

```plain
[memory_address] -> [output]
```

- `memory_address`
  - : Eine Ganzzahl, die die Speicheradresse darstellt, von der geladen wird.
- `output`
  - : Die Ausgabe `v128` Typ `i16x8` Wertinterpretation.

### Binärcodierung

| Anweisung        | Binärformat                                  | Beispieltext => binär                                        |
| ---------------- | -------------------------------------------- | ------------------------------------------------------------ |
| `v128.load8x8_u` | `0xFD 2:u32 mem_idx:u8 offset:u32 align:u32` | `v128.load8x8_u 0 offset=0 align=2` => `0xfd 0x02 0x01 0x00` |

> [!NOTE]
> Während das Wasm-Textformat den Wert von `align` wörtlich angibt, repräsentiert das binäre Äquivalent den Exponenten der Formel `2^x`, die zur Berechnung der Ausrichtung verwendet wird. Zum Beispiel ist `align=1` gleichwertig zu `0x00` (`2^0`), während `align=8` gleichwertig zu `0x03` (`2^3`) ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [SIMD Ladebefehle](/de/docs/WebAssembly/Reference/SIMD/load)
