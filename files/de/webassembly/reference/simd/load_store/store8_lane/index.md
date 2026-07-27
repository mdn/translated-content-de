---
title: "store8_lane: Wasm SIMD Lade-/Speicheranweisung"
short-title: store8_lane
slug: WebAssembly/Reference/SIMD/load_store/store8_lane
l10n:
  sourceCommit: d8d43055ac49fc512539fe02d873be4ffee29bc0
---

Die **`store8_lane`**-Anweisung [SIMD load/store instruction](/de/docs/WebAssembly/Reference/SIMD/load_store) speichert eine bestimmte Spur einer [`v128`](/de/docs/WebAssembly/Reference/Value_types/v128) `i8x16` Wertinterpretation an einer angegebenen Speicheradresse.

{{InteractiveExample("Wat Demo: store8_lane", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i32)))
  (memory $memory 1)
  (func $main
    i32.const 0
    v128.const i8x16 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27
    v128.store8_lane 15

    i32.const 0
    v128.load
    i8x16.extract_lane_u 0
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
v128.store8_lane lane_idx

;; With optional immediate operands
v128.store8_lane mem_idx offset=int align=int lane_idx
```

- `v128.store8_lane`
  - : Die `v128.store8_lane`-Anweisung.
- `mem_idx` {{optional_inline}}
  - : Ein Integer, der den Speicherindex darstellt, falls das Modul mehrere Speicher verwendet. Der Standardwert ist `0`.
- `offset=int` {{optional_inline}}
  - : Ein Integer, der eine konstante Anzahl von Bytes darstellt, die zur Adresse hinzugefügt werden, bevor gespeichert wird. Der Standardwert ist `0`.
- `align=int` {{optional_inline}}
  - : Ein Integer, der der Wasm-Engine einen Hinweis darauf gibt, welche Ausrichtung für die endgültige Adresse erwartet wird. Der Mindestwert ist `1` und sowohl der Standard- als auch der Höchstwert ist `1`. Ein `align`-Wert muss eine Zweierpotenz sein.
- `lane_idx`
  - : Der Index der Spur, deren Wert Sie speichern möchten.

### Typ

```plain
[memory_address, input] -> []
```

- `memory_address`
  - : Ein Integer, der die Speicheradresse darstellt, an der der `input` gespeichert werden soll.
- `input`
  - : Der `v128`-Typ, aus dem ein Spurwert extrahiert und gespeichert werden soll.

### Binäre Kodierung

| Anweisung          | Binärformat                                             | Beispieltext => binär                                                  |
| ------------------ | ------------------------------------------------------- | ---------------------------------------------------------------------- |
| `v128.store8_lane` | `0xfd 88:u32 mem_idx:u8 offset:u32 align:u32 l:laneidx` | `v128.store8_lane 0 offset=0 align=1 15` => `0xfd 0x58 0x00 0x00 0x0f` |

> [!NOTE]
> Während das Wasm-Textformat den wörtlichen `align`-Wert angibt, stellt das binäre Äquivalent den Exponenten der Formel `2^x` dar, die zur Berechnung der Ausrichtung verwendet wird. So entspricht beispielsweise `align=1` `0x00` (`2^0`).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
