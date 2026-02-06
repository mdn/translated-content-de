---
title: Verwendung der Geolocation API
slug: Web/API/Geolocation_API/Using_the_Geolocation_API
l10n:
  sourceCommit: fce59e0706ab0114d9968c23722dccfacaebf998
---

{{DefaultAPISidebar("Geolocation API")}}

Die Geolocation API wird verwendet, um den Standort des Benutzers abzurufen, sodass dieser beispielsweise mithilfe einer Mapping-API angezeigt werden kann. Dieser Artikel erklärt die Grundlagen der Nutzung.

## Das Geolocation-Objekt

Die [Geolocation API](/de/docs/Web/API/Geolocation) ist über das [`navigator.geolocation`](/de/docs/Web/API/Navigator/geolocation) Objekt verfügbar.

Wenn das Objekt existiert, sind Geolocation-Dienste verfügbar. Sie können die Anwesenheit von Geolocation folgendermaßen testen:

```js
if ("geolocation" in navigator) {
  /* geolocation is available */
} else {
  /* geolocation IS NOT available */
}
```

### Abrufen der aktuellen Position

Um die aktuelle Position des Benutzers zu erhalten, können Sie die [`getCurrentPosition()`](/de/docs/Web/API/Geolocation/getCurrentPosition) Methode aufrufen. Dies initiiert eine asynchrone Anfrage zur Erkennung der Position des Benutzers und fragt die Positionierungshardware ab, um aktuelle Informationen zu erhalten. Wenn die Position ermittelt wird, wird die definierte Callback-Funktion ausgeführt. Sie können optional eine zweite Callback-Funktion bereitstellen, die im Falle eines Fehlers ausgeführt wird. Ein dritter, optionaler Parameter ist ein Optionsobjekt, in dem Sie das maximale Alter der zurückgegebenen Position, die Wartezeit für eine Anfrage und, ob Sie eine hohe Genauigkeit für die Position wünschen, festlegen können.

> [!NOTE]
> Standardmäßig versucht [`getCurrentPosition()`](/de/docs/Web/API/Geolocation/getCurrentPosition), so schnell wie möglich mit einem Ergebnis niedriger Genauigkeit zu antworten. Es ist nützlich, wenn Sie eine schnelle Antwort unabhängig von der Genauigkeit benötigen. Geräte mit GPS können beispielsweise eine Minute oder länger benötigen, um ein GPS-Signal zu erhalten, sodass weniger genaue Daten (IP-Standort oder Wi-Fi) an `getCurrentPosition()` zurückgegeben werden können.

```js
navigator.geolocation.getCurrentPosition((position) => {
  doSomething(position.coords.latitude, position.coords.longitude);
});
```

Das obige Beispiel wird die `doSomething()`-Funktion ausführen lassen, wenn die Position ermittelt wurde.

### Überwachung der aktuellen Position

Wenn sich die Positionsdaten ändern (entweder durch Gerätebewegung oder wenn genauere Geoinformationen eintreffen), können Sie eine Callback-Funktion einrichten, die mit diesen aktualisierten Positionsinformationen aufgerufen wird. Dies erfolgt mit der [`watchPosition()`](/de/docs/Web/API/Geolocation/watchPosition) Funktion, die dieselben Eingabeparameter wie [`getCurrentPosition()`](/de/docs/Web/API/Geolocation/getCurrentPosition) hat. Die Callback-Funktion wird mehrfach aufgerufen, wodurch der Browser entweder Ihre Position aktualisieren kann, während Sie sich bewegen, oder eine genauere Position bereitstellen kann, da verschiedene Techniken zur Geolokalisierung verwendet werden. Die Fehler-Callback-Funktion, die optional ist, genau wie bei `getCurrentPosition()`, kann wiederholt aufgerufen werden.

> [!NOTE]
> Sie können [`watchPosition()`](/de/docs/Web/API/Geolocation/watchPosition) ohne einen initialen [`getCurrentPosition()`](/de/docs/Web/API/Geolocation/getCurrentPosition) Aufruf verwenden.

