---
title: "Document: getElementsByClassName() Methode"
short-title: getElementsByClassName()
slug: Web/API/Document/getElementsByClassName
l10n:
  sourceCommit: be8f7f155a48e11b30c240f8731afb1845f85378
---

{{APIRef("DOM")}}

Die **`getElementsByClassName`** Methode des
{{domxref("Document")}} Interfaces gibt ein array-ähnliches Objekt
aller Kindelemente zurück, die alle angegebenen Klassennamen besitzen.

Wenn die Methode auf das
{{domxref("document")}} Objekt aufgerufen wird, wird das gesamte Dokument durchsucht, einschließlich des
Wurzelelements. Sie können auch {{domxref("Element.getElementsByClassName", "getElementsByClassName()")}} auf jedes Element anwenden; es werden nur die Elemente zurückgegeben, die Nachfolger des angegebenen Wurzelelements mit den vorgegebenen Klassennamen sind.

> [!WARNING]
> Dies ist ein live {{domxref("HTMLCollection")}}. Änderungen im DOM werden
> in der Sammlung reflektiert, sobald sie auftreten. Wenn ein durch dieses Array ausgewähltes Element nicht mehr für den Selektor qualifiziert ist, wird es automatisch entfernt. Seien Sie sich dessen für Iterationszwecke bewusst.

## Syntax

```js-nolint
getElementsByClassName(names)
```

### Parameter

- `names`
  - : Ein String, der den/die Klassennamen repräsentiert, der/die übereinstimmen soll(en); mehrere Klassennamen werden durch Leerzeichen getrennt.

### Rückgabewert

Eine live {{domxref("HTMLCollection")}} der gefundenen Elemente.

## Beispiele

Alle Elemente abrufen, die die Klasse 'test' haben:

```js
document.getElementsByClassName("test");
```

Alle Elemente abrufen, die sowohl die Klassen 'red' als auch 'test' haben:

```js
document.getElementsByClassName("red test");
```

Alle Elemente abrufen, die die Klasse 'test' haben, innerhalb eines Elements, das die ID
'main' hat:

```js
document.getElementById("main").getElementsByClassName("test");
```

Das erste Element mit der Klasse 'test' abrufen oder `undefined`, wenn es kein
passendes Element gibt:

```js
document.getElementsByClassName("test")[0];
```

Wir können auch Methoden von Array.prototype auf jede {{domxref("HTMLCollection")}} anwenden, indem wir die `HTMLCollection` als _this_-Wert der Methode übergeben. Hier finden
wir alle div-Elemente, die die Klasse 'test' haben:

```js
const testElements = document.getElementsByClassName("test");
const testDivs = Array.prototype.filter.call(
  testElements,
  (testElement) => testElement.nodeName === "DIV",
);
```

### Das erste Element mit der Klasse 'test' abrufen

Dies ist die am häufigsten verwendete Methode der Operation.

```html
<html lang="de">
  <body>
    <div id="parent-id">
      <p>hallo welt 1</p>
      <p class="test">hallo welt 2</p>
      <p>hallo welt 3</p>
      <p>hallo welt 4</p>
    </div>

    <script>
      const parentDOM = document.getElementById("parent-id");

      const test = parentDOM.getElementsByClassName("test"); // eine Liste von passenden Elementen, nicht das Element selbst
      console.log(test); // HTMLCollection[1]

      const testTarget = parentDOM.getElementsByClassName("test")[0]; // das erste Element, wie gewünscht
      console.log(testTarget); // <p class="test">hallo welt 2</p>
    </script>
  </body>
</html>
```

### Beispiel für mehrere Klassen

`document.getElementsByClassName` funktioniert sehr ähnlich wie
`document.querySelector` und `document.querySelectorAll`. Es werden nur die
Elemente ausgewählt, die ALLE angegebenen Klassennamen besitzen.

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
// getElementsByClassName wählt nur Elemente aus, die beide angegebenen Klassen haben
const allOrangeJuiceByClass = document.getElementsByClassName("orange juice");
let result = "document.getElementsByClassName('orange juice')";
for (let i = 0; i < allOrangeJuiceByClass.length; i++) {
  result += `\n  ${allOrangeJuiceByClass[i].textContent}`;
}

// querySelector wählt nur vollständige Matches aus
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
