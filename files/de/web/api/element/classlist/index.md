---
title: "Element: classList-Eigenschaft"
short-title: classList
slug: Web/API/Element/classList
l10n:
  sourceCommit: c053b4b3bb0f34736e9f4402d4254830670af723
---

{{APIRef("DOM")}}

Die schreibgeschützte **`classList`**-Eigenschaft der [`Element`](/de/docs/Web/API/Element)-Schnittstelle enthält eine dynamische [`DOMTokenList`](/de/docs/Web/API/DOMTokenList)-Sammlung, die das `class`-Attribut des Elements darstellt. Diese kann dann verwendet werden, um die Klassenliste zu manipulieren.

`classList` zu verwenden, ist eine bequeme Alternative zum Zugriff auf die Liste der Klassen eines Elements als leerzeichengetrennter String über [`element.className`](/de/docs/Web/API/Element/className).

## Wert

Ein [`DOMTokenList`](/de/docs/Web/API/DOMTokenList)-Objekt, das die Inhalte des `class`-Attributs des Elements darstellt. Wenn das `class`-Attribut nicht gesetzt oder leer ist, wird eine leere `DOMTokenList` zurückgegeben, d.h. eine `DOMTokenList` mit der `length`-Eigenschaft gleich `0`.

Obwohl die `classList`-Eigenschaft in dem Sinne schreibgeschützt ist, dass Sie das `DOMTokenList`-Objekt nicht ersetzen können, können Sie dennoch direkt der `classList`-Eigenschaft zuweisen, was dem Zuweisen der [`value`](/de/docs/Web/API/DOMTokenList/value)-Eigenschaft entspricht. Sie können das `DOMTokenList`-Objekt auch mit den Methoden [`add()`](/de/docs/Web/API/DOMTokenList/add), [`remove()`](/de/docs/Web/API/DOMTokenList/remove), [`replace()`](/de/docs/Web/API/DOMTokenList/replace) und [`toggle()`](/de/docs/Web/API/DOMTokenList/toggle) ändern.

## Beispiele

```js
const div = document.createElement("div");
div.classList = "foo"; // forwarded to classList.value

// our starting state: <div class="foo"></div>
console.log(div.outerHTML);

// use the classList API to remove and add classes
div.classList.remove("foo");
div.classList.add("another-class");

// <div class="another-class"></div>
console.log(div.outerHTML);

// if visible is set remove it, otherwise add it
div.classList.toggle("visible");

// add/remove visible, depending on test conditional, i less than 10
div.classList.toggle("visible", i < 10);

// false
console.log(div.classList.contains("foo"));

// add or remove multiple classes
div.classList.add("foo", "bar", "baz");
div.classList.remove("foo", "bar", "baz");

// add or remove multiple classes using spread syntax
const cls = ["foo", "bar"];
div.classList.add(...cls);
div.classList.remove(...cls);

// replace class "foo" with class "bar"
div.classList.replace("foo", "bar");
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Element.className`](/de/docs/Web/API/Element/className)
- [`DOMTokenList`](/de/docs/Web/API/DOMTokenList)
