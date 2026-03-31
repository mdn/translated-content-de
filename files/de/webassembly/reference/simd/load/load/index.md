---
title: "load: Wasm SIMD Ladeinstruktion"
short-title: load
slug: WebAssembly/Reference/SIMD/load/load
l10n:
  sourceCommit: d3b22d8099235ad3a0ef2a494106fc2ea178863d
---

Die **`load`** [SIMD Ladeinstruktion](/de/docs/WebAssembly/Reference/SIMD/load) lädt alle Kanäle einer [`v128`](/de/docs/WebAssembly/Reference/Types/v128)-Wertinterpretation mit Werten von einer angegebenen Speicheradresse.

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

;; With optional immediates
v128.load memidx offset=int align=int
```

- `v128.load`
  - : Die `v128.load`-Instruktion.
- `memidx` {{optional_inline}}
  - : Eine Ganzzahl, die den Speicherindex darstellt, wenn das Modul mehrere Speicher verwendet. Der Standardwert ist `0`.
- `offset=int` {{optional_inline}}
  - : Eine Ganzzahl, die eine konstante Anzahl an Bytes darstellt, die zur Speicheradresse hinzugefügt werden, bevor geladen wird. Der Standardwert ist `0`.
- `align=int` {{optional_inline}}
  - : Eine Ganzzahl, die dem Wasm-Engine einen Hinweis darüber gibt, welche Ausrichtung für die endgültige Adresse erwartet wird. Der Mindestwert ist `1` und der Standard- und Höchstwert ist `16`. Ein `align`-Wert muss eine Potenz von `2` sein.

### Typ

```plain
[memory_address] -> [output]
```

- `memory_address`
  - : Eine Ganzzahl, die die Speicheradresse darstellt, von der geladen werden soll.
- `output`
  - : Der Ausgabewert vom Typ `v128`.

### Binärcodierung

| Instruktion | Binärformat                                 | Beispieltext => binär                                    |
| ----------- | ------------------------------------------- | -------------------------------------------------------- |
| `v128.load` | `0xfd 0:u32 memidx:u8 offset:u32 align:u32` | `v128.load 0 offset=0 align=16` => `0xfd 0x00 0x04 0x00` |

> [!NOTE]
> Während das Wasm-Textformat den literalischen `align`-Wert angibt, stellt das binäre Äquivalent den Exponenten der Formel `2^x` dar, die zur Berechnung der Ausrichtung verwendet wird. Zum Beispiel ist `align=1` äquivalent zu `0x00` (`2^0`), während `align=16` äquivalent zu `0x04` (`2^4`) ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [SIMD Ladeinstruktionen](/de/docs/WebAssembly/Reference/SIMD/load)
