---
title: "HTMLTrackElement: cuechange-Ereignis"
short-title: cuechange
slug: Web/API/HTMLTrackElement/cuechange_event
l10n:
  sourceCommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
---

{{APIRef("WebVTT")}}

Das **`cuechange`**-Ereignis wird ausgelöst, wenn ein {{domxref("TextTrack")}} die aktuell angezeigten Cues geändert hat. Das Ereignis wird sowohl auf dem `TextTrack` als auch auf dem {{domxref("HTMLTrackElement")}} ausgelöst, in dem es präsentiert wird, falls vorhanden.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}} oder setzen Sie eine Event-Handler-Eigenschaft.

```js
addEventListener("cuechange", (event) => {});

oncuechange = (event) => {};
```

## Ereignistyp

Ein generisches {{DOMxRef("Event")}} ohne zusätzliche Eigenschaften.

## Beispiele

Das zugrunde liegende {{domxref("TextTrack")}}, angezeigt durch die {{domxref("HTMLTrackElement.track", "track")}}-Eigenschaft, erhält ein `cuechange`-Ereignis jedes Mal, wenn das aktuell gezeigte Cue geändert wird. Dies geschieht auch, wenn der Track nicht mit einem Medienelement verbunden ist.

Wenn der Track _mit_ einem Medienelement verbunden ist und das {{HTMLElement("track")}}-Element als Kind des {{HTMLElement("audio")}}- oder {{HTMLElement("video")}}-Elements verwendet wird, wird das `cuechange`-Ereignis auch an das {{domxref("HTMLTrackElement")}} gesendet.

```js
let textTrackElem = document.getElementById("texttrack");

textTrackElem.addEventListener("cuechange", (event) => {
  let cues = event.target.track.activeCues;
});
```

Alternativ können Sie den `oncuechange` Event-Handler verwenden:

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

- {{glossary("WebVTT")}}
- Dasselbe Ereignis auf {{domxref("TextTrack")}}: {{domxref("TextTrack.cuechange_event", "cuechange")}}
