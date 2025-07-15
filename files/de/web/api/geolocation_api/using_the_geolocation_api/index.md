---
title: Verwendung der Geolocation API
slug: Web/API/Geolocation_API/Using_the_Geolocation_API
l10n:
  sourceCommit: 0d0ccc861fa024fa10836fbf0cc2c3813cd74745
---

{{DefaultAPISidebar("Geolocation API")}}

Die Geolocation API wird verwendet, um den Standort des Benutzers abzurufen, sodass er beispielsweise verwendet werden kann, um seine Position mit Hilfe einer Karten-API anzuzeigen. Dieser Artikel erklärt die Grundlagen der Verwendung.

## Das Geolocation-Objekt

Die [Geolocation API](/de/docs/Web/API/Geolocation) ist über das [`navigator.geolocation`](/de/docs/Web/API/Navigator/geolocation)-Objekt verfügbar.

Wenn das Objekt existiert, sind Geolocation-Dienste verfügbar. Sie können die Präsenz von Geolocation folgendermaßen überprüfen:

```js
if ("geolocation" in navigator) {
  /* geolocation is available */
} else {
  /* geolocation IS NOT available */
}
```

### Abrufen der aktuellen Position

Um den aktuellen Standort des Benutzers zu erhalten, können Sie die Methode [`getCurrentPosition()`](/de/docs/Web/API/Geolocation/getCurrentPosition) aufrufen. Dies initiiert eine asynchrone Anfrage, um die Position des Benutzers zu ermitteln, und fragt die Positionshardware ab, um aktuelle Informationen zu erhalten. Wenn die Position bestimmt ist, wird die definierte Callback-Funktion ausgeführt. Sie können optional eine zweite Callback-Funktion bereitstellen, die ausgeführt wird, wenn ein Fehler auftritt. Ein dritter optionaler Parameter ist ein Optionsobjekt, in dem Sie das maximale Alter der zurückgegebenen Position, die Wartezeit für eine Anfrage und die Genauigkeit der Position festlegen können.

> [!NOTE]
> Standardmäßig versucht [`getCurrentPosition()`](/de/docs/Web/API/Geolocation/getCurrentPosition), so schnell wie möglich mit einem ungenauen Ergebnis zu antworten. Dies ist nützlich, wenn Sie eine schnelle Antwort benötigen, unabhängig von der Genauigkeit. Geräte mit GPS können beispielsweise eine Minute oder länger benötigen, um ein GPS-Signal zu erfassen, sodass `getCurrentPosition()` möglicherweise weniger genaue Daten (IP-Standort oder Wi-Fi) zurückgibt.

```js
navigator.geolocation.getCurrentPosition((position) => {
  doSomething(position.coords.latitude, position.coords.longitude);
});
```

Das obige Beispiel wird die `doSomething()`-Funktion ausführen, wenn die Position ermittelt wurde.

### Überwachung der aktuellen Position

Wenn sich die Positionsdaten ändern (entweder durch Bewegung des Geräts oder wenn genauere Geoinformationen ankommen), können Sie eine Callback-Funktion einrichten, die mit diesen aktualisierten Positionsinformationen aufgerufen wird. Dies erfolgt mit der Funktion [`watchPosition()`](/de/docs/Web/API/Geolocation/watchPosition), die die gleichen Eingabeparameter hat wie [`getCurrentPosition()`](/de/docs/Web/API/Geolocation/getCurrentPosition). Die Callback-Funktion wird mehrmals aufgerufen, sodass der Browser entweder Ihre Position aktualisieren kann, während Sie sich bewegen, oder eine genauere Position bereitstellen kann, während verschiedene Techniken zur Bestimmung Ihrer Geolokation verwendet werden. Die Fehler-Callback-Funktion, die optional ist, wie auch bei `getCurrentPosition()`, kann wiederholt aufgerufen werden.

> [!NOTE]
> Sie können [`watchPosition()`](/de/docs/Web/API/Geolocation/watchPosition) ohne einen initialen Aufruf von [`getCurrentPosition()`](/de/docs/Web/API/Geolocation/getCurrentPosition) verwenden.

