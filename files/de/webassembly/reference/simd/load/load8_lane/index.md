---
title: "load8_lane: Wasm SIMD-Ladeanweisung"
short-title: load8_lane
slug: WebAssembly/Reference/SIMD/load/load8_lane
l10n:
  sourceCommit: 09d8ff096be97b28ea415fc4c68fb1cff0ff8af9
---

Die **`load8_lane`** [SIMD Ladeanweisung](/de/docs/WebAssembly/Reference/SIMD/load) lädt einen einzelnen Wert von einer angegebenen Speicheradresse in die spezifizierte Spur eines [`v128`](/de/docs/WebAssembly/Reference/Types/v128) Typs `i8x16` Werteinterpretation.

{{InteractiveExample("Wat Demo: load8_lane", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i32)))
  (memory $memory 1)
  (data (i32.const 0) "\01\02\03\04\05\06\07\08\09\0a\0b\0c\0d\0e\0f\00\01\02\03")
  (func $main
    i32.const 0
    v128.const i8x16 10 4 6 5 8 7 11 3 8 12 9 7 2 31 9 1
    v128.load8_lane 9
    i8x16.extract_lane_s 9
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
v128.load8_lane lane_value

;; With optional immediate operands
v128.load8_lane mem_idx offset=int align=int lane_value
```

- `v128.load8_lane`
  - : Die `v128.load8_lane` Anweisung.
- `mem_idx` {{optional_inline}}
  - : Ein ganzzahliger Wert, der den Speicherindex darstellt, in Fällen, in denen das Modul mehrere Speicher verwendet. Der Standardwert ist `0`.
- `offset=int` {{optional_inline}}
  - : Ein ganzzahliger Wert, der eine konstante Anzahl von Bytes darstellt, die vor dem Laden zur Speicheradresse hinzugerechnet werden. Der Standardwert ist `0`.
- `align=int` {{optional_inline}}
  - : Ein ganzzahliger Wert, der der Wasm-Engine einen Hinweis darauf gibt, welche Ausrichtung für die endgültige Adresse erwartet wird. Der minimale, Standard- und maximale Wert ist `1`.
- `lane_value`
  - : Die Spur, in die ein Wert geladen werden soll.

### Typ

```plain
[memory_address, input] -> [output]
```

- `memory_address`
  - : Ein ganzzahliger Wert, der die zu ladende Speicheradresse darstellt.
- `input`
  - : Die Eingabe `v128` Typ `i8x16` Werteinterpretation.
- `output`
  - : Die Ausgabe `v128` Typ `i8x16` Werteinterpretation.

### Binärcodierung

| Anweisung         | Binärformat                                               | Beispieltext => Binär                                                |
| ----------------- | --------------------------------------------------------- | -------------------------------------------------------------------- |
| `v128.load8_lane` | `0xFD 84:u32 mem_idx:u8 offset:u32 align:u32 lane_idx:u8` | `v128.load8_lane 0 offset=0 align=1 9` => `0xfd 0x54 0x00 0x00 0x09` |

> [!NOTE]
> Während das Wasm-Textformat den wörtlichen `align`-Wert angibt, stellt das binäre Äquivalent den Exponenten der Formel `2^x` dar, die zur Berechnung der Ausrichtung verwendet wird. Somit ist `align=1` gleichwertig mit `0x00` (`2^0`).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [SIMD Ladeanweisungen](/de/docs/WebAssembly/Reference/SIMD/load)
