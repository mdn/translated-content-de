---
title: "DOMTokenList: keys() Methode"
short-title: keys()
slug: Web/API/DOMTokenList/keys
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{APIRef("DOM")}}

Die **`keys()`** Methode des [`DOMTokenList`](/de/docs/Web/API/DOMTokenList)-Interfaces
gibt einen {{jsxref("Iteration_protocols",'iterator',"",1)}} zurück, der das Durchlaufen aller in diesem Objekt enthaltenen Schlüssel ermöglicht.
Die Schlüssel sind vorzeichenlose ganze Zahlen.

## Syntax

```js-nolint
keys()
```

### Parameter

Keine.

### Rückgabewert

Gibt einen {{jsxref("Iteration_protocols","iterator","",1)}} zurück.

## Beispiele

Im folgenden Beispiel rufen wir die Liste der Klassen ab, die auf einem
{{htmlelement("span")}}-Element als `DOMTokenList` gesetzt sind, indem wir [`Element.classList`](/de/docs/Web/API/Element/classList) verwenden. Wir rufen dann einen Iterator ab, der die Schlüssel enthält, indem wir `keys()` verwenden,
und iterieren durch diese Schlüssel mit einer [for...of](/de/docs/Web/JavaScript/Reference/Statements/for...of) Schleife,
wobei wir jeden einzelnen an den [`Node.textContent`](/de/docs/Web/API/Node/textContent) des `<span>` schreiben.

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

- [`DOMTokenList.entries()`](/de/docs/Web/API/DOMTokenList/entries), [`DOMTokenList.forEach()`](/de/docs/Web/API/DOMTokenList/forEach) und [`DOMTokenList.values`](/de/docs/Web/API/DOMTokenList/values).
