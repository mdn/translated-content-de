---
title: Delta
slug: Glossary/Delta
l10n:
  sourceCommit: fd4435ca55ff683dc8574b700ef244e75c2dfb52
---

{{GlossarySidebar}}

Der Begriff **Delta** bezieht sich auf die Differenz zwischen zwei Werten oder Zuständen.

Der Name stammt von dem griechischen Buchstaben Δ (Delta), der im römischen Alphabet dem Buchstaben _D_ entspricht. _Delta_ bezieht sich auf die Verwendung des Buchstabens Δ als Abkürzung für _Differenz_.

Der Begriff _Delta_ wird häufig verwendet, um Änderungen in der Geschwindigkeit, Position oder Beschleunigung eines physikalischen oder virtuellen Objekts zu kommunizieren. Er wird auch verwendet, um Änderungen in der Lautstärke oder Frequenz von Schallwellen zu beschreiben.

Zum Beispiel, wenn beschrieben wird, wie weit sich ein Objekt auf dem Bildschirm von links nach rechts bewegt, könnte man den Begriff _delta x_ oder _Δx_ verwenden.

Ebenso könnte man, wenn man den neuen Wert von _X_ und seinen alten Wert hat, das Delta wie folgt berechnen:

```js
let deltaX = newX - oldX;
```

Häufiger jedoch erhält man das Delta und verwendet es, um einen gespeicherten vorherigen Zustand zu aktualisieren:

```js
let newX = oldX + deltaX;
```

Zum Beispiel bieten Mausrad-Ereignisse {{domxref("WheelEvent")}} die Menge, um die das Rad seit dem letzten Ereignis bewegt wurde, in ihren {{domxref("WheelEvent.deltaX", "deltaX")}}, {{domxref("WheelEvent.deltaY", "deltaY")}}, und {{domxref("WheelEvent.deltaZ", "deltaZ")}} Eigenschaften.
