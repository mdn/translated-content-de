---
title: "q15mulr_sat_s: Wasm SIMD Arithmetikanweisung"
short-title: q15mulr_sat_s
slug: WebAssembly/Reference/SIMD/arithmetic/q15mulr_sat_s
l10n:
  sourceCommit: ca1301872404bbc0305fa945cf3e3fb2351863bf
---

Die **`q15mulr_sat_s`** [SIMD Arithmetikanweisung](/de/docs/WebAssembly/Reference/SIMD/arithmetic) führt eine laneweise [saturierende](<https://de.wikipedia.org/wiki/S%C3%A4ttigung_(Arithmetik)>) Rundungsmultiplikation im Q15-Format auf zwei signierten [`v128`](/de/docs/WebAssembly/Reference/Value_types/v128) `i16x8` Wertdarstellungen durch – dabei wird die Ausgabe auf den Bereich begrenzt, der durch den Werttyp erlaubt ist (eine einzelne `i16x8` Wertdarstellung).

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

Die Anweisung `q15mulr_sat_s` führt eine Festkommamultiplikation an 8 Paaren von Q15-kodierten 16-Bit-Ganzzahlen mit Vorzeichen gleichzeitig durch, mit Rundung und Sättigung. Solche Operationen sind üblich in der Audiobearbeitung und maschinellem Lernen, zum Beispiel FIR/IIR-Audiofilter und neuronale Netzwerkinferenz.

Q15 ist ein Festkommazahlenformat, bei dem eine signierte 16-Bit-Ganzzahl eine reelle Zahl im Bereich von −1,0 bis 1,0 darstellt. Der Wert `32767` (`0x7FFF`) entspricht `1,0`, und `−32768` (`0x8000`) entspricht `−1,0`. Das Multiplizieren von zwei Q15-Zahlen erzeugt ein Q30-Ergebnis, das als 32-Bit-Ganzzahl gespeichert wird. Um zurück zu Q15 (16-Bit) zu gelangen, wird um 15 nach rechts verschoben.

Speziell für jede der entsprechenden Lanes der beiden `16x8`-Eingabewerte:

1. Multipliziert die beiden Werte miteinander.
2. Rundet das Produkt, indem `0x4000` (`2¹⁴`, oder `16384`) hinzugefügt wird, was zu der nächsten Ganzzahl rundet, anstatt sie abzuschneiden.
3. Verschiebt das Ergebnis um 15 nach rechts, und konvertiert Q30 zurück zu Q15.
4. Falls nötig, sättigt das Ergebnis, um es auf den Bereich von −32768 bis 32767 zu beschränken und ein Überlaufen zu vermeiden. Dies hält das Ergebnis innerhalb des erlaubten Bereichs für das Q15-Format.

Betrachten wir, wie wir zu dem Ergebnis unseres Beispiels `-8192` gelangen, welches im Lane 7 des Ausgabewertes gespeichert wird.

1. Lane 7 der beiden Eingabewerte enthält `-16384` und `16384`.
2. Das Multiplizieren dieser Werte ergibt das Produkt `-268435456`.
3. Das Hinzufügen des Rundungswertes (`16384`) ergibt das Ergebnis `-268419072`.
4. Das Verschieben des Ergebnisses um 15 nach rechts ergibt das endgültige Ergebnis `-8192`.

## Syntax

```plain
i16x8.q15mulr_sat_s
```

- `i16x8.q15mulr_sat_s`
  - : Die `i16x8.q15mulr_sat_s` Anweisung.

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

## Siehe auch

- [SIMD Arithmetikanweisungen](/de/docs/WebAssembly/Reference/SIMD/arithmetic)
