---
title: Seitenverhältnis
slug: Glossary/Aspect_ratio
l10n:
  sourceCommit: b1bb1b27224e37b2045c6a16b5f9cfa817d0df89
---

Ein **Seitenverhältnis** beschreibt das Verhältnis zwischen Breite und Höhe eines Elements oder eines {{Glossary("viewport", "Viewports")}}. Es wird als {{cssxref("ratio")}} aus zwei Zahlen dargestellt.

Ein Seitenverhältnis bewahrt die vorgesehenen Proportionen eines Elements – unabhängig davon, ob es wie bei Bildern und Videos inhärent ist oder von außen festgelegt wird. Sie können auch das Seitenverhältnis eines Elements oder Viewports abfragen. Das ist bei der Entwicklung flexibler Komponenten und Layouts hilfreich.

In CSS wird der Datentyp {{cssxref("ratio")}} als `width / height` geschrieben (z. B. `1 / 1` für ein Quadrat oder `16 / 9` für ein Breitbildformat) oder als einzelne Zahl. In diesem Fall gibt die Zahl die Breite an, während die Höhe `1` beträgt.

```css
.wideBox {
  aspect-ratio: 5 / 2;
}
.tallBox {
  aspect-ratio: 0.25;
}
```

In SVG wird das Seitenverhältnis durch das vier Werte umfassende Attribut [`viewBox`](/de/docs/Web/SVG/Reference/Attribute/viewBox) definiert. Die ersten beiden Werte geben die kleinsten X- und Y-Koordinaten des Ursprungs an, die das SVG haben kann. Die letzten beiden Werte geben die Breite und Höhe an und legen damit das Seitenverhältnis des SVG fest.

```svg
<svg viewBox="0 0 300 100" xmlns="http://www.w3.org/2000/svg"></svg>
```

In JavaScript-APIs liefert die Abfrage eines Seitenverhältnisses eine Gleitkommazahl mit doppelter Genauigkeit zurück, die die Breite geteilt durch die Höhe darstellt. Sie können JavaScript auch verwenden, um das Seitenverhältnis eines Elements festzulegen. Beispielsweise ergibt sich für ein Video mit 1920 × 1080 Pixeln bei einer Seitenverhältnisvorgabe über die Eigenschaft [`MediaTrackConstraint.aspectRatio`](/de/docs/Web/API/MediaTrackConstraint/aspectRatio) ein Wert von 16/9 beziehungsweise 1920/1080, also `1.7777777778`:

```js
const constraints = {
  width: 1920,
  height: 1080,
  aspectRatio: 1.777777778,
};

myTrack.applyConstraints(constraints);
```

## Siehe auch

- CSS-Eigenschaft {{cssxref("aspect-ratio")}}
- Leitfaden [Seitenverhältnisse verstehen](/de/docs/Web/CSS/Guides/Box_sizing/Aspect_ratios)
- Modul [CSS-Box-Größenbestimmung](/de/docs/Web/CSS/Guides/Box_sizing)
- Verwandte Glossarbegriffe:
  - {{Glossary("intrinsic_size", "intrinsische Größe")}}
- CSS-Eigenschaftswerte {{cssxref("min-content")}}, {{cssxref("max-content")}} und {{cssxref("fit-content")}}.
