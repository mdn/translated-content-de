---
title: "CanvasRenderingContext2D: fontStretch-Eigenschaft"
short-title: fontStretch
slug: Web/API/CanvasRenderingContext2D/fontStretch
l10n:
  sourceCommit: 44cf523714745d626317192bfbe849b47144f3ab
---

{{APIRef}}

Die **`CanvasRenderingContext2D.fontStretch`**-Eigenschaft der [Canvas API](/de/docs/Web/API/Canvas_API) legt fest, wie die Schrift beim Zeichnen von Text erweitert oder komprimiert werden kann.

Die Eigenschaft entspricht der [`font-stretch`](/de/docs/Web/CSS/font-stretch) CSS-Eigenschaft, wenn sie mit Schlüsselwörtern verwendet wird (Prozentwerte werden nicht unterstützt).

## Wert

Der Schriftdehnungswert als Zeichenkette.
Dies ist eine der folgenden: `ultra-condensed`, `extra-condensed`, `condensed`, `semi-condensed`, `normal` (Standard), `semi-expanded`, `expanded`, `extra-expanded`, `ultra-expanded`.

Die Eigenschaft kann verwendet werden, um den Schriftdehnungswert zu lesen oder zu setzen.

## Beispiele

In diesem Beispiel zeigen wir den Text "Hello World" unter Verwendung jedes der unterstützten Werte der `fontStretch`-Eigenschaft.
Der Dehnungswert wird ebenfalls in jedem Fall durch das Auslesen der Eigenschaft angezeigt.

### HTML

```html
<canvas id="canvas" width="700" height="310"></canvas>
```

### JavaScript

Zuerst holen wir das im HTML-Dokument deklarierte Canvas-Element und nutzen es, um den `CanvasRenderingContext2D` zu erhalten, der später zum Zeichnen von Text verwendet wird.

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
```

Der nächste Schritt im Beispiel ist das Laden einer variablen Schriftart, die in der Breitenachse variierbar ist.
Dies ist notwendig, da `fontStretch` nur eine Schriftart strecken kann, die Informationen darüber enthält, wie Glyphen beim Strecken gezeichnet werden — andernfalls wird der Text unter Verwendung des nächstverfügbaren Schriftdehnungswerts für die Schriftart gezeichnet, was oft die normale Breite sein wird.

In diesem Fall verwenden wir [`FontFace`](/de/docs/Web/API/FontFace), um eine Schriftart für die [Inconsolata](https://fonts.google.com/specimen/Inconsolata/tester) Google Font zu definieren, die Schriftbreiten von 50% bis 200% unterstützt (was es uns ermöglicht, `fontStretch`-Werte von `ultra-condensed` bis `ultra-expanded` zu demonstrieren).
Wir fügen dies dann dem [`FontFaceSet`](/de/docs/Web/API/FontFaceSet) ([`document.fonts`](/de/docs/Web/API/Document/fonts)) des Dokuments hinzu, damit es zum Zeichnen verwendet werden kann.

```js
const fontFile = new FontFace(
  "Inconsolata",
  'url(https://fonts.gstatic.com/s/inconsolata/v31/QlddNThLqRwH-OJ1UHjlKENVzlm-WkL3GZQmAwPyya15.woff2) format("woff2")',
  { stretch: "50% 200%" },
);

document.fonts.add(fontFile);
```

Der untenstehende Code ruft dann [`FontFaceSet.load()`](/de/docs/Web/API/FontFaceSet/load) auf, um die Google Font abzurufen und zu laden.
Beachten Sie, dass dieser Aufruf die Größe der benötigten Schriftart festlegt und ein Promise zurückgibt, das aufgelöst wird, wenn die Schriftart geladen wurde.

Wir weisen dann der heruntergeladenen Schriftart dem Kontext zu und verwenden den Kontext, um Text auf der Leinwand in jedem der Schlüsselwort-Dehnungsstufen zu zeichnen.
Beachten Sie, dass auch hier die Größe der gewünschten Schriftart angegeben ist (sie muss nicht mit der geladenen Schriftgröße übereinstimmen).

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
