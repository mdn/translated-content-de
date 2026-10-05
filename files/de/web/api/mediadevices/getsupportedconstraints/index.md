---
title: "MediaDevices: Methode getSupportedConstraints()"
short-title: getSupportedConstraints()
slug: Web/API/MediaDevices/getSupportedConstraints
l10n:
  sourceCommit: 381fc52124e4be7d5b1bde38be75b95432f59dd7
---

{{APIRef("Media Capture and Streams")}}{{SecureContext_Header}}

Die Methode **`getSupportedConstraints()`** der Schnittstelle [`MediaDevices`](/de/docs/Web/API/MediaDevices) gibt ein Objekt zurück, dessen Eigenschaften jeweils eine der einschränkbaren Eigenschaften angeben, die der {{Glossary("user_agent", "User-Agent")}} unterstützt.

## Syntax

```js-nolint
getSupportedConstraints()
```

### Parameter

Keine.

### Rückgabewert

Ein neues Objekt, das die vom User-Agent unterstützten Constraints auflistet.
Da die Liste nur unterstützte Constraints enthält, hat jede dieser booleschen Eigenschaften den Wert `true`.
Nicht unterstützte Constraints werden ausgelassen; beim Lesen ihrer Eigenschaften wird daher {{jsxref("undefined")}} zurückgegeben.
Folgende Eigenschaften sind verfügbar:

- [`aspectRatio`](/de/docs/Web/API/MediaTrackConstraints/aspectRatio)
  - : Der User-Agent unterstützt die Einschränkung des Seitenverhältnisses (Breite geteilt durch Höhe) von Videotracks.
- [`autoGainControl`](/de/docs/Web/API/MediaTrackConstraints/autoGainControl)
  - : Der User-Agent unterstützt die Festlegung, ob die automatische Verstärkungsregelung für Audiotracks aktiviert ist.
- [`channelCount`](/de/docs/Web/API/MediaTrackConstraints/channelCount)
  - : Der User-Agent unterstützt die Einschränkung der Anzahl der Audiokanäle, beispielsweise auf einen für Mono oder zwei für Stereo.
- [`deviceId`](/de/docs/Web/API/MediaTrackConstraints/deviceId)
  - : Der User-Agent unterstützt die Auswahl einer Medienquelle anhand ihrer Geräte-ID.
- [`displaySurface`](/de/docs/Web/API/MediaTrackConstraints/displaySurface)
  - : Der User-Agent unterstützt die Angabe eines bevorzugten Typs von Anzeigefläche (Browsertab, Fenster oder Monitor) für die Bildschirmaufnahme.
- [`echoCancellation`](/de/docs/Web/API/MediaTrackConstraints/echoCancellation)
  - : Der User-Agent unterstützt die Festlegung, ob die Echounterdrückung für Audiotracks aktiviert ist.
- [`facingMode`](/de/docs/Web/API/MediaTrackConstraints/facingMode)
  - : Der User-Agent unterstützt die Angabe der Ausrichtung einer Kamera, beispielsweise zum Benutzer oder zu dessen Umgebung.
- [`frameRate`](/de/docs/Web/API/MediaTrackConstraints/frameRate)
  - : Der User-Agent unterstützt die Einschränkung der Bildrate von Videotracks in Bildern pro Sekunde.
- [`groupId`](/de/docs/Web/API/MediaTrackConstraints/groupId)
  - : Der User-Agent unterstützt die Auswahl einer Medienquelle anhand ihrer Gruppen-ID, die Quellen desselben physischen Geräts kennzeichnet.
- [`height`](/de/docs/Web/API/MediaTrackConstraints/height)
  - : Der User-Agent unterstützt die Einschränkung der Höhe von Videotracks.
- [`latency`](/de/docs/Web/API/MediaTrackConstraints/latency)
  - : Der User-Agent unterstützt die Einschränkung der Latenz von Audiotracks in Sekunden.
- [`logicalSurface`](/de/docs/Web/API/MediaTrackConstraints/logicalSurface)
  - : Der User-Agent unterstützt die Festlegung, ob für die Bildschirmaufnahme logische Anzeigeflächen verwendet werden, die möglicherweise nicht vollständig auf dem Bildschirm sichtbar sind.
- [`noiseSuppression`](/de/docs/Web/API/MediaTrackConstraints/noiseSuppression)
  - : Der User-Agent unterstützt die Festlegung, ob die Rauschunterdrückung für Audiotracks aktiviert ist.
