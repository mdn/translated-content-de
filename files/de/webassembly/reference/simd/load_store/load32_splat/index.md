---
title: "load32_splat: Wasm SIMD Lade-/Speicheranweisung"
short-title: load32_splat
slug: WebAssembly/Reference/SIMD/load_store/load32_splat
l10n:
  sourceCommit: 76b3f4216320b4ecdbc8b95028dc46aa67e1468e
---

Die **`load32_splat`** [SIMD Lade-/Speicheranweisung](/de/docs/WebAssembly/Reference/SIMD/load_store) lädt einen einzelnen Wert von einer gegebenen Speicheradresse in alle Lanes eines [`v128`](/de/docs/WebAssembly/Reference/Types/v128) `i32x4` Typwertinterpretation.

{{InteractiveExample("Wat Demo: load32_splat", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i32)))
  (memory $memory 1)
  (data (i32.const 0) "\01\02\03\04\05\06\07\08\09\0a\0b\0c\0d\0e\0f\00\01\02\03")
  (func $main
    i32.const 1
    v128.load32_splat
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
v128.load32_splat

;; With optional immediate operands
v128.load32_splat mem_idx offset=int align=int
```

- `v128.load32_splat`
  - : Die `v128.load32_splat` Anweisung.
- `mem_idx` {{optional_inline}}
  - : Ein Integer, der den Speicherindex darstellt, in Fällen, wenn das Modul mehrere Speicher verwendet. Der Standardwert ist `0`.
- `offset=int` {{optional_inline}}
  - : Ein Integer, der eine konstante Anzahl von Bytes darstellt, die vor dem Laden zur Speicheradresse hinzugefügt werden sollen. Der Standardwert ist `0`.
- `align=int` {{optional_inline}}
  - : Ein Integer, der der Wasm-Engine einen Hinweis darauf gibt, welche Ausrichtung für die endgültige Adresse zu erwarten ist. Der Mindestwert ist `1`, und der Standard- und Höchstwert ist `4`. Ein `align` Wert muss eine Potenz von `2` sein.

### Typ

```plain
[memory_address] -> [output]
```

- `memory_address`
  - : Ein Integer, der die Speicheradresse darstellt, von der geladen werden soll.
- `output`
  - : Die Ausgabe `v128` Typ `i32x4` Wertinterpretation.

### Binäre Kodierung

| Anweisung           | Binärformat                                  | Beispieltext => binär                                           |
| ------------------- | -------------------------------------------- | --------------------------------------------------------------- |
| `v128.load32_splat` | `0xFD 9:u32 mem_idx:u8 offset:u32 align:u32` | `v128.load32_splat 0 offset=0 align=4` => `0xfd 0x09 0x02 0x00` |

> [!NOTE]
> Während das Wasm-Textformat den wörtlichen `align` Wert angibt, stellt das Binäräquivalent den Exponenten der Formel `2^x` dar, die zur Berechnung der Ausrichtung verwendet wird. Zum Beispiel entspricht `align=1` `0x00` (`2^0`), während `align=4` `0x02` (`2^2`) entspricht.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [SIMD Lade-/Speicheranweisungen](/de/docs/WebAssembly/Reference/SIMD/load_store)
