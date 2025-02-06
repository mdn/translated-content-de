---
title: :visited
slug: Web/CSS/:visited
l10n:
  sourceCommit: 4d51a212bfda5ce9978d162caf5532d155f7eb0a
---

{{CSSRef}}

Die **`:visited`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) wird angewendet, nachdem der Benutzer den Link besucht hat. Aus Datenschutzgründen sind die Stile, die mit diesem Selektor modifiziert werden können, stark eingeschränkt. Die Pseudoklasse `:visited` gilt nur für {{htmlelement("a")}}- und {{htmlelement("area")}}-Elemente, die ein `href`-Attribut besitzen.

{{EmbedInteractiveExample("pages/tabbed/pseudo-class-visited.html", "tabbed-shorter")}}

Stile, die durch die Pseudoklassen `:visited` und die unbesuchte [`:link`](/de/docs/Web/CSS/:link) definiert werden, können durch nachfolgende Pseudoklassen für Benutzeraktionen ({{cssxref(":hover")}} oder {{cssxref(":active")}}) mit mindestens gleicher Spezifität überschrieben werden. Um Links angemessen zu gestalten, sollten Sie die `:visited`-Regel nach der `:link`-Regel, aber vor den `:hover`- und `:active`-Regeln platzieren, wie durch die _LVHA-Reihenfolge_ definiert: `:link` — `:visited` — `:hover` — `:active`. Die Pseudoklassen `:visited` und `:link` schließen sich gegenseitig aus.

## Datenschutzbeschränkungen

Aus Datenschutzgründen beschränken Browser streng, welche Stile Sie mit dieser Pseudoklasse anwenden können und wie sie verwendet werden dürfen:

- Erlaubte CSS-Eigenschaften sind {{ cssxref("color") }}, {{ cssxref("background-color") }}, {{ cssxref("border-color") }}, {{ cssxref("border-bottom-color") }}, {{ cssxref("border-left-color") }}, {{ cssxref("border-right-color") }}, {{ cssxref("border-top-color") }}, {{ cssxref("column-rule-color") }}, {{ cssxref("outline-color") }}, {{ cssxref("text-decoration-color") }} und {{ cssxref("text-emphasis-color") }}.
- Erlaubte SVG-Attribute sind {{SVGAttr("fill")}} und {{SVGAttr("stroke")}}.
- Die Alphakomponente der erlaubten Stile wird ignoriert. Stattdessen wird die Alphakomponente des nicht-`:visited`-Zustands des Elements verwendet. In Firefox wird, wenn die Alphakomponente `0` ist, der im `:visited` gesetzte Stil vollständig ignoriert.
- Obwohl diese Stile die Darstellung von Farben für den Endbenutzer ändern können, wird die Methode [`window.getComputedStyle`](/de/docs/Web/API/Window/getComputedStyle) falsche Angaben machen und immer den Wert der nicht-`:visited`-Farbe zurückgeben.
- Das [`<link>`](/de/docs/Web/HTML/Element/link)-Element wird niemals durch `:visited` übereinstimmend erkannt.
- DOM-Methoden, die Elemente mittels CSS-Selektoren abgleichen — wie [`querySelector()`](/de/docs/Web/API/Document/querySelector) und [`querySelectorAll()`](/de/docs/Web/API/Document/querySelectorAll) — geben immer ein "leeres" Ergebnis zurück, selbst wenn es besuchte Links im Dokument gibt. Für die genannten Methoden ist dies `null` oder eine leere [`NodeList`](/de/docs/Web/API/NodeList).

> [!NOTE]
> Weitere Informationen zu diesen Einschränkungen und den dahinterliegenden Gründen finden Sie unter [Privacy and the :visited selector](/de/docs/Web/CSS/Privacy_and_the_:visited_selector).

## Syntax

```css
:visited {
  /* ... */
}
```

## Beispiele

Eigenschaften, die sonst keine Farbe haben oder transparent sind, können mit `:visited` nicht verändert werden. Bei den Eigenschaften, die mit dieser Pseudoklasse gesetzt werden können, hat Ihr Browser wahrscheinlich nur für `color` und `column-rule-color` standardmäßig Werte. Wenn Sie also die anderen Eigenschaften verändern möchten, müssen Sie ihnen außerhalb des `:visited`-Selektors einen Basiswert zuweisen.

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

- [Privacy and the :visited selector](/de/docs/Web/CSS/Privacy_and_the_:visited_selector)
- Pseudoklassen für Links: {{cssxref(":link")}}, {{cssxref(":active")}}, {{cssxref(":hover")}}
