---
title: "Element: computedStyleMap()-Methode"
short-title: computedStyleMap()
slug: Web/API/Element/computedStyleMap
l10n:
  sourceCommit: 8d202854ade7328f827da2951bc714455f78674f
---

{{APIRef("CSS Typed Object Model API")}}

Die **`computedStyleMap()`**-Methode des {{domxref("Element")}}-Interfaces gibt ein {{domxref("StylePropertyMapReadOnly")}}-Interface zurück, das eine schreibgeschützte Darstellung eines CSS-Deklarationsblocks bietet und eine Alternative zu {{domxref("CSSStyleDeclaration")}} darstellt.

## Syntax

```js-nolint
computedStyleMap()
```

### Parameter

Keine.

### Rückgabewert

Ein {{domxref("StylePropertyMapReadOnly")}}-Interface.

## Beispiele

Wir beginnen mit etwas einfachem HTML: einem Absatz mit einem Link und einer Definitionsliste, zu der wir alle CSS-Eigenschaft/Wert-Paare hinzufügen werden.

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

Wir fügen JavaScript hinzu, um unseren Link zu erfassen und eine Definitionsliste aller CSS-Eigenschaftswerte unter Verwendung von `computedStyleMap()` zurückzugeben.

```js
// Holen Sie sich das Element
const myElement = document.querySelector("a");

// Holen Sie sich das <dl>, das wir befüllen werden
const stylesList = document.querySelector("#regurgitation");

// Abrufen aller berechneten Stile mit computedStyleMap()
const allComputedStyles = myElement.computedStyleMap();

// Iterieren Sie durch die Karte aller Eigenschaften und Werte und fügen Sie ein <dt> und <dd> für jede hinzu
for (const [prop, val] of allComputedStyles) {
  // Eigenschaften
  const cssProperty = document.createElement("dt");
  cssProperty.appendChild(document.createTextNode(prop));
  stylesList.appendChild(cssProperty);

  // Werte
  const cssValue = document.createElement("dd");
  cssValue.appendChild(document.createTextNode(val));
  stylesList.appendChild(cssValue);
}
```

In [Browsern, die `computedStyleMap()` unterstützen](#browser-kompatibilität),
sehen Sie eine Liste aller CSS-Eigenschaften und -Werte.
In anderen Browsern sehen Sie einfach nur einen Link.

{{EmbedLiveSample("Examples", 300, 300)}}

Haben Sie bemerkt, wie viele Standard-CSS-Eigenschaften ein Link hat? Aktualisieren Sie das '`a`' in den '`p`', und Sie werden einen Unterschied in den standardmäßig berechneten Werten von `margin-top` und `margin-bottom` bemerken.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
