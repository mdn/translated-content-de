---
title: "load32_zero: Wasm SIMD-Lade-/Speicherinstruktion"
short-title: load32_zero
slug: WebAssembly/Reference/SIMD/load_store/load32_zero
l10n:
  sourceCommit: ca1301872404bbc0305fa945cf3e3fb2351863bf
---

Die **`load32_zero`** [SIMD-Lade-/Speicherinstruktion](/de/docs/WebAssembly/Reference/SIMD/load_store) lädt einen einzelnen Wert von einer gegebenen Speicheradresse in die erste Lane eines `v128` Typs mit der `i32x4`-Werteinterpretation und initialisiert die anderen Lanes auf `0`.

{{InteractiveExample("Wat Demo: load32_zero", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i32)))
  (memory $memory 1)
  (data (i32.const 0) "\01\02\03\04\05\06\07\08\09\0a\0b\0c\0d\0e\0f\00\01\02\03")
  (func $main
    i32.const 1
    v128.load32_zero
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
v128.load32_zero

;; With optional immediate operands
v128.load32_zero mem_idx offset=int align=int
```

- `v128.load32_zero`
  - : Die `v128.load32_zero` Instruktion.
- `mem_idx` {{optional_inline}}
  - : Ein Integer, der den Speicherindex darstellt, falls das Modul mehrere Speicher verwendet. Der Standardwert ist `0`.
- `offset=int` {{optional_inline}}
  - : Ein Integer, der eine konstante Anzahl von Bytes darstellt, die zur Speicheradresse hinzugefügt werden, bevor geladen wird. Der Standardwert ist `0`.
- `align=int` {{optional_inline}}
  - : Ein Integer, der einen Hinweis an die Wasm-Engine darstellt, welche Ausrichtung für die endgültige Adresse zu erwarten ist. Der Mindestwert ist `1` und der Standard- sowie Höchstwert ist `4`. Ein `align`-Wert muss eine Potenz von `2` sein.

### Typ

```plain
[memory_address] -> [output]
```

- `memory_address`
  - : Ein Integer, der die Speicheradresse darstellt, von der geladen werden soll.
- `output`
  - : Die Ausgabe-Werteinterpretation vom Typ `v128` als `i32x4`.

### Binärcodierung

| Instruktion        | Binärformat                                   | Beispieltext => binär                                          |
| ------------------ | --------------------------------------------- | -------------------------------------------------------------- |
| `v128.load32_zero` | `0xFD 92:u32 mem_idx:u8 offset:u32 align:u32` | `v128.load32_zero 0 offset=0 align=4` => `0xfd 0x5c 0x02 0x00` |

> [!NOTE]
> Während das Wasm-Textformat den wörtlichen `align`-Wert spezifiziert, stellt das binäre Äquivalent den Exponenten der Formel `2^x` dar, die zur Berechnung der Ausrichtung verwendet wird. So ist beispielsweise `align=1` äquivalent zu `0x00` (`2^0`), während `align=4` äquivalent zu `0x02` (`2^2`) ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [SIMD-Lade-/Speicherinstruktionen](/de/docs/WebAssembly/Reference/SIMD/load_store)
