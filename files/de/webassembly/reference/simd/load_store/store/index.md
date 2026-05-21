---
title: "store: Wasm SIMD Lade-/Speicheranweisung"
short-title: store
slug: WebAssembly/Reference/SIMD/load_store/store
l10n:
  sourceCommit: ca1301872404bbc0305fa945cf3e3fb2351863bf
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
  - : Eine ganze Zahl, die den Speicherindex darstellt, für Fälle, in denen das Modul mehrere Speicher verwendet. Der Standardwert ist `0`.
- `offset=int` {{optional_inline}}
  - : Eine ganze Zahl, die eine konstante Anzahl von Bytes darstellt, die vor dem Speichern zum Wert hinzugefügt wird. Der Standardwert ist `0`.
- `align=int` {{optional_inline}}
  - : Eine ganze Zahl als Hinweis an die Wasm-Engine über die erwartete Ausrichtung der endgültigen Adresse. Der Mindestwert ist `1` und der Standard- sowie Höchstwert ist `16`. Ein `align`-Wert muss eine Potenz von `2` sein.

### Typ

```plain
[memory_address, input] -> []
```

- `memory_address`
  - : Eine ganze Zahl, die die Speicheradresse darstellt, bei der der `input` gespeichert wird.
- `input`
  - : Der `v128` Typ, der gespeichert werden soll.

### Binärcodierung

| Anweisung    | Binärformat                                   | Beispieltext => Binär                                     |
| ------------ | --------------------------------------------- | --------------------------------------------------------- |
| `v128.store` | `0xfd 11:u32 mem_idx:u8 offset:u32 align:u32` | `v128.store 0 offset=0 align=16` => `0xfd 0x0b 0x04 0x00` |

> [!NOTE]
> Während das Wasm-Textformat den wörtlichen `align`-Wert spezifiziert, stellt das binäre Äquivalent den Exponenten der Formel `2^x` dar, die zur Berechnung der Ausrichtung verwendet wird. Zum Beispiel ist `align=1` äquivalent zu `0x00` (`2^0`), während `align=16` äquivalent zu `0x04` (`2^4`) ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [SIMD Lade-/Speicheranweisungen](/de/docs/WebAssembly/Reference/SIMD/load_store)
