---
title: ::marker
slug: Web/CSS/::marker
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Das **`::marker`** [CSS](/de/docs/Web/CSS) [Pseudo-Element](/de/docs/Web/CSS/Pseudo-elements) wählt die Markierungsbox eines Listenelements aus, die typischerweise ein Aufzählungszeichen oder eine Nummer enthält. Es funktioniert bei jedem Element oder Pseudo-Element, das auf [`display: list-item`](/de/docs/Web/CSS/display) gesetzt ist, wie z.B. die {{HTMLElement("li")}}- und {{HTMLElement("summary")}}-Elemente.

{{InteractiveExample("CSS Demo: ::marker", "tabbed-shorter")}}

```css interactive-example
li::marker {
  content: "✝ ";
  font-size: 1.2em;
}
```

```html interactive-example
<p>Group known as Mercury Seven:</p>
<ul>
  <li>Malcolm Scott Carpenter</li>
  <li>Leroy Gordon (Gordo) Cooper Jr.</li>
  <li>John Herschel Glenn Jr.</li>
  <li>Virgil Ivan (Gus) Grissom</li>
  <li>Walter Marty (Wally) Schirra Jr.</li>
  <li>Alan Bartlett Shepard Jr.</li>
  <li>Donald Kent (Deke) Slayton</li>
</ul>
```

## Zulässige Eigenschaften

Das `::marker` Pseudo-Element unterstützt eine begrenzte Anzahl von CSS-Eigenschaften, einschließlich:

- Aller [Schriftarten-Eigenschaften](/de/docs/Web/CSS/CSS_fonts)
- Der {{CSSxRef("white-space")}} Eigenschaft
- {{CSSxRef("color")}}
- {{CSSxRef("text-combine-upright")}}, {{CSSxRef("unicode-bidi")}}, und {{CSSxRef("direction")}} Eigenschaften
- Der {{CSSxRef("content")}} Eigenschaft
- Aller [Animation](/de/docs/Web/CSS/CSS_animations#properties) und [Transition](/de/docs/Web/CSS/CSS_transitions#properties) Eigenschaften

> [!NOTE]
> Die Spezifikation besagt, dass in Zukunft zusätzliche CSS-Eigenschaften unterstützt werden können.

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

- HTML-Elemente, die standardmäßig Markierungsboxen haben: {{HTMLElement("ol")}}, {{HTMLElement("li")}}, {{HTMLElement("summary")}}
- [CSS generierter Inhalt](/de/docs/Web/CSS/CSS_generated_content) Modul
- [CSS Listen und Zähler](/de/docs/Web/CSS/CSS_lists) Modul
- [CSS Zählerstile](/de/docs/Web/CSS/CSS_counter_styles) Modul
