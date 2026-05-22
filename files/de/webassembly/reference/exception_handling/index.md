---
title: WebAssembly-Ausnahmebehandlungsanweisungen
slug: WebAssembly/Reference/Exception_handling
l10n:
  sourceCommit: 48b0dc43b7c13a2c9a5d2c56f110444d2550b90e
---

WebAssembly-Ausnahmebehandlungsanweisungen.

## Throw

- [`throw`](/de/docs/WebAssembly/Reference/Exception_handling/throw)
  - : Wirft eine Ausnahme eines bestimmten Typs, wie durch eine [`tag`](/de/docs/WebAssembly/Reference/Definitions/tag)-Definition festgelegt.
- [`throw_ref`](/de/docs/WebAssembly/Reference/Exception_handling/throw_ref)
  - : Wirft eine zuvor geworfene Ausnahme erneut, die durch einen [`exnref`](/de/docs/WebAssembly/Reference/Value_types/exnref)-Wert dargestellt wird.

## Try

- [`try_table`](/de/docs/WebAssembly/Reference/Exception_handling/try_table)
  - : Ermöglicht es Ihnen, einen Codeblock zu testen, um festzustellen, ob er eine Ausnahme wirft, und die Ausnahme mit einer [catch-Klausel](#catch-klauseln) zu behandeln, falls dies der Fall ist.

### Catch-Klauseln

- [`catch`](/de/docs/WebAssembly/Reference/Exception_handling/try_table/catch)
  - : Fängt Ausnahmen ab, die mit einem bestimmten Fehler-`tag` übereinstimmen, und schiebt die Ausnahme-Payload auf den Stack.
- [`catch_all`](/de/docs/WebAssembly/Reference/Exception_handling/try_table/catch_all)
  - : Fängt jede Ausnahme ab und schiebt nichts auf den Stack.
- [`catch_ref`](/de/docs/WebAssembly/Reference/Exception_handling/try_table/catch_ref)
  - : Fängt Ausnahmen ab, die mit einem bestimmten Fehler-`tag` übereinstimmen, und schiebt die Ausnahme-Payload sowie einen [`exnref`](/de/docs/WebAssembly/Reference/Value_types/exnref)-Wert, der die Ausnahme darstellt, auf den Stack.
- [`catch_all_ref`](/de/docs/WebAssembly/Reference/Exception_handling/try_table/catch_all_ref)
  - : Fängt jede Ausnahme ab und schiebt einen `exnref`-Wert, der die Ausnahme darstellt, auf den Stack.

## Siehe auch

- [`exnref`](/de/docs/WebAssembly/Reference/Value_types/exnref)-Typ
- [`tag`](/de/docs/WebAssembly/Reference/Definitions/tag)-Definition
- [`WebAssembly.Exception`](/de/docs/WebAssembly/Reference/JavaScript_interface/Exception) JavaScript-Schnittstelle
- [`WebAssembly.Tag`](/de/docs/WebAssembly/Reference/JavaScript_interface/Tag) JavaScript-Schnittstelle
