---
title: "load64_splat: Wasm SIMD Lade-/Speicheranweisung"
short-title: load64_splat
slug: WebAssembly/Reference/SIMD/load_store/load64_splat
l10n:
  sourceCommit: 76b3f4216320b4ecdbc8b95028dc46aa67e1468e
---

Die **`load64_splat`** [SIMD Lade-/Speicheranweisung](/de/docs/WebAssembly/Reference/SIMD/load_store) lädt einen einzelnen Wert von einer gegebenen Speicheradresse in alle Lanes eines [`v128`](/de/docs/WebAssembly/Reference/Types/v128) Typs mit der `i64x2` Wertinterpretation.

{{InteractiveExample("Wat Demo: load64_splat", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i64)))
  (memory $memory 1)
  (data (i32.const 0) "\01\02\03\04\05\06\07\08\09\0a\0b\0c\0d\0e\0f\00\01\02\03")
  (func $main
    i32.const 1
    v128.load64_splat
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
v128.load64_splat

;; With optional immediate operands
v128.load64_splat mem_idx offset=int align=int
```

- `v128.load64_splat`
  - : Die `v128.load64_splat` Anweisung.
- `mem_idx` {{optional_inline}}
  - : Ein Ganzzahlwert, der den Speicherindex darstellt, in Fällen, in denen das Modul mehrere Speicher verwendet. Der Standardwert ist `0`.
- `offset=int` {{optional_inline}}
  - : Ein Ganzzahlwert, der eine konstante Anzahl von Bytes darstellt, die zur Speicheradresse addiert werden, bevor geladen wird. Der Standardwert ist `0`.
- `align=int` {{optional_inline}}
  - : Ein Ganzzahlwert, der der Wasm-Engine einen Hinweis darauf gibt, welche Ausrichtung für die endgültige Adresse erwartet wird. Der Mindestwert ist `1` und der Standard- und Höchstwert ist `8`. Ein `align`-Wert muss eine Potenz von `2` sein.

### Typ

```plain
[memory_address] -> [output]
```

- `memory_address`
  - : Ein Ganzzahlwert, der die Speicheradresse darstellt, von der geladen wird.
- `output`
  - : Die Ausgabe in der `v128` Typ `i64x2` Wertinterpretation.

### Binäre Kodierung

| Anweisung           | Binärformat                                   | Beispieltext => binär                                           |
| ------------------- | --------------------------------------------- | --------------------------------------------------------------- |
| `v128.load64_splat` | `0xFD 10:u32 mem_idx:u8 offset:u32 align:u32` | `v128.load64_splat 0 offset=0 align=8` => `0xfd 0x0a 0x03 0x00` |

> [!NOTE]
> Während das Wasm-Textformat den wörtlichen `align`-Wert spezifiziert, stellt das binäre Äquivalent den Exponenten der Formel `2^x` dar, die zur Berechnung der Ausrichtung verwendet wird. Beispielsweise entspricht `align=1` dem Wert `0x00` (`2^0`), während `align=8` dem Wert `0x03` (`2^3`) entspricht.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [SIMD Lade-/Speicheranweisungen](/de/docs/WebAssembly/Reference/SIMD/load_store)
