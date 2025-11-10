---
title: "Range: commonAncestorContainer-Eigenschaft"
short-title: commonAncestorContainer
slug: Web/API/Range/commonAncestorContainer
l10n:
  sourceCommit: bc9f7bec1ab48f29d241e38a9f1598f783f6b60a
---

{{ApiRef("DOM")}}

Die **`Range.commonAncestorContainer`** Eigenschaft ist schreibgeschützt und gibt den tiefsten — oder am weitesten unten im Dokumentbaum liegenden — [`Node`](/de/docs/Web/API/Node) zurück, der beide [Grenzpunkte](https://dom.spec.whatwg.org/#introduction-to-dom-ranges) des [`Range`](/de/docs/Web/API/Range) enthält. Das bedeutet, wenn sowohl [`Range.startContainer`](/de/docs/Web/API/Range/startContainer) als auch [`Range.endContainer`](/de/docs/Web/API/Range/endContainer) auf denselben Knoten verweisen, dann ist dieser Knoten der **gemeinsame Vorfahren-Container**.

Da ein `Range` nicht kontinuierlich sein muss und möglicherweise Knoten nur teilweise auswählt, ist dies eine praktische Möglichkeit, einen `Node` zu finden, der ein `Range` umschließt.

Diese Eigenschaft ist schreibgeschützt. Um den Vorfahren-Container eines `Node` zu ändern, ziehen Sie in Betracht, die verschiedenen Methoden zu verwenden, die verfügbar sind, um die Start- und Endpositionen des `Range` festzulegen, wie zum Beispiel [`Range.setStart()`](/de/docs/Web/API/Range/setStart) und [`Range.setEnd()`](/de/docs/Web/API/Range/setEnd).

## Wert

Ein [`Node`](/de/docs/Web/API/Node)-Objekt.

## Beispiele

In diesem Beispiel erstellen wir einen Ereignislistener, um [`pointerup`](/de/docs/Web/API/Element/pointerup_event)-Ereignisse auf einer Liste zu behandeln. Der Listener ermittelt die gemeinsamen Vorfahren jedes ausgewählten Textabschnitts und löst eine Animation aus, um sie hervorzuheben.

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

Die unten erstellte Klasse `.highlight` verwendet ein Set von CSS-{{cssxref("@keyframes")}}, um eine verblassende Umrandung zu animieren.

```css
.highlight {
  animation: highlight linear 1s;
}

@keyframes highlight {
  from {
    outline: 1px solid red;
  }
  to {
    outline: 1px solid transparent;
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
