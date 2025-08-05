---
title: "FontFaceSet: check() Methode"
short-title: check()
slug: Web/API/FontFaceSet/check
l10n:
  sourceCommit: 9944f7b12ef1a6aecd54d4b2f0c188a82fdeaaf0
---

{{APIRef("CSS Font Loading API")}}{{AvailableInWorkers}}

Die `check()`-Methode des [`FontFaceSet`](/de/docs/Web/API/FontFaceSet) gibt `true` zurück, wenn Sie Text mit der angegebenen Schriftauswahl rendern können, ohne zu versuchen, Schriftarten in diesem `FontFaceSet` zu verwenden, die noch nicht vollständig geladen sind. Das bedeutet, dass Sie die Schriftauswahl verwenden können, ohne einen [Schriftenwechsel](/de/docs/Web/CSS/@font-face/font-display) zu verursachen.

> [!NOTE]
> Die `check()`-Methode ist nicht dafür ausgelegt zu überprüfen, ob ein bestimmter Schriftstil gerendert werden kann oder ob eine bestimmte Schriftart vollständig geladen ist. Stattdessen gibt sie `true` zurück, wenn der angegebene Text mit der gegebenen Schriftauswahl gerendert werden kann, ohne einen Schriftenwechsel zu verursachen. Das bedeutet, dass die Methode möglicherweise `true` zurückgibt, selbst wenn die angeforderte Schriftart nicht verfügbar oder vollständig geladen ist. Dieses Verhalten hilft, visuelle Probleme im Zusammenhang mit Schriftenwechseln zu vermeiden, kann jedoch kontraintuitiv sein, wenn Sie versuchen, die Verfügbarkeit einer bestimmten Schriftart zu bestätigen.

## Syntax

```js-nolint
check(font)
check(font, text)
```

### Parameter

- `font`
  - : eine Schriftauswahl unter Verwendung der Syntax für die CSS [`font`](/de/docs/Web/CSS/font)-Eigenschaft, zum Beispiel `"italic bold 16px Roboto"`
- `text`
  - : die Schriftarten auf diejenigen beschränken, deren Unicode-Bereich mindestens eines der Zeichen im Text enthält. Dies [überprüft nicht die individuelle Glyphenabdeckung](https://lists.w3.org/Archives/Public/www-style/2015Aug/0330.html).

### Rückgabewert

Ein {{jsxref("Boolean")}}-Wert, der `true` ist, wenn das Rendern von Text mit der gegebenen Schriftauswahl nicht versucht, Schriftarten in diesem `FontFaceSet` zu verwenden, die noch nicht vollständig geladen sind.

Das bedeutet, dass alle Schriftarten in diesem `FontFaceSet`, die durch die gegebene Schriftauswahl übereinstimmen, eine [`status`](/de/docs/Web/API/FontFace/status)-Eigenschaft haben, die auf `"loaded"` gesetzt ist.

Andernfalls gibt diese Funktion `false` zurück.

## Beispiele

Im folgenden Beispiel erstellen wir ein neues `FontFace` und fügen es dem `FontFaceSet` hinzu:

```js
const font = new FontFace("molot", 'url("/shared-assets/fonts/molot.woff2")', {
  style: "normal",
  weight: "400",
  stretch: "condensed",
});

document.fonts.add(font);
```

### Nicht geladene Schriften

Die Schriftart ist noch nicht geladen, daher gibt `check("12px molot")` `false` zurück, was darauf hinweist, dass wir durch die Verwendung der gegebenen Schriftauswahl eine Schriftladen auslösen würden:

```js
console.log(document.fonts.check("12px molot"));
// false: the matching font is in the set, but is not yet loaded
```

### Systemschriften

Wenn wir im Argument von `check()` nur eine Systemschriftart angeben, gibt sie `true` zurück, da wir die Systemschrift verwenden können, ohne Schriften aus dem Satz zu laden:

```js
console.log(document.fonts.check("12px Courier"));
// true: the matching font is a system font
```

### Nicht existierende Schriften

Wenn wir eine Schriftart angeben, die nicht im `FontFaceSet` enthalten ist und keine Systemschrift ist, gibt `check()` `true` zurück, da wir in dieser Situation nicht auf Schriften aus dem Satz angewiesen sind:

```js
console.log(document.fonts.check("12px i-dont-exist"));
// true: the matching font is a nonexistent font
```

### System- und nicht geladene Schriften

Wenn wir sowohl eine Systemschrift als auch eine Schrift im Satz angeben, die noch nicht geladen ist, gibt `check()` `false` zurück:

```js
console.log(document.fonts.check("12px molot, Courier"));
// false: `molot` is in the set but not yet loaded
```

### Schriften, die geladen werden

Wenn wir eine Schrift aus dem Satz angeben, die noch geladen wird, gibt `check()` `false` zurück:

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

### Schriften, die geladen sind

Wenn wir eine Schrift aus dem Satz angeben, die geladen ist, gibt `check()` `true` zurück:

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
