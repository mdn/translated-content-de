---
title: "load8x8_u: Wasm SIMD Load/Store-Befehl"
short-title: load8x8_u
slug: WebAssembly/Reference/SIMD/load_store/load8x8_u
l10n:
  sourceCommit: ca1301872404bbc0305fa945cf3e3fb2351863bf
---

Der **`load8x8_u`** [SIMD-Load/Store-Befehl](/de/docs/WebAssembly/Reference/SIMD/load_store) lädt acht 8-Bit Ganzzahlen von einer angegebenen Speicheradresse und erweitert jede auf ein 16-Bit-Register, indem sie mit Nullen ergänzt wird. Das Ergebnis ist eine [`v128`](/de/docs/WebAssembly/Reference/Value_types/v128) Typ-Interpretation als `i16x8` Wert.

{{InteractiveExample("Wat Demo: load8x8_u", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i32)))
  (memory $memory 1)
  (data (i32.const 0) "\01\02\03\04\05\06\07\08\09\0a\0b\0c\0d\0e\0f\00\01\02\03")
  (func $main
    i32.const 0
    v128.load8x8_u
    i16x8.extract_lane_s 7
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
v128.load8x8_u

;; With optional immediate operands
v128.load8x8_u mem_idx offset=int align=int
```

- `v128.load8x8_u`
  - : Der `v128.load8x8_u` Befehl.
- `mem_idx` {{optional_inline}}
  - : Ein Ganzzahlwert, der den Speicherindex darstellt, wenn das Modul mehrere Speicher verwendet. Der Standardwert ist `0`.
- `offset=int` {{optional_inline}}
  - : Ein Ganzzahlwert, der eine konstante Anzahl von Bytes darstellt, die vor dem Laden zur Speicheradresse hinzugefügt werden. Der Standardwert ist `0`.
- `align=int` {{optional_inline}}
  - : Ein Ganzzahlwert, der der Wasm-Engine einen Hinweis darauf gibt, welche Ausrichtung für die endgültige Adresse erwartet wird. Der Mindestwert ist `1` und der Standard- und Höchstwert ist `8`. Ein `align`-Wert muss eine Potenz von `2` sein.

### Typ

```plain
[memory_address] -> [output]
```

- `memory_address`
  - : Ein Ganzzahlwert, der die Speicheradresse darstellt, von der geladen wird.
- `output`
  - : Die Ausgabe-`v128` Typ-Interpretation als `i16x8` Wert.

### Binärcodierung

| Befehl           | Binärformat                                  | Beispieltext => binär                                        |
| ---------------- | -------------------------------------------- | ------------------------------------------------------------ |
| `v128.load8x8_u` | `0xFD 2:u32 mem_idx:u8 offset:u32 align:u32` | `v128.load8x8_u 0 offset=0 align=2` => `0xfd 0x02 0x01 0x00` |

> [!NOTE]
> Während das Wasm-Textformat den wörtlichen `align`-Wert angibt, stellt das binäre Äquivalent den Exponenten der Formel `2^x` dar, die zur Berechnung der Ausrichtung verwendet wird. So entspricht zum Beispiel `align=1` dem Wert `0x00` (`2^0`), während `align=8` dem Wert `0x03` (`2^3`) entspricht.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [SIMD Load/Store-Befehle](/de/docs/WebAssembly/Reference/SIMD/load_store)
