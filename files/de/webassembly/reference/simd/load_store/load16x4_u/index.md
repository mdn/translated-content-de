---
title: "load16x4_u: Wasm SIMD Lade-/Speicherinstruktion"
short-title: load16x4_u
slug: WebAssembly/Reference/SIMD/load_store/load16x4_u
l10n:
  sourceCommit: ca1301872404bbc0305fa945cf3e3fb2351863bf
---

Die **`load16x4_u`** [SIMD Lade-/Speicherinstruktion](/de/docs/WebAssembly/Reference/SIMD/load_store) lädt vier 16-Bit-Ganzzahlen von einer bestimmten Speicheradresse und erweitert jede auf 32-Bit-Lanes, wobei eine [`v128`](/de/docs/WebAssembly/Reference/Value_types/v128) Typ `i32x4` Wertinterpretation ausgegeben wird.

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
  - : Die `v128.load16x4_u` Instruktion.
- `mem_idx` {{optional_inline}}
  - : Ein ganzzahliger Wert, der den Speicherindex darstellt, in Fällen, in denen das Modul mehrere Speicher verwendet. Der Standardwert ist `0`.
- `offset=int` {{optional_inline}}
  - : Ein ganzzahliger Wert, der eine konstante Anzahl von Bytes darstellt, die der Speicheradresse vor dem Laden hinzugefügt werden. Der Standardwert ist `0`.
- `align=int` {{optional_inline}}
  - : Ein ganzzahliger Wert, der der Wasm-Engine einen Hinweis gibt, welche Ausrichtung für die endgültige Adresse erwartet wird. Der Mindestwert ist `1` und der Standard- sowie Maximalwert ist `8`. Ein `align`-Wert muss eine Potenz von `2` sein.

### Typ

```plain
[memory_address] -> [output]
```

- `memory_address`
  - : Ein ganzzahliger Wert, der die Speicheradresse darstellt, von der geladen wird.
- `output`
  - : Die Ausgabe `v128` Typ `i32x4` Wertinterpretation.

### Binärcodierung

| Instruktion       | Binärformat                                  | Beispieltext => binär                                         |
| ----------------- | -------------------------------------------- | ------------------------------------------------------------- |
| `v128.load16x4_u` | `0xFD 4:u32 mem_idx:u8 offset:u32 align:u32` | `v128.load16x4_u 0 offset=0 align=4` => `0xfd 0x04 0x00 0x00` |

> [!NOTE]
> Während das Wasm-Textformat den wörtlichen `align`-Wert angibt, stellt das binäre Äquivalent den Exponenten der Formel `2^x` dar, die zur Berechnung der Ausrichtung verwendet wird. Zum Beispiel ist `align=1` gleichwertig mit `0x00` (`2^0`), während `align=8` gleichwertig mit `0x03` (`2^3`) ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [SIMD Lade-/Speicherinstruktionen](/de/docs/WebAssembly/Reference/SIMD/load_store)
