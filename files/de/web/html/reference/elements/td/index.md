---
title: "`<td>` HTML-Tabellendatenzellen-Element"
short-title: <td>
slug: Web/HTML/Reference/Elements/td
l10n:
  sourceCommit: 3871111d7fb958626f9d926d8809222d318b8c72
---

Das **`<td>`**-[HTML](/de/docs/Web/HTML)-Element definiert eine Zelle einer Tabelle, die Daten enthält und als Kind des {{HTMLElement("tr")}}-Elements verwendet werden kann.

{{InteractiveExample("HTML Demo: &lt;td&gt;", "tabbed-taller")}}

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

Dieses Element umfasst die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `colspan`
  - : Enthält einen nicht-negativen ganzzahligen Wert, der angibt, über wie viele Spalten sich die Datenzelle erstreckt. Der Standardwert ist `1`. Werte über `1000` werden auf `1000` begrenzt.
- `headers`
  - : Enthält eine Liste von durch Leerzeichen getrennten Zeichenfolgen, die jeweils dem `id`-Attribut der {{HTMLElement("th")}}-Elemente entsprechen, die Überschriften für diese Tabellendatenzelle bereitstellen.
- `rowspan`
  - : Enthält einen nicht-negativen ganzzahligen Wert, der angibt, über wie viele Zeilen sich die Datenzelle erstreckt. Der Standardwert ist `1`; wenn sein Wert auf `0` gesetzt wird, erstreckt sich die Zelle bis zum Ende des Tabellengruppierungsabschnitts ({{HTMLElement("thead")}}, {{HTMLElement("tbody")}}, {{HTMLElement("tfoot")}}, auch wenn implizit definiert), zu dem die Zelle gehört. Werte über `65534` werden auf `65534` begrenzt.

### Veraltete Attribute

Die folgenden Attribute sind veraltet und sollten nicht verwendet werden. Sie sind hier dokumentiert, um beim Aktualisieren bestehender Codes und aus historischem Interesse zu helfen.

- `abbr` {{deprecated_inline}}
  - : Enthält eine kurze, abgekürzte Beschreibung des Inhalts der Datenzelle. Einige Benutzeragenten, z.B. Screenreader, können diese Beschreibung vor dem eigentlichen Inhalt präsentieren. Setzen Sie den abgekürzten Inhalt in die Zelle und die (längere) Beschreibung in das [`title`](/de/docs/Web/HTML/Reference/Global_attributes/title)-Attribut, da dieses Attribut veraltet ist. Oder, vorzugsweise, fügen Sie den Inhalt innerhalb der Datenzelle ein und verwenden Sie CSS, um [überlaufenden Text visuell zu beschneiden](/de/docs/Web/CSS/Reference/Properties/text-overflow).

