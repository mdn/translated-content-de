---
title: "HTMLMediaElement: loadeddata Ereignis"
short-title: loadeddata
slug: Web/API/HTMLMediaElement/loadeddata_event
l10n:
  sourceCommit: d16706e4e930c57161d473287374a9286c663147
---

{{APIRef("HTMLMediaElement")}}

Das **`loadeddata`** Ereignis wird ausgelöst, wenn der Frame an der aktuellen Wiedergabeposition der Medien fertig geladen ist; oft der erste Frame.

> [!NOTE]
> Dieses Ereignis wird auf Mobil-/Tabletgeräten nicht ausgelöst, wenn im Browsereinstellungen der Datensparmodus aktiviert ist.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("loadeddata", (event) => {});

onloadeddata = (event) => {};
```

## Ereignistyp

Ein generisches {{domxref("Event")}}.

## Beispiele

Diese Beispiele fügen einen Ereignislistener für das `loadeddata` Ereignis des HTMLMediaElement hinzu und senden dann eine Nachricht, wenn dieser Ereignishandler auf das Auslösen des Ereignisses reagiert hat.

Verwendung von `addEventListener()`:

```js
const video = document.querySelector("video");

video.addEventListener("loadeddata", (event) => {
  console.log(
    "Yay! Der readyState hat sich gerade zum ersten Mal auf " +
      "HAVE_CURRENT_DATA oder höher erhöht.",
  );
});
```

Verwendung der `onloadeddata` Ereignis-Handler-Eigenschaft:

```js
const video = document.querySelector("video");

video.onloadeddata = (event) => {
  console.log(
    "Yay! Der readyState hat sich gerade zum ersten Mal auf " +
      "HAVE_CURRENT_DATA oder höher erhöht.",
  );
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Verwandte Ereignisse

- Das HTMLMediaElement {{domxref("HTMLMediaElement.playing_event", 'playing')}} Ereignis
- Das HTMLMediaElement {{domxref("HTMLMediaElement.waiting_event", 'waiting')}} Ereignis
- Das HTMLMediaElement {{domxref("HTMLMediaElement.seeking_event", 'seeking')}} Ereignis
- Das HTMLMediaElement {{domxref("HTMLMediaElement.seeked_event", 'seeked')}} Ereignis
- Das HTMLMediaElement {{domxref("HTMLMediaElement.ended_event", 'ended')}} Ereignis
- Das HTMLMediaElement {{domxref("HTMLMediaElement.loadedmetadata_event", 'loadedmetadata')}} Ereignis
- Das HTMLMediaElement {{domxref("HTMLMediaElement.canplay_event", 'canplay')}} Ereignis
- Das HTMLMediaElement {{domxref("HTMLMediaElement.canplaythrough_event", 'canplaythrough')}} Ereignis
- Das HTMLMediaElement {{domxref("HTMLMediaElement.durationchange_event", 'durationchange')}} Ereignis
- Das HTMLMediaElement {{domxref("HTMLMediaElement.timeupdate_event", 'timeupdate')}} Ereignis
- Das HTMLMediaElement {{domxref("HTMLMediaElement.play_event", 'play')}} Ereignis
- Das HTMLMediaElement {{domxref("HTMLMediaElement.pause_event", 'pause')}} Ereignis
- Das HTMLMediaElement {{domxref("HTMLMediaElement.ratechange_event", 'ratechange')}} Ereignis
- Das HTMLMediaElement {{domxref("HTMLMediaElement.volumechange_event", 'volumechange')}} Ereignis
- Das HTMLMediaElement {{domxref("HTMLMediaElement.suspend_event", 'suspend')}} Ereignis
- Das HTMLMediaElement {{domxref("HTMLMediaElement.emptied_event", 'emptied')}} Ereignis
- Das HTMLMediaElement {{domxref("HTMLMediaElement.stalled_event", 'stalled')}} Ereignis

## Siehe auch

- {{domxref("HTMLAudioElement")}}
- {{domxref("HTMLVideoElement")}}
- {{HTMLElement("audio")}}
- {{HTMLElement("video")}}
