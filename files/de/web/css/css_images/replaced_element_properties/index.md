---
title: Gestaltung ersetzter Elemente
slug: Web/CSS/CSS_images/Replaced_element_properties
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

Einige [CSS](/de/docs/Web/CSS)-Eigenschaften gelten für alle Elemente, einige nur für Grid- und Flex-Container, andere nur für transformierbare Elemente. Dieser Leitfaden führt die Eigenschaften ein, die nur für _ersetzte Elemente_ gelten.

Ein **{{Glossary("replaced_elements", "ersetztes Element")}}** ist ein Element, dessen Darstellung außerhalb des Geltungsbereichs von CSS liegt; es sind externe Objekte, deren Darstellung unabhängig vom CSS-Formatierungsmodell ist. Einige ersetzte Elemente, wie z. B. {{HTMLElement("iframe")}}-Elemente, können eigene Stylesheets haben, erben jedoch nicht die Stile des übergeordneten Dokuments.

## Verwendung von CSS mit ersetzten Elementen

CSS behandelt ersetzte Elemente in bestimmten Fällen speziell, beispielsweise bei der Berechnung von Rändern und einigen `auto`-Werten. Nur ersetzte Elemente können jemals {{Glossary("intrinsic_size", "intrinsische Abmessungen")}} haben. Einige ersetzte Elemente, aber nicht alle, haben intrinsische Abmessungen oder eine definierte Basislinie, die von einigen CSS-Eigenschaften wie {{cssxref("vertical-align")}} verwendet wird.

Obwohl Dokumentstile die Größe und Position ersetzter Elemente festlegen können, beeinflussen Dokumentstile nicht den Inhalt der ersetzten Elemente, mit einigen Ausnahmen: Das [CSS-Bildermodul](/de/docs/Web/CSS/CSS_images) enthält Eigenschaften, die die Positionierung des Inhalts des Elements innerhalb seines Rahmens unterstützen.

## Steuerung der Objektposition innerhalb des Inhaltsrahmens

Das CSS-Bildermodul definiert zwei Eigenschaften, die verwendet werden können, um festzulegen, wie das innerhalb des ersetzten Elements enthaltene Objekt innerhalb des Rahmenbereichs des Elements positioniert werden soll. Die `object-fit`-Eigenschaft wird verwendet, um Objekte in der Größe anzupassen, während die `object-position`-Eigenschaft verwendet wird, um sie zu positionieren.

### Die `object-fit`-Eigenschaft

Die `object-fit`-Eigenschaft legt fest, wie das Inhaltsobjekt des ersetzten Elements in den Kasten des enthaltenen Elements eingepasst werden soll. Die Eigenschaft definiert, wie Bilder, Videos und andere einbettbare Medienformate auf die Höhe und Breite des Inhaltsrahmens des ersetzten Elements reagieren. Wenn sich die Höhe, Breite oder das Seitenverhältnis eines Elements von der Ressource unterscheidet, die Platz im für das Element reservierten Bereich einnehmen wird, definieren die Werte `fill`, `contain`, `cover`, `scale-down` und `none`, ob der Browser die Ressource skalieren, den zugewiesenen Raum abdecken, das Asset innerhalb des Abschnitts enthalten oder die Ressource verzerren lassen soll.

Wenn der Inhalt enthalten oder verkleinert wird, werden alle Bereiche des Kastens, die nicht vom ersetzten Element abgedeckt werden, den Hintergrund des Elements zeigen.

Die `object-fit`-Eigenschaft hat keine Auswirkung auf {{HTMLElement("iframe")}}, {{HTMLElement("embed")}} und {{HTMLElement("fencedframe")}}-Elemente.

![Ein quadratisches Foto der progressiven Pride-Flagge, die in der Nähe eines Schornsteins weht.](https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg)

Wenn wir das Bild, ein Quadrat mit einem Seitenverhältnis von 1:1, in einen 100px x 300px großen Rahmen (1:3-Seitenverhältnis) platzieren, wird das Bild standardmäßig den Rahmen füllen und sich dabei verzerren. Wir können die `object-fit`-Eigenschaft verwenden, um zu definieren, wie das Bild gerendert werden soll, wenn es in einen Rahmen mit einer anderen Größe und einem anderen Seitenverhältnis gezwungen wird:

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

Aktivieren Sie das Kontrollkästchen, um die Höhe und Breite festzulegen. Beachten Sie, dass nur der Wert `fill` (der Standardwert) das ursprüngliche Bild verzerrt. Bei allen anderen Werten bleibt das intrinsische Seitenverhältnis des Bildes erhalten.

### Die `object-position`-Eigenschaft

Die `object-position`-Eigenschaft legt die Ausrichtung des Inhaltsobjekts des ersetzten Elements innerhalb des Rahmens des Elements fest.

Oft in Verbindung mit der {{cssxref("object-fit")}}-Eigenschaft verwendet, nimmt sie als Wert einen {{cssxref("position_value", "&lt;position&gt;")}}-Wert, denselben Wertetyp, der auch für {{cssxref("background-position")}} verwendet wird.

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

Sie kann ohne `object-fit` verwendet werden. In diesem Fall wird das Bild in seiner intrinsischen Größe (218px x 218px) gerendert, wobei die Position des Inhalts des Bildes durch den `object-position`-Wert festgelegt wird.

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

Die `object-position`-Eigenschaft funktioniert genauso gut mit `<iframe>`, `<video>` und `<embed>`-Elementen wie mit `<img>`.

## Siehe auch

- [Verständnis von Seitenverhältnissen](/de/docs/Web/CSS/CSS_box_sizing/Understanding_aspect-ratio)
- [CSS-Bilder](/de/docs/Web/CSS/CSS_images) Modul
- [CSS-Display](/de/docs/Web/CSS/CSS_display) Modul
- [CSS-Hintergründe und Rahmen](/de/docs/Web/CSS/CSS_backgrounds_and_borders) Modul
