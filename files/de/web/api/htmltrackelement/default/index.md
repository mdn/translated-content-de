---
title: "HTMLTrackElement: default-Eigenschaft"
short-title: default
slug: Web/API/HTMLTrackElement/default
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{ApiRef("HTML DOM")}}

Die **`default`**-Eigenschaft des [`HTMLTrackElement`](/de/docs/Web/API/HTMLTrackElement)-Interfaces gibt an, ob die Spur aktiviert wird, wenn die Benutzerpräferenzen nicht darauf hinweisen, dass eine andere Spur geeigneter wäre. Sie spiegelt das boolesche [`default`](/de/docs/Web/HTML/Reference/Elements/track#default)-Attribut des {{htmlelement("track")}}-Elements wider und gibt `true` zurück, wenn es vorhanden ist, und `false`, wenn nicht.

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
