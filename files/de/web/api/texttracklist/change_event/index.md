---
title: "TextTrackList: change-Ereignis"
short-title: change
slug: Web/API/TextTrackList/change_event
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("HTML DOM")}}

Das **`change`**-Ereignis wird ausgelöst, wenn eine Textspur aktiv oder inaktiv gemacht wird oder eine [`TextTrackList`](/de/docs/Web/API/TextTrackList) anderweitig verändert wird.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("change", (event) => { })

onchange = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event) ohne zusätzliche Eigenschaften.

## Beispiele

Verwendung von `addEventListener()`:

```js
const mediaElement = document.querySelectorAll("video, audio")[0];
mediaElement.textTracks.addEventListener("change", (event) => {
  console.log(`'${event.type}' event fired`);
});
```

Verwendung der `onchange`-Ereignishandler-Eigenschaft:

```js
const mediaElement = document.querySelector("video, audio");
mediaElement.textTracks.onchange = (event) => {
  console.log(`'${event.type}' event fired`);
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Verwandte Ereignisse: [`addtrack`](/de/docs/Web/API/VideoTrackList/addtrack_event), [`removetrack`](/de/docs/Web/API/VideoTrackList/removetrack_event)
- Dieses Ereignis auf [`VideoTrackList`](/de/docs/Web/API/VideoTrackList) zielt auf: [`change`](/de/docs/Web/API/VideoTrackList/change_event)
- Dieses Ereignis auf [`AudioTrackList`](/de/docs/Web/API/AudioTrackList) zielt auf: [`change`](/de/docs/Web/API/AudioTrackList/change_event)
- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
- [WebRTC](/de/docs/Web/API/WebRTC_API)
