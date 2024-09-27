---
title: Durchlaufen einer HTML-Tabelle mit JavaScript und DOM-Schnittstellen
slug: Web/API/Document_Object_Model/Traversing_an_HTML_table_with_JavaScript_and_DOM_Interfaces
l10n:
  sourceCommit: d0b23f3f26637aa405ee9ee0a0892fc6e9b742ef
---

{{DefaultAPISidebar("DOM")}}

Dieser Artikel gibt einen Überblick über einige leistungsstarke, grundlegende DOM-Methoden der Ebene 1 und deren Verwendung in JavaScript. Sie lernen, wie Sie HTML-Elemente dynamisch erstellen, darauf zugreifen, sie steuern und entfernen können. Die hier vorgestellten DOM-Methoden sind nicht spezifisch für HTML; sie gelten auch für XML. Die hier bereitgestellten Demonstrationen funktionieren in jedem modernen Browser.

> [!NOTE]
> Die hier vorgestellten DOM-Methoden sind Teil der Spezifikation des Dokumentenobjektmodells (Core) Ebene 1. DOM Ebene 1 umfasst sowohl Methoden für den allgemeinen Dokumentenzugriff und die Manipulation (DOM 1 Core) als auch Methoden, die spezifisch für HTML-Dokumente sind (DOM 1 HTML).

## Erstellen einer HTML-Tabelle dynamisch

### Beispiel

In diesem Beispiel fügen wir der Seite eine neue Tabelle hinzu, wenn ein Button geklickt wird.

#### HTML

