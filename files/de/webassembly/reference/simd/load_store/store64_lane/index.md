---
title: "store64_lane: Wasm SIMD Lade-/Speicheranweisung"
short-title: store64_lane
slug: WebAssembly/Reference/SIMD/load_store/store64_lane
l10n:
  sourceCommit: ca1301872404bbc0305fa945cf3e3fb2351863bf
---

Die **`store64_lane`** [SIMD Lade-/Speicheranweisung](/de/docs/WebAssembly/Reference/SIMD/load_store) speichert eine spezifizierte Lane einer [`v128`](/de/docs/WebAssembly/Reference/Value_types/v128) `i64x2`-Wertinterpretation an einer bestimmten Speicheradresse.

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
  - : Die `v128.store64_lane` Anweisung.
- `mem_idx` {{optional_inline}}
  - : Eine Ganzzahl, die den Speicherindex darstellt, in Fällen, in denen das Modul mehrere Speicher verwendet. Der Standardwert ist `0`.
- `offset=int` {{optional_inline}}
  - : Eine Ganzzahl, die eine konstante Anzahl von Bytes darstellt, die zur Adresse hinzugefügt werden, bevor gespeichert wird. Der Standardwert ist `0`.
- `align=int` {{optional_inline}}
  - : Eine Ganzzahl, die der Wasm-Engine einen Hinweis darauf gibt, welche Ausrichtung für die endgültige Adresse erwartet wird. Der Mindestwert ist `1` und der Standard- sowie Höchstwert ist `8`. Ein `align`-Wert muss eine Potenz von `2` sein.
- `lane_idx`
  - : Der Index der Lane, deren Wert Sie speichern möchten.

### Typ

```plain
[memory_address, input] -> []
```

- `memory_address`
  - : Eine Ganzzahl, die die Speicheradresse darstellt, unter der das `input` gespeichert werden soll.
- `input`
  - : Der `v128`-Typ, aus dem ein Lane-Wert zum Speichern extrahiert werden soll.

### Binäre Codierung

| Anweisung           | Binärformat                                             | Beispiel Text => Binär                                                 |
| ------------------- | ------------------------------------------------------- | ---------------------------------------------------------------------- |
| `v128.store64_lane` | `0xfd 91:u32 mem_idx:u8 offset:u32 align:u32 l:laneidx` | `v128.store64_lane 0 offset=0 align=8 1` => `0xfd 0x5b 0x03 0x00 0x01` |

> [!NOTE]
> Während das Wasm-Textformat den literalen `align`-Wert angibt, stellt das binäre Äquivalent den Exponenten der Formel `2^x` dar, die zur Berechnung der Ausrichtung verwendet wird. So ist beispielsweise `align=1` äquivalent zu `0x00` (`2^0`), während `align=8` äquivalent zu `0x03` (`2^3`) ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [SIMD Lade-/Speicheranweisungen](/de/docs/WebAssembly/Reference/SIMD/load_store)
