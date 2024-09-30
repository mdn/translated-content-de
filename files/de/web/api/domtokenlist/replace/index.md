---
title: "DOMTokenList: replace() Methode"
short-title: replace()
slug: Web/API/DOMTokenList/replace
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{APIRef("DOM")}}

Die **`replace()`** Methode der [`DOMTokenList`](/de/docs/Web/API/DOMTokenList)-Schnittstelle ersetzt ein bestehendes Token durch ein neues Token. Wenn das erste Token nicht existiert, gibt `replace()` sofort `false` zurück, ohne das neue Token zur Tokenliste hinzuzufügen.

## Syntax

```js-nolint
replace(oldToken, newToken)
```

### Parameter

- `oldToken`
  - : Ein String, der das Token darstellt, das Sie ersetzen möchten.
- `newToken`
  - : Ein String, der das Token darstellt, mit dem Sie `oldToken` ersetzen möchten.

### Rückgabewert

Ein boolescher Wert, der `true` ist, wenn `oldToken` erfolgreich ersetzt wurde, oder `false`, wenn nicht.

## Beispiele

Im folgenden Beispiel rufen wir die Liste der auf einem {{htmlelement("span")}}-Element gesetzten Klassen als `DOMTokenList` mit [`Element.classList`](/de/docs/Web/API/Element/classList) ab. Dann ersetzen wir ein Token in der Liste und schreiben die Liste in das [`Node.textContent`](/de/docs/Web/API/Node/textContent) des `<span>`.

Zuerst das HTML:

```html
<span class="a b c"></span>
```

Nun das JavaScript:

```js
const span = document.querySelector("span");
const classes = span.classList;

const result = classes.replace("c", "z");

span.textContent = result ? classes : "token not replaced successfully";
```

Die Ausgabe sieht folgendermaßen aus:

{{ EmbedLiveSample('Examples', '100%', 60) }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
