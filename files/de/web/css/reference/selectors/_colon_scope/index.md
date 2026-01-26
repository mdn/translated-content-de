---
title: :scope
slug: Web/CSS/Reference/Selectors/:scope
l10n:
  sourceCommit: 28e834cdc972a940d80a370f2fa15263a44c944b
---

Die **`:scope`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) repräsentiert Elemente, die als Referenzpunkt oder Bereich für Selektoren dienen, gegen die sie abgeglichen werden können.

```css
/* Selects a scoped element */
:scope {
  background-color: lime;
}
```

Welche Elemente von `:scope` erfasst werden, hängt vom Kontext ab, in dem es verwendet wird:

- Wenn es auf der Wurzelebene eines Stylesheets verwendet wird, entspricht `:scope` {{cssxref(":root")}}, das in einem regulären HTML-Dokument das {{htmlelement("html")}}-Element erfasst.
- Wenn es innerhalb eines {{cssxref("@scope")}} Blocks verwendet wird, entspricht `:scope` der definierten Bereichswurzel des Blocks. Es bietet eine Möglichkeit, Stile auf die Wurzel des Bereichs aus dem `@scope` Block selbst anzuwenden.
- Wenn es innerhalb eines DOM API-Aufrufs verwendet wird — wie zum Beispiel [`querySelector()`](/de/docs/Web/API/Element/querySelector), [`querySelectorAll()`](/de/docs/Web/API/Element/querySelectorAll), [`matches()`](/de/docs/Web/API/Element/matches) oder [`Element.closest()`](/de/docs/Web/API/Element/closest) — entspricht `:scope` dem Element, auf dem die Methode aufgerufen wurde.

## Syntax

```css
:scope {
  /* ... */
}
```

## Beispiele

### Verwendung von `:scope` als Alternative zu `:root`

Dieses Beispiel zeigt, dass `:scope` gleichwertig zu `:root` ist, wenn es auf der Wurzelebene eines Stylesheets verwendet wird. In diesem Fall färbt das bereitgestellte CSS den Hintergrund des `<html>`-Elements orange.

```css
:scope {
  background-color: orange;
}
```

{{ EmbedLiveSample("Verwendung von :scope als Alternative zu :root", "100%", 50) }}

### Verwendung von `:scope`, um die Bereichswurzel in einem `@scope` Block zu stylen

In diesem Beispiel verwenden wir zwei separate `@scope` Blöcke, um Links innerhalb von Elementen mit einer `.light-scheme` bzw. `.dark-scheme` Klasse abzugleichen. Beachten Sie, wie `:scope` verwendet wird, um die Bereichswurzeln selbst auszuwählen und zu stylen. In diesem Beispiel sind die Bereichswurzeln die {{htmlelement("div")}}-Elemente, denen die Klassen zugewiesen sind.

#### HTML

```html
<div class="light-scheme">
  <p>
    MDN contains lots of information about
    <a href="/en-US/docs/Web/HTML">HTML</a>,
    <a href="/en-US/docs/Web/CSS">CSS</a>, and
    <a href="/en-US/docs/Web/JavaScript">JavaScript</a>.
  </p>
</div>

<div class="dark-scheme">
  <p>
    MDN contains lots of information about
    <a href="/en-US/docs/Web/HTML">HTML</a>,
    <a href="/en-US/docs/Web/CSS">CSS</a>, and
    <a href="/en-US/docs/Web/JavaScript">JavaScript</a>.
  </p>
</div>
```

#### CSS

```css hidden
div {
  padding: 10px;
}
```

```css
@scope (.light-scheme) {
  :scope {
    background-color: plum;
  }

  a {
    color: indigo;
  }
}

@scope (.dark-scheme) {
  :scope {
    background-color: indigo;
    color: antiquewhite;
  }

  a {
    color: plum;
  }
}
```

#### Ergebnis

{{ EmbedLiveSample("Verwendung von :scope, um die Bereichswurzel in einem @scope Block zu stylen", "100%", 150) }}

### Verwendung von `:scope` in JavaScript

Dieses Beispiel demonstriert die Verwendung der `:scope` Pseudoklasse in JavaScript. Dies kann nützlich sein, wenn Sie einen direkten Nachfahren eines bereits abgerufenen [`Element`](/de/docs/Web/API/Element) benötigen.

#### HTML

```html
<div id="context">
  <div id="element-1">
    <div id="element-1-1"></div>
    <div id="element-1-2"></div>
  </div>
  <div id="element-2">
    <div id="element-2-1"></div>
  </div>
</div>
<p>
  Selected element ids :
  <span id="results"></span>
</p>
```

#### JavaScript

```js
const context = document.getElementById("context");
const selected = context.querySelectorAll(":scope > div");

document.getElementById("results").textContent = [...selected]
  .map((element) => `#${element.id}`)
  .join(", ");
```

#### Ergebnis

Der Bereich von `context` ist das Element mit der [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) von `context`. Die ausgewählten Elemente sind die `<div>`-Elemente, die direkte Kinder dieses Kontexts sind — `element-1` und `element-2` — jedoch nicht deren Nachfahren.

{{ EmbedLiveSample('Verwendung von :scope in JavaScript') }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die {{cssxref("@scope")}} [Regel](/de/docs/Web/CSS/Guides/Syntax/At-rules)
- Die {{cssxref(":root")}} [Pseudoklasse](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes)
- [Selektion und Durchlauf im DOM-Baum](/de/docs/Web/API/Document_Object_Model/Selection_and_traversal_on_the_DOM_tree)
- [`Element.querySelector()`](/de/docs/Web/API/Element/querySelector) und [`Element.querySelectorAll()`](/de/docs/Web/API/Element/querySelectorAll)
- [`Document.querySelector()`](/de/docs/Web/API/Document/querySelector) und [`Document.querySelectorAll()`](/de/docs/Web/API/Document/querySelectorAll)
- [`DocumentFragment.querySelector()`](/de/docs/Web/API/DocumentFragment/querySelector) und [`DocumentFragment.querySelectorAll()`](/de/docs/Web/API/DocumentFragment/querySelectorAll)
