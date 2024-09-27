---
title: "Window: getDefaultComputedStyle() Methode"
short-title: getDefaultComputedStyle()
slug: Web/API/Window/getDefaultComputedStyle
l10n:
  sourceCommit: b065c09b79d18abf0f04778c9307e1c312b8c6f9
---

{{APIRef("CSSOM")}}{{Non-standard_Header}}

Die **`getDefaultComputedStyle()`** Methode gibt die standardmäßigen [berechneten Werte](/de/docs/Web/CSS/computed_value) aller CSS-Eigenschaften eines Elements zurück und ignoriert dabei Autor-Styling. Das bedeutet, dass nur Benutzeragent- und Benutzerstile berücksichtigt werden.

## Syntax

```js-nolint
getDefaultComputedStyle(element)
getDefaultComputedStyle(element, pseudoElt)
```

### Parameter

- `element`
  - : Das [`Element`](/de/docs/Web/API/Element), für das der berechnete Stil abgerufen werden soll.
- `pseudoElt` {{optional_inline}}
  - : Ein String, der das zugehörige Pseudo-Element angibt. Muss `null` sein (oder nicht angegeben), wenn es sich um reguläre Elemente handelt.

### Rückgabewert

Der zurückgegebene `style` ist ein [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration) Objekt. Das Objekt ist vom gleichen Typ wie das Objekt, das von [`Window.getComputedStyle()`](/de/docs/Web/API/Window/getComputedStyle) zurückgegeben wird, berücksichtigt jedoch nur Benutzeragent- und Benutzervorschriften.

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

Die `getDefaultComputedStyle()` Methode kann Stilinformationen von Pseudo-Elementen abrufen (z.B. {{cssxref("::before")}} oder {{cssxref("::after")}}).

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

Der zurückgegebene Wert ist in einigen bekannten Fällen absichtlich falsch. Insbesondere, um das sogenannte Sicherheitsproblem CSS History Leak zu vermeiden, können Browser absichtlich "lügen" über den verwendeten Wert für einen Link und immer Werte zurückgeben, als ob ein Benutzer die verlinkte Seite nie besucht hätte, und/oder die Stile einschränken, die mit dem `:visited` Pseudo-Selektor angewendet werden können. Siehe <https://blog.mozilla.org/security/2010/03/31/plugging-the-css-history-leak/> und <https://hacks.mozilla.org/2010/03/privacy-related-changes-coming-to-css-vistited/> für Details zu Beispielen, wie dies umgesetzt ist.

## Spezifikationen

Vorgeschlagen zur CSS-Arbeitsgruppe.

## Browser-Kompatibilität

{{Compat}}
