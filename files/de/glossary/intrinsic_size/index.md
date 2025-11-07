---
title: Intrinsische Größe
slug: Glossary/Intrinsic_Size
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

In CSS bezieht sich die **intrinsische Größe** eines Elements auf die Größe, die es basierend auf seinem Inhalt hätte, ohne die Auswirkungen des Layoutkontexts, in dem es erscheint, zu berücksichtigen. Dies ist das Gegenteil der {{Glossary("extrinsic_size", "extrinsischen Größe")}} eines Elements, die durch externe Einschränkungen wie die Containergröße bestimmt wird. Die intrinsischen Größen eines Elements werden durch seine {{cssxref("min-content")}} und {{cssxref("max-content")}} Größen dargestellt.

Inline-Elemente werden intrinsisch dimensioniert. CSS-[Boxmodell](/de/docs/Learn_web_development/Core/Styling_basics/Box_model)-Eigenschaften wie {{cssxref("height")}}, {{cssxref("width")}}, {{cssxref("block-size")}}, {{cssxref("inline-size")}}, {{cssxref("padding-block")}} und {{cssxref("margin-block")}} haben keine Auswirkungen auf ihr Layout (obwohl {{cssxref("margin-inline")}} und {{cssxref("padding-inline")}} den Abstand innerhalb einer Zeile beeinflussen).

Zum Beispiel ist die minimale intrinsische Größe des Inline-{{htmlelement("span")}}-Elements die kleinste Größe, die es hätte, wenn es in einem Container mit `inline-size: 0` schwebte (ohne andere CSS-Box-Eigenschaften). Die maximale intrinsische Größe ist das Gegenteil; es ist die Größe, die das gleiche `<span>` hätte, wenn es in einem Container mit unendlicher `inline-size` platziert würde.

Die intrinsische Größe hat für Bilder dieselbe Bedeutung wie für Text – die Größe, bei der die Bilder angezeigt werden, wenn kein CSS angewendet wird, um die Darstellung zu ändern.

Pixeldichte und Auflösung beeinflussen die intrinsische Größe. Standardmäßig wird davon ausgegangen, dass Bilder eine "1x"-Pixeldichte haben (1 Gerätepixel = 1 CSS-Pixel), in welchem Fall die intrinsische Größe einfach die Pixelhöhe und -breite ist. Die intrinsische Größe und Auflösung eines Bildes kann explizit in seinen {{Glossary("EXIF", "EXIF")}}-Daten angegeben werden. Die Pixeldichte von Bildern kann auch über das [`srcset`](/de/docs/Web/HTML/Reference/Elements/img#srcset) Attribut festgelegt werden. Beachten Sie, dass, wenn beide Mechanismen verwendet werden, der `srcset`-Wert "über" dem EXIF-Wert angewendet wird.

Intrinsische Größen und ihre Berechnungsweise sind im Modul [CSS Box Sizing](/de/docs/Web/CSS/Guides/Box_sizing) definiert.

## Minimale intrinsische Größe

Um ein Element entsprechend seiner minimalen intrinsischen Größe festzulegen, setzen Sie die {{cssxref("inline-size")}} (oder {{cssxref("width")}} in horizontalen Schreibrichtungen, wie Englisch und Hebräisch) auf {{cssxref("min-content")}}. Dies stellt das Element auf die Größe ein, die es hätte, wenn der Text in inline-Richtung so klein wie möglich umbrochen wäre, ohne einen Überlauf zu verursachen, und mit so viel weichem Umbruch wie möglich. Für eine Box, die eine Textzeichenfolge enthält, würde die minimale intrinsische Größe durch das längste Wort definiert.

```html hidden
<p>Text wraps, making the element only as wide as its longest word.</p>
```

```css
p {
  inline-size: min-content;
  background-color: palegoldenrod;
}
```

{{EmbedLiveSample('minimum intrinsic size', '100%', '220')}}

## Maximale intrinsische Größe

Die maximale intrinsische Größe ist das Gegenteil. Es ist die Größe des Elements, wenn die Inline-Größe des Containers unendlich wäre. Textinhalt würde so breit wie möglich angezeigt werden, ohne weichen Umbruch, selbst wenn er seinen Container überläuft. Der Schlüsselwortwert {{cssxref("max-content")}} setzt dieses Verhalten.

```html hidden
<p>Element grows as text doesn't wrap.</p>
<p>
  This paragraph may be wider than the width of the entire page and yet it won't
  wrap because <code>width: max-content</code> is set. It therefore may overflow
  its container.
</p>
```

```css
p {
  width: max-content;
  background-color: palegoldenrod;
}
```

{{EmbedLiveSample('maximum intrinsic size', '100%', '200')}}

## Siehe auch

- Verwandte Glossarbegriffe:
  - {{Glossary("Extrinsic_size", "Extrinsische Größe")}}
- CSS {{cssxref("min-content")}}, {{cssxref("max-content")}} und {{cssxref("fit-content")}} Größen-Schlüsselwörter
- {{cssxref("interpolate-size")}}
- {{cssxref("aspect-ratio")}}
- {{cssxref("calc-size()")}}
- [CSS Box Sizing](/de/docs/Web/CSS/Guides/Box_sizing) Modul
- [CSS Box Sizing Module Level 3](https://drafts.csswg.org/css-sizing-3/#intrinsic-sizes) Spezifikation
