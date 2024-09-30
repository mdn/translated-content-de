---
title: "<td>: Das Table Data Cell Element"
slug: Web/HTML/Element/td
l10n:
  sourceCommit: 5bd9fe2b25c6eee2a14d0406ce7116998fa48c13
---

{{HTMLSidebar}}

Das **`<td>`** [HTML](/de/docs/Web/HTML)-Element definiert eine Zelle einer Tabelle, die Daten enthält, und kann als Kind des {{HTMLElement("tr")}}-Elements verwendet werden.

{{EmbedInteractiveExample("pages/tabbed/td.html","tabbed-taller")}}

## Attribute

Dieses Element enthält die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- `colspan`
  - : Enthält einen nicht-negativen ganzzahligen Wert, der angibt, wie viele Spalten die Datenzelle übergreift oder erweitert. Der Standardwert ist `1`. Benutzeragenten ignorieren Werte höher als 1000 als falsch und setzen sie auf den Standardwert (`1`).
- `headers`
  - : Enthält eine Liste von leerzeichengetrennten Zeichenketten, die jeweils dem `id`-Attribut der {{HTMLElement("th")}}-Elemente entsprechen, die Überschriften für diese Tabellenzelle liefern.
- `rowspan`
  - : Enthält einen nicht-negativen ganzzahligen Wert, der angibt, für wie viele Zeilen die Datenzelle übergreift oder erweitert. Der Standardwert ist `1`; wenn ihr Wert auf `0` gesetzt ist, erstreckt sie sich bis zum Ende des Tabellengruppierungsabschnitts ({{HTMLElement("thead")}}, {{HTMLElement("tbody")}}, {{HTMLElement("tfoot")}}, auch wenn implizit definiert), zu dem die Zelle gehört. Werte höher als `65534` werden auf `65534` gekürzt.

### Veraltete Attribute

Die folgenden Attribute sind veraltet und sollten nicht verwendet werden. Sie werden hier dokumentiert, um bestehende Codes zu aktualisieren und aus rein historischem Interesse.

- `abbr` {{deprecated_inline}}

  - : Enthält eine kurze, abgekürzte Beschreibung des Inhalts der Datenzelle. Einige Benutzeragenten, wie z.B. Screenreader, können diese Beschreibung vor dem eigentlichen Inhalt präsentieren. Platzieren Sie den abgekürzten Inhalt innerhalb der Zelle und die (längere) Beschreibung im [`title`](/de/docs/Web/HTML/Global_attributes/title)-Attribut, da dieses Attribut veraltet ist. Oder, vorzugsweise, fügen Sie den Inhalt innerhalb der Datenzelle ein und verwenden Sie CSS, um [überlaufenden Text visuell zu verbergen](/de/docs/Web/CSS/text-overflow).