```html
<input type="button" value="Generate a table" onclick="generateTable()" />
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
2. Als Nächstes haben wir das `<tbody>`-Element erstellt, welches ein Kind des `<table>`-Elements ist.
3. Danach haben wir eine Schleife verwendet, um die `<tr>`-Elemente zu erstellen, die Kinder des `<tbody>`-Elements sind.
4. Für jedes `<tr>`-Element haben wir eine Schleife verwendet, um die `<td>`-Elemente zu erstellen, die Kinder der `<tr>`-Elemente sind.
5. Für jedes `<td>`-Element haben wir dann den Textknoten mit dem Text der Tabellenzelle erstellt.

Nachdem wir die `<table>`, `<tbody>`, `<tr>`- und `<td>`-Elemente und dann den Textknoten erstellt haben, fügen wir jedes Objekt seinem übergeordneten Objekt in umgekehrter Reihenfolge hinzu:

1. Zuerst hängen wir jeden Textknoten an sein übergeordnetes `<td>`-Element an mit

   ```js
   cell.appendChild(cellText);
   ```

2. Dann hängen wir jedes `<td>`-Element an sein übergeordnetes `<tr>`-Element an mit

   ```js
   row.appendChild(cell);
   ```

3. Dann hängen wir jedes `<tr>`-Element an das übergeordnete `<tbody>`-Element an mit

   ```js
   tblBody.appendChild(row);
   ```

4. Dann hängen wir das `<tbody>`-Element an sein übergeordnetes `<table>`-Element an mit

   ```js
   tbl.appendChild(tblBody);
   ```

5. Schließlich hängen wir das `<table>`-Element an sein übergeordnetes `<body>`-Element an mit

   ```js
   document.body.appendChild(tbl);
   ```

Merken Sie sich diese Technik. Sie werden sie häufig in der Programmierung für das W3C DOM verwenden. Zuerst erstellen Sie die Elemente von oben nach unten; dann hängen Sie die Kinder von unten nach oben an die Eltern an.

Hier ist das von dem JavaScript-Code generierte HTML-Markup:

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

Hier ist der von dem Code für das `<table>`-Element und seine Kinderelemente generierte DOM-Objektbaum:

![Wie ein DOM-Objektbaum aus dem Hauptelement und seinen Kindern generiert wird](sample1-tabledom.jpg)

Sie können diese Tabelle und ihre internen Kinderelemente mit nur wenigen DOM-Methoden erstellen. Denken Sie daran, das Baum-Modell für die Strukturen, die Sie planen zu erstellen, im Hinterkopf zu behalten; dies wird es einfacher machen, den notwendigen Code zu schreiben. In dem `<table>`-Baum aus Abbildung 1 hat das `<table>`-Element ein Kind: das Element `<tbody>`. `<tbody>` hat zwei Kinder. Jedes `<tbody>`-Kind (`<tr>`) hat zwei Kinder (`<td>`). Schließlich hat jedes `<td>` ein Kind: einen Textknoten.

## Festlegen der Hintergrundfarbe eines Absatzes

### Beispiel

In diesem Beispiel ändern wir die Hintergrundfarbe eines Absatzes, wenn ein Button angeklickt wird.

#### HTML

```html
<body>
  <input
    type="button"
    value="Set paragraph background color"
    onclick="setBackground()" />
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
```

#### Ergebnis

{{ EmbedLiveSample('Example_2') }}

### Erklärung

`getElementsByTagName(tagNameValue)` ist eine Methode, die in jedem DOM-Element [`Element`](/de/docs/Web/API/Element) oder dem Wurzelelement [`Document`](/de/docs/Web/API/Document) verfügbar ist. Wenn sie aufgerufen wird, gibt sie ein Array mit allen Nachkommen des Elements zurück, die dem Tag-Namen entsprechen. Das erste Element der Liste befindet sich an Position `[0]` im Array.

Wir haben folgende Schritte unternommen:

1. Zuerst holen wir alle `p`-Elemente im Dokument:

   ```js
   const paragraphs = document.getElementsByTagName("p");
   ```

2. Dann holen wir das zweite Absatzelement aus der Liste der `p`-Elemente:

   ```js
   const secondParagraph = paragraphs[1];
   ```

   ![Ein Absatz-Element wird als neues Geschwister zu einem vorhandenen Absatz in einem DOM-Baum hinzugefügt](sample2a2.jpg)

3. Schließlich setzen wir die Hintergrundfarbe auf rot, indem wir die [`style`](/de/docs/Web/API/HTMLElement/style)-Eigenschaft des [`paragraph`](/de/docs/Web/API/HTMLParagraphElement)-Objekts verwenden:

   ```js
   secondParagraph.style.background = "red";
   ```

### Erstellen von TextNodes mit document.createTextNode("..")

Verwenden Sie das Dokumentobjekt, um die Methode `createTextNode` aufzurufen und Ihren Textknoten zu erstellen. Sie müssen nur den Textinhalt übergeben. Der Rückgabewert ist ein Objekt, das den Textknoten darstellt.

```js
myTextNode = document.createTextNode("world");
```

Das bedeutet, dass Sie einen Knoten vom Typ `TEXT_NODE` (ein Textstück) erstellt haben, dessen Textdaten `"world"` sind, und `myTextNode` ist Ihr Verweis auf dieses Knotenobjekt. Um diesen Text in Ihre HTML-Seite einzufügen, müssen Sie diesen Textknoten als Kind eines anderen Knotenelements machen.

### Einfügen von Elementen mit appendChild(..)

Indem Sie `secondParagraph.appendChild(node_element)` aufrufen, machen Sie das Element zu einem neuen Kind des zweiten `<p>`-Elements.

```js
secondParagraph.appendChild(myTextNode);
```

Nachdem Sie dieses Beispiel getestet haben, beachten Sie, dass die Wörter hallo und welt zusammen sind: helloworld. So erscheint es optisch, wenn Sie die HTML-Seite sehen, als wären die beiden Textknoten hallo und welt ein einzelner Knoten, aber denken Sie daran, dass es im Dokumentmodell zwei Knoten gibt. Der zweite Knoten ist ein neuer Knoten vom Typ `TEXT_NODE`, und es ist das zweite Kind des zweiten `<p>`-Tags. Die folgende Abbildung zeigt das kürzlich erstellte Textknotenobjekt im Dokumentbaum.

![Textknoten in einem Absatz-Element als individuelle Geschwister im DOM-Baum.](sample2b2.jpg)

> **Hinweis:** `createTextNode()` und `appendChild()` ist eine einfache Möglichkeit, Leerzeichen zwischen den Wörtern _hallo_ und _welt_ einzufügen. Ein weiterer wichtiger Hinweis ist, dass die Methode `appendChild` das Kind nach dem letzten Kind anhängt, genau wie das Wort _welt_ nach dem Wort _hallo_ hinzugefügt wurde. Wenn Sie einen Textknoten zwischen _hallo_ und _welt_ einfügen möchten, müssen Sie anstelle von `appendChild` die Methode `insertBefore` verwenden.

### Erstellen neuer Elemente mit dem Dokumentobjekt und der Methode createElement(..)

Sie können neue HTML-Elemente oder jede andere Art von Element erstellen, die Sie möchten, mit `createElement`. Beispielsweise, wenn Sie ein neues `<p>`-Element als Kind des `<body>`-Elements erstellen möchten, können Sie das `myBody` aus dem vorherigen Beispiel verwenden und einen neuen Elementknoten anhängen. Um einen Knoten zu erstellen, rufen Sie `document.createElement("Tagname")` auf. Zum Beispiel:

```js
myNewPTagNode = document.createElement("p");
myBody.appendChild(myNewPTagNode);
```

![Wie ein neuer Knoten zum Textknotenobjekt im Dokumentbaum hinzugefügt wird](sample2c.jpg)

### Entfernen von Knoten mit der Methode removeChild(..)

Knoten können entfernt werden. Der folgende Code entfernt den Textknoten `myTextNode` (der das Wort "welt" enthält) aus dem zweiten `<p>`-Element, `secondParagraph`.

```js
secondParagraph.removeChild(myTextNode);
```

Der Textknoten `myTextNode` (der das Wort "welt" enthält) existiert weiterhin. Der folgende Code fügt `myTextNode` dem kürzlich erstellten `<p>`-Element `myNewPTagNode` hinzu.

```js
myNewPTagNode.appendChild(myTextNode);
```

Der Endzustand für den modifizierten Objektbaum sieht wie folgt aus:

![Erstellen und Anhängen eines neuen Knotens an die Objektbaum-Textstruktur](sample2d.jpg)

## Erstellen einer Tabelle dynamisch (zurück zu Sample1.html)

Für den Rest dieses Artikels werden wir weiterhin mit sample1.html arbeiten. Die folgende Abbildung zeigt die Tabelle-Objektbaumstruktur für die Tabelle, die im Beispiel erstellt wurde.

### Überprüfung der HTML-Tabellenstruktur

![Die HTML-Tabellen-Objektbaumstruktur nach dem Hinzufügen neuer Knoten-Elemente](sample1-tabledom.jpg)

### Erstellen von Elementknoten und Einfügen in den Dokumentbaum

Die grundlegenden Schritte zum Erstellen der Tabelle in sample1.html sind:

- Holen Sie sich das Körperobjekt (erstes Element des Dokumentenobjekts).
- Erstellen Sie alle Elemente.
- Schließlich fügen Sie jedes Kind gemäß der Tabellenstruktur hinzu (wie in der obigen Abbildung). Der folgende Quellcode ist eine kommentierte Version für die sample1.html.

> [!NOTE]
> Am Ende der `start`-Funktion gibt es eine neue Codezeile. Die `border`-Eigenschaft der Tabelle wurde unter Verwendung einer weiteren DOM-Methode, `setAttribute()`, gesetzt. `setAttribute()` hat zwei Argumente: den Attributnamen und den Attributwert. Sie können jedes Attribut eines beliebigen Elements mit der `setAttribute`-Methode setzen.

```html
<html lang="en">
  <head>
    <title>
      Sample code - Traversing an HTML Table with JavaScript and DOM Interfaces
    </title>
    <script>
      function start() {
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
      }
    </script>
  </head>
  <body onload="start()"></body>
