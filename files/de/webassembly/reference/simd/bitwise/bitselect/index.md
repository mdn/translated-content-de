---
title: "bitselect: Wasm SIMD-Bitweise-Instruktion"
short-title: bitselect
slug: WebAssembly/Reference/SIMD/bitwise/bitselect
l10n:
  sourceCommit: ca1301872404bbc0305fa945cf3e3fb2351863bf
---

Die **`bitselect`** [SIMD-Bitweise-Instruktion](/de/docs/WebAssembly/Reference/SIMD/bitwise) nimmt drei [`v128`](/de/docs/WebAssembly/Reference/Value_types/v128)-Werte als Eingaben — zwei Eingaben und einen Maskenwert — und gibt einen neuen `v128`-Wert zurück, bei dem jedes Byte mit der Formel `output = (input1 AND mask) OR (input2 AND NOT mask)` berechnet wird.

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

Im obigen Beispiel haben wir alle Eingabewertspuren aus Vereinfachungsgründen auf denselben Wert gesetzt. Hier die Schritte, wie der Ausgabewert (`9`) mit der Formel `output = (input1 AND mask) OR (input2 AND NOT mask)` berechnet wird:

1. Die erste Eingabe ist `1`, was in Binär `0 0 0 0 0 0 0 1` ist.
2. Die zweite Eingabe ist `15`, was in Binär `0 0 0 0 1 1 1 1` ist.
3. Die Maske ist `6`, was in Binär `0 0 0 0 0 1 1 0` ist.
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

6. Wir verknüpfen dann die beiden Ergebnisse aus den Schritten 4. und 5. mit einem logischen OR:

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
  - : Die `v128.bitselect`-Instruktion.

### Typ

```plain
[input1, input2, mask] -> [output]
```

- `input1`
  - : Die Interpretation des ersten Eingabe-`v128`-Werts.
- `input2`
  - : Die Interpretation des zweiten Eingabe-`v128`-Werts.
- `mask`
  - : Die Interpretation des Masken-`v128`-Werts.
- `output`
  - : Die Interpretation des Ausgabe-`v128`-Werts.

### Binärcodierung

| Instruktion      | Binärformat   | Beispieltext => binär           |
| ---------------- | ------------- | ------------------------------- |
| `v128.bitselect` | `0xfd 82:u32` | `v128.bitselect` => `0xfd 0x52` |

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [SIMD-Bitweise-Instruktionen](/de/docs/WebAssembly/Reference/SIMD/bitwise)
