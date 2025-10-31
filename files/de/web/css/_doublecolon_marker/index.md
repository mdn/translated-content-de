---
title: ::marker
slug: Web/CSS/::marker
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Das **`::marker`** [CSS](/de/docs/Web/CSS) [Pseudo-Element](/de/docs/Web/CSS/Pseudo-elements) wählt die Markierungsbox eines Listenelements aus, die typischerweise ein Aufzählungszeichen oder eine Nummer enthält. Es funktioniert bei jedem Element oder Pseudo-Element, das auf [`display: list-item`](/de/docs/Web/CSS/Reference/Properties/display) gesetzt ist, wie den {{HTMLElement("li")}}- und {{HTMLElement("summary")}}-Elementen.

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

Das `::marker` Pseudo-Element unterstützt eine begrenzte Anzahl von CSS-Eigenschaften, darunter:

- Alle [Schrifteigenschaften](/de/docs/Web/CSS/CSS_fonts)
- Die {{CSSxRef("white-space")}} Eigenschaft
- {{CSSxRef("color")}}
- {{CSSxRef("text-combine-upright")}}, {{CSSxRef("unicode-bidi")}}, und {{CSSxRef("direction")}} Eigenschaften
- Die {{CSSxRef("content")}} Eigenschaft
- Alle [Animations­eigenschaften](/de/docs/Web/CSS/CSS_animations#properties) und [Transitionseigenschaften](/de/docs/Web/CSS/CSS_transitions#properties)

> [!NOTE]
> Die Spezifikation besagt, dass in Zukunft zusätzliche CSS-Eigenschaften unterstützt werden könnten.

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
