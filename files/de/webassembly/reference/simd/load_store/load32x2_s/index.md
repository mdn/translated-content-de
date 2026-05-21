---
title: "load32x2_s: Wasm SIMD Lade-/Speicheranweisung"
short-title: load32x2_s
slug: WebAssembly/Reference/SIMD/load_store/load32x2_s
l10n:
  sourceCommit: ca1301872404bbc0305fa945cf3e3fb2351863bf
---

Die **`load32x2_s`** [SIMD Lade-/Speicheranweisung](/de/docs/WebAssembly/Reference/SIMD/load_store) lädt zwei 32-Bit-Ganzzahlen von einer angegebenen Speicheradresse und erweitert jede davon mit Vorzeichen auf eine 64-Bit-Spur. Das Ergebnis ist eine [`v128`](/de/docs/WebAssembly/Reference/Value_types/v128) Typ `i64x2` Wertinterpretation.

{{InteractiveExample("Wat Demo: load32x2_s", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i64)))
  (memory $memory 1)
  (data (i32.const 0) "\01\02\03\04\05\06\07\08\09\0a\0b\0c\0d\0e\0f\00\01\02\03")
  (func $main
    i32.const 0
    v128.load32x2_s
    i64x2.extract_lane 1
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
v128.load32x2_s

;; With optional immediate operands
v128.load32x2_s mem_idx offset=int align=int
```

- `v128.load32x2_s`
  - : Die `v128.load32x2_s` Anweisung.
- `mem_idx` {{optional_inline}}
  - : Ein ganzzahliger Wert, der den Speicherindex repräsentiert, in Fällen, in denen das Modul mehrere Speichereinheiten verwendet. Der Standardwert ist `0`.
- `offset=int` {{optional_inline}}
  - : Ein ganzzahliger Wert, der eine konstante Anzahl von Bytes darstellt, die zu der Speicheradresse hinzugefügt werden, bevor geladen wird. Der Standardwert ist `0`.
- `align=int` {{optional_inline}}
  - : Ein ganzzahliger Wert, der der Wasm-Engine einen Hinweis darauf gibt, welche Ausrichtung für die endgültige Adresse zu erwarten ist. Der Minimalwert ist `1` und der Standard- und Maximalwert ist `8`. Ein `align`-Wert muss eine Potenz von `2` sein.

### Typ

```plain
[memory_address] -> [output]
```

- `memory_address`
  - : Ein ganzzahliger Wert, der die Speicheradresse repräsentiert, von der geladen wird.
- `output`
  - : Die Ausgabe `v128` Typ `i64x2` Wertinterpretation.

### Binärcodierung

| Anweisung         | Binärformat                                  | Beispieltext => binär                                         |
| ----------------- | -------------------------------------------- | ------------------------------------------------------------- |
| `v128.load32x2_s` | `0xFD 5:u32 mem_idx:u8 offset:u32 align:u32` | `v128.load32x2_s 0 offset=0 align=8` => `0xfd 0x05 0x03 0x00` |

> [!NOTE]
> Während das Wasm-Textformat den literalen `align`-Wert angibt, repräsentiert das binäre Äquivalent den Exponenten der Formel `2^x`, die zur Berechnung der Ausrichtung verwendet wird. So ist zum Beispiel `align=1` äquivalent zu `0x00` (`2^0`), während `align=8` äquivalent zu `0x03` (`2^3`) ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [SIMD Lade-/Speicheranweisungen](/de/docs/WebAssembly/Reference/SIMD/load_store)
