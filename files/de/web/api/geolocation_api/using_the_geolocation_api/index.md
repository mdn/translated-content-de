---
title: Verwendung der Geolocation-API
slug: Web/API/Geolocation_API/Using_the_Geolocation_API
l10n:
  sourceCommit: aff319cd81d10cfda31b13adb3263deafb284b20
---

{{DefaultAPISidebar("Geolocation API")}}

Die Geolocation-API wird verwendet, um den Standort des Benutzers zu ermitteln, sodass dieser beispielsweise mithilfe einer Karten-API angezeigt werden kann. Dieser Artikel erklärt die Grundlagen der Nutzung.

## Das Geolocation-Objekt

Die [Geolocation API](/de/docs/Web/API/Geolocation) ist über das [`navigator.geolocation`](/de/docs/Web/API/Navigator/geolocation)-Objekt verfügbar.

Wenn das Objekt existiert, sind Geolocation-Dienste verfügbar. Sie können die Verfügbarkeit der Geolocation wie folgt prüfen:

```js
if ("geolocation" in navigator) {
  /* geolocation is available */
} else {
  /* geolocation IS NOT available */
}
```

### Die aktuelle Position abrufen

Um den aktuellen Standort des Benutzers zu erhalten, können Sie die Methode [`getCurrentPosition()`](/de/docs/Web/API/Geolocation/getCurrentPosition) aufrufen. Dies initiiert eine asynchrone Anfrage, um den Standort des Benutzers zu ermitteln und die Positionierungshardware abzufragen, um aktuelle Informationen zu erhalten. Wenn die Position bestimmt wurde, wird die definierte Callback-Funktion ausgeführt. Sie können optional eine zweite Callback-Funktion bereitstellen, die im Falle eines Fehlers ausgeführt wird. Ein dritter, optionaler Parameter ist ein Optionsobjekt, in dem Sie das maximale Alter der zurückgegebenen Position, die Wartezeit für eine Anfrage und die gewünschte Genauigkeit für die Position festlegen können.

> [!NOTE]
> Standardmäßig versucht [`getCurrentPosition()`](/de/docs/Web/API/Geolocation/getCurrentPosition), so schnell wie möglich mit einem ungenauen Ergebnis zu antworten. Dies ist nützlich, wenn Sie eine schnelle Antwort benötigen, unabhängig von der Genauigkeit. Geräte mit GPS können zum Beispiel eine Minute oder länger benötigen, um eine GPS-Verbindung herzustellen, sodass weniger genaue Daten (Standortdaten über IP oder Wi-Fi) an `getCurrentPosition()` zurückgegeben werden können.

```js
navigator.geolocation.getCurrentPosition((position) => {
  doSomething(position.coords.latitude, position.coords.longitude);
});
```

Das obige Beispiel führt zur Ausführung der `doSomething()`-Funktion, sobald der Standort ermittelt wurde.

### Die aktuelle Position verfolgen

Wenn sich die Positionsdaten ändern (entweder durch Bewegung des Geräts oder weil genauere Geoinformationen bereitgestellt werden), können Sie eine Callback-Funktion einrichten, die mit den aktualisierten Positionsinformationen aufgerufen wird. Dies geschieht mit der Funktion [`watchPosition()`](/de/docs/Web/API/Geolocation/watchPosition), die dieselben Eingabeparameter wie [`getCurrentPosition()`](/de/docs/Web/API/Geolocation/getCurrentPosition) hat. Die Callback-Funktion wird mehrmals aufgerufen, sodass der Browser Ihren Standort entweder aktualisieren kann, während Sie sich bewegen, oder eine genauere Position bereitstellt, wenn verschiedene Techniken verwendet werden, um Sie zu lokalisieren. Die Fehler-Callback-Funktion, die wie bei `getCurrentPosition()` optional ist, kann wiederholt aufgerufen werden.

> [!NOTE]
> Sie können [`watchPosition()`](/de/docs/Web/API/Geolocation/watchPosition) ohne einen vorhergehenden [`getCurrentPosition()`](/de/docs/Web/API/Geolocation/getCurrentPosition)-Aufruf verwenden.

