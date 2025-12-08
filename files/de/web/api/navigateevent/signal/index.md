---
title: "NavigateEvent: signal-Eigenschaft"
short-title: signal
slug: Web/API/NavigateEvent/signal
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

{{APIRef("Navigation API")}}

Die **`signal`** schreibgeschützte Eigenschaft des [`NavigateEvent`](/de/docs/Web/API/NavigateEvent)-Interfaces gibt ein [`AbortSignal`](/de/docs/Web/API/AbortSignal) zurück, das abgebrochen wird, wenn die Navigation abgebrochen wird (z. B. wenn der Benutzer den "Stopp"-Button des Browsers drückt oder wenn eine andere Navigation beginnt und dadurch die laufende abbricht).

## Wert

Ein [`AbortSignal`](/de/docs/Web/API/AbortSignal)-Objekt.

## Beispiele

Die allgemeine Idee hier ist, dass die `signal`-Eigenschaft an eine zugehörige [`fetch()`](/de/docs/Web/API/Window/fetch)-Operation übergeben werden kann, sodass, wenn die Navigation abgebrochen wird, die `fetch()`-Operation sicher abgebrochen werden kann. Dies vermeidet die Verschwendung von Bandbreite für Abrufe, die nicht mehr benötigt werden.

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
> Siehe [Beispiel: Vor-/Zurück-Buttons](https://github.com/WICG/navigation-api#example-nextprevious-buttons) für ein detaillierteres Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Moderne clientseitige Navigation: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API Erklärer](https://github.com/WICG/navigation-api/blob/main/README.md)
