---
title: DOMTokenList
slug: Web/API/DOMTokenList
l10n:
  sourceCommit: 494edeb208c312a26b7f5efb0902799d89a2bb33
---

{{APIRef("DOM")}}

Die Schnittstelle **`DOMTokenList`** repräsentiert eine Menge von durch Leerzeichen getrennten Tokens. Eine solche Menge wird von [`Element.classList`](/de/docs/Web/API/Element/classList) oder [`HTMLLinkElement.relList`](/de/docs/Web/API/HTMLLinkElement/relList) und vielen anderen zurückgegeben.

Ein `DOMTokenList` ist beginnend mit `0` indiziert, wie bei JavaScript-{{jsxref("Array")}}-Objekten. `DOMTokenList` ist immer fallunterscheidend.

## Instanz-Eigenschaften

- [`DOMTokenList.length`](/de/docs/Web/API/DOMTokenList/length) {{ReadOnlyInline}}
  - : Eine `integer`, die die Anzahl der im Objekt gespeicherten Objekte darstellt.
- [`DOMTokenList.value`](/de/docs/Web/API/DOMTokenList/value)
  - : Eine {{Glossary("stringifier", "stringifier")}}-Eigenschaft, die den Wert der Liste als Zeichenkette zurückgibt.

## Instanz-Methoden

- [`DOMTokenList.item()`](/de/docs/Web/API/DOMTokenList/item)
  - : Gibt das Element in der Liste anhand seines Indexes zurück oder `null`, wenn der Index größer oder gleich der `length` der Liste ist.
- [`DOMTokenList.contains()`](/de/docs/Web/API/DOMTokenList/contains)
  - : Gibt `true` zurück, wenn die Liste das angegebene Token enthält, andernfalls `false`.
- [`DOMTokenList.add()`](/de/docs/Web/API/DOMTokenList/add)
  - : Fügt der Liste die angegebenen Tokens hinzu.
- [`DOMTokenList.remove()`](/de/docs/Web/API/DOMTokenList/remove)
  - : Entfernt die angegebenen Tokens aus der Liste.
- [`DOMTokenList.replace()`](/de/docs/Web/API/DOMTokenList/replace)
  - : Ersetzt das Token durch ein anderes.
- [`DOMTokenList.supports()`](/de/docs/Web/API/DOMTokenList/supports)
  - : Gibt `true` zurück, wenn das angegebene Token zu den unterstützten Tokens des zugehörigen Attributs gehört.
- [`DOMTokenList.toggle()`](/de/docs/Web/API/DOMTokenList/toggle)
  - : Entfernt das Token aus der Liste, wenn es existiert, oder fügt es hinzu, wenn es nicht existiert. Gibt einen booleschen Wert zurück, der angibt, ob das Token nach der Operation in der Liste ist.
- [`DOMTokenList.entries()`](/de/docs/Web/API/DOMTokenList/entries)
  - : Gibt einen {{jsxref("Iteration_protocols", "iterator", "", 1)}} zurück, der es ermöglicht, alle Schlüssel/Wert-Paare in diesem Objekt durchzugehen.
- [`DOMTokenList.forEach()`](/de/docs/Web/API/DOMTokenList/forEach)
  - : Führt eine bereitgestellte Callback-Funktion einmal für jedes Element des `DOMTokenList` aus.
- [`DOMTokenList.keys()`](/de/docs/Web/API/DOMTokenList/keys)
  - : Gibt einen {{jsxref("Iteration_protocols", "iterator", "", 1)}} zurück, der es ermöglicht, alle Schlüssel der Schlüssel/Wert-Paare in diesem Objekt durchzugehen.
- [`DOMTokenList.toString()`](/de/docs/Web/API/DOMTokenList/toString)
  - : Gibt den [`DOMTokenList.value`](/de/docs/Web/API/DOMTokenList/value) zurück, die als Zeichenkette durch Leerzeichen getrennten Werte der Liste.
- [`DOMTokenList.values()`](/de/docs/Web/API/DOMTokenList/values)
  - : Gibt einen {{jsxref("Iteration_protocols", "iterator", "", 1)}} zurück, der es ermöglicht, alle Werte der Schlüssel/Wert-Paare in diesem Objekt durchzugehen.

## Beispiele

Im folgenden einfachen Beispiel rufen wir die Liste von Klassen ab, die auf einem {{htmlelement("p")}}-Element als `DOMTokenList` gesetzt sind, fügen eine Klasse mit [`DOMTokenList.add()`](/de/docs/Web/API/DOMTokenList/add) hinzu und aktualisieren anschließend den [`Node.textContent`](/de/docs/Web/API/Node/textContent) des `<p>`, um dem `DOMTokenList` gleichzusetzen.

Zuerst das HTML:

```html
<p class="a b c"></p>
```

Jetzt das JavaScript:

```js
let para = document.querySelector("p");
let classes = para.classList;
para.classList.add("d");
para.textContent = `paragraph classList is "${classes}"`;
```

Die Ausgabe sieht so aus:

{{ EmbedLiveSample('Examples', '100%', 60) }}

## Kürzen von Leerzeichen und Entfernen von Duplikaten

Methoden, die das `DOMTokenList` modifizieren (wie [`DOMTokenList.add()`](/de/docs/Web/API/DOMTokenList/add)), kürzen automatisch überschüssige {{Glossary("Whitespace", "Leerzeichen")}} und entfernen doppelte Werte aus der Liste. Zum Beispiel:

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
