---
title: "HTMLTrackElement: cuechange Ereignis"
short-title: cuechange
slug: Web/API/HTMLTrackElement/cuechange_event
l10n:
  sourceCommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
---

{{APIRef("WebVTT")}}

Das **`cuechange`** Ereignis wird ausgelöst, wenn ein [`TextTrack`](/de/docs/Web/API/TextTrack) die aktuell angezeigten Cues ändert. Das Ereignis wird sowohl auf dem `TextTrack` als auch auf dem [`HTMLTrackElement`](/de/docs/Web/API/HTMLTrackElement) ausgelöst, in dem es präsentiert wird, falls vorhanden.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder legen Sie eine Ereignis-Handler-Eigenschaft fest.

```js
addEventListener("cuechange", (event) => {});

oncuechange = (event) => {};
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event) ohne zusätzliche Eigenschaften.

## Beispiele

Das zugrundeliegende [`TextTrack`](/de/docs/Web/API/TextTrack), angezeigt durch die [`track`](/de/docs/Web/API/HTMLTrackElement/track) Eigenschaft, erhält jedes Mal ein `cuechange` Ereignis, wenn sich der aktuell präsentierte Cue ändert. Dies geschieht auch dann, wenn der Track keinem Medienelement zugeordnet ist.

Wenn der Track einem Medienelement zugeordnet ist, indem das {{HTMLElement("track")}} Element als Kind des {{HTMLElement("audio")}} oder {{HTMLElement("video")}} Elements verwendet wird, wird das `cuechange` Ereignis auch an das [`HTMLTrackElement`](/de/docs/Web/API/HTMLTrackElement) gesendet.

```js
let textTrackElem = document.getElementById("texttrack");

textTrackElem.addEventListener("cuechange", (event) => {
  let cues = event.target.track.activeCues;
});
```

Alternativ können Sie den `oncuechange` Ereignis-Handler verwenden:

```js
let textTrackElem = document.getElementById("texttrack");

textTrackElem.oncuechange = (event) => {
  let cues = event.target.track.activeCues;
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebVTT](/de/docs/Glossary/WebVTT)
- Dasselbe Ereignis auf [`TextTrack`](/de/docs/Web/API/TextTrack): [`cuechange`](/de/docs/Web/API/TextTrack/cuechange_event)
