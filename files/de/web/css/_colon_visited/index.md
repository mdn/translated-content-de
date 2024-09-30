---
title: ":visited"
slug: Web/CSS/:visited
l10n:
  sourceCommit: 4cb569f768ec9529724f8fb06539f2903a583a41
---

{{CSSRef}}

Die **`:visited`** [CSS](/de/docs/Web/CSS) [Pseudo-Klasse](/de/docs/Web/CSS/Pseudo-classes) wird angewendet, nachdem der Benutzer den Link besucht hat. Aus Datenschutzgründen sind die Stiländerungen, die mit diesem Selektor vorgenommen werden können, stark eingeschränkt. Die `:visited` Pseudo-Klasse gilt nur für {{htmlelement("a")}} und {{htmlelement("area")}}-Elemente, die ein `href`-Attribut haben.

{{EmbedInteractiveExample("pages/tabbed/pseudo-class-visited.html", "tabbed-shorter")}}

Stile, die von den `:visited` und unbesuchten [`:link`](/de/docs/Web/CSS/:link) Pseudo-Klassen definiert werden, können durch nachfolgende Benutzeraktions-Pseudo-Klassen ({{cssxref(":hover")}} oder {{cssxref(":active")}}) mit mindestens gleicher Spezifität überschrieben werden. Um Links angemessen zu stylen, setzen Sie die `:visited`-Regel nach der `:link`-Regel, aber vor den `:hover`- und `:active`-Regeln, wie es die _LVHA-Reihenfolge_ definiert: `:link` — `:visited` — `:hover` — `:active`. Die `:visited`-Pseudo-Klasse und die `:link`-Pseudo-Klasse schließen sich gegenseitig aus.

## Datenschutzbeschränkungen

Aus Datenschutzgründen begrenzen Browser streng, welche Stile Sie mit dieser Pseudo-Klasse anwenden können und wie sie verwendet werden können:

- Erlaubte CSS-Eigenschaften sind {{ cssxref("color") }}, {{ cssxref("background-color") }}, {{ cssxref("border-color") }}, {{ cssxref("border-bottom-color") }}, {{ cssxref("border-left-color") }}, {{ cssxref("border-right-color") }}, {{ cssxref("border-top-color") }}, {{ cssxref("column-rule-color") }}, {{ cssxref("outline-color") }}, {{ cssxref("text-decoration-color") }} und {{ cssxref("text-emphasis-color") }}.
- Erlaubte SVG-Attribute sind {{SVGAttr("fill")}} und {{SVGAttr("stroke")}}.
- Die Alphakomponente der erlaubten Stile wird ignoriert. Die Alphakomponente des Nicht-`:visited`-Zustands des Elements wird stattdessen verwendet. In Firefox wird der Stil, der in `:visited` festgelegt ist, vollständig ignoriert, wenn die Alphakomponente `0` ist.
- Obwohl diese Stile das Erscheinungsbild von Farben für den Endbenutzer ändern können, wird die Methode [`window.getComputedStyle`](/de/docs/Web/API/Window/getComputedStyle) falsche Informationen liefern und immer den Wert der Nicht-`:visited`-Farbe zurückgeben.
- Das [`<link>`](/de/docs/Web/HTML/Element/link)-Element wird niemals durch `:visited` abgeglichen.
- DOM-Methoden, die Elemente über CSS-Selektoren abgleichen — wie [`querySelector()`](/de/docs/Web/API/Document/querySelector) und [`querySelectorAll()`](/de/docs/Web/API/Document/querySelectorAll) — werden immer ein "leeres" Ergebnis zurückgeben, selbst wenn es besuchte Links in einem Dokument gibt. Für die vorgenannten Methoden bedeutet dies `null` oder eine leere [`NodeList`](/de/docs/Web/API/NodeList).

> [!NOTE]
> Für weitere Informationen zu diesen Einschränkungen und den Gründen dafür siehe [Datenschutz und der :visited Selektor](/de/docs/Web/CSS/Privacy_and_the_:visited_selector).

## Syntax

```css
:visited {
  /* ... */
}
```

## Beispiele

Eigenschaften, die ansonsten keine Farbe haben oder transparent sind, können mit `:visited` nicht verändert werden. Von den Eigenschaften, die mit dieser Pseudo-Klasse festgelegt werden können, hat Ihr Browser wahrscheinlich nur einen Standardwert für `color` und `column-rule-color`. Wenn Sie also die anderen Eigenschaften ändern möchten, müssen Sie ihnen einen Basiswert außerhalb des `:visited`-Selectors geben.

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

- [Datenschutz und der :visited Selektor](/de/docs/Web/CSS/Privacy_and_the_:visited_selector)
- Link-bezogene Pseudo-Klassen: {{cssxref(":link")}}, {{cssxref(":active")}}, {{cssxref(":hover")}}
