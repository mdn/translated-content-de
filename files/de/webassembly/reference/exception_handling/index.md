---
title: WebAssembly-Anweisungen zur Ausnahmebehandlung
slug: WebAssembly/Reference/Exception_handling
l10n:
  sourceCommit: 977386fc14a76dec21374aef1e0571900b28dab4
---

WebAssembly-Anweisungen zur Ausnahmebehandlung.

## Auslösen

- [`throw`](/de/docs/WebAssembly/Reference/Exception_handling/throw)
  - : Löst eine Ausnahme eines bestimmten Typs aus, der durch eine [`tag`](/de/docs/WebAssembly/Reference/Definitions/tag)-Definition festgelegt ist.
- [`throw_ref`](/de/docs/WebAssembly/Reference/Exception_handling/throw_ref)
  - : Löst eine zuvor ausgelöste Ausnahme erneut aus, die durch einen [`exnref`](/de/docs/WebAssembly/Reference/Value_types/exnref)-Wert repräsentiert wird.

## Versuchen

- [`try_table`](/de/docs/WebAssembly/Reference/Exception_handling/try_table)
  - : Ermöglicht es Ihnen, einen Codeblock darauf zu prüfen, ob er eine Ausnahme auslöst, und diese gegebenenfalls mit einer [Catch-Klausel](#catch-klauseln) zu behandeln.

### Catch-Klauseln

- [`catch`](/de/docs/WebAssembly/Reference/Exception_handling/try_table/catch)
  - : Fängt Ausnahmen ab, die einem bestimmten Fehler-`tag` entsprechen, und legt die Nutzdaten der Ausnahme auf den Stack.
- [`catch_all`](/de/docs/WebAssembly/Reference/Exception_handling/try_table/catch_all)
  - : Fängt jede Ausnahme ab und legt nichts auf den Stack.
- [`catch_ref`](/de/docs/WebAssembly/Reference/Exception_handling/try_table/catch_ref)
  - : Fängt Ausnahmen ab, die einem bestimmten Fehler-`tag` entsprechen, und legt die Nutzdaten der Ausnahme sowie einen [`exnref`](/de/docs/WebAssembly/Reference/Value_types/exnref)-Wert, der die Ausnahme repräsentiert, auf den Stack.
- [`catch_all_ref`](/de/docs/WebAssembly/Reference/Exception_handling/try_table/catch_all_ref)
  - : Fängt jede Ausnahme ab und legt einen `exnref`-Wert, der die Ausnahme repräsentiert, auf den Stack.

## Siehe auch

- [`exnref`](/de/docs/WebAssembly/Reference/Value_types/exnref)-Typ
- [`tag`](/de/docs/WebAssembly/Reference/Definitions/tag)-Definition
- [`WebAssembly.Exception`](/de/docs/WebAssembly/Reference/JavaScript_interface/Exception)-JavaScript-Schnittstelle
- [`WebAssembly.Tag`](/de/docs/WebAssembly/Reference/JavaScript_interface/Tag)-JavaScript-Schnittstelle
