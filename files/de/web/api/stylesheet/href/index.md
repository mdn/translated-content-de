---
title: "StyleSheet: href-Eigenschaft"
short-title: href
slug: Web/API/StyleSheet/href
l10n:
  sourceCommit: 39dfa52277f598a99d5a6f5432347fb5d9052a99
---

{{APIRef("CSSOM")}}

Die **`href`**-Eigenschaft des [`StyleSheet`](/de/docs/Web/API/StyleSheet)-Interfaces gibt den Standort des Stylesheets zurück.

Diese Eigenschaft ist schreibgeschützt.

## Wert

Ein String, der die URI des Stylesheets enthält.

## Beispiele

Auf einem lokalen Windows-Rechner:

```html
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>href example</title>
    <link rel="styleSheet" href="example.css" />
    <script>
      function sref() {
        alert(document.styleSheets[0].href);
      }
    </script>
  </head>
  <body>
    <div class="thunder">Thunder</div>
    <button onclick="sref()">ss</button>
  </body>
</html>
```

Gibt "file:////C:/Windows/Desktop/example.css" zurück.

## Hinweise

Wenn das Stylesheet ein verlinktes Stylesheet ist, ist der Wert seines Attributs sein Standort. Bei eingebetteten Stylesheets ist der Wert dieses Attributs `null`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
