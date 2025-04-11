---
title: :visited
slug: Web/CSS/:visited
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{CSSRef}}

Die **`:visited`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) wird verwendet, wenn der Link vom Benutzer besucht wurde. Aus Datenschutzgründen sind die Stile, die mit diesem Selektor geändert werden können, sehr eingeschränkt. Die `:visited` Pseudoklasse gilt nur für {{htmlelement("a")}} und {{htmlelement("area")}} Elemente, die ein `href`-Attribut besitzen.

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

Von den Pseudoklassen `:visited` und nicht besuchten [`:link`](/de/docs/Web/CSS/:link) definierten Stile können von nachfolgenden Nutzeraktions-Pseudoklassen ({{cssxref(":hover")}} oder {{cssxref(":active")}}) überschrieben werden, die mindestens die gleiche Spezifität haben. Um Links angemessen zu gestalten, setzen Sie die `:visited`-Regel nach der `:link`-Regel, aber vor den `:hover`- und `:active`-Regeln, wie es durch die _LVHA-Reihenfolge_ definiert ist: `:link` — `:visited` — `:hover` — `:active`. Die `:visited`-Pseudoklasse und die `:link`-Pseudoklasse schließen sich gegenseitig aus.

## Datenschutz-Beschränkungen

Aus Datenschutzgründen beschränken Browser strikt, welche Stile Sie mit dieser Pseudoklasse anwenden können und wie sie verwendet werden dürfen:

- Erlaubte CSS-Eigenschaften sind {{ cssxref("color") }}, {{ cssxref("background-color") }}, {{ cssxref("border-color") }}, {{ cssxref("border-bottom-color") }}, {{ cssxref("border-left-color") }}, {{ cssxref("border-right-color") }}, {{ cssxref("border-top-color") }}, {{ cssxref("column-rule-color") }}, {{ cssxref("outline-color") }}, {{ cssxref("text-decoration-color") }} und {{ cssxref("text-emphasis-color") }}.
- Erlaubte SVG-Attribute sind {{SVGAttr("fill")}} und {{SVGAttr("stroke")}}.
- Die Alpha-Komponente der erlaubten Stile wird ignoriert. Die Alpha-Komponente des Nicht-`:visited`-Zustands des Elements wird stattdessen verwendet. In Firefox wird der im `:visited`-Zustand gesetzte Stil vollständig ignoriert, wenn die Alpha-Komponente `0` beträgt.
- Obwohl diese Stile das Erscheinungsbild von Farben für den Endbenutzer ändern können, wird die Methode [`window.getComputedStyle`](/de/docs/Web/API/Window/getComputedStyle) lügen und immer den Wert der Nicht-`:visited`-Farbe zurückgeben.
- Das [`<link>`](/de/docs/Web/HTML/Reference/Elements/link)-Element wird niemals von `:visited` getroffen.
- DOM-Methoden, die Elemente über CSS-Selektoren abgleichen – wie [`querySelector()`](/de/docs/Web/API/Document/querySelector) und [`querySelectorAll()`](/de/docs/Web/API/Document/querySelectorAll) – werden immer ein „leeres“ Ergebnis zurückgeben, selbst wenn im Dokument besuchte Links vorhanden sind. Bei den zuvor genannten Methoden wird dies `null` oder eine leere [`NodeList`](/de/docs/Web/API/NodeList) sein.

> [!NOTE]
> Weitere Informationen zu diesen Einschränkungen und den dahinter stehenden Gründen finden Sie unter [Privacy and the :visited selector](/de/docs/Web/CSS/CSS_selectors/Privacy_and_the_visited_selector).

## Syntax

```css
:visited {
  /* ... */
}
```

## Beispiele

Eigenschaften, die ansonsten keine Farbe haben oder transparent sind, können mit `:visited` nicht geändert werden. Bei den Eigenschaften, die mit dieser Pseudoklasse gesetzt werden können, hat Ihr Browser wahrscheinlich nur einen Standardwert für `color` und `column-rule-color`. Daher müssen Sie, wenn Sie die anderen Eigenschaften ändern möchten, diesen außerhalb des `:visited`-Selektors einen Basiswert zuweisen.

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

- [Privacy and the :visited selector](/de/docs/Web/CSS/CSS_selectors/Privacy_and_the_visited_selector)
- Link-bezogene Pseudoklassen: {{cssxref(":link")}}, {{cssxref(":active")}}, {{cssxref(":hover")}}
