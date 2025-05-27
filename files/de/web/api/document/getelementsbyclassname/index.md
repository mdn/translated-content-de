---
title: "Dokument: getElementsByClassName() Methode"
short-title: getElementsByClassName()
slug: Web/API/Document/getElementsByClassName
l10n:
  sourceCommit: b5437b737639d6952d18b95ebd1045ed73e4bfa7
---

{{APIRef("DOM")}}

Die **`getElementsByClassName`** Methode des
[`Document`](/de/docs/Web/API/Document)-Interfaces gibt ein array-ähnliches Objekt
aller Kindelemente zurück, die alle angegebenen Klassennamen haben.

Bei einem Aufruf auf das [`document`](/de/docs/Web/API/Document)-Objekt wird das gesamte Dokument durchsucht, einschließlich des Wurzelknotens. Sie können [`getElementsByClassName()`](/de/docs/Web/API/Element/getElementsByClassName) auch auf einem beliebigen Element aufrufen; es werden nur die Elemente zurückgegeben, die Nachfahren des angegebenen Wurzelelements mit den angegebenen Klassennamen sind.

> [!WARNING]
> Dies ist eine live-[`HTMLCollection`](/de/docs/Web/API/HTMLCollection). Änderungen im DOM werden im Array reflektiert, sobald die Änderungen auftreten. Wenn ein durch dieses Array ausgewähltes Element nicht mehr für den Selektor qualifiziert ist, wird es automatisch entfernt. Beachten Sie dies für Iterationszwecke.

## Syntax

```js-nolint
getElementsByClassName(names)
```

### Parameter

- `names`
  - : Ein String, der den/die zu übereinstimmenden Klassennamen repräsentiert; mehrere Klassennamen werden durch Leerzeichen getrennt.

### Rückgabewert

Eine live-[`HTMLCollection`](/de/docs/Web/API/HTMLCollection) der gefundenen Elemente.

## Beispiele

Alle Elemente abrufen, die die Klasse 'test' haben:

```js
document.getElementsByClassName("test");
```

Alle Elemente abrufen, die sowohl die Klassen 'red' als auch 'test' haben:

```js
document.getElementsByClassName("red test");
```

Alle Elemente abrufen, die innerhalb eines Elements mit der ID 'main' die Klasse 'test' haben:

```js
document.getElementById("main").getElementsByClassName("test");
```

Das erste Element mit der Klasse 'test' abrufen, oder `undefined`, wenn es kein übereinstimmendes Element gibt:

```js
document.getElementsByClassName("test")[0];
```

Wir können auch Methoden von `Array.prototype` auf einer beliebigen [`HTMLCollection`](/de/docs/Web/API/HTMLCollection) verwenden, indem wir die `HTMLCollection` als _this_ Wert der Methode übergeben. Hier finden wir alle `div`-Elemente, die eine Klasse von 'test' haben:

```js
const testElements = document.getElementsByClassName("test");
const testDivs = Array.prototype.filter.call(
  testElements,
  (testElement) => testElement.nodeName === "DIV",
);
```

### Das erste Element abrufen, dessen Klasse 'test' ist

Dies ist die am häufigsten verwendete Betriebsmethode.

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

### Beispiel mit mehreren Klassen

`document.getElementsByClassName` funktioniert sehr ähnlich wie
`document.querySelector` und `document.querySelectorAll`. Es werden nur Elemente mit ALLEN angegebenen Klassennamen ausgewählt.

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
