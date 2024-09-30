---
title: Durchlaufen einer HTML-Tabelle mit JavaScript und DOM-Schnittstellen
slug: Web/API/Document_Object_Model/Traversing_an_HTML_table_with_JavaScript_and_DOM_Interfaces
l10n:
  sourceCommit: d0b23f3f26637aa405ee9ee0a0892fc6e9b742ef
---

{{DefaultAPISidebar("DOM")}}

Dieser Artikel bietet einen Überblick über einige leistungsstarke, grundlegende DOM-Level-1-Methoden und deren Verwendung in JavaScript. Sie lernen, wie Sie HTML-Elemente dynamisch erstellen, darauf zugreifen, sie steuern und entfernen können. Die hier vorgestellten DOM-Methoden sind nicht spezifisch für HTML; sie gelten auch für XML. Die hier bereitgestellten Demonstrationen funktionieren in jedem modernen Browser einwandfrei.

> [!NOTE]
> Die hier vorgestellten DOM-Methoden sind Teil der Document Object Model (Core) Level 1-Spezifikation. DOM Level 1 umfasst sowohl Methoden für den generischen Dokumentzugriff und die Manipulation (DOM 1 Core) als auch Methoden, die spezifisch für HTML-Dokumente sind (DOM 1 HTML).

## Dynamisches Erstellen einer HTML-Tabelle

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
2. Als nächstes haben wir das `<tbody>`-Element erstellt, das ein Kind des `<table>`-Elements ist.
3. Anschließend haben wir in einer Schleife die `<tr>`-Elemente erstellt, die Kinder des `<tbody>`-Elements sind.
4. Für jedes `<tr>`-Element haben wir in einer Schleife die `<td>`-Elemente erstellt, die Kinder der `<tr>`-Elemente sind.
5. Für jedes `<td>`-Element haben wir dann den Textknoten mit dem Text der Tabellenzelle erstellt.

Nachdem wir die `<table>`, `<tbody>`, `<tr>` und `<td>`-Elemente sowie den Textknoten erstellt haben, fügen wir jedes Objekt in umgekehrter Reihenfolge an seinen Elternknoten an:

1. Zuerst befestigen wir jeden Textknoten an seinem Eltern-`<td>`-Element mit

   ```js
   cell.appendChild(cellText);
   ```

2. Als nächstes befestigen wir jedes `<td>`-Element an seinem Eltern-`<tr>`-Element mit

   ```js
   row.appendChild(cell);
   ```

3. Danach befestigen wir jedes `<tr>`-Element an das Eltern-`<tbody>`-Element mit

   ```js
   tblBody.appendChild(row);
   ```

4. Anschließend befestigen wir das `<tbody>`-Element an seinem Eltern-`<table>`-Element mit

   ```js
   tbl.appendChild(tblBody);
   ```

5. Schließlich befestigen wir das `<table>`-Element an das Eltern-`<body>`-Element mit

   ```js
   document.body.appendChild(tbl);
   ```

Merken Sie sich diese Technik. Sie werden sie häufig beim Programmieren für das W3C DOM verwenden. Zuerst erstellen Sie Elemente von oben nach unten; dann befestigen Sie die Kinder von unten nach oben an die Eltern.

Hier ist der HTML-Code, der durch den JavaScript-Code generiert wurde:

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

Hier ist der DOM-Objektbaum, der durch den Code für das `<table>`-Element und seine Kind-Elemente generiert wurde:

![Wie ein DOM-Objektbaum vom Hauptelement und seinen Kindern generiert wird](sample1-tabledom.jpg)

Sie können diese Tabelle und ihre internen Kind-Elemente mit nur wenigen DOM-Methoden erstellen. Denken Sie daran, das Baum-Modell für die Strukturen zu beachten, die Sie erstellen möchten; dies erleichtert Ihnen das Schreiben des erforderlichen Codes. Im `<table>`-Baum von Abbildung 1 hat das Element `<table>` ein Kind: das Element `<tbody>`. `<tbody>` hat zwei Kinder. Jedes `child` von `<tbody>` (`<tr>`) hat zwei Kinder (`<td>`). Schließlich hat jedes `<td>` ein Kind: einen Textknoten.

## Festlegen der Hintergrundfarbe eines Absatzes

### Beispiel

In diesem Beispiel ändern wir die Hintergrundfarbe eines Absatzes, wenn ein Button geklickt wird.

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

