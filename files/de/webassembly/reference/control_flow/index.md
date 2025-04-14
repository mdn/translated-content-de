---
title: WebAssembly Kontrollflussanweisungen
slug: WebAssembly/Reference/Control_flow
l10n:
  sourceCommit: 70653a2f5e8969901bad84504a6b36ecdcdd4e51
---

WebAssembly Kontrollflussanweisungen.

- [`block`](/de/docs/WebAssembly/Reference/Control_flow/block)
  - : Erstellt ein Label, aus dem später mit einem [`br`](/de/docs/WebAssembly/Reference/Control_flow/br) herausgesprungen werden kann.
- [`br`](/de/docs/WebAssembly/Reference/Control_flow/br)
  - : Springt zu einer Schleife, einem Block oder einem If.
- [`call`](/de/docs/WebAssembly/Reference/Control_flow/call)
  - : Ruft eine Funktion auf.
- [`drop`](/de/docs/WebAssembly/Reference/Control_flow/Drop)
  - : Entfernt einen Wert vom Stapel und verwirft ihn.
- [`end`](/de/docs/WebAssembly/Reference/Control_flow/end)
  - : Kann verwendet werden, um einen `block`, `loop`, `if` oder `else` zu beenden.
- [`if...else`](/de/docs/WebAssembly/Reference/Control_flow/if...else)
  - : Führt eine Anweisung aus, wenn das letzte Element auf dem Stapel wahr (nicht null) ist.
- [`loop`](/de/docs/WebAssembly/Reference/Control_flow/loop)
  - : Erstellt ein Label, zu dem später mit einem [`br`](/de/docs/WebAssembly/Reference/Control_flow/br) gesprungen werden kann.
- [`nop`](/de/docs/WebAssembly/Reference/Control_flow/nop)
  - : Macht nichts.
- [`return`](/de/docs/WebAssembly/Reference/Control_flow/return)
  - : Gibt von einer Funktion zurück.
- [`select`](/de/docs/WebAssembly/Reference/Control_flow/Select)
  - : Wählt einen seiner ersten beiden Operanden basierend auf einer booleschen Bedingung aus.
- [`unreachable`](/de/docs/WebAssembly/Reference/Control_flow/unreachable)
  - : Bezeichnet einen Punkt im Code, der nicht erreichbar sein sollte.
