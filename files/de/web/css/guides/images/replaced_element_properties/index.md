---
title: Styling von ersetzten Elementen
slug: Web/CSS/Guides/Images/Replaced_element_properties
l10n:
  sourceCommit: 7b47c1b23681675bdaaa3788d1c177ac92eb925f
---

Einige [CSS](/de/docs/Web/CSS)-Eigenschaften gelten für alle Elemente, einige nur für Grid- und Flex-Container, andere nur für transformierbare Elemente. Dieser Leitfaden führt die Eigenschaften ein, die nur für _ersetzte Elemente_ gelten.

Ein **{{Glossary("replaced_elements", "ersetztes Element")}}** ist ein Element, dessen Darstellung außerhalb des Geltungsbereichs von CSS liegt; es sind externe Objekte, deren Darstellung unabhängig von dem CSS-Formatierungsmodell ist. Einige ersetzte Elemente, wie {{HTMLElement("iframe")}}-Elemente, können eigene Stylesheets haben, aber sie übernehmen nicht die Stile des übergeordneten Dokuments.

## Verwendung von CSS mit ersetzten Elementen

CSS behandelt ersetzte Elemente in einigen Fällen speziell, zum Beispiel bei der Berechnung von Rändern und einigen `auto`-Werten. Nur ersetzte Elemente können {{Glossary("intrinsic_size", "intrinsische Dimensionen")}} haben. Einige, aber nicht alle ersetzten Elemente, haben intrinsische Dimensionen oder eine definierte Basislinie, die von einigen CSS-Eigenschaften wie {{cssxref("vertical-align")}} verwendet wird.

Obwohl die Dokumentstile die Größe und Position von ersetzten Elementen festlegen können, beeinflussen sie nicht den Inhalt der ersetzten Elemente, mit einigen Ausnahmen: Das [CSS-Bilder-Modul](/de/docs/Web/CSS/Guides/Images) umfasst Eigenschaften, die die Positionierung des Inhalts innerhalb des Rahmens des Elements steuern.

## Steuerung der Objektposition innerhalb des Inhaltsrahmens

Das CSS-Bilder-Modul definiert zwei Eigenschaften, mit denen spezifiziert werden kann, wie das innerhalb des ersetzten Elements enthaltene Objekt innerhalb des Rahmens des Elements positioniert werden soll. Die `object-fit`-Eigenschaft wird verwendet, um Objekte zu skalieren, während die `object-position`-Eigenschaft verwendet wird, um sie zu positionieren.

### Die `object-fit`-Eigenschaft

Die `object-fit`-Eigenschaft bestimmt, wie das Inhaltsobjekt des ersetzten Elements an den Rahmen des enthaltenen Elements angepasst werden soll. Die Eigenschaft definiert, wie Bilder, Videos und andere einbettbare Medienformate auf die Höhe und Breite des Inhaltsrahmens des ersetzten Elements reagieren. Wenn sich Höhe, Breite oder Seitenverhältnis eines Elements von der Ressource unterscheiden, die den Raum belegen wird, reservieren die Werte `fill`, `contain`, `cover`, `scale-down` und `none`, ob der Browser die Ressource skalieren, den zugeteilten Raum bedecken, das Asset innerhalb des Raums halten oder die Ressource verzerren soll.

Wenn das Objekt enthalten oder herunterskaliert wird, werden alle Bereiche des Rahmens, die nicht vom ersetzten Element abgedeckt sind, den Hintergrund des Elements anzeigen.

Die `object-fit`-Eigenschaft hat keine Wirkung auf {{HTMLElement("iframe")}}, {{HTMLElement("embed")}} und {{HTMLElement("fencedframe")}}-Elemente.

![Ein quadratisches Foto der progressiven Pride-Flagge, die in der Nähe eines Schornsteins weht.](https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg)

Wenn wir das Bild, ein Quadrat mit einem 1:1-Seitenverhältnis, in einem 100px x 300px Rahmen (1:3 Seitenverhältnis) platzieren, füllt das Bild standardmäßig den Rahmen, indem es sich verzerrt. Wir können die `object-fit`-Eigenschaft verwenden, um festzulegen, wie das Bild gerendert werden soll, wenn es in einen Rahmen mit unterschiedlicher Größe und unterschiedlichen Seitenverhältnissen gezwängt wird:

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

Aktivieren Sie das Kästchen, um die Werte für Höhe und Breite festzulegen. Beachten Sie, dass nur der `fill`-Wert (der Standardwert) das Originalbild verzerrt. Bei allen anderen Werten bleibt das intrinsische Seitenverhältnis des Bildes erhalten.

### Die `object-position`-Eigenschaft

Die `object-position`-Eigenschaft spezifiziert die Ausrichtung des Inhaltsobjekts des ersetzten Elements innerhalb des Rahmens des Elements.

Häufig in Verbindung mit der {{cssxref("object-fit")}}-Eigenschaft verwendet, hat sie als Wert einen {{cssxref("position_value", "&lt;position&gt;")}}-Wert, derselbe Werttyp wie bei {{cssxref("background-position")}}.

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

Die `object-position`-Eigenschaft funktioniert genauso gut mit `<iframe>`, `<video>` und `<embed>`-Elementen wie mit `<img>`.

## Siehe auch

- [Verständnis von Seitenverhältnissen](/de/docs/Web/CSS/Guides/Box_sizing/Aspect_ratios)
- [CSS-Bilder](/de/docs/Web/CSS/Guides/Images) Modul
- [CSS-Display](/de/docs/Web/CSS/Guides/Display) Modul
- [CSS Hintergründe und Rahmen](/de/docs/Web/CSS/Guides/Backgrounds_and_borders) Modul
