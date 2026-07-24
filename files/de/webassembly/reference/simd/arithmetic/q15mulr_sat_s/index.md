---
title: "q15mulr_sat_s: Wasm SIMD arithmetische Anweisung"
short-title: q15mulr_sat_s
slug: WebAssembly/Reference/SIMD/arithmetic/q15mulr_sat_s
l10n:
  sourceCommit: b1f6f8008099d8c8fb7d253ec17e3cfaa726a75f
---

Die **`q15mulr_sat_s`** [SIMD arithmetische Anweisung](/de/docs/WebAssembly/Reference/SIMD/arithmetic) führt eine spurweise [saturierte](https://en.wikipedia.org/wiki/Saturation_arithmetic) rundenbasierte Multiplikation im Q15-Format auf zwei signierten [`v128`](/de/docs/WebAssembly/Reference/Value_types/v128) `i16x8`-Wertinterpretationen durch — wobei die Ausgabe auf den Bereich begrenzt wird, der vom Werttyp erlaubt wird (eine einzelne `i16x8`-Wertinterpretation).

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

Die `q15mulr_sat_s`-Anweisung führt gleichzeitig eine Festkomma-Multiplikation auf 8 Paaren von Q15-kodierten 16-Bit-Signed-Integern mit Rundung und Sättigung aus. Solche Operationen sind häufig in der Audioverarbeitung und im maschinellen Lernen zu finden, zum Beispiel FIR/IIR-Audiofilter und neuronale Netzwerkinferenzen.

Q15 ist ein Festkomma-Zahlenformat, bei dem ein signierter 16-Bit-Integer eine reelle Zahl im Bereich von −1,0 bis 1,0 darstellt. Der Wert `32767` (`0x7FFF`) entspricht `1,0`, und `−32768` (`0x8000`) entspricht `−1,0`. Das Multiplizieren von zwei Q15-Zahlen ergibt ein Q30-Ergebnis, das als 32-Bit-Integer gespeichert wird. Um zu Q15 (16-Bit) zurückzukehren, schiebt man um 15 nach rechts.

Konkret führt die `q15mulr_sat_s`-Anweisung für jeden der entsprechenden Spuren der beiden `16x8`-Eingabewerte folgende Schritte aus:

1. Multipliziert die beiden Werte miteinander.
2. Rundet das Produkt, indem `0x4000` (`2¹⁴`, oder `16384`) hinzugefügt wird, was auf die nächste ganze Zahl rundet, anstatt abzuschneiden.
3. Verschiebt das Ergebnis um 15 nach rechts, um Q30 wieder in Q15 umzuwandeln.
4. Falls erforderlich, sättigt das Ergebnis, um es auf den Bereich von −32768 bis 32767 zu begrenzen und ein Überlaufen zu vermeiden. Dies hält das Ergebnis innerhalb des zulässigen Bereichs für das Q15-Format.

Lassen Sie uns sehen, wie wir zu dem Ergebnis unseres Beispiels `-8192` gelangen, das der in Spur 7 gespeicherte Wert des Ausgangswertes ist.

1. Spur 7 der beiden Eingabewerte enthält `-16384` und `16384`.
2. Das Multiplizieren dieser Werte ergibt das Produkt `-268435456`.
3. Das Hinzufügen des Rundungswertes (`16384`) ergibt das Ergebnis `-268419072`.
4. Das Verschieben des Ergebnisses um 15 nach rechts liefert das Endergebnis `-8192`.

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

### Binärcodierung

| Anweisung             | Binärformat    | Beispieltext => Binär                     |
| --------------------- | -------------- | ----------------------------------------- |
| `i16x8.q15mulr_sat_s` | `0xfd 130:u32` | `i16x8.q15mulr_sat_s` => `0xfd 0x82 0x01` |

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