`getElementsByTagName(tagNameValue)` ist eine Methode, die in jedem DOM-Element [`Element`](/de/docs/Web/API/Element) oder dem Wurzelelement [`Document`](/de/docs/Web/API/Document) verfügbar ist. Wenn sie aufgerufen wird, gibt sie ein Array mit allen Nachkommen des Elements zurück, die den Tag-Namen erfüllen. Das erste Element der Liste befindet sich an Position `[0]` im Array.

Wir haben folgende Schritte durchgeführt:

1. Zuerst holen wir uns alle `p`-Elemente im Dokument:

   ```js
   const paragraphs = document.getElementsByTagName("p");
   ```

2. Dann holen wir das zweite Absatzelement aus der Liste der `p`-Elemente:

   ```js
   const secondParagraph = paragraphs[1];
   ```

   ![Ein Absatz-Element wird als neuer Geschwisterknoten zu einem bestehenden Absatz im DOM-Baum hinzugefügt](sample2a2.jpg)

3. Schließlich setzen wir die Hintergrundfarbe auf Rot mit der [`style`](/de/docs/Web/API/HTMLElement/style)-Eigenschaft des [`paragraph`](/de/docs/Web/API/HTMLParagraphElement)-Objekts:

   ```js
   secondParagraph.style.background = "red";
   ```

### Erstellen von TextNodes mit document.createTextNode("..")

Verwenden Sie das Dokumentobjekt, um die Methode `createTextNode` aufzurufen und Ihren Textknoten zu erstellen. Sie müssen nur den Textinhalt übergeben. Der Rückgabewert ist ein Objekt, das den Textknoten repräsentiert.

```js
myTextNode = document.createTextNode("world");
```

Dies bedeutet, dass Sie einen Knoten vom Typ `TEXT_NODE` (ein Textstück) erstellt haben, dessen Textdaten `"world"` sind, und `myTextNode` ist Ihre Referenz zu diesem Knotenobjekt. Um diesen Text auf Ihre HTML-Seite einzufügen, müssen Sie diesen Textknoten zu einem Kind eines anderen Knoten-Elements machen.

### Einfügen von Elementen mit appendChild(..)

Durch den Aufruf von `secondParagraph.appendChild(node_element)` machen Sie das Element zu einem neuen Kind des zweiten `<p>`-Elements.

```js
secondParagraph.appendChild(myTextNode);
```

Nachdem Sie dieses Beispiel getestet haben, beachten Sie, dass die Wörter hello und world zusammen stehen: helloworld. Visuell erscheint es auf der HTML-Seite wie ein einzelner Knoten, aber denken Sie daran, dass im Dokumentmodell zwei Knoten vorhanden sind. Der zweite Knoten ist ein neuer Knoten vom Typ `TEXT_NODE` und ist das zweite Kind des zweiten `<p>`-Tags. Die folgende Abbildung zeigt den soeben erstellten Textknoten innerhalb des Dokumentbaumens.

![Textknoten in einem Absatz-Element als einzelne Geschwister im DOM-Baum.](sample2b2.jpg)

> **Hinweis:** `createTextNode()` und `appendChild()` sind ein einfacher Weg, um Leerzeichen zwischen den Wörtern _hello_ und _world_ einzufügen. Ein weiterer wichtiger Hinweis ist, dass die `appendChild`-Methode das Kind nach dem letzten Kind anhängt, genauso wie das Wort _world_ nach dem Wort _hello_ hinzugefügt wurde. Wenn Sie einen Textknoten zwischen _hello_ und _world_ einfügen möchten, müssen Sie `insertBefore` anstelle von `appendChild` verwenden.

### Erstellen Neuer Elemente mit dem Dokumentobjekt und der createElement(..)-Methode

Sie können neue HTML-Elemente oder andere gewünschte Elemente mit `createElement` erstellen. Wenn Sie beispielsweise ein neues `<p>`-Element als Kind des `<body>`-Elements erstellen möchten, können Sie das `myBody` aus dem vorherigen Beispiel verwenden und einen neuen Elementknoten anhängen. Um einen Knoten zu erstellen, rufen Sie `document.createElement("tagname")` auf. Beispiel:

```js
myNewPTagNode = document.createElement("p");
myBody.appendChild(myNewPTagNode);
```

![Wie ein neuer Knoten-Element an das Textknoten-Objekt innerhalb des Dokumentbaumes angehängt wird](sample2c.jpg)

### Entfernen von Knoten mit der removeChild(..)-Methode

