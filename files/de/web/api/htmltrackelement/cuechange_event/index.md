---
title: "HTMLTrackElement: cuechange Ereignis"
short-title: cuechange
slug: Web/API/HTMLTrackElement/cuechange_event
l10n:
  sourceCommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
---

{{APIRef("WebVTT")}}

Das **`cuechange`**-Ereignis wird ausgelöst, wenn ein [`TextTrack`](/de/docs/Web/API/TextTrack) die aktuell angezeigten Cues geändert hat. Das Ereignis wird sowohl auf dem `TextTrack` als auch auf dem [`HTMLTrackElement`](/de/docs/Web/API/HTMLTrackElement) ausgelöst, in dem es präsentiert wird, falls vorhanden.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("cuechange", (event) => {});

oncuechange = (event) => {};
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event) ohne zusätzliche Eigenschaften.

## Beispiele

Der zugrunde liegende [`TextTrack`](/de/docs/Web/API/TextTrack), angegeben durch die [`track`](/de/docs/Web/API/HTMLTrackElement/track)-Eigenschaft, erhält ein `cuechange`-Ereignis jedes Mal, wenn sich die aktuell präsentierte Cue ändert. Dies passiert auch, wenn der Track nicht mit einem Medienelement verknüpft ist.

Wenn der Track _mit_ einem Medienelement verknüpft ist, indem das {{HTMLElement("track")}}-Element als Kind des {{HTMLElement("audio")}}- oder {{HTMLElement("video")}}-Elements verwendet wird, wird das `cuechange`-Ereignis auch an das [`HTMLTrackElement`](/de/docs/Web/API/HTMLTrackElement) gesendet.

```js
let textTrackElem = document.getElementById("texttrack");

textTrackElem.addEventListener("cuechange", (event) => {
  let cues = event.target.track.activeCues;
});
```

Alternativ können Sie den `oncuechange`-Ereignishandler verwenden:

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

- {{Glossary("WebVTT", "WebVTT")}}
- Dasselbe Ereignis auf [`TextTrack`](/de/docs/Web/API/TextTrack): [`cuechange`](/de/docs/Web/API/TextTrack/cuechange_event)
