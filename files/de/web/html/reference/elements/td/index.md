---
title: "<td>: Das Table Data Cell-Element"
slug: Web/HTML/Reference/Elements/td
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar}}

Das **`<td>`** [HTML](/de/docs/Web/HTML) Element definiert eine Zelle einer Tabelle, die Daten enthält und als Kind des {{HTMLElement("tr")}} Elements verwendet werden kann.

{{InteractiveExample("HTML Demo: &lt;td&gt;", "tabbed-taller")}}

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

- `colspan`
  - : Enthält einen nicht-negativen Ganzzahlwert, der angibt, wie viele Spalten die Datenzelle überspannt oder erweitert. Der Standardwert ist `1`. Benutzeragenten verwerfen Werte größer als 1000 als falsch und setzen den Wert auf den Standardwert (`1`).
- `headers`
  - : Enthält eine Liste von durch Leerzeichen getrennten Zeichenfolgen, die jeweils dem `id`-Attribut der {{HTMLElement("th")}} Elemente entsprechen, die Überschriften für diese Tabellenzelle bereitstellen.
- `rowspan`
  - : Enthält einen nicht-negativen Ganzzahlwert, der angibt, wie viele Zeilen die Datenzelle überspannt oder erweitert. Der Standardwert ist `1`; wenn der Wert auf `0` gesetzt ist, erstreckt er sich bis zum Ende des Tabellenabschnitts ({{HTMLElement("thead")}}, {{HTMLElement("tbody")}}, {{HTMLElement("tfoot")}}, auch bei impliziter Definition), zu dem die Zelle gehört. Werte größer als `65534` werden auf `65534` begrenzt.

### Veraltete Attribute

Die folgenden Attribute sind veraltet und sollten nicht verwendet werden. Sie sind hier zu Referenzzwecken bei der Aktualisierung von bestehendem Code und aus historischem Interesse dokumentiert.

- `abbr` {{deprecated_inline}}

  - : Enthält eine kurze, abgekürzte Beschreibung des Inhalts der Datenzelle. Einige Benutzeragenten, wie beispielsweise Screenreader, können diese Beschreibung vor dem eigentlichen Inhalt präsentieren. Platzieren Sie den abgekürzten Inhalt innerhalb der Zelle und die (längere) Beschreibung im [`title`](/de/docs/Web/HTML/Reference/Global_attributes/title)-Attribut, da dieses Attribut veraltet ist. Oder besser, integrieren Sie den Inhalt innerhalb der Datenzelle und verwenden Sie CSS, um den überlaufenden Text [visuell zu kürzen](/de/docs/Web/CSS/text-overflow).

