---
title: "DOMTokenList: contains()-Methode"
short-title: contains()
slug: Web/API/DOMTokenList/contains
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{APIRef("DOM")}}

Die **`contains()`**-Methode der [`DOMTokenList`](/de/docs/Web/API/DOMTokenList)-Schnittstelle gibt einen booleschen Wert zurück — `true`, wenn die zugrunde liegende Liste das gegebene Token enthält, andernfalls `false`.

## Syntax

```js-nolint
contains(token)
```

### Parameter

- `token`
  - : Ein String, der das Token darstellt, dessen Existenz in der Liste Sie überprüfen möchten.

### Rückgabewert

Ein boolescher Wert, der `true` ist, wenn die aufrufende Liste `token` enthält, andernfalls `false`.

## Beispiele

Im folgenden Beispiel rufen wir die Liste der Klassen ab, die auf einem {{htmlelement("span")}}-Element über [`Element.classList`](/de/docs/Web/API/Element/classList) als `DOMTokenList` gesetzt sind. Wir testen dann das Vorhandensein von `"c"` in der Liste und schreiben das Ergebnis in das `<span>`'s [`Node.textContent`](/de/docs/Web/API/Node/textContent).

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
