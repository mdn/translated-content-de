---
title: "Element: computedStyleMap() Methode"
short-title: computedStyleMap()
slug: Web/API/Element/computedStyleMap
l10n:
  sourceCommit: dcbb1d99185118360cc84b3a0e935e77fe0a03e3
---

{{APIRef("CSS Typed Object Model API")}}

Die **`computedStyleMap()`** Methode der [`Element`](/de/docs/Web/API/Element)-Schnittstelle gibt eine [`StylePropertyMapReadOnly`](/de/docs/Web/API/StylePropertyMapReadOnly)-Schnittstelle zurück, die eine schreibgeschützte Darstellung eines CSS-Deklarationsblocks bietet, der eine Alternative zur [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration) darstellt.

## Syntax

```js-nolint
computedStyleMap()
```

### Parameter

Keine.

### Rückgabewert

Eine [`StylePropertyMapReadOnly`](/de/docs/Web/API/StylePropertyMapReadOnly)-Schnittstelle.

## Beispiele

Wir beginnen mit etwas einfachem HTML: einem Absatz mit einem Link und einer Definitionsliste, zu der wir alle CSS-Eigenschafts-/Wertpaare hinzufügen werden.

```html
<p>
  <a href="https://example.com">Link</a>
</p>
<dl id="regurgitation"></dl>
```

Wir fügen ein wenig CSS hinzu

```css
a {
  --color: red;
  color: var(--color);
}
```

Wir fügen JavaScript hinzu, um unseren Link zu erfassen und eine Definitionsliste aller CSS-Eigenschaftswerte mit `computedStyleMap().` zurückzugeben.

```js
// get the element
const myElement = document.querySelector("a");

// get the <dl> we'll be populating
const stylesList = document.querySelector("#regurgitation");

// Retrieve all computed styles with computedStyleMap()
const allComputedStyles = myElement.computedStyleMap();

// iterate through the map of all the properties and values, adding a <dt> and <dd> for each
for (const [prop, val] of allComputedStyles) {
  // properties
  const cssProperty = document.createElement("dt");
  cssProperty.appendChild(document.createTextNode(prop));
  stylesList.appendChild(cssProperty);

  // values
  const cssValue = document.createElement("dd");
  cssValue.appendChild(document.createTextNode(val));
  stylesList.appendChild(cssValue);
}
```

In [Browsern, die `computedStyleMap()` unterstützen](#browser-kompatibilität), sehen Sie eine Liste aller CSS-Eigenschaften und Werte. In anderen Browsern sehen Sie nur einen Link.

{{EmbedLiveSample("Examples", 300, 300)}}

Haben Sie bemerkt, wie viele Standard-CSS-Eigenschaften ein Link hatte? Aktualisieren Sie `document.querySelector("a")` zu `document.querySelector("p")`, und Sie werden einen Unterschied bei den standardmäßig berechneten Werten von `margin-top` und `margin-bottom` bemerken.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
