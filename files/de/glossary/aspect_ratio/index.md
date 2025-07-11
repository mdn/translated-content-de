---
title: Seitenverhältnis
slug: Glossary/Aspect_ratio
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

Ein **Seitenverhältnis** ist das proportionale Verhältnis zwischen der Breite und Höhe eines Elements oder des {{Glossary("viewport", "Viewports")}}. Es wird als {{cssxref("ratio")}} von zwei Zahlen dargestellt.

Ein Seitenverhältnis, ob es sich um ein inhärentes Seitenverhältnis wie bei Bildern und Videos oder um ein extrinsisch gesetztes handelt, bewahrt die beabsichtigten Proportionen eines Elements. Sie können auch das Seitenverhältnis eines Elements oder Viewports abfragen, was nützlich bei der Entwicklung flexibler Komponenten und Layouts ist.

In CSS wird der {{cssxref("ratio")}} Datentyp als `width / height` (z.B. `1 / 1` für ein Quadrat, `16 / 9` für Breitbild) oder als Einzelzahl geschrieben, wobei die Zahl die Breite repräsentiert und die Höhe `1` ist.

```css
.wideBox {
  aspect-ratio: 5 / 2;
}
.tallBox {
  aspect-ratio: 0.25;
}
```

In SVG wird das Seitenverhältnis durch das vier Werte umfassende [`viewBox`](/de/docs/Web/SVG/Reference/Attribute/viewBox) Attribut definiert. Die ersten zwei Werte sind die kleinsten X- und Y-Ursprungkoordinaten, die das SVG haben kann. Die zweiten beiden Werte sind die Breite und Höhe, die das Seitenverhältnis des SVG festlegen.

```svg
<svg viewBox="0 0 300 100" xmlns="http://www.w3.org/2000/svg"></svg>
```

In JavaScript-APIs ergibt die Abfrage eines Seitenverhältnisses eine doppelt präzise Gleitkommazahl, die die Breite geteilt durch die Höhe darstellt. Sie können auch JavaScript verwenden, um das Seitenverhältnis eines Elements festzulegen. Zum Beispiel sollte eine Seitenverhältnis-Einschränkung für ein 1920x1080 Video mit Hilfe der Eigenschaft [`aspectRatio`](/de/docs/Web/API/MediaTrackSettings/aspectRatio) im [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) oder [`MediaTrackSettings`](/de/docs/Web/API/MediaTrackSettings) Dictionary auf 16/9 oder 1920/1080 gesetzt werden, was `1.7777777778` ist:

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
- [Verständnis von Seitenverhältnissen](/de/docs/Web/CSS/CSS_box_sizing/Understanding_aspect-ratio) Leitfaden
- [CSS Box Sizing](/de/docs/Web/CSS/CSS_box_sizing) Modul
- Verwandte Glossarbegriffe:
  - {{Glossary("intrinsic_size", "intrinsische Größe")}}
- CSS {{cssxref("min-content")}}, {{cssxref("max-content")}} und {{cssxref("fit-content")}} Eigenschaftswerte.
