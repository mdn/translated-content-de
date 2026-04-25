---
title: "store: Wasm SIMD Lade-/Speicheranweisung"
short-title: store
slug: WebAssembly/Reference/SIMD/load_store/store
l10n:
  sourceCommit: 76b3f4216320b4ecdbc8b95028dc46aa67e1468e
---

Die **`store`** [SIMD Lade-/Speicheranweisung](/de/docs/WebAssembly/Reference/SIMD/load_store) speichert alle Lanes einer [`v128`](/de/docs/WebAssembly/Reference/Types/v128) Werteinterpretation an einer gegebenen Speicheradresse.

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
  - : Eine ganze Zahl, die den Speicherindex darstellt, in Fällen, in denen das Modul mehrere Speicher verwendet. Der Standardwert ist `0`.
- `offset=int` {{optional_inline}}
  - : Eine ganze Zahl, die eine konstante Anzahl von Bytes darstellt, die zum Wert hinzugefügt werden, bevor er gespeichert wird. Der Standardwert ist `0`.
- `align=int` {{optional_inline}}
  - : Eine ganze Zahl, die ein Hinweis an die Wasm-Engine darüber ist, welche Ausrichtung für die endgültige Adresse erwartet wird. Der Mindestwert ist `1` und der Standard- und Höchstwert ist `16`. Ein `align` Wert muss eine Potenz von `2` sein.

### Typ

```plain
[memory_address, input] -> []
```

- `memory_address`
  - : Eine ganze Zahl, die die Speicheradresse darstellt, an der das `input` gespeichert wird.
- `input`
  - : Der Typ `v128`, der gespeichert werden soll.

### Binäre Kodierung

| Anweisung    | Binärformat                                   | Beispiel Text => Binär                                    |
| ------------ | --------------------------------------------- | --------------------------------------------------------- |
| `v128.store` | `0xfd 11:u32 mem_idx:u8 offset:u32 align:u32` | `v128.store 0 offset=0 align=16` => `0xfd 0x0b 0x04 0x00` |

> [!NOTE]
> Während das Wasm-Textformat den wörtlichen `align` Wert spezifiziert, stellt das binäre Äquivalent den Exponenten der Formel `2^x` dar, die zur Berechnung der Ausrichtung verwendet wird. So ist zum Beispiel `align=1` gleichbedeutend mit `0x00` (`2^0`), während `align=16` gleichbedeutend mit `0x04` (`2^4`) ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [SIMD Lade-/Speicheranweisungen](/de/docs/WebAssembly/Reference/SIMD/load_store)
