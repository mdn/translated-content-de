---
title: "NavigateEvent: info-Eigenschaft"
short-title: info
slug: Web/API/NavigateEvent/info
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Die **`info`** schreibgeschützte Eigenschaft des [`NavigateEvent`](/de/docs/Web/API/NavigateEvent)-Interfaces gibt den `info`-Datenwert zurück, der von der auslösenden Navigationsoperation (z.B. [`Navigation.back()`](/de/docs/Web/API/Navigation/back) oder [`Navigation.navigate()`](/de/docs/Web/API/Navigation/navigate)) übergeben wurde, oder `undefined`, wenn keine `info`-Daten übergeben wurden.

## Wert

Der `info`-Wert, der von der auslösenden Navigationsoperation übergeben wurde, oder `undefined`, wenn keiner übergeben wurde.

## Beispiele

Ein Beispiel, wie `info` verwendet werden könnte, ist das Auslösen unterschiedlicher Single-Page-Navigationen-Darstellungen, je nachdem, wie eine bestimmte Route erreicht wurde. Zum Beispiel in einer Foto-Galerie-App, in der Sie die gleiche Foto-URL und den Zustand über verschiedene Routen erreichen können. Möglicherweise möchten Sie für jede Route eine andere Animation verwenden, um das Foto anzuzeigen.

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

- [Moderne clientseitige Routenführung: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API Erklärungen](https://github.com/WICG/navigation-api/blob/main/README.md)
- Domenic Denicolas [Navigation API Live-Demo](https://gigantic-honored-octagon.glitch.me/)
- Methoden, die erlauben, Info zu übergeben — [`Navigation.back()`](/de/docs/Web/API/Navigation/back), [`Navigation.forward()`](/de/docs/Web/API/Navigation/forward), [`Navigation.navigate()`](/de/docs/Web/API/Navigation/navigate), [`Navigation.reload()`](/de/docs/Web/API/Navigation/reload) und [`Navigation.traverseTo()`](/de/docs/Web/API/Navigation/traverseTo)
