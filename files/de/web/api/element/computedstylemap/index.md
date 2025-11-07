---
title: "Element: computedStyleMap()-Methode"
short-title: computedStyleMap()
slug: Web/API/Element/computedStyleMap
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{APIRef("CSS Typed Object Model API")}}

Die **`computedStyleMap()`**-Methode des [`Element`](/de/docs/Web/API/Element)-Interfaces gibt eine [`StylePropertyMapReadOnly`](/de/docs/Web/API/StylePropertyMapReadOnly)-Schnittstelle zurück, die eine schreibgeschützte Darstellung eines CSS-Deklarationsblocks bietet, der eine Alternative zu [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration) darstellt.

## Syntax

```js-nolint
computedStyleMap()
```

### Parameter

Keine.

### Rückgabewert

Ein [`StylePropertyMapReadOnly`](/de/docs/Web/API/StylePropertyMapReadOnly)-Objekt.

Im Gegensatz zu [`Window.getComputedStyle`](/de/docs/Web/API/Window/getComputedStyle) enthält der Rückgabewert [berechnete Werte](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#computed_value), nicht [aufgelöste Werte](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#resolved_value). Für die meisten Eigenschaften sind diese identisch, mit Ausnahme einiger layoutbezogener Eigenschaften, bei denen der aufgelöste Wert der [verwendete Wert](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#used_value) und nicht der berechnete Wert ist. Siehe das [Vergleichsbeispiel mit `getComputedStyle()`](#comparison_with_getcomputedstyle) für Details.

## Beispiele

### Abrufen der Standardstile

Wir beginnen mit einfachem HTML: einem Absatz mit einem Link und einer Definitionsliste, in die wir alle CSS-Eigenschafts-/Wertepaare einfügen.

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

In [Browsern, die `computedStyleMap()` unterstützen](#browser-kompatibilität), sehen Sie eine Liste aller CSS-Eigenschaften und Werte. In anderen Browsern sehen Sie nur einen Link.

{{EmbedLiveSample("getting_default_styles", 300, 300)}}

Haben Sie bemerkt, wie viele Standard-CSS-Eigenschaften ein Link hatte? Ändern Sie `document.querySelector("a")` in `document.querySelector("p")`, und Sie werden einen Unterschied in den Standard-berechneten Werten von `margin-top` und `margin-bottom` feststellen.

### Vergleich mit getComputedStyle()

[`Window.getComputedStyle()`](/de/docs/Web/API/Window/getComputedStyle) gibt [aufgelöste Werte](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#resolved_value) zurück, während `computedStyleMap()` [berechnete Werte](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#computed_value) zurückgibt. Diese sind in der Regel gleich, aber für einige Eigenschaften ist der aufgelöste Wert der [verwendete Wert](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#used_value) anstelle des berechneten Wertes. Beispielsweise werden Prozentwerte für Breiten nach dem Layout in Pixelwerte aufgelöst, sodass die verwendeten Werte in Pixeln, während die berechneten Werte noch in Prozent sind.

Beachten Sie, dass die Art und Weise, wie wir es darstellen, die beiden APIs ähnlicher erscheinen lässt, als sie sind. `computedStyleMap()` enthält [CSS Typed OM](/de/docs/Web/API/CSS_Typed_OM_API)-Objekte, während `getComputedStyle()` Zeichenfolgen enthält. Ersteres präsentiert die gleichen Informationen auf eine strukturiertere und leichter verarbeitbare Weise.

In diesem Beispiel ist die `width`-Eigenschaft als Prozentsatz angegeben, sodass der berechnete Wert als Prozentsatz angegeben wird, aber der aufgelöste Wert in Pixeln. Die `height` ist immer in Pixeln. Die `background-color` ist eine benannte Farbe, wird aber in einen RGB-Wert berechnet.

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
