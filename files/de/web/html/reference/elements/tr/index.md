---
title: "<tr>: Das Tabellenzeilen-Element"
slug: Web/HTML/Reference/Elements/tr
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

Das **`<tr>`** [HTML](/de/docs/Web/HTML)-Element definiert eine Zeile von Zellen in einer Tabelle. Die Zellen der Zeile können dann mit einer Mischung aus {{HTMLElement("td")}} (Datenzelle) und {{HTMLElement("th")}} (Header-Zelle) Elementen erstellt werden.

{{InteractiveExample("HTML Demo: &lt;tr&gt;", "tabbed-taller")}}

```html interactive-example
<table>
  <caption>
    Alien football stars
  </caption>
  <thead>
    <tr>
      <th scope="col">Player</th>
      <th scope="col">Gloobles</th>
      <th scope="col">Za'taak</th>
    </tr>
  </thead>
  <tbody>
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
  </tbody>
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
  color: white;
}

th[scope="row"] {
  background-color: #d6ecd4;
}

td {
  text-align: center;
}

tr:nth-of-type(even) {
  background-color: #eeeeee;
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

Die folgenden Attribute sind veraltet und sollten nicht verwendet werden. Sie sind hier zur Referenzierung bei der Aktualisierung bestehenden Codes und nur aus historischem Interesse dokumentiert.

- `align` {{deprecated_inline}}
  - : Gibt die horizontale Ausrichtung jeder Zeile an. Die möglichen {{Glossary("enumerated", "enumerierten")}} Werte sind `left`, `center`, `right`, `justify` und `char`. Wenn unterstützt, wird der `char`-Wert verwendet, um den Textinhalt an dem im [`char`](#char) Attribut definierten Zeichen und dem im [`charoff`](#charoff) Attribut definierten Offset auszurichten. Verwenden Sie stattdessen die {{cssxref("text-align")}} CSS-Eigenschaft, da dieses Attribut veraltet ist.

- `bgcolor` {{deprecated_inline}}
  - : Definiert die Hintergrundfarbe jeder Zeile. Der Wert ist eine HTML-Farbe; entweder ein [6-stelliger hexadezimaler RGB-Code](/de/docs/Web/CSS/Reference/Values/hex-color), mit einem `#` vorangestellt, oder ein [Farb-Schlüsselwort](/de/docs/Web/CSS/Reference/Values/named-color). Andere CSS {{cssxref("color_value", "&lt;color&gt;")}} Werte werden nicht unterstützt. Verwenden Sie stattdessen die {{cssxref("background-color")}} CSS-Eigenschaft, da dieses Attribut veraltet ist.

