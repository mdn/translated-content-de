---
title: "HTMLGeolocationElement: location-Ereignis"
short-title: location
slug: Web/API/HTMLGeolocationElement/location_event
l10n:
  sourceCommit: 2f34ca590baf2d5447d42fc79002a70b9cb65e73
---

{{APIRef("HTML DOM")}}{{SeeCompatTable}}

Das **`location`**-Ereignis der [`HTMLGeolocationElement`](/de/docs/Web/API/HTMLGeolocationElement)-Schnittstelle wird ausgelöst, wenn der Browser Standortdaten empfängt oder wenn eine Anfrage nach Standortdaten fehlgeschlagen ist und Fehlerinformationen vorliegen.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("location", (event) => { })
```

Alternativ können Sie der [Ereignisbehandlereigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle einen Wert zuweisen:

```js-nolint
onlocation = (event) => { }
```

## Ereignistyp

Ein [`Event`](/de/docs/Web/API/Event).

## Beispiele

### Mit `location` auf Standortdaten und Fehler reagieren

In unserer [Demo einer eingebetteten Karte](https://mdn.github.io/dom-examples/geolocation-element/embedded-map/) ([Quellcode](https://github.com/mdn/dom-examples/tree/main/geolocation-element/embedded-map)) verwenden wir einen `location`-Ereignisbehandler, um auf empfangene Standortdaten und Fehler zu reagieren:

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

Wenn Standortdaten erfolgreich zurückgegeben werden, greifen wir über die Eigenschaft [`HTMLGeolocationElement.position`](/de/docs/Web/API/HTMLGeolocationElement/position) darauf zu und lesen die Werte für Breiten- und Längengrad aus. Wir geben diese Werte in der Konsole aus und stellen sie anschließend auf einer Karte dar, indem wir sie zusammen mit einer Referenz auf das `HTMLGeolocationElement`-Objekt an die Funktion `drawMap()` übergeben. Wenn die Datenanfrage fehlschlägt, greifen wir über die Eigenschaft [`HTMLGeolocationElement.error`](/de/docs/Web/API/HTMLGeolocationElement/error) auf den Fehler zu und geben die Fehlermeldung in der Konsole aus.

Eine vollständige Erläuterung dieses Beispiels finden Sie auf der Hauptseite zu [`HTMLGeolocationElement`](/de/docs/Web/API/HTMLGeolocationElement).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{htmlelement("geolocation")}}-Element
