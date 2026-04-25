---
title: "load16_lane: Wasm SIMD Lade-/Speicheranweisung"
short-title: load16_lane
slug: WebAssembly/Reference/SIMD/load_store/load16_lane
l10n:
  sourceCommit: 76b3f4216320b4ecdbc8b95028dc46aa67e1468e
---

Die **`load16_lane`** [SIMD Lade-/Speicheranweisung](/de/docs/WebAssembly/Reference/SIMD/load_store) lädt einen einzelnen Wert von einer gegebenen Speicheradresse in die spezifizierte Lane eines [`v128`](/de/docs/WebAssembly/Reference/Types/v128) Typs `i16x8` Werteinterpretation.

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
  - : Die `v128.load16_lane` Anweisung.
- `mem_idx` {{optional_inline}}
  - : Ein Integer, der den Speicherindex darstellt, in Fällen, in denen das Modul mehrere Speicher verwendet. Der Standardwert ist `0`.
- `offset=int` {{optional_inline}}
  - : Ein Integer, der eine konstante Anzahl von Bytes darstellt, die zur Speicheradresse hinzugefügt werden, bevor geladen wird. Der Standardwert ist `0`.
- `align=int` {{optional_inline}}
  - : Ein Integer, der einen Hinweis für die Wasm-Engine darstellt, welcher Ausrichtung für die endgültige Adresse erwartet werden soll. Der Mindestwert ist `1`, der Standard- und Höchstwert ist `2`. Ein `align` Wert muss eine Potenz von `2` sein.
- `lane_value`
  - : Die Lane, in die ein Wert geladen werden soll.

### Typ

```plain
[memory_address, input] -> [output]
```

- `memory_address`
  - : Ein Integer, der die Speicheradresse darstellt, von der geladen wird.
- `input`
  - : Die Eingabe `v128` Typ `i16x8` Werteinterpretation.
- `output`
  - : Die Ausgabe `v128` Typ `i16x8` Werteinterpretation.

### Binärkodierung

| Anweisung          | Binärformat                                               | Beispieltext => binär                                                 |
| ------------------ | --------------------------------------------------------- | --------------------------------------------------------------------- |
| `v128.load16_lane` | `0xFD 85:u32 mem_idx:u8 offset:u32 align:u32 lane_idx:u8` | `v128.load16_lane 0 offset=0 align=2 6` => `0xfd 0x55 0x01 0x00 0x06` |

> [!NOTE]
> Während das Wasm-Textformat den wörtlichen `align` Wert angibt, stellt das binäre Äquivalent den Exponenten der Formel `2^x` dar, die zur Berechnung der Ausrichtung verwendet wird. Zum Beispiel ist `align=1` gleichbedeutend mit `0x00` (`2^0`), während `align=2` gleichbedeutend mit `0x01` (`2^1`) ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [SIMD Lade-/Speicheranweisungen](/de/docs/WebAssembly/Reference/SIMD/load_store)
