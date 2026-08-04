---
title: "MediaSource: sourceended-Ereignis"
short-title: sourceended
slug: Web/API/MediaSource/sourceended_event
l10n:
  sourceCommit: c655f38c10ba17b853b0e66b43cf4cf2b176e424
---

{{APIRef("Media Source Extensions")}}{{AvailableInWorkers("window_and_dedicated")}}

Das **`sourceended`**-Ereignis wird ausgelöst, wenn sich der [`readyState`](/de/docs/Web/API/MediaSource/readyState) eines [`MediaSource`](/de/docs/Web/API/MediaSource)-Objekts auf `"ended"` ändert. Dies zeigt an, dass die Anwendung das Senden von Daten an die `MediaSource` abgeschlossen hat. Wenn eine Anwendung das Anhängen aller Mediendaten an die [`SourceBuffer`](/de/docs/Web/API/SourceBuffer)-Objekte, die mit einer `MediaSource` verbunden sind, abgeschlossen hat, ruft sie die Methode [`MediaSource.endOfStream()`](/de/docs/Web/API/MediaSource/endOfStream) an der `MediaSource` auf. Dadurch wird der [`readyState`](/de/docs/Web/API/MediaSource/readyState) auf `"ended"` gesetzt und das `sourceended`-Ereignis ausgelöst.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("sourceended", (event) => {})

onsourceended = (event) => {}
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

### Umgang mit dem sourceopen-Ereignis

Dieses Beispiel zeigt, wie ein Videoelement für die Wiedergabe eingerichtet wird und das `sourceended`-Ereignis zur ordnungsgemäßen Ressourcenverwaltung behandelt wird. Der Code richtet eine [`MediaSource`](/de/docs/Web/API/MediaSource) ein, startet die Wiedergabe durch Abrufen und Puffern von Videodaten und verwendet dann das `sourceended`-Ereignis, um Aufräumaufgaben wie das Entfernen von Ereignis-Listenern durchzuführen und den Benutzer zu benachrichtigen, wenn die Wiedergabe abgeschlossen ist.

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
