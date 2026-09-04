---
title: WebAssembly numerische Anweisungen
slug: WebAssembly/Reference/Numeric
l10n:
  sourceCommit: 62363e17443a327a2b10525560a5886534a631b7
---

WebAssembly numerische Anweisungen.

## Konstanten

- [`const`](/de/docs/WebAssembly/Reference/Numeric/const)
  - : Deklariert eine konstante Zahl.

## Vergleich

- [`eq`](/de/docs/WebAssembly/Reference/Numeric/eq)
  - : Überprüfen, ob zwei Zahlen gleich sind.
- [`eqz`](/de/docs/WebAssembly/Reference/Numeric/eqz)
  - : Überprüfen, ob eine Zahl gleich `0` ist.
- [`ne`](/de/docs/WebAssembly/Reference/Numeric/ne)
  - : Überprüfen, ob zwei Zahlen ungleich sind.
- [`gt`](/de/docs/WebAssembly/Reference/Numeric/gt)
  - : Überprüfen, ob eine Gleitkommazahl größer ist als eine andere Gleitkommazahl.
- [`gt_s`](/de/docs/WebAssembly/Reference/Numeric/gt_s)
  - : Überprüfen, ob ein vorzeichenbehafteter Integer größer ist als ein anderer vorzeichenbehafteter Integer.
- [`gt_u`](/de/docs/WebAssembly/Reference/Numeric/gt_u)
  - : Überprüfen, ob ein vorzeichenloser Integer größer ist als ein anderer vorzeichenloser Integer.
- [`lt`](/de/docs/WebAssembly/Reference/Numeric/lt)
  - : Überprüfen, ob eine Gleitkommazahl kleiner ist als eine andere Gleitkommazahl.
- [`lt_s`](/de/docs/WebAssembly/Reference/Numeric/lt_s)
  - : Überprüfen, ob ein vorzeichenbehafteter Integer kleiner ist als ein anderer vorzeichenbehafteter Integer.
- [`lt_u`](/de/docs/WebAssembly/Reference/Numeric/lt_u)
  - : Überprüfen, ob ein vorzeichenloser Integer kleiner ist als ein anderer vorzeichenloser Integer.
- [`ge`](/de/docs/WebAssembly/Reference/Numeric/ge)
  - : Überprüfen, ob eine Gleitkommazahl größer oder gleich einer anderen Gleitkommazahl ist.
- [`ge_s`](/de/docs/WebAssembly/Reference/Numeric/ge_s)
  - : Überprüfen, ob ein vorzeichenbehafteter Integer größer oder gleich einem anderen vorzeichenbehafteten Integer ist.
- [`ge_u`](/de/docs/WebAssembly/Reference/Numeric/ge_u)
  - : Überprüfen, ob ein vorzeichenloser Integer größer oder gleich einem anderen vorzeichenlosen Integer ist.
- [`le`](/de/docs/WebAssembly/Reference/Numeric/le)
  - : Überprüfen, ob eine Gleitkommazahl kleiner oder gleich einer anderen Gleitkommazahl ist.
- [`le_s`](/de/docs/WebAssembly/Reference/Numeric/le_s)
  - : Überprüfen, ob ein vorzeichenbehafteter Integer kleiner oder gleich einem anderen vorzeichenbehafteten Integer ist.
- [`le_u`](/de/docs/WebAssembly/Reference/Numeric/le_u)
  - : Überprüfen, ob ein vorzeichenloser Integer kleiner oder gleich einem anderen vorzeichenlosen Integer ist.

## Arithmetik

- [`add`](/de/docs/WebAssembly/Reference/Numeric/add)
  - : Zwei Zahlen addieren.
- [`sub`](/de/docs/WebAssembly/Reference/Numeric/sub)
  - : Eine Zahl von einer anderen Zahl subtrahieren.
- [`mul`](/de/docs/WebAssembly/Reference/Numeric/mul)
  - : Eine Zahl mit einer anderen Zahl multiplizieren.
- [`div`](/de/docs/WebAssembly/Reference/Numeric/div)
  - : Eine Zahl durch eine andere Zahl teilen.
- [`rem`](/de/docs/WebAssembly/Reference/Numeric/rem)
  - : Den Rest berechnen, der übrig bleibt, wenn ein Integer durch einen anderen Integer geteilt wird.

## Breite Arithmetik

- [`add128`](/de/docs/WebAssembly/Reference/Numeric/add128)
  - : Zwei 128-Bit-Integer, dargestellt durch vier 64-Bit-Integer, addieren, um ein 128-Bit-Ergebnis, dargestellt durch zwei 64-Bit-Integer, zu erzeugen.
- [`mul_wide_s`](/de/docs/WebAssembly/Reference/Numeric/mul_wide_s)
  - : Zwei vorzeichenbehaftete 64-Bit-Integer multiplizieren, um ein vorzeichenbehaftetes 128-Bit-Ergebnis zu erzeugen, dargestellt durch zwei 64-Bit-Integer.
- [`mul_wide_u`](/de/docs/WebAssembly/Reference/Numeric/mul_wide_u)
  - : Zwei vorzeichenlose 64-Bit-Integer multiplizieren, um ein vorzeichenloses 128-Bit-Ergebnis zu erzeugen, dargestellt durch zwei 64-Bit-Integer.
- [`sub128`](/de/docs/WebAssembly/Reference/Numeric/sub128)
  - : Einen 128-Bit-Integer, dargestellt durch zwei 64-Bit-Integer, von einem anderen subtrahieren, um ein 128-Bit-Ergebnis, dargestellt durch zwei 64-Bit-Integer, zu erzeugen.

