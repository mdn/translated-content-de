---
title: HTML-Tabellen mit JavaScript und DOM-Schnittstellen durchlaufen
slug: Web/API/Document_Object_Model/Traversing_an_HTML_table_with_JavaScript_and_DOM_Interfaces
l10n:
  sourceCommit: d0b23f3f26637aa405ee9ee0a0892fc6e9b742ef
---

{{DefaultAPISidebar("DOM")}}

Dieser Artikel gibt einen Überblick über einige leistungsstarke, grundlegende DOM-Level-1-Methoden und deren Verwendung in JavaScript. Sie werden lernen, wie Sie HTML-Elemente dynamisch erstellen, darauf zugreifen, diese steuern und entfernen. Die hier vorgestellten DOM-Methoden sind nicht nur auf HTML beschränkt; sie gelten auch für XML. Die hier gezeigten Beispiele funktionieren in jedem modernen Browser.

> [!NOTE]
> Die hier vorgestellten DOM-Methoden sind Teil der Document Object Model (Core) Level 1 Spezifikation. DOM Level 1 umfasst sowohl Methoden für den generischen Dokumentzugriff und -manipulation (DOM 1 Core) als auch Methoden, die speziell für HTML-Dokumente gedacht sind (DOM 1 HTML).

## Eine HTML-Tabelle dynamisch erstellen

### Beispiel

In diesem Beispiel fügen wir der Seite eine neue Tabelle hinzu, wenn ein Button angeklickt wird.

#### HTML

```html
<input type="button" value="Eine Tabelle generieren" onclick="generateTable()" />
```

#### JavaScript

```js
function generateTable() {
  // erstellt ein <table>-Element und ein <tbody>-Element
  const tbl = document.createElement("table");
  const tblBody = document.createElement("tbody");

  // alle Zellen erstellen
  for (let i = 0; i < 2; i++) {
    // erstellt eine Tabellenzeile
    const row = document.createElement("tr");

    for (let j = 0; j < 2; j++) {
      // erstellt ein <td>-Element und einen Textknoten, macht den Textknoten
      // zum Inhalt der <td> und fügt die <td> am Ende der Tabellenzeile an
      const cell = document.createElement("td");
      const cellText = document.createTextNode(`cell in row ${i}, column ${j}`);
      cell.appendChild(cellText);
      row.appendChild(cell);
    }

    // fügt die Zeile am Ende des Tabellenkörpers hinzu
    tblBody.appendChild(row);
  }

  // fügt das <tbody> in das <table> ein
  tbl.appendChild(tblBody);
  // fügt <table> in den <body> ein
  document.body.appendChild(tbl);
  // setzt das border-Attribut von tbl auf '2'
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
2. Dann erstellten wir das `<tbody>`-Element, das ein Kind des `<table>`-Elements ist.
3. Als nächstes benutzten wir eine Schleife, um die `<tr>`-Elemente zu erstellen, die Kinder des `<tbody>`-Elements sind.
4. Für jedes `<tr>`-Element verwendeten wir eine Schleife, um die `<td>`-Elemente zu erstellen, die Kinder der `<tr>`-Elemente sind.
5. Für jedes `<td>`-Element haben wir dann den Textknoten mit dem Text der Tabellenzelle erstellt.

Nachdem wir die `<table>`, `<tbody>`, `<tr>` und `<td>`-Elemente und dann den Textknoten erstellt haben, hängen wir jedes Objekt in umgekehrter Reihenfolge an seinen Elternteil an:

1. Zuerst fügen wir jeden Textknoten an sein übergeordnetes `<td>`-Element an:

   ```js
   cell.appendChild(cellText);
   ```

2. Dann fügen wir jedes `<td>`-Element an sein übergeordnetes `<tr>`-Element an:

   ```js
   row.appendChild(cell);
   ```

3. Danach fügen wir jedes `<tr>`-Element an das übergeordnete `<tbody>`-Element an:

   ```js
   tblBody.appendChild(row);
   ```

4. Danach fügen wir das `<tbody>`-Element an sein übergeordnetes `<table>`-Element an:

   ```js
   tbl.appendChild(tblBody);
   ```

5. Schließlich fügen wir das `<table>`-Element an sein übergeordnetes `<body>`-Element an:

   ```js
   document.body.appendChild(tbl);
   ```

Merken Sie sich diese Technik. Sie werden sie häufig bei der Programmierung für das W3C DOM verwenden. Zuerst erstellen Sie Elemente von oben nach unten; dann hängen Sie die Kinder von unten nach oben an die Eltern an.

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

Hier ist der DOM-Objektbaum, der durch den Code für das `<table>`-Element und dessen Kindelemente generiert wird:

![Wie ein DOM-Objektbaum aus dem Hauptelement und seinen Kindern generiert wird](sample1-tabledom.jpg)

Sie können diese Tabelle und ihre internen Kindelemente mit nur wenigen DOM-Methoden erstellen. Denken Sie daran, das Baumodell für die Strukturen, die Sie erstellen möchten, im Hinterkopf zu behalten; das wird es Ihnen erleichtern, den notwendigen Code zu schreiben. Im `<table>`-Baum der Abbildung 1 hat das Element `<table>` ein Kind: das Element `<tbody>`. `<tbody>` hat zwei Kinder. Jedes Kind von `<tbody>` (`<tr>`) hat zwei Kinder (`<td>`). Schließlich hat jedes `<td>` ein Kind: einen Textknoten.

## Die Hintergrundfarbe eines Absatzes festlegen

### Beispiel

In diesem Beispiel ändern wir die Hintergrundfarbe eines Absatzes, wenn ein Button angeklickt wird.

#### HTML

```html
<body>
  <input
    type="button"
    value="Hintergrundfarbe des Absatzes festlegen"
    onclick="setBackground()" />
  <p>hi</p>
  <p>hello</p>
