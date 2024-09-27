---
title: "::marker"
slug: Web/CSS/::marker
l10n:
  sourceCommit: 4cb569f768ec9529724f8fb06539f2903a583a41
---

{{CSSRef}}

Das **`::marker`**-Pseudo-Element der [CSS](/de/docs/Web/CSS) [Pseudo-Elemente](/de/docs/Web/CSS/Pseudo-elements) wählt das Marker-Box eines Listenelements aus, das typischerweise ein Aufzählungszeichen oder eine Zahl enthält. Es funktioniert bei jedem Element oder Pseudo-Element, das auf [`display: list-item`](/de/docs/Web/CSS/display) gesetzt ist, wie zum Beispiel bei den {{HTMLElement("li")}}- und {{HTMLElement("summary")}}-Elementen.

{{EmbedInteractiveExample("pages/tabbed/pseudo-element-marker.html", "tabbed-shorter")}}

## Erlaubte Eigenschaften

Das `::marker`-Pseudo-Element unterstützt eine begrenzte Anzahl von CSS-Eigenschaften, einschließlich:

- Alle [Schriftarten-Eigenschaften](/de/docs/Web/CSS/CSS_fonts)
- Die {{CSSxRef("white-space")}} Eigenschaft
- {{CSSxRef("color")}}
- {{CSSxRef("text-combine-upright")}}, {{CSSxRef("unicode-bidi")}}, und {{CSSxRef("direction")}} Eigenschaften
- Die {{CSSxRef("content")}} Eigenschaft
- Alle [Animations-](/de/docs/Web/CSS/CSS_animations#properties) und [Übergangseigenschaften](/de/docs/Web/CSS/CSS_transitions#properties)

> [!NOTE]
> Die Spezifikation gibt an, dass in Zukunft zusätzliche CSS-Eigenschaften unterstützt werden können.

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

- HTML-Elemente, die standardmäßig Marker-Boxen haben: {{HTMLElement("ol")}}, {{HTMLElement("li")}}, {{HTMLElement("summary")}}
- Modul für [CSS-generierten Inhalt](/de/docs/Web/CSS/CSS_generated_content)
- Modul für [CSS-Listen und Zähler](/de/docs/Web/CSS/CSS_lists)
- Modul für [CSS-Zählerstile](/de/docs/Web/CSS/CSS_counter_styles)
