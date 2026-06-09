---
title: "FontFaceSet: load()-Methode"
short-title: load()
slug: Web/API/FontFaceSet/load
l10n:
  sourceCommit: 0a7be3733111a7a3db436f416334374f2a0f644f
---

{{APIRef("CSS Font Loading API")}}{{AvailableInWorkers}}

Die `load()`-Methode des [`FontFaceSet`](/de/docs/Web/API/FontFaceSet) zwingt alle in den Parametern angegebenen Schriftarten, geladen zu werden.

## Syntax

```js-nolint
load(font)
load(font, text)
```

### Parameter

- `font`
  - : Eine Schriftartspezifikation unter Verwendung der CSS-Wertesyntax, z. B. "italic bold 16px Roboto".
- `text` {{optional_inline}}
  - : Beschränkt die Schriftschnitte auf diejenigen, deren Unicode-Bereich mindestens eines der Zeichen im Text enthält. Dies [überprüft nicht die individuelle Glyphenabdeckung](https://lists.w3.org/Archives/Public/www-style/2015Aug/0330.html). Standardmäßig ist es ein String, der ein einzelnes Leerzeichen enthält (`" "`).

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem {{jsxref("Array")}} von geladenen [`FontFace`](/de/docs/Web/API/FontFace)-Objekten erfüllt wird. Das
Versprechen wird erfüllt, wenn alle Schriftarten geladen sind; es wird abgelehnt, wenn eine der Schriftarten
nicht geladen werden konnte.

## Beispiele

Das folgende Beispiel gibt ein Versprechen zurück, das je nach Erfolg oder Misserfolg beim Laden von "MyFont" erfüllt oder abgelehnt wird. Der Code in `then()` kann die Verfügbarkeit dieser Schriftart voraussetzen.

```js
document.fonts.load("12px MyFont", "ß").then(/* ... */);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
