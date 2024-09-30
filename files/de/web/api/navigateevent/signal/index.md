---
title: "NavigateEvent: signal-Eigenschaft"
short-title: signal
slug: Web/API/NavigateEvent/signal
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Die **`signal`**-Schreibgeschütztes Eigenschaft des [`NavigateEvent`](/de/docs/Web/API/NavigateEvent)-Interfaces gibt ein [`AbortSignal`](/de/docs/Web/API/AbortSignal) zurück, das abgebrochen wird, wenn die Navigation abgebrochen wird (z. B. wenn der Benutzer die "Stopp"-Taste des Browsers drückt oder eine andere Navigation beginnt und die laufende dadurch abbricht).

## Wert

Ein [`AbortSignal`](/de/docs/Web/API/AbortSignal)-Objekt.

## Beispiele

Die allgemeine Idee hierbei ist, dass die `signal`-Eigenschaft an eine zugehörige [`fetch()`](/de/docs/Web/API/Window/fetch)-Operation übergeben werden kann, damit, wenn die Navigation abgebrochen wird, die `fetch()`-Operation sicher abgebrochen werden kann, um das Verschwenden von Bandbreite für Fetches zu vermeiden, die nicht mehr benötigt werden.

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
> Siehe [Beispiel: Vorherige/Nächste Schaltflächen](https://github.com/WICG/navigation-api#example-nextprevious-buttons) für ein detaillierteres Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Moderne clientseitige Routings: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API Erklärer](https://github.com/WICG/navigation-api/blob/main/README.md)
- Domenic Denicolas [Navigation API Live-Demo](https://gigantic-honored-octagon.glitch.me/)
