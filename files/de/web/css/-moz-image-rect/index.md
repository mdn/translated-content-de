---
title: "-moz-image-rect"
slug: Web/CSS/-moz-image-rect
l10n:
  sourceCommit: 6d311a5f07c97dbcd7bb9a6d49c2fe820a228659
---

{{CSSRef}}{{Non-standard_Header}}{{Deprecated_Header}}

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

Diese Eigenschaft ermöglicht es Ihnen, zum Beispiel verschiedene Teile eines größeren Bildes als Hintergründe in verschiedenen Teilen Ihres Inhalts zu verwenden.

Dies funktioniert sehr ähnlich wie die Eigenschaft {{CSSxRef("-moz-image-region")}}, die mit der Eigenschaft {{CSSxRef("list-style-image")}} verwendet wird, um Teile eines Bildes als Aufzählungszeichen in Listen zu verwenden. Diese Eigenschaft kann jedoch für jeden CSS-Hintergrund verwendet werden.

Die Syntax für das Rechteck ist ähnlich der [`rect()`](/de/docs/Web/CSS/shape#syntax) Funktion, die einen {{CSSxRef("&lt;shape&gt;")}} CSS-Typ erzeugt. Alle vier Werte sind relativ zur oberen linken Ecke des Bildes.

## Beispiele

Dieses Beispiel lädt ein Bild und verwendet es in vier Segmenten, um das Firefox-Logo in vier {{HTMLElement("div")}} Blöcken zu zeichnen. Durch Klicken auf ihren Container rotieren die vier Segmente, indem die Werte der Eigenschaft {{CSSxRef("background-image")}} zwischen den vier {{HTMLElement("div")}} Blöcken ausgetauscht werden.

### CSS

Das CSS definiert einen Container-Stil und dann die Stile für die vier Boxen, die das vollständige Bild bilden.

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

Dann werden die vier Boxen definiert, die die Segmente des Bildes darstellen. Betrachten wir sie einzeln.

```css
#box1 {
  background-image: -moz-image-rect(url(firefox.png), 0%, 50%, 50%, 0%);
  width: 133px;
  height: 136px;
  position: absolute;
}
```

Dies ist die obere linke Ecke des Bildes. Es definiert ein Rechteck, das das obere linke Viertel des Bildes in der Datei `firefox.jpg` enthält.

```css
#box2 {
  background-image: -moz-image-rect(url(firefox.png), 0%, 100%, 50%, 50%);
  width: 133px;
  height: 136px;
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
  position: absolute;
}
#box4 {
  background-image: -moz-image-rect(url(firefox.png), 50%, 100%, 100%, 50%);
  width: 133px;
  height: 136px;
  position: absolute;
}
```

### HTML

Das HTML ist recht einfach:

```html
<div id="container" onclick="rotate()">
  <div id="box1" style="left:0px;top:0px;">Top left</div>
  <div id="box2" style="left:133px;top:0px;">Top right</div>
  <div id="box3" style="left:0px;top:136px;">Bottom left</div>
  <div id="box4" style="left:133px;top:136px;">Bottom right</div>
</div>
```

Dies platziert die vier Segmente unseres Bildes in einem Zwei-mal-zwei-Raster. Diese vier Segmente befinden sich alle in einem größeren {{HTMLElement("div")}} Block, dessen Hauptzweck darin besteht, Klickereignisse zu empfangen und an unseren JavaScript-Code zu übermitteln.

### Der JavaScript-Code

Dieser Code verarbeitet das Klickereignis, wenn der Container einen Mausklick erhält.

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
```

Dies verwendet [`window.getComputedStyle()`](/de/docs/Web/API/Window/getComputedStyle), um den Stil jedes Elements abzurufen und auf das folgende Element zu verschieben. Beachten Sie, dass er, bevor er damit beginnt, eine Kopie des Stils der letzten Box speichert, da dieser durch den Stil des dritten Elements überschrieben wird. Indem die Werte der Eigenschaft {{CSSxRef("background-image")}} von einem Element zum nächsten bei jedem Mausklick kopiert werden, erzielen wir den gewünschten Effekt.

### Wie es aussieht

{{EmbedLiveSample("Examples","400","400")}}

## Spezifikationen

Nicht Teil eines Standards.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Mozilla CSS-Erweiterungen](/de/docs/Web/CSS/Mozilla_Extensions)
- [CSS Backgrounds and Borders Module](/de/docs/Web/CSS/CSS_backgrounds_and_borders)
