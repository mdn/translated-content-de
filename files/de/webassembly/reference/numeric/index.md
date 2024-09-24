---
title: WebAssembly numerische Anweisungen
slug: WebAssembly/Reference/Numeric
l10n:
  sourceCommit: c29cee3dcb0d0e66093dd0c18aa82e0eab9d6d14
---

{{WebAssemblySidebar}}

WebAssembly numerische Anweisungen.

## Konstanten

- [Const](/de/docs/WebAssembly/Reference/Numeric/Const)
  - : Deklarieren Sie konstante Zahlen.

## Vergleich

- [Equal](/de/docs/WebAssembly/Reference/Numeric/Equal)
  - : Prüfen Sie, ob zwei Zahlen gleich sind.
- [Not equal](/de/docs/WebAssembly/Reference/Numeric/Not_equal)
  - : Prüfen Sie, ob zwei Zahlen ungleich sind.
- [Greater than](/de/docs/WebAssembly/Reference/Numeric/Greater_than)
  - : Prüfen Sie, ob eine Zahl größer als eine andere Zahl ist.
- [Less than](/de/docs/WebAssembly/Reference/Numeric/Less_than)
  - : Prüfen Sie, ob eine Zahl kleiner als eine andere Zahl ist.
- [Greater or equal](/de/docs/WebAssembly/Reference/Numeric/Greater_or_equal)
  - : Prüfen Sie, ob eine Zahl größer oder gleich einer anderen Zahl ist.
- [Less or equal](/de/docs/WebAssembly/Reference/Numeric/Less_or_equal)
  - : Prüfen Sie, ob eine Zahl kleiner oder gleich einer anderen Zahl ist.

## Arithmetik

- [Addition](/de/docs/WebAssembly/Reference/Numeric/Addition)
  - : Addieren Sie zwei Zahlen.
- [Subtraction](/de/docs/WebAssembly/Reference/Numeric/Subtraction)
  - : Subtrahieren Sie eine Zahl von einer anderen Zahl.
- [Multiplication](/de/docs/WebAssembly/Reference/Numeric/Multiplication)
  - : Multiplizieren Sie eine Zahl mit einer anderen Zahl.
- [Division](/de/docs/WebAssembly/Reference/Numeric/Division)
  - : Teilen Sie eine Zahl durch eine andere Zahl.
- [Remainder](/de/docs/WebAssembly/Reference/Numeric/Remainder)
  - : Berechnen Sie den Rest, der übrig bleibt, wenn eine ganze Zahl durch eine andere ganze Zahl geteilt wird.

## Konvertierung

- [Extend](/de/docs/WebAssembly/Reference/Numeric/Extend)
  - : Konvertieren (erweitern) Sie `i32` zu `i64`.
- [Wrap](/de/docs/WebAssembly/Reference/Numeric/Wrap)
  - : Konvertieren (umwickeln) Sie `i64` zu `i32`.
- [Promote](/de/docs/WebAssembly/Reference/Numeric/Promote)
  - : Konvertieren (promovieren) Sie `f32` zu `f64`.
- [Demote](/de/docs/WebAssembly/Reference/Numeric/Demote)
  - : Konvertieren (herabstufen) Sie `f64` zu `f32`.
- [Convert](/de/docs/WebAssembly/Reference/Numeric/Convert)
  - : Konvertieren Sie Ganzzahlen in Gleitkommazahlen.
- [Truncate (float to int)](/de/docs/WebAssembly/Reference/Numeric/Truncate_float_to_int)
  - : Konvertieren Sie Gleitkommazahlen (abschneiden des Bruchteils) in Ganzzahlen.
- [Reinterpret](/de/docs/WebAssembly/Reference/Numeric/Reinterpret)
  - : Interpretieren Sie die Bytes von Ganzzahlen als Gleitkommazahlen und umgekehrt.

## Gleitkomma-spezifische Anweisungen

- [Min](/de/docs/WebAssembly/Reference/Numeric/Min)
  - : Erhalten Sie die kleinere von zwei Zahlen.
- [Max](/de/docs/WebAssembly/Reference/Numeric/Max)
  - : Erhalten Sie die größere von zwei Zahlen.
- [Nearest](/de/docs/WebAssembly/Reference/Numeric/Nearest)
  - : Runden Sie eine Zahl auf die nächste ganze Zahl.
- [Ceil](/de/docs/WebAssembly/Reference/Numeric/Ceil)
  - : Runden Sie eine Zahl nach oben.
- [Floor](/de/docs/WebAssembly/Reference/Numeric/Floor)
  - : Runden Sie eine Zahl nach unten.
- [Truncate (float to float)](/de/docs/WebAssembly/Reference/Numeric/Truncate_float_to_float)
  - : Verwerfen Sie den Bruchteil einer Zahl.
- [Absolute](/de/docs/WebAssembly/Reference/Numeric/Absolute)
  - : Erhalten Sie den Absolutwert einer Zahl.
- [Negate](/de/docs/WebAssembly/Reference/Numeric/Negate)
  - : Negieren Sie eine Zahl.
- [Square root](/de/docs/WebAssembly/Reference/Numeric/Square_root)
  - : Erhalten Sie die Quadratwurzel einer Zahl.
- [Copy sign](/de/docs/WebAssembly/Reference/Numeric/Copy_sign)
  - : Kopieren Sie nur das Vorzeichenbit von einer Zahl zu einer anderen.

## Bitweise Operationen

- [AND](/de/docs/WebAssembly/Reference/Numeric/AND)
  - : Wird verwendet für eine bitweise UND-Operation.
- [OR](/de/docs/WebAssembly/Reference/Numeric/OR)
  - : Wird verwendet für eine bitweise ODER-Operation.
- [XOR](/de/docs/WebAssembly/Reference/Numeric/XOR)
  - : Wird verwendet für eine bitweise XOR-Operation.
- [Left shift](/de/docs/WebAssembly/Reference/Numeric/Left_shift)
  - : Wird verwendet für eine bitweise Linksverschiebung.
- [Right shift](/de/docs/WebAssembly/Reference/Numeric/Right_shift)
  - : Wird verwendet für eine bitweise Rechtsverschiebung.
- [Left rotate](/de/docs/WebAssembly/Reference/Numeric/Left_rotate)
  - : Wird verwendet für eine bitweise Linksdrehung.
- [Right rotate](/de/docs/WebAssembly/Reference/Numeric/Right_rotate)
  - : Wird verwendet für eine bitweise Rechtsdrehung.
- [Count leading zeros](/de/docs/WebAssembly/Reference/Numeric/Count_leading_zeros)
  - : Zählen Sie die Anzahl der führenden Nullen in der binären Darstellung einer Zahl.
- [Count trailing zeros](/de/docs/WebAssembly/Reference/Numeric/Count_trailing_zeros)
  - : Zählen Sie die Anzahl der nachlaufenden Nullen in der binären Darstellung einer Zahl.
- [Population count](/de/docs/WebAssembly/Reference/Numeric/Population_count)
  - : Zählen Sie die Gesamtanzahl der Einsen in der binären Darstellung einer Zahl.
