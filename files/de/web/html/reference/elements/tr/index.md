---
title: "<tr>: Das Table Row-Element"
slug: Web/HTML/Reference/Elements/tr
l10n:
  sourceCommit: 41cf05afdfff38fb460f7cae5b9523405c842ac6
---

{{HTMLSidebar}}

Das **`<tr>`** [HTML](/de/docs/Web/HTML)-Element definiert eine Zeile von Zellen in einer Tabelle. Die Zellen der Zeile können dann mithilfe einer Mischung aus {{HTMLElement("td")}} (Datenzelle) und {{HTMLElement("th")}} (Headerzelle) Elementen festgelegt werden.

{{InteractiveExample("HTML Demo: &lt;tr&gt;", "tabbed-taller")}}

```html interactive-example
<table>
  <caption>
    Alien football stars
  </caption>
  <tr>
    <th scope="col">Player</th>
    <th scope="col">Gloobles</th>
    <th scope="col">Za'taak</th>
  </tr>
  <tr>
    <th scope="row">TR-7</th>
    <td>7</td>
    <td>4,569</td>
  </tr>
  <tr>
    <th scope="row">Khiresh Odo</th>
    <td>7</td>
    <td>7,223</td>
  </tr>
  <tr>
    <th scope="row">Mia Oolong</th>
    <td>9</td>
    <td>6,219</td>
  </tr>
</table>
```

```css interactive-example
th,
td {
  border: 1px solid rgb(160 160 160);
  padding: 8px 10px;
}

th[scope="col"] {
  background-color: #505050;
  color: #fff;
}

th[scope="row"] {
  background-color: #d6ecd4;
}

td {
  text-align: center;
}

tr:nth-of-type(even) {
  background-color: #eee;
}

table {
  border-collapse: collapse;
  border: 2px solid rgb(140 140 140);
  font-family: sans-serif;
  font-size: 0.8rem;
  letter-spacing: 1px;
}

caption {
  caption-side: bottom;
  padding: 10px;
}
```

## Attribute

Dieses Element enthält die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

### Veraltete Attribute

Die folgenden Attribute sind veraltet und sollten nicht verwendet werden. Sie sind unten dokumentiert, um beim Aktualisieren vorhandenen Codes als Referenz zu dienen und nur aus historischem Interesse.

