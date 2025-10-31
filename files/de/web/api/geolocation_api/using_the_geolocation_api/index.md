---
title: Verwendung der Geolocation API
slug: Web/API/Geolocation_API/Using_the_Geolocation_API
l10n:
  sourceCommit: 9f7e7e9075e9f2b1937d2c8000f52a8ff76bff52
---

{{DefaultAPISidebar("Geolocation API")}}

Die Geolocation API wird verwendet, um den Standort des Nutzers zu ermitteln, sodass er beispielsweise mit einer Mapping-API angezeigt werden kann. Dieser Artikel erklärt die Grundlagen ihrer Verwendung.

## Das Geolocation-Objekt

Die [Geolocation API](/de/docs/Web/API/Geolocation) ist über das [`navigator.geolocation`](/de/docs/Web/API/Navigator/geolocation)-Objekt verfügbar.

Wenn das Objekt existiert, stehen Geolokalisierungsdienste zur Verfügung. Sie können die Präsenz der Geolokalisierung folgendermaßen testen:

```js
if ("geolocation" in navigator) {
  /* geolocation is available */
} else {
  /* geolocation IS NOT available */
}
```

### Die aktuelle Position abrufen

Um den aktuellen Standort des Nutzers zu erhalten, können Sie die Methode [`getCurrentPosition()`](/de/docs/Web/API/Geolocation/getCurrentPosition) aufrufen. Dies initiiert eine asynchrone Anfrage, um die Position des Nutzers zu erkennen, und fragt die Positionierungshardware ab, um aktuelle Informationen zu erhalten. Wenn die Position bestimmt ist, wird die definierte Rückruffunktion ausgeführt. Sie können optional eine zweite Rückruffunktion bereitstellen, die ausgeführt wird, wenn ein Fehler auftritt. Ein dritter, optionaler, Parameter ist ein Optionsobjekt, in dem Sie das maximale Alter der zurückgegebenen Position, die Wartezeit für eine Anfrage und die Genauigkeitseinstellung der Position festlegen können.

> [!NOTE]
> Standardmäßig versucht [`getCurrentPosition()`](/de/docs/Web/API/Geolocation/getCurrentPosition) so schnell wie möglich mit einem ungenauen Ergebnis zu antworten. Dies ist nützlich, wenn eine schnelle Antwort benötigt wird, unabhängig von der Genauigkeit. Geräte mit GPS können beispielsweise eine Minute oder länger benötigen, um ein GPS-Signal zu empfangen, sodass weniger genaue Daten (IP-Standort oder WLAN) an `getCurrentPosition()` zurückgegeben werden können.

```js
navigator.geolocation.getCurrentPosition((position) => {
  doSomething(position.coords.latitude, position.coords.longitude);
});
```

Im obigen Beispiel wird die Funktion `doSomething()` ausgeführt, wenn der Standort erfasst wurde.

### Die aktuelle Position überwachen

Falls sich die Positionsdaten ändern (entweder durch Bewegung des Geräts oder wenn genauere Geoinformationen eintreffen), können Sie eine Rückruffunktion einrichten, die mit diesen aktualisierten Standortinformationen aufgerufen wird. Dies geschieht mit der Funktion [`watchPosition()`](/de/docs/Web/API/Geolocation/watchPosition), die dieselben Eingabeparameter wie [`getCurrentPosition()`](/de/docs/Web/API/Geolocation/getCurrentPosition) hat. Die Rückruffunktion wird mehrfach aufgerufen und ermöglicht es dem Browser, entweder den Standort bei Bewegung zu aktualisieren oder einen genaueren Standort bereitzustellen, wenn verschiedene Techniken zur Geolokalisierung verwendet werden. Die Fehler-Rückruffunktion, die wie bei `getCurrentPosition()` optional ist, kann wiederholt aufgerufen werden.

> [!NOTE]
> Sie können [`watchPosition()`](/de/docs/Web/API/Geolocation/watchPosition) ohne einen initialen Aufruf von [`getCurrentPosition()`](/de/docs/Web/API/Geolocation/getCurrentPosition) verwenden.

```js
const watchID = navigator.geolocation.watchPosition((position) => {
  doSomething(position.coords.latitude, position.coords.longitude);
});
```

Die Methode [`watchPosition()`](/de/docs/Web/API/Geolocation/watchPosition) gibt eine ID-Nummer zurück, mit der der angeforderte Positionsüberwacher eindeutig identifiziert werden kann. Sie verwenden diesen Wert zusammen mit der Methode [`clearWatch()`](/de/docs/Web/API/Geolocation/clearWatch), um die Überwachung des Nutzerstandorts zu beenden.

```js
navigator.geolocation.clearWatch(watchID);
```

### Feinabstimmung der Antwort

