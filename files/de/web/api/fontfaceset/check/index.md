---
title: "FontFaceSet: check() Methode"
short-title: check()
slug: Web/API/FontFaceSet/check
l10n:
  sourceCommit: 17e3edf2f1c9e1ed816da4d7c11b3c18e43b3f0a
---

{{APIRef("CSS Font Loading API")}}

Die `check()` Methode des [`FontFaceSet`](/de/docs/Web/API/FontFaceSet) gibt `true` zurück, wenn Sie Text mit der angegebenen Schriftart-Spezifikation rendern können, ohne zu versuchen, irgendetwas aus diesem `FontFaceSet` zu verwenden, das noch nicht vollständig geladen ist. Das bedeutet, dass Sie die Schriftart-Spezifikation verwenden können, ohne einen [Schrifttausch](/de/docs/Web/CSS/@font-face/font-display) zu verursachen.

> [!NOTE]
> Die `check()` Methode ist nicht dafür ausgelegt zu überprüfen, ob ein spezieller Schriftstil gerendert werden kann oder ob eine bestimmte Schriftart vollständig geladen ist. Stattdessen gibt sie `true` zurück, wenn der spezifizierte Text mit der gegebenen Schriftart-Spezifikation gerendert werden kann, ohne einen Schrifttausch zu verursachen. Das bedeutet, dass selbst wenn die angeforderte Schriftart nicht verfügbar oder vollständig geladen ist, die Methode möglicherweise trotzdem `true` zurückgibt. Dieses Verhalten hilft, visuelle Probleme im Zusammenhang mit Schrifttausch zu vermeiden, kann jedoch kontraintuitiv sein, wenn Sie versuchen, die Verfügbarkeit einer bestimmten Schriftart zu bestätigen.

## Syntax

```js-nolint
check(font)
check(font, text)
```

### Parameter

- `font`
  - : Eine Schriftart-Spezifikation unter Verwendung der Syntax für die CSS [`font`](/de/docs/Web/CSS/font) Eigenschaft, zum Beispiel `"italic bold 16px Roboto"`.
- `text`
  - : Begrenzen Sie die Schriftarten auf diejenigen, deren Unicode-Bereich mindestens eines der Zeichen im Text enthält. Dies [prüft nicht die individuelle Glyphenabdeckung](https://lists.w3.org/Archives/Public/www-style/2015Aug/0330.html).

### Rückgabewert

Ein {{jsxref("Boolean")}} Wert, der `true` ist, wenn das Rendern von Text mit der angegebenen Schriftart-Spezifikation nicht versucht, irgendwelche Schriften aus diesem `FontFaceSet` zu verwenden, die noch nicht vollständig geladen sind.

Das bedeutet, dass alle in diesem `FontFaceSet` durch die gegebene Schriftart-Spezifikation übereinstimmenden Schriften eine [`status`](/de/docs/Web/API/FontFace/status) Eigenschaft haben, die auf `"loaded"` gesetzt ist.

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

Die Schriftart ist noch nicht geladen, daher gibt `check("12px molot")` `false` zurück, was darauf hinweist, dass, wenn wir versuchen die gegebene Schriftart-Spezifikation zu verwenden, ein Schriftenladen ausgelöst wird:

```js
console.log(document.fonts.check("12px molot"));
// false: the matching font is in the set, but is not yet loaded
```

### Systemschriftarten

Wenn wir nur eine Systemschriftart im Argument an `check()` angeben, gibt es `true` zurück, da wir die Systemschriftart verwenden können, ohne irgendwelche Schriften aus dem Set zu laden:

```js
console.log(document.fonts.check("12px Courier"));
// true: the matching font is a system font
```

### Nicht vorhandene Schriftarten

Wenn wir eine Schriftart spezifizieren, die nicht im `FontFaceSet` ist und keine Systemschriftart ist, gibt `check()` `true` zurück, weil wir in dieser Situation nicht auf Schriften aus dem Set angewiesen sind:

```js
console.log(document.fonts.check("12px i-dont-exist"));
// true: the matching font is a nonexistent font
```

### System- und nicht geladene Schriftarten

Wenn wir sowohl eine Systemschriftart als auch eine im Set, die noch nicht geladen ist, angeben, dann gibt `check()` `false` zurück:

```js
console.log(document.fonts.check("12px molot, Courier"));
// false: `molot` is in the set but not yet loaded
```

### Schriftarten, die geladen werden

Wenn wir eine Schriftart aus dem Set angeben, die noch lädt, gibt `check()` `false` zurück:

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
