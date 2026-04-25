---
title: "load: Wasm SIMD Lade-/Speicheranweisung"
short-title: load
slug: WebAssembly/Reference/SIMD/load_store/load
l10n:
  sourceCommit: 76b3f4216320b4ecdbc8b95028dc46aa67e1468e
---

Die **`load`** [SIMD Lade-/Speicheranweisung](/de/docs/WebAssembly/Reference/SIMD/load_store) lädt alle Lanes einer [`v128`](/de/docs/WebAssembly/Reference/Types/v128) Wertinterpretation mit Werten von einer gegebenen Speicheradresse.

{{InteractiveExample("Wat Demo: load", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i32)))
  (memory $memory 1)
  (data (i32.const 0) "\00\01\02\03\04\05\06\07\08\09\0a\0b\0c\0d\0e\0f\00\01\02\03")
  (func $main
    i32.const 5
    v128.load
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
v128.load

;; With optional immediate operands
v128.load mem_idx offset=int align=int
```

- `v128.load`
  - : Die `v128.load` Anweisung.
- `mem_idx` {{optional_inline}}
  - : Ein ganzzahliger Wert, der den Speicherindex darstellt, falls das Modul mehrere Speicher verwendet. Der Standardwert ist `0`.
- `offset=int` {{optional_inline}}
  - : Eine Ganzzahl, die eine konstante Anzahl von Bytes darstellt, die zur Speicheradresse hinzugefügt werden soll, bevor geladen wird. Der Standardwert ist `0`.
- `align=int` {{optional_inline}}
  - : Eine Ganzzahl, die dem Wasm-Engine einen Hinweis gibt, welche Ausrichtung für die finale Adresse zu erwarten ist. Der Mindestwert ist `1` und der Standard- und Höchstwert ist `16`. Ein `align` Wert muss eine Potenz von `2` sein.

### Typ

```plain
[memory_address] -> [output]
```

- `memory_address`
  - : Eine Ganzzahl, die die Speicheradresse darstellt, von der geladen werden soll.
- `output`
  - : Der Ausgabe-Typ `v128`.

### Binäre Kodierung

| Anweisung   | Binärformat                                  | Beispieltext => Binär                                    |
| ----------- | -------------------------------------------- | -------------------------------------------------------- |
| `v128.load` | `0xfd 0:u32 mem_idx:u8 offset:u32 align:u32` | `v128.load 0 offset=0 align=16` => `0xfd 0x00 0x04 0x00` |

> [!NOTE]
> Während das Wasm-Textformat den wörtlichen `align` Wert angibt, steht das binäre Äquivalent für den Exponenten der Formel `2^x`, die zur Berechnung der Ausrichtung verwendet wird. So entspricht zum Beispiel `align=1` dem Wert `0x00` (`2^0`), während `align=16` dem Wert `0x04` (`2^4`) entspricht.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [SIMD Lade-/Speicheranweisungen](/de/docs/WebAssembly/Reference/SIMD/load_store)
