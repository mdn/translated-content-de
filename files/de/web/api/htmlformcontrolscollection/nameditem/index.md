---
title: "HTMLFormControlsCollection: namedItem() Methode"
short-title: namedItem()
slug: Web/API/HTMLFormControlsCollection/namedItem
l10n:
  sourceCommit: 9f7e7e9075e9f2b1937d2c8000f52a8ff76bff52
---

{{APIRef("HTML DOM")}}

Die **`HTMLFormControlsCollection.namedItem()`** Methode gibt die [`RadioNodeList`](/de/docs/Web/API/RadioNodeList) oder das [`Element`](/de/docs/Web/API/Element) in der Sammlung zurück, dessen `name` oder `id` mit dem angegebenen Namen übereinstimmt, oder `null`, wenn kein Knoten übereinstimmt.

Beachten Sie, dass diese Version von `namedItem()` die von [`HTMLCollection`](/de/docs/Web/API/HTMLCollection) geerbte Methode versteckt. Wie bei dieser ist in JavaScript die Verwendung der Array-Klammer-Syntax mit einem {{jsxref("String")}}, wie `collection["value"]`, gleichbedeutend mit `collection.namedItem("value")`.

## Syntax

```js-nolint
namedItem(name)
[name]
```

### Parameter

- `name`
  - : Ein String, der verwendet wird, um mit den `name` oder `id` Attributen der Steuerelemente in diesem `HTMLFormControlsCollection` Objekt verglichen zu werden.

### Rückgabewert

Eine [`RadioNodeList`](/de/docs/Web/API/RadioNodeList), [`Element`](/de/docs/Web/API/Element) oder [`null`](/de/docs/Web/JavaScript/Reference/Operators/null).

## Beispiele

### Verwendung von namedItem()

#### HTML

```html
<form>
  <label for="notes">Notes:</label>
  <input id="notes" name="my-form-control" type="text" />

  <label for="start">Start date:</label>
  <input id="start" name="my-form-control" type="date" />
</form>

<div id="output"></div>
```

```css hidden
div {
  margin: 1rem 0;
}
```

#### JavaScript

```js
const form = document.querySelector("form");
const items = form.elements.namedItem("my-form-control");

const output = document.querySelector("#output");
const itemIDs = Array.from(items)
  .map((item) => `"${item.id}"`)
  .join(", ");
output.textContent = `My items: ${itemIDs}`;
```

#### Ergebnis

{{EmbedLiveSample("Using namedItem()")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLCollection.namedItem`](/de/docs/Web/API/HTMLCollection/namedItem), das es ersetzt
