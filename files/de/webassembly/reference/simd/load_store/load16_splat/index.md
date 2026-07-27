---
title: "load16_splat: Wasm SIMD Lade-/Speicheranweisung"
short-title: load16_splat
slug: WebAssembly/Reference/SIMD/load_store/load16_splat
l10n:
  sourceCommit: d8d43055ac49fc512539fe02d873be4ffee29bc0
---

Die **`load16_splat`** [SIMD Lade-/Speicheranweisung](/de/docs/WebAssembly/Reference/SIMD/load_store) lädt einen einzelnen Wert von einer gegebenen Speicheradresse in alle Lanes eines [`v128`](/de/docs/WebAssembly/Reference/Value_types/v128) Typs mit der `i16x8` Wertinterpretation.

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

;; With optional immediate operands
v128.load16_splat mem_idx offset=int align=int
```

- `v128.load16_splat`
  - : Die `v128.load16_splat`-Anweisung.
- `mem_idx` {{optional_inline}}
  - : Ein ganzzahliger Wert, der den Speicherindex darstellt, falls das Modul mehrere Speicher verwendet. Der Standardwert ist `0`.
- `offset=int` {{optional_inline}}
  - : Ein ganzzahliger Wert, der eine konstante Anzahl von Bytes repräsentiert, die zur Speicheradresse hinzugefügt werden, bevor geladen wird. Der Standardwert ist `0`.
- `align=int` {{optional_inline}}
  - : Ein ganzzahliger Wert, der der Wasm-Engine einen Hinweis auf die erwartete Ausrichtung der endgültigen Adresse gibt. Der Mindestwert ist `1` und der Standard- und Höchstwert ist `2`. Ein `align`-Wert muss eine Potenz von `2` sein.

### Typ

```plain
[memory_address] -> [output]
```

- `memory_address`
  - : Eine Ganzzahl, die die zu ladende Speicheradresse darstellt.
- `output`
  - : Die Ausgabe `v128` Typ `i16x8` Wertinterpretation.

### Binäre Kodierung

| Anweisung           | Binärformat                                  | Beispieltext => Binär                                           |
| ------------------- | -------------------------------------------- | --------------------------------------------------------------- |
| `v128.load16_splat` | `0xFD 8:u32 mem_idx:u8 offset:u32 align:u32` | `v128.load16_splat 0 offset=0 align=2` => `0xfd 0x08 0x01 0x00` |

> [!NOTE]
> Während im Wasm-Textformat der wörtliche `align`-Wert festgelegt ist, repräsentiert das binäre Äquivalent den Exponenten der Formel `2^x`, der zur Berechnung der Ausrichtung verwendet wird. Zum Beispiel ist `align=1` gleichwertig zu `0x00` (`2^0`), während `align=2` gleichwertig zu `0x01` (`2^1`) ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
