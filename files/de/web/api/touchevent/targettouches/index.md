---
title: "TouchEvent: targetTouches-Eigenschaft"
short-title: targetTouches
slug: Web/API/TouchEvent/targetTouches
l10n:
  sourceCommit: b71d118ffc6d72b77efad9661110fcc9ede464eb
---

{{ APIRef("Touch Events") }}

Die **`targetTouches`** schreibgeschützte Eigenschaft ist eine [`TouchList`](/de/docs/Web/API/TouchList), die alle [`Touch`](/de/docs/Web/API/Touch)-Objekte auflistet, deren Berührungspunkte noch in Kontakt mit der Berührungsoberfläche sind **und** deren [`touchstart`](/de/docs/Web/API/Element/touchstart_event)-Ereignis innerhalb desselben Ziel-[`element`](/de/docs/Web/API/Element) aufgetreten ist wie das aktuelle Zielelement.

## Wert

Eine [`TouchList`](/de/docs/Web/API/TouchList), die alle [`Touch`](/de/docs/Web/API/Touch)-Objekte auflistet, deren Berührungspunkte noch in Kontakt mit der Berührungsoberfläche sind **und** deren `touchstart`-Ereignis innerhalb desselben Ziel-[`element`](/de/docs/Web/API/Element) aufgetreten ist wie das aktuelle Zielelement.

## Beispiele

Dieses Beispiel veranschaulicht die `TouchEvent.targetTouches`-Eigenschaft des [`TouchEvent`](/de/docs/Web/API/TouchEvent)-Objekts. Die `TouchEvent.targetTouches`-Eigenschaft ist ein [`TouchList`](/de/docs/Web/API/TouchList)-Objekt, das jene Berührungspunkte enthält, die aktuell die Oberfläche berühren _und_ auf dem Element begonnen haben, das das Ziel des aktuellen Ereignisses ist. Somit ist die `targetTouches`-Liste eine strikte Teilmenge der `touches`-Liste.

Im folgenden Code-Snippet vergleicht die Funktion die Länge der `touches`-Liste mit der Länge der `targetTouches`-Liste und gibt `true` zurück, wenn die Längen gleich sind, und `false` ansonsten.

```js
function touches_in_target(ev) {
  // Return true if all of the touches are within the target element;
  // otherwise return false.
  return ev.touches.length === ev.targetTouches.length;
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
