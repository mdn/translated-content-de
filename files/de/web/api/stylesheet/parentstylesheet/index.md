---
title: "StyleSheet: parentStyleSheet-Eigenschaft"
short-title: parentStyleSheet
slug: Web/API/StyleSheet/parentStyleSheet
l10n:
  sourceCommit: 101ffc9479db6aaa530f2aac3992734dd97d1b86
---

{{APIRef("CSSOM")}}

Die **`parentStyleSheet`**-Eigenschaft des
[`StyleSheet`](/de/docs/Web/API/StyleSheet)-Interfaces gibt das Stylesheet zurück, das das gegebene Stylesheet einbindet, falls vorhanden.

## Wert

Ein [`StyleSheet`](/de/docs/Web/API/StyleSheet)-Objekt.

## Beispiele

```js
// Find the top level stylesheet
const sheet = stylesheet.parentStyleSheet ?? stylesheet;
```

## Hinweise

Diese Eigenschaft gibt `null` zurück, wenn das aktuelle Stylesheet ein übergeordnetes
Stylesheet ist oder wenn die Einbindung von Stylesheets nicht unterstützt wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
