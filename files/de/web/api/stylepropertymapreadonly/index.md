---
title: StylePropertyMapReadOnly
slug: Web/API/StylePropertyMapReadOnly
l10n:
  sourceCommit: 285179734bb0505a755c76aa556b6cb12d81b643
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

Die **`StylePropertyMapReadOnly`**-Schnittstelle der [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API) bietet eine schreibgeschützte Darstellung eines CSS-Deklarationsblocks, die eine Alternative zu [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration) darstellt.
Eine Instanz dieser Schnittstelle kann mit [`Element.computedStyleMap()`](/de/docs/Web/API/Element/computedStyleMap) abgerufen werden.

## Instanzeigenschaften

- [`StylePropertyMapReadOnly.size`](/de/docs/Web/API/StylePropertyMapReadOnly/size)
  - : Gibt eine nicht-negative ganze Zahl zurück, die die Größe des `StylePropertyMapReadOnly`-Objekts enthält.

## Instanzmethoden

- [`StylePropertyMapReadOnly.entries()`](/de/docs/Web/API/StylePropertyMapReadOnly/entries)
  - : Gibt ein Array von `[key, value]`-Paaren der eigenen aufzählbaren Eigenschaften eines gegebenen Objekts zurück, in der gleichen Reihenfolge, wie sie durch eine {{jsxref("Statements/for...in", "for...in")}}-Schleife bereitgestellt werden (der Unterschied ist, dass eine for-in-Schleife auch Eigenschaften in der Prototypenkette aufzählt).
- [`StylePropertyMapReadOnly.forEach()`](/de/docs/Web/API/StylePropertyMapReadOnly/forEach)
  - : Führt eine bereitgestellte Funktion einmal für jedes Element von `StylePropertyMapReadOnly` aus.
- [`StylePropertyMapReadOnly.get()`](/de/docs/Web/API/StylePropertyMapReadOnly/get)
  - : Gibt den Wert der angegebenen Eigenschaft zurück.
- [`StylePropertyMapReadOnly.getAll()`](/de/docs/Web/API/StylePropertyMapReadOnly/getAll)
  - : Gibt ein Array von [`CSSStyleValue`](/de/docs/Web/API/CSSStyleValue)-Objekten zurück, die die Werte für die angegebene Eigenschaft enthalten.
- [`StylePropertyMapReadOnly.has()`](/de/docs/Web/API/StylePropertyMapReadOnly/has)
  - : Gibt an, ob die angegebene Eigenschaft im `StylePropertyMapReadOnly`-Objekt enthalten ist.
- [`StylePropertyMapReadOnly.keys()`](/de/docs/Web/API/StylePropertyMapReadOnly/keys)
  - : Gibt einen neuen _Array-Iterator_ zurück, der die Schlüssel für jedes Element in `StylePropertyMapReadOnly` enthält.
- [`StylePropertyMapReadOnly.values()`](/de/docs/Web/API/StylePropertyMapReadOnly/values)
  - : Gibt einen neuen _Array-Iterator_ zurück, der die Werte für jedes Index im `StylePropertyMapReadOnly`-Objekt enthält.

## Beispiele

### Grundlegende Verwendung

Wir benötigen ein Element zur Beobachtung:

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
  --some-variable: 1.6em;
  --some-other-variable: translateX(33vw);
  --another-variable: 42;
  line-height: var(--some-variable);
}
```

Wir fügen JavaScript hinzu, um unser Paragraphen-Element zu greifen und eine Definitionsliste aller Standard-CSS-Eigenschaftswerte mit [`Element.computedStyleMap()`](/de/docs/Web/API/Element/computedStyleMap) zurückzugeben.

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
