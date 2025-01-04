---
title: "<td>: Das Table Data Cell-Element"
slug: Web/HTML/Element/td
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{HTMLSidebar}}

Das **`<td>`** [HTML](/de/docs/Web/HTML) Element definiert eine Zelle einer Tabelle, die Daten enthält und als Kind des {{HTMLElement("tr")}} Elements verwendet werden kann.

{{EmbedInteractiveExample("pages/tabbed/td.html","tabbed-taller")}}

## Attribute

Dieses Element enthält die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- `colspan`
  - : Enthält einen nicht-negativen ganzzahligen Wert, der angibt, über wie viele Spalten sich die Datenzelle erstreckt oder ausdehnt. Der Standardwert ist `1`. Benutzeragenten ignorieren Werte größer als 1000 als falsch und setzen sie auf den Standardwert (`1`).
- `headers`
  - : Enthält eine Liste von leerzeichengetrennten Zeichenfolgen, die jeweils dem `id`-Attribut der {{HTMLElement("th")}}-Elemente entsprechen, die Überschriften für diese Tabellenzelle bereitstellen.
- `rowspan`
  - : Enthält einen nicht-negativen ganzzahligen Wert, der angibt, über wie viele Zeilen sich die Datenzelle erstreckt oder ausdehnt. Der Standardwert ist `1`; wenn der Wert auf `0` gesetzt ist, erstreckt er sich bis zum Ende des Tabellengruppenabschnitts ({{HTMLElement("thead")}}, {{HTMLElement("tbody")}}, {{HTMLElement("tfoot")}}, auch wenn implizit definiert), zu dem die Zelle gehört. Werte größer als `65534` werden auf `65534` gekappt.

### Veraltete Attribute

Die folgenden Attribute sind veraltet und sollten nicht verwendet werden. Sie sind unten dokumentiert, um bei der Aktualisierung bestehender Codes und aus historischem Interesse als Referenz zu dienen.

- `abbr` {{deprecated_inline}}

  - : Enthält eine kurze, abgekürzte Beschreibung des Inhalts der Datenzelle. Einige Benutzeragenten, wie z.B. Sprachsynthese-Geräte, können diese Beschreibung vor dem eigentlichen Inhalt präsentieren. Setzen Sie den abgekürzten Inhalt in die Zelle und platzieren Sie die (längere) Beschreibung in das [`title`](/de/docs/Web/HTML/Global_attributes/title) Attribut, da dieses Attribut veraltet ist. Oder vorzugsweise den Inhalt in der Datenzelle belassen und CSS verwenden, um [überlaufenden Text visuell zu kürzen](/de/docs/Web/CSS/text-overflow).

