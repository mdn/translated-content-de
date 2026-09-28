---
title: "MediaDevices: Methode getSupportedConstraints()"
short-title: getSupportedConstraints()
slug: Web/API/MediaDevices/getSupportedConstraints
l10n:
  sourceCommit: a5b8c78d6a38dda4194bec70cb82e5bf646178e7
---

{{APIRef("Media Capture and Streams")}}{{SecureContext_Header}}

Die Methode **`getSupportedConstraints()`** des Interfaces [`MediaDevices`](/de/docs/Web/API/MediaDevices) gibt ein Objekt zurück, dessen Eigenschaften jeweils eine der einschränkbaren Eigenschaften angeben, die der {{Glossary("user_agent", "User Agent")}} kennt.

## Syntax

```js-nolint
getSupportedConstraints()
```

### Parameter

Keine.

### Rückgabewert

Ein neues Objekt mit den vom User Agent unterstützten Constraints.
Da die Liste nur unterstützte Constraints enthält, hat jede dieser booleschen Eigenschaften den Wert `true`.
Nicht unterstützte Constraints fehlen in der Liste; beim Lesen ihrer Eigenschaften wird daher {{jsxref("undefined")}} zurückgegeben.
Die verfügbaren Eigenschaften sind:

- [`aspectRatio`](/de/docs/Web/API/MediaTrackConstraints/aspectRatio)
  - : Der User Agent unterstützt das Einschränken des Seitenverhältnisses (Breite geteilt durch Höhe) von Videospuren.
- [`autoGainControl`](/de/docs/Web/API/MediaTrackConstraints/autoGainControl)
  - : Der User Agent unterstützt die Angabe, ob die automatische Verstärkungsregelung für Audiospuren aktiviert ist.
- [`channelCount`](/de/docs/Web/API/MediaTrackConstraints/channelCount)
  - : Der User Agent unterstützt das Einschränken der Anzahl der Audiokanäle, beispielsweise auf einen Kanal für Mono oder zwei für Stereo.
- [`deviceId`](/de/docs/Web/API/MediaTrackConstraints/deviceId)
  - : Der User Agent unterstützt die Auswahl einer Medienquelle anhand ihrer Geräte-ID.
- [`displaySurface`](/de/docs/Web/API/MediaTrackConstraints/displaySurface)
  - : Der User Agent unterstützt die Angabe eines bevorzugten Typs von Anzeigefläche (Browser-Tab, Fenster oder Monitor) für die Bildschirmaufnahme.
- [`echoCancellation`](/de/docs/Web/API/MediaTrackConstraints/echoCancellation)
  - : Der User Agent unterstützt die Angabe, ob die Echounterdrückung für Audiospuren aktiviert ist.
- [`facingMode`](/de/docs/Web/API/MediaTrackConstraints/facingMode)
  - : Der User Agent unterstützt die Angabe der Ausrichtung einer Kamera, beispielsweise zum Benutzer oder zu dessen Umgebung.
- [`frameRate`](/de/docs/Web/API/MediaTrackConstraints/frameRate)
  - : Der User Agent unterstützt das Einschränken der Bildrate von Videospuren in Bildern pro Sekunde.
- [`groupId`](/de/docs/Web/API/MediaTrackConstraints/groupId)
  - : Der User Agent unterstützt die Auswahl einer Medienquelle anhand ihrer Gruppen-ID, die Quellen desselben physischen Geräts kennzeichnet.
- [`height`](/de/docs/Web/API/MediaTrackConstraints/height)
  - : Der User Agent unterstützt das Einschränken der Höhe von Videospuren.
- [`latency`](/de/docs/Web/API/MediaTrackConstraints/latency)
  - : Der User Agent unterstützt das Einschränken der Latenz von Audiospuren in Sekunden.
- [`logicalSurface`](/de/docs/Web/API/MediaTrackConstraints/logicalSurface)
  - : Der User Agent unterstützt die Angabe, ob bei der Bildschirmaufnahme logische Anzeigeflächen verwendet werden, die auf dem Bildschirm möglicherweise nicht vollständig sichtbar sind.
- [`noiseSuppression`](/de/docs/Web/API/MediaTrackConstraints/noiseSuppression)
  - : Der User Agent unterstützt die Angabe, ob die Rauschunterdrückung für Audiospuren aktiviert ist.
- [`resizeMode`](/de/docs/Web/API/MediaTrackConstraints#resizemode)
  - : Der User Agent unterstützt die Angabe, ob Zuschneiden und Herunterskalieren verwendet werden dürfen, um Auflösung und Bildrate einer Videospur zu bestimmen.
- [`restrictOwnAudio`](/de/docs/Web/API/MediaTrackConstraints/restrictOwnAudio) {{Experimental_Inline}}
  - : Der User Agent unterstützt die Angabe, ob Systemaudio, das vom aufzeichnenden Tab stammt, aus der Bildschirmaufnahme herausgefiltert wird.
- [`sampleRate`](/de/docs/Web/API/MediaTrackConstraints/sampleRate)
  - : Der User Agent unterstützt das Einschränken der Abtastrate von Audiospuren.
- [`sampleSize`](/de/docs/Web/API/MediaTrackConstraints/sampleSize)
  - : Der User Agent unterstützt das Einschränken der Abtastgröße von Audiospuren in Bit pro linearem Abtastwert.
- [`suppressLocalAudioPlayback`](/de/docs/Web/API/MediaTrackConstraints/suppressLocalAudioPlayback) {{Experimental_Inline}}
  - : Der User Agent unterstützt die Angabe, ob Audio, das in einem aufgezeichneten Tab abgespielt wird, weiterhin über die lokalen Lautsprecher des Benutzers wiedergegeben wird.
- [`volume`](/de/docs/Web/API/MediaTrackConstraints/volume) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Der User Agent unterstützt das Einschränken der Lautstärke von Audiospuren von 0.0 (Stille) bis 1.0 (höchste unterstützte Lautstärke).
- [`width`](/de/docs/Web/API/MediaTrackConstraints/width)
  - : Der User Agent unterstützt das Einschränken der Breite von Videospuren.

## Beispiele

### Unterstützung für Constraints prüfen

Dieses Beispiel erzeugt eine Tabelle, die zeigt, ob Ihr Browser die jeweils aufgeführten Constraints unterstützt.

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

Die folgende Funktion richtet das Optionsobjekt für den Aufruf von [`getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia) ein. Sie fügt jeden der folgenden Constraints nur hinzu, wenn bekannt ist, dass der Browser ihn unterstützt:

- `displaySurface`, um die Freigabe eines gesamten Monitors zu bevorzugen.
- `logicalSurface`, um logische Anzeigeflächen anzufordern, die auf dem Bildschirm möglicherweise nicht vollständig sichtbar sind.
- `suppressLocalAudioPlayback`, um zu bewirken, dass aufgezeichnetes Audio nicht über die lokalen Lautsprecher des Benutzers wiedergegeben wird.

Diese Constraints schränken nicht ein, welche Anzeigeflächen der Benutzer für die Freigabe auswählen kann. Anschließend wird die Aufnahme gestartet, indem `getDisplayMedia()` aufgerufen und der zurückgegebene Stream dem durch `videoElem` repräsentierten Element {{(htmlelement("video")}} zugewiesen wird.

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
