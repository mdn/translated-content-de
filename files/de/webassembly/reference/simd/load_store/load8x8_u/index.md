---
title: "load8x8_u: Wasm SIMD Lade-/Speicheranweisung"
short-title: load8x8_u
slug: WebAssembly/Reference/SIMD/load_store/load8x8_u
l10n:
  sourceCommit: d8d43055ac49fc512539fe02d873be4ffee29bc0
---

Die **`load8x8_u`** [SIMD Lade-/Speicheranweisung](/de/docs/WebAssembly/Reference/SIMD/load_store) lädt acht 8-Bit-Ganzzahlen von einer angegebenen Speicheradresse und erweitert jede auf Null, um sie auf eine 16-Bit-Spur zu bringen. Das Ergebnis ist ein `i16x8`-Wert des Typs [`v128`](/de/docs/WebAssembly/Reference/Value_types/v128).

{{InteractiveExample("Wat Demo: load8x8_u", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i32)))
  (memory $memory 1)
  (data (i32.const 0) "\01\02\03\04\05\06\07\08\09\0a\0b\0c\0d\0e\0f\00\01\02\03")
  (func $main
    i32.const 0
    v128.load8x8_u
    i16x8.extract_lane_s 7
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
v128.load8x8_u

;; With optional immediate operands
v128.load8x8_u mem_idx offset=int align=int
```

- `v128.load8x8_u`
  - : Die `v128.load8x8_u`-Anweisung.
- `mem_idx` {{optional_inline}}
  - : Eine Ganzzahl, die den Speicherindex darstellt, falls das Modul mehrere Speicher verwendet. Der Standardwert ist `0`.
- `offset=int` {{optional_inline}}
  - : Eine Ganzzahl, die eine konstante Anzahl von Bytes darstellt, die zur Speicheradresse hinzugerechnet werden, bevor geladen wird. Der Standardwert ist `0`.
- `align=int` {{optional_inline}}
  - : Eine Ganzzahl, die der Wasm-Engine einen Hinweis darauf gibt, welche Ausrichtung für die endgültige Adresse zu erwarten ist. Der Mindestwert ist `1`, und der Standard- sowie Höchstwert ist `8`. Ein `align`-Wert muss eine Potenz von `2` sein.

### Typ

```plain
[memory_address] -> [output]
```

- `memory_address`
  - : Eine Ganzzahl, die die Speicheradresse darstellt, von der geladen werden soll.
- `output`
  - : Die Ausgabe `v128` Typ `i16x8` Wertinterpretation.

### Binärcodierung

| Anweisung        | Binärformat                                  | Beispieltext => Binär                                        |
| ---------------- | -------------------------------------------- | ------------------------------------------------------------ |
| `v128.load8x8_u` | `0xFD 2:u32 mem_idx:u8 offset:u32 align:u32` | `v128.load8x8_u 0 offset=0 align=2` => `0xfd 0x02 0x01 0x00` |

> [!NOTE]
> Während das Wasm-Textformat den Literalwert `align` angibt, stellt das binäre Äquivalent den Exponenten der Formel `2^x` dar, die zur Berechnung der Ausrichtung verwendet wird. Zum Beispiel ist `align=1` äquivalent zu `0x00` (`2^0`), während `align=8` äquivalent zu `0x03` (`2^3`) ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
