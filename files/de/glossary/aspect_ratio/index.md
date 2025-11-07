---
title: Seitenverhältnis
slug: Glossary/Aspect_ratio
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Ein **Seitenverhältnis** ist das proportionale Verhältnis zwischen der Breite und Höhe eines Elements oder {{Glossary("viewport", "Viewports")}}. Es wird als {{cssxref("ratio")}} von zwei Zahlen dargestellt.

Ein Seitenverhältnis, sei es ein inhärentes Seitenverhältnis wie bei Bildern und Videos oder wenn es extrinsisch festgelegt wird, erhält die beabsichtigten Proportionen eines Elements. Sie können auch das Seitenverhältnis eines Elements oder Viewports abfragen, was beim Entwickeln flexibler Komponenten und Layouts nützlich ist.

In CSS wird der {{cssxref("ratio")}}-Datentyp als `width / height` geschrieben (z.B. `1 / 1` für ein Quadrat, `16 / 9` für Breitbild) oder als einzelne Zahl, wobei die Zahl die Breite und die Höhe `1` darstellt.

```css
.wideBox {
  aspect-ratio: 5 / 2;
}
.tallBox {
  aspect-ratio: 0.25;
}
```

In SVG ist das Seitenverhältnis durch das vierwertige [`viewBox`](/de/docs/Web/SVG/Reference/Attribute/viewBox)-Attribut definiert. Die ersten beiden Werte sind die kleinsten X- und Y-Ursprungskoordinaten, die das SVG haben kann, und die zweiten beiden Werte sind die Breite und Höhe, die das Seitenverhältnis des SVGs festlegen.

```svg
<svg viewBox="0 0 300 100" xmlns="http://www.w3.org/2000/svg"></svg>
```

In JavaScript-APIs gibt die Abfrage eines Seitenverhältnisses eine Doppelpräzisions-Gleitkommazahl zurück, die die Breite geteilt durch die Höhe darstellt. Sie können auch JavaScript verwenden, um das Seitenverhältnis eines Elements festzulegen. Zum Beispiel würde das Festlegen einer Seitenverhältniskonstante für ein 1920x1080-Video unter Verwendung der [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) oder des [`MediaTrackSettings`](/de/docs/Web/API/MediaTrackSettings)-Dictionaries mit der [`aspectRatio`](/de/docs/Web/API/MediaTrackSettings/aspectRatio)-Eigenschaft als 16/9 oder 1920/1080 berechnet werden, was `1.7777777778` ergibt:

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
- [Seitenverhältnisse verstehen](/de/docs/Web/CSS/Guides/Box_sizing/Aspect_ratios) Leitfaden
- [CSS-Box-Sizing](/de/docs/Web/CSS/Guides/Box_sizing) Modul
- Verwandte Glossarbegriffe:
  - {{Glossary("intrinsic_size", "intrinsische Größe")}}
- CSS {{cssxref("min-content")}}, {{cssxref("max-content")}} und {{cssxref("fit-content")}} Eigenschaftswerte.
