---
title: WebAssembly SIMD-spezifische arithmetische Anweisungen
short-title: Arithmetische Anweisungen
slug: WebAssembly/Reference/SIMD/arithmetic
l10n:
  sourceCommit: 9851fc885f1bbc916f529378b506471c150fae98
---

WebAssembly SIMD-spezifische arithmetische Anweisungen.

## Min und Max

- [`max_s`](/de/docs/WebAssembly/Reference/SIMD/arithmetic/max_s)
  - : Vergleicht zwei Interpretationen von vorzeichenbehafteten Ganzzahlen im Format [`v128`](/de/docs/WebAssembly/Reference/Types/v128) und gibt eine neue Interpretation zurück, bei der jeder Teil (Lane) auf den größeren Wert des entsprechenden Lanes der beiden Eingaben gesetzt ist.
- [`max_u`](/de/docs/WebAssembly/Reference/SIMD/arithmetic/max_u)
  - : Vergleicht zwei Interpretationen von vorzeichenlosen Ganzzahlen im Format `v128` und gibt eine neue Interpretation zurück, bei der jeder Teil (Lane) auf den größeren Wert des entsprechenden Lanes der beiden Eingaben gesetzt ist.
- [`min_s`](/de/docs/WebAssembly/Reference/SIMD/arithmetic/min_s)
  - : Vergleicht zwei Interpretationen von vorzeichenbehafteten Ganzzahlen im Format `v128` und gibt eine neue Interpretation zurück, bei der jeder Teil (Lane) auf den kleineren Wert des entsprechenden Lanes der beiden Eingaben gesetzt ist.
- [`min_u`](/de/docs/WebAssembly/Reference/SIMD/arithmetic/min_u)
  - : Vergleicht zwei Interpretationen von vorzeichenlosen Ganzzahlen im Format `v128` und gibt eine neue Interpretation zurück, bei der jeder Teil (Lane) auf den kleineren Wert des entsprechenden Lanes der beiden Eingaben gesetzt ist.

## Siehe auch

- [WebAssembly numerische Anweisungen](/de/docs/WebAssembly/Reference/Numeric)
