---
title: "store16_lane: Wasm SIMD Lade-/Speicheranweisung"
short-title: store16_lane
slug: WebAssembly/Reference/SIMD/load_store/store16_lane
l10n:
  sourceCommit: 76b3f4216320b4ecdbc8b95028dc46aa67e1468e
---

Die **`store16_lane`** [SIMD Lade-/Speicheranweisung](/de/docs/WebAssembly/Reference/SIMD/load_store) speichert eine angegebene Lane einer [`v128`](/de/docs/WebAssembly/Reference/Types/v128) `i16x8` Wertinterpretation an einer bestimmten Speicheradresse.

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
  - : Die `v128.store16_lane` Anweisung.
- `mem_idx` {{optional_inline}}
  - : Ein ganzzahliger Wert, der den Speicherindex darstellt, wenn das Modul mehrere Speicher verwendet. Der Standardwert ist `0`.
- `offset=int` {{optional_inline}}
  - : Ein ganzzahliger Wert, der die konstante Anzahl von Bytes darstellt, die vor dem Speichern zur Adresse hinzugefügt werden sollen. Der Standardwert ist `0`.
- `align=int` {{optional_inline}}
  - : Ein ganzzahliger Wert, der der Wasm-Engine einen Hinweis darauf gibt, welche Ausrichtung für die endgültige Adresse erwartet wird. Der Mindestwert ist `1`, der Standard- und Höchstwert ist `2`. Ein `align`-Wert muss eine Potenz von `2` sein.
- `lane_idx`
  - : Der Index der Lane, deren Wert Sie speichern möchten.

### Typ

```plain
[memory_address, input] -> []
```

- `memory_address`
  - : Ein Ganzzahlwert, der die Speicheradresse darstellt, an der der `input` gespeichert werden soll.
- `input`
  - : Der `v128` Typ, aus dem ein Lane-Wert extrahiert werden soll, um ihn zu speichern.

### Binäre Codierung

| Anweisung           | Binärformat                                             | Beispielttext => binär                                                 |
| ------------------- | ------------------------------------------------------- | ---------------------------------------------------------------------- |
| `v128.store16_lane` | `0xfd 89:u32 mem_idx:u8 offset:u32 align:u32 l:laneidx` | `v128.store16_lane 0 offset=0 align=2 7` => `0xfd 0x59 0x01 0x00 0x07` |

> [!NOTE]
> Während das Wasm-Textformat den wörtlichen `align`-Wert spezifiziert, stellt das binäre Äquivalent den Exponenten der Formel `2^x` dar, die zur Berechnung der Ausrichtung verwendet wird. Zum Beispiel ist `align=2` gleichwertig zu `0x01` (`2^1`).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [SIMD Lade-/Speicheranweisungen](/de/docs/WebAssembly/Reference/SIMD/load_store)
