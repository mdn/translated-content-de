---
title: "Element: computedStyleMap() Methode"
short-title: computedStyleMap()
slug: Web/API/Element/computedStyleMap
l10n:
  sourceCommit: 554f12597c0d5c5e64ca67e390c3fe6fe2826491
---

{{APIRef("CSS Typed Object Model API")}}

Die **`computedStyleMap()`**-Methode der [`Element`](/de/docs/Web/API/Element)-Schnittstelle gibt eine [`StylePropertyMapReadOnly`](/de/docs/Web/API/StylePropertyMapReadOnly)-Schnittstelle zurück, die eine schreibgeschützte Darstellung eines CSS-Deklarationsblocks bietet, als Alternative zu [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration).

## Syntax

```js-nolint
computedStyleMap()
```

### Parameter

Keine.

### Rückgabewert

Ein [`StylePropertyMapReadOnly`](/de/docs/Web/API/StylePropertyMapReadOnly) Objekt.

Anders als [`Window.getComputedStyle`](/de/docs/Web/API/Window/getComputedStyle) enthält der Rückgabewert [berechnete Werte](/de/docs/Web/CSS/CSS_cascade/Value_processing#computed_value), nicht [aufgelöste Werte](/de/docs/Web/CSS/CSS_cascade/Value_processing#resolved_value). Für die meisten Eigenschaften sind diese gleich, außer bei einigen layoutbezogenen Eigenschaften, bei denen der aufgelöste Wert der [verwendete Wert](/de/docs/Web/CSS/CSS_cascade/Value_processing#used_value) anstelle des berechneten Wertes ist. Siehe das Beispiel [Vergleich mit `getComputedStyle()`](#comparison_with_getcomputedstyle) für Details.

## Beispiele

### Standardstile abrufen

Wir beginnen mit einfachem HTML: einem Absatz mit einem Link und einer Definitionsliste, zu der wir alle CSS-Eigenschafts-/Wertepaare hinzufügen werden.

```html
<p>
  <a href="https://example.com">Link</a>
</p>
<dl id="regurgitation"></dl>
```

Wir fügen ein wenig CSS hinzu.

```css
a {
  --color: red;
  color: var(--color);
}
```

Wir fügen JavaScript hinzu, um unseren Link zu erfassen und eine Definitionsliste aller CSS-Eigenschaftswerte mit `computedStyleMap()` zurückzugeben.

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

In [Browsern, die `computedStyleMap()` unterstützen](#browser-kompatibilität), sehen Sie eine Liste aller CSS-Eigenschaften und -Werte. In anderen Browsern sehen Sie nur einen Link.

{{EmbedLiveSample("getting_default_styles", 300, 300)}}

Haben Sie bemerkt, wie viele Standard-CSS-Eigenschaften ein Link hatte? Aktualisieren Sie `document.querySelector("a")` zu `document.querySelector("p")`, und Sie werden einen Unterschied in den standardmäßig berechneten Werten für `margin-top` und `margin-bottom` bemerken.

### Vergleich mit getComputedStyle()

[`Window.getComputedStyle()`](/de/docs/Web/API/Window/getComputedStyle) gibt [aufgelöste Werte](/de/docs/Web/CSS/CSS_cascade/Value_processing#resolved_value) zurück, während `computedStyleMap()` [berechnete Werte](/de/docs/Web/CSS/CSS_cascade/Value_processing#computed_value) zurückgibt. Diese sind normalerweise gleich, aber für einige Eigenschaften ist der aufgelöste Wert der [verwendete Wert](/de/docs/Web/CSS/CSS_cascade/Value_processing#used_value) anstelle des berechneten Wertes. Zum Beispiel werden Prozentwerte für Breiten _nach dem Layout_ in Pixelwerte aufgelöst, sodass die verwendeten Werte in Pixeln sind, während die berechneten Werte weiterhin in Prozent angegeben werden.

Beachten Sie, dass die Art und Weise, wie wir es präsentieren, die beiden APIs ähnlicher erscheinen lässt, als sie sind. `computedStyleMap()` enthält [CSS Typed OM](/de/docs/Web/API/CSS_Typed_OM_API)-Objekte, während `getComputedStyle()` Zeichenfolgen enthält. Ersteres präsentiert dieselben Informationen in einer strukturierteren und verarbeitbaren Weise.

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
