---
title: "TouchEvent: targetTouches-Eigenschaft"
short-title: targetTouches
slug: Web/API/TouchEvent/targetTouches
l10n:
  sourceCommit: b71d118ffc6d72b77efad9661110fcc9ede464eb
---

{{ APIRef("Touch Events") }}

Die schreibgeschützte **`targetTouches`**-Eigenschaft ist eine [`TouchList`](/de/docs/Web/API/TouchList), die alle [`Touch`](/de/docs/Web/API/Touch)-Objekte auflistet, deren Berührungspunkte noch in Kontakt mit der Berührungsoberfläche sind **und** deren [`touchstart`](/de/docs/Web/API/Element/touchstart_event)-Ereignis im selben Ziel-[`Element`](/de/docs/Web/API/Element) wie das aktuelle Zielelement auftrat.

## Wert

Eine [`TouchList`](/de/docs/Web/API/TouchList), die alle [`Touch`](/de/docs/Web/API/Touch)-Objekte auflistet, deren Berührungspunkte noch in Kontakt mit der Berührungsoberfläche sind **und** deren `touchstart`-Ereignis im selben Ziel-[`Element`](/de/docs/Web/API/Element) wie das aktuelle Zielelement auftrat.

## Beispiele

Dieses Beispiel veranschaulicht die `TouchEvent.targetTouches`-Eigenschaft des [`TouchEvent`](/de/docs/Web/API/TouchEvent)-Objekts. Die `TouchEvent.targetTouches`-Eigenschaft ist ein [`TouchList`](/de/docs/Web/API/TouchList)-Objekt, das diejenigen Berührungspunkte (TPs) einschließt, die derzeit die Oberfläche berühren _und_ auf dem Element gestartet wurden, das das Ziel des aktuellen Ereignisses ist. Daher ist die `targetTouches`-Liste eine strikte Teilmenge der `touches`-Liste.

Im folgenden Code-Ausschnitt vergleicht die Funktion die Länge der `touches`-Liste mit der Länge der `targetTouches`-Liste und gibt `true` zurück, wenn die Längen gleich sind, andernfalls `false`.

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
