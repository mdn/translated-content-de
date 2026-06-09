---
title: "FontFaceSet: check() Methode"
short-title: check()
slug: Web/API/FontFaceSet/check
l10n:
  sourceCommit: 0a7be3733111a7a3db436f416334374f2a0f644f
---

{{APIRef("CSS Font Loading API")}}{{AvailableInWorkers}}

Die `check()` Methode des [`FontFaceSet`](/de/docs/Web/API/FontFaceSet) gibt `true` zurück, wenn Sie einen Text mit der angegebenen Schriften-Spezifikation rendern können, ohne zu versuchen, Schriften in diesem `FontFaceSet` zu verwenden, die noch nicht vollständig geladen sind. Das bedeutet, dass Sie die Schriften-Spezifikation verwenden können, ohne einen [Schriftartenwechsel](/de/docs/Web/CSS/Reference/At-rules/@font-face/font-display) zu verursachen.

> [!NOTE]
> Die `check()` Methode ist nicht dafür ausgelegt, zu überprüfen, ob ein bestimmter Stil einer Schriftart gerendert werden kann oder ob eine bestimmte Schriftart vollständig geladen ist. Stattdessen gibt sie `true` zurück, wenn der angegebene Text mit der gegebenen Schriften-Spezifikation gerendert werden kann, ohne einen Schriftartenwechsel zu verursachen. Das bedeutet, dass selbst wenn die angeforderte Schriftart nicht verfügbar oder vollständig geladen ist, die Methode möglicherweise dennoch `true` zurückgibt. Dieses Verhalten hilft, visuelle Probleme im Zusammenhang mit Schriftartenwechseln zu vermeiden, kann jedoch kontraintuitiv sein, wenn Sie versuchen, die Verfügbarkeit einer bestimmten Schriftart zu bestätigen.

## Syntax

```js-nolint
check(font)
check(font, text)
```

### Parameter

- `font`
  - : Eine Schriften-Spezifikation mit der Syntax für die CSS {{cssxref("font")}} Eigenschaft, zum Beispiel `"italic bold 16px Roboto"`
- `text` {{optional_inline}}
  - : Beschränkt die Schriftarten auf diejenigen, deren Unicode-Bereich mindestens eines der Zeichen im Text enthält. Dies [überprüft nicht die individuelle Glyphenabdeckung](https://lists.w3.org/Archives/Public/www-style/2015Aug/0330.html). Standardmäßig ein String, der ein einzelnes Leerzeichen (`" "`) enthält.

### Rückgabewert

Ein {{jsxref("Boolean")}} Wert, der `true` ist, wenn beim Rendern von Text mit der gegebenen Schriften-Spezifikation keine Schriften in diesem `FontFaceSet` verwendet werden, die noch nicht vollständig geladen sind.

Das bedeutet, dass alle Schriften in diesem `FontFaceSet`, die mit der gegebenen Schriften-Spezifikation übereinstimmen, eine [`status`](/de/docs/Web/API/FontFace/status) Eigenschaft auf `"loaded"` gesetzt haben.

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

### Nicht geladene Schriften

Die Schriftart ist noch nicht geladen, daher gibt `check("12px molot")` `false` zurück, was darauf hinweist, dass wir einen Schriftarten-Load auslösen, wenn wir versuchen, die gegebene Schriften-Spezifikation zu verwenden:

```js
console.log(document.fonts.check("12px molot"));
// false: the matching font is in the set, but is not yet loaded
```

### Systemschriftarten

Wenn wir nur eine Systemschriftart im Argument von `check()` angeben, gibt es `true` zurück, da wir die Systemschriftart verwenden können, ohne Schriftarten aus dem Set zu laden:

```js
console.log(document.fonts.check("12px Courier"));
// true: the matching font is a system font
```

### Nicht vorhandene Schriften

Wenn wir eine Schriftart angeben, die nicht im `FontFaceSet` enthalten ist und keine Systemschriftart ist, gibt `check()` `true` zurück, weil wir in dieser Situation nicht auf Schriftarten aus dem Set angewiesen sind:

```js
console.log(document.fonts.check("12px i-dont-exist"));
// true: the matching font is a nonexistent font
```

### System- und nicht geladene Schriften

Wenn wir sowohl eine Systemschriftart als auch eine Schriftart im Set angeben, die noch nicht geladen ist, gibt `check()` `false` zurück:

```js
console.log(document.fonts.check("12px molot, Courier"));
// false: `molot` is in the set but not yet loaded
```

### Schriften, die geladen werden

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

### Geladene Schriften

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
