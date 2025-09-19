---
title: "TouchEvent: touches-Eigenschaft"
short-title: touches
slug: Web/API/TouchEvent/touches
l10n:
  sourceCommit: f71683f74da0078d9371c4d0c1ff9d3898fc7b59
---

{{ APIRef("Touch Events") }}

**`touches`** ist eine schreibgeschützte [`TouchList`](/de/docs/Web/API/TouchList), die alle [`Touch`](/de/docs/Web/API/Touch)-Objekte für Berührungspunkte auflistet, die sich derzeit in Kontakt mit der Berührungsoberfläche befinden, unabhängig davon, ob sie sich geändert haben oder welches ihre Ziel-Elemente zum Zeitpunkt von [`touchstart`](/de/docs/Web/API/Element/touchstart_event) waren.

Sie können es sich vorstellen als die Anzahl der separaten Finger, die als gleichzeitig den Bildschirm berührend erkannt werden können.

> [!NOTE]
> Die Berührungen im Array sind nicht unbedingt nach Auftreten geordnet (d.h. das i-te Element im Array ist nicht unbedingt die i-te Berührung, die aufgetreten ist). Sie können keine bestimmte Reihenfolge annehmen. Um die Reihenfolge der Auftritte der Berührungen zu bestimmen, verwenden Sie die `touch`-Objekt-IDs.

## Wert

Eine [`TouchList`](/de/docs/Web/API/TouchList), die alle [`Touch`](/de/docs/Web/API/Touch)-Objekte für Berührungspunkte auflistet, die weiterhin in Kontakt mit der Berührungsoberfläche sind, unabhängig davon, ob sie sich geändert haben oder welches ihre Ziel-Elemente zum Zeitpunkt von `touchstart` waren.

## Beispiele

Dieses Beispiel veranschaulicht die `TouchEvent.touches`-Eigenschaft des [`TouchEvent`](/de/docs/Web/API/TouchEvent)-Objekts. Die `TouchEvent.touches`-Eigenschaft ist ein [`TouchList`](/de/docs/Web/API/TouchList)-Objekt, das eine Liste von [`Touch`](/de/docs/Web/API/Touch)-Objekten für jeden Berührungspunkt enthält, der derzeit die Oberfläche berührt.

Im folgenden Code-Snippet überprüft der [`touchstart`](/de/docs/Web/API/Element/touchstart_event)-Ereignishandler die Länge der `TouchEvent.touches`-Liste, um die Anzahl der aktivierten Berührungspunkte zu ermitteln, und ruft dann je nach Anzahl der Berührungspunkte verschiedene Handler auf.

```js
someElement.addEventListener("touchstart", (e) => {
  // Invoke the appropriate handler depending on the
  // number of touch points.
  switch (e.touches.length) {
    case 1:
      handle_one_touch(e);
      break;
    case 2:
      handle_two_touches(e);
      break;
    case 3:
      handle_three_touches(e);
      break;
    default:
      console.log("Not supported");
      break;
  }
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