- `align` {{deprecated_inline}}
  - : Gibt die horizontale Ausrichtung der Datenzelle an. Die möglichen {{Glossary("enumerated", "enumerierten")}} Werte sind `left`, `center`, `right`, `justify` und `char`. Wenn unterstützt, richtet der Wert `char` den textuellen Inhalt an dem im [`char`](#char)-Attribut definierten Zeichen und dem im [`charoff`](#charoff)-Attribut definierten Versatz aus. Verwenden Sie die {{cssxref("text-align")}} CSS-Eigenschaft stattdessen, da dieses Attribut veraltet ist.

- `axis` {{deprecated_inline}}
  - : Enthält eine Liste von durch Leerzeichen getrennten Zeichenfolgen, die jeweils dem `id`-Attribut einer Zellengruppe entsprechen, auf die sich die Datenzelle bezieht.

- `bgcolor` {{deprecated_inline}}
  - : Definiert die Hintergrundfarbe der Datenzelle. Der Wert ist eine HTML-Farbe; entweder ein [6-stelliger hexadezimaler RGB-Code](/de/docs/Web/CSS/Reference/Values/hex-color), dem ein `#` vorangestellt ist, oder ein [Farbenschlüsselwort](/de/docs/Web/CSS/Reference/Values/named-color). Andere CSS {{cssxref("&lt;color&gt;")}}-Werte werden nicht unterstützt. Verwenden Sie die {{cssxref("background-color")}} CSS-Eigenschaft stattdessen, da dieses Attribut veraltet ist.

- `char` {{deprecated_inline}}
  - : Macht nichts. Es war ursprünglich dazu gedacht, die Ausrichtung des Inhalts an einem Zeichen der Datenzelle zu spezifizieren. Typische Werte hierfür umfassen einen Punkt (`.`) beim Versuch, Zahlen oder Währungswerte auszurichten. Wenn [`align`](#align) nicht auf `char` gesetzt ist, wird dieses Attribut ignoriert.

- `charoff` {{deprecated_inline}}
  - : Macht nichts. Es war ursprünglich dazu gedacht, die Anzahl der Zeichen anzugeben, mit denen der Inhalt der Datenzelle vom im [`char`](#char)-Attribut angegebenen Ausrichtungszeichen versetzt wird.

- `height` {{deprecated_inline}}
  - : Definiert eine empfohlene Höhe der Datenzelle. Verwenden Sie die {{cssxref("height")}} CSS-Eigenschaft stattdessen, da dieses Attribut veraltet ist.

- `scope` {{deprecated_inline}}
  - : Definiert die Zellen, auf die sich die Überschrift (definiert im {{HTMLElement("th")}}-Element) bezieht. Die möglichen {{Glossary("enumerated", "enumerierten")}} Werte sind `row`, `col`, `rowgroup` und `colgroup`. Verwenden Sie dieses Attribut nur mit dem {{HTMLElement("th")}}-Element, um die Zeile oder Spalte zu definieren, für die es eine Überschrift ist, da dieses Attribut für das `<td>`-Element veraltet ist.

- `valign` {{deprecated_inline}}
  - : Gibt die vertikale Ausrichtung der Datenzelle an. Die möglichen {{Glossary("enumerated", "enumerierten")}} Werte sind `baseline`, `bottom`, `middle` und `top`. Verwenden Sie die {{cssxref("vertical-align")}} CSS-Eigenschaft stattdessen, da dieses Attribut veraltet ist.

- `width` {{deprecated_inline}}
  - : Definiert eine empfohlene Breite der Datenzelle. Verwenden Sie die {{cssxref("width")}} CSS-Eigenschaft stattdessen, da dieses Attribut veraltet ist.

## Nutzungshinweise

- Das `<td>` darf nur innerhalb eines {{HTMLElement("tr")}}-Elements verwendet werden.
- Beim Verwenden der [`colspan`](#colspan)- und [`rowspan`](#rowspan)-Attribute, um Datenzellen über mehrere Spalten und Zeilen zu erstrecken, werden Zellen ohne diese definierten Attribute (mit einem Standardwert von `1`) automatisch in freie verfügbare Räume in der Tabellenstruktur integriert, die 1x1-Zellen erstrecken, wie in der folgenden Abbildung dargestellt:

  ![Illustration, die die Spalten- und Zeilenüberlappung von Tabellendatenzellen zeigt: Zellen 1, 3 und 4 überlappen zwei Zeilen; Zelle 2 überlappt zwei Spalten; Zellen 5 und 6 fügen sich in die verfügbaren Zellen, die die zweite und dritte Spalte in der zweiten Zeile darstellen, ein](/shared-assets/images/diagrams/html/table/column-row-span.png)

  > [!NOTE]
  > Diese Attribute dürfen nicht verwendet werden, um Zellen zu überlappen.

## Beispiele

Siehe {{HTMLElement("table")}} für ein vollständiges Tabellenbeispiel, das gängige Standards und bewährte Praktiken einführt.

### Grundlegende Datenzellen

Dieses Beispiel verwendet `<td>`-Elemente zusammen mit anderen tabellenbezogenen Elementen, um eine grundlegende Tabelle mit Daten über das phonetische Alphabet einzuführen.

#### HTML

Einige Tabellenzeilen ({{HTMLElement("tr")}}-Elemente) enthalten sowohl Header-Zellen ({{HTMLElement("th")}}-Elemente) als auch Datenzellen `<td>`-Elemente. Das {{HTMLElement("th")}}-Element, das das erste Kind jeder Zeile ist, bildet die erste Spalte der Tabelle, wobei jedes `<th>` die Zeilenüberschrift für die Datenzellen innerhalb dieser Zeile bereitstellt. Jedes entsprechende `<td>`-Element enthält Daten, die mit deren jeweiliger Spaltenüberschrift und Zeilenüberschrift übereinstimmen.

> [!NOTE]
> Normalerweise würde eine Tabellenkopfgruppe mit Spaltenüberschriften implementiert, um es einfacher zu machen, die Informationen in den Spalten zu verstehen. Die {{HTMLElement("thead")}}- und {{HTMLElement("tbody")}}-Elemente würden verwendet werden, um solche Reihen von Überschriften und Daten in die jeweiligen Tabellenkopf- und Körperabschnitte zu gruppieren. Dies ist in diesem Beispiel nicht implementiert, um den Fokus auf die Datenzellen zu legen und die Komplexität dieses Beispiels zu reduzieren.

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

Einige grundlegende CSS-Stile werden verwendet, um die Tabelle und ihre Zellen zu gestalten. CSS-[Attributselektoren](/de/docs/Web/CSS/Reference/Selectors/Attribute_selectors) und die {{cssxref(":nth-of-type")}}-Pseudoklasse werden verwendet, um das Erscheinungsbild der Zellen abzuwechseln und das Verständnis der Tabelleninformationen zu erleichtern.

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

### Spalten- und Zeilenüberlappung

Dieses Beispiel erweitert und verbessert die grundlegende Tabelle aus dem [vorherigen Beispiel](#grundlegende_datenzellen) durch das Hinzufügen einer zusätzlichen "ABC"-Zelle.

#### HTML

Eine zusätzliche Datenzelle (`<td>`-Element) wird in der ersten Zeile ({{HTMLElement("tr")}}-Element) eingeführt. Dies erstellt eine vierte Spalte in der Tabelle.

Mit dem [`rowspan`](#rowspan)-Attribut wird die "ABC"-Zelle über die ersten drei Zeilen der Tabelle verteilt. Die letzten Datenzellen der nachfolgenden Zeilen erstrecken sich jeweils über zwei Spalten. Dies wird mittels des [`colspan`](#colspan)-Attributs erreicht, das diese korrekt innerhalb der Tabellenstruktur ausrichtet. Beachten Sie, dass eine zusätzliche Zeile ({{HTMLElement("tr")}}-Element) zur Tabelle hinzugefügt wird, um dies zu veranschaulichen.

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

Die {{cssxref(":first-of-type")}}- und {{cssxref(":last-of-type")}}-Pseudoklassen werden in der CSS verwendet, um die hinzugefügte "ABC"-Datenzelle auszuwählen und zu stylen.

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

### Verknüpfung von Datenzellen mit Kopfzellen

Für komplexere Beziehungen zwischen Datenzellen (`<td>`-Elementen) und Kopfzellen ({{HTMLElement("th")}}-Elementen) reicht die Verwendung von {{HTMLElement("th")}}-Elementen mit dem [`scope`](/de/docs/Web/HTML/Reference/Elements/th#scope)-Attribut allein möglicherweise nicht aus, um unterstützende Technologien, insbesondere Screenreader, zu unterstützen.

#### HTML

Um die {{Glossary("accessibility", "Barrierefreiheit")}} des [vorherigen Beispiels](#spalten-_und_zeilenüberlappung) zu verbessern und z.B. Screenreadern zu ermöglichen, die mit jeder Datenzelle assoziierten Überschriften vorzulesen, kann das [`headers`](#headers)-Attribut zusammen mit [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id)-Attributen eingeführt werden. Jede Zeilenkopfzelle ({{HTMLElement("th")}}-Element) in Verbindung mit der "ABC"-Datenzelle, d.h. die Buchstaben "A", "B" und "C", erhält einen eindeutigen Bezeichner mittels des [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id)-Attributs. Die "ABC"-Datenzelle (`<td>`-Element) verwendet dann diese `id`-Werte in einer durch Leerzeichen getrennten Liste für das [`headers`](#headers)-Attribut.

> [!NOTE]
> Es wird empfohlen, mehr beschreibende und nützliche Werte für das [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id)-Attribut zu verwenden. Jedes `id` in einem Dokument muss für dieses Dokument eindeutig sein. In diesem Beispiel sind die `id`-Werte einzelne Zeichen, um den Fokus auf das Konzept des [`headers`](#headers)-Attributs zu legen.

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

Während das [visuelle Ergebnis](#result_2) unverändert zum [vorherigen Tabellenschema](#spalten-_und_zeilenüberlappung) bleibt, ist jetzt jede Datenzelle (`<td>`) explizit mit ihrer Zeilenkopfzelle (`<th>`) verknüpft.

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Guides/Content_categories"
          >Inhaltskategorien</a
        >
      </th>
      <td>Sektionierungs-Root.</td>
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
        Der Starttag ist zwingend erforderlich.<br />Der Endtag kann weggelassen werden, wenn es direkt von einem {{HTMLElement("th")}} oder
        <code>&lt;td&gt;</code>-Element gefolgt wird oder wenn in seinem Elternelement keine weiteren Daten mehr vorhanden sind.
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässige Eltern</th>
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
        wenn Nachfahre eines {{HTMLElement("table")}}-Elements, oder <code
          ><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role"
            >gridcell</a
          ></code
        >
        wenn Nachfahre eines Elements mit <code
          ><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role"
            >grid</a
          ></code
        >-Rolle
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässige ARIA-Rollen</th>
      <td>Beliebig</td>
    </tr>
    <tr>
      <th scope="row">DOM-Interface</th>
      <td>[`HTMLTableCellElement`](/de/docs/Web/API/HTMLTableCellElement)</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Lernen: HTML-Tabellen-Grundlagen](/de/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics)
- {{HTMLElement("caption")}}, {{HTMLElement("col")}}, {{HTMLElement("colgroup")}}, {{HTMLElement("table")}}, {{HTMLElement("tbody")}}, {{HTMLElement("tfoot")}}, {{HTMLElement("th")}}, {{HTMLElement("thead")}}, {{HTMLElement("tr")}}: Andere tabellenbezogene Elemente
- {{cssxref("background-color")}}: CSS-Eigenschaft, um die Hintergrundfarbe jeder Datenzelle festzulegen
- {{cssxref("border")}}: CSS-Eigenschaft, um Ränder von Datenzellen zu steuern
- {{cssxref("height")}}: CSS-Eigenschaft, um die empfohlene Höhe der Datenzelle zu steuern
- {{cssxref("text-align")}}: CSS-Eigenschaft, um den Inhalt jeder Datenzelle horizontal auszurichten
- {{cssxref("vertical-align")}}: CSS-Eigenschaft, um den Inhalt jeder Datenzelle vertikal auszurichten
- {{cssxref("width")}}: CSS-Eigenschaft, um die empfohlene Breite der Datenzelle zu steuern
- {{cssxref(":nth-of-type")}}, {{cssxref(":first-of-type")}}, {{cssxref(":last-of-type")}}: CSS-Pseudoklassen, um die gewünschten Datenzellen auszuwählen
