---
title: Durchlaufen einer HTML-Tabelle mit JavaScript und DOM-Schnittstellen
slug: Web/API/Document_Object_Model/Traversing_an_HTML_table_with_JavaScript_and_DOM_Interfaces
l10n:
  sourceCommit: 5f2a755c4fa7d126f85b56fbca90b15c5f039eff
---

{{DefaultAPISidebar("DOM")}}

Dieser Artikel bietet einen Überblick über einige leistungsfähige, grundlegende DOM-Methoden der Stufe 1 und deren Verwendung in JavaScript. Sie werden lernen, wie Sie HTML-Elemente dynamisch erstellen, darauf zugreifen und steuern sowie entfernen können. Die hier vorgestellten DOM-Methoden sind nicht spezifisch für HTML; sie gelten auch für XML. Die hier gezeigten Demonstrationen funktionieren in jedem modernen Browser einwandfrei.

> [!NOTE]
> Die hier vorgestellten DOM-Methoden sind Teil der Document Object Model (Core) Stufe 1 Spezifikation. DOM Stufe 1 umfasst sowohl Methoden für den generischen Dokumentenzugriff und die Manipulation (DOM 1 Core) als auch spezifische Methoden für HTML-Dokumente (DOM 1 HTML).

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

Beachten Sie die Reihenfolge, in der wir die Elemente und den Textknoten erstellt haben:

1. Zuerst haben wir das `<table>`-Element erstellt.
2. Als nächstes haben wir das `<tbody>`-Element erstellt, das ein Kind des `<table>`-Elements ist.
3. Danach haben wir eine Schleife verwendet, um die `<tr>`-Elemente zu erstellen, die Kinder des `<tbody>`-Elements sind.
4. Für jedes `<tr>`-Element nutzten wir eine Schleife, um die `<td>`-Elemente zu erstellen, die Kinder der `<tr>`-Elemente sind.
5. Für jedes `<td>`-Element erstellten wir dann den Textknoten mit dem Text der Tabellenzelle.

Nachdem wir die `<table>`, `<tbody>`, `<tr>`, und `<td>`-Elemente sowie den Textknoten erstellt haben, hängen wir jedes Objekt in umgekehrter Reihenfolge an den Elternknoten an:

1. Zuerst fügen wir jeden Textknoten an sein übergeordnetes `<td>`-Element an, indem wir

   ```js
   cell.appendChild(cellText);
   ```

2. Danach fügen wir jedes `<td>`-Element an sein übergeordnetes `<tr>`-Element an, indem wir

   ```js
   row.appendChild(cell);
   ```

3. Danach fügen wir jedes `<tr>`-Element an das übergeordnete `<tbody>`-Element an, indem wir

   ```js
   tblBody.appendChild(row);
   ```

4. Danach fügen wir das `<tbody>`-Element an sein übergeordnetes `<table>`-Element an, indem wir

   ```js
   tbl.appendChild(tblBody);
   ```

5. Schließlich fügen wir das `<table>`-Element an sein übergeordnetes `<body>`-Element an, indem wir

   ```js
   document.body.appendChild(tbl);
   ```

Merken Sie sich diese Technik. Sie werden sie häufig beim Programmieren für den W3C DOM verwenden. Zuerst erstellen Sie Elemente von oben nach unten; dann hängen Sie die Kinder von unten nach oben an die Eltern an.

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

Hier ist der DOM-Objektbaum, der durch den Code für das `<table>`-Element und seine Kindelemente generiert wird:

![Wie ein DOM-Objektbaum aus dem Hauptelement und seinen Kindern generiert wird](sample1-tabledom.jpg)

Sie können diese Tabelle und ihre internen Kindelemente mit nur wenigen DOM-Methoden erstellen. Denken Sie daran, das Baumodell für die Strukturen im Kopf zu behalten, die Sie erstellen möchten; das erleichtert das Schreiben des notwendigen Codes. Im `<table>`-Baum der Abbildung 1 hat das Element `<table>` ein Kind: das Element `<tbody>`. `<tbody>` hat zwei Kinder. Jedes Kind von `<tbody>` (`<tr>`) hat zwei Kinder (`<td>`). Schließlich hat jedes `<td>` ein Kind: einen Textknoten.

