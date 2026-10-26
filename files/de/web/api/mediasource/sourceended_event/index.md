---
title: "MediaSource: sourceended-Ereignis"
short-title: sourceended
slug: Web/API/MediaSource/sourceended_event
l10n:
  sourceCommit: 2f34ca590baf2d5447d42fc79002a70b9cb65e73
---

{{APIRef("Media Source Extensions")}}{{AvailableInWorkers("window_and_dedicated")}}

Das **`sourceended`**-Ereignis wird ausgelöst, wenn sich der [`readyState`](/de/docs/Web/API/MediaSource/readyState) eines [`MediaSource`](/de/docs/Web/API/MediaSource)-Objekts zu `"ended"` ändert. Dies zeigt an, dass die Anwendung keine weiteren Daten mehr an die `MediaSource` sendet. Wenn eine Anwendung alle Mediendaten an die mit einer `MediaSource` verknüpften [`SourceBuffer`](/de/docs/Web/API/SourceBuffer)-Objekte angehängt hat, ruft sie die Methode [`MediaSource.endOfStream()`](/de/docs/Web/API/MediaSource/endOfStream) für die `MediaSource` auf. Dadurch wechselt der [`readyState`](/de/docs/Web/API/MediaSource/readyState) zu `"ended"`, und das `sourceended`-Ereignis wird ausgelöst.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("sourceended", (event) => {})
```

Alternativ können Sie der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle einen Wert zuweisen:

```js-nolint
onsourceended = (event) => {}
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

### Das sourceopen-Ereignis behandeln

Dieses Beispiel zeigt, wie ein Videoelement für die Wiedergabe eingerichtet und das `sourceended`-Ereignis zur ordnungsgemäßen Freigabe von Ressourcen behandelt wird. Der Code richtet eine [`MediaSource`](/de/docs/Web/API/MediaSource) ein, startet die Wiedergabe durch Abrufen und Puffern von Videodaten und nutzt anschließend das `sourceended`-Ereignis, um Event-Listener zu entfernen und den Benutzer zu benachrichtigen, wenn die Wiedergabe abgeschlossen ist.

```js
const video = document.getElementById("myVideo");
const mediaSource = new MediaSource();

video.src = URL.createObjectURL(mediaSource);

mediaSource.addEventListener("sourceopen", (event) => {
  const sourceBuffer = mediaSource.addSourceBuffer(
    'video/mp4; codecs="avc1.42E01E"',
  );

  fetch("video-data.mp4")
    .then((response) => response.arrayBuffer())
    .then((data) => {
      sourceBuffer.appendBuffer(data);
      sourceBuffer.addEventListener("updateend", () => {
        mediaSource.endOfStream();
      });
    });
});

mediaSource.addEventListener("sourceended", (event) => {
  console.log("MediaSource sourceended:", event);
  URL.revokeObjectURL(video.src);
  // Perform cleanup

  // Remove event listeners from SourceBuffer and MediaSource
  sourceBuffer.removeEventListener("updateend", () => {});
  mediaSource.removeEventListener("sourceopen", () => {});

  // Notify user (e.g., display a "Playback finished" message)
  const messageElement = document.createElement("p");
  messageElement.textContent = "Playback finished.";
  document.body.appendChild(messageElement);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`MediaSource.endOfStream()`](/de/docs/Web/API/MediaSource/endOfStream)
