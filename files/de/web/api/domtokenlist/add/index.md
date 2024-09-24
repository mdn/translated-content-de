---
title: "DOMTokenList: add()-Methode"
short-title: add()
slug: Web/API/DOMTokenList/add
l10n:
  sourceCommit: bd4e8bce64f6e5d3d07ddf8c1cbb5aaffe060d0c
---

{{APIRef("DOM")}}

Die **`add()`**-Methode der {{domxref("DOMTokenList")}}-Schnittstelle fügt die angegebenen Token zur Liste hinzu und lässt dabei jene aus, die bereits vorhanden sind.

## Syntax

```js-nolint
add(token1)
add(token1, token2)
add(token1, token2, /* …, */ tokenN)
```

### Parameter

- `tokenN`
  - : Ein String, der ein Token (oder Token) repräsentiert, die zur `DOMTokenList` hinzugefügt werden sollen.

### Rückgabewert

Keiner.

### Ausnahmen

- `SyntaxError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn eines der Argumente ein leerer String ist.
- `InvalidCharacterError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn ein Token ASCII-Leerzeichen enthält.

## Beispiele

Im folgenden Beispiel rufen wir die Liste der Klassen ab, die auf einem {{htmlelement("span")}}-Element als `DOMTokenList` gesetzt sind, indem wir {{domxref("Element.classList")}} verwenden.
Wir fügen dann ein neues Token zur Liste hinzu und schreiben die Liste in den {{domxref("Node.textContent")}} des `<span>`.

Zuerst das HTML:

```html
<span class="a b c"></span>
```

Nun das JavaScript:

```js
const span = document.querySelector("span");
const classes = span.classList;
classes.add("d");
span.textContent = classes;
```

Die Ausgabe sieht folgendermaßen aus:

{{ EmbedLiveSample('Examples', '100%', 60) }}

Sie können auch mehrere Token hinzufügen:

```js
span.classList.add("d", "e", "f");
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
