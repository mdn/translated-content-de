---
title: "-moz-image-rect"
slug: Web/CSS/-moz-image-rect
l10n:
  sourceCommit: 69f92b8a249a9da025a5b12d98aafd84d417c8d9
---

{{CSSRef}}{{Non-standard_Header}}{{Deprecated_Header}}

Der **`-moz-image-rect`** Wert für [CSS](/de/docs/Web/CSS) {{CSSxRef("background-image")}} ermöglicht es Ihnen, einen Teil eines größeren Bildes als Hintergrund zu verwenden.

## Syntax

```css
-moz-image-rect({{CSSxRef("url", "url()")}}, top, right, bottom, left);
```

### Werte

- {{CSSxRef("url", "url()")}}
  - : Die URI des Bildes, aus der das Teilbild entnommen werden soll.
- `top`
  - : Der obere Rand, angegeben als {{CSSxRef("&lt;integer&gt;")}} oder {{CSSxRef("&lt;percentage&gt;")}}, des Teilbildes innerhalb des angegebenen Bildes.
- `right`
  - : Der rechte Rand, angegeben als {{CSSxRef("&lt;integer&gt;")}} oder {{CSSxRef("&lt;percentage&gt;")}}, des Teilbildes innerhalb des angegebenen Bildes.
- `bottom`
  - : Der untere Rand, angegeben als {{CSSxRef("&lt;integer&gt;")}} oder {{CSSxRef("&lt;percentage&gt;")}}, des Teilbildes innerhalb des angegebenen Bildes.
- `left`
  - : Der linke Rand, angegeben als {{CSSxRef("&lt;integer&gt;")}} oder {{CSSxRef("&lt;percentage&gt;")}}, des Teilbildes innerhalb des angegebenen Bildes.

## Beschreibung

Mit dieser Eigenschaft können Sie beispielsweise verschiedene Teile eines größeren Bildes als Hintergründe in verschiedenen Teilen Ihres Inhalts verwenden.

Dies funktioniert sehr ähnlich zur {{CSSxRef("-moz-image-region")}} Eigenschaft, die mit der {{CSSxRef("list-style-image")}} Eigenschaft verwendet wird, um Teile eines Bildes als Aufzählungszeichen in Listen zu verwenden. Allerdings kann dies für jeden CSS-Hintergrund verwendet werden.

Die Syntax für das Rechteck ist der [`rect()`](/de/docs/Web/CSS/shape#syntax) Funktion ähnlich, die einen {{CSSxRef("&lt;shape&gt;")}} CSS-Typ erzeugt. Alle vier Werte beziehen sich auf die obere linke Ecke des Bildes.

## Beispiele

Dieses Beispiel lädt ein Bild und verwendet es in vier Segmenten, um das Firefox-Logo in vier {{HTMLElement("div")}} Blöcken zu zeichnen. Ein Klick auf ihren Container lässt die vier Segmente rotieren, indem die {{CSSxRef("background-image")}} Eigenschaftswerte unter den vier {{HTMLElement("div")}} Blöcken vertauscht werden.

### CSS

Das CSS definiert einen Containerstil und dann die Stile für die vier Boxen, die das vollständige Bild bilden.

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

Dann sind die vier Boxen definiert, die die Segmente des Bildes darstellen. Betrachten wir sie einzeln.

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
  <div id="box1" style="left:0px;top:0px;">Oben links</div>
  <div id="box2" style="left:133px;top:0px;">Oben rechts</div>
  <div id="box3" style="left:0px;top:136px;">Unten links</div>
  <div id="box4" style="left:133px;top:136px;">Unten rechts</div>
</div>
```

Dies platziert die vier Segmente unseres Bildes in einem zweireihigen Box-Raster. Diese vier Segmente befinden sich alle in einem größeren {{HTMLElement("div")}} Block, dessen Hauptzweck es ist, Klickereignisse zu empfangen und diese an unseren JavaScript-Code weiterzuleiten.

### Der JavaScript-Code

Dieser Code behandelt das Klickereignis, wenn der Container einen Mausklick erhält.

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

Dieser nutzt {{DOMxRef("window.getComputedStyle()")}}, um den Stil jedes Elements abzurufen und es an das folgende Element zu verschieben. Beachten Sie, dass er, bevor er damit beginnt, eine Kopie des Stils der letzten Box speichert, da sie durch den Stil des dritten Elements überschrieben wird. Durch das Kopieren der Werte der {{CSSxRef("background-image")}} Eigenschaft von einem Element zum nächsten bei jedem Mausklick erreichen wir den gewünschten Effekt.

### Wie es aussieht

{{EmbedLiveSample("Examples","400","400")}}

## Spezifikationen

Teil keiner Norm.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Mozilla CSS-Erweiterungen](/de/docs/Web/CSS/Mozilla_Extensions)
- [CSS Backgrounds and Borders Modul](/de/docs/Web/CSS/CSS_backgrounds_and_borders)
