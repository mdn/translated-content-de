---
title: "HTMLTrackElement: label-Eigenschaft"
short-title: label
slug: Web/API/HTMLTrackElement/label
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{ApiRef("HTML DOM")}}

Die **`label`**-Eigenschaft des [`HTMLTrackElement`](/de/docs/Web/API/HTMLTrackElement) stellt den für den Benutzer lesbaren Titel dar, der angezeigt wird, wenn Untertitel, Beschreibungen und Audiodeskriptionen für einen Track aufgelistet werden. Sie spiegelt das [`label`](/de/docs/Web/HTML/Reference/Elements/track#label)-Attribut des {{htmlelement("track")}}-Elements wider.

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
