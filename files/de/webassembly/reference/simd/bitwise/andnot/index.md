---
title: "andnot: Wasm SIMD Bitweise-Operation"
short-title: andnot
slug: WebAssembly/Reference/SIMD/bitwise/andnot
l10n:
  sourceCommit: 7d6773a8ee41048b915cd566b0c67f97be6ea249
---

Die **`andnot`** [SIMD-Bitweise-Operation](/de/docs/WebAssembly/Reference/SIMD/bitwise) nimmt zwei [`v128`](/de/docs/WebAssembly/Reference/Value_types/v128) Eingabewerte. Sie führt ein bitweises UND auf dem ersten Wert und einem zweiten Wert durch, der dem Ergebnis entspricht, das aus einem bitweisen NOT auf jedes Byte des zweiten ursprünglichen Wertes resultiert. Sie gibt einen neuen `v128`-Wert zurück, der das Ergebnis enthält.

{{InteractiveExample("Wat Demo: andnot", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i32)))
  (func $main
    v128.const i16x8 10 23 56 15 25 29 92 45
    v128.const i16x8 12 42 58 25 55 91 192 4
    v128.andnot

    i8x16.extract_lane_u 6
    call $log ;; log the result
  )
  (start $main)
)
```

```js interactive-example
WebAssembly.instantiateStreaming(fetch("{%wasm-url%}"), { console });
```

Im obigen Beispiel werden die Eingabewerte `i16x8 10 23 56 15 25 29 92 45` und `i16x8 12 42 58 25 55 91 192 4` als eine Serie von 16 Hexadezimalwerten in den `v128`s gespeichert:

```plain
Byte index     0  1  2  3  4  5  6  7  8  9  10 11 12 13 14 15
Hex value      0A 00 17 00 38 00 0F 00 19 00 1D 00 5C 00 2D 00
```

```plain
Byte index     0  1  2  3  4  5  6  7  8  9  10 11 12 13 14 15
Hex value      0C 00 2A 00 3A 00 19 00 37 00 5B 00 C0 00 04 00
```

Beim Ausführen von `v128.andnot` auf dem Wert wird zuerst ein bitweises NOT auf den zweiten Eingabewert angewendet, was bedeutet, dass jedes Byte `b` zu `0xFF - b` wird:

```plain
Byte index     0  1  2  3  4  5  6  7  8  9  10 11 12 13 14 15
Hex value      0C 00 2A 00 3A 00 19 00 37 00 5B 00 C0 00 04 00
Hex after NOT  F3 FF D5 FF C5 FF E6 FF C8 FF A4 FF 3F FF FB FF
```

Anschließend wird ein bitweises UND auf Eingabe 1 und das NOT von Eingabe 2 durchgeführt:

```plain
Byte index               0  1  2  3  4  5  6  7  8  9  10 11 12 13 14 15
Input 1                  0A 00 17 00 38 00 0F 00 19 00 1D 00 5C 00 2D 00
NOT input 2              F3 FF D5 FF C5 FF E6 FF C8 FF A4 FF 3F FF FB FF
Input 1 AND NOT input 2  02 00 15 00 00 00 06 00 08 00 04 00 1C 00 29 00
```

Der resultierende Ausgabe-`v128`-Wert ist ein `i8x16`, daher gibt `i8x16.extract_lane_u 6` den Wert in Spur `6` aus. Dies entspricht `6` (`0x06`), was dem entspricht, dass `15` (`0x0F`) mit `230` (`0xE6`) UND-verknüpft wird. `230` ist das bitweise NOT von `25` (`0x19`).

Mit anderen Worten:

1. `15` (`0x0F`) in binär ist `0 0 0 0 1 1 1 1`.
2. `25` (`0x19`) in binär ist `0 0 0 1 1 0 0 1`.
3. Ein bitweises NOT auf dem zweiten Wert sieht so aus:

   ```plain
        0 0 0 1 1 0 0 1
   NOT  1 1 1 0 0 1 1 0
   ```

4. Ein bitweises UND auf dem ersten Wert und das NOT des zweiten Wertes sieht so aus:

   ```plain
        0 0 0 0 1 1 1 1
        1 1 1 0 0 1 1 0
   AND  0 0 0 0 0 1 1 0
   ```

5. `0 0 0 0 0 1 1 0` entspricht `6`.

## Syntax

```plain
v128.andnot
```

- `v128.andnot`
  - : Der `v128.andnot`-Befehl.

### Typ

```plain
[input1, input2] -> [output]
```

- `input1`
  - : Die Interpretation des ersten Eingabe-`v128`-Wertes.
- `input2`
  - : Die Interpretation des zweiten Eingabe-`v128`-Wertes.
- `output`
  - : Die Interpretation des Ausgabe-`v128`-Wertes.

### Binärkodierung

| Befehl        | Binärformat   | Beispieltext => binär        |
| ------------- | ------------- | ---------------------------- |
| `v128.andnot` | `0xfd 79:u32` | `v128.andnot` => `0xfd 0x4f` |

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
