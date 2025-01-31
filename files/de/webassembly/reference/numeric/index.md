---
title: WebAssembly numerische Anweisungen
slug: WebAssembly/Reference/Numeric
l10n:
  sourceCommit: df9d06402163f77fc3e2d327ab63f9dd4af15b38
---

WebAssembly numerische Anweisungen.

## Konstanten

- [Const](/de/docs/WebAssembly/Reference/Numeric/Const)
  - : Konstante Zahlen deklarieren.

## Vergleich

- [Equal](/de/docs/WebAssembly/Reference/Numeric/Equal)
  - : Überprüfen, ob zwei Zahlen gleich sind.
- [Not equal](/de/docs/WebAssembly/Reference/Numeric/Not_equal)
  - : Überprüfen, ob zwei Zahlen ungleich sind.
- [Greater than](/de/docs/WebAssembly/Reference/Numeric/Greater_than)
  - : Überprüfen, ob eine Zahl größer als eine andere Zahl ist.
- [Less than](/de/docs/WebAssembly/Reference/Numeric/Less_than)
  - : Überprüfen, ob eine Zahl kleiner als eine andere Zahl ist.
- [Greater or equal](/de/docs/WebAssembly/Reference/Numeric/Greater_or_equal)
  - : Überprüfen, ob eine Zahl größer oder gleich einer anderen Zahl ist.
- [Less or equal](/de/docs/WebAssembly/Reference/Numeric/Less_or_equal)
  - : Überprüfen, ob eine Zahl kleiner oder gleich einer anderen Zahl ist.

## Arithmetik

- [Addition](/de/docs/WebAssembly/Reference/Numeric/Addition)
  - : Zwei Zahlen zusammenzählen.
- [Subtraction](/de/docs/WebAssembly/Reference/Numeric/Subtraction)
  - : Eine Zahl von einer anderen Zahl subtrahieren.
- [Multiplication](/de/docs/WebAssembly/Reference/Numeric/Multiplication)
  - : Eine Zahl mit einer anderen Zahl multiplizieren.
- [Division](/de/docs/WebAssembly/Reference/Numeric/Division)
  - : Eine Zahl durch eine andere Zahl teilen.
- [Remainder](/de/docs/WebAssembly/Reference/Numeric/Remainder)
  - : Den Rest berechnen, wenn eine ganze Zahl durch eine andere ganze Zahl geteilt wird.

## Konvertierung

- [Extend](/de/docs/WebAssembly/Reference/Numeric/Extend)
  - : `i32` zu `i64` konvertieren (erweitern).
- [Wrap](/de/docs/WebAssembly/Reference/Numeric/Wrap)
  - : `i64` zu `i32` konvertieren (umwickeln).
- [Promote](/de/docs/WebAssembly/Reference/Numeric/Promote)
  - : `f32` zu `f64` konvertieren (fördern).
- [Demote](/de/docs/WebAssembly/Reference/Numeric/Demote)
  - : `f64` zu `f32` konvertieren (herabstufen).
- [Convert](/de/docs/WebAssembly/Reference/Numeric/Convert)
  - : Ganzzahlen zu Gleitkommazahlen konvertieren.
- [Truncate (float to int)](/de/docs/WebAssembly/Reference/Numeric/Truncate_float_to_int)
  - : Gleitkommazahlen zu Ganzzahlen konvertieren (Bruchteil abschneiden).
- [Reinterpret](/de/docs/WebAssembly/Reference/Numeric/Reinterpret)
  - : Die Bytes von Ganzzahlen als Gleitkommazahlen und umgekehrt umdeuten.

## Gleitkomma-spezifische Anweisungen

- [Min](/de/docs/WebAssembly/Reference/Numeric/Min)
  - : Die kleinere von zwei Zahlen ermitteln.
- [Max](/de/docs/WebAssembly/Reference/Numeric/Max)
  - : Die größere von zwei Zahlen ermitteln.
- [Nearest](/de/docs/WebAssembly/Reference/Numeric/Nearest)
  - : Eine Zahl auf die nächste ganze Zahl runden.
- [Ceil](/de/docs/WebAssembly/Reference/Numeric/Ceil)
  - : Eine Zahl aufrunden.
- [Floor](/de/docs/WebAssembly/Reference/Numeric/Floor)
  - : Eine Zahl abrunden.
- [Truncate (float to float)](/de/docs/WebAssembly/Reference/Numeric/Truncate_float_to_float)
  - : Den Bruchteil einer Zahl verwerfen.
- [Absolute](/de/docs/WebAssembly/Reference/Numeric/Absolute)
  - : Den Absolutwert einer Zahl ermitteln.
- [Negate](/de/docs/WebAssembly/Reference/Numeric/Negate)
  - : Eine Zahl negieren.
- [Square root](/de/docs/WebAssembly/Reference/Numeric/Square_root)
  - : Die Quadratwurzel einer Zahl ermitteln.
- [Copy sign](/de/docs/WebAssembly/Reference/Numeric/Copy_sign)
  - : Nur das Vorzeichenbit von einer Zahl auf eine andere kopieren.

## Bitweise

- [AND](/de/docs/WebAssembly/Reference/Numeric/AND)
  - : Wird verwendet, um ein bitweises UND durchzuführen.
- [OR](/de/docs/WebAssembly/Reference/Numeric/OR)
  - : Wird verwendet, um ein bitweises OR durchzuführen.
- [XOR](/de/docs/WebAssembly/Reference/Numeric/XOR)
  - : Wird verwendet, um ein bitweises XOR durchzuführen.
- [Left shift](/de/docs/WebAssembly/Reference/Numeric/Left_shift)
  - : Wird verwendet, um ein bitweises Links-Shift durchzuführen.
- [Right shift](/de/docs/WebAssembly/Reference/Numeric/Right_shift)
  - : Wird verwendet, um ein bitweises Rechts-Shift durchzuführen.
- [Left rotate](/de/docs/WebAssembly/Reference/Numeric/Left_rotate)
  - : Wird verwendet, um ein bitweises Links-Rotieren durchzuführen.
- [Right rotate](/de/docs/WebAssembly/Reference/Numeric/Right_rotate)
  - : Wird verwendet, um ein bitweises Rechts-Rotieren durchzuführen.
- [Count leading zeros](/de/docs/WebAssembly/Reference/Numeric/Count_leading_zeros)
  - : Die Anzahl der führenden Nullen in der binären Darstellung einer Zahl zählen.
- [Count trailing zeros](/de/docs/WebAssembly/Reference/Numeric/Count_trailing_zeros)
  - : Die Anzahl der nachfolgenden Nullen in der binären Darstellung einer Zahl zählen.
- [Population count](/de/docs/WebAssembly/Reference/Numeric/Population_count)
  - : Die Gesamtanzahl der 1en in der binären Darstellung einer Zahl zählen.
