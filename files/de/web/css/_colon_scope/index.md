---
title: :scope
slug: Web/CSS/:scope
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`:scope`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) repräsentiert Elemente, die als Referenzpunkt oder Geltungsbereich für Selektoren dienen, um Vergleiche durchzuführen.

```css
/* Selects a scoped element */
:scope {
  background-color: lime;
}
```

Welche Elemente `:scope` entspricht, hängt vom Kontext ab, in dem es verwendet wird:

- Wenn es auf der obersten Ebene eines Stylesheets verwendet wird, ist `:scope` äquivalent zu {{cssxref(":root")}}, was in einem regulären HTML-Dokument dem {{htmlelement("html")}}-Element entspricht.
- Wenn es innerhalb eines {{cssxref("@scope")}} Blocks verwendet wird, entspricht `:scope` der definierten Scope-Root des Blocks. Es bietet eine Möglichkeit, Stile aus dem Inneren des `@scope` Blocks auf die Root des Scopes anzuwenden.
- Wenn es innerhalb eines DOM-API-Aufrufs — wie [`querySelector()`](/de/docs/Web/API/Element/querySelector), [`querySelectorAll()`](/de/docs/Web/API/Element/querySelectorAll), [`matches()`](/de/docs/Web/API/Element/matches), oder [`Element.closest()`](/de/docs/Web/API/Element/closest) — verwendet wird, entspricht `:scope` dem Element, für das die Methode aufgerufen wurde.

## Syntax

```css
:scope {
  /* ... */
}
```

## Beispiele

### Verwendung von `:scope` als Alternative zu `:root`

Dieses Beispiel zeigt, dass `:scope` gleichbedeutend mit `:root` ist, wenn es auf der obersten Ebene eines Stylesheets verwendet wird. In diesem Fall färbt das bereitgestellte CSS den Hintergrund des `<html>` Elements orange.

```css
:scope {
  background-color: orange;
}
```

{{ EmbedLiveSample("Verwendung von :scope als Alternative zu :root", "100%", 50) }}

### Verwendung von `:scope`, um das Scope-Root in einem `@scope` Block zu stylen

In diesem Beispiel verwenden wir zwei separate `@scope` Blöcke, um Links innerhalb von Elementen mit einer `.light-scheme` und `.dark-scheme` Klasse zuzuordnen. Beachten Sie, wie `:scope` verwendet wird, um die Scope-Roots selbst auszuwählen und zu stylen. In diesem Beispiel sind die Scope-Roots die {{htmlelement("div")}} Elemente, denen die Klassen zugewiesen sind.

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
    color: darkmagenta;
  }
}

@scope (.dark-scheme) {
  :scope {
    background-color: darkmagenta;
    color: antiquewhite;
  }

  a {
    color: plum;
  }
}
```

#### Ergebnis

{{ EmbedLiveSample("Verwendung von :scope, um das Scope-Root in einem @scope Block zu stylen", "100%", 150) }}

### Verwendung von `:scope` in JavaScript

Dieses Beispiel demonstriert die Verwendung der `:scope` Pseudoklasse in JavaScript. Dies kann nützlich sein, wenn Sie einen direkten Nachfolger eines bereits abgerufenen [`Element`](/de/docs/Web/API/Element) benötigen.

#### HTML

```html
<div id="context">
  <div id="element-1">
    <div id="element-1.1"></div>
    <div id="element-1.2"></div>
  </div>
  <div id="element-2">
    <div id="element-2.1"></div>
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

document.getElementById("results").textContent = Array.prototype.map
  .call(selected, (element) => `#${element.getAttribute("id")}`)
  .join(", ");
```

#### Ergebnis

Der Scope von `context` ist das Element mit der [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) von `context`. Die ausgewählten Elemente sind die `<div>` Elemente, die direkte Kinder dieses Kontextes sind — `element-1` und `element-2` — aber nicht deren Nachkommen.

{{ EmbedLiveSample('Verwendung von :scope in JavaScript') }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die {{cssxref("@scope")}} [At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rule)
- Die {{cssxref(":root")}} [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes)
- [Auffinden von DOM-Elementen mit Selektoren](/de/docs/Web/API/Document_Object_Model/Locating_DOM_elements_using_selectors)
- [`Element.querySelector()`](/de/docs/Web/API/Element/querySelector) und [`Element.querySelectorAll()`](/de/docs/Web/API/Element/querySelectorAll)
- [`Document.querySelector()`](/de/docs/Web/API/Document/querySelector) und [`Document.querySelectorAll()`](/de/docs/Web/API/Document/querySelectorAll)
- [`DocumentFragment.querySelector()`](/de/docs/Web/API/DocumentFragment/querySelector) und [`DocumentFragment.querySelectorAll()`](/de/docs/Web/API/DocumentFragment/querySelectorAll)
