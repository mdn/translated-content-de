---
title: "CanvasRenderingContext2D: fontStretch-Eigenschaft"
short-title: fontStretch
slug: Web/API/CanvasRenderingContext2D/fontStretch
l10n:
  sourceCommit: 03e93e0948768ea78474e77a53795698ebca5836
---

{{APIRef("Canvas API")}}

Die **`CanvasRenderingContext2D.fontStretch`**-Eigenschaft der [Canvas API](/de/docs/Web/API/Canvas_API) legt fest, wie die Schrift beim Zeichnen von Text erweitert oder verdichtet werden kann.

Die Eigenschaft entspricht der {{cssxref("font-stretch")}}-CSS-Eigenschaft, wenn sie mit Schlüsselwörtern verwendet wird (Prozentwerte werden nicht unterstützt).

## Wert

Der Schriftstreckungswert als Zeichenkette.
Dies ist einer der folgenden Werte: `ultra-condensed`, `extra-condensed`, `condensed`, `semi-condensed`, `normal` (Standard), `semi-expanded`, `expanded`, `extra-expanded`, `ultra-expanded`.

Die Eigenschaft kann verwendet werden, um den Schriftstreckungswert abzurufen oder festzulegen.

## Beispiele

In diesem Beispiel zeigen wir den Text „Hello World“ mit jedem der unterstützten Werte der `fontStretch`-Eigenschaft an.
Der Streckungswert wird außerdem für jeden Fall durch Auslesen der Eigenschaft angezeigt.

### HTML

```html
<canvas id="canvas" width="700" height="310"></canvas>
```

### JavaScript

Zuerst rufen wir das in der HTML-Datei deklarierte Canvas ab und verwenden es, um den `CanvasRenderingContext2D` abzurufen, der später zum Zeichnen von Text verwendet wird.

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
```

Der nächste Schritt im Beispiel besteht darin, eine variable Schriftart zu laden, die in der Breitenachse variiert werden kann.
Dies ist erforderlich, weil `fontStretch` nur eine Schriftart strecken kann, die Informationen darüber enthält, wie Glyphen beim Strecken gezeichnet werden — andernfalls wird Text mit dem nächstgelegenen verfügbaren Schriftstreckungswert der Schriftart gezeichnet, der häufig die normale Breite sein wird.

In diesem Fall verwenden wir [`FontFace`](/de/docs/Web/API/FontFace), um einen Schriftschnitt für die Google-Schriftart [Inconsolata](https://fonts.google.com/specimen/Inconsolata) zu definieren, die Schriftbreiten von 50 % bis 200 % unterstützt (wodurch wir `fontStretch`-Werte von `ultra-condensed` bis `ultra-expanded` demonstrieren können).
Anschließend fügen wir diesen zum [`FontFaceSet`](/de/docs/Web/API/FontFaceSet) des Dokuments ([`document.fonts`](/de/docs/Web/API/Document/fonts)) hinzu, damit er zum Zeichnen verwendet werden kann.

```js
const fontFile = new FontFace(
  "Inconsolata",
  'url("https://fonts.gstatic.com/s/inconsolata/v31/QlddNThLqRwH-OJ1UHjlKENVzlm-WkL3GZQmAwPyya15.woff2") format("woff2")',
  { stretch: "50% 200%" },
);

document.fonts.add(fontFile);
```

Der folgende Code ruft dann [`FontFaceSet.load()`](/de/docs/Web/API/FontFaceSet/load) auf, um die Google-Schriftart abzurufen und zu laden.
Beachten Sie, dass dieser Aufruf die benötigte Größe der Schriftart festlegt und ein Promise zurückgibt, das erfüllt wird, wenn die Schriftart geladen wurde.

Anschließend weisen wir dem Kontext den heruntergeladenen Schriftschnitt zu und verwenden den Kontext, um Text auf jeder der Schlüsselwort-Streckungsstufen in das Canvas zu zeichnen.
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
