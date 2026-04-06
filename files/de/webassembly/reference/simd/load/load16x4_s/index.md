---
title: "load16x4_s: Wasm SIMD Load-Befehl"
short-title: load16x4_s
slug: WebAssembly/Reference/SIMD/load/load16x4_s
l10n:
  sourceCommit: 09d8ff096be97b28ea415fc4c68fb1cff0ff8af9
---

Der **`load16x4_s`** [SIMD Load-Befehl](/de/docs/WebAssembly/Reference/SIMD/load) lädt vier 16-Bit-Ganzzahlen von einer gegebenen Speicheradresse und erweitert jede auf das Vorzeichen zu einem 32-Bit-Lane, wobei eine [`v128`](/de/docs/WebAssembly/Reference/Types/v128) Typ `i32x4` Werteinterpretation ausgegeben wird.

{{InteractiveExample("Wat Demo: load16x4_s", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i32)))
  (memory $memory 1)
  (data (i32.const 0) "\01\02\03\04\05\06\07\08\09\0a\0b\0c\0d\0e\0f\00\01\02\03")
  (func $main
    i32.const 0
    v128.load16x4_s
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
v128.load16x4_s

;; With optional immediate operands
v128.load16x4_s mem_idx offset=int align=int
```

- `v128.load16x4_s`
  - : Der `v128.load16x4_s` Befehl.
- `mem_idx` {{optional_inline}}
  - : Ein Ganzzahlwert, der den Speicherindex darstellt, wenn das Modul mehrere Speicher verwendet. Der Standardwert ist `0`.
- `offset=int` {{optional_inline}}
  - : Ein Ganzzahlwert, der eine konstante Anzahl von Bytes darstellt, die zur Speicheradresse hinzugefügt werden, bevor geladen wird. Der Standardwert ist `0`.
- `align=int` {{optional_inline}}
  - : Ein Ganzzahlwert, der dem Wasm-Engine einen Hinweis darauf gibt, welche Ausrichtung für die endgültige Adresse erwartet wird. Der Mindestwert ist `1` und der Standard- und Höchstwert ist `8`. Ein `align`-Wert muss eine Potenz von `2` sein.

### Typ

```plain
[memory_address] -> [output]
```

- `memory_address`
  - : Eine Ganzzahl, die die Speicheradresse darstellt, von der geladen werden soll.
- `output`
  - : Die Ausgabe `v128` Typ `i32x4` Werteinterpretation.

### Binärcodierung

| Befehl            | Binärformat                                  | Beispiel Text => Binär                                        |
| ----------------- | -------------------------------------------- | ------------------------------------------------------------- |
| `v128.load16x4_s` | `0xFD 3:u32 mem_idx:u8 offset:u32 align:u32` | `v128.load16x4_s 0 offset=0 align=4` => `0xfd 0x03 0x02 0x00` |

> [!NOTE]
> Während das Wasm-Textformat den literalen `align`-Wert angibt, repräsentiert das binäre Äquivalent den Exponenten der Formel `2^x`, die zur Berechnung der Ausrichtung verwendet wird. So ist zum Beispiel `align=1` gleichbedeutend mit `0x00` (`2^0`), während `align=8` gleichbedeutend mit `0x03` (`2^3`) ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [SIMD Load-Befehle](/de/docs/WebAssembly/Reference/SIMD/load)
