---
title: "Element: Eigenschaft classList"
short-title: classList
slug: Web/API/Element/classList
l10n:
  sourceCommit: f216422c99b6c7014e398803b70600501bce8a48
---

{{APIRef("DOM")}}

Die **`Element.classList`** ist eine schreibgeschützte Eigenschaft, die eine Live-`[`DOMTokenList`](/de/docs/Web/API/DOMTokenList)`-Sammlung der `class`-Attribute des Elements zurückgibt. Diese kann verwendet werden, um die Klassenliste zu manipulieren.

Die Verwendung von `classList` ist eine bequeme Alternative zum Zugriff auf die Klassenliste eines Elements als leerzeichengetrennter String über [`element.className`](/de/docs/Web/API/Element/className).

## Wert

Eine [`DOMTokenList`](/de/docs/Web/API/DOMTokenList), die den Inhalt des `class`-Attributs des Elements darstellt. Wenn das `class`-Attribut nicht gesetzt oder leer ist, gibt es eine leere `DOMTokenList` zurück, d.h. eine `DOMTokenList` mit der Eigenschaft `length` gleich `0`.

Obwohl die `classList`-Eigenschaft selbst schreibgeschützt ist, können Sie die zugehörige `DOMTokenList` mit den Methoden [`add()`](/de/docs/Web/API/DOMTokenList/add), [`remove()`](/de/docs/Web/API/DOMTokenList/remove), [`replace()`](/de/docs/Web/API/DOMTokenList/replace) und [`toggle()`](/de/docs/Web/API/DOMTokenList/toggle) modifizieren.

Sie können testen, ob das Element eine gegebene Klasse enthält, indem Sie die Methode [`classList.contains()`](/de/docs/Web/API/DOMTokenList/contains) verwenden.

## Beispiele

```js
const div = document.createElement("div");
div.className = "foo";

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

- [`element.className`](/de/docs/Web/API/Element/className)
- [`DOMTokenList`](/de/docs/Web/API/DOMTokenList)
- [`classList.js`](https://github.com/eligrey/classList.js) (ein plattformübergreifendes JavaScript-Polyfill, das `element.classList` vollständig implementiert)
