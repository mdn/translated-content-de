---
title: "<td>: Das Tabellen-Datenzellen-Element"
slug: Web/HTML/Reference/Elements/td
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Das **`<td>`** [HTML](/de/docs/Web/HTML)-Element definiert eine Zelle einer Tabelle, die Daten enthält, und kann als Kind des {{HTMLElement("tr")}}-Elements verwendet werden.

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

- `colspan`
  - : Enthält einen nicht-negativen Ganzzahlwert, der angibt, wie viele Spalten die Datenzelle überspannt oder erweitert. Der Standardwert ist `1`. Benutzeragenten verwerfen Werte, die höher als 1000 sind, als fehlerhaft und setzen diesen auf den Standardwert (`1`).
- `headers`
  - : Enthält eine Liste von durch Leerzeichen getrennten Strings, die jeweils dem `id`-Attribut der {{HTMLElement("th")}}-Elemente entsprechen, die Überschriften für diese Tabellenzelle liefern.
- `rowspan`
  - : Enthält einen nicht-negativen Ganzzahlwert, der angibt, für wie viele Zeilen die Datenzelle überspannt oder erweitert wird. Der Standardwert ist `1`; wenn der Wert auf `0` gesetzt wird, erstreckt es sich bis zum Ende des Tabellengruppierungsbereichs ({{HTMLElement("thead")}}, {{HTMLElement("tbody")}}, {{HTMLElement("tfoot")}}, auch wenn implizit definiert), zu dem die Zelle gehört. Werte höher als `65534` werden auf `65534` abgeschnitten.

### Veraltete Attribute

Die folgenden Attribute sind veraltet und sollten nicht verwendet werden. Sie sind unten zur Orientierung bei der Aktualisierung bestehender Codes und aus historischem Interesse dokumentiert.

- `abbr` {{deprecated_inline}}
  - : Enthält eine kurze abgekürzte Beschreibung des Inhalts der Datenzelle. Einige Benutzeragenten, wie z.B. Sprachleser, können diese Beschreibung vor dem eigentlichen Inhalt präsentieren. Platzieren Sie den abgekürzten Inhalt innerhalb der Zelle und die (längere) Beschreibung im [`title`](/de/docs/Web/HTML/Reference/Global_attributes/title)-Attribut, da dieses Attribut veraltet ist. Oder bevorzugt, fügen Sie den Inhalt innerhalb der Datenzelle ein und verwenden Sie CSS, um [überlaufenden Text visuell abzuschneiden](/de/docs/Web/CSS/Reference/Properties/text-overflow).

