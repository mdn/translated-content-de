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
  - : Definieren Sie eine konstante Zahl.

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
  - : Berechnen Sie den verbleibenden Rest, wenn eine ganze Zahl durch eine andere ganze Zahl geteilt wird.

## Umwandlung

- [Extend](/de/docs/WebAssembly/Reference/Numeric/Extend)
  - : Konvertieren (erweitern) Sie `i32` zu `i64`.
- [Wrap](/de/docs/WebAssembly/Reference/Numeric/Wrap)
  - : Konvertieren (umwandeln) Sie `i64` zu `i32`.
- [Promote](/de/docs/WebAssembly/Reference/Numeric/Promote)
  - : Konvertieren (fördern) Sie `f32` zu `f64`.
- [Demote](/de/docs/WebAssembly/Reference/Numeric/Demote)
  - : Konvertieren (herabsetzen) Sie `f64` zu `f32`.
- [Convert](/de/docs/WebAssembly/Reference/Numeric/Convert)
  - : Konvertieren Sie Ganzzahlen zu Gleitkommazahlen.
- [Truncate (float to int)](/de/docs/WebAssembly/Reference/Numeric/Truncate_float_to_int)
  - : Konvertieren (abschneiden des Nachkommateils) Sie Gleitkommazahlen zu Ganzzahlen.
- [Reinterpret](/de/docs/WebAssembly/Reference/Numeric/Reinterpret)
  - : Interpretieren Sie die Bytes von Ganzzahlen als Gleitkommazahlen und umgekehrt.

## Spezifische Anweisungen für Gleitkommazahlen

- [Min](/de/docs/WebAssembly/Reference/Numeric/Min)
  - : Ermitteln Sie die kleinere von zwei Zahlen.
- [Max](/de/docs/WebAssembly/Reference/Numeric/Max)
  - : Ermitteln Sie die größere von zwei Zahlen.
- [Nearest](/de/docs/WebAssembly/Reference/Numeric/Nearest)
  - : Runden Sie eine Zahl auf die nächste ganze Zahl.
- [Ceil](/de/docs/WebAssembly/Reference/Numeric/Ceil)
  - : Runden Sie eine Zahl auf.
- [Floor](/de/docs/WebAssembly/Reference/Numeric/Floor)
  - : Runden Sie eine Zahl ab.
- [Truncate (float to float)](/de/docs/WebAssembly/Reference/Numeric/Truncate_float_to_float)
  - : Ignorieren Sie den Nachkommateil einer Zahl.
- [Absolute](/de/docs/WebAssembly/Reference/Numeric/Absolute)
  - : Ermitteln Sie den Absolutwert einer Zahl.
- [Negate](/de/docs/WebAssembly/Reference/Numeric/Negate)
  - : Negieren Sie eine Zahl.
- [Square root](/de/docs/WebAssembly/Reference/Numeric/Square_root)
  - : Ermitteln Sie die Quadratwurzel einer Zahl.
- [Copy sign](/de/docs/WebAssembly/Reference/Numeric/Copy_sign)
  - : Kopieren Sie nur das Vorzeichenbit von einer Zahl zu einer anderen.

## Bitweise Operationen

- [AND](/de/docs/WebAssembly/Reference/Numeric/AND)
  - : Wird für die Durchführung einer bitweisen UND-Operation verwendet.
- [OR](/de/docs/WebAssembly/Reference/Numeric/OR)
  - : Wird für die Durchführung einer bitweisen ODER-Operation verwendet.
- [XOR](/de/docs/WebAssembly/Reference/Numeric/XOR)
  - : Wird für die Durchführung einer bitweisen XOR-Operation verwendet.
- [Left shift](/de/docs/WebAssembly/Reference/Numeric/Left_shift)
  - : Wird für die Durchführung einer bitweisen Linksverschiebung verwendet.
- [Right shift](/de/docs/WebAssembly/Reference/Numeric/Right_shift)
  - : Wird für die Durchführung einer bitweisen Rechtsverschiebung verwendet.
- [Left rotate](/de/docs/WebAssembly/Reference/Numeric/Left_rotate)
  - : Wird für die Durchführung einer bitweisen Linksrotation verwendet.
- [Right rotate](/de/docs/WebAssembly/Reference/Numeric/Right_rotate)
  - : Wird für die Durchführung einer bitweisen Rechtsrotation verwendet.
- [Count leading zeros](/de/docs/WebAssembly/Reference/Numeric/Count_leading_zeros)
  - : Zählen Sie die Anzahl der führenden Nullen in der binären Darstellung einer Zahl.
- [Count trailing zeros](/de/docs/WebAssembly/Reference/Numeric/Count_trailing_zeros)
  - : Zählen Sie die Anzahl der abschließenden Nullen in der binären Darstellung einer Zahl.
- [Population count](/de/docs/WebAssembly/Reference/Numeric/Population_count)
  - : Zählen Sie die Gesamtzahl der Einsen in der binären Darstellung einer Zahl.
