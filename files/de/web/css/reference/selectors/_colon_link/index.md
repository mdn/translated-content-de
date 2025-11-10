---
title: :link
slug: Web/CSS/Reference/Selectors/:link
l10n:
  sourceCommit: 4cb9d89a204a9532370693b982e8a3b274a874b1
---

Die **`:link`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) repräsentiert ein Element, das noch nicht besucht wurde. Sie gleicht jedes unbesuchte {{HTMLElement("a")}} oder {{HTMLElement("area")}} Element ab, das ein `href` Attribut hat.

{{InteractiveExample("CSS Demo: :link", "tabbed-shorter")}}

```css interactive-example
p {
  font-weight: bold;
}

a:link {
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
    <a href="https://developer.mozilla.org/missing-2">Random MDN page</a>
  </li>
  <li>
    <a href="https://example.com/missing-2">Random Example page</a>
  </li>
</ul>
```

Stile, die durch die Pseudoklassen `:link` und [`:visited`](/de/docs/Web/CSS/Reference/Selectors/:visited) definiert sind, können von nachfolgenden User-Aktionen-Pseudoklassen ({{cssxref(":hover")}} oder {{cssxref(":active")}}), die mindestens die gleiche Spezifität haben, überschrieben werden. Um Links angemessen zu gestalten, setzen Sie die `:link` Regel vor alle anderen linkbezogenen Regeln, wie durch die _LVHA-Reihenfolge_ definiert: `:link` — `:visited` — `:hover` — `:active`. Die `:visited`-Pseudoklasse und die `:link`-Pseudoklasse sind gegenseitig exklusiv.

> [!NOTE]
> Verwenden Sie {{cssxref(":any-link")}}, um ein Element auszuwählen, unabhängig davon, ob es besucht wurde oder nicht.

## Syntax

```css
:link {
  /* ... */
}
```

## Beispiele

Standardmäßig wenden die meisten Browser einen speziellen {{cssxref("color")}}-Wert auf besuchte Links an. Daher werden die Links in diesem Beispiel wahrscheinlich nur vor dem Besuch spezielle Schriftfarben haben. (Danach müssen Sie den Browserverlauf löschen, um sie erneut zu sehen.) Die {{cssxref("background-color")}}-Werte bleiben jedoch wahrscheinlich erhalten, da die meisten Browser diese Eigenschaft standardmäßig nicht auf besuchte Links setzen.

### HTML

```html
<a href="#ordinary-target">This is an ordinary link.</a><br />
<a href="">You've already visited this link.</a><br />
<a>Placeholder link (won't get styled)</a>
```

### CSS

```css
a:link {
  background-color: gold;
  color: green;
}
```

### Ergebnis

{{EmbedLiveSample("Examples")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Link-bezogene Pseudoklassen: {{ cssxref(":visited") }}, {{ cssxref(":hover") }}, {{ cssxref(":active") }}
