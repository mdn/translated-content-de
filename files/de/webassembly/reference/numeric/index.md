---
title: WebAssembly numerische Anweisungen
slug: WebAssembly/Reference/Numeric
l10n:
  sourceCommit: 30e0adab23668217555b7ed37df7e6e61b002bf3
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
  - : Überprüfen Sie, ob eine Gleitkommazahl größer als eine andere Gleitkommazahl ist.
- [`gt_s`](/de/docs/WebAssembly/Reference/Numeric/gt_s)
  - : Überprüfen Sie, ob eine vorzeichenbehaftete Ganzzahl größer als eine andere vorzeichenbehaftete Ganzzahl ist.
- [`gt_u`](/de/docs/WebAssembly/Reference/Numeric/gt_u)
  - : Überprüfen Sie, ob eine vorzeichenlose Ganzzahl größer als eine andere vorzeichenlose Ganzzahl ist.
- [`lt`](/de/docs/WebAssembly/Reference/Numeric/lt)
  - : Überprüfen Sie, ob eine Gleitkommazahl kleiner als eine andere Gleitkommazahl ist.
- [`lt_s`](/de/docs/WebAssembly/Reference/Numeric/lt_s)
  - : Überprüfen Sie, ob eine vorzeichenbehaftete Ganzzahl kleiner als eine andere vorzeichenbehaftete Ganzzahl ist.
- [`lt_u`](/de/docs/WebAssembly/Reference/Numeric/lt_u)
  - : Überprüfen Sie, ob eine vorzeichenlose Ganzzahl kleiner als eine andere vorzeichenlose Ganzzahl ist.
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
  - : Addiert zwei Zahlen.
- [`sub`](/de/docs/WebAssembly/Reference/Numeric/sub)
  - : Subtrahiert eine Zahl von einer anderen Zahl.
- [`mul`](/de/docs/WebAssembly/Reference/Numeric/mul)
  - : Multipliziert eine Zahl mit einer anderen Zahl.
- [`div`](/de/docs/WebAssembly/Reference/Numeric/div)
  - : Dividiert eine Zahl durch eine andere Zahl.
- [`rem`](/de/docs/WebAssembly/Reference/Numeric/rem)
  - : Berechnet den Rest, der übrig bleibt, wenn eine Ganzzahl durch eine andere Ganzzahl geteilt wird.

## Konvertierung

- [`extend`](/de/docs/WebAssembly/Reference/Numeric/extend)
  - : Konvertiert (erweitert) `i32` zu `i64`.
- [`wrap_i64`](/de/docs/WebAssembly/Reference/Numeric/wrap_i64)
  - : Konvertiert (verpackt) `i64` zu `i32`.
- [`promote_32`](/de/docs/WebAssembly/Reference/Numeric/promote_32)
  - : Konvertiert (erhöht) `f32` zu `f64`.
- [`demote`](/de/docs/WebAssembly/Reference/Numeric/demote)
  - : Konvertiert (herabgestuft) `f64` zu `f32`.
- [`convert`](/de/docs/WebAssembly/Reference/Numeric/convert)
  - : Konvertiert Ganzzahlen in Gleitkommazahlen.
- [`trunc`](/de/docs/WebAssembly/Reference/Numeric/trunc)
  - : Ermittelt den Wert einer Gleitkommazahl ohne ihren Dezimalteil.
- [`trunc_f32_s`](/de/docs/WebAssembly/Reference/Numeric/trunc_f32_s)
  - : Entfernt den Dezimalteil eines `f32` Wertes und gibt ihn als vorzeichenbehaftete Ganzzahl aus.
- [`trunc_f32_u`](/de/docs/WebAssembly/Reference/Numeric/trunc_f32_u)
  - : Entfernt den Dezimalteil eines `f32` Wertes und gibt ihn als vorzeichenlose Ganzzahl aus.
- [`trunc_f64_s`](/de/docs/WebAssembly/Reference/Numeric/trunc_f64_s)
  - : Entfernt den Dezimalteil eines `f64` Wertes und gibt ihn als vorzeichenbehaftete Ganzzahl aus.
- [`trunc_f64_u`](/de/docs/WebAssembly/Reference/Numeric/trunc_f64_u)
  - : Entfernt den Dezimalteil eines `f64` Wertes und gibt ihn als vorzeichenlose Ganzzahl aus.
- [`reinterpret`](/de/docs/WebAssembly/Reference/Numeric/reinterpret)
  - : Reinterpretiert die Bytes von Ganzzahlen als Gleitkommazahlen und umgekehrt.

