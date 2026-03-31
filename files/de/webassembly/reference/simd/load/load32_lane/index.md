---
title: "load32_lane: Wasm SIMD Ladebefehl"
short-title: load32_lane
slug: WebAssembly/Reference/SIMD/load/load32_lane
l10n:
  sourceCommit: d3b22d8099235ad3a0ef2a494106fc2ea178863d
---

Der **`load32_lane`** [SIMD-Ladebefehl](/de/docs/WebAssembly/Reference/SIMD/load) lädt einen einzelnen Wert von einer gegebenen Speicheradresse in die spezifizierte Spur eines `v128`-Typs mit der `i32x4`-Wertinterpretation.

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

;; With optional immediates
v128.load32_lane memidx offset=int align=int lane_value
```

- `v128.load32_lane`
  - : Der `v128.load32_lane`-Befehl.
- `memidx` {{optional_inline}}
  - : Eine Ganzzahl, die den Speicherindex darstellt, in Fällen, in denen das Modul mehrere Speicher verwendet. Der Standardwert ist `0`.
- `offset=int` {{optional_inline}}
  - : Eine Ganzzahl, die eine konstante Anzahl von Bytes darstellt, die zur Speicheradresse hinzugefügt werden, bevor geladen wird. Der Standardwert ist `0`.
- `align=int` {{optional_inline}}
  - : Eine Ganzzahl, die dem Wasm-Engine einen Hinweis gibt, welche Ausrichtung für die endgültige Adresse erwartet wird. Der Mindestwert ist `1` und der Standard- und Höchstwert ist `4`. Ein `align`-Wert muss eine Potenz von `2` sein.
- `lane_value`
  - : Die Spur, in die ein Wert geladen werden soll.

### Typ

```plain
[memory_address, input] -> [output]
```

- `memory_address`
  - : Eine Ganzzahl, die die Speicheradresse darstellt, von der geladen werden soll.
- `input`
  - : Die Eingabe `v128`-Typ `i32x4`-Wertinterpretation.
- `output`
  - : Die Ausgabe `v128`-Typ `i32x4`-Wertinterpretation.

### Binärkodierung

| Befehl             | Binärformat                                             | Beispieltext => binär                                                 |
| ------------------ | ------------------------------------------------------- | --------------------------------------------------------------------- |
| `v128.load32_lane` | `0xFD 86:u32 memidx:u8 offset:u32 align:u32 laneidx:u8` | `v128.load32_lane 0 offset=0 align=4 3` => `0xfd 0x56 0x02 0x00 0x03` |

> [!NOTE]
> Während das Wasm-Textformat den buchstäblichen `align`-Wert spezifiziert, stellt das binäre Äquivalent den Exponenten der Formel `2^x` dar, die zur Berechnung der Ausrichtung verwendet wird. Zum Beispiel ist `align=1` äquivalent zu `0x00` (`2^0`), während `align=4` äquivalent zu `0x02` (`2^2`) ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [SIMD-Ladebefehle](/de/docs/WebAssembly/Reference/SIMD/load)
