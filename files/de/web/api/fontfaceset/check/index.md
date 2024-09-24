---
title: "FontFaceSet: check()-Methode"
short-title: check()
slug: Web/API/FontFaceSet/check
l10n:
  sourceCommit: 17e3edf2f1c9e1ed816da4d7c11b3c18e43b3f0a
---

{{APIRef("CSS Font Loading API")}}

Die `check()`-Methode des {{domxref("FontFaceSet")}} gibt `true` zurück, wenn Sie einen Text mit der angegebenen Schriftspezifikation rendern können, ohne zu versuchen, Schriftarten in diesem `FontFaceSet` zu verwenden, die noch nicht vollständig geladen sind. Dies bedeutet, dass Sie die Schriftspezifikation verwenden können, ohne einen [Schrifttausch](/de/docs/Web/CSS/@font-face/font-display) zu verursachen.

> [!NOTE]
> Die `check()`-Methode ist nicht dafür gedacht zu überprüfen, ob ein bestimmter Schriftstil gerendert werden kann oder ob eine bestimmte Schriftart vollständig geladen ist. Stattdessen gibt sie `true` zurück, wenn der angegebene Text mit der gegebenen Schriftspezifikation gerendert werden kann, ohne einen Schrifttausch zu verursachen. Das bedeutet, dass die Methode möglicherweise immer noch `true` zurückgibt, selbst wenn die angeforderte Schriftart nicht verfügbar oder vollständig geladen ist. Dieses Verhalten hilft, die visuellen Probleme im Zusammenhang mit Schrifttausch zu vermeiden, kann jedoch kontraintuitiv sein, wenn Sie versuchen, die Verfügbarkeit einer bestimmten Schriftart zu bestätigen.

## Syntax

```js-nolint
check(font)
check(font, text)
```

### Parameter

- `font`
  - : eine Schriftspezifikation unter Verwendung der Syntax für die CSS [`font`](/de/docs/Web/CSS/font)-Eigenschaft, z. B. `"italic bold 16px Roboto"`
- `text`
  - : Begrenzen Sie die Schriftarten auf diejenigen, deren Unicode-Bereich mindestens eines der Zeichen im Text enthält. Dies [überprüft nicht die individuelle Glyphenabdeckung](https://lists.w3.org/Archives/Public/www-style/2015Aug/0330.html).

### Rückgabewert

Ein {{jsxref("Boolean")}}-Wert, der `true` ist, wenn das Rendern von Text mit der angegebenen Schriftspezifikation nicht versucht, Schriftarten in diesem `FontFaceSet` zu verwenden, die noch nicht vollständig geladen sind.

Das bedeutet, dass alle Schriftarten in diesem `FontFaceSet`, die mit der angegebenen Schriftspezifikation übereinstimmen, eine [`status`](/de/docs/Web/API/FontFace/status)-Eigenschaft haben, die auf `"loaded"` gesetzt ist.

Andernfalls gibt diese Funktion `false` zurück.

## Beispiele

Im folgenden Beispiel erstellen wir ein neues `FontFace` und fügen es dem `FontFaceSet` hinzu:

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

### Nicht geladene Schriften

Die Schrift ist noch nicht geladen, daher gibt `check("12px molot")` `false` zurück, was darauf hinweist, dass wir, wenn wir versuchen, die angegebene Schriftspezifikation zu verwenden, einen Schriftladevorgang auslösen würden:

```js
console.log(document.fonts.check("12px molot"));
// false: die übereinstimmende Schrift ist im Set, aber noch nicht geladen
```

### Systemschriften

Wenn wir nur eine Systemschrift im Argument von `check()` angeben, gibt es `true` zurück, da wir die Systemschrift ohne Laden von Schriften aus dem Set verwenden können:

```js
console.log(document.fonts.check("12px Courier"));
// true: die übereinstimmende Schrift ist eine Systemschrift
```

### Nicht existente Schriften

Wenn wir eine Schriftart angeben, die nicht im `FontFaceSet` ist und keine Systemschriftart ist, gibt `check()` `true` zurück, da wir in dieser Situation nicht auf Schriften aus dem Set angewiesen sind:

```js
console.log(document.fonts.check("12px i-dont-exist"));
// true: die übereinstimmende Schrift ist eine nicht existente Schrift
```

### System- und nicht geladene Schriften

Wenn wir sowohl eine Systemschrift als auch eine im Set nicht geladene Schrift angeben, gibt `check()` `false` zurück:

```js
console.log(document.fonts.check("12px molot, Courier"));
// false: `molot` ist im Set, aber noch nicht geladen
```

### Schriften, die geladen werden

Wenn wir eine Schrift aus dem Set angeben, die noch geladen wird, gibt `check()` `false` zurück:

```js
function check() {
  font.load();
  console.log(document.fonts.check("12px molot"));
  // false: Schrift ist noch in der Ladephase
  console.log(font.status);
  // "loading"
}

check();
```

### Schriften, die geladen sind

Wenn wir eine Schrift aus dem Set angeben, die geladen ist, gibt `check()` `true` zurück:

```js
async function check() {
  await font.load();
  console.log(document.fonts.check("12px molot"));
  // true: Schrift ist fertig geladen
  console.log(font.status);
  // "loaded"
}

check();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
