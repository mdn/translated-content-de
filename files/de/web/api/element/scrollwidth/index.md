---
title: "Element: scrollWidth-Eigenschaft"
short-title: scrollWidth
slug: Web/API/Element/scrollWidth
l10n:
  sourceCommit: d0b23f3f26637aa405ee9ee0a0892fc6e9b742ef
---

{{APIRef("DOM")}}

Die schreibgeschützte Eigenschaft **`Element.scrollWidth`** ist ein Maß für die Breite des Inhalts eines Elements, einschließlich des Inhalts, der aufgrund von Überlauf nicht auf dem Bildschirm sichtbar ist.

Der `scrollWidth`-Wert entspricht der minimalen Breite, die das Element benötigen würde, um den gesamten Inhalt im Viewport unterzubringen, ohne eine horizontale Scrollleiste zu verwenden. Die Breite wird in der gleichen Weise wie {{domxref("Element.clientWidth", "clientWidth")}} gemessen: Sie schließt das Padding des Elements ein, nicht aber dessen Rahmen, Rand oder vertikale Scrollleiste (falls vorhanden). Sie kann auch die Breite von Pseudoelementen wie {{cssxref("::before")}} oder {{cssxref("::after")}} einschließen. Wenn der Inhalt des Elements ohne horizontalen Scrollbalken passt, ist sein `scrollWidth` gleich der {{domxref("Element.clientWidth", "clientWidth")}}.

> [!NOTE]
> Diese Eigenschaft rundet den Wert auf eine ganze Zahl. Wenn Sie einen Bruchwert benötigen,
> verwenden Sie {{ domxref("element.getBoundingClientRect()") }}.

## Wert

Ein Integer.

## Beispiele

### Erkennen von überlaufendem Inhalt

In diesem Beispiel verwenden wir die Eigenschaft `scrollWidth`, um zu überprüfen, ob der Inhalt eines Elements über seine Grenzen hinausläuft. Wir haben zwei `div`-Elemente, das erste mit einer Breite von `100px` und das zweite ohne feste Breite. Ihr Inhalt ist genau derselbe, und wir zeigen eine Nachricht darüber an, ob jedes Element seinen Container überläuft.

#### HTML

```html
<div id="div1">FooBar-FooBar-FooBar-FooBar</div>
<button id="button1">Auf Überlauf prüfen</button>
<pre id="log1"></pre>
<div id="div2">FooBar-FooBar-FooBar-FooBar</div>
<button id="button2">Auf Überlauf prüfen</button>
<pre id="log2"></pre>
```

#### CSS

```css
div {
  padding: 0.15em;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

button {
  margin: 0.15em 0 0.5em 0;
}

pre {
  margin: 0.5em 0;
}

#div1 {
  width: 100px;
}

#log1 {
  margin-bottom: 2em;
}
```

#### JavaScript

```js
const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");

const div1 = document.getElementById("div1");
const div2 = document.getElementById("div2");

const log1 = document.getElementById("log1");
const log2 = document.getElementById("log2");

// Prüfen, ob der scrollWidth größer als der offsetWidth ist oder nicht
function isOverflowing(element) {
  return element.scrollWidth > element.offsetWidth;
}

function checkOverflow(element, log) {
  if (isOverflowing(element)) {
    log.innerText = `Der Inhalt läuft über, scrollWidth ist ${element.scrollWidth}px`;
  } else {
    log.innerText = `Kein Überlauf, scrollWidth ist ${element.scrollWidth}px`;
  }
}

button1.addEventListener("click", () => {
  checkOverflow(div1, log1);
});

button2.addEventListener("click", () => {
  checkOverflow(div2, log2);
});
```

#### Ergebnis

Klicken Sie die Schaltflächen an, um zu überprüfen, ob der Inhalt die Container überläuft.

{{EmbedLiveSample("detecting_overflowing_content", "100%", "190")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("Element.clientWidth")}}
- {{domxref("HTMLElement.offsetWidth")}}
- [Bestimmung der Abmessungen von Elementen](/de/docs/Web/API/CSS_Object_Model/Determining_the_dimensions_of_elements)
