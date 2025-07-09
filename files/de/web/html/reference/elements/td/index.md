---
title: "<td>: Das Tabellen-Data-Cellelement"
slug: Web/HTML/Reference/Elements/td
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

Das **`<td>`** [HTML](/de/docs/Web/HTML)-Element definiert eine Tabellenzelle, die Daten enthält und kann als Kind des {{HTMLElement("tr")}}-Elements verwendet werden.

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
  - : Enthält einen nicht-negativen Ganzzahlwert, der angibt, über wie viele Spalten die Datenzelle sich erstreckt. Der Standardwert ist `1`. Benutzeragenten ignorieren Werte über 1000 als falsch und setzen sie auf den Standardwert (`1`).
- `headers`
  - : Enthält eine durch Leerzeichen getrennte Liste von Zeichenfolgen, von denen jede der `id`-Attribut von {{HTMLElement("th")}}-Elementen entspricht, die Überschriften für diese Tabellenzelle bereitstellen.
- `rowspan`
  - : Enthält einen nicht-negativen Ganzzahlwert, der angibt, über wie viele Zeilen die Datenzelle sich erstreckt. Der Standardwert ist `1`; wenn der Wert auf `0` gesetzt ist, erstreckt sie sich bis zum Ende des Tabellengruppierungsabschnitts ({{HTMLElement("thead")}}, {{HTMLElement("tbody")}}, {{HTMLElement("tfoot")}}, auch wenn er implizit definiert ist), zu dem die Zelle gehört. Werte über `65534` werden auf `65534` gekürzt.

### Veraltete Attribute

Die folgenden Attribute sind veraltet und sollten nicht verwendet werden. Sie sind unten zur Referenz dokumentiert, um vorhandenen Code zu aktualisieren und aus historischem Interesse.

- `abbr` {{deprecated_inline}}
  - : Enthält eine kurze Abkürzungsbeschreibung des Inhalts der Datenzelle. Einige Benutzeragenten, wie z. B. Sprachleser, können diese Beschreibung vor dem Inhalt selbst präsentieren. Setzen Sie den abgekürzten Inhalt innerhalb der Zelle und platzieren Sie die (längere) Beschreibung im [`title`](/de/docs/Web/HTML/Reference/Global_attributes/title)-Attribut, da dieses Attribut veraltet ist. Oder, vorzugsweise, den Inhalt innerhalb der Datenzelle einfügen und CSS verwenden, um [überlaufenden Text visuell abzuschneiden](/de/docs/Web/CSS/text-overflow).

