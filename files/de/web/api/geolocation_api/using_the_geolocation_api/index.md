---
title: Die Geolocation API verwenden
slug: Web/API/Geolocation_API/Using_the_Geolocation_API
l10n:
  sourceCommit: d8f04d843dd81ab8cea1cfc0577ae3c5c9b77d5c
---

{{securecontext_header}}{{DefaultAPISidebar("Geolocation API")}}

Die Geolocation API wird verwendet, um den Standort des Benutzers abzurufen, damit dieser zum Beispiel mit einer Karten-API angezeigt werden kann. Dieser Artikel erklärt die Grundlagen ihrer Verwendung.

## Das Geolocation-Objekt

Die [Geolocation API](/de/docs/Web/API/Geolocation) ist über das [`navigator.geolocation`](/de/docs/Web/API/Navigator/geolocation)-Objekt verfügbar.

Wenn das Objekt existiert, sind Geolocation-Dienste verfügbar. Sie können das Vorhandensein der Geolocation folgendermaßen testen:

```js
if ("geolocation" in navigator) {
  /* geolocation is available */
} else {
  /* geolocation IS NOT available */
}
```

### Abrufen der aktuellen Position

Um die aktuelle Position des Benutzers zu erhalten, können Sie die Methode [`getCurrentPosition()`](/de/docs/Web/API/Geolocation/getCurrentPosition) aufrufen. Dies initiiert eine asynchrone Anfrage zur Ermittlung der Benutzerposition und ruft die Ortungshardware ab, um aktuelle Informationen zu erhalten. Wenn die Position bestimmt wird, wird die definierte Callback-Funktion ausgeführt. Sie können optional eine zweite Callback-Funktion bereitstellen, die ausgeführt wird, wenn ein Fehler auftritt. Ein dritter optionaler Parameter ist ein Optionsobjekt, in dem Sie das maximale Alter der zurückgegebenen Position, die Zeit, um auf eine Anfrage zu warten, und ob Sie eine hohe Genauigkeit für die Position wünschen, festlegen können.

> [!NOTE]
> Standardmäßig versucht [`getCurrentPosition()`](/de/docs/Web/API/Geolocation/getCurrentPosition), so schnell wie möglich mit einem Ergebnis niedriger Genauigkeit zu antworten. Es ist nützlich, wenn Sie eine schnelle Antwort unabhängig von der Genauigkeit benötigen. Geräte mit GPS können beispielsweise eine Minute oder länger brauchen, um eine GPS-Fixierung zu erhalten, daher können weniger genaue Daten (IP-Standort oder Wi-Fi) an `getCurrentPosition()` zurückgegeben werden.

```js
navigator.geolocation.getCurrentPosition((position) => {
  doSomething(position.coords.latitude, position.coords.longitude);
});
```

Das obige Beispiel wird die Funktion `doSomething()` ausführen, wenn der Standort ermittelt wird.

### Beobachtung der aktuellen Position

Wenn sich die Positionsdaten ändern (entweder durch Bewegung des Geräts oder wenn genauere Geoinformationen eintreffen), können Sie eine Callback-Funktion einrichten, die mit diesen aktualisierten Positionsinformationen aufgerufen wird. Dies geschieht mit der Funktion [`watchPosition()`](/de/docs/Web/API/Geolocation/watchPosition), die dieselben Eingabeparameter hat wie [`getCurrentPosition()`](/de/docs/Web/API/Geolocation/getCurrentPosition). Die Callback-Funktion wird mehrfach aufgerufen, sodass der Browser entweder Ihren Standort beim Bewegen aktualisieren oder einen genaueren Standort bereitstellen kann, wenn unterschiedliche Techniken zur Geolokalisierung verwendet werden. Die Fehler-Callback-Funktion, die ebenso optional ist wie bei `getCurrentPosition()`, kann wiederholt aufgerufen werden.

> [!NOTE]
> Sie können [`watchPosition()`](/de/docs/Web/API/Geolocation/watchPosition) ohne einen vorherigen Anruf von [`getCurrentPosition()`](/de/docs/Web/API/Geolocation/getCurrentPosition) verwenden.

