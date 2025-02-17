---
title: "Window: getDefaultComputedStyle()-Methode"
short-title: getDefaultComputedStyle()
slug: Web/API/Window/getDefaultComputedStyle
l10n:
  sourceCommit: a075805de90029b65fa5cfcc8ea43737728320f5
---

{{APIRef("CSSOM")}}{{Non-standard_Header}}

Die **`getDefaultComputedStyle()`**-Methode liefert die standardmäßigen [berechneten Werte](/de/docs/Web/CSS/CSS_cascade/computed_value) aller CSS-Eigenschaften eines Elements, ohne Berücksichtigung des Autors. Das bedeutet, dass nur Benutzeragent- und Benutzerstile berücksichtigt werden.

## Syntax

```js-nolint
getDefaultComputedStyle(element)
getDefaultComputedStyle(element, pseudoElt)
```

### Parameter

- `element`
  - : Das [`Element`](/de/docs/Web/API/Element), für das der berechnete Stil abgerufen werden soll.
- `pseudoElt` {{optional_inline}}
  - : Ein String, der das Pseudo-Element angibt, mit dem Übereinstimmung erzielt werden soll. Muss `null` sein (oder nicht spezifiziert), wenn es sich um reguläre Elemente handelt.

### Rückgabewert

Der zurückgegebene `style` ist ein [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration)-Objekt. Das Objekt ist vom gleichen Typ wie das Objekt, das von [`Window.getComputedStyle()`](/de/docs/Web/API/Window/getComputedStyle) zurückgegeben wird, berücksichtigt jedoch nur Benutzeragent- und Benutzerregeln.

## Beispiele

### Einfaches Beispiel

```js
const elem1 = document.getElementById("elemId");
const style = window.getDefaultComputedStyle(elem1);
```

### Längeres Beispiel

```html
<style>
  #elem-container {
    position: absolute;
    left: 100px;
    top: 200px;
    height: 100px;
  }
</style>

<div id="elem-container">dummy</div>
<div id="output"></div>

<script>
  const elem = document.getElementById("elem-container");
  const theCSSprop = window.getDefaultComputedStyle(elem).position;
  document.getElementById("output").textContent = theCSSprop; // Will output "static"
</script>
```

### Verwendung mit Pseudo-Elementen

Die Methode `getDefaultComputedStyle()` kann Stilinformationen von Pseudo-Elementen (z. B. {{cssxref("::before")}} oder {{cssxref("::after")}}) abrufen.

```html
<style>
  h3:after {
    content: " rocks!";
  }
</style>

<h3>generated content</h3>

<script>
  const h3 = document.querySelector("h3");
  const result = getDefaultComputedStyle(h3, ":after").content;

  console.log("the generated content is: ", result); // returns 'none'
</script>
```

## Hinweise

Der zurückgegebene Wert ist in bestimmten bekannten Fällen bewusst absichtlich falsch. Insbesondere, um das sogenannte CSS-History-Leak-Sicherheitsproblem zu vermeiden, können Browser absichtlich „lügen“ und immer Werte zurückgeben, als ob ein Benutzer die verlinkte Seite nie besucht hätte, und/oder die Stile einschränken, die mit dem Pseudo-Selektor `:visited` angewendet werden können. Details und Beispiele zur Implementierung finden Sie unter <https://blog.mozilla.org/security/2010/03/31/plugging-the-css-history-leak/> und <https://hacks.mozilla.org/2010/03/privacy-related-changes-coming-to-css-vistited/>.

## Spezifikationen

Vorgeschlagen für die CSS-Arbeitsgruppe.

## Browser-Kompatibilität

{{Compat}}
