---
title: WebAssembly SIMD-spezifische Bitweise Anweisungen
short-title: Bitweise Anweisungen
slug: WebAssembly/Reference/SIMD/bitwise
l10n:
  sourceCommit: 9851fc885f1bbc916f529378b506471c150fae98
---

WebAssembly SIMD-spezifische bitweise Anweisungen.

## Bitweise Logik

- [`all_true`](/de/docs/WebAssembly/Reference/SIMD/bitwise/all_true)
  - : Prüft, ob alle Lanes eines `v128` Eingabewerts ungleich null sind.
- [`andnot`](/de/docs/WebAssembly/Reference/SIMD/bitwise/andnot)
  - : Nimmt zwei [`v128`](/de/docs/WebAssembly/Reference/Types/v128) Eingabewerte. Es führt eine bitweise UND-Operation auf dem ersten Wert und einen zweiten Wert aus, der dem Ergebnis entspricht, das durch die Durchführung einer bitweisen NICHT-Operation auf jedes Byte des zweiten ursprünglichen Werts erzielt wird. Es gibt einen neuen `v128` Wert zurück, der das Ergebnis enthält.
- [`any_true`](/de/docs/WebAssembly/Reference/SIMD/bitwise/any_true)
  - : Prüft, ob ein `v128` Eingabewert irgendwelche ungleich null Bits enthält.
- [`bitmask`](/de/docs/WebAssembly/Reference/SIMD/bitwise/bitmask)
  - : Untersucht das **höchstwertige Bit** (MSB) — Bit 7 — jedes Bytes einer [`v128`](/de/docs/WebAssembly/Reference/Types/v128) Werteinterpretation. Dies ist das Vorzeichenbit, wenn der Wert als signiert behandelt wird. Der Ausgabewert der Anweisung entspricht all diesen gesammelten Bits in einem einzelnen `i32`.
- [`bitselect`](/de/docs/WebAssembly/Reference/SIMD/bitwise/bitselect)
  - : Nimmt drei [`v128`](/de/docs/WebAssembly/Reference/Types/v128) Werte als Eingaben — zwei Eingaben und einen Maskenwert — und gibt einen neuen `v128` Wert zurück, wobei jedes Byte unter Verwendung der Formel `output = (input1 AND mask) OR (input2 AND NOT mask)` berechnet wird.
- [`not`](/de/docs/WebAssembly/Reference/SIMD/bitwise/not)
  - : Führt eine bitweise NICHT-Operation auf jedes Byte eines [`v128`](/de/docs/WebAssembly/Reference/Types/v128) Werts aus und gibt einen neuen `v128` Wert zurück, der das Ergebnis enthält.

## Siehe auch

- [WebAssembly numerische Anweisungen](/de/docs/WebAssembly/Reference/Numeric)
