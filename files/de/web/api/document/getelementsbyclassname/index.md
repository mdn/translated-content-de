---
title: "Document: getElementsByClassName() Methode"
short-title: getElementsByClassName()
slug: Web/API/Document/getElementsByClassName
l10n:
  sourceCommit: be8f7f155a48e11b30c240f8731afb1845f85378
---

{{APIRef("DOM")}}

Die **`getElementsByClassName`**-Methode des [`Document`](/de/docs/Web/API/Document)-Interfaces gibt ein array-ähnliches Objekt aller Kind-Elemente zurück, die alle angegebenen Klassennamen besitzen.

Wenn sie auf das [`document`](/de/docs/Web/API/Document)-Objekt aufgerufen wird, wird das gesamte Dokument durchsucht, einschließlich des Wurzelknotens. Sie können [`getElementsByClassName()`](/de/docs/Web/API/Element/getElementsByClassName) auch auf jedem Element aufrufen; es werden nur Elemente zurückgegeben, die Nachfolger des angegebenen Wurzelelements mit den angegebenen Klassennamen sind.

> [!WARNING]
> Dies ist eine Live-[`HTMLCollection`](/de/docs/Web/API/HTMLCollection). Änderungen im DOM
> werden im Array widergespiegelt, sobald die Änderungen auftreten. Wenn ein durch dieses Array ausgewähltes Element nicht mehr für den Selektor qualifiziert ist, wird es automatisch entfernt. Beachten Sie dies zu Iterationszwecken.

## Syntax

```js-nolint
getElementsByClassName(names)
```

### Parameter

- `names`
  - : Ein String, der den/die zu treffenden Klassennamen darstellt; mehrere Klassen werden durch Leerzeichen getrennt.

### Rückgabewert

Eine Live-[`HTMLCollection`](/de/docs/Web/API/HTMLCollection) der gefundenen Elemente.

## Beispiele

Holen Sie sich alle Elemente, die eine Klasse 'test' haben:

```js
document.getElementsByClassName("test");
```

Holen Sie sich alle Elemente, die sowohl die 'red'- als auch die 'test'-Klassen haben:

```js
document.getElementsByClassName("red test");
```

Holen Sie sich alle Elemente, die eine Klasse 'test' innerhalb eines Elements mit der ID 'main' haben:

```js
document.getElementById("main").getElementsByClassName("test");
```

Holen Sie sich das erste Element mit einer Klasse 'test' oder `undefined`, wenn es kein übereinstimmendes Element gibt:

```js
document.getElementsByClassName("test")[0];
```

Wir können auch Methoden von `Array.prototype` auf jede [`HTMLCollection`](/de/docs/Web/API/HTMLCollection) anwenden, indem wir die `HTMLCollection` als _this_-Wert der Methode übergeben. Hier werden wir alle div-Elemente finden, die eine Klasse 'test' haben:

```js
const testElements = document.getElementsByClassName("test");
const testDivs = Array.prototype.filter.call(
  testElements,
  (testElement) => testElement.nodeName === "DIV",
);
```

### Holen Sie sich das erste Element dessen Klasse 'test' ist

Dies ist die am häufigsten verwendete Betriebsart.

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

`document.getElementsByClassName` funktioniert sehr ähnlich wie `document.querySelector` und `document.querySelectorAll`. Es werden nur Elemente mit ALLEN der angegebenen Klassennamen ausgewählt.

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
