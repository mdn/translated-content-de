---
title: "FontFaceSet: check()-Methode"
short-title: check()
slug: Web/API/FontFaceSet/check
l10n:
  sourceCommit: 3b7232826ab98368d06ebf8b021886e4a544de93
---

{{APIRef("CSS Font Loading API")}}{{AvailableInWorkers}}

Die `check()`-Methode des [`FontFaceSet`](/de/docs/Web/API/FontFaceSet) gibt `true` zurück, wenn Sie Text mithilfe der angegebenen Schriftauswahl rendern können, ohne zu versuchen, Schriftarten in diesem `FontFaceSet` zu verwenden, die noch nicht vollständig geladen sind. Das bedeutet, dass Sie die Schriftauswahl verwenden können, ohne einen [Font-Swap](/de/docs/Web/CSS/@font-face/font-display) zu verursachen.

> [!NOTE]
> Die `check()`-Methode ist nicht dafür gedacht zu überprüfen, ob ein bestimmter Schriftstil gerendert werden kann oder ob eine bestimmte Schriftart vollständig geladen ist. Stattdessen gibt sie `true` zurück, wenn der angegebene Text mit der gegebenen Schriftauswahl gerendert werden kann, ohne einen Font-Swap zu verursachen. Das bedeutet, dass selbst wenn die angeforderte Schriftart nicht verfügbar oder vollständig geladen ist, die Methode dennoch `true` zurückgeben kann. Dieses Verhalten hilft, die visuellen Probleme zu vermeiden, die mit Font-Swaps verbunden sind, kann aber kontraintuitiv sein, wenn Sie versuchen, die Verfügbarkeit einer bestimmten Schriftart zu bestätigen.

## Syntax

```js-nolint
check(font)
check(font, text)
```

### Parameter

- `font`
  - : eine Schriftauswahl unter Verwendung der Syntax für die CSS-Eigenschaft [`font`](/de/docs/Web/CSS/font), zum Beispiel `"italic bold 16px Roboto"`
- `text`
  - : beschränkt die Schriftarten auf diejenigen, deren Unicode-Bereich mindestens eines der Zeichen im Text enthält. Dies [überprüft nicht die Abdeckung einzelner Glyphen](https://lists.w3.org/Archives/Public/www-style/2015Aug/0330.html).

### Rückgabewert

Ein {{jsxref("Boolean")}}-Wert, der `true` ist, wenn das Rendern des Textes mit der gegebenen Schriftauswahl keinen Versuch unternimmt, Schriftarten aus diesem `FontFaceSet` zu verwenden, die noch nicht vollständig geladen sind.

Das bedeutet, dass für alle Schriftarten in diesem `FontFaceSet`, die der gegebenen Schriftauswahl entsprechen, die [`status`](/de/docs/Web/API/FontFace/status)-Eigenschaft auf `"loaded"` gesetzt ist.

Andernfalls gibt diese Funktion `false` zurück.

## Beispiele

Im folgenden Beispiel erstellen wir eine neue `FontFace` und fügen sie dem `FontFaceSet` hinzu:

```js
const font = new FontFace(
  "molot",
  "url(https://interactive-examples.mdn.mozilla.net/media/fonts/molot.woff2)",
  {
    style: "normal",
    weight: "400",
    stretch: "condensed",
  },
);

document.fonts.add(font);
```

### Nicht geladene Schriftarten

Die Schriftart ist noch nicht geladen, daher gibt `check("12px molot")` `false` zurück, was darauf hinweist, dass wir einen Schriftart-Load auslösen würden, wenn wir versuchen, die angegebene Schriftauswahl zu verwenden:

```js
console.log(document.fonts.check("12px molot"));
// false: the matching font is in the set, but is not yet loaded
```

### Systemschriftarten

Wenn wir im Argument für `check()` nur eine Systemschriftart angeben, gibt es `true` zurück, weil wir die Systemschriftart verwenden können, ohne Schriftarten aus dem Set laden zu müssen:

```js
console.log(document.fonts.check("12px Courier"));
// true: the matching font is a system font
```

### Nicht existierende Schriftarten

Wenn wir eine Schriftart angeben, die nicht im `FontFaceSet` ist und keine Systemschriftart ist, gibt `check()` `true` zurück, weil wir in diesem Fall nicht auf Schriftarten aus dem Set angewiesen sind:

```js
console.log(document.fonts.check("12px i-dont-exist"));
// true: the matching font is a nonexistent font
```

### System- und nicht geladene Schriftarten

Wenn wir sowohl eine Systemschriftart als auch eine im Set nicht geladene Schriftart angeben, gibt `check()` `false` zurück:

```js
console.log(document.fonts.check("12px molot, Courier"));
// false: `molot` is in the set but not yet loaded
```

### Schriftarten, die geladen werden

Wenn wir eine aus dem Set angeben, die noch geladen wird, gibt `check()` `false` zurück:

```js
function check() {
  font.load();
  console.log(document.fonts.check("12px molot"));
  // false: font is still loading
  console.log(font.status);
  // "loading"
}

check();
```

### Geladene Schriftarten

Wenn wir eine aus dem Set angeben, die geladen ist, gibt `check()` `true` zurück:

```js
async function check() {
  await font.load();
  console.log(document.fonts.check("12px molot"));
  // true: font has finished loading
  console.log(font.status);
  // "loaded"
}

check();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
