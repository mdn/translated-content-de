---
title: "TouchEvent: touches Eigenschaft"
short-title: touches
slug: Web/API/TouchEvent/touches
l10n:
  sourceCommit: 22080a7cc403f7f45c8e85065b182c9f0d4d383c
---

{{ APIRef("Touch Events") }}

**`touches`** ist eine schreibgeschützte {{ domxref("TouchList") }}, die alle {{ domxref("Touch") }} Objekte für Berührungspunkte auflistet, die derzeit mit der Berührungsfläche in Kontakt stehen, unabhängig davon, ob sie sich geändert haben oder welches ihre Zielelemente zum Zeitpunkt von {{domxref("Element/touchstart_event", "touchstart")}} waren.

Sie können es sich so vorstellen, dass es angibt, wie viele separate Finger als die den Bildschirm berührend identifiziert werden können.

> [!NOTE]
> Die Berührungen im Array sind nicht unbedingt nach der Reihenfolge ihrer Ereignisse geordnet (das i-te Element im Array ist also nicht unbedingt die i-te Berührung, die stattgefunden hat). Sie können keine spezielle Reihenfolge annehmen. Um die Reihenfolge der Berührungen zu bestimmen, verwenden Sie die `touch` Objekt-IDs.

## Wert

Eine {{ domxref("TouchList") }}, die alle {{ domxref("Touch") }} Objekte für Berührungspunkte auflistet, die weiterhin mit der Berührungsfläche in Kontakt stehen, unabhängig davon, ob sie sich geändert haben oder welches ihre Zielelemente bei `touchstart` waren.

## Beispiele

Dieses Beispiel veranschaulicht die {{domxref("TouchEvent")}}-Eigenschaft `TouchEvent.touches`. Die `TouchEvent.touches`-Eigenschaft ist ein {{domxref("TouchList")}}-Objekt und enthält eine Liste von {{domxref("Touch")}}-Objekten für jeden Berührungspunkt, der derzeit die Oberfläche berührt.

Im folgenden Code-Snippet prüft der {{domxref("Element/touchstart_event", "touchstart")}}-Ereignishandler die Länge der Liste `TouchEvent.touches`, um die Anzahl der aktivierten Berührungspunkte zu bestimmen und dann je nach Anzahl der Berührungspunkte verschiedene Handler aufzurufen.

```js
someElement.addEventListener(
  "touchstart",
  (e) => {
    // Rufen Sie den entsprechenden Handler abhängig von der
    // Anzahl der Berührungspunkte auf.
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
