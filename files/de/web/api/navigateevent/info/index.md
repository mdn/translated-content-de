---
title: "NavigateEvent: info-Eigenschaft"
short-title: info
slug: Web/API/NavigateEvent/info
l10n:
  sourceCommit: d88983eca1093181603d5ff755a1a8f284985e84
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Die schreibgeschützte Eigenschaft **`info`** des {{domxref("NavigateEvent")}}-Interfaces gibt den `info`-Datenwert zurück, der durch den auslösenden Navigationsvorgang übergeben wurde (z.B. {{domxref("Navigation.back()")}} oder {{domxref("Navigation.navigate()")}}). Falls keine `info`-Daten übergeben wurden, wird `undefined` zurückgegeben.

## Wert

Der `info`-Wert, der durch den auslösenden Navigationsvorgang übergeben wurde, oder `undefined`, falls keiner übergeben wurde.

## Beispiele

Ein Beispiel dafür, wie `info` verwendet werden könnte, ist, um verschiedene Single-Page-Navigationsdarstellungen auszulösen, je nachdem, wie eine bestimmte Route erreicht wurde. Betrachten Sie beispielsweise eine Foto-Galerie-App, in der Sie dieselbe Foto-URL und denselben Status über verschiedene Routen erreichen können. Für jede Route könnten Sie eine andere Animation verwenden, um das Foto anzuzeigen.

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

- [Moderne clientseitige Navigation: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API Erklärer](https://github.com/WICG/navigation-api/blob/main/README.md)
- Domenic Denicolas [Navigation API Live-Demo](https://gigantic-honored-octagon.glitch.me/)
- Methoden, die erlauben, Informationen zu übergeben — {{domxref("Navigation.back()")}}, {{domxref("Navigation.forward()")}}, {{domxref("Navigation.navigate()")}}, {{domxref("Navigation.reload()")}} und {{domxref("Navigation.traverseTo()")}}
