---
title: "MediaDevices: devicechange-Ereignis"
short-title: devicechange
slug: Web/API/MediaDevices/devicechange_event
l10n:
  sourceCommit: 0abb70602b0b3b11a2909c417a03e10eabd607a8
---

{{APIRef("Media Capture and Streams")}}{{SecureContext_Header}}

Das **`devicechange`**-Ereignis wird an eine [`MediaDevices`](/de/docs/Web/API/MediaDevices)-Instanz gesendet, wenn ein Mediengerät wie eine Kamera, ein Mikrofon oder ein Lautsprecher mit dem System verbunden wird oder entfernt wird.

Dieses Ereignis kann nicht abgebrochen werden und es propagiert nicht.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("devicechange", (event) => { })

ondevicechange = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiel

In diesem Beispiel erstellen wir eine Funktion namens `updateDeviceList()`, die einmal aufgerufen wird, wenn [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) erfolgreich einen Stream erhält, und dann jedes Mal, wenn sich die Geräteliste ändert. Sie zeigt im Browserfenster zwei Listen an: eine für Audiogeräte und eine für Videogeräte, mit sowohl dem Gerätenamen (Label) als auch der Information, ob es sich um ein Ein- oder Ausgabegerät handelt. Da das Beispiel einen Handler für das `devicechange`-Ereignis bereitstellt, wird die Liste jedes Mal aktualisiert, wenn ein Mediengerät an das Gerät angeschlossen oder von diesem entfernt wird.

```html hidden
<p>Click the start button below to begin the demonstration.</p>
<div id="startButton" class="button">Start</div>
<video id="video" width="160" height="120" autoplay></video><br />

<div class="left">
  <h2>Audio devices:</h2>
  <ul class="deviceList" id="audioList"></ul>
</div>
<div class="right">
  <h2>Video devices:</h2>
  <ul class="deviceList" id="videoList"></ul>
</div>

<output></output>
```

```css hidden
body {
  font:
    14px "Open Sans",
    "Arial",
    sans-serif;
}

video {
  margin-top: 20px;
  border: 1px solid black;
}

.button {
  cursor: pointer;
  width: 160px;
  border: 1px solid black;
  font-size: 16px;
  text-align: center;
  padding-top: 2px;
  padding-bottom: 4px;
  color: white;
  background-color: darkgreen;
}

h2 {
  margin-bottom: 4px;
}

.left {
  float: left;
  width: 48%;
  margin-right: 2%;
}

.right {
  float: right;
  width: 48%;
  margin-left: 2%;
}

.deviceList {
  border: 1px solid black;
  list-style-type: none;
  margin-top: 2px;
  padding: 6px;
}
```

```js hidden
// UI elements
const videoElement = document.querySelector("#video");
const logElement = document.querySelector("output");
const startButton = document.querySelector("#startButton");

function log(msg) {
  logElement.innerText += `${msg}\n`;
}

startButton.addEventListener("click", () => {
  const constraints = {
    video: {
      width: 160,
      height: 120,
      frameRate: 30,
    },
    audio: {
      sampleRate: 44100,
      sampleSize: 16,
      volume: 0.25,
    },
  };

  navigator.mediaDevices
    .getUserMedia(constraints)
    .then((stream) => {
      videoElement.srcObject = stream;
      updateDeviceList();
    })
    .catch((err) => {
      log(`${err.name}: ${err.message}`);
    });
});
```

Wir richten globale Variablen ein, die Referenzen zu den {{HTMLElement("ul")}}-Elementen enthalten, die zur Auflistung der Audio- und Videogeräte verwendet werden:

```js
const audioList = document.getElementById("audioList");
const videoList = document.getElementById("videoList");
```

### Abrufen und Zeichnen der Geräteliste

Schauen wir uns nun `updateDeviceList()` selbst an. Diese Methode wird jedes Mal aufgerufen, wenn wir die aktuelle Liste der Mediengeräte abrufen und dann die angezeigten Listen der Audio- und Videogeräte mit diesen Informationen aktualisieren möchten.