Knoten können entfernt werden. Der folgende Code entfernt den Textknoten `myTextNode` (das Wort "world") aus dem zweiten `<p>`-Element, `secondParagraph`.

```js
secondParagraph.removeChild(myTextNode);
```

Der Textknoten `myTextNode` (der das Wort "world" enthält) existiert immer noch. Der folgende Code fügt `myTextNode` an das kürzlich erstellte `<p>`-Element, `myNewPTagNode`, an.

```js
myNewPTagNode.appendChild(myTextNode);
```

Der endgültige Zustand für den modifizierten Objektbaum sieht folgendermaßen aus:

![Erstellen und Anhängen eines neuen Knoten-Elements an die Objekt-Baumtextstruktur](sample2d.jpg)

## Dynamisches Erstellen einer Tabelle (zurück zu Sample1.html)

Für den Rest dieses Artikels werden wir mit sample1.html weiterarbeiten. Die folgende Abbildung zeigt die Tabellen-Objektbaumstruktur für die Tabelle, die im Beispiel erstellt wurde.

### Überprüfung der HTML-Tabellenstruktur

![Die HTML-Tabellen-Objektbaumstruktur nach dem Hinzufügen neuer Knotenelemente](sample1-tabledom.jpg)

### Erstellen von Elementknoten und Einfügen in den Dokumentbaum

Die grundlegenden Schritte zur Erstellung der Tabelle in sample1.html sind:

- Holen Sie sich das Body-Objekt (erstes Objekt des document-Objekts).
- Erstellen Sie alle Elemente.
- Fügen Sie schließlich jedes Kind gemäß der Tabellenstruktur (wie in der obigen Abbildung gezeigt) hinzu. Der folgende Quellcode ist eine kommentierte Version für sample1.html.

> [!NOTE]
> Am Ende der `start`-Funktion gibt es eine neue Zeile Code. Die `border`-Eigenschaft der Tabelle wurde mit einer anderen DOM-Methode `setAttribute()` festgelegt. `setAttribute()` hat zwei Argumente: den Namen des Attributs und den Wert des Attributs. Mit der Methode `setAttribute` können Sie jedes Attribut eines Elements festlegen.

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

### Einen Textknoten aus der Tabelle abrufen

Dieses Beispiel stellt zwei neue DOM-Attribute vor. Zuerst wird das `childNodes`-Attribut verwendet, um die Liste der Kindknoten von myCell zu erhalten. Die `childNodes`-Liste enthält alle Kindknoten, unabhängig davon, wie ihr Name oder Typ ist. Genau wie `getElementsByTagName()` gibt es eine Liste von Knoten zurück.

Die Unterschiede sind, dass (a) `getElementsByTagName()` nur Elemente des angegebenen Tag-Namens zurückgibt; und (b) `childNodes` alle Nachkommen auf allen Ebenen enthält, nicht nur unmittelbare Kinder.

Sobald Sie die zurückgegebene Liste haben, verwenden Sie die `[x]`-Methode, um das gewünschte Kind-Element abzurufen. Dieses Beispiel speichert in `myCellText` den Textknoten der zweiten Zelle in der zweiten Zeile der Tabelle.

Um die Ergebnisse in diesem Beispiel anzuzeigen, erstellt es einen neuen Textknoten, dessen Inhalt die Daten von `myCellText` ist, und fügt ihn als Kind des `<body>`-Elements hinzu.

> [!NOTE]
> Wenn Ihr Objekt ein Textknoten ist, können Sie das `data`-Attribut verwenden und den Textinhalt des Knotens abrufen.

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

Am Ende von sample1 gibt es einen Aufruf zu `setAttribute` für das `myTable`-Objekt. Dieser Aufruf wurde verwendet, um die `border`-Eigenschaft der Tabelle festzulegen. Um den Wert des Attributs abzurufen, verwenden Sie die Methode `getAttribute`:

```js
myTable.getAttribute("border");
```

### Verbergen einer Spalte durch Ändern von Stil-Eigenschaften

Sobald Sie das Objekt in Ihrer JavaScript-Variablen haben, können Sie `style`-Eigenschaften direkt festlegen. Der folgende Code ist eine modifizierte Version von sample1.html, in der jede Zelle der zweiten Spalte ausgeblendet und jede Zelle der ersten Spalte mit einem roten Hintergrund versehen wird. Beachten Sie, dass die `style`-Eigenschaft direkt festgelegt wurde.

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
