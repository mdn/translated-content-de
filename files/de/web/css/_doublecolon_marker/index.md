---
title: "::marker"
slug: Web/CSS/::marker
l10n:
  sourceCommit: 4d51a212bfda5ce9978d162caf5532d155f7eb0a
---

{{CSSRef}}

Das **`::marker`**-[CSS](/de/docs/Web/CSS)-[Pseudo-Element](/de/docs/Web/CSS/Pseudo-elements) wählt das Marker-Kästchen eines Listenelements aus, das typischerweise ein Aufzählungszeichen oder eine Zahl enthält. Es funktioniert bei jedem Element oder Pseudo-Element, das auf [`display: list-item`](/de/docs/Web/CSS/display) gesetzt ist, wie z. B. den {{HTMLElement("li")}}- und {{HTMLElement("summary")}}-Elementen.

{{EmbedInteractiveExample("pages/tabbed/pseudo-element-marker.html", "tabbed-shorter")}}

## Zulässige Eigenschaften

Das `::marker`-Pseudo-Element unterstützt eine begrenzte Anzahl von CSS-Eigenschaften, darunter:

- Alle [Schrifteigenschaften](/de/docs/Web/CSS/CSS_fonts)
- Die {{CSSxRef("white-space")}}-Eigenschaft
- {{CSSxRef("color")}}
- Die Eigenschaften {{CSSxRef("text-combine-upright")}}, {{CSSxRef("unicode-bidi")}} und {{CSSxRef("direction")}}
- Die {{CSSxRef("content")}}-Eigenschaft
- Alle [Animationen](/de/docs/Web/CSS/CSS_animations#properties) und [Transitions](/de/docs/Web/CSS/CSS_transitions#properties)-Eigenschaften

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

- HTML-Elemente, die standardmäßig Marker-Kästchen besitzen: {{HTMLElement("ol")}}, {{HTMLElement("li")}}, {{HTMLElement("summary")}}
- [CSS generated content](/de/docs/Web/CSS/CSS_generated_content)-Modul
- [CSS lists and counters](/de/docs/Web/CSS/CSS_lists)-Modul
- [CSS counter styles](/de/docs/Web/CSS/CSS_counter_styles)-Modul
