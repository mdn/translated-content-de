---
title: "Range: extractContents() Methode"
short-title: extractContents()
slug: Web/API/Range/extractContents
l10n:
  sourceCommit: 2c0de98b0607ef262d9ef0877259ba41aaf53e6d
---

{{ApiRef("DOM")}}

Die **`extractContents()`**-Methode der [`Range`](/de/docs/Web/API/Range)-Schnittstelle ähnelt einer Kombination aus [`Range.cloneContents()`](/de/docs/Web/API/Range/cloneContents) und [`Range.deleteContents()`](/de/docs/Web/API/Range/deleteContents). Sie entfernt die Kind-[`Node`](/de/docs/Web/API/Node)s des Bereichs aus dem Dokument, kopiert sie und gibt sie als neues [`DocumentFragment`](/de/docs/Web/API/DocumentFragment)-Objekt zurück. Bei teilweise ausgewählten Knoten wird nur der ausgewählte Text gelöscht, aber alle enthaltenden Elternknoten bis zum gemeinsamen Vorfahren werden ebenfalls kopiert, was zu zwei Kopien dieser Knoten führt: eine im ursprünglichen Dokument und eine im extrahierten Fragment.

## Syntax

```js-nolint
extractContents()
```

### Parameter

Keine.

### Rückgabewert

Ein [`DocumentFragment`](/de/docs/Web/API/DocumentFragment)-Objekt.

## Beispiele

### Einfaches Beispiel

```js
const range = document.createRange();
range.selectNode(document.getElementsByTagName("div").item(0));
const documentFragment = range.extractContents();
document.body.appendChild(documentFragment);
```

### Verschieben von Elementen zwischen Containern

Dieses Beispiel ermöglicht es Ihnen, Elemente zwischen zwei Containern zu verschieben. Wählen Sie ein oder mehrere Elemente aus und klicken Sie dann auf "tauschen", um sie in den gegenüberliegenden Container zu verschieben.

#### HTML

```html
<p id="list1">123456</p>
<button id="swap">Swap selected item(s)</button>
<p id="list2">abcdef</p>
```

#### CSS

```css
body {
  pointer-events: none;
}

p {
  border: 1px solid;
  font-size: 2em;
  padding: 0.3em;
}

button {
  font-size: 1.2em;
  padding: 0.5em;
  pointer-events: auto;
}
```

#### JavaScript

```js
const list1 = document.getElementById("list1");
const list2 = document.getElementById("list2");
const button = document.getElementById("swap");

button.addEventListener("click", (e) => {
  const selection = window.getSelection();

  for (let i = 0; i < selection.rangeCount; i++) {
    const range = selection.getRangeAt(i);

    if (
      range.commonAncestorContainer === list1 ||
      range.commonAncestorContainer.parentNode === list1
    ) {
      const documentFragment = range.extractContents();
      list2.appendChild(documentFragment);
    } else if (
      range.commonAncestorContainer === list2 ||
      range.commonAncestorContainer.parentNode === list2
    ) {
      const documentFragment = range.extractContents();
      list1.appendChild(documentFragment);
    }
  }
});
```

#### Ergebnis

{{EmbedLiveSample("Moving_items_between_containers", 700, 300)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Das DOM-Schnittstellenverzeichnis](/de/docs/Web/API/Document_Object_Model)
