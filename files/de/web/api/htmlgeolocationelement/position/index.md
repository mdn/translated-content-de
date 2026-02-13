---
title: "HTMLGeolocationElement: position-Eigenschaft"
short-title: position
slug: Web/API/HTMLGeolocationElement/position
l10n:
  sourceCommit: 3712f845b54b2754b2b550c7d7dca18f0277c0ad
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Die **`position`**-Eigenschaft des [`HTMLGeolocationElement`](/de/docs/Web/API/HTMLGeolocationElement)-Interfaces ist eine schreibgeschützte Eigenschaft, die ein [`GeolocationPosition`](/de/docs/Web/API/GeolocationPosition)-Objekt zurückgibt, das die Position des Benutzers darstellt, wenn die Standortdaten erfolgreich abgerufen wurden.

Die abgerufene Position kann aktuell sein oder nicht. Die Position des Benutzers wird nur einmal ermittelt, wenn die Steuerungstaste des `<geolocation>`-Elements gedrückt wird, es sei denn, Sie setzen das [`watch`](/de/docs/Web/HTML/Reference/Elements/geolocation#watch)-Attribut auf `true`. In diesem Fall wird jedes Mal, wenn sich das Gerät des Benutzers bewegt, eine neue Position abgerufen. Um die aktuelle Position des Benutzers abzurufen, sollten Sie die `position`-Eigenschaft als Antwort auf das [`location`](/de/docs/Web/API/HTMLGeolocationElement/location_event)-Ereignis lesen.

Wenn das Abrufen der Standortdaten fehlschlägt, werden die zugehörigen Fehlerinformationen in der [`HTMLGeolocationElement.error`](/de/docs/Web/API/HTMLGeolocationElement/error)-Eigenschaft verfügbar sein.

## Wert

Ein [`GeolocationPosition`](/de/docs/Web/API/GeolocationPosition)-Objekt oder `null`, falls das Abrufen der Standortdaten fehlgeschlagen ist oder die Daten noch nicht abgerufen wurden.

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

Sehen Sie sich unser [Einbetten von Karten-Beispiel](/de/docs/Web/API/HTMLGeolocationElement#embedded_map_example) für ein praktisches Beispiel an, das `position` enthält.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{htmlelement("geolocation")}}-Element
