---
title: "StylePropertyMapReadOnly: get()-Methode"
short-title: get()
slug: Web/API/StylePropertyMapReadOnly/get
l10n:
  sourceCommit: 101ffc9479db6aaa530f2aac3992734dd97d1b86
---

{{APIRef("CSS Typed Object Model API")}}

Die **`get()`**-Methode der {{domxref("StylePropertyMapReadOnly")}}-Schnittstelle gibt ein {{domxref("CSSStyleValue")}}-Objekt für den ersten Wert der angegebenen Eigenschaft zurück.

## Syntax

```js-nolint
get(property)
```

### Parameter

- `property`
  - : Der Name der Eigenschaft, deren Wert abgerufen werden soll.

### Rückgabewert

Ein {{domxref("CSSStyleValue")}}-Objekt.

## Beispiele

Lassen Sie uns einige Eigenschaften und Werte abrufen. Wir beginnen mit dem Erstellen eines Links innerhalb eines Absatzes in unserem HTML und fügen eine Definitionsliste hinzu, die wir mit JavaScript füllen werden:

```html
<p>
  <a href="https://example.com">Link</a>
</p>
<dl id="results"></dl>
```

Wir fügen etwas CSS hinzu, einschließlich einer benutzerdefinierten Eigenschaft und einer vererbbaren Eigenschaft:

```css
p {
  font-weight: bold;
}
a {
  --color: red;
  color: var(--color);
}
```

Wir verwenden die `computedStyleMap()`-Methode des Elements, um ein _StylePropertyMapReadOnly_-Objekt zurückzugeben. Wir erstellen ein Array von interessanten Eigenschaften und verwenden die `get()`-Methode von StylePropertyMapReadOnly, um nur diese Werte abzurufen.

```js
// Element abrufen
const myElement = document.querySelector("a");

// Alle berechneten Stile mit computedStyleMap() abrufen
const styleMap = myElement.computedStyleMap();

// das <dl> abrufen, das wir ausfüllen werden
const stylesList = document.querySelector("#results");

// Array der interessanten Eigenschaften
const ofInterest = ["font-weight", "border-left-color", "color", "--color"];

// über unsere interessanten Eigenschaften iterieren
for (const property of ofInterest) {
  // Eigenschaften
  const cssProperty = document.createElement("dt");
  cssProperty.innerText = property;
  stylesList.appendChild(cssProperty);

  // Werte
  const cssValue = document.createElement("dd");
  // get() verwenden, um den Wert zu finden
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
- [Learning Houdini: the CSS Typed Object Model](/de/docs/Web/API/CSS_Typed_OM_API/Guide)
