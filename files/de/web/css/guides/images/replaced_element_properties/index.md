---
title: Styling von ersetzten Elementen
slug: Web/CSS/Guides/Images/Replaced_element_properties
l10n:
  sourceCommit: ba3c8980510073ee92674aa71cb2c8c5b71294ab
---

Einige [CSS](/de/docs/Web/CSS)-Eigenschaften gelten für alle Elemente, einige nur für Grid- und Flex-Container, andere wiederum nur für transformierbare Elemente. Dieser Leitfaden führt die Eigenschaften ein, die nur für _ersetzte Elemente_ gelten.

Ein **{{Glossary("replaced_elements", "ersetztes Element")}}** ist ein Element, dessen Darstellung außerhalb des CSS-Bereichs liegt; sie sind externe Objekte, deren Darstellung unabhängig vom CSS-Formatierungsmodell ist. Einige ersetzte Elemente, wie {{HTMLElement("iframe")}}-Elemente, können eigene Stylesheets haben, erben jedoch nicht die Stile des übergeordneten Dokuments.

## Verwendung von CSS mit ersetzten Elementen

CSS behandelt in einigen Fällen ersetzte Elemente spezifisch, beispielsweise bei der Berechnung von Margen und einigen `auto`-Werten. Nur ersetzte Elemente können jemals {{Glossary("intrinsic_size", "intrinsische Dimensionen")}} haben. Einige, aber nicht alle ersetzten Elemente, besitzen intrinsische Dimensionen oder eine definierte Basislinie, die von einigen CSS-Eigenschaften wie {{cssxref("vertical-align")}} verwendet wird.

Während Dokumentstile die Größe und Position von ersetzten Elementen festlegen können, beeinflussen sie nicht den Inhalt der ersetzten Elemente, mit einigen Ausnahmen: Das [CSS-Bildermodul](/de/docs/Web/CSS/Guides/Images) beinhaltet Eigenschaften, die die Positionierung des Inhalts innerhalb seines Kastens steuern können.

## Steuerung der Objektposition innerhalb des Inhaltkastens

Das CSS-Bildermodul definiert zwei Eigenschaften, mit denen festgelegt werden kann, wie das innerhalb des ersetzten Elements enthaltene Objekt innerhalb des Kastens positioniert werden soll. Die `object-fit`-Eigenschaft wird verwendet, um Objekte zu skalieren, während die `object-position`-Eigenschaft verwendet wird, um sie zu positionieren.

### Die `object-fit`-Eigenschaft

Die `object-fit`-Eigenschaft gibt an, wie der Inhaltsgegenstand des ersetzten Elements an den umgebenden Kasten angepasst werden soll. Die Eigenschaft legt fest, wie Bilder, Videos und andere einbettbare Medienformate auf die Höhe und Breite des Inhaltkastens des ersetzten Elements reagieren. Wenn sich die Höhe, Breite oder das Seitenverhältnis eines Elements von der Ressource unterscheidet, die den für das Element reservierten Raum einnimmt, definieren die Werte `fill`, `contain`, `cover`, `scale-down` und `none`, ob der Browser die Ressource skalieren, den zugewiesenen Raum abdecken, die Ressource innerhalb des Raums einpassen oder die Ressource verzerren soll.

Wenn der Inhalt enthalten oder herunterskaliert wird, zeigen alle nicht abgedeckten Bereiche des Kastens den Hintergrund des Elements.

Die `object-fit`-Eigenschaft hat keine Wirkung auf {{HTMLElement("iframe")}}, {{HTMLElement("embed")}} und {{HTMLElement("fencedframe")}}-Elemente.

![Ein quadratisches Foto der progressiven Pride-Flagge, die in der Nähe eines Schornsteins weht.](https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg)

Wenn wir das Bild, ein Quadrat mit einem Seitenverhältnis von 1:1, in ein 100px x 300px Rechteck (Seitenverhältnis 1:3) einfügen, füllt das Bild standardmäßig den Kasten und verzerrt sich dabei. Wir können die `object-fit`-Eigenschaft verwenden, um festzulegen, wie das Bild dargestellt werden soll, wenn es in einen Kasten mit unterschiedlicher Größe und Seitenverhältnis gezwungen wird:

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

Aktivieren Sie das Kontrollkästchen, um die Werte für Höhe und Breite festzulegen. Beachten Sie, dass nur der `fill`-Wert (der Standardwert) das ursprüngliche Bild verzerrt. Bei allen anderen Werten bleibt das intrinsische Seitenverhältnis des Bildes erhalten.

### Die `object-position`-Eigenschaft

Die `object-position`-Eigenschaft gibt die Ausrichtung des Inhaltsgegenstandes des ersetzten Elements innerhalb des Kastens an.

Oft in Verbindung mit der {{cssxref("object-fit")}}-Eigenschaft verwendet, nimmt sie als Wert einen {{cssxref("position_value", "&lt;position&gt;")}}-Wert an, den gleichen Werttyp, der auch für {{cssxref("background-position")}} verwendet wird.

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

Sie kann ohne `object-fit` verwendet werden. In diesem Fall wird das Bild in seiner intrinsischen Größe (218px x 218px) gerendert, wobei die Position des Bildinhalts durch den `object-position`-Wert festgelegt wird.

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

- [Verständnis von Seitenverhältnissen](/de/docs/Web/CSS/Guides/Box_sizing/Aspect_ratios)
- [CSS-Bilder](/de/docs/Web/CSS/Guides/Images)-Modul
- [CSS-Anzeige](/de/docs/Web/CSS/Guides/Display)-Modul
- [CSS-Hintergründe und Ränder](/de/docs/Web/CSS/Guides/Backgrounds_and_borders)-Modul
