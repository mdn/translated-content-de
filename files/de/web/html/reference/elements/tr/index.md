---
title: "<tr>: Das Table Row-Element"
slug: Web/HTML/Reference/Elements/tr
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar}}

Das **`<tr>`** [HTML](/de/docs/Web/HTML) Element definiert eine Zeile von Zellen in einer Tabelle. Die Zellen der Zeile können dann durch eine Mischung von {{HTMLElement("td")}} (Datenzelle) und {{HTMLElement("th")}} (Header-Zelle) Elementen festgelegt werden.

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

Die folgenden Attribute sind veraltet und sollten nicht verwendet werden. Sie sind unten zur Referenzierung beim Aktualisieren des vorhandenen Codes und aus historischem Interesse dokumentiert.

- `align` {{deprecated_inline}}

  - : Gibt die horizontale Ausrichtung jeder Zeilenzelle an. Die möglichen {{Glossary("enumerated", "enumerierten")}} Werte sind `left`, `center`, `right`, `justify` und `char`. Wenn unterstützt, richtet der `char`-Wert den Textinhalt am Zeichen aus, das im [`char`](#char) Attribut definiert ist und am Offset, das durch das [`charoff`](#charoff) Attribut definiert wird. Verwenden Sie stattdessen die {{cssxref("text-align")}} CSS-Eigenschaft, da dieses Attribut veraltet ist.

- `bgcolor` {{deprecated_inline}}

  - : Definiert die Hintergrundfarbe jeder Zeilenzelle. Der Wert ist eine HTML-Farbe; entweder ein [6-stelliger hexadezimaler RGB-Code](/de/docs/Web/CSS/hex-color), mit einem `#` vorangestellt, oder ein [Farbschlüsselwort](/de/docs/Web/CSS/named-color). Andere CSS {{cssxref("color_value", "&lt;color&gt")}} Werte werden nicht unterstützt. Verwenden Sie stattdessen die {{cssxref("background-color")}} CSS-Eigenschaft, da dieses Attribut veraltet ist.

- `char` {{deprecated_inline}}

  - : Gibt die Ausrichtung des Inhalts an einem Zeichen jeder Zeilenzelle an. Typische Werte hierfür sind ein Punkt (`.`), wenn versucht wird, Zahlen oder Geldwerte auszurichten. Wird [`align`](#align) nicht auf `char` gesetzt, wird dieses Attribut ignoriert.

- `charoff` {{deprecated_inline}}

  - : Gibt die Anzahl der Zeichen an, um die der Inhalt der Zeilenzelle vom Ausrichtungszeichen, das durch das [`char`](#char) Attribut spezifiziert ist, versetzt wird.

- `valign` {{deprecated_inline}}

  - : Gibt die vertikale Ausrichtung jeder Zeilenzelle an. Die möglichen {{Glossary("enumerated", "enumerierten")}} Werte sind `baseline`, `bottom`, `middle` und `top`. Verwenden Sie stattdessen die {{cssxref("vertical-align")}} CSS-Eigenschaft, da dieses Attribut veraltet ist.

## Nutzungshinweise

- Das `<tr>`-Element ist nur als Kind eines {{HTMLElement("thead")}}, {{HTMLElement("tbody")}} oder {{HTMLElement("tfoot")}} -Elements gültig.
- Wenn `<tr>` als direktes Kind seines Parent-{{HTMLElement("table")}}-Elements platziert wird, wird das `<tbody>`-Parent impliziert und Browser fügen das `<tbody>` dem Markup hinzu.
- Das implizite `<tbody>`-Parent wird nur unterstützt, wenn das `<table>` sonst keine Kind-`<tbody>`-Elemente hat und nur, wenn das `<tr>` nach allen {{HTMLElement("caption")}}, {{HTMLElement("colgroup")}} und `<thead>`-Elementen enthalten ist.
- Die CSS-Pseudoklassen {{cssxref(":nth-of-type")}}, {{cssxref(":first-of-type")}}, und {{cssxref(":last-of-type")}} sind oft hilfreich, um die gewünschte Reihe von Zeilen und deren Daten- und Headerzellen ({{HTMLElement("td")}} und {{HTMLElement("th")}} Elemente) auszuwählen.
- Wenn ein `<tr>` als direktes Kind des `<table>` aufgenommen wird, fügt der Browser dem Markup ein `<tbody>` hinzu. CSS-Selektoren wie `table > tr` funktionieren dann möglicherweise nicht wie erwartet oder überhaupt nicht.

## Beispiele

Siehe {{HTMLElement("table")}} für ein vollständiges Tabellenbeispiel, das gängige Standards und bewährte Verfahren einführt.

### Basiszeileneinrichtung

Dieses Beispiel zeigt eine Tabelle mit vier Zeilen und drei Spalten, wobei die erste Spalte Überschriften für die Zeilendatenzellen enthält.

#### HTML

Vier `<tr>`-Elemente werden verwendet, um vier Tabellenzeilen zu erstellen. Jede Zeile enthält drei Zellen - eine Header-Zelle ({{HTMLElement("th")}}) und zwei Datenzellen ({{HTMLElement("td")}}) - was drei Spalten erstellt. Das [`scope`](/de/docs/Web/HTML/Reference/Elements/th#scope)-Attribut, das auf jeder Header-Zelle gesetzt ist, gibt an, auf welche Zellen sie sich beziehen, was in diesem Beispiel alle Datenzellen innerhalb der `row` sind.

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

Die CSS {{cssxref(":nth-of-type")}} Pseudoklasse wird verwendet, um jede `ungerade` Zeile auszuwählen und die {{cssxref("background-color")}} dieser Zeilen auf einen etwas dunkleren Ton zu setzen, um einen sogenannten "Zebra-Streifen"-Effekt zu erzeugen. Dieser wechselnde Hintergrund erleichtert das Durchsuchen und Lesen der Datenreihen in der Tabelle - stellen Sie sich vor, Sie haben viele Zeilen und Spalten und versuchen, einige Daten in einer bestimmten Zeile zu finden. Darüber hinaus werden die Zeilenheaderzellen ({{HTMLElement("th")}} Elemente) mit {{cssxref("background-color")}} hervorgehoben, um sie von den Datenzellen ({{HTMLElement("td")}} Elemente) zu unterscheiden.

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

Dieses Beispiel erweitert die grundlegende Tabelle aus dem [vorherigen Beispiel](#basiszeileneinrichtung) durch das Hinzufügen einer Header-Zeile als erste Zeile der Tabelle.

#### HTML

Eine zusätzliche Tabellenzeile (`<tr>`) wird als erste Zeile der Tabelle hinzugefügt, die Spaltenheaderzellen ({{HTMLElement("th")}}) bereitstellt, die einen Header für jede Spalte bieten. Wir platzieren diese Zeile in einem {{HTMLElement("thead")}} Gruppierungselement, um anzuzeigen, dass dies der Header der Tabelle ist. Das [`scope`](/de/docs/Web/HTML/Reference/Elements/th#scope) -Attribut wird zu jeder Header-Zelle (`<th>`) innerhalb dieser Header-Zeile hinzugefügt, um explizit anzugeben, dass sich jede Header-Zelle auf alle Zellen innerhalb ihrer eigenen Spalte bezieht, auch wenn diese Zellen sich im {{HTMLElement("tbody")}} befinden.

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

Das CSS ist fast unverändert gegenüber dem [vorherigen Beispiel](#basiszeileneinrichtung), mit Ausnahme einiger zusätzlicher Stile, um die "Header-Zeile" hervorzuheben, so dass die Header der Spalten sich von den anderen Zellen abheben.

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

Es gibt keine nativen Methoden zum Sortieren der Zeilen (`<tr>` Elemente) eines {{HTMLElement("table")}}. Aber mit {{jsxref("Array.prototype.sort()")}}, [`Node.removeChild`](/de/docs/Web/API/Node/removeChild), und [`Node.appendChild`](/de/docs/Web/API/Node/appendChild) kann eine benutzerdefinierte `sort()` Funktion in JavaScript implementiert werden, um eine [`HTMLCollection`](/de/docs/Web/API/HTMLCollection) von `<tr>`-Elementen zu sortieren.

#### HTML

Ein {{HTMLElement("tbody")}} Element wird in dieser Basis-Tabelle verwendet, um den Body-Abschnitt der Tabelle zu markieren und drei Zeilen (`<tr>` Elemente) mit Daten ({{HTMLElement("td")}} Elemente) einzuschließen, was eine Spalte mit Zahlen in absteigender Reihenfolge erstellt.

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

Im unten stehenden JavaScript-Code wird die erstellte `sort()`-Funktion dem {{HTMLElement("tbody")}} Element zugeordnet, so dass es die Tabellenzellen nach Wert aufsteigend sortiert und die Anzeige entsprechend aktualisiert.

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

### Zeilen mit einem Klick auf Headerzellen sortieren

Dieses Beispiel erweitert die grundlegende Tabelle aus dem [vorherigen Beispiel](#zeilen_sortieren), indem es das Sortieren interaktiv und unabhängig für mehrere Spalten ermöglicht.

#### HTML

Eine zusätzliche Datenzelle ({{HTMLElement("td")}} Element) wird jeder Zeile (`<tr>` Element) innerhalb des Tabellenkörpers ({{HTMLElement("tbody")}} Element) hinzugefügt, um eine zweite Spalte mit Buchstaben in aufsteigender Reihenfolge zu erstellen. Mit dem {{HTMLElement("thead")}}-Element wird ein Kopfabschnitt vor dem Körperabschnitt hinzugefügt, um eine Kopfzeile mit Tabellenheaderzellen ({{HTMLElement("th")}} Element) einzuführen. Diese Headerzellen werden im unten stehenden JavaScript-Code verwendet, um sie anklickbar zu machen und dann die entsprechende Sortierung beim Aktivieren per Klick durchzuführen.

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

Ein Klick-Ereignis-Handler wird jedem Tabellenheader ({{HTMLElement("th")}} Element) jeder {{HTMLElement("table")}} im [`document`](/de/docs/Web/API/HTMLDocument) hinzugefügt; es sortiert alle Zeilen (`<tr>`-Elemente) des {{HTMLElement("tbody")}} basierend auf den Inhalten der Datenzellen ({{HTMLElement("td")}} Elemente) in den Zeilen.

> [!NOTE]
> Diese Lösung geht davon aus, dass die {{HTMLElement("td")}}-Elemente durch Rohtext ohne Nachfahrenelemente gefüllt sind.

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
> Um benutzbar und zugänglich zu sein, muss die Headerzelle jeder sortierbaren Spalte als Sortierbutton identifizierbar sein, und jede muss definieren, ob die Spalte derzeit in aufsteigender oder absteigender Reihenfolge sortiert ist, visuell und mit dem [`aria-sort`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-sort)-Attribut. Weitere Informationen finden Sie im [ARIA Authoring Practices Guide](https://www.w3.org/WAI/ARIA/apg/)'s [sortable table example](https://www.w3.org/WAI/ARIA/apg/patterns/table/examples/sortable-table/).

## Technische Übersicht

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
        {{Glossary("script-supporting_element", "skriptunterstützende Elemente")}}
        ({{HTMLElement("script")}} und
        {{HTMLElement("template")}}) sind ebenfalls erlaubt.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag Auslassung</th>
      <td>
        Start-Tag ist obligatorisch. End-Tag kann weggelassen werden, wenn das
        <code>&lt;tr&gt;</code>-Element unmittelbar von einem
        <code>&lt;tr&gt;</code>-Element gefolgt wird oder wenn die Zeile das letzte Element
        in ihrem übergeordneten Tabellengruppen-Element ({{HTMLElement("thead")}},
        {{HTMLElement("tbody")}} oder {{HTMLElement("tfoot")}})
        Element ist.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        {{HTMLElement("table")}} (nur wenn die Tabelle kein Kind
        {{HTMLElement("tbody")}} Element hat und selbst dann nur nach allen
        {{HTMLElement("caption")}},
        {{HTMLElement("colgroup")}}, und
        {{HTMLElement("thead")}} Elementen); ansonsten muss das Elternteil
        ein {{HTMLElement("thead")}}, {{HTMLElement("tbody")}} oder
        {{HTMLElement("tfoot")}} Element sein.
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

- [Lernen: HTML Tabellen Grundlagen](/de/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics)
- {{HTMLElement("caption")}}, {{HTMLElement("col")}}, {{HTMLElement("colgroup")}}, {{HTMLElement("table")}}, {{HTMLElement("tbody")}}, {{HTMLElement("td")}}, {{HTMLElement("tfoot")}}, {{HTMLElement("th")}}, {{HTMLElement("thead")}}: Andere table-bezogene Elemente
- {{cssxref("background-color")}}: CSS-Eigenschaft, um die Hintergrundfarbe jeder Zeilenzelle festzulegen
- {{cssxref("border")}}: CSS-Eigenschaft zur Kontrolle der Ränder von Zeilenzellen
- {{cssxref("text-align")}}: CSS-Eigenschaft, um den Inhalt jeder Zeilenzelle horizontal auszurichten
- {{cssxref("vertical-align")}}: CSS-Eigenschaft, um den Inhalt jeder Zeilenzelle vertikal auszurichten
- {{cssxref(":nth-of-type")}}, {{cssxref(":first-of-type")}}, {{cssxref(":last-of-type")}}: CSS-Pseudoklassen, um die gewünschten Zeilenzellen auszuwählen
