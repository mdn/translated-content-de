---
title: Traversing an HTML table with JavaScript and DOM Interfaces
slug: Web/API/Document_Object_Model/Traversing_an_HTML_table_with_JavaScript_and_DOM_Interfaces
l10n:
  sourceCommit: 06bb5f22d50ff3579a12aebf7e8c9f02cfa2468b
---

{{DefaultAPISidebar("DOM")}}

Dieser Artikel ist ein Überblick über einige leistungsstarke, grundlegende DOM-Level-1-Methoden und deren Verwendung mit JavaScript. Sie erfahren, wie Sie HTML-Elemente dynamisch erstellen, darauf zugreifen, sie steuern und entfernen können. Die hier vorgestellten DOM-Methoden sind nicht spezifisch für HTML; sie gelten auch für XML. Die hier gezeigten Demonstrationen funktionieren in jedem modernen Browser einwandfrei.

> [!NOTE]
> Die hier vorgestellten DOM-Methoden sind Teil der Document Object Model (Core) Level 1 Spezifikation. DOM-Level-1 umfasst sowohl Methoden für den generischen Dokumentenzugriff und -manipulation (DOM 1 Core) als auch Methoden, die speziell für HTML-Dokumente vorgesehen sind (DOM 1 HTML).

## Dynamisches Erstellen einer HTML-Tabelle

### Beispiel

In diesem Beispiel wird eine neue Tabelle auf der Seite hinzugefügt, wenn ein Button geklickt wird.

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

Beachten Sie die Reihenfolge, in der wir die Elemente und den Textknoten erstellt haben:

1. Zuerst haben wir das `<table>` Element erstellt.
2. Als nächstes haben wir das `<tbody>` Element erstellt, das ein Kind des `<table>` Elements ist.
3. Danach haben wir eine Schleife verwendet, um die `<tr>` Elemente zu erstellen, die Kinder des `<tbody>` Elements sind.
4. Für jedes `<tr>` Element haben wir eine Schleife verwendet, um die `<td>` Elemente zu erstellen, die Kinder von `<tr>` Elementen sind.
5. Für jedes `<td>` Element haben wir dann den Textknoten mit dem Text der Tabellenspalte erstellt.

Sobald wir die `<table>`, `<tbody>`, `<tr>` und `<td>` Elemente und dann den Textknoten erstellt haben, hängen wir jedes Objekt in umgekehrter Reihenfolge an sein übergeordnetes Element an:

1. Zuerst verbinden wir jeden Textknoten mit seinem übergeordneten `<td>` Element mittels

   ```js
   cell.appendChild(cellText);
   ```

2. Als nächstes hängen wir jedes `<td>` Element an sein übergeordnetes `<tr>` Element mittels

   ```js
   row.appendChild(cell);
   ```

3. Danach hängen wir jedes `<tr>` Element an das übergeordnete `<tbody>` Element mittels

   ```js
   tblBody.appendChild(row);
   ```

4. Danach hängen wir das `<tbody>` Element an sein übergeordnetes `<table>` Element mittels

   ```js
   tbl.appendChild(tblBody);
   ```

5. Schließlich hängen wir das `<table>` Element an sein übergeordnetes `<body>` Element mittels

   ```js
   document.body.appendChild(tbl);
   ```

Merken Sie sich diese Technik. Sie wird häufig beim Programmieren für das W3C DOM verwendet. Zuerst erstellen Sie die Elemente von oben nach unten; dann hängen Sie die Kinder von unten nach oben an die Eltern an.

Hier ist das durch den JavaScript-Code generierte HTML-Markup:

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

Hier ist der durch den Code generierte DOM-Objektbaum für das `<table>` Element und seine Kind-Elemente:

![Wie ein DOM-Objektbaum aus dem Hauptelement und seinen Kindern generiert wird](sample1-tabledom.jpg)

Sie können diese Tabelle und ihre internen Kindelemente mit nur wenigen DOM-Methoden erstellen. Denken Sie daran, das Baum-Modell für die Strukturen, die Sie erstellen möchten, im Hinterkopf zu behalten; dies erleichtert Ihnen das Schreiben des notwendigen Codes. Im `<table>` Baum in Abbildung 1 hat das Element `<table>` ein Kind: das Element `<tbody>`. `<tbody>` hat zwei Kinder. Jedes Kind von `<tbody>` (`<tr>`) hat zwei Kinder (`<td>`). Schließlich hat jedes `<td>` ein Kind: einen Textknoten.

## Setzen der Hintergrundfarbe eines Paragraphen

