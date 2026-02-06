---
title: "HTMLGeolocationElement: position-Eigenschaft"
short-title: position
slug: Web/API/HTMLGeolocationElement/position
l10n:
  sourceCommit: fce59e0706ab0114d9968c23722dccfacaebf998
---

{{APIRef("Navigation API")}}

Die **`position`**-Eigenschaft des schreibgeschützten [`HTMLGeolocationElement`](/de/docs/Web/API/HTMLGeolocationElement)-Interfaces gibt ein [`GeolocationPosition`](/de/docs/Web/API/GeolocationPosition)-Objekt zurück, das die Position des Benutzers bei erfolgreichem Abruf von Standortdaten darstellt.

Die abgerufene Position kann aktuell oder nicht aktuell sein. Die Position des Benutzers wird nur einmal abgerufen, wenn die Schaltfläche des `<geolocation>`-Elements gedrückt wird, es sei denn, Sie setzen das [`watch`](/de/docs/Web/HTML/Reference/Elements/geolocation#watch)-Attribut auf `true`. In diesem Fall wird eine neue Position jedes Mal abgerufen, wenn sich das Gerät des Benutzers bewegt. Um die aktuelle Position des Benutzers zu lesen, sollten Sie die `position`-Eigenschaft in Reaktion auf das Auslösen des [`location`](/de/docs/Web/API/HTMLGeolocationElement/location_event)-Ereignisses ablesen.

Wenn der Abruf von Standortdaten scheitert, sind die zugehörigen Fehlermeldungen in der [`HTMLGeolocationElement.error`](/de/docs/Web/API/HTMLGeolocationElement/error)-Eigenschaft verfügbar.

## Wert

Ein [`GeolocationPosition`](/de/docs/Web/API/GeolocationPosition)-Objekt oder `null`, wenn der Abruf von Standortdaten gescheitert ist oder die Daten noch nicht abgerufen wurden.

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

Sehen Sie sich unser [Beispiel zu eingebetteten Karten](/de/docs/Web/API/HTMLGeolocationElement#embedded_map_example) für ein praxisnahes Beispiel an, das `position` umfasst.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{htmlelement("geolocation")}} Element
