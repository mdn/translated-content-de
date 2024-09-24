---
title: "HTMLSelectElement: add()-Methode"
short-title: add()
slug: Web/API/HTMLSelectElement/add
l10n:
  sourceCommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
---

{{APIRef("HTML DOM")}}

Die **`HTMLSelectElement.add()`**-Methode fügt ein Element zur Sammlung von `option`-Elementen dieses `select`-Elements hinzu.

## Syntax

```js-nolint
add(item)
add(item, before)
```

### Parameter

- `item`
  - : Ein {{domxref("HTMLOptionElement")}} oder
    {{domxref("HTMLOptGroupElement")}}
- `before` {{optional_inline}}
  - : Ein Element der Sammlung oder ein Index vom Typ _long_, das darstellt, dass das _Item_ eingefügt werden soll. Wenn dieser Parameter `null` ist (oder der Index nicht existiert), wird das neue Element am Ende der Sammlung angefügt.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `HierarchyRequestError` {{DOMxRef("DOMException")}}
  - : Wird ausgelöst, wenn das an die Methode übergebene _item_ ein Vorfahre des {{domxref("HTMLSelectElement")}} ist.

## Beispiele

### Erstellen von Elementen von Scratch

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
  Produziert gedanklich das folgende:

  <select>
    <option value="1">Option: Value 1</option>
    <option value="2">Option: Value 2</option>
  </select>
*/
```

Der Before-Parameter ist optional. Somit ist folgendes akzeptiert.

```js
sel.add(opt1);
sel.add(opt2);
```

### Anfügen an eine bestehende Sammlung

```js
const sel = document.getElementById("existingList");

const opt = document.createElement("option");
opt.value = "3";
opt.text = "Option: Value 3";

sel.add(opt, null);

/*
  Nimmt das bestehende folgende Select-Objekt:

  <select id="existingList">
    <option value="1">Option: Value 1</option>
    <option value="2">Option: Value 2</option>
  </select>

  Und ändert es zu:

  <select id="existingList">
    <option value="1">Option: Value 1</option>
    <option value="2">Option: Value 2</option>
    <option value="3">Option: Value 3</option>
  </select>
*/
```

Der Before-Parameter ist optional. Somit ist folgendes akzeptiert.

```js
sel.add(opt);
```

### Einfügen in eine bestehende Sammlung

```js
const sel = document.getElementById("existingList");

const opt = document.createElement("option");
opt.value = "3";
opt.text = "Option: Value 3";

sel.add(opt, sel.options[1]);

/*
  Nimmt das bestehende folgende Select-Objekt:

  <select id="existingList">
    <option value="1">Option: Value 1</option>
    <option value="2">Option: Value 2</option>
  </select>

  Und ändert es zu:

  <select id="existingList">
    <option value="1">Option: Value 1</option>
    <option value="3">Option: Value 3</option>
    <option value="2">Option: Value 2</option>
  </select>
*/
```

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}
