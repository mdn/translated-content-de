---
title: "DOMTokenList: Methode entries()"
short-title: entries()
slug: Web/API/DOMTokenList/entries
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

{{APIRef("DOM")}}

Die Methode **`entries()`** der Schnittstelle [`DOMTokenList`](/de/docs/Web/API/DOMTokenList) gibt einen {{jsxref("Iteration_protocols",'iterator')}} zurück, mit dem Sie alle in diesem Objekt enthaltenen Schlüssel-Wert-Paare durchlaufen können. Die Werte sind {{jsxref("Array")}}s mit Paaren der Form [Schlüssel, Wert], die jeweils ein einzelnes Token repräsentieren.

## Syntax

```js-nolint
entries()
```

### Parameter

Keine.

### Rückgabewert

Gibt einen {{jsxref("Iteration_protocols","iterator")}} zurück.

## Beispiele

Im folgenden Beispiel rufen wir die Liste der für ein {{htmlelement("span")}}-Element festgelegten Klassen mithilfe von [`Element.classList`](/de/docs/Web/API/Element/classList) als `DOMTokenList` ab. Anschließend rufen wir mit `entries()` einen Iterator mit den Schlüssel-Wert-Paaren ab und durchlaufen diese mit einer {{jsxref("Statements/for...of", "for...of")}}-Schleife. Dabei schreiben wir sie in die [`Node.textContent`](/de/docs/Web/API/Node/textContent)-Eigenschaft des `<span>`-Elements.

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

Die Ausgabe sieht so aus:

{{ EmbedLiveSample('Examples', '100%', 60) }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill für `DOMTokenList.prototype.entries` in `core-js`](https://core-js.io/docs/features/web-standards/iterable-dom-collections)
- [`DOMTokenList.foreach()`](/de/docs/Web/API/DOMTokenList/forEach), [`DOMTokenList.keys`](/de/docs/Web/API/DOMTokenList/keys) und [`DOMTokenList.values`](/de/docs/Web/API/DOMTokenList/values).
