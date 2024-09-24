---
title: "MediaDevices: devicechange Ereignis"
short-title: devicechange
slug: Web/API/MediaDevices/devicechange_event
l10n:
  sourceCommit: ee846961725e36cf7bb407afe7a2df82d2860658
---

{{APIRef("Media Capture and Streams")}}{{SecureContext_Header}}

Das **`devicechange`** Ereignis wird an eine {{domxref("MediaDevices")}} Instanz gesendet, wenn ein Mediengerät wie eine Kamera, ein Mikrofon oder ein Lautsprecher mit dem System verbunden oder davon entfernt wird.

Dieses Ereignis ist nicht abbrechbar und wird nicht weitergeleitet.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("devicechange", (event) => {});

ondevicechange = (event) => {};
```

## Ereignistyp

Ein generisches {{domxref("Event")}}.

## Beispiel

In diesem Beispiel erstellen wir eine Funktion namens `updateDeviceList()`, die einmal aufgerufen wird, wenn {{domxref("MediaDevices.getUserMedia()")}} erfolgreich einen Stream erhält, und dann, wenn sich die Geräteliste ändert. Sie zeigt im Browserfenster zwei Listen an: eine für Audiogeräte und eine für Videogeräte, jeweils mit dem Gerätenamen (Label) und ob es sich um ein Eingabe- oder Ausgabegerät handelt. Da das Beispiel einen Handler für das `devicechange` Ereignis bereitstellt, wird die Liste jedes Mal aktualisiert, wenn ein Mediengerät an das Gerät angeschlossen oder davon entfernt wird, auf dem das Beispiel ausgeführt wird.

```html hidden
<p>Klicken Sie auf die Starttaste unten, um die Demonstration zu beginnen.</p>
<div id="startButton" class="button">Start</div>
<video id="video" width="160" height="120" autoplay></video><br />

<div class="left">
  <h2>Audiogeräte:</h2>
  <ul class="deviceList" id="audioList"></ul>
</div>
<div class="right">
  <h2>Videogeräte:</h2>
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
// UI Elemente
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

Wir richten globale Variablen ein, die Referenzen auf die {{HTMLElement("ul")}} Elemente enthalten, die zur Auflistung der Audio- und Videogeräte verwendet werden:

```js
const audioList = document.getElementById("audioList");
const videoList = document.getElementById("videoList");
```

### Abrufen und Zeichnen der Geräteliste

Schauen wir uns nun `updateDeviceList()` selbst an. Diese Methode wird aufgerufen, wenn wir die aktuelle Liste der Mediengeräte abrufen und dann die angezeigten Listen der Audio- und Videogeräte mit diesen Informationen aktualisieren möchten.

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

`updateDeviceList()` besteht vollständig aus einem Aufruf der Funktion {{domxref("MediaDevices.enumerateDevices", "enumerateDevices()")}} am {{domxref("MediaDevices")}} Objekt, das in der {{domxref("navigator.mediaDevices")}} Eigenschaft referenziert wird, sowie dem Code, der ausgeführt wird, wenn das {{jsxref("promise")}}, das von `enumerateDevices()` zurückgegeben wird, erfüllt wird. Der Fulfillment-Handler wird aufgerufen, wenn die Geräteliste bereit ist. Die Liste wird als Array von {{domxref("MediaDeviceInfo")}} Objekten übergeben, die jeweils ein Medien-Ein- oder -Ausgabegerät beschreiben.

Eine {{jsxref("Array.forEach", "forEach()")}} Schleife wird verwendet, um alle Geräte zu durchsuchen. Für jedes Gerät erstellen wir ein neues {{HTMLElement("li")}} Objekt, das verwendet wird, um es dem Benutzer anzuzeigen.

Die Zeile `let [kind, type, direction] = device.kind.match(/(\w+)(input|output)/i);` verdient besondere Beachtung. Dies verwendet den [Destrukturierungszuweisung](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment), um die Werte der ersten drei Elemente im Array zuzuweisen, das von {{jsxref("String.match()")}} zurückgegeben wird, an die Variablen `kind`, `type` und `direction`. Wir tun dies, weil der Wert von {{domxref("MediaDeviceInfo.kind")}} eine einzelne Zeichenkette ist, die sowohl den Medientyp als auch die Richtung enthält, in die die Medien fließen, wie "audioinput" oder "videooutput". Diese Zeile extrahiert also den Typ ("audio" oder "video") und die Richtung ("input" oder "output"), damit sie verwendet werden können, um den in der Liste angezeigten String zu konstruieren.

Sobald der String zusammengebaut ist, der den Gerätenamen fett und die Richtung in Klammern enthält, wird er der entsprechenden Liste angefügt, indem {{domxref("Node.appendChild", "appendChild()")}} entweder auf `audioList` oder `videoList` aufgerufen wird, je nach Gerätetyp.

### Umgang mit Änderungen der Geräteliste

Wir rufen `updateDeviceList()` an zwei Stellen auf. Das erste ist im Fulfillment-Handler des {{domxref("MediaDevices.getUserMedia", "getUserMedia()")}} Promise, um die Liste beim Öffnen des Streams initial auszufüllen. Das zweite ist im Ereignishandler für dieses `devicechange` Ereignis:

```js
navigator.mediaDevices.ondevicechange = (event) => {
  updateDeviceList();
};
```

Mit diesem Code wird jedes Mal, wenn der Benutzer eine Kamera, ein Mikrofon oder ein anderes Mediengerät ansteckt oder eines ein- oder ausschaltet, `updateDeviceList()` aufgerufen, um die Liste der verbundenen Geräte neu zu zeichnen.

### Ergebnis

{{EmbedLiveSample('Example', 600, 460, "", "", "", "camera;microphone")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
