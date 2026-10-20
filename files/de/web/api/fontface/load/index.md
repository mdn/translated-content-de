---
title: "FontFace: load()-Methode"
short-title: load()
slug: Web/API/FontFace/load
l10n:
  sourceCommit: 72af34c38ae0d97bc3c9bde4998d538bcc56634a
---

{{APIRef("CSS Font Loading API")}}{{AvailableInWorkers}}

Die **`load()`**-Methode der [`FontFace`](/de/docs/Web/API/FontFace)-Schnittstelle fordert eine Schriftart an, deren `source` als URL angegeben wurde, und lädt sie. Sie gibt ein {{jsxref('Promise')}} zurück, das mit dem aktuellen `FontFace`-Objekt erfüllt wird.

Wenn `source` für die Schriftart als Binärdaten angegeben wurde oder die [`status`](/de/docs/Web/API/FontFace/status)-Eigenschaft der Schriftart einen anderen Wert als `unloaded` hat, bewirkt diese Methode nichts.

## Syntax

```js-nolint
load()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref('Promise')}}, das beim Laden der Schriftart mit einer Referenz auf das aktuelle `FontFace`-Objekt erfüllt oder bei einem Fehlschlag des Ladevorgangs mit einer `NetworkError`-[`DOMException`](/de/docs/Web/API/DOMException) abgelehnt wird.

### Ausnahmen

- `NetworkError`-[`DOMException`](/de/docs/Web/API/DOMException)
  - : Zeigt an, dass der Versuch, die Schriftart zu laden, fehlgeschlagen ist.

## Beispiele

Dieses einfache Beispiel lädt eine Schriftart und verwendet sie, um Text in einem canvas-Element mit der ID `js-canvas` anzuzeigen.

```html hidden
<canvas id="js-canvas"></canvas>
```

```js
const canvas = document.getElementById("js-canvas");

// load the "Bitter" font from Google Fonts
const fontFile = new FontFace(
  "FontFamily Style Bitter",
  'url("https://mdn.github.io/shared-assets/fonts/bitter/Bitter-Regular.woff2")',
);
document.fonts.add(fontFile);

fontFile.load().then(
  () => {
    // font loaded successfully!
    canvas.width = 650;
    canvas.height = 100;
    const ctx = canvas.getContext("2d");

    ctx.font = '36px "FontFamily Style Bitter"';
    ctx.fillText("Bitter font loaded", 20, 50);
  },
  (err) => {
    console.error(err);
  },
);
```

{{EmbedLiveSample('Examples')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
