---
title: "MediaDevices: devicechange Ereignis"
short-title: devicechange
slug: Web/API/MediaDevices/devicechange_event
l10n:
  sourceCommit: ee846961725e36cf7bb407afe7a2df82d2860658
---

{{APIRef("Media Capture and Streams")}}{{SecureContext_Header}}

Das **`devicechange`** Ereignis wird an eine [`MediaDevices`](/de/docs/Web/API/MediaDevices) Instanz gesendet, wenn ein Mediengerät wie eine Kamera, ein Mikrofon oder ein Lautsprecher mit dem System verbunden oder davon entfernt wird.

Dieses Ereignis ist nicht abbruchsicher und wird nicht weitergeleitet.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("devicechange", (event) => {});

ondevicechange = (event) => {};
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiel

In diesem Beispiel erstellen wir eine Funktion namens `updateDeviceList()`, die einmal aufgerufen wird, wenn [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) erfolgreich einen Stream erhält, und dann jedes Mal aufgerufen wird, wenn sich die Geräteliste ändert. Es werden im Browserfenster zwei Listen angezeigt: eine für Audiogeräte und eine für Videogeräte, jeweils mit dem Gerätenamen (Label) und der Angabe, ob es sich um ein Eingabe- oder Ausgabegerät handelt. Da das Beispiel einen Handler für das `devicechange` Ereignis bereitstellt, wird die Liste jedes Mal aktualisiert, wenn ein Mediengerät an das Gerät angeschlossen oder davon entfernt wird, auf dem das Beispiel läuft.

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

Wir richten globale Variablen ein, die Referenzen zu den {{HTMLElement("ul")}} Elementen enthalten, die zur Auflistung der Audio- und Videogeräte verwendet werden:

```js
const audioList = document.getElementById("audioList");
const videoList = document.getElementById("videoList");
```

### Abrufen und Zeichnen der Geräteliste

Sehen wir uns nun `updateDeviceList()` selbst an. Diese Methode wird jedes Mal aufgerufen, wenn wir die aktuelle Liste der Mediengeräte abrufen und dann die angezeigten Listen der Audio- und Videogeräte mit diesen Informationen aktualisieren möchten.

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

`updateDeviceList()` besteht vollständig aus einem Aufruf der Funktion
[`enumerateDevices()`](/de/docs/Web/API/MediaDevices/enumerateDevices) auf dem
[`MediaDevices`](/de/docs/Web/API/MediaDevices) Objekt, das in der
[`navigator.mediaDevices`](/de/docs/Web/API/Navigator/mediaDevices) Eigenschaft referenziert wird, sowie dem Code, der ausgeführt wird, wenn der
{{jsxref("promise")}} zurückgegeben von `enumerateDevices()` erfüllt wird. Der
Erfüllungs-Handler wird aufgerufen, wenn die Geräteliste bereit ist. Die Liste wird als Array von [`MediaDeviceInfo`](/de/docs/Web/API/MediaDeviceInfo) Objekten in den Erfüllungs-Handler übergeben, wobei jedes eine Medien-Ein- oder -Ausgabegerät beschreibt.

Eine {{jsxref("Array.forEach", "forEach()")}} Schleife wird verwendet, um alle
Geräte zu durchsuchen. Für jedes Gerät erstellen wir ein neues {{HTMLElement("li")}} Objekt, das dem Benutzer angezeigt wird.

Die Zeile
`let [kind, type, direction] = device.kind.match(/(\w+)(input|output)/i);`
verdient besondere Beachtung. Diese nutzt [Destructuring Assignment](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment), um die Werte der ersten drei Elemente des Arrays, das von {{jsxref("String.match()")}} zurückgegeben wird, den Variablen `kind`, `type` und `direction` zuzuweisen. Wir machen dies, weil der Wert von
[`MediaDeviceInfo.kind`](/de/docs/Web/API/MediaDeviceInfo/kind) ein einzelner String ist, der sowohl den Medientyp als auch die Richtung, in die die Medien fließen, umfasst, wie beispielsweise "audioinput" oder "videooutput". Diese Zeile zieht dann den Typ ("audio" oder "video") und die Richtung ("input" oder "output") heraus, um die Zeichenkette zu konstruieren, die in der Liste angezeigt wird.

Sobald die Zeichenkette zusammengefügt ist, die den Gerätenamen in Fettschrift und die Richtung in Klammern enthält, wird sie durch Aufruf von [`appendChild()`](/de/docs/Web/API/Node/appendChild) zur entsprechenden Liste hinzugefügt, entweder `audioList` oder `videoList`, je nach Gerätetyp.

### Umgang mit Änderungen der Geräteliste

Wir rufen `updateDeviceList()` an zwei Stellen auf. Die erste ist im
[`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) Promise-Erfüllungs-Handler, um die Liste beim Öffnen des Streams initial auszufüllen. Die zweite ist im
Ereignis-Handler für dieses `devicechange` Ereignis:

```js
navigator.mediaDevices.ondevicechange = (event) => {
  updateDeviceList();
};
```

Mit diesem Code wird jedes Mal, wenn der Benutzer eine Kamera, ein Mikrofon oder ein anderes
Mediengerät anschließt oder ein- oder ausschaltet, `updateDeviceList()` aufgerufen, um die Liste der angeschlossenen Geräte neu zu zeichnen.

### Ergebnis

{{ EmbedLiveSample('Example', 600, 460, "", "", "", "camera;microphone") }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
