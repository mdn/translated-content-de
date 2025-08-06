---
title: "<td>: Das Table Data Cell-Element"
slug: Web/HTML/Reference/Elements/td
l10n:
  sourceCommit: f2d281d86396bcd2dcecfdabd5837b1590132aa6
---

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
  color: white;
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
  - : Beinhaltet einen nicht-negativen ganzzahligen Wert, der angibt, wie viele Spalten die Datenzelle überspannt oder erweitert. Der Standardwert ist `1`. Benutzeragenten ignorieren Werte über 1000 als falsch und setzen sie auf den Standardwert (`1`).
- `headers`
  - : Beinhaltet eine Liste von durch Leerzeichen getrennten Zeichenfolgen, die jeweils dem `id`-Attribut der {{HTMLElement("th")}} Elemente entsprechen, die Überschriften für diese Tabellenzelle bereitstellen.
- `rowspan`
  - : Beinhaltet einen nicht-negativen ganzzahligen Wert, der angibt, für wie viele Reihen die Datenzelle überspannt oder erweitert. Der Standardwert ist `1`; wenn sein Wert auf `0` gesetzt ist, erstreckt er sich bis zum Ende des Tabellenabschnitts ({{HTMLElement("thead")}}, {{HTMLElement("tbody")}}, {{HTMLElement("tfoot")}}, auch wenn dieser implizit definiert ist), zu dem die Zelle gehört. Werte über `65534` werden auf `65534` gekürzt.

### Veraltete Attribute

Die folgenden Attribute sind veraltet und sollten nicht verwendet werden. Sie sind nur dokumentiert, um vorhandenen Code zu aktualisieren und aus historischem Interesse.

- `abbr` {{deprecated_inline}}
  - : Enthält eine kurze abgekürzte Beschreibung des Inhalts der Datenzelle. Einige Benutzeragenten, wie Sprachleser, können diese Beschreibung vor dem eigentlichen Inhalt wiedergeben. Platzieren Sie den abgekürzten Inhalt innerhalb der Zelle und die (längere) Beschreibung im [`title`](/de/docs/Web/HTML/Reference/Global_attributes/title) Attribut, da dieses Attribut veraltet ist. Oder bevorzugen Sie es, den Inhalt in die Datenzelle einzubeziehen und verwenden Sie CSS, um [überlaufenden Text visuell abzuschneiden](/de/docs/Web/CSS/text-overflow).

