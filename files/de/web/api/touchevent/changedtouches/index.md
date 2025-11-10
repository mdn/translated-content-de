---
title: "TouchEvent: changedTouches-Eigenschaft"
short-title: changedTouches
slug: Web/API/TouchEvent/changedTouches
l10n:
  sourceCommit: f71683f74da0078d9371c4d0c1ff9d3898fc7b59
---

{{ APIRef("Touch Events") }}

Die schreibgeschützte Eigenschaft **`changedTouches`** ist eine [`TouchList`](/de/docs/Web/API/TouchList), deren Berührungspunkte ([`Touch`](/de/docs/Web/API/Touch)-Objekte) sich je nach Ereignistyp wie folgt unterscheiden:

- Beim [`touchstart`](/de/docs/Web/API/Element/touchstart_event)-Ereignis ist es eine Liste der Berührungspunkte, die mit dem aktuellen Ereignis aktiv wurden.
- Beim [`touchmove`](/de/docs/Web/API/Element/touchmove_event)-Ereignis ist es eine Liste der Berührungspunkte, die sich seit dem letzten Ereignis geändert haben.
- Bei den Ereignissen [`touchend`](/de/docs/Web/API/Element/touchend_event) und [`touchcancel`](/de/docs/Web/API/Element/touchcancel_event) ist es eine Liste der Berührungspunkte, die von der Oberfläche entfernt wurden (das heißt, die Menge der Berührungspunkte, die Fingern entsprechen, die die Oberfläche nicht mehr berühren).

## Wert

Eine [`TouchList`](/de/docs/Web/API/TouchList), deren [`Touch`](/de/docs/Web/API/Touch)-Objekte alle Berührungspunkte enthalten, die zu diesem Berührungsereignis beigetragen haben.

## Beispiele

Dieses Beispiel veranschaulicht die `TouchEvent.changedTouches`-Eigenschaft des [`TouchEvent`](/de/docs/Web/API/TouchEvent)-Objekts. Die `TouchEvent.changedTouches`-Eigenschaft ist ein [`TouchList`](/de/docs/Web/API/TouchList)-Objekt, das ein [`Touch`](/de/docs/Web/API/Touch)-Objekt für jeden Berührungspunkt enthält, der zum Ereignis beigetragen hat.

Im folgenden Codeausschnitt durchläuft der [`touchmove`](/de/docs/Web/API/Element/touchmove_event)-Ereignis-Handler die `changedTouches`-Liste und gibt die Kennung jedes Berührungspunktes aus, der sich seit dem letzten Ereignis geändert hat.

```js
someElement.addEventListener("touchmove", (e) => {
  // Iterate through the list of touch points that changed
  // since the last event and print each touch point's identifier.
  for (let i = 0; i < e.changedTouches.length; i++) {
    console.log(
      `changedTouches[${i}].identifier = ${e.changedTouches[i].identifier}`,
    );
  }
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