```js
const watchID = navigator.geolocation.watchPosition((position) => {
  doSomething(position.coords.latitude, position.coords.longitude);
});
```

Die Methode [`watchPosition()`](/de/docs/Web/API/Geolocation/watchPosition) gibt eine ID-Nummer zurück, die zur eindeutigen Identifizierung des angeforderten Position-Watchers verwendet werden kann; Sie verwenden diesen Wert zusammen mit der Methode [`clearWatch()`](/de/docs/Web/API/Geolocation/clearWatch), um das Beobachten des Benutzerstandorts zu beenden.

```js
navigator.geolocation.clearWatch(watchID);
```

### Feinabstimmung der Antwort

Sowohl [`getCurrentPosition()`](/de/docs/Web/API/Geolocation/getCurrentPosition) als auch [`watchPosition()`](/de/docs/Web/API/Geolocation/watchPosition) akzeptieren einen Erfolgs-Callback, einen optionalen Fehler-Callback und ein optionales Optionsobjekt.

Dieses Objekt ermöglicht es Ihnen, anzugeben, ob hohe Genauigkeit aktiviert werden soll, ein maximales Alter für den zurückgegebenen Positionswert (bis zu diesem Alter wird er zwischengespeichert und wiederverwendet, wenn dieselbe Position erneut angefordert wird; danach wird der Browser frische Positionsdaten anfordern) und einen Timeout-Wert, der angibt, wie lange der Browser versuchen soll, die Positionsdaten zu erhalten, bevor er abbricht.

Ein Aufruf von [`watchPosition`](/de/docs/Web/API/Geolocation/watchPosition) könnte wie folgt aussehen:

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

Der Standort des Benutzers wird mithilfe einer Instanz des [`GeolocationPosition`](/de/docs/Web/API/GeolocationPosition)-Objekts beschrieben, die selbst eine Instanz eines [`GeolocationCoordinates`](/de/docs/Web/API/GeolocationCoordinates)-Objekts enthält.

Die `GeolocationPosition`-Instanz enthält nur zwei Dinge: eine `coords`-Eigenschaft, die die `GeolocationCoordinates`-Instanz enthält, und eine `timestamp`-Eigenschaft, die einen Zeitstempel enthält, angegeben in {{Glossary("Unix_time", "Unix-Zeit")}} in Millisekunden, zu dem die Positionsdaten abgerufen wurden.

Die `GeolocationCoordinates`-Instanz enthält eine Reihe von Eigenschaften, aber die beiden, die Sie am häufigsten verwenden werden, sind `latitude` und `longitude`, die Sie benötigen, um Ihre Position auf einer Karte zu zeichnen. Daher sehen viele Geolocation-Erfolgs-Callbacks relativ einfach aus:

```js
function success(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;

  // Do something with your latitude and longitude
}
```

Sie können jedoch eine Reihe anderer Informationen von einem `GeolocationCoordinates`-Objekt abrufen, einschließlich Höhe, Geschwindigkeit, in welche Richtung das Gerät zeigt, und ein Genauigkeitsmaß der Höhen-, Längen- und Breitengrad-Daten.

## Umgang mit Fehlern

Die Fehler-Callback-Funktion, wenn sie beim Aufruf von `getCurrentPosition()` oder `watchPosition()` bereitgestellt wird, erwartet eine Instanz eines [`GeolocationPositionError`](/de/docs/Web/API/GeolocationPositionError)-Objekts als ersten Parameter. Dieser Objekttyp enthält zwei Eigenschaften: einen `code`, der angibt, welcher Fehler zurückgegeben wurde, und eine für Menschen lesbare `message`, die beschreibt, was der Fehlercode bedeutet.

Sie könnten es wie folgt verwenden:

```js
function errorCallback(error) {
  alert(`ERROR(${error.code}): ${error.message}`);
}
```

## Beispiele

Im folgenden Beispiel wird die Geolocation API verwendet, um die Breiten- und Längengrade des Benutzers abzurufen. Wenn dies erfolgreich ist, wird der verfügbare Hyperlink mit einer `openstreetmap.org`-URL gefüllt, die deren Standort anzeigt.

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
