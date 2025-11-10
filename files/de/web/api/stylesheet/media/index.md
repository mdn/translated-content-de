---
title: "StyleSheet: media-Eigenschaft"
short-title: media
slug: Web/API/StyleSheet/media
l10n:
  sourceCommit: 7cd51a73ad94df604db79ccacbbe0513d0967650
---

{{APIRef("CSSOM")}}

Die **`media`**-Eigenschaft des [`StyleSheet`](/de/docs/Web/API/StyleSheet)-Interfaces gibt an, für welche Zielmedien die Stilinformationen bestimmt sind. Es handelt sich um ein schreibgeschütztes, array-ähnliches `MediaList`-Objekt und kann mit `deleteMedium()` entfernt und mit `appendMedium()` hinzugefügt werden.

## Wert

Ein schreibgeschütztes, array-ähnliches `MediaList`-Objekt.

## Beispiele

Angenommen, der `<head>` enthält Folgendes:

```html
<link rel="stylesheet" href="document.css" media="screen" />
<style rel="stylesheet" media="screen, print">
  body {
    background-color: snow;
  }
</style>
```

Dann:

```js
for (let i = 0; i < document.styleSheets.length; i++) {
  console.log(
    `document.styleSheets[${i}].media: ${JSON.stringify(
      document.styleSheets[i].media,
    )}`,
  );
  if (i === 0) document.styleSheets[i].media.appendMedium("handheld");
  if (i === 1) document.styleSheets[i].media.deleteMedium("print");
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
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
