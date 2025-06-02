---
title: Durchqueren einer HTML-Tabelle mit JavaScript und DOM-Schnittstellen
slug: Web/API/Document_Object_Model/Traversing_an_HTML_table_with_JavaScript_and_DOM_Interfaces
l10n:
  sourceCommit: fc52eb81b630ca02c16addc346924295bdb5aaa8
---

{{DefaultAPISidebar("DOM")}}

Dieser Artikel gibt einen Überblick über einige leistungsfähige, grundlegende DOM-Methoden der Stufe 1 und wie man sie mit JavaScript verwendet. Sie lernen, wie Sie HTML-Elemente dynamisch erstellen, darauf zugreifen, sie steuern und entfernen. Die hier vorgestellten DOM-Methoden sind nicht HTML-spezifisch; sie gelten auch für XML. Die bereitgestellten Demonstrationen funktionieren in jedem modernen Browser einwandfrei.

> [!NOTE]
> Die hier vorgestellten DOM-Methoden sind Teil der Document Object Model (Core) Level 1 Spezifikation. DOM Level 1 umfasst sowohl Methoden für den generischen Dokumentzugriff und -manipulation (DOM 1 Core) als auch HTML-spezifische Methoden (DOM 1 HTML).

## Dynamisches Erstellen einer HTML-Tabelle

### Beispiel

In diesem Beispiel fügen wir der Seite eine neue Tabelle hinzu, wenn eine Schaltfläche angeklickt wird.

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
2. Als Nächstes haben wir das `<tbody>`-Element erstellt, das ein Kind des `<table>`-Elements ist.
3. Dann haben wir eine Schleife verwendet, um die `<tr>`-Elemente zu erstellen, die Kinder des `<tbody>`-Elements sind.
4. Für jedes `<tr>`-Element haben wir eine Schleife verwendet, um die `<td>`-Elemente zu erstellen, die Kinder der `<tr>`-Elemente sind.
5. Für jedes `<td>`-Element haben wir dann den Textknoten mit dem Text der Tabellenspalte erstellt.

Nachdem wir die Elemente `<table>`, `<tbody>`, `<tr>` und `<td>` und dann den Textknoten erstellt haben, haben wir jedes Objekt in umgekehrter Reihenfolge an seinen Eltern angehängt:

1. Zuerst fügen wir jedem `<td>`-Element den entsprechenden Textknoten mit

   ```js
   cell.appendChild(cellText);
   ```

2. Als Nächstes fügen wir jedes `<td>`-Element dem entsprechenden `<tr>`-Element hinzu mit

   ```js
   row.appendChild(cell);
   ```

3. Danach fügen wir jedes `<tr>`-Element dem `<tbody>`-Element hinzu mit

   ```js
   tblBody.appendChild(row);
   ```

4. Als Nächstes fügen wir das `<tbody>`-Element dem `<table>`-Element hinzu mit

   ```js
   tbl.appendChild(tblBody);
   ```

5. Schließlich fügen wir das `<table>`-Element dem `<body>`-Element hinzu mit

   ```js
   document.body.appendChild(tbl);
   ```

Merken Sie sich diese Technik. Sie werden sie häufig bei der Programmierung für das W3C-DOM verwenden. Zuerst erstellen Sie die Elemente von oben nach unten; dann fügen Sie die Kinder von unten nach oben an die Eltern an.

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

Hier ist die durch den Code für das `<table>`-Element und seine Kindelemente generierte DOM-Objektstruktur:

![Wie eine DOM-Objektstruktur vom Hauptelement und seinen Kindern generiert wird](sample1-tabledom.jpg)

Sie können diese Tabelle und ihre internen Kindelemente mit nur wenigen DOM-Methoden erstellen. Denken Sie daran, das Baum-Modell für die Strukturen, die Sie erstellen möchten, im Auge zu behalten; dies erleichtert das Schreiben des notwendigen Codes. Im `<table>`-Baum von Abbildung 1 hat das `<table>`-Element ein Kind: das `<tbody>`-Element. `<tbody>` hat zwei Kinder. Jedes Kind (`<tr>`) von `<tbody>` hat zwei Kinder (`<td>`). Schließlich hat jedes `<td>` ein Kind: einen Textknoten.

## Setzen der Hintergrundfarbe eines Absatzes

### Beispiel

In diesem Beispiel ändern wir die Hintergrundfarbe eines Absatzes, wenn eine Schaltfläche angeklickt wird.

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

