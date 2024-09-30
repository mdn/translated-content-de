---
title: "DOMTokenList: contains()-Methode"
short-title: contains()
slug: Web/API/DOMTokenList/contains
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{APIRef("DOM")}}

Die **`contains()`**-Methode der [`DOMTokenList`](/de/docs/Web/API/DOMTokenList)-Schnittstelle
gibt einen booleschen Wert zurück — `true`, wenn die zugrunde liegende Liste das angegebene Token enthält, sonst `false`.

## Syntax

```js-nolint
contains(token)
```

### Parameter

- `token`
  - : Ein String, der das Token darstellt,
    nach dessen Vorhandensein in der Liste Sie suchen möchten.

### Rückgabewert

Ein boolescher Wert, der `true` ist, wenn die aufgerufene Liste
`token` enthält, sonst `false`.

## Beispiele

Im folgenden Beispiel rufen wir die Liste der Klassen ab, die an einem
{{htmlelement("span")}}-Element als `DOMTokenList` mit
[`Element.classList`](/de/docs/Web/API/Element/classList) gesetzt sind. Wir testen dann das Vorhandensein von `"c"` in
der Liste und schreiben das Ergebnis in das [`Node.textContent`](/de/docs/Web/API/Node/textContent) des `<span>`.

Zuerst das HTML:

```html
<span class="a b c"></span>
```

Nun das JavaScript:

```js
const span = document.querySelector("span");
span.textContent = span.classList.contains("c")
  ? "The classList contains 'c'"
  : "The classList does not contain 'c'";
```

Die Ausgabe sieht folgendermaßen aus:

{{ EmbedLiveSample('Examples', '100%', 60) }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
