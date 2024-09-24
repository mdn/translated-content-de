---
title: "TouchEvent: changedTouches-Eigenschaft"
short-title: changedTouches
slug: Web/API/TouchEvent/changedTouches
l10n:
  sourceCommit: b1a591fbfe0283f5477de1aa59ff307b393a67a6
---

{{ APIRef("Touch Events") }}

Die **`changedTouches`** Leseeigenschaft ist eine {{ domxref("TouchList") }}, deren Berührungspunkte ({{domxref("Touch")}}-Objekte) je nach Ereignistyp wie folgt variieren:

- Für das {{domxref("Element/touchstart_event", "touchstart")}}-Ereignis ist es eine Liste der Berührungspunkte, die mit dem aktuellen Ereignis aktiv geworden sind.
- Für das {{domxref("Element/touchmove_event", "touchmove")}}-Ereignis ist es eine Liste der Berührungspunkte, die sich seit dem letzten Ereignis geändert haben.
- Für die {{domxref("Element/touchend_event", "touchend")}}- und {{domxref("Element/touchcancel_event", "touchcancel")}}-Ereignisse ist es eine Liste der Berührungspunkte, die von der Oberfläche entfernt wurden (d. h. die Menge der Berührungspunkte, die Fingern entsprechen, die die Oberfläche nicht mehr berühren).

## Wert

Eine {{ domxref("TouchList") }}, deren {{ domxref("Touch") }}-Objekte alle Berührungspunkte enthalten, die zu diesem Berührungsereignis beigetragen haben.

## Beispiele

Dieses Beispiel veranschaulicht die `TouchEvent.changedTouches`-Eigenschaft des {{domxref("TouchEvent")}}-Objekts. Die `TouchEvent.changedTouches`-Eigenschaft ist ein {{domxref("TouchList")}}-Objekt, das ein {{domxref("Touch")}}-Objekt für jeden Berührungspunkt enthält, der zum Ereignis beigetragen hat.

Im folgenden Code-Schnipsel durchläuft der {{domxref("Element/touchmove_event", "touchmove")}}-Ereignis-Handler die `changedTouches`-Liste und gibt den Bezeichner jedes Berührungspunkts aus, der sich seit dem letzten Ereignis geändert hat.

```js
someElement.addEventListener(
  "touchmove",
  (e) => {
    // Durchlaufen Sie die Liste der Berührungspunkte, die sich
    // seit dem letzten Ereignis geändert haben, und geben Sie den
    // Bezeichner jedes Berührungspunkts aus.
    for (let i = 0; i < e.changedTouches.length; i++) {
      console.log(
        `changedTouches[${i}].identifier = ${e.changedTouches[i].identifier}`,
      );
    }
  },
  false,
);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
