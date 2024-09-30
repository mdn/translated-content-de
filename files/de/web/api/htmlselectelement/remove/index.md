---
title: "HTMLSelectElement: remove()-Methode"
short-title: remove()
slug: Web/API/HTMLSelectElement/remove
l10n:
  sourceCommit: 20c51db7895b1b6f41d4fa90e71830f4b6678eea
---

{{ APIRef("HTML DOM") }}

Die **`HTMLSelectElement.remove()`**-Methode entfernt das Element am angegebenen Index aus der Optionssammlung für dieses `<select>`-Element.

## Syntax

```js-nolint
remove(index)
```

### Parameter

- `index`
  - : Ein nullbasierter Integer für den Index des [`HTMLOptionElement`](/de/docs/Web/API/HTMLOptionElement), der aus der Sammlung entfernt werden soll. Wenn der Index nicht gefunden wird, hat die Methode keine Wirkung.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

```html
<select id="existingList" name="existingList">
  <option value="1">Option: Value 1</option>
  <option value="2">Option: Value 2</option>
  <option value="3">Option: Value 3</option>
</select>
```

```js
let sel = document.getElementById("existingList");
sel.remove(1);
```

HTML ist jetzt:

```html
<select id="existingList" name="existingList">
  <option value="1">Option: Value 1</option>
  <option value="3">Option: Value 3</option>
</select>
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Element.remove`](/de/docs/Web/API/Element/remove), die Methode, die aufgerufen wird, wenn `remove` ohne Argumente auf einem [`HTMLSelectElement`](/de/docs/Web/API/HTMLSelectElement) aufgerufen wird.
- [`HTMLSelectElement`](/de/docs/Web/API/HTMLSelectElement), das diese Methode implementiert.
