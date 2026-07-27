---
title: "store64_lane: Wasm SIMD Lade-/Speicheranweisung"
short-title: store64_lane
slug: WebAssembly/Reference/SIMD/load_store/store64_lane
l10n:
  sourceCommit: d8d43055ac49fc512539fe02d873be4ffee29bc0
---

Die **`store64_lane`** [SIMD Lade-/Speicheranweisung](/de/docs/WebAssembly/Reference/SIMD/load_store) speichert einen bestimmten Lane einer [`v128`](/de/docs/WebAssembly/Reference/Value_types/v128) `i64x2`-Wert-Interpretation an einer angegebenen Speicheradresse.

{{InteractiveExample("Wat Demo: store64_lane", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i64)))
  (memory $memory 1)
  (func $main
    i32.const 0
    v128.const i64x2 8000001 16000001
    v128.store64_lane 1

    i32.const 0
    v128.load
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
v128.store64_lane lane_idx

;; With optional immediate operands
v128.store64_lane mem_idx offset=int align=int lane_idx
```

- `v128.store64_lane`
  - : Die `v128.store64_lane`-Anweisung.
- `mem_idx` {{optional_inline}}
  - : Eine Ganzzahl, die den Speicherindex darstellt, wenn das Modul mehrere Speicher verwendet. Der Standardwert ist `0`.
- `offset=int` {{optional_inline}}
  - : Eine Ganzzahl, die eine konstante Anzahl von Bytes darstellt, die zur Adresse hinzugefügt werden, bevor gespeichert wird. Der Standardwert ist `0`.
- `align=int` {{optional_inline}}
  - : Eine Ganzzahl, die dem Wasm-Engine einen Hinweis darauf gibt, welche Ausrichtung für die endgültige Adresse zu erwarten ist. Der Mindestwert ist `1`, und der Standard- und Höchstwert ist `8`. Ein `align`-Wert muss eine Potenz von `2` sein.
- `lane_idx`
  - : Der Index des Lanes, dessen Wert gespeichert werden soll.

### Typ

```plain
[memory_address, input] -> []
```

- `memory_address`
  - : Eine Ganzzahl, die die Speicheradresse darstellt, an der das `input` gespeichert werden soll.
- `input`
  - : Der `v128`-Typ, aus dem ein Lane-Wert extrahiert und gespeichert werden soll.

### Binärcodierung

| Anweisung           | Binärformat                                             | Beispieltext => Binär                                                  |
| ------------------- | ------------------------------------------------------- | ---------------------------------------------------------------------- |
| `v128.store64_lane` | `0xfd 91:u32 mem_idx:u8 offset:u32 align:u32 l:laneidx` | `v128.store64_lane 0 offset=0 align=8 1` => `0xfd 0x5b 0x03 0x00 0x01` |

> [!NOTE]
> Während das Wasm-Textformat den wörtlichen `align`-Wert angibt, stellt das binäre Äquivalent den Exponenten der Formel `2^x` dar, die zur Berechnung der Ausrichtung verwendet wird. Beispielsweise ist `align=1` äquivalent zu `0x00` (`2^0`), während `align=8` äquivalent zu `0x03` (`2^3`) ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
