---
title: "DOMTokenList: replace()-Methode"
short-title: replace()
slug: Web/API/DOMTokenList/replace
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{APIRef("DOM")}}

Die **`replace()`**-Methode der {{domxref("DOMTokenList")}}-Schnittstelle
ersetzt ein vorhandenes Token durch ein neues Token.
Wenn das erste Token nicht existiert, gibt `replace()` sofort `false` zurück,
ohne das neue Token zur Tokenliste hinzuzufügen.

## Syntax

```js-nolint
replace(oldToken, newToken)
```

### Parameter

- `oldToken`
  - : Ein String, der das Token repräsentiert, das Sie ersetzen möchten.
- `newToken`
  - : Ein String, der das Token repräsentiert, durch das Sie `oldToken` ersetzen möchten.

### Rückgabewert

Ein boolescher Wert, der `true` ist, wenn `oldToken` erfolgreich
ersetzt wurde, oder `false`, wenn nicht.

## Beispiele

Im folgenden Beispiel rufen wir die Liste der Klassen ab, die auf einem
{{htmlelement("span")}}-Element als `DOMTokenList` mit
{{domxref("Element.classList")}} gesetzt sind. Dann ersetzen wir ein Token in der Liste und schreiben die
Liste in das {{domxref("Node.textContent")}} des `<span>`.

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

Die Ausgabe sieht so aus:

{{ EmbedLiveSample('Examples', '100%', 60) }}

## Spezifikationen

{{Specifications}}

## Kompatibilität mit Browsern

{{Compat}}
