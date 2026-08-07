---
title: WebAssembly numerische Anweisungen
slug: WebAssembly/Reference/Numeric
l10n:
  sourceCommit: 43030e03d6c792494bf8eb4d76963933a564e8d9
---

WebAssembly numerische Anweisungen.

## Konstanten

- [`const`](/de/docs/WebAssembly/Reference/Numeric/const)
  - : Deklarieren Sie eine konstante Zahl.

## Vergleich

- [`eq`](/de/docs/WebAssembly/Reference/Numeric/eq)
  - : Überprüfen Sie, ob zwei Zahlen gleich sind.
- [`eqz`](/de/docs/WebAssembly/Reference/Numeric/eqz)
  - : Überprüfen Sie, ob eine Zahl gleich `0` ist.
- [`ne`](/de/docs/WebAssembly/Reference/Numeric/ne)
  - : Überprüfen Sie, ob zwei Zahlen ungleich sind.
- [`gt`](/de/docs/WebAssembly/Reference/Numeric/gt)
  - : Überprüfen Sie, ob eine Fließkommazahl größer ist als eine andere Fließkommazahl.
- [`gt_s`](/de/docs/WebAssembly/Reference/Numeric/gt_s)
  - : Überprüfen Sie, ob eine vorzeichenbehaftete ganze Zahl größer ist als eine andere vorzeichenbehaftete ganze Zahl.
- [`gt_u`](/de/docs/WebAssembly/Reference/Numeric/gt_u)
  - : Überprüfen Sie, ob eine vorzeichenlose ganze Zahl größer ist als eine andere vorzeichenlose ganze Zahl.
- [`lt`](/de/docs/WebAssembly/Reference/Numeric/lt)
  - : Überprüfen Sie, ob eine Fließkommazahl kleiner ist als eine andere Fließkommazahl.
- [`lt_s`](/de/docs/WebAssembly/Reference/Numeric/lt_s)
  - : Überprüfen Sie, ob eine vorzeichenbehaftete ganze Zahl kleiner ist als eine andere vorzeichenbehaftete ganze Zahl.
- [`lt_u`](/de/docs/WebAssembly/Reference/Numeric/lt_u)
  - : Überprüfen Sie, ob eine vorzeichenlose ganze Zahl kleiner ist als eine andere vorzeichenlose ganze Zahl.
- [`ge`](/de/docs/WebAssembly/Reference/Numeric/ge)
  - : Überprüfen Sie, ob eine Fließkommazahl größer oder gleich einer anderen Fließkommazahl ist.
- [`ge_s`](/de/docs/WebAssembly/Reference/Numeric/ge_s)
  - : Überprüfen Sie, ob eine vorzeichenbehaftete ganze Zahl größer oder gleich einer anderen vorzeichenbehafteten ganzen Zahl ist.
- [`ge_u`](/de/docs/WebAssembly/Reference/Numeric/ge_u)
  - : Überprüfen Sie, ob eine vorzeichenlose ganze Zahl größer oder gleich einer anderen vorzeichenlosen ganzen Zahl ist.
- [`le`](/de/docs/WebAssembly/Reference/Numeric/le)
  - : Überprüfen Sie, ob eine Fließkommazahl kleiner oder gleich einer anderen Fließkommazahl ist.
- [`le_s`](/de/docs/WebAssembly/Reference/Numeric/le_s)
  - : Überprüfen Sie, ob eine vorzeichenbehaftete ganze Zahl kleiner oder gleich einer anderen vorzeichenbehafteten ganzen Zahl ist.
- [`le_u`](/de/docs/WebAssembly/Reference/Numeric/le_u)
  - : Überprüfen Sie, ob eine vorzeichenlose ganze Zahl kleiner oder gleich einer anderen vorzeichenlosen ganzen Zahl ist.

## Arithmetik

- [`add`](/de/docs/WebAssembly/Reference/Numeric/add)
  - : Addieren Sie zwei Zahlen.
- [`sub`](/de/docs/WebAssembly/Reference/Numeric/sub)
  - : Subtrahieren Sie eine Zahl von einer anderen Zahl.
- [`mul`](/de/docs/WebAssembly/Reference/Numeric/mul)
  - : Multiplizieren Sie eine Zahl mit einer anderen Zahl.
- [`div`](/de/docs/WebAssembly/Reference/Numeric/div)
  - : Teilen Sie eine Zahl durch eine andere Zahl.
- [`rem`](/de/docs/WebAssembly/Reference/Numeric/rem)
  - : Berechnen Sie den Rest, der übrig bleibt, wenn eine ganze Zahl durch eine andere ganze Zahl geteilt wird.

## Umwandlung

- [`extend`](/de/docs/WebAssembly/Reference/Numeric/extend)
  - : Konvertieren (erweitern) von `i32` zu `i64`.
- [`wrap_i64`](/de/docs/WebAssembly/Reference/Numeric/wrap_i64)
  - : Konvertieren (umwickeln) von `i64` zu `i32`.
- [`promote_32`](/de/docs/WebAssembly/Reference/Numeric/promote_32)
  - : Konvertieren (fördern) von `f32` zu `f64`.
- [`demote`](/de/docs/WebAssembly/Reference/Numeric/demote)
  - : Konvertieren (degradieren) von `f64` zu `f32`.
- [`convert`](/de/docs/WebAssembly/Reference/Numeric/convert)
  - : Konvertieren von ganzen Zahlen zu Fließkommazahlen.
- [`trunc`](/de/docs/WebAssembly/Reference/Numeric/trunc)
  - : Holt den Wert einer Fließkommazahl ohne ihren Dezimalteil.
