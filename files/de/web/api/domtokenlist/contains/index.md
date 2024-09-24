---
title: "DOMTokenList: contains() Methode"
short-title: contains()
slug: Web/API/DOMTokenList/contains
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{APIRef("DOM")}}

Die **`contains()`** Methode der {{domxref("DOMTokenList")}} Schnittstelle
gibt einen booleschen Wert zurück — `true`, wenn die zugrunde liegende Liste den angegebenen Token enthält, andernfalls `false`.

## Syntax

```js-nolint
contains(token)
```

### Parameter

- `token`
  - : Ein String, der den Token darstellt,
    den Sie auf seine Existenz in der Liste überprüfen möchten.

### Rückgabewert

Ein boolescher Wert, der `true` ist, wenn die aufrufende Liste
`token` enthält, andernfalls `false`.

## Beispiele

Im folgenden Beispiel rufen wir die Liste von Klassen ab, die auf einem
{{htmlelement("span")}}-Element als `DOMTokenList` festgelegt sind, mittels
{{domxref("Element.classList")}}. Wir testen dann auf das Vorhandensein von `"c"` in
der Liste und schreiben das Ergebnis in den `<span>`'s
{{domxref("Node.textContent")}}.

Zuerst das HTML:

```html
<span class="a b c"></span>
```

Jetzt das JavaScript:

```js
const span = document.querySelector("span");
span.textContent = span.classList.contains("c")
  ? "The classList contains 'c'"
  : "The classList does not contain 'c'";
```

Der Output sieht folgendermaßen aus:

{{ EmbedLiveSample('Examples', '100%', 60) }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
