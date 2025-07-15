---
title: WebAssembly Kontrollflussanweisungen
slug: WebAssembly/Reference/Control_flow
l10n:
  sourceCommit: b67c2be9feee1463ea5a27e5c7b3e0062162354f
---

WebAssembly Kontrollflussanweisungen.

- [`block`](/de/docs/WebAssembly/Reference/Control_flow/block)
  - : Erstellt ein Label, das später mit einem [`br`](/de/docs/WebAssembly/Reference/Control_flow/br) angesprungen werden kann.
- [`br`](/de/docs/WebAssembly/Reference/Control_flow/br)
  - : Springt zu einer `loop`, `block` oder `if`.
- [`br_if`](/de/docs/WebAssembly/Reference/Control_flow/br_if)
  - : Springt zu einer `loop`, `block` oder `if`, basierend auf einer booleschen Bedingung.
- [`br_table`](/de/docs/WebAssembly/Reference/Control_flow/br_table)
  - : Springt zu verschiedenen `loop`, `block` oder `if` Anweisungen, basierend auf einem Argument.
- [`call`](/de/docs/WebAssembly/Reference/Control_flow/call)
  - : Ruft eine Funktion auf.
- [`drop`](/de/docs/WebAssembly/Reference/Control_flow/Drop)
  - : Entfernt einen Wert vom Stapel und verwirft ihn.
- [`end`](/de/docs/WebAssembly/Reference/Control_flow/end)
  - : Kann verwendet werden, um einen `block`, `loop`, `if` oder `else` zu beenden.
- [`if...else`](/de/docs/WebAssembly/Reference/Control_flow/if...else)
  - : Führt eine Anweisung aus, wenn das letzte Element auf dem Stapel wahr (ungleich null) ist.
- [`loop`](/de/docs/WebAssembly/Reference/Control_flow/loop)
  - : Erstellt ein Label, das später mit einem [`br`](/de/docs/WebAssembly/Reference/Control_flow/br) angesprungen werden kann.
- [`nop`](/de/docs/WebAssembly/Reference/Control_flow/nop)
  - : Macht nichts.
- [`return`](/de/docs/WebAssembly/Reference/Control_flow/return)
  - : Gibt aus einer Funktion zurück.
- [`select`](/de/docs/WebAssembly/Reference/Control_flow/Select)
  - : Wählt einen seiner ersten beiden Operanden basierend auf einer booleschen Bedingung aus.
- [`unreachable`](/de/docs/WebAssembly/Reference/Control_flow/unreachable)
  - : Kennzeichnet einen Punkt im Code, der nicht erreichbar sein sollte.