## Gleitkommazahl-spezifische Anweisungen

- [`min`](/de/docs/WebAssembly/Reference/Numeric/min)
  - : Gibt die kleinere von zwei Zahlen zurück.
- [`max`](/de/docs/WebAssembly/Reference/Numeric/max)
  - : Gibt die größere von zwei Gleitkommazahlen zurück.
- [`nearest`](/de/docs/WebAssembly/Reference/Numeric/nearest)
  - : Rundet eine Zahl auf die nächste Ganzzahl.
- [`ceil`](/de/docs/WebAssembly/Reference/Numeric/ceil)
  - : Rundet eine Zahl nach oben.
- [`floor`](/de/docs/WebAssembly/Reference/Numeric/floor)
  - : Rundet eine Zahl nach unten.
- [`trunc`](/de/docs/WebAssembly/Reference/Numeric/trunc)
  - : Verwirft den Dezimalteil einer Zahl.
- [`abs`](/de/docs/WebAssembly/Reference/Numeric/abs)
  - : Gibt den Absolutwert einer Zahl zurück.
- [`neg`](/de/docs/WebAssembly/Reference/Numeric/neg)
  - : Negiert eine Zahl.
- [`sqrt`](/de/docs/WebAssembly/Reference/Numeric/sqrt)
  - : Gibt die Quadratwurzel einer Zahl.
- [`copysign`](/de/docs/WebAssembly/Reference/Numeric/copysign)
  - : Kopiert nur das Vorzeichenbit von einer Zahl zu einer anderen.

## Bitweise

- [`and`](/de/docs/WebAssembly/Reference/Numeric/and)
  - : Wird für die Durchführung eines bitweisen UND verwendet.
- [`or`](/de/docs/WebAssembly/Reference/Numeric/or)
  - : Wird für die Durchführung eines bitweisen ODER verwendet.
- [`xor`](/de/docs/WebAssembly/Reference/Numeric/xor)
  - : Wird für die Durchführung eines bitweisen XOR verwendet.
- [`shl`](/de/docs/WebAssembly/Reference/Numeric/shl)
  - : Wird für die Durchführung einer bitweisen Linksverschiebung verwendet.
- [`shr_s`](/de/docs/WebAssembly/Reference/Numeric/shr_s)
  - : Wird für die Durchführung einer bitweisen Rechtsverschiebung bei vorzeichenbehafteten Ganzzahlen verwendet.
- [`shr_u`](/de/docs/WebAssembly/Reference/Numeric/shr_u)
  - : Wird für die Durchführung einer bitweisen Rechtsverschiebung bei vorzeichenlosen Ganzzahlen verwendet.
- [`rotl`](/de/docs/WebAssembly/Reference/Numeric/rotl)
  - : Wird für die Durchführung einer bitweisen Linksdrehung verwendet.
- [`rotr`](/de/docs/WebAssembly/Reference/Numeric/rotr)
  - : Wird für die Durchführung einer bitweisen Rechtsdrehung verwendet.
- [`clz`](/de/docs/WebAssembly/Reference/Numeric/clz)
  - : Zählt die Anzahl der führenden Nullen in der binären Darstellung einer Zahl.
- [`ctz`](/de/docs/WebAssembly/Reference/Numeric/ctz)
  - : Zählt die Anzahl der abschließenden Nullen in der binären Darstellung einer Zahl.
- [`popcnt`](/de/docs/WebAssembly/Reference/Numeric/popcnt)
  - : Zählt die Gesamtzahl der 1en in der binären Darstellung einer Zahl.

## Vorzeichen-Verlängerungsoperationen

- [`extend8_s`](/de/docs/WebAssembly/Reference/Numeric/extend8_s)
  - : Verlängert das Vorzeichen der niedrigen 8 Bits einer Ganzzahl, um sein Vorzeichen auf den gesamten Wert zu übertragen.
- [`extend16_s`](/de/docs/WebAssembly/Reference/Numeric/extend16_s)
  - : Verlängert das Vorzeichen der niedrigen 16 Bits einer Ganzzahl, um sein Vorzeichen auf den gesamten Wert zu übertragen.
- [`extend32_s`](/de/docs/WebAssembly/Reference/Numeric/extend32_s)
  - : Verlängert das Vorzeichen der niedrigen 32 Bits einer 64-Bit-Ganzzahl, um sein Vorzeichen auf den gesamten Wert zu übertragen.
