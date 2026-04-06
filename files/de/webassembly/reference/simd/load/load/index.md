---
title: "load: Wasm SIMD Ladebefehl"
short-title: load
slug: WebAssembly/Reference/SIMD/load/load
l10n:
  sourceCommit: 09d8ff096be97b28ea415fc4c68fb1cff0ff8af9
---

Der **`load`**-Befehl der [SIMD-Ladeanweisung](/de/docs/WebAssembly/Reference/SIMD/load) lädt alle Lanes einer [`v128`](/de/docs/WebAssembly/Reference/Types/v128)-Wertinterpretation von einer angegebenen Speicheradresse.

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
  - : Eine ganze Zahl, die den Speicherindex darstellt, in Fällen, in denen das Modul mehrere Speicherelemente verwendet. Der Standardwert ist `0`.
- `offset=int` {{optional_inline}}
  - : Eine ganze Zahl, die eine konstante Anzahl von Bytes darstellt, die zur Speicheradresse hinzugefügt werden sollen, bevor der Ladebefehl ausgeführt wird. Der Standardwert ist `0`.
- `align=int` {{optional_inline}}
  - : Eine ganze Zahl, die einen Hinweis an die Wasm-Engine gibt, welche Ausrichtung für die endgültige Adresse erwartet wird. Der Mindestwert ist `1`, der Standard- und Höchstwert ist `16`. Ein `align`-Wert muss eine Potenz von `2` sein.

### Typ

```plain
[memory_address] -> [output]
```

- `memory_address`
  - : Eine ganze Zahl, die die zu ladende Speicheradresse darstellt.
- `output`
  - : Der Ausgabe-Typ `v128`.

### Binärcode

| Anweisung   | Binärformat                                  | Beispiel Text => Binär                                   |
| ----------- | -------------------------------------------- | -------------------------------------------------------- |
| `v128.load` | `0xfd 0:u32 mem_idx:u8 offset:u32 align:u32` | `v128.load 0 offset=0 align=16` => `0xfd 0x00 0x04 0x00` |

> [!NOTE]
> Während das Wasm-Textformat den wörtlichen `align`-Wert angibt, stellt das binäre Äquivalent den Exponenten der Formel `2^x` dar, die zur Berechnung der Ausrichtung verwendet wird. Beispiel: `align=1` entspricht `0x00` (`2^0`), während `align=16` `0x04` (`2^4`) entspricht.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [SIMD-Ladeanweisungen](/de/docs/WebAssembly/Reference/SIMD/load)
