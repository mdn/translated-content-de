---
title: WebAssembly numerische Anweisungen
slug: WebAssembly/Reference/Numeric
l10n:
  sourceCommit: f542ed344953b3312fc92150bba11536667e288a
---

WebAssembly numerische Anweisungen.

## Konstanten

- [`const`](/de/docs/WebAssembly/Reference/Numeric/const)
  - : Eine konstante Zahl deklarieren.

## Vergleich

- [`eq`](/de/docs/WebAssembly/Reference/Numeric/eq)
  - : Überprüfen, ob zwei Zahlen gleich sind.
- [`eqz`](/de/docs/WebAssembly/Reference/Numeric/eqz)
  - : Überprüfen, ob eine Zahl gleich `0` ist.
- [`ne`](/de/docs/WebAssembly/Reference/Numeric/ne)
  - : Überprüfen, ob zwei Zahlen ungleich sind.
- [`gt`](/de/docs/WebAssembly/Reference/Numeric/gt)
  - : Überprüfen, ob eine Gleitkommazahl größer als eine andere Gleitkommazahl ist.
- [`gt_s`](/de/docs/WebAssembly/Reference/Numeric/gt_s)
  - : Überprüfen, ob eine vorzeichenbehaftete Ganzzahl größer als eine andere vorzeichenbehaftete Ganzzahl ist.
- [`gt_u`](/de/docs/WebAssembly/Reference/Numeric/gt_u)
  - : Überprüfen, ob eine vorzeichenlose Ganzzahl größer als eine andere vorzeichenlose Ganzzahl ist.
- [`lt`](/de/docs/WebAssembly/Reference/Numeric/lt)
  - : Überprüfen, ob eine Gleitkommazahl kleiner als eine andere Gleitkommazahl ist.
- [`lt_s`](/de/docs/WebAssembly/Reference/Numeric/lt_s)
  - : Überprüfen, ob eine vorzeichenbehaftete Ganzzahl kleiner als eine andere vorzeichenbehaftete Ganzzahl ist.
- [`lt_u`](/de/docs/WebAssembly/Reference/Numeric/lt_u)
  - : Überprüfen, ob eine vorzeichenlose Ganzzahl kleiner als eine andere vorzeichenlose Ganzzahl ist.
- [`ge`](/de/docs/WebAssembly/Reference/Numeric/ge)
  - : Überprüfen, ob eine Gleitkommazahl größer oder gleich einer anderen Gleitkommazahl ist.
- [`ge_s`](/de/docs/WebAssembly/Reference/Numeric/ge_s)
  - : Überprüfen, ob eine vorzeichenbehaftete Ganzzahl größer oder gleich einer anderen vorzeichenbehafteten Ganzzahl ist.
- [`ge_u`](/de/docs/WebAssembly/Reference/Numeric/ge_u)
  - : Überprüfen, ob eine vorzeichenlose Ganzzahl größer oder gleich einer anderen vorzeichenlosen Ganzzahl ist.
- [`le`](/de/docs/WebAssembly/Reference/Numeric/le)
  - : Überprüfen, ob eine Gleitkommazahl kleiner oder gleich einer anderen Gleitkommazahl ist.
- [`le_s`](/de/docs/WebAssembly/Reference/Numeric/le_s)
  - : Überprüfen, ob eine vorzeichenbehaftete Ganzzahl kleiner oder gleich einer anderen vorzeichenbehafteten Ganzzahl ist.
- [`le_u`](/de/docs/WebAssembly/Reference/Numeric/le_u)
  - : Überprüfen, ob eine vorzeichenlose Ganzzahl kleiner oder gleich einer anderen vorzeichenlosen Ganzzahl ist.

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
  - : Den Rest berechnen, der verbleibt, wenn eine Ganzzahl durch eine andere Ganzzahl geteilt wird.

## Weite Arithmetik

