---
title: "MediaStream: addtrack-Ereignis"
short-title: addtrack
slug: Web/API/MediaStream/addtrack_event
l10n:
  sourceCommit: ded0a8bc0b6622b4a95253e358c6a58a77ad2387
---

{{APIRef("Media Capture and Streams")}}

Das **`addtrack`**-Ereignis wird ausgelöst, wenn einem [`MediaStream`](/de/docs/Web/API/MediaStream) ein neues [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)-Objekt hinzugefügt wurde.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht nach oben weitergegeben.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("addtrack", (event) => { })
```

Alternativ können Sie die [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onaddtrack = (event) => { }
```

## Ereignistyp

Ein [`MediaStreamTrackEvent`](/de/docs/Web/API/MediaStreamTrackEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("MediaStreamTrackEvent")}}

## Beispiele

Verwendung von `addEventListener()`:

```js
const stream = new MediaStream();

stream.addEventListener("addtrack", (event) => {
  console.log(`New ${event.track.kind} track added`);
});
```

Verwendung der Event-Handler-Eigenschaft `onaddtrack` (beachten Sie jedoch, dass dadurch gegebenenfalls andere über `onaddtrack` hinzugefügte Event-Listener ersetzt werden):

```js
const stream = new MediaStream();

stream.onaddtrack = (event) => {
  console.log(`New ${event.track.kind} track added`);
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Verwandtes Ereignis: [`removetrack`](/de/docs/Web/API/MediaStream/removetrack_event)
- Dieses Ereignis bei [`AudioTrackList`](/de/docs/Web/API/AudioTrackList)-Zielen: [`addtrack`](/de/docs/Web/API/AudioTrackList/addtrack_event)
- Dieses Ereignis bei [`VideoTrackList`](/de/docs/Web/API/VideoTrackList)-Zielen: [`addtrack`](/de/docs/Web/API/VideoTrackList/addtrack_event)
- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
- [WebRTC](/de/docs/Web/API/WebRTC_API)
