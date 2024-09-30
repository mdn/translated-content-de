---
title: Aspect ratio
slug: Glossary/Aspect_ratio
l10n:
  sourceCommit: 1197521ff42256b9d298144330cfd5b6e0d98c33
---

{{GlossarySidebar}}

Ein **aspect ratio** ist das proportionale Verhältnis zwischen der Breite und Höhe eines Elements oder [Viewports](/de/docs/Glossary/viewport) und wird als Verhältnis oder zwei Zahlen dargestellt.

Ein Aspect Ratio, sei es ein inhärentes Verhältnis wie bei Bildern und Videos oder extrinsisch festgelegt, bewahrt die beabsichtigten Proportionen eines Elements. Sie können auch das Verhältnis eines Elements oder Viewports abfragen, was bei der Entwicklung flexibler Komponenten und Layouts nützlich ist.

In CSS wird der {{cssxref("ratio")}} Datentyp als `width / height` geschrieben (z. B. `1 / 1` für ein Quadrat, `16 / 9` für Breitbild) oder als einzelne Zahl, wobei die Zahl die Breite repräsentiert und die Höhe `1` ist.

```css
.wideBox {
  aspect-ratio: 5 / 2;
}
.tallBox {
  aspect-ratio: 0.25;
}
```

In SVG wird das Aspect Ratio durch das vierwertige [`viewBox`](/de/docs/Web/SVG/Attribute/viewBox) Attribut definiert. Die ersten beiden Werte sind die kleinsten X- und Y-Ursprungskoordinaten, die das SVG haben kann, und die zweiten beiden Werte sind die Breite und Höhe, die das Aspect Ratio des SVG festlegen.

```svg
<svg viewBox="0 0 300 100" xmlns="http://www.w3.org/2000/svg"></svg>
```

In JavaScript APIs liefert das Abfragen eines Aspect Ratios eine Gleitkommazahl in doppelter Genauigkeit, die die Breite geteilt durch die Höhe darstellt. Sie können JavaScript auch verwenden, um das Aspect Ratio eines Elements festzulegen. Beispielsweise würde das Festlegen einer Aspect Ratio-Beschränkung für ein 1920x1080 Video unter Verwendung der [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) oder [`MediaTrackSettings`](/de/docs/Web/API/MediaTrackSettings) Wörterbücher durch die [`aspectRatio`](/de/docs/Web/API/MediaTrackSettings/aspectRatio) Eigenschaft als 16/9 oder 1920/1080 berechnet, was `1.7777777778` ist:

```js
const constraints = {
  width: 1920,
  height: 1080,
  aspectRatio: 1.777777778,
};

myTrack.applyConstraints(constraints);
```

## Siehe auch

- CSS {{cssxref("aspect-ratio")}} Eigenschaft
- [Verstehen von Aspect Ratios](/de/docs/Web/CSS/CSS_box_sizing/Understanding_aspect-ratio) Leitfaden
- [CSS Box Sizing](/de/docs/Web/CSS/CSS_box_sizing) Modul
- Verwandte Glossarbegriffe:
  - [Intrinsic Size](/de/docs/Glossary/intrinsic_size)
- CSS {{cssxref("min-content")}}, {{cssxref("max-content")}}, und {{cssxref("fit-content")}} Eigenschaftswerte.
