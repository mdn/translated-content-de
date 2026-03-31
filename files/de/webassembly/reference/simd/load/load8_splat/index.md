---
title: "load8_splat: Wasm SIMD-Ladebefehl"
short-title: load8_splat
slug: WebAssembly/Reference/SIMD/load/load8_splat
l10n:
  sourceCommit: d3b22d8099235ad3a0ef2a494106fc2ea178863d
---

Der **`load8_splat`** [SIMD-Ladebefehl](/de/docs/WebAssembly/Reference/SIMD/load) lädt einen einzelnen Wert von einer angegebenen Speicheradresse in alle Lanes eines `i8x16`-Wertinterpretationstyps vom Typ [`v128`](/de/docs/WebAssembly/Reference/Types/v128).

{{InteractiveExample("Wat Demo: load8_splat", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i32)))
  (memory $memory 1)
  (data (i32.const 0) "\01\02\03\04\05\06\07\08\09\0a\0b\0c\0d\0e\0f\00\01\02\03")
  (func $main
    i32.const 1
    v128.load8_splat
    i8x16.extract_lane_s 15
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
v128.load8_splat

;; With optional immediates
v128.load8_splat memidx offset=int align=int
```

- `v128.load8_splat`
  - : Der `v128.load8_splat`-Befehl.
- `memidx` {{optional_inline}}
  - : Eine Ganzzahl, die den Speicherindex repräsentiert, in Fällen, in denen das Modul mehrere Speicher verwendet. Der Standardwert ist `0`.
- `offset=int` {{optional_inline}}
  - : Eine Ganzzahl, die eine konstante Anzahl von Bytes angibt, die zur Speicheradresse hinzugerechnet werden, bevor geladen wird. Der Standardwert ist `0`.
- `align=int` {{optional_inline}}
  - : Eine Ganzzahl, die dem Wasm-Engine einen Hinweis darauf gibt, welche Ausrichtung für die finale Adresse erwartet wird. Der Mindestwert, Standardwert und Höchstwert ist `1`.

### Typ

```plain
[memory_address] -> [output]
```

- `memory_address`
  - : Eine Ganzzahl, die die Speicheradresse darstellt, von der geladen werden soll.
- `output`
  - : Die Ausgabe vom Typ `v128` in der `i8x16`-Wertinterpretation.

### Binäre Kodierung

| Befehl             | Binärformat                                 | Beispiel Text => binär                                         |
| ------------------ | ------------------------------------------- | -------------------------------------------------------------- |
| `v128.load8_splat` | `0xFD 7:u32 memidx:u8 offset:u32 align:u32` | `v128.load8_splat 0 offset=0 align=1` => `0xfd 0x07 0x00 0x00` |

> [!NOTE]
> Während das Wasm-Textformat den literalen `align`-Wert angibt, repräsentiert das binäre Äquivalent den Exponenten der Formel `2^x`, die zur Berechnung der Ausrichtung verwendet wird. Also ist `align=1` äquivalent zu `0x00` (`2^0`).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [SIMD-Ladebefehle](/de/docs/WebAssembly/Reference/SIMD/load)
