---
title: "<td>: Das Table Data Cell-Element"
slug: Web/HTML/Reference/Elements/td
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{HTMLSidebar}}

Das **`<td>`** [HTML](/de/docs/Web/HTML)-Element definiert eine Zelle einer Tabelle, die Daten enthält und als Kind des {{HTMLElement("tr")}}-Elements verwendet werden kann.

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

Dieses Element beinhaltet die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `colspan`
  - : Enthält einen nicht-negativen ganzzahligen Wert, der angibt, wie viele Spalten die Datenzelle überspannt oder erweitert. Der Standardwert ist `1`. Benutzeragenten ignorieren Werte höher als 1000 als fehlerhaft und setzen sie auf den Standardwert (`1`).
- `headers`
  - : Enthält eine Liste von durch Leerzeichen getrennten Zeichenketten, die jeweils dem `id`-Attribut der {{HTMLElement("th")}}-Elemente entsprechen, die Überschriften für diese Tabellenzelle bereitstellen.
- `rowspan`
  - : Enthält einen nicht-negativen ganzzahligen Wert, der angibt, für wie viele Zeilen die Datenzelle überspannt oder erweitert. Der Standardwert ist `1`; wenn der Wert auf `0` gesetzt ist, wird er bis zum Ende des Tabellengruppierungsabschnitts ({{HTMLElement("thead")}}, {{HTMLElement("tbody")}}, {{HTMLElement("tfoot")}}, auch wenn implizit definiert) erweitert, zu dem die Zelle gehört. Werte höher als `65534` werden auf `65534` gekürzt.

### Veraltete Attribute

Die folgenden Attribute sind veraltet und sollten nicht verwendet werden. Sie sind unten zur Referenz dokumentiert, wenn bestehender Code aktualisiert wird und aus historischem Interesse.

- `abbr` {{deprecated_inline}}

  - : Enthält eine kurze abgekürzte Beschreibung des Inhalts der Datenzelle. Einige Benutzeragenten, wie Bildschirmlesegeräte, können diese Beschreibung vor dem eigentlichen Inhalt anzeigen. Legen Sie den abgekürzten Inhalt in die Zelle und platzieren Sie die (längere) Beschreibung im [`title`](/de/docs/Web/HTML/Reference/Global_attributes/title) Attribut, da dieses Attribut veraltet ist. Bevorzugt sollte der Inhalt innerhalb der Datenzelle enthalten sein, und verwenden Sie CSS, um den überflüssigen Text [visuell zu kürzen](/de/docs/Web/CSS/text-overflow).

