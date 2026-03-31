---
title: "load64_lane: Wasm SIMD Ladeinstruktion"
short-title: load64_lane
slug: WebAssembly/Reference/SIMD/load/load64_lane
l10n:
  sourceCommit: d3b22d8099235ad3a0ef2a494106fc2ea178863d
---

Die **`load64_lane`** [SIMD-Ladeinstruktion](/de/docs/WebAssembly/Reference/SIMD/load) lädt einen einzelnen Wert von einer angegebenen Speicheradresse in die spezifizierte Lane eines `v128` Typs mit der `i64x2`-Wertinterpretation.

{{InteractiveExample("Wat Demo: load64_lane", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i64)))
  (memory $memory 1)
  (data (i32.const 0) "\01\02\03\04\05\06\07\08\09\0a\0b\0c\0d\0e\0f\00\01\02\03")
  (func $main
    i32.const 0
    v128.const i64x2 90000000 216000
    v128.load64_lane 0
    i64x2.extract_lane 0
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
v128.load64_lane laneidx

;; With optional immediates
v128.load64_lane memidx offset=int align=int laneidx
```

- `v128.load64_lane`
  - : Die `v128.load64_lane`-Instruktion.
- `memidx` {{optional_inline}}
  - : Ein Integer, der den Speicherindex darstellt, falls das Modul mehrere Speicher verwendet. Der Standardwert ist `0`.
- `offset=int` {{optional_inline}}
  - : Ein Integer, der eine konstante Anzahl von Bytes darstellt, die vor dem Laden zur Speicheradresse hinzugefügt werden. Der Standardwert ist `0`.
- `align=int` {{optional_inline}}
  - : Ein Integer, der dem Wasm-Motor einen Hinweis darauf gibt, welche Ausrichtung für die endgültige Adresse erwartet wird. Der Mindestwert ist `1` und der Standard- und Höchstwert ist `8`. Ein `align`-Wert muss eine Zweierpotenz sein.
- `laneidx`
  - : Ein Integer, der den Index der Lane darstellt, in die ein Wert geladen werden soll.

### Typ

```plain
[memory_address, input] -> [output]
```

- `memory_address`
  - : Ein Integer, der die Speicheradresse darstellt, von der geladen werden soll.
- `input`
  - : Der Eingabe-`v128`-Typ mit der `i64x2`-Wertinterpretation.
- `output`
  - : Der Ausgabe-`v128`-Typ mit der `i64x2`-Wertinterpretation.

### Binärcodierung

| Instruktion        | Binärformat                                             | Beispieltext => Binär                                                 |
| ------------------ | ------------------------------------------------------- | --------------------------------------------------------------------- |
| `v128.load64_lane` | `0xFD 87:u32 memidx:u8 offset:u32 align:u32 laneidx:u8` | `v128.load64_lane 0 offset=0 align=8 0` => `0xfd 0x57 0x03 0x00 00x0` |

> [!NOTE]
> Während im Wasm-Textformat der Literalwert `align` angegeben wird, repräsentiert das Binäräquivalent den Exponenten der Formel `2^x`, die zur Berechnung der Ausrichtung verwendet wird. So ist zum Beispiel `align=1` äquivalent zu `0x00` (`2^0`), während `align=8` äquivalent zu `0x03` (`2^3`) ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [SIMD-Ladeinstruktionen](/de/docs/WebAssembly/Reference/SIMD/load)