- `align` {{deprecated_inline}}

  - : Gibt die horizontale Ausrichtung der Datenzelle an. Die möglichen {{Glossary("enumerated", "aufzählbaren")}} Werte sind `left`, `center`, `right`, `justify` und `char`. Wenn unterstützt, richtet der `char`-Wert den Textinhalt am Zeichen aus, das im [`char`](#char)-Attribut definiert ist, und am Offset, das durch das [`charoff`](#charoff)-Attribut festgelegt wird. Verwenden Sie stattdessen die {{cssxref("text-align")}} CSS-Eigenschaft, da dieses Attribut veraltet ist.

- `axis` {{deprecated_inline}}

  - : Enthält eine Liste von durch Leerzeichen getrennten Zeichenfolgen, die jeweils dem `id`-Attribut einer Gruppe von Zellen entsprechen, auf die die Datenzelle zutrifft.

- `bgcolor` {{deprecated_inline}}

  - : Definiert die Hintergrundfarbe der Datenzelle. Der Wert ist eine HTML-Farbe; entweder ein [6-stelliger hexadezimaler RGB-Code](/de/docs/Web/CSS/hex-color), mit einem `#` vorangestellt, oder ein [Farb-Schlüsselwort](/de/docs/Web/CSS/named-color). Andere CSS {{cssxref("color_value", "&lt;color&gt")}} Werte werden nicht unterstützt. Verwenden Sie stattdessen die {{cssxref("background-color")}} CSS-Eigenschaft, da dieses Attribut veraltet ist.

- `char` {{deprecated_inline}}

  - : Hat keine Funktion. Es war ursprünglich dazu gedacht, die Ausrichtung des Inhalts an einem Zeichen der Datenzelle zu spezifizieren. Typische Werte dafür sind ein Punkt (`.`), wenn man versucht, Zahlen oder Geldbeträge auszurichten. Wenn [`align`](#align) nicht auf `char` gesetzt ist, wird dieses Attribut ignoriert.

- `charoff` {{deprecated_inline}}

  - : Hat keine Funktion. Es war ursprünglich dazu gedacht, die Anzahl der Zeichen zu spezifizieren, um die der Inhalt der Datenzelle vom Ausrichtungszeichen, das durch das [`char`](#char)-Attribut festgelegt wird, versetzt ist.

- `height` {{deprecated_inline}}

  - : Definiert eine empfohlene Höhe der Datenzelle. Verwenden Sie stattdessen die {{cssxref("height")}} CSS-Eigenschaft, da dieses Attribut veraltet ist.

- `scope` {{deprecated_inline}}

  - : Definiert die Zellen, auf die sich die Überschrift (definiert im {{HTMLElement("th")}}) -Element bezieht. Die möglichen {{Glossary("enumerated", "aufzählbaren")}} Werte sind `row`, `col`, `rowgroup` und `colgroup`. Verwenden Sie dieses Attribut nur mit dem {{HTMLElement("th")}}-Element, um die Zeile oder Spalte zu definieren, für die es eine Überschrift ist, da dieses Attribut für das `<td>`-Element veraltet ist.

- `valign` {{deprecated_inline}}

  - : Gibt die vertikale Ausrichtung der Datenzelle an. Die möglichen {{Glossary("enumerated", "aufzählbaren")}} Werte sind `baseline`, `bottom`, `middle` und `top`. Verwenden Sie stattdessen die {{cssxref("vertical-align")}} CSS-Eigenschaft, da dieses Attribut veraltet ist.

- `width` {{deprecated_inline}}

  - : Definiert eine empfohlene Breite der Datenzelle. Verwenden Sie stattdessen die {{cssxref("width")}} CSS-Eigenschaft, da dieses Attribut veraltet ist.

## Verwendungsnotizen

- Das `<td>`-Element darf nur innerhalb eines {{HTMLElement("tr")}}-Elements verwendet werden.
- Wenn die [`colspan`](#colspan)- und [`rowspan`](#rowspan)-Attribute verwendet werden, um Datenzellen über mehrere Spalten und Zeilen zu überspannen, werden Zellen ohne diese Attribute (mit einem Standardwert von `1`) automatisch in die frei verfügbaren Räume in der Tabellenstruktur eingefügt, die 1x1 Zellen überspannen, wie in der folgenden Abbildung dargestellt:

  ![Illustration, die zeigt, wie Spalten- und Zeilenüberspannung in Tabellenzellen funktioniert: Zellen 1, 3 und 4 überspannen zwei Zeilen; Zelle 2 überspannt zwei Spalten; Zellen 5 und 6 passen in die verfügbaren Zellen, die die zweite und dritte Spalte in der zweiten Zeile sind](column-row-span.png)

  > [!NOTE]
  > Diese Attribute dürfen nicht verwendet werden, um Zellen zu überlappen.

## Beispiele

Siehe {{HTMLElement("table")}} für ein vollständiges Tabellenbeispiel mit allgemeinen Standards und Best Practices.

### Grundlegende Datenzellen

Dieses Beispiel verwendet `<td>`-Elemente zusammen mit anderen tabellenbezogenen Elementen, um eine einfache Tabelle mit Daten über das phonetische Alphabet vorzustellen.

#### HTML

Einige Tabellenspalten ({{HTMLElement("tr")}}-Elemente) enthalten sowohl Header-Zellen ({{HTMLElement("th")}}-Elemente) als auch Datenzellenelemente `<td>`. Das {{HTMLElement("th")}}-Element, das das erste Kind jeder Zeile ist, bildet die erste Spalte der Tabelle, wobei jedes `<th>` die Zeilenüberschrift für die Datenzellen innerhalb dieser Zeile bereitstellt. Jedes entsprechende `<td>`-Element enthält Daten, die mit seiner jeweiligen Spaltenüberschrift und Zeilenüberschrift übereinstimmen.

> [!NOTE]
> Normalerweise würde eine Tabellenkopfgruppe mit Spaltenüberschriften implementiert werden, um das Verständnis der Informationen in den Spalten zu erleichtern. Die {{HTMLElement("thead")}}- und {{HTMLElement("tbody")}}-Elemente würden verwendet, um solche Überschriftenreihen und Daten in die entsprechenden Tabellenkopf- und Körperabschnitte zu gruppieren. Dies ist in diesem Beispiel nicht implementiert, um den Fokus auf die Datenzellen zu legen und die Komplexität dieses Beispiels zu reduzieren.

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

Ein grundlegendes CSS wird verwendet, um die Tabelle und ihre Zellen zu gestalten. CSS-[Attributselektoren](/de/docs/Web/CSS/Attribute_selectors) und die {{cssxref(":nth-of-type")}} Pseudo-Klasse werden verwendet, um das Erscheinungsbild der Zellen abzuwechseln, um die Informationen in der Tabelle leichter verständlich und erkennbar zu machen.

```css
td,
th {
  border: 1px solid rgb(160 160 160);
  padding: 8px 10px;
}

tr:nth-of-type(odd) td {
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
```

#### Ergebnis

{{EmbedLiveSample("Basic_data_cells", 650, 140)}}

### Spalten- und Zeilenüberspannung

Dieses Beispiel erweitert und verbessert die Basistabelle aus dem [vorherigen Beispiel](#grundlegende_datenzellen) durch Hinzufügen einer zusätzlichen „ABC“-Zelle.

#### HTML

Eine zusätzliche Datenzelle (`<td>`-Element) wird in der ersten Zeile ({{HTMLElement("tr")}}-Element) eingeführt. Dies schafft eine vierte Spalte in der Tabelle.

Mit dem [`rowspan`](#rowspan)-Attribut wird die „ABC“-Zelle über die ersten drei Zeilen der Tabelle hinweg überspannt. Die letzten Datenzellen der nachfolgenden Zeilen überspannen jeweils zwei Spalten. Dies geschieht mit dem [`colspan`](#colspan)-Attribut und sie werden korrekt innerhalb der Tabellenstruktur ausgerichtet. Beachten Sie, dass eine zusätzliche Zeile ({{HTMLElement("tr")}}-Element) zur Tabelle hinzugefügt wird, um dies zu veranschaulichen.

```html
<table>
  <tr>
    <th scope="row">A</th>
    <td>Alfa</td>
    <td>AL fah</td>
    <td rowspan="3">ABC</td>
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
    <td colspan="2">DELL tah</td>
  </tr>
  <tr>
    <th scope="row">E</th>
    <td>Echo</td>
    <td colspan="2">ECK oh</td>
  </tr>
</table>
```

#### CSS

Die {{cssxref(":first-of-type")}} und {{cssxref(":last-of-type")}} Pseudo-Klassen werden im CSS verwendet, um die hinzugefügte „ABC“-Datenzelle auszuwählen und zu gestalten.

```css
tr:first-of-type td:last-of-type {
  width: 60px;
  background-color: #505050;
  color: #fff;
  font-weight: bold;
  text-align: center;
}

td,
th {
  border: 1px solid rgb(160 160 160);
  padding: 8px 10px;
}

tr:nth-of-type(odd) td {
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
```

#### Ergebnis

{{EmbedLiveSample("Column_and_row_spanning", 650, 170)}}

### Datenzellen mit Header-Zellen verknüpfen

Für komplexere Beziehungen zwischen Datenzellen (`<td>`-Elemente) und Header-Zellen ({{HTMLElement("th")}}-Elemente) kann die Verwendung von {{HTMLElement("th")}}-Elementen mit dem [`scope`](/de/docs/Web/HTML/Reference/Elements/th#scope)-Attribut allein für unterstützende Technologien, insbesondere Screenreader, möglicherweise nicht ausreichend sein.

#### HTML

Um die {{Glossary("accessibility", "Barrierefreiheit")}} des [vorherigen Beispiels](#spalten-_und_zeilenüberspannung) zu verbessern und es beispielsweise Screenreadern zu ermöglichen, die mit jeder Datenzelle assoziierten Überschriften vorzulesen, kann das [`headers`](#headers)-Attribut zusammen mit [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id)-Attributen eingeführt werden. Jede Zeilenüberschriftzelle ({{HTMLElement("th")}}-Element), die der „ABC“-Datenzelle zugeordnet ist, d.h. die Buchstaben „A“, „B“ und „C“, erhält mit dem [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id)-Attribut einen eindeutigen Bezeichner. Die „ABC“-Datenzelle (`<td>`-Element) verwendet dann diese `id`-Werte in einer durch Leerzeichen getrennten Liste für das [`headers`](#headers)-Attribut.

> [!NOTE]
> Es wird empfohlen, aussagekräftigere und nützlichere Werte für das [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id)-Attribut zu verwenden. Jede `id` in einem Dokument muss eindeutig in diesem Dokument sein. In diesem Beispiel sind die `id`-Werte Einzelzeichen, um den Fokus auf das Konzept des [`headers`](#headers)-Attributs zu legen.

```html
<table>
  <tr>
    <th id="a" scope="row">A</th>
    <td>Alfa</td>
    <td>AL fah</td>
    <td headers="a b c" rowspan="3">ABC</td>
  </tr>
  <tr>
    <th id="b" scope="row">B</th>
    <td>Bravo</td>
    <td>BRAH voh</td>
  </tr>
  <tr>
    <th id="c" scope="row">C</th>
    <td>Charlie</td>
    <td>CHAR lee</td>
  </tr>
  <tr>
    <th scope="row">D</th>
    <td>Delta</td>
    <td colspan="2">DELL tah</td>
  </tr>
  <tr>
    <th scope="row">E</th>
    <td>Echo</td>
    <td colspan="2">ECK oh</td>
  </tr>
</table>
```

#### Ergebnis

Während das [visuelle Ergebnis](#result_2) unverändert gegenüber der [vorherigen Beispiel-Tabelle](#spalten-_und_zeilenüberspannung) ist, ist jetzt jede Datenzelle (`<td>`) explizit mit ihrer Zeilenüberschriftzelle (`<th>`) verknüpft.

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Guides/Content_categories"
          >Inhaltskategorien</a
        >
      </th>
      <td>Untergliederungswurzel.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content"
          >Flow-Inhalt</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>
        Das Start-Tag ist obligatorisch.<br />Das End-Tag kann weggelassen werden, wenn es unmittelbar von einem {{HTMLElement("th")}}- oder
        <code>&lt;td&gt;</code>-Element gefolgt wird oder wenn es keine weiteren Daten in seinem Eltern-Element gibt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>Ein {{HTMLElement("tr")}}-Element.</td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
      <td>
        <code
          ><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/cell_role"
            >cell</a
          ></code
        >
        wenn es ein Nachkomme eines {{HTMLElement("table")}}-Elements ist, oder <code
          ><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role"
            >gridcell</a
          ></code
        >
        wenn es ein Nachkomme eines Elements mit <code
          ><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role"
            >grid</a
          ></code
        > Rolle ist.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA-Rollen</th>
      <td>Beliebige</td>
    </tr>
    <tr>
      <th scope="row">DOM-Schnittstelle</th>
      <td>[`HTMLTableCellElement`](/de/docs/Web/API/HTMLTableCellElement)</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Erlernen: Grundlagen der HTML-Tabelle](/de/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics)
- {{HTMLElement("caption")}}, {{HTMLElement("col")}}, {{HTMLElement("colgroup")}}, {{HTMLElement("table")}}, {{HTMLElement("tbody")}}, {{HTMLElement("tfoot")}}, {{HTMLElement("th")}}, {{HTMLElement("thead")}}, {{HTMLElement("tr")}}: Andere tabellenbezogene Elemente
- {{cssxref("background-color")}}: CSS-Eigenschaft, um die Hintergrundfarbe jeder Datenzelle einzustellen
- {{cssxref("border")}}: CSS-Eigenschaft, um die Ränder von Datenzellen zu ändern
- {{cssxref("height")}}: CSS-Eigenschaft, um die empfohlene Höhe der Datenzelle zu steuern
- {{cssxref("text-align")}}: CSS-Eigenschaft, um den Inhalt jeder Datenzelle horizontal auszurichten
- {{cssxref("vertical-align")}}: CSS-Eigenschaft, um den Inhalt jeder Datenzelle vertikal auszurichten
- {{cssxref("width")}}: CSS-Eigenschaft, um die empfohlene Breite der Datenzelle zu steuern
- {{cssxref(":nth-of-type")}}, {{cssxref(":first-of-type")}}, {{cssxref(":last-of-type")}}: CSS-Pseudoklassen, um die gewünschten Datenzellen auszuwählen