- [`resizeMode`](/de/docs/Web/API/MediaTrackConstraints#resizemode)
  - : Der User-Agent unterstützt die Festlegung, ob Zuschneiden und Herunterskalieren verwendet werden dürfen, um Auflösung und Bildrate eines Videotracks zu erzeugen.
- [`restrictOwnAudio`](/de/docs/Web/API/MediaTrackConstraints/restrictOwnAudio) {{Experimental_Inline}}
  - : Der User-Agent unterstützt die Festlegung, ob Systemaudio, das vom aufgenommenen Tab stammt, aus der Bildschirmaufnahme herausgefiltert wird.
- [`sampleRate`](/de/docs/Web/API/MediaTrackConstraints/sampleRate)
  - : Der User-Agent unterstützt die Einschränkung der Abtastrate von Audiotracks.
- [`sampleSize`](/de/docs/Web/API/MediaTrackConstraints/sampleSize)
  - : Der User-Agent unterstützt die Einschränkung der Abtastgröße von Audiotracks in Bit pro linearem Sample.
- [`suppressLocalAudioPlayback`](/de/docs/Web/API/MediaTrackConstraints/suppressLocalAudioPlayback) {{Experimental_Inline}}
  - : Der User-Agent unterstützt die Festlegung, ob Audio, das in einem aufgenommenen Tab abgespielt wird, weiterhin über die lokalen Lautsprecher des Benutzers wiedergegeben wird.
- [`volume`](/de/docs/Web/API/MediaTrackConstraints/volume) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Der User-Agent unterstützt die Einschränkung der Lautstärke von Audiotracks von 0.0 (Stille) bis 1.0 (höchste unterstützte Lautstärke).
- [`width`](/de/docs/Web/API/MediaTrackConstraints/width)
  - : Der User-Agent unterstützt die Einschränkung der Breite von Videotracks.

## Beispiele

### Unterstützung für Constraints prüfen

Dieses Beispiel erzeugt eine Tabelle, die zeigt, ob Ihr Browser die einzelnen aufgeführten Constraints unterstützt.

#### HTML

```html
<table>
  <caption>
    Media constraint support
  </caption>
  <thead>
    <tr>
      <th scope="col">Constraint</th>
      <th scope="col">Supported</th>
    </tr>
  </thead>
  <tbody id="constraintSupport"></tbody>
</table>
```

```css hidden
body {
  font:
    15px "Arial",
    sans-serif;
}

table {
  border-collapse: collapse;
}

th,
td {
  border: 1px solid;
  padding: 0.25em 0.5em;
  text-align: left;
}
```

#### JavaScript

```js
const constraints = [
  "aspectRatio",
  "autoGainControl",
  "channelCount",
  "deviceId",
  "displaySurface",
  "echoCancellation",
  "facingMode",
  "frameRate",
  "groupId",
  "height",
  "latency",
  "logicalSurface",
  "noiseSuppression",
  "resizeMode",
  "restrictOwnAudio",
  "sampleRate",
  "sampleSize",
  "suppressLocalAudioPlayback",
  "volume",
  "width",
];
const supportedConstraints = navigator.mediaDevices.getSupportedConstraints();
const tableBody = document.querySelector("#constraintSupport");

for (const constraint of constraints) {
  const row = document.createElement("tr");
  const name = document.createElement("th");
  name.scope = "row";
  const code = document.createElement("code");
  code.textContent = constraint;
  name.appendChild(code);

  const support = document.createElement("td");
  support.textContent = supportedConstraints[constraint] ? "Yes" : "No";

  row.append(name, support);
  tableBody.appendChild(row);
}
```

#### Ergebnis

{{EmbedLiveSample("checking_constraint_support", 600, 650)}}

### Constraints vor dem Anfordern einer Bildschirmaufnahme prüfen

Die folgende Funktion bereitet das Optionsobjekt für den Aufruf von [`getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia) vor. Sie fügt die folgenden Constraints jeweils nur dann hinzu, wenn bekannt ist, dass der Browser sie unterstützt:

- `displaySurface`, um die Freigabe eines gesamten Monitors zu bevorzugen.
- `logicalSurface`, um logische Anzeigeflächen anzufordern, die möglicherweise nicht vollständig auf dem Bildschirm sichtbar sind.
- `suppressLocalAudioPlayback`, um anzufordern, dass aufgenommenes Audio nicht über die lokalen Lautsprecher des Benutzers wiedergegeben wird.

Diese Constraints schränken nicht ein, welche Anzeigeflächen der Benutzer zur Freigabe auswählen kann. Anschließend wird die Aufnahme gestartet, indem `getDisplayMedia()` aufgerufen und der zurückgegebene Stream dem durch `videoElem` repräsentierten {{htmlelement("video")}}-Element zugewiesen wird.

```js
async function capture(videoElem) {
  const supportedConstraints = navigator.mediaDevices.getSupportedConstraints();
  const displayMediaOptions = {
    video: {},
    audio: {},
  };

  if (supportedConstraints.displaySurface) {
    displayMediaOptions.video.displaySurface = "monitor";
  }

  if (supportedConstraints.logicalSurface) {
    displayMediaOptions.video.logicalSurface = true;
  }

  if (supportedConstraints.suppressLocalAudioPlayback) {
    displayMediaOptions.audio.suppressLocalAudioPlayback = true;
  }

  try {
    videoElem.srcObject =
      await navigator.mediaDevices.getDisplayMedia(displayMediaOptions);
  } catch (err) {
    /* handle the error */
  }
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
