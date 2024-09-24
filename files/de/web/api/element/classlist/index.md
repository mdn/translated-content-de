---
title: "Element: classList-Eigenschaft"
short-title: classList
slug: Web/API/Element/classList
l10n:
  sourceCommit: 1b22d649b27f7b9359388cb57fc0075559e32584
---

{{APIRef("DOM")}}

Die **`Element.classList`** ist eine schreibgeschützte Eigenschaft, die eine dynamische {{domxref("DOMTokenList")}}-Sammlung der `class`-Attribute des Elements zurückgibt. Diese kann verwendet werden, um die Klassenliste zu manipulieren.

Die Verwendung von `classList` ist eine praktische Alternative zum Zugriff auf die Klassenliste eines Elements als durch Leerzeichen getrennte Zeichenkette über {{domxref("element.className")}}.

## Wert

Eine {{domxref("DOMTokenList")}}, die den Inhalt des `class`-Attributs des Elements darstellt. Wenn das `class`-Attribut nicht gesetzt oder leer ist, wird eine leere `DOMTokenList` zurückgegeben, d.h. eine `DOMTokenList` mit der `length`-Eigenschaft gleich `0`.

Obwohl die `classList`-Eigenschaft selbst schreibgeschützt ist, können Sie die zugehörige `DOMTokenList` mithilfe der {{domxref("DOMTokenList/add", "add()")}}, {{domxref("DOMTokenList/remove", "remove()")}}, {{domxref("DOMTokenList/replace", "replace()")}} und {{domxref("DOMTokenList/toggle", "toggle()")}} Methoden modifizieren.

Sie können testen, ob das Element eine bestimmte Klasse enthält, indem Sie die Methode {{domxref("DOMTokenList/contains", "classList.contains()")}} verwenden.

## Beispiele

```js
const div = document.createElement("div");
div.className = "foo";

// unser Anfangszustand: <div class="foo"></div>
console.log(div.outerHTML);

// verwenden Sie die classList-API, um Klassen zu entfernen und hinzuzufügen
div.classList.remove("foo");
div.classList.add("anotherclass");

// <div class="anotherclass"></div>
console.log(div.outerHTML);

// wenn sichtbar gesetzt ist, entfernen Sie es, andernfalls fügen Sie es hinzu
div.classList.toggle("visible");

// sichtbar je nach Testbedingung hinzufügen/entfernen, i kleiner als 10
div.classList.toggle("visible", i < 10);

// false
console.log(div.classList.contains("foo"));

// mehrere Klassen hinzufügen oder entfernen
div.classList.add("foo", "bar", "baz");
div.classList.remove("foo", "bar", "baz");

// mehrere Klassen mit Spread-Syntax hinzufügen oder entfernen
const cls = ["foo", "bar"];
div.classList.add(...cls);
div.classList.remove(...cls);

// Klasse "foo" durch Klasse "bar" ersetzen
div.classList.replace("foo", "bar");
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("element.className")}}
- {{domxref("DOMTokenList")}}
- [`classList.js`](https://github.com/eligrey/classList.js) (ein plattformübergreifender JavaScript-Polyfill, der `element.classList` vollständig implementiert)
