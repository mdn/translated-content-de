---
title: "StyleSheet: href-Eigenschaft"
short-title: href
slug: Web/API/StyleSheet/href
l10n:
  sourceCommit: 7cd51a73ad94df604db79ccacbbe0513d0967650
---

{{APIRef("CSSOM")}}

Die **`href`**-Eigenschaft der [`StyleSheet`](/de/docs/Web/API/StyleSheet)
Schnittstelle gibt den Speicherort des Stylesheets zurück.

Diese Eigenschaft ist schreibgeschützt.

## Wert

Ein String, der die URI des Stylesheets enthält.

## Beispiele

Angenommen, der `<head>` enthält Folgendes:

```html
<link rel="styleSheet" href="example.css" />
```

Wenn Sie dann die HTML-Seite über eine `file://` URL auf Windows öffnen und das folgende Skript ausführen:

```js
console.log(document.styleSheets[0].href);
```

Das Ergebnis sieht dann so aus: "file:////C:/Windows/Desktop/example.css".

## Hinweise

Wenn das Stylesheet ein verlinktes Stylesheet ist, ist der Wert seines Attributs dessen Speicherort.
Für eingebettete Stylesheets ist der Wert dieses Attributs `null`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
