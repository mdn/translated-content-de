---
title: ::marker
slug: Web/CSS/Reference/Selectors/::marker
l10n:
  sourceCommit: c52ed787442db9d65b21f5c2874fa6bfd08a253a
---

Das **`::marker`** [CSS](/de/docs/Web/CSS) [Pseudoelement](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) wählt das Markerfeld eines Listenelements aus, das typischerweise ein Aufzählungszeichen oder eine Nummer enthält. Es funktioniert bei jedem Element oder Pseudoelement, das auf [`display: list-item`](/de/docs/Web/CSS/Reference/Properties/display) gesetzt ist, wie die {{HTMLElement("li")}}- und {{HTMLElement("summary")}}-Elemente.

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

## Erlaubte Eigenschaften

Das `::marker`-Pseudoelement unterstützt eine begrenzte Anzahl von CSS-Eigenschaften, einschließlich:

- Alle [Schrifteigenschaften](/de/docs/Web/CSS/CSS_fonts)
- Die {{CSSxRef("white-space")}}-Eigenschaft
- {{CSSxRef("color")}}
- {{CSSxRef("text-combine-upright")}}, {{CSSxRef("unicode-bidi")}}, und die {{CSSxRef("direction")}}-Eigenschaften
- Die {{CSSxRef("content")}}-Eigenschaft
- Alle [Animation](/de/docs/Web/CSS/CSS_animations#properties)- und [Transition](/de/docs/Web/CSS/CSS_transitions#properties)-Eigenschaften

> [!NOTE]
> Die Spezifikation besagt, dass in Zukunft weitere CSS-Eigenschaften unterstützt werden können.

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
- [CSS-generierter Inhalt](/de/docs/Web/CSS/CSS_generated_content) Modul
- [CSS-Listen und Zähler](/de/docs/Web/CSS/CSS_lists) Modul
- [CSS-Zählerstile](/de/docs/Web/CSS/CSS_counter_styles) Modul
