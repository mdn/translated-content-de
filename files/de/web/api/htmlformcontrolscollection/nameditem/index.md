---
title: "HTMLFormControlsCollection: Methode namedItem()"
short-title: namedItem()
slug: Web/API/HTMLFormControlsCollection/namedItem
l10n:
  sourceCommit: db32c2f103885a65715e2cce48bda44be03f44f7
---

{{APIRef("HTML DOM")}}

Die **`HTMLFormControlsCollection.namedItem()`**-Methode gibt die {{domxref("RadioNodeList")}} oder das {{domxref("Element")}} in der Sammlung zurück, dessen `name` oder `id` mit dem angegebenen Namen übereinstimmen, oder `null`, wenn kein Knoten übereinstimmt.

Beachten Sie, dass diese Version von `namedItem()` die von {{domxref("HTMLCollection")}} geerbte Methode verbirgt. Wie diese, ist in JavaScript die Verwendung der Array-Klammer-Syntax mit einem {{jsxref("String")}}, wie `collection["value"]`, gleichwertig mit `collection.namedItem("value")`.

## Syntax

```js-nolint
namedItem(name)
[name]
```

### Parameter

- `name`
  - : Ein String, der verwendet wird, um mit den `name`- oder `id`-Attributen der Steuerungselemente in diesem `HTMLFormControlsCollection`-Objekt übereinzustimmen.

### Rückgabewert

- Eine {{domxref("RadioNodeList")}}, ein {{domxref("Element")}}, oder [`null`](/de/docs/Web/JavaScript/Reference/Operators/null).

## Beispiele

### Verwendung von namedItem()

#### HTML

```html
<form>
  <label for="notes">Notizen:</label>
  <input id="notes" name="my-form-control" type="text" />

  <label for="start">Startdatum:</label>
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
output.textContent = `Meine Elemente: ${itemIDs}`;
```

#### Ergebnis

{{EmbedLiveSample("Using namedItem()")}}

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- {{domxref("HTMLCollection.namedItem")}}, die sie ersetzt
