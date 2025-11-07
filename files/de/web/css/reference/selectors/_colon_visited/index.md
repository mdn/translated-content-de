---
title: :visited
slug: Web/CSS/Reference/Selectors/:visited
l10n:
  sourceCommit: 4cb9d89a204a9532370693b982e8a3b274a874b1
---

Die **`:visited`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) wird angewendet, sobald der Link vom Benutzer besucht wurde. Aus Datenschutzgründen sind die Stile, die mit diesem Selektor geändert werden können, sehr eingeschränkt. Die `:visited` Pseudoklasse gilt nur für {{htmlelement("a")}} und {{htmlelement("area")}} Elemente, die ein `href` Attribut haben.

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

Die von den `:visited` und unbesuchten [`:link`](/de/docs/Web/CSS/Reference/Selectors/:link) Pseudoklassen definierten Stile können durch jede nachfolgende Benutzeraktions-Pseudoklasse ({{cssxref(":hover")}} oder {{cssxref(":active")}}) überschrieben werden, die mindestens die gleiche Spezifität aufweisen. Um Links entsprechend zu gestalten, setzen Sie die `:visited` Regel nach der `:link` Regel, aber vor den `:hover` und `:active` Regeln, wie durch die _LVHA-Reihenfolge_ definiert: `:link` — `:visited` — `:hover` — `:active`. Die Pseudoklassen `:visited` und `:link` schließen sich gegenseitig aus.

## Datenschutzbeschränkungen

Aus Datenschutzgründen beschränken Browser streng, welche Stile Sie mit dieser Pseudoklasse anwenden können, und wie sie verwendet werden können:

- Erlaubte CSS-Eigenschaften sind {{ cssxref("color") }}, {{ cssxref("background-color") }}, {{ cssxref("border-color") }}, {{ cssxref("border-bottom-color") }}, {{ cssxref("border-left-color") }}, {{ cssxref("border-right-color") }}, {{ cssxref("border-top-color") }}, {{ cssxref("column-rule-color") }}, {{ cssxref("outline-color") }}, {{ cssxref("text-decoration-color") }} und {{ cssxref("text-emphasis-color") }}.
- Erlaubte SVG-Attribute sind {{SVGAttr("fill")}} und {{SVGAttr("stroke")}}.
- Die Alphakomponente der erlaubten Stile wird ignoriert. Stattdessen wird die Alphakomponente des nicht-`:visited` Zustands des Elements verwendet. In Firefox, wenn die Alphakomponente `0` beträgt, wird der im `:visited` gesetzte Stil vollständig ignoriert.
- Obwohl diese Stile das Erscheinungsbild der Farben für den Endbenutzer ändern können, wird die [`window.getComputedStyle`](/de/docs/Web/API/Window/getComputedStyle) Methode falsch informieren und immer den Wert der nicht-`:visited` Farbe zurückgeben.
- Das [`<link>`](/de/docs/Web/HTML/Reference/Elements/link) Element wird niemals durch `:visited` erfasst.
- DOM-Methoden, die Elemente über CSS-Selektoren abgleichen — wie [`querySelector()`](/de/docs/Web/API/Document/querySelector) und [`querySelectorAll()`](/de/docs/Web/API/Document/querySelectorAll) — werden immer ein "leeres" Ergebnis zurückgeben, auch wenn es besuchte Links in einem Dokument gibt. Für die genannten Methoden wird dies `null` oder eine leere [`NodeList`](/de/docs/Web/API/NodeList) sein.

> [!NOTE]
> Weitere Informationen zu diesen Einschränkungen und den dahinter stehenden Gründen finden Sie unter [Datenschutz und der :visited Selektor](/de/docs/Web/CSS/CSS_selectors/Privacy_and_the_visited_selector).

## Syntax

```css
:visited {
  /* ... */
}
```

## Beispiele

Eigenschaften, die sonst keine Farbe haben oder transparent sind, können mit `:visited` nicht modifiziert werden. Von den Eigenschaften, die mit dieser Pseudoklasse festgelegt werden können, hat Ihr Browser wahrscheinlich nur einen Standardwert für `color` und `column-rule-color`. Daher müssen Sie, wenn Sie die anderen Eigenschaften ändern möchten, ihnen einen Basiswert außerhalb des `:visited` Selektors geben.

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
- Linkbezogene Pseudoklassen: {{cssxref(":link")}}, {{cssxref(":active")}}, {{cssxref(":hover")}}
