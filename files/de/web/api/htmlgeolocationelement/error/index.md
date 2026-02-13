---
title: "HTMLGeolocationElement: error-Eigenschaft"
short-title: error
slug: Web/API/HTMLGeolocationElement/error
l10n:
  sourceCommit: 3712f845b54b2754b2b550c7d7dca18f0277c0ad
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Die schreibgeschützte **`error`**-Eigenschaft des [`HTMLGeolocationElement`](/de/docs/Web/API/HTMLGeolocationElement)-Interfaces gibt ein [`GeolocationPositionError`](/de/docs/Web/API/GeolocationPositionError)-Objekt zurück, das Fehlerinformationen repräsentiert, wenn die Standortdatenerfassung fehlschlägt.

Wenn die Erfassung von Standortdaten erfolgreich ist, sind die Daten in der [`HTMLGeolocationElement.position`](/de/docs/Web/API/HTMLGeolocationElement/position)-Eigenschaft verfügbar.

## Wert

Ein [`GeolocationPositionError`](/de/docs/Web/API/GeolocationPositionError)-Objekt oder `null`, wenn die Standortdaten erfolgreich abgerufen wurden.

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

Siehe unser [Beispiel-Leitfaden zur eingebetteten Karte](/de/docs/Web/API/HTMLGeolocationElement#embedded_map_example) für ein praxisnahes Beispiel, das `error` einschließt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{htmlelement("geolocation")}} Element
