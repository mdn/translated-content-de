---
title: WebAssembly-Steuerflussanweisungen
slug: WebAssembly/Reference/Control_flow
l10n:
  sourceCommit: df9d06402163f77fc3e2d327ab63f9dd4af15b38
---

WebAssembly-Steuerflussanweisungen.

- [`block`](/de/docs/WebAssembly/Reference/Control_flow/block)
  - : Erstellt ein Label, das später mit einem [`br`](/de/docs/WebAssembly/Reference/Control_flow/br) angesprungen werden kann.
- [`br`](/de/docs/WebAssembly/Reference/Control_flow/br)
  - : Springt zu einer Schleife oder einem Block.
- [`call`](/de/docs/WebAssembly/Reference/Control_flow/call)
  - : Ruft eine Funktion auf.
- [`drop`](/de/docs/WebAssembly/Reference/Control_flow/Drop)
  - : Entfernt einen Wert vom Stapel und verwirft ihn.
- [`end`](/de/docs/WebAssembly/Reference/Control_flow/end)
  - : Kann verwendet werden, um einen `block`, `loop`, `if` oder `else` zu beenden.
- [`if...else`](/de/docs/WebAssembly/Reference/Control_flow/if...else)
  - : Führt eine Anweisung aus, wenn das letzte Element auf dem Stapel wahr (`1`) ist.
- [`loop`](/de/docs/WebAssembly/Reference/Control_flow/loop)
  - : Erstellt ein Label, das später mit einem [`br`](/de/docs/WebAssembly/Reference/Control_flow/br) angesprungen werden kann.
- [`nop`](/de/docs/WebAssembly/Reference/Control_flow/nop)
  - : Macht nichts.
- [`return`](/de/docs/WebAssembly/Reference/Control_flow/return)
  - : Kehrt aus einer Funktion zurück.
- [`select`](/de/docs/WebAssembly/Reference/Control_flow/Select)
  - : Wählt einen seiner ersten beiden Operanden basierend auf einer booleschen Bedingung aus.
- [`unreachable`](/de/docs/WebAssembly/Reference/Control_flow/unreachable)
  - : Kennzeichnet einen Punkt im Code, der nicht erreichbar sein sollte.
