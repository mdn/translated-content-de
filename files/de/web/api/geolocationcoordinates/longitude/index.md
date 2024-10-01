---
title: "GeolocationCoordinates: longitude-Eigenschaft"
short-title: longitude
slug: Web/API/GeolocationCoordinates/longitude
l10n:
  sourceCommit: d8f04d843dd81ab8cea1cfc0577ae3c5c9b77d5c
---

{{securecontext_header}}{{APIRef("Geolocation API")}}

Die schreibgeschützte Eigenschaft **`longitude`** des [`GeolocationCoordinates`](/de/docs/Web/API/GeolocationCoordinates)-Interfaces ist eine Zahl, die die geographische Länge eines Punktes in dezimalen Gradangaben repräsentiert. Zusammen mit einem Zeitstempel, angegeben als {{Glossary("Unix_time", "Unix-Zeit")}} in Millisekunden, der den Messzeitpunkt angibt, ist das `GeolocationCoordinates`-Objekt Teil des [`GeolocationPosition`](/de/docs/Web/API/GeolocationPosition)-Interfaces, welches der Objekttyp ist, der von Funktionen der Geolocation API zurückgegeben wird, die eine geographische Position ermitteln und zurückgeben.

## Wert

Der Wert in `longitude` ist die geographische Länge des auf der Erde durch das `Coordinates`-Objekt beschriebenen Ortes in dezimalen Gradangaben. Der Wert wird durch die World Geodetic System 1984-Spezifikation (WGS 84) definiert.

> [!NOTE]
> Der Nullmeridian (auch bekannt als der Hauptmeridian oder der Referenzmeridian) ist nicht genau derselbe wie der Greenwich-Meridian, den die meisten Menschen kennen. Er ist stattdessen der [IERS-Referenzmeridian](https://en.wikipedia.org/wiki/IERS_Reference_Meridian), der sich 5,3 [Bogensekunden](https://en.wikipedia.org/wiki/Arcseconds) (102 Meter / 335 Fuß) östlich des [Greenwich-Meridians](https://en.wikipedia.org/wiki/Greenwich_meridian) befindet. Dies ist der gleiche Standard, der vom [Global Positioning System](https://en.wikipedia.org/wiki/Global_Positioning_System) (GPS) verwendet wird.

## Beispiele

In diesem einfachen Beispiel holen wir die Position des Nutzers ein und zeigen die daraus resultierenden Koordinaten an, sobald sie zurückgegeben werden.

### JavaScript

Der untenstehende JavaScript-Code erstellt einen Ereignislistener, sodass, wenn der Nutzer auf einen Button klickt, die Standortinformationen abgerufen und angezeigt werden.

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

Nachdem Variablen eingerichtet wurden, um bequemer auf das Button-Element und die beiden Elemente, in die Breite und Länge gezeichnet werden sollen, zuzugreifen, wird der Ereignislistener durch einen Aufruf von [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) auf dem {{HTMLElement("button")}}-Element festgelegt. Wenn der Nutzer auf den Button klickt, holen wir die Standortinformationen ab und zeigen sie an.

Bei Empfang eines [`click`](/de/docs/Web/API/Element/click_event)-Ereignisses rufen wir [`getCurrentPosition()`](/de/docs/Web/API/Geolocation/getCurrentPosition) auf, um die aktuelle Position des Geräts anzufordern. Dies ist eine asynchrone Anfrage, daher stellen wir einen Rückruf bereit, der als Eingabe ein [`GeolocationPosition`](/de/docs/Web/API/GeolocationPosition)-Objekt erhält, das die bestimmte Position beschreibt.

Aus dem `GeolocationPosition`-Objekt erhalten wir die Breite und Länge des Nutzers über [`position.coords.latitude`](/de/docs/Web/API/GeolocationCoordinates/latitude) und `position.coords.longitude`, damit wir die angezeigten Koordinaten aktualisieren können. Die beiden {{HTMLElement("span")}}-Elemente werden aktualisiert, um die entsprechenden Werte nach Umwandlung in eine Zahl mit zwei Dezimalstellen anzuzeigen.

### HTML

Der HTML-Code, der verwendet wird, um die Ergebnisse zu präsentieren, sieht wie folgt aus:

```html
<p>
  Your location is <span id="latitude">0.00</span>° latitude by
  <span id="longitude">0.00</span>° longitude.
</p>
<button id="get-location">Get My Location</button>
```

### Ergebnis

Testen Sie dieses Beispiel hier:

{{EmbedLiveSample("Examples", 600, 120)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Geolocation API](/de/docs/Web/API/Geolocation_API/Using_the_Geolocation_API)
- Das [`GeolocationCoordinates`](/de/docs/Web/API/GeolocationCoordinates)-Interface, zu dem es gehört.
- Das [`GeolocationPosition`](/de/docs/Web/API/GeolocationPosition)-Interface, das das oberste Interface ist
  zur Rückgabe von Geolokalisierungsdaten von den Funktionen der Geolocation API
  [`Geolocation.getCurrentPosition()`](/de/docs/Web/API/Geolocation/getCurrentPosition) und
  [`watchPosition()`](/de/docs/Web/API/Geolocation/watchPosition).
