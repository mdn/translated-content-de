---
title: WebAssembly numerische Anweisungen
slug: WebAssembly/Reference/Numeric
l10n:
  sourceCommit: 9851fc885f1bbc916f529378b506471c150fae98
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
  - : Überprüfen Sie, ob eine Gleitkommazahl größer ist als eine andere Gleitkommazahl.
- [`gt_s`](/de/docs/WebAssembly/Reference/Numeric/gt_s)
  - : Überprüfen Sie, ob eine vorzeichenbehaftete Ganzzahl größer ist als eine andere vorzeichenbehaftete Ganzzahl.
- [`gt_u`](/de/docs/WebAssembly/Reference/Numeric/gt_u)
  - : Überprüfen Sie, ob eine vorzeichenlose Ganzzahl größer ist als eine andere vorzeichenlose Ganzzahl.
- [`lt`](/de/docs/WebAssembly/Reference/Numeric/lt)
  - : Überprüfen Sie, ob eine Gleitkommazahl kleiner ist als eine andere Gleitkommazahl.
- [`lt_s`](/de/docs/WebAssembly/Reference/Numeric/lt_s)
  - : Überprüfen Sie, ob eine vorzeichenbehaftete Ganzzahl kleiner ist als eine andere vorzeichenbehaftete Ganzzahl.
- [`lt_u`](/de/docs/WebAssembly/Reference/Numeric/lt_u)
  - : Überprüfen Sie, ob eine vorzeichenlose Ganzzahl kleiner ist als eine andere vorzeichenlose Ganzzahl.
- [`ge`](/de/docs/WebAssembly/Reference/Numeric/ge)
  - : Überprüfen Sie, ob eine Gleitkommazahl größer oder gleich einer anderen Gleitkommazahl ist.
- [`ge_s`](/de/docs/WebAssembly/Reference/Numeric/ge_s)
  - : Überprüfen Sie, ob eine vorzeichenbehaftete Ganzzahl größer oder gleich einer anderen vorzeichenbehafteten Ganzzahl ist.
- [`ge_u`](/de/docs/WebAssembly/Reference/Numeric/ge_u)
  - : Überprüfen Sie, ob eine vorzeichenlose Ganzzahl größer oder gleich einer anderen vorzeichenlosen Ganzzahl ist.
- [`le`](/de/docs/WebAssembly/Reference/Numeric/le)
  - : Überprüfen Sie, ob eine Gleitkommazahl kleiner oder gleich einer anderen Gleitkommazahl ist.
- [`le_s`](/de/docs/WebAssembly/Reference/Numeric/le_s)
  - : Überprüfen Sie, ob eine vorzeichenbehaftete Ganzzahl kleiner oder gleich einer anderen vorzeichenbehafteten Ganzzahl ist.
- [`le_u`](/de/docs/WebAssembly/Reference/Numeric/le_u)
  - : Überprüfen Sie, ob eine vorzeichenlose Ganzzahl kleiner oder gleich einer anderen vorzeichenlosen Ganzzahl ist.

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
  - : Berechnen Sie den Rest, der übrig bleibt, wenn eine Ganzzahl durch eine andere Ganzzahl geteilt wird.

## Umwandlung

- [`extend`](/de/docs/WebAssembly/Reference/Numeric/extend)
  - : Konvertiert (erweitert) `i32` zu `i64`.
- [`wrap_i64`](/de/docs/WebAssembly/Reference/Numeric/wrap_i64)
  - : Konvertiert (umwickelt) `i64` zu `i32`.
- [`promote_32`](/de/docs/WebAssembly/Reference/Numeric/promote_32)
  - : Konvertiert (erhöht) `f32` zu `f64`.
- [`demote`](/de/docs/WebAssembly/Reference/Numeric/demote)
  - : Konvertiert (degradiert) `f64` zu `f32`.
- [`convert`](/de/docs/WebAssembly/Reference/Numeric/convert)
  - : Konvertiert Ganzzahlen zu Gleitkommazahlen.
- [`trunc`](/de/docs/WebAssembly/Reference/Numeric/trunc)
  - : Erhält den Wert einer Gleitkommazahl ohne ihren Bruchteil.
- [`trunc_f32_s`](/de/docs/WebAssembly/Reference/Numeric/trunc_f32_s)
  - : Entfernt den Bruchteil eines `f32`-Werts und gibt ihn als vorzeichenbehaftete Ganzzahl aus.
