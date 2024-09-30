---
title: "HTMLStyleElement: media-Eigenschaft"
short-title: media
slug: Web/API/HTMLStyleElement/media
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("HTML DOM")}}

Die **`HTMLStyleElement.media`**-Eigenschaft gibt das vorgesehene Zielmedium für Style-Informationen an.

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
      alert("LinkedStyle: " + document.getElementById("LinkedStyle").media); // 'screen'
      alert("InlineStyle: " + document.getElementById("InlineStyle").media); // 'screen, print'
    </script>
  </body>
</html>
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
