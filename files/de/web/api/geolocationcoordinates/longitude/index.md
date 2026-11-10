---
title: "GeolocationCoordinates: longitude-Eigenschaft"
short-title: longitude
slug: Web/API/GeolocationCoordinates/longitude
l10n:
  sourceCommit: b9569fcd65bb09ea7e032ef0938185eccdc2d9c4
---

{{securecontext_header}}{{APIRef("Geolocation API")}}

Die schreibgeschützte Eigenschaft **`longitude`** der Schnittstelle [`GeolocationCoordinates`](/de/docs/Web/API/GeolocationCoordinates) ist eine Zahl, die den Längengrad einer geografischen Position in Dezimalgrad angibt.
Zusammen mit einem Zeitstempel, der als {{Glossary("Unix_time", "Unix-Zeit")}} in Millisekunden angegeben wird und den Zeitpunkt der Messung bezeichnet, ist das `GeolocationCoordinates`-Objekt Teil der Schnittstelle [`GeolocationPosition`](/de/docs/Web/API/GeolocationPosition). Diese Schnittstelle definiert den Objekttyp, den Funktionen der Geolocation API zurückgeben, wenn sie eine geografische Position ermitteln.

## Wert

Der Wert von `longitude` ist der geografische Längengrad des Ortes auf der Erde, den das `Coordinates`-Objekt beschreibt, angegeben in Dezimalgrad. Der Wert ist durch die Spezifikation des World Geodetic System 1984 (WGS 84) definiert.

> [!NOTE]
> Der Nullmeridian (auch als Referenzmeridian bezeichnet) stimmt nicht genau mit dem Greenwich-Meridian überein, an den die meisten Menschen dabei denken. Stattdessen handelt es sich um den [IERS-Referenzmeridian](https://en.wikipedia.org/wiki/IERS_Reference_Meridian), der 5,3 [Bogensekunden](https://en.wikipedia.org/wiki/Arcseconds) (102 Meter / 335 Fuß) östlich des [Greenwich-Meridians](https://en.wikipedia.org/wiki/Greenwich_meridian) liegt. Dies ist derselbe Standard, den auch das [Global Positioning System](https://en.wikipedia.org/wiki/Global_Positioning_System) (GPS) verwendet.

## Beispiele

In diesem einfachen Beispiel rufen wir den Standort der nutzenden Person ab und zeigen die ermittelten Koordinaten an, sobald sie zurückgegeben wurden.

### HTML

Der HTML-Code zur Darstellung der Ergebnisse sieht so aus:

```html
<p>
  Your location is <span id="latitude">0.00</span>° latitude by
  <span id="longitude">0.00</span>° longitude.
</p>
<button id="get-location">Get My Location</button>
```

### JavaScript

Der folgende JavaScript-Code richtet einen Event-Listener ein, der die Standortinformationen abruft und anzeigt, wenn die nutzende Person auf eine Schaltfläche klickt.

```js
let button = document.getElementById("get-location");
let latText = document.getElementById("latitude");
let longText = document.getElementById("longitude");

button.addEventListener("click", () => {
  navigator.geolocation.getCurrentPosition((position) => {
    let lat = position.coords.latitude;
    let long = position.coords.longitude;

    latText.innerText = lat.toFixed(2);
    longText.innerText = long.toFixed(2);
  });
});
```

Nachdem Variablen eingerichtet wurden, um einfacher auf das button-Element und die beiden Elemente zur Anzeige von Breiten- und Längengrad zuzugreifen, wird der Event-Listener durch einen Aufruf von [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) für das {{HTMLElement("button")}}-Element eingerichtet. Wenn die nutzende Person auf die Schaltfläche klickt, rufen wir die Standortinformationen ab und zeigen sie an.

Beim Eintreffen eines [`click`](/de/docs/Web/API/Element/click_event)-Events rufen wir [`getCurrentPosition()`](/de/docs/Web/API/Geolocation/getCurrentPosition) auf, um die aktuelle Position des Geräts anzufordern. Da diese Anfrage asynchron ist, übergeben wir eine Callback-Funktion, die ein [`GeolocationPosition`](/de/docs/Web/API/GeolocationPosition)-Objekt mit der ermittelten Position erhält.

Aus dem `GeolocationPosition`-Objekt lesen wir mit [`position.coords.latitude`](/de/docs/Web/API/GeolocationCoordinates/latitude) und `position.coords.longitude` den Breiten- und Längengrad der nutzenden Person aus, um die angezeigten Koordinaten zu aktualisieren. Die beiden {{HTMLElement("span")}}-Elemente werden mit den entsprechenden Werten aktualisiert, nachdem diese auf zwei Dezimalstellen gerundet wurden.

### Ergebnis

Sie können das Beispiel hier ausprobieren:

{{EmbedLiveSample("Examples", 600, 120)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Geolocation API](/de/docs/Web/API/Geolocation_API/Using_the_Geolocation_API)
- Die Schnittstelle [`GeolocationCoordinates`](/de/docs/Web/API/GeolocationCoordinates), zu der diese Eigenschaft gehört.
- Die Schnittstelle [`GeolocationPosition`](/de/docs/Web/API/GeolocationPosition). Sie ist die übergeordnete Schnittstelle für die Geolokalisierungsdaten, die von den Geolocation-API-Funktionen [`Geolocation.getCurrentPosition()`](/de/docs/Web/API/Geolocation/getCurrentPosition) und [`watchPosition()`](/de/docs/Web/API/Geolocation/watchPosition) zurückgegeben werden.
