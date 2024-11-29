---
title: "HTMLTrackElement: readyState-Eigenschaft"
short-title: readyState
slug: Web/API/HTMLTrackElement/readyState
l10n:
  sourceCommit: 0bf15d029fb052d3b20a2f249d4a6de8e29ea774
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte **`readyState`**-Eigenschaft des [`HTMLTrackElement`](/de/docs/Web/API/HTMLTrackElement)-Interfaces gibt eine Zahl zurück, die den Bereitstellungsstatus des Text-Tracks des {{HTMLElement("track")}}-Elements repräsentiert:

0. NONE: Der Zustand, in dem der Text-Track nicht geladen ist.
1. LOADING: Der Zustand, in dem der Text-Track geladen wird.
2. LOADED: Der Zustand, in dem der Text-Track geladen wurde.
3. ERROR: Der Zustand, in dem der Text-Track nicht geladen werden konnte.

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
