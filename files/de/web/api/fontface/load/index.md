---
title: "FontFace: load() Methode"
short-title: load()
slug: Web/API/FontFace/load
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("CSS Font Loading API")}}

Die **`load()`**-Methode des [`FontFace`](/de/docs/Web/API/FontFace)-Interfaces fordert eine Schriftart an und lädt diese, deren `source` als URL angegeben wurde. Sie gibt ein {{jsxref('Promise')}} zurück, das mit dem aktuellen `FontFace`-Objekt aufgelöst wird.

Wenn die `source` für die Schriftart als Binärdaten angegeben wurde oder die [`status`](/de/docs/Web/API/FontFace/status)-Eigenschaft der Schriftart etwas anderes als `unloaded` ist, macht diese Methode nichts.

## Syntax

```js-nolint
load()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref('Promise')}}, das mit einer Referenz auf das aktuelle `FontFace`-Objekt aufgelöst wird, wenn die Schriftart geladen wird, oder mit einem `NetworkError` [`DOMException`](/de/docs/Web/API/DOMException) abgelehnt wird, wenn der Ladevorgang fehlschlägt.

### Ausnahmen

- `NetworkError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Gibt an, dass der Versuch, die Schriftart zu laden, fehlgeschlagen ist.

## Beispiele

Dieses einfache Beispiel lädt eine Schriftart und verwendet sie, um Text in einem Canvas-Element (mit einer ID von `js-canvas`) anzuzeigen.

```html hidden
<canvas id="js-canvas"></canvas>
```

```js
const canvas = document.getElementById("js-canvas");

// load the "Bitter" font from Google Fonts
const fontFile = new FontFace(
  "FontFamily Style Bitter",
  "url(https://fonts.gstatic.com/s/bitter/v7/HEpP8tJXlWaYHimsnXgfCOvvDin1pK8aKteLpeZ5c0A.woff2)",
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
