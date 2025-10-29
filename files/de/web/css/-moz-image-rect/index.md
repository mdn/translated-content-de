---
title: -moz-image-rect
slug: Web/CSS/-moz-image-rect
l10n:
  sourceCommit: 1f6d5b39a5883789ece6b570227648113c7021a1
---

{{Non-standard_Header}}{{Deprecated_Header}}

Der **`-moz-image-rect`** Wert für [CSS](/de/docs/Web/CSS) {{CSSxRef("background-image")}} ermöglicht es Ihnen, einen Teil eines größeren Bildes als Hintergrund zu verwenden.

## Syntax

```css
-moz-image-rect(url("my-url"), top, right, bottom, left);
```

### Werte

- {{CSSxRef("url_value", "&lt;url&gt;")}}
  - : Die URI des Bildes, aus dem das Teilbild entnommen werden soll.
- `top`
  - : Der obere Rand, angegeben als {{CSSxRef("&lt;integer&gt;")}} oder {{CSSxRef("&lt;percentage&gt;")}}, des Teilbildes innerhalb des angegebenen Bildes.
- `right`
  - : Der rechte Rand, angegeben als {{CSSxRef("&lt;integer&gt;")}} oder {{CSSxRef("&lt;percentage&gt;")}}, des Teilbildes innerhalb des angegebenen Bildes.
- `bottom`
  - : Der untere Rand, angegeben als {{CSSxRef("&lt;integer&gt;")}} oder {{CSSxRef("&lt;percentage&gt;")}}, des Teilbildes innerhalb des angegebenen Bildes.
- `left`
  - : Der linke Rand, angegeben als {{CSSxRef("&lt;integer&gt;")}} oder {{CSSxRef("&lt;percentage&gt;")}}, des Teilbildes innerhalb des angegebenen Bildes.

## Beschreibung

Diese Eigenschaft erlaubt es Ihnen, zum Beispiel verschiedene Teile eines größeren Bildes als Hintergründe in verschiedenen Teilen Ihres Inhalts zu verwenden.

Die Syntax für das Rechteck ähnelt der [`rect()`](/de/docs/Web/CSS/shape#syntax) Funktion, die einen {{CSSxRef("&lt;shape&gt;")}} CSS-Typ generiert. Alle vier Werte sind relativ zur oberen linken Ecke des Bildes.

## Beispiele

Dieses Beispiel lädt ein Bild und verwendet es in vier Segmenten, um das Firefox-Logo in vier {{HTMLElement("div")}} Blöcken zu zeichnen. Ein Klick auf den Container führt dazu, dass die vier Segmente rotieren, indem die {{CSSxRef("background-image")}} Eigenschaftswerte unter den vier {{HTMLElement("div")}} Blöcken getauscht werden.

### CSS

Das CSS definiert einen Containerstil und dann die Stile für die vier Kästchen, die das vollständige Bild ausmachen.

Der Container sieht so aus:

```css
#container {
  width: 267px;
  height: 272px;
  top: 100px;
  left: 100px;
  position: absolute;
  font-size: 16px;
  text-shadow: white 0px 0px 6px;
  text-align: center;
}
```

Dann werden die vier Kästchen definiert, die die Segmente des Bildes definieren. Schauen wir uns diese nacheinander an.

```css
#box1 {
  background-image: -moz-image-rect(url("firefox.png"), 0%, 50%, 50%, 0%);
  width: 133px;
  height: 136px;
  left: 0px;
  top: 0px;
  position: absolute;
}
```

Dies ist die obere linke Ecke des Bildes. Es definiert ein Rechteck, das das obere linke Viertel des Bildes in der Datei `firefox.jpg` enthält.

```css
#box2 {
  background-image: -moz-image-rect(url("firefox.png"), 0%, 100%, 50%, 50%);
  width: 133px;
  height: 136px;
  left: 133px;
  top: 0px;
  position: absolute;
}
```

Dies definiert die obere rechte Ecke des Bildes.

Die anderen Ecken folgen einem ähnlichen Muster:

```css
#box3 {
  background-image: -moz-image-rect(url("firefox.png"), 50%, 50%, 100%, 0%);
  width: 133px;
  height: 136px;
  left: 0px;
  top: 136px;
  position: absolute;
}
#box4 {
  background-image: -moz-image-rect(url("firefox.png"), 50%, 100%, 100%, 50%);
  width: 133px;
  height: 136px;
  left: 133px;
  top: 136px;
  position: absolute;
}
```

### HTML

Wir fügen einen Container mit vier Kästchen ein:

```html
<div id="container">
  <div id="box1">Top left</div>
  <div id="box2">Top right</div>
  <div id="box3">Bottom left</div>
  <div id="box4">Bottom right</div>
</div>
```

Dies platziert die vier Segmente unseres Bildes in einem Zwei-zu-Zwei-Raster. Diese vier Segmente sind alle in einem größeren {{HTMLElement("div")}} Block enthalten, dessen Hauptzweck es ist, Klick-Ereignisse zu empfangen und diese an unseren JavaScript-Code weiterzuleiten.

### JavaScript

Dieser Code behandelt das Klick-Ereignis, wenn der Container einen Mausklick erhält.

```js
function rotate() {
  let prevStyle = window
    .getComputedStyle(document.getElementById("box4"), null)
    .getPropertyValue("background-image");

  // Now that we've saved the last one, start rotating
  for (let i = 1; i <= 4; i++) {
    const curId = `box${i}`;

    // Shift the background images
    const curStyle = window
      .getComputedStyle(document.getElementById(curId), null)
      .getPropertyValue("background-image");
    document.getElementById(curId).style.backgroundImage = prevStyle;
    prevStyle = curStyle;
  }
}

document.getElementById("container").addEventListener("click", rotate);
```

Dieser verwendet [`window.getComputedStyle()`](/de/docs/Web/API/Window/getComputedStyle), um den Stil jedes Elements abzurufen und auf das nächste Element zu verschieben. Beachten Sie, dass es, bevor es damit beginnt, eine Kopie des Stils des letzten Kastens speichert, da dieser durch den Stil des dritten Elements überschrieben wird. Durch das Kopieren der Werte der {{CSSxRef("background-image")}} Eigenschaft von einem Element zum nächsten bei jedem Mausklick erzielen wir den gewünschten Effekt.

### Wie es aussieht

{{EmbedLiveSample("Examples","400","400")}}

## Spezifikationen

Nicht Teil eines Standards.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Mozilla CSS-Erweiterungen](/de/docs/Web/CSS/Reference/Mozilla_extensions)
- [CSS Hintergründe und Rahmen Modul](/de/docs/Web/CSS/CSS_backgrounds_and_borders)
