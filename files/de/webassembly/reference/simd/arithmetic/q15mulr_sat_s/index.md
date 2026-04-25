---
title: "q15mulr_sat_s: Wasm SIMD Arithmetik-Anweisung"
short-title: q15mulr_sat_s
slug: WebAssembly/Reference/SIMD/arithmetic/q15mulr_sat_s
l10n:
  sourceCommit: 76b3f4216320b4ecdbc8b95028dc46aa67e1468e
---

Die **`q15mulr_sat_s`** [SIMD Arithmetik-Anweisung](/de/docs/WebAssembly/Reference/SIMD/arithmetic) führt eine lane-weise [sättigende](https://en.wikipedia.org/wiki/Saturation_arithmetic) Rundungsmultiplikation im Q15-Format auf zwei vorzeichenbehafteten [`v128`](/de/docs/WebAssembly/Reference/Types/v128) `i16x8`-Wertinterpretationen durch – und klemmt die Ausgabe auf den durch den Werttyp erlaubten Bereich (eine einzelne `i16x8`-Wertinterpretation).

{{InteractiveExample("Wat Demo: q15mulr_sat_s", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i32)))
  (func $main
    v128.const i16x8 16384 32767 8192 -32768 16384 16384 0 -16384
    v128.const i16x8 16384 16384 16384  32767 -16384 16384 99  16384

    i16x8.q15mulr_sat_s
    i16x8.extract_lane_s 7
    call $log
  )
  (start $main)
)
```

```js interactive-example
WebAssembly.instantiateStreaming(fetch("{%wasm-url%}"), { console });
```

Die `q15mulr_sat_s`-Anweisung führt eine Festkomma-Multiplikation auf 8 Paaren von Q15-kodierten 16-Bit vorzeichenbehafteten Ganzzahlen gleichzeitig durch, mit Rundung und Sättigung. Solche Operationen sind häufig in der Audiobearbeitung und im maschinellen Lernen zu finden, beispielsweise bei FIR/IIR Audiofiltern und der Inferenz in neuronalen Netzwerken.

Q15 ist ein Festkomma-Zahlenformat, bei dem eine vorzeichenbehaftete 16-Bit-Ganzzahl eine reelle Zahl im Bereich von -1.0 bis 1.0 darstellt. Der Wert `32767` (`0x7FFF`) entspricht `1.0`, und `−32768` (`0x8000`) entspricht `−1.0`. Die Multiplikation zweier Q15-Zahlen ergibt ein Q30-Ergebnis, das als 32-Bit-Ganzzahl gespeichert wird. Um wieder auf Q15 (16-Bit) zu kommen, wird um 15 nach rechts geschoben.

Konkret führt die `q15mulr_sat_s`-Anweisung für jede der entsprechenden Lanes der beiden `16x8` Eingabewerte folgendes aus:

1. Multipliziert die beiden Werte miteinander.
2. Rundet das Produkt, indem `0x4000` (`2¹⁴` oder `16384`) addiert wird, was zu einer Rundung auf die nächste ganze Zahl anstatt einer Trunkierungs führt.
3. Verschiebt das Ergebnis um 15 nach rechts, um Q30 wieder in Q15 zu konvertieren.
4. Wenn nötig, sättigt das Ergebnis, um es auf den Bereich von −32768 bis 32767 zu begrenzen und ein Überlaufen zu vermeiden. Dadurch bleibt das Ergebnis im zulässigen Bereich des Q15-Formats.

Schauen wir uns an, wie wir zu dem Ergebnis unseres Beispiels `-8192` kommen, das der Wert in Lane 7 des Ausgabe-Werts ist.

1. Lane 7 der beiden Eingabewerte enthält `-16384` und `16384`.
2. Diese Werte miteinander multiplizieren ergibt das Produkt `-268435456`.
3. Das Hinzufügen des Rundungswerts (`16384`) ergibt das Ergebnis `-268419072`.
4. Das Ergebnis um 15 nach rechts verschieben gibt das Endergebnis `-8192`.

## Syntax

```plain
i16x8.q15mulr_sat_s
```

- `i16x8.q15mulr_sat_s`
  - : Die `i16x8.q15mulr_sat_s`-Anweisung.

### Typ

```plain
[input1, input2] -> [output]
```

- `input1`
  - : Der erste Eingabewert.
- `input2`
  - : Der zweite Eingabewert.
- `output`
  - : Der Ausgabewert.

### Binäre Kodierung

| Anweisung             | Binärformat    | Beispieltext => binär                     |
| --------------------- | -------------- | ----------------------------------------- |
| `i16x8.q15mulr_sat_s` | `0xfd 130:u32` | `i16x8.q15mulr_sat_s` => `0xfd 0x82 0x01` |

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [SIMD Arithmetik-Anweisungen](/de/docs/WebAssembly/Reference/SIMD/arithmetic)