```js
const watchID = navigator.geolocation.watchPosition((position) => {
  doSomething(position.coords.latitude, position.coords.longitude);
});
```

Die Methode [`watchPosition()`](/de/docs/Web/API/Geolocation/watchPosition) gibt eine ID-Nummer zurück, die verwendet werden kann, um den angeforderten Positionsbeobachter eindeutig zu identifizieren; diesen Wert verwenden Sie zusammen mit der Methode [`clearWatch()`](/de/docs/Web/API/Geolocation/clearWatch), um die Beobachtung des Benutzerstandorts zu beenden.

```js
navigator.geolocation.clearWatch(watchID);
```

### Feineinstellung der Antwort

Sowohl [`getCurrentPosition()`](/de/docs/Web/API/Geolocation/getCurrentPosition) als auch [`watchPosition()`](/de/docs/Web/API/Geolocation/watchPosition) akzeptieren einen Erfolgs-Callback, einen optionalen Fehler-Callback und ein optionales Optionsobjekt.

Dieses Objekt ermöglicht es Ihnen zu spezifizieren, ob hohe Genauigkeit aktiviert werden soll, ein maximales Alter für den zurückgegebenen Positionswert (bis zu diesem Alter wird er zwischengespeichert und wiederverwendet, wenn dieselbe Position erneut angefordert wird; danach wird der Browser frische Positionsdaten anfordern) und einen Zeitlimitwert, der festlegt, wie lange der Browser versuchen sollte, die Positionsdaten zu erhalten, bevor das Zeitlimit erreicht wird.

Ein Anruf bei [`watchPosition`](/de/docs/Web/API/Geolocation/watchPosition) könnte wie folgt aussehen:

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

Der Standort des Benutzers wird durch eine Instanz des [`GeolocationPosition`](/de/docs/Web/API/GeolocationPosition)-Objekts beschrieben, das seinerseits eine Instanz des [`GeolocationCoordinates`](/de/docs/Web/API/GeolocationCoordinates)-Objekts enthält.

Die `GeolocationPosition`-Instanz enthält nur zwei Dinge: eine `coords`-Eigenschaft, die die Instanz von `GeolocationCoordinates` enthält, und eine `timestamp`-Eigenschaft, die einen Zeitstempel enthält, angegeben als [Unix-Zeit](/de/docs/Glossary/Unix_time) in Millisekunden, zu dem die Positionsdaten abgerufen wurden.

Die `GeolocationCoordinates`-Instanz enthält eine Reihe von Eigenschaften, aber die beiden, die Sie am häufigsten verwenden werden, sind `latitude` und `longitude`, die das sind, was Sie benötigen, um Ihren Standort auf einer Karte zu zeichnen. Daher sehen viele Geolocation-Erfolgs-Callbacks recht einfach aus:

```js
function success(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;

  // Do something with your latitude and longitude
}
```

Sie können jedoch eine Vielzahl anderer Informationen aus einem `GeolocationCoordinates`-Objekt erhalten, einschließlich Höhe, Geschwindigkeit, in welche Richtung das Gerät zeigt, und ein Maß für die Genauigkeit der Höhen-, Längen- und Breitenkoordinaten.

## Fehlerbehandlung

Die Fehler-Callback-Funktion, falls bereitgestellt, wenn `getCurrentPosition()` oder `watchPosition()` aufgerufen werden, erwartet eine Instanz des [`GeolocationPositionError`](/de/docs/Web/API/GeolocationPositionError)-Objekts als ersten Parameter. Dieser Objekttyp enthält zwei Eigenschaften: einen `code`, der angibt, welche Art von Fehler zurückgegeben wurde, und eine für Menschen lesbare `message`, die beschreibt, was der Fehlercode bedeutet.

Sie könnten es wie folgt verwenden:

```js
function errorCallback(error) {
  alert(`ERROR(${error.code}): ${error.message}`);
}
```

## Beispiele

Im folgenden Beispiel wird die Geolocation API verwendet, um die Breiten- und Längengrade des Benutzers abzurufen. Wenn erfolgreich, wird der verfügbare Hyperlink mit einer `openstreetmap.org` URL gefüllt, die deren Standort zeigt.

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
<a id="map-link" target="_blank"></a>
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