`getElementsByTagName(tagNameValue)` ist eine Methode, die in jedem DOM [`Element`](/de/docs/Web/API/Element) oder im Root-Element [`Document`](/de/docs/Web/API/Document) verfügbar ist. Bei einem Aufruf gibt sie ein Array mit allen Nachfahren des Elements zurück, die mit dem Tag-Namen übereinstimmen. Das erste Element der Liste befindet sich an der Position `[0]` im Array.

Wir haben die folgenden Schritte durchgeführt:

1. Zuerst holen wir alle `p`-Elemente im Dokument:

   ```js
   const paragraphs = document.getElementsByTagName("p");
   ```

2. Dann holen wir uns das zweite Absatz-Element aus der Liste der `p`-Elemente:

   ```js
   const secondParagraph = paragraphs[1];
   ```

   ![Ein Absatz-Element wird als neuer Geschwisterknoten zu einem vorhandenen Absatz im DOM-Baum hinzugefügt](sample2a2.jpg)

3. Schließlich setzen wir die Hintergrundfarbe auf Rot, indem wir die [`style`](/de/docs/Web/API/HTMLElement/style)-Eigenschaft des [`paragraph`](/de/docs/Web/API/HTMLParagraphElement)-Objekts verwenden:

   ```js
   secondParagraph.style.background = "red";
   ```

### Erstellen von TextNodes mit document.createTextNode("..")

Verwenden Sie das Dokumentobjekt, um die `createTextNode`-Methode aufzurufen und Ihren Textknoten zu erstellen. Sie müssen nur den Textinhalt übergeben. Der Rückgabewert ist ein Objekt, das den Textknoten darstellt.

```js
myTextNode = document.createTextNode("world");
```

Das bedeutet, dass Sie einen Knoten vom Typ `TEXT_NODE` (ein Textstück) erstellt haben, dessen Textdaten `"world"` sind, und `myTextNode` ist Ihre Referenz zu diesem Knotenobjekt. Um diesen Text in Ihre HTML-Seite einzufügen, müssen Sie diesen Textknoten einem anderen Knoten-Element als Kind hinzufügen.

### Einfügen von Elementen mit appendChild(..)

Indem Sie `secondParagraph.appendChild(node_element)` aufrufen, machen Sie das Element zu einem neuen Kind des zweiten `<p>`-Elements.

```js
secondParagraph.appendChild(myTextNode);
```

Nachdem Sie dieses Beispiel getestet haben, stellen Sie fest, dass die Wörter hello und world zusammen sind: helloworld. Visuell sieht es auf der HTML-Seite so aus, als wären die beiden Textknoten hello und world ein einziger Knoten, aber denken Sie daran, dass es im Dokumentmodell zwei Knoten sind. Der zweite Knoten ist ein neuer Knoten vom Typ `TEXT_NODE`, und es ist das zweite Kind des zweiten `<p>`-Tags. Die folgende Abbildung zeigt den kürzlich erstellten Textknoten innerhalb der Dokumentstruktur.

![Textknoten in einem Absatz-Element als individuelle Geschwister im DOM-Baum.](sample2b2.jpg)

> **Hinweis:** `createTextNode()` und `appendChild()` ist eine einfache Möglichkeit, Leerzeichen zwischen den Wörtern _hello_ und _world_ einzufügen. Ein weiterer wichtiger Hinweis ist, dass die `appendChild`-Methode das Kind nach dem letzten Kind anfügt, genau wie das Wort _world_ nach dem Wort _hello_ hinzugefügt wurde. Wenn Sie einen Textknoten zwischen _hello_ und _world_ einfügen möchten, müssen Sie `insertBefore` anstelle von `appendChild` verwenden.

### Erstellen neuer Elemente mit dem Dokumentobjekt und der createElement(..)-Methode

Sie können neue HTML-Elemente oder beliebige andere Elemente mit `createElement` erstellen. Wenn Sie beispielsweise ein neues `<p>`-Element als Kind des `<body>`-Elements erstellen möchten, können Sie das `myBody` aus dem vorherigen Beispiel verwenden und einen neuen Elementknoten anhängen. Um einen Knoten zu erstellen, rufen Sie `document.createElement("tagname")` auf. Zum Beispiel:

```js
myNewPTagNode = document.createElement("p");
myBody.appendChild(myNewPTagNode);
```

