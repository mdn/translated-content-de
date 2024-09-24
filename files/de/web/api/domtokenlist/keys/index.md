---
title: "DOMTokenList: keys()-Methode"
short-title: keys()
slug: Web/API/DOMTokenList/keys
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{APIRef("DOM")}}

Die **`keys()`**-Methode der {{domxref("DOMTokenList")}}-Schnittstelle gibt einen {{jsxref("Iteration_protocols",'iterator',"",1)}} zurück, der es ermöglicht, alle in diesem Objekt enthaltenen Schlüssel zu durchlaufen. Die Schlüssel sind positive ganze Zahlen.

## Syntax

```js-nolint
keys()
```

### Parameter

Keine.

### Rückgabewert

Gibt einen {{jsxref("Iteration_protocols","iterator","",1)}} zurück.

## Beispiele

Im folgenden Beispiel rufen wir die Liste der auf einem {{htmlelement("span")}}-Element festgelegten Klassen als `DOMTokenList` mit {{domxref("Element.classList")}} ab. Dann holen wir einen Iterator, der die Schlüssel enthält, mit `keys()` und iterieren durch diese Schlüssel mit einer [for...of](/de/docs/Web/JavaScript/Reference/Statements/for...of)-Schleife, um jeden einzelnen in den {{domxref("Node.textContent")}} des `<span>` zu schreiben.

Zuerst das HTML:

```html
<span class="a b c"></span>
```

Jetzt das JavaScript:

```js
const span = document.querySelector("span");
const classes = span.classList;
const iterator = classes.keys();

for (let value of iterator) {
  span.textContent += `(${value}) `;
}
```

Die Ausgabe sieht folgendermaßen aus:

{{ EmbedLiveSample('Examples', '100%', 60) }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("DOMTokenList.entries()")}}, {{domxref("DOMTokenList.forEach()")}} und {{domxref("DOMTokenList.values")}}.
