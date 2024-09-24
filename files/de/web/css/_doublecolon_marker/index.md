---
title: "::marker"
slug: Web/CSS/::marker
l10n:
  sourceCommit: 4cb569f768ec9529724f8fb06539f2903a583a41
---

{{CSSRef}}

Das **`::marker`** [CSS](/de/docs/Web/CSS) [Pseudoelement](/de/docs/Web/CSS/Pseudo-elements) wählt das Markierungsfeld eines Listenelements aus, das typischerweise ein Aufzählungszeichen oder eine Nummer enthält. Es funktioniert bei jedem Element oder Pseudoelement, das auf [`display: list-item`](/de/docs/Web/CSS/display) gesetzt ist, wie die {{HTMLElement("li")}}- und {{HTMLElement("summary")}}-Elemente.

{{EmbedInteractiveExample("pages/tabbed/pseudo-element-marker.html", "tabbed-shorter")}}

## Erlaubte Eigenschaften

Das `::marker`-Pseudoelement unterstützt eine begrenzte Anzahl von CSS-Eigenschaften, einschließlich:

- Alle [Schriftart-Eigenschaften](/de/docs/Web/CSS/CSS_fonts)
- Die {{CSSxRef("white-space")}}-Eigenschaft
- {{CSSxRef("color")}}
- {{CSSxRef("text-combine-upright")}}, {{CSSxRef("unicode-bidi")}} und {{CSSxRef("direction")}}-Eigenschaften
- Die {{CSSxRef("content")}}-Eigenschaft
- Alle [Animationen](/de/docs/Web/CSS/CSS_animations#properties) und [Übergangs](/de/docs/Web/CSS/CSS_transitions#properties)-Eigenschaften

> [!NOTE]
> Die Spezifikation sieht vor, dass in Zukunft zusätzliche CSS-Eigenschaften unterstützt werden können.

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
- Modul [CSS generierter Inhalt](/de/docs/Web/CSS/CSS_generated_content)
- Modul [CSS-Listen und Zähler](/de/docs/Web/CSS/CSS_lists)
- Modul [CSS-Zählerstile](/de/docs/Web/CSS/CSS_counter_styles)
