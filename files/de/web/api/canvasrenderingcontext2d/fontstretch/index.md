---
title: "CanvasRenderingContext2D: fontStretch-Eigenschaft"
short-title: fontStretch
slug: Web/API/CanvasRenderingContext2D/fontStretch
l10n:
  sourceCommit: 44cf523714745d626317192bfbe849b47144f3ab
---

{{APIRef}}

Die **`CanvasRenderingContext2D.fontStretch`**-Eigenschaft der [Canvas-API](/de/docs/Web/API/Canvas_API) gibt an, wie die Schriftart beim Zeichnen von Text erweitert oder zusammengedrückt werden kann.

Die Eigenschaft entspricht der [`font-stretch`](/de/docs/Web/CSS/font-stretch)-CSS-Eigenschaft, wenn sie mit Schlüsselwörtern verwendet wird (Prozentwerte werden nicht unterstützt).

## Wert

Der Schriftart-Stretch-Wert als Zeichenkette.
Dies ist einer von: `ultra-condensed`, `extra-condensed`, `condensed`, `semi-condensed`, `normal` (Standard), `semi-expanded`, `expanded`, `extra-expanded`, `ultra-expanded`.

Die Eigenschaft kann verwendet werden, um den Schriftart-Stretch-Wert zu erhalten oder festzulegen.

## Beispiele

In diesem Beispiel zeigen wir den Text "Hello World" unter Verwendung jeder der unterstützten Werte der `fontStretch`-Eigenschaft an.
Der Stretch-Wert wird in jedem Fall ebenfalls durch Lesen der Eigenschaft angezeigt.

### HTML

```html
<canvas id="canvas" width="700" height="310"></canvas>
```

### JavaScript

Zuerst holen wir das im HTML-Dokument deklarierte Canvas und nutzen es, um den `CanvasRenderingContext2D` zu erhalten, der später zum Zeichnen von Text verwendet wird.

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
```

Der nächste Schritt im Beispiel ist das Laden einer variablen Schriftart, die in der Breite veränderbar ist.
Dies ist erforderlich, weil `fontStretch` nur eine Schriftart dehnen kann, die Informationen darüber enthält, wie Glyphen beim Dehnen gezeichnet werden – andernfalls wird der Text mit dem nächstgelegenen verfügbaren Schriftart-Stretch-Wert für die Schriftart gezeichnet, was oft die normale Breite sein wird.

In diesem Fall verwenden wir [`FontFace`](/de/docs/Web/API/FontFace), um eine Schriftart für die [Inconsolata](https://fonts.google.com/specimen/Inconsolata/tester)-Google-Schriftart zu definieren, die Schriftbreiten von 50% bis 200% unterstützt (was uns ermöglicht, `fontStretch`-Werte von `ultra-condensed` bis `ultra-expanded` zu demonstrieren).
Wir fügen diese dann der [`FontFaceSet`](/de/docs/Web/API/FontFaceSet) des Dokuments ([`document.fonts`](/de/docs/Web/API/Document/fonts)) hinzu, sodass sie zum Zeichnen verwendet werden kann.

```js
const fontFile = new FontFace(
  "Inconsolata",
  'url(https://fonts.gstatic.com/s/inconsolata/v31/QlddNThLqRwH-OJ1UHjlKENVzlm-WkL3GZQmAwPyya15.woff2) format("woff2")',
  { stretch: "50% 200%" },
);

document.fonts.add(fontFile);
```

Der untenstehende Code ruft dann [`FontFaceSet.load()`](/de/docs/Web/API/FontFaceSet/load) auf, um die Google-Schrift zu holen und zu laden.
Beachten Sie, dass dieser Aufruf die Größe der benötigten Schriftart festlegt und ein Versprechen zurückgibt, das aufgelöst wird, wenn die Schriftart geladen wurde.

Wir weisen dann die heruntergeladene Schriftart dem Kontext zu und verwenden den Kontext, um Text auf den Canvas bei jedem der Schlüsselwort-Stretch-Level zu zeichnen.
Beachten Sie, dass erneut die Größe der gewünschten Schriftart angegeben wird (diese muss nicht mit der geladenen Schriftgröße übereinstimmen).

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
