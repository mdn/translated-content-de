---
title: "Range: extractContents()-Methode"
short-title: extractContents()
slug: Web/API/Range/extractContents
l10n:
  sourceCommit: 987c56d6f54bba1bf0430abf06b9a5573c8c289a
---

{{ApiRef("DOM")}}

Die **`Range.extractContents()`**-Methode verschiebt Inhalte des
{{ domxref("Range") }} aus dem Dokumentbaum in ein {{ domxref("DocumentFragment") }}.

Während der Extraktion werden Ereignis-Listener, die mit DOM-Events hinzugefügt wurden, nicht beibehalten. HTML-Attribut-Ereignisse dagegen werden erhalten oder dupliziert, wie bei der
{{domxref("Node.cloneNode()")}}-Methode. HTML-`id`-Attribute werden ebenfalls geklont, was zu einem ungültigen Dokument führen kann, wenn ein teilweise ausgewählter Knoten extrahiert und dem Dokument hinzugefügt wird.

Teilweise ausgewählte Knoten werden geklont, um die übergeordneten Tags einzuschließen, die erforderlich sind, um das Dokumentfragment gültig zu machen.

## Syntax

```js-nolint
extractContents()
```

### Parameter

Keine.

### Rückgabewert

Ein {{ domxref("DocumentFragment") }}-Objekt.

## Beispiele

### Einfaches Beispiel

```js
const range = document.createRange();
range.selectNode(document.getElementsByTagName("div").item(0));
const documentFragment = range.extractContents();
document.body.appendChild(documentFragment);
```

### Elemente zwischen Containern verschieben

Dieses Beispiel ermöglicht es Ihnen, Elemente zwischen zwei Containern zu verschieben. Wählen Sie ein oder mehrere Elemente aus und klicken Sie dann auf "Wechseln", um sie in den gegenüberliegenden Container zu verschieben.

#### HTML

```html
<p id="list1">123456</p>
<button id="swap">Wechseln ausgewählte(s) Element(e)</button>
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

- [Das DOM-Schnittstellenindex](/de/docs/Web/API/Document_Object_Model)
