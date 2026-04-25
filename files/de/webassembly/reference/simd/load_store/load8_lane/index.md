---
title: "load8_lane: Wasm SIMD Lade-/Speicheranweisung"
short-title: load8_lane
slug: WebAssembly/Reference/SIMD/load_store/load8_lane
l10n:
  sourceCommit: 76b3f4216320b4ecdbc8b95028dc46aa67e1468e
---

Die **`load8_lane`** [SIMD Lade-/Speicheranweisung](/de/docs/WebAssembly/Reference/SIMD/load_store) lädt einen einzelnen Wert von einer angegebenen Speicheradresse in die spezifizierte Lane eines [`v128`](/de/docs/WebAssembly/Reference/Types/v128) Typs mit der `i8x16` Wertinterpretation.

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
  - : Ein Integer, der den Speicherindex darstellt, in Fällen, in denen das Modul mehrere Speicher verwendet. Der Standard ist `0`.
- `offset=int` {{optional_inline}}
  - : Ein Integer, der eine konstante Anzahl von Bytes darstellt, die zur Speicheradresse hinzugefügt werden, bevor geladen wird. Der Standard ist `0`.
- `align=int` {{optional_inline}}
  - : Ein Integer, der der Wasm-Engine einen Hinweis darauf gibt, welche Ausrichtung für die endgültige Adresse erwartet wird. Der minimale, Standard- und Höchstwert ist `1`.
- `lane_value`
  - : Die Lane, in die ein Wert geladen werden soll.

### Typ

```plain
[memory_address, input] -> [output]
```

- `memory_address`
  - : Ein Integer, der die Speicheradresse darstellt, von der geladen werden soll.
- `input`
  - : Die Eingabe `v128` Typ `i8x16` Wertinterpretation.
- `output`
  - : Die Ausgabe `v128` Typ `i8x16` Wertinterpretation.

### Binärcode

| Anweisung         | Binärformat                                               | Beispieltext => binär                                                |
| ----------------- | --------------------------------------------------------- | -------------------------------------------------------------------- |
| `v128.load8_lane` | `0xFD 84:u32 mem_idx:u8 offset:u32 align:u32 lane_idx:u8` | `v128.load8_lane 0 offset=0 align=1 9` => `0xfd 0x54 0x00 0x00 0x09` |

> [!NOTE]
> Während das Wasm-Textformat den wörtlichen `align` Wert angibt, repräsentiert das binäre Äquivalent den Exponenten der Formel `2^x`, die zur Berechnung der Ausrichtung verwendet wird. Daher ist `align=1` gleichbedeutend mit `0x00` (`2^0`).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [SIMD Lade-/Speicheranweisungen](/de/docs/WebAssembly/Reference/SIMD/load_store)