![Wie ein neues Knotenelement an das Textknotenobjekt innerhalb der Dokumentstruktur angehängt wird](sample2c.jpg)

### Entfernen von Knoten mit der removeChild(..)-Methode

Knoten können entfernt werden. Der folgende Code entfernt den Textknoten `myTextNode` (das Wort "world") aus dem zweiten `<p>`-Element, `secondParagraph`.

```js
secondParagraph.removeChild(myTextNode);
```

Textknoten `myTextNode` (das Wort "world") existiert immer noch. Der folgende Code fügt `myTextNode` dem kürzlich erstellten `<p>`-Element, `myNewPTagNode`, hinzu.

```js
myNewPTagNode.appendChild(myTextNode);
```

Der Endzustand für die modifizierte Objektstruktur sieht folgendermaßen aus:

![Erstellen und Anfügen eines neuen Knotenelements an die Objektstruktur der Textstruktur](sample2d.jpg)

## Erstellen einer Tabelle dynamisch (zurück zu Sample1.html)

Im Rest dieses Artikels arbeiten wir weiter mit sample1.html. Die folgende Abbildung zeigt die Tabellenobjektstruktur für die im Beispiel erstellte Tabelle.

### Überprüfung der HTML-Tabellenstruktur

![Die HTML-Tabellenobjektstruktur nach dem Hinzufügen neuer Knotenelemente](sample1-tabledom.jpg)

### Erstellen von Elementknoten und Einfügen in die Dokumentstruktur

Die grundlegenden Schritte zum Erstellen der Tabelle in sample1.html sind:

- Holen Sie sich das Körperobjekt (erstes Element des Dokumentobjekts).
- Erstellen Sie alle Elemente.
- Fügen Sie schließlich jedes Kind gemäß der Tabellenstruktur ein (wie in obiger Abbildung). Der folgende Quellcode ist eine kommentierte Version für das sample1.html.

> [!NOTE]
> Am Ende der `start`-Funktion gibt es eine neue Codezeile. Die `border`-Eigenschaft der Tabelle wurde mit einer anderen DOM-Methode, `setAttribute()`, gesetzt. `setAttribute()` hat zwei Argumente: den Attributnamen und den Attributwert. Sie können jedes Attribut eines Elements mit der `setAttribute`-Methode setzen.

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

## Manipulation der Tabelle mit DOM und CSS

### Abrufen eines Textknotens aus der Tabelle

Dieses Beispiel führt zwei neue DOM-Attribute ein. Zuerst wird das `childNodes`-Attribut verwendet, um die Liste der Kindknoten von myCell zu erhalten. Die `childNodes`-Liste enthält alle Kindknoten, unabhängig von deren Namen oder Typ. Wie `getElementsByTagName()` gibt es eine Liste von Knoten zurück.

Die Unterschiede sind, dass (a) `getElementsByTagName()` nur Elemente des angegebenen Tag-Namens zurückgibt und (b) `childNodes` alle Nachfahren auf jeder Ebene umfasst, nicht nur direkte Kinder.

Sobald Sie die zurückgegebene Liste haben, verwenden Sie die `[x]`-Methode, um das gewünschte Kindelement abzurufen. In diesem Beispiel wird der Textknoten der zweiten Zelle in der zweiten Zeile der Tabelle in `myCellText` gespeichert.

Um die Ergebnisse in diesem Beispiel anzuzeigen, erstellt es einen neuen Textknoten, dessen Inhalt die Daten von `myCellText` sind, und fügt ihn dem `<body>`-Element als Kind hinzu.

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

Am Ende von sample1 gibt es einen Aufruf zu `setAttribute` auf dem `myTable`-Objekt. Dieser Aufruf wurde verwendet, um die Rand-Eigenschaft der Tabelle zu setzen. Um den Wert des Attributs abzurufen, verwenden Sie die `getAttribute`-Methode:

```js
myTable.getAttribute("border");
```

### Eine Spalte durch Ändern von Stileigenschaften ausblenden

Sobald Sie das Objekt in Ihrer JavaScript-Variable haben, können Sie `style`-Eigenschaften direkt setzen. Der folgende Code ist eine modifizierte Version von sample1.html, in der jede Zelle der zweiten Spalte ausgeblendet und jede Zelle der ersten Spalte so geändert wird, dass sie einen roten Hintergrund hat. Beachten Sie, dass die `style`-Eigenschaft direkt gesetzt wurde.

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
