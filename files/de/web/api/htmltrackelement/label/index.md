---
title: "HTMLTrackElement: label-Eigenschaft"
short-title: label
slug: Web/API/HTMLTrackElement/label
l10n:
  sourceCommit: 0bf15d029fb052d3b20a2f249d4a6de8e29ea774
---

{{ApiRef("HTML DOM")}}

Die **`label`**-Eigenschaft des [`HTMLTrackElement`](/de/docs/Web/API/HTMLTrackElement) stellt den für den Benutzer lesbaren Titel dar, der bei der Auflistung von Untertiteln, Untertitelungs- und Audiobeschreibungen für einen Track angezeigt wird. Sie spiegelt das [`label`](/de/docs/Web/HTML/Element/track#label)-Attribut des {{htmlelement("track")}}-Elements wider.

## Wert

Ein String.

## Beispiel

```js
const trackElement = document.getElementById("exampleTrack");
console.log(`Track's label: ${trackElement.label}`);
trackElement.label = "Updated label";
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLTrackElement.track`](/de/docs/Web/API/HTMLTrackElement/track)
- [`HTMLTrackElement.kind`](/de/docs/Web/API/HTMLTrackElement/kind)
