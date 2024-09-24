---
title: "GeolocationCoordinates: Längenkoordinateigenschaft"
short-title: Längenkoordinate
slug: Web/API/GeolocationCoordinates/longitude
l10n:
  sourceCommit: d8f04d843dd81ab8cea1cfc0577ae3c5c9b77d5c
---

{{securecontext_header}}{{APIRef("Geolocation API")}}

Die schreibgeschützte Eigenschaft **`longitude`** der Schnittstelle {{domxref("GeolocationCoordinates")}} ist eine Zahl, die die Länge einer geografischen Position in Dezimalgraden darstellt. Zusammen mit einem Zeitstempel, angegeben als {{Glossary("Unix time")}} in Millisekunden, der den Messzeitpunkt angibt, ist das `GeolocationCoordinates`-Objekt Teil der Schnittstelle {{domxref("GeolocationPosition")}}, die der Objekttyp ist, der von Geolocation-API-Funktionen zurückgegeben wird, die eine geografische Position ermitteln und zurückgeben.

## Wert

Der Wert in `longitude` ist die geografische Länge des auf der Erde beschriebenen Standortes durch das `Coordinates`-Objekt in Dezimalgraden. Der Wert wird durch die Spezifikation des World Geodetic System 1984 (WGS 84) definiert.

> [!NOTE]
> Der Nullmeridian (auch bekannt als der Hauptmeridian oder der Referenzmeridian) ist nicht genau der gleiche wie der Greenwich-Meridian, den die meisten Menschen kennen. Es ist vielmehr der [IERS-Referenzmeridian](https://en.wikipedia.org/wiki/IERS_Reference_Meridian), der sich 5,3 [Winkelsekunden](https://en.wikipedia.org/wiki/Arcseconds) (102 Meter / 335 Fuß) östlich des [Greenwich-Meridians](https://en.wikipedia.org/wiki/Greenwich_meridian) befindet. Dies ist derselbe Standard, den das [Global Positioning System](https://en.wikipedia.org/wiki/Global_Positioning_System) (GPS) verwendet.

## Beispiele

In diesem einfachen Beispiel holen wir die Position des Benutzers ein und zeigen die resultierenden Koordinaten an, sobald sie zurückgegeben werden.

### JavaScript

Der unten stehende JavaScript-Code erstellt einen Ereignis-Listener, sodass beim Klicken des Benutzers auf einen Knopf die Standortinformationen abgerufen und angezeigt werden.

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

Nachdem Variablen eingerichtet wurden, um bequemer auf das Button-Element und die beiden Elemente zu verweisen, in denen Breiten- und Längengrade angezeigt werden, wird der Ereignis-Listener durch Aufrufen von {{domxref("EventTarget.addEventListener", "addEventListener()")}} auf dem {{HTMLElement("button")}}-Element eingerichtet. Wenn der Benutzer auf den Button klickt, werden die Standortinformationen abgerufen und angezeigt.

Beim Empfang eines {{domxref("Element/click_event", "Klick")}}-Ereignisses rufen wir {{domxref("Geolocation.getCurrentPosition", "getCurrentPosition()")}} auf, um die aktuelle Position des Geräts anzufordern. Dies ist eine asynchrone Anfrage, deshalb geben wir eine Rückruffunktion an, die ein {{domxref("GeolocationPosition")}}-Objekt als Eingabe erhält, welches die ermittelte Position beschreibt.

Aus dem `GeolocationPosition`-Objekt erhalten wir die Breite und Länge des Benutzers mithilfe von {{domxref("GeolocationCoordinates/latitude", "position.coords.latitude")}} und `position.coords.longitude`, um die angezeigten Koordinaten zu aktualisieren. Die beiden {{HTMLElement("span")}}-Elemente werden aktualisiert, um die entsprechenden Werte nach der Umwandlung in einen Wert mit zwei Dezimalstellen anzuzeigen.

### HTML

Das verwendete HTML zur Präsentation der Ergebnisse sieht folgendermaßen aus:

```html
<p>
  Ihr Standort ist <span id="latitude">0.00</span>° Breitengrad bei
  <span id="longitude">0.00</span>° Längengrad.
</p>
<button id="get-location">Meinen Standort ermitteln</button>
```

### Ergebnis

Probieren Sie dieses Beispiel hier aus:

{{EmbedLiveSample("Examples", 600, 120)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Geolocation API](/de/docs/Web/API/Geolocation_API/Using_the_Geolocation_API)
- Die Schnittstelle {{domxref("GeolocationCoordinates")}}, zu der sie gehört.
- Die Schnittstelle {{domxref("GeolocationPosition")}}, die die oberste Schnittstelle ist, die von den Geolocation-API-Funktionen {{domxref("Geolocation.getCurrentPosition()")}} und {{domxref("Geolocation.watchPosition", "watchPosition()")}} verwendet wird, um Geodaten zurückzugeben.
