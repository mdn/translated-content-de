---
title: "load16x4_u: Wasm SIMD Ladebefehl"
short-title: load16x4_u
slug: WebAssembly/Reference/SIMD/load/load16x4_u
l10n:
  sourceCommit: d3b22d8099235ad3a0ef2a494106fc2ea178863d
---

Der **`load16x4_u`** [SIMD Ladebefehl](/de/docs/WebAssembly/Reference/SIMD/load) lädt vier 16-Bit-Ganzzahlen von einer angegebenen Speicheradresse und erweitert jede davon auf eine 32-Bit-Spur, wobei eine [`v128`](/de/docs/WebAssembly/Reference/Types/v128) Typ `i32x4` Wertinterpretation ausgegeben wird.

{{InteractiveExample("Wat Demo: load16x4_u", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i32)))
  (memory $memory 1)
  (data (i32.const 0) "\01\02\03\04\05\06\07\08\09\0a\0b\0c\0d\0e\0f\00\01\02\03")
  (func $main
    i32.const 0
    v128.load16x4_u
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
v128.load16x4_u

;; With optional immediates
v128.load16x4_u memidx offset=int align=int
```

- `v128.load16x4_u`
  - : Der `v128.load16x4_u` Befehl.
- `memidx` {{optional_inline}}
  - : Eine ganze Zahl, die den Speicherindex darstellt, in Fällen, in denen das Modul mehrere Speicher verwendet. Der Standardwert ist `0`.
- `offset=int` {{optional_inline}}
  - : Eine ganze Zahl, die eine konstante Anzahl von Bytes darstellt, die zur Speicheradresse hinzugefügt werden, bevor geladen wird. Der Standardwert ist `0`.
- `align=int` {{optional_inline}}
  - : Eine ganze Zahl, die der Wasm-Engine einen Hinweis darauf gibt, welche Ausrichtung für die endgültige Adresse zu erwarten ist. Der Mindestwert ist `1` und der Standard- sowie Höchstwert ist `8`. Ein `align`-Wert muss eine Potenz von `2` sein.

### Typ

```plain
[memory_address] -> [output]
```

- `memory_address`
  - : Eine ganze Zahl, die die Speicheradresse darstellt, von der geladen wird.
- `output`
  - : Die Ausgabe `v128` Typ `i32x4` Wertinterpretation.

### Binäre Kodierung

| Befehl            | Binärformat                                 | Beispieltext => binär                                         |
| ----------------- | ------------------------------------------- | ------------------------------------------------------------- |
| `v128.load16x4_u` | `0xFD 4:u32 memidx:u8 offset:u32 align:u32` | `v128.load16x4_u 0 offset=0 align=4` => `0xfd 0x04 0x00 0x00` |

> [!NOTE]
> Während das Wasm-Textformat den literal `align` Wert angibt, stellt das binäre Äquivalent den Exponenten der Formel `2^x` dar, die zur Berechnung der Ausrichtung verwendet wird. So entspricht beispielsweise `align=1` `0x00` (`2^0`), während `align=8` `0x03` (`2^3`) entspricht.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [SIMD Ladebefehle](/de/docs/WebAssembly/Reference/SIMD/load)
