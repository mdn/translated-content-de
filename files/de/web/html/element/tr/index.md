---
title: "<tr>: Das Table Row-Element"
slug: Web/HTML/Element/tr
l10n:
  sourceCommit: 5bd9fe2b25c6eee2a14d0406ce7116998fa48c13
---

{{HTMLSidebar}}

Das **`<tr>`** [HTML](/de/docs/Web/HTML)-Element definiert eine Zeile von Zellen in einer Tabelle. Die Zellen der Zeile können dann durch eine Mischung aus {{HTMLElement("td")}} (Datenzelle) und {{HTMLElement("th")}} (Kopfzelle) Elementen erstellt werden.

{{EmbedInteractiveExample("pages/tabbed/tr.html","tabbed-taller")}}

## Attribute

Dieses Element umfasst die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

### Veraltete Attribute

Die folgenden Attribute sind veraltet und sollten nicht verwendet werden. Sie sind unten zur Referenz dokumentiert, wenn vorhandener Code aktualisiert wird, und nur aus historischem Interesse.

- `align` {{deprecated_inline}}

  - : Gibt die horizontale Ausrichtung jeder Zellenzeile an. Die möglichen [enumerierten](/de/docs/Glossary/enumerated) Werte sind `left`, `center`, `right`, `justify` und `char`. Wenn unterstützt, richtet der `char`-Wert den Textinhalt auf dem Zeichen aus, das im [`char`](#char)-Attribut definiert ist, und auf dem Offset, das durch das [`charoff`](#charoff)-Attribut definiert ist. Verwenden Sie stattdessen die {{cssxref("text-align")}}-CSS-Eigenschaft, da dieses Attribut veraltet ist.

- `bgcolor` {{deprecated_inline}}

  - : Definiert die Hintergrundfarbe jeder Zellenzeile. Der Wert ist eine HTML-Farbe; entweder ein [6-stelliger hexadezimaler RGB-Code](/de/docs/Web/CSS/hex-color), der mit einem `#` versehen ist, oder ein [Farb-Keyword](/de/docs/Web/CSS/named-color). Andere CSS-{{cssxref("color_value", "&lt;color&gt")}}-Werte werden nicht unterstützt. Verwenden Sie stattdessen die {{cssxref("background-color")}}-CSS-Eigenschaft, da dieses Attribut veraltet ist.

- `char` {{deprecated_inline}}

  - : Gibt die Ausrichtung des Inhalts an einem Zeichen jeder Zellenzeile an. Typische Werte hierfür sind ein Punkt (`.`) bei dem Versuch, Zahlen oder Geldwerte auszurichten. Wenn [`align`](#align) nicht auf `char` gesetzt ist, wird dieses Attribut ignoriert.

- `charoff` {{deprecated_inline}}

  - : Gibt die Anzahl der Zeichen an, die der Zellinhalt von dem durch das [`char`](#char)-Attribut angegebenen Ausrichtungszeichen versetzt ist.

- `valign` {{deprecated_inline}}

  - : Gibt die vertikale Ausrichtung jeder Zellenzeile an. Die möglichen [enumerierten](/de/docs/Glossary/enumerated) Werte sind `baseline`, `bottom`, `middle` und `top`. Verwenden Sie stattdessen die {{cssxref("vertical-align")}}-CSS-Eigenschaft, da dieses Attribut veraltet ist.

## Verwendungshinweise

- Das `<tr>`-Element ist nur als Kind eines {{HTMLElement("thead")}}, {{HTMLElement("tbody")}} oder {{HTMLElement("tfoot")}}-Elements gültig.
- Wenn das `<tr>` direkt als Kind seines Elternelements {{HTMLElement("table")}} platziert wird, wird das `<tbody>`-Elternelement impliziert und Browser fügen das `<tbody>` dem Markup hinzu.
- Das implizierte `<tbody>`-Elternelement wird nur unterstützt, wenn die `<table>` ansonsten keine Kind-`<tbody>`-Elemente hat und nur, wenn das `<tr>` nach allen {{HTMLElement("caption")}}, {{HTMLElement("colgroup")}} und `<thead>`-Elementen eingefügt wird.
- Die CSS-Pseudoklassen {{cssxref(":nth-of-type")}}, {{cssxref(":first-of-type")}} und {{cssxref(":last-of-type")}} sind häufig nützlich, um die gewünschte Menge an Zeilen und deren Daten- und Kopfzellen ({{HTMLElement("td")}} und {{HTMLElement("th")}} Elemente) auszuwählen.
- Wenn ein `<tr>` direkt als Kind der `<table>` eingefügt wird, da der Browser ein `<tbody>` zum Markup hinzufügt, funktionieren CSS-Selektoren wie `table > tr` möglicherweise nicht erwartungsgemäß oder überhaupt nicht.

## Beispiele

Sehen Sie {{HTMLElement("table")}} für ein vollständiges Tabellenbeispiel, das gängige Standards und bewährte Praktiken einführt.

### Grundlegendes Zeilen-Setup

Dieses Beispiel demonstriert eine Tabelle mit vier Zeilen und drei Spalten, wobei die erste Spalte Kopfzeilen für die Zeilendatenzellen enthält.

#### HTML

Vier `<tr>`-Elemente werden verwendet, um vier Tabellenzeilen zu erstellen. Jede Zeile enthält drei Zellen - eine Kopfzelle ({{HTMLElement("th")}}) und zwei Datenzellen ({{HTMLElement("td")}}) -, wodurch drei Spalten entstehen. Das [`scope`](/de/docs/Web/HTML/Element/th#scope)-Attribut, das auf jeder Kopfzelle gesetzt wird, gibt an, auf welche Zellen sie sich beziehen, was in diesem Beispiel alle Datenzellen innerhalb der `row` sind.

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

Die CSS-{{cssxref(":nth-of-type")}}-Pseudoklasse wird verwendet, um jede `ungerade` Zeile auszuwählen und die {{cssxref("background-color")}} dieser Zeilen auf einen etwas dunkleren Ton zu setzen, wodurch der sogenannte "Zebra-Streifen"-Effekt entsteht. Dieser abwechselnde Hintergrund macht es einfacher, die Datenzeilen in der Tabelle zu parsen und zu lesen — stellen Sie sich vor, Sie hätten viele Zeilen und Spalten und müssten einige Daten in einer bestimmten Zeile finden. Darüber hinaus werden die Kopfzeilen der Zeilen ({{HTMLElement("th")}}-Elemente) mit einer {{cssxref("background-color")}} hervorgehoben, um sie von den Datenzellen ({{HTMLElement("td")}}-Elementen) zu unterscheiden.

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

Dieses Beispiel erweitert die Basistabelle aus dem [vorherigen Beispiel](#grundlegendes_zeilen-setup), indem eine Kopfzeile als erste Zeile der Tabelle hinzugefügt wird.

#### HTML

Eine zusätzliche Tabellenzeile (`<tr>`) wird als erste Zeile der Tabelle mit Spaltenkopfzeilen ({{HTMLElement("th")}}) hinzugefügt, die eine Überschrift für jede Spalte bieten. Wir platzieren diese Zeile in einem {{HTMLElement("thead")}}-Gruppierungselement, um anzuzeigen, dass dies die Kopfzeile der Tabelle ist. Das [`scope`](/de/docs/Web/HTML/Element/th#scope)-Attribut wird zu jeder Kopfzelle (`<th>`) in dieser Kopfzeile hinzugefügt, um ausdrücklich festzulegen, dass sich jede Kopfzelle auf alle Zellen in ihrer eigenen Spalte bezieht, auch wenn diese Zellen im {{HTMLElement("tbody")}} sind.

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

Das CSS ist fast unverändert gegenüber dem [vorherigen Beispiel](#grundlegendes_zeilen-setup), außer dass einige zusätzliche Stile hinzugefügt wurden, um die "Kopfzeile" hervorzuheben, damit die Kopfzeilen der Spalten sich von den anderen Zellen abheben.

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

Es gibt keine nativen Methoden zum Sortieren der Zeilen (`<tr>`-Elemente) einer {{HTMLElement("table")}}. Aber mit {{jsxref("Array.prototype.sort()")}}, [`Node.removeChild`](/de/docs/Web/API/Node/removeChild) und [`Node.appendChild`](/de/docs/Web/API/Node/appendChild) kann eine benutzerdefinierte `sort()`-Funktion in JavaScript implementiert werden, um eine [`HTMLCollection`](/de/docs/Web/API/HTMLCollection) von `<tr>`-Elementen zu sortieren.

#### HTML

Ein {{HTMLElement("tbody")}}-Element wird in dieser grundlegenden Tabelle verwendet, um den Körperabschnitt der Tabelle zu markieren und drei Zeilen (`<tr>`-Elemente) mit Daten ({{HTMLElement("td")}}-Elemente) zu inkludieren, wodurch eine Spalte mit Zahlen in absteigender Reihenfolge erstellt wird.

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

Im folgenden JavaScript-Code wird die erstellte `sort()`-Funktion dem {{HTMLElement("tbody")}}-Element zugeordnet, sodass es die Tabellenzellen in aufsteigender Reihenfolge sortiert und die Anzeige entsprechend aktualisiert.

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

### Zeilen sortieren mit Klick auf Kopfzellen

Dieses Beispiel erweitert die Basistabelle aus dem [vorherigen Beispiel](#zeilen_sortieren), indem das Sortieren interaktiv und unabhängig für mehrere Spalten gemacht wird.

#### HTML

Eine zusätzliche Datenzelle ({{HTMLElement("td")}}-Element) wird zu jeder Zeile (`<tr>`-Element) innerhalb des Tabellenkörpers ({{HTMLElement("tbody")}}-Element) hinzugefügt, um eine zweite Spalte mit Buchstaben in aufsteigender Reihenfolge zu erstellen. Mit dem {{HTMLElement("thead")}}-Element wird ein Kopfabschnitt vor dem Körperabschnitt hinzugefügt, um eine Kopfzeile mit Tabellenkopfzeilen ({{HTMLElement("th")}}-Element) einzuführen. Diese Kopfzeilen werden im untenstehenden JavaScript-Code verwendet, um sie anklickbar zu machen und dann das entsprechende Sortieren bei Aktivierung pro Klick durchzuführen.

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

Ein Klickereignishandler wird zu jeder Tabellenkopfzeile ({{HTMLElement("th")}}-Element) jeder {{HTMLElement("table")}} im [`document`](/de/docs/Web/API/HTMLDocument) hinzugefügt. Er sortiert alle Zeilen (`<tr>`-Elemente) des {{HTMLElement("tbody")}} basierend auf den Inhalten der Datenzellen ({{HTMLElement("td")}}-Elemente), die in den Zeilen enthalten sind.

> [!NOTE]
> Diese Lösung setzt voraus, dass die {{HTMLElement("td")}}-Elemente mit einfachem Text ohne Nachkommenelemente gefüllt sind.

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
> Um benutzbar und zugänglich zu sein, muss die Kopfzelle jeder sortierbaren Spalte als Sortierknopf identifizierbar sein und jede muss visuell und mit dem [`aria-sort`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-sort)-Attribut definieren, ob die Spalte derzeit in aufsteigender oder absteigender Reihenfolge sortiert ist. Siehe das [ARIA Authoring Practices Guide](https://www.w3.org/WAI/ARIA/apg/)'s [sortierbare Tabellenbeispiel](https://www.w3.org/WAI/ARIA/apg/patterns/table/examples/sortable-table/) für weitere Informationen.

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
      <th scope="row">Zulässiger Inhalt</th>
      <td>
        Null oder mehr {{HTMLElement("td")}}- und/oder
        {{HTMLElement("th")}}-Elemente;
        [skriptunterstützende Elemente](/de/docs/Glossary/script-supporting_element)
        ({{HTMLElement("script")}} und
        {{HTMLElement("template")}}) sind ebenfalls erlaubt.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>
        Start-Tag ist obligatorisch. End-Tag kann weggelassen werden, wenn das
        <code>&lt;tr&gt;</code>-Element unmittelbar von einem weiteren
        <code>&lt;tr&gt;</code>-Element gefolgt wird oder wenn die Zeile das letzte
        Element in ihrer übergeordneten Tabelle ist
        ({{HTMLElement("thead")}},
        {{HTMLElement("tbody")}} oder {{HTMLElement("tfoot")}})
        Element ist.
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässige Eltern</th>
      <td>
        {{HTMLElement("table")}} (nur wenn die Tabelle kein
        {{HTMLElement("tbody")}}-Element als Kind hat, und selbst dann nur nach
        allen {{HTMLElement("caption")}},
        {{HTMLElement("colgroup")}} und
        {{HTMLElement("thead")}}-Elementen); sonst muss das Elternteil
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
      <th scope="row">Zulässige ARIA-Rollen</th>
      <td>Jede</td>
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

- [Lernen: HTML-Tabellen](/de/docs/Learn/HTML/Tables)
- {{HTMLElement("caption")}}, {{HTMLElement("col")}}, {{HTMLElement("colgroup")}}, {{HTMLElement("table")}}, {{HTMLElement("tbody")}}, {{HTMLElement("td")}}, {{HTMLElement("tfoot")}}, {{HTMLElement("th")}}, {{HTMLElement("thead")}}: Andere tabellenbezogene Elemente
- {{cssxref("background-color")}}: CSS-Eigenschaft zur Festlegung der Hintergrundfarbe jeder Zellenzeile
- {{cssxref("border")}}: CSS-Eigenschaft zur Steuerung der Rahmen von Zellenzeilen
- {{cssxref("text-align")}}: CSS-Eigenschaft zur horizontalen Ausrichtung des Inhalts jeder Zellenzeile
- {{cssxref("vertical-align")}}: CSS-Eigenschaft zur vertikalen Ausrichtung des Inhalts jeder Zellenzeile
- {{cssxref(":nth-of-type")}}, {{cssxref(":first-of-type")}}, {{cssxref(":last-of-type")}}: CSS-Pseudoklassen zur Auswahl der gewünschten Zellenzeilen
