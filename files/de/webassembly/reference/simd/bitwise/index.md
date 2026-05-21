---
title: WebAssembly SIMD-spezifische bitweise Anweisungen
short-title: Bitweise Anweisungen
slug: WebAssembly/Reference/SIMD/bitwise
l10n:
  sourceCommit: ca1301872404bbc0305fa945cf3e3fb2351863bf
---

WebAssembly SIMD-spezifische bitweise Anweisungen.

## Bitweise Logik

- [`all_true`](/de/docs/WebAssembly/Reference/SIMD/bitwise/all_true)
  - : Prüft, ob alle Lanes eines `v128` Eingabewerts ungleich null sind.
- [`andnot`](/de/docs/WebAssembly/Reference/SIMD/bitwise/andnot)
  - : Nimmt zwei [`v128`](/de/docs/WebAssembly/Reference/Value_types/v128) Eingabewerte. Es führt ein bitweises AND auf dem ersten Wert und einen zweiten Wert durch, der dem Ergebnis eines bitweisen NOTs auf jedem Byte des zweiten ursprünglichen Werts entspricht. Es gibt einen neuen `v128` Wert zurück, der das Ergebnis enthält.
- [`any_true`](/de/docs/WebAssembly/Reference/SIMD/bitwise/any_true)
  - : Prüft, ob ein `v128` Eingabewert irgendwelche ungleich null Bits enthält.
- [`bitmask`](/de/docs/WebAssembly/Reference/SIMD/bitwise/bitmask)
  - : Untersucht das **most significant bit** (MSB) — Bit 7 — jedes Bytes einer [`v128`](/de/docs/WebAssembly/Reference/Value_types/v128) Wertinterpretation. Dies ist das Vorzeichenbit, wenn der Wert als Vorzeichenwert betrachtet wird. Der Ausgabewert der Anweisung entspricht all diesen Bits, die in einem einzigen `i32` gesammelt sind.
- [`bitselect`](/de/docs/WebAssembly/Reference/SIMD/bitwise/bitselect)
  - : Nimmt drei [`v128`](/de/docs/WebAssembly/Reference/Value_types/v128) Werte als Eingaben — zwei Eingaben und einen Maskenwert — und gibt einen neuen `v128` Wert zurück, bei dem jedes Byte mit der Formel `output = (input1 AND mask) OR (input2 AND NOT mask)` berechnet wird.
- [`not`](/de/docs/WebAssembly/Reference/SIMD/bitwise/not)
  - : Führt ein bitweises NOT auf jedes Byte eines [`v128`](/de/docs/WebAssembly/Reference/Value_types/v128) Werts durch und gibt einen neuen `v128` Wert zurück, der das Ergebnis enthält.

## Siehe auch

- [WebAssembly numerische Anweisungen](/de/docs/WebAssembly/Reference/Numeric)
