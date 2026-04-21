---
title: "load16_splat: Wasm SIMD Lade-/Speicheranweisung"
short-title: load16_splat
slug: WebAssembly/Reference/SIMD/load_store/load16_splat
l10n:
  sourceCommit: 76b3f4216320b4ecdbc8b95028dc46aa67e1468e
---

Die **`load16_splat`** [SIMD Lade-/Speicheranweisung](/de/docs/WebAssembly/Reference/SIMD/load_store) lädt einen einzelnen Wert von einer angegebenen Speicheradresse in alle Lanes eines [`v128`](/de/docs/WebAssembly/Reference/Types/v128) Typs mit der `i16x8` Wertinterpretation.

{{InteractiveExample("Wat Demo: load16_splat", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i32)))
  (memory $memory 1)
  (data (i32.const 0) "\01\02\03\04\05\06\07\08\09\0a\0b\0c\0d\0e\0f\00\01\02\03")
  (func $main
    i32.const 1
    v128.load16_splat
    i16x8.extract_lane_s 6
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
v128.load16_splat

;; With optional immediate operands
v128.load16_splat mem_idx offset=int align=int
```

- `v128.load16_splat`
  - : Die `v128.load16_splat` Anweisung.
- `mem_idx` {{optional_inline}}
  - : Eine ganze Zahl, die den Speicherindex darstellt, in Fällen, in denen das Modul mehrere Speicher verwendet. Der Standardwert ist `0`.
- `offset=int` {{optional_inline}}
  - : Eine ganze Zahl, die eine konstante Anzahl von Bytes darstellt, die vor dem Laden zur Speicheradresse addiert wird. Der Standardwert ist `0`.
- `align=int` {{optional_inline}}
  - : Eine ganze Zahl, die einen Hinweis an die Wasm-Engine gibt, welche Ausrichtung für die finale Adresse erwartet wird. Der Mindestwert ist `1`, und der Standard- sowie Höchstwert ist `2`. Ein `align`-Wert muss eine Potenz von `2` sein.

### Typ

```plain
[memory_address] -> [output]
```

- `memory_address`
  - : Eine ganze Zahl, die die Speicheradresse darstellt, von der geladen wird.
- `output`
  - : Die Ausgabe im `v128` Typ mit `i16x8` Wertinterpretation.

### Binärcodierung

| Anweisung           | Binärformat                                  | Beispieltext => binär                                           |
| ------------------- | -------------------------------------------- | --------------------------------------------------------------- |
| `v128.load16_splat` | `0xFD 8:u32 mem_idx:u8 offset:u32 align:u32` | `v128.load16_splat 0 offset=0 align=2` => `0xfd 0x08 0x01 0x00` |

> [!NOTE]
> Während das Wasm-Textformat den wörtlichen `align`-Wert spezifiziert, stellt das Binäräquivalent den Exponenten der Formel `2^x` dar, die zur Berechnung der Ausrichtung verwendet wird. Zum Beispiel ist `align=1` äquivalent zu `0x00` (`2^0`), während `align=2` äquivalent zu `0x01` (`2^1`) ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [SIMD Lade-/Speicheranweisungen](/de/docs/WebAssembly/Reference/SIMD/load_store)
