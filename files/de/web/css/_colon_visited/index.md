---
title: ":visited"
slug: Web/CSS/:visited
l10n:
  sourceCommit: 62f49419c2c97353749cf9d21df9e205a60ca62b
---

{{CSSRef}}

Die **`:visited`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) wird angewendet, sobald der Link vom Benutzer besucht wurde. Aus Datenschutzgründen sind die mit diesem Selektor modifizierbaren Stile sehr eingeschränkt. Die `:visited` Pseudoklasse gilt nur für {{htmlelement("a")}} und {{htmlelement("area")}} Elemente, die ein `href` Attribut besitzen.

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

Stile, die durch die `:visited` und unbesuchte [`:link`](/de/docs/Web/CSS/:link) Pseudoklassen definiert werden, können von nachfolgenden Benutzer-Aktions-Pseudoklassen ({{cssxref(":hover")}} oder {{cssxref(":active")}}) überschrieben werden, die mindestens gleiche Spezifität haben. Um Links angemessen zu gestalten, setzen Sie die `:visited` Regel nach der `:link` Regel, aber vor den `:hover` und `:active` Regeln, wie es die _LVHA-Reihenfolge_ definiert: `:link` — `:visited` — `:hover` — `:active`. Die `:visited` Pseudoklasse und die `:link` Pseudoklasse schließen sich gegenseitig aus.

## Datenschutzbeschränkungen

Aus Gründen des Datenschutzes begrenzen Browser strikt, welche Stile mit dieser Pseudoklasse angewendet werden können und wie sie verwendet werden können:

- Erlaubte CSS-Eigenschaften sind {{ cssxref("color") }}, {{ cssxref("background-color") }}, {{ cssxref("border-color") }}, {{ cssxref("border-bottom-color") }}, {{ cssxref("border-left-color") }}, {{ cssxref("border-right-color") }}, {{ cssxref("border-top-color") }}, {{ cssxref("column-rule-color") }}, {{ cssxref("outline-color") }}, {{ cssxref("text-decoration-color") }} und {{ cssxref("text-emphasis-color") }}.
- Erlaubte SVG-Attribute sind {{SVGAttr("fill")}} und {{SVGAttr("stroke")}}.
- Die Alphakomponente der erlaubten Stile wird ignoriert. Stattdessen wird die Alphakomponente des Nicht-`:visited`-Zustands des Elements verwendet. In Firefox, wenn die Alphakomponente `0` ist, wird der im `:visited` gesetzte Stil vollständig ignoriert.
- Obwohl diese Stile das Erscheinungsbild von Farben für den Endbenutzer ändern können, wird die Methode [`window.getComputedStyle`](/de/docs/Web/API/Window/getComputedStyle) lügen und immer den Wert der Nicht-`:visited`-Farbe zurückgeben.
- Das [`<link>`](/de/docs/Web/HTML/Element/link) Element wird nie durch `:visited` getroffen.
- DOM-Methoden, die Elemente über CSS-Selektoren abgleichen — wie [`querySelector()`](/de/docs/Web/API/Document/querySelector) und [`querySelectorAll()`](/de/docs/Web/API/Document/querySelectorAll) — liefern immer ein "leeres" Ergebnis zurück, selbst wenn im Dokument besuchte Links vorhanden sind. Für die vorgenannten Methoden wird dies `null` oder eine leere [`NodeList`](/de/docs/Web/API/NodeList) sein.

> [!NOTE]
> Weitere Informationen zu diesen Einschränkungen und den dahinter stehenden Gründen finden Sie unter [Privacy and the :visited selector](/de/docs/Web/CSS/CSS_selectors/Privacy_and_the_visited_selector).

## Syntax

```css
:visited {
  /* ... */
}
```

## Beispiele

Eigenschaften, die sonst keine Farbe haben oder transparent sind, können mit `:visited` nicht modifiziert werden. Von den Eigenschaften, die mit dieser Pseudoklasse gesetzt werden können, hat Ihr Browser wahrscheinlich nur einen Standardwert für `color` und `column-rule-color`. Wenn Sie also die anderen Eigenschaften ändern möchten, müssen Sie ihnen einen Basiswert außerhalb des `:visited` Selektors geben.

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
