---
title: "PointerEvent: pointerId-Eigenschaft"
short-title: pointerId
slug: Web/API/PointerEvent/pointerId
l10n:
  sourceCommit: 27cefebdd7adb249aa9be7dba286f5d572ec3729
---

{{ APIRef("Pointer Events") }}

Die schreibgeschützte **`pointerId`**-Eigenschaft des [`PointerEvent`](/de/docs/Web/API/PointerEvent)-Interfaces
ist eine Kennung, die dem Zeiger zugewiesen ist, der das Ereignis ausgelöst hat. Die Kennung
ist einzigartig und unterscheidet sich von den Kennungen aller anderen aktiven Zeigerereignisse.

Ein Wert von `-1` zeigt an, dass das PointerEvent nicht von einem Zeigegerät generiert wurde.
(Zum Beispiel ein [`click`](/de/docs/Web/API/Element/click_event)-Ereignis, das auf einer Schaltfläche ausgelöst wurde,
die über die Tastatur aktiviert wurde.) Andernfalls kann der Wert zufällig generiert werden und
sollte nicht darauf vertrauen, bestimmte Informationen über das Gerät zu vermitteln. Der Wert ist
nur für die Lebensdauer der Seite oder Sitzung stabil garantiert.

> [!NOTE]
> Die `pointerId`-Eigenschaft wird in verschiedenen Browsern inkonsistent implementiert und bleibt nicht immer für jeden Tintenstrich oder jede Interaktion mit dem Bildschirm bestehen. Für eine zuverlässige Methode zur gleichzeitigen Identifizierung mehrerer Zeigegeräte auf einem Bildschirm, siehe [`PointerEvent.persistentDeviceId`](/de/docs/Web/API/PointerEvent/persistentDeviceId).

## Wert

Eine Zahl.

## Beispiele

Der folgende Codeausschnitt vergleicht eine zuvor gespeicherte `pointerId` mit derjenigen des gerade ausgelösten [`pointerdown`](/de/docs/Web/API/Element/pointerdown_event)-Ereignisses.

```js
let id; // Let's assume that this is a previously saved pointerId

target.addEventListener(
  "pointerdown",
  (event) => {
    // Compare previous event's ID that was cached
    // to current event's ID and handle accordingly
    if (id === event.pointerId) process_event(event);
  },
  false,
);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