</body>
```

#### JavaScript

```js
function setBackground() {
  // jetzt alle p-Elemente im Dokument abrufen
  const paragraphs = document.getElementsByTagName("p");

  // das zweite p-Element aus der Liste abrufen
  const secondParagraph = paragraphs[1];

  // den Inline-Stil setzen
  secondParagraph.style.background = "red";
}
```

#### Ergebnis

{{ EmbedLiveSample('Example_2') }}

### Erklärung

`getElementsByTagName(tagNameValue)` ist eine Methode, die in jedem DOM-{{domxref("Element")}} oder dem Wurzel-{{domxref("Document")}}-Element verfügbar ist. Wenn sie aufgerufen wird, gibt sie ein Array mit allen Nachfahren des Elements zurück, die den Tag-Namen erfüllen. Das erste Element der Liste befindet sich an der Position `[0]` im Array.

Wir haben folgende Schritte durchgeführt:

1. Zuerst holen wir uns alle `p`-Elemente im Dokument:

   ```js
   const paragraphs = document.getElementsByTagName("p");
   ```

2. Dann holen wir das zweite Absatz-Element aus der Liste der `p`-Elemente:

   ```js
   const secondParagraph = paragraphs[1];
   ```

   ![Ein Absatz-Element wird als neues Geschwister zu einem vorhandenen Absatz in einem DOM-Baum hinzugefügt](sample2a2.jpg)

3. Schließlich setzen wir die Hintergrundfarbe auf Rot mit der {{domxref("HTMLElement.style", "style")}}-Eigenschaft des {{domxref("HTMLParagraphElement", "paragraph")}}-Objekts:

   ```js
   secondParagraph.style.background = "red";
   ```

### TextNodes mit document.createTextNode("..") erstellen

Verwenden Sie das Dokumentobjekt, um die `createTextNode`-Methode aufzurufen und Ihren Textknoten zu erstellen. Sie müssen nur den Textinhalt übergeben. Der Rückgabewert ist ein Objekt, das den Textknoten darstellt.

```js
myTextNode = document.createTextNode("world");
```

Das bedeutet, dass Sie einen Knoten des Typs `TEXT_NODE` (ein Textstück) erstellt haben, dessen Textdaten `"world"` sind, und `myTextNode` Ihre Referenz zu diesem Knotenobjekt ist. Um diesen Text in Ihre HTML-Seite einzufügen, müssen Sie diesen Textknoten zu einem Kind eines anderen Knoten-Elements machen.

### Elemente mit appendChild(..) einfügen

Indem Sie `secondParagraph.appendChild(node_element)` aufrufen, machen Sie das Element zu einem neuen Kind des zweiten `<p>`-Elements.

```js
secondParagraph.appendChild(myTextNode);
```

Nach dem Testen dieses Beispiels werden Ihnen die Wörter "hello" und "world" zusammen auffallen: "helloworld". Visuell erscheint es, als wären die beiden Textknoten "hello" und "world" ein einziger Knoten, aber denken Sie daran, dass es im Dokumentmodell zwei Knoten gibt. Der zweite Knoten ist ein neuer Knoten des Typs `TEXT_NODE`, und er ist das zweite Kind des zweiten `<p>`-Tags. Die folgende Abbildung zeigt den kürzlich erstellten Textknoten als Inidividualgeschwister im DOM-Baum.

![Textknoten in einem Absatz-Element als einzelne Geschwister im DOM-Baum.](sample2b2.jpg)

> **Note:** `createTextNode()` und `appendChild()` sind einfache Möglichkeiten, um Leerzeichen zwischen den Wörtern _hello_ und _world_ einzufügen. Eine weitere wichtige Anmerkung ist, dass die `appendChild`-Methode das Kind nach dem letzten Kind anfügt, so wie das Wort _world_ nach dem Wort _hello_ hinzugefügt wurde. Wenn Sie einen Textknoten zwischen _hello_ und _world_ einfügen möchten, müssen Sie `insertBefore` anstelle von `appendChild` verwenden.

### Neue Elemente mit dem Dokumentobjekt und der createElement(..) Methode erstellen

Sie können neue HTML-Elemente oder andere gewünschte Elemente mit `createElement` erstellen. Wenn Sie beispielsweise ein neues `<p>`-Element als Kind des `<body>`-Elements erstellen möchten, können Sie das `myBody` aus dem vorherigen Beispiel verwenden und ein neues Elementknoten hinzufügen. Um einen Knoten zu erstellen, rufen Sie `document.createElement("tagname")` auf. Zum Beispiel:

```js
myNewPTagNode = document.createElement("p");
myBody.appendChild(myNewPTagNode);
```

![Wie ein neuer Knoten dem Textknotenobjekt im Dokumentbaum hinzugefügt wird](sample2c.jpg)

### Knoten mit der Methode removeChild(..) entfernen

Knoten können entfernt werden. Der folgende Code entfernt den Textknoten `myTextNode` (der das Wort "world" enthält) aus dem zweiten `<p>`-Element, `secondParagraph`.

```js
secondParagraph.removeChild(myTextNode);
```

Der Textknoten `myTextNode` (der das Wort "world" enthält) existiert immer noch. Der folgende Code fügt `myTextNode` dem kürzlich erstellten `<p>`-Element, `myNewPTagNode`, hinzu.

```js
myNewPTagNode.appendChild(myTextNode);
```

Der endgültige Zustand für den geänderten Objektbaum sieht folgendermaßen aus:

![Erstellen und Anhängen eines neuen Knoten-Elements an die Textstruktur des Objektbaums](sample2d.jpg)

## Eine Tabelle dynamisch erstellen (zurück zu Sample1.html)

Für den Rest dieses Artikels arbeiten wir weiter mit sample1.html. Die folgende Abbildung zeigt die Struktur des Tabellen-Objektbaums für die Tabelle, die im Beispiel erstellt wurde.

### Die HTML-Tabellenstruktur überprüfen

![Die HTML-Tabellen-Objektstruktur nach Hinzufügen neuer Knoten-Elemente](sample1-tabledom.jpg)

### Elementknoten erstellen und in den Dokumentbaum einfügen

Die grundlegenden Schritte zum Erstellen der Tabelle in sample1.html sind:

- Erhalten Sie das Body-Objekt (erstes Element des Dokumentobjekts).
- Erstellen Sie alle Elemente.
- Schließlich hängen Sie jedes Kind gemäß der Tabellenstruktur (wie in der obigen Abbildung) an. Der folgende Quellcode ist eine kommentierte Version für sample1.html.

> [!NOTE]
> Am Ende der `start`-Funktion gibt es eine neue Codezeile. Die `border`-Eigenschaft der Tabelle wurde mit einer anderen DOM-Methode festgelegt: `setAttribute()`. `setAttribute()` hat zwei Argumente: den Attributnamen und den Attributwert. Sie können das Attribut eines beliebigen Elements mit der `setAttribute`-Methode setzen.

```html
<html lang="en">
  <head>
    <title>
      Beispielcode - HTML-Tabelle mit JavaScript und DOM-Schnittstellen durchlaufen
    </title>
    <script>
      function start() {
        // Referenz für den Body erhalten
        const myBody = document.getElementsByTagName("body")[0];

        // <table> und <tbody> erstellen
        const myTable = document.createElement("table");
        const myTableBody = document.createElement("tbody");

        // alle Zellen erstellen
        for (let j = 0; j < 3; j++) {
          // erstellt ein <tr>-Element
          const myCurrentRow = document.createElement("tr");

          for (let i = 0; i < 4; i++) {
            // erstellt ein <td>-Element
            const myCurrentCell = document.createElement("td");
            // erstellt einen Textknoten
            const currentText = document.createTextNode(
              `cell is row ${j}, column ${i}`,
            );
            // hängt den erstellten Textknoten an die Zelle <td> an
            myCurrentCell.appendChild(currentText);
            // hängt die Zelle <td> an die Zeile <tr> an
            myCurrentRow.appendChild(myCurrentCell);
          }
          // hängt die Zeile <tr> an <tbody> an
          myTableBody.appendChild(myCurrentRow);
        }

        // hängt <tbody> an <table> an
        myTable.appendChild(myTableBody);
        // hängt <table> an <body> an
        myBody.appendChild(myTable);
        // setzt das Border-Attribut von myTable auf 2;
        myTable.setAttribute("border", "2");
      }
    </script>
  </head>
  <body onload="start()"></body>
