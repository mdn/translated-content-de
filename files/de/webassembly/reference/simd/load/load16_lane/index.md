---
title: "load16_lane: Wasm SIMD Ladebefehl"
short-title: load16_lane
slug: WebAssembly/Reference/SIMD/load/load16_lane
l10n:
  sourceCommit: d3b22d8099235ad3a0ef2a494106fc2ea178863d
---

Die **`load16_lane`** [SIMD-Ladeanweisung](/de/docs/WebAssembly/Reference/SIMD/load) lädt einen einzelnen Wert von einer bestimmten Speicheradresse in die angegebene Lane eines Werts des Typs [`v128`](/de/docs/WebAssembly/Reference/Types/v128) mit der `i16x8`-Interpretation.

{{InteractiveExample("Wat Demo: load16_lane", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i32)))
  (memory $memory 1)
  (data (i32.const 0) "\01\02\03\04\05\06\07\08\09\0a\0b\0c\0d\0e\0f\00\01\02\03")
  (func $main
    i32.const 0
    v128.const i16x8 10 4 6 5 8 7 11 3
    v128.load16_lane 6
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
v128.load16_lane lane_value

;; With optional immediates
v128.load16_lane memidx offset=int align=int lane_value

```

- `v128.load16_lane`
  - : Die `v128.load16_lane`-Anweisung.
- `memidx` {{optional_inline}}
  - : Ein Integer, der den Speicherindex repräsentiert, in Fällen, in denen das Modul mehrere Speicher verwendet. Der Standardwert ist `0`.
- `offset=int` {{optional_inline}}
  - : Ein Integer, der eine konstante Anzahl von Bytes darstellt, die der Speicheradresse vor dem Laden hinzugefügt werden. Der Standardwert ist `0`.
- `align=int` {{optional_inline}}
  - : Ein Integer, der der Wasm-Engine einen Hinweis darauf gibt, welche Ausrichtung für die finale Adresse erwartet wird. Der Mindestwert ist `1` und der Standard- und Höchstwert ist `2`. Ein `align`-Wert muss eine Potenz von `2` sein.
- `lane_value`
  - : Die Lane, in die der Wert geladen werden soll.

### Typ

```plain
[memory_address, input] -> [output]
```

- `memory_address`
  - : Ein Integer, der die Speicheradresse repräsentiert, aus der geladen werden soll.
- `input`
  - : Die Eingabe `v128`-Typ `i16x8`-Wertinterpretation.
- `output`
  - : Die Ausgabe `v128`-Typ `i16x8`-Wertinterpretation.

### Binärcodierung

| Anweisung          | Binärformat                                             | Beispieltext => binär                                                 |
| ------------------ | ------------------------------------------------------- | --------------------------------------------------------------------- |
| `v128.load16_lane` | `0xFD 85:u32 memidx:u8 offset:u32 align:u32 laneidx:u8` | `v128.load16_lane 0 offset=0 align=2 6` => `0xfd 0x55 0x01 0x00 0x06` |

> [!NOTE]
> Während das Wasm-Textformat den literalen `align`-Wert spezifiziert, stellt das binäre Äquivalent den Exponenten der Formel `2^x` dar, die zur Berechnung der Ausrichtung verwendet wird. Zum Beispiel ist `align=1` äquivalent zu `0x00` (`2^0`), während `align=2` äquivalent zu `0x01` (`2^1`) ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [SIMD-Ladeanweisungen](/de/docs/WebAssembly/Reference/SIMD/load)
