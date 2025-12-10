---
title: ::marker
slug: Web/CSS/Reference/Selectors/::marker
l10n:
  sourceCommit: 618d480ec934c834d8a37796dc691061c401ed5d
---

Das **`::marker`** [CSS](/de/docs/Web/CSS) [Pseudo-Element](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) wählt die Marker-Box eines Listenelements aus, die typischerweise ein Aufzählungszeichen oder eine Nummer enthält. Es funktioniert auf jedem Element oder Pseudo-Element, das auf [`display: list-item`](/de/docs/Web/CSS/Reference/Properties/display) gesetzt ist, wie zum Beispiel die {{HTMLElement("li")}}- und {{HTMLElement("summary")}}-Elemente.

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

- Alle [Animation](/de/docs/Web/CSS/Guides/Animations#properties) und [Transition](/de/docs/Web/CSS/Guides/Transitions#properties) Eigenschaften
- Alle [Schriftart-Eigenschaften](/de/docs/Web/CSS/Guides/Fonts)
- {{CSSxRef("color")}}
- {{CSSxRef("content")}}
- {{cssxref("counter-increment")}}, {{cssxref("counter-reset")}}, und {{cssxref("counter-set")}}
- {{cssxref("quotes")}}
- {{CSSxRef("text-combine-upright")}}, {{CSSxRef("unicode-bidi")}}, und {{CSSxRef("direction")}}
- {{CSSxRef("white-space")}}

> [!NOTE]
> Die Spezifikation gibt an, dass in Zukunft zusätzliche CSS-Eigenschaften unterstützt werden könnten.

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
- [CSS generierter Inhalt](/de/docs/Web/CSS/Guides/Generated_content) Modul
- [CSS Listen und Zähler](/de/docs/Web/CSS/Guides/Lists) Modul
- [CSS Zählerstile](/de/docs/Web/CSS/Guides/Counter_styles) Modul
