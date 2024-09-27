---
title: StylePropertyMapReadOnly
slug: Web/API/StylePropertyMapReadOnly
l10n:
  sourceCommit: 8d202854ade7328f827da2951bc714455f78674f
---

{{APIRef("CSS Typed Object Model API")}}

Das **`StylePropertyMapReadOnly`**-Interface der [CSS Typed Object Model API](/de/docs/Web/API/CSS_Object_Model#css_typed_object_model) bietet eine schreibgeschützte Darstellung eines CSS-Deklarationsblocks, der eine Alternative zu [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration) darstellt. Eine Instanz dieses Interfaces kann mittels [`Element.computedStyleMap()`](/de/docs/Web/API/Element/computedStyleMap) abgerufen werden.

## Instanzeigenschaften

- [`StylePropertyMapReadOnly.size`](/de/docs/Web/API/StylePropertyMapReadOnly/size)
  - : Gibt eine nicht-negativ ganzzahlige Zahl zurück, die die Größe des `StylePropertyMapReadOnly`-Objekts enthält.

## Instanzmethoden

- [`StylePropertyMapReadOnly.entries()`](/de/docs/Web/API/StylePropertyMapReadOnly/entries)
  - : Gibt ein Array der eigenen aufzählbaren `[key, value]`-Paare eines Objekts in der gleichen Reihenfolge zurück, die auch durch eine {{jsxref("Statements/for...in", "for...in")}}-Schleife bereitgestellt wird (der Unterschied ist, dass eine for-in Schleife auch Eigenschaften in der Prototypenkette aufzählt).
- [`StylePropertyMapReadOnly.forEach()`](/de/docs/Web/API/StylePropertyMapReadOnly/forEach)
  - : Führt eine bereitgestellte Funktion einmal für jedes Element von `StylePropertyMapReadOnly` aus.
- [`StylePropertyMapReadOnly.get()`](/de/docs/Web/API/StylePropertyMapReadOnly/get)
  - : Gibt den Wert der angegebenen Eigenschaft zurück.
- [`StylePropertyMapReadOnly.getAll()`](/de/docs/Web/API/StylePropertyMapReadOnly/getAll)
  - : Gibt ein Array von [`CSSStyleValue`](/de/docs/Web/API/CSSStyleValue)-Objekten zurück, das die Werte für die angegebene Eigenschaft enthält.
- [`StylePropertyMapReadOnly.has()`](/de/docs/Web/API/StylePropertyMapReadOnly/has)
  - : Zeigt an, ob die angegebene Eigenschaft im `StylePropertyMapReadOnly`-Objekt vorhanden ist.
- [`StylePropertyMapReadOnly.keys()`](/de/docs/Web/API/StylePropertyMapReadOnly/keys)
  - : Gibt einen neuen _Array Iterator_ zurück, der die Schlüssel für jedes Element in `StylePropertyMapReadOnly` enthält.
- [`StylePropertyMapReadOnly.values()`](/de/docs/Web/API/StylePropertyMapReadOnly/values)
  - : Gibt einen neuen _Array Iterator_ zurück, der die Werte für jeden Index im `StylePropertyMapReadOnly`-Objekt enthält.

## Beispiele

Wir benötigen ein Element, das wir beobachten können:

```html
<p>
  This is a paragraph with some text. We can add some CSS, or not. The style map
  will include all the default and inherited CSS property values.
</p>
<dl id="output"></dl>
```

Wir fügen etwas CSS mit einer benutzerdefinierten Eigenschaft hinzu, um die Ausgabe besser zu demonstrieren:

```css
p {
  --someVariable: 1.6em;
  --someOtherVariable: translateX(33vw);
  --anotherVariable: 42;
  line-height: var(--someVariable);
}
```

Wir fügen JavaScript hinzu, um unseren Absatz zu erfassen und eine Definitionsliste aller Standard-CSS-Eigenschaftenwerte mit Hilfe von [`Element.computedStyleMap()`](/de/docs/Web/API/Element/computedStyleMap) zurückzugeben.

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
