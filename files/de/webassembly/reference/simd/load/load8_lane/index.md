---
title: "load8_lane: Wasm SIMD Ladeanweisung"
short-title: load8_lane
slug: WebAssembly/Reference/SIMD/load/load8_lane
l10n:
  sourceCommit: d3b22d8099235ad3a0ef2a494106fc2ea178863d
---

Die **`load8_lane`** [SIMD Ladeanweisung](/de/docs/WebAssembly/Reference/SIMD/load) lädt einen einzelnen Wert von einer angegebenen Speicheradresse in die spezifizierte Lane eines [`v128`](/de/docs/WebAssembly/Reference/Types/v128)-Typs, mit `i8x16`-Wertinterpretation.

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

;; With optional immediates
v128.load8_lane memidx offset=int align=int lane_value
```

- `v128.load8_lane`
  - : Die `v128.load8_lane`-Anweisung.
- `memidx` {{optional_inline}}
  - : Eine Ganzzahl, die den Speicherindex darstellt, in Fällen, in denen das Modul mehrere Speicher verwendet. Der Standardwert ist `0`.
- `offset=int` {{optional_inline}}
  - : Eine Ganzzahl, die eine konstante Anzahl von Bytes darstellt, die zur Speicheradresse hinzugefügt werden, bevor geladen wird. Der Standardwert ist `0`.
- `align=int` {{optional_inline}}
  - : Eine Ganzzahl, die einen Hinweis an die Wasm-Engine über die zu erwartende Ausrichtung der endgültigen Adresse darstellt. Der minimale, Standard- und Höchstwert ist `1`.
- `lane_value`
  - : Die Lane, in die ein Wert geladen werden soll.

### Typ

```plain
[memory_address, input] -> [output]
```

- `memory_address`
  - : Eine Ganzzahl, die die zu ladende Speicheradresse darstellt.
- `input`
  - : Die Eingabe `v128`-Typ mit `i8x16`-Wertinterpretation.
- `output`
  - : Die Ausgabe `v128`-Typ mit `i8x16`-Wertinterpretation.

### Binärcode-Format

| Anweisung         | Binärformat                                             | Beispieltext => binär                                                |
| ----------------- | ------------------------------------------------------- | -------------------------------------------------------------------- |
| `v128.load8_lane` | `0xFD 84:u32 memidx:u8 offset:u32 align:u32 laneidx:u8` | `v128.load8_lane 0 offset=0 align=1 9` => `0xfd 0x54 0x00 0x00 0x09` |

> [!NOTE]
> Während das Wasm-Textformat den wörtlichen `align`-Wert angibt, stellt das binäre Äquivalent den Exponenten der Formel `2^x` dar, die zur Berechnung der Ausrichtung verwendet wird. Daher ist `align=1` gleichbedeutend mit `0x00` (`2^0`).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [SIMD Ladeanweisungen](/de/docs/WebAssembly/Reference/SIMD/load)
