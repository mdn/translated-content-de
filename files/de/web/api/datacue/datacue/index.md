---
title: "DataCue: DataCue() Konstruktor"
short-title: DataCue()
slug: Web/API/DataCue/DataCue
l10n:
  sourceCommit: fb241f60d2c42614b106f3b4647cc6a4eb2e1bc8
---

{{APIRef("WebVTT")}}{{SeeCompatTable}}

Der **`DataCue()`** Konstruktor erstellt und gibt ein neues [`DataCue`](/de/docs/Web/API/DataCue)-Objekt zurück, das eine zeitgesteuerte Metadaten-Markierung über einen bestimmten Zeitraum darstellt. Die resultierende Markierung kann mit [`TextTrack.addCue()`](/de/docs/Web/API/TextTrack/addCue) zu einem Metadaten-`TextTrack` hinzugefügt werden, wodurch beliebige Daten mit der Audio- oder Video-Wiedergabe synchronisiert werden können.

## Syntax

```js-nolint
new DataCue(startTime, endTime, value)
new DataCue(startTime, endTime, value, type)
```

### Parameter

- `startTime`
  - : Eine Zahl, die die Startzeit der Zeitspanne der Markierung in Sekunden darstellt. Dies entspricht dem Punkt auf der Medientimeline, an dem die Markierung aktiv wird und ihr [`enter`](/de/docs/Web/API/TextTrackCue/enter_event) Ereignis ausgelöst wird.
- `endTime`
  - : Eine Zahl, die die Endzeit der Zeitspanne der Markierung in Sekunden darstellt. Wenn die Medienwiedergabe diese Zeit erreicht, wird das [`exit`](/de/docs/Web/API/TextTrackCue/exit_event) Ereignis der Markierung ausgelöst. Verwenden Sie `Infinity` für eine Markierung, die bis zum Ende des Mediums aktiv bleibt.
- `value`
  - : Die mit der Markierung verknüpften Nutzdaten. Diese können jede Art von Daten sein, wie ein String, ein JavaScript-Objekt oder ein {{jsxref("ArrayBuffer")}}. Der Wert wird in der [`value`](/de/docs/Web/API/DataCue/value) Eigenschaft der Markierung gespeichert.
- `type` {{optional_inline}}
  - : Ein String, der den Typ oder das Schema der Daten in `value` identifiziert. Üblicherweise handelt es sich dabei um einen umgekehrten Domain-Notation-String (z.B. `"org.id3"`, `"org.mp4ra"`). Der Wert wird in der [`type`](/de/docs/Web/API/DataCue/type) Eigenschaft der Markierung gespeichert und ist standardmäßig ein leerer String, wenn nicht angegeben.

### Rückgabewert

Ein neues [`DataCue`](/de/docs/Web/API/DataCue)-Objekt.

## Beispiele

### Erstellen eines DataCue mit Geolokationsdaten

Dieses Beispiel erstellt ein `DataCue`, das Geolokationskoordinaten trägt, wobei ein umgekehrter Domain-String als `type` verwendet wird, um das Datenformat zu identifizieren.

```html
<video controls src="video.mp4"></video>
```

```js
const video = document.querySelector("video");
const track = video.addTextTrack("metadata", "Geo Track");
track.mode = "hidden";

// Create a cue from 5 seconds to the end of the media
const data = { latitude: 51.5043, longitude: -0.0762 };
const cue = new DataCue(5.0, Infinity, data, "org.example.geo");

cue.addEventListener("enter", (e) => {
  const { latitude, longitude } = e.target.value;
  console.log(`Pan map to: ${latitude}, ${longitude}`);
});

track.addCue(cue);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`DataCue`](/de/docs/Web/API/DataCue)
- [`TextTrack`](/de/docs/Web/API/TextTrack)
- [`TextTrack.addCue()`](/de/docs/Web/API/TextTrack/addCue)
- [`enter`](/de/docs/Web/API/TextTrackCue/enter_event) Ereignis
- [`exit`](/de/docs/Web/API/TextTrackCue/exit_event) Ereignis
