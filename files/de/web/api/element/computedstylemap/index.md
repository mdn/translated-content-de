---
title: "Element: computedStyleMap() Methode"
short-title: computedStyleMap()
slug: Web/API/Element/computedStyleMap
l10n:
  sourceCommit: cb25e0acbd9f0af27c4a99965cb962230d49a35d
---

{{APIRef("CSS Typed Object Model API")}}

Die **`computedStyleMap()`** Methode des [`Element`](/de/docs/Web/API/Element)-Interfaces gibt ein [`StylePropertyMapReadOnly`](/de/docs/Web/API/StylePropertyMapReadOnly)-Interface zurück, das eine schreibgeschützte Darstellung eines CSS-Deklarationsblocks bietet, welche eine Alternative zu [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration) darstellt.

## Syntax

```js-nolint
computedStyleMap()
```

### Parameter

Keine.

### Rückgabewert

Ein [`StylePropertyMapReadOnly`](/de/docs/Web/API/StylePropertyMapReadOnly)-Objekt.

Im Gegensatz zu [`Window.getComputedStyle`](/de/docs/Web/API/Window/getComputedStyle) enthält der Rückgabewert [berechnete Werte](/de/docs/Web/CSS/CSS_cascade/Value_processing#computed_value), nicht [aufgelöste Werte](/de/docs/Web/CSS/CSS_cascade/Value_processing#resolved_value). Für die meisten Eigenschaften sind sie gleich, außer bei einigen layoutbezogenen Eigenschaften. Dort ist der aufgelöste Wert der [genutzte Wert](/de/docs/Web/CSS/CSS_cascade/Value_processing#used_value) anstelle des berechneten Werts. Siehe das [Beispiel zum Vergleich mit `getComputedStyle()`](#comparison_with_getcomputedstyle) für Details.

## Beispiele

### Standardstile abrufen

Wir beginnen mit einem einfachen HTML: einem Absatz mit einem Link und einer Definitionsliste, zu der wir alle CSS-Eigenschafts-/Wertepaare hinzufügen werden.

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

Wir fügen JavaScript hinzu, um unseren Link zu erfassen und eine Definitionsliste aller CSS-Eigenschaftswerte mithilfe von `computedStyleMap()` zurückzugeben.

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

In [Browsern, die `computedStyleMap()` unterstützen](#browser-kompatibilität), sehen Sie eine Liste aller CSS-Eigenschaften und Werte.
In anderen Browsern sehen Sie nur einen Link.

{{EmbedLiveSample("getting_default_styles", 300, 300)}}

Haben Sie bemerkt, wie viele Standard-CSS-Eigenschaften ein Link hatte? Ändern Sie `document.querySelector("a")` zu `document.querySelector("p")`, und Sie werden einen Unterschied in den standardmäßig berechneten Werten von `margin-top` und `margin-bottom` bemerken.

### Vergleich mit getComputedStyle()

[`Window.getComputedStyle()`](/de/docs/Web/API/Window/getComputedStyle) gibt [aufgelöste Werte](/de/docs/Web/CSS/CSS_cascade/Value_processing#resolved_value) zurück, während `computedStyleMap()` [berechnete Werte](/de/docs/Web/CSS/CSS_cascade/Value_processing#computed_value) zurückgibt. Diese sind in der Regel gleich, aber für einige Eigenschaften ist der aufgelöste Wert der [genutzte Wert](/de/docs/Web/CSS/CSS_cascade/Value_processing#used_value) anstelle des berechneten Werts. Zum Beispiel werden Prozentwerte für Breiten _nach_ dem Layout in Pixelwerte aufgelöst, sodass die genutzten Werte in Pixeln vorliegen, während die berechneten Werte weiterhin in Prozent vorliegen.

Beachten Sie, dass die Art und Weise, wie wir es präsentieren, die beiden APIs ähnlicher erscheinen lässt, als sie tatsächlich sind. `computedStyleMap()` enthält [CSS Typed OM](/de/docs/Web/API/CSS_Typed_OM_API)-Objekte, während `getComputedStyle()` Zeichenfolgen enthält. Ersteres präsentiert die gleichen Informationen auf eine strukturiertere und verarbeitbarere Weise.

In diesem Beispiel ist die `width`-Eigenschaft als Prozentsatz angegeben, sodass der berechnete Wert als Prozentsatz angegeben wird, während der aufgelöste Wert in Pixeln angegeben wird. Die `height` ist immer in Pixeln. Die `background-color` ist eine benannte Farbe, wird jedoch in einen RGB-Wert umgewandelt.

```html
<div class="container">
  <div class="item"></div>
</div>
<pre id="result"></pre>
```

```css
.container {
  width: 200px;
  height: 200px;
}

.item {
  width: 50%;
  height: 100px;
  background-color: tomato;
}
```

```js
const item = document.querySelector(".item");
const result = document.querySelector("#result");
const resolvedValues = getComputedStyle(item);
const computedValues = item.computedStyleMap();

result.textContent = `resolvedValues.width = ${resolvedValues.width}
computedValues.get("width") = ${computedValues.get("width")}

resolvedValues.height = ${resolvedValues.height}
computedValues.get("height") = ${computedValues.get("height")}

resolvedValues.backgroundColor = ${resolvedValues.backgroundColor}
computedValues.get("background-color") = ${computedValues.get(
  "background-color",
)}`;
```

{{EmbedLiveSample("comparison_with_getcomputedstyle", "", 350)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Window.getComputedStyle()`](/de/docs/Web/API/Window/getComputedStyle)
