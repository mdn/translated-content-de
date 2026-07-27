---
title: "load32x2_s: Wasm SIMD Lade-/Speicheranweisung"
short-title: load32x2_s
slug: WebAssembly/Reference/SIMD/load_store/load32x2_s
l10n:
  sourceCommit: d8d43055ac49fc512539fe02d873be4ffee29bc0
---

Die **`load32x2_s`** [SIMD Lade-/Speicheranweisung](/de/docs/WebAssembly/Reference/SIMD/load_store) lädt zwei 32-Bit-Ganzzahlen von einer gegebenen Speicheradresse und erweitert jede in ein 64-Bit-Lane, wobei ein [`v128`](/de/docs/WebAssembly/Reference/Value_types/v128)-Typ `i64x2` Wert interpretiert wird.

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

;; With optional immediate operands
v128.load32x2_s mem_idx offset=int align=int
```

- `v128.load32x2_s`
  - : Die `v128.load32x2_s` Anweisung.
- `mem_idx` {{optional_inline}}
  - : Eine Ganzzahl, die den Speicherindex darstellt, in Fällen, in denen das Modul mehrere Speicher nutzt. Der Standardwert ist `0`.
- `offset=int` {{optional_inline}}
  - : Eine Ganzzahl, die eine konstante Anzahl von Bytes darstellt, die vor dem Laden zur Speicheradresse addiert werden. Der Standardwert ist `0`.
- `align=int` {{optional_inline}}
  - : Eine Ganzzahl, die dem Wasm-Engine einen Hinweis darauf gibt, welche Ausrichtung für die endgültige Adresse erwartet wird. Der Mindestwert ist `1`, und der Standard- und Höchstwert ist `8`. Ein `align`-Wert muss eine Potenz von `2` sein.

### Typ

```plain
[memory_address] -> [output]
```

- `memory_address`
  - : Eine Ganzzahl, die die Speicheradresse darstellt, von der geladen werden soll.
- `output`
  - : Die Ausgabe `v128` Typ `i64x2` Wertinterpretation.

### Binärcodierung

| Anweisung         | Binärformat                                  | Beispieltext => binär                                         |
| ----------------- | -------------------------------------------- | ------------------------------------------------------------- |
| `v128.load32x2_s` | `0xFD 5:u32 mem_idx:u8 offset:u32 align:u32` | `v128.load32x2_s 0 offset=0 align=8` => `0xfd 0x05 0x03 0x00` |

> [!NOTE]
> Während das Wasm-Textformat den literalen `align`-Wert angibt, stellt das binäre Äquivalent den Exponenten der Formel `2^x` dar, die zur Berechnung der Ausrichtung verwendet wird. Zum Beispiel entspricht `align=1` `0x00` (`2^0`), während `align=8` `0x03` (`2^3`) entspricht.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
