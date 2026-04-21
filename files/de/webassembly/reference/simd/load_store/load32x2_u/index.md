---
title: "load32x2_u: Wasm SIMD-Lade-/Speicheranweisung"
short-title: load32x2_u
slug: WebAssembly/Reference/SIMD/load_store/load32x2_u
l10n:
  sourceCommit: 76b3f4216320b4ecdbc8b95028dc46aa67e1468e
---

Die **`load32x2_u`** [SIMD-Lade-/Speicheranweisung](/de/docs/WebAssembly/Reference/SIMD/load_store) lädt zwei 32-Bit-Ganzzahlen von einer gegebenen Speicheradresse und erweitert jede auf null auf eine 64-Bit-Lane, wobei eine [`v128`](/de/docs/WebAssembly/Reference/Types/v128)-Typ `i64x2`-Wertinterpretation ausgegeben wird.

{{InteractiveExample("Wat Demo: load32x2_u", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i64)))
  (memory $memory 1)
  (data (i32.const 0) "\01\02\03\04\05\06\07\08\09\0a\0b\0c\0d\0e\0f\00\01\02\03")
  (func $main
    i32.const 0
    v128.load32x2_u
    i64x2.extract_lane 1
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
v128.load32x2_u

;; With optional immediate operands
v128.load32x2_u mem_idx offset=int align=int
```

- `v128.load32x2_u`
  - : Die `v128.load32x2_u`-Anweisung.
- `mem_idx` {{optional_inline}}
  - : Ein ganzzahliger Wert, der den Speicherindex darstellt, in Fällen, in denen das Modul mehrere Speicher verwendet. Der Standardwert ist `0`.
- `offset=int` {{optional_inline}}
  - : Ein ganzzahliger Wert, der eine konstante Anzahl von Bytes darstellt, die zur Speicheradresse hinzugefügt werden, bevor geladen wird. Der Standardwert ist `0`.
- `align=int` {{optional_inline}}
  - : Ein ganzzahliger Wert, der der Wasm-Engine einen Hinweis darauf gibt, welche Ausrichtung für die endgültige Adresse erwartet wird. Der Mindestwert ist `1` und der Standard- und Höchstwert ist `8`. Ein `align`-Wert muss eine Potenz von `2` sein.

### Typ

```plain
[memory_address] -> [output]
```

- `memory_address`
  - : Ein ganzzahliger Wert, der die Speicheradresse darstellt, von der geladen wird.
- `output`
  - : Die Ausgabe ist eine `v128`-Typ `i64x2`-Wertinterpretation.

### Binärcodierung

| Anweisung         | Binärformat                                  | Beispieltext => binär                                         |
| ----------------- | -------------------------------------------- | ------------------------------------------------------------- |
| `v128.load32x2_u` | `0xFD 6:u32 mem_idx:u8 offset:u32 align:u32` | `v128.load32x2_u 0 offset=0 align=8` => `0xfd 0x06 0x03 0x00` |

> [!NOTE]
> Während das Wasm-Textformat den wörtlichen `align`-Wert angibt, repräsentiert das Binäräquivalent den Exponenten der Formel `2^x`, die zur Berechnung der Ausrichtung verwendet wird. Zum Beispiel ist `align=1` äquivalent zu `0x00` (`2^0`), während `align=8` äquivalent zu `0x03` (`2^3`) ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [SIMD-Lade-/Speicheranweisungen](/de/docs/WebAssembly/Reference/SIMD/load_store)
