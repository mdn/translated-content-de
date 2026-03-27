---
title: "HTMLMediaElement: loading-Eigenschaft"
short-title: loading
slug: Web/API/HTMLMediaElement/loading
l10n:
  sourceCommit: 8db892b3e7ca294621898441e7db2481e0e6d939
---

{{APIRef("HTML DOM")}}

Die **`loading`**-Eigenschaft des [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)-Interfaces gibt dem Browser einen Hinweis darauf, wie das Laden von Medien, die sich derzeit außerhalb des {{Glossary("visual_viewport", "visuellen Viewports")}} des Fensters befinden, gehandhabt werden soll. Dies hilft, das Laden der Inhalte des Dokuments zu optimieren, indem das Laden der Medien bis zu dem Zeitpunkt verschoben wird, an dem sie voraussichtlich benötigt werden, anstatt sofort während des initialen Seitenladevorgangs. Sie spiegelt das `loading`-Inhaltsattribut des `<audio>`-Elements oder das `loading`-Inhaltsattribut des `<video>`-Elements wider.

## Wert

Ein String, dessen Wert `eager` oder `lazy` ist. Für ihre Bedeutungen siehe die HTML-Referenz für [`<audio loading>`](/de/docs/Web/HTML/Reference/Elements/audio#loading) oder [`<video loading>`](/de/docs/Web/HTML/Reference/Elements/video#loading).

## Beispiele

### Grundlegende Verwendung

Die unten gezeigte Funktion `addVideoToList()` fügt ein Video-Thumbnail einer Liste von Elementen hinzu und verwendet Lazy-Loading, um das Laden des Videos aus dem Netzwerk zu vermeiden, bis es tatsächlich benötigt wird.

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
- [Web-Performance](/de/docs/Learn_web_development/Extensions/Performance) im MDN Learning-Bereich
- [Lazy Loading](/de/docs/Web/Performance/Guides/Lazy_loading) im MDN-Web-Performance-Leitfaden