- [`trunc_f32_s`](/de/docs/WebAssembly/Reference/Numeric/trunc_f32_s)
  - : Entfernt den Dezimalteil eines `f32`-Wertes und gibt ihn als vorzeichenbehaftete ganze Zahl aus.
- [`trunc_f32_u`](/de/docs/WebAssembly/Reference/Numeric/trunc_f32_u)
  - : Entfernt den Dezimalteil eines `f32`-Wertes und gibt ihn als vorzeichenlose ganze Zahl aus.
- [`trunc_f64_s`](/de/docs/WebAssembly/Reference/Numeric/trunc_f64_s)
  - : Entfernt den Dezimalteil eines `f64`-Wertes und gibt ihn als vorzeichenbehaftete ganze Zahl aus.
- [`trunc_f64_u`](/de/docs/WebAssembly/Reference/Numeric/trunc_f64_u)
  - : Entfernt den Dezimalteil eines `f64`-Wertes und gibt ihn als vorzeichenlose ganze Zahl aus.
- [`reinterpret`](/de/docs/WebAssembly/Reference/Numeric/reinterpret)
  - : Die Bytes von ganzen Zahlen als Fließkommazahlen und umgekehrt umdeuten.

## Fließkomma-spezifische Anweisungen

- [`min`](/de/docs/WebAssembly/Reference/Numeric/min)
  - : Holen Sie die kleinere von zwei Zahlen.
- [`max`](/de/docs/WebAssembly/Reference/Numeric/max)
  - : Holen Sie die größere von zwei Fließkommazahlen.
- [`nearest`](/de/docs/WebAssembly/Reference/Numeric/nearest)
  - : Runden Sie eine Zahl auf die nächste ganze Zahl.
- [`ceil`](/de/docs/WebAssembly/Reference/Numeric/ceil)
  - : Runden Sie eine Zahl auf.
- [`floor`](/de/docs/WebAssembly/Reference/Numeric/floor)
  - : Runden Sie eine Zahl ab.
- [`trunc`](/de/docs/WebAssembly/Reference/Numeric/trunc)
  - : Verwerfen Sie den Dezimalteil einer Zahl.
- [`abs`](/de/docs/WebAssembly/Reference/Numeric/abs)
  - : Holen Sie den absoluten Wert einer Zahl.
- [`neg`](/de/docs/WebAssembly/Reference/Numeric/neg)
  - : Negieren Sie eine Zahl.
- [`sqrt`](/de/docs/WebAssembly/Reference/Numeric/sqrt)
  - : Holen Sie die Quadratwurzel einer Zahl.
- [`copysign`](/de/docs/WebAssembly/Reference/Numeric/copysign)
  - : Kopieren Sie nur das Vorzeichenbit von einer Zahl zu einer anderen.

## Bitweise Operationen

- [`and`](/de/docs/WebAssembly/Reference/Numeric/and)
  - : Wird für die Ausführung eines bitweisen UND verwendet.
- [`or`](/de/docs/WebAssembly/Reference/Numeric/or)
  - : Wird für die Ausführung eines bitweisen ODER verwendet.
- [`xor`](/de/docs/WebAssembly/Reference/Numeric/xor)
  - : Wird für die Ausführung eines bitweisen XOR verwendet.
- [`shl`](/de/docs/WebAssembly/Reference/Numeric/shl)
  - : Wird für die Ausführung eines bitweisen Linksverschiebens verwendet.
- [`shr_s`](/de/docs/WebAssembly/Reference/Numeric/shr_s)
  - : Wird für die Ausführung eines bitweisen Rechtsverschiebens auf vorzeichenbehafteten ganzen Zahlen verwendet.
- [`shr_u`](/de/docs/WebAssembly/Reference/Numeric/shr_u)
  - : Wird für die Ausführung eines bitweisen Rechtsverschiebens auf vorzeichenlosen ganzen Zahlen verwendet.
- [`rotl`](/de/docs/WebAssembly/Reference/Numeric/rotl)
  - : Wird für die Ausführung eines bitweisen Linksdrehens verwendet.
- [`rotr`](/de/docs/WebAssembly/Reference/Numeric/rotr)
  - : Wird für die Ausführung eines bitweisen Rechtsdrehens verwendet.
- [`clz`](/de/docs/WebAssembly/Reference/Numeric/clz)
  - : Zählt die Anzahl führender Nullen in der binären Darstellung einer Zahl.
- [`ctz`](/de/docs/WebAssembly/Reference/Numeric/ctz)
  - : Zählt die Anzahl nachfolgender Nullen in der binären Darstellung einer Zahl.
- [`popcnt`](/de/docs/WebAssembly/Reference/Numeric/popcnt)
  - : Zählt die Gesamtanzahl von 1en in der binären Darstellung einer Zahl.

## Vorzeichen-Zusatzerweiterung

- [`extend8_s`](/de/docs/WebAssembly/Reference/Numeric/extend8_s)
  - : Vorzeichen-Erweiterung der niedrigen 8 Bits einer ganzen Zahl, um ihr Vorzeichen im gesamten Wert zu propagieren.
- [`extend16_s`](/de/docs/WebAssembly/Reference/Numeric/extend16_s)
  - : Vorzeichen-Erweiterung der niedrigen 16 Bits einer ganzen Zahl, um ihr Vorzeichen im gesamten Wert zu propagieren.
- [`extend32_s`](/de/docs/WebAssembly/Reference/Numeric/extend32_s)
  - : Vorzeichen-Erweiterung der niedrigen 32 Bits einer 64-Bit-Ganzzahl, um ihr Vorzeichen im gesamten Wert zu propagieren.