```js
const watchID = navigator.geolocation.watchPosition((position) => {
  doSomething(position.coords.latitude, position.coords.longitude);
});
```

Die [`watchPosition()`](/de/docs/Web/API/Geolocation/watchPosition) Methode gibt eine ID-Nummer zurück, die zur eindeutigen Identifizierung des angeforderten Positionsbeobachters verwendet werden kann; Sie verwenden diesen Wert zusammen mit der [`clearWatch()`](/de/docs/Web/API/Geolocation/clearWatch) Methode, um die Beobachtung des Benutzerstandorts zu beenden.

```js
navigator.geolocation.clearWatch(watchID);
```

### Feinabstimmung der Antwort

Sowohl [`getCurrentPosition()`](/de/docs/Web/API/Geolocation/getCurrentPosition) als auch [`watchPosition()`](/de/docs/Web/API/Geolocation/watchPosition) akzeptieren einen Erfolgs-Callback, einen optionalen Fehler-Callback und ein optionales Optionsobjekt.

Dieses Objekt ermöglicht es Ihnen, anzugeben, ob eine hohe Genauigkeit aktiviert werden soll, ein maximales Alter für den zurückgegebenen Positionswert (bis zu diesem Alter wird es zwischengespeichert und erneut verwendet, wenn die gleiche Position erneut angefordert wird; danach fordert der Browser frische Positionsdaten an), und einen Timeout-Wert, der bestimmt, wie lange der Browser versuchen soll, die Positionsdaten zu erhalten, bevor er abbricht.

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

Der Standort des Benutzers wird unter Verwendung einer [`GeolocationPosition`](/de/docs/Web/API/GeolocationPosition)-Objektinstanz beschrieben, die selbst eine [`GeolocationCoordinates`](/de/docs/Web/API/GeolocationCoordinates)-Objektinstanz enthält.

Die `GeolocationPosition`-Instanz enthält nur zwei Dinge: eine `coords`-Eigenschaft, die die `GeolocationCoordinates`-Instanz enthält, und eine `timestamp`-Eigenschaft, die einen Zeitstempel enthält, angegeben als {{Glossary("Unix_time", "Unix-Zeit")}} in Millisekunden, zu der die Positionsdaten abgerufen wurden.

Die `GeolocationCoordinates`-Instanz enthält mehrere Eigenschaften, aber die beiden, die Sie am häufigsten verwenden werden, sind `latitude` und `longitude`, die Sie benötigen, um Ihre Position auf einer Karte darzustellen. Daher sehen viele Geolocation-Erfolgs-Callbacks recht einfach aus:

```js
function success(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;

  // Do something with your latitude and longitude
}
```

Allerdings können Sie eine Reihe anderer Informationen aus einem `GeolocationCoordinates`-Objekt erhalten, einschließlich Höhe, Geschwindigkeit, die Richtung, in die das Gerät zeigt, und ein Maß für die Genauigkeit der Höhe, Länge und Breite.

## Fehlerbehandlung

Die Fehler-Callback-Funktion, wenn sie beim Aufruf von `getCurrentPosition()` oder `watchPosition()` bereitgestellt wird, erwartet ein [`GeolocationPositionError`](/de/docs/Web/API/GeolocationPositionError) Objektinstanz als ihren ersten Parameter. Dieser Objekttyp enthält zwei Eigenschaften: einen `code`, der angibt, welcher Fehler aufgetreten ist, und eine menschenlesbare `message`, die beschreibt, was der Fehlercode bedeutet.

Sie könnten es so verwenden:

```js
function errorCallback(error) {
  alert(`ERROR(${error.code}): ${error.message}`);
}
```

## Beispiele

Im folgenden Beispiel wird die Geolocation API verwendet, um die Breite und Länge des Benutzers abzurufen. Bei Erfolg wird der verfügbare Hyperlink mit einer `openstreetmap.org`-URL gefüllt, die ihre Position zeigt.

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
<a id="map-link" href="" target="_blank">Location unknown</a>
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

## Siehe auch

- {{htmlelement("geolocation")}} Element
