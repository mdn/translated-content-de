---
title: "HTMLImageElement: loading-Eigenschaft"
short-title: loading
slug: Web/API/HTMLImageElement/loading
l10n:
  sourceCommit: 1f00512e3c9a20b5bb927db529bb5d639e346d96
---

{{APIRef("HTML DOM")}}

Die **`loading`**-Eigenschaft des [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Interfaces bietet dem {{Glossary("user_agent", "User Agent")}} einen Hinweis darauf, wie die Ladebehandlung des Bildes vorgenommen werden soll, das sich derzeit außerhalb des {{Glossary("visual_viewport", "visuellen Viewports")}} des Fensters befindet. Dies hilft, die Ladezeit des Inhalts eines Dokuments zu optimieren, indem das Laden des Bildes aufgeschoben wird, bis es voraussichtlich benötigt wird, anstatt es sofort während des initialen Seitenladevorgangs zu laden. Es spiegelt das [`loading`](/de/docs/Web/HTML/Reference/Elements/img#loading)-Inhaltsattribut des `<img>`-Elements wider.

## Wert

Ein String, dessen Wert entweder `eager` oder `lazy` ist. Für ihre Bedeutungen, siehe die HTML-Referenz für [`<img>`](/de/docs/Web/HTML/Reference/Elements/img#loading).

## Beispiele

Die Funktion `addImageToList()`, die unten gezeigt wird, fügt eine Foto-Miniaturansicht zu einer Liste von Elementen hinzu und verwendet Lazy-Loading, um zu vermeiden, dass das Bild aus dem Netzwerk geladen wird, bevor es tatsächlich benötigt wird.

```js
function addImageToList(url) {
  const list = document.querySelector("div.photo-list");

  const newItem = document.createElement("div");
  newItem.className = "photo-item";

  const newImg = document.createElement("img");
  newImg.loading = "lazy";
  newImg.width = 320;
  newImg.height = 240;
  newImg.src = url;

  newItem.appendChild(newImg);
  list.appendChild(newItem);
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das {{HTMLElement("img")}}-Element
- [Web-Performance](/de/docs/Learn_web_development/Extensions/Performance) im MDN Learning-Bereich
- [Lazy Loading](/de/docs/Web/Performance/Guides/Lazy_loading) im MDN-Web-Performance-Leitfaden
