---
title: Erstellen und Aktualisieren des DOM-Baums
slug: Web/API/Document_Object_Model/Building_and_updating_the_DOM_tree
l10n:
  sourceCommit: 277a8954951c900ef60a5175503976284c1d328d
---

{{DefaultAPISidebar("DOM")}}

Dieser Artikel bietet einen Überblick über einige leistungsstarke, grundlegende DOM-Methoden auf Level 1 und deren Verwendung in JavaScript. Sie werden lernen, wie man HTML-Elemente dynamisch erstellt, darauf zugreift, sie steuert und entfernt. Die hier vorgestellten DOM-Methoden sind nicht speziell für HTML; sie gelten auch für XML. Die bereitgestellten Demonstrationen funktionieren in jedem modernen Browser einwandfrei.

> [!NOTE]
> Die hier vorgestellten DOM-Methoden sind Teil der Document Object Model (Core) Level 1 Spezifikation. DOM Level 1 umfasst sowohl Methoden für den generischen Dokumentzugriff und die Manipulation (DOM 1 Core) als auch Methoden, die spezifisch für HTML-Dokumente sind (DOM 1 HTML).

## Dynamisches Erstellen einer HTML-Tabelle

### Beispiel

In diesem Beispiel fügen wir eine neue Tabelle zur Seite hinzu, wenn ein Button geklickt wird.

#### HTML

```html
<input type="button" value="Generate a table" />
```

#### JavaScript

```js
function generateTable() {
  // creates a <table> element and a <tbody> element
  const tbl = document.createElement("table");
  const tblBody = document.createElement("tbody");

  // creating all cells
  for (let i = 0; i < 2; i++) {
    // creates a table row
    const row = document.createElement("tr");

    for (let j = 0; j < 2; j++) {
      // Create a <td> element and a text node, make the text
      // node the contents of the <td>, and put the <td> at
      // the end of the table row
      const cell = document.createElement("td");
      const cellText = document.createTextNode(`cell in row ${i}, column ${j}`);
      cell.appendChild(cellText);
      row.appendChild(cell);
    }

    // add the row to the end of the table body
    tblBody.appendChild(row);
  }

  // put the <tbody> in the <table>
  tbl.appendChild(tblBody);
  // appends <table> into <body>
  document.body.appendChild(tbl);
  // sets the border attribute of tbl to '2'
  tbl.setAttribute("border", "2");
}

document
  .querySelector("input[type='button']")
  .addEventListener("click", generateTable);
```

```css hidden
table {
  margin: 1rem auto;
}

td {
  padding: 0.5rem;
}
```

#### Ergebnis

{{ EmbedLiveSample('Example') }}

### Erklärung

Achten Sie auf die Reihenfolge, in der wir die Elemente und den Textknoten erstellt haben:

1. Zuerst haben wir das `<table>`-Element erstellt.
2. Als Nächstes haben wir das `<tbody>`-Element erstellt, das ein Kind des `<table>`-Elements ist.
3. Danach haben wir eine Schleife verwendet, um die `<tr>`-Elemente zu erstellen, die Kinder des `<tbody>`-Elements sind.
4. Für jedes `<tr>`-Element haben wir eine Schleife verwendet, um die `<td>`-Elemente zu erstellen, die Kinder der `<tr>`-Elemente sind.
5. Für jedes `<td>`-Element haben wir dann den Textknoten mit dem Text der Tabellenzelle erstellt.

Nachdem wir die `<table>`, `<tbody>`, `<tr>`, und `<td>`-Elemente sowie den Textknoten erstellt haben, fügen wir jedes Objekt in umgekehrter Reihenfolge an seinen Elternteil an:

1. Zuerst fügen wir jeden Textknoten an sein übergeordnetes `<td>`-Element an, indem wir

   ```js
   cell.appendChild(cellText);
   ```

2. Als Nächstes fügen wir jedes `<td>`-Element an sein übergeordnetes `<tr>`-Element an, indem wir

   ```js
   row.appendChild(cell);
   ```

3. Dann fügen wir jedes `<tr>`-Element an das übergeordnete `<tbody>`-Element an, indem wir

   ```js
   tblBody.appendChild(row);
   ```

4. Daraufhin fügen wir das `<tbody>`-Element an sein übergeordnetes `<table>`-Element an, indem wir

   ```js
   tbl.appendChild(tblBody);
   ```

5. Schließlich fügen wir das `<table>`-Element an sein übergeordnetes `<body>`-Element an, indem wir

   ```js
   document.body.appendChild(tbl);
   ```

