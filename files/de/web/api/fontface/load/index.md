---
title: "FontFace: load()-Methode"
short-title: load()
slug: Web/API/FontFace/load
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("CSS Font Loading API")}}

Die **`load()`**-Methode der {{domxref("FontFace")}}-Schnittstelle fordert eine Schriftart an und lädt sie, deren `source` als URL angegeben wurde. Sie gibt ein {{jsxref('Promise')}} zurück, das mit dem aktuellen `FontFace`-Objekt erfüllt wird.

Wenn die `source` für die Schriftart als Binärdaten angegeben wurde oder die {{domxref("FontFace/status", "status")}}-Eigenschaft der Schriftart etwas anderes als `unloaded` ist, tut diese Methode nichts.

## Syntax

```js-nolint
load()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref('Promise')}} das mit einem Verweis auf das aktuelle `FontFace`-Objekt erfüllt wird, wenn die Schriftart geladen wird, oder mit einem `NetworkError`-{{domxref("DOMException")}} abgelehnt wird, falls der Ladeprozess fehlschlägt.

### Ausnahmen

- `NetworkError` {{domxref("DOMException")}}
  - : Zeigt an, dass der Versuch, die Schriftart zu laden, fehlgeschlagen ist.

## Beispiele

Dieses einfache Beispiel lädt eine Schriftart und verwendet sie, um Text in einem Canvas-Element (mit der ID `js-canvas`) anzuzeigen.

```html hidden
<canvas id="js-canvas"></canvas>
```

```js
const canvas = document.getElementById("js-canvas");

// die "Bitter"-Schriftart von Google Fonts laden
const fontFile = new FontFace(
  "FontFamily Style Bitter",
  "url(https://fonts.gstatic.com/s/bitter/v7/HEpP8tJXlWaYHimsnXgfCOvvDin1pK8aKteLpeZ5c0A.woff2)",
);
document.fonts.add(fontFile);

fontFile.load().then(
  () => {
    // Schriftart erfolgreich geladen!
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
