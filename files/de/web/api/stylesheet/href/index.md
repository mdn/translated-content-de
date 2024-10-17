---
title: "StyleSheet: href-Eigenschaft"
short-title: href
slug: Web/API/StyleSheet/href
l10n:
  sourceCommit: 00f46adb5616d826821d63b11eac285faf1cf4a5
---

{{APIRef("CSSOM")}}

Die **`href`**-Eigenschaft der [`StyleSheet`](/de/docs/Web/API/StyleSheet)-Schnittstelle gibt den Speicherort des Stylesheets zurück.

Diese Eigenschaft ist schreibgeschützt.

## Wert

Ein String, der den URI des Stylesheets enthält.

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
      function printRef() {
        alert(document.styleSheets[0].href);
      }
    </script>
  </head>
  <body>
    <div class="thunder">Thunder</div>
    <button onclick="printRef()">ss</button>
  </body>
</html>
```

Gibt "file:////C:/Windows/Desktop/example.css" zurück.

## Hinweise

Wenn das Stylesheet ein verlinktes Stylesheet ist, ist der Wert seines Attributs dessen Speicherort. Für Inline-Stylesheets ist der Wert dieses Attributs `null`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