</html>
```

## Die Tabelle mit DOM und CSS manipulieren

### Einen Textknoten aus der Tabelle abrufen

Dieses Beispiel führt zwei neue DOM-Attribute ein. Zuerst wird das `childNodes`-Attribut verwendet, um die Liste der Kinderknoten von myCell zu erhalten. Die `childNodes`-Liste enthält alle Kinderknoten, unabhängig von deren Namen oder Typ. Ähnlich wie `getElementsByTagName()` gibt sie eine Liste von Knoten zurück.

Die Unterschiede sind, dass (a) `getElementsByTagName()` nur Elemente mit dem angegebenen Tag-Namen zurückgibt und (b) `childNodes` alle Nachkommen auf jeder Ebene umfasst, nicht nur unmittelbare Kinder.

Sobald Sie die zurückgegebene Liste haben, verwenden Sie die `[x]`-Methode, um das gewünschte Kindelement abzurufen. Dieses Beispiel speichert in `myCellText` den Textknoten der zweiten Zelle in der zweiten Zeile der Tabelle.

Um die Ergebnisse in diesem Beispiel anzuzeigen, wird ein neuer Textknoten erstellt, dessen Inhalt die Daten von `myCellText` sind, und dieser wird als Kind des `<body>`-Elements angehängt.

> [!NOTE]
> Wenn Ihr Objekt ein Textknoten ist, können Sie das Datenattribut verwenden und den Textinhalt des Knotens abrufen.

```js
myBody = document.getElementsByTagName("body")[0];
myTable = myBody.getElementsByTagName("table")[0];
myTableBody = myTable.getElementsByTagName("tbody")[0];
myRow = myTableBody.getElementsByTagName("tr")[1];
myCell = myRow.getElementsByTagName("td")[1];

