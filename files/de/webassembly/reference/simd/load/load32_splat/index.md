---
title: "load32_splat: Wasm SIMD Ladeanweisung"
short-title: load32_splat
slug: WebAssembly/Reference/SIMD/load/load32_splat
l10n:
  sourceCommit: 09d8ff096be97b28ea415fc4c68fb1cff0ff8af9
---

Die **`load32_splat`** [SIMD Ladeanweisung](/de/docs/WebAssembly/Reference/SIMD/load) lädt einen einzelnen Wert von einer angegebenen Speicheradresse in alle Lanes eines `v128`-Werts mit `i32x4`-Interpretation.

{{InteractiveExample("Wat Demo: load32_splat", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i32)))
  (memory $memory 1)
  (data (i32.const 0) "\01\02\03\04\05\06\07\08\09\0a\0b\0c\0d\0e\0f\00\01\02\03")
  (func $main
    i32.const 1
    v128.load32_splat
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
v128.load32_splat

;; With optional immediate operands
v128.load32_splat mem_idx offset=int align=int
```

- `v128.load32_splat`
  - : Die `v128.load32_splat`-Anweisung.
- `mem_idx` {{optional_inline}}
  - : Ein ganzzahliger Wert, der den Speicherindex darstellt, in Fällen, in denen das Modul mehrere Speicher verwendet. Der Standardwert ist `0`.
- `offset=int` {{optional_inline}}
  - : Ein ganzzahliger Wert, der eine konstante Anzahl von Bytes darstellt, die zur Speicheradresse hinzugefügt werden, bevor geladen wird. Der Standardwert ist `0`.
- `align=int` {{optional_inline}}
  - : Ein ganzzahliger Wert, der einen Hinweis an die Wasm-Engine über die zu erwartende Ausrichtung der Endadresse gibt. Der Mindestwert ist `1` und der Standard- sowie Höchstwert beträgt `4`. Ein `align`-Wert muss eine Potenz von `2` sein.

### Typ

```plain
[memory_address] -> [output]
```

- `memory_address`
  - : Ein ganzzahliger Wert, der die Speicheradresse darstellt, von der geladen werden soll.
- `output`
  - : Die `v128`-Ausgabe mit `i32x4`-Wertinterpretation.

### Binärcode

| Anweisung           | Binärformat                                  | Beispieltext => Binär                                           |
| ------------------- | -------------------------------------------- | --------------------------------------------------------------- |
| `v128.load32_splat` | `0xFD 9:u32 mem_idx:u8 offset:u32 align:u32` | `v128.load32_splat 0 offset=0 align=4` => `0xfd 0x09 0x02 0x00` |

> [!NOTE]
> Während das Wasm-Textformat den wörtlichen `align`-Wert angibt, stellt das binäre Äquivalent den Exponenten der Formel `2^x` dar, die zur Berechnung der Ausrichtung verwendet wird. So ist beispielsweise `align=1` äquivalent zu `0x00` (`2^0`), während `align=4` äquivalent zu `0x02` (`2^2`) ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [SIMD Ladeanweisungen](/de/docs/WebAssembly/Reference/SIMD/load)
