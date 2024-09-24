---
title: Verwendung der Geolocation-API
slug: Web/API/Geolocation_API/Using_the_Geolocation_API
l10n:
  sourceCommit: d8f04d843dd81ab8cea1cfc0577ae3c5c9b77d5c
---

{{securecontext_header}}{{DefaultAPISidebar("Geolocation API")}}

Die Geolocation-API wird verwendet, um den Standort des Benutzers zu ermitteln, sodass er beispielsweise mit einer Mapping-API auf einer Karte angezeigt werden kann. Dieser Artikel erklärt die Grundlagen ihrer Verwendung.

## Das Geolokalisierungsobjekt

Die [Geolocation-API](/de/docs/Web/API/Geolocation) ist über das {{domxref("navigator.geolocation")}}-Objekt verfügbar.

Wenn das Objekt existiert, sind Geolokalisierungsdienste verfügbar. Sie können die Verfügbarkeit der Geolocation folgendermaßen prüfen:

```js
if ("geolocation" in navigator) {
  /* Geolocation ist verfügbar */
} else {
  /* Geolocation ist NICHT verfügbar */
}
```

### Erhalten der aktuellen Position

Um die aktuelle Position des Benutzers zu erhalten, können Sie die Methode {{domxref("Geolocation.getCurrentPosition","getCurrentPosition()")}} aufrufen. Dies initiiert eine asynchrone Anfrage, um die Position des Benutzers zu erfassen, und fragt die Positionierungshardware ab, um aktuelle Informationen zu erhalten. Sobald die Position bestimmt ist, wird die definierte Callback-Funktion ausgeführt. Sie können optional eine zweite Callback-Funktion bereitstellen, die ausgeführt wird, wenn ein Fehler auftritt. Ein dritter, optionaler Parameter ist ein Optionsobjekt, in dem Sie das maximale Alter der zurückgegebenen Position, die Wartezeit für eine Anfrage und die gewünschte Genauigkeit der Position festlegen können.

> [!NOTE]
> Standardmäßig versucht {{domxref("Geolocation.getCurrentPosition","getCurrentPosition()")}}, so schnell wie möglich mit einem Ergebnis von geringer Genauigkeit zu antworten. Dies ist nützlich, wenn Sie eine schnelle Antwort unabhängig von der Genauigkeit benötigen. Geräte mit GPS können beispielsweise eine Minute oder länger benötigen, um einen GPS-Fix zu erhalten, daher können weniger genaue Daten (über IP-Standort oder WLAN) an `getCurrentPosition()` zurückgegeben werden.

```js
navigator.geolocation.getCurrentPosition((position) => {
  doSomething(position.coords.latitude, position.coords.longitude);
});
```

Das obige Beispiel führt dazu, dass die Funktion `doSomething()` ausgeführt wird, wenn der Standort ermittelt wurde.

### Beobachten der aktuellen Position

Wenn sich die Positionsdaten ändern (entweder durch Bewegung des Geräts oder wenn genauere Geo-Informationen eintreffen), können Sie eine Callback-Funktion einrichten, die mit den aktualisierten Positionsinformationen aufgerufen wird. Dies geschieht mit der Funktion {{domxref("Geolocation.watchPosition","watchPosition()")}}, die die gleichen Eingabeparameter wie {{domxref("Geolocation.getCurrentPosition","getCurrentPosition()")}} hat. Die Callback-Funktion wird mehrmals aufgerufen, sodass der Browser entweder Ihren Standort aktualisieren kann, während Sie sich bewegen, oder einen genaueren Standort bereitstellt, wenn verschiedene Techniken zur Geolokalisierung verwendet werden. Die Fehler-Callback-Funktion, die optional ist, genau wie bei `getCurrentPosition()`, kann wiederholt aufgerufen werden.

> [!NOTE]
> Sie können {{domxref("Geolocation.watchPosition","watchPosition()")}} ohne einen initialen Aufruf von {{domxref("Geolocation.getCurrentPosition","getCurrentPosition()")}} verwenden.

```js
const watchID = navigator.geolocation.watchPosition((position) => {
  doSomething(position.coords.latitude, position.coords.longitude);
});
```

