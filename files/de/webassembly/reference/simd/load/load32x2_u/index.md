---
title: "load32x2_u: Wasm SIMD-Ladeanweisung"
short-title: load32x2_u
slug: WebAssembly/Reference/SIMD/load/load32x2_u
l10n:
  sourceCommit: d3b22d8099235ad3a0ef2a494106fc2ea178863d
---

Die **`load32x2_u`** [SIMD-Ladeanweisung](/de/docs/WebAssembly/Reference/SIMD/load) lädt zwei 32-Bit-Ganzzahlen von einer angegebenen Speicheradresse und erweitert jede auf ein 64-Bit-Bahn null, mit der Ausgabe einer [`v128`](/de/docs/WebAssembly/Reference/Types/v128) Typ `i64x2`-Wertinterpretation.

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

;; With optional immediates
v128.load32x2_u memidx offset=int align=int
```

- `v128.load32x2_u`
  - : Die `v128.load32x2_u`-Anweisung.
- `memidx` {{optional_inline}}
  - : Eine ganze Zahl, die den Speicherindex darstellt, in Fällen, in denen das Modul mehrere Speicher nutzt. Der Standardwert ist `0`.
- `offset=int` {{optional_inline}}
  - : Eine ganze Zahl, die eine konstante Anzahl von Bytes darstellt, die zur Speicheradresse hinzugefügt werden, bevor geladen wird. Der Standardwert ist `0`.
- `align=int` {{optional_inline}}
  - : Eine ganze Zahl, die einen Hinweis an die Wasm-Engine gibt, welche Ausrichtung für die endgültige Adresse erwartet wird. Der Mindestwert ist `1`; der Standard- und Maximalwert ist `8`. Ein `align`-Wert muss eine Potenz von `2` sein.

### Typ

```plain
[memory_address] -> [output]
```

- `memory_address`
  - : Eine ganze Zahl, die die Speicheradresse darstellt, von der geladen werden soll.
- `output`
  - : Die Ausgabe `v128` Typ `i64x2`-Wertinterpretation.

### Binärcodierung

| Anweisung         | Binärformat                                 | Beispieltext => binär                                         |
| ----------------- | ------------------------------------------- | ------------------------------------------------------------- |
| `v128.load32x2_u` | `0xFD 6:u32 memidx:u8 offset:u32 align:u32` | `v128.load32x2_u 0 offset=0 align=8` => `0xfd 0x06 0x03 0x00` |

> [!NOTE]
> Während das Wasm-Textformat den wörtlichen `align`-Wert angibt, stellt das binäre Äquivalent den Exponenten der Formel `2^x` dar, der zur Berechnung der Ausrichtung verwendet wird. Beispielsweise entspricht `align=1` dem Wert `0x00` (`2^0`), während `align=8` dem Wert `0x03` (`2^3`) entspricht.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [SIMD-Ladeanweisungen](/de/docs/WebAssembly/Reference/SIMD/load)