- `align` {{deprecated_inline}}

  - : Gibt die horizontale Ausrichtung jeder Zellreihe an. Die möglichen {{Glossary("enumerated", "enumerierten")}} Werte sind `left`, `center`, `right`, `justify` und `char`. Wenn es unterstützt wird, richtet der Wert `char` den textuellen Inhalt am Zeichen aus, das im [`char`](#char)-Attribut definiert ist, und am Offset, das durch das [`charoff`](#charoff)-Attribut definiert ist. Verwenden Sie stattdessen die {{cssxref("text-align")}} CSS-Eigenschaft, da dieses Attribut veraltet ist.

- `bgcolor` {{deprecated_inline}}

  - : Definiert die Hintergrundfarbe jeder Zellreihe. Der Wert ist eine HTML-Farbe, entweder ein [6-stelliger hexadezimaler RGB-Code](/de/docs/Web/CSS/hex-color), der durch ein `#` vorangestellt ist, oder ein [Farb-Keyword](/de/docs/Web/CSS/named-color). Andere CSS {{cssxref("color_value", "&lt;color&gt;")}} Werte werden nicht unterstützt. Verwenden Sie stattdessen die {{cssxref("background-color")}} CSS-Eigenschaft, da dieses Attribut veraltet ist.

- `char` {{deprecated_inline}}

  - : Gibt die Ausrichtung des Inhalts zu einem Zeichen jeder Zellreihe an. Typische Werte dafür sind ein Punkt (`.`), wenn Sie versuchen, Zahlen oder Geldbeträge auszurichten. Wenn [`align`](#align) nicht auf `char` gesetzt ist, wird dieses Attribut ignoriert.

- `charoff` {{deprecated_inline}}

  - : Gibt die Anzahl der Zeichen an, die der Zellreiheninhalt vom Ausrichtungszeichen aus, das durch das [`char`](#char)-Attribut spezifiziert wird, versetzt werden soll.

- `valign` {{deprecated_inline}}

  - : Gibt die vertikale Ausrichtung jeder Zellreihe an. Die möglichen {{Glossary("enumerated", "enumerierten")}} Werte sind `baseline`, `bottom`, `middle` und `top`. Verwenden Sie stattdessen die {{cssxref("vertical-align")}} CSS-Eigenschaft, da dieses Attribut veraltet ist.

## Nutzungshinweise

- Das `<tr>`-Element ist nur als Kindelement eines {{HTMLElement("thead")}}, {{HTMLElement("tbody")}} oder {{HTMLElement("tfoot")}}-Elements gültig.
- Wenn das `<tr>`-Element als direktes Kindelement seines übergeordneten {{HTMLElement("table")}}-Elements platziert ist, wird das `<tbody>`-Elternteil implizit angenommen, und Browser fügen das `<tbody>` dem Markup hinzu.
- Das implizierte `<tbody>`-Elternteil wird nur unterstützt, wenn die `<table>`-Element sonst keine Kindelemente `<tbody>` aufweist und nur, wenn `<tr>` nach allen {{HTMLElement("caption")}}, {{HTMLElement("colgroup")}} und `<thead>`-Elementen aufgenommen wird.
- Die CSS-Pseudoklassen {{cssxref(":nth-of-type")}}, {{cssxref(":first-of-type")}} und {{cssxref(":last-of-type")}} sind oft nützlich, um die gewünschten Sätze von Zeilen sowie deren Daten- und Headerzellen ({{HTMLElement("td")}} und {{HTMLElement("th")}}-Elemente) auszuwählen.
- Wenn ein `<tr>` direkt als Kindelement der `<table>` aufgenommen wird, wie es der Browser dem Markup ein `<tbody>` hinzufügt, funktionieren CSS-Selektoren wie `table > tr` möglicherweise nicht wie erwartet oder überhaupt nicht.

## Beispiele

Sehen Sie {{HTMLElement("table")}} für ein vollständiges Tabellenbeispiel, das gängige Standards und bewährte Praktiken einführt.

### Grundlegende Zeilenerstellung

Dieses Beispiel demonstriert eine Tabelle mit vier Zeilen und drei Spalten, wobei die erste Spalte Header für die Zeilen-Datenzellen enthält.

#### HTML

Vier `<tr>`-Elemente werden verwendet, um vier Tabellenzeilen zu erstellen. Jede Zeile enthält drei Zellen - eine Headerzelle ({{HTMLElement("th")}}) und zwei Datenzellen ({{HTMLElement("td")}}) - und erstellt so drei Spalten. Das [`scope`](/de/docs/Web/HTML/Reference/Elements/th#scope)-Attribut, das in jeder Headerzelle gesetzt ist, gibt an, auf welche Zellen sie sich beziehen, was in diesem Beispiel alle Datenzellen innerhalb der `row` sind.

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

Die CSS-{{cssxref(":nth-of-type")}}-Pseudoklasse wird verwendet, um jede `odd`-Zeile auszuwählen und den {{cssxref("background-color")}} dieser Zeilen auf einen leicht dunkleren Ton zu setzen, wodurch ein sogenannter "Zebra"-Streifeneffekt entsteht. Diese abwechselnden Hintergründe erleichtern das Parsen und Lesen der Datenreihen der Tabelle — stellen Sie sich vor, Sie hätten viele Zeilen und Spalten und versuchen, bestimmte Daten in einer bestimmten Zeile zu finden. Darüber hinaus sind die Zeilen-Headerzellen ({{HTMLElement("th")}}-Elemente) mit einem {{cssxref("background-color")}} hervorgehoben, um sie von den Datenzellen ({{HTMLElement("td")}}-Elementen) zu unterscheiden.

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

### Header-Zeile

Dieses Beispiel erweitert die einfache Tabelle aus dem [vorherigen Beispiel](#grundlegende_zeilenerstellung) durch Hinzufügen einer Kopfzeile als erste Zeile der Tabelle.

#### HTML

Eine zusätzliche Tabellenzeile (`<tr>`) wird als erste Zeile der Tabelle hinzugefügt, mit Spalten-Header-Zellen ({{HTMLElement("th")}}), die einen Header für jede Spalte bereitstellen. Wir platzieren diese Zeile in einem {{HTMLElement("thead")}}-Gruppierungselement, um anzuzeigen, dass dies der Header der Tabelle ist. Das [`scope`](/de/docs/Web/HTML/Reference/Elements/th#scope)-Attribut wird jeder Headerzelle (`<th>`) innerhalb dieser Kopfzeile hinzugefügt, um ausdrücklich anzugeben, dass jede Headerzelle sich auf alle Zellen innerhalb ihrer eigenen Spalte bezieht, auch wenn sich diese Zellen im {{HTMLElement("tbody")}} befinden.

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

Das CSS ist fast unverändert gegenüber dem [vorherigen Beispiel](#grundlegende_zeilenerstellung), mit Ausnahme einiger zusätzlicher Stile, um die "Header-Zeile" hervorzuheben, sodass die Kopfzeilen der Spalten sich von den anderen Zellen abheben.

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

### Sortieren von Zeilen

Es gibt keine nativen Methoden zum Sortieren der Zeilen (`<tr>`-Elemente) eines {{HTMLElement("table")}}. Aber mithilfe von {{jsxref("Array.prototype.sort()")}}, [`Node.removeChild`](/de/docs/Web/API/Node/removeChild) und [`Node.appendChild`](/de/docs/Web/API/Node/appendChild) kann eine benutzerdefinierte `sort()`-Funktion in JavaScript implementiert werden, um eine [`HTMLCollection`](/de/docs/Web/API/HTMLCollection) von `<tr>`-Elementen zu sortieren.

#### HTML

Ein {{HTMLElement("tbody")}}-Element wird in dieser Basistabelle verwendet, um den Hauptbereich der Tabelle zu markieren und drei Zeilen (`<tr>`-Elemente) mit Daten ({{HTMLElement("td")}}-Elemente) einzuschließen, wodurch eine Spalte mit Zahlen in absteigender Reihenfolge erstellt wird.

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

Im unten stehenden JavaScript-Code ist die erstellte `sort()`-Funktion an das {{HTMLElement("tbody")}}-Element gekoppelt, damit die Tabellenspalten in der Reihenfolge steigender Werte sortiert und die Anzeige dementsprechend aktualisiert wird.

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

### Sortieren von Zeilen durch Klicken auf Headerzellen

Dieses Beispiel erweitert die einfache Tabelle aus dem [vorherigen Beispiel](#sortieren_von_zeilen), indem das Sortieren interaktiv und unabhängig für mehrere Spalten gemacht wird.

#### HTML

Eine zusätzliche Datenzelle ({{HTMLElement("td")}}-Element) wird jeder Zeile (`<tr>`-Element) innerhalb des Tabellenkörpers ({{HTMLElement("tbody")}}-Element) hinzugefügt, um eine zweite Spalte mit Buchstaben in aufsteigender Reihenfolge zu erstellen. Mithilfe des {{HTMLElement("thead")}}-Elements wird ein Kopfbereich vor dem Hauptbereich hinzugefügt, um eine Kopfzeile mit Tabellenheaderzellen ({{HTMLElement("th")}}-Element) vorzustellen. Diese Headerzellen werden im unten stehenden JavaScript-Code verwendet, um sie anklickbar zu machen und dann das entsprechende Sortieren beim Aktivieren pro Klick auszuführen.

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

Ein Klick-Ereignishandler wird an jeden Tabellenheader ({{HTMLElement("th")}}-Element) jeder {{HTMLElement("table")}} im [`document`](/de/docs/Web/API/HTMLDocument) hinzugefügt; es sortiert alle Zeilen (`<tr>`-Elemente) des {{HTMLElement("tbody")}} basierend auf dem Inhalt der Datenzellen ({{HTMLElement("td")}}-Elemente), die in den Zeilen enthalten sind.

> [!NOTE]
> Diese Lösung geht davon aus, dass die {{HTMLElement("td")}}-Elemente mit Rohtext ohne untergeordnete Elemente befüllt sind.

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
> Um benutzbar und zugänglich zu sein, muss die Headerzelle jeder sortierbaren Spalte als Sortierschaltfläche identifizierbar sein, und jede muss visuell und mit dem [`aria-sort`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-sort)-Attribut angeben, ob die Spalte aktuell aufsteigend oder absteigend sortiert ist. Siehe das [ARIA Authoring Practices Guide](https://www.w3.org/WAI/ARIA/apg/) [sortierbare Tabellenbeispiel](https://www.w3.org/WAI/ARIA/apg/patterns/table/examples/sortable-table/) für weitere Informationen.

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Guides/Content_categories"
          >Inhaltskategorien</a
        >
      </th>
      <td>Keine</td>
    </tr>
    <tr>
      <th scope="row">Zulässiger Inhalt</th>
      <td>
        Null oder mehr {{HTMLElement("td")}} und/oder
        {{HTMLElement("th")}}-Elemente;
        {{Glossary("script-supporting_element", "Skript-unterstützende Elemente")}}
        ({{HTMLElement("script")}} und
        {{HTMLElement("template")}}) sind ebenfalls erlaubt.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>
        Start-Tag ist obligatorisch. End-Tag kann weggelassen werden, wenn das
        <code>&lt;tr&gt;</code>-Element unmittelbar gefolgt wird von einem
        <code>&lt;tr&gt;</code>-Element oder wenn die Zeile das letzte Element
        in ihrem übergeordneten Tabellengruppe-Element ({{HTMLElement("thead")}},
        {{HTMLElement("tbody")}} oder {{HTMLElement("tfoot")}})
        ist.
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässige Eltern</th>
      <td>
        {{HTMLElement("table")}} (nur wenn die Tabelle keine untergeordneten
        {{HTMLElement("tbody")}}-Elemente hat und selbst dann nur nach allen
        {{HTMLElement("caption")}},
        {{HTMLElement("colgroup")}} und
        {{HTMLElement("thead")}}-Elementen); andernfalls muss der Elternteil
        ein {{HTMLElement("thead")}}, {{HTMLElement("tbody")}} oder
        {{HTMLElement("tfoot")}}-Element sein.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
      <td>
        <code
          ><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/row_role"
            >row</a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässige ARIA-Rollen</th>
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
- {{HTMLElement("caption")}}, {{HTMLElement("col")}}, {{HTMLElement("colgroup")}}, {{HTMLElement("table")}}, {{HTMLElement("tbody")}}, {{HTMLElement("td")}}, {{HTMLElement("tfoot")}}, {{HTMLElement("th")}}, {{HTMLElement("thead")}}: Andere tabellenbezogene Elemente
- {{cssxref("background-color")}}: CSS-Eigenschaft, um die Hintergrundfarbe jeder Zellreihe festzulegen
- {{cssxref("border")}}: CSS-Eigenschaft, um die Umrandungen der Zellreihen zu steuern
- {{cssxref("text-align")}}: CSS-Eigenschaft, um den Inhalt jeder Zellreihe horizontal zu alignieren
- {{cssxref("vertical-align")}}: CSS-Eigenschaft, um den Inhalt jeder Zellreihe vertikal zu alignieren
- {{cssxref(":nth-of-type")}}, {{cssxref(":first-of-type")}}, {{cssxref(":last-of-type")}}: CSS-Pseudoklassen, um die gewünschten Zellreihen auszuwählen
