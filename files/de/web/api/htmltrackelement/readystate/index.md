---
title: "HTMLTrackElement: readyState-Eigenschaft"
short-title: readyState
slug: Web/API/HTMLTrackElement/readyState
l10n:
  sourceCommit: 3dd7df0af3b0ada1a7c5784cc2bc5448adcda8af
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte Eigenschaft **`readyState`** des [`HTMLTrackElement`](/de/docs/Web/API/HTMLTrackElement)-Interfaces gibt eine Zahl zurück, die den Bereitschaftszustand der Textspur des {{HTMLElement("track")}}-Elements darstellt:

0. NONE: Der Zustand der nicht geladenen Textspur.
1. LOADING: Der Ladezustand der Textspur.
2. LOADED: Der geladene Zustand der Textspur.
3. ERROR: Der Zustand der fehlgeschlagenen Ladeoperation der Textspur.

## Wert

Eine Zahl; `0`, `1`, `2` oder `3`.

## Beispiel

```js
const trackElement = document.getElementById("exampleTrack");
console.log(trackElement.readyState); // 0, 1, 2, or 3
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLTrackElement`](/de/docs/Web/API/HTMLTrackElement)
- [`HTMLMediaElement.readyState`](/de/docs/Web/API/HTMLMediaElement/readyState)
- {{HTMLElement("track")}}
