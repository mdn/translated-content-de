---
title: "HTMLMediaElement: abort-Ereignis"
short-title: abort
slug: Web/API/HTMLMediaElement/abort_event
l10n:
  sourceCommit: 2f34ca590baf2d5447d42fc79002a70b9cb65e73
---

{{APIRef("HTML DOM")}}

Das **`abort`**-Ereignis wird ausgelöst, wenn das Laden einer Medienressource vor dem Abschluss beendet wird, ohne dass ein Fehler die Ursache ist.
Dies geschieht üblicherweise, indem das `src`-Attribut entfernt oder auf eine leere Zeichenfolge (`""`) gesetzt und anschließend `load()` aufgerufen wird.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht weitergereicht.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("abort", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onabort = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

### Laden einer Medienressource abbrechen

Das folgende Beispiel zeigt, wie Sie das Laden eines Videos abbrechen.
Wenn Sie die Schaltfläche drücken, beginnt das Laden einer Videoressource.
Nach einer kurzen Wartezeit wird das Laden abgebrochen, indem das `src`-Attribut entfernt und die Methode `load()` aufgerufen wird.
Falls die Videoressource noch geladen wird, wenn `load()` aufgerufen wird, wird das `abort`-Ereignis ausgelöst.

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