- `align` {{deprecated_inline}}
  - : Gibt die horizontale Ausrichtung der Datenzelle an. Die möglichen {{Glossary("enumerated", "enumerierten")}} Werte sind `left`, `center`, `right`, `justify` und `char`. Wenn unterstützt, richtet der `char`-Wert den Textinhalt am durch das [`char`](#char)-Attribut definierten Zeichen und dem durch das [`charoff`](#charoff)-Attribut definierten Versatz aus. Verwenden Sie stattdessen die {{cssxref("text-align")}}-CSS-Eigenschaft, da dieses Attribut veraltet ist.

- `axis` {{deprecated_inline}}
  - : Enthält eine durch Leerzeichen getrennte Liste von Zeichenfolgen, von denen jede der `id`-Attribut einer Gruppe von Zellen entspricht, für die die Datenzelle gilt.

- `bgcolor` {{deprecated_inline}}
  - : Definiert die Hintergrundfarbe der Datenzelle. Der Wert ist eine HTML-Farbe, entweder ein [6-stelliger hexadezimaler RGB-Code](/de/docs/Web/CSS/hex-color), mit einem `#`-Präfix, oder ein [Farbname](/de/docs/Web/CSS/named-color). Andere CSS {{cssxref("color_value", "&lt;color&gt;")}}-Werte werden nicht unterstützt. Verwenden Sie stattdessen die {{cssxref("background-color")}}-CSS-Eigenschaft, da dieses Attribut veraltet ist.

- `char` {{deprecated_inline}}
  - : Tut nichts. Es war ursprünglich vorgesehen, die Ausrichtung des Inhalts an einem Zeichen der Datenzelle zu spezifizieren. Typische Werte dafür sind ein Punkt (`.`), wenn versucht wird, Zahlen oder Geldbeträge auszurichten. Wenn [`align`](#align) nicht auf `char` gesetzt ist, wird dieses Attribut ignoriert.

- `charoff` {{deprecated_inline}}
  - : Tut nichts. Es war ursprünglich dafür gedacht, die Anzahl der Zeichen zu spezifizieren, um die Datenzellinhalte vom Ausrichtungszeichen, das durch das [`char`](#char)-Attribut angegeben wurde, zu versetzen.

- `height` {{deprecated_inline}}
  - : Definiert eine empfohlene Höhe für die Datenzelle. Verwenden Sie stattdessen die {{cssxref("height")}}-CSS-Eigenschaft, da dieses Attribut veraltet ist.

- `scope` {{deprecated_inline}}
  - : Definiert die Zellen, zu denen die Überschrift (definiert im {{HTMLElement("th")}})-Element gehört. Die möglichen {{Glossary("enumerated", "enumerierten")}} Werte sind `row`, `col`, `rowgroup` und `colgroup`. Verwenden Sie dieses Attribut nur mit dem {{HTMLElement("th")}}-Element, um die Zeile oder Spalte zu definieren, für die es als Header fungiert, da dieses Attribut für das `<td>`-Element veraltet ist.

- `valign` {{deprecated_inline}}
  - : Gibt die vertikale Ausrichtung der Datenzelle an. Die möglichen {{Glossary("enumerated", "enumerierten")}} Werte sind `baseline`, `bottom`, `middle`, und `top`. Verwenden Sie stattdessen die {{cssxref("vertical-align")}}-CSS-Eigenschaft, da dieses Attribut veraltet ist.

- `width` {{deprecated_inline}}
  - : Definiert eine empfohlene Breite für die Datenzelle. Verwenden Sie stattdessen die {{cssxref("width")}}-CSS-Eigenschaft, da dieses Attribut veraltet ist.

## Nutzungshinweise

- Das `<td>` darf nur innerhalb eines {{HTMLElement("tr")}}-Elements verwendet werden.
- Wenn Sie die Attribute [`colspan`](#colspan) und [`rowspan`](#rowspan) verwenden, um Datenzellen über mehrere Spalten und Zeilen zu erstrecken, werden Zellen ohne definierte Attribute (mit einem Standardwert von `1`) automatisch in freie verfügbare Plätze in der Tabellenstruktur eingefügt, die 1x1-Zellen umfassen, wie in der folgenden Abbildung dargestellt:

  ![Darstellung der Spalten- und Zeilenüberspannung von Tabellenzellen: Zellen 1, 3 und 4 erstrecken sich über zwei Zeilen; Zelle 2 erstreckt sich über zwei Spalten; Zellen 5 und 6 passen in die verfügbaren Zellen, die die zweite und dritte Spalte in der zweiten Zeile bilden](column-row-span.png)

  > [!NOTE]
  > Diese Attribute dürfen nicht verwendet werden, um Zellen zu überlappen.

## Beispiele

Siehe {{HTMLElement("table")}} für ein vollständiges Tabellenbeispiel, das gängige Standards und bewährte Praktiken vorstellt.

### Grundlegende Datenzellen

Dieses Beispiel verwendet `<td>`-Elemente zusammen mit anderen tabellenbezogenen Elementen, um eine grundlegende Tabelle mit Daten über das phonetische Alphabet vorzustellen.

#### HTML

Einige Tabellenzeilen ({{HTMLElement("tr")}}-Elemente) enthalten sowohl Header-Zellen ({{HTMLElement("th")}}-Elemente) als auch Datenzellen-`<td>`-Elemente. Das {{HTMLElement("th")}}-Element, das das erste Kind jeder Zeile ist, bildet die erste Spalte der Tabelle, wobei jedes `<th>` den Zeilenüberschrift für die Datenzellen in dieser Zeile bereitstellt. Jedes entsprechende `<td>`-Element enthält Daten, die mit ihrer jeweiligen Spaltenüberschrift und Zeilenüberschrift-Zelle übereinstimmen.

> [!NOTE]
> Normalerweise würde eine Tabellenkopfgruppe mit Spaltenüberschriften implementiert werden, um das Verständnis der Informationen in den Spalten zu erleichtern. Die {{HTMLElement("thead")}}- und {{HTMLElement("tbody")}}-Elemente würden verwendet werden, um solche Reihen von Kopf- und Datenzellen in die jeweiligen Kopf- und Körperabschnitte der Tabelle zu gruppieren. Dies ist in diesem Beispiel nicht implementiert, um den Fokus auf die Datenzellen zu legen und die Komplexität dieses Beispiels zu reduzieren.

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

Ein wenig grundlegendes CSS wird verwendet, um die Tabelle und ihre Zellen zu gestalten. CSS-[Attributselektoren](/de/docs/Web/CSS/Attribute_selectors) und die {{cssxref(":nth-of-type")}} Pseudo-Klasse werden verwendet, um das Erscheinungsbild der Zellen abzuwechseln und die Informationen in der Tabelle leichter verständlich und erkennbar zu machen.

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

### Spannen von Spalten und Zeilen

Dieses Beispiel erweitert und verbessert die Grundtabelle aus dem [vorherigen Beispiel](#grundlegende_datenzellen) durch Hinzufügen einer zusätzlichen "ABC"-Zelle.

#### HTML

Eine zusätzliche Datenzelle (`<td>`-Element) wird in der ersten Zeile ({{HTMLElement("tr")}}-Element) eingeführt. Dies erstellt eine vierte Spalte in der Tabelle.

Unter Verwendung des [`rowspan`](#rowspan)-Attributs wird die "ABC"-Zelle über die ersten drei Zeilen der Tabelle gespannt. Die letzten Datenzellen der folgenden Zeilen umfassen jeweils zwei Spalten. Dies wird mithilfe des [`colspan`](#colspan)-Attributs erreicht, um sie korrekt innerhalb der Tabellenstruktur auszurichten. Beachten Sie, dass eine zusätzliche Zeile ({{HTMLElement("tr")}}-Element) zur Tabelle hinzugefügt wird, um dies zu veranschaulichen.

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

Die {{cssxref(":first-of-type")}}- und {{cssxref(":last-of-type")}}-Pseudo-Klassen werden im CSS verwendet, um die hinzugefügte "ABC"-Datenzelle auszuwählen und zu gestalten.

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

### Datenzellen mit Kopfzellen verknüpfen

Für komplexere Beziehungen zwischen Datenzellen (`<td>`-Elementen) und Kopfzellen ({{HTMLElement("th")}}-Elementen) kann die Verwendung von {{HTMLElement("th")}}-Elementen mit dem [`scope`](/de/docs/Web/HTML/Reference/Elements/th#scope)-Attribut allein für unterstützende Technologien, insbesondere Bildschirmleser, nicht ausreichend sein.

#### HTML

Um die {{Glossary("accessibility", "Barrierefreiheit")}} des [vorherigen Beispiels](#spannen_von_spalten_und_zeilen) zu verbessern und damit Bildschirmleser beispielsweise die Überschriften aussprechen können, die mit jeder Datenzelle verbunden sind, kann das [`headers`](#headers)-Attribut zusammen mit den [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id)-Attributen eingeführt werden. Jede Zeilenüberschriftszelle ({{HTMLElement("th")}}-Element), das mit der "ABC"-Datenzelle verbunden ist, d.h. die Buchstaben "A", "B" und "C", erhält eine eindeutige Kennung mit dem [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id)-Attribut. Die "ABC"-Datenzelle (`<td>`-Element) verwendet dann diese `id`-Werte in einer durch Leerzeichen getrennten Liste für das [`headers`](#headers)-Attribut.

> [!NOTE]
> Es wird empfohlen, aussagekräftigere und nützlichere Werte für das [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id)-Attribut zu verwenden. Jede `id` in einem Dokument muss für dieses Dokument eindeutig sein. In diesem Beispiel sind die `id`-Werte Einzelzeichen, um den Fokus auf das Konzept des [`headers`](#headers)-Attributs zu legen.

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

Während das [visuelle Ergebnis](#result_2) aus der [vorherigen Beispielstabelle](#spannen_von_spalten_und_zeilen) unverändert bleibt, wird jetzt jede Datenzelle (`<td>`) explizit mit ihrer Zeilenüberschrift (`<th>`) verknüpft.

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Guides/Content_categories"
          >Inhaltskategorien</a
        >
      </th>
      <td>Abschnittsverwurzelung.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content"
          >Fließender Inhalt</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>
        Der Start-Tag ist obligatorisch.<br />Der End-Tag kann weggelassen werden, wenn er unmittelbar von einem {{HTMLElement("th")}} oder einem <code>&lt;td&gt;</code>-Element gefolgt wird oder wenn keine weiteren Daten im Elternelement vorhanden sind.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>Ein {{HTMLElement("tr")}}-Element.</td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <code
          ><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/cell_role"
            >cell</a
          ></code
        >
        wenn ein Nachkomme eines {{HTMLElement("table")}}-Elements, oder <code
          ><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role"
            >gridcell</a
          ></code
        >
        wenn ein Nachkomme eines Elements mit <code
          ><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role"
            >grid</a
          ></code
        >-Rolle ist.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA-Rollen</th>
      <td>Beliebig</td>
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

- [Lernen: Grundlagen von HTML-Tabellen](/de/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics)
- {{HTMLElement("caption")}}, {{HTMLElement("col")}}, {{HTMLElement("colgroup")}}, {{HTMLElement("table")}}, {{HTMLElement("tbody")}}, {{HTMLElement("tfoot")}}, {{HTMLElement("th")}}, {{HTMLElement("thead")}}, {{HTMLElement("tr")}}: Andere tabellenbezogene Elemente
- {{cssxref("background-color")}}: CSS-Eigenschaft zur Festlegung der Hintergrundfarbe jeder Datenzelle
- {{cssxref("border")}}: CSS-Eigenschaft zur Steuerung der Ränder von Datenzellen
- {{cssxref("height")}}: CSS-Eigenschaft zur Steuerung der empfohlenen Höhe der Datenzelle
- {{cssxref("text-align")}}: CSS-Eigenschaft, um den Inhalt jeder Datenzelle horizontal auszurichten
- {{cssxref("vertical-align")}}: CSS-Eigenschaft, um den Inhalt jeder Datenzelle vertikal auszurichten
- {{cssxref("width")}}: CSS-Eigenschaft zur Steuerung der empfohlenen Breite der Datenzelle
- {{cssxref(":nth-of-type")}}, {{cssxref(":first-of-type")}}, {{cssxref(":last-of-type")}}: CSS-Pseudoklassen, um die gewünschten Datenzellen auszuwählen
