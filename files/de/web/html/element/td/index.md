---
title: "<td>: Das Table Data Cell-Element"
slug: Web/HTML/Element/td
l10n:
  sourceCommit: 7e044f5205168346902c48ebdfcb407712b09dbd
---

{{HTMLSidebar}}

Das **`<td>`** [HTML](/de/docs/Web/HTML)-Element definiert eine Zelle einer Tabelle, die Daten enthält, und kann als Kind des {{HTMLElement("tr")}}-Elements verwendet werden.

{{EmbedInteractiveExample("pages/tabbed/td.html","tabbed-taller")}}

## Attribute

Dieses Element umfasst die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- `colspan`
  - : Beinhaltet einen nicht-negativen Ganzzahlenwert, der angibt, wie viele Spalten die Datenzelle überspannt oder erweitert. Der Standardwert ist `1`. Benutzeragenten behandeln Werte höher als 1000 als falsch und setzen den Standardwert (`1`).
- `headers`
  - : Beinhaltet eine Liste von durch Leerzeichen getrennten Zeichenketten, die jeweils dem `id`-Attribut der {{HTMLElement("th")}}-Elemente entsprechen, die Überschriften für diese Tabellenzelle bereitstellen.
- `rowspan`
  - : Beinhaltet einen nicht-negativen Ganzzahlenwert, der angibt, für wie viele Zeilen die Datenzelle überspannt oder erweitert. Der Standardwert ist `1`; wenn ihr Wert auf `0` gesetzt ist, erstreckt sie sich bis zum Ende des Tabellengruppierungsabschnitts ({{HTMLElement("thead")}}, {{HTMLElement("tbody")}}, {{HTMLElement("tfoot")}}, auch wenn sie implizit definiert ist), zu dem die Zelle gehört. Werte höher als `65534` werden auf `65534` beschränkt.

### Veraltete Attribute

Die folgenden Attribute sind veraltet und sollten nicht verwendet werden. Sie sind dokumentiert, um beim Aktualisieren vorhandenen Codes als Referenz zu dienen und aus historischem Interesse.

- `abbr` {{deprecated_inline}}

  - : Enthält eine kurze abgekürzte Beschreibung des Inhalts der Datenzelle. Einige Benutzeragenten, wie Screenreader, können diese Beschreibung vor dem Inhalt selbst präsentieren. Platzieren Sie den abgekürzten Inhalt in der Zelle und die (längere) Beschreibung im [`title`](/de/docs/Web/HTML/Global_attributes/title)-Attribut, da dieses Attribut veraltet ist. Oder bevorzugen Sie es, den Inhalt innerhalb der Datenzelle zu enthalten und verwenden Sie CSS, um den überflüssigen Text [visuell abzuschneiden](/de/docs/Web/CSS/text-overflow).

