---
title: ":scope"
slug: Web/CSS/:scope
l10n:
  sourceCommit: 92447fec056cc89b7f28445851bea0c981fcbc12
---

{{CSSRef}}

Die **`:scope`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) repräsentiert Elemente, die einen Referenzpunkt oder Geltungsbereich für Selektoren darstellen, um gegen diese zu matchen.

```css
/* Selects a scoped element */
:scope {
  background-color: lime;
}
```

Welche(s) Element(e) `:scope` matcht, hängt vom Kontext ab, in dem es verwendet wird:

- Wenn `:scope` auf der obersten Ebene eines Stylesheets verwendet wird, ist es gleichbedeutend mit {{cssxref(":root")}}, welches in einem normalen HTML-Dokument das {{htmlelement("html")}}-Element matched.
- Wenn `:scope` innerhalb eines {{cssxref("@scope")}}-Blocks verwendet wird, matcht es die im Block definierte Wurzel des Geltungsbereichs. Es bietet eine Möglichkeit, Stile auf die Wurzel des Geltungsbereichs selbst aus dem `@scope`-Block anzuwenden.
- Wenn es innerhalb eines DOM-API-Aufrufs verwendet wird — wie [`querySelector()`](/de/docs/Web/API/Element/querySelector), [`querySelectorAll()`](/de/docs/Web/API/Element/querySelectorAll), [`matches()`](/de/docs/Web/API/Element/matches) oder [`Element.closest()`](/de/docs/Web/API/Element/closest) — matcht `:scope` das Element, auf dem die Methode aufgerufen wurde.

## Syntax

```css
:scope {
  /* ... */
}
```

## Beispiele

### Verwendung von `:scope` als Alternative zu `:root`

Dieses Beispiel zeigt, dass `:scope` gleichbedeutend mit `:root` ist, wenn es auf der obersten Ebene eines Stylesheets verwendet wird. In diesem Fall färbt das bereitgestellte CSS den Hintergrund des `<html>`-Elements orange.

#### HTML

```html
<html></html>
```

#### CSS

```css
:scope {
  background-color: orange;
}
```

#### Ergebnis

{{ EmbedLiveSample("Using :scope as an alternative to :root", "100%", 50) }}

### Verwendung von `:scope` zum Stylen der Scope-Wurzel in einem `@scope`-Block

In diesem Beispiel verwenden wir zwei separate `@scope`-Blöcke, um Links innerhalb von Elementen mit einer `.light-scheme`- und `.dark-scheme`-Klasse entsprechend zu matchen. Beachten Sie, wie `:scope` verwendet wird, um die Scope-Wurzeln selbst auszuwählen und ihnen ein Styling zu geben. In diesem Beispiel sind die Scope-Wurzeln die {{htmlelement("div")}}-Elemente, denen die Klassen zugewiesen sind.

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

{{ EmbedLiveSample("Using :scope to style the scope root in a @scope block", "100%", 150) }}

### Verwendung von `:scope` in JavaScript

Dieses Beispiel demonstriert die Verwendung der `:scope`-Pseudoklasse in JavaScript. Dies kann nützlich sein, wenn Sie einen direkten Nachkommen eines bereits abgerufenen [`Element`](/de/docs/Web/API/Element) erhalten müssen.

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

Der Geltungsbereich von `context` ist das Element mit der [`id`](/de/docs/Web/HTML/Global_attributes/id) `context`. Die ausgewählten Elemente sind die `<div>`-Elemente, die direkte Kinder dieses Kontexts sind — `element-1` und `element-2` — aber nicht deren Nachkommen.

{{ EmbedLiveSample('Using :scope in JavaScript') }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die {{cssxref("@scope")}} [At-Regel](/de/docs/Web/CSS/At-rule)
- Die {{cssxref(":root")}} [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes)
- [DOM-Elemente mit Selektoren lokalisieren](/de/docs/Web/API/Document_Object_Model/Locating_DOM_elements_using_selectors)
- [`Element.querySelector()`](/de/docs/Web/API/Element/querySelector) und [`Element.querySelectorAll()`](/de/docs/Web/API/Element/querySelectorAll)
- [`Document.querySelector()`](/de/docs/Web/API/Document/querySelector) und [`Document.querySelectorAll()`](/de/docs/Web/API/Document/querySelectorAll)
- [`DocumentFragment.querySelector()`](/de/docs/Web/API/DocumentFragment/querySelector) und [`DocumentFragment.querySelectorAll()`](/de/docs/Web/API/DocumentFragment/querySelectorAll)
