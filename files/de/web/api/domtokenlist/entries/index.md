---
title: "DOMTokenList: entries()-Methode"
short-title: entries()
slug: Web/API/DOMTokenList/entries
l10n:
  sourceCommit: c6a4f163003ff1a236ebd22d6d0dda79bbad0e3f
---

{{APIRef("DOM")}}

Die **`entries()`**-Methode der [`DOMTokenList`](/de/docs/Web/API/DOMTokenList)-Schnittstelle gibt einen {{jsxref("Iteration_protocols",'iterator')}} zurück, mit dem Sie alle in diesem Objekt enthaltenen Schlüssel-Wert-Paare durchlaufen können. Die Werte sind {{jsxref("Array")}}s mit [Schlüssel, Wert]-Paaren, die jeweils ein einzelnes Token darstellen.

## Syntax

```js-nolint
entries()
```

### Parameter

Keine.

### Rückgabewert

Gibt einen {{jsxref("Iteration_protocols","iterator")}} zurück.

## Beispiele

Im folgenden Beispiel rufen wir die Liste der für ein {{htmlelement("span")}}-Element festgelegten Klassen mithilfe von [`Element.classList`](/de/docs/Web/API/Element/classList) als `DOMTokenList` ab. Anschließend rufen wir mit `entries()` einen Iterator mit den Schlüssel-Wert-Paaren ab und durchlaufen diese mit einer {{jsxref("Statements/for...of", "for...of")}}-Schleife. Dabei schreiben wir sie in den [`Node.textContent`](/de/docs/Web/API/Node/textContent) des `<span>`-Elements.

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
