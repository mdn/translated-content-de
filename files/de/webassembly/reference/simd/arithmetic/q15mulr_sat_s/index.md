---
title: "q15mulr_sat_s: Arithmetische Wasm-SIMD-Instruktion"
short-title: q15mulr_sat_s
slug: WebAssembly/Reference/SIMD/arithmetic/q15mulr_sat_s
l10n:
  sourceCommit: bcb7d4dde9f0a43664c64587d9d70b8835286eb7
---

Die **`q15mulr_sat_s`**-[SIMD-Arithmetikinstruktion](/de/docs/WebAssembly/Reference/SIMD/arithmetic) führt für jedes Lane-Paar eine rundende [sättigende Multiplikation](https://en.wikipedia.org/wiki/Saturation_arithmetic) im Q15-Format auf zwei vorzeichenbehafteten `i16x8`-Interpretationen von [`v128`](/de/docs/WebAssembly/Reference/Value_types/v128)-Werten aus. Dabei wird die Ausgabe auf den vom Werttyp zulässigen Bereich begrenzt (eine einzelne `i16x8`-Wertinterpretation).

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

## Beschreibung

Die `q15mulr_sat_s`-Instruktion führt gleichzeitig eine Festkommamultiplikation für 8 Paare vorzeichenbehafteter, im Q15-Format codierter 16-Bit-Ganzzahlen aus, einschließlich Rundung und Sättigung. Solche Operationen sind beispielsweise bei der Audioverarbeitung und beim maschinellen Lernen üblich, etwa für FIR-/IIR-Audiofilter und die Inferenz neuronaler Netze.

Q15 ist ein Festkommaformat, bei dem eine vorzeichenbehaftete 16-Bit-Ganzzahl eine reelle Zahl im Bereich von −1,0 bis 1,0 darstellt. Der Wert `32767` (`0x7FFF`) entspricht `1.0`, und `−32768` (`0x8000`) entspricht `−1.0`. Die Multiplikation zweier Q15-Zahlen ergibt ein Q30-Ergebnis, das als 32-Bit-Ganzzahl gespeichert wird. Um wieder Q15 (16 Bit) zu erhalten, verschieben Sie das Ergebnis um 15 Bit nach rechts.

Für jedes Paar einander entsprechender Lanes der beiden `16x8`-Eingabewerte führt die `q15mulr_sat_s`-Instruktion folgende Schritte aus:

1. Sie multipliziert die beiden Werte.
2. Sie rundet das Produkt, indem sie `0x4000` (`2¹⁴` oder `16384`) addiert. Dadurch wird zur nächstgelegenen Ganzzahl gerundet, statt Nachkommastellen abzuschneiden.
3. Sie verschiebt das Ergebnis um 15 Bit nach rechts und wandelt damit Q30 wieder in Q15 um.
4. Falls erforderlich, sättigt sie das Ergebnis, indem sie es auf den Bereich von −32768 bis 32767 begrenzt und so einen Überlauf mit Umschlag verhindert. Dadurch bleibt das Ergebnis innerhalb des für das Q15-Format zulässigen Bereichs.

Sehen wir uns an, wie der Wert `-8192` im Beispiel zustande kommt. Er wird in Lane 7 des Ausgabewerts gespeichert.

1. Lane 7 der beiden Eingabewerte enthält `-16384` beziehungsweise `16384`.
2. Die Multiplikation dieser Werte ergibt das Produkt `-268435456`.
3. Die Addition des Rundungswerts (`16384`) ergibt `-268419072`.
4. Die Verschiebung des Ergebnisses um 15 Bit nach rechts ergibt das Endergebnis `-8192`.

## Syntax

```plain
i16x8.q15mulr_sat_s
```

- `i16x8.q15mulr_sat_s`
  - : Die `i16x8.q15mulr_sat_s`-Instruktion.

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

### Binäre Codierung

| Instruktion           | Binärformat    | Beispieltext => Binärdarstellung          |
| --------------------- | -------------- | ----------------------------------------- |
| `i16x8.q15mulr_sat_s` | `0xfd 130:u32` | `i16x8.q15mulr_sat_s` => `0xfd 0x82 0x01` |

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
