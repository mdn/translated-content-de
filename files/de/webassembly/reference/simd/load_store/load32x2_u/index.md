---
title: "load32x2_u: Wasm SIMD Lade-/Speicheranweisung"
short-title: load32x2_u
slug: WebAssembly/Reference/SIMD/load_store/load32x2_u
l10n:
  sourceCommit: d8d43055ac49fc512539fe02d873be4ffee29bc0
---

Die **`load32x2_u`** [SIMD Lade-/Speicheranweisung](/de/docs/WebAssembly/Reference/SIMD/load_store) lädt zwei 32-Bit-Integer von einer gegebenen Speicheradresse und erweitert jeden auf eine 64-Bit-Bahn, wobei eine Ausgabe im [`v128`](/de/docs/WebAssembly/Reference/Value_types/v128) Typ `i64x2` Wertinterpretation erfolgt.

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

;; With optional immediate operands
v128.load32x2_u mem_idx offset=int align=int
```

- `v128.load32x2_u`
  - : Die `v128.load32x2_u` Anweisung.
- `mem_idx` {{optional_inline}}
  - : Ein Integer, der den Speicherindex darstellt, falls das Modul mehrere Speicher verwendet. Der Standardwert ist `0`.
- `offset=int` {{optional_inline}}
  - : Ein Integer, der eine konstante Anzahl von Bytes darstellt, die zur Speicheradresse hinzugefügt werden, bevor geladen wird. Der Standardwert ist `0`.
- `align=int` {{optional_inline}}
  - : Ein Integer, der dem Wasm-Engine einen Hinweis darauf gibt, welche Ausrichtung für die finale Adresse erwartet wird. Der Minimalwert ist `1` und der Standard- sowie Maximalwert ist `8`. Ein `align`-Wert muss eine Potenz von `2` sein.

### Typ

```plain
[memory_address] -> [output]
```

- `memory_address`
  - : Ein Integer, der die Speicheradresse darstellt, von der geladen wird.
- `output`
  - : Die Ausgabe `v128` Typ `i64x2` Wertinterpretation.

### Binäre Kodierung

| Anweisung         | Binärformat                                  | Beispieltext => binär                                         |
| ----------------- | -------------------------------------------- | ------------------------------------------------------------- |
| `v128.load32x2_u` | `0xFD 6:u32 mem_idx:u8 offset:u32 align:u32` | `v128.load32x2_u 0 offset=0 align=8` => `0xfd 0x06 0x03 0x00` |

> [!NOTE]
> Während das Wasm-Textformat den wörtlichen `align`-Wert angibt, stellt das binäre Äquivalent den Exponenten der Formel `2^x` dar, die zur Berechnung der Ausrichtung verwendet wird. Zum Beispiel entspricht `align=1` dem `0x00` (`2^0`), während `align=8` dem `0x03` (`2^3`) entspricht.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
