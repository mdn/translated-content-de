---
title: Seitenverhältnis
slug: Glossary/Aspect_ratio
l10n:
  sourceCommit: c44003c788a907ef19e0d766e98f29ffca5b6798
---

Ein **Seitenverhältnis** beschreibt das Verhältnis zwischen der Breite und der Höhe eines Elements oder eines {{Glossary("viewport", "Viewports")}}. Es wird als {{cssxref("ratio")}} aus zwei Zahlen dargestellt.

Ein Seitenverhältnis bewahrt die vorgesehenen Proportionen eines Elements – unabhängig davon, ob es wie bei Bildern und Videos inhärent ist oder von außen festgelegt wird. Sie können auch das Seitenverhältnis eines Elements oder Viewports abfragen. Das ist bei der Entwicklung flexibler Komponenten und Layouts nützlich.

In CSS wird der Datentyp {{cssxref("ratio")}} als `width / height` geschrieben (z. B. `1 / 1` für ein Quadrat oder `16 / 9` für ein Breitbildformat) oder als einzelne Zahl. Im letzteren Fall gibt die Zahl die Breite an, während die Höhe `1` beträgt.

```css
.wideBox {
  aspect-ratio: 5 / 2;
}
.tallBox {
  aspect-ratio: 0.25;
}
```

In SVG wird das Seitenverhältnis durch das [`viewBox`](/de/docs/Web/SVG/Reference/Attribute/viewBox)-Attribut mit vier Werten definiert. Die ersten beiden Werte geben die kleinsten X- und Y-Koordinaten des Ursprungs an, die das SVG haben kann. Die letzten beiden Werte geben die Breite und Höhe an und legen damit das Seitenverhältnis des SVG fest.

```svg
<svg viewBox="0 0 300 100" xmlns="http://www.w3.org/2000/svg"></svg>
```

In JavaScript-APIs liefert die Abfrage eines Seitenverhältnisses eine Gleitkommazahl mit doppelter Genauigkeit zurück, die die Breite geteilt durch die Höhe darstellt. Sie können JavaScript auch verwenden, um das Seitenverhältnis eines Elements festzulegen. Wenn Sie beispielsweise mit der Eigenschaft [`MediaTrackConstraint.aspectRatio`](/de/docs/Web/API/MediaTrackConstraint/aspectRatio) eine Seitenverhältnis-Vorgabe für ein Video mit 1920 × 1080 festlegen, ergibt sich 16/9 beziehungsweise 1920/1080, also `1.7777777778`:

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
- Modul [CSS-Boxgrößenbestimmung](/de/docs/Web/CSS/Guides/Box_sizing)
- Verwandte Glossarbegriffe:
  - {{Glossary("intrinsic_size", "intrinsische Größe")}}
- CSS-Eigenschaftswerte {{cssxref("min-content")}}, {{cssxref("max-content")}} und {{cssxref("fit-content")}}.
