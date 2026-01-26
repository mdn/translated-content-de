---
title: "NavigateEvent: info-Eigenschaft"
short-title: info
slug: Web/API/NavigateEvent/info
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

{{APIRef("Navigation API")}}

Die **`info`**-Eigenschaft (nur lesbar) des [`NavigateEvent`](/de/docs/Web/API/NavigateEvent)-Interfaces gibt den `info`-Datenwert zurück, der von der initiierenden Navigationsoperation übergeben wurde (z. B. [`Navigation.back()`](/de/docs/Web/API/Navigation/back) oder [`Navigation.navigate()`](/de/docs/Web/API/Navigation/navigate)), oder `undefined`, wenn keine `info`-Daten übergeben wurden.

## Wert

Der `info`-Wert, der von der initiierenden Navigationsoperation übergeben wurde, oder `undefined`, wenn keiner übergeben wurde.

## Beispiele

Ein Beispiel dafür, wie `info` verwendet werden könnte, ist, um je nach Route, auf der ein bestimmter Pfad erreicht wurde, unterschiedliche Darstellungen für Single-Page-Navigationen auszulösen. Betrachten Sie zum Beispiel eine Foto-Galerie-App, bei der Sie dieselbe Foto-URL und den gleichen Zustand über verschiedene Routen erreichen können. Möglicherweise möchten Sie eine andere Animation verwenden, um das Foto für jede Route anzuzeigen.

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
- [Navigation API Erklärer](https://github.com/WICG/navigation-api/blob/main/README.md)
- Methoden, die es erlauben, Informationen zu übergeben — [`Navigation.back()`](/de/docs/Web/API/Navigation/back), [`Navigation.forward()`](/de/docs/Web/API/Navigation/forward), [`Navigation.navigate()`](/de/docs/Web/API/Navigation/navigate), [`Navigation.reload()`](/de/docs/Web/API/Navigation/reload) und [`Navigation.traverseTo()`](/de/docs/Web/API/Navigation/traverseTo)
