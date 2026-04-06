---
title: "load32_lane: Wasm SIMD Ladeinstruktion"
short-title: load32_lane
slug: WebAssembly/Reference/SIMD/load/load32_lane
l10n:
  sourceCommit: 09d8ff096be97b28ea415fc4c68fb1cff0ff8af9
---

Die **`load32_lane`** [SIMD Ladeinstruktion](/de/docs/WebAssembly/Reference/SIMD/load) lädt einen einzelnen Wert von einer angegebenen Speicheradresse in die spezifizierte Spur einer [`v128`](/de/docs/WebAssembly/Reference/Types/v128) Typ `i32x4` Wertinterpretation.

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
  - : Die `v128.load32_lane` Instruktion.
- `mem_idx` {{optional_inline}}
  - : Ein ganzzahliger Wert, der den Speicherindex darstellt, falls das Modul mehrere Speicher verwendet. Der Standardwert ist `0`.
- `offset=int` {{optional_inline}}
  - : Ein Ganzzahlwert, der eine konstante Anzahl von Bytes repräsentiert, die zur Speicheradresse hinzugefügt werden, bevor sie geladen wird. Der Standardwert ist `0`.
- `align=int` {{optional_inline}}
  - : Ein ganzzahliger Wert, der der Wasm-Engine einen Hinweis auf die zu erwartende Ausrichtung der endgültigen Adresse gibt. Der Mindestwert ist `1`, der Standard- und Höchstwert ist `4`. Ein `align`-Wert muss eine Zweierpotenz sein.
- `lane_value`
  - : Die Spur, in die ein Wert geladen werden soll.

### Typ

```plain
[memory_address, input] -> [output]
```

- `memory_address`
  - : Eine Ganzzahl, die die Speicheradresse darstellt, von der geladen werden soll.
- `input`
  - : Die Eingabe `v128` Typ `i32x4` Wertinterpretation.
- `output`
  - : Die Ausgabe `v128` Typ `i32x4` Wertinterpretation.

### Binärcodekodierung

| Instruktion        | Binärformat                                               | Beispieltext => binär                                                 |
| ------------------ | --------------------------------------------------------- | --------------------------------------------------------------------- |
| `v128.load32_lane` | `0xFD 86:u32 mem_idx:u8 offset:u32 align:u32 lane_idx:u8` | `v128.load32_lane 0 offset=0 align=4 3` => `0xfd 0x56 0x02 0x00 0x03` |

> [!NOTE]
> Während das Wasm-Textformat den literal `align`-Wert angibt, repräsentiert das binäre Äquivalent den Exponenten der Formel `2^x`, die zur Berechnung der Ausrichtung verwendet wird. Zum Beispiel ist `align=1` gleichbedeutend mit `0x00` (`2^0`), während `align=4` gleichbedeutend mit `0x02` (`2^2`) ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [SIMD Ladeinstruktionen](/de/docs/WebAssembly/Reference/SIMD/load)
