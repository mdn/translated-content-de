---
title: ":visited"
slug: Web/CSS/:visited
l10n:
  sourceCommit: 33a12980eb49cc795a41f15ec7a0181270ad3048
---

{{CSSRef}}

Die **`:visited`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) wird angewendet, nachdem der Benutzer den Link besucht hat. Aus Datenschutzgründen sind die mit diesem Selektor modifizierbaren Stile stark eingeschränkt. Die `:visited` Pseudoklasse gilt nur für {{htmlelement("a")}} und {{htmlelement("area")}} Elemente, die ein `href` Attribut haben.

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

Stile, die durch die `:visited` und nicht besuchte [`:link`](/de/docs/Web/CSS/:link) Pseudoklassen definiert werden, können von nachfolgenden nutzeraktionsbezogenen Pseudoklassen ({{cssxref(":hover")}} oder {{cssxref(":active")}}) mit mindestens gleicher Spezifität überschrieben werden. Um Links angemessen zu stylen, platzieren Sie die `:visited` Regel nach der `:link` Regel, aber vor den `:hover` und `:active` Regeln, wie es durch die _LVHA-Reihenfolge_ definiert ist: `:link` — `:visited` — `:hover` — `:active`. Die `:visited` Pseudoklasse und die `:link` Pseudoklasse schließen sich gegenseitig aus.

## Datenschutzbeschränkungen

Aus Datenschutzgründen beschränken Browser streng, welche Stile Sie mit dieser Pseudoklasse anwenden können und wie sie verwendet werden können:

- Zulässige CSS-Eigenschaften sind {{ cssxref("color") }}, {{ cssxref("background-color") }}, {{ cssxref("border-color") }}, {{ cssxref("border-bottom-color") }}, {{ cssxref("border-left-color") }}, {{ cssxref("border-right-color") }}, {{ cssxref("border-top-color") }}, {{ cssxref("column-rule-color") }}, {{ cssxref("outline-color") }}, {{ cssxref("text-decoration-color") }} und {{ cssxref("text-emphasis-color") }}.
- Zulässige SVG-Attribute sind {{SVGAttr("fill")}} und {{SVGAttr("stroke")}}.
- Die Alphakomponente der erlaubten Stile wird ignoriert. Die Alphakomponente des nicht-`:visited` Zustands des Elements wird stattdessen verwendet. In Firefox wird der im `:visited` festgelegte Stil vollständig ignoriert, wenn die Alphakomponente `0` ist.
- Auch wenn diese Stile das Erscheinungsbild von Farben für den Endbenutzer ändern können, wird die Methode [`window.getComputedStyle`](/de/docs/Web/API/Window/getComputedStyle) falsche Werte liefern und immer den Wert der nicht-`:visited` Farbe zurückgeben.
- Das [`<link>`](/de/docs/Web/HTML/Element/link) Element wird niemals durch `:visited` übereinstimmend sein.
- DOM-Methoden, die Elemente über CSS-Selektoren abgleichen — wie [`querySelector()`](/de/docs/Web/API/Document/querySelector) und [`querySelectorAll()`](/de/docs/Web/API/Document/querySelectorAll) — liefern immer ein "leeres" Ergebnis, selbst wenn im Dokument besuchte Links vorhanden sind. Für die genannten Methoden wird dies `null` oder eine leere [`NodeList`](/de/docs/Web/API/NodeList) sein.

> [!NOTE]
> Für weitere Informationen zu diesen Einschränkungen und den dahinterliegenden Gründen, siehe [Privacy and the :visited selector](/de/docs/Web/CSS/Privacy_and_the_:visited_selector).

## Syntax

```css
:visited {
  /* ... */
}
```

## Beispiele

Eigenschaften, die ansonsten keine Farbe hätten oder transparent wären, können nicht mit `:visited` modifiziert werden. Von den Eigenschaften, die mit dieser Pseudoklasse festgelegt werden können, hat Ihr Browser wahrscheinlich nur einen Standardwert für `color` und `column-rule-color`. Wenn Sie die anderen Eigenschaften ändern möchten, müssen Sie ihnen einen Basiswert außerhalb des `:visited` Selektors zuweisen.

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
- Linkverwandte Pseudoklassen: {{cssxref(":link")}}, {{cssxref(":active")}}, {{cssxref(":hover")}}