## Umwandlung

- [`extend`](/de/docs/WebAssembly/Reference/Numeric/extend)
  - : `i32` in `i64` konvertieren (erweitern).
- [`wrap_i64`](/de/docs/WebAssembly/Reference/Numeric/wrap_i64)
  - : `i64` in `i32` konvertieren (ummanteln).
- [`promote_32`](/de/docs/WebAssembly/Reference/Numeric/promote_32)
  - : `f32` in `f64` konvertieren (fördern).
- [`demote`](/de/docs/WebAssembly/Reference/Numeric/demote)
  - : `f64` in `f32` konvertieren (abstufen).
- [`convert`](/de/docs/WebAssembly/Reference/Numeric/convert)
  - : Integer in Gleitkommazahlen umwandeln.
- [`trunc`](/de/docs/WebAssembly/Reference/Numeric/trunc)
  - : Den Wert einer Gleitkommazahl ohne ihren Bruchteil erhalten.
- [`trunc_f32_s`](/de/docs/WebAssembly/Reference/Numeric/trunc_f32_s)
  - : Den Bruchteil eines `f32`-Werts entfernen und als vorzeichenbehafteten Integer ausgeben.
- [`trunc_f32_u`](/de/docs/WebAssembly/Reference/Numeric/trunc_f32_u)
  - : Den Bruchteil eines `f32`-Werts entfernen und als vorzeichenlosen Integer ausgeben.
- [`trunc_f64_s`](/de/docs/WebAssembly/Reference/Numeric/trunc_f64_s)
  - : Den Bruchteil eines `f64`-Werts entfernen und als vorzeichenbehafteten Integer ausgeben.
- [`trunc_f64_u`](/de/docs/WebAssembly/Reference/Numeric/trunc_f64_u)
  - : Den Bruchteil eines `f64`-Werts entfernen und als vorzeichenlosen Integer ausgeben.
- [`reinterpret`](/de/docs/WebAssembly/Reference/Numeric/reinterpret)
  - : Die Bytes von Integern als Gleitkommazahlen und umgekehrt reinterpretieren.

## Gleitkomma-spezifische Anweisungen

- [`min`](/de/docs/WebAssembly/Reference/Numeric/min)
  - : Den kleineren von zwei Zahlen ermitteln.
- [`max`](/de/docs/WebAssembly/Reference/Numeric/max)
  - : Die größere von zwei Gleitkommazahlen ermitteln.
- [`nearest`](/de/docs/WebAssembly/Reference/Numeric/nearest)
  - : Eine Zahl auf die nächste ganze Zahl runden.
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
  - : Die Quadratwurzel einer Zahl ermitteln.
- [`copysign`](/de/docs/WebAssembly/Reference/Numeric/copysign)
  - : Nur das Vorzeichenbit von einer Zahl auf eine andere kopieren.

## Bitweise Operationen

- [`and`](/de/docs/WebAssembly/Reference/Numeric/and)
  - : Für die Durchführung eines bitweisen UND verwendet.
- [`or`](/de/docs/WebAssembly/Reference/Numeric/or)
  - : Für die Durchführung eines bitweisen ODER verwendet.
- [`xor`](/de/docs/WebAssembly/Reference/Numeric/xor)
  - : Für die Durchführung eines bitweisen XOR verwendet.
- [`shl`](/de/docs/WebAssembly/Reference/Numeric/shl)
  - : Für die Durchführung einer bitweisen Linksverschiebung verwendet.
- [`shr_s`](/de/docs/WebAssembly/Reference/Numeric/shr_s)
  - : Für die Durchführung einer bitweisen Rechtsverschiebung auf vorzeichenbehafteten Integern verwendet.
- [`shr_u`](/de/docs/WebAssembly/Reference/Numeric/shr_u)
  - : Für die Durchführung einer bitweisen Rechtsverschiebung auf vorzeichenlosen Integern verwendet.
- [`rotl`](/de/docs/WebAssembly/Reference/Numeric/rotl)
  - : Für die Durchführung einer bitweisen Linksdrehung verwendet.
- [`rotr`](/de/docs/WebAssembly/Reference/Numeric/rotr)
  - : Für die Durchführung einer bitweisen Rechtsdrehung verwendet.
- [`clz`](/de/docs/WebAssembly/Reference/Numeric/clz)
  - : Die Anzahl der führenden Nullen in der binären Darstellung einer Zahl zählen.
- [`ctz`](/de/docs/WebAssembly/Reference/Numeric/ctz)
  - : Die Anzahl der abschließenden Nullen in der binären Darstellung einer Zahl zählen.
- [`popcnt`](/de/docs/WebAssembly/Reference/Numeric/popcnt)
  - : Die Gesamtanzahl der Einsen in der binären Darstellung einer Zahl zählen.

## Vorzeichenerweiterungsoperationen

- [`extend8_s`](/de/docs/WebAssembly/Reference/Numeric/extend8_s)
  - : Die niedrigen 8 Bits eines Integers vorzeichen-erweitern, um dessen Vorzeichen im gesamten Wert zu propagieren.
- [`extend16_s`](/de/docs/WebAssembly/Reference/Numeric/extend16_s)
  - : Die niedrigen 16 Bits eines Integers vorzeichen-erweitern, um dessen Vorzeichen im gesamten Wert zu propagieren.
- [`extend32_s`](/de/docs/WebAssembly/Reference/Numeric/extend32_s)
  - : Die niedrigen 32 Bits eines 64-Bit-Integers vorzeichen-erweitern, um dessen Vorzeichen im gesamten Wert zu propagieren.
