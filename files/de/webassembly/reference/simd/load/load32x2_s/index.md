---
title: "load32x2_s: Wasm SIMD Ladeanweisung"
short-title: load32x2_s
slug: WebAssembly/Reference/SIMD/load/load32x2_s
l10n:
  sourceCommit: d3b22d8099235ad3a0ef2a494106fc2ea178863d
---

Die **`load32x2_s`** [SIMD Ladeanweisung](/de/docs/WebAssembly/Reference/SIMD/load) lädt zwei 32-Bit Ganzzahlen von einer gegebenen Speicheradresse und erweitert jede davon mit Vorzeichen auf eine 64-Bit-Lane, wobei eine [`v128`](/de/docs/WebAssembly/Reference/Types/v128) Typ `i64x2` Werteinterpretation erzeugt wird.

{{InteractiveExample("Wat Demo: load32x2_s", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i64)))
  (memory $memory 1)
  (data (i32.const 0) "\01\02\03\04\05\06\07\08\09\0a\0b\0c\0d\0e\0f\00\01\02\03")
  (func $main
    i32.const 0
    v128.load32x2_s
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
v128.load32x2_s

;; With optional immediates
v128.load32x2_s memidx offset=int align=int
```

- `v128.load32x2_s`
  - : Die `v128.load32x2_s` Anweisung.
- `memidx` {{optional_inline}}
  - : Ein ganzzahliger Wert, der den Speicherindex darstellt, in Fällen, in denen das Modul mehrere Speicher verwendet. Der Standardwert ist `0`.
- `offset=int` {{optional_inline}}
  - : Ein ganzzahliger Wert, der eine konstante Anzahl von Bytes darstellt, die zur Speicheradresse hinzugefügt werden, bevor geladen wird. Der Standardwert ist `0`.
- `align=int` {{optional_inline}}
  - : Ein ganzzahliger Wert, der der Wasm-Engine einen Hinweis auf die erwartete Ausrichtung der endgültigen Adresse gibt. Der Mindestwert ist `1` und der Standard- und Höchstwert ist `8`. Ein `align` Wert muss eine Potenz von `2` sein.

### Typ

```plain
[memory_address] -> [output]
```

- `memory_address`
  - : Ein ganzzahliger Wert, der die Speicheradresse darstellt, von der geladen werden soll.
- `output`
  - : Die Ausgabe `v128` Typ `i64x2` Werteinterpretation.

### Binärkodierung

| Anweisung         | Binärformat                                 | Beispieltext => Binär                                         |
| ----------------- | ------------------------------------------- | ------------------------------------------------------------- |
| `v128.load32x2_s` | `0xFD 5:u32 memidx:u8 offset:u32 align:u32` | `v128.load32x2_s 0 offset=0 align=8` => `0xfd 0x05 0x03 0x00` |

> [!NOTE]
> Während das Wasm-Textformat den wörtlichen `align` Wert angibt, stellt das binäre Äquivalent den Exponenten der Formel `2^x` dar, der zur Berechnung der Ausrichtung verwendet wird. Zum Beispiel ist `align=1` äquivalent zu `0x00` (`2^0`), während `align=8` äquivalent zu `0x03` (`2^3`) ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [SIMD Ladeanweisungen](/de/docs/WebAssembly/Reference/SIMD/load)