## Festlegen der Hintergrundfarbe eines Absatzes

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

`getElementsByTagName(tagNameValue)` ist eine Methode, die in jedem DOM [`Element`](/de/docs/Web/API/Element) oder dem Wurzel-[`Document`](/de/docs/Web/API/Document)-Element verfügbar ist. Beim Aufruf gibt es ein Array mit allen Nachkommen des Elements zurück, die den Tag-Namen entsprechen. Das erste Element der Liste befindet sich an der Position `[0]` im Array.

Wir haben die folgenden Schritte durchgeführt:

1. Zuerst erhalten wir alle `p`-Elemente im Dokument:

   ```js
   const paragraphs = document.getElementsByTagName("p");
   ```

2. Dann holen wir das zweite Absatz-Element aus der Liste der `p`-Elemente:

   ```js
   const secondParagraph = paragraphs[1];
   ```

   ![Ein neuer Geschwisterabsatz wird einem bestehenden Absatz in einem DOM-Baum hinzugefügt](sample2a2.jpg)

3. Schließlich setzen wir die Hintergrundfarbe auf Rot, indem wir die [`style`](/de/docs/Web/API/HTMLElement/style)-Eigenschaft des [`paragraph`](/de/docs/Web/API/HTMLParagraphElement)-Objekts verwenden:

   ```js
   secondParagraph.style.background = "red";
   ```

### Erstellen von TextNodes mit document.createTextNode("..")

Verwenden Sie das document-Objekt, um die Methode `createTextNode` aufzurufen und Ihren Textknoten zu erstellen. Sie müssen nur den Textinhalt übergeben. Der Rückgabewert ist ein Objekt, das den Textknoten darstellt.

```js
myTextNode = document.createTextNode("world");
```

Dies bedeutet, dass Sie einen Knoten vom Typ `TEXT_NODE` (ein Textstück) erstellt haben, dessen Textdaten `"world"` sind, und `myTextNode` ist Ihre Referenz zu diesem Knotenobjekt. Um diesen Text in Ihre HTML-Seite einzufügen, müssen Sie diesen Textknoten als Kind eines anderen Knoten-Elements machen.

### Einfügen von Elementen mit appendChild(..)

Durch Aufrufen von `secondParagraph.appendChild(node_element)` machen Sie das Element zu einem neuen Kind des zweiten `<p>`-Elements.

```js
secondParagraph.appendChild(myTextNode);
```

Wenn Sie dieses Beispiel testen, merken Sie, dass die Wörter hello und world zusammen sind: helloworld. Visuell betrachtet erscheinen die HTML-Seite und die Textknoten hello und world als ein einzelner Knoten, aber denken Sie daran, dass es im Dokumentenmodell zwei Knoten gibt. Der zweite Knoten ist ein neuer Knoten des Typs `TEXT_NODE`, und es ist das zweite Kind des zweiten `<p>`-Tags. Die folgende Abbildung zeigt das kürzlich erstellte Textknotenobjekt innerhalb des Dokumentbaums.

![Textknoten als individuelle Geschwisterknoten in einem Absatz-Element im DOM-Baum.](sample2b2.jpg)

> [!NOTE]
> `createTextNode()` und `appendChild()` sind einfache Wege, um Leerzeichen zwischen den Wörtern _hello_ und _world_ einzufügen. Eine weitere wichtige Anmerkung ist, dass die Methode `appendChild` das Kind nach dem letzten Kind anhängt, genau wie das Wort _world_ nach dem Wort _hello_ hinzugefügt wurde. Wenn Sie einen Textknoten zwischen _hello_ und _world_ einfügen möchten, müssen Sie `insertBefore` anstelle von `appendChild` verwenden.

### Erstellen neuer Elemente mit dem document-Objekt und der createElement(..) Methode

Sie können neue HTML-Elemente oder jedes andere Element, das Sie möchten, mit `createElement` erstellen. Wenn Sie beispielsweise ein neues `<p>`-Element als Kind des `<body>`-Elements erstellen möchten, können Sie das `myBody` im vorherigen Beispiel verwenden und ein neues Elementknoten anhängen. Um einen Knoten zu erstellen, rufen Sie `document.createElement("tagname")` auf. Beispiel:

```js
myNewPTagNode = document.createElement("p");
myBody.appendChild(myNewPTagNode);
```

