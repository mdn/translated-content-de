---
title: DOMTokenList
slug: Web/API/DOMTokenList
l10n:
  sourceCommit: f45409ba2169ff05e433d21aa4ee0424079916b8
---

{{APIRef("DOM")}}

Das **`DOMTokenList`**-Interface repräsentiert eine Menge von leerzeichengetrennten Tokens. Solch eine Menge wird von [`Element.classList`](/de/docs/Web/API/Element/classList) oder [`HTMLLinkElement.relList`](/de/docs/Web/API/HTMLLinkElement/relList) und vielen anderen zurückgegeben.

Ein `DOMTokenList` wird, wie JavaScript-{{jsxref("Array")}}-Objekte, beginnend bei `0` indiziert. `DOMTokenList` ist immer case-sensitive (Groß- und Kleinschreibung wird unterschieden).

## Instanz-Eigenschaften

- [`DOMTokenList.length`](/de/docs/Web/API/DOMTokenList/length) {{ReadOnlyInline}}
  - : Ein `integer`, der die Anzahl der im Objekt gespeicherten Objekte repräsentiert.
- [`DOMTokenList.value`](/de/docs/Web/API/DOMTokenList/value)
  - : Eine [stringifier](/de/docs/Glossary/stringifier)-Eigenschaft, die den Wert der Liste als Zeichenkette zurückgibt.

## Instanz-Methoden

- [`DOMTokenList.item()`](/de/docs/Web/API/DOMTokenList/item)
  - : Gibt das Element in der Liste durch seinen Index zurück oder `null`, wenn der Index größer oder gleich der `length` der Liste ist.
- [`DOMTokenList.contains()`](/de/docs/Web/API/DOMTokenList/contains)
  - : Gibt `true` zurück, wenn die Liste das gegebene Token enthält, andernfalls `false`.
- [`DOMTokenList.add()`](/de/docs/Web/API/DOMTokenList/add)
  - : Fügt die angegebenen Tokens zur Liste hinzu.
- [`DOMTokenList.remove()`](/de/docs/Web/API/DOMTokenList/remove)
  - : Entfernt die angegebenen Tokens aus der Liste.
- [`DOMTokenList.replace()`](/de/docs/Web/API/DOMTokenList/replace)
  - : Ersetzt das Token durch ein anderes.
- [`DOMTokenList.supports()`](/de/docs/Web/API/DOMTokenList/supports)
  - : Gibt `true` zurück, wenn das gegebene Token in den unterstützten Tokens des zugehörigen Attributs enthalten ist.
- [`DOMTokenList.toggle()`](/de/docs/Web/API/DOMTokenList/toggle)
  - : Entfernt das Token aus der Liste, wenn es existiert, oder fügt es zur Liste hinzu, wenn es nicht existiert. Gibt einen booleschen Wert zurück, der angibt, ob das Token nach der Operation in der Liste ist.
- [`DOMTokenList.entries()`](/de/docs/Web/API/DOMTokenList/entries)
  - : Gibt einen {{jsxref("Iteration_protocols", "iterator", "", 1)}} zurück, der es Ihnen ermöglicht, alle in diesem Objekt enthaltenen Schlüssel/Wert-Paare durchzugehen.
- [`DOMTokenList.forEach()`](/de/docs/Web/API/DOMTokenList/forEach)
  - : Führt eine bereitgestellte Callback-Funktion einmal für jedes `DOMTokenList`-Element aus.
- [`DOMTokenList.keys()`](/de/docs/Web/API/DOMTokenList/keys)
  - : Gibt einen {{jsxref("Iteration_protocols", "iterator", "", 1)}} zurück, der es Ihnen ermöglicht, alle Schlüssel der in diesem Objekt enthaltenen Schlüssel/Wert-Paare durchzugehen.
- [`DOMTokenList.values()`](/de/docs/Web/API/DOMTokenList/values)
  - : Gibt einen {{jsxref("Iteration_protocols", "iterator", "", 1)}} zurück, der es Ihnen ermöglicht, alle Werte der in diesem Objekt enthaltenen Schlüssel/Wert-Paare durchzugehen.

## Beispiele

Im folgenden einfachen Beispiel rufen wir die Liste der `class`-Attribute ab, die auf einem {{htmlelement("p")}}-Element mithilfe von [`Element.classList`](/de/docs/Web/API/Element/classList) als `DOMTokenList` gesetzt sind, fügen eine Klasse mithilfe von [`DOMTokenList.add()`](/de/docs/Web/API/DOMTokenList/add) hinzu und aktualisieren dann den [`Node.textContent`](/de/docs/Web/API/Node/textContent) des `<p>`, sodass er der `DOMTokenList` entspricht.

Zuerst das HTML:

```html
<p class="a b c"></p>
```

Nun das JavaScript:

```js
let para = document.querySelector("p");
let classes = para.classList;
para.classList.add("d");
para.textContent = `paragraph classList is "${classes}"`;
```

Die Ausgabe sieht so aus:

{{ EmbedLiveSample('Examples', '100%', 60) }}

## Trimmen von Leerzeichen und Entfernen von Duplikaten

Methoden, die die `DOMTokenList` ändern (wie zum Beispiel [`DOMTokenList.add()`](/de/docs/Web/API/DOMTokenList/add)), schneiden automatisch überschüssige [Whitespace](/de/docs/Glossary/Whitespace) ab und entfernen doppelte Werte aus der Liste. Zum Beispiel:

```html
<span class="    d   d e f"></span>
```

```js
let span = document.querySelector("span");
let classes = span.classList;
span.classList.add("x");
span.textContent = `span classList is "${classes}"`;
```

Die Ausgabe sieht so aus:

{{ EmbedLiveSample('Trimming_of_whitespace_and_removal_of_duplicates', '100%', 60) }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
