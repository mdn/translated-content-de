---
title: "Fenster: getDefaultComputedStyle()-Methode"
short-title: getDefaultComputedStyle()
slug: Web/API/Window/getDefaultComputedStyle
l10n:
  sourceCommit: 1b88b4d62918f6f13d1155825e3881f52d90206e
---

{{APIRef("CSSOM")}}{{Non-standard_Header}}

Die **`getDefaultComputedStyle()`**-Methode liefert die standardmäßigen [berechneten Werte](/de/docs/Web/CSS/CSS_cascade/Value_processing#computed_value) aller CSS-Eigenschaften eines Elements und ignoriert dabei Autor-Styling. Das heißt, es werden nur User-Agent- und Benutzerstile berücksichtigt.

## Syntax

```js-nolint
getDefaultComputedStyle(element)
getDefaultComputedStyle(element, pseudoElt)
```

### Parameter

- `element`
  - : Das [`Element`](/de/docs/Web/API/Element), für das der berechnete Stil ermittelt werden soll.
- `pseudoElt` {{optional_inline}}
  - : Ein String, der das zugehörige Pseudo-Element angibt. Muss `null` sein (oder nicht angegeben) für reguläre Elemente.

### Rückgabewert

Der zurückgegebene `style` ist ein [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration)-Objekt. Das Objekt ist vom gleichen Typ wie das Objekt, das von [`Window.getComputedStyle()`](/de/docs/Web/API/Window/getComputedStyle) zurückgegeben wird, berücksichtigt jedoch nur User-Agent- und Benutzerregeln.

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

Die `getDefaultComputedStyle()`-Methode kann Stilinformationen von Pseudo-Elementen abrufen (z.B. {{cssxref("::before")}} oder {{cssxref("::after")}}).

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

Der zurückgegebene Wert ist in bestimmten bekannten Fällen absichtlich falsch, um gezielt Sicherheitsprobleme wie das sogenannte CSS-History-Leak zu vermeiden. Insbesondere können Browser absichtlich "falsche" Werte für einen Link angeben und immer so tun, als hätte ein Benutzer die verlinkte Seite nie besucht, und/oder die Stile begrenzen, die mit dem `:visited`-Pseudo-Selektor angewendet werden können. Siehe <https://blog.mozilla.org/security/2010/03/31/plugging-the-css-history-leak/> und <https://hacks.mozilla.org/2010/03/privacy-related-changes-coming-to-css-vistited/> für Details zu Beispielen, wie dies implementiert wird.

## Spezifikationen

An die CSS-Arbeitsgruppe vorgeschlagen.

## Browser-Kompatibilität

{{Compat}}
