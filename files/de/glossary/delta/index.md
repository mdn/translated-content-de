---
title: Delta
slug: Glossary/Delta
l10n:
  sourceCommit: fd4435ca55ff683dc8574b700ef244e75c2dfb52
---

{{GlossarySidebar}}

Der Begriff **Delta** bezieht sich auf den Unterschied zwischen zwei Werten oder Zuständen.

Der Name stammt vom griechischen Buchstaben Δ (Delta), der im römischen Alphabet dem Buchstaben _D_ entspricht. _Delta_ bezieht sich auf die Verwendung des Buchstabens Δ als Abkürzung für _Differenz_.

Der Begriff _Delta_ wird häufig verwendet, wenn es um Änderungen in Geschwindigkeit, Position oder Beschleunigung eines physischen oder virtuellen Objekts geht. Es wird auch verwendet, um Änderungen im Volumen oder in der Frequenz von Schallwellen zu beschreiben.

Zum Beispiel, wenn beschrieben wird, wie weit sich ein Objekt auf dem Bildschirm von links nach rechts bewegt, könnte man den Begriff _delta x_ oder _Δx_ verwenden.

Ebenso, wenn der neue Wert von _X_ und sein alter Wert gegeben sind, könnten Sie das Delta wie folgt berechnen:

```js
let deltaX = newX - oldX;
```

Häufiger erhalten Sie das Delta und verwenden es, um einen vorher gespeicherten Zustand zu aktualisieren:

```js
let newX = oldX + deltaX;
```

Zum Beispiel bieten Mausrad-Ereignisse [`WheelEvent`](/de/docs/Web/API/WheelEvent) die Menge, um die das Rad seit dem letzten Ereignis bewegt wurde, in seinen Eigenschaften [`deltaX`](/de/docs/Web/API/WheelEvent/deltaX), [`deltaY`](/de/docs/Web/API/WheelEvent/deltaY) und [`deltaZ`](/de/docs/Web/API/WheelEvent/deltaZ) an.
