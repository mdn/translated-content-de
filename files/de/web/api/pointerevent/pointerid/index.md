---
title: "PointerEvent: pointerId-Eigenschaft"
short-title: pointerId
slug: Web/API/PointerEvent/pointerId
l10n:
  sourceCommit: 2ccbd062264d0a2a34f185a3386cb272f42c50f5
---

{{ APIRef("Pointer Events") }}

Die schreibgeschützte Eigenschaft **`pointerId`** der [`PointerEvent`](/de/docs/Web/API/PointerEvent)-Schnittstelle
ist ein dem Zeiger zugewiesener Bezeichner, der das Ereignis ausgelöst hat. Der Bezeichner
ist eindeutig und unterscheidet sich von den Bezeichnern aller anderen aktiven Zeigerereignisse.

Ein Wert von `-1` zeigt an, dass das PointerEvent nicht von einem Zeigegerät generiert wurde.
(Zum Beispiel ein [`click`](/de/docs/Web/API/Element/click_event)-Ereignis, das auf einer Schaltfläche ausgelöst wurde,
die über die Tastatur aktiviert wurde.) Andernfalls kann der Wert zufällig generiert sein und sollte
nicht genutzt werden, um spezifische Informationen über das Gerät zu vermitteln. Der Wert ist
nur während der Lebensdauer der Seite oder Sitzung stabil garantiert.

> [!NOTE]
> Die `pointerId`-Eigenschaft wird in verschiedenen Browsern uneinheitlich implementiert und bleibt nicht immer für jeden einzelnen Stiftstrich oder jede Interaktion mit dem Bildschirm erhalten. Für eine zuverlässige Möglichkeit, mehrere Zeigegeräte gleichzeitig auf einem Bildschirm zu identifizieren, siehe [`PointerEvent.persistentDeviceId`](/de/docs/Web/API/PointerEvent/persistentDeviceId).

## Wert

Eine Zahl.

## Beispiele

Der folgende Codeausschnitt vergleicht eine zuvor gespeicherte `pointerId` mit der
des gerade ausgelösten [`pointerdown`](/de/docs/Web/API/Element/pointerdown_event)-Ereignisses.

```js
let id; // Let's assume that this is a previously saved pointerId

target.addEventListener("pointerdown", (event) => {
  // Compare previous event's ID that was cached
  // to current event's ID and handle accordingly
  if (id === event.pointerId) process_event(event);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
