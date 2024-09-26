---
title: "DOMTokenList: remove()-Methode"
short-title: remove()
slug: Web/API/DOMTokenList/remove
l10n:
  sourceCommit: 6ce0f73fdb2827c72becc6b8617487a97c61838a
---

{{APIRef("DOM")}}

Die **`remove()`**-Methode des {{domxref("DOMTokenList")}}-Interfaces entfernt die angegebenen _Tokens_ aus der Liste.

## Syntax

```js-nolint
remove(token1)
remove(token1, token2)
remove(token1, token2, /* …, */ tokenN)
```

### Parameter

- `token1`, …, `tokenN`
  - : Ein String, der das Token darstellt, das Sie aus der Liste entfernen möchten. Wenn sich der String nicht in der Liste befindet, wird kein Fehler ausgelöst und nichts passiert.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Im folgenden Beispiel rufen wir die Liste der Klassen ab, die auf einem {{htmlelement("span")}}-Element als `DOMTokenList` mithilfe von {{domxref("Element.classList")}} gesetzt sind. Wir entfernen dann ein Token aus der Liste und schreiben die Liste in den `<span>`-{{domxref("Node.textContent")}}.

Zuerst das HTML:

```html
<span id="ab" class="a b c"></span> <span id="a" class="a b c"></span>
```

Nun das JavaScript:

```js
const span = document.getElementById("ab");
const classes = span.classList;
classes.remove("c");
span.textContent = classes;
```

Um mehrere Klassen gleichzeitig zu entfernen, können Sie mehrere Tokens angeben. Die Reihenfolge, in der Sie die Tokens angeben, muss nicht mit der Reihenfolge übereinstimmen, in der sie in der Liste erscheinen:

```js
const span2 = document.getElementById("a");
const classes2 = span2.classList;

classes2.remove("c", "b");
span2.textContent = classes2;
```

Die Ausgabe sieht folgendermaßen aus:

{{ EmbedLiveSample('Examples', '100%', 60) }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}