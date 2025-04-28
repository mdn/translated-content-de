---
title: Styling von ersetzten Elementen
slug: Web/CSS/CSS_images/Replaced_element_properties
l10n:
  sourceCommit: be1922d62a0d31e4e3441db0e943aed8df736481
---

{{CSSRef}}

Einige [CSS](/de/docs/Web/CSS)-Eigenschaften gelten für alle Elemente, andere nur für Grid- und Flex-Container, wiederum andere nur für transformierbare Elemente. Dieser Leitfaden führt in die Eigenschaften ein, die nur für _ersetzte Elemente_ gelten.

Ein **{{Glossary("replaced_elements", "ersetztes Element")}}** ist ein Element, dessen Darstellung außerhalb des CSS-Bereichs liegt; es handelt sich um externe Objekte, deren Darstellung unabhängig vom CSS-Formatierungsmodell ist. Einige ersetzte Elemente, wie {{HTMLElement("iframe")}}-Elemente, können eigene Stylesheets haben, aber sie erben nicht die Stile des übergeordneten Dokuments.

## Verwendung von CSS mit ersetzten Elementen

CSS behandelt ersetzte Elemente in bestimmten Fällen speziell, z. B. bei der Berechnung von Rändern und einigen `auto`-Werten. Nur ersetzte Elemente können jemals {{Glossary("intrinsic_size", "intrinsische Dimensionen")}} haben. Einige ersetzte Elemente, aber nicht alle, haben intrinsische Dimensionen oder eine definierte Basislinie, die von einigen CSS-Eigenschaften wie {{cssxref("vertical-align")}} verwendet werden.

Während Dokumentstile die Größe und Position von ersetzten Elementen festlegen können, beeinflussen sie nicht den Inhalt der ersetzten Elemente, mit einigen Ausnahmen: Das [CSS-Bilder-Modul](/de/docs/Web/CSS/CSS_images) enthält Eigenschaften, die die Positionierung des Inhalts des Elements innerhalb seiner Box unterstützen.

## Steuerung der Objektposition innerhalb der Inhaltsbox

Das CSS-Bilder-Modul definiert zwei Eigenschaften, die verwendet werden können, um festzulegen, wie das Objekt innerhalb des ersetzten Elements innerhalb des Box-Bereichs positioniert werden soll. Die Eigenschaft `object-fit` wird verwendet, um Objekte zu skalieren, während die Eigenschaft `object-position` verwendet wird, um sie zu positionieren.

### Die Eigenschaft `object-fit`

Die Eigenschaft `object-fit` legt fest, wie das Inhaltsobjekt des ersetzten Elements an die umschließende Box des Elements angepasst werden soll. Die Eigenschaft definiert, wie Bilder, Videos und andere einbettbare Medienformate auf die Höhe und Breite der Inhaltsbox des ersetzten Elements reagieren. Wenn die Höhe, Breite oder das Seitenverhältnis eines Elements von der Ressource abweicht, die den reservierten Platz belegen wird, definieren die Werte `fill`, `contain`, `cover`, `scale-down` und `none`, ob der Browser die Ressource skalieren, den Platz abdecken, die Ressource innerhalb des Platzes enthalten oder die Ressource verzerren soll.

Wenn sie enthalten oder herunterskaliert wird, zeigen alle Bereiche der Box, die nicht vom ersetzten Element abgedeckt werden, den Hintergrund des Elements.

Die Eigenschaft `object-fit` hat keinen Einfluss auf {{HTMLElement("iframe")}}, {{HTMLElement("embed")}} und {{HTMLElement("fencedframe")}} Elemente.

![Ein quadratisches Foto einer progressiven Pride-Flagge, die in der Nähe eines Schornsteins weht.](https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg)

Wenn wir das Bild, ein Quadrat mit einem 1:1-Seitenverhältnis, in eine 100px x 300px-Box (1:3-Seitenverhältnis) platzieren, füllt das Bild standardmäßig die Box und verformt sich dabei. Wir können die Eigenschaft `object-fit` verwenden, um zu definieren, wie das Bild gerendert werden soll, wenn es in eine Box mit einer anderen Größe und einem anderen Seitenverhältnis gezwängt wird:

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

Aktivieren Sie das Kontrollkästchen, um die Werte für Höhe und Breite festzulegen. Beachten Sie, dass nur der Wert `fill` (der Standardwert) das ursprüngliche Bild verzerrt. Bei allen anderen Werten bleibt das intrinsische Seitenverhältnis des Bildes erhalten.

### Die Eigenschaft `object-position`

Die Eigenschaft `object-position` legt die Ausrichtung des Inhaltsobjekts des ersetzten Elements innerhalb der Box des Elements fest.

Sie wird häufig in Verbindung mit der {{cssxref("object-fit")}}-Eigenschaft verwendet und nimmt als Wert einen {{cssxref("position_value", "&lt;position&gt;")}}-Wert an, denselben Werttyp, der auch für {{cssxref("background-position")}} verwendet wird.

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

Es kann ohne `object-fit` verwendet werden. In diesem Fall wird das Bild in seiner intrinsischen Größe (218px x 218px) gerendert, wobei die Position des Inhalts des Bildes durch den `object-position`-Wert festgelegt wird.

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

Die Eigenschaft `object-position` funktioniert ebenso gut mit `<iframe>`, `<video>` und `<embed>` Elementen wie mit `<img>`.

## Siehe auch

- [Verstehen von Seitenverhältnissen](/de/docs/Web/CSS/CSS_box_sizing/Understanding_aspect-ratio)
- [CSS-Bilder](/de/docs/Web/CSS/CSS_images) Modul
- [CSS-Anzeige](/de/docs/Web/CSS/CSS_display) Modul
- [CSS Hintergründe und Ränder](/de/docs/Web/CSS/CSS_backgrounds_and_borders) Modul
