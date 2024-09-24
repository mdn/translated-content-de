---
title: "<tr>: Das Tabellenzeilen-Element"
slug: Web/HTML/Element/tr
l10n:
  sourceCommit: 9231a7046973685f4600e1891fa644ecce41ef3b
---

{{HTMLSidebar}}

Das **`<tr>`**-Element [HTML](/de/docs/Web/HTML) definiert eine Zeile von Zellen in einer Tabelle. Die Zellen der Zeile können dann mit einer Mischung aus {{HTMLElement("td")}}- (Datenelement) und {{HTMLElement("th")}}- (Kopfelement) Elementen erstellt werden.

{{EmbedInteractiveExample("pages/tabbed/tr.html","tabbed-taller")}}

## Attribute

Dieses Element umfasst die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

### Veraltete Attribute

Die folgenden Attribute sind veraltet und sollten nicht verwendet werden. Sie sind unten dokumentiert, um beim Aktualisieren von bestehendem Code und aus reinem Interesse an der Historie hilfreich zu sein.

- `align` {{deprecated_inline}}

  - : Gibt die horizontale Ausrichtung jeder Zeilenzelle an. Die möglichen {{Glossary("enumerated")}} Werte sind `left`, `center`, `right`, `justify` und `char`. Wenn unterstützt, richtet der Wert `char` den Textinhalt auf dem im [`char`](#char)-Attribut definierten Zeichen und dem im [`charoff`](#charoff)-Attribut definierten Versatz aus. Verwenden Sie stattdessen die {{cssxref("text-align")}} CSS-Eigenschaft, da dieses Attribut veraltet ist.

- `bgcolor` {{deprecated_inline}}

  - : Definiert die Hintergrundfarbe jeder Zeilenzelle. Der Wert ist eine HTML-Farbe; entweder ein [6-stelliger hexadezimaler RGB-Code](/de/docs/Web/CSS/hex-color), vorangestellt mit einem '`#`', oder ein [Farb-Schlüsselwort](/de/docs/Web/CSS/named-color). Andere CSS {{cssxref("color_value", "&lt;color&gt")}} Werte werden nicht unterstützt. Verwenden Sie stattdessen die {{cssxref("background-color")}} CSS-Eigenschaft, da dieses Attribut veraltet ist.

- `char` {{deprecated_inline}}

  - : Gibt die Ausrichtung des Inhalts auf ein Zeichen jeder Zeilenzelle an. Typische Werte hierfür sind ein Punkt (`.`), wenn versucht wird, Zahlen oder Geldwerte auszurichten. Wenn [`align`](#align) nicht auf `char` gesetzt ist, wird dieses Attribut ignoriert.

- `charoff` {{deprecated_inline}}

  - : Gibt die Anzahl der Zeichen an, um die der Zellinhalt von dem im [`char`](#char)-Attribut angegebenen Ausrichtungszeichen aus versetzt werden soll.

- `valign` {{deprecated_inline}}

  - : Gibt die vertikale Ausrichtung jeder Zeilenzelle an. Die möglichen {{Glossary("enumerated")}} Werte sind `baseline`, `bottom`, `middle` und `top`. Verwenden Sie statt dessen die {{cssxref("vertical-align")}} CSS-Eigenschaft, da dieses Attribut veraltet ist.

## Nutzungshinweise

- Das `<tr>`-Element ist nur dann gültig als Kind eines {{HTMLElement("thead")}}, {{HTMLElement("tbody")}}, oder {{HTMLElement("tfoot")}} Elements.
- Wenn das `<tr>` direkt als Kind seines übergeordneten {{HTMLElement("table")}}-Elements platziert wird, ist das `<tbody>` übergeordnet impliziert und Browser werden das `<tbody>` zum Markup hinzufügen.
- Das implizierte `<tbody>` übergeordnet wird nur unterstützt, wenn die `<table>` sonst keine Kindelemente `<tbody>` hat und nur dann, wenn das `<tr>` nach allen {{HTMLElement("caption")}}, {{HTMLElement("colgroup")}} und `<thead>`-Elementen enthalten ist.
- Die CSS-Pseudoklassen {{cssxref(":nth-of-type")}}, {{cssxref(":first-of-type")}} und {{cssxref(":last-of-type")}} sind oft nützlich, um die gewünschte Menge an Zeilen und deren Daten- und Kopfzellen ({{HTMLElement("td")}}- und {{HTMLElement("th")}}-Elemente) auszuwählen.
- Wenn ein `<tr>` als direktes Kind der `<table>` enthalten ist, fügt der Browser ein `<tbody>` zum Markup hinzu, was dazu führen kann, dass CSS-Selektoren wie `table > tr` möglicherweise nicht wie erwartet oder überhaupt nicht funktionieren.

## Beispiele

Sehen Sie {{HTMLElement("table")}} für ein vollständiges Tabellenbeispiel, das gängige Standards und bewährte Praktiken einführt.

### Grundlegende Zeileneinrichtung

Dieses Beispiel demonstriert eine Tabelle mit vier Zeilen und drei Spalten, wobei die erste Spalte Kopfinhalte für die Zeilendatenzellen enthält.

#### HTML

Vier `<tr>`-Elemente werden verwendet, um vier Tabellenzeilen zu erstellen. Jede Zeile enthält drei Zellen - eine Kopfzelle ({{HTMLElement("th")}}) und zwei Datenzellen ({{HTMLElement("td")}}) - was drei Spalten erstellt. Das [`scope`](/de/docs/Web/HTML/Element/th#scope)-Attribut, das auf jede Kopfzelle gesetzt ist, gibt an, auf welche Zellen sie sich beziehen, was in diesem Beispiel alle Datenzellen innerhalb der `row` sind.

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

Die CSS-{{cssxref(":nth-of-type")}}-Pseudoklasse wird verwendet, um jede `odd`-Zeile auszuwählen und die {{cssxref("background-color")}}-Eigenschaft dieser Zeilen auf einen etwas dunkleren Ton zu setzen, wodurch ein sogenannter "Zebra-Streifen"-Effekt entsteht. Dieser abwechselnde Hintergrund erleichtert das Durchgehen und Lesen der Datenzeilen in der Tabelle—stellen Sie sich vor, Sie haben viele Zeilen und Spalten, und versuchen, einige Daten in einer bestimmten Zeile zu finden. Zusätzlich werden die Zeilenkopfzellen ({{HTMLElement("th")}}-Elemente) mit einer {{cssxref("background-color")}} hervorgehoben, um sie von den Datenzellen ({{HTMLElement("td")}}-Elementen) zu unterscheiden.

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

Dieses Beispiel erweitert die grundsätzliche Tabelle aus dem [vorherigen Beispiel](#grundlegende_zeileneinrichtung) durch das Hinzufügen einer Kopfzeile als erste Zeile der Tabelle.

#### HTML

Eine zusätzliche Tabellenzeile (`<tr>`) wird als erste Zeile der Tabelle mit Spaltenkopfzellen ({{HTMLElement("th")}}) hinzugefügt, die eine Kopfzeile für jede Spalte bereitstellen. Wir setzen diese Zeile in ein {{HTMLElement("thead")}} Gruppierungselement, um anzuzeigen, dass dies der Kopf der Tabelle ist. Das [`scope`](/de/docs/Web/HTML/Element/th#scope)-Attribut wird zu jeder Kopfzeile (`<th>`) innerhalb dieser Kopfzeile hinzugefügt, um explizit anzugeben, dass jede Kopfzelle sich auf alle Zellen innerhalb ihrer eigenen Spalte bezieht, auch wenn sich diese Zellen im {{HTMLElement("tbody")}} befinden.

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

Das CSS ist beinahe unverändert gegenüber dem [vorherigen Beispiel](#grundlegende_zeileneinrichtung), mit Ausnahme einiger zusätzlicher Stile, um die "Kopfzeile" hervorzuheben, sodass die Kopfzeilen der Spalten sich von den anderen Zellen abheben.

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

Es gibt keine nativen Methoden zum Sortieren der Zeilen (`<tr>`-Elemente) einer {{HTMLElement("table")}}. Aber durch die Verwendung von {{jsxref("Array.prototype.sort()")}}, {{domxref("Node.removeChild")}} und {{domxref("Node.appendChild")}} kann eine benutzerdefinierte `sort()`-Funktion in JavaScript implementiert werden, um eine {{domxref("HTMLCollection")}} von `<tr>`-Elementen zu sortieren.

#### HTML

Ein {{HTMLElement("tbody")}}-Element wird in dieser Basistabelle verwendet, um den Hauptteil der Tabelle zu kennzeichnen und drei Zeilen (`<tr>`-Elemente) mit Daten ({{HTMLElement("td")}}-Elemente) einzuschließen, wodurch eine Spalte mit Zahlen in absteigender Reihenfolge erstellt wird.

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

Im folgenden JavaScript-Code ist die erstellte `sort()`-Funktion an das {{HTMLElement("tbody")}}-Element angehängt, sodass es die Tabellenzellen in aufsteigender Reihenfolge sortiert und die Anzeige entsprechend aktualisiert.

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

Dieses Beispiel erweitert die grundlegende Tabelle aus dem [vorherigen Beispiel](#zeilen_sortieren), indem es die Sortierung interaktiv und unabhängig für mehrere Spalten macht.

#### HTML

Eine zusätzliche Datenzelle ({{HTMLElement("td")}}-Element) wird zu jeder Zeile (`<tr>`-Element) im Tabellenhauptteil ({{HTMLElement("tbody")}}-Element) hinzugefügt, um eine zweite Spalte mit Buchstaben in aufsteigender Reihenfolge zu erstellen. Mit dem {{HTMLElement("thead")}}-Element wird ein Kopfteil vor dem Hauptteil hinzugefügt, um eine Kopfzeile mit Tabellenkopfzellen ({{HTMLElement("th")}}-Element) einzuführen. Diese Kopfzellen werden im unten stehenden JavaScript verwendet, um sie anklickbar zu machen und die entsprechende Sortierung bei Betätigung durch einen Klick auszuführen.

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

Ein Klick-Ereignis-Handler wird zu jeder Tabellenkopfzelle ({{HTMLElement("th")}}-Element) jeder {{HTMLElement("table")}} im {{domxref("HTMLDocument", "document")}} hinzugefügt; er sortiert alle Zeilen (`<tr>`-Elemente) des {{HTMLElement("tbody")}} basierend auf dem Inhalt der Datenzellen ({{HTMLElement("td")}}-Elemente) innerhalb der Zeilen.

> [!NOTE]
> Diese Lösung setzt voraus, dass die {{HTMLElement("td")}}-Elemente durch Rohtext ohne nachgeordnete Elemente bevölkert sind.

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
> Um benutzbar und zugänglich zu sein, muss die Kopfzelle jeder sortierbaren Spalte als Sortierschalter identifizierbar sein und es muss visuell und mit dem [`aria-sort`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-sort) Attribut definiert sein, ob die Spalte derzeit in aufsteigender oder absteigender Reihenfolge sortiert ist. Siehe den [ARIA Authoring Practices Guide](https://www.w3.org/WAI/ARIA/apg/)'s [sortable table example](https://www.w3.org/WAI/ARIA/apg/patterns/table/examples/sortable-table/) für mehr Informationen.

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
        {{Glossary("script-supporting element", "script-supporting elements")}}
        ({{HTMLElement("script")}} und
        {{HTMLElement("template")}}) sind ebenfalls erlaubt.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>
        Start-Tag ist obligatorisch. End-Tag kann weggelassen werden, wenn das
        <code>&lt;tr&gt;</code> Element sofort von einem
        <code>&lt;tr&gt;</code> Element gefolgt wird oder wenn die Zeile das letzte Element
        in ihrer übergeordneten Tabellengruppe ({{HTMLElement("thead")}},
        {{HTMLElement("tbody")}} oder {{HTMLElement("tfoot")}})
        ist.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        {{HTMLElement("table")}} (nur, wenn die Tabelle kein Kindelement
        {{HTMLElement("tbody")}} hat, und auch dann nur nach allen
        {{HTMLElement("caption")}},
        {{HTMLElement("colgroup")}} und
        {{HTMLElement("thead")}} Elementen); andernfalls muss das Elternteil
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
      <td>{{DOMxRef("HTMLTableRowElement")}}</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- [Lernen: HTML Tabellen](/de/docs/Learn/HTML/Tables)
- {{HTMLElement("caption")}}, {{HTMLElement("col")}}, {{HTMLElement("colgroup")}}, {{HTMLElement("table")}}, {{HTMLElement("tbody")}}, {{HTMLElement("td")}}, {{HTMLElement("tfoot")}}, {{HTMLElement("th")}}, {{HTMLElement("thead")}}: Andere tabellenbezogene Elemente
- {{cssxref("background-color")}}: CSS-Eigenschaft zum Setzen der Hintergrundfarbe jeder Zeilenzelle
- {{cssxref("border")}}: CSS-Eigenschaft zur Steuerung der Ränder von Zeilenzellen
- {{cssxref("text-align")}}: CSS-Eigenschaft zur horizontalen Ausrichtung des Inhalts jeder Zeilenzelle
- {{cssxref("vertical-align")}}: CSS-Eigenschaft zur vertikalen Ausrichtung des Inhalts jeder Zeilenzelle
- {{cssxref(":nth-of-type")}}, {{cssxref(":first-of-type")}}, {{cssxref(":last-of-type")}}: CSS-Pseudoklassen zur Auswahl der gewünschten Zeilenzellen