Merken Sie sich diese Technik. Sie werden sie häufig beim Programmieren für das W3C DOM verwenden. Zuerst erstellen Sie Elemente von oben nach unten; dann verbinden Sie die Kinder mit den Eltern von unten nach oben.

Hier ist das HTML-Markup, das durch den JavaScript-Code generiert wurde:

```html
<table border="2">
  <tbody>
    <tr>
      <td>cell is row 0 column 0</td>
      <td>cell is row 0 column 1</td>
    </tr>
    <tr>
      <td>cell is row 1 column 0</td>
      <td>cell is row 1 column 1</td>
    </tr>
  </tbody>
</table>
```

Hier ist der DOM-Objektbaum, der für das `<table>`-Element und seine Kind-Elemente durch den Code generiert wurde:

![Wie ein DOM-Objektbaum aus dem Hauptelement und seinen Kindern erzeugt wird](sample1-tabledom.jpg)

Sie können diese Tabelle und ihre internen Kind-Elemente mit nur wenigen DOM-Methoden erstellen. Denken Sie daran, das Baum-Modell für die Strukturen, die Sie erstellen möchten, im Hinterkopf zu behalten; das erleichtert das Schreiben des notwendigen Codes. Im `<table>`-Baum in Abbildung 1 hat das Element `<table>` ein Kind: das Element `<tbody>`. `<tbody>` hat zwei Kinder. Jedes Kind von `<tbody>` (`<tr>`) hat zwei Kinder (`<td>`). Schließlich hat jedes `<td>` ein Kind: einen Textknoten.

## Setzen der Hintergrundfarbe eines Absatzes

### Beispiel

In diesem Beispiel ändern wir die Hintergrundfarbe eines Absatzes, wenn ein Button geklickt wird.

#### HTML

```html
<body>
  <input type="button" value="Set paragraph background color" />
  <p>hi</p>
  <p>hello</p>
</body>
```

#### JavaScript

```js
function setBackground() {
  // now, get all the p elements in the document
  const paragraphs = document.getElementsByTagName("p");

  // get the second paragraph from the list
  const secondParagraph = paragraphs[1];

  // set the inline style
  secondParagraph.style.background = "red";
}

document.querySelector("input").addEventListener("click", setBackground);
```

#### Ergebnis

{{ EmbedLiveSample('Example_2') }}

### Erklärung

`getElementsByTagName(tagNameValue)` ist eine Methode, die in jedem DOM [`Element`](/de/docs/Web/API/Element) oder dem Wurzel-[`Document`](/de/docs/Web/API/Document)-Element verfügbar ist. Wenn sie aufgerufen wird, gibt sie ein Array mit allen Nachkommen des Elements zurück, die zum Tag-Namen passen. Das erste Element der Liste befindet sich an Position `[0]` im Array.

Wir haben die folgenden Schritte durchgeführt:

1. Zuerst holen wir alle `p`-Elemente im Dokument:

   ```js
   const paragraphs = document.getElementsByTagName("p");
   ```

2. Dann holen wir das zweite Absatz-Element aus der Liste der `p`-Elemente:

   ```js
   const secondParagraph = paragraphs[1];
   ```

   ![Ein Absatz-Element wird als neuer Geschwister eines vorhandenen Absatzes in einem DOM-Baum hinzugefügt](sample2a2.jpg)

3. Schließlich setzen wir die Hintergrundfarbe auf rot mit der [`style`](/de/docs/Web/API/HTMLElement/style)-Eigenschaft des [`paragraf`](/de/docs/Web/API/HTMLParagraphElement)-Objects:

   ```js
   secondParagraph.style.background = "red";
   ```

### Erstellen von TextNodes mit document.createTextNode("..")

Verwenden Sie das Dokumentobjekt, um die `createTextNode`-Methode aufzurufen und Ihren Textknoten zu erstellen. Sie müssen nur den Textinhalt übergeben. Der Rückgabewert ist ein Objekt, das den Textknoten darstellt.

```js
myTextNode = document.createTextNode("world");
```

Das bedeutet, dass Sie einen Knoten des Typs `TEXT_NODE` (ein Textstück) erstellt haben, dessen Textdaten `"world"` sind, und `myTextNode` ist Ihre Referenz zu diesem Knotenobjekt. Um diesen Text in Ihre HTML-Seite einzufügen, müssen Sie diesen Textknoten als Kind eines anderen Knotenelements machen.

### Einfügen von Elementen mit appendChild(..)

