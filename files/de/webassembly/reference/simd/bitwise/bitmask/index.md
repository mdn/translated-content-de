---
title: "bitmask: Wasm SIMD bitweise Anweisung"
short-title: bitmask
slug: WebAssembly/Reference/SIMD/bitwise/bitmask
l10n:
  sourceCommit: ca1301872404bbc0305fa945cf3e3fb2351863bf
---

Die **`bitmask`** [SIMD bitweise Anweisung](/de/docs/WebAssembly/Reference/SIMD/bitwise) untersucht das **höchstwertige Bit** (MSB) jeder Lane einer [`v128`](/de/docs/WebAssembly/Reference/Value_types/v128)-Wertinterpretation. Dies ist das Vorzeichenbit, wenn die Lane als signiert betrachtet wird. Der Ausgabe-Wert der Anweisung entspricht dem Sammeln all dieser Bits in einem einzelnen `i32`, wobei das MSB von Lane 0 in Bit 0 des Ergebnisses liegt, das MSB von Lane 1 in Bit 1 und so weiter.

> [!NOTE]
> Für `i8x16.bitmask` bedeutet ein MSB von `1`, dass der Lane-Wert größer oder gleich 128 ist (negativ, wenn signiert), während ein MSB von `0` bedeutet, dass der Wert kleiner als 128 ist. Für breitere Lane-Typen ist die Schwelle entsprechend größer: 32768 für `i16x8`, 2147483648 für `i32x4`.

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

Im obigen Beispiel hat nur Lane `12` des `i8x16`-Werts einen Wert, der größer oder gleich `128` ist (`240`, um genau zu sein), daher ist sein MSB `1`. Alle anderen Byte-MSBs sind auf `0` gesetzt.

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
  - : Die `bitmask`-Anweisung. Muss immer nach dem `value_type` und einem Punkt (`.`) enthalten sein.

### Typ

```plain
[input] -> [output]
```

- `input`
  - : Die Eingabe-`v128`-Wertinterpretation.
- `output`
  - : Der Ausgabe-`i32`-Wert.

### Binärkodierung

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

## Siehe auch

- [SIMD bitweise Anweisungen](/de/docs/WebAssembly/Reference/SIMD/bitwise)
