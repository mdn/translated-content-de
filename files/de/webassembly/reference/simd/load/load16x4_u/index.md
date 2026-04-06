---
title: "load16x4_u: Wasm SIMD Ladebefehl"
short-title: load16x4_u
slug: WebAssembly/Reference/SIMD/load/load16x4_u
l10n:
  sourceCommit: 09d8ff096be97b28ea415fc4c68fb1cff0ff8af9
---

Der **`load16x4_u`** [SIMD Ladebefehl](/de/docs/WebAssembly/Reference/SIMD/load) lädt vier 16-Bit-Ganzzahlen von einer gegebenen Speicheradresse und erweitert jede auf einen 32-Bit-Bereich, was eine [`v128`](/de/docs/WebAssembly/Reference/Types/v128) Typ `i32x4` Wertinterpretation ausgibt.

{{InteractiveExample("Wat Demo: load16x4_u", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i32)))
  (memory $memory 1)
  (data (i32.const 0) "\01\02\03\04\05\06\07\08\09\0a\0b\0c\0d\0e\0f\00\01\02\03")
  (func $main
    i32.const 0
    v128.load16x4_u
    i32x4.extract_lane 3
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
v128.load16x4_u

;; With optional immediate operands
v128.load16x4_u mem_idx offset=int align=int
```

- `v128.load16x4_u`
  - : Der `v128.load16x4_u` Befehl.
- `mem_idx` {{optional_inline}}
  - : Ein ganzzahliger Wert, der den Speicherindex darstellt, in Fällen, in denen das Modul mehrere Speicher verwendet. Der Standardwert ist `0`.
- `offset=int` {{optional_inline}}
  - : Ein ganzzahliger Wert, der eine konstante Anzahl von Bytes darstellt, die zur Speicheradresse hinzugefügt werden, bevor geladen wird. Der Standardwert ist `0`.
- `align=int` {{optional_inline}}
  - : Ein ganzzahliger Wert, der der Wasm-Engine einen Hinweis darauf gibt, welche Ausrichtung für die endgültige Adresse zu erwarten ist. Der Mindestwert ist `1` und der Standard- sowie Höchstwert ist `8`. Ein `align`-Wert muss eine Potenz von `2` sein.

### Typ

```plain
[memory_address] -> [output]
```

- `memory_address`
  - : Ein ganzzahliger Wert, der die Speicheradresse darstellt, von der geladen wird.
- `output`
  - : Die Ausgabe als `v128` Typ `i32x4` Wertinterpretation.

### Binäre Kodierung

| Befehl            | Binärformat                                  | Beispieltext => binär                                         |
| ----------------- | -------------------------------------------- | ------------------------------------------------------------- |
| `v128.load16x4_u` | `0xFD 4:u32 mem_idx:u8 offset:u32 align:u32` | `v128.load16x4_u 0 offset=0 align=4` => `0xfd 0x04 0x00 0x00` |

> [!NOTE]
> Während das Wasm-Textformat den wörtlichen `align`-Wert spezifiziert, repräsentiert das binäre Äquivalent den Exponenten der Formel `2^x`, die zur Berechnung der Ausrichtung verwendet wird. Zum Beispiel ist `align=1` gleichbedeutend mit `0x00` (`2^0`), während `align=8` gleichbedeutend mit `0x03` (`2^3`) ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [SIMD Ladebefehle](/de/docs/WebAssembly/Reference/SIMD/load)
