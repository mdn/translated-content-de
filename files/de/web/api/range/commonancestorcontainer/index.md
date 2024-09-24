---
title: "Range: Eigenschaft commonAncestorContainer"
short-title: commonAncestorContainer
slug: Web/API/Range/commonAncestorContainer
l10n:
  sourceCommit: 9e5e0484d9ae2557740b75bd91e16b56a5a73d33
---

{{ApiRef("DOM")}}

Die schreibgeschützte Eigenschaft **`Range.commonAncestorContainer`** gibt den tiefsten — oder am weitesten unten im Dokumentbaum liegenden — {{domxref("Node")}} zurück, der beide [Grenzpunkte](https://www.w3.org/TR/DOM-Level-2-Traversal-Range/ranges.html#Level-2-Range-Position-h3) des {{domxref("Range")}} enthält. Das bedeutet, wenn sowohl {{domxref("Range.startContainer")}} als auch {{domxref("Range.endContainer")}} auf denselben Knoten verweisen, ist dieser Knoten der **gemeinsame Vorfahren-Container**.

Da ein `Range` nicht kontinuierlich sein muss und auch Knoten teilweise auswählen kann, ist dies eine bequeme Methode, um einen `Node` zu finden, der ein `Range` umschließt.

Diese Eigenschaft ist schreibgeschützt. Um den Vorfahren-Container eines `Node` zu ändern, ziehen Sie in Betracht, die verschiedenen verfügbaren Methoden zu verwenden, um die Start- und Endpositionen des `Range` festzulegen, wie etwa {{domxref("Range.setStart()")}} und {{domxref("Range.setEnd()")}}.

## Wert

Ein {{domxref("Node")}}-Objekt.

## Beispiele

In diesem Beispiel erstellen wir einen Ereignis-Listener, um {{domxref("Element/pointerup_event", "pointerup")}}-Ereignisse auf einer Liste zu behandeln. Der Listener ermittelt die gemeinsamen Vorfahren jedes ausgewählten Textabschnitts und löst eine Animation aus, um sie hervorzuheben.

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

Die unten erstellte `.highlight`-Klasse verwendet einen Satz von CSS-{{cssxref("@keyframes")}}, um einen verblassenden Umriss zu animieren.

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
