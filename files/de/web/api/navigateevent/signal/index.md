---
title: "NavigateEvent: signal-Eigenschaft"
short-title: signal
slug: Web/API/NavigateEvent/signal
l10n:
  sourceCommit: 0496643fbc14a6bad2bf46c94ab27c541f6928ff
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Die schreibgeschützte Eigenschaft **`signal`** des [`NavigateEvent`](/de/docs/Web/API/NavigateEvent)-Interfaces gibt ein [`AbortSignal`](/de/docs/Web/API/AbortSignal) zurück, das abgebrochen wird, wenn die Navigation abgebrochen wird (z.B. wenn der Benutzer die "Stopp"-Taste des Browsers drückt oder eine andere Navigation gestartet wird und damit die laufende abbricht).

## Wert

Ein [`AbortSignal`](/de/docs/Web/API/AbortSignal)-Objekt.

## Beispiele

Die allgemeine Idee hierbei ist, dass die `signal`-Eigenschaft an einen zugehörigen [`fetch()`](/de/docs/Web/API/Window/fetch)-Vorgang übergeben werden kann, so dass, wenn die Navigation abgebrochen wird, der `fetch()`-Vorgang sicher abgebrochen werden kann, um Bandbreitenverschwendung für Abrufe zu vermeiden, die nicht mehr benötigt werden.

```js
navigation.addEventListener("navigate", (event) => {
  event.intercept({
    async handler() {
      // …

      await fetch(`/img/some-image.jpg`, { signal: event.signal });

      // …
    },
  });
});
```

> [!NOTE]
> Siehe [Beispiel: Vor-/Zurücktasten](https://github.com/WICG/navigation-api#example-nextprevious-buttons) für ein detaillierteres Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Moderne clientseitige Navigation: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API Erläuterung](https://github.com/WICG/navigation-api/blob/main/README.md)
