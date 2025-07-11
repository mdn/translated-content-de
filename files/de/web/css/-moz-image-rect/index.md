---
title: -moz-image-rect
slug: Web/CSS/-moz-image-rect
l10n:
  sourceCommit: 5878ceaae26e3873d5122fa3c294896fe8092be6
---

{{CSSRef}}{{Non-standard_Header}}{{Deprecated_Header}}

Der **`-moz-image-rect`** Wert für [CSS](/de/docs/Web/CSS) {{CSSxRef("background-image")}} ermöglicht es Ihnen, einen Teil eines größeren Bildes als Hintergrund zu verwenden.

## Syntax

```css
-moz-image-rect(url("my-url"), top, right, bottom, left);
```

### Werte

- {{CSSxRef("url_value", "&lt;url&gt;")}}
  - : Die URI des Bildes, aus dem das Teilbild genommen werden soll.
- `top`
  - : Der obere Rand, angegeben als {{CSSxRef("&lt;integer&gt;")}} oder {{CSSxRef("&lt;percentage&gt;")}}, des Teilbildes innerhalb des angegebenen Bildes.
- `right`
  - : Der rechte Rand, angegeben als {{CSSxRef("&lt;integer&gt;")}} oder {{CSSxRef("&lt;percentage&gt;")}}, des Teilbildes innerhalb des angegebenen Bildes.
- `bottom`
  - : Der untere Rand, angegeben als {{CSSxRef("&lt;integer&gt;")}} oder {{CSSxRef("&lt;percentage&gt;")}}, des Teilbildes innerhalb des angegebenen Bildes.
- `left`
  - : Der linke Rand, angegeben als {{CSSxRef("&lt;integer&gt;")}} oder {{CSSxRef("&lt;percentage&gt;")}}, des Teilbildes innerhalb des angegebenen Bildes.

## Beschreibung

Diese Eigenschaft ermöglicht es Ihnen zum Beispiel, verschiedene Teile eines größeren Bildes als Hintergründe in verschiedenen Teilen Ihres Inhalts zu verwenden.

Die Syntax für das Rechteck ist ähnlich der [`rect()`](/de/docs/Web/CSS/shape#syntax) Funktion, die einen {{CSSxRef("&lt;shape&gt;")}} CSS-Typ erzeugt. Alle vier Werte sind relativ zur oberen linken Ecke des Bildes.

## Beispiele

Dieses Beispiel lädt ein Bild und verwendet es in vier Segmenten, um das Firefox-Logo in vier {{HTMLElement("div")}}-Blöcken anzuzeigen. Ein Klick auf ihren Container bewirkt, dass die vier Segmente durch das Vertauschen der {{CSSxRef("background-image")}}-Eigenschaftswerte zwischen den vier {{HTMLElement("div")}}-Blöcken rotieren.

### CSS

Das CSS definiert einen Container-Stil und dann die Stile für die vier Kästchen, die das vollständige Bild ausmachen.

Der Container sieht folgendermaßen aus:

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

Dann werden die vier Kästchen definiert, die die Segmente des Bildes darstellen. Schauen wir sie uns einzeln an.

```css
#box1 {
  background-image: -moz-image-rect(url(firefox.png), 0%, 50%, 50%, 0%);
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
  background-image: -moz-image-rect(url(firefox.png), 0%, 100%, 50%, 50%);
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
  background-image: -moz-image-rect(url(firefox.png), 50%, 50%, 100%, 0%);
  width: 133px;
  height: 136px;
  left: 0px;
  top: 136px;
  position: absolute;
}
#box4 {
  background-image: -moz-image-rect(url(firefox.png), 50%, 100%, 100%, 50%);
  width: 133px;
  height: 136px;
  left: 133px;
  top: 136px;
  position: absolute;
}
```

### HTML

Wir inkludieren einen Container mit vier Kästchen:

```html
<div id="container">
  <div id="box1">Top left</div>
  <div id="box2">Top right</div>
  <div id="box3">Bottom left</div>
  <div id="box4">Bottom right</div>
</div>
```

Dies platziert die vier Segmente unseres Bildes in einem Raster von zwei mal zwei Kästchen. Diese vier Segmente sind alle innerhalb eines größeren {{HTMLElement("div")}}-Blocks enthalten, dessen Hauptzweck es ist, Klick-Ereignisse zu empfangen und sie an unseren JavaScript-Code weiterzuleiten.

### JavaScript

Dieser Code verarbeitet das Klick-Ereignis, wenn der Container einen Mausklick erhält.

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

Dies verwendet [`window.getComputedStyle()`](/de/docs/Web/API/Window/getComputedStyle), um den Stil jedes Elements abzurufen und ihn an das folgende Element zu verschieben. Bevor es damit beginnt, speichert es eine Kopie des Stils des letzten Kästchens, da dieser durch den Stil des dritten Elements überschrieben wird. Indem die Werte der {{CSSxRef("background-image")}}-Eigenschaft bei jedem Mausklick von einem Element zum nächsten kopiert werden, wird der gewünschte Effekt erzielt.

### Wie es aussieht

{{EmbedLiveSample("Examples","400","400")}}

## Spezifikationen

Teil keiner Norm.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Mozilla CSS-Erweiterungen](/de/docs/Web/CSS/Mozilla_Extensions)
- [CSS Backgrounds and Borders Modul](/de/docs/Web/CSS/CSS_backgrounds_and_borders)
