---
title: :visited
slug: Web/CSS/Reference/Selectors/:visited
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die **`:visited`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) wird angewendet, sobald der Benutzer den Link besucht hat. Aus Datenschutzgründen sind die Styles, die mit diesem Selektor geändert werden können, sehr begrenzt. Die `:visited` Pseudoklasse gilt nur für {{htmlelement("a")}} und {{htmlelement("area")}} Elemente, die ein `href` Attribut haben.

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

Styles, die durch die `:visited` und nicht besuchte [`:link`](/de/docs/Web/CSS/Reference/Selectors/:link) Pseudoklassen definiert sind, können durch nachfolgende Benutzeraktionspseudoklassen ({{cssxref(":hover")}} oder {{cssxref(":active")}}) überschrieben werden, die mindestens die gleiche Spezifität haben. Um Links angemessen zu stylen, platzieren Sie die `:visited` Regel nach der `:link` Regel, aber vor den `:hover` und `:active` Regeln, wie durch die _LVHA-Reihenfolge_ definiert: `:link` — `:visited` — `:hover` — `:active`. Die `:visited` Pseudoklasse und die `:link` Pseudoklasse schließen sich gegenseitig aus.

## Datenschutzbeschränkungen

Aus Datenschutzgründen begrenzen Browser streng, welche Styles Sie mit dieser Pseudoklasse anwenden können und wie sie verwendet werden können:

- Erlaubte CSS-Eigenschaften sind {{ cssxref("color") }}, {{ cssxref("background-color") }}, {{ cssxref("border-color") }}, {{ cssxref("border-bottom-color") }}, {{ cssxref("border-left-color") }}, {{ cssxref("border-right-color") }}, {{ cssxref("border-top-color") }}, {{ cssxref("column-rule-color") }}, {{ cssxref("outline-color") }}, {{ cssxref("text-decoration-color") }} und {{ cssxref("text-emphasis-color") }}.
- Erlaubte SVG-Attribute sind {{SVGAttr("fill")}} und {{SVGAttr("stroke")}}.
- Der Alphakomponente der erlaubten Styles wird ignoriert. Stattdessen wird der Alphawert des Nicht-`:visited`-Zustands des Elements verwendet. In Firefox wird, wenn der Alphawert `0` ist, der im `:visited` gesetzte Stil vollständig ignoriert.
- Auch wenn diese Styles das Aussehen von Farben für den Endbenutzer ändern können, wird die Methode [`window.getComputedStyle`](/de/docs/Web/API/Window/getComputedStyle) lügen und immer den Wert der Nicht-`:visited`-Farbe zurückgeben.
- Das [`<link>`](/de/docs/Web/HTML/Reference/Elements/link) Element wird niemals durch `:visited` gematcht.
- DOM-Methoden, die Elemente mittels CSS-Selektoren abgleichen — wie [`querySelector()`](/de/docs/Web/API/Document/querySelector) und [`querySelectorAll()`](/de/docs/Web/API/Document/querySelectorAll) — geben immer ein "leeres" Ergebnis zurück, selbst wenn im Dokument besuchte Links vorhanden sind. Für die genannten Methoden wird dies `null` oder ein leeres [`NodeList`](/de/docs/Web/API/NodeList) sein.

> [!NOTE]
> Für weitere Informationen zu diesen Einschränkungen und den dahinterliegenden Gründen, siehe [Privatsphäre und der :visited Selektor](/de/docs/Web/CSS/Guides/Selectors/Privacy_and_:visited).

## Syntax

```css
:visited {
  /* ... */
}
```

## Beispiele

Eigenschaften, die sonst keine Farbe hätten oder transparent wären, können mit `:visited` nicht verändert werden. Von den Eigenschaften, die mit dieser Pseudoklasse festgelegt werden können, hat Ihr Browser wahrscheinlich nur für `color` und `column-rule-color` einen Standardwert. Wenn Sie die anderen Eigenschaften ändern möchten, müssen Sie ihnen außerhalb des `:visited` Selektors einen Basiswert geben.

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

- [Privatsphäre und der :visited Selektor](/de/docs/Web/CSS/Guides/Selectors/Privacy_and_:visited)
- Link-bezogene Pseudoklassen: {{cssxref(":link")}}, {{cssxref(":active")}}, {{cssxref(":hover")}}
