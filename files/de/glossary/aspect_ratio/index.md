---
title: Seitenverhältnis
slug: Glossary/Aspect_ratio
l10n:
  sourceCommit: 9e7260485703694d47aa360e2db97aae2ea5ae42
---

{{GlossarySidebar}}

Ein **Seitenverhältnis** ist das proportionale Verhältnis zwischen der Breite und Höhe eines Elements oder {{Glossary("viewport", "Viewports")}}. Es wird als {{cssxref("ratio")}} von zwei Zahlen dargestellt.

Ein Seitenverhältnis, sei es ein inhärentes Seitenverhältnis wie bei Bildern und Videos oder extrinsisch festgelegt, bewahrt die beabsichtigten Proportionen eines Elements. Sie können auch das Seitenverhältnis eines Elements oder Viewports abfragen, was nützlich ist bei der Entwicklung flexibler Komponenten und Layouts.

In CSS wird der {{cssxref("ratio")}} Datentyp als `width / height` geschrieben (z.B. `1 / 1` für ein Quadrat, `16 / 9` für Breitbild) oder als einzelne Zahl, wobei die Zahl die Breite darstellt und die Höhe `1` ist.

```css
.wideBox {
  aspect-ratio: 5 / 2;
}
.tallBox {
  aspect-ratio: 0.25;
}
```

In SVG wird das Seitenverhältnis durch das vierwertige [`viewBox`](/de/docs/Web/SVG/Attribute/viewBox) Attribut definiert. Die ersten beiden Werte sind die kleinsten X- und Y-Ursprungskoodinaten, die das SVG haben kann, und die zweiten beiden Werte sind die Breite und Höhe, die das Seitenverhältnis des SVG festlegen.

```svg
<svg viewBox="0 0 300 100" xmlns="http://www.w3.org/2000/svg"></svg>
```

In JavaScript-APIs ergibt das Abfragen eines Seitenverhältnisses eine Gleitkommazahl mit doppelter Genauigkeit, die die Breite geteilt durch die Höhe darstellt. Sie können auch JavaScript verwenden, um das Seitenverhältnis eines Elements festzulegen. Zum Beispiel, das Festlegen einer Seitenverhältnis-Einschränkung für ein 1920x1080 Video mithilfe der [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) oder der [`MediaTrackSettings`](/de/docs/Web/API/MediaTrackSettings) Dictionarys [`aspectRatio`](/de/docs/Web/API/MediaTrackSettings/aspectRatio) Eigenschaft würde als 16/9 oder 1920/1080 berechnet werden, was `1.7777777778` ist:

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
- [Understanding aspect ratios](/de/docs/Web/CSS/CSS_box_sizing/Understanding_aspect-ratio) Leitfaden
- [CSS box sizing](/de/docs/Web/CSS/CSS_box_sizing) Modul
- Verwandte Glossarbegriffe:
  - {{Glossary("intrinsic_size", "intrinsic size")}}
- CSS {{cssxref("min-content")}}, {{cssxref("max-content")}} und {{cssxref("fit-content")}} Eigenschaftswerte.
