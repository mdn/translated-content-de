---
title: "NavigateEvent: info Eigenschaft"
short-title: info
slug: Web/API/NavigateEvent/info
l10n:
  sourceCommit: d88983eca1093181603d5ff755a1a8f284985e84
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Die **`info`** schreibgeschützte Eigenschaft der [`NavigateEvent`](/de/docs/Web/API/NavigateEvent) Schnittstelle gibt den `info`-Datenwert zurück, der durch die auslösende Navigationsoperation (z.B. [`Navigation.back()`](/de/docs/Web/API/Navigation/back) oder [`Navigation.navigate()`](/de/docs/Web/API/Navigation/navigate)) übergeben wurde, oder `undefined`, wenn keine `info` Daten übergeben wurden.

## Wert

Der `info`-Wert, der durch die auslösende Navigationsoperation übergeben wurde, oder `undefined`, wenn keiner übergeben wurde.

## Beispiele

Ein Beispiel, wie `info` verwendet werden könnte, ist, um verschiedene Single-Page-Navigationen abhängig davon auszulösen, wie eine bestimmte Route erreicht wurde. Zum Beispiel könnte in einer Fotogalerie-App die gleiche Foto-URL und der Zustand über verschiedene Routen erreichbar sein. Sie könnten für jede Route eine unterschiedliche Animation verwenden, um das Foto anzuzeigen.

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

- [Moderne clientseitige Routings: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API Erklärung](https://github.com/WICG/navigation-api/blob/main/README.md)
- Domenic Denicolas [Navigation API Live-Demo](https://gigantic-honored-octagon.glitch.me/)
- Methoden, die es ermöglichen, Info zu übergeben — [`Navigation.back()`](/de/docs/Web/API/Navigation/back), [`Navigation.forward()`](/de/docs/Web/API/Navigation/forward), [`Navigation.navigate()`](/de/docs/Web/API/Navigation/navigate), [`Navigation.reload()`](/de/docs/Web/API/Navigation/reload) und [`Navigation.traverseTo()`](/de/docs/Web/API/Navigation/traverseTo)