- `align` {{deprecated_inline}}

  - : Legt die horizontale Ausrichtung der Datenzelle fest. Die möglichen {{Glossary("enumerated", "enumerierten")}} Werte sind `left`, `center`, `right`, `justify` und `char`. Wenn unterstützt, richtet der Wert `char` den Textinhalt am im [`char`](#char)-Attribut definierten Zeichen und dem im [`charoff`](#charoff)-Attribut definierten Versatz aus. Verwenden Sie die {{cssxref("text-align")}} CSS-Eigenschaft stattdessen, da dieses Attribut veraltet ist.

- `axis` {{deprecated_inline}}

  - : Enthält eine Liste von durch Leerzeichen getrennten Zeichenketten, die jeweils dem `id`-Attribut einer Gruppe von Zellen entsprechen, für die die Datenzelle gilt.

- `bgcolor` {{deprecated_inline}}

  - : Definiert die Hintergrundfarbe der Datenzelle. Der Wert ist eine HTML-Farbe; entweder ein [6-stelliger hexadezimaler RGB-Code](/de/docs/Web/CSS/hex-color), mit einem `#` versehen, oder ein [Farb-Schlüsselwort](/de/docs/Web/CSS/named-color). Andere CSS-{{cssxref("color_value", "&lt;color&gt;")}}-Werte werden nicht unterstützt. Verwenden Sie die {{cssxref("background-color")}} CSS-Eigenschaft stattdessen, da dieses Attribut veraltet ist.

- `char` {{deprecated_inline}}

  - : Macht nichts. Es war ursprünglich dazu gedacht, die Ausrichtung des Inhalts an einem Zeichen der Datenzelle festzulegen. Typische Werte hierfür sind ein Punkt (`.`), wenn versucht wird, Zahlen oder monetäre Werte auszurichten. Wenn [`align`](#align) nicht auf `char` gesetzt ist, wird dieses Attribut ignoriert.

- `charoff` {{deprecated_inline}}

  - : Macht nichts. Es war ursprünglich dazu gedacht, die Anzahl der Zeichen anzugeben, die den Inhalt der Datenzelle vom im [`char`](#char)-Attribut angegebenen Ausrichtungszeichen versetzen.

- `height` {{deprecated_inline}}

  - : Definiert eine empfohlene Höhe für die Datenzelle. Verwenden Sie die {{cssxref("height")}} CSS-Eigenschaft stattdessen, da dieses Attribut veraltet ist.

- `scope` {{deprecated_inline}}

  - : Definiert die Zellen, zu denen die Kopfzeile (definiert im {{HTMLElement("th")}}-Element) gehört. Die möglichen {{Glossary("enumerated", "enumerierten")}} Werte sind `row`, `col`, `rowgroup` und `colgroup`. Verwenden Sie dieses Attribut nur mit dem {{HTMLElement("th")}}-Element, um die Zeile oder Spalte zu definieren, für die es eine Kopfzeile ist, da dieses Attribut für das `<td>`-Element veraltet ist.

- `valign` {{deprecated_inline}}

  - : Legt die vertikale Ausrichtung der Datenzelle fest. Die möglichen {{Glossary("enumerated", "enumerierten")}} Werte sind `baseline`, `bottom`, `middle` und `top`. Verwenden Sie die {{cssxref("vertical-align")}} CSS-Eigenschaft stattdessen, da dieses Attribut veraltet ist.

- `width` {{deprecated_inline}}
  - : Definiert eine empfohlene Breite für die Datenzelle. Verwenden Sie die {{cssxref("width")}} CSS-Eigenschaft stattdessen, da dieses Attribut veraltet ist.

## Anwendungshinweise

- Das `<td>` darf nur innerhalb eines {{HTMLElement("tr")}}-Elements verwendet werden.
- Bei Verwendung der [`colspan`](#colspan) und [`rowspan`](#rowspan) Attribute, um Datenzellen über mehrere Spalten und Zeilen zu spannen, werden Zellen ohne definierte Attribute (mit einem Standardwert von `1`) automatisch in freie verfügbare Räume der Tabellenstruktur eingefügt, die 1x1 Zellen umfassen, wie in der folgenden Abbildung veranschaulicht:

  ![Illustration, die das Spannen von Spalten und Zeilen von Tabellenzellen zeigt: Zellen 1, 3 und 4 spannen sich über zwei Zeilen; Zelle 2 spannt sich über zwei Spalten; Zellen 5 und 6 passen in die verfügbaren Zellen, das sind die zweite und dritte Spalte in der zweiten Zeile](column-row-span.png)

  > [!NOTE]
  > Diese Attribute dürfen nicht verwendet werden, um Zellen zu überlappen.

## Beispiele

Siehe {{HTMLElement("table")}}, um ein vollständiges Tabellenbeispiel mit allgemeinen Standards und bewährten Praktiken einzuführen.

### Grundlegende Datenzellen

In diesem Beispiel werden `<td>`-Elemente zusammen mit anderen tabellenbezogenen Elementen verwendet, um eine grundlegende Tabelle mit Daten über das phonetische Alphabet einzuführen.

#### HTML

Einige Tabellenzeilen ({{HTMLElement("tr")}}-Elemente) enthalten sowohl Kopfzellen ({{HTMLElement("th")}}-Elemente) als auch Datenzellen `<td>`-Elemente. Das {{HTMLElement("th")}}-Element, das das erste Kind jeder Zeile ist, bildet die erste Spalte der Tabelle, wobei jedes `<th>` die Zeilenüberschrift für die Datenzellen innerhalb dieser Zeile bereitstellt. Jedes entsprechende `<td>`-Element enthält Daten, die mit ihrer jeweiligen Spaltenüberschrift und Zeilenüberschrift-Zelle ausgerichtet sind.

> [!NOTE]
> Normalerweise würde eine Tabellengruppierung mit Spaltenüberschriften implementiert werden, um das Verständnis der Informationen in den Spalten zu erleichtern. Die {{HTMLElement("thead")}} und {{HTMLElement("tbody")}}-Elemente würden verwendet, um solche Zeilen von Überschriften und Daten in die entsprechenden Tabellenkopf- und -körperschnitte zu gruppieren. Dies ist in diesem Beispiel nicht implementiert, um den Fokus auf die Datenzellen zu legen und die Komplexität dieses Beispiels zu reduzieren.

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

Einfaches CSS wird verwendet, um die Tabelle und ihre Zellen zu stylen. CSS-[Attributselektoren](/de/docs/Web/CSS/Attribute_selectors) und die {{cssxref(":nth-of-type")}} Pseudo-Klasse werden verwendet, um das Aussehen der Zellen abzuwechseln und das Verständnis und die Identifikation der Informationen in der Tabelle zu erleichtern.

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

### Spalten- und Zeilenübergreifende Zellen

Dieses Beispiel erweitert und verbessert die grundlegende Tabelle aus dem [vorherigen Beispiel](#grundlegende_datenzellen) durch Hinzufügen einer zusätzlichen "ABC"-Zelle.

#### HTML

Eine zusätzliche Datenzelle (`<td>`-Element) wird innerhalb der ersten Zeile ({{HTMLElement("tr")}}-Element) eingefügt. Dies erstellt eine vierte Spalte in der Tabelle.

Mit dem [`rowspan`](#rowspan)-Attribut wird die "ABC"-Zelle über die ersten drei Zeilen der Tabelle gespannt. Die letzten Datenzellen der folgenden Zeilen spannen jeweils zwei Spalten. Dies wird durch das [`colspan`](#colspan)-Attribut erreicht, das sie korrekt in der Tabellenstruktur ausrichtet. Beachten Sie, dass der Tabelle eine zusätzliche Zeile ({{HTMLElement("tr")}}-Element) hinzugefügt wird, um dies zu veranschaulichen.

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

Die {{cssxref(":first-of-type")}} und {{cssxref(":last-of-type")}} Pseudo-Klassen werden im CSS verwendet, um die hinzugefügte "ABC"-Datenzelle auszuwählen und zu stylen.

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

Für komplexere Beziehungen zwischen Datenzellen (`<td>`-Elementen) und Kopfzellen ({{HTMLElement("th")}}-Elementen) kann allein die Verwendung von {{HTMLElement("th")}}-Elementen mit dem [`scope`](/de/docs/Web/HTML/Reference/Elements/th#scope)-Attribut für unterstützende Technologien, insbesondere Bildschirmlesegeräte, möglicherweise nicht ausreichen.

#### HTML

Um die {{Glossary("accessibility", "Barrierefreiheit")}} des [vorherigen Beispiels](#spalten-_und_zeilenübergreifende_zellen) zu verbessern und damit Bildschirmlesegeräte beispielsweise die Überschriften zu jeder Datenzelle vorlesen können, kann das [`headers`](#headers)-Attribut zusammen mit [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id)-Attributen eingeführt werden. Jede Zeilenkopfzelle ({{HTMLElement("th")}}-Element), die mit der "ABC"-Datenzelle, d.h. den Buchstaben "A", "B" und "C", verknüpft ist, erhält einen eindeutigen Bezeichner mit dem [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id)-Attribut. Die "ABC"-Datenzelle (`<td>`-Element) verwendet dann diese `id`-Werte in einer durch Leerzeichen getrennten Liste für das [`headers`](#headers)-Attribut.

> [!NOTE]
> Es wird empfohlen, beschreibendere und nützlichere Werte für das [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id)-Attribut zu verwenden. Jede `id` in einem Dokument muss einzigartig für dieses Dokument sein. In diesem Beispiel sind die `id`-Werte einzelne Zeichen, um den Fokus auf das Konzept des [`headers`](#headers)-Attributs zu halten.

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

Während das [visuelle Ergebnis](#result_2) unverändert vom [vorherigen Beispiel](#spalten-_und_zeilenübergreifende_zellen) bleibt, ist jetzt jede Datenzelle (`<td>`) explizit mit ihrer Zeilenkopfzelle (`<th>`) verknüpft.

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de-DE/docs/Web/HTML/Guides/Content_categories"
          >Inhaltskategorien</a
        >
      </th>
      <td>Abschneidungs-Root.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content"
          >Fließinhalt</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>
        Der Starttag ist obligatorisch.<br />Der Endtag kann ausgelassen werden, wenn er
        unmittelbar von einem {{HTMLElement("th")}} oder
        <code>&lt;td&gt;</code>-Element gefolgt wird, oder wenn keine weiteren Daten in seinem
        übergeordneten Element vorhanden sind.
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
        wenn es ein Nachfahre eines {{HTMLElement("table")}}-Elementes ist, oder <code
          ><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role"
            >gridcell</a
          ></code
        >
        wenn es ein Nachfahre eines Elementes mit <code
          ><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role"
            >grid</a
          ></code
        > Rolle ist
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

- [Lernen: HTML-Tabelle Grundlagen](/de/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics)
- {{HTMLElement("caption")}}, {{HTMLElement("col")}}, {{HTMLElement("colgroup")}}, {{HTMLElement("table")}}, {{HTMLElement("tbody")}}, {{HTMLElement("tfoot")}}, {{HTMLElement("th")}}, {{HTMLElement("thead")}}, {{HTMLElement("tr")}}: Andere tabellenbezogene Elemente
- {{cssxref("background-color")}}: CSS-Eigenschaft zum Setzen der Hintergrundfarbe jeder Datenzelle
- {{cssxref("border")}}: CSS-Eigenschaft zur Steuerung der Ränder von Datenzellen
- {{cssxref("height")}}: CSS-Eigenschaft zur Steuerung der empfohlenen Höhe der Datenzelle
- {{cssxref("text-align")}}: CSS-Eigenschaft zur horizontalen Ausrichtung des Inhalts jeder Datenzelle
- {{cssxref("vertical-align")}}: CSS-Eigenschaft zur vertikalen Ausrichtung des Inhalts jeder Datenzelle
- {{cssxref("width")}}: CSS-Eigenschaft zur Steuerung der empfohlenen Breite der Datenzelle
- {{cssxref(":nth-of-type")}}, {{cssxref(":first-of-type")}}, {{cssxref(":last-of-type")}}: CSS-Pseudoklassen zur Auswahl der gewünschten Datenzellen
