---
title: "Dokument: getElementsByClassName()-Methode"
short-title: getElementsByClassName()
slug: Web/API/Document/getElementsByClassName
l10n:
  sourceCommit: 06bb5f22d50ff3579a12aebf7e8c9f02cfa2468b
---

{{APIRef("DOM")}}

Die **`getElementsByClassName`**-Methode des
[`Document`](/de/docs/Web/API/Document)-Interfaces gibt ein arrayähnliches Objekt
aller Kindelemente zurück, die alle angegebenen Klassennamen haben.

Wenn die Methode auf dem [`document`](/de/docs/Web/API/Document)-Objekt aufgerufen wird, wird das gesamte Dokument durchsucht, einschließlich des Wurzelknotens. Sie können auch [`getElementsByClassName()`](/de/docs/Web/API/Element/getElementsByClassName) auf jedem Element aufrufen; es werden nur Elemente zurückgegeben, die Nachfahren des angegebenen Wurzelelements mit den gegebenen Klassennamen sind.

> [!WARNING]
> Dies ist eine lebende [`HTMLCollection`](/de/docs/Web/API/HTMLCollection). Änderungen im DOM werden
> in der Sammlung reflektiert, während die Änderungen stattfinden. Wenn ein durch dieses Array ausgewähltes Element nicht mehr den Selektorbedingungen entspricht, wird es automatisch entfernt. Seien Sie sich dessen bei Iterationen bewusst.

## Syntax

```js-nolint
getElementsByClassName(names)
```

### Parameter

- `names`
  - : Ein String, der die zu matchenden Klassennamen repräsentiert; mehrere Klassennamen sind durch Leerzeichen getrennt.

### Rückgabewert

Eine lebende [`HTMLCollection`](/de/docs/Web/API/HTMLCollection) der gefundenen Elemente.

## Beispiele

Alle Elemente abrufen, die eine Klasse 'test' haben:

```js
document.getElementsByClassName("test");
```

Alle Elemente abrufen, die sowohl die Klassen 'red' als auch 'test' haben:

```js
document.getElementsByClassName("red test");
```

Alle Elemente abrufen, die eine Klasse 'test' innerhalb eines Elements haben, das die ID 'main' hat:

```js
document.getElementById("main").getElementsByClassName("test");
```

Das erste Element mit einer Klasse 'test' abrufen, oder `undefined`, wenn kein
passendes Element existiert:

```js
document.getElementsByClassName("test")[0];
```

Wir können auch Methoden von Array.prototype auf eine beliebige [`HTMLCollection`](/de/docs/Web/API/HTMLCollection) anwenden, indem wir die `HTMLCollection` als _this_-Wert der Methode übergeben. Hier
werden wir alle div-Elemente finden, die eine Klasse 'test' haben:

```js
const testElements = document.getElementsByClassName("test");
const testDivs = Array.prototype.filter.call(
  testElements,
  (testElement) => testElement.nodeName === "DIV",
);
```

### Das erste Element abrufen, dessen Klasse 'test' ist

Dies ist die am häufigsten verwendete Operationsmethode.

```html
<div id="parent-id">
  <p>hello world 1</p>
  <p class="test">hello world 2</p>
  <p>hello world 3</p>
  <p>hello world 4</p>
</div>
```

```js
const parentDOM = document.getElementById("parent-id");

const test = parentDOM.getElementsByClassName("test"); // a list of matching elements, *not* the element itself
console.log(test); // HTMLCollection[1]

const testTarget = parentDOM.getElementsByClassName("test")[0]; // the first element, as we wanted
console.log(testTarget); // <p class="test">hello world 2</p>
```

### Beispiel für mehrere Klassen

`document.getElementsByClassName` funktioniert sehr ähnlich wie
`document.querySelector` und `document.querySelectorAll`. Es werden nur
Elemente mit ALLEN angegebenen Klassennamen ausgewählt.

#### HTML

```html
<span class="orange fruit">Orange Fruit</span>
<span class="orange juice">Orange Juice</span>
<span class="apple juice">Apple Juice</span>
<span class="foo bar">Something Random</span>
<textarea id="resultArea"></textarea>
```

```css hidden
#resultArea {
  width: 98%;
  height: 7em;
}
```

#### JavaScript

```js
// getElementsByClassName only selects elements that have both given classes
const allOrangeJuiceByClass = document.getElementsByClassName("orange juice");
let result = "document.getElementsByClassName('orange juice')";
for (const el of allOrangeJuiceByClass) {
  result += `\n  ${el.textContent}`;
}

// querySelector only selects full complete matches
const allOrangeJuiceQuery = document.querySelectorAll(".orange.juice");
result += "\n\ndocument.querySelectorAll('.orange.juice')";
for (const el of allOrangeJuiceQuery) {
  result += `\n  ${el.textContent}`;
}

document.getElementById("resultArea").value = result;
```

#### Ergebnis

{{EmbedLiveSample('Multiple_Classes_Example', '100%', 200)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
