---
title: :visited
slug: Web/CSS/Reference/Selectors/:visited
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

Die **`:visited`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) wird angewendet, sobald der Link vom Benutzer besucht wurde. Aus Datenschutzgründen sind die Stile, die mit diesem Selektor geändert werden können, stark eingeschränkt. Die `:visited`-Pseudoklasse gilt nur für {{htmlelement("a")}}- und {{htmlelement("area")}}-Elemente, die ein `href`-Attribut haben.

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

Stile, die durch die `:visited`- und unbesuchte {{cssxref(":link")}}-Pseudoklassen definiert sind, können durch jede nachfolgende Benutzeraktions-Pseudoklasse ({{cssxref(":hover")}} oder {{cssxref(":active")}}), die mindestens gleiche Spezifität haben, überschrieben werden. Um Links entsprechend zu stylen, setzen Sie die `:visited`-Regel nach der `:link`-Regel, aber vor den `:hover`- und `:active`-Regeln, wie durch die _LVHA-Reihenfolge_ definiert: `:link` — `:visited` — `:hover` — `:active`. Die `:visited`-Pseudoklasse und die `:link`-Pseudoklasse schließen sich gegenseitig aus.

## Datenschutzbeschränkungen

Aus Datenschutzgründen begrenzen Browser streng, welche Stile Sie mit dieser Pseudoklasse anwenden können und wie sie verwendet werden können:

- Zulässige CSS-Eigenschaften sind {{ cssxref("color") }}, {{ cssxref("background-color") }}, {{ cssxref("border-color") }}, {{ cssxref("border-bottom-color") }}, {{ cssxref("border-left-color") }}, {{ cssxref("border-right-color") }}, {{ cssxref("border-top-color") }}, {{ cssxref("column-rule-color") }}, {{ cssxref("outline-color") }}, {{ cssxref("text-decoration-color") }} und {{ cssxref("text-emphasis-color") }}.
- Zulässige SVG-Attribute sind {{SVGAttr("fill")}} und {{SVGAttr("stroke")}}.
- Die Alpha-Komponente der erlaubten Stile wird ignoriert. Die Alpha-Komponente des Zustands des Elements ohne `:visited` wird stattdessen verwendet. In Firefox wird, wenn die Alpha-Komponente `0` ist, der in `:visited` gesetzte Stil vollständig ignoriert.
- Obwohl diese Stile das Erscheinungsbild von Farben für den Endbenutzer ändern können, wird die Methode [`window.getComputedStyle`](/de/docs/Web/API/Window/getComputedStyle) "lügen" und immer den Wert der Nicht-`:visited`-Farbe zurückgeben.
- Das [`<link>`](/de/docs/Web/HTML/Reference/Elements/link)-Element wird niemals durch `:visited` übereinstimmend gemacht.
- DOM-Methoden, die Elemente über CSS-Selektoren abgleichen — wie [`querySelector()`](/de/docs/Web/API/Document/querySelector) und [`querySelectorAll()`](/de/docs/Web/API/Document/querySelectorAll) — werden immer ein "leeres" Ergebnis zurückgeben, selbst wenn es besuchte Links in einem Dokument gibt. Für die vorgenannten Methoden wird dies `null` oder eine leere [`NodeList`](/de/docs/Web/API/NodeList) sein.

> [!NOTE]
> Weitere Informationen zu diesen Einschränkungen und den dahinter stehenden Gründen finden Sie unter [Datenschutz und der :visited-Selektor](/de/docs/Web/CSS/Guides/Selectors/Privacy_and_:visited).

## Syntax

```css
:visited {
  /* ... */
}
```

## Beispiele

Eigenschaften, die sonst keine Farbe haben oder transparent sind, können mit `:visited` nicht geändert werden. Von den Eigenschaften, die mit dieser Pseudoklasse festgelegt werden können, hat Ihr Browser wahrscheinlich nur für `color` und `column-rule-color` einen Standardwert. Wenn Sie also die anderen Eigenschaften ändern möchten, müssen Sie ihnen einen Basiswert außerhalb des `:visited`-Selektors zuweisen.

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

- [Datenschutz und der :visited-Selektor](/de/docs/Web/CSS/Guides/Selectors/Privacy_and_:visited)
- Link-bezogene Pseudoklassen: {{cssxref(":link")}}, {{cssxref(":active")}}, {{cssxref(":hover")}}
