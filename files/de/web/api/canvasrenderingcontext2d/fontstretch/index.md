---
title: "CanvasRenderingContext2D: fontStretch-Eigenschaft"
short-title: fontStretch
slug: Web/API/CanvasRenderingContext2D/fontStretch
l10n:
  sourceCommit: 44cf523714745d626317192bfbe849b47144f3ab
---

{{APIRef}}

Die **`CanvasRenderingContext2D.fontStretch`**-Eigenschaft der [Canvas API](/de/docs/Web/API/Canvas_API) gibt an, wie die Schriftart beim Zeichnen von Text erweitert oder komprimiert werden kann.

Die Eigenschaft entspricht der CSS-Eigenschaft [`font-stretch`](/de/docs/Web/CSS/font-stretch), wenn sie mit Schlüsselwörtern verwendet wird (Prozentwerte werden nicht unterstützt).

## Wert

Der Schriftdehnungswert als Zeichenkette. Dies ist eines von: `ultra-condensed`, `extra-condensed`, `condensed`, `semi-condensed`, `normal` (Standard), `semi-expanded`, `expanded`, `extra-expanded`, `ultra-expanded`.

Die Eigenschaft kann verwendet werden, um den Schriftdehnungswert abzufragen oder zu setzen.

## Beispiele

In diesem Beispiel wird der Text "Hello World" mit jedem der unterstützten Werte der `fontStretch`-Eigenschaft angezeigt.
Der Dehnungswert wird auch für jeden Fall angezeigt, indem die Eigenschaft ausgelesen wird.

### HTML

```html
<canvas id="canvas" width="700" height="310"></canvas>
```

### JavaScript

Zuerst erhalten wir das im HTML-Dokument deklarierte Canvas und verwenden es, um den `CanvasRenderingContext2D` zu erhalten, der später zum Zeichnen von Text verwendet wird.

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
```

Der nächste Schritt im Beispiel besteht darin, eine variable Schriftart zu laden, die in der Breitenachse variabel ist.
Dies ist erforderlich, da `fontStretch` nur eine Schriftart dehnen kann, die Informationen darüber enthält, wie Glyphen im gedehnten Zustand gezeichnet werden. Andernfalls wird der Text mit dem für die Schriftart nächstgelegenen verfügbaren Dehnungswert gezeichnet, der häufig die normale Breite ist.

In diesem Fall verwenden wir [`FontFace`](/de/docs/Web/API/FontFace) zur Definition eines Schriftbilds für die [Inconsolata](https://fonts.google.com/specimen/Inconsolata/tester) Google-Schriftart, die Schriftbreiten von 50% bis 200% unterstützt (was es uns ermöglicht, `fontStretch`-Werte von `ultra-condensed` bis `ultra-expanded` zu demonstrieren).
Wir fügen dies dann zum [`FontFaceSet`](/de/docs/Web/API/FontFaceSet) des Dokuments ([`document.fonts`](/de/docs/Web/API/Document/fonts)) hinzu, damit es zum Zeichnen verwendet werden kann.

```js
const fontFile = new FontFace(
  "Inconsolata",
  'url(https://fonts.gstatic.com/s/inconsolata/v31/QlddNThLqRwH-OJ1UHjlKENVzlm-WkL3GZQmAwPyya15.woff2) format("woff2")',
  { stretch: "50% 200%" },
);

document.fonts.add(fontFile);
```

Der folgende Code ruft dann [`FontFaceSet.load()`](/de/docs/Web/API/FontFaceSet/load) auf, um die Google-Schriftart abzurufen und zu laden.
Beachten Sie, dass dieser Aufruf die benötigte Schriftgröße festlegt und ein Promise zurückgibt, das beim Laden der Schrift abgeschlossen wird.

Dann weisen wir die geladene Schrift dem Kontext zu und verwenden den Kontext, um Text auf der Leinwand auf jeder der Schlüsselwort-Dehnungsstufen zu zeichnen.
Beachten Sie, dass erneut die Größe der gewünschten Schriftart spezifiziert wird (dies muss nicht mit der geladenen Schriftgröße übereinstimmen).

```js
document.fonts.load("30px Inconsolata").then(
  () => {
    ctx.font = "30px 'Inconsolata'";
    // Default (normal)
    ctx.fillText(`Hello world (default: ${ctx.fontStretch})`, 5, 20);

    ctx.fontStretch = "ultra-condensed";
    ctx.fillText(`Hello world (${ctx.fontStretch})`, 5, 50);

    ctx.fontStretch = "extra-condensed";
    ctx.fillText(`Hello world (${ctx.fontStretch})`, 5, 80);

    ctx.fontStretch = "condensed";
    ctx.fillText(`Hello world (${ctx.fontStretch})`, 5, 110);

    ctx.fontStretch = "semi-condensed";
    ctx.fillText(`Hello world (${ctx.fontStretch})`, 5, 140);

    ctx.fontStretch = "extra-condensed";
    ctx.fillText(`Hello world (${ctx.fontStretch})`, 5, 170);

    ctx.fontStretch = "semi-expanded";
    ctx.fillText(`Hello world (${ctx.fontStretch})`, 5, 200);

    ctx.fontStretch = "expanded";
    ctx.fillText(`Hello world (${ctx.fontStretch})`, 5, 230);

    ctx.fontStretch = "extra-expanded";
    ctx.fillText(`Hello world (${ctx.fontStretch})`, 5, 260);

    ctx.fontStretch = "ultra-expanded";
    ctx.fillText(`Hello world (${ctx.fontStretch})`, 5, 290);
  },
  (err) => {
    console.error(err);
  },
);
```

### Ergebnis

{{ EmbedLiveSample('Examples', 700, 300) }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
