---
title: "TouchEvent: targetTouches Eigenschaft"
short-title: targetTouches
slug: Web/API/TouchEvent/targetTouches
l10n:
  sourceCommit: f336c5b6795a562c64fe859aa9ee2becf223ad8a
---

{{ APIRef("Touch Events") }}

Die schreibgeschützte Eigenschaft **`targetTouches`** ist eine [`TouchList`](/de/docs/Web/API/TouchList), die alle [`Touch`](/de/docs/Web/API/Touch)-Objekte enthält, deren Berührungspunkte sich noch in Kontakt mit der Berührungsfläche befinden **und** deren [`touchstart`](/de/docs/Web/API/Element/touchstart_event)-Ereignis im selben Ziel-[`Element`](/de/docs/Web/API/Element) wie das aktuelle Zielelement aufgetreten ist.

## Wert

Eine [`TouchList`](/de/docs/Web/API/TouchList), die alle [`Touch`](/de/docs/Web/API/Touch)-Objekte für Berührungspunkte auflistet, die noch in Kontakt mit der Berührungsfläche sind **und** deren `touchstart`-Ereignis im selben Ziel-[`Element`](/de/docs/Web/API/Element) aufgetreten ist wie das aktuelle Zielelement.

## Beispiele

Dieses Beispiel veranschaulicht die `TouchEvent.targetTouches`-Eigenschaft des [`TouchEvent`](/de/docs/Web/API/TouchEvent)-Objekts. Die `TouchEvent.targetTouches`-Eigenschaft ist ein [`TouchList`](/de/docs/Web/API/TouchList)-Objekt, das diejenigen Berührungspunkte (TPs) umfasst, die derzeit die Oberfläche berühren _und_ auf dem Element gestartet wurden, das das Ziel des aktuellen Ereignisses ist. Als solches ist die `targetTouches`-Liste eine strikte Teilmenge der `touches`-Liste.

Im folgenden Code-Snippet vergleicht die Funktion die Länge der `touches`-Liste mit der der `targetTouches`-Liste und gibt `true` zurück, wenn die Längen identisch sind, und `false`, wenn nicht.

```js
function touchesInTarget(ev) {
  // Return true if all of the touches are within the target element;
  // otherwise return false.
  return ev.touches.length === ev.targetTouches.length;
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
