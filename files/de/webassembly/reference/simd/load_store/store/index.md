---
title: "store: Wasm SIMD load/store-Anweisung"
short-title: store
slug: WebAssembly/Reference/SIMD/load_store/store
l10n:
  sourceCommit: d8d43055ac49fc512539fe02d873be4ffee29bc0
---

Die **`store`** [SIMD Lade-/Speicheranweisung](/de/docs/WebAssembly/Reference/SIMD/load_store) speichert alle Lanes einer [`v128`](/de/docs/WebAssembly/Reference/Value_types/v128) Wertinterpretation an einer angegebenen Speicheradresse.

{{InteractiveExample("Wat Demo: store", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i32)))
  (memory $memory 1)
  (func $main
    i32.const 0
    v128.const i16x8 20 30 40 50 60 70 80 90
    v128.store

    i32.const 0
    v128.load
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
v128.store

;; With optional immediate operands
v128.store mem_idx offset=int align=int
```

- `v128.store`
  - : Die `v128.store` Anweisung.
- `mem_idx` {{optional_inline}}
  - : Ein ganzzahliger Wert, der den Speicherindex darstellt, in Fällen, in denen das Modul mehrere Speicher verwendet. Der Standardwert ist `0`.
- `offset=int` {{optional_inline}}
  - : Ein ganzzahliger Wert, der eine konstante Anzahl von Bytes darstellt, die zum Wert hinzugefügt werden, bevor er gespeichert wird. Der Standardwert ist `0`.
- `align=int` {{optional_inline}}
  - : Ein ganzzahliger Hinweis an die Wasm-Engine, welche Ausrichtung für die endgültige Adresse erwartet wird. Der Mindestwert ist `1` und der Standard- sowie Höchstwert ist `16`. Ein `align`-Wert muss eine Potenz von `2` sein.

### Typ

```plain
[memory_address, input] -> []
```

- `memory_address`
  - : Ein ganzzahliger Wert, der die Speicheradresse darstellt, an der der `input` gespeichert wird.
- `input`
  - : Der zu speichernde `v128` Typ.

### Binärcodierung

| Anweisung    | Binärformat                                   | Beispieltext => binär                                     |
| ------------ | --------------------------------------------- | --------------------------------------------------------- |
| `v128.store` | `0xfd 11:u32 mem_idx:u8 offset:u32 align:u32` | `v128.store 0 offset=0 align=16` => `0xfd 0x0b 0x04 0x00` |

> [!NOTE]
> Während das Wasm-Textformat den wörtlichen `align`-Wert angibt, repräsentiert die binäre Entsprechung den Exponenten der Formel `2^x`, die verwendet wird, um die Ausrichtung zu berechnen. So ist beispielsweise `align=1` äquivalent zu `0x00` (`2^0`), während `align=16` äquivalent zu `0x04` (`2^4`) ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