![Wie ein neues Knoten-Element an das Textknotenobjekt innerhalb des Dokumentbaums angehängt wird](sample2c.jpg)

### Entfernen von Knoten mit der removeChild(..) Methode

Knoten können entfernt werden. Der folgende Code entfernt den Textknoten `myTextNode` (der das Wort "world" enthält) aus dem zweiten `<p>`-Element, `secondParagraph`.

```js
secondParagraph.removeChild(myTextNode);
```

Der Textknoten `myTextNode` (der das Wort "world" enthält) existiert weiterhin. Der folgende Code hängt `myTextNode` an das kürzlich erstellte `<p>`-Element, `myNewPTagNode`.

```js
myNewPTagNode.appendChild(myTextNode);
```

Der endgültige Zustand für den modifizierten Objektbaum sieht folgendermaßen aus:

![Erstellen und Anhängen eines neuen Knoten-Elements an die Objektbaum-Textstruktur](sample2d.jpg)

## Dynamisches Erstellen einer Tabelle

Die folgende Abbildung zeigt die Tabellenobjekt-Baumstruktur der im Beispiel erstellten Tabelle.

### Überprüfung der HTML-Tabellenstruktur

![Die HTML-Tabellenobjektstruktur nach dem Hinzufügen neuer Knoten-Elemente](sample1-tabledom.jpg)

### Erstellen von Elementknoten und deren Einfügen in den Dokumentbaum

Die grundlegenden Schritte zur Erstellung der Tabelle sind:

- Holen Sie das body-Objekt (erstes Element des document-Objekts).
- Erstellen Sie alle Elemente.
- Fügen Sie schließlich jedes Kind gemäß der Tabellenstruktur (wie in der obigen Abbildung) an.

> [!NOTE]
> Am Ende des Skripts gibt es eine neue Codezeile. Die `border`-Eigenschaft der Tabelle wurde mit einer anderen DOM-Methode, `setAttribute()`, festgelegt. `setAttribute()` hat zwei Argumente: den Attributnamen und den Attributwert. Sie können jedes Attribut eines beliebigen Elements mit der `setAttribute`-Methode festlegen.

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

### Holen eines Textknotens aus der Tabelle

Dieses Beispiel führt zwei neue DOM-Attribute ein. Erstens wird das `childNodes`-Attribut verwendet, um die Liste der untergeordneten Knoten von myCell zu erhalten. Die `childNodes`-Liste enthält alle untergeordneten Knoten, unabhängig davon, welcher Name oder Typ sie haben. Ähnlich wie `getElementsByTagName()` gibt es eine Liste von Knoten zurück.

Der Unterschied besteht darin, dass (a) `getElementsByTagName()` nur Elemente mit dem angegebenen Tag-Namen zurückgibt; und (b) `childNodes` alle Nachkommen auf jeder Ebene einschließt, nicht nur unmittelbare Kinder.

Sobald Sie die zurückgegebene Liste haben, verwenden Sie die `[x]` Methode, um das gewünschte Kind-Element abzurufen. In diesem Beispiel wird im `myCellText` der Textknoten der zweiten Zelle in der zweiten Zeile der Tabelle gespeichert.

Um die Ergebnisse in diesem Beispiel anzuzeigen, wird ein neuer Textknoten erstellt, dessen Inhalt die Daten von `myCellText` sind, und als Kind des `<body>`-Elements angehängt.

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

Am Ende von sample1 gibt es einen Aufruf von `setAttribute` am `myTable`-Objekt. Dieser Aufruf wurde verwendet, um die Rand-Eigenschaft der Tabelle festzulegen. Um den Wert des Attributs abzurufen, verwenden Sie die `getAttribute`-Methode:

```js
myTable.getAttribute("border");
```

### Ausblenden einer Spalte durch Ändern von Stil-Eigenschaften

Sobald Sie das Objekt in Ihrer JavaScript-Variable haben, können Sie `style`-Eigenschaften direkt festlegen. Der folgende Code ist eine modifizierte Version, in der jede Zelle der zweiten Spalte ausgeblendet und jede Zelle der ersten Spalte auf einen roten Hintergrund geändert wird. Beachten Sie, dass die `style`-Eigenschaft direkt gesetzt wurde.

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