- `align` {{deprecated_inline}}
  - : Gibt die horizontale Ausrichtung der Datenzelle an. Die möglichen {{Glossary("enumerated", "enumerierten")}} Werte sind `left`, `center`, `right`, `justify` und `char`. Wenn unterstützt, richtet der Wert `char` den Textinhalt an dem im [`char`](#char)-Attribut definierten Zeichen und dem im [`charoff`](#charoff)-Attribut festgelegten Offset aus. Verwenden Sie die CSS-Eigenschaft {{cssxref("text-align")}}, da dieses Attribut veraltet ist.

- `axis` {{deprecated_inline}}
  - : Enthält eine Liste von durch Leerzeichen getrennten Strings, die jeweils dem `id`-Attribut einer Gruppe von Zellen entsprechen, auf die die Datenzelle zutrifft.

- `bgcolor` {{deprecated_inline}}
  - : Bestimmt die Hintergrundfarbe der Datenzelle. Der Wert ist eine HTML-Farbe; entweder ein [6-stelliger hexadezimaler RGB-Code](/de/docs/Web/CSS/hex-color), der mit einem `#` versehen ist, oder ein [Farbenschlüsselwort](/de/docs/Web/CSS/named-color). Andere CSS {{cssxref("color_value", "&lt;color&gt;")}} Werte werden nicht unterstützt. Verwenden Sie die CSS-Eigenschaft {{cssxref("background-color")}}, da dieses Attribut veraltet ist.

- `char` {{deprecated_inline}}
  - : Hat keine Funktion. Es war ursprünglich vorgesehen, die Ausrichtung des Inhalts an einem Zeichen der Datenzelle zu spezifizieren. Typische Werte hierfür sind ein Punkt (`.`), wenn versucht wird, Zahlen oder Geldbeträge auszurichten. Wenn [`align`](#align) nicht auf `char` gesetzt ist, wird dieses Attribut ignoriert.

- `charoff` {{deprecated_inline}}
  - : Hat keine Funktion. Es war ursprünglich vorgesehen, die Anzahl der Zeichen anzugeben, die den Inhalt der Datenzelle vom Ausrichtungszeichen, das im [`char`](#char)-Attribut angegeben ist, versetzt.

- `height` {{deprecated_inline}}
  - : Definiert eine empfohlene Höhe der Datenzelle. Verwenden Sie die CSS-Eigenschaft {{cssxref("height")}}, da dieses Attribut veraltet ist.

- `scope` {{deprecated_inline}}
  - : Bestimmt die Zellen, auf die sich die Überschrift (definiert im {{HTMLElement("th")}}-Element) bezieht. Die möglichen {{Glossary("enumerated", "enumerierten")}} Werte sind `row`, `col`, `rowgroup` und `colgroup`. Verwenden Sie dieses Attribut nur mit dem {{HTMLElement("th")}}-Element, um die Zeile oder die Spalte zu definieren, für die es eine Überschrift ist, da dieses Attribut für das `<td>`-Element veraltet ist.

- `valign` {{deprecated_inline}}
  - : Gibt die vertikale Ausrichtung der Datenzelle an. Die möglichen {{Glossary("enumerated", "enumerierten")}} Werte sind `baseline`, `bottom`, `middle` und `top`. Verwenden Sie die CSS-Eigenschaft {{cssxref("vertical-align")}}, da dieses Attribut veraltet ist.

- `width` {{deprecated_inline}}
  - : Definiert eine empfohlene Breite der Datenzelle. Verwenden Sie die CSS-Eigenschaft {{cssxref("width")}}, da dieses Attribut veraltet ist.

## Anwendungshinweise

- Das `<td>` darf nur innerhalb eines {{HTMLElement("tr")}}-Elements verwendet werden.
- Bei Verwendung der [`colspan`](#colspan)- und [`rowspan`](#rowspan)-Attribute, um Datenzellen über mehrere Spalten und Zeilen zu erweitern, werden Zellen ohne diese definierten Attribute (mit einem Standardwert von `1`) automatisch in freie verfügbare Räume innerhalb der Tabellenstruktur eingefügt, die 1x1 Zellen überspannen, wie in der folgenden Abbildung dargestellt:

  ![Illustration zur Spalten- und Zeilenüberspannung von Tabellenzellen: Zellen 1, 3 und 4 überspannen zwei Zeilen; Zelle 2 überspannt zwei Spalten; Zellen 5 und 6 fügen sich in die verfügbaren Zellen ein, die die zweite und dritte Spalte in der zweiten Zeile sind](/shared-assets/images/diagrams/html/table/column-row-span.png)

  > [!NOTE]
  > Diese Attribute dürfen nicht verwendet werden, um Zellen zu überlappen.

## Beispiele

Siehe {{HTMLElement("table")}} für ein vollständiges Tabellenbeispiel, das gängige Standards und Best Practices einführt.

### Grundlegende Datenzellen

Dieses Beispiel verwendet `<td>`-Elemente zusammen mit anderen tabellenbezogenen Elementen, um eine grundlegende Tabelle mit Daten über das phonetische Alphabet einzuführen.

#### HTML

Einige Tabellenzeilen ({{HTMLElement("tr")}}-Elemente) enthalten sowohl Überschriftenzellen ({{HTMLElement("th")}}-Elemente) als auch `<td>`-Datenzellen. Das {{HTMLElement("th")}}-Element, das das erste Kind jeder Zeile ist, bildet die erste Spalte der Tabelle, wobei jede `<th>`-Zelle die Zeilenüberschrift für die Datenzellen innerhalb dieser Zeile bereitstellt. Jedes entsprechende `<td>`-Element enthält Daten, die mit ihrer jeweiligen Spaltenüberschrift und Zeilenüberschriftzelle ausgerichtet sind.

> [!NOTE]
> Normalerweise würde eine Tabellenkopfleiste mit Spaltenüberschriften implementiert werden, um das Verständnis der Informationen in den Spalten zu erleichtern. Die {{HTMLElement("thead")}}- und {{HTMLElement("tbody")}}-Elemente würden verwendet, um solche Reihen von Überschriften und Daten in die entsprechenden Tabellenkopf- und Tabellenkörperabschnitte zu gruppieren. Dies wird in diesem Beispiel nicht implementiert, um den Fokus auf die Datenzellen zu legen und die Komplexität dieses Beispiels zu reduzieren.

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

Ein grundlegendes CSS wird verwendet, um die Tabelle und ihre Zellen zu gestalten. CSS [Attributselektoren](/de/docs/Web/CSS/Attribute_selectors) und die {{cssxref(":nth-of-type")}} Pseudoklasse werden verwendet, um das Erscheinungsbild der Zellen abzuwechseln, um die Informationen in der Tabelle einfacher zu verstehen und zu identifizieren.

```css
td,
th {
  border: 1px solid rgb(160 160 160);
  padding: 8px 10px;
}

tr:nth-of-type(odd) td {
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
```

#### Ergebnis

{{EmbedLiveSample("Basic_data_cells", 650, 140)}}

### Spalten- und Zeilenüberspannung

Dieses Beispiel erweitert und verbessert die Basistabelle aus dem [vorherigen Beispiel](#grundlegende_datenzellen), indem eine zusätzliche "ABC"-Zelle hinzugefügt wird.

#### HTML

Eine zusätzliche Datenzelle (`<td>`-Element) wird in der ersten Zeile ({{HTMLElement("tr")}}-Element) eingefügt. Dies erstellt eine vierte Spalte in der Tabelle.

Durch die Verwendung des [`rowspan`](#rowspan)-Attributs wird die "ABC"-Zelle über die ersten drei Zeilen der Tabelle erweitert. Die letzten Datenzellen der nachfolgenden Zeilen überspannen jeweils zwei Spalten. Dies wird durch das [`colspan`](#colspan)-Attribut erreicht, das sie innerhalb der Tabellenstruktur korrekt ausrichtet. Beachten Sie, dass eine zusätzliche Zeile ({{HTMLElement("tr")}}-Element) zur Tabelle hinzugefügt wurde, um dies zu veranschaulichen.

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

Die {{cssxref(":first-of-type")}} und {{cssxref(":last-of-type")}} Pseudoklassen werden im CSS verwendet, um die hinzugefügte "ABC"-Datenzelle auszuwählen und zu gestalten.

```css
tr:first-of-type td:last-of-type {
  width: 60px;
  background-color: #505050;
  color: white;
  font-weight: bold;
  text-align: center;
}

td,
th {
  border: 1px solid rgb(160 160 160);
  padding: 8px 10px;
}

tr:nth-of-type(odd) td {
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
```

#### Ergebnis

{{EmbedLiveSample("Column_and_row_spanning", 650, 170)}}

### Datenzellen mit Überschriftenzellen in Beziehung setzen

Für komplexere Beziehungen zwischen Datenzellen (`<td>`-Elemente) und Überschriftenzellen ({{HTMLElement("th")}}-Elemente) reicht die Verwendung von {{HTMLElement("th")}}-Elementen mit dem [`scope`](/de/docs/Web/HTML/Reference/Elements/th#scope)-Attribut allein möglicherweise nicht aus, um unterstützende Technologien, insbesondere Bildschirmleser, zu unterstützen.

#### HTML

Um die {{Glossary("accessibility", "Zugänglichkeit")}} des [vorherigen Beispiels](#spalten-_und_zeilenüberspannung) zu verbessern und um beispielsweise Bildschirmlesern zu ermöglichen, die mit jeder Datenzelle verknüpften Überschriften zu lesen, kann das [`headers`](#headers)-Attribut zusammen mit [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id)-Attributen eingeführt werden. Jede Zeilenüberschriftzelle ({{HTMLElement("th")}}-Element), die mit der "ABC"-Datenzelle assoziiert ist, d.h. die Buchstaben "A", "B" und "C", erhält eine eindeutige Kennung mit dem [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id)-Attribut. Die "ABC"-Datenzelle (`<td>`-Element) verwendet dann diese `id`-Werte in einer durch Leerzeichen getrennten Liste für das [`headers`](#headers)-Attribut.

> [!NOTE]
> Es wird empfohlen, beschreibendere und nützlichere Werte für das [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id)-Attribut zu verwenden. Jede `id` in einem Dokument muss eindeutig für das jeweilige Dokument sein. In diesem Beispiel sind die `id`-Werte Einzelzeichen, um den Fokus auf das Konzept des [`headers`](#headers)-Attributs zu legen.

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

Obwohl sich das [visuelle Ergebnis](#result_2) nicht von der [vorherigen Beispiel-Tabelle](#spalten-_und_zeilenüberspannung) ändert, ist nun jede Datenzelle (`<td>`) explizit mit ihrer Zeilenüberschriftzelle (`<th>`) assoziiert.

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Guides/Content_categories"
          >Inhaltskategorien</a
        >
      </th>
      <td>Sektionswurzel.</td>
    </tr>
    <tr>
      <th scope="row">Zulässiger Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content"
          >Fließender Inhalt</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>
        Das Start-Tag ist obligatorisch.<br />Das End-Tag kann weggelassen werden, wenn es unmittelbar von einem {{HTMLElement("th")}}- oder <code>&lt;td&gt;</code>-Element gefolgt wird oder wenn keine weiteren Daten in seinem Elternelement enthalten sind.
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
        wenn es ein Nachfahre eines {{HTMLElement("table")}}-Elements ist, oder <code
          ><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role"
            >gridcell</a
          ></code
        >
        wenn es ein Nachfahre eines Elements mit <code
          ><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role"
            >grid</a
          ></code
        > Rolle ist
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässige ARIA-Rollen</th>
      <td>Jegliche</td>
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

- [Lernen: HTML Tabellen Grundlagen](/de/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics)
- {{HTMLElement("caption")}}, {{HTMLElement("col")}}, {{HTMLElement("colgroup")}}, {{HTMLElement("table")}}, {{HTMLElement("tbody")}}, {{HTMLElement("tfoot")}}, {{HTMLElement("th")}}, {{HTMLElement("thead")}}, {{HTMLElement("tr")}}: Andere tabellenverwandte Elemente
- {{cssxref("background-color")}}: CSS-Eigenschaft, um die Hintergrundfarbe jeder Datenzelle festzulegen
- {{cssxref("border")}}: CSS-Eigenschaft zur Steuerung der Rahmen von Datenzellen
- {{cssxref("height")}}: CSS-Eigenschaft zur Kontrolle der empfohlenen Höhe der Datenzelle
- {{cssxref("text-align")}}: CSS-Eigenschaft zur horizontalen Ausrichtung des Inhalts jeder Datenzelle
- {{cssxref("vertical-align")}}: CSS-Eigenschaft zur vertikalen Ausrichtung des Inhalts jeder Datenzelle
- {{cssxref("width")}}: CSS-Eigenschaft zur Kontrolle der empfohlenen Breite der Datenzelle
- {{cssxref(":nth-of-type")}}, {{cssxref(":first-of-type")}}, {{cssxref(":last-of-type")}}: CSS-Pseudoklassen zur Auswahl der gewünschten Datenzellen
