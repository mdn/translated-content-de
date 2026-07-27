---
title: "load16x4_s: Wasm SIMD Lade-/Speicheranweisung"
short-title: load16x4_s
slug: WebAssembly/Reference/SIMD/load_store/load16x4_s
l10n:
  sourceCommit: d8d43055ac49fc512539fe02d873be4ffee29bc0
---

Die **`load16x4_s`** [SIMD Lade-/Speicheranweisung](/de/docs/WebAssembly/Reference/SIMD/load_store) lädt vier 16-Bit-Ganzzahlen von einer angegebenen Speicheradresse und erweitert jede auf das Vorzeichen bezogen auf eine 32-Bit-Spur, wobei eine Interpretation des Typs [`v128`](/de/docs/WebAssembly/Reference/Value_types/v128) als `i32x4` ausgegeben wird.

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
  - : Ein Integer, der den Speicherindex darstellt, in Fällen, in denen das Modul mehrere Speicher verwendet. Der Standardwert ist `0`.
- `offset=int` {{optional_inline}}
  - : Ein Integer, der eine konstante Anzahl von Bytes darstellt, die zur Speicheradresse hinzugefügt werden, bevor geladen wird. Der Standardwert ist `0`.
- `align=int` {{optional_inline}}
  - : Ein Integer, der dem Wasm-Engine einen Hinweis darauf gibt, welche Ausrichtung für die finale Adresse zu erwarten ist. Der Mindestwert ist `1` und der Standard- und Höchstwert ist `8`. Ein `align`-Wert muss eine Potenz von `2` sein.

### Typ

```plain
[memory_address] -> [output]
```

- `memory_address`
  - : Ein Integer, der die Speicheradresse darstellt, von der geladen wird.
- `output`
  - : Die Ausgabe besteht aus einer Interpretation des Typs `v128` als `i32x4`.

### Binärkodierung

| Anweisung         | Binärformat                                  | Beispieltext => Binär                                         |
| ----------------- | -------------------------------------------- | ------------------------------------------------------------- |
| `v128.load16x4_s` | `0xFD 3:u32 mem_idx:u8 offset:u32 align:u32` | `v128.load16x4_s 0 offset=0 align=4` => `0xfd 0x03 0x02 0x00` |

> [!NOTE]
> Während das Wasm-Textformat den buchstäblichen `align`-Wert spezifiziert, stellt das binäre Äquivalent den Exponenten der Formel `2^x` dar, die zur Berechnung der Ausrichtung verwendet wird. Zum Beispiel entspricht `align=1` `0x00` (`2^0`), während `align=8` `0x03` (`2^3`) entspricht.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
