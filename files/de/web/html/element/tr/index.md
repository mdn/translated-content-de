---
title: "<tr>: Das Tabellenzeilen-Element"
slug: Web/HTML/Element/tr
l10n:
  sourceCommit: 8b02826c79b090b5af0d68ae1ef39f932a66a7f1
---

{{HTMLSidebar}}

Das **`<tr>`** [HTML](/de/docs/Web/HTML) Element definiert eine Reihe von Zellen in einer Tabelle. Die Zellen der Reihe können dann mit einer Mischung aus {{HTMLElement("td")}} (Datenzelle) und {{HTMLElement("th")}} (Headerzelle) Elementen eingerichtet werden.

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

Dieses Element umfasst die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

### Veraltete Attribute

Die folgenden Attribute sind veraltet und sollten nicht verwendet werden. Sie sind für Referenzen bei der Aktualisierung vorhandenen Codes und aus historischem Interesse nur dokumentiert.

- `align` {{deprecated_inline}}

  - : Gibt die horizontale Ausrichtung jeder Zeilenzelle an. Die möglichen {{Glossary("enumerated", "aufgezählten")}} Werte sind `left`, `center`, `right`, `justify` und `char`. Wenn unterstützt, richtet der Wert `char` den Textinhalt am im Attribut [`char`](#char) definierten Zeichen und am im Attribut [`charoff`](#charoff) definierten Versatz aus. Verwenden Sie stattdessen die {{cssxref("text-align")}} CSS-Eigenschaft, da dieses Attribut veraltet ist.

- `bgcolor` {{deprecated_inline}}

  - : Definiert die Hintergrundfarbe jeder Zeilenzelle. Der Wert ist eine HTML-Farbe; entweder ein [6-stelliger hexadezimaler RGB-Code](/de/docs/Web/CSS/hex-color), der mit einem `#` beginnt, oder ein [Farb-Schlüsselwort](/de/docs/Web/CSS/named-color). Andere CSS {{cssxref("color_value", "&lt;color&gt")}} Werte werden nicht unterstützt. Verwenden Sie stattdessen die {{cssxref("background-color")}} CSS-Eigenschaft, da dieses Attribut veraltet ist.

- `char` {{deprecated_inline}}

  - : Gibt die Ausrichtung des Inhalts an einem Charakter jeder Zeilenzelle an. Typische Werte hierfür sind ein Punkt (`.`), wenn versucht wird, Zahlen oder Geldbeträge auszurichten. Wenn [`align`](#align) nicht auf `char` gesetzt ist, wird dieses Attribut ignoriert.

- `charoff` {{deprecated_inline}}

  - : Gibt die Anzahl der Zeichen an, um den Inhalt der Zeilenzelle vom im Attribut [`char`](#char) angegebenen Ausrichtungszeichen zu versetzen.

- `valign` {{deprecated_inline}}

  - : Gibt die vertikale Ausrichtung jeder Zeilenzelle an. Die möglichen {{Glossary("enumerated", "aufgezählten")}} Werte sind `baseline`, `bottom`, `middle` und `top`. Verwenden Sie die {{cssxref("vertical-align")}} CSS-Eigenschaft anstelle dieses veralteten Attributs.

## Verwendungshinweise

- Das `<tr>` Element ist nur als Kind eines {{HTMLElement("thead")}}, {{HTMLElement("tbody")}} oder {{HTMLElement("tfoot")}} Elements gültig.
- Wenn das `<tr>` als direktes Kind seines übergeordneten {{HTMLElement("table")}} Elements platziert wird, wird das `<tbody>` übergeordnet impliziert, und Browser fügen das `<tbody>` zum Markup hinzu.
- Das implizierte `<tbody>` Elternteil wird nur unterstützt, wenn das `<table>` sonst keine untergeordneten `<tbody>` Elemente aufweist und nur, wenn das `<tr>` nach allen {{HTMLElement("caption")}}, {{HTMLElement("colgroup")}} und `<thead>` Elementen enthalten ist.
- Die CSS-Pseudoklassen {{cssxref(":nth-of-type")}}, {{cssxref(":first-of-type")}}, und {{cssxref(":last-of-type")}} sind oft nützlich, um die gewünschte Menge von Reihen und deren Daten- und Headerzellen ({{HTMLElement("td")}} und {{HTMLElement("th")}} Elemente) auszuwählen.
- Wenn ein `<tr>` als direktes Kind der `<table>` eingefügt wird, da der Browser ein `<tbody>` zum Markup hinzufügt, funktionieren CSS-Selektoren wie `table > tr` möglicherweise nicht wie erwartet oder überhaupt nicht.

## Beispiele

Sehen Sie sich {{HTMLElement("table")}} für ein komplettes Tabellenbeispiel an, das gängige Standards und bewährte Praktiken einführt.

### Grundlegende Zeilenkonfiguration

Dieses Beispiel zeigt eine Tabelle mit vier Zeilen und drei Spalten, wobei die erste Spalte Header für die Datenzellen der Zeile enthält.

#### HTML

Vier `<tr>`-Elemente werden verwendet, um vier Tabellenzeilen zu erstellen. Jede Zeile enthält drei Zellen - eine Headerzelle ({{HTMLElement("th")}}) und zwei Datenzellen ({{HTMLElement("td")}}) - wodurch drei Spalten geschaffen werden. Das [`scope`](/de/docs/Web/HTML/Element/th#scope) Attribut, das auf jede Headerzelle gesetzt ist, spezifiziert, auf welche Zellen sie sich beziehen, was in diesem Beispiel alle Datenzellen innerhalb der `row` sind.

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

Die CSS-{{cssxref(":nth-of-type")}} Pseudoklasse wird verwendet, um jede `ungerade` Zeile auszuwählen und die {{cssxref("background-color")}} dieser Zeilen auf einen etwas dunkleren Ton zu setzen, wodurch ein sogenannter „Zebrastreifen“-Effekt entsteht. Dieser wechselnde Hintergrund macht es leichter, die Datenzeilen in der Tabelle zu lesen—stellen Sie sich vor, viele Zeilen und Spalten zu haben und zu versuchen, einige Daten in einer bestimmten Zeile zu finden. Darüber hinaus werden die Headerzellen der Zeilen ({{HTMLElement("th")}} Elemente) mit einer {{cssxref("background-color")}} hervorgehoben, um sie von den Datenzellen ({{HTMLElement("td")}} Elemente) abzuheben.

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

### Headerzeile

Dieses Beispiel erweitert die grundlegende Tabelle aus dem [vorherigen Beispiel](#grundlegende_zeilenkonfiguration), indem eine Headerzeile als erste Zeile der Tabelle hinzugefügt wird.

#### HTML

Eine zusätzliche Tabellenzeile (`<tr>`) wird als erste Zeile der Tabelle mit Spaltenheaderzellen ({{HTMLElement("th")}}) hinzugefügt, die einen Header für jede Spalte bereitstellen. Wir setzen diese Zeile in ein {{HTMLElement("thead")}} Gruppierungselement, um anzuzeigen, dass es sich um den Header der Tabelle handelt. Das [`scope`](/de/docs/Web/HTML/Element/th#scope) Attribut wird jeder Headerzelle (`<th>`) innerhalb dieser Kopfzeile hinzugefügt, um explizit anzugeben, dass sich jede Headerzelle auf alle Zellen innerhalb ihrer eigenen Spalte bezieht, selbst wenn sich diese Zellen im {{HTMLElement("tbody")}} befinden.

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

Das CSS ist fast unverändert gegenüber dem [vorherigen Beispiel](#grundlegende_zeilenkonfiguration), mit Ausnahme einiger zusätzlicher Stiländerungen, um die „Headerzeile“ hervorzuheben, sodass die Header der Spalten von den anderen Zellen auffallen.

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

Es gibt keine nativen Methoden zum Sortieren der Zeilen (`<tr>` Elemente) eines {{HTMLElement("table")}}. Aber mit {{jsxref("Array.prototype.sort()")}}, [`Node.removeChild`](/de/docs/Web/API/Node/removeChild), und [`Node.appendChild`](/de/docs/Web/API/Node/appendChild), kann eine benutzerdefinierte `sort()` Funktion in JavaScript implementiert werden, um eine [`HTMLCollection`](/de/docs/Web/API/HTMLCollection) von `<tr>` Elementen zu sortieren.

#### HTML

Ein {{HTMLElement("tbody")}} Element wird in dieser einfachen Tabelle verwendet, um den Hauptteil der Tabelle zu markieren und drei Zeilen (`<tr>` Elemente) mit Daten ({{HTMLElement("td")}} Elemente) einzuschließen, die eine Spalte mit absteigenden Zahlen erstellt.

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

Im untenstehenden JavaScript wird die erstellte `sort()` Funktion an das {{HTMLElement("tbody")}} Element angehängt, sodass es die Tabellenzellen in der Reihenfolge des aufsteigenden Werts sortiert und dementsprechend die Darstellung aktualisiert.

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

Dieses Beispiel erweitert die Grundtabelle aus dem [vorherigen Beispiel](#sortieren_von_zeilen), indem das Sortieren interaktiv und unabhängig für mehrere Spalten gemacht wird.

#### HTML

Eine zusätzliche Datenzelle ({{HTMLElement("td")}} Element) wird jeder Zeile (`<tr>` Element) innerhalb des Tabellenkörpers ({{HTMLElement("tbody")}} Element) hinzugefügt, um eine zweite Spalte mit in aufsteigender Reihenfolge angeordneten Buchstaben zu erstellen. Mit dem {{HTMLElement("thead")}} Element wird vor dem Hauptteil ein Kopfteil eingeführt, um eine Kopfzeile mit Tabellen-Headerzellen ({{HTMLElement("th")}} Element) einzuführen. Diese Headerzellen werden im nachfolgenden JavaScript verwendet, um sie anklickbar zu machen und bei jedem Klick das entsprechende Sortieren durchzuführen.

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

Ein Klickereignishandler wird zu jeder Tabellen-Headerzelle ({{HTMLElement("th")}} Element) jeder {{HTMLElement("table")}} im [`Dokument`](/de/docs/Web/API/HTMLDocument) hinzugefügt; er sortiert alle Zeilen (`<tr>` Elemente) des {{HTMLElement("tbody")}} basierend auf dem Inhalt der Datenzellen ({{HTMLElement("td")}} Elemente), die in den Zeilen enthalten sind.

> [!NOTE]
> Diese Lösung setzt voraus, dass die {{HTMLElement("td")}} Elemente mit reinem Text ohne Nachkommenelemente befüllt sind.

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
> Um nutzbar und zugänglich zu sein, muss die Headerzelle jeder sortierbaren Spalte als Sortierbutton identifizierbar sein, und es muss sowohl visuell als auch mit dem [`aria-sort`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-sort) Attribut festgelegt werden, ob die Spalte derzeit in aufsteigender oder absteigender Reihenfolge sortiert ist. Siehe das [ARIA Authoring Practices Guide](https://www.w3.org/WAI/ARIA/apg/)'s [sortierbares Tabellenbeispiel](https://www.w3.org/WAI/ARIA/apg/patterns/table/examples/sortable-table/) für weitere Informationen.

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
      <th scope="row">Erlaubte Inhalte</th>
      <td>
        Null oder mehr {{HTMLElement("td")}} und/oder
        {{HTMLElement("th")}} Elemente;
        {{Glossary("script-supporting_element", "Skriptunterstützende Elemente")}}
        ({{HTMLElement("script")}} und
        {{HTMLElement("template")}}) sind ebenfalls erlaubt.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>
        Start-Tag ist erforderlich. Der End-Tag kann weggelassen werden, wenn das
        <code>&lt;tr&gt;</code> Element unmittelbar von einem
        <code>&lt;tr&gt;</code> Element gefolgt wird oder wenn die Zeile das letzte Element
        in ihrer übergeordneten Tabellengruppe ({{HTMLElement("thead")}},
        {{HTMLElement("tbody")}} oder {{HTMLElement("tfoot")}})
        ist.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        {{HTMLElement("table")}} (nur wenn die Tabelle kein untergeordnetes
        {{HTMLElement("tbody")}} Element hat, und selbst dann nur nach allen
        {{HTMLElement("caption")}},
        {{HTMLElement("colgroup")}}, und
        {{HTMLElement("thead")}} Elementen); andernfalls muss das übergeordnete Element
        ein {{HTMLElement("thead")}}, {{HTMLElement("tbody")}} oder
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

- [Lernen: HTML Tabellen-Grundlagen](/de/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics)
- {{HTMLElement("caption")}}, {{HTMLElement("col")}}, {{HTMLElement("colgroup")}}, {{HTMLElement("table")}}, {{HTMLElement("tbody")}}, {{HTMLElement("td")}}, {{HTMLElement("tfoot")}}, {{HTMLElement("th")}}, {{HTMLElement("thead")}}: Andere tabellenbezogene Elemente
- {{cssxref("background-color")}}: CSS-Eigenschaft zur Festlegung der Hintergrundfarbe jeder Zeilenzelle
- {{cssxref("border")}}: CSS-Eigenschaft zur Steuerung der Rahmen von Zeilenzellen
- {{cssxref("text-align")}}: CSS-Eigenschaft zur horizontalen Ausrichtung des Inhalts jeder Zeilenzelle
- {{cssxref("vertical-align")}}: CSS-Eigenschaft zur vertikalen Ausrichtung des Inhalts jeder Zeilenzelle
- {{cssxref(":nth-of-type")}}, {{cssxref(":first-of-type")}}, {{cssxref(":last-of-type")}}: CSS-Pseudoklassen zur Auswahl der gewünschten Zeilenzellen
