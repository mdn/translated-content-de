---
title: Erstellen und Aktualisieren des DOM-Baums
slug: Web/API/Document_Object_Model/Building_and_updating_the_DOM_tree
l10n:
  sourceCommit: abc914f085fb9913c41c4cd4453da432e9d4e761
---

{{DefaultAPISidebar("DOM")}}

Dieser Artikel bietet einen Überblick über einige leistungsfähige, grundlegende DOM-Level-1-Methoden und deren Verwendung aus JavaScript. Sie erfahren, wie Sie HTML-Elemente dynamisch erstellen, auf sie zugreifen, sie steuern und entfernen. Die hier vorgestellten DOM-Methoden sind nicht spezifisch für HTML; sie gelten auch für XML. Die hier bereitgestellten Demonstrationen funktionieren in jedem modernen Browser einwandfrei.

> [!NOTE]
> Dieser Leitfaden demonstriert sowohl allgemeine DOM-Methoden als auch Methoden, die spezifisch für HTML-Elemente sind.

## Dynamisches Erstellen einer HTML-Tabelle

### Beispiel

In diesem Beispiel fügen wir der Seite eine neue Tabelle hinzu, wenn auf eine Schaltfläche geklickt wird.

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
2. Anschließend haben wir das `<tbody>`-Element erstellt, das ein Kind des `<table>`-Elements ist.
3. Danach haben wir mithilfe einer Schleife die `<tr>`-Elemente erstellt, die Kinder des `<tbody>`-Elements sind.
4. Für jedes `<tr>`-Element haben wir mithilfe einer Schleife die `<td>`-Elemente erstellt, die Kinder der `<tr>`-Elemente sind.
5. Für jedes `<td>`-Element haben wir dann den Textknoten mit dem Text der Tabellenzelle erstellt.

Nachdem wir die Elemente `<table>`, `<tbody>`, `<tr>` und `<td>` sowie anschließend den Textknoten erstellt haben, hängen wir jedes Objekt in umgekehrter Reihenfolge an sein Elternobjekt an:

1. Zuerst hängen wir jeden Textknoten mithilfe von an sein übergeordnetes `<td>`-Element an:

   ```js
   cell.appendChild(cellText);
   ```

2. Anschließend hängen wir jedes `<td>`-Element mithilfe von an sein übergeordnetes `<tr>`-Element an:

   ```js
   row.appendChild(cell);
   ```

3. Danach hängen wir jedes `<tr>`-Element mithilfe von an das übergeordnete `<tbody>`-Element an:

   ```js
   tblBody.appendChild(row);
   ```

4. Anschließend hängen wir das `<tbody>`-Element mithilfe von an sein übergeordnetes `<table>`-Element an:

   ```js
   tbl.appendChild(tblBody);
   ```

5. Danach hängen wir das `<table>`-Element mithilfe von an sein übergeordnetes `<body>`-Element an:

   ```js
   document.body.appendChild(tbl);
   ```

Merken Sie sich diese Technik. Sie werden sie bei der Programmierung für das W3C DOM häufig verwenden. Zuerst erstellen Sie Elemente von oben nach unten; anschließend hängen Sie die Kinder von unten nach oben an die Eltern an.

Hier ist das vom JavaScript-Code generierte HTML-Markup:

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

Hier ist der vom Code für das `<table>`-Element und seine Kindelemente generierte DOM-Objektbaum:

![Wie ein DOM-Objektbaum aus dem Hauptelement und seinen Kindern generiert wird](sample1-tabledom.jpg)

Sie können diese Tabelle und ihre internen Kindelemente mit nur wenigen DOM-Methoden erstellen. Behalten Sie das Baum-Modell für die Strukturen im Blick, die Sie erstellen möchten; dadurch wird es einfacher, den erforderlichen Code zu schreiben. Im `<table>`-Baum in Abbildung 1 hat das Element `<table>` ein Kind: das Element `<tbody>`. `<tbody>` hat zwei Kinder. Jedes Kind von `<tbody>` (`<tr>`) hat zwei Kinder (`<td>`). Schließlich hat jedes `<td>` ein Kind: einen Textknoten.

## Festlegen der Hintergrundfarbe eines Absatzes

### Beispiel

In diesem Beispiel ändern wir die Hintergrundfarbe eines Absatzes, wenn auf eine Schaltfläche geklickt wird.

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