### Beispiel

In diesem Beispiel ändern wir die Hintergrundfarbe eines Paragraphen, wenn ein Button geklickt wird.

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

`getElementsByTagName(tagNameValue)` ist eine Methode, die in jedem DOM [`Element`](/de/docs/Web/API/Element) oder dem root [`Document`](/de/docs/Web/API/Document) Element verfügbar ist. Bei Aufruf gibt sie ein Array mit allen Nachkommen des Elements zurück, die mit dem Tag-Namen übereinstimmen. Das erste Element der Liste befindet sich an Position `[0]` im Array.

Wir haben die folgenden Schritte ausgeführt:

1. Zuerst erhalten wir alle `p` Elemente im Dokument:

   ```js
   const paragraphs = document.getElementsByTagName("p");
   ```

2. Dann erhalten wir das zweite Paragraphen-Element aus der Liste der `p` Elemente:

   ```js
   const secondParagraph = paragraphs[1];
   ```

   ![Ein Paragraph-Element wird als neuer Nachfolger zu einem bestehenden Paragraphen in einem DOM-Baum hinzugefügt](sample2a2.jpg)

3. Schließlich setzen wir die Hintergrundfarbe auf Rot unter Verwendung der [`style`](/de/docs/Web/API/HTMLElement/style) Eigenschaft des [`paragraph`](/de/docs/Web/API/HTMLParagraphElement) Objektes:

   ```js
   secondParagraph.style.background = "red";
   ```

### Erstellen von TextNodes mit document.createTextNode("..")

Verwenden Sie das Dokument-Objekt, um die `createTextNode` Methode aufzurufen und einen Textknoten zu erstellen. Sie müssen lediglich den Textinhalt übergeben. Der Rückgabewert ist ein Objekt, das den Textknoten darstellt.

```js
myTextNode = document.createTextNode("world");
```

Das bedeutet, dass Sie einen Knoten vom Typ `TEXT_NODE` (ein Textstück) erstellt haben, dessen Textdaten `"world"` sind, und `myTextNode` ist Ihr Verweis auf dieses Knotenobjekt. Um diesen Text in Ihre HTML-Seite einzufügen, müssen Sie diesen Textknoten als Kind eines anderen Knoten-Elements machen.

### Einfügen von Elementen mit appendChild(..)

Wenn Sie `secondParagraph.appendChild(node_element)` aufrufen, machen Sie das Element zu einem neuen Kind des zweiten `<p>` Elements.

```js
secondParagraph.appendChild(myTextNode);
```

Nach dem Testen dieses Beispiels beachten Sie, dass die Wörter hello und world zusammen stehen: helloworld. Also visuell, wenn Sie die HTML-Seite sehen, scheint es, als wären die beiden Textknoten hello und world ein einzelner Knoten. Denken Sie jedoch daran, dass es im Dokumentmodell zwei Knoten gibt. Der zweite Knoten ist ein neuer Knoten vom Typ `TEXT_NODE` und er ist das zweite Kind des zweiten `<p>` Tags. In der folgenden Abbildung wird der kürzlich erstellte Textknoten im Dokumentbaum gezeigt.

![Textknoten in einem Paragraph-Element als individuelle Nachfolger im DOM-Baum.](sample2b2.jpg)

> **Hinweis:** `createTextNode()` und `appendChild()` ist eine einfache Möglichkeit, Leerzeichen zwischen den Wörtern _hello_ und _world_ einzuschließen. Ein weiterer wichtiger Hinweis ist, dass die `appendChild` Methode das Kind nach dem letzten Kind anfügt, genau wie das Wort _world_ nach dem Wort _hello_ hinzugefügt wurde. Wenn Sie also einen Textknoten zwischen _hello_ und _world_ einfügen möchten, müssen Sie `insertBefore` anstelle von `appendChild` verwenden.

### Erstellen von neuen Elementen mit dem document Objekt und der createElement(..) Methode

Sie können neue HTML-Elemente oder jedes andere beliebige Element mit `createElement` erstellen. Wenn Sie ein neues `<p>` Element als Kind des `<body>` Elements erstellen möchten, können Sie das `myBody` aus dem vorherigen Beispiel verwenden und ein neues Elementknoten hinzufügen. Um einen Knoten zu erstellen, rufen Sie `document.createElement("tagname")` auf. Zum Beispiel:

```js
myNewPTagNode = document.createElement("p");
myBody.appendChild(myNewPTagNode);
```

