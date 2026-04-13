---
title: "bitmask: Wasm SIMD bitwise Befehl"
short-title: bitmask
slug: WebAssembly/Reference/SIMD/bitwise/bitmask
l10n:
  sourceCommit: 9851fc885f1bbc916f529378b506471c150fae98
---

Der **`bitmask`** [SIMD bitwise Befehl](/de/docs/WebAssembly/Reference/SIMD/bitwise) untersucht das **höchstwertige Bit** (MSB) jeder Spur einer [`v128`](/de/docs/WebAssembly/Reference/Types/v128) Wertinterpretation. Dies ist das Vorzeichenbit, wenn die Spur als signiert betrachtet wird. Der Ausgabe-Wert des Befehls entspricht all diesen Bits, die in einem einzigen `i32` gesammelt werden, wobei das MSB der Spur 0 im Bit 0 des Ergebnisses, das MSB der Spur 1 im Bit 1 des Ergebnisses usw. enthalten ist.

> [!NOTE]
> Für `i8x16.bitmask` bedeutet ein MSB von `1`, dass der Spurwert größer oder gleich 128 ist (negativ, wenn signiert), während ein MSB von `0` bedeutet, dass der Wert kleiner als 128 ist. Für breitbandigere Spurtypen ist die Schwelle entsprechend höher: 32768 für `i16x8`, 2147483648 für `i32x4`.

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

Im obigen Beispiel hat nur die Spur `12` des `i8x16` Wertes einen Wert von größer oder gleich `128` (genauer gesagt `240`), daher ist ihr MSB `1`. Alle anderen Bytes haben das MSB auf `0` gesetzt.

Das Ausgabe-`i32` ist daher gleich:

`0000 0001 0000 0000 0000`

(nur Bit `12` ist auf `1` gesetzt).

Der Ausgabe-Wert des Beispiels ist `4096`, was dem dezimalen Äquivalent des obigen binären Musters entspricht.

## Syntax

```plain
value_type.bitmask
```

- `value_type`
  - : Der Typ des Wertes, auf den der Befehl ausgeführt wird. Die folgenden Typen unterstützen `bitmask`:
    - `i8x16`
    - `i16x8`
    - `i32x4`
    - `i64x2`
- `bitmask`
  - : Der `bitmask` Befehl. Muss immer nach dem `value_type` und einem Punkt (`.`) angegeben werden.

### Typ

```plain
[input] -> [output]
```

- `input`
  - : Die Eingabe-`v128` Wertinterpretation.
- `output`
  - : Der Ausgabe-`i32` Wert.

### Binärcode

| Befehl          | Binärformat    | Beispieltext => binär               |
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

- [SIMD bitwise Befehle](/de/docs/WebAssembly/Reference/SIMD/bitwise)
