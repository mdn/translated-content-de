---
title: CSS-Funktion `-moz-image-rect()`
short-title: -moz-image-rect()
slug: Web/CSS/Reference/Values/-moz-image-rect
l10n:
  sourceCommit: 7484d45816002fbf082a59c5d95c38a1eb2b2e4b
---

{{Non-standard_Header}}

Mit dem Wert **`-moz-image-rect`** für die [CSS](/de/docs/Web/CSS)-Eigenschaft {{CSSxRef("background-image")}} können Sie einen Ausschnitt eines größeren Bildes als Hintergrund verwenden.

## Syntax

```css
-moz-image-rect(url("my-url"), top, right, bottom, left);
```

### Werte

- {{CSSxRef("url_value", "&lt;url&gt;")}}
  - : Die URI des Bildes, aus dem der Ausschnitt entnommen wird.
- `top`
  - : Der obere Rand des Ausschnitts innerhalb des angegebenen Bildes, angegeben als {{CSSxRef("&lt;integer&gt;")}} oder {{CSSxRef("&lt;percentage&gt;")}}.
- `right`
  - : Der rechte Rand des Ausschnitts innerhalb des angegebenen Bildes, angegeben als {{CSSxRef("&lt;integer&gt;")}} oder {{CSSxRef("&lt;percentage&gt;")}}.
- `bottom`
  - : Der untere Rand des Ausschnitts innerhalb des angegebenen Bildes, angegeben als {{CSSxRef("&lt;integer&gt;")}} oder {{CSSxRef("&lt;percentage&gt;")}}.
- `left`
  - : Der linke Rand des Ausschnitts innerhalb des angegebenen Bildes, angegeben als {{CSSxRef("&lt;integer&gt;")}} oder {{CSSxRef("&lt;percentage&gt;")}}.

## Beschreibung

Mit dieser Eigenschaft können Sie beispielsweise verschiedene Teile eines größeren Bildes als Hintergründe für unterschiedliche Bereiche Ihres Inhalts verwenden.

Die Syntax für das Rechteck ähnelt der Funktion [`rect()`](/de/docs/Web/CSS/Reference/Values/shape#syntax), die einen CSS-Wert vom Typ {{CSSxRef("&lt;shape&gt;")}} erzeugt. Alle vier Werte beziehen sich auf die obere linke Ecke des Bildes.

## Beispiele

Dieses Beispiel lädt ein Bild und verwendet vier Ausschnitte daraus, um das Firefox-Logo in vier {{HTMLElement("div")}}-Blöcken darzustellen. Wenn Sie auf den umgebenden Container klicken, rotieren die vier Ausschnitte, indem die Werte der Eigenschaft {{CSSxRef("background-image")}} zwischen den vier {{HTMLElement("div")}}-Blöcken getauscht werden.

### HTML

Wir fügen einen Container mit vier Boxen ein:

```html
<div id="container">
  <div id="box1">Top left</div>
  <div id="box2">Top right</div>
  <div id="box3">Bottom left</div>
  <div id="box4">Bottom right</div>
</div>
```

### CSS

Das CSS definiert zunächst einen Stil für den Container und anschließend die Stile für die vier Boxen, aus denen sich das vollständige Bild zusammensetzt. Dadurch werden die vier Ausschnitte unseres Bildes in einem Raster aus zwei mal zwei Boxen angeordnet. Diese vier Ausschnitte befinden sich alle in einem größeren {{HTMLElement("div")}}-Block, dessen Hauptzweck darin besteht, Klickereignisse zu empfangen und an unseren JavaScript-Code weiterzugeben.

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

Anschließend werden die vier Boxen definiert, die die Ausschnitte des Bildes darstellen. Sehen wir sie uns nacheinander an.

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

Dies ist die obere linke Ecke des Bildes. Hier wird ein Rechteck definiert, das das obere linke Viertel des Bildes in der Datei `firefox.jpg` enthält.

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

Die übrigen Ecken folgen einem ähnlichen Muster:

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

### JavaScript

Dieser Code verarbeitet das Klickereignis, wenn der Container mit der Maus angeklickt wird.

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

Dabei wird [`window.getComputedStyle()`](/de/docs/Web/API/Window/getComputedStyle) verwendet, um den Stil jedes Elements abzurufen und ihn dem jeweils nächsten Element zuzuweisen. Beachten Sie, dass zuvor eine Kopie des Stils der letzten Box gespeichert wird, da dieser durch den Stil des dritten Elements überschrieben wird. Indem bei jedem Mausklick die Werte der Eigenschaft {{CSSxRef("background-image")}} von einem Element zum nächsten kopiert werden, erzielen wir den gewünschten Effekt.

### So sieht es aus

{{EmbedLiveSample("Examples","400","400")}}

## Spezifikationen

Nicht Bestandteil eines Standards.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Mozilla-CSS-Erweiterungen](/de/docs/Web/CSS/Reference/Mozilla_extensions)
- [Modul „CSS Backgrounds and Borders“](/de/docs/Web/CSS/Guides/Backgrounds_and_borders)
