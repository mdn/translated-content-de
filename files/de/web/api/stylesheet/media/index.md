---
title: "StyleSheet: media Eigenschaft"
short-title: media
slug: Web/API/StyleSheet/media
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("CSSOM")}}

Die **`media`** Eigenschaft des [`StyleSheet`](/de/docs/Web/API/StyleSheet) Interfaces gibt das vorgesehene Zielmedium für Stilinformationen an. Sie ist ein schreibgeschütztes, array-ähnliches `MediaList` Objekt und kann mit `deleteMedium()` entfernt und mit `appendMedium()` hinzugefügt werden.

## Wert

Ein schreibgeschütztes, array-ähnliches `MediaList` Objekt.

## Beispiele

```html
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>Test page</title>
    <link rel="stylesheet" href="document.css" media="screen" />
    <style rel="stylesheet" media="screen, print">
      body {
        background-color: snow;
      }
    </style>
  </head>
  <body>
    <script>
      for (let i = 0; i < document.styleSheets.length; i++) {
        console.log(
          `document.styleSheets[${i}].media: ${JSON.stringify(
            document.styleSheets[i].media,
          )}`,
        );
        if (iSheetIndex === 0)
          document.styleSheets[i].media.appendMedium("handheld");
        if (iSheetIndex === 1)
          document.styleSheets[i].media.deleteMedium("print");
        console.log(
          `document.styleSheets[${i}].media: ${JSON.stringify(
            document.styleSheets[i].media,
          )}`,
        );
      }
      // This will log:
      // document.styleSheets[0].media: {"0":"screen"}
      // document.styleSheets[0].media: {"0":"screen","1":"handheld"}
      // document.styleSheets[1].media: {"0":"screen","1":"print"}
      // document.styleSheets[1].media: {"0":"screen"}
    </script>
  </body>
</html>
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
