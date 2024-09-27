---
title: "DOMTokenList: add()-Methode"
short-title: add()
slug: Web/API/DOMTokenList/add
l10n:
  sourceCommit: bd4e8bce64f6e5d3d07ddf8c1cbb5aaffe060d0c
---

{{APIRef("DOM")}}

Die **`add()`**-Methode der [`DOMTokenList`](/de/docs/Web/API/DOMTokenList)-Schnittstelle fügt die angegebenen Tokens zur Liste hinzu und lässt dabei alle bereits vorhandenen weg.

## Syntax

```js-nolint
add(token1)
add(token1, token2)
add(token1, token2, /* …, */ tokenN)
```

### Parameter

- `tokenN`
  - : Ein String, der ein Token (oder Tokens) repräsentiert, die zu der `DOMTokenList` hinzugefügt werden sollen.

### Rückgabewert

Keiner.

### Ausnahmen

- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn eines der Argumente ein leerer String ist.
- `InvalidCharacterError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn ein Token ASCII-Leerzeichen enthält.

## Beispiele

Im folgenden Beispiel rufen wir die Liste der Klassen ab, die auf einem {{htmlelement("span")}}-Element als `DOMTokenList` gesetzt sind, unter Verwendung von [`Element.classList`](/de/docs/Web/API/Element/classList).
Wir fügen dann ein neues Token zur Liste hinzu und schreiben die Liste in das [`Node.textContent`](/de/docs/Web/API/Node/textContent) des `<span>`.

Zuerst das HTML:

```html
<span class="a b c"></span>
```

Jetzt das JavaScript:

```js
const span = document.querySelector("span");
const classes = span.classList;
classes.add("d");
span.textContent = classes;
```

Die Ausgabe sieht folgendermaßen aus:

{{ EmbedLiveSample('Examples', '100%', 60) }}

Sie können auch mehrere Tokens hinzufügen:

```js
span.classList.add("d", "e", "f");
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
