---
title: Verwendung der Geolocation API
slug: Web/API/Geolocation_API/Using_the_Geolocation_API
l10n:
  sourceCommit: d8f04d843dd81ab8cea1cfc0577ae3c5c9b77d5c
---

{{securecontext_header}}{{DefaultAPISidebar("Geolocation API")}}

Die Geolocation API wird verwendet, um den Standort des Benutzers abzurufen, damit dieser beispielsweise mit einer Mapping-API angezeigt werden kann. Dieser Artikel erklärt die Grundlagen der Verwendung.

## Das Geolocation-Objekt

Die [Geolocation API](/de/docs/Web/API/Geolocation) ist über das [`navigator.geolocation`](/de/docs/Web/API/Navigator/geolocation)-Objekt verfügbar.

Wenn das Objekt existiert, stehen Geolocation-Dienste zur Verfügung. Sie können das Vorhandensein von Geolocation wie folgt überprüfen:

```js
if ("geolocation" in navigator) {
  /* geolocation is available */
} else {
  /* geolocation IS NOT available */
}
```

### Den aktuellen Standort abrufen

Um den aktuellen Standort des Benutzers zu erhalten, können Sie die [`getCurrentPosition()`](/de/docs/Web/API/Geolocation/getCurrentPosition)-Methode aufrufen. Dies initiiert eine asynchrone Anfrage, um den Standort des Benutzers zu erkennen, und fragt die Positionierungshardware ab, um aktuelle Informationen zu erhalten. Wenn der Standort bestimmt wurde, wird die definierte Callback-Funktion ausgeführt. Optional können Sie eine zweite Callback-Funktion bereitstellen, die ausgeführt wird, wenn ein Fehler auftritt. Ein dritter, optionaler Parameter ist ein Optionsobjekt, in dem Sie das maximale Alter der zurückgegebenen Position, die Wartezeit für eine Anfrage und die gewünschte Genauigkeit der Position festlegen können.

> [!NOTE]
> Standardmäßig versucht [`getCurrentPosition()`](/de/docs/Web/API/Geolocation/getCurrentPosition), so schnell wie möglich eine Antwort mit geringer Genauigkeit zu liefern. Dies ist nützlich, wenn Sie unabhängig von der Genauigkeit eine schnelle Antwort benötigen. Geräte mit GPS können beispielsweise eine Minute oder länger benötigen, um ein GPS-Signal zu erhalten, sodass an `getCurrentPosition()` weniger genaue Daten (IP-Standort oder Wi-Fi) zurückgegeben werden können.

```js
navigator.geolocation.getCurrentPosition((position) => {
  doSomething(position.coords.latitude, position.coords.longitude);
});
```

Das obige Beispiel bewirkt, dass die Funktion `doSomething()` ausgeführt wird, wenn der Standort ermittelt wird.

### Den aktuellen Standort überwachen

Wenn sich die Standortdaten ändern (entweder durch Bewegung des Geräts oder wenn genauere Geoinformationen eintreffen), können Sie eine Callback-Funktion einrichten, die mit diesen aktualisierten Standortinformationen aufgerufen wird. Dies erfolgt mit der Funktion [`watchPosition()`](/de/docs/Web/API/Geolocation/watchPosition), die dieselben Eingabeparameter wie [`getCurrentPosition()`](/de/docs/Web/API/Geolocation/getCurrentPosition) hat. Die Callback-Funktion wird mehrfach aufgerufen, sodass der Browser entweder Ihren Standort aktualisieren kann, wenn Sie sich bewegen, oder einen genaueren Standort bereitstellen kann, wenn unterschiedliche Techniken zur Geolokalisierung verwendet werden. Die Fehler-Callback-Funktion, die wie bei `getCurrentPosition()` optional ist, kann wiederholt aufgerufen werden.

> [!NOTE]
> Sie können [`watchPosition()`](/de/docs/Web/API/Geolocation/watchPosition) ohne einen anfänglichen Aufruf von [`getCurrentPosition()`](/de/docs/Web/API/Geolocation/getCurrentPosition) verwenden.

