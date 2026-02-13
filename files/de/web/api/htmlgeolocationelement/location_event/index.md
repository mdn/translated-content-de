---
title: "HTMLGeolocationElement: location event"
short-title: location
slug: Web/API/HTMLGeolocationElement/location_event
l10n:
  sourceCommit: 3712f845b54b2754b2b550c7d7dca18f0277c0ad
---

{{APIRef("HTML DOM")}}{{SeeCompatTable}}

Das **`location`**-Ereignis der [`HTMLGeolocationElement`](/de/docs/Web/API/HTMLGeolocationElement)-Schnittstelle wird ausgelöst, wann immer der Browser Ortungsdaten oder Fehlermeldungen erhält, wenn eine Anfrage nach Ortungsdaten nicht erfolgreich war.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("location", (event) => { })

onlocation = (event) => { }
```

## Ereignistyp

Ein [`Event`](/de/docs/Web/API/Event).

## Beispiele

### Verwendung von `location`, um auf Ortungsdaten und Fehler zu reagieren

In unserem [Eingebettete Karte-Demo](https://mdn.github.io/dom-examples/geolocation-element/embedded-map/) ([Quellcode](https://github.com/mdn/dom-examples/tree/main/geolocation-element/embedded-map)) verwenden wir einen `location`-Ereignis-Handler, um auf Empfang von Ortungsdaten und Fehlern zu reagieren:

```js
geo.addEventListener("location", () => {
  if (geo.position) {
    console.log(
      `${geo.position.coords.latitude},${geo.position.coords.longitude}`,
    );
    drawMap(geo.position.coords.latitude, geo.position.coords.longitude, geo);
  } else if (geo.error) {
    console.log(geo.error.message);
  }
});
```

Wenn Ortungsdaten erfolgreich zurückgegeben werden, greifen wir über die [`HTMLGeolocationElement.position`](/de/docs/Web/API/HTMLGeolocationElement/position)-Eigenschaft darauf zu und rufen die Breitengrad- und Längengradwerte ab. Wir protokollieren diese in der Konsole und zeichnen sie dann auf einer Karte, indem wir sie zusammen mit einem Verweis auf das `HTMLGeolocationElement`-Objekt an die `drawMap()`-Funktion übergeben. Wenn die Datenanfrage fehlschlägt, greifen wir über die [`HTMLGeolocationElement.error`](/de/docs/Web/API/HTMLGeolocationElement/error)-Eigenschaft auf den Fehler zu und protokollieren die Fehlermeldung in der Konsole.

Sehen Sie die Hauptseite [`HTMLGeolocationElement`](/de/docs/Web/API/HTMLGeolocationElement) für eine vollständige Erklärung dieses Beispiels.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{htmlelement("geolocation")}} Element