Die Methode {{domxref("Geolocation.watchPosition","watchPosition()")}} gibt eine ID-Nummer zurück, die verwendet werden kann, um den angeforderten Positionsüberwacher eindeutig zu identifizieren; Sie verwenden diesen Wert zusammen mit der Methode {{domxref("Geolocation.clearWatch","clearWatch()")}}, um das Überwachen des Benutzerstandorts zu beenden.

```js
navigator.geolocation.clearWatch(watchID);
```

### Feinabstimmung der Antwort

Sowohl {{domxref("Geolocation.getCurrentPosition","getCurrentPosition()")}} als auch {{domxref("Geolocation.watchPosition","watchPosition()")}} akzeptieren einen Erfolgs-Callback, einen optionalen Fehler-Callback und ein optionales Optionsobjekt.

Dieses Objekt erlaubt Ihnen festzulegen, ob hohe Genauigkeit aktiviert werden soll, ein maximales Alter für den zurückgegebenen Positionswert (bis zu diesem Alter wird er zwischengespeichert und wiederverwendet, wenn dieselbe Position erneut angefordert wird; danach fordert der Browser frische Positionsdaten an), und einen Timeout-Wert, der bestimmt, wie lange der Browser versuchen sollte, die Positionsdaten zu erfassen, bevor er abbricht.

Ein Aufruf von {{domxref("Geolocation.watchPosition","watchPosition")}} könnte folgendermaßen aussehen:

```js
function success(position) {
  doSomething(position.coords.latitude, position.coords.longitude);
}

function error() {
  alert("Entschuldigung, keine Position verfügbar.");
}

const options = {
  enableHighAccuracy: true,
  maximumAge: 30000,
  timeout: 27000,
};

const watchID = navigator.geolocation.watchPosition(success, error, options);
```

## Beschreibung einer Position

Der Standort des Benutzers wird unter Verwendung einer Instanz des Objekts {{domxref("GeolocationPosition")}}, das selbst eine Instanz des Objekts {{domxref("GeolocationCoordinates")}} enthält, beschrieben.

Die `GeolocationPosition`-Instanz enthält nur zwei Dinge: eine `coords`-Eigenschaft, die die `GeolocationCoordinates`-Instanz enthält, und eine `timestamp`-Eigenschaft, die einen Zeitstempel enthält, angegeben in {{Glossary("Unix time")}} in Millisekunden, zu dem die Positionsdaten abgerufen wurden.

Die `GeolocationCoordinates`-Instanz umfasst eine Reihe von Eigenschaften, aber die beiden, die Sie am häufigsten verwenden, sind `latitude` und `longitude`, die Sie benötigen, um Ihre Position auf einer Karte darzustellen. Daher sehen viele erfolgreiche Geolokalisierungs-Callbacks ziemlich einfach aus:

```js
function success(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;

  // Machen Sie etwas mit Ihrer Breite und Länge
}
```

Sie können jedoch auch noch eine Reihe weiterer Informationen aus einem `GeolocationCoordinates`-Objekt erhalten, einschließlich Höhe, Geschwindigkeit, in welche Richtung das Gerät weist und ein Genauigkeitsmaß für die Höhe, Länge und Breitendaten.

## Fehlerbehandlung

Die Fehler-Callback-Funktion, sofern sie beim Aufruf von `getCurrentPosition()` oder `watchPosition()` bereitgestellt wird, erwartet eine Instanz des Objekttyps [`GeolocationPositionError`](/de/docs/Web/API/GeolocationPositionError) als ersten Parameter. Dieser Objekttyp enthält zwei Eigenschaften: einen `code`, der anzeigt, welche Art von Fehler zurückgegeben wurde, und eine lesbare `message`, die beschreibt, was der Fehlercode bedeutet.

Sie könnten es folgendermaßen verwenden:

```js
function errorCallback(error) {
  alert(`ERROR(${error.code}): ${error.message}`);
}
```

## Beispiele

Im folgenden Beispiel wird die Geolocation-API verwendet, um die Breite und Länge des Benutzers abzurufen. Bei Erfolg wird der verfügbare Hyperlink mit einer `openstreetmap.org`-URL gefüllt, die den Standort des Benutzers anzeigt.

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
