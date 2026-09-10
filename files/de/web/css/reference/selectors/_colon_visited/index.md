---
title: CSS-Pseudoklasse `:visited`
short-title: :visited
slug: Web/CSS/Reference/Selectors/:visited
l10n:
  sourceCommit: 3fb9ea0187429234b47cb0385a9515a69757fe63
---

Die **`:visited`**-[CSS](/de/docs/Web/CSS)-[Pseudoklasse](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) wird angewendet, sobald der Link vom Benutzer besucht wurde. Aus Datenschutzgründen sind die Stile, die mit diesem Selektor geändert werden können, stark eingeschränkt. Die Pseudoklasse `:visited` gilt nur für die Elemente {{htmlelement("a")}} und {{htmlelement("area")}}, die ein `href`-Attribut haben.

Stile, die durch die Pseudoklassen `:visited` und unbesuchtes {{cssxref(":link")}} definiert werden, können durch alle nachfolgenden Pseudoklassen für Benutzeraktionen ({{cssxref(":hover")}} oder {{cssxref(":active")}}) überschrieben werden, die mindestens die gleiche Spezifität aufweisen. Um Links angemessen zu gestalten, platzieren Sie die Regel `:visited` nach der Regel `:link`, aber vor den Regeln `:hover` und `:active`, wie durch die _LVHA-Reihenfolge_ definiert: `:link` — `:visited` — `:hover` — `:active`. Die Pseudoklassen `:visited` und `:link` schließen sich gegenseitig aus.

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

## Datenschutzeinschränkungen

Aus Datenschutzgründen schränken Browser streng ein, welche Stile Sie mit dieser Pseudoklasse anwenden können und wie sie verwendet werden können:

- Zulässige CSS-Eigenschaften sind {{ cssxref("color") }}, {{ cssxref("background-color") }}, {{ cssxref("border-color") }}, {{ cssxref("border-bottom-color") }}, {{ cssxref("border-left-color") }}, {{ cssxref("border-right-color") }}, {{ cssxref("border-top-color") }}, {{ cssxref("column-rule-color") }}, {{ cssxref("outline-color") }}, {{ cssxref("text-decoration-color") }} und {{ cssxref("text-emphasis-color") }}.
- Zulässige SVG-Attribute sind {{SVGAttr("fill")}} und {{SVGAttr("stroke")}}.
- Die Alpha-Komponente der zulässigen Stile wird ignoriert. Stattdessen wird die Alpha-Komponente des nicht-`:visited`-Zustands des Elements verwendet. Wenn die Alpha-Komponente in Firefox `0` ist, wird der in `:visited` festgelegte Stil vollständig ignoriert.
- Obwohl diese Stile das Erscheinungsbild von Farben für den Endbenutzer ändern können, wird die Methode [`window.getComputedStyle`](/de/docs/Web/API/Window/getComputedStyle) falsche Angaben machen und stets den Wert der nicht-`:visited`-Farbe zurückgeben.
- Das Element [`<link>`](/de/docs/Web/HTML/Reference/Elements/link) wird niemals von `:visited` abgeglichen.
- DOM-Methoden, die Elemente über CSS-Selektoren abgleichen — wie [`querySelector()`](/de/docs/Web/API/Document/querySelector) und [`querySelectorAll()`](/de/docs/Web/API/Document/querySelectorAll) — geben immer ein „leeres“ Ergebnis zurück, selbst wenn ein Dokument besuchte Links enthält. Bei den zuvor genannten Methoden ist dies jeweils `null` oder eine leere [`NodeList`](/de/docs/Web/API/NodeList).

> [!NOTE]
> Weitere Informationen zu diesen Einschränkungen und den Gründen dafür finden Sie unter [Datenschutz und der Selektor :visited](/de/docs/Web/CSS/Guides/Selectors/Privacy_and_:visited).

## Syntax

```css
:visited {
  /* ... */
}
```

## Beispiele

Eigenschaften, die andernfalls keine Farbe hätten oder transparent wären, können nicht mit `:visited` geändert werden. Von den Eigenschaften, die mit dieser Pseudoklasse festgelegt werden können, verfügt Ihr Browser wahrscheinlich nur für `color` und `column-rule-color` über einen Standardwert. Wenn Sie also die anderen Eigenschaften ändern möchten, müssen Sie ihnen außerhalb des Selektors `:visited` einen Basiswert zuweisen.

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

- [Datenschutz und der Selektor :visited](/de/docs/Web/CSS/Guides/Selectors/Privacy_and_:visited)
- Linkbezogene Pseudoklassen: {{cssxref(":link")}}, {{cssxref(":active")}}, {{cssxref(":hover")}}