- `align` {{deprecated_inline}}

  - : Gibt die horizontale Ausrichtung der Datenzelle an. Die möglichen [augezählten](/de/docs/Glossary/enumerated) Werte sind `left`, `center`, `right`, `justify` und `char`. Wenn unterstützt, richtet der `char`-Wert den Textinhalt am in der [`char`](#char)-Attribut definierten Zeichen und dem im [`charoff`](#charoff)-Attribut definierten Offset aus. Verwenden Sie stattdessen die {{cssxref("text-align")}}-CSS-Eigenschaft, da dieses Attribut veraltet ist.

- `axis` {{deprecated_inline}}

  - : Enthält eine Liste von leerzeichengetrennten Zeichenketten, die jeweils dem `id`-Attribut einer Gruppe von Zellen entsprechen, auf die die Datenzelle angewendet wird.

- `bgcolor` {{deprecated_inline}}

  - : Definiert die Hintergrundfarbe der Datenzelle. Der Wert ist eine HTML-Farbe; entweder ein [6-stelliger hexadezimaler RGB-Code](/de/docs/Web/CSS/hex-color), der von einem `#` gefolgt wird, oder ein [Farbkeyword](/de/docs/Web/CSS/named-color). Andere CSS {{cssxref("color_value", "&lt;color&gt")}}-Werte werden nicht unterstützt. Verwenden Sie stattdessen die {{cssxref("background-color")}}-CSS-Eigenschaft, da dieses Attribut veraltet ist.

- `char` {{deprecated_inline}}

  - : Tut nichts. Es war ursprünglich dazu gedacht, die Ausrichtung des Inhalts an einem Zeichen der Datenzelle zu spezifizieren. Typische Werte dafür sind ein Punkt (`.`), wenn versucht wird, Zahlen oder Geldbeträge auszurichten. Wenn [`align`](#align) nicht auf `char` gesetzt ist, wird dieses Attribut ignoriert.

- `charoff` {{deprecated_inline}}

  - : Tut nichts. Es war ursprünglich dazu gedacht, die Anzahl der Zeichen anzugeben, um die der Datenzellinhalt vom Ausrichtungszeichen, das im [`char`](#char)-Attribut spezifiziert wurde, verschoben werden soll.

- `height` {{deprecated_inline}}

  - : Definiert eine empfohlene Höhe der Datenzelle. Verwenden Sie stattdessen die {{cssxref("height")}}-CSS-Eigenschaft, da dieses Attribut veraltet ist.

- `scope` {{deprecated_inline}}

  - : Definiert die Zellen, auf die sich der Header (definiert im {{HTMLElement("th")}}-Element) bezieht. Die möglichen [augezählten](/de/docs/Glossary/enumerated) Werte sind `row`, `col`, `rowgroup` und `colgroup`. Verwenden Sie dieses Attribut nur mit dem {{HTMLElement("th")}}-Element, um die Zeile oder Spalte zu definieren, für die es ein Header ist, da dieses Attribut für das `<td>`-Element veraltet ist.

- `valign` {{deprecated_inline}}

  - : Gibt die vertikale Ausrichtung der Datenzelle an. Die möglichen [augezählten](/de/docs/Glossary/enumerated) Werte sind `baseline`, `bottom`, `middle` und `top`. Verwenden Sie stattdessen die {{cssxref("vertical-align")}}-CSS-Eigenschaft, da dieses Attribut veraltet ist.

- `width` {{deprecated_inline}}

  - : Definiert eine empfohlene Breite der Datenzelle. Verwenden Sie stattdessen die {{cssxref("width")}}-CSS-Eigenschaft, da dieses Attribut veraltet ist.

## Nutzungshinweise

- Das `<td>`-Element darf nur innerhalb eines {{HTMLElement("tr")}}-Elements verwendet werden.
- Beim Verwenden der [`colspan`](#colspan)- und [`rowspan`](#rowspan)-Attribute, um Datenzellen über mehrere Spalten und Zeilen zu spannen, werden Zellen ohne diese definierten Attribute (mit einem Standardwert von `1`) automatisch in freie verfügbare Bereiche in der Tabellenstruktur eingefügt, die 1x1-Zellen umfassen, wie in der folgenden Abbildung dargestellt:

  ![Abbildung, die das Spannen von Spalten und Zeilen der Tabellenzellen zeigt: Zellen 1, 3 und 4 spannen sich über zwei Zeilen; Zelle 2 über zwei Spalten; Zellen 5 und 6 passen in die verfügbaren Zellen, die die zweite und dritte Spalte in der zweiten Zeile sind.](column-row-span.png)

  > [!NOTE]
  > Diese Attribute dürfen nicht verwendet werden, um Zellen zu überlappen.

## Beispiele

Sehen Sie sich {{HTMLElement("table")}} für ein vollständiges Tabellenbeispiel an, das allgemeine Standards und bewährte Verfahren einführt.

### Grundlegende Datenzellen

Dieses Beispiel verwendet `<td>`-Elemente zusammen mit anderen tabellenbezogenen Elementen, um eine grundlegende Tabelle mit Daten zum phonetischen Alphabet einzuführen.

#### HTML

Einige Tabelleneilen ({{HTMLElement("tr")}}-Elemente) enthalten sowohl Kopfzellen ({{HTMLElement("th")}}-Elemente) als auch Datenzellen `<td>`-Elemente. Das {{HTMLElement("th")}}-Element, das das erste Kind jeder Reihe ist, bildet die erste Spalte der Tabelle, wobei jedes `<th>` die Zeilenüberschrift für die Datenzellen innerhalb dieser Zeile bereitstellt. Jedes entsprechende `<td>`-Element enthält Daten, die mit seiner jeweiligen Spaltenüberschrift und Zeilenüberschrift ausgerichtet sind.

> [!NOTE]
> Normalerweise würde eine Tabellengruppen mit Spaltenüberschriften implementiert werden, um das Verständnis der Informationen in den Spalten zu erleichtern. Die {{HTMLElement("thead")}}- und {{HTMLElement("tbody")}}-Elemente würden verwendet werden, um solche Zeilen von Überschriften und Daten in die entsprechenden Tabellenkopf- und Tabellenkörperabschnitte zu gruppieren. Dies ist in diesem Beispiel nicht implementiert, um den Fokus auf die Datenzellen zu legen und die Komplexität dieses Beispiels zu reduzieren.

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

Ein wenig CSS wird verwendet, um die Tabelle und ihre Zellen zu stylen. CSS-[Attributselektoren](/de/docs/Web/CSS/Attribute_selectors) und die {{cssxref(":nth-of-type")}}-Pseudoklasse werden verwendet, um das Aussehen der Zellen abzuwechseln, um das Verständnis und die Identifikation der Informationen in der Tabelle zu erleichtern.

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

Dieses Beispiel erweitert und verbessert die grundlegende Tabelle aus dem [vorherigen Beispiel](#grundlegende_datenzellen) durch Hinzufügen eines zusätzlichen "ABC"-Feldes.

#### HTML

Eine zusätzliche Datenzelle (`<td>`-Element) wird innerhalb der ersten Zeile ({{HTMLElement("tr")}}-Element) eingefügt. Dies schafft eine vierte Spalte in der Tabelle.

Mithilfe des [`rowspan`](#rowspan)-Attributs wird die "ABC"-Zelle über die ersten drei Zeilen der Tabelle gespannt. Die letzten Datenzellen der nachfolgenden Zeilen erstrecken sich jeweils über zwei Spalten. Dies wird mittels des [`colspan`](#colspan)-Attributs durchgeführt und sorgt dafür, dass sie korrekt in der Tabellenstruktur ausgerichtet sind. Beachten Sie, dass eine zusätzliche Zeile ({{HTMLElement("tr")}}-Element) zur Tabelle hinzugefügt wird, um dies zu veranschaulichen.

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

Die {{cssxref(":first-of-type")}}- und {{cssxref(":last-of-type")}}-Pseudoklassen werden im CSS verwendet, um die hinzugefügte "ABC"-Datenzelle auszuwählen und zu stylen.

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

Für komplexere Beziehungen zwischen Datenzellen (`<td>`-Elemente) und Header-Zellen ({{HTMLElement("th")}}-Elemente) kann alleine die Verwendung von {{HTMLElement("th")}}-Elementen mit dem [`scope`](/de/docs/Web/HTML/Element/th#scope)-Attribut für unterstützende Technologien, insbesondere Screenreader, nicht ausreichen.

#### HTML

Um die [Barrierefreiheit](/de/docs/Glossary/accessibility) des [vorherigen Beispiels](#spannen_von_spalten_und_zeilen) zu verbessern und beispielsweise Screenreadern zu ermöglichen, die mit jeder Datenzelle verknüpften Kopfzeilen zu sprechen, kann das [`headers`](#headers)-Attribut zusammen mit [`id`](/de/docs/Web/HTML/Global_attributes/id)-Attributen eingeführt werden. Jede Zeilenkopfzeile ({{HTMLElement("th")}}-Element), die mit der "ABC"-Datenzelle verknüpft ist, d.h. die Buchstaben "A", "B" und "C", erhält mit dem [`id`](/de/docs/Web/HTML/Global_attributes/id)-Attribut einen eindeutigen Bezeichner. Die "ABC"-Datenzelle (`<td>`-Element) verwendet dann diese `id`-Werte in einer leerzeichengetrennten Liste für das [`headers`](#headers)-Attribut.

> [!NOTE]
> Es wird empfohlen, beschreibendere und nützlichere Werte für das [`id`](/de/docs/Web/HTML/Global_attributes/id)-Attribut zu verwenden. Jedes `id` in einem Dokument muss für dieses Dokument einzigartig sein. In diesem Beispiel sind die `id`-Werte Einzelzeichen, um den Fokus auf das Konzept des [`headers`](#headers)-Attributs zu legen.

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

Während das [visuelle Ergebnis](#result_2) unverändert bleibt im Vergleich zur [vorherigen Beispiel-Tabelle](#spannen_von_spalten_und_zeilen), ist nun jede Datenzelle (`<td>`) explizit mit ihrer Zeilenkopfzeile (`<th>`) verknüpft.

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Content_categories"
          >Content-Kategorien</a
        >
      </th>
      <td>Sectioning root.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#flow_content"
          >Flow content</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>
        Der Start-Tag ist obligatorisch.<br />Der End-Tag kann weggelassen werden, wenn er sofort von einem {{HTMLElement("th")}}- oder einem
        <code>&lt;td&gt;</code>-Element gefolgt wird oder wenn keine weiteren Daten in seinem übergeordneten Element vorhanden sind.
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
          ><a href="/de/docs/Web/Accessibility/ARIA/Roles/cell_role"
            >cell</a
          ></code
        >
        wenn ein Nachkomme eines {{HTMLElement("table")}}-Elements
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

- [HTML-Tabellen lernen](/de/docs/Learn/HTML/Tables)
- {{HTMLElement("caption")}}, {{HTMLElement("col")}}, {{HTMLElement("colgroup")}}, {{HTMLElement("table")}}, {{HTMLElement("tbody")}}, {{HTMLElement("tfoot")}}, {{HTMLElement("th")}}, {{HTMLElement("thead")}}, {{HTMLElement("tr")}}: Andere tabellenbezogene Elemente
- {{cssxref("background-color")}}: CSS-Eigenschaft, um die Hintergrundfarbe jeder Datenzelle festzulegen
- {{cssxref("border")}}: CSS-Eigenschaft zur Steuerung der Grenzen von Datenzellen
- {{cssxref("height")}}: CSS-Eigenschaft zur Steuerung der empfohlenen Höhe der Datenzelle
- {{cssxref("text-align")}}: CSS-Eigenschaft zur horizontalen Ausrichtung des Inhalts jeder Datenzelle
- {{cssxref("vertical-align")}}: CSS-Eigenschaft zur vertikalen Ausrichtung des Inhalts jeder Datenzelle
- {{cssxref("width")}}: CSS-Eigenschaft zur Steuerung der empfohlenen Breite der Datenzelle
- {{cssxref(":nth-of-type")}}, {{cssxref(":first-of-type")}}, {{cssxref(":last-of-type")}}: CSS-Pseudoklassen zur Auswahl der gewünschten Datenzellen
