---
title: StylePropertyMapReadOnly
slug: Web/API/StylePropertyMapReadOnly
l10n:
  sourceCommit: 8d202854ade7328f827da2951bc714455f78674f
---

{{APIRef("CSS Typed Object Model API")}}

Die **`StylePropertyMapReadOnly`**-Schnittstelle der [CSS Typed Object Model API](/de/docs/Web/API/CSS_Object_Model#css_typed_object_model) bietet eine schreibgeschützte Darstellung eines CSS-Deklarationsblocks, der eine Alternative zur [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration) darstellt. Sie können eine Instanz dieser Schnittstelle mit [`Element.computedStyleMap()`](/de/docs/Web/API/Element/computedStyleMap) abrufen.

## Instanz-Eigenschaften

- [`StylePropertyMapReadOnly.size`](/de/docs/Web/API/StylePropertyMapReadOnly/size)
  - : Gibt eine nicht signierte ganze Zahl zurück, die die Größe des `StylePropertyMapReadOnly`-Objekts enthält.

## Instanz-Methoden

- [`StylePropertyMapReadOnly.entries()`](/de/docs/Web/API/StylePropertyMapReadOnly/entries)
  - : Gibt ein Array der eigenen aufzählbaren `[key, value]`-Paare eines gegebenen Objekts zurück, in derselben Reihenfolge wie beim {{jsxref("Statements/for...in", "for...in")}}-Schleife (mit dem Unterschied, dass eine for-in-Schleife auch Eigenschaften in der Prototypkette aufzählt).
- [`StylePropertyMapReadOnly.forEach()`](/de/docs/Web/API/StylePropertyMapReadOnly/forEach)
  - : Führt eine bereitgestellte Funktion einmal für jedes Element von `StylePropertyMapReadOnly` aus.
- [`StylePropertyMapReadOnly.get()`](/de/docs/Web/API/StylePropertyMapReadOnly/get)
  - : Gibt den Wert der angegebenen Eigenschaft zurück.
- [`StylePropertyMapReadOnly.getAll()`](/de/docs/Web/API/StylePropertyMapReadOnly/getAll)
  - : Gibt ein Array von [`CSSStyleValue`](/de/docs/Web/API/CSSStyleValue)-Objekten zurück, das die Werte für die bereitgestellte Eigenschaft enthält.
- [`StylePropertyMapReadOnly.has()`](/de/docs/Web/API/StylePropertyMapReadOnly/has)
  - : Zeigt an, ob die angegebene Eigenschaft im `StylePropertyMapReadOnly`-Objekt vorhanden ist.
- [`StylePropertyMapReadOnly.keys()`](/de/docs/Web/API/StylePropertyMapReadOnly/keys)
  - : Gibt einen neuen _Array-Iterator_ zurück, der die Schlüssel für jedes Element in `StylePropertyMapReadOnly` enthält.
- [`StylePropertyMapReadOnly.values()`](/de/docs/Web/API/StylePropertyMapReadOnly/values)
  - : Gibt einen neuen _Array-Iterator_ zurück, der die Werte für jeden Index im `StylePropertyMapReadOnly`-Objekt enthält.

## Beispiele

Wir benötigen ein Element, um es zu beobachten:

```html
<p>
  This is a paragraph with some text. We can add some CSS, or not. The style map
  will include all the default and inherited CSS property values.
</p>
<dl id="output"></dl>
```

Wir fügen ein wenig CSS mit einer benutzerdefinierten Eigenschaft hinzu, um die Ausgabe besser zu demonstrieren:

```css
p {
  --someVariable: 1.6em;
  --someOtherVariable: translateX(33vw);
  --anotherVariable: 42;
  line-height: var(--someVariable);
}
```

Wir fügen JavaScript hinzu, um unseren Absatz zu erfassen und eine Definitionsliste aller Standard-CSS-Eigenschaftswerte mit [`Element.computedStyleMap()`](/de/docs/Web/API/Element/computedStyleMap) zurückzugeben.

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
