---
title: "<tr>: Das Tabellenergebnis-Element"
slug: Web/HTML/Element/tr
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{HTMLSidebar}}

Das **`<tr>`** [HTML](/de/docs/Web/HTML)-Element definiert eine Reihe von Zellen in einer Tabelle. Die Zellen der Zeile können dann mit einer Mischung aus {{HTMLElement("td")}} (Datensatz-Zelle) und {{HTMLElement("th")}} (Kopfzelle) Elementen erstellt werden.

{{EmbedInteractiveExample("pages/tabbed/tr.html","tabbed-taller")}}

## Attribute

Dieses Element umfasst die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

### Veraltete Attribute

Die folgenden Attribute sind veraltet und sollten nicht verwendet werden. Sie werden hier dokumentiert, um beim Aktualisieren vorhandenen Codes als Referenz und aus historischem Interesse zu dienen.

- `align` {{deprecated_inline}}

  - : Gibt die horizontale Ausrichtung jeder Zellreihe an. Die möglichen {{Glossary("enumerated", "aufgezählten")}} Werte sind `left`, `center`, `right`, `justify` und `char`. Wenn unterstützt, richtet der `char`-Wert den Textinhalt am Zeichen aus, das im [`char`](#char)-Attribut definiert ist, und an dem im [`charoff`](#charoff)-Attribut definierten Versatz. Verwenden Sie stattdessen die {{cssxref("text-align")}} CSS-Eigenschaft, da dieses Attribut veraltet ist.

- `bgcolor` {{deprecated_inline}}

  - : Definiert die Hintergrundfarbe jeder Zellreihe. Der Wert ist eine HTML-Farbe; entweder ein [6-stelliger hexadezimaler RGB-Code](/de/docs/Web/CSS/hex-color), der mit einem `#` versehen ist, oder ein [Farbkeyword](/de/docs/Web/CSS/named-color). Andere {{cssxref("color_value", "&lt;color&gt")}} CSS-Werte werden nicht unterstützt. Verwenden Sie stattdessen die {{cssxref("background-color")}} CSS-Eigenschaft, da dieses Attribut veraltet ist.

- `char` {{deprecated_inline}}

  - : Gibt die Ausrichtung des Inhalts an ein Zeichen jeder Zellreihe an. Typische Werte hierfür sind ein Punkt (`.`) bei dem Versuch, Zahlen oder Geldbeträge auszurichten. Wenn [`align`](#align) nicht auf `char` gesetzt ist, wird dieses Attribut ignoriert.

- `charoff` {{deprecated_inline}}

  - : Gibt die Anzahl der Zeichen an, um die der Zellinhalt vom Ausrichtungszeichen versetzt wird, das im [`char`](#char)-Attribut angegeben ist.

- `valign` {{deprecated_inline}}

  - : Gibt die vertikale Ausrichtung jeder Zellreihe an. Die möglichen {{Glossary("enumerated", "aufgezählten")}} Werte sind `baseline`, `bottom`, `middle` und `top`. Verwenden Sie die {{cssxref("vertical-align")}} CSS-Eigenschaft, da dieses Attribut veraltet ist.

## Verwendungshinweise

- Das `<tr>`-Element ist nur als Kind eines {{HTMLElement("thead")}}, {{HTMLElement("tbody")}} oder {{HTMLElement("tfoot")}} Elements gültig.
- Wenn das `<tr>` als direktes Kind seines übergeordneten {{HTMLElement("table")}} Elements platziert wird, wird das `<tbody>` Element impliziert und Browser fügen das `<tbody>` in das Markup ein.
- Das implizierte `<tbody>` Element wird nur unterstützt, wenn die `<table>` ansonsten keine untergeordneten `<tbody>` Elemente hat und nur, wenn das `<tr>` nach etwaigen {{HTMLElement("caption")}}, {{HTMLElement("colgroup")}} und `<thead>` Elementen enthalten ist.
- Die CSS-Pseudoklassen {{cssxref(":nth-of-type")}}, {{cssxref(":first-of-type")}} und {{cssxref(":last-of-type")}} sind oft nützlich, um die gewünschte Menge an Reihen und ihren Daten- und Kopfzellen ({{HTMLElement("td")}} und {{HTMLElement("th")}}-Elemente) auszuwählen.
- Wenn ein `<tr>` als direktes Kind der `<table>` enthalten ist, da der Browser ein `<tbody>` zum Markup hinzufügt, funktionieren CSS-Selektoren wie `table > tr` möglicherweise nicht wie erwartet oder überhaupt nicht.

## Beispiele

Siehe {{HTMLElement("table")}} für ein vollständiges Tabellenbeispiel mit gängigen Standards und Best Practices.

### Grundlegende Zeileneinrichtung

Dieses Beispiel zeigt eine Tabelle mit vier Zeilen und drei Spalten, wobei die erste Spalte Kopfzeilen für die Datenzellen der Zeilen enthält.

#### HTML

Vier `<tr>` Elemente werden verwendet, um vier Tabellenzeilen zu erstellen. Jede Zeile enthält drei Zellen - eine Kopfzelle ({{HTMLElement("th")}}) und zwei Datenzellen ({{HTMLElement("td")}}) - wodurch drei Spalten entstehen. Das [`scope`](/de/docs/Web/HTML/Element/th#scope)-Attribut, das auf jeder Kopfzelle gesetzt ist, gibt an, auf welche Zellen sie sich beziehen. In diesem Beispiel sind es alle Datenzellen innerhalb der `row`.

```html
<table>
  <tbody>
    <tr>
      <th scope="row">A</th>
      <td>Alfa</td>
      <td>AL fah</td>
    </tr>
    <tr>
      <th scope="row">B</th>
      <td>Bravo</td>
      <td>BRAH voh</td>
    </tr>
    <tr>
      <th scope="row">C</th>
      <td>Charlie</td>
      <td>CHAR lee</td>
    </tr>
    <tr>
      <th scope="row">D</th>
      <td>Delta</td>
      <td>DELL tah</td>
    </tr>
  </tbody>
</table>
```

#### CSS

Die CSS {{cssxref(":nth-of-type")}}-Pseudoklasse wird verwendet, um jede `ungerade` Reihen auszuwählen und die {{cssxref("background-color")}} dieser Reihen auf einen leicht dunkleren Ton festzulegen, was einen sogenannten "Zebra-Streifen"-Effekt erzeugt. Dieser abwechselnde Hintergrund erleichtert das Parsen und Lesen der Datenreihen in der Tabelle - stellen Sie sich vor, Sie haben viele Zeilen und Spalten und versuchen, einige Daten in einer bestimmten Reihe zu finden. Zusätzlich werden die Zeilenkopfzellen ({{HTMLElement("th")}}-Elemente) mit einer {{cssxref("background-color")}} hervorgehoben, um sie von den Datenzellen ({{HTMLElement("td")}}-Elementen) zu unterscheiden.

```css
tr:nth-of-type(odd) {
  background-color: #eee;
}

tr th[scope="row"] {
  background-color: #d6ecd4;
}
```

```css hidden
table {
  border-collapse: collapse;
  border: 2px solid rgb(140 140 140);
  font-family: sans-serif;
  font-size: 0.8rem;
  letter-spacing: 1px;
}

th,
td {
  border: 1px solid rgb(160 160 160);
  padding: 8px 10px;
}
```

#### Ergebnis

{{EmbedLiveSample("Basic_row_setup", 650, 140)}}

### Kopfzeile

Dieses Beispiel erweitert die grundlegende Tabelle aus dem [vorherigen Beispiel](#grundlegende_zeileneinrichtung) durch Hinzufügen einer Kopfzeile als erste Zeile der Tabelle.

#### HTML

Es wird eine zusätzliche Tabellenzeile (`<tr>`) als erste Zeile der Tabelle hinzugefügt, wobei Spaltenkopfzellen ({{HTMLElement("th")}}) für jede Spalte eine Überschrift bereitstellen. Wir platzieren diese Zeile in einem {{HTMLElement("thead")}}-Gruppenelement, um anzuzeigen, dass dies die Kopfzeile der Tabelle ist. Das [`scope`](/de/docs/Web/HTML/Element/th#scope)-Attribut wird jeder Kopfzelle (`<th>`) innerhalb dieser Kopfzeile hinzugefügt, um explizit anzugeben, dass sich jede Kopfzelle auf alle Zellen in ihrer eigenen Spalte bezieht, auch wenn diese Zellen im {{HTMLElement("tbody")}} sind.

```html
<table>
  <thead>
    <tr>
      <th scope="col">Symbol</th>
      <th scope="col">Code word</th>
      <th scope="col">Pronunciation</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">A</th>
      <td>Alfa</td>
      <td>AL fah</td>
    </tr>
    <tr>
      <th scope="row">B</th>
      <td>Bravo</td>
      <td>BRAH voh</td>
    </tr>
    <tr>
      <th scope="row">C</th>
      <td>Charlie</td>
      <td>CHAR lee</td>
    </tr>
    <tr>
      <th scope="row">D</th>
      <td>Delta</td>
      <td>DELL tah</td>
    </tr>
  </tbody>
</table>
```

#### CSS

Das CSS ist nahezu unverändert gegenüber dem [vorherigen Beispiel](#grundlegende_zeileneinrichtung), abgesehen von einigen zusätzlichen Stilen zur Hervorhebung der "Kopfzeile", damit die Kopfzeilen der Spalten sich von den anderen Zellen abheben.

```css
tr:nth-of-type(odd) {
  background-color: #eee;
}

tr th[scope="col"] {
  background-color: #505050;
  color: #fff;
}

tr th[scope="row"] {
  background-color: #d6ecd4;
}
```

```css hidden
table {
  border-collapse: collapse;
  border: 2px solid rgb(140 140 140);
  font-family: sans-serif;
  font-size: 0.8rem;
  letter-spacing: 1px;
}

th,
td {
  border: 1px solid rgb(160 160 160);
  padding: 8px 10px;
}
```

#### Ergebnis

{{EmbedLiveSample("Header_row", 650, 170)}}

### Zeilen sortieren

Es gibt keine nativen Methoden, um die Zeilen (`<tr>` Elemente) einer {{HTMLElement("table")}} zu sortieren. Aber mit {{jsxref("Array.prototype.sort()")}}, [`Node.removeChild`](/de/docs/Web/API/Node/removeChild) und [`Node.appendChild`](/de/docs/Web/API/Node/appendChild) kann in JavaScript eine benutzerdefinierte `sort()` Funktion implementiert werden, um eine [`HTMLCollection`](/de/docs/Web/API/HTMLCollection) von `<tr>` Elementen zu sortieren.

#### HTML

Ein {{HTMLElement("tbody")}}-Element wird in dieser Grundtabelle verwendet, um den Hauptteil der Tabelle zu kennzeichnen und um drei Zeilen (`<tr>`-Elemente) mit Daten ({{HTMLElement("td")}}-Elemente) einzuschließen, wodurch eine Spalte mit Zahlen in absteigender Reihenfolge erstellt wird.

```html
<table>
  <tbody>
    <tr>
      <td>3</td>
    </tr>
    <tr>
      <td>2</td>
    </tr>
    <tr>
      <td>1</td>
    </tr>
  </tbody>
</table>
```

#### JavaScript

Im unten stehenden JavaScript-Code wird die erstellte `sort()`-Funktion dem {{HTMLElement("tbody")}}-Element zugeordnet, damit sie die Tabellenzellen in aufsteigender Reihenfolge der Werte sortiert und die Anzeige entsprechend aktualisiert.

```js
HTMLTableSectionElement.prototype.sort = function (cb) {
  Array.from(this.rows)
    .sort(cb)
    .forEach((e) => this.appendChild(this.removeChild(e)));
};

document
  .querySelector("table")
  .tBodies[0].sort((a, b) => a.textContent.localeCompare(b.textContent));
```

```css hidden
table {
  border-collapse: collapse;
  border: 2px solid rgb(140 140 140);
  font-family: sans-serif;
  font-size: 0.8rem;
  letter-spacing: 1px;
}

td {
  border: 1px solid rgb(160 160 160);
  padding: 4px 8px;
}
```

#### Ergebnis

{{EmbedLiveSample('Sorting_rows', '650', '80')}}

### Zeilen sortieren durch Klick auf Kopfzellen

Dieses Beispiel erweitert die Grundtabelle aus dem [vorherigen Beispiel](#zeilen_sortieren) durch die Möglichkeit, die Sortierung interaktiv und unabhängig für mehrere Spalten vorzunehmen.

#### HTML

Eine zusätzliche Datenzelle ({{HTMLElement("td")}} Element) wird jeder Zeile (`<tr>` Element) im Tabellenkörper ({{HTMLElement("tbody")}} Element) hinzugefügt, um eine zweite Spalte mit Buchstaben in aufsteigender Reihenfolge zu erstellen. Mit dem {{HTMLElement("thead")}}-Element wird ein Kopfteil vor dem Hauptteil hinzugefügt, um eine Kopfzeile mit Tabellenkopfzellen ({{HTMLElement("th")}} Element) einzuführen. Diese Kopfzellen werden im unten stehenden JavaScript-Code verwendet, um sie anklickbar zu machen und dann die entsprechende Sortierung bei Aktivierung durch Klick durchzuführen.

```html
<table>
  <thead>
    <tr>
      <th>Numbers</th>
      <th>Letters</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>3</td>
      <td>A</td>
    </tr>
    <tr>
      <td>2</td>
      <td>B</td>
    </tr>
    <tr>
      <td>1</td>
      <td>C</td>
    </tr>
  </tbody>
</table>
```

#### JavaScript

Ein Klickereignishandler wird jedem Tabellenkopf ({{HTMLElement("th")}} Element) jeder {{HTMLElement("table")}} im [`Dokument`](/de/docs/Web/API/HTMLDocument) hinzugefügt; er sortiert alle Zeilen (`<tr>` Elemente) des {{HTMLElement("tbody")}} basierend auf den Inhalten der Datenzellen ({{HTMLElement("td")}} Elemente), die in den Zeilen enthalten sind.

> [!NOTE]
> Diese Lösung geht davon aus, dass die {{HTMLElement("td")}} Elemente nur mit Rohtext ohne nachfolgende Elemente gefüllt werden.

```js
const allTables = document.querySelectorAll("table");

for (const table of allTables) {
  const tBody = table.tBodies[0];
  const rows = Array.from(tBody.rows);
  const headerCells = table.tHead.rows[0].cells;

  for (const th of headerCells) {
    const cellIndex = th.cellIndex;

    th.addEventListener("click", () => {
      rows.sort((tr1, tr2) => {
        const tr1Text = tr1.cells[cellIndex].textContent;
        const tr2Text = tr2.cells[cellIndex].textContent;
        return tr1Text.localeCompare(tr2Text);
      });

      tBody.append(...rows);
    });
  }
}
```

```css hidden
table {
  border-collapse: collapse;
  border: 2px solid rgb(140 140 140);
  font-family: sans-serif;
  font-size: 0.8rem;
  letter-spacing: 1px;
}

th,
td {
  border: 1px solid rgb(160 160 160);
  padding: 4px 8px;
}

th {
  background-color: #505050;
  color: #fff;
  cursor: pointer;
}
```

#### Ergebnis

{{EmbedLiveSample('Sorting_rows_with_a_click_on_header_cells', '650', '100')}}

> [!NOTE]
> Um benutzbar und zugänglich zu sein, muss die Kopfzelle jeder sortierbaren Spalte als Sortierschaltfläche erkennbar sein und jede muss visuell sowie mit dem [`aria-sort`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-sort)-Attribut definieren, ob die Spalte derzeit in aufsteigender oder absteigender Reihenfolge sortiert ist. Siehe das [ARIA Authoring Practices Guide](https://www.w3.org/WAI/ARIA/apg/)'s [Sortierbares Tabelleneintrag](https://www.w3.org/WAI/ARIA/apg/patterns/table/examples/sortable-table/) für mehr Informationen.

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Content_categories"
          >Inhaltskategorien</a
        >
      </th>
      <td>Keine</td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        Null oder mehr {{HTMLElement("td")}} und/oder
        {{HTMLElement("th")}} Elemente;
        {{Glossary("script-supporting_element", "Skript unterstützende Elemente")}}
        ({{HTMLElement("script")}} und
        {{HTMLElement("template")}}) sind ebenfalls erlaubt.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>
        Starttag ist obligatorisch. Der Endtag kann weggelassen werden,
        wenn das <code>&lt;tr&gt;</code>-Element direkt von einem
        <code>&lt;tr&gt;</code>-Element gefolgt wird, oder wenn es das letzte
        Element in seiner übergeordneten Tabellen-Gruppe
        ({{HTMLElement("thead")}}, {{HTMLElement("tbody")}} oder
        {{HTMLElement("tfoot")}}) ist.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        {{HTMLElement("table")}} (nur, wenn die Tabelle kein untergeordnetes
        {{HTMLElement("tbody")}}-Element hat und auch dann nur nach evtl.
        {{HTMLElement("caption")}}, {{HTMLElement("colgroup")}} und
        {{HTMLElement("thead")}}-Elementen); andernfalls muss das
        übergeordnete Element ein {{HTMLElement("thead")}}, {{HTMLElement("tbody")}} oder
        {{HTMLElement("tfoot")}} Element sein.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
      <td>
        <code
          ><a href="/de/docs/Web/Accessibility/ARIA/Roles/row_role"
            >row</a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA-Rollen</th>
      <td>Beliebig</td>
    </tr>
    <tr>
      <th scope="row">DOM-Schnittstelle</th>
      <td>[`HTMLTableRowElement`](/de/docs/Web/API/HTMLTableRowElement)</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Lernen: Grundlagen von HTML-Tabellen](/de/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics)
- {{HTMLElement("caption")}}, {{HTMLElement("col")}}, {{HTMLElement("colgroup")}}, {{HTMLElement("table")}}, {{HTMLElement("tbody")}}, {{HTMLElement("td")}}, {{HTMLElement("tfoot")}}, {{HTMLElement("th")}}, {{HTMLElement("thead")}}: Andere mit Tabellen zusammenhängende Elemente
- {{cssxref("background-color")}}: CSS-Eigenschaft, um die Hintergrundfarbe jeder Zellreihe festzulegen
- {{cssxref("border")}}: CSS-Eigenschaft, um die Rahmen der Zellreihen zu steuern
- {{cssxref("text-align")}}: CSS-Eigenschaft, um den Inhalt jeder Zellreihe horizontal auszurichten
- {{cssxref("vertical-align")}}: CSS-Eigenschaft, um den Inhalt jeder Zellreihe vertikal auszurichten
- {{cssxref(":nth-of-type")}}, {{cssxref(":first-of-type")}}, {{cssxref(":last-of-type")}}: CSS-Pseudoklassen, um die gewünschten Zellreihen auszuwählen
