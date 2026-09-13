---
title: "Element: Methode computedStyleMap()"
short-title: computedStyleMap()
slug: Web/API/Element/computedStyleMap
l10n:
  sourceCommit: 81a384e18b61c1d1b23d7f58f1fbd8ec3af45558
---

{{APIRef("CSS Typed Object Model API")}}

Die Methode **`computedStyleMap()`** des Interfaces [`Element`](/de/docs/Web/API/Element) gibt ein Interface [`StylePropertyMapReadOnly`](/de/docs/Web/API/StylePropertyMapReadOnly) zurück, das eine schreibgeschützte Darstellung eines CSS-Deklarationsblocks bereitstellt und eine Alternative zu [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration) ist.

## Syntax

```js-nolint
computedStyleMap()
```

### Parameter

Keine.

### Rückgabewert

Ein [`StylePropertyMapReadOnly`](/de/docs/Web/API/StylePropertyMapReadOnly)-Objekt.

Anders als [`Window.getComputedStyle`](/de/docs/Web/API/Window/getComputedStyle) enthält der Rückgabewert [berechnete Werte](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#computed_value), nicht [aufgelöste Werte](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#resolved_value).
Für die meisten Eigenschaften sind diese gleich, mit Ausnahme einiger layoutbezogener Eigenschaften, bei denen der aufgelöste Wert statt des berechneten Werts der [verwendete Wert](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#used_value) ist.
Weitere Details finden Sie im Beispiel [Vergleich mit `getComputedStyle()`](#comparison_with_getcomputedstyle).

## Beispiele

### Standardstile abrufen

Wir beginnen mit einfachem HTML: einem Absatz mit einem Link und einer Definitionsliste, zu der wir alle CSS-Eigenschafts-/Wert-Paare hinzufügen werden.

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

Wir fügen JavaScript hinzu, um unseren Link abzurufen und mithilfe von `computedStyleMap()` eine Definitionsliste aller CSS-Eigenschaftswerte zurückzugeben.

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

In [Browsern, die `computedStyleMap()` unterstützen](#browser-kompatibilität), sehen Sie eine Liste aller CSS-Eigenschaften und -Werte.
In anderen Browsern sehen Sie nur einen Link.

{{EmbedLiveSample("getting_default_styles", 300, 300)}}

Ist Ihnen aufgefallen, wie viele Standard-CSS-Eigenschaften ein Link hat? Ändern Sie `document.querySelector("a")` zu `document.querySelector("p")`, und Sie werden einen Unterschied bei den standardmäßigen berechneten Werten für `margin-top` und `margin-bottom` feststellen.

### Vergleich mit getComputedStyle()

[`Window.getComputedStyle()`](/de/docs/Web/API/Window/getComputedStyle) gibt [aufgelöste Werte](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#resolved_value) zurück, während `computedStyleMap()` [berechnete Werte](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#computed_value) zurückgibt.
Diese sind normalerweise gleich, aber bei einigen Eigenschaften ist der aufgelöste Wert statt des berechneten Werts der [verwendete Wert](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#used_value).
Beispielsweise werden Prozentwerte für Breiten _nach dem Layout_ in Pixelwerte aufgelöst; daher werden die verwendeten Werte in Pixeln angegeben, während die berechneten Werte weiterhin in Prozent angegeben werden.

Beachten Sie, dass die Art, wie wir dies darstellen, die beiden APIs ähnlicher erscheinen lässt, als sie tatsächlich sind. `computedStyleMap()` enthält Objekte von [CSS Typed OM](/de/docs/Web/API/CSS_Typed_OM_API), während `getComputedStyle()` Zeichenketten enthält.
Ersteres stellt dieselben Informationen strukturierter und besser verarbeitbar dar.

In diesem Beispiel wird die Eigenschaft `width` als Prozentwert angegeben, daher wird der berechnete Wert als Prozentwert angegeben, der aufgelöste Wert jedoch in Pixeln.
Die `height` wird immer in Pixeln angegeben. `background-color` ist eine benannte Farbe, wird aber zu einem RGB-Wert berechnet.

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
