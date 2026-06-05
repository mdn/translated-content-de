---
title: "HTMLMediaElement: abort-Ereignis"
short-title: abort
slug: Web/API/HTMLMediaElement/abort_event
l10n:
  sourceCommit: 9032b617a2e2904618291c86a48e56e298e474bd
---

{{APIRef("HTML DOM")}}

Das **`abort`**-Ereignis wird ausgelöst, wenn das Laden einer Medienressource abgebrochen wird, bevor es abgeschlossen ist, aber nicht als Ergebnis eines Fehlers. Dies wird normalerweise erreicht, indem das `src`-Attribut entfernt oder auf den leeren String (`""`) gesetzt wird, und anschließend `load()` aufgerufen wird.

Dieses Ereignis kann nicht abgebrochen werden und löst keine Ereignisblase aus.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Event-Handler-Eigenschaft.

```js-nolint
addEventListener("abort", (event) => { })

onabort = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

### Abbrechen des Ladens einer Medienressource

Das folgende Beispiel zeigt, wie man ein Video abbrechen kann. Wenn Sie den Button drücken, beginnt das Laden einer Videoressource. Nach einem kurzen Timeout wird das Laden abgebrochen, indem das `src`-Attribut entfernt und die `load()`-Methode aufgerufen wird. Wenn die Videoressource noch lädt, wenn `load()` aufgerufen wird, wird das `abort`-Ereignis ausgelöst.

#### HTML

```html
<video controls width="250"></video>

<button id="loadAndAbort">Load and abort video</button>

<pre id="log"></pre>
```

#### CSS

```css
video,
button,
pre {
  display: block;
  margin-block: 1rem;
}
```

#### JavaScript

```js
const video = document.querySelector("video");
const loadAndAbortButton = document.querySelector("#loadAndAbort");
const log = document.querySelector("#log");

video.addEventListener("abort", () => {
  log.textContent += "Video loading aborted\n";
});

loadAndAbortButton.addEventListener("click", () => {
  log.textContent = "Loading video...\n";

  video.src = `/shared-assets/videos/flower.webm?nocache=${Date.now()}`;
  video.load();

  setTimeout(() => {
    video.removeAttribute("src");
    video.load();
  }, 50);
});
```

#### Ergebnis

{{EmbedLiveSample("Abort_loading_a_media_resource", "100%", 300)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLAudioElement`](/de/docs/Web/API/HTMLAudioElement)
- [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement)
- {{HTMLElement("audio")}}
- {{HTMLElement("video")}}
