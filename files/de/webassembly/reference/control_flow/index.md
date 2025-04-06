---
title: WebAssembly Kontrollfluss-Anweisungen
slug: WebAssembly/Reference/Control_flow
l10n:
  sourceCommit: 46853a1dd8f08bd65f177f1f073cb2aa9bb1dd55
---

WebAssembly Kontrollfluss-Anweisungen.

- [`block`](/de/docs/WebAssembly/Reference/Control_flow/block)
  - : Erstellt ein Label, aus dem später mit einem [`br`](/de/docs/WebAssembly/Reference/Control_flow/br) verzweigt werden kann.
- [`br`](/de/docs/WebAssembly/Reference/Control_flow/br)
  - : Verzweigt zu einer Schleife oder einem Block.
- [`call`](/de/docs/WebAssembly/Reference/Control_flow/call)
  - : Ruft eine Funktion auf.
- [`drop`](/de/docs/WebAssembly/Reference/Control_flow/Drop)
  - : Poppt einen Wert vom Stack und verwirft ihn.
- [`end`](/de/docs/WebAssembly/Reference/Control_flow/end)
  - : Kann verwendet werden, um einen `block`, `loop`, `if` oder `else` zu beenden.
- [`if...else`](/de/docs/WebAssembly/Reference/Control_flow/if...else)
  - : Führt eine Anweisung aus, wenn das letzte Element auf dem Stack wahr (ungleich null) ist.
- [`loop`](/de/docs/WebAssembly/Reference/Control_flow/loop)
  - : Erstellt ein Label, zu dem später mit einem [`br`](/de/docs/WebAssembly/Reference/Control_flow/br) verzweigt werden kann.
- [`nop`](/de/docs/WebAssembly/Reference/Control_flow/nop)
  - : Tut nichts.
- [`return`](/de/docs/WebAssembly/Reference/Control_flow/return)
  - : Gibt aus einer Funktion zurück.
- [`select`](/de/docs/WebAssembly/Reference/Control_flow/Select)
  - : Wählt einen der ersten beiden Operanden basierend auf einer booleschen Bedingung.
- [`unreachable`](/de/docs/WebAssembly/Reference/Control_flow/unreachable)
  - : Kennzeichnet einen Punkt im Code, der nicht erreichbar sein sollte.
