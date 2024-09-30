---
title: "Range: Eigenschaft commonAncestorContainer"
short-title: commonAncestorContainer
slug: Web/API/Range/commonAncestorContainer
l10n:
  sourceCommit: 9e5e0484d9ae2557740b75bd91e16b56a5a73d33
---

{{ApiRef("DOM")}}

Die schreibgeschützte Eigenschaft **`Range.commonAncestorContainer`** gibt den tiefsten — oder am weitesten unten im Dokumentbaum gelegenen — [`Node`](/de/docs/Web/API/Node) zurück, der beide [Grenzpunkte](https://www.w3.org/TR/DOM-Level-2-Traversal-Range/ranges.html#Level-2-Range-Position-h3) des [`Range`](/de/docs/Web/API/Range) enthält. Das bedeutet, wenn sowohl [`Range.startContainer`](/de/docs/Web/API/Range/startContainer) als auch [`Range.endContainer`](/de/docs/Web/API/Range/endContainer) auf denselben Knoten verweisen, ist dieser Knoten der **gemeinsame Vorfahren-Container**.

Da ein `Range` nicht kontinuierlich sein muss und auch Knoten teilweise auswählen kann, ist dies eine bequeme Möglichkeit, einen `Node` zu finden, der ein `Range` umschließt.

Diese Eigenschaft ist schreibgeschützt. Um den Vorfahren-Container eines `Node` zu ändern, sollten Sie die verschiedenen verfügbaren Methoden verwenden, um die Start- und Endpositionen des `Range` festzulegen, wie zum Beispiel [`Range.setStart()`](/de/docs/Web/API/Range/setStart) und [`Range.setEnd()`](/de/docs/Web/API/Range/setEnd).

## Wert

Ein [`Node`](/de/docs/Web/API/Node) Objekt.

## Beispiele

In diesem Beispiel erstellen wir einen Ereignis-Listener, um [`pointerup`](/de/docs/Web/API/Element/pointerup_event)-Ereignisse auf einer Liste zu behandeln. Der Listener ermittelt die gemeinsamen Vorfahren jedes Textstücks, das ausgewählt wurde, und startet eine Animation, um diese hervorzuheben.

### HTML

```html
<ul>
  <li>
    Strings
    <ul>
      <li>Cello</li>
      <li>
        Violin
        <ul>
          <li>First Chair</li>
          <li>Second Chair</li>
        </ul>
      </li>
    </ul>
  </li>
  <li>
    Woodwinds
    <ul>
      <li>Clarinet</li>
      <li>Oboe</li>
    </ul>
  </li>
</ul>
```

### CSS

Die unten erstellte Klasse `.highlight` nutzt eine Reihe von CSS
{{cssxref("@keyframes")}}, um eine ausblendende Umrandung zu animieren.

```css
.highlight {
  animation: highlight linear 1s;
}

@keyframes highlight {
  from {
    outline: 1px solid #f00f;
  }
  to {
    outline: 1px solid #f000;
  }
}
```

```css hidden
body {
  padding: 1px;
}
```

### JavaScript

```js
document.addEventListener("pointerup", (e) => {
  const selection = window.getSelection();

  if (selection.type === "Range") {
    for (let i = 0; i < selection.rangeCount; i++) {
      const range = selection.getRangeAt(i);
      playAnimation(range.commonAncestorContainer);
    }
  }
});

function playAnimation(el) {
  if (el.nodeType === Node.TEXT_NODE) {
    el = el.parentNode;
  }

  el.classList.remove("highlight");
  setTimeout(() => {
    el.classList.add("highlight");
  }, 0);
}
```

### Ergebnis

{{EmbedLiveSample("Examples", 700, 190)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Das DOM-Schnittstellenverzeichnis](/de/docs/Web/API/Document_Object_Model)
