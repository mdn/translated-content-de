---
title: "load32_lane: Wasm SIMD Lade-/Speicheranweisung"
short-title: load32_lane
slug: WebAssembly/Reference/SIMD/load_store/load32_lane
l10n:
  sourceCommit: 76b3f4216320b4ecdbc8b95028dc46aa67e1468e
---

Die **`load32_lane`** [SIMD Lade-/Speicheranweisung](/de/docs/WebAssembly/Reference/SIMD/load_store) lädt einen einzelnen Wert von einer angegebenen Speicheradresse in die spezifizierte Lane eines [`v128`](/de/docs/WebAssembly/Reference/Types/v128) Typs `i32x4` Wertinterpretation.

{{InteractiveExample("Wat Demo: load32_lane", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i32)))
  (memory $memory 1)
  (data (i32.const 0) "\01\02\03\04\05\06\07\08\09\0a\0b\0c\0d\0e\0f\00\01\02\03")
  (func $main
    i32.const 0
    v128.const i32x4 216 830 6 9000
    v128.load32_lane 3
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
v128.load32_lane lane_value

;; With optional immediate operands
v128.load32_lane mem_idx offset=int align=int lane_value
```

- `v128.load32_lane`
  - : Die `v128.load32_lane` Anweisung.
- `mem_idx` {{optional_inline}}
  - : Ein ganzzahliger Wert, der den Speicherindex repräsentiert, in Fällen, in denen das Modul mehrere Speichersysteme nutzt. Standardmäßig `0`.
- `offset=int` {{optional_inline}}
  - : Ein Ganzzahlwert, der eine konstante Anzahl von Bytes repräsentiert, die zur Speicheradresse hinzugefügt werden, bevor geladen wird. Standardmäßig `0`.
- `align=int` {{optional_inline}}
  - : Ein Ganzzahlwert, der als Hinweis für die Wasm-Engine dient, welche Ausrichtung für die finale Adresse erwartet wird. Der Mindestwert ist `1` und der Standard- sowie Höchstwert ist `4`. Ein `align`-Wert muss eine Potenz von `2` sein.
- `lane_value`
  - : Die Lane, in die ein Wert geladen werden soll.

### Typ

```plain
[memory_address, input] -> [output]
```

- `memory_address`
  - : Eine Ganzzahl, die die Speicheradresse darstellt, von der geladen wird.
- `input`
  - : Die Eingabe `v128` Typ `i32x4` Wertinterpretation.
- `output`
  - : Die Ausgabe `v128` Typ `i32x4` Wertinterpretation.

### Binärcodierung

| Anweisung          | Binärformat                                               | Beispieltext => binär                                                 |
| ------------------ | --------------------------------------------------------- | --------------------------------------------------------------------- |
| `v128.load32_lane` | `0xFD 86:u32 mem_idx:u8 offset:u32 align:u32 lane_idx:u8` | `v128.load32_lane 0 offset=0 align=4 3` => `0xfd 0x56 0x02 0x00 0x03` |

> [!NOTE]
> Während das Wasm-Textformat den buchstäblichen `align`-Wert angibt, stellt das binäre Äquivalent den Exponenten der Formel `2^x` dar, der zur Berechnung der Ausrichtung verwendet wird. Beispielsweise ist `align=1` äquivalent zu `0x00` (`2^0`), während `align=4` äquivalent zu `0x02` (`2^2`) ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [SIMD Lade-/Speicheranweisungen](/de/docs/WebAssembly/Reference/SIMD/load_store)
