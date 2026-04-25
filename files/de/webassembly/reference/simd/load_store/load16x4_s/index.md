---
title: "load16x4_s: Wasm SIMD Lade-/Speicheranweisung"
short-title: load16x4_s
slug: WebAssembly/Reference/SIMD/load_store/load16x4_s
l10n:
  sourceCommit: 76b3f4216320b4ecdbc8b95028dc46aa67e1468e
---

Die **`load16x4_s`** [SIMD Lade-/Speicheranweisung](/de/docs/WebAssembly/Reference/SIMD/load_store) lädt vier 16-Bit-Integer von einer angegebenen Speicheradresse und erweitert jedes um ein Vorzeichen auf einen 32-Bit-Kanal, ausgeben wird eine [`v128`](/de/docs/WebAssembly/Reference/Types/v128) Typ `i32x4` Wertinterpretation.

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
  - : Die `v128.load16x4_s` Anweisung.
- `mem_idx` {{optional_inline}}
  - : Ein Integer, der den Speicherindex darstellt, in Fällen, in denen das Modul mehrere Speicher verwendet. Der Standard ist `0`.
- `offset=int` {{optional_inline}}
  - : Ein Integer, der eine konstante Anzahl von Bytes darstellt, die zur Speicheradresse hinzugefügt werden müssen, bevor geladen wird. Der Standard ist `0`.
- `align=int` {{optional_inline}}
  - : Ein Integer, der der Wasm-Engine einen Hinweis gibt, welche Ausrichtung für die endgültige Adresse erwartet wird. Der Mindestwert ist `1` und der Standard- und Höchstwert ist `8`. Ein `align`-Wert muss eine Potenz von `2` sein.

### Typ

```plain
[memory_address] -> [output]
```

- `memory_address`
  - : Ein Integer, der die Speicheradresse darstellt, von der geladen werden soll.
- `output`
  - : Die Ausgabe `v128` Typ `i32x4` Wertinterpretation.

### Binärkodierung

| Anweisung         | Binärformat                                  | Beispieltext => binär                                         |
| ----------------- | -------------------------------------------- | ------------------------------------------------------------- |
| `v128.load16x4_s` | `0xFD 3:u32 mem_idx:u8 offset:u32 align:u32` | `v128.load16x4_s 0 offset=0 align=4` => `0xfd 0x03 0x02 0x00` |

> [!NOTE]
> Während das Wasm-Textformat den wörtlichen `align`-Wert angibt, stellt das binäre Äquivalent den Exponenten der Formel `2^x` dar, die zur Berechnung der Ausrichtung verwendet wird. Zum Beispiel ist `align=1` gleichbedeutend mit `0x00` (`2^0`), während `align=8` gleichbedeutend mit `0x03` (`2^3`) ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [SIMD Lade-/Speicheranweisungen](/de/docs/WebAssembly/Reference/SIMD/load_store)