- [`add128`](/de/docs/WebAssembly/Reference/Numeric/add128)
  - : Zwei 128-Bit-Ganzzahlen, dargestellt durch vier 64-Bit-Ganzzahlen, addieren, um ein 128-Bit-Ergebnis zu erzeugen, das durch zwei 64-Bit-Ganzzahlen dargestellt wird.
- [`mul_wide_s`](/de/docs/WebAssembly/Reference/Numeric/mul_wide_s)
  - : Zwei vorzeichenbehaftete 64-Bit-Ganzzahlen multiplizieren, um ein vorzeichenbehaftetes 128-Bit-Ergebnis zu erzeugen, das durch zwei 64-Bit-Ganzzahlen dargestellt wird.
- [`mul_wide_u`](/de/docs/WebAssembly/Reference/Numeric/mul_wide_u)
  - : Zwei vorzeichenlose 64-Bit-Ganzzahlen multiplizieren, um ein vorzeichenloses 128-Bit-Ergebnis zu erzeugen, das durch zwei 64-Bit-Ganzzahlen dargestellt wird.
- [`sub128`](/de/docs/WebAssembly/Reference/Numeric/sub128)
  - : Eine 128-Bit-Ganzzahl, dargestellt durch zwei 64-Bit-Ganzzahlen, von einer anderen subtrahieren, um ein 128-Bit-Ergebnis zu erzeugen, das durch zwei 64-Bit-Ganzzahlen dargestellt wird.

## Konvertierung

- [`extend`](/de/docs/WebAssembly/Reference/Numeric/extend)
  - : `i32` in `i64` konvertieren (erweitern).
- [`wrap_i64`](/de/docs/WebAssembly/Reference/Numeric/wrap_i64)
  - : `i64` in `i32` konvertieren (umwickeln).
- [`promote_32`](/de/docs/WebAssembly/Reference/Numeric/promote_32)
  - : `f32` in `f64` konvertieren (erhöhen).
- [`demote`](/de/docs/WebAssembly/Reference/Numeric/demote)
  - : `f64` in `f32` konvertieren (herabsetzen).
- [`convert`](/de/docs/WebAssembly/Reference/Numeric/convert)
  - : Ganzzahlen in Gleitkommazahlen konvertieren.
- [`trunc`](/de/docs/WebAssembly/Reference/Numeric/trunc)
  - : Den Wert einer Gleitkommazahl ohne ihren Bruchteil erhalten.
- [`trunc_f32_s`](/de/docs/WebAssembly/Reference/Numeric/trunc_f32_s)
  - : Den Bruchteil eines `f32`-Wertes entfernen und ihn als vorzeichenbehaftete Ganzzahl ausgeben.
- [`trunc_f32_u`](/de/docs/WebAssembly/Reference/Numeric/trunc_f32_u)
  - : Den Bruchteil eines `f32`-Wertes entfernen und ihn als vorzeichenlose Ganzzahl ausgeben.
- [`trunc_f64_s`](/de/docs/WebAssembly/Reference/Numeric/trunc_f64_s)
  - : Den Bruchteil eines `f64`-Wertes entfernen und ihn als vorzeichenbehaftete Ganzzahl ausgeben.
- [`trunc_f64_u`](/de/docs/WebAssembly/Reference/Numeric/trunc_f64_u)
  - : Den Bruchteil eines `f64`-Wertes entfernen und ihn als vorzeichenlose Ganzzahl ausgeben.
- [`reinterpret`](/de/docs/WebAssembly/Reference/Numeric/reinterpret)
  - : Die Bytes von Ganzzahlen als Gleitkommazahlen und umgekehrt uminterpretieren.

## Gleitkomma-spezifische Anweisungen

- [`min`](/de/docs/WebAssembly/Reference/Numeric/min)
  - : Die niedrigere von zwei Zahlen erhalten.
- [`max`](/de/docs/WebAssembly/Reference/Numeric/max)
  - : Die höhere von zwei Gleitkommazahlen erhalten.
