---
title: "q15mulr_sat_s: Arithmetische Wasm-SIMD-Instruktion"
short-title: q15mulr_sat_s
slug: WebAssembly/Reference/SIMD/arithmetic/q15mulr_sat_s
l10n:
  sourceCommit: ad9a2c6d7f94dd5fb7971b10677487a84c529e55
---

Die **`q15mulr_sat_s`**-[SIMD-Arithmetikinstruktion](/de/docs/WebAssembly/Reference/SIMD/arithmetic) führt eine spurweise [sättigende](https://en.wikipedia.org/wiki/Saturation_arithmetic) Multiplikation mit Rundung im Q15-Format auf zwei vorzeichenbehafteten [`v128`](/de/docs/WebAssembly/Reference/Value_types/v128)-Werten durch, die jeweils als `i16x8` interpretiert werden. Dabei wird das Ergebnis auf den vom Werttyp zulässigen Bereich begrenzt. Die Ausgabe ist ein einzelner Wert, der als `i16x8` interpretiert wird.

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

## Syntax

```plain
i16x8.q15mulr_sat_s
```

- `i16x8.q15mulr_sat_s`
  - : Die Instruktion `i16x8.q15mulr_sat_s`.

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

| Instruktion           | Binärformat    | Beispieltext => Binärdarstellung          |
| --------------------- | -------------- | ----------------------------------------- |
| `i16x8.q15mulr_sat_s` | `0xfd 130:u32` | `i16x8.q15mulr_sat_s` => `0xfd 0x82 0x01` |

## Beschreibung

Die Instruktion `q15mulr_sat_s` multipliziert gleichzeitig 8 Paare vorzeichenbehafteter 16-Bit-Ganzzahlen im Q15-Format als Festkommazahlen und rundet und sättigt die Ergebnisse. Solche Operationen sind beispielsweise in der Audioverarbeitung und beim maschinellen Lernen üblich, etwa für FIR-/IIR-Audiofilter und die Inferenz neuronaler Netze.

Q15 ist ein Festkommazahlenformat, bei dem eine vorzeichenbehaftete 16-Bit-Ganzzahl eine reelle Zahl im Bereich von −1.0 bis 1.0 repräsentiert. Der Wert `32767` (`0x7FFF`) entspricht `1.0`, und `−32768` (`0x8000`) entspricht `−1.0`. Die Multiplikation zweier Q15-Zahlen ergibt ein Q30-Ergebnis, das als 32-Bit-Ganzzahl gespeichert wird. Um wieder zu Q15 (16 Bit) zu gelangen, verschieben Sie das Ergebnis um 15 Bit nach rechts.

Für jede der einander entsprechenden Spuren der beiden `16x8`-Eingabewerte führt die Instruktion `q15mulr_sat_s` folgende Schritte aus:

1. Sie multipliziert die beiden Werte miteinander.
2. Sie rundet das Produkt, indem sie `0x4000` (`2¹⁴` beziehungsweise `16384`) addiert. Dadurch wird auf die nächste Ganzzahl gerundet, statt Nachkommastellen abzuschneiden.
3. Sie verschiebt das Ergebnis um 15 Bit nach rechts und wandelt damit Q30 zurück in Q15 um.
4. Falls nötig, sättigt sie das Ergebnis auf den Bereich von −32768 bis 32767, um einen Überlauf mit Umbruch zu vermeiden. So bleibt das Ergebnis innerhalb des für das Q15-Format zulässigen Bereichs.

Sehen wir uns an, wie der Wert `-8192` aus unserem Beispiel entsteht, der in Spur 7 des Ausgabewerts gespeichert ist.

1. Spur 7 der beiden Eingabewerte enthält `-16384` und `16384`.
2. Die Multiplikation dieser Werte ergibt das Produkt `-268435456`.
3. Durch Addition des Rundungswerts (`16384`) ergibt sich `-268419072`.
4. Wird dieses Ergebnis um 15 Bit nach rechts verschoben, ergibt sich der endgültige Wert `-8192`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
