---
title: Gestaltung ersetzter Elemente
slug: Web/CSS/CSS_images/Replaced_element_properties
l10n:
  sourceCommit: c8ff2398fa61950fe46f2d9155a105c125bfea83
---

{{CSSRef}}

Einige [CSS](/de/docs/Web/CSS)-Eigenschaften gelten für alle Elemente, einige nur für Grid- und Flex-Container, andere wiederum nur für transformierbare Elemente. Dieser Leitfaden führt die Eigenschaften ein, die nur für _ersetzte Elemente_ anwendbar sind.

Ein **{{Glossary("replaced_elements", "ersetztes Element")}}** ist ein Element, dessen Darstellung außerhalb des Geltungsbereichs von CSS liegt; es sind externe Objekte, deren Darstellung unabhängig vom Strukturmodell von CSS ist. Einige ersetzte Elemente, wie z. B. {{HTMLElement("iframe")}}-Elemente, können eigene Stylesheets haben, aber sie erben nicht die Stile des übergeordneten Dokuments.

## Verwendung von CSS mit ersetzten Elementen

CSS behandelt ersetzte Elemente in einigen Fällen speziell, beispielsweise bei der Berechnung von Rändern und einigen `auto`-Werten. Nur ersetzte Elemente können jemals {{Glossary("intrinsic_size", "intrinsische Dimensionen")}} haben. Einige ersetzte Elemente, aber nicht alle, haben intrinsische Dimensionen oder eine definierte Basislinie, die von einigen CSS-Eigenschaften genutzt wird, wie z.B. {{cssxref("vertical-align")}}.

Während Dokumentenstile die Größe und Position ersetzter Elemente festlegen können, beeinflussen sie nicht den Inhalt der ersetzten Elemente, mit einigen Ausnahmen: Das [CSS-Bildmodul](/de/docs/Web/CSS/CSS_images) umfasst Eigenschaften, die die Steuerung der Positionierung des Inhalts des Elements innerhalb seines Rahmens unterstützen.

## Steuerung der Objektposition innerhalb des Inhaltsrahmens

Das CSS-Bildmodul definiert zwei Eigenschaften, die verwendet werden können, um anzugeben, wie das Objekt innerhalb des ersetzten Elements innerhalb des Rahmenbereichs des Elements positioniert werden soll. Die Eigenschaft `object-fit` wird zum Skalieren von Objekten verwendet, während die Eigenschaft `object-position` zur Positionierung verwendet wird.

### Die Eigenschaft `object-fit`

Die Eigenschaft `object-fit` gibt an, wie das Inhaltsobjekt des ersetzten Elements in den umgebenden Rahmen des Elements eingepasst werden soll. Die Eigenschaft definiert, wie Bilder, Videos und andere einbettbare Medienformate auf die Höhe und Breite des Inhaltsrahmens des ersetzten Elements reagieren. Wenn sich die Höhe, Breite oder das Seitenverhältnis eines Elements von der Ressource unterscheidet, die den reservierten Raum für das Element einnimmt, definieren die Werte `fill`, `contain`, `cover`, `scale-down` und `none`, ob der Browser die Ressource skalieren, den zugewiesenen Raum abdecken, das Asset im Raum enthalten oder die Ressource verzerren soll.

Wenn etwas enthalten oder herunterskaliert wird, werden alle Bereiche des Rahmens, die nicht vom ersetzten Element abgedeckt werden, den Hintergrund des Elements anzeigen.

Die Eigenschaft `object-fit` hat keine Auswirkungen auf {{HTMLElement("iframe")}}, {{HTMLElement("embed")}} und {{HTMLElement("fencedframe")}}-Elemente.

![Ein quadratisches Foto der progressiven Pride-Flagge, die in der Nähe eines Schornsteins weht.](https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg)

