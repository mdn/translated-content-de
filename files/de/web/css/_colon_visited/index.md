---
title: ":visited"
slug: Web/CSS/:visited
l10n:
  sourceCommit: 4cb569f768ec9529724f8fb06539f2903a583a41
---

{{CSSRef}}

Die **`:visited`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) wird angewendet, sobald der Benutzer den Link besucht hat. Aus Datenschutzgründen sind die Stile, die mit diesem Selektor geändert werden können, sehr eingeschränkt. Die `:visited`-Pseudoklasse gilt nur für {{htmlelement("a")}} und {{htmlelement("area")}} Elemente, die ein `href` Attribut besitzen.

{{EmbedInteractiveExample("pages/tabbed/pseudo-class-visited.html", "tabbed-shorter")}}

Durch die `:visited` und unverändert [`:link`](/de/docs/Web/CSS/:link) Pseudoklassen definierten Stile können durch jede nachfolgende Benutzeraktions-Pseudoklasse ({{cssxref(":hover")}} oder {{cssxref(":active")}}) überschrieben werden, die zumindest gleiche Spezifität aufweist. Um Links geeignet zu gestalten, setzen Sie die `:visited`-Regel nach der `:link`-Regel, aber vor den `:hover` und `:active` Regeln, wie durch die _LVHA-Reihenfolge_ definiert: `:link` — `:visited` — `:hover` — `:active`. Die `:visited` Pseudoklasse und die `:link` Pseudoklasse sind gegenseitig exklusiv.

## Datenschutzbeschränkungen

Aus Datenschutzgründen beschränken Browser streng, welche Stile Sie mit dieser Pseudoklasse anwenden können und wie sie genutzt werden dürfen:

- Erlaubte CSS-Eigenschaften sind {{ cssxref("color") }}, {{ cssxref("background-color") }}, {{ cssxref("border-color") }}, {{ cssxref("border-bottom-color") }}, {{ cssxref("border-left-color") }}, {{ cssxref("border-right-color") }}, {{ cssxref("border-top-color") }}, {{ cssxref("column-rule-color") }}, {{ cssxref("outline-color") }}, {{ cssxref("text-decoration-color") }} und {{ cssxref("text-emphasis-color") }}.
- Erlaubte SVG-Attribute sind {{SVGAttr("fill")}} und {{SVGAttr("stroke")}}.
- Die Alphakomponente der erlaubten Stile wird ignoriert. Stattdessen wird die Alphakomponente des nicht-`:visited`-Zustands des Elements verwendet. In Firefox wird der im `:visited`-Stil festgelegte Stil vollständig ignoriert, wenn die Alphakomponente `0` ist.
- Obwohl diese Stile das Erscheinungsbild von Farben für den Endbenutzer ändern können, wird die {{domxref("window.getComputedStyle")}} Methode nicht die Wahrheit sagen und immer den Wert der nicht-`:visited`-Farbe zurückgeben.
- Das [`<link>`](/de/docs/Web/HTML/Element/link) Element wird niemals von `:visited` berücksichtigt.
- DOM-Methoden, die Elemente über CSS-Selektoren abgleichen — wie [`querySelector()`](/de/docs/Web/API/Document/querySelector) und [`querySelectorAll()`](/de/docs/Web/API/Document/querySelectorAll) — werden immer ein "leeres" Ergebnis zurückgeben, selbst wenn im Dokument besuchte Links vorhanden sind. Für die genannten Methoden wird dies `null` oder eine leere [`NodeList`](/de/docs/Web/API/NodeList) sein.

> [!NOTE]
> Weitere Informationen zu diesen Einschränkungen und den dahinter stehenden Gründen finden Sie unter [Datenschutz und der :visited-Selektor](/de/docs/Web/CSS/Privacy_and_the_:visited_selector).

## Syntax

```css
:visited {
  /* ... */
}
```

## Beispiele

Eigenschaften, die normalerweise keine Farbe haben oder transparent sind, können mit `:visited` nicht verändert werden. Von den Eigenschaften, die mit dieser Pseudoklasse gesetzt werden können, hat Ihr Browser wahrscheinlich nur für `color` und `column-rule-color` einen Standardwert. Wenn Sie die anderen Eigenschaften ändern möchten, müssen Sie ihnen einen Basiswert außerhalb des `:visited`-Selektors geben.

### HTML

```html
<a href="#test-visited-link">Haben Sie diesen Link schon besucht?</a><br />
<a href="">Sie haben diesen Link bereits besucht.</a>
```

### CSS

```css
a {
  /* Geben Sie nicht-transparente Standardwerte für bestimmte Eigenschaften an,
     damit sie mit dem :visited-Zustand gestaltet werden können */
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

- [Datenschutz und der :visited-Selektor](/de/docs/Web/CSS/Privacy_and_the_:visited_selector)
- Link-bezogene Pseudoklassen: {{cssxref(":link")}}, {{cssxref(":active")}}, {{cssxref(":hover")}}
