---
title: "CanvasRenderingContext2D: Eigenschaft fontStretch"
short-title: fontStretch
slug: Web/API/CanvasRenderingContext2D/fontStretch
l10n:
  sourceCommit: 72af34c38ae0d97bc3c9bde4998d538bcc56634a
---

{{APIRef("Canvas API")}}

Die Eigenschaft **`CanvasRenderingContext2D.fontStretch`** der [Canvas API](/de/docs/Web/API/Canvas_API) legt fest, wie stark die Schrift beim Zeichnen von Text gedehnt oder gestaucht werden kann.

Bei Verwendung von Schlüsselwörtern entspricht die Eigenschaft der CSS-Eigenschaft {{cssxref("font-stretch")}} (Prozentwerte werden nicht unterstützt).

## Wert

Der Wert für die Dehnung der Schrift als Zeichenfolge. Er kann einen der folgenden Werte annehmen: `ultra-condensed`, `extra-condensed`, `condensed`, `semi-condensed`, `normal` (Standardwert), `semi-expanded`, `expanded`, `extra-expanded`, `ultra-expanded`.

Mit der Eigenschaft können Sie den Wert für die Dehnung der Schrift abrufen oder festlegen.

## Beispiele

In diesem Beispiel zeigen wir den Text „Hello World“ mit jedem der unterstützten Werte der Eigenschaft `fontStretch` an. Der jeweilige Wert wird außerdem durch Auslesen der Eigenschaft angezeigt.

### HTML

```html
<canvas id="canvas" width="700" height="310"></canvas>
```

### JavaScript

Zuerst rufen wir das in der HTML-Datei deklarierte Canvas ab und ermitteln daraus den `CanvasRenderingContext2D`, mit dem später der Text gezeichnet wird.

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
```

Im nächsten Schritt laden wir eine variable Schriftart, deren Breite verändert werden kann. Das ist nötig, weil `fontStretch` eine Schriftart nur dann dehnen oder stauchen kann, wenn sie Informationen darüber enthält, wie die Glyphen dabei gezeichnet werden. Andernfalls wird der Text mit dem nächstliegenden verfügbaren Wert für die Schriftbreite gezeichnet – häufig mit der normalen Breite.

Hier verwenden wir [`FontFace`](/de/docs/Web/API/FontFace), um eine Schrift für die Google-Schriftart [Inconsolata](https://fonts.google.com/specimen/Inconsolata) zu definieren. Sie unterstützt Breiten von 50 % bis 200 %, sodass wir `fontStretch`-Werte von `ultra-condensed` bis `ultra-expanded` demonstrieren können. Anschließend fügen wir die Schrift dem [`FontFaceSet`](/de/docs/Web/API/FontFaceSet) des Dokuments ([`document.fonts`](/de/docs/Web/API/Document/fonts)) hinzu, damit sie zum Zeichnen verwendet werden kann.

```js
const fontFile = new FontFace(
  "Inconsolata",
  'url("https://mdn.github.io/shared-assets/fonts/inconsolata/Inconsolata-VF.woff2") format("woff2")',
  { stretch: "50% 200%" },
);

document.fonts.add(fontFile);
```

Der folgende Code ruft [`FontFaceSet.load()`](/de/docs/Web/API/FontFaceSet/load) auf, um die Google-Schriftart abzurufen und zu laden. Beachten Sie, dass bei diesem Aufruf die benötigte Schriftgröße festgelegt wird. Der Aufruf gibt ein Promise zurück, das erfüllt wird, sobald die Schriftart geladen ist.

Danach weisen wir dem Kontext die heruntergeladene Schrift zu und verwenden ihn, um den Text für jeden der Schlüsselwortwerte auf das Canvas zu zeichnen. Beachten Sie, dass die gewünschte Schriftgröße erneut angegeben wird; sie muss nicht mit der beim Laden angegebenen Größe übereinstimmen.

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
