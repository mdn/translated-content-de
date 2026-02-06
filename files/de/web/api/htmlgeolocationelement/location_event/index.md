---
title: "HTMLGeolocationElement: location Ereignis"
short-title: location
slug: Web/API/HTMLGeolocationElement/location_event
l10n:
  sourceCommit: fce59e0706ab0114d9968c23722dccfacaebf998
---

{{APIRef("HTML DOM")}}

Das **`location`**-Ereignis der [`HTMLGeolocationElement`](/de/docs/Web/API/HTMLGeolocationElement)-Schnittstelle wird ausgelöst, wann immer der Browser Standortdaten oder Fehlermeldungen erhält, wenn eine Anfrage nach Standortdaten nicht erfolgreich war.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("location", (event) => { })

onlocation = (event) => { }
```

## Ereignistyp

Ein [`Event`](/de/docs/Web/API/Event).

## Beispiele

### Verwendung von `location`, um auf Standortdaten und Fehler zu reagieren

In unserem [Eingebettete Karten-Demo](https://mdn.github.io/dom-examples/geolocation-element/embedded-map/) ([Quellcode](https://github.com/mdn/dom-examples/tree/main/geolocation-element/embedded-map)) verwenden wir einen `location`-Ereignis-Handler, um auf empfangene Standortdaten und Fehler zu reagieren:

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

Wenn Standortdaten erfolgreich zurückgegeben werden, greifen wir über die [`HTMLGeolocationElement.position`](/de/docs/Web/API/HTMLGeolocationElement/position)-Eigenschaft darauf zu und rufen die Breitengrad- und Längengradwerte ab. Wir protokollieren diese in der Konsole und zeichnen sie dann auf einer Karte, indem wir sie zusammen mit einer Referenz auf das `HTMLGeolocationElement`-Objekt an die Funktion `drawMap()` übergeben. Wenn die Datenanforderung fehlschlägt, greifen wir über die [`HTMLGeolocationElement.error`](/de/docs/Web/API/HTMLGeolocationElement/error)-Eigenschaft auf den Fehler zu und protokollieren die Fehlermeldung in der Konsole.

Sehen Sie sich die Hauptseite [`HTMLGeolocationElement`](/de/docs/Web/API/HTMLGeolocationElement) für eine vollständige Übersicht über dieses Beispiel an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{htmlelement("geolocation")}}-Element
