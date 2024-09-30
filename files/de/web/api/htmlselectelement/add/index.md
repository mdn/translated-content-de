---
title: "HTMLSelectElement: add()-Methode"
short-title: add()
slug: Web/API/HTMLSelectElement/add
l10n:
  sourceCommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
---

{{APIRef("HTML DOM")}}

Die **`HTMLSelectElement.add()`**-Methode fügt ein Element zur Sammlung der `option`-Elemente für dieses `select`-Element hinzu.

## Syntax

```js-nolint
add(item)
add(item, before)
```

### Parameter

- `item`
  - : Ein [`HTMLOptionElement`](/de/docs/Web/API/HTMLOptionElement) oder
    [`HTMLOptGroupElement`](/de/docs/Web/API/HTMLOptGroupElement)
- `before` {{optional_inline}}
  - : Ein Element der Sammlung oder ein Index vom Typ _long_, vor welchem der _item_ eingefügt werden soll. Wenn dieser Parameter `null` ist (oder der Index nicht existiert), wird das neue Element am Ende der Sammlung angehängt.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `HierarchyRequestError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Ausgelöst, wenn das _item_, das an die Methode übergeben wird, ein Vorfahre des [`HTMLSelectElement`](/de/docs/Web/API/HTMLSelectElement) ist.

## Beispiele

### Elemente von Grund auf neu erstellen

```js
const sel = document.createElement("select");
const opt1 = document.createElement("option");
const opt2 = document.createElement("option");

opt1.value = "1";
opt1.text = "Option: Value 1";

opt2.value = "2";
opt2.text = "Option: Value 2";

sel.add(opt1, null);
sel.add(opt2, null);

/*
  Produces the following, conceptually:

  <select>
    <option value="1">Option: Value 1</option>
    <option value="2">Option: Value 2</option>
  </select>
*/
```

Der before-Parameter ist optional. Daher ist Folgendes akzeptiert.

```js
sel.add(opt1);
sel.add(opt2);
```

### An eine bestehende Sammlung anhängen

```js
const sel = document.getElementById("existingList");

const opt = document.createElement("option");
opt.value = "3";
opt.text = "Option: Value 3";

sel.add(opt, null);

/*
  Takes the existing following select object:

  <select id="existingList">
    <option value="1">Option: Value 1</option>
    <option value="2">Option: Value 2</option>
  </select>

  And changes it to:

  <select id="existingList">
    <option value="1">Option: Value 1</option>
    <option value="2">Option: Value 2</option>
    <option value="3">Option: Value 3</option>
  </select>
*/
```

Der before-Parameter ist optional. Daher ist Folgendes akzeptiert.

```js
sel.add(opt);
```

### In eine bestehende Sammlung einfügen

```js
const sel = document.getElementById("existingList");

const opt = document.createElement("option");
opt.value = "3";
opt.text = "Option: Value 3";

sel.add(opt, sel.options[1]);

/*
  Takes the existing following select object:

  <select id="existingList">
    <option value="1">Option: Value 1</option>
    <option value="2">Option: Value 2</option>
  </select>

  And changes it to:

  <select id="existingList">
    <option value="1">Option: Value 1</option>
    <option value="3">Option: Value 3</option>
    <option value="2">Option: Value 2</option>
  </select>
*/
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