Durch den Aufruf von `secondParagraph.appendChild(node_element)` machen Sie das Element zu einem neuen Kind des zweiten `<p>`-Elements.

```js
secondParagraph.appendChild(myTextNode);
```

Nach dem Testen dieses Beispiels beachten Sie, dass die Wörter hello und world zusammen sind: helloworld. Visuell sieht es auf der HTML-Seite so aus, als wären die Textknoten hello und world ein einzelner Knoten, aber denken Sie daran, dass es im Dokumentmodell zwei Knoten gibt. Der zweite Knoten ist ein neuer Knoten des Typs `TEXT_NODE`, und es ist das zweite Kind des zweiten `<p>`-Tags. Die folgende Abbildung zeigt das kürzlich erstellte Textknoten-Objekt im Dokumentbaum.

![Textknoten in einem Absatz-Element als individuelle Geschwister im DOM-Baum.](sample2b2.jpg)

> [!NOTE]
> `createTextNode()` und `appendChild()` sind einfache Wege, um Leerzeichen zwischen den Wörtern _hello_ und _world_ einzufügen. Ein weiterer wichtiger Punkt ist, dass die Methode `appendChild` das Kind nach dem letzten Kind anhängt, genau wie das Wort _world_ nach dem Wort _hello_ hinzugefügt wurde. Möchten Sie einen Textknoten zwischen _hello_ und _world_ einfügen, müssen Sie `insertBefore` anstelle von `appendChild` verwenden.

### Erstellen neuer Elemente mit dem Dokumentobjekt und der createElement(..) Methode

Sie können neue HTML-Elemente oder beliebige andere Elemente mit `createElement` erstellen. Wenn Sie zum Beispiel ein neues `<p>`-Element als Kind des `<body>`-Elements erstellen möchten, können Sie `myBody` aus dem vorherigen Beispiel verwenden und einen neuen Elementknoten anhängen. Um einen Knoten zu erstellen, rufen Sie `document.createElement("tagname")` auf. Zum Beispiel:

```js
myNewPTagNode = document.createElement("p");
myBody.appendChild(myNewPTagNode);
```

![Wie ein neuer Knotenelement zum Textknotenobjekt im Dokumentbaum angehängt wird](sample2c.jpg)

### Entfernen von Knoten mit der removeChild(..) Methode

Knoten können entfernt werden. Der folgende Code entfernt den Textknoten `myTextNode` (enthält das Wort "world") vom zweiten `<p>`-Element, `secondParagraph`.

```js
secondParagraph.removeChild(myTextNode);
```

Der Textknoten `myTextNode` (enthält das Wort "world") existiert immer noch. Der folgende Code hängt `myTextNode` an das kürzlich erstellte `<p>`-Element, `myNewPTagNode`.

```js
myNewPTagNode.appendChild(myTextNode);
```

Der Endzustand des modifizierten Objektbaums sieht folgendermaßen aus:

![Erstellen und Anhängen eines neuen Knotenelements an die Textstruktur des Objektbaums](sample2d.jpg)

## Erstellen einer Tabelle dynamisch

Die folgende Abbildung zeigt die Tabellenobjekt-Baumstruktur für die in dem Beispiel erstellte Tabelle.

### Überprüfung der HTML-Tabellenstruktur

![Die HTML-Tabellen-Objekt-Baumstruktur nach Hinzufügung neuer Knotenelemente](sample1-tabledom.jpg)

### Erstellen von Elemente-Knoten und Einfügen in den Dokumentbaum

Die grundlegenden Schritte zum Erstellen der Tabelle sind:

- Holen Sie das body-Objekt (das erste Element des Dokumentobjekts).
- Erstellen Sie alle Elemente.
- Fügen Sie schließlich jedes Kind entsprechend der Tabellenstruktur an (wie in der obigen Abbildung).

> [!NOTE]
> Am Ende des Skripts gibt es eine neue Codezeile. Die `border`-Eigenschaft der Tabelle wurde mit einer anderen DOM-Methode gesetzt, `setAttribute()`. `setAttribute()` hat zwei Argumente: den Namen des Attributs und den Wert des Attributs. Sie können mit der Methode `setAttribute` jedes Attribut jedes Elements setzen.