```js
const watchID = navigator.geolocation.watchPosition((position) => {
  doSomething(position.coords.latitude, position.coords.longitude);
});
```

Die [`watchPosition()`](/de/docs/Web/API/Geolocation/watchPosition)-Methode gibt eine ID-Nummer zurück, die verwendet werden kann, um den angeforderten Standortbeobachter eindeutig zu identifizieren; Sie verwenden diesen Wert in Verbindung mit der [`clearWatch()`](/de/docs/Web/API/Geolocation/clearWatch)-Methode, um das Überwachen des Standorts des Benutzers zu stoppen.

```js
navigator.geolocation.clearWatch(watchID);
```

### Feinabstimmung der Antwort

Sowohl [`getCurrentPosition()`](/de/docs/Web/API/Geolocation/getCurrentPosition) als auch [`watchPosition()`](/de/docs/Web/API/Geolocation/watchPosition) akzeptieren einen Erfolgs-Callback, einen optionalen Fehler-Callback und ein optionales Optionsobjekt.

Dieses Objekt ermöglicht es Ihnen, anzugeben, ob hohe Genauigkeit aktiviert werden soll, ein maximales Alter für den zurückgegebenen Positionswert (bis zu diesem Alter wird er zwischengespeichert und wiederverwendet, wenn die gleiche Position erneut abgefragt wird; danach fordert der Browser frische Positionsdaten an) und einen Timeout-Wert, der bestimmt, wie lange der Browser versuchen soll, die Positionsdaten zu erhalten, bevor er abläuft.

Ein Aufruf von [`watchPosition`](/de/docs/Web/API/Geolocation/watchPosition) könnte so aussehen:

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

Der Standort des Benutzers wird durch eine Instanz des [`GeolocationPosition`](/de/docs/Web/API/GeolocationPosition)-Objekts beschrieben, das wiederum eine Instanz des [`GeolocationCoordinates`](/de/docs/Web/API/GeolocationCoordinates)-Objekts enthält.

Die `GeolocationPosition`-Instanz enthält nur zwei Dinge: eine `coords`-Eigenschaft, die die `GeolocationCoordinates`-Instanz enthält, und eine `timestamp`-Eigenschaft, die einen Zeitstempel enthält, der als {{Glossary("Unix_time", "Unix-Zeit")}} in Millisekunden angibt, wann die Positionsdaten abgerufen wurden.

Die `GeolocationCoordinates`-Instanz enthält eine Reihe von Eigenschaften, aber die zwei, mit denen Sie am häufigsten arbeiten werden, sind `latitude` und `longitude`, die Sie benötigen, um Ihre Position auf einer Karte darzustellen. Viele Geolocation-Erfolgs-Callbacks sehen daher ziemlich einfach aus:

```js
function success(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;

  // Do something with your latitude and longitude
}
```

Sie können jedoch auch eine Reihe anderer Informationen von einem `GeolocationCoordinates`-Objekt erhalten, einschließlich Höhe, Geschwindigkeit, in welche Richtung das Gerät zeigt, und einer Genauigkeitsmessung der Höhendaten, Längengrad- und Breitengrad-Daten.

## Fehlerbehandlung

Die Fehler-Callback-Funktion, falls sie beim Aufrufen von `getCurrentPosition()` oder `watchPosition()` angegeben wird, erwartet ein [`GeolocationPositionError`](/de/docs/Web/API/GeolocationPositionError)-Objekt als ersten Parameter. Dieser Objekttyp enthält zwei Eigenschaften, einen `code`, der angibt, welcher Fehler aufgetreten ist, und eine menschenlesbare `message`, die beschreibt, was der Fehlercode bedeutet.

Man könnte es so verwenden:

```js
function errorCallback(error) {
  alert(`ERROR(${error.code}): ${error.message}`);
}
```

## Beispiele

Im folgenden Beispiel wird die Geolocation API verwendet, um die Breiten- und Längengrade des Benutzers zu ermitteln. Ist die Abfrage erfolgreich, wird der verfügbare Hyperlink mit einer `openstreetmap.org`-URL gefüllt, die seinen Standort zeigt.

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
