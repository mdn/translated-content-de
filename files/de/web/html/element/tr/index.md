---
title: "<tr>: Das Table Row Element"
slug: Web/HTML/Element/tr
l10n:
  sourceCommit: 5bd9fe2b25c6eee2a14d0406ce7116998fa48c13
---

{{HTMLSidebar}}

Das **`<tr>`** [HTML](/de/docs/Web/HTML)-Element definiert eine Zeile von Zellen in einer Tabelle. Die Zellen der Zeile können dann mithilfe einer Mischung aus {{HTMLElement("td")}} (Datenzelle) und {{HTMLElement("th")}} (Headerzelle) Elementen erstellt werden.

{{EmbedInteractiveExample("pages/tabbed/tr.html","tabbed-taller")}}

## Attribute

Dieses Element enthält die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

### Veraltete Attribute

Die folgenden Attribute sind veraltet und sollten nicht mehr verwendet werden. Sie sind hier nur zum Verweis bei der Aktualisierung von bestehendem Code und aus historischem Interesse dokumentiert.

- `align` {{deprecated_inline}}

  - : Gibt die horizontale Ausrichtung jeder Zeilenzelle an. Die möglichen {{Glossary("enumerated", "enumerierten")}} Werte sind `left`, `center`, `right`, `justify` und `char`. Wenn unterstützt, richtet der Wert `char` den Textinhalt auf dem im [`char`](#char)-Attribut definierten Zeichen und auf dem durch das [`charoff`](#charoff)-Attribut definierten Versatz aus. Verwenden Sie stattdessen die CSS-Eigenschaft {{cssxref("text-align")}}, da dieses Attribut veraltet ist.

- `bgcolor` {{deprecated_inline}}

  - : Definiert die Hintergrundfarbe jeder Zeilenzelle. Der Wert ist eine HTML-Farbe; entweder ein [6-stelliger hexadezimaler RGB-Code](/de/docs/Web/CSS/hex-color), der mit einem `#` versehen ist, oder ein [Farbschlüsselwort](/de/docs/Web/CSS/named-color). Andere CSS {{cssxref("color_value", "&lt;color&gt")}}-Werte werden nicht unterstützt. Verwenden Sie stattdessen die CSS-Eigenschaft {{cssxref("background-color")}}, da dieses Attribut veraltet ist.

- `char` {{deprecated_inline}}

  - : Gibt die Ausrichtung des Inhalts auf ein Zeichen jeder Zeilenzelle an. Typische Werte hierfür sind ein Punkt (`.`), wenn versucht wird, Zahlen oder Geldwerte auszurichten. Wenn [`align`](#align) nicht auf `char` gesetzt ist, wird dieses Attribut ignoriert.

- `charoff` {{deprecated_inline}}

  - : Gibt die Anzahl der Zeichen an, um die der Inhalt der Zeilenzelle vom Ausrichtungszeichen, das durch das [`char`](#char)-Attribut spezifiziert ist, verschoben wird.

- `valign` {{deprecated_inline}}

  - : Gibt die vertikale Ausrichtung jeder Zeilenzelle an. Die möglichen {{Glossary("enumerated", "enumerierten")}} Werte sind `baseline`, `bottom`, `middle` und `top`. Verwenden Sie stattdessen die CSS-Eigenschaft {{cssxref("vertical-align")}}, da dieses Attribut veraltet ist.

## Hinweise zur Verwendung

- Das `<tr>`-Element ist nur als Kind eines {{HTMLElement("thead")}}, {{HTMLElement("tbody")}} oder {{HTMLElement("tfoot")}}-Elements gültig.
- Wenn das `<tr>` als direktes Kind des übergeordneten {{HTMLElement("table")}}-Elements platziert wird, wird das übergeordnete `<tbody>` impliziert und Browser fügen das `<tbody>` in das Markup ein.
- Das implizierte `<tbody>` ist nur unterstützt, wenn das `<table>` ansonsten kein Kind-`<tbody>`-Element hat und nur, wenn das `<tr>` nach allen {{HTMLElement("caption")}}, {{HTMLElement("colgroup")}} und `<thead>`-Elementen enthalten ist.
- Die CSS-Pseudoklassen {{cssxref(":nth-of-type")}}, {{cssxref(":first-of-type")}} und {{cssxref(":last-of-type")}} sind oft nützlich, um die gewünschte Menge an Zeilen und deren Daten- und Headerzellen ({{HTMLElement("td")}} und {{HTMLElement("th")}}) auszuwählen.
- Wenn ein `<tr>` als direktes Kind des `<table>` enthalten ist, kann es sein, dass CSS-Selektoren wie `table > tr` nicht wie erwartet oder gar nicht funktionieren, da der Browser ein `<tbody>` in das Markup einfügt.

## Beispiele

Siehe {{HTMLElement("table")}} für ein vollständiges Tabellenbeispiel, das gängige Standards und bewährte Praktiken einführt.

### Grundlegende Zeileneinrichtung

Dieses Beispiel zeigt eine Tabelle mit vier Zeilen und drei Spalten, wobei die erste Spalte Header für die Zeilendatenzellen enthält.

#### HTML

Vier `<tr>`-Elemente werden verwendet, um vier Tabellenzeilen zu erstellen. Jede Zeile enthält drei Zellen - eine Headerzelle ({{HTMLElement("th")}}) und zwei Datenzellen ({{HTMLElement("td")}}) - und so werden drei Spalten erstellt. Das [`scope`](/de/docs/Web/HTML/Element/th#scope)-Attribut, das auf jede Headerzelle gesetzt ist, gibt an, auf welche Zellen sie sich beziehen, was in diesem Beispiel alle Datenzellen innerhalb der `row` sind.

```html
<table>
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
</table>
```

#### CSS

Die CSS-Pseudoklasse {{cssxref(":nth-of-type")}} wird verwendet, um jede `ungerade` Zeile auszuwählen und die {{cssxref("background-color")}} dieser Zeilen auf einen etwas dunkleren Ton zu setzen, was einen sogenannten "Zebra-Streifen"-Effekt erzeugt. Dieser wechselnde Hintergrund erleichtert es, die Datenzeilen in der Tabelle zu parsen und zu lesen - stellen Sie sich vor, Sie hätten viele Zeilen und Spalten und müssten versuchen, einige Daten in einer bestimmten Zeile zu finden. Darüber hinaus werden die Zeilen-Headerzellen ({{HTMLElement("th")}}-Elemente) durch eine {{cssxref("background-color")}} hervorgehoben, um sie von den Datenzellen ({{HTMLElement("td")}}-Elemente) zu unterscheiden.

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

Dieses Beispiel erweitert die grundlegende Tabelle aus dem [vorherigen Beispiel](#grundlegende_zeileneinrichtung) durch Hinzufügen einer Headerzeile als erste Zeile der Tabelle.

#### HTML

Eine zusätzliche Tabellenzeile (`<tr>`) wird als erste Zeile der Tabelle mit Spalten-Header-Zellen ({{HTMLElement("th")}}) hinzugefügt, die einen Header für jede Spalte bieten. Wir setzen diese Zeile in ein {{HTMLElement("thead")}}-Gruppierungselement, um anzuzeigen, dass dies der Header der Tabelle ist. Das [`scope`](/de/docs/Web/HTML/Element/th#scope)-Attribut wird zu jeder Header-Zelle (`<th>`) innerhalb dieser Kopfzeile hinzugefügt, um explizit anzugeben, dass sich jede Header-Zelle auf alle Zellen ihrer eigenen Spalte bezieht, auch wenn diese Zellen sich im {{HTMLElement("tbody")}} befinden.

```html
<table>
  <tr>
    <th scope="col">Symbol</th>
    <th scope="col">Code word</th>
    <th scope="col">Pronunciation</th>
  </tr>
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
</table>
```

#### CSS

Das CSS ist nahezu unverändert gegenüber dem [vorherigen Beispiel](#grundlegende_zeileneinrichtung), abgesehen von einigen zusätzlichen Stilen, um die "Headerzeile" hervorzuheben, sodass die Header der Spalten sich von den anderen Zellen abheben.

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

Es gibt keine nativen Methoden zum Sortieren der Zeilen (`<tr>`-Elemente) eines {{HTMLElement("table")}}. Aber mit der Verwendung von {{jsxref("Array.prototype.sort()")}}, [`Node.removeChild`](/de/docs/Web/API/Node/removeChild) und [`Node.appendChild`](/de/docs/Web/API/Node/appendChild) kann eine benutzerdefinierte `sort()`-Funktion in JavaScript implementiert werden, um eine [`HTMLCollection`](/de/docs/Web/API/HTMLCollection) von `<tr>`-Elementen zu sortieren.

#### HTML

Ein {{HTMLElement("tbody")}}-Element wird in dieser einfachen Tabelle verwendet, um den Körperbereich der Tabelle zu markieren und drei Zeilen (`<tr>`-Elemente) mit Daten ({{HTMLElement("td")}}-Elemente) einzuschließen, wodurch eine Spalte mit Zahlen in absteigender Reihenfolge erstellt wird.

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

Im unten stehenden JavaScript-Code wird die erstellte `sort()`-Funktion an das {{HTMLElement("tbody")}}-Element angehängt, sodass es die Tabellenzellen in aufsteigender Reihenfolge sortiert und die Anzeige entsprechend aktualisiert.

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

### Zeilen sortieren durch Klick auf Headerzellen

Dieses Beispiel erweitert die grundlegende Tabelle aus dem [vorherigen Beispiel](#zeilen_sortieren), indem das Sortieren interaktiv und unabhängig für mehrere Spalten wird.

#### HTML

Eine zusätzliche Datenzelle ({{HTMLElement("td")}}-Element) wird zu jeder Zeile (`<tr>`-Element) innerhalb des Tabellenkörpers ({{HTMLElement("tbody")}}-Element) hinzugefügt, um eine zweite Spalte mit Buchstaben in aufsteigender Reihenfolge zu erstellen. Mit dem {{HTMLElement("thead")}}-Element wird ein Kopfabschnitt vor dem Körperbereich hinzugefügt, um eine Kopfzeile mit Tabellenüberschriften-Zellen ({{HTMLElement("th")}}-Element) einzuführen. Diese Headerzellen werden im unten stehenden JavaScript-Code verwendet, um sie anklickbar zu machen und dann das entsprechende Sortieren auszuführen, wenn sie per Klick aktiviert werden.

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

Ein Klick-Ereignishandler wird zu jeder Tabellenüberschrift ({{HTMLElement("th")}}-Element) jedes {{HTMLElement("table")}} im [`document`](/de/docs/Web/API/HTMLDocument) hinzugefügt; er sortiert alle Zeilen (`<tr>`-Elemente) des {{HTMLElement("tbody")}} basierend auf den Inhalten der Datenzellen ({{HTMLElement("td")}}-Elemente) in den Zeilen.

> [!NOTE]
> Diese Lösung geht davon aus, dass die {{HTMLElement("td")}}-Elemente mit Rohtext ohne Nachkommende Elemente gefüllt sind.

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
> Um benutzbar und zugänglich zu sein, muss die Header-Zelle jeder sortierbaren Spalte als Sortierknopf identifizierbar sein und jede muss sowohl visuell als auch mit dem [`aria-sort`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-sort)-Attribut angeben, ob die Spalte derzeit in aufsteigender oder absteigender Reihenfolge sortiert ist. Weitere Informationen finden Sie im [ARIA Authoring Practices Guide](https://www.w3.org/WAI/ARIA/apg/)'s [sortable table example](https://www.w3.org/WAI/ARIA/apg/patterns/table/examples/sortable-table/).

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
        {{HTMLElement("th")}}-Elemente;
        {{Glossary("script-supporting_element", "script-unterstützende Elemente")}}
        ({{HTMLElement("script")}} und
        {{HTMLElement("template")}}) sind ebenfalls erlaubt.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>
        Starttag ist obligatorisch. Endtag kann ausgelassen werden, wenn das
        <code>&lt;tr&gt;</code>-Element unmittelbar von einem anderen
        <code>&lt;tr&gt;</code>-Element gefolgt wird oder wenn die Zeile das letzte Element
        im übergeordneten Tabellengruppenelement ({{HTMLElement("thead")}},
        {{HTMLElement("tbody")}} oder {{HTMLElement("tfoot")}})
        ist.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        {{HTMLElement("table")}} (nur wenn die Tabelle kein Kind
        {{HTMLElement("tbody")}}-Element hat und selbst dann nur nach allen
        {{HTMLElement("caption")}},
        {{HTMLElement("colgroup")}} und
        {{HTMLElement("thead")}}-Elementen); ansonsten muss das übergeordnete Element
        ein {{HTMLElement("thead")}}, {{HTMLElement("tbody")}} oder
        {{HTMLElement("tfoot")}}-Element sein.
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

- [Lernen: HTML Tabellen](/de/docs/Learn/HTML/Tables)
- {{HTMLElement("caption")}}, {{HTMLElement("col")}}, {{HTMLElement("colgroup")}}, {{HTMLElement("table")}}, {{HTMLElement("tbody")}}, {{HTMLElement("td")}}, {{HTMLElement("tfoot")}}, {{HTMLElement("th")}}, {{HTMLElement("thead")}}: Weitere tabellenbezogene Elemente
- {{cssxref("background-color")}}: CSS-Eigenschaft, um die Hintergrundfarbe jeder Zeilenzelle zu setzen
- {{cssxref("border")}}: CSS-Eigenschaft, um die Ränder von Zeilenzellen zu kontrollieren
- {{cssxref("text-align")}}: CSS-Eigenschaft, um den Inhalt jeder Zeilenzelle horizontal auszurichten
- {{cssxref("vertical-align")}}: CSS-Eigenschaft, um den Inhalt jeder Zeilenzelle vertikal auszurichten
- {{cssxref(":nth-of-type")}}, {{cssxref(":first-of-type")}}, {{cssxref(":last-of-type")}}: CSS-Pseudoklassen, um die gewünschte Menge an Zeilenzellen auszuwählen
