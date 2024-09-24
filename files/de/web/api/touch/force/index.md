---
title: "Touch: force-Eigenschaft"
short-title: force
slug: Web/API/Touch/force
l10n:
  sourceCommit: b71d118ffc6d72b77efad9661110fcc9ede464eb
---

{{ APIRef("Touch Events") }}

Die **`Touch.force`** schreibgeschützte Eigenschaft gibt den Druck zurück, den der Benutzer auf die Touch-Oberfläche für einen {{ domxref("Touch") }}-Punkt ausübt.

## Wert

Ein `float`, der die Menge an Druck repräsentiert, die der Benutzer auf die Touch-Oberfläche ausübt. Dies ist ein Wert zwischen `0.0` (kein Druck) und `1.0` (der maximale Druck, den die Hardware erkennen kann). Ein Wert von `0.0` wird zurückgegeben, wenn kein Wert bekannt ist (zum Beispiel unterstützt das Touch-Gerät diese Eigenschaft nicht). In Umgebungen, in denen der Druck bekannt ist, können der absolute Druck, der durch das Force-Attribut dargestellt wird, und die Empfindlichkeit in Druckstufen variieren.

## Beispiele

Dieses Beispiel zeigt die Verwendung der Eigenschaft `Touch.force` der {{domxref("Touch")}}-Schnittstelle. Diese Eigenschaft ist ein relativer Wert des ausgeübten Drucks im Bereich von `0.0` bis `1.0`, wobei `0.0` keinen Druck und `1.0` den höchsten Druck darstellt, den das Touch-Gerät erkennen kann.

Im folgenden Code-Snippet durchläuft der {{domxref("Element/touchstart_event", "touchstart")}}-Ereignishandler die `targetTouches`-Liste und loggt den `force`-Wert jedes Berührungspunktes, könnte jedoch je nach Wert unterschiedliche Verarbeitungen vornehmen.

```js
someElement.addEventListener(
  "touchstart",
  (e) => {
    // Iterieren Sie durch die Liste der Berührungspunkte und loggen Sie
    // den Kraftwert jedes Berührungspunktes.
    for (let i = 0; i < e.targetTouches.length; i++) {
      // Fügen Sie Code hinzu, um basierend auf dem Kraftwert zu "wechseln"
      // Zum Beispiel könnte ein minimum vs. maximum Druck unterschiedliche
      // Handhabungen der Benutzereingabe auslösen.
      console.log(`targetTouches[${i}].force = ${e.targetTouches[i].force}`);
    }
  },
  false,
);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
