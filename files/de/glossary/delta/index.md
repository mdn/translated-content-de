---
title: Delta
slug: Glossary/Delta
l10n:
  sourceCommit: fd4435ca55ff683dc8574b700ef244e75c2dfb52
---

{{GlossarySidebar}}

Der Begriff **Delta** bezieht sich auf den Unterschied zwischen zwei Werten oder Zuständen.

Der Name stammt vom griechischen Buchstaben Δ (Delta), der dem Buchstaben _D_ im römischen Alphabet entspricht. _Delta_ bezieht sich auf die Verwendung des Buchstabens Δ als Abkürzung für _Differenz_.

Der Begriff _Delta_ wird häufig verwendet, um Veränderungen in Geschwindigkeit, Position oder Beschleunigung eines physischen oder virtuellen Objekts zu kommunizieren. Er wird auch verwendet, um Änderungen im Volumen oder in der Frequenz von Schallwellen zu beschreiben.

Zum Beispiel, wenn beschrieben wird, wie weit sich ein Objekt auf dem Bildschirm von links nach rechts bewegt, könnte man den Begriff _delta x_ oder _Δx_ verwenden.

Ebenso könnten Sie das Delta berechnen, wenn Sie den neuen Wert von _X_ und dessen alten Wert haben:

```js
let deltaX = newX - oldX;
```

Häufiger erhält man das Delta und verwendet es, um einen gespeicherten vorherigen Zustand zu aktualisieren:

```js
let newX = oldX + deltaX;
```

Zum Beispiel bieten Mausradereignisse [`WheelEvent`](/de/docs/Web/API/WheelEvent) die Menge, die das Rad seit dem letzten Ereignis bewegt wurde, in ihren [`deltaX`](/de/docs/Web/API/WheelEvent/deltaX), [`deltaY`](/de/docs/Web/API/WheelEvent/deltaY) und [`deltaZ`](/de/docs/Web/API/WheelEvent/deltaZ) Eigenschaften.
