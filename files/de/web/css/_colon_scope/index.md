---
title: ":scope"
slug: Web/CSS/:scope
l10n:
  sourceCommit: 1d306a49f1584c1117bdf14d9b64bb0769d81c07
---

{{CSSRef}}

Die **`:scope`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) repräsentiert Elemente, die als Referenzpunkt oder Bereich für Selektoren dienen, um übereinzustimmen.

```css
/* Selects a scoped element */
:scope {
  background-color: lime;
}
```

Welche Elemente `:scope` übereinstimmen, hängt vom Kontext ab, in dem es verwendet wird:

- Wenn sie auf der Stammebene eines Stylesheets verwendet wird, ist `:scope` äquivalent zu {{cssxref(":root")}}, was in einem regulären HTML-Dokument das {{htmlelement("html")}}-Element ist.
- Wenn sie innerhalb eines {{cssxref("@scope")}}-Blocks verwendet wird, entspricht `:scope` der im Block definierten Bereichswurzel. Es bietet eine Möglichkeit, Stile auf die Wurzel des Bereichs aus dem `@scope`-Block selbst anzuwenden.
- Wenn sie innerhalb eines DOM-API-Aufrufs verwendet wird — wie [`querySelector()`](/de/docs/Web/API/Element/querySelector), [`querySelectorAll()`](/de/docs/Web/API/Element/querySelectorAll), [`matches()`](/de/docs/Web/API/Element/matches) oder [`Element.closest()`](/de/docs/Web/API/Element/closest) — entspricht `:scope` dem Element, auf dem die Methode aufgerufen wurde.

## Syntax

```css
:scope {
  /* ... */
}
```

## Beispiele

### Verwendung von `:scope` als Alternative zu `:root`

In diesem Beispiel wird gezeigt, dass `:scope` gleichwertig zu `:root` ist, wenn es auf der Stammebene eines Stylesheets verwendet wird. In diesem Fall färbt das bereitgestellte CSS den Hintergrund des `<html>`-Elements orange.

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

### Verwendung von `:scope` zur Gestaltung der Bereichswurzel in einem `@scope`-Block

In diesem Beispiel verwenden wir zwei separate `@scope`-Blöcke, um Links innerhalb von Elementen mit einer Klasse `.light-scheme` und `.dark-scheme` zu gestalten. Beachten Sie, wie `:scope` verwendet wird, um die Bereichswurzeln selbst auszuwählen und zu stylen. In diesem Beispiel sind die Bereichswurzeln die {{htmlelement("div")}}-Elemente, denen die Klassen zugewiesen sind.

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

Dieses Beispiel demonstriert die Verwendung der Pseudoklasse `:scope` in JavaScript. Dies kann nützlich sein, wenn Sie einen direkten Nachfahren eines bereits abgerufenen [`Element`](/de/docs/Web/API/Element) erhalten müssen.

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

Der Bereich von `context` ist das Element mit der [`id`](/de/docs/Web/HTML/Global_attributes#id) von `context`. Die ausgewählten Elemente sind die `<div>`-Elemente, die direkte Kinder dieses Kontexts sind — `element-1` und `element-2` — jedoch nicht deren Nachfahren.

{{ EmbedLiveSample('Using :scope in JavaScript') }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die {{cssxref("@scope")}} [at-rule](/de/docs/Web/CSS/At-rule)
- Die {{cssxref(":root")}} [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes)
- [DOM-Elemente mittels Selektoren finden](/de/docs/Web/API/Document_Object_Model/Locating_DOM_elements_using_selectors)
- [`Element.querySelector()`](/de/docs/Web/API/Element/querySelector) und [`Element.querySelectorAll()`](/de/docs/Web/API/Element/querySelectorAll)
- [`Document.querySelector()`](/de/docs/Web/API/Document/querySelector) und [`Document.querySelectorAll()`](/de/docs/Web/API/Document/querySelectorAll)
- [`DocumentFragment.querySelector()`](/de/docs/Web/API/DocumentFragment/querySelector) und [`DocumentFragment.querySelectorAll()`](/de/docs/Web/API/DocumentFragment/querySelectorAll)
