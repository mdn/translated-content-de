---
title: "FontFaceSet: Methode check()"
short-title: check()
slug: Web/API/FontFaceSet/check
l10n:
  sourceCommit: 0c13af55e869cbc54830fd1a601fd05f60717375
---

{{APIRef("CSS Font Loading API")}}{{AvailableInWorkers}}

Die `check()`-Methode des [`FontFaceSet`](/de/docs/Web/API/FontFaceSet) gibt `true` zurück, wenn Sie einen Text mit der angegebenen Schriftdarstellung rendern können, ohne zu versuchen, Schriftarten in diesem `FontFaceSet` zu verwenden, die noch nicht vollständig geladen sind. Das bedeutet, dass Sie die Schriftdarstellung verwenden können, ohne ein [Schriftartenwechsel](/de/docs/Web/CSS/Reference/At-rules/@font-face/font-display) auszulösen.

> [!NOTE]
> Die `check()`-Methode ist nicht dafür ausgelegt, zu überprüfen, ob ein bestimmter Schriftstil gerendert werden kann oder ob eine bestimmte Schriftart vollständig geladen ist. Stattdessen gibt sie `true` zurück, wenn der angegebene Text mit der angegebenen Schriftdarstellung gerendert werden kann, ohne einen Schriftartenwechsel auszulösen. Das bedeutet, dass die Methode möglicherweise trotzdem `true` zurückgibt, selbst wenn die angeforderte Schrift nicht verfügbar oder vollständig geladen ist. Dieses Verhalten hilft, die mit Schriftartenwechsel verbundenen visuellen Probleme zu vermeiden, kann aber kontraintuitiv sein, wenn Sie versuchen, die Verfügbarkeit einer bestimmten Schriftart zu bestätigen.

## Syntax

```js-nolint
check(font)
check(font, text)
```

### Parameter

- `font`
  - : Eine Schriftdarstellung unter Verwendung der Syntax für die CSS-Eigenschaft {{cssxref("font")}}, beispielsweise `"italic bold 16px Roboto"`
- `text`
  - : Beschränkt die Schriftarten auf diejenigen, deren Unicode-Bereich mindestens eines der Zeichen im Text enthält. Dies [überprüft keine individuelle Glyphenabdeckung](https://lists.w3.org/Archives/Public/www-style/2015Aug/0330.html).

### Rückgabewert

Ein {{jsxref("Boolean")}}-Wert, der `true` ist, wenn das Rendern von Text mit der angegebenen Schriftdarstellung keinen Versuch unternimmt, Schriftarten in diesem `FontFaceSet` zu verwenden, die noch nicht vollständig geladen sind.

Das bedeutet, dass alle Schriftarten in diesem `FontFaceSet`, die mit der angegebenen Schriftdarstellung übereinstimmen, eine [`status`](/de/docs/Web/API/FontFace/status)-Eigenschaft haben, die auf `"loaded"` gesetzt ist.

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

### Nicht geladene Schriftarten

Die Schriftart ist noch nicht geladen, daher gibt `check("12px molot")` `false` zurück, was darauf hinweist, dass, wenn wir versuchen, die angegebene Schriftdarstellung zu verwenden, ein Schriftartenladen ausgelöst wird:

```js
console.log(document.fonts.check("12px molot"));
// false: the matching font is in the set, but is not yet loaded
```

### System-Schriftarten

Wenn wir nur eine System-Schriftart als Argument für `check()` angeben, gibt es `true` zurück, weil wir die System-Schriftart verwenden können, ohne Schriftarten aus dem Set zu laden:

```js
console.log(document.fonts.check("12px Courier"));
// true: the matching font is a system font
```

### Nicht existierende Schriftarten

Wenn wir eine Schriftart angeben, die nicht im `FontFaceSet` ist und keine System-Schriftart ist, gibt `check()` `true` zurück, weil wir in diesem Fall nicht auf Schriftarten aus dem Set angewiesen sind:

```js
console.log(document.fonts.check("12px i-dont-exist"));
// true: the matching font is a nonexistent font
```

### System- und nicht geladene Schriftarten

Wenn wir sowohl eine System-Schriftart als auch eine Schriftart im Set angeben, die noch nicht geladen ist, gibt `check()` `false` zurück:

```js
console.log(document.fonts.check("12px molot, Courier"));
// false: `molot` is in the set but not yet loaded
```

### Schriftarten, die gerade geladen werden

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
