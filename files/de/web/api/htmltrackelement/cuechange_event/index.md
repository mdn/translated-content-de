---
title: "HTMLTrackElement: cuechange Ereignis"
short-title: cuechange
slug: Web/API/HTMLTrackElement/cuechange_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("WebVTT")}}

Das **`cuechange`**-Ereignis wird ausgelöst, wenn ein [`TextTrack`](/de/docs/Web/API/TextTrack) die aktuell angezeigten Cues geändert hat. Das Ereignis wird sowohl auf dem `TextTrack` als auch auf dem [`HTMLTrackElement`](/de/docs/Web/API/HTMLTrackElement) ausgelöst, in dem es angezeigt wird, falls vorhanden.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("cuechange", (event) => { })

oncuechange = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event) ohne zusätzliche Eigenschaften.

## Beispiele

das zugrunde liegende [`TextTrack`](/de/docs/Web/API/TextTrack), durch die [`track`](/de/docs/Web/API/HTMLTrackElement/track)-Eigenschaft angezeigt, erhält jedes Mal ein `cuechange`-Ereignis, wenn der aktuell präsentierte Cue geändert wird. Dies geschieht auch, wenn das Track nicht mit einem Medien-Element verknüpft ist.

Wenn das Track _mit_ einem Medien-Element verknüpft ist, indem das {{HTMLElement("track")}}-Element als Kind des {{HTMLElement("audio")}}- oder {{HTMLElement("video")}}-Elements verwendet wird, wird das `cuechange`-Ereignis auch an das [`HTMLTrackElement`](/de/docs/Web/API/HTMLTrackElement) gesendet.

```js
let textTrackElem = document.getElementById("text-track");

textTrackElem.addEventListener("cuechange", (event) => {
  let cues = event.target.track.activeCues;
});
```

Alternativ können Sie den `oncuechange`-Ereignis-Handler verwenden:

```js
let textTrackElem = document.getElementById("text-track");

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
