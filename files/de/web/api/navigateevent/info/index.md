---
title: "NavigateEvent: info-Eigenschaft"
short-title: info
slug: Web/API/NavigateEvent/info
l10n:
  sourceCommit: d88983eca1093181603d5ff755a1a8f284985e84
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Die **`info`**-Schreibgeschützte Eigenschaft des [`NavigateEvent`](/de/docs/Web/API/NavigateEvent)-Interfaces gibt den `info`-Datenwert zurück, der von der einleitenden Navigationsoperation übergeben wurde (z. B. [`Navigation.back()`](/de/docs/Web/API/Navigation/back) oder [`Navigation.navigate()`](/de/docs/Web/API/Navigation/navigate)), oder `undefined`, wenn keine `info`-Daten übergeben wurden.

## Wert

Der `info`-Wert, der von der einleitenden Navigationsoperation übergeben wurde, oder `undefined`, wenn keiner übergeben wurde.

## Beispiele

Ein Beispiel für die Verwendung von `info` könnte darin bestehen, unterschiedliche Darstellungen einer Einzelseiten-Navigation auszulösen, abhängig davon, wie eine bestimmte Route erreicht wurde. Betrachten Sie zum Beispiel eine Fotogalerie-App, bei der Sie dieselbe Foto-URL und denselben Zustand über verschiedene Routen erreichen können. Möglicherweise möchten Sie eine andere Animation verwenden, um das Foto für jede Route anzuzeigen.

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
- [Navigation API Erläuterung](https://github.com/WICG/navigation-api/blob/main/README.md)
- Domenic Denicolas [Navigation API Live-Demo](https://gigantic-honored-octagon.glitch.me/)
- Methoden, die es erlauben, info zu übergeben — [`Navigation.back()`](/de/docs/Web/API/Navigation/back), [`Navigation.forward()`](/de/docs/Web/API/Navigation/forward), [`Navigation.navigate()`](/de/docs/Web/API/Navigation/navigate), [`Navigation.reload()`](/de/docs/Web/API/Navigation/reload) und [`Navigation.traverseTo()`](/de/docs/Web/API/Navigation/traverseTo)
