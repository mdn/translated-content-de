---
title: StylePropertyMapReadOnly
slug: Web/API/StylePropertyMapReadOnly
l10n:
  sourceCommit: 8d202854ade7328f827da2951bc714455f78674f
---

{{APIRef("CSS Typed Object Model API")}}

Die **`StylePropertyMapReadOnly`** Schnittstelle der [CSS Typed Object Model API](/de/docs/Web/API/CSS_Object_Model#css_typed_object_model) bietet eine schreibgeschützte Darstellung eines CSS-Deklarationsblocks, der eine Alternative zu {{domxref("CSSStyleDeclaration")}} darstellt. Sie können eine Instanz dieser Schnittstelle mit {{domxref('Element.computedStyleMap','Element.computedStyleMap()')}} abrufen.

## Instanzeigenschaften

- {{domxref('StylePropertyMapReadOnly.size')}}
  - : Gibt eine nicht-negative ganze Zahl zurück, die die Größe des `StylePropertyMapReadOnly` Objekts enthält.

## Instanzmethoden

- {{domxref('StylePropertyMapReadOnly.entries()')}}
  - : Gibt ein Array von eigenen aufzählbaren Eigenschafts-`[key, value]`-Paaren eines Objekts in der gleichen Reihenfolge wie bei einer {{jsxref("Statements/for...in", "for...in")}}-Schleife zurück (der Unterschied besteht darin, dass eine for-in-Schleife auch Eigenschaften in der Prototypkette aufzählt).
- {{domxref('StylePropertyMapReadOnly.forEach()')}}
  - : Führt eine bereitgestellte Funktion für jedes Element von `StylePropertyMapReadOnly` einmal aus.
- {{domxref('StylePropertyMapReadOnly.get()')}}
  - : Gibt den Wert der angegebenen Eigenschaft zurück.
- {{domxref('StylePropertyMapReadOnly.getAll()')}}
  - : Gibt ein Array von {{domxref("CSSStyleValue")}} Objekten zurück, die die Werte für die bereitgestellte Eigenschaft enthalten.
- {{domxref('StylePropertyMapReadOnly.has()')}}
  - : Gibt an, ob die angegebene Eigenschaft im `StylePropertyMapReadOnly` Objekt vorhanden ist.
- {{domxref('StylePropertyMapReadOnly.keys()')}}
  - : Gibt einen neuen _Array-Iterator_ zurück, der die Schlüssel für jedes Element in `StylePropertyMapReadOnly` enthält.
- {{domxref('StylePropertyMapReadOnly.values()')}}
  - : Gibt einen neuen _Array-Iterator_ zurück, der die Werte für jeden Index im `StylePropertyMapReadOnly` Objekt enthält.

## Beispiele

Wir benötigen ein Element zur Beobachtung:

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
  --someVariable: 1.6em;
  --someOtherVariable: translateX(33vw);
  --anotherVariable: 42;
  line-height: var(--someVariable);
}
```

Wir fügen JavaScript hinzu, um unseren Absatz zu erfassen und eine Definitionsliste aller Standard-CSS-Eigenschaftswerte mit {{domxref('Element.computedStyleMap()')}} zurückzugeben.

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

## Browserkompatibilität

{{Compat}}
