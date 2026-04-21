---
title: "load64_lane: Wasm SIMD Lade-/Speicheranweisung"
short-title: load64_lane
slug: WebAssembly/Reference/SIMD/load_store/load64_lane
l10n:
  sourceCommit: 76b3f4216320b4ecdbc8b95028dc46aa67e1468e
---

Die **`load64_lane`** [SIMD Lade-/Speicheranweisung](/de/docs/WebAssembly/Reference/SIMD/load_store) lädt einen einzelnen Wert von einer angegebenen Speicheradresse in die spezifizierte Lane eines [`v128`](/de/docs/WebAssembly/Reference/Types/v128) Typs `i64x2` Wertinterpretation.

{{InteractiveExample("Wat Demo: load64_lane", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i64)))
  (memory $memory 1)
  (data (i32.const 0) "\01\02\03\04\05\06\07\08\09\0a\0b\0c\0d\0e\0f\00\01\02\03")
  (func $main
    i32.const 0
    v128.const i64x2 90000000 216000
    v128.load64_lane 0
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
v128.load64_lane lane_idx

;; With optional immediate operands
v128.load64_lane mem_idx offset=int align=int lane_idx
```

- `v128.load64_lane`
  - : Die `v128.load64_lane` Anweisung.
- `mem_idx` {{optional_inline}}
  - : Ein ganzzahliger Wert, der den Speicherindex darstellt, in Fällen, in denen das Modul mehrere Speicher verwendet. Der Standardwert ist `0`.
- `offset=int` {{optional_inline}}
  - : Ein ganzzahliger Wert, der eine konstante Anzahl von Bytes darstellt, die zur Speicheradresse hinzugefügt werden, bevor geladen wird. Der Standardwert ist `0`.
- `align=int` {{optional_inline}}
  - : Ein ganzzahliger Wert, der der Wasm-Engine einen Hinweis darauf gibt, welche Ausrichtung für die endgültige Adresse erwartet wird. Der Mindestwert ist `1` und der Standard- und Höchstwert ist `8`. Ein `align` Wert muss eine Potenz von `2` sein.
- `lane_idx`
  - : Ein ganzzahliger Wert, der den Index der Lane darstellt, in die ein Wert geladen werden soll.

### Typ

```plain
[memory_address, input] -> [output]
```

- `memory_address`
  - : Ein ganzzahliger Wert, der die Speicheradresse darstellt, von der geladen werden soll.
- `input`
  - : Die Eingabe `v128` Typ `i64x2` Wertinterpretation.
- `output`
  - : Die Ausgabe `v128` Typ `i64x2` Wertinterpretation.

### Binärcodierung

| Anweisung          | Binärformat                                             | Beispieltext => binär                                                 |
| ------------------ | ------------------------------------------------------- | --------------------------------------------------------------------- |
| `v128.load64_lane` | `0xFD 87:u32 memidx:u8 offset:u32 align:u32 laneidx:u8` | `v128.load64_lane 0 offset=0 align=8 0` => `0xfd 0x57 0x03 0x00 0x00` |

> [!NOTE]
> Während das Wasm-Textformat den buchstäblichen `align` Wert spezifiziert, stellt das binäre Äquivalent den Exponenten der Formel `2^x` dar, die zur Berechnung der Ausrichtung verwendet wird. Zum Beispiel entspricht `align=1` `0x00` (`2^0`), während `align=8` `0x03` (`2^3`) entspricht.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [SIMD Lade-/Speicheranweisungen](/de/docs/WebAssembly/Reference/SIMD/load_store)
