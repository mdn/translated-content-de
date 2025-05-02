---
title: "MediaDevices: devicechange Ereignis"
short-title: devicechange
slug: Web/API/MediaDevices/devicechange_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("Media Capture and Streams")}}{{SecureContext_Header}}

Das **`devicechange`**-Ereignis wird an eine [`MediaDevices`](/de/docs/Web/API/MediaDevices)-Instanz gesendet, sobald ein Mediengerät wie eine Kamera, ein Mikrofon oder ein Lautsprecher mit dem System verbunden oder vom System getrennt wird.

Dieses Ereignis ist nicht abbrechbar und löst keine Bubbling-Effekte aus.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("devicechange", (event) => { })

ondevicechange = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiel

In diesem Beispiel erstellen wir eine Funktion namens `updateDeviceList()`, die einmal aufgerufen wird, wenn [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) erfolgreich einen Stream erhält, und wird dann immer aufgerufen, wenn sich die Geräteliste ändert. Sie zeigt im Browserfenster zwei Listen an: eine mit Audiogeräten und eine mit Videogeräten, jeweils mit dem Gerätenamen (Label) und der Angabe, ob es sich um ein Eingangs- oder Ausgangsgerät handelt. Da das Beispiel einen Handler für das `devicechange`-Ereignis bereitstellt, wird die Liste aktualisiert, sobald ein Mediengerät an das Gerät angeschlossen wird oder davon entfernt wird, auf dem das Beispiel läuft.

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

startButton.addEventListener(
  "click",
  () => {
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
  },
  false,
);
```

Wir richten globale Variablen ein, die Referenzen zu den {{HTMLElement("ul")}}-Elementen enthalten, die verwendet werden, um die Audio- und Videogeräte aufzulisten:

```js
const audioList = document.getElementById("audioList");
const videoList = document.getElementById("videoList");
```

### Abrufen und Zeichnen der Geräteliste

Sehen wir uns nun `updateDeviceList()` selbst an. Diese Methode wird jedes Mal aufgerufen, wenn wir die aktuelle Liste der Mediengeräte abrufen wollen und dann die angezeigten Listen der Audio- und Videogeräte mit diesen Informationen aktualisieren wollen.

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

`updateDeviceList()` besteht vollständig aus einem Aufruf der Funktion [`enumerateDevices()`](/de/docs/Web/API/MediaDevices/enumerateDevices) auf dem [`MediaDevices`](/de/docs/Web/API/MediaDevices)-Objekt, das in der [`navigator.mediaDevices`](/de/docs/Web/API/Navigator/mediaDevices)-Eigenschaft referenziert ist, sowie dem Code, der ausgeführt wird, wenn das {{jsxref("promise")}}, das von `enumerateDevices()` zurückgegeben wird, erfüllt wird. Der Fulfillment-Handler wird aufgerufen, wenn die Geräteliste bereit ist. Die Liste wird in den Fulfillment-Handler als ein Array von [`MediaDeviceInfo`](/de/docs/Web/API/MediaDeviceInfo)-Objekten übergeben, die jeweils ein Ein- oder Ausgabegerät beschreiben.

Eine {{jsxref("Array.forEach", "forEach()")}}-Schleife wird verwendet, um alle Geräte zu durchsuchen. Für jedes Gerät erstellen wir ein neues {{HTMLElement("li")}}-Objekt, das verwendet wird, um es dem Benutzer anzuzeigen.

Die Zeile `let [kind, type, direction] = device.kind.match(/(\w+)(input|output)/i);` verdient besondere Beachtung. Dies nutzt [Destructuring Assignment](/de/docs/Web/JavaScript/Reference/Operators/Destructuring), um die Werte der ersten drei Einträge im Array, das von {{jsxref("String.match()")}} zurückgegeben wird, den Variablen `kind`, `type` und `direction` zuzuweisen. Dies machen wir, weil der Wert von [`MediaDeviceInfo.kind`](/de/docs/Web/API/MediaDeviceInfo/kind) ein einzelner String ist, der sowohl den Medientyp als auch die Richtung enthält, in die die Medien fließen, wie "audioinput" oder "videooutput". Diese Zeile extrahiert dann den Typ ("audio" oder "video") und die Richtung ("input" oder "output"), sodass sie verwendet werden können, um die in der Liste angezeigte Zeichenfolge zu erstellen.

Sobald die Zeichenfolge erstellt ist, die den Gerätenamen in Fettdruck und die Richtung in Klammern enthält, wird sie durch Aufrufen von [`appendChild()`](/de/docs/Web/API/Node/appendChild) der passenden Liste (`audioList` oder `videoList`, je nach Gerätetyp) hinzugefügt.

### Umgang mit Änderungen der Geräteliste

Wir nennen `updateDeviceList()` an zwei Stellen. Die erste befindet sich im Fulfillment-Handler des [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia)-Promises, um die Liste initial zu füllen, wenn der Stream geöffnet wird. Der zweite ist im Ereignishandler für dieses `devicechange`-Ereignis:

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
