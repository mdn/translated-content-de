---
title: "FontFaceSet: check()-Methode"
short-title: check()
slug: Web/API/FontFaceSet/check
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

{{APIRef("CSS Font Loading API")}}{{AvailableInWorkers}}

Die `check()`-Methode des [`FontFaceSet`](/de/docs/Web/API/FontFaceSet) gibt `true` zurück, wenn Sie Text mit der angegebenen Schriftauswahl rendern können, ohne dabei auf Schriftarten in diesem `FontFaceSet` zurückzugreifen, die noch nicht vollständig geladen sind. Dies bedeutet, dass Sie die Schriftauswahl verwenden können, ohne einen [Schrifttausch](/de/docs/Web/CSS/@font-face/font-display) auszulösen.

> [!NOTE]
> Die `check()`-Methode ist nicht dafür ausgelegt zu überprüfen, ob ein bestimmter Schriftstil gerendert werden kann oder ob eine bestimmte Schriftart vollständig geladen ist. Stattdessen gibt sie `true` zurück, wenn der angegebene Text mit der gegebenen Schriftauswahl ohne Schrifttausch gerendert werden kann. Das bedeutet, dass selbst wenn die angeforderte Schriftart nicht verfügbar oder vollständig geladen ist, die Methode möglicherweise trotzdem `true` zurückgibt. Dieses Verhalten hilft, die visuellen Probleme zu vermeiden, die mit dem Schrifttausch verbunden sind, kann aber kontraintuitiv sein, wenn Sie versuchen, die Verfügbarkeit einer spezifischen Schriftart zu bestätigen.

## Syntax

```js-nolint
check(font)
check(font, text)
```

### Parameter

- `font`
  - : Eine Schriftauswahl unter Verwendung der Syntax für die CSS-[`font`](/de/docs/Web/CSS/Reference/Properties/font)-Eigenschaft, zum Beispiel `"italic bold 16px Roboto"`
- `text`
  - : Beschränkt die Schriftschnitte auf diejenigen, deren Unicode-Bereich mindestens eines der Zeichen im Text enthält. Dies [überprüft nicht die individuelle Glyphenabdeckung](https://lists.w3.org/Archives/Public/www-style/2015Aug/0330.html).

### Rückgabewert

Ein {{jsxref("Boolean")}}-Wert, der `true` ist, wenn das Rendern von Text mit der gegebenen Schriftauswahl nicht versucht, Schriftarten aus diesem `FontFaceSet` zu verwenden, die noch nicht vollständig geladen sind.

Dies bedeutet, dass alle Schriftarten in diesem `FontFaceSet`, die der gegebenen Schriftauswahl entsprechen, eine [`status`](/de/docs/Web/API/FontFace/status)-Eigenschaft haben, die auf `"loaded"` gesetzt ist.

Andernfalls gibt diese Funktion `false` zurück.

## Beispiele

Im folgenden Beispiel erstellen wir eine neue `FontFace` und fügen sie dem `FontFaceSet` hinzu:

```js
const font = new FontFace("molot", 'url("/shared-assets/fonts/molot.woff2")', {
  style: "normal",
  weight: "400",
  stretch: "condensed",
});

document.fonts.add(font);
```

### Ungeladene Schriftarten

Die Schriftart ist noch nicht geladen, daher gibt `check("12px molot")` `false` zurück, was anzeigt, dass wir, wenn wir versuchen, die angegebene Schriftauswahl zu verwenden, einen Schrifttausch auslösen werden:

```js
console.log(document.fonts.check("12px molot"));
// false: the matching font is in the set, but is not yet loaded
```

### Systemschriftarten

Wenn wir nur eine Systemschriftart im Argument von `check()` angeben, gibt es `true` zurück, weil wir die Systemschriftart verwenden können, ohne Schriftarten aus dem Set zu laden:

```js
console.log(document.fonts.check("12px Courier"));
// true: the matching font is a system font
```

### Nicht existierende Schriftarten

Wenn wir eine Schriftart angeben, die nicht im `FontFaceSet` ist und keine Systemschriftart ist, gibt `check()` `true` zurück, da wir in dieser Situation nicht auf Schriftarten aus dem Set angewiesen sind:

```js
console.log(document.fonts.check("12px i-dont-exist"));
// true: the matching font is a nonexistent font
```

### System- und ungeladene Schriftarten

Wenn wir sowohl eine Systemschriftart als auch eine nicht geladene Schriftart im Set angeben, gibt `check()` `false` zurück:

```js
console.log(document.fonts.check("12px molot, Courier"));
// false: `molot` is in the set but not yet loaded
```

### Ladeende Schriftarten

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

Wenn wir eine Schriftart aus dem Set angeben, die geladen wurde, gibt `check()` `true` zurück:

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
