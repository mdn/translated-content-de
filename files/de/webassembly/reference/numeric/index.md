---
title: WebAssembly numerische Anweisungen
slug: WebAssembly/Reference/Numeric
l10n:
  sourceCommit: c29cee3dcb0d0e66093dd0c18aa82e0eab9d6d14
---

{{WebAssemblySidebar}}

WebAssembly numerische Anweisungen.

## Konstanten

- [Konstante](/de/docs/WebAssembly/Reference/Numeric/Const)
  - : Deklarieren Sie eine konstante Zahl.

## Vergleich

- [Gleich](/de/docs/WebAssembly/Reference/Numeric/Equal)
  - : Überprüfen Sie, ob zwei Zahlen gleich sind.
- [Nicht gleich](/de/docs/WebAssembly/Reference/Numeric/Not_equal)
  - : Überprüfen Sie, ob zwei Zahlen ungleich sind.
- [Größer als](/de/docs/WebAssembly/Reference/Numeric/Greater_than)
  - : Überprüfen Sie, ob eine Zahl größer ist als eine andere Zahl.
- [Kleiner als](/de/docs/WebAssembly/Reference/Numeric/Less_than)
  - : Überprüfen Sie, ob eine Zahl kleiner ist als eine andere Zahl.
- [Größer oder gleich](/de/docs/WebAssembly/Reference/Numeric/Greater_or_equal)
  - : Überprüfen Sie, ob eine Zahl größer oder gleich einer anderen Zahl ist.
- [Kleiner oder gleich](/de/docs/WebAssembly/Reference/Numeric/Less_or_equal)
  - : Überprüfen Sie, ob eine Zahl kleiner oder gleich einer anderen Zahl ist.

## Arithmetik

- [Addition](/de/docs/WebAssembly/Reference/Numeric/Addition)
  - : Addieren Sie zwei Zahlen.
- [Subtraktion](/de/docs/WebAssembly/Reference/Numeric/Subtraction)
  - : Subtrahieren Sie eine Zahl von einer anderen Zahl.
- [Multiplikation](/de/docs/WebAssembly/Reference/Numeric/Multiplication)
  - : Multiplizieren Sie eine Zahl mit einer anderen Zahl.
- [Division](/de/docs/WebAssembly/Reference/Numeric/Division)
  - : Dividieren Sie eine Zahl durch eine andere Zahl.
- [Rest](/de/docs/WebAssembly/Reference/Numeric/Remainder)
  - : Berechnen Sie den Rest, der übrig bleibt, wenn ein Integer durch einen anderen Integer geteilt wird.

## Umwandlung

- [Erweitern](/de/docs/WebAssembly/Reference/Numeric/Extend)
  - : Konvertieren (erweitern) Sie `i32` zu `i64`.
- [Reduzieren](/de/docs/WebAssembly/Reference/Numeric/Wrap)
  - : Konvertieren (reduzieren) Sie `i64` zu `i32`.
- [Fördern](/de/docs/WebAssembly/Reference/Numeric/Promote)
  - : Konvertieren (fördern) Sie `f32` zu `f64`.
- [Abwerten](/de/docs/WebAssembly/Reference/Numeric/Demote)
  - : Konvertieren (abwerten) Sie `f64` zu `f32`.
- [Konvertieren](/de/docs/WebAssembly/Reference/Numeric/Convert)
  - : Konvertieren Sie Ganzzahlen in Gleitpunkte.
- [Trunkieren (float zu int)](/de/docs/WebAssembly/Reference/Numeric/Truncate_float_to_int)
  - : Konvertieren (trunkieren) Sie Gleitpunkte zu Ganzzahlen, indem der Bruchteil entfernt wird.
- [Neu interpretieren](/de/docs/WebAssembly/Reference/Numeric/Reinterpret)
  - : Interpretieren Sie die Bytes von Ganzzahlen als Gleitpunkte und umgekehrt.

## Nur Gleitpunkt-spezifische Anweisungen

- [Min](/de/docs/WebAssembly/Reference/Numeric/Min)
  - : Erhalten Sie die kleinere von zwei Zahlen.
- [Max](/de/docs/WebAssembly/Reference/Numeric/Max)
  - : Erhalten Sie die größere von zwei Zahlen.
- [Nächstliegend](/de/docs/WebAssembly/Reference/Numeric/Nearest)
  - : Runden Sie eine Zahl auf die nächste Ganzzahl.
- [Ceil](/de/docs/WebAssembly/Reference/Numeric/Ceil)
  - : Runden Sie eine Zahl auf.
- [Boden](/de/docs/WebAssembly/Reference/Numeric/Floor)
  - : Runden Sie eine Zahl ab.
- [Trunkieren (float zu float)](/de/docs/WebAssembly/Reference/Numeric/Truncate_float_to_float)
  - : Verwerfen Sie den Bruchteil einer Zahl.
- [Absolut](/de/docs/WebAssembly/Reference/Numeric/Absolute)
  - : Erhalten Sie den Absolutwert einer Zahl.
- [Negieren](/de/docs/WebAssembly/Reference/Numeric/Negate)
  - : Negieren Sie eine Zahl.
- [Quadratwurzel](/de/docs/WebAssembly/Reference/Numeric/Square_root)
  - : Erhalten Sie die Quadratwurzel einer Zahl.
- [Vorzeichen kopieren](/de/docs/WebAssembly/Reference/Numeric/Copy_sign)
  - : Kopieren Sie nur das Vorzeichenbit von einer Zahl zu einer anderen.

## Bitweise Anweisungen

- [AND](/de/docs/WebAssembly/Reference/Numeric/AND)
  - : Wird verwendet, um ein bitweises UND durchzuführen.
- [OR](/de/docs/WebAssembly/Reference/Numeric/OR)
  - : Wird verwendet, um ein bitweises OR durchzuführen.
- [XOR](/de/docs/WebAssembly/Reference/Numeric/XOR)
  - : Wird verwendet, um ein bitweises XOR durchzuführen.
- [Linksverschiebung](/de/docs/WebAssembly/Reference/Numeric/Left_shift)
  - : Wird verwendet, um eine bitweise Linksverschiebung durchzuführen.
- [Rechtsverschiebung](/de/docs/WebAssembly/Reference/Numeric/Right_shift)
  - : Wird verwendet, um eine bitweise Rechtsverschiebung durchzuführen.
- [Linksrotation](/de/docs/WebAssembly/Reference/Numeric/Left_rotate)
  - : Wird verwendet, um eine bitweise Linksrotation durchzuführen.
- [Rechtsrotation](/de/docs/WebAssembly/Reference/Numeric/Right_rotate)
  - : Wird verwendet, um eine bitweise Rechtsrotation durchzuführen.
- [Führen Sie führende Nullen](/de/docs/WebAssembly/Reference/Numeric/Count_leading_zeros)
  - : Zählen Sie die Anzahl der führenden Nullen in der binären Darstellung einer Zahl.
- [Führen Sie endende Nullen](/de/docs/WebAssembly/Reference/Numeric/Count_trailing_zeros)
  - : Zählen Sie die Anzahl der endenden Nullen in der binären Darstellung einer Zahl.
- [Populationszählung](/de/docs/WebAssembly/Reference/Numeric/Population_count)
  - : Zählen Sie die Gesamtanzahl der 1en in der binären Darstellung einer Zahl.
