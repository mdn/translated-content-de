---
title: "load64_zero: Wasm SIMD load/store-Anweisung"
short-title: load64_zero
slug: WebAssembly/Reference/SIMD/load_store/load64_zero
l10n:
  sourceCommit: d8d43055ac49fc512539fe02d873be4ffee29bc0
---

Die **`load64_zero`** [SIMD load/store-Anweisung](/de/docs/WebAssembly/Reference/SIMD/load_store) lädt einen einzelnen Wert von einer angegebenen Speicheradresse in die erste Lane eines [`v128`](/de/docs/WebAssembly/Reference/Value_types/v128)-Typs mit der `i64x2`-Werteinterpretation und initialisiert die andere Lane auf `0`.

{{InteractiveExample("Wat Demo: load64_zero", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i64)))
  (memory $memory 1)
  (data (i32.const 0) "\01\02\03\04\05\06\07\08\09\0a\0b\0c\0d\0e\0f\00\01\02\03")
  (func $main
    i32.const 1
    v128.load64_zero
    i64x2.extract_lane 0
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
v128.load64_zero

;; With optional immediate operands
v128.load64_zero mem_idx offset=int align=int
```

- `v128.load64_zero`
  - : Die `v128.load64_zero`-Anweisung.
- `mem_idx` {{optional_inline}}
  - : Ein ganzzahliger Wert, der den Speicherindex darstellt, falls das Modul mehrere Speicher nutzt. Der Standardwert ist `0`.
- `offset=int` {{optional_inline}}
  - : Ein Ganzzahlwert, der eine konstante Anzahl von Bytes darstellt, die zur Speicheradresse hinzugefügt werden, bevor geladen wird. Der Standardwert ist `0`.
- `align=int` {{optional_inline}}
  - : Ein Ganzzahlwert, der dem Wasm-Engine einen Hinweis darauf gibt, welche Ausrichtung für die endgültige Adresse zu erwarten ist. Der Mindestwert ist `1`, und der Standard- und Höchstwert ist `8`. Ein `align`-Wert muss eine Potenz von `2` sein.

### Typ

```plain
[memory_address] -> [output]
```

- `memory_address`
  - : Ein ganzzahliger Wert, der die Speicheradresse darstellt, von der gelesen werden soll.
- `output`
  - : Die Ausgabe des `v128`-Typs mit der `i64x2`-Werteinterpretation.

### Binärcodierung

| Anweisung          | Binärformat                                   | Beispieltext => binär                                          |
| ------------------ | --------------------------------------------- | -------------------------------------------------------------- |
| `v128.load64_zero` | `0xFD 93:u32 mem_idx:u8 offset:u32 align:u32` | `v128.load64_zero 0 offset=0 align=8` => `0xfd 0x5d 0x03 0x00` |

> [!NOTE]
> Während das Wasm-Textformat den literalen `align`-Wert spezifiziert, stellt das binäre Äquivalent den Exponenten der Formel `2^x` dar, die zur Berechnung der Ausrichtung verwendet wird. So ist zum Beispiel `align=1` äquivalent zu `0x00` (`2^0`), während `align=8` äquivalent zu `0x03` (`2^3`) ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
