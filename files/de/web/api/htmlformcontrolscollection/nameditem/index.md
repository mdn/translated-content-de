---
title: "HTMLFormControlsCollection: namedItem() Methode"
short-title: namedItem()
slug: Web/API/HTMLFormControlsCollection/namedItem
l10n:
  sourceCommit: aff319cd81d10cfda31b13adb3263deafb284b20
---

{{APIRef("HTML DOM")}}

Die **`HTMLFormControlsCollection.namedItem()`** Methode gibt die [`RadioNodeList`](/de/docs/Web/API/RadioNodeList) oder das [`Element`](/de/docs/Web/API/Element) in der Sammlung zurück, dessen `name` oder `id` mit dem angegebenen Namen übereinstimmt, oder `null`, wenn kein Knoten übereinstimmt.

Beachten Sie, dass diese Version von `namedItem()` die von [`HTMLCollection`](/de/docs/Web/API/HTMLCollection) geerbte Methode verbirgt. Wie diese kann in JavaScript die Array-Klammer-Syntax mit einem {{jsxref("String")}}, wie `collection["value"]` verwendet werden, was gleichbedeutend mit `collection.namedItem("value")` ist.

## Syntax

```js-nolint
namedItem(name)
[name]
```

### Parameter

- `name`
  - : Ein String, der verwendet wird, um mit den `name`- oder `id`-Attributen der Steuerelemente in diesem `HTMLFormControlsCollection`-Objekt abzugleichen.

### Rückgabewert

- Eine [`RadioNodeList`](/de/docs/Web/API/RadioNodeList), wenn es mehrere Elemente mit dem gegebenen `name` oder `id` gibt,
- Ein [`Element`](/de/docs/Web/API/Element), wenn es genau ein Element mit dem gegebenen `name` oder `id` gibt, oder
- [`null`](/de/docs/Web/JavaScript/Reference/Operators/null), wenn kein Element den gegebenen `name` oder `id` hat.

> [!NOTE]
> Die zurückgegebene [`RadioNodeList`](/de/docs/Web/API/RadioNodeList) ist live, was bedeutet, dass sich ihr Inhalt automatisch aktualisiert, wenn Elemente, die mit dem angegebenen Namen übereinstimmen, zur Sammlung hinzugefügt oder daraus entfernt werden. Darüber hinaus kann sie nicht-radioeingabe Elemente enthalten, trotz des Namens der Sammlung.

## Beispiele

### Verwendung von namedItem()

#### HTML

```html
<form>
  <label for="yes">Yes</label>
  <input id="yes" name="my-radio" type="radio" />
  <label for="no">No</label>
  <input id="no" name="my-radio" type="radio" />
  <label for="maybe">Maybe</label>
  <input id="maybe" name="my-radio" type="radio" />
  <br />
  <label for="text1">Text input 1</label>
  <input id="text1" name="my-form-control" type="text" />
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
const items = form.elements.namedItem("my-radio");

const output = document.querySelector("#output");
const itemIDs = Array.from(items)
  .map((item) => `"${item.id}"`)
  .join(", ");

const item2 = form.elements.namedItem("my-form-control");
output.textContent = `My items: ${itemIDs}
My single item: "${item2.id}"`;
```

#### Ergebnis

{{EmbedLiveSample("Using namedItem()")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLCollection.namedItem`](/de/docs/Web/API/HTMLCollection/namedItem), die es ersetzt