```js
const watchID = navigator.geolocation.watchPosition((position) => {
  doSomething(position.coords.latitude, position.coords.longitude);
});
```

Die Methode [`watchPosition()`](/de/docs/Web/API/Geolocation/watchPosition) gibt eine ID-Nummer zurück, die verwendet werden kann, um den angeforderten Positionsbeobachter eindeutig zu identifizieren; Sie verwenden diesen Wert zusammen mit der Methode [`clearWatch()`](/de/docs/Web/API/Geolocation/clearWatch), um die Überwachung der Benutzerposition zu stoppen.

```js
navigator.geolocation.clearWatch(watchID);
```

### Die Antwort fein abstimmen

Sowohl [`getCurrentPosition()`](/de/docs/Web/API/Geolocation/getCurrentPosition) als auch [`watchPosition()`](/de/docs/Web/API/Geolocation/watchPosition) akzeptieren einen Erfolgscallback, einen optionalen Fehlercallback und ein optionales Optionsobjekt.

Dieses Objekt erlaubt es Ihnen, anzugeben, ob eine hohe Genauigkeit aktiviert werden soll, ein maximales Alter für den zurückgegebenen Positionswert (bis zu diesem Alter wird er zwischengespeichert und bei erneuter Anforderung derselben Position wiederverwendet; danach wird der Browser frische Positionsdaten anfordern) und einen Timeout-Wert festzulegen, der vorgibt, wie lange der Browser versuchen soll, die Positionsdaten abzufragen, bevor er einen Timeout auslöst.

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

## Eine Position beschreiben

Der Standort des Benutzers wird mit einer Instanz des Objekts [`GeolocationPosition`](/de/docs/Web/API/GeolocationPosition) beschrieben, das selbst eine Instanz des Objekts [`GeolocationCoordinates`](/de/docs/Web/API/GeolocationCoordinates) enthält.

Die Instanz `GeolocationPosition` enthält nur zwei Dinge: eine `coords`-Eigenschaft, die die `GeolocationCoordinates`-Instanz enthält, und eine `timestamp`-Eigenschaft, die einen Zeitstempel enthält, der in Millisekunden als {{Glossary("Unix_time", "Unix-Zeit")}} angegeben ist und zu dem die Positionsdaten abgerufen wurden.

Die Instanz `GeolocationCoordinates` enthält eine Reihe von Eigenschaften, aber die beiden, die Sie am häufigsten verwenden werden, sind `latitude` und `longitude`, die Sie benötigen, um Ihre Position auf eine Karte zu zeichnen. Daher sehen viele Geolocation-Erfolgscallbacks recht einfach aus:

```js
function success(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;

  // Do something with your latitude and longitude
}
```

Sie können jedoch auch eine Reihe anderer Informationen aus einem `GeolocationCoordinates`-Objekt erhalten, einschließlich Höhe, Geschwindigkeit, die Richtung, in die das Gerät zeigt, und eine Genauigkeitsmessung der Daten für Höhe, Länge und Breite.

## Fehlerbehandlung

Die Fehlercallback-Funktion, falls während des Aufrufs von `getCurrentPosition()` oder `watchPosition()` bereitgestellt, erwartet eine Instanz des Objekttyps [`GeolocationPositionError`](/de/docs/Web/API/GeolocationPositionError) als ihren ersten Parameter. Dieser Objekttyp enthält zwei Eigenschaften: `code`, der angibt, um welche Art von Fehler es sich handelt, und eine menschenlesbare `message`, die beschreibt, was der Fehlercode bedeutet.

Sie könnten ihn wie folgt verwenden:

```js
function errorCallback(error) {
  alert(`ERROR(${error.code}): ${error.message}`);
}
```

## Beispiele

Im folgenden Beispiel wird die Geolocation-API verwendet, um die Breitengrad- und Längengradposition des Benutzers abzurufen. Wenn dies erfolgreich ist, wird der verfügbare Hyperlink mit einer `openstreetmap.org`-URL gefüllt, die den Standort des Benutzers zeigt.

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
