---
title: Seitenverhältnis
slug: Glossary/Aspect_ratio
l10n:
  sourceCommit: 1197521ff42256b9d298144330cfd5b6e0d98c33
---

{{GlossarySidebar}}

Ein **Seitenverhältnis** ist die proportionale Beziehung zwischen der Breite und Höhe eines Elements oder des {{glossary("viewport")}} und wird als Verhältnis oder zwei Zahlen dargestellt.

Ein Seitenverhältnis, ob es ein inhärentes Seitenverhältnis wie bei Bildern und Videos ist oder ob es extrinsisch festgelegt ist, hält die beabsichtigten Proportionen eines Elements aufrecht. Sie können auch das Seitenverhältnis eines Elements oder Viewports abfragen, was bei der Entwicklung flexibler Komponenten und Layouts nützlich ist.

In CSS wird der {{cssxref("ratio")}}-Datentyp als `width / height` geschrieben (z.B. `1 / 1` für ein Quadrat, `16 / 9` für Breitbild) oder als einzelne Zahl, wobei die Zahl die Breite repräsentiert und die Höhe `1` ist.

```css
.wideBox {
  aspect-ratio: 5 / 2;
}
.tallBox {
  aspect-ratio: 0.25;
}
```

In SVG wird das Seitenverhältnis durch das vierfach-Wert-Attribut [`viewBox`](/de/docs/Web/SVG/Attribute/viewBox) definiert. Die ersten zwei Werte sind die kleinsten X- und Y-Ursprungskoordinaten, die das SVG haben kann, und die zweiten zwei Werte sind die Breite und Höhe, die das Seitenverhältnis des SVGs festlegen.

```svg
<svg viewBox="0 0 300 100" xmlns="http://www.w3.org/2000/svg"></svg>
```

In JavaScript-APIs liefert das Abfragen eines Seitenverhältnisses eine doppelt präzise Gleitkommazahl, die die Breite geteilt durch die Höhe darstellt. Sie können auch JavaScript verwenden, um das Seitenverhältnis eines Elements festzulegen. Zum Beispiel würde das Festlegen einer Seitenverhältnis-Beschränkung für ein 1920x1080-Video mithilfe der {{domxref("MediaStreamTrack")}} oder {{domxref("MediaTrackSettings")}} Wörterbuchs [`aspectRatio`](/de/docs/Web/API/MediaTrackSettings/aspectRatio) Eigenschaft als 16/9 oder 1920/1080 berechnet, was `1.7777777778` ist:

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
- [Aspektverhältnisse verstehen](/de/docs/Web/CSS/CSS_box_sizing/Understanding_aspect-ratio) Leitfaden
- [CSS Box Sizing](/de/docs/Web/CSS/CSS_box_sizing) Modul
- Verwandte Glossareinträge:
  - {{glossary("intrinsic size")}}
- CSS {{cssxref("min-content")}}, {{cssxref("max-content")}}, und {{cssxref("fit-content")}} Eigenschaftswerte.
