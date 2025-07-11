---
title: Delta
slug: Glossary/Delta
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

Der Begriff **Delta** bezieht sich auf den Unterschied zwischen zwei Werten oder Zuständen.

Der Name stammt vom griechischen Buchstaben Δ (Delta), der im römischen Alphabet dem Buchstaben _D_ entspricht. _Delta_ verweist auf die Verwendung des Buchstabens Δ als Abkürzung für _Unterschied_.

Der Begriff _Delta_ wird häufig verwendet, wenn es um Veränderungen in Geschwindigkeit, Position oder Beschleunigung eines physischen oder virtuellen Objekts geht. Er wird auch verwendet, um Änderungen in der Lautstärke oder Frequenz von Schallwellen zu beschreiben.

Zum Beispiel, wenn beschrieben wird, wie weit sich ein Objekt auf dem Bildschirm von links nach rechts bewegt, könnte man den Begriff _delta x_ oder _Δx_ verwenden.

Ebenso könnte man, gegeben den neuen Wert von _X_ und seinen alten Wert, das Delta folgendermaßen berechnen:

```js
let deltaX = newX - oldX;
```

Häufiger erhält man das Delta und verwendet es, um einen gespeicherten vorherigen Zustand zu aktualisieren:

```js
let newX = oldX + deltaX;
```

Zum Beispiel bieten Maus-Rad-Ereignisse [`WheelEvent`](/de/docs/Web/API/WheelEvent) die Menge, um die sich das Rad seit dem letzten Ereignis bewegt hat, in ihren Eigenschaften [`deltaX`](/de/docs/Web/API/WheelEvent/deltaX), [`deltaY`](/de/docs/Web/API/WheelEvent/deltaY) und [`deltaZ`](/de/docs/Web/API/WheelEvent/deltaZ).
