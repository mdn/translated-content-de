---
title: "load16_lane: Wasm SIMD Ladeanweisung"
short-title: load16_lane
slug: WebAssembly/Reference/SIMD/load/load16_lane
l10n:
  sourceCommit: 09d8ff096be97b28ea415fc4c68fb1cff0ff8af9
---

Die **`load16_lane`** [SIMD-Ladeanweisung](/de/docs/WebAssembly/Reference/SIMD/load) lädt einen einzelnen Wert von einer angegebenen Speicheradresse in die angegebene Lane eines `i16x8`-Wertes des Typs [`v128`](/de/docs/WebAssembly/Reference/Types/v128).

{{InteractiveExample("Wat Demo: load16_lane", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i32)))
  (memory $memory 1)
  (data (i32.const 0) "\01\02\03\04\05\06\07\08\09\0a\0b\0c\0d\0e\0f\00\01\02\03")
  (func $main
    i32.const 0
    v128.const i16x8 10 4 6 5 8 7 11 3
    v128.load16_lane 6
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
v128.load16_lane lane_value

;; With optional immediate operands
v128.load16_lane mem_idx offset=int align=int lane_value

```

- `v128.load16_lane`
  - : Die `v128.load16_lane`-Anweisung.
- `mem_idx` {{optional_inline}}
  - : Ein ganzzahliger Wert, der den Speicherindex darstellt, wenn das Modul mehrere Speicher verwendet. Der Standardwert ist `0`.
- `offset=int` {{optional_inline}}
  - : Ein ganzzahliger Wert, der eine konstante Anzahl von Bytes darstellt, die zur Speicheradresse hinzugefügt werden, bevor geladen wird. Der Standardwert ist `0`.
- `align=int` {{optional_inline}}
  - : Ein ganzzahliger Wert, der der Wasm-Engine einen Hinweis darauf gibt, welche Ausrichtung für die endgültige Adresse zu erwarten ist. Der Mindestwert ist `1` und der Standard- und Höchstwert ist `2`. Ein `align`-Wert muss eine Potenz von `2` sein.
- `lane_value`
  - : Die Lane, in welche der Wert geladen werden soll.

### Typ

```plain
[memory_address, input] -> [output]
```

- `memory_address`
  - : Ein ganzzahliger Wert, der die Speicheradresse darstellt, von der geladen werden soll.
- `input`
  - : Die Eingabe-Interpretation des Typs `v128` als `i16x8`-Wert.
- `output`
  - : Die Ausgabe-Interpretation des Typs `v128` als `i16x8`-Wert.

### Binäre Codierung

| Anweisung          | Binärformat                                               | Beispiel-Text => Binär                                                |
| ------------------ | --------------------------------------------------------- | --------------------------------------------------------------------- |
| `v128.load16_lane` | `0xFD 85:u32 mem_idx:u8 offset:u32 align:u32 lane_idx:u8` | `v128.load16_lane 0 offset=0 align=2 6` => `0xfd 0x55 0x01 0x00 0x06` |

> [!NOTE]
> Während das Wasm-Textformat den literalen `align`-Wert vorgibt, stellt das binäre Äquivalent den Exponenten der Formel `2^x` dar, der verwendet wird, um die Ausrichtung zu berechnen. So entspricht zum Beispiel `align=1` dem Wert `0x00` (`2^0`), während `align=2` dem Wert `0x01` (`2^1`) entspricht.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [SIMD-Ladeanweisungen](/de/docs/WebAssembly/Reference/SIMD/load)
