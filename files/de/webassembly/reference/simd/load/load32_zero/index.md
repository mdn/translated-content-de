---
title: "load32_zero: Wasm SIMD-Ladeanweisung"
short-title: load32_zero
slug: WebAssembly/Reference/SIMD/load/load32_zero
l10n:
  sourceCommit: d3b22d8099235ad3a0ef2a494106fc2ea178863d
---

Die **`load32_zero`** [SIMD-Ladeanweisung](/de/docs/WebAssembly/Reference/SIMD/load) lädt einen einzelnen Wert von einer angegebenen Speicheradresse in die erste Lane eines [`v128`](/de/docs/WebAssembly/Reference/Types/v128)-Typs `i32x4`, und initialisiert die anderen Lanes mit `0`.

{{InteractiveExample("Wat Demo: load32_zero", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i32)))
  (memory $memory 1)
  (data (i32.const 0) "\01\02\03\04\05\06\07\08\09\0a\0b\0c\0d\0e\0f\00\01\02\03")
  (func $main
    i32.const 1
    v128.load32_zero
    i32x4.extract_lane 0
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
v128.load32_zero

;; With optional immediates
v128.load32_zero memidx offset=int align=int
```

- `v128.load32_zero`
  - : Die `v128.load32_zero` Anweisung.
- `memidx` {{optional_inline}}
  - : Ein Integer, der den Speicherindex darstellt, in Fällen, in denen das Modul mehrere Speicher verwendet. Der Standardwert ist `0`.
- `offset=int` {{optional_inline}}
  - : Ein Integer, der eine konstante Anzahl von Bytes darstellt, die der Speicheradresse vor dem Laden hinzugefügt werden. Der Standardwert ist `0`.
- `align=int` {{optional_inline}}
  - : Ein Integer, der dem Wasm-Engine einen Hinweis darauf gibt, welche Ausrichtung für die endgültige Adresse erwartet wird. Der Minimalwert ist `1` und der Standard- und Maximalwert ist `4`. Ein `align`-Wert muss eine Potenz von `2` sein.

### Typ

```plain
[memory_address] -> [output]
```

- `memory_address`
  - : Ein Integer, der die Speicheradresse darstellt, von der geladen werden soll.
- `output`
  - : Die Ausgabedarstellung des `v128` Typs `i32x4` Wertes.

### Binärcodierung

| Anweisung          | Binärformat                                  | Beispieltext => binär                                          |
| ------------------ | -------------------------------------------- | -------------------------------------------------------------- |
| `v128.load32_zero` | `0xFD 92:u32 memidx:u8 offset:u32 align:u32` | `v128.load32_zero 0 offset=0 align=4` => `0xfd 0x5c 0x02 0x00` |

> [!NOTE]
> Während das Wasm-Textformat den tatsächlichen `align`-Wert spezifiziert, stellt das binäre Äquivalent den Exponenten der Formel `2^x` dar, die zur Berechnung der Ausrichtung verwendet wird. Zum Beispiel ist `align=1` gleichbedeutend mit `0x00` (`2^0`), während `align=4` gleichbedeutend mit `0x02` (`2^2`) ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [SIMD-Ladeanweisungen](/de/docs/WebAssembly/Reference/SIMD/load)