```js
function updateDeviceList() {
  navigator.mediaDevices.enumerateDevices().then((devices) => {
    audioList.textContent = "";
    videoList.textContent = "";

    devices.forEach((device) => {
      const elem = document.createElement("li");
      const [kind, type, direction] = device.kind.match(/(\w+)(input|output)/i);

      elem.innerHTML = `<strong>${device.label}</strong> (${direction})`;
      if (type === "audio") {
        audioList.appendChild(elem);
      } else if (type === "video") {
        videoList.appendChild(elem);
      }
    });
  });
}
```

`updateDeviceList()` besteht vollständig aus einem Aufruf der Funktion [`enumerateDevices()`](/de/docs/Web/API/MediaDevices/enumerateDevices) auf dem [`MediaDevices`](/de/docs/Web/API/MediaDevices)-Objekt, das in der [`navigator.mediaDevices`](/de/docs/Web/API/Navigator/mediaDevices)-Eigenschaft referenziert wird, sowie dem Code, der ausgeführt wird, wenn das {{jsxref("Promise")}}, das von `enumerateDevices()` zurückgegeben wird, erfüllt wird. Der Erfüllungs-Handler wird aufgerufen, wenn die Geräteliste bereit ist. Die Liste wird dem Erfüllungs-Handler als Array von [`MediaDeviceInfo`](/de/docs/Web/API/MediaDeviceInfo)-Objekten übergeben, die jeweils ein Medien-Eingabe- oder -Ausgabegerät beschreiben.

Eine {{jsxref("Array.forEach", "forEach()")}}-Schleife wird verwendet, um alle Geräte zu durchsuchen. Für jedes Gerät erstellen wir ein neues {{HTMLElement("li")}}-Objekt, das zur Anzeige für den Benutzer verwendet wird.

Die Zeile `let [kind, type, direction] = device.kind.match(/(\w+)(input|output)/i);` verdient besondere Beachtung. Diese verwendet [Destructuring-Zuweisung](/de/docs/Web/JavaScript/Reference/Operators/Destructuring), um die Werte der ersten drei Elemente des Arrays, das von {{jsxref("String.match()")}} zurückgegeben wird, den Variablen `kind`, `type` und `direction` zuzuweisen. Wir tun dies, weil der Wert von [`MediaDeviceInfo.kind`](/de/docs/Web/API/MediaDeviceInfo/kind) ein einzelner String ist, der sowohl den Medientyp als auch die Richtung, in der die Medien fließen, enthält, wie z.B. "audioinput" oder "videooutput". Diese Zeile extrahiert also den Typ ("audio" oder "video") und die Richtung ("input" oder "output"), damit sie zur Erstellung des im Verzeichnis angezeigten Strings verwendet werden können.

Sobald der String zusammengesetzt ist, der den Gerätenamen fett und die Richtung in Klammern enthält, wird er durch Aufrufen von [`appendChild()`](/de/docs/Web/API/Node/appendChild) entweder an `audioList` oder `videoList` angehängt, je nach Gerätetyp.

### Umgang mit Änderungen der Geräteliste

Wir rufen `updateDeviceList()` an zwei Stellen auf. Die erste ist im Erfüllungs-Handler des [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia)-Promises, um die Liste zu füllen, wenn der Stream geöffnet wird. Die zweite ist im Ereignishandler für dieses `devicechange`-Ereignis:

```js
navigator.mediaDevices.ondevicechange = (event) => {
  updateDeviceList();
};
```

Mit diesem Code wird jedes Mal, wenn der Benutzer eine Kamera, ein Mikrofon oder ein anderes Mediengerät anschließt oder eines ein- oder ausschaltet, `updateDeviceList()` aufgerufen, um die Liste der verbundenen Geräte neu zu zeichnen.

### Ergebnis

{{ EmbedLiveSample('Example', 600, 460, "", "", "", "camera;microphone") }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
