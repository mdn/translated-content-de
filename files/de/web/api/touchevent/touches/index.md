---
title: "TouchEvent: touches-Eigenschaft"
short-title: touches
slug: Web/API/TouchEvent/touches
l10n:
  sourceCommit: 22080a7cc403f7f45c8e85065b182c9f0d4d383c
---

{{ APIRef("Touch Events") }}

**`touches`** ist eine schreibgeschützte [`TouchList`](/de/docs/Web/API/TouchList), die alle [`Touch`](/de/docs/Web/API/Touch)-Objekte für Berührungspunkte auflistet, die sich derzeit im Kontakt mit der Touch-Oberfläche befinden, unabhängig davon, ob sie sich geändert haben oder welches ihre Ziel-Elemente zum Zeitpunkt von [`touchstart`](/de/docs/Web/API/Element/touchstart_event) waren.

Sie können es sich so vorstellen, wie viele separate Finger identifiziert werden können, die den Bildschirm berühren.

> [!NOTE]
> Die Berührungen im Array sind nicht unbedingt in der Reihenfolge ihres Auftretens geordnet (das i-te Element im Array ist nicht unbedingt die i-te Berührung, die passiert ist). Sie können keine spezifische Reihenfolge annehmen. Um die Reihenfolge der Berührungen zu bestimmen, verwenden Sie die IDs der `touch`-Objekte.

## Wert

Eine [`TouchList`](/de/docs/Web/API/TouchList), die alle [`Touch`](/de/docs/Web/API/Touch)-Objekte für Berührungspunkte auflistet, die sich noch im Kontakt mit der Touch-Oberfläche befinden, unabhängig davon, ob sie sich geändert haben oder welches ihre Ziel-Elemente zum Zeitpunkt von `touchstart` waren.

## Beispiele

Dieses Beispiel veranschaulicht die `TouchEvent.touches`-Eigenschaft des [`TouchEvent`](/de/docs/Web/API/TouchEvent)-Objekts. Die `TouchEvent.touches`-Eigenschaft ist ein [`TouchList`](/de/docs/Web/API/TouchList)-Objekt und enthält eine Liste von [`Touch`](/de/docs/Web/API/Touch)-Objekten für jeden Berührungspunkt, der aktuell die Oberfläche berührt.

Im folgenden Code-Snippet überprüft der [`touchstart`](/de/docs/Web/API/Element/touchstart_event)-Ereignishandler die Länge der `TouchEvent.touches`-Liste, um die Anzahl der aktivierten Berührungspunkte zu bestimmen und ruft dann verschiedene Handler abhängig von der Anzahl der Berührungspunkte auf.

```js
someElement.addEventListener(
  "touchstart",
  (e) => {
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
  },
  false,
);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
