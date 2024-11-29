---
title: "HTMLTrackElement: default-Eigenschaft"
short-title: default
slug: Web/API/HTMLTrackElement/default
l10n:
  sourceCommit: 0bf15d029fb052d3b20a2f249d4a6de8e29ea774
---

{{ApiRef("HTML DOM")}}

Die **`default`**-Eigenschaft des [`HTMLTrackElement`](/de/docs/Web/API/HTMLTrackElement)-Interfaces gibt an, ob der Track aktiviert wird, wenn die Benutzereinstellungen nicht darauf hinweisen, dass ein anderer Track angemessener wäre. Sie entspricht dem booleschen [`default`](/de/docs/Web/HTML/Element/track#default)-Attribut des {{htmlelement("track")}}-Elements und gibt `true` zurück, wenn vorhanden, und `false` andernfalls.

## Wert

Ein Boolean.

## Beispiel

```js
const trackElement = document.getElementById("exampleTrack");
console.log(trackElement.default);
trackElement.default = true;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLTrackElement.kind`](/de/docs/Web/API/HTMLTrackElement/kind)
- [`HTMLTrackElement.label`](/de/docs/Web/API/HTMLTrackElement/label)
