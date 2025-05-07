---
title: "FontFaceSet: check() Methode"
short-title: check()
slug: Web/API/FontFaceSet/check
l10n:
  sourceCommit: e68530dbce2b661c8860e9c6a1c70b1caca5a199
---

{{APIRef("CSS Font Loading API")}}{{AvailableInWorkers}}

Die `check()` Methode des [`FontFaceSet`](/de/docs/Web/API/FontFaceSet) gibt `true` zurück, wenn Sie einen Text mit der angegebenen Schriftdarstellung rendern können, ohne zu versuchen, Schriften in diesem `FontFaceSet` zu verwenden, die noch nicht vollständig geladen sind. Das bedeutet, dass Sie die Schriftdarstellung verwenden können, ohne einen [Schrifttausch](/de/docs/Web/CSS/@font-face/font-display) zu verursachen.

> [!NOTE]
> Die `check()` Methode ist nicht dafür gedacht, zu überprüfen, ob ein bestimmter Schriftstil gerendert werden kann oder ob eine Schrift vollständig geladen ist. Stattdessen gibt sie `true` zurück, wenn der angegebene Text mit der gegebenen Schriftdarstellung gerendert werden kann, ohne einen Schrifttausch zu verursachen. Das bedeutet, dass selbst wenn die angeforderte Schrift nicht verfügbar oder vollständig geladen ist, die Methode möglicherweise trotzdem `true` zurückgibt. Dieses Verhalten vermeidet die visuellen Probleme im Zusammenhang mit Schrifttausch, kann jedoch kontraintuitiv sein, wenn Sie versuchen, die Verfügbarkeit einer bestimmten Schrift zu bestätigen.

## Syntax

```js-nolint
check(font)
check(font, text)
```

### Parameter

- `font`
  - : eine Schriftdarstellung unter Verwendung der Syntax für die CSS [`font`](/de/docs/Web/CSS/font) Eigenschaft, zum Beispiel `"italic bold 16px Roboto"`
- `text`
  - : beschränkt die Schriftschnitte auf diejenigen, deren Unicode-Bereich mindestens eines der Zeichen im Text enthält. Dies [überprüft nicht die Abdeckung einzelner Glyphen](https://lists.w3.org/Archives/Public/www-style/2015Aug/0330.html).

### Rückgabewert

Ein {{jsxref("Boolean")}} Wert, der `true` ist, wenn das Rendern von Text mit der angegebenen Schriftdarstellung nicht versucht, Schriften in diesem `FontFaceSet` zu verwenden, die noch nicht vollständig geladen sind.

Das bedeutet, dass alle Schriften in diesem `FontFaceSet`, die mit der angegebenen Schriftdarstellung übereinstimmen, eine [`status`](/de/docs/Web/API/FontFace/status) Eigenschaft haben, die auf `"loaded"` gesetzt ist.

Andernfalls gibt diese Funktion `false` zurück.

## Beispiele

Im folgenden Beispiel erstellen wir ein neues `FontFace` und fügen es dem `FontFaceSet` hinzu:

```js
const font = new FontFace("molot", "url(/shared-assets/fonts/molot.woff2)", {
  style: "normal",
  weight: "400",
  stretch: "condensed",
});

document.fonts.add(font);
```

### Nicht geladene Schriften

Die Schrift ist noch nicht geladen, daher gibt `check("12px molot")` `false` zurück, was anzeigt, dass wir versuchen würden, die Schrift zu laden, wenn wir die angegebene Schriftdarstellung verwenden:

```js
console.log(document.fonts.check("12px molot"));
// false: the matching font is in the set, but is not yet loaded
```

### Systemschriften

Wenn wir in dem Argument von `check()` nur eine Systemschrift angeben, gibt es `true` zurück, da wir die Systemschrift verwenden können, ohne Schriften aus dem Set zu laden:

```js
console.log(document.fonts.check("12px Courier"));
// true: the matching font is a system font
```

### Nicht existierende Schriften

Wenn wir eine Schrift angeben, die sich nicht im `FontFaceSet` befindet und keine Systemschrift ist, gibt `check()` `true` zurück, da wir in diesem Fall nicht auf Schriften aus dem Set angewiesen sind:

```js
console.log(document.fonts.check("12px i-dont-exist"));
// true: the matching font is a nonexistent font
```

### System- und nicht geladene Schriften

Wenn wir sowohl eine Systemschrift als auch eine nicht geladene Schrift aus dem Set angeben, gibt `check()` `false` zurück:

```js
console.log(document.fonts.check("12px molot, Courier"));
// false: `molot` is in the set but not yet loaded
```

### Schriften, die geladen werden

Wenn wir eine Schrift aus dem Set angeben, die noch geladen wird, gibt `check()` `false` zurück:

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

### Geladene Schriften

Wenn wir eine Schrift aus dem Set angeben, die geladen ist, gibt `check()` `true` zurück:

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
