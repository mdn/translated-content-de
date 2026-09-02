---
title: "Window: getDefaultComputedStyle() Methode"
short-title: getDefaultComputedStyle()
slug: Web/API/Window/getDefaultComputedStyle
l10n:
  sourceCommit: ce12c10364f35c64184dec44be85537b7e10d91f
---

{{APIRef("CSSOM")}}{{Non-standard_Header}}

Die **`getDefaultComputedStyle()`**-Methode gibt die standardmäßigen [berechneten Werte](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#computed_value) aller CSS-Eigenschaften eines Elements zurück, wobei Autorenstile ignoriert werden. Das heißt, es werden nur Benutzeragent- und Benutzerstile berücksichtigt.

## Syntax

```js-nolint
getDefaultComputedStyle(element)
getDefaultComputedStyle(element, pseudoElt)
```

### Parameter

- `element`
  - : Das [`Element`](/de/docs/Web/API/Element), für das der berechnete Stil abgerufen werden soll.
- `pseudoElt` {{optional_inline}}
  - : Ein String, der das Pseudoelement angibt, das übereinstimmen soll. Muss `null` sein (oder nicht angegeben), wenn es sich um reguläre Elemente handelt.

### Rückgabewert

Der zurückgegebene `style` ist ein [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration)-Objekt. Das Objekt ist vom selben Typ wie das durch [`Window.getComputedStyle()`](/de/docs/Web/API/Window/getComputedStyle) zurückgegebene Objekt, berücksichtigt jedoch nur Benutzeragent- und Benutzerregeln.

## Beispiele

### Einfaches Beispiel

```js
const elem = document.getElementById("elemId");
const style = getDefaultComputedStyle(elem);
```

### Längeres Beispiel

```html
<div id="elem-container">dummy</div>
<div id="output"></div>
```

```css
#elem-container {
  position: absolute;
  left: 100px;
  top: 200px;
  height: 100px;
}
```

```js
const elem = document.getElementById("elem-container");
const theCSSprop = getDefaultComputedStyle(elem).position;
document.getElementById("output").textContent = theCSSprop; // outputs "static"
```

### Verwendung mit Pseudoelementen

Die `getDefaultComputedStyle()`-Methode kann Stilinformationen von Pseudoelementen abrufen (z. B. {{cssxref("::before")}} oder {{cssxref("::after")}}).

```html
<h3>generated content</h3>
```

```css
h3::after {
  content: " rocks!";
}
```

```js
const h3 = document.querySelector("h3");
const result = getDefaultComputedStyle(h3, "::after").content;

console.log("the generated content is: ", result); // returns 'none'
```

## Hinweise

Der zurückgegebene Wert ist in bestimmten bekannten Fällen absichtlich falsch. Um insbesondere das sogenannte CSS History Leak-Sicherheitsproblem zu vermeiden, können Browser absichtlich "lügen" über den verwendeten Wert für einen Link und immer Werte zurückgeben, als ob ein Benutzer die verlinkte Seite nie besucht hat, und/oder die Stile einschränken, die mit dem `:visited` Pseudo-Selektor angewendet werden können. Siehe <https://blog.mozilla.org/security/2010/03/31/plugging-the-css-history-leak/> und <https://hacks.mozilla.org/2010/03/privacy-related-changes-coming-to-css-vistited/> für Details zu Beispielen, wie dies implementiert wird.

## Spezifikationen

Vorgeschlagen an die CSS-Arbeitsgruppe.

## Browser-Kompatibilität

{{Compat}}
