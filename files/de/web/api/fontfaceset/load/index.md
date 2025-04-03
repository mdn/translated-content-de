---
title: "FontFaceSet: load() Methode"
short-title: load()
slug: Web/API/FontFaceSet/load
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{APIRef("CSS Font Loading API")}}{{AvailableInWorkers}}

Die `load()`-Methode des [`FontFaceSet`](/de/docs/Web/API/FontFaceSet) zwingt alle in den Parametern angegebenen Schriftarten zum Laden.

## Syntax

```js-nolint
load(font)
load(font, text)
```

### Parameter

- `font`
  - : eine Schrifttypenspezifikation unter Verwendung der CSS-Wertesyntax, z. B. "italic bold 16px Roboto"
- `text`
  - : Beschränken Sie die Schriftarten auf diejenigen, deren Unicode-Bereich mindestens eines der Zeichen im Text enthält. Diese [überprüft nicht die Abdeckung einzelner Glyphen](https://lists.w3.org/Archives/Public/www-style/2015Aug/0330.html).

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem {{jsxref("Array")}} von geladenen [`FontFace`](/de/docs/Web/API/FontFace)-Objekten erfüllt wird. Das Versprechen wird erfüllt, wenn alle Schriftarten geladen sind; es wird abgelehnt, wenn eine der Schriftarten nicht geladen werden konnte.

## Beispiele

Das folgende Beispiel gibt ein Versprechen zurück, das entsprechend dem Erfolg des Ladens von "MyFont" erfüllt oder abgelehnt wird. Der Code in `then()` kann die Verfügbarkeit dieser Schriftart annehmen.

```js
document.fonts.load("12px MyFont", "ß").then(/* ... */);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
