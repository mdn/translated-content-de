---
title: "HTMLTrackElement: kind-Eigenschaft"
short-title: kind
slug: Web/API/HTMLTrackElement/kind
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{ApiRef("HTML DOM")}}

Die **`kind`**-Eigenschaft des [`HTMLTrackElement`](/de/docs/Web/API/HTMLTrackElement)-Interfaces repräsentiert den Typ des Tracks oder wie der Texttrack verwendet werden soll. Sie spiegelt das aufgezählte [`kind`](/de/docs/Web/HTML/Reference/Elements/track#kind)-Attribut des {{htmlelement("track")}}-Elements wider.

Wenn kein `kind` gesetzt ist, wird `subtitles` verwendet. Ist das Attribut nicht auf einen der gültigen aufgezählten Werte gesetzt, ist es ungültig und `metadata` wird verwendet. Andere gültige Werte sind `captions`, `descriptions` und `chapters`.

## Wert

Ein String; Kleinbuchstaben `captions`, `descriptions`, `chapters`, `subtitles` oder `metadata`.

## Beispiel

Angenommen, folgendes:

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
