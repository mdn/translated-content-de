---
title: "MediaDevices: devicechange-Ereignis"
short-title: devicechange
slug: Web/API/MediaDevices/devicechange_event
l10n:
  sourceCommit: 2f34ca590baf2d5447d42fc79002a70b9cb65e73
---

{{APIRef("Media Capture and Streams")}}{{SecureContext_Header}}

Das Ereignis **`devicechange`** wird an eine [`MediaDevices`](/de/docs/Web/API/MediaDevices)-Instanz gesendet, wenn ein Mediengerät wie eine Kamera, ein Mikrofon oder ein Lautsprecher mit dem System verbunden oder vom System entfernt wird.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht weitergereicht.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("devicechange", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
ondevicechange = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiel

In diesem Beispiel erstellen wir eine Funktion namens `updateDeviceList()`. Sie wird einmal aufgerufen, wenn [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) erfolgreich einen Stream abruft, und danach jedes Mal, wenn sich die Geräteliste ändert. Im Browserfenster zeigt sie zwei Listen an: eine mit Audiogeräten und eine mit Videogeräten. Beide Listen enthalten die Bezeichnung (den Namen) jedes Geräts sowie die Angabe, ob es sich um ein Eingabe- oder Ausgabegerät handelt. Da das Beispiel einen Handler für das Ereignis `devicechange` bereitstellt, wird die Liste jedes Mal aktualisiert, wenn ein Mediengerät mit dem Gerät verbunden oder von dem Gerät entfernt wird, auf dem das Beispiel ausgeführt wird.

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

Wir legen globale Variablen an, die Referenzen auf die {{HTMLElement("ul")}}-Elemente enthalten, in denen die Audio- und Videogeräte aufgelistet werden:

```js
const audioList = document.getElementById("audioList");
const videoList = document.getElementById("videoList");
```

### Geräteliste abrufen und anzeigen

Sehen wir uns nun `updateDeviceList()` selbst an. Diese Methode wird immer dann aufgerufen, wenn wir die aktuelle Liste der Mediengeräte abrufen und damit die angezeigten Listen der Audio- und Videogeräte aktualisieren möchten.

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

`updateDeviceList()` besteht vollständig aus einem Aufruf der Funktion [`enumerateDevices()`](/de/docs/Web/API/MediaDevices/enumerateDevices) auf dem [`MediaDevices`](/de/docs/Web/API/MediaDevices)-Objekt, auf das die Eigenschaft [`navigator.mediaDevices`](/de/docs/Web/API/Navigator/mediaDevices) verweist, sowie aus dem Code, der ausgeführt wird, wenn das von `enumerateDevices()` zurückgegebene {{jsxref("Promise")}} erfüllt wird. Der Handler für die Erfüllung wird aufgerufen, sobald die Geräteliste bereitsteht. Die Liste wird dem Handler als Array von [`MediaDeviceInfo`](/de/docs/Web/API/MediaDeviceInfo)-Objekten übergeben, von denen jedes ein Medien-Eingabe- oder -Ausgabegerät beschreibt.

Eine {{jsxref("Array.forEach", "forEach()")}}-Schleife durchläuft alle Geräte. Für jedes Gerät erstellen wir ein neues {{HTMLElement("li")}}-Objekt, um es den Nutzern anzuzeigen.

Die Zeile
`let [kind, type, direction] = device.kind.match(/(\w+)(input|output)/i);`
verdient besondere Aufmerksamkeit. Sie verwendet eine [destrukturierende Zuweisung](/de/docs/Web/JavaScript/Reference/Operators/Destructuring), um die Werte der ersten drei Elemente des von {{jsxref("String.match()")}} zurückgegebenen Arrays den Variablen `kind`, `type` und `direction` zuzuweisen. Das ist nötig, weil der Wert von [`MediaDeviceInfo.kind`](/de/docs/Web/API/MediaDeviceInfo/kind) ein einzelner String ist, der sowohl den Medientyp als auch die Richtung des Medienflusses enthält, beispielsweise „audioinput“ oder „videooutput“. Die Zeile extrahiert also den Typ („audio“ oder „video“) und die Richtung („input“ oder „output“), damit daraus der in der Liste angezeigte String erstellt werden kann.

Sobald der String mit dem fett formatierten Gerätenamen und der Richtung in Klammern erstellt ist, wird er der passenden Liste hinzugefügt. Dazu wird je nach Gerätetyp [`appendChild()`](/de/docs/Web/API/Node/appendChild) auf `audioList` oder `videoList` aufgerufen.

### Änderungen an der Geräteliste behandeln

Wir rufen `updateDeviceList()` an zwei Stellen auf: zunächst im Handler für die Erfüllung des von [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) zurückgegebenen Promise, um die Liste beim Öffnen des Streams erstmalig zu füllen. Der zweite Aufruf erfolgt im Event-Handler für das Ereignis `devicechange`:

```js
navigator.mediaDevices.ondevicechange = (event) => {
  updateDeviceList();
};
```

Mit diesem Code rufen wir jedes Mal `updateDeviceList()` auf, wenn ein Nutzer eine Kamera, ein Mikrofon oder ein anderes Mediengerät anschließt oder ein Gerät ein- oder ausschaltet. So wird die Liste der verbundenen Geräte neu angezeigt.

### Ergebnis

{{ EmbedLiveSample('Example', 600, 460, "", "", "", "camera;microphone") }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
