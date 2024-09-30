---
title: "HTMLMediaElement: progress event"
short-title: progress
slug: Web/API/HTMLMediaElement/progress_event
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef}}

Das **`progress`**-Ereignis wird periodisch ausgelöst, während der Browser eine Ressource lädt.

Dieses Ereignis kann nicht abgebrochen werden und löst keine Bubbling aus.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("progress", (event) => {});

onprogress = (event) => {};
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

### Live-Beispiel

#### HTML

```html
<div class="example">
  <button type="button">Load video</button>
  <video controls width="250"></video>

  <div class="event-log">
    <label for="eventLog">Event log:</label>
    <textarea readonly class="event-log-contents" id="eventLog"></textarea>
  </div>
</div>
```

```css hidden
.event-log-contents {
  width: 18rem;
  height: 5rem;
  border: 1px solid black;
  margin: 0.2rem;
  padding: 0.2rem;
}

.example {
  display: grid;
  grid-template-areas:
    "button log"
    "video  log";
}

button {
  grid-area: button;
  width: 10rem;
  margin: 0.5rem 0;
}

video {
  grid-area: video;
}

.event-log {
  grid-area: log;
}

.event-log > label {
  display: block;
}
```

#### JavaScript

```js
const loadVideo = document.querySelector("button");
const video = document.querySelector("video");
const eventLog = document.querySelector(".event-log-contents");
let source = null;

function handleEvent(event) {
  eventLog.textContent += `${event.type}\n`;
}

video.addEventListener("loadstart", handleEvent);
video.addEventListener("progress", handleEvent);
video.addEventListener("canplay", handleEvent);
video.addEventListener("canplaythrough", handleEvent);

loadVideo.addEventListener("click", () => {
  if (source) {
    document.location.reload();
  } else {
    loadVideo.textContent = "Reset example";
    source = document.createElement("source");
    source.setAttribute(
      "src",
      "https://mdn.github.io/learning-area/html/multimedia-and-embedding/video-and-audio-content/rabbit320.mp4",
    );
    source.setAttribute("type", "video/mp4");

    video.appendChild(source);
  }
});
```

#### Ergebnis

{{ EmbedLiveSample('Live_example', '100%', '250px') }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLAudioElement`](/de/docs/Web/API/HTMLAudioElement)
- [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement)
- {{HTMLElement("audio")}}
- {{HTMLElement("video")}}
