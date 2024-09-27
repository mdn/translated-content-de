---
title: DOMTokenList
slug: Web/API/DOMTokenList
l10n:
  sourceCommit: f45409ba2169ff05e433d21aa4ee0424079916b8
---

{{APIRef("DOM")}}

Die Schnittstelle **`DOMTokenList`** repräsentiert eine Menge von durch Leerzeichen getrennten Tokens. Eine solche Menge wird von [`Element.classList`](/de/docs/Web/API/Element/classList) oder [`HTMLLinkElement.relList`](/de/docs/Web/API/HTMLLinkElement/relList) und vielen anderen zurückgegeben.

Ein `DOMTokenList` wird beginnend mit `0` indiziert, ähnlich wie JavaScript {{jsxref("Array")}} Objekte. `DOMTokenList` ist immer case-sensitive.

## Instanz-Eigenschaften

- [`DOMTokenList.length`](/de/docs/Web/API/DOMTokenList/length) {{ReadOnlyInline}}
  - : Ein `integer`, der die Anzahl der im Objekt gespeicherten Elemente darstellt.
- [`DOMTokenList.value`](/de/docs/Web/API/DOMTokenList/value)
  - : Eine [stringifier](/de/docs/Glossary/stringifier)-Eigenschaft, die den Wert der Liste als String zurückgibt.

## Instanz-Methoden

- [`DOMTokenList.item()`](/de/docs/Web/API/DOMTokenList/item)
  - : Gibt das Element in der Liste durch seinen Index zurück oder `null`, wenn der Index größer oder gleich der `length` der Liste ist.
- [`DOMTokenList.contains()`](/de/docs/Web/API/DOMTokenList/contains)
  - : Gibt `true` zurück, wenn die Liste das angegebene Token enthält, andernfalls `false`.
- [`DOMTokenList.add()`](/de/docs/Web/API/DOMTokenList/add)
  - : Fügt die angegebenen Tokens zur Liste hinzu.
- [`DOMTokenList.remove()`](/de/docs/Web/API/DOMTokenList/remove)
  - : Entfernt die angegebenen Tokens aus der Liste.
- [`DOMTokenList.replace()`](/de/docs/Web/API/DOMTokenList/replace)
  - : Ersetzt das Token durch ein anderes.
- [`DOMTokenList.supports()`](/de/docs/Web/API/DOMTokenList/supports)
  - : Gibt `true` zurück, wenn das angegebene Token in den unterstützten Tokens des zugehörigen Attributs enthalten ist.
- [`DOMTokenList.toggle()`](/de/docs/Web/API/DOMTokenList/toggle)
  - : Entfernt das Token aus der Liste, wenn es existiert, oder fügt es zur Liste hinzu, wenn es nicht existiert. Gibt einen booleschen Wert zurück, der anzeigt, ob sich das Token nach der Operation in der Liste befindet.
- [`DOMTokenList.entries()`](/de/docs/Web/API/DOMTokenList/entries)
  - : Gibt einen {{jsxref("Iteration_protocols", "iterator", "", 1)}} zurück, mit dem Sie alle in diesem Objekt enthaltenen Schlüssel/Wert-Paare durchlaufen können.
- [`DOMTokenList.forEach()`](/de/docs/Web/API/DOMTokenList/forEach)
  - : Führt eine bereitgestellte Callback-Funktion einmal für jedes `DOMTokenList`-Element aus.
- [`DOMTokenList.keys()`](/de/docs/Web/API/DOMTokenList/keys)
  - : Gibt einen {{jsxref("Iteration_protocols", "iterator", "", 1)}} zurück, mit dem Sie alle Schlüssel der Schlüssel/Wert-Paare in diesem Objekt durchlaufen können.
- [`DOMTokenList.values()`](/de/docs/Web/API/DOMTokenList/values)
  - : Gibt einen {{jsxref("Iteration_protocols", "iterator", "", 1)}} zurück, mit dem Sie alle Werte der Schlüssel/Wert-Paare in diesem Objekt durchlaufen können.

## Beispiele

Im folgenden einfachen Beispiel rufen wir die Klassenliste auf, die auf einem {{htmlelement("p")}}-Element als `DOMTokenList` mit [`Element.classList`](/de/docs/Web/API/Element/classList) gesetzt ist, fügen eine Klasse mithilfe von [`DOMTokenList.add()`](/de/docs/Web/API/DOMTokenList/add) hinzu und aktualisieren dann den [`Node.textContent`](/de/docs/Web/API/Node/textContent) des `<p>`, sodass er der `DOMTokenList` entspricht.

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

Die Ausgabe sieht folgendermaßen aus:

{{ EmbedLiveSample('Examples', '100%', 60) }}

## Kürzung von Leerzeichen und Entfernung von Duplikaten

Methoden, die den `DOMTokenList` ändern (wie [`DOMTokenList.add()`](/de/docs/Web/API/DOMTokenList/add)), kürzen automatisch überflüssige [Whitespace](/de/docs/Glossary/Whitespace) und entfernen doppelte Werte aus der Liste. Zum Beispiel:

```html
<span class="    d   d e f"></span>
```

```js
let span = document.querySelector("span");
let classes = span.classList;
span.classList.add("x");
span.textContent = `span classList is "${classes}"`;
```

Die Ausgabe sieht folgendermaßen aus:

{{ EmbedLiveSample('Trimming_of_whitespace_and_removal_of_duplicates', '100%', 60) }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
