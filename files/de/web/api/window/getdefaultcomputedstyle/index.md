---
title: "Window: getDefaultComputedStyle() Methode"
short-title: getDefaultComputedStyle()
slug: Web/API/Window/getDefaultComputedStyle
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{APIRef("CSSOM")}}{{Non-standard_Header}}

Die **`getDefaultComputedStyle()`**-Methode gibt die Standard-[berechneten Werte](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#computed_value) aller CSS-Eigenschaften eines Elements zurück und ignoriert dabei Autoren-Styling. Das bedeutet, dass nur Benutzeragent- und Benutzerstile berücksichtigt werden.

## Syntax

```js-nolint
getDefaultComputedStyle(element)
getDefaultComputedStyle(element, pseudoElt)
```

### Parameter

- `element`
  - : Das [`Element`](/de/docs/Web/API/Element), für das der berechnete Stil abgerufen werden soll.
- `pseudoElt` {{optional_inline}}
  - : Ein String, der das Pseudo-Element angibt, das übereinstimmen soll. Muss `null` sein (oder nicht spezifiziert) für normale Elemente.

### Rückgabewert

Der zurückgegebene `style` ist ein [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration)-Objekt. Das Objekt ist vom gleichen Typ wie das Objekt, das von [`Window.getComputedStyle()`](/de/docs/Web/API/Window/getComputedStyle) zurückgegeben wird, aber es werden nur Benutzeragenten- und Benutzerregeln berücksichtigt.

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

### Verwendung mit Pseudo-Elementen

Die `getDefaultComputedStyle()`-Methode kann Stilinformationen von Pseudo-Elementen abrufen (z.B. {{cssxref("::before")}} oder {{cssxref("::after")}}).

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

Der zurückgegebene Wert ist in bestimmten bekannten Fällen absichtlich falsch. Insbesondere, um das sogenannte CSS History Leak-Sicherheitsproblem zu vermeiden, können Browser ausdrücklich "lügen" über den tatsächlichen Wert für einen Link und immer Werte zurückgeben, als ob ein Benutzer die verlinkte Seite nie besucht hat, und/oder die Stile begrenzen, die mit dem `:visited` Pseudo-Selektor angewendet werden können. Siehe <https://blog.mozilla.org/security/2010/03/31/plugging-the-css-history-leak/> und <https://hacks.mozilla.org/2010/03/privacy-related-changes-coming-to-css-vistited/> für Details zu Beispielen, wie dies implementiert wird.

## Spezifikationen

Dem CSS-Arbeitsgruppe vorgeschlagen.

## Browser-Kompatibilität

{{Compat}}
