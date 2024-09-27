---
title: "StylePropertyMapReadOnly: get()-Methode"
short-title: get()
slug: Web/API/StylePropertyMapReadOnly/get
l10n:
  sourceCommit: 101ffc9479db6aaa530f2aac3992734dd97d1b86
---

{{APIRef("CSS Typed Object Model API")}}

Die **`get()`**-Methode der [`StylePropertyMapReadOnly`](/de/docs/Web/API/StylePropertyMapReadOnly)-Schnittstelle gibt ein [`CSSStyleValue`](/de/docs/Web/API/CSSStyleValue)-Objekt für den ersten Wert der angegebenen Eigenschaft zurück.

## Syntax

```js-nolint
get(property)
```

### Parameter

- `property`
  - : Der Name der Eigenschaft, deren Wert abgerufen werden soll.

### Rückgabewert

Ein [`CSSStyleValue`](/de/docs/Web/API/CSSStyleValue)-Objekt.

## Beispiele

Lassen Sie uns nur ein paar Eigenschaften und Werte abrufen. Beginnen wir damit, einen Link innerhalb eines Absatzes in unserem HTML zu erstellen und eine Definitionsliste hinzuzufügen, die wir mit JavaScript füllen werden:

```html
<p>
  <a href="https://example.com">Link</a>
</p>
<dl id="results"></dl>
```

Wir fügen ein wenig CSS hinzu, einschließlich einer benutzerdefinierten Eigenschaft und einer vererbbaren Eigenschaft:

```css
p {
  font-weight: bold;
}
a {
  --color: red;
  color: var(--color);
}
```

Wir verwenden die [`computedStyleMap()`](/de/docs/Web/API/Element/computedStyleMap) des Elements, um ein _StylePropertyMapReadOnly_-Objekt zurückzugeben. Wir erstellen ein Array von interessierenden Eigenschaften und verwenden die `get()`-Methode von StylePropertyMapReadOnly, um nur diese Werte abzurufen.

```js
// get the element
const myElement = document.querySelector("a");

// Retrieve all computed styles with computedStyleMap()
const styleMap = myElement.computedStyleMap();

// get the <dl> we'll be populating
const stylesList = document.querySelector("#results");

// array of properties we're interested in
const ofInterest = ["font-weight", "border-left-color", "color", "--color"];

// iterate over our properties of interest
for (const property of ofInterest) {
  // properties
  const cssProperty = document.createElement("dt");
  cssProperty.innerText = property;
  stylesList.appendChild(cssProperty);

  // values
  const cssValue = document.createElement("dd");
  // use get() to find the value
  cssValue.innerText = styleMap.get(property);
  stylesList.appendChild(cssValue);
}
```

{{EmbedLiveSample("Examples", 120, 300)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API)
- [Lernen Sie Houdini: das CSS Typed Object Model](/de/docs/Web/API/CSS_Typed_OM_API/Guide)
