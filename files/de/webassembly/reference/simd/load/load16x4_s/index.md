---
title: "load16x4_s: Wasm SIMD Ladeanweisung"
short-title: load16x4_s
slug: WebAssembly/Reference/SIMD/load/load16x4_s
l10n:
  sourceCommit: d3b22d8099235ad3a0ef2a494106fc2ea178863d
---

Die **`load16x4_s`** [SIMD Ladeanweisung](/de/docs/WebAssembly/Reference/SIMD/load) lädt vier 16-Bit-Ganzzahlen von einer angegebenen Speicheradresse und erweitert jede auf ein 32-Bit-Lane, wobei sie eine [`v128`](/de/docs/WebAssembly/Reference/Types/v128)-Typ `i32x4`-Wertinterpretation ausgibt.

{{InteractiveExample("Wat Demo: load16x4_s", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i32)))
  (memory $memory 1)
  (data (i32.const 0) "\01\02\03\04\05\06\07\08\09\0a\0b\0c\0d\0e\0f\00\01\02\03")
  (func $main
    i32.const 0
    v128.load16x4_s
    i32x4.extract_lane 3
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
v128.load16x4_s

;; With optional immediates
v128.load16x4_s memidx offset=int align=int
```

- `v128.load16x4_s`
  - : Die `v128.load16x4_s` Anweisung.
- `memidx` {{optional_inline}}
  - : Ein Integer, der den Speicherindex darstellt, in Fällen, in denen das Modul mehrere Speicher verwendet. Der Standardwert ist `0`.
- `offset=int` {{optional_inline}}
  - : Ein Integer, der eine konstante Anzahl von Bytes darstellt, die zur Speicheradresse hinzugefügt werden, bevor geladen wird. Der Standardwert ist `0`.
- `align=int` {{optional_inline}}
  - : Ein Integer, der einen Hinweis an die Wasm-Engine über die erwartete Ausrichtung der Endadresse darstellt. Der Mindestwert ist `1` und der Standard- und Höchstwert ist `8`. Ein `align`-Wert muss eine Potenz von `2` sein.

### Typ

```plain
[memory_address] -> [output]
```

- `memory_address`
  - : Ein Integer, der die zu ladende Speicheradresse darstellt.
- `output`
  - : Die Ausgabe `v128` Typ `i32x4` Wertinterpretation.

### Binäre Codierung

| Anweisung         | Binärformat                                 | Beispieltext => binär                                         |
| ----------------- | ------------------------------------------- | ------------------------------------------------------------- |
| `v128.load16x4_s` | `0xFD 3:u32 memidx:u8 offset:u32 align:u32` | `v128.load16x4_s 0 offset=0 align=4` => `0xfd 0x03 0x02 0x00` |

> [!NOTE]
> Während das Wasm-Textformat den wörtlichen `align`-Wert spezifiziert, stellt das binäre Äquivalent den Exponenten der Formel `2^x` dar, die zur Berechnung der Ausrichtung verwendet wird. So entspricht beispielsweise `align=1` dem Wert `0x00` (`2^0`), während `align=8` dem Wert `0x03` (`2^3`) entspricht.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [SIMD Ladeanweisungen](/de/docs/WebAssembly/Reference/SIMD/load)