`getElementsByTagName(tagNameValue)` ist eine Methode, die in jedem DOM-[`Element`](/de/docs/Web/API/Element) oder im Stamm-[`Document`](/de/docs/Web/API/Document)-Element verfügbar ist. Beim Aufruf gibt sie ein Array mit allen Nachfahren des Elements zurück, die dem Tag-Namen entsprechen. Das erste Element der Liste befindet sich an der Position `[0]` im Array.

Wir haben die folgenden Schritte durchgeführt:

1. Zuerst erhalten wir alle `p`-Elemente im Dokument:

   ```js
   const paragraphs = document.getElementsByTagName("p");
   ```

2. Dann erhalten wir das zweite Absatz-Element aus der Liste der `p`-Elemente:

   ```js
   const secondParagraph = paragraphs[1];
   ```

   ![Ein Absatz-Element wird als neues Geschwisterelement zu einem bestehenden Absatz in einem DOM-Baum hinzugefügt](sample2a2.jpg)

3. Schließlich setzen wir die Hintergrundfarbe mithilfe der Eigenschaft [`style`](/de/docs/Web/API/HTMLElement/style) des Objekts [`paragraph`](/de/docs/Web/API/HTMLParagraphElement) auf Rot:

   ```js
   secondParagraph.style.background = "red";
   ```

### Erstellen von TextNodes mit document.createTextNode("..")

Verwenden Sie das Dokumentobjekt, um die Methode `createTextNode` aufzurufen und Ihren Textknoten zu erstellen. Sie müssen lediglich den Textinhalt übergeben. Der Rückgabewert ist ein Objekt, das den Textknoten darstellt.

```js
myTextNode = document.createTextNode("world");
```

Das bedeutet, dass Sie einen Knoten des Typs `TEXT_NODE` (einen Textabschnitt) erstellt haben, dessen Textdaten `"world"` sind, und `myTextNode` Ihre Referenz auf dieses Knotenobjekt ist. Um diesen Text in Ihre HTML-Seite einzufügen, müssen Sie diesen Textknoten zu einem Kind eines anderen Knotenelements machen.

### Einfügen von Elementen mit appendChild(..)

Durch den Aufruf von `secondParagraph.appendChild(node_element)` machen Sie das Element also zu einem neuen Kind des zweiten `<p>`-Elements.

```js
secondParagraph.appendChild(myTextNode);
```

Beachten Sie nach dem Testen dieses Beispiels, dass die Wörter hello und world zusammenstehen: helloworld. Wenn Sie die HTML-Seite visuell betrachten, scheint es also, als seien die beiden Textknoten hello und world ein einziger Knoten. Denken Sie jedoch daran, dass es im Dokumentmodell zwei Knoten gibt. Der zweite Knoten ist ein neuer Knoten vom Typ `TEXT_NODE` und das zweite Kind des zweiten `<p>`-Tags. Die folgende Abbildung zeigt das kürzlich erstellte Text-Node-Objekt innerhalb des Dokumentbaums.

![Textknoten in einem Absatz-Element als einzelne Geschwisterelemente im DOM-Baum.](sample2b2.jpg)

> [!NOTE]
> `createTextNode()` und `appendChild()` sind eine einfache Möglichkeit, Leerraum zwischen den Wörtern _hello_ und _world_ einzufügen. Ein weiterer wichtiger Hinweis ist, dass die Methode `appendChild` das Kind nach dem letzten Kind anhängt, genau wie das Wort _world_ nach dem Wort _hello_ hinzugefügt wurde. Wenn Sie also einen Textknoten zwischen _hello_ und _world_ anhängen möchten, müssen Sie statt `appendChild` `insertBefore` verwenden.

### Erstellen neuer Elemente mit dem document-Objekt und der Methode createElement(..)

Mit `createElement` können Sie neue HTML-Elemente oder beliebige andere gewünschte Elemente erstellen. Wenn Sie beispielsweise ein neues `<p>`-Element als Kind des `<body>`-Elements erstellen möchten, können Sie das `myBody` aus dem vorherigen Beispiel verwenden und ein neues Elementknoten anhängen. Um einen Knoten zu erstellen, rufen Sie `document.createElement("tagname")` auf. Zum Beispiel:

```js
myNewPTagNode = document.createElement("p");
myBody.appendChild(myNewPTagNode);
```

