---
title: "DataCue: value-Eigenschaft"
short-title: value
slug: Web/API/DataCue/value
l10n:
  sourceCommit: fb241f60d2c42614b106f3b4647cc6a4eb2e1bc8
---

{{APIRef("WebVTT")}}{{SeeCompatTable}}

Die **`value`**-Eigenschaft des [`DataCue`](/de/docs/Web/API/DataCue)-Interfaces repräsentiert die Daten-Nutzlast des Cue. Im Gegensatz zu [`VTTCue`](/de/docs/Web/API/VTTCue), das Textinhalte transportiert, kann `DataCue` jeden Datentyp enthalten — wie ein JavaScript-Objekt, einen String oder ein {{jsxref("ArrayBuffer")}} — was es geeignet macht für Anwendungsfälle von zeitbasierten Metadaten, bei denen strukturierte Daten mit der Medienwiedergabe synchronisiert werden müssen.

Die Eigenschaft ist für von Anwendungen erstellte Cues lesbar und beschreibbar, was das Aktualisieren der Daten nach der Konstruktion erlaubt. Für Cues, die automatisch vom User Agent aus zeitgebundenen Metadaten im Stream generiert werden (z. B. ID3-Tags in einer HTTP-Live-Streaming-Quelle), wird der Wert vom User Agent gesetzt und spiegelt die Metadaten-Nutzlast wider.

Die [`type`](/de/docs/Web/API/DataCue/type)-Eigenschaft kann zusammen mit `value` verwendet werden, um das Format oder Schema der Daten zu identifizieren.

## Wert

Jeder Typ. Der Wert ist typischerweise ein String, ein einfaches Objekt oder ein {{jsxref("ArrayBuffer")}}, abhängig von der Quelle des Cues und der Art der repräsentierten zeitbasierten Metadaten.

## Beispiele

### Den Wert eines DataCue lesen

```html
<video controls src="video.mp4"></video>
```

```js
const video = document.querySelector("video");
const track = video.addTextTrack("metadata", "Geo Track");
track.mode = "hidden";

const cue = new DataCue(
  0,
  10,
  { latitude: 51.5043, longitude: -0.0762 },
  "org.example.geo",
);
track.addCue(cue);

console.log(cue.value);
// { latitude: 51.5043, longitude: -0.0762 }
```

### Auf Cue-Daten während der Wiedergabe reagieren

Dieses Beispiel fügt einem Metadaten-Track mehrere `DataCue`-Objekte hinzu und liest dann den `value` jedes Cues, wenn er während der Wiedergabe aktiv wird.

```html
<video controls src="video.mp4"></video>
```

```js
const video = document.querySelector("video");
const track = video.addTextTrack("metadata", "Events");
track.mode = "hidden";

const cue1 = new DataCue(5, 10, { action: "showBanner", text: "Welcome!" });
const cue2 = new DataCue(15, 20, { action: "highlight", playerId: 7 });

cue1.addEventListener("enter", (e) => {
  console.log(e.target.value.action);
  // "showBanner"
});

cue2.addEventListener("enter", (e) => {
  console.log(e.target.value.action);
  // "highlight"
});

track.addCue(cue1);
track.addCue(cue2);
```

### Den Wert eines DataCue aktualisieren

Die `value`-Eigenschaft ist beschreibbar, sodass sie nach der Erstellung des Cue geändert werden kann.

```js
const cue = new DataCue(0, 5, "initial data");
cue.value = { updated: true, score: 42 };
console.log(cue.value);
// { updated: true, score: 42 }
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`DataCue`](/de/docs/Web/API/DataCue)
- [`DataCue.type`](/de/docs/Web/API/DataCue/type)
- [`DataCue()`](/de/docs/Web/API/DataCue/DataCue) Konstruktor
- [`TextTrackCue`](/de/docs/Web/API/TextTrackCue)
