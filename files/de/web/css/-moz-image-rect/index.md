---
title: "-moz-image-rect"
slug: Web/CSS/-moz-image-rect
l10n:
  sourceCommit: 69f92b8a249a9da025a5b12d98aafd84d417c8d9
---

{{CSSRef}}{{Non-standard_Header}}{{Deprecated_Header}}

Der **`-moz-image-rect`**-Wert für [CSS](/de/docs/Web/CSS) {{CSSxRef("background-image")}} ermöglicht es, einen Teil eines größeren Bildes als Hintergrund zu verwenden.

## Syntax

```css
-moz-image-rect({{CSSxRef("url", "url()")}}, top, right, bottom, left);
```

### Werte

- {{CSSxRef("url", "url()")}}
  - : Die URI des Bildes, aus dem das Teilbild entnommen werden soll.
- `top`
  - : Der obere Rand, angegeben als {{CSSxRef("&lt;integer&gt;")}} oder {{CSSxRef("&lt;percentage&gt;")}}, des Teilbilds innerhalb des angegebenen Bildes.
- `right`
  - : Der rechte Rand, angegeben als {{CSSxRef("&lt;integer&gt;")}} oder {{CSSxRef("&lt;percentage&gt;")}}, des Teilbilds innerhalb des angegebenen Bildes.
- `bottom`
  - : Der untere Rand, angegeben als {{CSSxRef("&lt;integer&gt;")}} oder {{CSSxRef("&lt;percentage&gt;")}}, des Teilbilds innerhalb des angegebenen Bildes.
- `left`
  - : Der linke Rand, angegeben als {{CSSxRef("&lt;integer&gt;")}} oder {{CSSxRef("&lt;percentage&gt;")}}, des Teilbilds innerhalb des angegebenen Bildes.

## Beschreibung

Diese Eigenschaft ermöglicht es, beispielsweise verschiedene Teile eines großen Bildes als Hintergrund in verschiedenen Bereichen Ihres Inhalts zu verwenden.

Dies funktioniert sehr ähnlich wie die Eigenschaft {{CSSxRef("-moz-image-region")}}, die mit der Eigenschaft {{CSSxRef("list-style-image")}} verwendet wird, um Teile eines Bildes als Aufzählungszeichen in Listen zu verwenden. Diese Eigenschaft kann jedoch für jeden CSS-Hintergrund verwendet werden.

Die Syntax für das Rechteck ähnelt der Funktion [`rect()`](/de/docs/Web/CSS/shape#syntax), die einen CSS-Typ {{CSSxRef("&lt;shape&gt;")}} erzeugt. Alle vier Werte sind relativ zur oberen linken Ecke des Bildes.

## Beispiele

Dieses Beispiel lädt ein Bild und verwendet es in vier Segmenten, um das Firefox-Logo in vier {{HTMLElement("div")}}-Blöcken zu zeichnen. Ein Klick auf ihren Container führt dazu, dass die vier Segmente durch Austausch der {{CSSxRef("background-image")}}-Eigenschaftswerte zwischen den vier {{HTMLElement("div")}}-Blöcken rotieren.

### CSS

Das CSS definiert einen Container-Stil und dann die Stile für die vier Kästen, die das vollständige Bild bilden.

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

Dann werden die vier Kästen definiert, die die Segmente des Bildes darstellen. Betrachten wir sie nacheinander.

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

Dies platziert die vier Segmente unseres Bildes in einem Box-Gitter von zwei mal zwei. Diese vier Segmente sind alle in einem größeren {{HTMLElement("div")}}-Block enthalten, dessen Hauptzweck es ist, Klickereignisse zu empfangen und sie an unseren JavaScript-Code weiterzuleiten.

### Der JavaScript-Code

Dieser Code verarbeitet das Klickereignis, wenn der Container einen Mausklick empfängt.

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

Dies verwendet [`window.getComputedStyle()`](/de/docs/Web/API/Window/getComputedStyle), um den Stil jedes Elements abzurufen, und verschiebt ihn auf das folgende Element. Beachten Sie, dass bevor dies geschieht, eine Kopie des Stils des letzten Kastens gespeichert wird, da dieser durch den Stil des dritten Elements überschrieben wird. Indem wir die Werte der {{CSSxRef("background-image")}}-Eigenschaft mit jedem Mausklick von einem Element zum nächsten kopieren, erreichen wir den gewünschten Effekt.

### Wie es aussieht

{{EmbedLiveSample("Examples","400","400")}}

## Spezifikationen

Teil keiner Standardspezifikation.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Mozilla CSS-Erweiterungen](/de/docs/Web/CSS/Mozilla_Extensions)
- [CSS Backgrounds and Borders Modul](/de/docs/Web/CSS/CSS_backgrounds_and_borders)