- `align` {{deprecated_inline}}
  - : Gibt die horizontale Ausrichtung der Datenzelle an. Die möglichen {{Glossary("enumerated", "enumerierten")}} Werte sind `left`, `center`, `right`, `justify`, und `char`. Wenn unterstützt, richtet der `char`-Wert den Textinhalt an dem im [`char`](#char) Attribut definierten Zeichen und dem im [`charoff`](#charoff) Attribut definierten Versatz aus. Verwenden Sie stattdessen die {{cssxref("text-align")}} CSS-Eigenschaft, da dieses Attribut veraltet ist.

- `axis` {{deprecated_inline}}
  - : Enthält eine Liste von durch Leerzeichen getrennten Zeichenfolgen, die jeweils dem `id`-Attribut einer Gruppe von Zellen entsprechen, auf die die Datenzelle angewendet wird.

- `bgcolor` {{deprecated_inline}}
  - : Bestimmt die Hintergrundfarbe der Datenzelle. Der Wert ist eine HTML-Farbe; entweder ein [6-stelliger hexadezimaler RGB-Code](/de/docs/Web/CSS/hex-color), mit einem `#` vorangestellt, oder ein [Farb-Schlüsselwort](/de/docs/Web/CSS/named-color). Andere CSS {{cssxref("color_value", "&lt;color&gt;")}} Werte werden nicht unterstützt. Verwenden Sie die {{cssxref("background-color")}} CSS-Eigenschaft anstelle dieses Attributs, da es veraltet ist.

- `char` {{deprecated_inline}}
  - : Macht nichts. Es war ursprünglich gedacht, den Inhalt an einem Zeichen der Datenzelle auszurichten. Typische Werte hierfür sind ein Punkt (`.`), wenn versucht wird, Zahlen oder Geldbeträge auszurichten. Wenn [`align`](#align) nicht auf `char` gesetzt ist, wird dieses Attribut ignoriert.

- `charoff` {{deprecated_inline}}
  - : Macht nichts. Es war ursprünglich dafür gedacht, die Anzahl der Zeichen anzugeben, um den Datenzelleninhalt vom im [`char`](#char) Attribut angegebenen Ausrichtungszeichen zu versetzen.

- `height` {{deprecated_inline}}
  - : Definiert eine empfohlene Datenzellenhöhe. Verwenden Sie die {{cssxref("height")}} CSS-Eigenschaft, da dieses Attribut veraltet ist.

- `scope` {{deprecated_inline}}
  - : Definiert die Zellen, auf die sich die Kopfzelle (definiert im {{HTMLElement("th")}} Element) bezieht. Die möglichen {{Glossary("enumerated", "enumerierten")}} Werte sind `row`, `col`, `rowgroup`, und `colgroup`. Verwenden Sie dieses Attribut nur mit dem {{HTMLElement("th")}} Element, um die Zeile oder Spalte zu definieren, für die es ein Kopf ist, da dieses Attribut für das `<td>` Element veraltet ist.

- `valign` {{deprecated_inline}}
  - : Gibt die vertikale Ausrichtung der Datenzelle an. Die möglichen {{Glossary("enumerated", "enumerierten")}} Werte sind `baseline`, `bottom`, `middle`, und `top`. Verwenden Sie die {{cssxref("vertical-align")}} CSS-Eigenschaft stattdessen, da dieses Attribut veraltet ist.

- `width` {{deprecated_inline}}
  - : Definiert eine empfohlene Datenzellenbreite. Verwenden Sie die {{cssxref("width")}} CSS-Eigenschaft anstelle dieses Attributs, da es veraltet ist.

## Verwendungshinweise

- Das `<td>` darf nur innerhalb eines {{HTMLElement("tr")}} Elements verwendet werden.
- Beim Verwenden der [`colspan`](#colspan) und [`rowspan`](#rowspan) Attribute, um Datenzellen über mehrere Spalten und Zeilen hinweg zu erstrecken, werden Zellen ohne diese definierten Attribute (mit einem Standardwert von `1`) automatisch in freiverfügbare Bereiche der Tabellenstruktur eingefügt, die 1x1 Zellen umfassen, wie in der folgenden Abbildung dargestellt:

  ![Illustration, die das Überspannen von Tabellenspalten und -zeilen demonstriert: Zellen 1, 3 und 4 überspannen zwei Zeilen; Zelle 2 überspannt zwei Spalten; Zellen 5 und 6 fügen sich in die verfügbaren Zellen ein, die die zweite und dritte Spalte in der zweiten Reihe sind](/shared-assets/images/diagrams/html/table/column-row-span.png)

  > [!NOTE]
  > Diese Attribute dürfen nicht verwendet werden, um Zellen zu überlappen.

## Beispiele

Sehen Sie {{HTMLElement("table")}} für ein vollständiges Tabellenbeispiel, das allgemeine Standards und Best Practices vorstellt.

### Grundlegende Datenzellen

Dieses Beispiel verwendet `<td>` Elemente zusammen mit anderen tabellenbezogenen Elementen, um eine einfache Tabelle mit Daten zum phonetischen Alphabet einzuführen.

#### HTML

Einige Tabellenzeilen ({{HTMLElement("tr")}} Elemente) enthalten sowohl Kopfzellen ({{HTMLElement("th")}} Elemente) als auch Datenzellen `<td>` Elemente. Das {{HTMLElement("th")}} Element, das das erste Kind jeder Reihe ist, bildet die erste Spalte der Tabelle, wobei jedes `<th>` die Zeilenüberschrift für die Datenzellen innerhalb dieser Zeile bereitstellt. Jedes entsprechende `<td>` Element enthält Daten, die mit seiner jeweiligen Spaltenüberschrift und Zeilenüberschrift-Zelle ausgerichtet sind.

> [!NOTE]
> Normalerweise würde eine Tabellenspaltenüberschriftengruppe implementiert werden, um das Verständnis der Informationen in den Spalten zu erleichtern. Die {{HTMLElement("thead")}} und {{HTMLElement("tbody")}} Elemente würden verwendet, um solche Reihen von Überschriften und Daten in den jeweiligen Tabellenkopf- und -körperabschnitten zu gruppieren. Dies ist in diesem Beispiel nicht implementiert, um den Fokus auf die Datenzellen zu legen und die Komplexität dieses Beispiels zu reduzieren.

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

Etwas grundlegendes CSS wird verwendet, um die Tabelle und ihre Zellen zu stylen. CSS [Attributselektoren](/de/docs/Web/CSS/Attribute_selectors) und die {{cssxref(":nth-of-type")}} Pseudoklasse werden verwendet, um das Erscheinungsbild der Zellen zu wechseln und das Verständnis der Informationen in der Tabelle zu erleichtern.

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

Dieses Beispiel erweitert und verbessert die Grundtabelle aus dem [vorherigen Beispiel](#grundlegende_datenzellen) durch das Hinzufügen einer zusätzlichen "ABC"-Zelle.

#### HTML

Eine zusätzliche Datenzelle (`<td>` Element) wird in die erste Reihe ({{HTMLElement("tr")}} Element) eingeführt. Dies erzeugt eine vierte Spalte in der Tabelle.

Durch das Verwenden des [`rowspan`](#rowspan) Attributs, wird die "ABC"-Zelle über die ersten drei Reihen der Tabelle erstreckt. Die letzten Datenzellen der folgenden Reihen überspannen jeweils zwei Spalten. Dies wird mit dem [`colspan`](#colspan) Attribut erreicht und sie korrekt innerhalb der Tabellenstruktur ausgerichtet. Beachten Sie, dass der Tabelle eine zusätzliche Zeile ({{HTMLElement("tr")}} Element) hinzugefügt wurde, um dies zu veranschaulichen.

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

Die {{cssxref(":first-of-type")}} und {{cssxref(":last-of-type")}} Pseudoklassen werden im CSS verwendet, um die hinzugefügte "ABC"-Datenzelle auszuwählen und zu stylen.

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

Für komplexere Beziehungen zwischen Datenzellen (`<td>` Elemente) und Kopfzellen ({{HTMLElement("th")}} Elemente), kann die Verwendung von {{HTMLElement("th")}} Elementen mit dem [`scope`](/de/docs/Web/HTML/Reference/Elements/th#scope) Attribut alleine für unterstützende Technologien, insbesondere Screen Reader, nicht ausreichend sein.

#### HTML

Um die {{Glossary("accessibility", "Zugänglichkeit")}} des [vorherigen Beispiels](#spalten-_und_zeilenüberspannung) zu verbessern und um Screen Readern z.B. die Möglichkeit zu geben, die Header zu lesen, die mit jeder Datenzelle verknüpft sind, kann das [`headers`](#headers) Attribut zusammen mit dem [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) Attribut eingeführt werden. Jede Zeilenkopfzelle ({{HTMLElement("th")}} Element), die mit der "ABC"-Datenzelle verbunden ist, d.h. die Buchstaben "A", "B" und "C", erhält mit dem [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) Attribut eine eindeutige Kennung. Die "ABC"-Datenzelle (`<td>` Element) verwendet dann diese `id`-Werte in einer durch Leerzeichen getrennten Liste für das [`headers`](#headers) Attribut.

> [!NOTE]
> Es wird empfohlen, aussagekräftigere und nützlichere Werte für das [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) Attribut zu verwenden. Jedes `id` in einem Dokument muss für dieses Dokument eindeutig sein. In diesem Beispiel sind die `id` Werte einzelne Zeichen, um den Fokus auf das Konzept des [`headers`](#headers) Attributs zu legen.

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

Während das [visuelle Ergebnis](#result_2) sich vom [vorherigen Tabellenbeispiel](#spalten-_und_zeilenüberspannung) nicht geändert hat, ist jede Datenzelle (`<td>`) jetzt explizit mit ihrer Zeilenkopfzelle (`<th>`) verknüpft.

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Guides/Content_categories">Inhaltskategorien</a>
      </th>
      <td>Sektionswurzel.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content">Flow-Inhalt</a>
        .
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>
        Der Starttag ist obligatorisch.<br />Der Endtag kann weggelassen werden, wenn direkt darauf ein {{HTMLElement("th")}} oder
        <code>&lt;td&gt;</code> Element folgt oder wenn keine weiteren Daten im übergeordneten Element vorhanden sind.
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässige Eltern</th>
      <td>Ein {{HTMLElement("tr")}} Element.</td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <code
          ><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/cell_role"
            >cell</a
          ></code
        >
        wenn ein Nachkomme eines {{HTMLElement("table")}} Elements, oder <code
          ><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role"
            >gridcell</a
          ></code
        >
        wenn ein Nachkomme eines Elements mit <code
          ><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role"
            >grid</a
          ></code
        > Rolle
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässige ARIA-Rollen</th>
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

- [Lernen: Grundlagen der HTML-Tabellen](/de/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics)
- {{HTMLElement("caption")}}, {{HTMLElement("col")}}, {{HTMLElement("colgroup")}}, {{HTMLElement("table")}}, {{HTMLElement("tbody")}}, {{HTMLElement("tfoot")}}, {{HTMLElement("th")}}, {{HTMLElement("thead")}}, {{HTMLElement("tr")}}: Andere tabellenbezogene Elemente
- {{cssxref("background-color")}}: CSS-Eigenschaft zur Festlegung der Hintergrundfarbe jeder Datenzelle
- {{cssxref("border")}}: CSS-Eigenschaft zur Steuerung der Ränder von Datenzellen
- {{cssxref("height")}}: CSS-Eigenschaft zur Steuerung der empfohlenen Höhe der Datenzelle
- {{cssxref("text-align")}}: CSS-Eigenschaft zur horizontalen Ausrichtung des Inhalts jeder Datenzelle
- {{cssxref("vertical-align")}}: CSS-Eigenschaft zur vertikalen Ausrichtung des Inhalts jeder Datenzelle
- {{cssxref("width")}}: CSS-Eigenschaft zur Steuerung der empfohlenen Breite der Datenzelle
- {{cssxref(":nth-of-type")}}, {{cssxref(":first-of-type")}}, {{cssxref(":last-of-type")}}: CSS-Pseudoklassen, um die gewünschten Datenzellen auszuwählen
