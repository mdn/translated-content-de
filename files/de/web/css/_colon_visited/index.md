---
title: ":visited"
slug: Web/CSS/:visited
l10n:
  sourceCommit: 4cb569f768ec9529724f8fb06539f2903a583a41
---

{{CSSRef}}

Die **`:visited`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) wird angewendet, sobald der Link vom Benutzer besucht wurde. Aus Datenschutzgründen sind die Stile, die mit diesem Selektor verändert werden können, stark eingeschränkt. Die `:visited` Pseudoklasse gilt nur für {{htmlelement("a")}} und {{htmlelement("area")}} Elemente mit einem `href` Attribut.

{{EmbedInteractiveExample("pages/tabbed/pseudo-class-visited.html", "tabbed-shorter")}}

Die durch die `:visited` und unbesuchte [`:link`](/de/docs/Web/CSS/:link) Pseudoklassen definierten Stile können durch nachfolgende Benutzeraktions-Pseudoklassen ({{cssxref(":hover")}} oder {{cssxref(":active")}}) überschrieben werden, die mindestens gleiche Spezifität haben. Um Links angemessen zu stylen, setzen Sie die `:visited` Regel nach der `:link` Regel, aber vor den `:hover` und `:active` Regeln, wie durch die _LVHA-Reihenfolge_ definiert: `:link` — `:visited` — `:hover` — `:active`. Die `:visited` Pseudoklasse und die `:link` Pseudoklasse schließen sich gegenseitig aus.

## Datenschutzbeschränkungen

Aus Datenschutzgründen begrenzen Browser streng, welche Stile Sie mit dieser Pseudoklasse anwenden können und wie sie verwendet werden können:

- Zulässige CSS-Eigenschaften sind {{ cssxref("color") }}, {{ cssxref("background-color") }}, {{ cssxref("border-color") }}, {{ cssxref("border-bottom-color") }}, {{ cssxref("border-left-color") }}, {{ cssxref("border-right-color") }}, {{ cssxref("border-top-color") }}, {{ cssxref("column-rule-color") }}, {{ cssxref("outline-color") }}, {{ cssxref("text-decoration-color") }} und {{ cssxref("text-emphasis-color") }}.
- Zulässige SVG-Attribute sind {{SVGAttr("fill")}} und {{SVGAttr("stroke")}}.
- Die Alphakomponente der erlaubten Stile wird ignoriert. Stattdessen wird die Alphakomponente des nicht-`:visited` Zustands des Elements verwendet. In Firefox wird, wenn die Alphakomponente `0` ist, der im `:visited` gesetzte Stil vollständig ignoriert.
- Obwohl diese Stile das Aussehen von Farben für den Endbenutzer ändern können, wird die Methode [`window.getComputedStyle`](/de/docs/Web/API/Window/getComputedStyle) lügen und immer den Wert der nicht-`:visited` Farbe zurückgeben.
- Das [`<link>`](/de/docs/Web/HTML/Element/link) Element wird nie durch `:visited` gematcht.
- DOM-Methoden, die Elemente über CSS-Selektoren abgleichen — wie [`querySelector()`](/de/docs/Web/API/Document/querySelector) und [`querySelectorAll()`](/de/docs/Web/API/Document/querySelectorAll) — geben immer ein „leeres“ Ergebnis zurück, selbst wenn besuchte Links in einem Dokument vorhanden sind. Für die vorgenannten Methoden wird dies `null` oder eine leere [`NodeList`](/de/docs/Web/API/NodeList) sein.

> [!NOTE]
> Für weitere Informationen zu diesen Einschränkungen und den dahinter stehenden Gründen, siehe [Privacy and the :visited selector](/de/docs/Web/CSS/Privacy_and_the_:visited_selector).

## Syntax

```css
:visited {
  /* ... */
}
```

## Beispiele

Eigenschaften, die ansonsten keine Farbe hätten oder transparent wären, können mit `:visited` nicht geändert werden. Von den Eigenschaften, die mit dieser Pseudoklasse gesetzt werden können, hat Ihr Browser möglicherweise nur einen Standardwert für `color` und `column-rule-color`. Daher, wenn Sie die anderen Eigenschaften ändern möchten, müssen Sie ihnen einen Basiswert außerhalb des `:visited` Selektors geben.

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
- Link-bezogene Pseudoklassen: {{cssxref(":link")}}, {{cssxref(":active")}}, {{cssxref(":hover")}}
