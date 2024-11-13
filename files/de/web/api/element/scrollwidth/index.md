---
title: "Element: scrollWidth-Eigenschaft"
short-title: scrollWidth
slug: Web/API/Element/scrollWidth
l10n:
  sourceCommit: b4778812842c207fa8bcb4b367644c61720d1f35
---

{{APIRef("DOM")}}

Die schreibgeschützte Eigenschaft **`Element.scrollWidth`** ist ein Maß für die Breite des Inhalts eines Elements, einschließlich des Inhalts, der aufgrund von Überlauf nicht auf dem Bildschirm sichtbar ist.

Der Wert von `scrollWidth` entspricht der minimalen Breite, die das Element benötigen würde, um den gesamten Inhalt im Ansichtsfenster ohne Verwendung eines horizontalen Scrollbalkens unterzubringen. Die Breite wird auf die gleiche Weise gemessen wie [`clientWidth`](/de/docs/Web/API/Element/clientWidth): Sie umfasst die Innenabstände (padding) des Elements, aber nicht dessen Rahmen, Abstand (margin) oder vertikalen Scrollbalken (falls vorhanden). Sie kann auch die Breite von Pseudo-Elementen wie {{cssxref("::before")}} oder {{cssxref("::after")}} beinhalten. Wenn der Inhalt des Elements ohne horizontalen Scrollbalken auskommt, ist `scrollWidth` gleich [`clientWidth`](/de/docs/Web/API/Element/clientWidth).

> [!NOTE]
> Diese Eigenschaft rundet den Wert auf eine Ganzzahl. Wenn Sie einen gebrochenen Wert benötigen, verwenden Sie [`Element.getBoundingClientRect()`](/de/docs/Web/API/Element/getBoundingClientRect).

## Wert

Eine Ganzzahl.

## Beispiele

### Erkennung von überlaufendem Inhalt

In diesem Beispiel verwenden wir die Eigenschaft `scrollWidth`, um zu überprüfen, ob der Inhalt eines Elements seine Grenzen überschreitet. Wir haben zwei `div`-Elemente, das erste mit einer Breite von `100px` und das zweite ohne feste Breite. Ihr Inhalt ist genau gleich, und wir zeigen eine Nachricht an, ob jedes von ihnen seinen Container überläuft.

#### HTML

```html
<div id="div1">FooBar-FooBar-FooBar-FooBar</div>
<button id="button1">Check for overflow</button>
<pre id="log1"></pre>
<div id="div2">FooBar-FooBar-FooBar-FooBar</div>
<button id="button2">Check for overflow</button>
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

// Check if the scrollWidth is bigger than the clientWidth or not
function isOverflowing(element) {
  return element.scrollWidth > element.clientWidth;
}

function checkOverflow(element, log) {
  if (isOverflowing(element)) {
    log.innerText = `Content is overflowing, scrollWidth is ${element.scrollWidth}px`;
  } else {
    log.innerText = `No overflows, scrollWidth is ${element.scrollWidth}px`;
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

Klicken Sie auf die Schaltflächen, um zu überprüfen, ob der Inhalt die Container überläuft.

{{EmbedLiveSample("detecting_overflowing_content", "100%", "190")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Element.clientWidth`](/de/docs/Web/API/Element/clientWidth)
- [Bestimmung der Dimensionen von Elementen](/de/docs/Web/API/CSS_Object_Model/Determining_the_dimensions_of_elements)
