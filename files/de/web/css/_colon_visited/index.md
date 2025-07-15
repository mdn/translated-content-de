---
title: :visited
slug: Web/CSS/:visited
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`:visited`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) wird angewendet, wenn der Link vom Benutzer besucht wurde. Aus Datenschutzgründen sind die Stile, die mit diesem Selektor geändert werden können, stark eingeschränkt. Die `:visited`-Pseudoklasse gilt nur für {{htmlelement("a")}}- und {{htmlelement("area")}}-Elemente, die ein `href`-Attribut haben.

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

Von `:visited` und unbesuchten [`:link`](/de/docs/Web/CSS/:link)-Pseudoklassen definierte Stile können von nachfolgenden Benutzeraktions-Pseudoklassen ({{cssxref(":hover")}} oder {{cssxref(":active")}}) mit mindestens gleicher Spezifität überschrieben werden. Um Links angemessen zu stylen, platzieren Sie die `:visited`-Regel nach der `:link`-Regel, aber vor den `:hover`- und `:active`-Regeln, wie durch die _LVHA-Reihenfolge_ definiert: `:link` — `:visited` — `:hover` — `:active`. Die `:visited`-Pseudoklasse und die `:link`-Pseudoklasse schließen sich gegenseitig aus.

## Datenschutzbeschränkungen

Aus Datenschutzgründen beschränken Browser streng, welche Stile Sie mit dieser Pseudoklasse anwenden können und wie sie verwendet werden können:

- Erlaubte CSS-Eigenschaften sind {{ cssxref("color") }}, {{ cssxref("background-color") }}, {{ cssxref("border-color") }}, {{ cssxref("border-bottom-color") }}, {{ cssxref("border-left-color") }}, {{ cssxref("border-right-color") }}, {{ cssxref("border-top-color") }}, {{ cssxref("column-rule-color") }}, {{ cssxref("outline-color") }}, {{ cssxref("text-decoration-color") }} und {{ cssxref("text-emphasis-color") }}.
- Erlaubte SVG-Attribute sind {{SVGAttr("fill")}} und {{SVGAttr("stroke")}}.
- Die Alpha-Komponente der erlaubten Stile wird ignoriert. Stattdessen wird die Alpha-Komponente des Nicht-`:visited`-Zustands des Elements verwendet. In Firefox wird der im `:visited`-Stil gesetzte Stil vollständig ignoriert, wenn die Alpha-Komponente `0` ist.
- Obwohl diese Stile das Erscheinungsbild der Farben für den Endbenutzer ändern können, wird die Methode [`window.getComputedStyle`](/de/docs/Web/API/Window/getComputedStyle) eine Falschinformation liefern und immer den Wert der Nicht-`:visited`-Farbe zurückgeben.
- Das [`<link>`](/de/docs/Web/HTML/Reference/Elements/link)-Element wird niemals durch `:visited` erfasst.
- DOM-Methoden, die Elemente über CSS-Selektoren erfassen — wie [`querySelector()`](/de/docs/Web/API/Document/querySelector) und [`querySelectorAll()`](/de/docs/Web/API/Document/querySelectorAll) — werden immer ein "leeres" Ergebnis zurückgeben, selbst wenn es besuchte Links in einem Dokument gibt. Für die genannten Methoden bedeutet dies `null` oder eine leere [`NodeList`](/de/docs/Web/API/NodeList).

> [!NOTE]
> Für weitere Informationen zu diesen Einschränkungen und den Gründen dafür, siehe [Datenschutz und der :visited-Selektor](/de/docs/Web/CSS/CSS_selectors/Privacy_and_the_visited_selector).

## Syntax

```css
:visited {
  /* ... */
}
```

## Beispiele

Eigenschaften, die sonst keine Farbe haben oder transparent sind, können mit `:visited` nicht geändert werden. Von den Eigenschaften, die mit dieser Pseudoklasse festgelegt werden können, hat Ihr Browser wahrscheinlich nur einen Standardwert für `color` und `column-rule-color`. Wenn Sie andere Eigenschaften ändern möchten, müssen Sie ihnen einen Basiswert außerhalb des `:visited`-Selektors geben.

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

- [Datenschutz und der :visited-Selektor](/de/docs/Web/CSS/CSS_selectors/Privacy_and_the_visited_selector)
- Link-bezogene Pseudoklassen: {{cssxref(":link")}}, {{cssxref(":active")}}, {{cssxref(":hover")}}
