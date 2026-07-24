---
title: "bitmask: Wasm SIMD Bitweisen-Anweisung"
short-title: bitmask
slug: WebAssembly/Reference/SIMD/bitwise/bitmask
l10n:
  sourceCommit: 7d6773a8ee41048b915cd566b0c67f97be6ea249
---

Die **`bitmask`** [SIMD Bitweisen-Anweisung](/de/docs/WebAssembly/Reference/SIMD/bitwise) betrachtet das **höchstwertige Bit** (MSB) jeder Lane einer Interpretation des [`v128`](/de/docs/WebAssembly/Reference/Value_types/v128) Wertes. Dies ist das Vorzeichenbit, wenn die Lane als vorzeichenbehaftet betrachtet wird. Der Ausgabewert der Anweisung entspricht all diesen Bits, die in einem einzelnen `i32` gesammelt wurden, wobei das höchstwertige Bit von Lane 0 im Bit 0 des Ergebnisses, das höchstwertige Bit von Lane 1 im Bit 1 usw. ist.

> [!NOTE]
> Für `i8x16.bitmask` bedeutet ein höchstwertiges Bit von `1`, dass der Lane-Wert größer oder gleich `128` ist (negativ, wenn vorzeichenbehaftet), während ein höchstwertiges Bit von `0` bedeutet, dass der Wert kleiner als `128` ist. Für breitere Lane-Typen ist der Schwellenwert entsprechend größer: `32768` für `i16x8`, `2147483648` für `i32x4`.

{{InteractiveExample("Wat Demo: bitmask", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i32)))
  (func $main
    v128.const i8x16 10 23 45 6 90 1 12 120 0 78 89 13 240 51 62 0
    i8x16.bitmask

    call $log ;; log the result
  )
  (start $main)
)
```

```js interactive-example
WebAssembly.instantiateStreaming(fetch("{%wasm-url%}"), { console });
```

Im obigen Beispiel hat nur die Lane `12` des `i8x16` Wertes einen Wert von größer oder gleich `128` (`240`, um genau zu sein), daher ist ihr höchstwertiges Bit `1`. Alle anderen Bytes haben das höchstwertige Bit auf `0` gesetzt.

Der Ausgabe-`i32` ist daher gleich:

`0000 0001 0000 0000 0000`

(nur Bit `12` ist auf `1` gesetzt).

Der Ausgabe-Wert des Beispiels ist `4096`, was dem Dezimalwert des obigen Binärmusters entspricht.

## Syntax

```plain
value_type.bitmask
```

- `value_type`
  - : Der Typ des Wertes, auf dem die Anweisung ausgeführt wird. Die folgenden Typen unterstützen `bitmask`:
    - `i8x16`
    - `i16x8`
    - `i32x4`
    - `i64x2`
- `bitmask`
  - : Die `bitmask`-Anweisung. Muss immer nach dem `value_type` und einem Punkt (`.`) eingefügt werden.

### Typ

```plain
[input] -> [output]
```

- `input`
  - : Die Eingabe `v128` Wertinterpretation.
- `output`
  - : Der Ausgabe-`i32` Wert.

### Binärcodierung

| Anweisung       | Binärformat    | Beispieltext => binär               |
| --------------- | -------------- | ----------------------------------- |
| `i8x16.bitmask` | `0xfd 100:u32` | `i8x16.bitmask` => `0xfd 0x64`      |
| `i16x8.bitmask` | `0xfd 132:u32` | `i16x8.bitmask` => `0xfd 0x84 0x01` |
| `i32x4.bitmask` | `0xfd 164:u32` | `i32x4.bitmask` => `0xfd 0xa4 0x01` |
| `i64x2.bitmask` | `0xfd 196:u32` | `i64x2.bitmask` => `0xfd 0xc4 0x01` |

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
