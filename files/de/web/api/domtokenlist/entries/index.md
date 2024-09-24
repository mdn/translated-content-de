---
title: "DOMTokenList: entries()-Methode"
short-title: entries()
slug: Web/API/DOMTokenList/entries
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{APIRef("DOM")}}

Die **`entries()`**-Methode des {{domxref("DOMTokenList")}}-Interfaces
gibt einen {{jsxref("Iteration_protocols", 'Iterator')}} zurück, der es Ihnen ermöglicht, alle Schlüssel/Wert-Paare in diesem Objekt zu durchlaufen. Die Werte sind
{{jsxref("Array")}}s, die [Schlüssel, Wert]-Paare enthalten, wobei jedes Paar ein einzelnes Token darstellt.

## Syntax

```js-nolint
entries()
```

### Rückgabewert

Gibt einen {{jsxref("Iteration_protocols", "Iterator")}} zurück.

## Beispiele

Im folgenden Beispiel rufen wir die Liste der Klassen ab, die auf einem
{{htmlelement("span")}}-Element als `DOMTokenList` mithilfe von
{{domxref("Element.classList")}} gesetzt sind. Wir rufen dann einen Iterator ab, der die Schlüssel/Wert-Paare mit `entries()` enthält, und durchlaufen jedes einzelne mit einer
{{jsxref("Statements/for...of", "for...of")}}-Schleife und schreiben sie in den
{{domxref("Node.textContent")}} des `<span>`.

Zuerst das HTML:

```html
<span class="a b c"></span>
```

Nun das JavaScript:

```js
const span = document.querySelector("span");
const classes = span.classList;
const iterator = classes.entries();

for (const value of iterator) {
  span.textContent += `(${value})`;
}
```

Die Ausgabe sieht folgendermaßen aus:

{{ EmbedLiveSample('Examples', '100%', 60) }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("DOMTokenList.foreach()")}}, {{domxref("DOMTokenList.keys")}} und {{domxref("DOMTokenList.values")}}.
