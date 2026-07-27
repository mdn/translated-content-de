---
title: "store16_lane: Wasm SIMD Lade-/Speicheranweisung"
short-title: store16_lane
slug: WebAssembly/Reference/SIMD/load_store/store16_lane
l10n:
  sourceCommit: d8d43055ac49fc512539fe02d873be4ffee29bc0
---

Die **`store16_lane`** [SIMD Lade-/Speicheranweisung](/de/docs/WebAssembly/Reference/SIMD/load_store) speichert eine spezifizierte Lane einer [`v128`](/de/docs/WebAssembly/Reference/Value_types/v128) `i16x8` Wertinterpretation an einer angegebenen Speicheradresse.

{{InteractiveExample("Wat Demo: store16_lane", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i32)))
  (memory $memory 1)
  (func $main
    i32.const 0
    v128.const i16x8 120 140 160 180 200 220 240 260
    v128.store16_lane 7

    i32.const 0
    v128.load
    i16x8.extract_lane_u 0
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
v128.store16_lane lane_idx

;; With optional immediate operands
v128.store16_lane mem_idx offset=int align=int lane_idx
```

- `v128.store16_lane`
  - : Die `v128.store16_lane`-Anweisung.
- `mem_idx` {{optional_inline}}
  - : Ein Integer, der den Speicherindex darstellt, in Fällen, in denen das Modul mehrere Speicher verwendet. Der Standardwert ist `0`.
- `offset=int` {{optional_inline}}
  - : Ein Integer, der eine konstante Anzahl von Bytes darstellt, die zur Adresse hinzugefügt werden, bevor gespeichert wird. Der Standardwert ist `0`.
- `align=int` {{optional_inline}}
  - : Ein Integer, der einen Hinweis an die Wasm-Engine gibt, welche Ausrichtung für die endgültige Adresse erwartet wird. Der Mindestwert ist `1` und der Standard- sowie Höchstwert ist `2`. Ein `align`-Wert muss eine Potenz von `2` sein.
- `lane_idx`
  - : Der Index der Lane, deren Wert Sie speichern möchten.

### Typ

```plain
[memory_address, input] -> []
```

- `memory_address`
  - : Ein Integer, der die Speicheradresse darstellt, an der das `input` gespeichert werden soll.
- `input`
  - : Der `v128`-Typ, aus dem ein Lane-Wert zum Speichern extrahiert wird.

### Binäre Kodierung

| Anweisung           | Binärformat                                             | Beispieltext => binär                                                  |
| ------------------- | ------------------------------------------------------- | ---------------------------------------------------------------------- |
| `v128.store16_lane` | `0xfd 89:u32 mem_idx:u8 offset:u32 align:u32 l:laneidx` | `v128.store16_lane 0 offset=0 align=2 7` => `0xfd 0x59 0x01 0x00 0x07` |

> [!NOTE]
> Während das Wasm-Textformat den wörtlichen `align`-Wert angibt, stellt das Binäräquivalent den Exponenten der Formel `2^x` dar, die zur Berechnung der Ausrichtung verwendet wird. So ist zum Beispiel `align=2` äquivalent zu `0x01` (`2^1`).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
