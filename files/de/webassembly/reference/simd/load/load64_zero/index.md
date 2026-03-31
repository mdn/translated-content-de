---
title: "load64_zero: Wasm SIMD load Instruction"
short-title: load64_zero
slug: WebAssembly/Reference/SIMD/load/load64_zero
l10n:
  sourceCommit: d3b22d8099235ad3a0ef2a494106fc2ea178863d
---

Die **`load64_zero`** [SIMD load Anweisung](/de/docs/WebAssembly/Reference/SIMD/load) lädt einen einzelnen Wert von einer angegebenen Speicheradresse in die erste Bahn eines [`v128`](/de/docs/WebAssembly/Reference/Types/v128) Typs `i64x2` Wertinterpretation und initialisiert die andere Bahn mit `0`.

{{InteractiveExample("Wat Demo: load64_zero", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i64)))
  (memory $memory 1)
  (data (i32.const 0) "\01\02\03\04\05\06\07\08\09\0a\0b\0c\0d\0e\0f\00\01\02\03")
  (func $main
    i32.const 1
    v128.load64_zero
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
v128.load64_zero

;; With optional immediates
v128.load64_zero memidx offset=int align=int
```

- `v128.load64_zero`
  - : Die `v128.load64_zero` Anweisung.
- `memidx` {{optional_inline}}
  - : Ein Integer, der den Speicherindex darstellt, in Fällen, in denen das Modul mehrere Speicher nutzt. Der Standardwert ist `0`.
- `offset=int` {{optional_inline}}
  - : Ein Integer, der eine konstante Anzahl von Bytes repräsentiert, die zur Speicheradresse hinzugefügt werden, bevor geladen wird. Der Standardwert ist `0`.
- `align=int` {{optional_inline}}
  - : Ein Integer, der dem Wasm-Engine einen Hinweis darauf gibt, welche Ausrichtung für die endgültige Adresse zu erwarten ist. Der Mindestwert ist `1` und der Standard- und Höchstwert ist `8`. Ein `align`-Wert muss eine Potenz von `2` sein.

### Typ

```plain
[memory_address] -> [output]
```

- `memory_address`
  - : Ein Integer, der die Speicheradresse darstellt, von der geladen werden soll.
- `output`
  - : Die Ausgabe `v128` Typ `i64x2` Wertinterpretation.

### Binäre Kodierung

| Anweisung          | Binärformat                                  | Beispieltext => binär                                          |
| ------------------ | -------------------------------------------- | -------------------------------------------------------------- |
| `v128.load64_zero` | `0xFD 93:u32 memidx:u8 offset:u32 align:u32` | `v128.load64_zero 0 offset=0 align=8` => `0xfd 0x5d 0x03 0x00` |

> [!NOTE]
> Während das Wasm-Textformat den wörtlichen `align`-Wert angibt, stellt das binäre Äquivalent den Exponenten der Formel `2^x` dar, der zur Berechnung der Ausrichtung verwendet wird. Zum Beispiel, `align=1` ist gleich `0x00` (`2^0`), während `align=8` gleich `0x03` (`2^3`) ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [SIMD load Anweisungen](/de/docs/WebAssembly/Reference/SIMD/load)
