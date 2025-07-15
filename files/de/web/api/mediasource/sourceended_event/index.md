---
title: "MediaSource: sourceended Ereignis"
short-title: sourceended
slug: Web/API/MediaSource/sourceended_event
l10n:
  sourceCommit: 0f8be363b1b680bdab9bc2f459787160f232e158
---

{{APIRef("Media Source Extensions")}}{{AvailableInWorkers("window_and_dedicated")}}

Das **`sourceended`** Ereignis wird ausgelöst, wenn sich der [`readyState`](/de/docs/Web/API/MediaSource/readyState) eines [`MediaSource`](/de/docs/Web/API/MediaSource) Objekts in `"ended"` ändert. Dies zeigt an, dass die Anwendung das Senden von Daten an die `MediaSource` abgeschlossen hat. Wenn eine Anwendung das Anhängen aller Mediendaten an die mit einer `MediaSource` verbundenen [`SourceBuffer`](/de/docs/Web/API/SourceBuffer) Objekte beendet hat, ruft sie die Methode [`MediaSource.endOfStream()`](/de/docs/Web/API/MediaSource/endOfStream) auf der `MediaSource` auf. Dies führt dazu, dass der [`readyState`](/de/docs/Web/API/MediaSource/readyState) in `"ended"` übergeht und das `sourceended` Ereignis ausgelöst wird.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("sourceended", (event) => {})

onsourceended = (event) => {}
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

### Behandlung des sourceopen-Ereignisses

Dieses Beispiel zeigt, wie ein Videoelement für die Wiedergabe eingerichtet wird und das `sourceended` Ereignis zur ordnungsgemäßen Ressourcenverwaltung behandelt wird. Der Code richtet eine [`MediaSource`](/de/docs/Web/API/MediaSource) ein, initiiert die Wiedergabe durch Abrufen und Puffern von Videodaten und verwendet dann das `sourceended` Ereignis, um Aufräumaufgaben wie das Entfernen von Ereignis-Listenern auszuführen und den Benutzer zu benachrichtigen, wenn die Wiedergabe abgeschlossen ist.

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

[`MediaSource.endOfStream()`](/de/docs/Web/API/MediaSource/endOfStream)
