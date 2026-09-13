---
title: "`:scope` CSS-Pseudoklasse"
short-title: :scope
slug: Web/CSS/Reference/Selectors/:scope
l10n:
  sourceCommit: e8310a9d2806a4aebf457f75eec4671e14e47e44
---

Die **`:scope`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) repräsentiert Elemente, die einen Referenzpunkt oder eine Bereichebene (`scope`) für Selektoren darstellen, gegen die abgeglichen wird.

```css
/* Selects a scoped element */
:scope {
  background-color: lime;
}
```

Welche(s) Element(e) `:scope` abgleicht, hängt vom Kontext ab, in dem es verwendet wird:

- Bei Verwendung auf der Wurzelebene eines Stylesheets ist `:scope` gleichbedeutend mit {{cssxref(":root")}}, was in einem regulären HTML-Dokument dem {{htmlelement("html")}}-Element entspricht.
- Bei Verwendung innerhalb eines {{cssxref("@scope")}}-Blocks stimmt `:scope` mit der definierten Wurzel des Bereichs überein. Es bietet eine Möglichkeit, Styles auf die Wurzel des Bereichs anzuwenden, von innerhalb des `@scope`-Blocks selbst.
- Bei Verwendung innerhalb eines DOM-API-Aufrufs — wie [`querySelector()`](/de/docs/Web/API/Element/querySelector), [`querySelectorAll()`](/de/docs/Web/API/Element/querySelectorAll), [`matches()`](/de/docs/Web/API/Element/matches) oder [`Element.closest()`](/de/docs/Web/API/Element/closest) — stimmt `:scope` mit dem Element überein, auf dem die Methode aufgerufen wurde.

## Syntax

```css
:scope {
  /* ... */
}
```

## Beispiele

### Verwendung von `:scope` als Alternative zu `:root`

Dieses Beispiel zeigt, dass `:scope` gleichbedeutend mit `:root` ist, wenn es auf der Wurzelebene eines Stylesheets verwendet wird. In diesem Fall färbt das bereitgestellte CSS den Hintergrund des `<html>`-Elements orange.

```css
:scope {
  background-color: orange;
}
```

{{ EmbedLiveSample("Using :scope as an alternative to :root", "100%", 50) }}

### Verwendung von `:scope` zum Stylen der Bereichebenen-Wurzel in einem `@scope`-Block

In diesem Beispiel verwenden wir zwei separate `@scope`-Blöcke, um Links innerhalb von Elementen mit den Klassen `.light-scheme` und `.dark-scheme` jeweils abzugleichen. Beachten Sie, wie `:scope` verwendet wird, um die Bereichebenen-Wurzeln selbst auszuwählen und zu stylen. In diesem Beispiel sind die Bereichebenen-Wurzeln die {{htmlelement("div")}}-Elemente, denen die Klassen zugewiesen sind.

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

{{ EmbedLiveSample("Using :scope to style the scope root in a @scope block", "100%", 150) }}

### Verwendung von `:scope` in JavaScript

Dieses Beispiel demonstriert die Verwendung der `:scope`-Pseudoklasse in JavaScript. Dies kann nützlich sein, wenn Sie einen direkten Nachfahren eines bereits abgerufenen [`Element`](/de/docs/Web/API/Element) benötigen.

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

Der Bereich von `context` ist das Element mit der [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) von `context`. Die ausgewählten Elemente sind die `<div>`-Elemente, die direkte Kinder dieses Kontextes sind — `element-1` und `element-2` — jedoch nicht deren Nachfahren.

{{ EmbedLiveSample('Using :scope in JavaScript') }}

### Geschwister-Kombinatoren rechts von `:scope` passen nie

Die durch `:scope` definierte Beziehung ist immer von Vorfahre zu Nachfahre von der Bereichebenen-Wurzel. Daher erzeugt das Setzen eines Geschwister-Kombinators rechts von `:scope` einen Selektor, der nie passen kann, da kein Element sowohl im Selektorbereich sein als auch ein Geschwister von `:scope` sein kann.

```css example-bad
:scope + p {
  color: red;
}

:scope ~ * {
  color: red;
}
```

Selektoren, die nie passen, können eine Warnung in den Browser-DevTools auslösen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die {{cssxref("@scope")}} [at-rule](/de/docs/Web/CSS/Guides/Syntax/At-rules)
- Die {{cssxref(":root")}} [Pseudoklasse](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes)
- [Auswahl und Traversierung auf dem DOM-Baum](/de/docs/Web/API/Document_Object_Model/Selection_and_traversal_on_the_DOM_tree)
- [`Element.querySelector()`](/de/docs/Web/API/Element/querySelector) und [`Element.querySelectorAll()`](/de/docs/Web/API/Element/querySelectorAll)
- [`Document.querySelector()`](/de/docs/Web/API/Document/querySelector) und [`Document.querySelectorAll()`](/de/docs/Web/API/Document/querySelectorAll)
- [`DocumentFragment.querySelector()`](/de/docs/Web/API/DocumentFragment/querySelector) und [`DocumentFragment.querySelectorAll()`](/de/docs/Web/API/DocumentFragment/querySelectorAll)