// erstes Element der childNodes-Liste von myCell
myCellText = myCell.childNodes[0];

// der Inhalt von currentText ist der Dateninhalt von myCellText
currentText = document.createTextNode(myCellText.data);
myBody.appendChild(currentText);
```

### Einen Attributwert abrufen

Am Ende von sample1 gibt es einen Aufruf zu `setAttribute` für das `myTable`-Objekt. Dieser Aufruf wurde verwendet, um die border-Eigenschaft der Tabelle festzulegen. Um den Wert des Attributs abzurufen, verwenden Sie die `getAttribute`-Methode:

```js
myTable.getAttribute("border");
```

### Eine Spalte durch Ändern von Stileigenschaften ausblenden

Sobald Sie das Objekt in Ihrer JavaScript-Variablen haben, können Sie `style`-Eigenschaften direkt setzen. Der folgende Code ist eine modifizierte Version von sample1.html, in der jede Zelle der zweiten Spalte ausgeblendet und jede Zelle der ersten Spalte mit einem roten Hintergrund versehen wird. Beachten Sie, dass die `style`-Eigenschaft direkt gesetzt wurde.

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
          // setzt die Hintergrundfarbe der Zelle
          // wenn die Spalte 0 ist. Wenn die Spalte 1 ist, wird die Zelle ausgeblendet
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
