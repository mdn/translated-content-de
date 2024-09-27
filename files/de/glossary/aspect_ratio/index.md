---
title: Seitenverhältnis
slug: Glossary/Aspect_ratio
l10n:
  sourceCommit: 1197521ff42256b9d298144330cfd5b6e0d98c33
---

{{GlossarySidebar}}

Ein **Seitenverhältnis** ist das proportionale Verhältnis zwischen der Breite und Höhe eines Elements oder [Viewports](/de/docs/Glossary/viewport) und wird als Verhältnis oder zwei Zahlen dargestellt.

Ein Seitenverhältnis, sei es ein inhärentes Seitenverhältnis wie bei Bildern und Videos oder eines, das extrinsisch festgelegt ist, erhält die beabsichtigten Proportionen eines Elements. Sie können auch das Seitenverhältnis eines Elements oder Viewports abfragen, was bei der Entwicklung flexibler Komponenten und Layouts nützlich ist.

In CSS wird der {{cssxref("ratio")}} Datentyp als `width / height` geschrieben (z.B. `1 / 1` für ein Quadrat, `16 / 9` für Breitbild) oder als einzelne Zahl, wobei die Zahl die Breite repräsentiert und die Höhe `1` ist.

```css
.wideBox {
  aspect-ratio: 5 / 2;
}
.tallBox {
  aspect-ratio: 0.25;
}
```

In SVG wird das Seitenverhältnis durch das vierwertige [`viewBox`](/de/docs/Web/SVG/Attribute/viewBox) Attribut definiert. Die ersten beiden Werte sind die kleinsten X- und Y-Ursprungskoordinaten, die das SVG haben kann, und die zweiten beiden Werte sind die Breite und Höhe, die das Seitenverhältnis des SVG festlegen.

```svg
<svg viewBox="0 0 300 100" xmlns="http://www.w3.org/2000/svg"></svg>
```

In JavaScript-APIs ergibt die Abfrage eines Seitenverhältnisses eine Gleitkommazahl mit doppelter Genauigkeit, die die Breite geteilt durch die Höhe darstellt. Sie können auch JavaScript verwenden, um das Seitenverhältnis eines Elements festzulegen. Zum Beispiel würde das Festlegen einer Seitenverhältniseinschränkung für ein 1920x1080 Video mit Hilfe der [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) oder [`MediaTrackSettings`](/de/docs/Web/API/MediaTrackSettings) Dictionary's [`aspectRatio`](/de/docs/Web/API/MediaTrackSettings/aspectRatio) Eigenschaft als 16/9 oder 1920/1080 berechnet, was `1.7777777778` ergibt:

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
- [Verstehen von Seitenverhältnissen](/de/docs/Web/CSS/CSS_box_sizing/Understanding_aspect-ratio) Leitfaden
- [CSS box sizing](/de/docs/Web/CSS/CSS_box_sizing) Modul
- Verwandte Glossarbegriffe:
  - [intrinsische Größe](/de/docs/Glossary/intrinsic_size)
- CSS {{cssxref("min-content")}}, {{cssxref("max-content")}}, und {{cssxref("fit-content")}} Eigenschaftswerte.
