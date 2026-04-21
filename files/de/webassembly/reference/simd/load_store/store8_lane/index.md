---
title: "store8_lane: Wasm SIMD Load/Store-Befehl"
short-title: store8_lane
slug: WebAssembly/Reference/SIMD/load_store/store8_lane
l10n:
  sourceCommit: 76b3f4216320b4ecdbc8b95028dc46aa67e1468e
---

Die **`store8_lane`** [SIMD Load/Store-Anweisung](/de/docs/WebAssembly/Reference/SIMD/load_store) speichert eine spezifische Lane einer [`v128`](/de/docs/WebAssembly/Reference/Types/v128) `i8x16`-Wertinterpretation an einer angegebenen Speicheradresse.

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
  - : Der `v128.store8_lane`-Befehl.
- `mem_idx` {{optional_inline}}
  - : Eine Ganzzahl, die den Speicherindex darstellt, in Fällen, in denen das Modul mehrere Speicher verwendet. Der Standardwert ist `0`.
- `offset=int` {{optional_inline}}
  - : Eine Ganzzahl, die eine konstante Anzahl von Bytes darstellt, die zur Adresse hinzugefügt werden, bevor gespeichert wird. Der Standardwert ist `0`.
- `align=int` {{optional_inline}}
  - : Eine Ganzzahl, die dem Wasm-Engine einen Hinweis darauf gibt, welche Ausrichtung für die endgültige Adresse erwartet wird. Der Mindestwert ist `1`, der Standard- und Höchstwert beträgt `1`. Ein `align`-Wert muss eine Potenz von `2` sein.
- `lane_idx`
  - : Der Index der Lane, deren Wert Sie speichern möchten.

### Typ

```plain
[memory_address, input] -> []
```

- `memory_address`
  - : Eine Ganzzahl, die die Speicheradresse darstellt, an der die `input` gespeichert werden soll.
- `input`
  - : Der `v128`-Typ, aus dem ein Lane-Wert extrahiert und gespeichert werden soll.

### Binärcodekodierung

| Instruktion        | Binärformat                                             | Beispieltext => Binär                                                  |
| ------------------ | ------------------------------------------------------- | ---------------------------------------------------------------------- |
| `v128.store8_lane` | `0xfd 88:u32 mem_idx:u8 offset:u32 align:u32 l:laneidx` | `v128.store8_lane 0 offset=0 align=1 15` => `0xfd 0x58 0x00 0x00 0x0f` |

> [!NOTE]
> Während das Wasm-Textformat den wörtlichen `align`-Wert angibt, stellt das binäre Äquivalent den Exponenten der Formel `2^x` dar, die zur Berechnung der Ausrichtung verwendet wird. Zum Beispiel entspricht `align=1` dem Wert `0x00` (`2^0`).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [SIMD Load/Store-Anweisungen](/de/docs/WebAssembly/Reference/SIMD/load_store)
