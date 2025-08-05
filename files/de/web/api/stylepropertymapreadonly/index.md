---
title: StylePropertyMapReadOnly
slug: Web/API/StylePropertyMapReadOnly
l10n:
  sourceCommit: 635820782735cd00f71ce3929ff9377b091f8995
---

{{APIRef("CSS Typed Object Model API")}}

Das **`StylePropertyMapReadOnly`** Interface der [CSS Typed Object Model API](/de/docs/Web/API/CSS_Object_Model#css_typed_object_model) bietet eine schreibgeschützte Darstellung eines CSS-Deklarationsblocks, der eine Alternative zu [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration) darstellt. Eine Instanz dieses Interfaces kann über [`Element.computedStyleMap()`](/de/docs/Web/API/Element/computedStyleMap) abgerufen werden.

## Instanzen-Eigenschaften

- [`StylePropertyMapReadOnly.size`](/de/docs/Web/API/StylePropertyMapReadOnly/size)
  - : Gibt eine nicht-signierte lange Zahl zurück, die die Größe des `StylePropertyMapReadOnly` Objekts enthält.

## Instanzen-Methoden

- [`StylePropertyMapReadOnly.entries()`](/de/docs/Web/API/StylePropertyMapReadOnly/entries)
  - : Gibt ein Array von `[key, value]` Paaren der eigenen aufzählbaren Eigenschaften eines gegebenen Objekts in der gleichen Reihenfolge zurück, wie es von einer {{jsxref("Statements/for...in", "for...in")}} Schleife bereitgestellt wird (der Unterschied ist, dass eine for-in Schleife auch Eigenschaften in der Prototyp-Kette aufzählt).
- [`StylePropertyMapReadOnly.forEach()`](/de/docs/Web/API/StylePropertyMapReadOnly/forEach)
  - : Führt eine bereitgestellte Funktion einmal für jedes Element von `StylePropertyMapReadOnly` aus.
- [`StylePropertyMapReadOnly.get()`](/de/docs/Web/API/StylePropertyMapReadOnly/get)
  - : Gibt den Wert der angegebenen Eigenschaft zurück.
- [`StylePropertyMapReadOnly.getAll()`](/de/docs/Web/API/StylePropertyMapReadOnly/getAll)
  - : Gibt ein Array von [`CSSStyleValue`](/de/docs/Web/API/CSSStyleValue) Objekten zurück, die die Werte für die angegebene Eigenschaft enthalten.
- [`StylePropertyMapReadOnly.has()`](/de/docs/Web/API/StylePropertyMapReadOnly/has)
  - : Gibt an, ob die angegebene Eigenschaft im `StylePropertyMapReadOnly` Objekt enthalten ist.
- [`StylePropertyMapReadOnly.keys()`](/de/docs/Web/API/StylePropertyMapReadOnly/keys)
  - : Gibt einen neuen _Array-Iterator_ zurück, der die Schlüssel für jedes Element im `StylePropertyMapReadOnly` enthält.
- [`StylePropertyMapReadOnly.values()`](/de/docs/Web/API/StylePropertyMapReadOnly/values)
  - : Gibt einen neuen _Array-Iterator_ zurück, der die Werte für jeden Index im `StylePropertyMapReadOnly` Objekt enthält.

## Beispiele

Wir brauchen ein Element zur Beobachtung:

```html
<p>
  This is a paragraph with some text. We can add some CSS, or not. The style map
  will include all the default and inherited CSS property values.
</p>
<dl id="output"></dl>
```

Wir fügen etwas CSS mit einer benutzerdefinierten Eigenschaft hinzu, um die Ausgabe besser zu veranschaulichen:

```css
p {
  --some-variable: 1.6em;
  --some-other-variable: translateX(33vw);
  --another-variable: 42;
  line-height: var(--some-variable);
}
```

Wir fügen JavaScript hinzu, um unseren Absatz zu greifen und eine Definitionsliste aller Standard-CSS-Eigenschaftenwerte mit [`Element.computedStyleMap()`](/de/docs/Web/API/Element/computedStyleMap) zurückzugeben.

```js
// get the element
const myElement = document.querySelector("p");

// get the <dl> we'll be populating
const stylesList = document.querySelector("#output");

// Retrieve all computed styles with computedStyleMap()
const stylePropertyMap = myElement.computedStyleMap();

// iterate through the map of all the properties and values, adding a <dt> and <dd> for each
for (const [prop, val] of stylePropertyMap) {
  // properties
  const cssProperty = document.createElement("dt");
  cssProperty.innerText = prop;
  stylesList.appendChild(cssProperty);

  // values
  const cssValue = document.createElement("dd");
  cssValue.innerText = val;
  stylesList.appendChild(cssValue);
}
```

{{EmbedLiveSample("Examples", 120, 300)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