![Wie ein neues Knoten-Element an das Textknoten-Objekt im Dokumentbaum angehängt wird](sample2c.jpg)

### Entfernen von Knoten mit der removeChild(..) Methode

Knoten können entfernt werden. Der folgende Code entfernt den Textknoten `myTextNode` (der das Wort "world" enthält) aus dem zweiten `<p>` Element, `secondParagraph`.

```js
secondParagraph.removeChild(myTextNode);
```

Der Textknoten `myTextNode` (der das Wort "world" enthält) existiert weiterhin. Der folgende Code fügt `myTextNode` in das kürzlich erstellte `<p>` Element, `myNewPTagNode`, ein.

```js
myNewPTagNode.appendChild(myTextNode);
```

Der endgültige Zustand des modifizierten Objektbaums sieht so aus:

![Erstellen und Anhängen eines neuen Knoten-Elements an die Objektbaum-Textstruktur](sample2d.jpg)

## Dynamisches Erstellen einer Tabelle

Die folgende Abbildung zeigt die Tabellenobjektbaumstruktur für die im Beispiel erstellte Tabelle.

### Überprüfung der HTML-Tabellenstruktur

![Die HTML-Tabelle Objektbaumstruktur nach dem Hinzufügen neuer Knoten-Elemente](sample1-tabledom.jpg)

### Erstellen von Elementknoten und Einfügen in den Dokumentbaum

Die grundlegenden Schritte zum Erstellen der Tabelle sind:

- Holen Sie sich das Body-Objekt (erstes Element des Dokument-Objekts).
- Erstellen Sie alle Elemente.
- Hängen Sie schließlich jedes Kind entsprechend der Tabellenstruktur (wie in der obigen Abbildung) an.

> [!NOTE]
> Am Ende des Skripts gibt es eine neue Zeile Code. Die `border` Eigenschaft der Tabelle wurde unter Verwendung einer anderen DOM-Methode, `setAttribute()`, gesetzt. `setAttribute()` hat zwei Argumente: den Attributnamen und den Attributwert. Sie können jedes Attribut eines beliebigen Elements mit der `setAttribute` Methode setzen.

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

Dieses Beispiel führt zwei neue DOM-Attribute ein. Zuerst wird das `childNodes` Attribut verwendet, um die Liste der Kindknoten von myCell zu erhalten. Die `childNodes` Liste umfasst alle Kindknoten, unabhängig davon, welchen Namen oder Typ sie haben. Ähnlich wie `getElementsByTagName()` gibt sie eine Liste von Knoten zurück.

Die Unterschiede sind, dass (a) `getElementsByTagName()` nur Elemente des angegebenen Tag-Namens zurückgibt; und (b) `childNodes` alle Nachkommen auf jeder Ebene umfasst, nicht nur unmittelbare Kinder.

Sobald Sie die zurückgegebene Liste haben, verwenden Sie die `[x]` Methode, um das gewünschte Kind-Element zu erhalten. Dieses Beispiel speichert in `myCellText` den Textknoten der zweiten Zelle in der zweiten Reihe der Tabelle.

Um die Ergebnisse in diesem Beispiel anzuzeigen, wird ein neuer Textknoten erstellt, dessen Inhalt die Daten von `myCellText` ist, und dieser als Kind des `<body>` Elements angehängt.

> [!NOTE]
> Wenn Ihr Objekt ein Textknoten ist, können Sie das data Attribut verwenden, um den Textinhalt des Knotens abzurufen.

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

Am Ende von sample1 gibt es einen Aufruf von `setAttribute` auf das `myTable` Objekt. Dieser Aufruf wurde verwendet, um die border Eigenschaft der Tabelle zu setzen. Um den Wert des Attributs abzurufen, verwenden Sie die `getAttribute` Methode:

```js
myTable.getAttribute("border");
```

### Ausblenden einer Spalte durch Ändern von Style-Eigenschaften

Sobald Sie das Objekt in Ihrer JavaScript-Variable haben, können Sie `style` Eigenschaften direkt setzen. Der folgende Code ist eine modifizierte Version, bei der jede Zelle der zweiten Spalte ausgeblendet und jede Zelle der ersten Spalte mit einem roten Hintergrund versehen wird. Beachten Sie, dass die `style` Eigenschaft direkt gesetzt wurde.

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
      myCurrentCell.style.background = "rgb(255 0 0)";
    } else {
      myCurrentCell.style.display = "none";
    }
  }
  myTableBody.appendChild(myCurrentRow);
}
myTable.appendChild(myTableBody);
myBody.appendChild(myTable);
```
