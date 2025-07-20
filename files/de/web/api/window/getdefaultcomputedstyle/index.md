---
title: "Fenster: Methode getDefaultComputedStyle()"
short-title: getDefaultComputedStyle()
slug: Web/API/Window/getDefaultComputedStyle
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

{{APIRef("CSSOM")}}{{Non-standard_Header}}

Die **`getDefaultComputedStyle()`**-Methode liefert die Standard-[berechneten Werte](/de/docs/Web/CSS/CSS_cascade/Value_processing#computed_value) aller CSS-Eigenschaften eines Elements, wobei die Autoren-Styles ignoriert werden. Das bedeutet, dass nur Benutzeragent- und Benutzer-Styles berücksichtigt werden.

## Syntax

```js-nolint
getDefaultComputedStyle(element)
getDefaultComputedStyle(element, pseudoElt)
```

### Parameter

- `element`
  - : Das [`Element`](/de/docs/Web/API/Element), für das der berechnete Style ermittelt werden soll.
- `pseudoElt` {{optional_inline}}
  - : Ein Zeichenfolgenwert, der das zu berücksichtigende Pseudo-Element angibt. Muss `null` sein (oder nicht angegeben), wenn es sich um reguläre Elemente handelt.

### Rückgabewert

Der zurückgegebene `style` ist ein [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration)-Objekt. Dieses Objekt ist vom gleichen Typ wie das Objekt, das von [`Window.getComputedStyle()`](/de/docs/Web/API/Window/getComputedStyle) zurückgegeben wird, berücksichtigt jedoch nur Benutzeragent- und Benutzerregeln.

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

Die `getDefaultComputedStyle()`-Methode kann Style-Informationen von Pseudo-Elementen abrufen (z.B. {{cssxref("::before")}} oder {{cssxref("::after")}}).

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

Der zurückgegebene Wert ist in bestimmten bekannten Fällen bewusst inkorrekt, und zwar aus Sicherheitsgründen. Speziell um das sogenannte CSS-Verlaufsleck-Sicherheitsproblem zu vermeiden, können Browser bewusst "lügen" über den verwendeten Wert für einen Link und immer Werte zurückgeben, als ob ein Benutzer die verlinkte Seite nie besucht hätte, und/oder die Styles einschränken, die mit dem `:visited`-Pseudoselektor angewandt werden können. Details zur Implementierung dieser Beispiele finden Sie unter <https://blog.mozilla.org/security/2010/03/31/plugging-the-css-history-leak/> und <https://hacks.mozilla.org/2010/03/privacy-related-changes-coming-to-css-vistited/>.

## Spezifikationen

Vorgeschlagen für die CSS-Arbeitsgruppe.

## Browser-Kompatibilität

{{Compat}}
