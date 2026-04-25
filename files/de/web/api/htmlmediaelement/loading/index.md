---
title: "HTMLMediaElement: loading-Eigenschaft"
short-title: loading
slug: Web/API/HTMLMediaElement/loading
l10n:
  sourceCommit: 3d7c7d4e151ff1b578bef4eff10c201b761a9d7d
---

{{APIRef("HTML DOM")}}{{SeeCompatTable}}

Die **`loading`**-Eigenschaft der [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)-Schnittstelle gibt dem Browser einen Hinweis darauf, wie das Laden von Medien gehandhabt werden soll, die sich derzeit außerhalb des {{Glossary("visual_viewport", "visuellen Viewports")}} des Fensters befinden. Dies hilft, das Laden der Inhalte des Dokuments zu optimieren, indem das Laden der Medien aufgeschoben wird, bis sie voraussichtlich benötigt werden, anstatt unmittelbar während des anfänglichen Seitenladens. Sie spiegelt das [`loading`](/de/docs/Web/HTML/Reference/Elements/audio#loading)-Inhaltsattribut des `<audio>`-Elements oder das [`loading`](/de/docs/Web/HTML/Reference/Elements/video#loading)-Inhaltsattribut des `<video>`-Elements wider.

## Wert

Ein String, dessen Wert entweder `eager` oder `lazy` ist. Für deren Bedeutungen siehe die HTML-Referenz für [`<audio loading>`](/de/docs/Web/HTML/Reference/Elements/audio#loading) oder [`<video loading>`](/de/docs/Web/HTML/Reference/Elements/video#loading).

## Beispiele

### Grundlegende Verwendung

Die unten gezeigte `addVideoToList()`-Funktion fügt eine Videominiatur zu einer Liste von Elementen hinzu, indem sie Lazy-Loading verwendet, um das Laden des Videos aus dem Netzwerk zu vermeiden, bis es tatsächlich benötigt wird.

```js
function addVideoToList(url) {
  const list = document.querySelector("div.video-list");

  const newItem = document.createElement("div");
  newItem.className = "video-item";

  const newVideo = document.createElement("video");

  // Lazy-load if supported
  if ("loading" in HTMLVideoElement.prototype) {
    newVideo.loading = "lazy";
  } else {
    // If native lazy-loading is not supported you may want to consider
    // alternatives, though this may be fine as a progressive enhancement.
  }

  newVideo.width = 320;
  newVideo.height = 240;
  newVideo.src = url;

  newItem.appendChild(newVideo);
  list.appendChild(newItem);
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das {{HTMLElement("audio")}}-Element
- Das {{HTMLElement("video")}}-Element
- [Web-Performance](/de/docs/Learn_web_development/Extensions/Performance) im MDN-Lernbereich
- [Lazy Loading](/de/docs/Web/Performance/Guides/Lazy_loading) im MDN-Web-Performance-Leitfaden
