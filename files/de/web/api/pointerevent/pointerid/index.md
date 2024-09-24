---
title: "PointerEvent: pointerId-Eigenschaft"
short-title: pointerId
slug: Web/API/PointerEvent/pointerId
l10n:
  sourceCommit: ba77b09c606b1b5fdea532e84b980cd0e79f226d
---

{{ APIRef("Pointer Events") }}

Die **`pointerId`**-Eigenschaft (nur lesbar) der
{{domxref("PointerEvent")}}-Schnittstelle ist ein Bezeichner, der einem bestimmten Pointer-Event zugewiesen wird. Der Bezeichner ist eindeutig und unterscheidet sich von den Bezeichnern aller anderen aktiven Pointer-Events. Da der Wert möglicherweise zufällig generiert wird, ist er nicht garantiert, eine besondere Bedeutung zu vermitteln.

> [!NOTE]
> Die `pointerId`-Eigenschaft ist in verschiedenen Browsern inkonsistent implementiert und bleibt nicht immer für jeden Tintenstrich oder jede Interaktion mit dem Bildschirm erhalten. Um mehrere Zeigegeräte auf einem Bildschirm gleichzeitig zuverlässig zu identifizieren, siehe {{domxref("PointerEvent.persistentDeviceId")}}.

## Wert

Eine Zahl.

## Beispiele

Der folgende Code-Snippet vergleicht eine zuvor gespeicherte `pointerId` mit der
des gerade ausgelösten {{domxref("Element/pointerdown_event", "pointerdown")}}-Events.

```js
let id; // Nehmen wir an, dass dies eine zuvor gespeicherte pointerId ist

target.addEventListener(
  "pointerdown",
  (event) => {
    // Vergleichen Sie die zwischengespeicherte ID des vorherigen Events
    // mit der aktuellen Event-ID und bearbeiten Sie dementsprechend
    if (id === event.pointerId) process_event(event);
  },
  false,
);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