- [`nearest`](/de/docs/WebAssembly/Reference/Numeric/nearest)
  - : Eine Zahl auf die nächste Ganzzahl runden.
- [`ceil`](/de/docs/WebAssembly/Reference/Numeric/ceil)
  - : Eine Zahl aufrunden.
- [`floor`](/de/docs/WebAssembly/Reference/Numeric/floor)
  - : Eine Zahl abrunden.
- [`trunc`](/de/docs/WebAssembly/Reference/Numeric/trunc)
  - : Den Bruchteil einer Zahl verwerfen.
- [`abs`](/de/docs/WebAssembly/Reference/Numeric/abs)
  - : Den absoluten Wert einer Zahl erhalten.
- [`neg`](/de/docs/WebAssembly/Reference/Numeric/neg)
  - : Eine Zahl negieren.
- [`sqrt`](/de/docs/WebAssembly/Reference/Numeric/sqrt)
  - : Die Quadratwurzel einer Zahl erhalten.
- [`copysign`](/de/docs/WebAssembly/Reference/Numeric/copysign)
  - : Nur das Vorzeichenbit von einer Zahl auf eine andere kopieren.

## Bitweise Operationen

- [`and`](/de/docs/WebAssembly/Reference/Numeric/and)
  - : Für die Durchführung eines bitweisen AND verwendet.
- [`or`](/de/docs/WebAssembly/Reference/Numeric/or)
  - : Für die Durchführung eines bitweisen OR verwendet.
- [`xor`](/de/docs/WebAssembly/Reference/Numeric/xor)
  - : Für die Durchführung eines bitweisen XOR verwendet.
- [`shl`](/de/docs/WebAssembly/Reference/Numeric/shl)
  - : Für die Durchführung eines bitweisen Linksverschiebens verwendet.
- [`shr_s`](/de/docs/WebAssembly/Reference/Numeric/shr_s)
  - : Für die Durchführung eines bitweisen Rechtsschiebens bei vorzeichenbehafteten Ganzzahlen verwendet.
- [`shr_u`](/de/docs/WebAssembly/Reference/Numeric/shr_u)
  - : Für die Durchführung eines bitweisen Rechtsschiebens bei vorzeichenlosen Ganzzahlen verwendet.
- [`rotl`](/de/docs/WebAssembly/Reference/Numeric/rotl)
  - : Für die Durchführung eines bitweisen Linksdrehens verwendet.
- [`rotr`](/de/docs/WebAssembly/Reference/Numeric/rotr)
  - : Für die Durchführung eines bitweisen Rechtsdrehens verwendet.
- [`clz`](/de/docs/WebAssembly/Reference/Numeric/clz)
  - : Die Anzahl führender Nullen in der Binärdarstellung einer Zahl zählen.
- [`ctz`](/de/docs/WebAssembly/Reference/Numeric/ctz)
  - : Die Anzahl nachgestellter Nullen in der Binärdarstellung einer Zahl zählen.
- [`popcnt`](/de/docs/WebAssembly/Reference/Numeric/popcnt)
  - : Die Gesamtanzahl von 1en in der Binärdarstellung einer Zahl zählen.

## Vorzeichenerweiterungsoperationen

- [`extend8_s`](/de/docs/WebAssembly/Reference/Numeric/extend8_s)
  - : Die niedrigsten 8 Bits einer Ganzzahl mit ihrem Vorzeichen erweitern, um das Vorzeichen im gesamten Wert zu propagieren.
- [`extend16_s`](/de/docs/WebAssembly/Reference/Numeric/extend16_s)
  - : Die niedrigsten 16 Bits einer Ganzzahl mit ihrem Vorzeichen erweitern, um das Vorzeichen im gesamten Wert zu propagieren.
- [`extend32_s`](/de/docs/WebAssembly/Reference/Numeric/extend32_s)
  - : Die niedrigsten 32 Bits einer 64-Bit-Ganzzahl mit ihrem Vorzeichen erweitern, um das Vorzeichen im gesamten Wert zu propagieren.
