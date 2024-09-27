---
title: "NavigateEvent: signal-Eigenschaft"
short-title: signal
slug: Web/API/NavigateEvent/signal
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Die **`signal`**-Eigenschaft des schreibgeschützten
[`NavigateEvent`](/de/docs/Web/API/NavigateEvent)-Interfaces gibt ein [`AbortSignal`](/de/docs/Web/API/AbortSignal) zurück, das abgebrochen wird, wenn die Navigation abgebrochen wird (z.B. durch Drücken des "Stop"-Buttons im Browser oder wenn eine andere Navigation beginnt und die laufende somit abbricht).

## Wert

Ein [`AbortSignal`](/de/docs/Web/API/AbortSignal)-Objekt.

## Beispiele

Die grundlegende Idee hierbei ist, dass die `signal`-Eigenschaft an eine zugehörige [`fetch()`](/de/docs/Web/API/Window/fetch)-Operation übergeben werden kann, so dass, wenn die Navigation abgebrochen wird, die `fetch()`-Operation sicher abgebrochen werden kann, um Bandbreite bei nicht mehr benötigten Abrufen zu sparen.

```js
navigation.addEventListener("navigate", (event) => {
  event.intercept({
    async handler() {
      // ...

      await fetch(`/img/some-image.jpg`, { signal: event.signal });

      // ...
    },
  });
});
```

> [!NOTE]
> Siehe [Beispiel: Vorwärts-/Rückwärts-Buttons](https://github.com/WICG/navigation-api#example-nextprevious-buttons) für ein detaillierteres Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Moderne clientseitige Routinge: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API Erklärer](https://github.com/WICG/navigation-api/blob/main/README.md)
- Domenic Denicolas [Navigation API Live-Demo](https://gigantic-honored-octagon.glitch.me/)