Sowohl [`getCurrentPosition()`](/de/docs/Web/API/Geolocation/getCurrentPosition) als auch [`watchPosition()`](/de/docs/Web/API/Geolocation/watchPosition) akzeptieren einen Erfolgskallback, eine optionale Fehler-Rückruffunktion und ein optionales Optionsobjekt.

Dieses Objekt ermöglicht es Ihnen anzugeben, ob eine hohe Genauigkeit aktiviert werden soll, ein maximales Alter für den zurückgegebenen Positionswert (bis zu diesem Alter wird es zwischengespeichert und bei erneuter Anforderung derselben Position wiederverwendet; danach fordert der Browser frische Positionsdaten an) sowie einen Timeout-Wert, der bestimmt, wie lange der Browser versuchen soll, den Positionsdaten zu erhalten, bevor er abläuft.

Ein Aufruf von [`watchPosition`](/de/docs/Web/API/Geolocation/watchPosition) könnte folgendermaßen aussehen:

```js
function success(position) {
  doSomething(position.coords.latitude, position.coords.longitude);
}

function error() {
  alert("Sorry, no position available.");
}

const options = {
  enableHighAccuracy: true,
  maximumAge: 30000,
  timeout: 27000,
};

const watchID = navigator.geolocation.watchPosition(success, error, options);
```

## Beschreibung einer Position

Der Standort des Nutzers wird durch eine Instanz des [`GeolocationPosition`](/de/docs/Web/API/GeolocationPosition)-Objekts beschrieben, das wiederum eine Instanz eines [`GeolocationCoordinates`](/de/docs/Web/API/GeolocationCoordinates)-Objekts enthält.

Die `GeolocationPosition`-Instanz enthält nur zwei Dinge: eine `coords`-Eigenschaft, die die `GeolocationCoordinates`-Instanz enthält und eine `timestamp`-Eigenschaft, die einen Zeitstempel enthält, der als {{Glossary("Unix_time", "Unix-Zeit")}} in Millisekunden angegeben wird, zu dem die Positionsdaten abgerufen wurden.

Die `GeolocationCoordinates`-Instanz enthält eine Anzahl von Eigenschaften, aber die beiden am häufigsten verwendeten sind `latitude` und `longitude`, die benötigt werden, um die Position auf einer Karte zu zeichnen. Daher sehen viele Geolocation-Erfolgskallbacks recht einfach aus:

```js
function success(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;

  // Do something with your latitude and longitude
}
```

Sie können jedoch eine Reihe anderer Informationen aus einem `GeolocationCoordinates`-Objekt erhalten, einschließlich Höhe, Geschwindigkeit, der Richtung, in die das Gerät zeigt, und einer Genauigkeitsmessung der Höhen-, Längen- und Breitengrad-Daten.

## Fehlerbehandlung

Die Fehler-Rückruffunktion erwartet, falls beim Aufruf von `getCurrentPosition()` oder `watchPosition()` angegeben, eine Instanz des [`GeolocationPositionError`](/de/docs/Web/API/GeolocationPositionError)-Objekts als ersten Parameter. Dieser Objekttyp enthält zwei Eigenschaften: einen `code`, der angibt, welche Art von Fehler zurückgegeben wurde, und eine für Menschen lesbare `message`, die beschreibt, was der Fehlercode bedeutet.

Sie könnten es folgendermaßen verwenden:

```js
function errorCallback(error) {
  alert(`ERROR(${error.code}): ${error.message}`);
}
```

## Beispiele

Im folgenden Beispiel wird die Geolocation API verwendet, um die Breiten- und Längengrade des Nutzers abzurufen. Wenn dies erfolgreich ist, wird der verfügbare Hyperlink mit einer `openstreetmap.org`-URL gefüllt, die deren Standort zeigt.

```css hidden
body {
  padding: 20px;
  background-color: #ffffc9;
}

button {
  margin: 0.5rem 0;
}
```

### HTML

```html
<button id="find-me">Show my location</button><br />
<p id="status"></p>
<a id="map-link" href="" target="_blank"></a>
```

### JavaScript

```js
function geoFindMe() {
  const status = document.querySelector("#status");
  const mapLink = document.querySelector("#map-link");

  mapLink.href = "";
  mapLink.textContent = "";

  function success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    status.textContent = "";
    mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
    mapLink.textContent = `Latitude: ${latitude} °, Longitude: ${longitude} °`;
  }

  function error() {
    status.textContent = "Unable to retrieve your location";
  }

  if (!navigator.geolocation) {
    status.textContent = "Geolocation is not supported by your browser";
  } else {
    status.textContent = "Locating…";
    navigator.geolocation.getCurrentPosition(success, error);
  }
}

document.querySelector("#find-me").addEventListener("click", geoFindMe);
```

### Ergebnis

{{EmbedLiveSample('Examples', 350, 150, "", "", "", "geolocation")}}
