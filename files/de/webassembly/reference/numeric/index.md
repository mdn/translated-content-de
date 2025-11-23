---
title: WebAssembly numerische Anweisungen
slug: WebAssembly/Reference/Numeric
l10n:
  sourceCommit: ebf92d37f836b490640a7881c4e5db5c1dea8fe7
---

WebAssembly numerische Anweisungen.

## Konstanten

- [`const`](/de/docs/WebAssembly/Reference/Numeric/const)
  - : Deklariert eine konstante Zahl.

## Vergleich

- [`eq`](/de/docs/WebAssembly/Reference/Numeric/eq)
  - : Überprüfen, ob zwei Zahlen gleich sind.
- [`ne`](/de/docs/WebAssembly/Reference/Numeric/ne)
  - : Überprüfen, ob zwei Zahlen ungleich sind.
- [`gt`](/de/docs/WebAssembly/Reference/Numeric/gt)
  - : Überprüfen, ob eine Zahl größer als eine andere Zahl ist.
- [`lt`](/de/docs/WebAssembly/Reference/Numeric/lt)
  - : Überprüfen, ob eine Zahl kleiner als eine andere Zahl ist.
- [`ge`](/de/docs/WebAssembly/Reference/Numeric/ge)
  - : Überprüfen, ob eine Zahl größer oder gleich einer anderen Zahl ist.
- [`le`](/de/docs/WebAssembly/Reference/Numeric/le)
  - : Überprüfen, ob eine Zahl kleiner oder gleich einer anderen Zahl ist.

## Arithmetik

- [`add`](/de/docs/WebAssembly/Reference/Numeric/add)
  - : Zwei Zahlen addieren.
- [`sub`](/de/docs/WebAssembly/Reference/Numeric/sub)
  - : Eine Zahl von einer anderen Zahl subtrahieren.
- [`mul`](/de/docs/WebAssembly/Reference/Numeric/mul)
  - : Eine Zahl mit einer anderen Zahl multiplizieren.
- [`div`](/de/docs/WebAssembly/Reference/Numeric/div)
  - : Eine Zahl durch eine andere Zahl dividieren.
- [`rem`](/de/docs/WebAssembly/Reference/Numeric/rem)
  - : Den Rest berechnen, der übrig bleibt, wenn ein Ganzzahl durch eine andere Ganzzahl dividiert wird.

## Konvertierung

- [`extend`](/de/docs/WebAssembly/Reference/Numeric/extend)
  - : Konvertieren (erweitern) von `i32` zu `i64`.
- [`wrap`](/de/docs/WebAssembly/Reference/Numeric/wrap)
  - : Konvertieren (umwickeln) von `i64` zu `i32`.
- [`promote`](/de/docs/WebAssembly/Reference/Numeric/promote)
  - : Konvertieren (fördern) von `f32` zu `f64`.
- [`demote`](/de/docs/WebAssembly/Reference/Numeric/demote)
  - : Konvertieren (herabstufen) von `f64` zu `f32`.
- [`convert`](/de/docs/WebAssembly/Reference/Numeric/convert)
  - : Konvertieren von Ganzzahlen zu Gleitkommazahlen.
- [`trunc` (to int)](/de/docs/WebAssembly/Reference/Numeric/trunc_int)
  - : Konvertieren (Abschneiden des Bruchteils) von Gleitkommazahlen zu Ganzzahlen.
- [`reinterpret`](/de/docs/WebAssembly/Reference/Numeric/reinterpret)
  - : Umdeuten der Bytes von Ganzzahlen als Gleitkommazahlen und umgekehrt.

## Gleitkomma-spezifische Anweisungen

- [`min`](/de/docs/WebAssembly/Reference/Numeric/min)
  - : Den kleineren von zwei Zahlen ermitteln.
- [`max`](/de/docs/WebAssembly/Reference/Numeric/max)
  - : Den größeren von zwei Zahlen ermitteln.
- [`nearest`](/de/docs/WebAssembly/Reference/Numeric/nearest)
  - : Eine Zahl auf die nächste Ganzzahl runden.
- [`ceil`](/de/docs/WebAssembly/Reference/Numeric/ceil)
  - : Eine Zahl aufrunden.
- [`floor`](/de/docs/WebAssembly/Reference/Numeric/floor)
  - : Eine Zahl abrunden.
- [`trunc` (to float)](/de/docs/WebAssembly/Reference/Numeric/trunc_float)
  - : Den Bruchteil einer Zahl verwerfen.
- [`abs`](/de/docs/WebAssembly/Reference/Numeric/abs)
  - : Den Absolutwert einer Zahl ermitteln.
- [`neg`](/de/docs/WebAssembly/Reference/Numeric/neg)
  - : Eine Zahl negieren.
- [`sqrt`](/de/docs/WebAssembly/Reference/Numeric/sqrt)
  - : Die Quadratwurzel einer Zahl ermitteln.
- [`copysign`](/de/docs/WebAssembly/Reference/Numeric/copysign)
  - : Nur das Vorzeichenbit von einer Zahl auf eine andere kopieren.

## Bitweise Anweisungen

- [`and`](/de/docs/WebAssembly/Reference/Numeric/and)
  - : Wird für die Ausführung eines bitweisen AND verwendet.
- [`or`](/de/docs/WebAssembly/Reference/Numeric/or)
  - : Wird für die Ausführung eines bitweisen OR verwendet.
- [`xor`](/de/docs/WebAssembly/Reference/Numeric/xor)
  - : Wird für die Ausführung eines bitweisen XOR verwendet.
- [`shl`](/de/docs/WebAssembly/Reference/Numeric/shl)
  - : Wird für die Ausführung einer bitweisen Linksverschiebung verwendet.
- [`shr`](/de/docs/WebAssembly/Reference/Numeric/shr)
  - : Wird für die Ausführung einer bitweisen Rechtsverschiebung verwendet.
- [`rotl`](/de/docs/WebAssembly/Reference/Numeric/rotl)
  - : Wird für die Ausführung einer bitweisen Linksdrehung verwendet.
- [`rotr`](/de/docs/WebAssembly/Reference/Numeric/rotr)
  - : Wird für die Ausführung einer bitweisen Rechtsdrehung verwendet.
- [`clz`](/de/docs/WebAssembly/Reference/Numeric/clz)
  - : Zählt die Anzahl der führenden Nullen in der binären Darstellung einer Zahl.
- [`ctz`](/de/docs/WebAssembly/Reference/Numeric/ctz)
  - : Zählt die Anzahl der nachgestellten Nullen in der binären Darstellung einer Zahl.
- [`popcnt`](/de/docs/WebAssembly/Reference/Numeric/popcnt)
  - : Zählt die Gesamtanzahl der Einsen in der binären Darstellung einer Zahl.
