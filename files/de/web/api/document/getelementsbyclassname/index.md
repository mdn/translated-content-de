---
title: "Document: getElementsByClassName() Methode"
short-title: getElementsByClassName()
slug: Web/API/Document/getElementsByClassName
l10n:
  sourceCommit: be8f7f155a48e11b30c240f8731afb1845f85378
---

{{APIRef("DOM")}}

Die **`getElementsByClassName`** Methode der
[`Document`](/de/docs/Web/API/Document) Schnittstelle gibt ein array-ähnliches Objekt
aller Kindelemente zurück, die alle angegebenen Klassennamen besitzen.

Wenn die Methode auf das
[`document`](/de/docs/Web/API/Document) Objekt angewendet wird, wird das gesamte Dokument durchsucht, einschließlich des
Wurzelknotens. Sie können auch [`getElementsByClassName()`](/de/docs/Web/API/Element/getElementsByClassName) auf jedem Element aufrufen; es werden nur Elemente zurückgegeben, die Nachfahren des angegebenen Wurzelelements mit den gegebenen Klassennamen sind.

> [!WARNING]
> Dies ist eine live [`HTMLCollection`](/de/docs/Web/API/HTMLCollection). Änderungen im DOM werden
> in der Sammlung reflektiert, sobald sie auftreten. Wenn ein Element, das von dieser Sammlung ausgewählt wurde, nicht mehr den Selektorbedingungen entspricht, wird es automatisch entfernt. Seien Sie sich dessen bei Iterationen bewusst.

## Syntax

```js-nolint
getElementsByClassName(names)
```

### Parameter

- `names`
  - : Ein String, der den/die Klassennamen darstellt, die übereinstimmen sollen; mehrere Klassennamen sind durch Leerzeichen getrennt.

### Rückgabewert

Eine live [`HTMLCollection`](/de/docs/Web/API/HTMLCollection) der gefundenen Elemente.

## Beispiele

Holen Sie alle Elemente, die eine Klasse 'test' haben:

```js
document.getElementsByClassName("test");
```

Holen Sie alle Elemente, die sowohl die Klassen 'red' als auch 'test' haben:

```js
document.getElementsByClassName("red test");
```

Holen Sie alle Elemente, die eine Klasse 'test' haben, innerhalb eines Elements mit der ID 'main':

```js
document.getElementById("main").getElementsByClassName("test");
```

Holen Sie das erste Element mit der Klasse 'test', oder `undefined`, wenn kein
passendes Element vorhanden ist:

```js
document.getElementsByClassName("test")[0];
```

Wir können auch Methoden von Array.prototype auf jede [`HTMLCollection`](/de/docs/Web/API/HTMLCollection) anwenden, indem wir die `HTMLCollection` als _this_ Wert der Methode übergeben. Hier
finden wir alle `div` Elemente, die eine Klasse 'test' haben:

```js
const testElements = document.getElementsByClassName("test");
const testDivs = Array.prototype.filter.call(
  testElements,
  (testElement) => testElement.nodeName === "DIV",
);
```

### Das erste Element mit der Klasse 'test' erhalten

Dies ist die am häufigsten verwendete Methode der Operation.

```html
<html lang="en">
  <body>
    <div id="parent-id">
      <p>hello world 1</p>
      <p class="test">hello world 2</p>
      <p>hello world 3</p>
      <p>hello world 4</p>
    </div>

    <script>
      const parentDOM = document.getElementById("parent-id");

      const test = parentDOM.getElementsByClassName("test"); // a list of matching elements, *not* the element itself
      console.log(test); // HTMLCollection[1]

      const testTarget = parentDOM.getElementsByClassName("test")[0]; // the first element, as we wanted
      console.log(testTarget); // <p class="test">hello world 2</p>
    </script>
  </body>
</html>
```

### Beispiel für mehrere Klassen

`document.getElementsByClassName` funktioniert sehr ähnlich wie
`document.querySelector` und `document.querySelectorAll`. Es werden nur
Elemente ausgewählt, die ALLE der angegebenen Klassennamen besitzen.

#### HTML

```html
<span class="orange fruit">Orange Fruit</span>
<span class="orange juice">Orange Juice</span>
<span class="apple juice">Apple Juice</span>
<span class="foo bar">Something Random</span>
<textarea id="resultArea" style="width:98%;height:7em"></textarea>
```

#### JavaScript

```js
// getElementsByClassName only selects elements that have both given classes
const allOrangeJuiceByClass = document.getElementsByClassName("orange juice");
let result = "document.getElementsByClassName('orange juice')";
for (let i = 0; i < allOrangeJuiceByClass.length; i++) {
  result += `\n  ${allOrangeJuiceByClass[i].textContent}`;
}

// querySelector only selects full complete matches
const allOrangeJuiceQuery = document.querySelectorAll(".orange.juice");
result += "\n\ndocument.querySelectorAll('.orange.juice')";
for (let i = 0; i < allOrangeJuiceQuery.length; i++) {
  result += `\n  ${allOrangeJuiceQuery[i].textContent}`;
}

document.getElementById("resultArea").value = result;
```

#### Ergebnis

{{EmbedLiveSample('Multiple_Classes_Example', '100%', 200)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
