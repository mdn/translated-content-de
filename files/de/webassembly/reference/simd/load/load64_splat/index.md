---
title: "load64_splat: Wasm SIMD Ladeanweisung"
short-title: load64_splat
slug: WebAssembly/Reference/SIMD/load/load64_splat
l10n:
  sourceCommit: 09d8ff096be97b28ea415fc4c68fb1cff0ff8af9
---

Die **`load64_splat`** [SIMD Ladeanweisung](/de/docs/WebAssembly/Reference/SIMD/load) lädt einen einzelnen Wert von einer angegebenen Speicheradresse in alle Lanes eines [`v128`](/de/docs/WebAssembly/Reference/Types/v128) Typs `i64x2` Wertinterpretation.

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
  - : Ein Integer, der den Speicherindex darstellt, in Fällen, in denen das Modul mehrere Speicher verwendet. Der Standardwert ist `0`.
- `offset=int` {{optional_inline}}
  - : Ein Integer, der eine konstante Anzahl von Bytes darstellt, die vor dem Laden zur Speicheradresse hinzugefügt werden soll. Der Standardwert ist `0`.
- `align=int` {{optional_inline}}
  - : Ein Integer, der der Wasm-Engine einen Hinweis darauf gibt, welche Ausrichtung für die endgültige Adresse erwartet wird. Der Mindestwert ist `1` und der Standard- sowie Maximalwert ist `8`. Ein `align` Wert muss eine Potenz von `2` sein.

### Typ

```plain
[memory_address] -> [output]
```

- `memory_address`
  - : Ein Integer, der die Speicheradresse darstellt, von der geladen werden soll.
- `output`
  - : Die Ausgabe `v128` Typ `i64x2` Wertinterpretation.

### Binärcodierung

| Anweisung           | Binärformat                                   | Textbeispiel => binär                                           |
| ------------------- | --------------------------------------------- | --------------------------------------------------------------- |
| `v128.load64_splat` | `0xFD 10:u32 mem_idx:u8 offset:u32 align:u32` | `v128.load64_splat 0 offset=0 align=8` => `0xfd 0x0a 0x03 0x00` |

> [!NOTE]
> Während das Wasm-Textformat den literalen `align` Wert angibt, stellt das binäre Äquivalent den Exponenten der Formel `2^x` dar, der zur Berechnung der Ausrichtung verwendet wird. So ist zum Beispiel `align=1` äquivalent zu `0x00` (`2^0`), während `align=8` äquivalent zu `0x03` (`2^3`) ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [SIMD Ladeanweisungen](/de/docs/WebAssembly/Reference/SIMD/load)
