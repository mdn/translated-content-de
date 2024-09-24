---
title: ":scope"
slug: Web/CSS/:scope
l10n:
  sourceCommit: 1d306a49f1584c1117bdf14d9b64bb0769d81c07
---

{{CSSRef}}

Die **`:scope`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) repräsentiert Elemente, die einen Referenzpunkt oder Bereich darstellen, mit dem Selektoren übereinstimmen können.

```css
/* Wählt ein gescope’d Element aus */
:scope {
  background-color: lime;
}
```

Welche Elemente `:scope` übereinstimmt, hängt vom Kontext ab, in dem es verwendet wird:

- Bei Verwendung auf der Wurzelebene eines Stylesheets ist `:scope` gleichbedeutend mit {{cssxref(":root")}}, was in einem regulären HTML-Dokument dem {{htmlelement("html")}}-Element entspricht.
- Bei Verwendung innerhalb eines {{cssxref("@scope")}}-Blocks stimmt `:scope` mit der definierten Wurzel des Bereichs des Blocks überein. Es bietet die Möglichkeit, Stile auf die Wurzel des Bereichs aus dem `@scope`-Block selbst anzuwenden.
- Bei Verwendung innerhalb eines DOM-API-Aufrufs — wie z.B. {{domxref("Element.querySelector", "querySelector()")}}, {{domxref("Element.querySelectorAll", "querySelectorAll()")}}, {{domxref("Element.matches", "matches()")}} oder {{domxref("Element.closest()")}} — stimmt `:scope` mit dem Element überein, auf dem die Methode aufgerufen wurde.

## Syntax

```css
:scope {
  /* ... */
}
```

## Beispiele

### Verwendung von `:scope` als Alternative zu `:root`

Dieses Beispiel zeigt, dass `:scope` gleichbedeutend mit `:root` ist, wenn es auf der Wurzelebene eines Stylesheets verwendet wird. In diesem Fall färbt das bereitgestellte CSS den Hintergrund des `<html>`-Elements orange.

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

In diesem Beispiel verwenden wir zwei separate `@scope`-Blöcke, um Links innerhalb von Elementen mit einer `.light-scheme`- bzw. `.dark-scheme`-Klasse abzugleichen. Beachten Sie, wie `:scope` verwendet wird, um die Bereichswurzeln selbst auszuwählen und zu gestalten. In diesem Beispiel sind die Bereichswurzeln die {{htmlelement("div")}}-Elemente, die die angewendeten Klassen haben.

#### HTML

```html
<div class="light-scheme">
  <p>
    MDN enthält viele Informationen über
    <a href="/de/docs/Web/HTML">HTML</a>,
    <a href="/de/docs/Web/CSS">CSS</a> und
    <a href="/de/docs/Web/JavaScript">JavaScript</a>.
  </p>
</div>

<div class="dark-scheme">
  <p>
    MDN enthält viele Informationen über
    <a href="/de/docs/Web/HTML">HTML</a>,
    <a href="/de/docs/Web/CSS">CSS</a> und
    <a href="/de/docs/Web/JavaScript">JavaScript</a>.
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

Dieses Beispiel demonstriert die Verwendung der `:scope` Pseudoklasse in JavaScript. Dies kann nützlich sein, wenn Sie einen direkten Nachfahren eines bereits abgerufenen {{domxref("Element")}} benötigen.

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
  Ausgewählte Element-IDs :
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

Der Bereich von `context` ist das Element mit der [`id`](/de/docs/Web/HTML/Global_attributes#id) von `context`. Die ausgewählten Elemente sind die `<div>`-Elemente, die direkte Kinder dieses Bereichs sind — `element-1` und `element-2` — aber nicht deren Nachkommen.

{{ EmbedLiveSample('Using :scope in JavaScript') }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die {{cssxref("@scope")}} [At-Regel](/de/docs/Web/CSS/At-rule)
- Die {{cssxref(":root")}} [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes)
- [DOM-Elemente mit Selektoren lokalisieren](/de/docs/Web/API/Document_Object_Model/Locating_DOM_elements_using_selectors)
- {{domxref("Element.querySelector()")}} und {{domxref("Element.querySelectorAll()")}}
- {{domxref("Document.querySelector()")}} und {{domxref("Document.querySelectorAll()")}}
- {{domxref("DocumentFragment.querySelector()")}} und {{domxref("DocumentFragment.querySelectorAll()")}}
