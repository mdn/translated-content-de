---
title: "Window: getDefaultComputedStyle()-Methode"
short-title: getDefaultComputedStyle()
slug: Web/API/Window/getDefaultComputedStyle
l10n:
  sourceCommit: 95edea913e7f0726243aff3f47b85cfd6f02d995
---

{{APIRef("CSSOM")}}{{Non-standard_Header}}

Die **`getDefaultComputedStyle()`**-Methode liefert die Standard-[berechneten Werte](/de/docs/Web/CSS/CSS_cascade/Value_processing#computed-value) aller CSS-Eigenschaften eines Elements, unter Ignorieren der Autoren-Stile. Das bedeutet, dass nur Benutzeragenten- und Benutzerstile berücksichtigt werden.

## Syntax

```js-nolint
getDefaultComputedStyle(element)
getDefaultComputedStyle(element, pseudoElt)
```

### Parameter

- `element`
  - : Das [`Element`](/de/docs/Web/API/Element), für das die berechneten Stile abgerufen werden sollen.
- `pseudoElt` {{optional_inline}}
  - : Ein String, der das zu matchende Pseudo-Element angibt. Muss `null` sein (oder nicht angegeben) für reguläre Elemente.

### Rückgabewert

Der zurückgegebene `style` ist ein [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration)-Objekt. Das Objekt ist vom gleichen Typ wie das Objekt, das von [`Window.getComputedStyle()`](/de/docs/Web/API/Window/getComputedStyle) zurückgegeben wird, berücksichtigt jedoch nur Benutzeragenten- und Benutzerregeln.

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

## Anmerkungen

Der zurückgegebene Wert ist in bestimmten bekannten Fällen absichtlich falsch. Insbesondere, um das sogenannte CSS-History-Leak-Sicherheitsproblem zu vermeiden, können Browser absichtlich "lügen" über den verwendeten Wert für einen Link und immer so tun, als ob ein Benutzer die verlinkte Seite nie besucht hat, und/oder die Stile begrenzen, die mit dem `:visited` Pseudo-Selektor angewendet werden können. Details und Beispiele, wie dies umgesetzt wird, finden Sie unter <https://blog.mozilla.org/security/2010/03/31/plugging-the-css-history-leak/> und <https://hacks.mozilla.org/2010/03/privacy-related-changes-coming-to-css-vistited/>.

## Spezifikationen

Vorgeschlagen an die CSS-Arbeitsgruppe.

## Browser-Kompatibilität

{{Compat}}
