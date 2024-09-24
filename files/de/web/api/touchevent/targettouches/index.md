---
title: "TouchEvent: targetTouches-Eigenschaft"
short-title: targetTouches
slug: Web/API/TouchEvent/targetTouches
l10n:
  sourceCommit: b71d118ffc6d72b77efad9661110fcc9ede464eb
---

{{ APIRef("Touch Events") }}

Die schreibgeschützte Eigenschaft **`targetTouches`** ist eine {{ domxref("TouchList") }}, die alle {{ domxref("Touch") }}-Objekte auflistet, für Berührungspunkte, die noch in Kontakt mit der Berührungsoberfläche sind **und** deren {{domxref("Element/touchstart_event", "touchstart")}}-Ereignis innerhalb desselben Ziel-{{ domxref("element") }}s wie das aktuelle Zielelement aufgetreten ist.

## Wert

Eine {{ domxref("TouchList") }}, die alle {{ domxref("Touch") }}-Objekte auflistet, für Berührungspunkte, die noch in Kontakt mit der Berührungsoberfläche sind **und** deren `touchstart`-Ereignis innerhalb desselben Ziel-{{ domxref("element") }}s wie das aktuelle Zielelement aufgetreten ist.

## Beispiele

Dieses Beispiel veranschaulicht die `TouchEvent.targetTouches`-Eigenschaft des {{domxref("TouchEvent")}}-Objekts. Die `TouchEvent.targetTouches`-Eigenschaft ist ein {{domxref("TouchList")}}-Objekt, das jene Berührungspunkte (TPs) enthält, die derzeit die Oberfläche berühren _und_ auf dem Element begonnen haben, das das Ziel des aktuellen Ereignisses ist. Daher ist die `targetTouches`-Liste eine strikte Teilmenge der `touches`-Liste.

Im folgenden Code-Snippet vergleicht die Funktion die Länge der `touches`-Liste mit der Länge der `targetTouches`-Liste und gibt `true` zurück, wenn die Längen gleich sind, andernfalls `false`.

```js
function touches_in_target(ev) {
  // Gibt true zurück, wenn alle Berührungspunkte innerhalb des Zielelements sind;
  // andernfalls geben Sie false zurück.
  return ev.touches.length === ev.targetTouches.length;
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
