---
title: "HTMLFormControlsCollection: Methode namedItem()"
short-title: namedItem()
slug: Web/API/HTMLFormControlsCollection/namedItem
l10n:
  sourceCommit: bf3b0f3217d5d5a6957e9e17f863ece19d939d20
---

{{APIRef("HTML DOM")}}

Die Methode **`HTMLFormControlsCollection.namedItem()`** gibt die [`RadioNodeList`](/de/docs/Web/API/RadioNodeList) oder das [`Element`](/de/docs/Web/API/Element) aus der Collection zurück, dessen `name` oder `id` mit dem angegebenen Namen übereinstimmt. Wenn kein Knoten übereinstimmt, gibt sie `null` zurück.

Beachten Sie, dass diese Version von `namedItem()` die von [`HTMLCollection`](/de/docs/Web/API/HTMLCollection) geerbte Methode verdeckt. Wie bei der geerbten Methode ist in JavaScript die Verwendung der Array-Klammernotation mit einem {{jsxref("String")}}, etwa `collection["value"]`, gleichbedeutend mit `collection.namedItem("value")`.

## Syntax

```js-nolint
namedItem(name)
[name]
```

### Parameter

- `name`
  - : Ein String, der mit den Attributen `name` oder `id` der Steuerelemente in diesem `HTMLFormControlsCollection`-Objekt abgeglichen wird.

### Rückgabewert

- Eine [`RadioNodeList`](/de/docs/Web/API/RadioNodeList), wenn mehrere Elemente den angegebenen `name` oder die angegebene `id` haben,
- ein [`Element`](/de/docs/Web/API/Element), wenn genau ein Element den angegebenen `name` oder die angegebene `id` hat, oder
- [`null`](/de/docs/Web/JavaScript/Reference/Operators/null), wenn kein Element den angegebenen `name` oder die angegebene `id` hat.

> [!NOTE]
> Die zurückgegebene [`RadioNodeList`](/de/docs/Web/API/RadioNodeList) ist live. Das bedeutet, dass sich ihr Inhalt automatisch aktualisiert, wenn Elemente, die dem angegebenen Namen entsprechen, zur Collection hinzugefügt oder daraus entfernt werden. Trotz ihres Namens kann sie auch Eingabeelemente enthalten, die keine Radio-Buttons sind.

## Beispiele

### namedItem() verwenden

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
  <label for="checkbox1">Checkbox</label>
  <input id="checkbox1" name="my-form-control" type="checkbox" />
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

- [`HTMLCollection.namedItem`](/de/docs/Web/API/HTMLCollection/namedItem), die durch diese Methode ersetzt wird
