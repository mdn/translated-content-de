---
title: "HTMLMediaElement: loadstart Ereignis"
short-title: loadstart
slug: Web/API/HTMLMediaElement/loadstart_event
l10n:
  sourceCommit: bfd82524fe63319725243d07aab809f0d1617366
---

{{APIRef}}

Das **`loadstart`** Ereignis wird ausgelöst, wenn der Browser begonnen hat, eine Ressource zu laden.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("loadstart", (event) => {});

onloadstart = (event) => {};
```

## Ereignistyp

Ein generisches {{domxref("Event")}}.

## Beispiele

### Live-Beispiel

#### HTML

```html
<div class="example">
  <button type="button">Video laden</button>
  <video controls width="250"></video>

  <div class="event-log">
    <label for="eventLog">Ereignisprotokoll:</label>
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
    loadVideo.textContent = "Beispiel zurücksetzen";
    source = document.createElement("source");
    source.setAttribute(
      "src",
      "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm",
    );
    source.setAttribute("type", "video/webm");

    video.appendChild(source);
  }
});
```

#### Ergebnis

{{ EmbedLiveSample('Live_example', '100%', '200px') }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("HTMLAudioElement")}}
- {{domxref("HTMLVideoElement")}}
- {{HTMLElement("audio")}}
- {{HTMLElement("video")}}