</html>
```

## Bearbeitung der Tabelle mit DOM und CSS

### Abrufen eines Textknotens aus der Tabelle

Dieses Beispiel führt zwei neue DOM-Attribute ein. Zuerst wird das Attribut `childNodes` verwendet, um die Liste der Kindknoten von myCell zu erhalten. Die `childNodes`-Liste umfasst alle Kindknoten, unabhängig von ihrem Namen oder Typ. Wie `getElementsByTagName()` gibt sie eine Liste von Knoten zurück.

Die Unterschiede bestehen darin, dass (a) `getElementsByTagName()` nur Elemente des angegebenen Tag-Namens zurückgibt; und (b) `childNodes` alle Nachkommen auf jeder Ebene enthält, nicht nur die direkten Kinder.

Sobald Sie die zurückgegebene Liste haben, verwenden Sie `[x]`, um das gewünschte Kind-Element abzurufen. Dieses Beispiel speichert im `myCellText` den Textknoten der zweiten Zelle in der zweiten Zeile der Tabelle.

Dann wird, um die Ergebnisse in diesem Beispiel anzuzeigen, ein neuer Textknoten erstellt, dessen Inhalt die Daten von `myCellText` sind, und er als Kind des `<body>`-Elements angehängt.

> [!NOTE]
> Wenn Ihr Objekt ein Textknoten ist, können Sie das Datenattribut verwenden und den Textinhalt des Knotens abrufen.

```js
myBody = document.getElementsByTagName("body")[0];
myTable = myBody.getElementsByTagName("table")[0];
myTableBody = myTable.getElementsByTagName("tbody")[0];
myRow = myTableBody.getElementsByTagName("tr")[1];
myCell = myRow.getElementsByTagName("td")[1];

// first item element of the childNodes list of myCell
myCellText = myCell.childNodes[0];

// content of currentText is the data content of myCellText
currentText = document.createTextNode(myCellText.data);
myBody.appendChild(currentText);
```

### Abrufen eines Attributwerts

Am Ende von sample1 gibt es einen Aufruf zu `setAttribute` auf dem `myTable`-Objekt. Dieser Aufruf wurde verwendet, um die Eigenschaft `border` der Tabelle festzulegen. Um den Wert des Attributs abzurufen, verwenden Sie die Methode `getAttribute`:

```js
myTable.getAttribute("border");
```

### Verbergen einer Spalte durch Ändern der Stileigenschaften

Sobald Sie das Objekt in Ihrer JavaScript-Variable haben, können Sie `style`-Eigenschaften direkt setzen. Der folgende Code ist eine modifizierte Version von sample1.html, in der jede Zelle der zweiten Spalte verborgen wird und jede Zelle der ersten Spalte einen roten Hintergrund erhält. Beachten Sie, dass die `style`-Eigenschaft direkt gesetzt wurde.

```html
<html lang="en">
  <body onload="start()"></body>
  <script>
    function start() {
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
    }
  </script>
</html>
```