- `align` {{deprecated_inline}}

  - : Gibt die horizontale Ausrichtung der Datenzelle an. Die möglichen {{Glossary("enumerated", "aufzählbaren")}} Werte sind `left`, `center`, `right`, `justify` und `char`. Wenn `char` unterstützt wird, richtet der Wert den Textinhalt auf das Zeichen aus, das im [`char`](#char) Attribut definiert ist, und den Offset, der durch das [`charoff`](#charoff) Attribut definiert ist. Verwenden Sie stattdessen die {{cssxref("text-align")}} CSS-Eigenschaft, da dieses Attribut veraltet ist.

- `axis` {{deprecated_inline}}

  - : Enthält eine Liste von leerzeichengetrennten Zeichenfolgen, die jeweils dem `id`-Attribut einer Gruppe von Zellen entsprechen, auf die sich die Datenzelle bezieht.

- `bgcolor` {{deprecated_inline}}

  - : Definiert die Hintergrundfarbe der Datenzelle. Der Wert ist eine HTML-Farbe; entweder ein [6-stelliger hexadezimaler RGB-Code](/de/docs/Web/CSS/hex-color), mit einem `#` als Präfix, oder ein [Farb-Schlüsselwort](/de/docs/Web/CSS/named-color). Andere CSS {{cssxref("color_value", "&lt;color&gt")}} Werte werden nicht unterstützt. Verwenden Sie stattdessen die {{cssxref("background-color")}} CSS-Eigenschaft, da dieses Attribut veraltet ist.

- `char` {{deprecated_inline}}

  - : Macht nichts. Es war ursprünglich dazu gedacht, die Ausrichtung des Inhalts auf ein Zeichen der Datenzelle zu spezifizieren. Typische Werte beinhalten einen Punkt (`.`), wenn versucht wird, Zahlen oder Geldbeträge auszurichten. Wenn [`align`](#align) nicht auf `char` gesetzt ist, wird dieses Attribut ignoriert.

- `charoff` {{deprecated_inline}}

  - : Macht nichts. Es war ursprünglich dazu gedacht, die Anzahl der Zeichen anzugeben, um den Inhalt der Datenzelle vom Ausrichtungszeichen zu verschieben, das durch das [`char`](#char) Attribut angegeben ist.

- `height` {{deprecated_inline}}

  - : Definiert eine empfohlene Datenzellenhöhe. Verwenden Sie stattdessen die {{cssxref("height")}} CSS-Eigenschaft, da dieses Attribut veraltet ist.

- `scope` {{deprecated_inline}}

  - : Definiert die Zellen, auf die sich die Überschrift (definiert im {{HTMLElement("th")}} Element) bezieht. Die möglichen {{Glossary("enumerated", "aufzählbaren")}} Werte sind `row`, `col`, `rowgroup`, und `colgroup`. Verwenden Sie dieses Attribut nur mit dem {{HTMLElement("th")}} Element, um die Zeile oder Spalte zu definieren, für die es eine Überschrift ist, da dieses Attribut für das `<td>` Element veraltet ist.

- `valign` {{deprecated_inline}}

  - : Gibt die vertikale Ausrichtung der Datenzelle an. Die möglichen {{Glossary("enumerated", "aufzählbaren")}} Werte sind `baseline`, `bottom`, `middle`, und `top`. Verwenden Sie stattdessen die {{cssxref("vertical-align")}} CSS-Eigenschaft, da dieses Attribut veraltet ist.

- `width` {{deprecated_inline}}

  - : Definiert eine empfohlene Datenzellenbreite. Verwenden Sie stattdessen die {{cssxref("width")}} CSS-Eigenschaft, da dieses Attribut veraltet ist.

## Nutzungshinweise

- Das `<td>` darf nur innerhalb eines {{HTMLElement("tr")}} Elements verwendet werden.
- Beim Verwenden der [`colspan`](#colspan) und [`rowspan`](#rowspan) Attribute, um Datenzellen über mehrere Spalten und Zeilen zu erstrecken, werden Zellen ohne diese definierten Attribute (mit einem Standardwert von `1`) automatisch in die frei verfügbaren Bereiche der Tabellenstruktur eingefügt, die 1x1 Zellen umfassen, wie in der folgenden Abbildung dargestellt:

  ![Illustration, die das Erstrecken von Tabellenzellen über Spalten und Zeilen hinweg zeigt: Zellen 1, 3 und 4 erstrecken sich über zwei Zeilen; Zelle 2 erstreckt sich über zwei Spalten; Zellen 5 und 6 passen in die verfügbaren Zellen, die die zweite und dritte Spalte in der zweiten Zeile sind](column-row-span.png)

  > [!NOTE]
  > Diese Attribute dürfen nicht verwendet werden, um Zellen zu überlappen.

## Beispiele

Siehe {{HTMLElement("table")}} für ein vollständiges Tabellenbeispiel, das allgemeine Standards und bewährte Praktiken einführt.

### Grundlegende Datenzellen

In diesem Beispiel werden `<td>`-Elemente zusammen mit anderen tabellenbezogenen Elementen verwendet, um eine grundlegende Tabelle mit Daten über das phonetische Alphabet vorzustellen.

#### HTML

Einige Tabellenzeilen ({{HTMLElement("tr")}} Elemente) enthalten sowohl Überschriftzellen ({{HTMLElement("th")}} Elemente) als auch `<td>` Datenzellen. Das {{HTMLElement("th")}} Element, das erstes Kind jeder Zeile ist, bildet die erste Spalte der Tabelle, wobei jede `<th>` als Zeilenüberschrift für die Datenzellen innerhalb dieser Zeile dient. Jedes entsprechende `<td>` Element enthält Daten, die mit seiner jeweiligen Spaltenüberschrift und Zeilenüberschrift ausgerichtet sind.

> [!NOTE]
> Normalerweise würde eine Tabellengruppe mit Spaltenüberschriften implementiert werden, um das Verständnis der Informationen in den Spalten zu erleichtern. Die {{HTMLElement("thead")}} und {{HTMLElement("tbody")}} Elemente würden verwendet werden, um solche Zeilen von Überschriften und Daten in die entsprechenden Tabellen-Head- und Body-Bereiche zu gruppieren. Dies wird in diesem Beispiel nicht umgesetzt, um sich auf die Datenzellen zu konzentrieren und die Komplexität dieses Beispiels zu reduzieren.

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

Ein wenig grundlegendes CSS wird verwendet, um die Tabelle und ihre Zellen zu stylen. CSS [Attributselektoren](/de/docs/Web/CSS/Attribute_selectors) und die {{cssxref(":nth-of-type")}} Pseudoklasse werden verwendet, um das Erscheinungsbild der Zellen zu alternieren und so das Verständnis und die Identifizierung der Informationen in der Tabelle zu erleichtern.

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

Dieses Beispiel erweitert und verbessert die grundlegende Tabelle aus dem [vorherigen Beispiel](#grundlegende_datenzellen) durch Hinzufügen einer zusätzlichen "ABC"-Zelle.

#### HTML

Eine zusätzliche Datenzelle (`<td>` Element) wird in der ersten Zeile ({{HTMLElement("tr")}} Element) eingefügt. Dies erzeugt eine vierte Spalte in der Tabelle.

Durch die Verwendung des [`rowspan`](#rowspan) Attributs wird die "ABC"-Zelle über die ersten drei Zeilen der Tabelle erstreckt. Die letzten Datenzellen der nachfolgenden Zeilen erstrecken sich jeweils über zwei Spalten. Dies erfolgt mittels des [`colspan`](#colspan) Attributs, wodurch sie korrekt innerhalb der Tabellenstruktur ausgerichtet werden. Beachten Sie, dass der Tabelle eine zusätzliche Zeile ({{HTMLElement("tr")}} Element) hinzugefügt wird, um dies zu veranschaulichen.

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

### Verknüpfung von Datenzellen mit Überschriftzellen

Für komplexere Beziehungen zwischen Datenzellen (`<td>` Elemente) und Überschriftzellen ({{HTMLElement("th")}} Elemente) reicht die Verwendung von {{HTMLElement("th")}} Elementen mit dem [`scope`](/de/docs/Web/HTML/Element/th#scope) Attribut allein möglicherweise nicht für unterstützende Technologien, insbesondere Bildschirmlesegeräte, aus.

#### HTML

Um die {{Glossary("accessibility", "Zugänglichkeit")}} des [vorherigen Beispiels](#spalten-_und_zeilenüberspannung) zu verbessern und z. B. Bildschirmlesegeräten die Möglichkeit zu geben, die mit jeder Datenzelle verknüpften Überschriften zu lesen, kann das [`headers`](#headers) Attribut zusammen mit [`id`](/de/docs/Web/HTML/Global_attributes/id) Attributen eingeführt werden. Jeder Zeilenkopf ({{HTMLElement("th")}} Element), der mit der "ABC"-Datenzelle verbunden ist, d.h. die Buchstaben "A", "B" und "C", erhält eine eindeutige Kennung mit dem [`id`](/de/docs/Web/HTML/Global_attributes/id) Attribut. Die "ABC"-Datenzelle (`<td>` Element) verwendet dann diese `id`-Werte in einer durch Leerzeichen getrennten Liste für das [`headers`](#headers) Attribut.

> [!NOTE]
> Es wird empfohlen, beschreibendere und nützlichere Werte für das [`id`](/de/docs/Web/HTML/Global_attributes/id) Attribut zu verwenden. Jedes `id` in einem Dokument muss für dieses Dokument eindeutig sein. In diesem Beispiel sind die `id`-Werte Einzelzeichen, um den Fokus auf das Konzept des [`headers`](#headers) Attributs zu richten.

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

Während das [visuelle Ergebnis](#result_2) im Vergleich zur [vorherigen Beispiel-Tabelle](#spalten-_und_zeilenüberspannung) unverändert bleibt, ist jetzt jede Datenzelle (`<td>`) explizit mit ihrer Zeilenkopfzeile (`<th>`) verknüpft.

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Content_categories"
          >Inhaltskategorien</a
        >
      </th>
      <td>Sectioning root.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#flow_content"
          >Fluss-Inhalt</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>
        Das Start-Tag ist obligatorisch.<br />Das End-Tag kann weggelassen werden, wenn es
        unmittelbar von einem {{HTMLElement("th")}} oder
        <code>&lt;td&gt;</code> Element gefolgt wird oder wenn keine weiteren Daten in seinem
        übergeordneten Element vorhanden sind.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>Ein {{HTMLElement("tr")}} Element.</td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <code
          ><a href="/de/docs/Web/Accessibility/ARIA/Roles/cell_role"
            >cell</a
          ></code
        >
        wenn ein Nachkomme eines {{HTMLElement("table")}} Elements, oder <code
          ><a href="/de/docs/Web/Accessibility/ARIA/Roles/gridcell_role"
            >gridcell</a
          ></code
        >
        wenn ein Nachkomme eines Elements mit <code
          ><a href="/de/docs/Web/Accessibility/ARIA/Roles/grid_role"
            >grid</a
          ></code
        > Rolle
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA-Rollen</th>
      <td>Any</td>
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
- {{cssxref("background-color")}}: CSS-Eigenschaft zur Festlegung der Hintergrundfarbe jeder Datenzelle
- {{cssxref("border")}}: CSS-Eigenschaft zur Steuerung der Ränder von Datenzellen
- {{cssxref("height")}}: CSS-Eigenschaft zur Steuerung der empfohlenen Datenzellenhöhe
- {{cssxref("text-align")}}: CSS-Eigenschaft zur horizontalen Ausrichtung des Inhalts jeder Datenzelle
- {{cssxref("vertical-align")}}: CSS-Eigenschaft zur vertikalen Ausrichtung des Inhalts jeder Datenzelle
- {{cssxref("width")}}: CSS-Eigenschaft zur Steuerung der empfohlenen Datenzellenbreite
- {{cssxref(":nth-of-type")}}, {{cssxref(":first-of-type")}}, {{cssxref(":last-of-type")}}: CSS-Pseudoklassen zur Auswahl der gewünschten Datenzellen