- `align` {{deprecated_inline}}

  - : Gibt die horizontale Ausrichtung der Datenzelle an. Die möglichen {{Glossary("enumerated", "aufgezählten")}} Werte sind `left`, `center`, `right`, `justify` und `char`. Wenn unterstützt, richtet der `char`-Wert den Textinhalt am Zeichen aus, das im [`char`](#char)-Attribut definiert ist und den Offset, der im [`charoff`](#charoff)-Attribut definiert ist. Verwenden Sie die {{cssxref("text-align")}} CSS-Eigenschaft anstelle dieses Attributs, da dieses Attribut veraltet ist.

- `axis` {{deprecated_inline}}

  - : Enthält eine Liste von durch Leerzeichen getrennten Zeichenketten, die jeweils dem `id`-Attribut einer Gruppe von Zellen entsprechen, auf die sich die Datenzelle bezieht.

- `bgcolor` {{deprecated_inline}}

  - : Definiert die Hintergrundfarbe der Datenzelle. Der Wert ist eine HTML-Farbe; entweder ein [6-stelliges hexadezimales RGB](/de/docs/Web/CSS/hex-color), das mit einem `#` beginnt, oder ein [Farbbegriff](/de/docs/Web/CSS/named-color). Andere CSS {{cssxref("color_value", "&lt;color&gt")}}-Werte werden nicht unterstützt. Verwenden Sie stattdessen die {{cssxref("background-color")}}-CSS-Eigenschaft, da dieses Attribut veraltet ist.

- `char` {{deprecated_inline}}

  - : Macht nichts. Es war ursprünglich dazu gedacht, die Ausrichtung des Inhalts an einem Zeichen der Datenzelle zu spezifizieren. Typische Werte hierfür sind ein Punkt (`.`), wenn versucht wird, Zahlen oder Geldbeträge auszurichten. Wenn [`align`](#align) nicht auf `char` gesetzt ist, wird dieses Attribut ignoriert.

- `charoff` {{deprecated_inline}}

  - : Macht nichts. Es war ursprünglich dazu gedacht, die Anzahl der Zeichen zu spezifizieren, um den Datenzellinhalt vom Ausrichtungszeichen zu verschieben, das im [`char`](#char)-Attribut angegeben ist.

- `height` {{deprecated_inline}}

  - : Definiert eine empfohlene Höhe der Datenzelle. Verwenden Sie die {{cssxref("height")}}-CSS-Eigenschaft anstelle dieses Attributs, da dieses Attribut veraltet ist.

- `scope` {{deprecated_inline}}

  - : Definiert die Zellen, auf die sich die Kopfzeile (definiert im {{HTMLElement("th")}}-Element) bezieht. Die möglichen {{Glossary("enumerated", "aufgezählten")}} Werte sind `row`, `col`, `rowgroup` und `colgroup`. Verwenden Sie dieses Attribut nur mit dem {{HTMLElement("th")}}-Element, um die Zeile oder Spalte zu definieren, für die es eine Kopfzeile ist, da dieses Attribut für das `<td>`-Element veraltet ist.

- `valign` {{deprecated_inline}}

  - : Gibt die vertikale Ausrichtung der Datenzelle an. Die möglichen {{Glossary("enumerated", "aufgezählten")}} Werte sind `baseline`, `bottom`, `middle` und `top`. Verwenden Sie die {{cssxref("vertical-align")}}-CSS-Eigenschaft anstelle dieses Attributs, da dieses Attribut veraltet ist.

- `width` {{deprecated_inline}}

  - : Definiert eine empfohlene Breite der Datenzelle. Verwenden Sie die {{cssxref("width")}}-CSS-Eigenschaft anstelle dieses Attributs, da dieses Attribut veraltet ist.

## Nutzungshinweise

- Das `<td>` darf nur innerhalb eines {{HTMLElement("tr")}}-Elements verwendet werden.
- Beim Verwenden der [`colspan`](#colspan)- und [`rowspan`](#rowspan)-Attribute, um Datenzellen über mehrere Spalten und Zeilen hinweg zu spannen, werden Zellen ohne diese definierte Attribute (mit einem Standardwert von `1`) automatisch in freie verfügbare Plätze in der Tabellenstruktur platziert, die 1x1 Zellen entsprechen, wie in der folgenden Abbildung veranschaulicht:

  ![Illustration, die das Spannen von Spalten und Zeilen von Tabellenzellen zeigt: Zellen 1, 3 und 4 erstrecken sich über zwei Zeilen; Zelle 2 erstreckt sich über zwei Spalten; Zellen 5 und 6 passen in die verfügbaren Zellen, die die zweite und dritte Spalte in der zweiten Zeile sind](column-row-span.png)

  > [!NOTE]
  > Diese Attribute dürfen nicht verwendet werden, um Zellen zu überlappen.

## Beispiele

Siehe {{HTMLElement("table")}} für ein vollständiges Tabellenbeispiel, das gebräuchliche Standards und bewährte Praktiken einführt.

### Grundlegende Datenzellen

Dieses Beispiel verwendet `<td>`-Elemente zusammen mit anderen tabellenbezogenen Elementen, um eine grundlegende Tabelle mit Daten über das phonetische Alphabet vorzustellen.

#### HTML

Einige Tabellenzeilen ({{HTMLElement("tr")}}-Elemente) enthalten sowohl Kopfzeilen ({{HTMLElement("th")}}-Elemente) als auch Datenzellen-`<td>`-Elemente. Das {{HTMLElement("th")}}-Element, das das erste Kind jeder Zeile ist, bildet die erste Spalte der Tabelle, wobei jedes `<th>` die Zeilenüberschrift für die Datenzellen in dieser Zeile bereitstellt. Jedes entsprechende `<td>`-Element enthält Daten, die mit seiner jeweiligen Spaltenüberschrift und Zeilenüberschrift übereinstimmen.

> [!NOTE]
> Normalerweise würde eine Tabellenkopfgruppe mit Spaltenüberschriften implementiert werden, um das Verständnis der Informationen in den Spalten zu erleichtern. Die {{HTMLElement("thead")}} und {{HTMLElement("tbody")}}-Elemente würden verwendet, um solche Reihen von Überschriften und Daten in die jeweiligen Tabellenkopf- und -körperabschnitte zu gruppieren. Dies ist in diesem Beispiel nicht implementiert, um den Fokus auf die Datenzellen zu legen und die Komplexität dieses Beispiels zu reduzieren.

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

Einige grundlegende CSS-Stile werden verwendet, um die Tabelle und ihre Zellen zu gestalten. CSS-[Attributselektoren](/de/docs/Web/CSS/Attribute_selectors) und die {{cssxref(":nth-of-type")}}-Pseudoklasse werden verwendet, um das Erscheinungsbild der Zellen abzuwechseln, um das Verstehen und Erkennen der Informationen in der Tabelle zu erleichtern.

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

### Spalten- und Zeilenspannung

Dieses Beispiel erweitert und verbessert die grundlegende Tabelle aus dem [vorherigen Beispiel](#grundlegende_datenzellen) durch Hinzufügen einer zusätzlichen "ABC"-Zelle.

#### HTML

Eine zusätzliche Datenzelle (`<td>`-Element) wird in der ersten Zeile ({{HTMLElement("tr")}}-Element) eingeführt. Dies schafft eine vierte Spalte in der Tabelle.

Mit dem [`rowspan`](#rowspan)-Attribut wird die "ABC"-Zelle über die ersten drei Zeilen der Tabelle gespannt. Die letzten Datenzellen der nachfolgenden Zeilen spannen jeweils zwei Spalten. Dies geschieht durch die Verwendung des [`colspan`](#colspan)-Attributs, das sie korrekt in der Tabellenstruktur ausrichtet. Beachten Sie, dass der Tabelle eine zusätzliche Zeile ({{HTMLElement("tr")}}-Element) hinzugefügt wurde, um dies zu veranschaulichen.

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

### Datenzellen mit Kopfzellen verknüpfen

Für komplexere Beziehungen zwischen Datenzellen (`<td>`-Elemente) und Kopfzellen ({{HTMLElement("th")}}-Elemente) kann die Verwendung von {{HTMLElement("th")}}-Elementen mit dem [`scope`](/de/docs/Web/HTML/Element/th#scope)-Attribut allein für unterstützende Technologien, insbesondere Screenreader, unzureichend sein.

#### HTML

Um die {{Glossary("accessibility", "Zugänglichkeit")}} des [vorherigen Beispiels](#spalten-_und_zeilenspannung) zu verbessern und es Screenreadern beispielsweise zu ermöglichen, die mit jeder Datenzelle verknüpften Überschriften zu sprechen, kann das [`headers`](#headers)-Attribut zusammen mit den [`id`](/de/docs/Web/HTML/Global_attributes/id)-Attributen eingeführt werden. Jede Zeilenkopfzelle ({{HTMLElement("th")}}-Element), die mit der "ABC"-Datenzelle verknüpft ist, d.h. die Buchstaben "A", "B" und "C", erhält eine eindeutige Kennung mit dem [`id`](/de/docs/Web/HTML/Global_attributes/id)-Attribut. Die "ABC"-Datenzelle (`<td>`-Element) verwendet dann diese `id`-Werte in einer durch Leerzeichen getrennten Liste für das [`headers`](#headers)-Attribut.

> [!NOTE]
> Es wird empfohlen, aussagekräftigere und nützlichere Werte für das [`id`](/de/docs/Web/HTML/Global_attributes/id)-Attribut zu verwenden. Jede `id` in einem Dokument muss einzigartig für dieses Dokument sein. In diesem Beispiel sind die `id`-Werte einzelne Zeichen, um den Fokus auf das Konzept des [`headers`](#headers)-Attributs zu legen.

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

Während das [visuelle Ergebnis](#result_2) sich nicht vom [vorherigen Beispiel der Tabelle](#spalten-_und_zeilenspannung) unterscheidet, wird nun jede Datenzelle (`<td>`) explizit mit ihrer Zeilenkopfzelle (`<th>`) verknüpft.

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Content_categories">Inhaltskategorien</a>
      </th>
      <td>Sektionierungswurzel.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#flow_content"
          >Fließinhalt</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>
        Der Start-Tag ist obligatorisch.<br />Der End-Tag kann weggelassen
        werden, wenn er unmittelbar von einem {{HTMLElement("th")}}- oder
        <code>&lt;td&gt;</code>-Element gefolgt wird oder wenn keine weiteren
        Daten in seinem Elternelement vorhanden sind.
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
            >zelle</a
          ></code
        >
        wenn ein Nachkomme eines {{HTMLElement("table")}}-Elements, oder <code
          ><a href="/de/docs/Web/Accessibility/ARIA/Roles/gridcell_role"
            >rasterzelle</a
          ></code
        >
        wenn ein Nachkomme eines Elements mit <code
          ><a href="/de/docs/Web/Accessibility/ARIA/Roles/grid_role"
            >raster</a
          ></code
        > Rolle
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

- [Lernen: HTML-Tabellen](/de/docs/Learn/HTML/Tables)
- {{HTMLElement("caption")}}, {{HTMLElement("col")}}, {{HTMLElement("colgroup")}}, {{HTMLElement("table")}}, {{HTMLElement("tbody")}}, {{HTMLElement("tfoot")}}, {{HTMLElement("th")}}, {{HTMLElement("thead")}}, {{HTMLElement("tr")}}: Andere tabellenbezogene Elemente
- {{cssxref("background-color")}}: CSS-Eigenschaft zum Festlegen der Hintergrundfarbe jeder Datenzelle
- {{cssxref("border")}}: CSS-Eigenschaft zur Steuerung der Ränder von Datenzellen
- {{cssxref("height")}}: CSS-Eigenschaft zur Steuerung der empfohlenen Höhe der Datenzelle
- {{cssxref("text-align")}}: CSS-Eigenschaft zur horizontalen Ausrichtung des Inhalts jeder Datenzelle
- {{cssxref("vertical-align")}}: CSS-Eigenschaft zur vertikalen Ausrichtung des Inhalts jeder Datenzelle
- {{cssxref("width")}}: CSS-Eigenschaft zur Steuerung der empfohlenen Breite der Datenzelle
- {{cssxref(":nth-of-type")}}, {{cssxref(":first-of-type")}}, {{cssxref(":last-of-type")}}: CSS-Pseudoklassen, um die gewünschten Datenzellen auszuwählen
