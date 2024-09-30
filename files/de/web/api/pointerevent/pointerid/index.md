---
title: "PointerEvent: pointerId-Eigenschaft"
short-title: pointerId
slug: Web/API/PointerEvent/pointerId
l10n:
  sourceCommit: ba77b09c606b1b5fdea532e84b980cd0e79f226d
---

{{ APIRef("Pointer Events") }}

Die schreibgeschützte Eigenschaft **`pointerId`** der [`PointerEvent`](/de/docs/Web/API/PointerEvent)-Schnittstelle ist ein Bezeichner, der einem bestimmten Zeigerereignis zugewiesen wird. Der Bezeichner ist einzigartig, da er sich von den Bezeichnern aller anderen aktiven Zeigerereignisse unterscheidet. Da der Wert möglicherweise zufällig generiert wird, ist er nicht garantiert, eine bestimmte Bedeutung zu vermitteln.

> [!NOTE]
> Die `pointerId`-Eigenschaft wird von Browsern inkonsistent implementiert und bleibt nicht immer für jeden Tintenstrich oder jede Interaktion mit dem Bildschirm bestehen. Für eine zuverlässige Methode, um mehrere Zeigegeräte gleichzeitig auf einem Bildschirm zu identifizieren, siehe [`PointerEvent.persistentDeviceId`](/de/docs/Web/API/PointerEvent/persistentDeviceId).

## Wert

Eine Zahl.

## Beispiele

Der folgende Codeabschnitt vergleicht eine zuvor gespeicherte `pointerId` mit derjenigen des gerade ausgelösten [`pointerdown`](/de/docs/Web/API/Element/pointerdown_event)-Ereignisses.

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
