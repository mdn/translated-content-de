---
title: "HTMLGeolocationElement: error-Eigenschaft"
short-title: error
slug: Web/API/HTMLGeolocationElement/error
l10n:
  sourceCommit: fce59e0706ab0114d9968c23722dccfacaebf998
---

{{APIRef("Navigation API")}}

Die **`error`**-Eigenschaft des [`HTMLGeolocationElement`](/de/docs/Web/API/HTMLGeolocationElement)-Interfaces ist eine schreibgeschützte Eigenschaft, die ein [`GeolocationPositionError`](/de/docs/Web/API/GeolocationPositionError)-Objekt zurückgibt. Dieses Objekt repräsentiert Fehlermeldungen, falls die Standortdaten nicht abgerufen werden konnten.

Falls der Abruf der Standortdaten erfolgreich ist, sind die Daten in der [`HTMLGeolocationElement.position`](/de/docs/Web/API/HTMLGeolocationElement/position)-Eigenschaft verfügbar.

## Wert

Ein [`GeolocationPositionError`](/de/docs/Web/API/GeolocationPositionError)-Objekt oder `null`, falls die Standortdaten erfolgreich abgerufen wurden.

## Beispiele

### Grundlegende Verwendung

```html
<geolocation autolocate></geolocation>
```

```js
const geo = document.querySelector("geolocation");
geo.addEventListener("location", () => {
  if (geo.position) {
    console.log(
      `(${geo.position.coords.latitude},${geo.position.coords.longitude})`,
    );
  } else if (geo.error) {
    console.log(geo.error.message);
  }
});
```

Sehen Sie sich unser [Walkthrough des eingebetteten Kartenbeispiels](/de/docs/Web/API/HTMLGeolocationElement#embedded_map_example) für ein praxisnahes Beispiel an, das `error` beinhaltet.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{htmlelement("geolocation")}}-Element