- `char` {{deprecated_inline}}
  - : Gibt die Ausrichtung des Inhalts an ein Zeichen jeder Zeile an. Typische Werte hierfür beinhalten einen Punkt (`.`), wenn versucht wird, Zahlen oder Währungswerte auszurichten. Wenn [`align`](#align) nicht auf `char` gesetzt ist, wird dieses Attribut ignoriert.

- `charoff` {{deprecated_inline}}
  - : Gibt die Anzahl der Zeichen an, um welche der Zeileninhalt vom Ausrichtungszeichen, das durch das [`char`](#char) Attribut spezifiziert ist, versetzt wird.

- `valign` {{deprecated_inline}}
  - : Gibt die vertikale Ausrichtung jeder Zeile an. Die möglichen {{Glossary("enumerated", "enumerierten")}} Werte sind `baseline`, `bottom`, `middle` und `top`. Verwenden Sie stattdessen die {{cssxref("vertical-align")}} CSS-Eigenschaft, da dieses Attribut veraltet ist.

## Nutzungshinweise

- Das `<tr>`-Element ist nur als Kind eines {{HTMLElement("thead")}}, {{HTMLElement("tbody")}}, oder {{HTMLElement("tfoot")}} Elements gültig.
- Wenn `<tr>` als direktes Kind des übergeordneten {{HTMLElement("table")}} Elements platziert wird, wird das `<tbody>`-Elternelement impliziert und Browser fügen das `<tbody>` dem Markup hinzu.
- Das implizierte `<tbody>` Elternteil wird nur unterstützt, wenn die `<table>` sonst keine Kinder `<tbody>`-Elemente hat und nur wenn `<tr>` nach allen {{HTMLElement("caption")}}, {{HTMLElement("colgroup")}}, und `<thead>` Elementen enthalten ist.
- Die CSS-Pseudoklassen {{cssxref(":nth-of-type")}}, {{cssxref(":first-of-type")}}, und {{cssxref(":last-of-type")}} sind oft nützlich, um den gewünschten Satz von Reihen und deren Daten- und Kopfzellen ({{HTMLElement("td")}} und {{HTMLElement("th")}} Elemente) zu selektieren.
- Wenn ein `<tr>` als direktes Kind der `<table>` eingefügt wird, da der Browser ein `<tbody>` zum Markup hinzufügt, funktionieren CSS-Selektoren wie `table > tr` möglicherweise nicht wie erwartet oder überhaupt nicht.

## Beispiele

Siehe {{HTMLElement("table")}} für ein vollständiges Tabellenbeispiel, das allgemeine Standards und Best Practices einführt.

### Grundlegendes Zeilen-Setup

Dieses Beispiel zeigt eine Tabelle mit vier Zeilen und drei Spalten, wobei die erste Spalte Header für die Zeilendatenzellen enthält.

#### HTML

Vier `<tr>` Elemente werden verwendet, um vier Tabellenreihen zu erstellen. Jede Zeile enthält drei Zellen - eine Header-Zelle ({{HTMLElement("th")}}) und zwei Datenzellen ({{HTMLElement("td")}}) - und bildet drei Spalten. Das [`scope`](/de/docs/Web/HTML/Reference/Elements/th#scope) Attribut, das auf jede Header-Zelle gesetzt ist, spezifiziert, auf welche Zellen sie sich beziehen, was in diesem Beispiel alle Datenzellen innerhalb der `row` sind.

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

Die CSS-Pseudoklasse {{cssxref(":nth-of-type")}} wird verwendet, um jede `ungerade` Zeile auszuwählen und die {{cssxref("background-color")}} dieser Zeilen auf einen leicht dunkleren Ton zu setzen, wodurch ein sogenannter „Zebra-Streifen“-Effekt entsteht. Dieser wechselnde Hintergrund erleichtert das Lesen der Zeilen in der Tabelle - stellen Sie sich vor, Sie haben viele Zeilen und Spalten und versuchen, einige Daten in einer bestimmten Zeile zu finden. Darüber hinaus sind die Header-Zellen der Zeilen ({{HTMLElement("th")}} Elemente) mit einer {{cssxref("background-color")}} hervorgehoben, um sie von den Datenzellen ({{HTMLElement("td")}} Elemente) zu unterscheiden.

```css
tr:nth-of-type(odd) {
  background-color: #eeeeee;
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

Dieses Beispiel erweitert die Basistabelle aus dem [vorherigen Beispiel](#grundlegendes_zeilen-setup) durch Hinzufügen einer Kopfzeile als erste Zeile der Tabelle.

#### HTML

Eine zusätzliche Tabellenzeile (`<tr>`) wird als erste Zeile der Tabelle mit Spaltenkopfzellen ({{HTMLElement("th")}}) hinzugefügt, die eine Kopfzeile für jede Spalte bereitstellen. Wir platzieren diese Zeile in einem {{HTMLElement("thead")}} Gruppierungselement, um anzuzeigen, dass dies die Kopfzeile der Tabelle ist. Das [`scope`](/de/docs/Web/HTML/Reference/Elements/th#scope) Attribut wird jeder Kopfzeile (`<th>`) in dieser Kopfzeile hinzugefügt, um explizit anzugeben, dass jede Kopfzeile sich auf alle Zellen innerhalb ihrer eigenen Spalte bezieht, auch wenn sich diese Zellen im {{HTMLElement("tbody")}} befinden.

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

Das CSS ist nahezu unverändert gegenüber dem [vorherigen Beispiel](#grundlegendes_zeilen-setup), abgesehen von einer zusätzlichen Gestaltung, um die „Kopfzeile“ hervorzuheben, sodass die Spaltenköpfe sich von den anderen Zellen abheben.

```css
tr:nth-of-type(odd) {
  background-color: #eeeeee;
}

tr th[scope="col"] {
  background-color: #505050;
  color: white;
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

Es gibt keine nativen Methoden zum Sortieren der Zeilen (`<tr>`-Elemente) eines {{HTMLElement("table")}}. Aber mit {{jsxref("Array.prototype.sort()")}}, [`Node.removeChild`](/de/docs/Web/API/Node/removeChild) und [`Node.appendChild`](/de/docs/Web/API/Node/appendChild) kann eine benutzerdefinierte `sort()` Funktion in JavaScript implementiert werden, um eine [`HTMLCollection`](/de/docs/Web/API/HTMLCollection) von `<tr>`-Elementen zu sortieren.

#### HTML

Ein {{HTMLElement("tbody")}} Element wird in dieser Basistabelle verwendet, um den Körperabschnitt der Tabelle zu markieren und um drei Zeilen (`<tr>`-Elemente) mit Daten ({{HTMLElement("td")}} Elemente) einzuschließen, wobei eine Spalte mit Zahlen in absteigender Reihenfolge erstellt wird.

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

Im unten stehenden JavaScript-Code wird die erstellte `sort()` Funktion an das {{HTMLElement("tbody")}}-Element angehängt, sodass es die Tabellenzellen in aufsteigender Reihenfolge sortiert und die Anzeige entsprechend aktualisiert.

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

### Zeilen sortieren mit einem Klick auf Kopfzellen

Dieses Beispiel erweitert die Basistabelle aus dem [vorherigen Beispiel](#zeilen_sortieren) durch die Möglichkeit, die Sortierung interaktiv und unabhängig für mehrere Spalten zu gestalten.

#### HTML

Eine zusätzliche Datenzelle ({{HTMLElement("td")}} Element) wird jeder Zeile (`<tr>` Element) innerhalb des Tabellenkörpers ({{HTMLElement("tbody")}} Element) hinzugefügt, um eine zweite Spalte mit Buchstaben in aufsteigender Reihenfolge zu erstellen. Unter Verwendung des {{HTMLElement("thead")}} Elements wird ein Kopfabschnitt vor dem Körperabschnitt hinzugefügt, um eine Kopfzeile mit Tabellenkopfzellen ({{HTMLElement("th")}} Element) einzuführen. Diese Kopfzellen werden im unten stehenden JavaScript-Code verwendet, um sie anklickbar zu machen und dann beim Klick die entsprechende Sortierung durchzuführen.

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

Ein Klick-Ereignishandler wird jedem Tabellenkopf ({{HTMLElement("th")}} Element) jedes {{HTMLElement("table")}} im [`document`](/de/docs/Web/API/HTMLDocument) hinzugefügt; er sortiert alle Zeilen (`<tr>`-Elemente) des {{HTMLElement("tbody")}} basierend auf dem Inhalt der Datenzellen ({{HTMLElement("td")}} Elemente), die in den Zeilen enthalten sind.

> [!NOTE]
> Diese Lösung geht davon aus, dass die {{HTMLElement("td")}} Elemente durch reinen Text ohne untergeordnete Elemente befüllt werden.

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
  color: white;
  cursor: pointer;
}
```

#### Ergebnis

{{EmbedLiveSample('Sorting_rows_with_a_click_on_header_cells', '650', '100')}}

> [!NOTE]
> Um benutzbar und zugänglich zu sein, muss die Kopfzelle jeder sortierbaren Spalte als Sortierknopf identifizierbar sein und jede muss optisch und mit dem [`aria-sort`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-sort) Attribut definieren, ob die Spalte derzeit in aufsteigender oder absteigender Reihenfolge sortiert ist. Siehe das [ARIA Authoring Practices Guide](https://www.w3.org/WAI/ARIA/apg/)'s [sortable table example](https://www.w3.org/WAI/ARIA/apg/patterns/table/examples/sortable-table/) für mehr Informationen.

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
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        Null oder mehr {{HTMLElement("td")}} und/oder
        {{HTMLElement("th")}} Elemente;
        {{Glossary("script-supporting_element", "script-supporting elements")}}
        ({{HTMLElement("script")}} und
        {{HTMLElement("template")}}) sind ebenfalls erlaubt.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>
        Start-Tag ist obligatorisch. End-Tag kann ausgelassen werden, wenn das
        <code>&lt;tr&gt;</code> Element unmittelbar von einem
        <code>&lt;tr&gt;</code> Element gefolgt wird, oder wenn die Zeile das letzte Element
        in ihrem übergeordneten Tabellen-Element ({{HTMLElement("thead")}},
        {{HTMLElement("tbody")}} oder {{HTMLElement("tfoot")}})
        ist.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Elternteile</th>
      <td>
        {{HTMLElement("table")}} (nur, wenn die Tabelle kein Kind
        {{HTMLElement("tbody")}} Element hat, und selbst dann nur nach jedem
        {{HTMLElement("caption")}},
        {{HTMLElement("colgroup")}}, und
        {{HTMLElement("thead")}} Element); ansonsten muss der Elternteil
        ein {{HTMLElement("thead")}}, {{HTMLElement("tbody")}} oder
        {{HTMLElement("tfoot")}} Element sein.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <code
          ><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/row_role"
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

- [Lernen: HTML-Tabellen Grundlagen](/de/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics)
- {{HTMLElement("caption")}}, {{HTMLElement("col")}}, {{HTMLElement("colgroup")}}, {{HTMLElement("table")}}, {{HTMLElement("tbody")}}, {{HTMLElement("td")}}, {{HTMLElement("tfoot")}}, {{HTMLElement("th")}}, {{HTMLElement("thead")}}: Andere tabellenbezogene Elemente
- {{cssxref("background-color")}}: CSS-Eigenschaft zur Einstellung der Hintergrundfarbe jeder Zeile
- {{cssxref("border")}}: CSS-Eigenschaft zur Steuerung der Ränder der Zeilen
- {{cssxref("text-align")}}: CSS-Eigenschaft zur horizontalen Ausrichtung des Inhalts jeder Zeile
- {{cssxref("vertical-align")}}: CSS-Eigenschaft zur vertikalen Ausrichtung des Inhalts jeder Zeile
- {{cssxref(":nth-of-type")}}, {{cssxref(":first-of-type")}}, {{cssxref(":last-of-type")}}: CSS-Pseudoklassen, um die gewünschten Zellen auszuwählen