Wenn wir das Bild, ein Quadrat mit einem Seitenverhältnis von 1:1, in eine Box von 100px x 300px (Seitenverhältnis 1:3) einfügen, wird das Bild standardmäßig den Rahmen ausfüllen und sich dabei verzerren. Wir können die Eigenschaft `object-fit` verwenden, um zu definieren, wie das Bild gerendert werden soll, wenn es in einen Rahmen mit einer anderen Größe und einem anderen Seitenverhältnis gezwungen wird:

```html hidden live-sample___example1 live-sample___example2
<img
  src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
  alt="Pride flag" />
<img
  src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
  alt="Pride flag" />
<img
  src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
  alt="Pride flag" />
<img
  src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
  alt="Pride flag" />
<img
  src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
  alt="Pride flag" />
<img
  src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
  alt="Pride flag" />
<p>
  <label><input type="checkbox" /> Change dimensions</label>
</p>
```

```css hidden live-sample___example1 live-sample___example2
body {
  display: flex;
  gap: 20px;
  flex-flow: row wrap;
  grid-auto-flow: column;
  max-width: 98%;
  margin: 10px auto 0;
}
img {
  width: 100px;
  height: 300px;
  outline: 2px solid purple;
}
body:has(:checked) img {
  width: 300px;
  height: 100px;
}
```

```css live-sample___example1 live-sample___example2
img:nth-of-type(1) {
  object-fit: fill;
}
img:nth-of-type(2) {
  object-fit: cover;
}
img:nth-of-type(3) {
  object-fit: contain;
}
img:nth-of-type(4) {
  object-fit: scale-down;
}
img:nth-of-type(5) {
  object-fit: none;
}
img:nth-of-type(6) {
  /* no object-fit property */
  outline: 2px dashed red;
}
```

{{EmbedLiveSample('example1','100%','650')}}

Aktivieren Sie das Kästchen, um die Werte für Höhe und Breite zu wechseln. Beachten Sie, dass nur der Wert `fill` (der Standard) das ursprüngliche Bild verzerrt. Mit allen anderen Werten bleibt das intrinsische Seitenverhältnis des Bildes erhalten.

### Die Eigenschaft `object-position`

Die Eigenschaft `object-position` gibt die Ausrichtung des Inhaltsobjekts des ersetzten Elements innerhalb des Rahmenbereichs des Elements an.

Oft in Verbindung mit der {{cssxref("object-fit")}}-Eigenschaft verwendet, nimmt sie als Wert einen {{cssxref("position_value", "&lt;position&gt;")}}-Wert an, derselbe Werttyp, der auch für{{cssxref("background-position")}} verwendet wird.

```css live-sample___example2
img {
  object-position: bottom right;
}
```

{{EmbedLiveSample('example2','100%','650')}}

```html hidden live-sample___example3
<img
  src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
  alt="Pride flag" />
```

Sie kann ohne `object-fit` verwendet werden. In diesem Fall wird das Bild in seiner intrinsischen Größe (218px x 218px) gerendert, wobei die Position des Bildinhalts durch den Wert `object-position` festgelegt wird.

```css hidden live-sample___example3
img {
  margin: 10px 0 0 10px;
}
```

```css live-sample___example3
img {
  outline: 2px solid;
  object-position: 114px 72px;
}
```

{{EmbedLiveSample('example3','100%','250')}}

Die Eigenschaft `object-position` funktioniert ebenso gut mit `<iframe>`, `<video>` und `<embed>`-Elementen wie mit `<img>`.

## Siehe auch

- [Verständnis von Seitenverhältnissen](/de/docs/Web/CSS/CSS_box_sizing/Understanding_aspect-ratio)
- CSS [Bilder](/de/docs/Web/CSS/CSS_images)-Modul
- CSS [Anzeige](/de/docs/Web/CSS/CSS_display)-Modul
- CSS [Hintergründe und Rahmen](/de/docs/Web/CSS/CSS_backgrounds_and_borders)-Modul
