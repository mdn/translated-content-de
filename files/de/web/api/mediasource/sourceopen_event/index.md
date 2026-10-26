---
title: "MediaSource: sourceopen-Ereignis"
short-title: sourceopen
slug: Web/API/MediaSource/sourceopen_event
l10n:
  sourceCommit: 2f34ca590baf2d5447d42fc79002a70b9cb65e73
---

{{APIRef("Media Source Extensions")}}{{AvailableInWorkers("window_and_dedicated")}}

Das **`sourceopen`**-Ereignis wird ausgelöst, wenn sich der [`readyState`](/de/docs/Web/API/MediaSource/readyState) eines [`MediaSource`](/de/docs/Web/API/MediaSource)-Objekts zu `"open"` ändert.
Dies zeigt an, dass die `MediaSource` bereit ist, Daten von [`SourceBuffer`](/de/docs/Web/API/SourceBuffer)-Objekten zu empfangen. Das kann geschehen, wenn das `MediaSource`-Objekt erstmals mit einem Medienelement verbunden wird oder wenn der [`readyState`](/de/docs/Web/API/MediaSource/readyState) von `"ended"` zurück zu `"open"` wechselt.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("sourceopen", (event) => {});
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onsourceopen = (event) => {};
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

### Das sourceopen-Ereignis behandeln

Dieses Beispiel richtet eine [`MediaSource`](/de/docs/Web/API/MediaSource) ein, verbindet sie mit einem Videoelement und wartet auf das `sourceopen`-Ereignis. Wenn das Ereignis ausgelöst wird, fügt es einen [`SourceBuffer`](/de/docs/Web/API/SourceBuffer) zur Verarbeitung der Videodaten hinzu, ruft die Daten ab, hängt sie an den Puffer an und gibt schließlich die Objekt-URL frei, wenn die Quelle endet.

```js
const video = document.getElementById("myVideo");
const mediaSource = new MediaSource();

video.src = URL.createObjectURL(mediaSource);

mediaSource.addEventListener("sourceopen", (event) => {
  console.log("MediaSource sourceopen:", event);
  // Add source buffers and begin adding media data.
  const sourceBuffer = mediaSource.addSourceBuffer(
    'video/mp4; codecs="avc1.42E01E"',
  );
  fetch("video-data.mp4")
    .then((response) => response.arrayBuffer())
    .then((data) => {
      sourceBuffer.appendBuffer(data);
    });
});

mediaSource.addEventListener("sourceended", () => {
  URL.revokeObjectURL(video.src);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
