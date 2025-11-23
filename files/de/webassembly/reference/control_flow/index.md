---
title: WebAssembly Steuerflussanweisungen
slug: WebAssembly/Reference/Control_flow
l10n:
  sourceCommit: ebf92d37f836b490640a7881c4e5db5c1dea8fe7
---

WebAssembly Steuerflussanweisungen.

- [`block`](/de/docs/WebAssembly/Reference/Control_flow/block)
  - : Erstellt ein Label, aus dem später mit einem [`br`](/de/docs/WebAssembly/Reference/Control_flow/br) herausgebrochen werden kann.
- [`br`](/de/docs/WebAssembly/Reference/Control_flow/br)
  - : Verzweigt zu einem `loop`, `block` oder `if`.
- [`br_if`](/de/docs/WebAssembly/Reference/Control_flow/br_if)
  - : Verzweigt zu einem `loop`, `block` oder `if`, basierend auf einer booleschen Bedingung.
- [`br_table`](/de/docs/WebAssembly/Reference/Control_flow/br_table)
  - : Verzweigt zu verschiedenen `loop`, `block` oder `if` Anweisungen, basierend auf einem Argument.
- [`call`](/de/docs/WebAssembly/Reference/Control_flow/call)
  - : Ruft eine Funktion auf.
- [`drop`](/de/docs/WebAssembly/Reference/Control_flow/drop)
  - : Entfernt einen Wert vom Stapel und verwirft ihn.
- [`end`](/de/docs/WebAssembly/Reference/Control_flow/end)
  - : Kann verwendet werden, um einen `block`, `loop`, `if` oder `else` zu beenden.
- [`if...else`](/de/docs/WebAssembly/Reference/Control_flow/if...else)
  - : Führt eine Anweisung aus, wenn das letzte Element auf dem Stapel wahr ist (ungleich null).
- [`loop`](/de/docs/WebAssembly/Reference/Control_flow/loop)
  - : Erstellt ein Label, zu dem später mit einem [`br`](/de/docs/WebAssembly/Reference/Control_flow/br) verzweigt werden kann.
- [`nop`](/de/docs/WebAssembly/Reference/Control_flow/nop)
  - : Macht nichts.
- [`return`](/de/docs/WebAssembly/Reference/Control_flow/return)
  - : Gibt aus einer Funktion zurück.
- [`select`](/de/docs/WebAssembly/Reference/Control_flow/select)
  - : Wählt eines seiner ersten beiden Operanden basierend auf einer booleschen Bedingung aus.
- [`unreachable`](/de/docs/WebAssembly/Reference/Control_flow/unreachable)
  - : Bezeichnet einen Punkt im Code, der nicht erreichbar sein sollte.
