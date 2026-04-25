---
title: "store32_lane: Wasm SIMD Lade-/Speicheranweisung"
short-title: store32_lane
slug: WebAssembly/Reference/SIMD/load_store/store32_lane
l10n:
  sourceCommit: 76b3f4216320b4ecdbc8b95028dc46aa67e1468e
---

Die **`store32_lane`** [SIMD Lade-/Speicheranweisung](/de/docs/WebAssembly/Reference/SIMD/load_store) speichert ein angegebenes Lane einer [`v128`](/de/docs/WebAssembly/Reference/Types/v128) `i32x4` Wertinterpretation an einer gegebenen Speicheradresse.

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
  - : Die `v128.store32_lane` Anweisung.
- `mem_idx` {{optional_inline}}
  - : Ein Integer, der den Speicherindex darstellt, in Fällen, in denen das Modul mehrere Speicher verwendet. Der Standardwert ist `0`.
- `offset=int` {{optional_inline}}
  - : Ein Integer, der eine konstante Anzahl von Bytes darstellt, die zur Adresse hinzugefügt werden, bevor gespeichert wird. Der Standardwert ist `0`.
- `align=int` {{optional_inline}}
  - : Ein Integer, der dem Wasm-Engine einen Hinweis darauf gibt, welche Ausrichtung für die endgültige Adresse zu erwarten ist. Der Mindestwert ist `1` und der Standard- und Höchstwert ist `4`. Ein `align` Wert muss eine Potenz von `2` sein.
- `lane_idx`
  - : Der Index des Lanes, dessen Wert Sie speichern möchten.

### Typ

```plain
[memory_address, input] -> []
```

- `memory_address`
  - : Ein Integer, der die Speicheradresse darstellt, an der die `input` gespeichert werden soll.
- `input`
  - : Der `v128` Typ, aus dem ein Lane-Wert zum Speichern extrahiert wird.

### Binärcode

| Anweisung           | Binärformat                                             | Beispieltext => Binär                                                  |
| ------------------- | ------------------------------------------------------- | ---------------------------------------------------------------------- |
| `v128.store32_lane` | `0xfd 90:u32 mem_idx:u8 offset:u32 align:u32 l:laneidx` | `v128.store32_lane 0 offset=0 align=4 3` => `0xfd 0x5a 0x02 0x00 0x03` |

> [!NOTE]
> Während das Wasm-Textformat den wörtlichen `align` Wert angibt, stellt das binäre Äquivalent den Exponenten der Formel `2^x` dar, die zur Berechnung der Ausrichtung verwendet wird. Zum Beispiel ist `align=1` gleichwertig zu `0x00` (`2^0`), während `align=4` gleichwertig zu `0x02` (`2^2`) ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [SIMD Lade-/Speicheranweisungen](/de/docs/WebAssembly/Reference/SIMD/load_store)
