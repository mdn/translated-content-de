---
title: "Fenster: getDefaultComputedStyle() Methode"
short-title: getDefaultComputedStyle()
slug: Web/API/Window/getDefaultComputedStyle
l10n:
  sourceCommit: 950f04d94b48f259c471175bdafb52933b2b038d
---

{{APIRef("CSSOM")}}{{Non-standard_Header}}

Die **`getDefaultComputedStyle()`** Methode liefert die Standard-[berechneten Werte](/de/docs/Web/CSS/CSS_cascade/Value_processing#computed_value) aller CSS-Eigenschaften eines Elements und ignoriert dabei autorenmäßige Stile. Das heißt, es werden nur Benutzer-Agent- und Benutzer-Stile berücksichtigt.

## Syntax

```js-nolint
getDefaultComputedStyle(element)
getDefaultComputedStyle(element, pseudoElt)
```

### Parameter

- `element`
  - : Das [`Element`](/de/docs/Web/API/Element), für das der berechnete Stil abgerufen werden soll.
- `pseudoElt` {{optional_inline}}
  - : Ein String, der das Pseudo-Element angibt, das übereinstimmen soll. Muss `null` (oder nicht angegeben) für reguläre Elemente sein.

### Rückgabewert

Der zurückgegebene `style` ist ein [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration) Objekt. Das Objekt ist vom gleichen Typ wie das Objekt, das von [`Window.getComputedStyle()`](/de/docs/Web/API/Window/getComputedStyle) zurückgegeben wird, berücksichtigt jedoch nur Benutzer-Agent- und Benutzerrichtlinien.

## Beispiele

### Einfaches Beispiel

```js
const elem1 = document.getElementById("elemId");
const style = getDefaultComputedStyle(elem1);
```

### Umfangreicheres Beispiel

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

Die `getDefaultComputedStyle()` Methode kann Stilinformationen von Pseudo-Elementen abrufen (z.B. {{cssxref("::before")}} oder {{cssxref("::after")}}).

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

## Anmerkungen

Der zurückgegebene Wert ist in bestimmten bekannten Fällen ausdrücklich absichtlich falsch. Insbesondere, um das sogenannte CSS History Leak Sicherheitsproblem zu vermeiden, können Browser ausdrücklich "lügen" über den verwendeten Wert für einen Link und immer Werte zurückgeben, als hätte ein Benutzer die verlinkte Seite nie besucht, und/oder die Stile einschränken, die mit dem `:visited` Pseudoselektor angewendet werden können. Weitere Details und Beispiele, wie dies implementiert wird, finden Sie unter <https://blog.mozilla.org/security/2010/03/31/plugging-the-css-history-leak/> und <https://hacks.mozilla.org/2010/03/privacy-related-changes-coming-to-css-vistited/>.

## Spezifikationen

Vorgeschlagen für die CSS-Arbeitsgruppe.

## Browser-Kompatibilität

{{Compat}}
