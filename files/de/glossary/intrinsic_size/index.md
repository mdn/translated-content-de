---
title: Intrinsische Größe
slug: Glossary/Intrinsic_Size
l10n:
  sourceCommit: bbff081938f76bdd6c6fdbf59d2e25e0a7a1cf2a
---

In CSS bezeichnet die **intrinsische Größe** eines Elements die Größe, die es basierend ausschließlich auf seinem Inhalt hätte, ohne die Auswirkungen des Layout-Kontexts zu berücksichtigen, in dem es erscheint. Dies ist das Gegenteil der {{Glossary("extrinsic_size", "extrinsischen Größe")}} eines Elements, die durch externe Einschränkungen wie die Größe des Containers bestimmt wird. Die intrinsischen Größen eines Elements werden durch seine {{cssxref("min-content")}}- und {{cssxref("max-content")}}-Größen repräsentiert.

Inline-Elemente haben intrinsische Größen. CSS-[Box-Modell](/de/docs/Learn_web_development/Core/Styling_basics/Box_model)-Eigenschaften wie {{cssxref("height")}}, {{cssxref("width")}}, {{cssxref("block-size")}}, {{cssxref("inline-size")}}, {{cssxref("padding-block")}} und {{cssxref("margin-block")}} haben keinen Einfluss auf ihr Layout (obwohl {{cssxref("margin-inline")}} und {{cssxref("padding-inline")}} den Abstand innerhalb einer Zeile beeinflussen).

Zum Beispiel ist die minimale intrinsische Größe des Inline-{{htmlelement("span")}}-Elements die kleinste Größe, die es hätte, wenn es in einem Container mit `inline-size: 0` floated wäre (ohne dass andere CSS-Box-Eigenschaften angewendet werden). Die maximale intrinsische Größe ist das Gegenteil; es ist die Größe, die das gleiche `<span>` hätte, wenn es in einem Container mit unendlicher `inline-size` platziert würde.

Die intrinsische Größe hat für Bilder die gleiche Bedeutung wie für Text — die Größe, in der die Bilder angezeigt werden, wenn kein CSS angewendet wird, um die Darstellung zu ändern.

Pixeldichte und Auflösung beeinflussen die intrinsische Größe. Standardmäßig wird angenommen, dass Bilder eine "1x" Pixeldichte haben (1 Geräte-Pixel = 1 CSS-Pixel), in welchem Fall die intrinsische Größe einfach die Pixelhöhe und -breite ist. Die intrinsische Größe und Auflösung eines Bildes können explizit in seinen {{Glossary("EXIF", "EXIF")}}-Daten angegeben werden. Die Pixeldichte von Bildern kann auch mit dem [`srcset`](/de/docs/Web/HTML/Reference/Elements/img#srcset)-Attribut festgelegt werden. Beachten Sie, dass, wenn beide Mechanismen verwendet werden, der `srcset`-Wert "über" den EXIF-Wert angewendet wird.

Intrinsische Größen und deren Berechnung sind im [CSS Box Sizing](/de/docs/Web/CSS/CSS_box_sizing)-Modul definiert.

## Minimale intrinsische Größe

Um ein Element entsprechend seiner minimalen intrinsischen Größe einzustellen, setzen Sie die {{cssxref("inline-size")}} (oder {{cssxref("width")}} in horizontalen Schreibmodi, wie Englisch und Hebräisch) auf {{cssxref("min-content")}}. Dies setzt das Element auf die Größe, die es hätte, wenn der Text in der Inline-Richtung so klein wie möglich umbrochen würde, ohne dass es zu einem Überlauf kommt, mit möglichst viel weichem Umbruch. Für eine Box, die eine Zeichenkette enthält, würde die minimale intrinsische Größe durch das längste Wort definiert werden.

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

Die maximale intrinsische Größe ist das Gegenteil. Es ist die Größe des Elements, wenn die Inline-Größe des Containers unendlich wäre. Textinhalte würden so breit wie möglich angezeigt, ohne weichen Umbruch, selbst wenn er seinen Container überfließt. Der Schlüsselwortwert {{cssxref("max-content")}} setzt dieses Verhalten.

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
- CSS {{cssxref("min-content")}}, {{cssxref("max-content")}}, und {{cssxref("fit-content")}} Größen-Schlüsselwörter
- {{cssxref("interpolate-size")}}
- {{cssxref("aspect-ratio")}}
- {{cssxref("calc-size()")}}
- [CSS Box Sizing](/de/docs/Web/CSS/CSS_box_sizing)-Modul
- [CSS Box Sizing Module Level 3](https://drafts.csswg.org/css-sizing-3/#intrinsic-sizes) Spezifikation
