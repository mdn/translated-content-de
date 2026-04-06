---
title: "load32x2_u: Wasm SIMD Load-Instruktion"
short-title: load32x2_u
slug: WebAssembly/Reference/SIMD/load/load32x2_u
l10n:
  sourceCommit: 09d8ff096be97b28ea415fc4c68fb1cff0ff8af9
---

Die **`load32x2_u`** [SIMD Load-Instruktion](/de/docs/WebAssembly/Reference/SIMD/load) lädt zwei 32-Bit-Integer von einer gegebenen Speicheradresse und erweitert jeden auf null auf eine 64-Bit-Spur, wodurch eine [`v128`](/de/docs/WebAssembly/Reference/Types/v128) Typ `i64x2` Werteinterpretation ausgegeben wird.

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
  - : Die `v128.load32x2_u` Instruktion.
- `mem_idx` {{optional_inline}}
  - : Ein Integer, der den Speicherindex darstellt, in Fällen, in denen das Modul mehrere Speicher verwendet. Der Standardwert ist `0`.
- `offset=int` {{optional_inline}}
  - : Ein Integer, der eine konstante Anzahl an Bytes darstellt, die zur Speicheradresse hinzugefügt wird, bevor geladen wird. Der Standardwert ist `0`.
- `align=int` {{optional_inline}}
  - : Ein Integer, der eine Hinweise an die Wasm-Engine gibt, welche Ausrichtung für die endgültige Adresse erwartet wird. Der Mindestwert ist `1` und der Standard- und Höchstwert ist `8`. Ein `align`-Wert muss eine Potenz von `2` sein.

### Typ

```plain
[memory_address] -> [output]
```

- `memory_address`
  - : Ein Integer, der die Speicheradresse darstellt, von der geladen wird.
- `output`
  - : Die Ausgabe `v128` Typ `i64x2` Werteinterpretation.

### Binäre Kodierung

| Instruktion       | Binärformat                                  | Beispiel Text => Binär                                        |
| ----------------- | -------------------------------------------- | ------------------------------------------------------------- |
| `v128.load32x2_u` | `0xFD 6:u32 mem_idx:u8 offset:u32 align:u32` | `v128.load32x2_u 0 offset=0 align=8` => `0xfd 0x06 0x03 0x00` |

> [!NOTE]
> Während das Wasm-Textformat den wörtlichen `align`-Wert spezifiziert, stellt das Binäräquivalent den Exponenten der Formel `2^x` dar, die zur Berechnung der Ausrichtung verwendet wird. Zum Beispiel ist `align=1` äquivalent zu `0x00` (`2^0`), während `align=8` äquivalent zu `0x03` (`2^3`) ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [SIMD Load-Instruktionen](/de/docs/WebAssembly/Reference/SIMD/load)
