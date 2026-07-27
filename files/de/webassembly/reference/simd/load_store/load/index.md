---
title: "load: Wasm SIMD Lade-/Speicheranweisung"
short-title: load
slug: WebAssembly/Reference/SIMD/load_store/load
l10n:
  sourceCommit: d8d43055ac49fc512539fe02d873be4ffee29bc0
---

Die **`load`** [SIMD Lade-/Speicheranweisung](/de/docs/WebAssembly/Reference/SIMD/load_store) lädt alle Lanes einer [`v128`](/de/docs/WebAssembly/Reference/Value_types/v128)-Wertinterpretation mit Werten von einer bestimmten Speicheradresse.

{{InteractiveExample("Wat Demo: load", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i32)))
  (memory $memory 1)
  (data (i32.const 0) "\00\01\02\03\04\05\06\07\08\09\0a\0b\0c\0d\0e\0f\00\01\02\03")
  (func $main
    i32.const 5
    v128.load
    i32x4.extract_lane 3
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
v128.load

;; With optional immediate operands
v128.load mem_idx offset=int align=int
```

- `v128.load`
  - : Die `v128.load`-Anweisung.
- `mem_idx` {{optional_inline}}
  - : Ein Integer, der den Speicherindex darstellt, in Fällen, in denen das Modul mehrere Speicher verwendet. Der Standardwert ist `0`.
- `offset=int` {{optional_inline}}
  - : Ein Integer, der eine konstante Anzahl von Bytes darstellt, die zur Speicheradresse hinzugefügt werden, bevor geladen wird. Der Standardwert ist `0`.
- `align=int` {{optional_inline}}
  - : Ein Integer, der einen Hinweis für die Wasm-Engine darüber gibt, welche Ausrichtung für die endgültige Adresse erwartet wird. Der Mindestwert ist `1` und der Standard- sowie Höchstwert ist `16`. Ein `align`-Wert muss eine Potenz von `2` sein.

### Typ

```plain
[memory_address] -> [output]
```

- `memory_address`
  - : Ein Integer, der die Speicheradresse darstellt, von der geladen werden soll.
- `output`
  - : Der Ausgabe-Typ `v128`.

### Binärcodierung

| Anweisung   | Binärformat                                  | Beispiel Text => Binär                                   |
| ----------- | -------------------------------------------- | -------------------------------------------------------- |
| `v128.load` | `0xfd 0:u32 mem_idx:u8 offset:u32 align:u32` | `v128.load 0 offset=0 align=16` => `0xfd 0x00 0x04 0x00` |

> [!NOTE]
> Während das Wasm-Textformat den wörtlichen `align`-Wert angibt, stellt das Binäräquivalent den Exponenten der Formel `2^x` dar, die zur Berechnung der Ausrichtung verwendet wird. Zum Beispiel ist `align=1` gleichbedeutend mit `0x00` (`2^0`), während `align=16` gleichbedeutend mit `0x04` (`2^4`) ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
