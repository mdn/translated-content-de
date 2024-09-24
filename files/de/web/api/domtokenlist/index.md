---
title: DOMTokenList
slug: Web/API/DOMTokenList
l10n:
  sourceCommit: f45409ba2169ff05e433d21aa4ee0424079916b8
---

{{APIRef("DOM")}}

Die **`DOMTokenList`**-Schnittstelle repräsentiert eine Menge von durch Leerzeichen getrennten Token. Eine solche Menge wird von {{domxref("Element.classList")}} oder {{domxref("HTMLLinkElement.relList")}} und vielen anderen zurückgegeben.

Ein `DOMTokenList` wird wie JavaScript-{{jsxref("Array")}}-Objekte beginnend mit `0` indiziert. `DOMTokenList` ist immer case-sensitiv.

## Instanz-Eigenschaften

- {{domxref("DOMTokenList.length")}} {{ReadOnlyInline}}
  - : Ein `integer`, der die Anzahl der im Objekt gespeicherten Objekte darstellt.
- {{domxref("DOMTokenList.value")}}
  - : Eine {{Glossary("stringifier")}}-Eigenschaft, die den Wert der Liste als Zeichenkette zurückgibt.

## Instanz-Methoden

- {{domxref("DOMTokenList.item()")}}
  - : Gibt das Element in der Liste nach seinem Index zurück oder `null`, wenn der Index größer oder gleich der `length` der Liste ist.
- {{domxref("DOMTokenList.contains()")}}
  - : Gibt `true` zurück, wenn die Liste das angegebene Token enthält, ansonsten `false`.
- {{domxref("DOMTokenList.add()")}}
  - : Fügt die angegebenen Token der Liste hinzu.
- {{domxref("DOMTokenList.remove()")}}
  - : Entfernt die angegebenen Token aus der Liste.
- {{domxref("DOMTokenList.replace()")}}
  - : Ersetzt das Token durch ein anderes.
- {{domxref("DOMTokenList.supports()")}}
  - : Gibt `true` zurück, wenn das angegebene Token in den unterstützten Token des zugehörigen Attributs enthalten ist.
- {{domxref("DOMTokenList.toggle()")}}
  - : Entfernt das Token aus der Liste, wenn es existiert, oder fügt es hinzu, wenn es nicht existiert. Gibt ein boolesches Ergebnis zurück, das anzeigt, ob das Token nach der Operation in der Liste ist.
- {{domxref("DOMTokenList.entries()")}}
  - : Gibt einen {{jsxref("Iteration_protocols", "iterator", "", 1)}} zurück, der es ermöglicht, alle Schlüssel/Wert-Paare in diesem Objekt zu durchlaufen.
- {{domxref("DOMTokenList.forEach()")}}
  - : Führt die angegebene Rückruffunktion einmal für jedes `DOMTokenList`-Element aus.
- {{domxref("DOMTokenList.keys()")}}
  - : Gibt einen {{jsxref("Iteration_protocols", "iterator", "", 1)}} zurück, der es ermöglicht, alle Schlüssel der Schlüssel/Wert-Paare in diesem Objekt zu durchlaufen.
- {{domxref("DOMTokenList.values()")}}
  - : Gibt einen {{jsxref("Iteration_protocols", "iterator", "", 1)}} zurück, der es ermöglicht, alle Werte der Schlüssel/Wert-Paare in diesem Objekt zu durchlaufen.

## Beispiele

Im folgenden einfachen Beispiel rufen wir die Liste der Klassen ab, die auf einem {{htmlelement("p")}}-Element als `DOMTokenList` gesetzt sind, verwenden {{domxref("DOMTokenList.add()")}}, um eine Klasse hinzuzufügen, und aktualisieren dann den {{domxref("Node.textContent")}} des `<p>`, um der `DOMTokenList` zu entsprechen.

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

Die Ausgabe sieht folgendermaßen aus:

{{ EmbedLiveSample('Examples', '100%', 60) }}

## Trimmen von Leerzeichen und Entfernung von Duplikaten

Methoden, die die `DOMTokenList` ändern (wie {{domxref("DOMTokenList.add()")}}), trimmen automatisch überschüssige {{Glossary("Whitespace")}} und entfernen doppelte Werte aus der Liste. Zum Beispiel:

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
