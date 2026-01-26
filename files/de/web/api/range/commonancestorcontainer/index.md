---
title: "Range: commonAncestorContainer-Eigenschaft"
short-title: commonAncestorContainer
slug: Web/API/Range/commonAncestorContainer
l10n:
  sourceCommit: f314991b236fce81b712a6df59e4643de0f98449
---

{{ApiRef("DOM")}}

Die **`Range.commonAncestorContainer`** schreibgeschützte Eigenschaft
gibt den tiefsten — oder am weitesten unten liegenden — [`Node`](/de/docs/Web/API/Node) im Dokumentbaum zurück, der
beide [Grenzpunkte](https://dom.spec.whatwg.org/#introduction-to-dom-ranges) des [`Range`](/de/docs/Web/API/Range) enthält. Das bedeutet, dass wenn
sowohl [`startContainer`](/de/docs/Web/API/AbstractRange/startContainer) als auch [`endContainer`](/de/docs/Web/API/AbstractRange/endContainer) auf
denselben Knoten verweisen, dieser Knoten der **gemeinsame Vorfahren-Container** ist.

Da ein `Range` nicht zusammenhängend sein muss und auch teilweise Knoten auswählen kann,
ist dies eine bequeme Möglichkeit, einen `Node` zu finden, der ein
`Range` umschließt.

Diese Eigenschaft ist schreibgeschützt. Um den Vorfahren-Container eines `Node` zu ändern,
erwägen Sie die Verwendung der verschiedenen verfügbaren Methoden, um die Start- und Endpositionen des
`Range` festzulegen, wie zum Beispiel [`Range.setStart()`](/de/docs/Web/API/Range/setStart) und
[`Range.setEnd()`](/de/docs/Web/API/Range/setEnd).

## Wert

Ein [`Node`](/de/docs/Web/API/Node) Objekt.

## Beispiele

In diesem Beispiel erstellen wir einen Ereignislistener, um [`pointerup`](/de/docs/Web/API/Element/pointerup_event)-Ereignisse auf
einer Liste zu handhaben. Der Listener ermittelt die gemeinsamen Vorfahren jedes ausgewählten Textstücks und
löst eine Animation aus, um diese hervorzuheben.

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

Die unten erstellte `.highlight`-Klasse verwendet eine Reihe von CSS
{{cssxref("@keyframes")}}, um eine verblassende Umrandung zu animieren.

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

- [Das DOM-Interfaces-Verzeichnis](/de/docs/Web/API/Document_Object_Model)
