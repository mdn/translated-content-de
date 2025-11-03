---
title: :visited
slug: Web/CSS/Reference/Selectors/:visited
l10n:
  sourceCommit: c52ed787442db9d65b21f5c2874fa6bfd08a253a
---

Die **`:visited`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) wird angewendet, nachdem der Link vom Benutzer besucht wurde. Aus Datenschutzgründen sind die Stile, die mit diesem Selektor verändert werden können, sehr eingeschränkt. Die `:visited` Pseudoklasse gilt nur für {{htmlelement("a")}} und {{htmlelement("area")}} Elemente, die ein `href`-Attribut haben.

{{InteractiveExample("CSS Demo: :visited", "tabbed-shorter")}}

```css interactive-example
p {
  font-weight: bold;
}

a:visited {
  color: forestgreen;
  text-decoration-color: hotpink;
}
```

```html interactive-example
<p>Pages that you might have visited:</p>
<ul>
  <li>
    <a href="https://developer.mozilla.org">MDN Web Docs</a>
  </li>
  <li>
    <a href="https://www.youtube.com/">YouTube</a>
  </li>
</ul>
<p>Pages unlikely to be in your history:</p>
<ul>
  <li>
    <a href="https://developer.mozilla.org/missing-1">Random MDN page</a>
  </li>
  <li>
    <a href="https://example.com/missing-1">Random Example page</a>
  </li>
</ul>
```

Stile, die durch die `:visited` und unbesuchten [`:link`](/de/docs/Web/CSS/Reference/Selectors/:link) Pseudoklassen definiert sind, können durch jede nachfolgende Benutzeraktions-Pseudoklasse ({{cssxref(":hover")}} oder {{cssxref(":active")}}), die mindestens gleiche Spezifität haben, überschrieben werden. Um Links angemessen zu stylen, platzieren Sie die `:visited` Regel nach der `:link` Regel, aber vor den `:hover` und `:active` Regeln, wie es durch die _LVHA-Reihenfolge_ definiert ist: `:link` — `:visited` — `:hover` — `:active`. Die `:visited` Pseudoklasse und die `:link` Pseudoklasse schließen sich gegenseitig aus.

## Datenschutzbeschränkungen

Aus Datenschutzgründen schränken Browser die Stil-Anwendung durch diese Pseudoklasse strikt ein und wie sie verwendet werden können:

- Zulässige CSS-Eigenschaften sind {{ cssxref("color") }}, {{ cssxref("background-color") }}, {{ cssxref("border-color") }}, {{ cssxref("border-bottom-color") }}, {{ cssxref("border-left-color") }}, {{ cssxref("border-right-color") }}, {{ cssxref("border-top-color") }}, {{ cssxref("column-rule-color") }}, {{ cssxref("outline-color") }}, {{ cssxref("text-decoration-color") }}, und {{ cssxref("text-emphasis-color") }}.
- Zulässige SVG-Attribute sind {{SVGAttr("fill")}} und {{SVGAttr("stroke")}}.
- Der Alphakanal der zulässigen Stile wird ignoriert. Der Alphakanal des nicht-`:visited`-Zustands des Elements wird stattdessen verwendet. In Firefox wird bei einem Alphakanal von `0` der im `:visited` gesetzte Stil vollständig ignoriert.
- Obwohl diese Stile das Erscheinungsbild der Farben für den Endbenutzer verändern können, wird die [`window.getComputedStyle`](/de/docs/Web/API/Window/getComputedStyle) Methode nicht wahrheitsgemäß sein und immer den Wert der nicht-`:visited`-Farbe zurückgeben.
- Das [`<link>`](/de/docs/Web/HTML/Reference/Elements/link) Element wird niemals von `:visited` erfasst.
- DOM-Methoden, die Elemente über CSS-Selektoren auswählen — wie [`querySelector()`](/de/docs/Web/API/Document/querySelector) und [`querySelectorAll()`](/de/docs/Web/API/Document/querySelectorAll) — werden immer ein "leeres" Ergebnis zurückgeben, auch wenn es besuchte Links in einem Dokument gibt. Für die genannten Methoden wird dies `null` oder eine leere [`NodeList`](/de/docs/Web/API/NodeList) sein.

> [!NOTE]
> Für weitere Informationen zu diesen Einschränkungen und den dahinterliegenden Gründen, siehe [Datenschutz und der :visited Selektor](/de/docs/Web/CSS/CSS_selectors/Privacy_and_the_visited_selector).

## Syntax

```css
:visited {
  /* ... */
}
```

## Beispiele

Eigenschaften, die ansonsten keine Farbe haben oder transparent sind, können mit `:visited` nicht verändert werden. Von den Eigenschaften, die mit dieser Pseudoklasse gesetzt werden können, hat Ihr Browser wahrscheinlich nur für `color` und `column-rule-color` einen Standardwert. Wenn Sie also die anderen Eigenschaften ändern möchten, müssen Sie ihnen außerhalb des `:visited` Selektors einen Basiswert geben.

### HTML

```html
<a href="#test-visited-link">Have you visited this link yet?</a><br />
<a href="">You've already visited this link.</a>
```

### CSS

```css
a {
  /* Specify non-transparent defaults to certain properties,
     allowing them to be styled with the :visited state */
  background-color: white;
  border: 1px solid white;
}

a:visited {
  background-color: yellow;
  border-color: hotpink;
  color: hotpink;
}
```

### Ergebnis

{{EmbedLiveSample("Examples")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Datenschutz und der :visited Selektor](/de/docs/Web/CSS/CSS_selectors/Privacy_and_the_visited_selector)
- Link-bezogene Pseudoklassen: {{cssxref(":link")}}, {{cssxref(":active")}}, {{cssxref(":hover")}}
