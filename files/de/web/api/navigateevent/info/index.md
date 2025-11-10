---
title: "NavigateEvent: info-Eigenschaft"
short-title: info
slug: Web/API/NavigateEvent/info
l10n:
  sourceCommit: 0496643fbc14a6bad2bf46c94ab27c541f6928ff
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Die schreibgeschützte **`info`**-Eigenschaft des
[`NavigateEvent`](/de/docs/Web/API/NavigateEvent)-Interfaces gibt den `info`-Datenwert zurück, der von der auslösenden Navigationsoperation übergeben wurde (z. B. [`Navigation.back()`](/de/docs/Web/API/Navigation/back) oder [`Navigation.navigate()`](/de/docs/Web/API/Navigation/navigate)), oder `undefined`, wenn keine `info`-Daten übergeben wurden.

## Wert

Der `info`-Wert, der von der auslösenden Navigationsoperation übergeben wurde, oder `undefined`, wenn keiner übergeben wurde.

## Beispiele

Ein Beispiel, wie `info` verwendet werden könnte, ist das Auslösen verschiedener Single-Page-Navigationsdarstellungen, abhängig davon, wie eine bestimmte Route erreicht wurde. Beispielsweise könnte eine Foto-Galerie-App, die dieselbe Foto-URL und denselben Status über verschiedene Routen erreicht, für jede Route eine andere Animation zur Anzeige des Fotos verwenden.

```js
navigation.addEventListener("navigate", (event) => {
  if (isPhotoNavigation(event)) {
    event.intercept({
      async handler() {
        switch (event.info?.via) {
          case "go-left": {
            await animateLeft();
            break;
          }
          case "go-right": {
            await animateRight();
            break;
          }
          case "gallery": {
            await animateZoomFromThumbnail(event.info.thumbnail);
            break;
          }
        }

        // TODO: actually load the photo.
      },
    });
  }
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Moderne clientseitige Routing: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API-Erklärung](https://github.com/WICG/navigation-api/blob/main/README.md)
- Methoden, die das Übergeben von Informationen ermöglichen — [`Navigation.back()`](/de/docs/Web/API/Navigation/back), [`Navigation.forward()`](/de/docs/Web/API/Navigation/forward), [`Navigation.navigate()`](/de/docs/Web/API/Navigation/navigate), [`Navigation.reload()`](/de/docs/Web/API/Navigation/reload) und [`Navigation.traverseTo()`](/de/docs/Web/API/Navigation/traverseTo)
