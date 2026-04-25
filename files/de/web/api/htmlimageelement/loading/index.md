---
title: "HTMLImageElement: loading-Eigenschaft"
short-title: loading
slug: Web/API/HTMLImageElement/loading
l10n:
  sourceCommit: 8db892b3e7ca294621898441e7db2481e0e6d939
---

{{APIRef("HTML DOM")}}

Die **`loading`**-Eigenschaft des [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Interfaces gibt dem Browser einen Hinweis, wie das Laden des Bildes, das sich derzeit außerhalb des {{Glossary("visual_viewport", "Sichtfensters")}} befindet, gehandhabt werden soll. Dies hilft dabei, das Laden der Inhalte des Dokuments zu optimieren, indem das Laden des Bildes aufgeschoben wird, bis es voraussichtlich benötigt wird, anstatt es sofort beim initialen Laden der Seite zu laden. Es spiegelt das [`loading`](/de/docs/Web/HTML/Reference/Elements/img#loading)-Inhaltsattribut des `<img>`-Elements wider.

## Wert

Ein Zeichenfolgenwert, der entweder `eager` oder `lazy` ist. Für deren Bedeutungen siehe die HTML [`<img>`](/de/docs/Web/HTML/Reference/Elements/img#loading)-Referenz.

## Beispiele

### Grundlegende Verwendung

Die unten gezeigte Funktion `addImageToList()` fügt eine Foto-Miniaturansicht zu einer Liste von Elementen hinzu, wobei Lazy-Loading verwendet wird, um zu vermeiden, dass das Bild aus dem Netzwerk geladen wird, bevor es tatsächlich benötigt wird.

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
