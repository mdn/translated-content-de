---
title: "FontFaceSet: check() Methode"
short-title: check()
slug: Web/API/FontFaceSet/check
l10n:
  sourceCommit: 17e3edf2f1c9e1ed816da4d7c11b3c18e43b3f0a
---

{{APIRef("CSS Font Loading API")}}

Die `check()`-Methode des [`FontFaceSet`](/de/docs/Web/API/FontFaceSet) gibt `true` zurück, wenn Sie etwas Text unter Verwendung der angegebenen Schriftartenspezifikation rendern können, ohne zu versuchen, Schriftarten in diesem `FontFaceSet` zu verwenden, die noch nicht vollständig geladen sind. Das bedeutet, dass Sie die Schriftartenspezifikation verwenden können, ohne einen [Font-Wechsel](/de/docs/Web/CSS/@font-face/font-display) zu verursachen.

> [!NOTE]
> Die `check()`-Methode ist nicht dafür gedacht zu überprüfen, ob ein bestimmter Schriftstil gerendert werden kann oder ob eine bestimmte Schriftart vollständig geladen ist. Stattdessen gibt sie `true` zurück, wenn der angegebene Text unter Verwendung der angegebenen Schriftartenspezifikation gerendert werden kann, ohne einen Font-Wechsel zu verursachen. Das bedeutet, dass selbst wenn die angeforderte Schriftart nicht verfügbar oder vollständig geladen ist, die Methode möglicherweise dennoch `true` zurückgibt. Dieses Verhalten hilft, visuelle Probleme im Zusammenhang mit dem Font-Wechsel zu vermeiden, kann jedoch kontraintuitiv sein, wenn Sie versuchen, die Verfügbarkeit einer bestimmten Schriftart zu bestätigen.

## Syntax

```js-nolint
check(font)
check(font, text)
```

### Parameter

- `font`
  - : eine Schriftartenspezifikation unter Verwendung der Syntax für die CSS- [`font`](/de/docs/Web/CSS/font) Eigenschaft, zum Beispiel `"italic bold 16px Roboto"`
- `text`
  - : beschränkt die Schriftarten auf diejenigen, deren Unicode-Bereich mindestens eines der Zeichen im Text enthält. Dies [überprüft nicht die Abdeckung einzelner Glyphen](https://lists.w3.org/Archives/Public/www-style/2015Aug/0330.html).

### Rückgabewert

Ein {{jsxref("Boolean")}}-Wert, der `true` ist, wenn das Rendern von Text mit der angegebenen Schriftartenspezifikation keinen Versuch unternimmt, Schriftarten in diesem `FontFaceSet` zu verwenden, die noch nicht vollständig geladen sind.

Das bedeutet, dass alle Schriftarten in diesem `FontFaceSet`, die mit der angegebenen Schriftartenspezifikation übereinstimmen, eine [`status`](/de/docs/Web/API/FontFace/status) Eigenschaft haben, die auf `"loaded"` gesetzt ist.

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

Die Schriftart ist noch nicht geladen, daher gibt `check("12px molot")` `false` zurück und zeigt an, dass wir beim Versuch, die angegebene Schriftartenspezifikation zu verwenden, einen Schriftartenladevorgang auslösen würden:

```js
console.log(document.fonts.check("12px molot"));
// false: the matching font is in the set, but is not yet loaded
```

### Systemschriftarten

Wenn wir im Argument an `check()` nur eine Systemschriftart angeben, gibt es `true` zurück, weil wir die Systemschriftart ohne Laden von Schriftarten aus dem Set verwenden können:

```js
console.log(document.fonts.check("12px Courier"));
// true: the matching font is a system font
```

### Nicht vorhandene Schriftarten

Wenn wir eine Schriftart angeben, die nicht im `FontFaceSet` ist und keine Systemschriftart ist, gibt `check()` `true` zurück, weil wir in dieser Situation nicht auf Schriftarten aus dem Set angewiesen sind:

```js
console.log(document.fonts.check("12px i-dont-exist"));
// true: the matching font is a nonexistent font
```

### System- und nicht geladene Schriftarten

Wenn wir sowohl eine Systemschriftart als auch eine im Set nicht geladene Schriftart angeben, dann gibt `check()` `false` zurück:

```js
console.log(document.fonts.check("12px molot, Courier"));
// false: `molot` is in the set but not yet loaded
```

### Schriftarten, die laden

Wenn wir eine Schriftart aus dem Set angeben, die noch geladen wird, gibt `check()` `false` zurück:

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

Wenn wir eine Schriftart aus dem Set angeben, die geladen ist, gibt `check()` `true` zurück:

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
