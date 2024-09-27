---
title: "GeolocationCoordinates: longitude-Eigenschaft"
short-title: longitude
slug: Web/API/GeolocationCoordinates/longitude
l10n:
  sourceCommit: d8f04d843dd81ab8cea1cfc0577ae3c5c9b77d5c
---

{{securecontext_header}}{{APIRef("Geolocation API")}}

Die **`longitude`** schreibgeschützte Eigenschaft des [`GeolocationCoordinates`](/de/docs/Web/API/GeolocationCoordinates) Interfaces ist eine Zahl, die die geographische Länge einer Position darstellt, angegeben in Dezimalgraden. Zusammen mit einem Zeitstempel, angegeben als [Unix-Zeit](/de/docs/Glossary/Unix_time) in Millisekunden, der den Zeitpunkt der Messung angibt, ist das `GeolocationCoordinates` Objekt Teil des [`GeolocationPosition`](/de/docs/Web/API/GeolocationPosition) Interfaces, welches der Objekttyp ist, der von Funktionen der Geolocation API zurückgegeben wird, die eine geographische Position erhalten und zurückgeben.

## Wert

Der Wert in `longitude` ist die geographische Länge des Ortes auf der Erde, der durch das `Coordinates`-Objekt beschrieben wird, in Dezimalgraden. Der Wert wird durch die World Geodetic System 1984 Spezifikation (WGS 84) definiert.

> [!NOTE]
> Der Nullmeridian (auch bekannt als der Hauptmeridian oder Referenzmeridian) ist nicht genau derselbe wie der allgemein bekannte Greenwich-Meridian. Stattdessen ist es der [IERS-Referenzmeridian](https://en.wikipedia.org/wiki/IERS_Reference_Meridian), der sich 5.3 [Bogensekunden](https://en.wikipedia.org/wiki/Arcseconds) (102 Meter / 335 Fuß) östlich des [Greenwich-Meridians](https://en.wikipedia.org/wiki/Greenwich_meridian) befindet. Dies ist der gleiche Standard, der vom [Global Positioning System](https://en.wikipedia.org/wiki/Global_Positioning_System) (GPS) verwendet wird.

## Beispiele

In diesem einfachen Beispiel holen wir die Position des Benutzers und zeigen die resultierenden Koordinaten an, sobald sie zurückgegeben werden.

### JavaScript

Der untenstehende JavaScript-Code erstellt einen Ereignislistener, sodass beim Klicken auf einen Button die Standortinformationen abgerufen und angezeigt werden.

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

Nach dem Einrichten von Variablen, um bequem auf das Button-Element und die zwei Elemente zuzugreifen, in die Breite und Länge eingezeichnet werden, wird der Ereignislistener durch den Aufruf von [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) auf dem {{HTMLElement("button")}} Element eingerichtet. Wenn der Benutzer den Button klickt, holen wir die Standortinformationen ein und zeigen sie an.

Beim Empfang eines [`click`](/de/docs/Web/API/Element/click_event) Ereignisses rufen wir [`getCurrentPosition()`](/de/docs/Web/API/Geolocation/getCurrentPosition) auf, um die aktuelle Position des Geräts anzufordern. Dies ist eine asynchrone Anforderung, daher geben wir eine Rückruffunktion an, die ein [`GeolocationPosition`](/de/docs/Web/API/GeolocationPosition) Objekt als Eingabe erhält, welches die bestimmte Position beschreibt.

Aus dem `GeolocationPosition` Objekt erhalten wir die Breite und Länge des Benutzers mithilfe von [`position.coords.latitude`](/de/docs/Web/API/GeolocationCoordinates/latitude) und `position.coords.longitude`, um die angezeigten Koordinaten zu aktualisieren. Die beiden {{HTMLElement("span")}}-Elemente werden aktualisiert, um die entsprechenden Werte anzuzeigen, nachdem sie auf zwei Dezimalstellen gerundet wurden.

### HTML

Das HTML zur Präsentation der Ergebnisse sieht folgendermaßen aus:

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
- Das [`GeolocationCoordinates`](/de/docs/Web/API/GeolocationCoordinates) Interface, zu dem es gehört.
- Das [`GeolocationPosition`](/de/docs/Web/API/GeolocationPosition) Interface, das das oberste Interface ist, das Standortdaten von den Geolocation API Funktionen [`Geolocation.getCurrentPosition()`](/de/docs/Web/API/Geolocation/getCurrentPosition) und [`watchPosition()`](/de/docs/Web/API/Geolocation/watchPosition) zurückgibt.
