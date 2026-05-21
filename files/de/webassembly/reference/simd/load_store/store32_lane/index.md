---
title: "store32_lane: Wasm SIMD Laden/Speichern-Anweisung"
short-title: store32_lane
slug: WebAssembly/Reference/SIMD/load_store/store32_lane
l10n:
  sourceCommit: ca1301872404bbc0305fa945cf3e3fb2351863bf
---

Die **`store32_lane`** [SIMD Laden/Speichern-Anweisung](/de/docs/WebAssembly/Reference/SIMD/load_store) speichert eine spezifizierte Lane einer [`v128`](/de/docs/WebAssembly/Reference/Value_types/v128) `i32x4` Wertinterpretation an einer bestimmten Speicheradresse.

{{InteractiveExample("Wat Demo: store32_lane", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i32)))
  (memory $memory 1)
  (func $main
    i32.const 0
    v128.const i32x4 1000 2500 4000 5500
    v128.store32_lane 3

    i32.const 0
    v128.load
    i32x4.extract_lane 0
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
v128.store32_lane lane_idx

;; With optional immediate operands
v128.store32_lane mem_idx offset=int align=int lane_idx
```

- `v128.store32_lane`
  - : Die `v128.store32_lane`-Anweisung.
- `mem_idx` {{optional_inline}}
  - : Ein Integer, der den Speicherindex darstellt, in Fällen, in denen das Modul mehrere Speicher verwendet. Der Standard ist `0`.
- `offset=int` {{optional_inline}}
  - : Ein Integer, der eine konstante Anzahl von Bytes darstellt, die vor dem Speichern zur Adresse hinzugefügt werden sollen. Der Standard ist `0`.
- `align=int` {{optional_inline}}
  - : Ein Integer, der dem Wasm-Engine einen Hinweis darauf gibt, welche Ausrichtung für die endgültige Adresse zu erwarten ist. Der minimale Wert ist `1` und der Standard- sowie Maximalwert ist `4`. Ein `align`-Wert muss eine Potenz von `2` sein.
- `lane_idx`
  - : Der Index der Lane, deren Wert Sie speichern möchten.

### Typ

```plain
[memory_address, input] -> []
```

- `memory_address`
  - : Ein Integer, der die Speicheradresse darstellt, an der `input` gespeichert werden soll.
- `input`
  - : Der `v128`-Typ, aus dem ein Lane-Wert extrahiert und gespeichert werden soll.

### Binäre Codierung

| Anweisung           | Binärformat                                             | Beispieltext => binär                                                  |
| ------------------- | ------------------------------------------------------- | ---------------------------------------------------------------------- |
| `v128.store32_lane` | `0xfd 90:u32 mem_idx:u8 offset:u32 align:u32 l:laneidx` | `v128.store32_lane 0 offset=0 align=4 3` => `0xfd 0x5a 0x02 0x00 0x03` |

> [!NOTE]
> Während das Wasm-Textformat den literalen `align`-Wert angibt, stellt das binäre Äquivalent den Exponenten der Formel `2^x` dar, die zur Berechnung der Ausrichtung verwendet wird. Zum Beispiel ist `align=1` äquivalent zu `0x00` (`2^0`), während `align=4` äquivalent zu `0x02` (`2^2`) ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [SIMD Laden/Speichern-Anweisungen](/de/docs/WebAssembly/Reference/SIMD/load_store)
