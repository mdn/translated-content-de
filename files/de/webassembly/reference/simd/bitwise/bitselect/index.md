---
title: "bitselect: Wasm SIMD bitweise Anweisung"
short-title: bitselect
slug: WebAssembly/Reference/SIMD/bitwise/bitselect
l10n:
  sourceCommit: 9851fc885f1bbc916f529378b506471c150fae98
---

Die **`bitselect`**-[SIMD bitweise Anweisung](/de/docs/WebAssembly/Reference/SIMD/bitwise) nimmt drei [`v128`](/de/docs/WebAssembly/Reference/Types/v128) Werte als Eingaben — zwei Eingabewerte und einen Maskenwert — und gibt einen neuen `v128`-Wert zurück, wobei jedes Byte mit der Formel `output = (input1 AND mask) OR (input2 AND NOT mask)` berechnet wird.

{{InteractiveExample("Wat Demo: bitselect", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i32)))
  (func $main
    v128.const i8x16 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    v128.const i8x16 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15
    v128.const i8x16 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6
    v128.bitselect

    i8x16.extract_lane_u 15
    call $log ;; log the result
  )
  (start $main)
)
```

```js interactive-example
WebAssembly.instantiateStreaming(fetch("{%wasm-url%}"), { console });
```

Im obigen Beispiel haben wir alle Eingabewertspuren für die Einfachheit auf den gleichen Wert gesetzt. Gehen wir durch, wie der Ausgangswert (`9`) berechnet wird, unter Verwendung der Formel `output = (input1 AND mask) OR (input2 AND NOT mask)`:

1. Die erste Eingabe ist `1`, was in binär `0 0 0 0 0 0 0 1` ist.
2. Die zweite Eingabe ist `15`, was in binär `0 0 0 0 1 1 1 1` ist.
3. Die Maske ist `6`, was in binär `0 0 0 0 0 1 1 0` ist.
4. `input1 AND mask` wird wie folgt berechnet:

   ```plain
   input1           0 0 0 0 0 0 0 1
   mask             0 0 0 0 0 1 1 0
   input1 AND mask  0 0 0 0 0 0 0 0
   ```

5. `input2 AND NOT mask` wird wie folgt berechnet:

   ```plain
   input2               0 0 0 0 1 1 1 1
   NOT mask             1 1 1 1 1 0 0 1
   input2 AND NOT mask  0 0 0 0 1 0 0 1
   ```

6. Dann führen wir ein OR der beiden Ergebnisse aus den Schritten 4. und 5. durch:

   ```plain
   result1  0 0 0 0 0 0 0 0
   result2  0 0 0 0 1 0 0 1
   OR       0 0 0 0 1 0 0 1
   ```

`0 0 0 0 1 0 0 1` ist das binäre Äquivalent von `9`.

## Syntax

```plain
v128.bitselect
```

- `v128.bitselect`
  - : Die `v128.bitselect` Anweisung.

### Typ

```plain
[input1, input2, mask] -> [output]
```

- `input1`
  - : Die erste `v128`-Eingabewertinterpretation.
- `input2`
  - : Die zweite `v128`-Eingabewertinterpretation.
- `mask`
  - : Die `v128`-Maskenwertinterpretation.
- `output`
  - : Die `v128`-Ausgabewertinterpretation.

### Binäre Codierung

| Anweisung        | Binärformat   | Beispieltext => binär           |
| ---------------- | ------------- | ------------------------------- |
| `v128.bitselect` | `0xfd 82:u32` | `v128.bitselect` => `0xfd 0x52` |

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [SIMD bitweise Anweisungen](/de/docs/WebAssembly/Reference/SIMD/bitwise)
