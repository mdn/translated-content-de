---
title: "NavigateEvent: Eigenschaft signal"
short-title: signal
slug: Web/API/NavigateEvent/signal
l10n:
  sourceCommit: 77ea71add6054857698eb7ac1bfec8c7afe9ad4f
---

{{APIRef("Navigation API")}}

Die schreibgeschützte **`signal`**-Eigenschaft der [`NavigateEvent`](/de/docs/Web/API/NavigateEvent)-Schnittstelle gibt ein [`AbortSignal`](/de/docs/Web/API/AbortSignal) zurück, das abgebrochen wird, wenn die Navigation abgebrochen wird (z.B. durch das Drücken der "Stopp"-Taste im Browser durch den Benutzer oder wenn eine andere Navigation startet und die laufende dadurch abbricht).

## Wert

Ein [`AbortSignal`](/de/docs/Web/API/AbortSignal)-Objekt.

## Beispiele

Die Grundidee ist hier, dass die `signal`-Eigenschaft an eine zugehörige [`fetch()`](/de/docs/Web/API/Window/fetch)-Operation übergeben werden kann, so dass wenn die Navigation abgebrochen wird, die `fetch()`-Operation sicher abgebrochen werden kann, um zu vermeiden, dass Bandbreite für nicht mehr benötigte Fetch-Vorgänge verschwendet wird.

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
> Siehe [Beispiel: Vorwärts-/Rückwärtsschaltflächen](https://github.com/WICG/navigation-api#example-nextprevious-buttons) für ein detaillierteres Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Moderne clientseitige Routings: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API Erklärungsdokument](https://github.com/WICG/navigation-api/blob/main/README.md)
