---
title: "HTMLStyleElement: media-Eigenschaft"
short-title: media
slug: Web/API/HTMLStyleElement/media
l10n:
  sourceCommit: 6d2000984203c51f1aad49107ebcebe14d3c1238
---

{{APIRef("HTML DOM")}}

Die **`HTMLStyleElement.media`**-Eigenschaft gibt das vorgesehene Zielmedium für Stilinformationen an.

## Wert

Ein String, der ein einzelnes Medium oder eine durch Kommas getrennte Liste beschreibt.

## Beispiele

```html
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>Test page</title>

    <link
      id="LinkedStyle"
      rel="stylesheet"
      href="document.css"
      media="screen" />
    <style id="InlineStyle" rel="stylesheet" media="screen, print">
      p {
        color: blue;
      }
    </style>
  </head>
  <body>
    <script>
      console.log(
        "LinkedStyle: ",
        document.getElementById("LinkedStyle").media,
      ); // 'screen'
      console.log(
        "InlineStyle: ",
        document.getElementById("InlineStyle").media,
      ); // 'screen, print'
    </script>
  </body>
</html>
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
