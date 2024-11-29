---
title: "HTMLTrackElement: kind-Eigenschaft"
short-title: kind
slug: Web/API/HTMLTrackElement/kind
l10n:
  sourceCommit: 0bf15d029fb052d3b20a2f249d4a6de8e29ea774
---

{{ApiRef("HTML DOM")}}

Die **`kind`**-Eigenschaft des [`HTMLTrackElement`](/de/docs/Web/API/HTMLTrackElement) Schnittstelle gibt den Typ des Tracks an oder wie der Texttrack verwendet werden soll. Sie spiegelt das aufgezählte [`kind`](/de/docs/Web/HTML/Element/track#kind) Attribut des {{htmlelement("track")}}-Elements wider.

Wenn kein `kind` festgelegt ist, wird `subtitles` verwendet. Wenn das Attribut nicht auf einen der gültigen aufgezählten Werte gesetzt ist, ist es ungültig und es wird `metadata` verwendet. Andere gültige Werte sind `captions`, `descriptions` und `chapters`.

## Wert

Ein String; klein geschrieben `captions`, `descriptions`, `chapters`, `subtitles` oder `metadata`.

## Beispiel

Basierend auf dem folgenden:

```html
<track src="track.vtt" id="exampleTrack" />
```

Erhalten wir die folgenden Ergebnisse:

```js
const trackElement = document.getElementById("exampleTrack");
// missing value
console.log(trackElement.kind); // "subtitles"
trackElement.kind = "INVALID";
// invalid value
console.log(trackElement.kind); // "metadata"
trackElement.kind = "CAPTIONS";
// valid value
console.log(trackElement.kind); // "captions"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLTrackElement.track`](/de/docs/Web/API/HTMLTrackElement/track)
- [`HTMLTrackElement.label`](/de/docs/Web/API/HTMLTrackElement/label)
