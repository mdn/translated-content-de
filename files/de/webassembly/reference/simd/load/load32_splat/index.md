---
title: "load32_splat: Wasm SIMD Ladebefehl"
short-title: load32_splat
slug: WebAssembly/Reference/SIMD/load/load32_splat
l10n:
  sourceCommit: d3b22d8099235ad3a0ef2a494106fc2ea178863d
---

Der **`load32_splat`** [SIMD Ladebefehl](/de/docs/WebAssembly/Reference/SIMD/load) lädt einen einzelnen Wert von einer angegebenen Speicheradresse in alle Lanes eines [`v128`](/de/docs/WebAssembly/Reference/Types/v128) `i32x4` Typwertinterpretation.

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

;; With optional immediates
v128.load32_splat memidx offset=int align=int
```

- `v128.load32_splat`
  - : Der `v128.load32_splat` Befehl.
- `memidx` {{optional_inline}}
  - : Ein ganzzahliger Wert, der den Speicherindex darstellt, in Fällen, in denen das Modul mehrere Speicher verwendet. Der Standardwert ist `0`.
- `offset=int` {{optional_inline}}
  - : Ein ganzzahliger Wert, der eine konstante Anzahl von Bytes darstellt, die zur Speicheradresse hinzugefügt werden, bevor geladen wird. Der Standardwert ist `0`.
- `align=int` {{optional_inline}}
  - : Ein ganzzahliger Wert, der der Wasm-Engine einen Hinweis darauf gibt, welche Ausrichtung für die endgültige Adresse erwartet wird. Der Mindestwert ist `1` und der Standard- sowie Höchstwert ist `4`. Ein `align`-Wert muss eine Potenz von `2` sein.

### Typ

```plain
[memory_address] -> [output]
```

- `memory_address`
  - : Ein ganzzahliger Wert, der die Speicheradresse darstellt, von der geladen werden soll.
- `output`
  - : Die Ausgabe `v128` Typ `i32x4` Wertinterpretation.

### Binäre Kodierung

| Befehl              | Binärformat                                 | Beispieltext => binär                                           |
| ------------------- | ------------------------------------------- | --------------------------------------------------------------- |
| `v128.load32_splat` | `0xFD 9:u32 memidx:u8 offset:u32 align:u32` | `v128.load32_splat 0 offset=0 align=4` => `0xfd 0x09 0x02 0x00` |

> [!NOTE]
> Während das Wasm-Textformat den wörtlichen `align`-Wert angibt, stellt das binäre Äquivalent den Exponenten der Formel `2^x` dar, die zur Berechnung der Ausrichtung verwendet wird. Zum Beispiel entspricht `align=1` dem Wert `0x00` (`2^0`), während `align=4` dem Wert `0x02` (`2^2`) entspricht.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [SIMD Ladebefehle](/de/docs/WebAssembly/Reference/SIMD/load)