![Wie ein neues Knotenelement an das Textknotenobjekt innerhalb des Dokumentbaums angehängt wird](sample2c.jpg)

### Entfernen von Knoten mit der Methode removeChild(..)

Knoten können entfernt werden. Der folgende Code entfernt den Textknoten `myTextNode` (der das Wort „world“ enthält) aus dem zweiten `<p>`-Element `secondParagraph`.

```js
secondParagraph.removeChild(myTextNode);
```

Der Textknoten `myTextNode` (der das Wort „world“ enthält) existiert weiterhin. Der folgende Code hängt `myTextNode` an das kürzlich erstellte `<p>`-Element `myNewPTagNode` an.

```js
myNewPTagNode.appendChild(myTextNode);
```

Der endgültige Zustand des geänderten Objektbaums sieht folgendermaßen aus:

![Erstellen und Anhängen eines neuen Knotenelements an die Textstruktur des Objektbaums](sample2d.jpg)

## Dynamisches Erstellen einer Tabelle

Die folgende Abbildung zeigt die Tabellenobjektbaumstruktur für die im Beispiel erstellte Tabelle.

### Überprüfen der HTML-Tabellenstruktur

![Die HTML-Tabellenobjektbaumstruktur nach dem Hinzufügen neuer Knotenelemente](sample1-tabledom.jpg)

### Erstellen von Elementknoten und Einfügen in den Dokumentbaum

Die grundlegenden Schritte zum Erstellen der Tabelle sind:

- Das body-Objekt abrufen (das erste Element des Dokumentobjekts).
- Alle Elemente erstellen.
- Schließlich jedes Kind entsprechend der Tabellenstruktur anhängen (wie in der obigen Abbildung).

> [!NOTE]
> Am Ende des Skripts befindet sich eine neue Codezeile. Die `border`-Eigenschaft der Tabelle wurde mithilfe einer anderen DOM-Methode, `setAttribute()`, festgelegt. `setAttribute()` hat zwei Argumente: den Attributnamen und den Attributwert. Mit der Methode `setAttribute` können Sie jedes Attribut jedes Elements festlegen.

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

## Bearbeiten der Tabelle mit DOM und CSS

### Abrufen eines Textknotens aus der Tabelle

Dieses Beispiel führt zwei neue DOM-Attribute ein. Zuerst wird das Attribut `childNodes` verwendet, um die Liste der Kindknoten von myCell abzurufen. Die Liste `childNodes` enthält alle Kindknoten, unabhängig von ihrem Namen oder Typ. Wie `getElementsByTagName()` gibt sie eine Liste von Knoten zurück.

Die Unterschiede bestehen darin, dass (a) `getElementsByTagName()` nur Elemente mit dem angegebenen Tag-Namen zurückgibt und (b) `childNodes` alle Nachfahren auf jeder Ebene umfasst, nicht nur unmittelbare Kinder.

Sobald Sie die zurückgegebene Liste haben, verwenden Sie die Methode `[x]`, um das gewünschte Kindelement abzurufen. Dieses Beispiel speichert in `myCellText` den Textknoten der zweiten Zelle in der zweiten Zeile der Tabelle.

Um die Ergebnisse in diesem Beispiel anzuzeigen, wird dann ein neuer Textknoten erstellt, dessen Inhalt die Daten von `myCellText` sind, und als Kind des `<body>`-Elements angehängt.

> [!NOTE]
> Wenn Ihr Objekt ein Textknoten ist, können Sie das Attribut data verwenden und den Textinhalt des Knotens abrufen.

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

Am Ende von sample1 gibt es einen Aufruf von `setAttribute` für das Objekt `myTable`. Dieser Aufruf wurde verwendet, um die border-Eigenschaft der Tabelle festzulegen. Verwenden Sie zum Abrufen des Werts des Attributs die Methode `getAttribute`:

```js
myTable.getAttribute("border");
```

### Ausblenden einer Spalte durch Ändern von Style-Eigenschaften

Sobald Sie das Objekt in Ihrer JavaScript-Variablen haben, können Sie `style`-Eigenschaften direkt festlegen. Der folgende Code ist eine modifizierte Version, in der jede Zelle der zweiten Spalte ausgeblendet und jede Zelle der ersten Spalte so geändert wird, dass sie einen roten Hintergrund hat. Beachten Sie, dass die Eigenschaft `style` direkt festgelegt wurde.

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
