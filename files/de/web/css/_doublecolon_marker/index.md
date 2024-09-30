---
title: "::marker"
slug: Web/CSS/::marker
l10n:
  sourceCommit: 4cb569f768ec9529724f8fb06539f2903a583a41
---

{{CSSRef}}

Das **`::marker`** [CSS](/de/docs/Web/CSS) [Pseudo-Element](/de/docs/Web/CSS/Pseudo-elements) wählt das Markierungsfeld eines Listenelements aus, das typischerweise ein Aufzählungszeichen oder eine Zahl enthält. Es funktioniert bei jedem Element oder Pseudo-Element, das auf [`display: list-item`](/de/docs/Web/CSS/display) gesetzt ist, wie die {{HTMLElement("li")}} und {{HTMLElement("summary")}} Elemente.

{{EmbedInteractiveExample("pages/tabbed/pseudo-element-marker.html", "tabbed-shorter")}}

## Zulässige Eigenschaften

Das `::marker` Pseudo-Element unterstützt eine begrenzte Anzahl von CSS-Eigenschaften, darunter:

- Alle [Schrift-Eigenschaften](/de/docs/Web/CSS/CSS_fonts)
- Die {{CSSxRef("white-space")}} Eigenschaft
- {{CSSxRef("color")}}
- {{CSSxRef("text-combine-upright")}}, {{CSSxRef("unicode-bidi")}}, und {{CSSxRef("direction")}} Eigenschaften
- Die {{CSSxRef("content")}} Eigenschaft
- Alle [Animation](/de/docs/Web/CSS/CSS_animations#properties) und [Transition](/de/docs/Web/CSS/CSS_transitions#properties) Eigenschaften

> [!NOTE]
> Die Spezifikation besagt, dass in Zukunft weitere CSS-Eigenschaften unterstützt werden könnten.

## Syntax

```css
::marker {
  /* ... */
}
```

## Beispiele

### HTML

```html
<ul>
  <li>Peaches</li>
  <li>Apples</li>
  <li>Plums</li>
</ul>
```

### CSS

```css
ul li::marker {
  color: red;
  font-size: 1.5em;
}
```

### Ergebnis

{{EmbedLiveSample('Examples')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- HTML-Elemente, die standardmäßig Markierungsfelder haben: {{HTMLElement("ol")}}, {{HTMLElement("li")}}, {{HTMLElement("summary")}}
- [CSS Generierter Inhalt](/de/docs/Web/CSS/CSS_generated_content) Modul
- [CSS Listen und Zähler](/de/docs/Web/CSS/CSS_lists) Modul
- [CSS Zählerstile](/de/docs/Web/CSS/CSS_counter_styles) Modul