- [`trunc_f32_u`](/de/docs/WebAssembly/Reference/Numeric/trunc_f32_u)
  - : Entfernt den Bruchteil eines `f32`-Werts und gibt ihn als vorzeichenlose Ganzzahl aus.
- [`trunc_f64_s`](/de/docs/WebAssembly/Reference/Numeric/trunc_f64_s)
  - : Entfernt den Bruchteil eines `f64`-Werts und gibt ihn als vorzeichenbehaftete Ganzzahl aus.
- [`trunc_f64_u`](/de/docs/WebAssembly/Reference/Numeric/trunc_f64_u)
  - : Entfernt den Bruchteil eines `f64`-Werts und gibt ihn als vorzeichenlose Ganzzahl aus.
- [`reinterpret`](/de/docs/WebAssembly/Reference/Numeric/reinterpret)
  - : Interpretiert die Bytes von Ganzzahlen als Gleitkommazahlen und umgekehrt.

## Gleitkomma-spezifische Anweisungen

- [`min`](/de/docs/WebAssembly/Reference/Numeric/min)
  - : Erhalten Sie den kleineren von zwei Zahlen.
- [`max`](/de/docs/WebAssembly/Reference/Numeric/max)
  - : Erhalten Sie die größere von zwei Gleitkommazahlen.
- [`nearest`](/de/docs/WebAssembly/Reference/Numeric/nearest)
  - : Runden Sie eine Zahl auf die nächste ganze Zahl.
- [`ceil`](/de/docs/WebAssembly/Reference/Numeric/ceil)
  - : Runden Sie eine Zahl auf.
- [`floor`](/de/docs/WebAssembly/Reference/Numeric/floor)
  - : Runden Sie eine Zahl ab.
- [`trunc`](/de/docs/WebAssembly/Reference/Numeric/trunc)
  - : Verwerfen Sie den Bruchteil einer Zahl.
- [`abs`](/de/docs/WebAssembly/Reference/Numeric/abs)
  - : Erhalten Sie den Absolutwert einer Zahl.
- [`neg`](/de/docs/WebAssembly/Reference/Numeric/neg)
  - : Negieren Sie eine Zahl.
- [`sqrt`](/de/docs/WebAssembly/Reference/Numeric/sqrt)
  - : Erhalten Sie die Quadratwurzel einer Zahl.
- [`copysign`](/de/docs/WebAssembly/Reference/Numeric/copysign)
  - : Kopieren Sie nur das Vorzeichenbit von einer Zahl zu einer anderen.

## Bitweise

- [`and`](/de/docs/WebAssembly/Reference/Numeric/and)
  - : Wird verwendet, um ein bitweises UND durchzuführen.
- [`or`](/de/docs/WebAssembly/Reference/Numeric/or)
  - : Wird verwendet, um ein bitweises OR durchzuführen.
- [`xor`](/de/docs/WebAssembly/Reference/Numeric/xor)
  - : Wird verwendet, um ein bitweises XOR durchzuführen.
- [`shl`](/de/docs/WebAssembly/Reference/Numeric/shl)
  - : Wird verwendet, um eine bitweise Linksverschiebung durchzuführen.
- [`shr_s`](/de/docs/WebAssembly/Reference/Numeric/shr_s)
  - : Wird verwendet, um eine bitweise Rechtsverschiebung bei vorzeichenbehafteten Ganzzahlen durchzuführen.
- [`shr_u`](/de/docs/WebAssembly/Reference/Numeric/shr_u)
  - : Wird verwendet, um eine bitweise Rechtsverschiebung bei vorzeichenlosen Ganzzahlen durchzuführen.
- [`rotl`](/de/docs/WebAssembly/Reference/Numeric/rotl)
  - : Wird verwendet, um eine bitweise Linksrotation durchzuführen.
- [`rotr`](/de/docs/WebAssembly/Reference/Numeric/rotr)
  - : Wird verwendet, um eine bitweise Rechtsrotation durchzuführen.
- [`clz`](/de/docs/WebAssembly/Reference/Numeric/clz)
  - : Zählt die Anzahl der führenden Nullen in der Binärdarstellung einer Zahl.
- [`ctz`](/de/docs/WebAssembly/Reference/Numeric/ctz)
  - : Zählt die Anzahl der nachgestellten Nullen in der Binärdarstellung einer Zahl.
- [`popcnt`](/de/docs/WebAssembly/Reference/Numeric/popcnt)
  - : Zählt die Gesamtzahl der Einsen in der Binärdarstellung einer Zahl.
