---
title: "load8_splat: Wasm SIMD Load/Store-Anweisung"
short-title: load8_splat
slug: WebAssembly/Reference/SIMD/load_store/load8_splat
l10n:
  sourceCommit: ca1301872404bbc0305fa945cf3e3fb2351863bf
---

Die **`load8_splat`** [SIMD Load/Store-Anweisung](/de/docs/WebAssembly/Reference/SIMD/load_store) lädt einen einzelnen Wert von einer angegebenen Speicheradresse in alle Lanes eines `v128`-Typs der `i8x16`-Wertinterpretation.

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

;; With optional immediate operands
v128.load8_splat mem_idx offset=int align=int
```

- `v128.load8_splat`
  - : Die `v128.load8_splat`-Anweisung.
- `mem_idx` {{optional_inline}}
  - : Ein Integer, der den Speicherindex darstellt, in Fällen, in denen das Modul mehrere Speicher verwendet. Der Standardwert ist `0`.
- `offset=int` {{optional_inline}}
  - : Ein Integer, der eine konstante Anzahl von Bytes darstellt, die zur Speicheradresse hinzugefügt werden, bevor der Ladevorgang stattfindet. Der Standardwert ist `0`.
- `align=int` {{optional_inline}}
  - : Ein Integer, der dem Wasm-Engine einen Hinweis darauf gibt, welche Ausrichtung für die finale Adresse erwartet wird. Der Mindest-, Standard- und Maximalwert ist `1`.

### Typ

```plain
[memory_address] -> [output]
```

- `memory_address`
  - : Ein Integer, der die Speicheradresse darstellt, von der geladen wird.
- `output`
  - : Die Ausgabe `v128`-Typ `i8x16`-Wertinterpretation.

### Binäre Codierung

| Anweisung          | Binärformat                                  | Beispieltext => binär                                          |
| ------------------ | -------------------------------------------- | -------------------------------------------------------------- |
| `v128.load8_splat` | `0xFD 7:u32 mem_idx:u8 offset:u32 align:u32` | `v128.load8_splat 0 offset=0 align=1` => `0xfd 0x07 0x00 0x00` |

> [!NOTE]
> Während das Wasm-Textformat den literalen `align`-Wert spezifiziert, stellt das binäre Äquivalent den Exponenten der Formel `2^x` dar, die zur Berechnung der Ausrichtung verwendet wird. Also ist `align=1` äquivalent zu `0x00` (`2^0`).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [SIMD Load/Store-Anweisungen](/de/docs/WebAssembly/Reference/SIMD/load_store)