```js
// get the reference for the body
const myBody = document.getElementsByTagName("body")[0];

// creates <table> and <tbody> elements
const myTable = document.createElement("table");
const myTableBody = document.createElement("tbody");

// creating all cells
for (let j = 0; j < 3; j++) {
  // creates a <tr> element
  const myCurrentRow = document.createElement("tr");

  for (let i = 0; i < 4; i++) {
    // creates a <td> element
    const myCurrentCell = document.createElement("td");
    // creates a Text Node
    const currentText = document.createTextNode(
      `cell is row ${j}, column ${i}`,
    );
    // appends the Text Node we created into the cell <td>
    myCurrentCell.appendChild(currentText);
    // appends the cell <td> into the row <tr>
    myCurrentRow.appendChild(myCurrentCell);
  }
  // appends the row <tr> into <tbody>
  myTableBody.appendChild(myCurrentRow);
}

// appends <tbody> into <table>
myTable.appendChild(myTableBody);
// appends <table> into <body>
myBody.appendChild(myTable);
// sets the border attribute of myTable to 2;
myTable.setAttribute("border", "2");
```

## Manipulieren der Tabelle mit DOM und CSS

### Abrufen eines Textknotens aus der Tabelle

Dieses Beispiel führt zwei neue DOM-Attribute ein. Zuerst wird das Attribut `childNodes` verwendet, um die Liste der Kindknoten von myCell zu erhalten. Die `childNodes`-Liste enthält alle Kindknoten, unabhängig von deren Namen oder Typ. Wie `getElementsByTagName()` gibt es eine Liste von Knoten zurück.

Die Unterschiede sind, dass (a) `getElementsByTagName()` nur Elemente des angegebenen Tag-Namens zurückgibt; und (b) `childNodes` schließt alle Nachkommen auf jeder Ebene ein, nicht nur unmittelbare Kinder.

Sobald Sie die zurückgegebene Liste haben, verwenden Sie die `[x]`-Methode, um das gewünschte Kind-Element abzurufen. Dieses Beispiel speichert in `myCellText` den Textknoten der zweiten Zelle in der zweiten Zeile der Tabelle.

Dann, um die Ergebnisse in diesem Beispiel anzuzeigen, erstellt es einen neuen Textknoten, dessen Inhalt die Daten von `myCellText` sind, und hängt ihn als Kind des `<body>`-Elements an.

> [!NOTE]
> Wenn Ihr Objekt ein Textknoten ist, können Sie das data-Attribut verwenden und den Textinhalt des Knotens abrufen.

```js
const myBody = document.getElementsByTagName("body")[0];
const myTable = myBody.getElementsByTagName("table")[0];
const myTableBody = myTable.getElementsByTagName("tbody")[0];
const myRow = myTableBody.getElementsByTagName("tr")[1];
const myCell = myRow.getElementsByTagName("td")[1];

// first item element of the childNodes list of myCell
const myCellText = myCell.childNodes[0];

// content of currentText is the data content of myCellText
const currentText = document.createTextNode(myCellText.data);
myBody.appendChild(currentText);
```

### Abrufen eines Attributwerts

Am Ende von sample1 gibt es einen Aufruf von `setAttribute` auf dem `myTable`-Objekt. Dieser Aufruf wurde verwendet, um die border-Eigenschaft der Tabelle zu setzen. Um den Wert des Attributs abzurufen, verwenden Sie die Methode `getAttribute`:

```js
myTable.getAttribute("border");
```

### Verbergen einer Spalte durch Ändern von Stileigenschaften

Sobald Sie das Objekt in Ihrer JavaScript-Variable haben, können Sie `style`-Eigenschaften direkt setzen. Der folgende Code ist eine modifizierte Version, in der jede Zelle der zweiten Spalte ausgeblendet und jede Zelle der ersten Spalte auf roten Hintergrund geändert wird. Beachten Sie, dass die `style`-Eigenschaft direkt gesetzt wurde.

```js
const myBody = document.getElementsByTagName("body")[0];
const myTable = document.createElement("table");
const myTableBody = document.createElement("tbody");

for (let row = 0; row < 2; row++) {
  const myCurrentRow = document.createElement("tr");
  for (let col = 0; col < 2; col++) {
    const myCurrentCell = document.createElement("td");
    const currentText = document.createTextNode(`cell is: ${row}${col}`);
    myCurrentCell.appendChild(currentText);
    myCurrentRow.appendChild(myCurrentCell);
    // set the cell background color
    // if the column is 0. If the column is 1 hide the cell
    if (col === 0) {
      myCurrentCell.style.background = "red";
    } else {
      myCurrentCell.style.display = "none";
    }
  }
  myTableBody.appendChild(myCurrentRow);
}
myTable.appendChild(myTableBody);
myBody.appendChild(myTable);
```
