---
title: "<td>: Das Table Data Cell-Element"
slug: Web/HTML/Element/td
l10n:
  sourceCommit: 8b02826c79b090b5af0d68ae1ef39f932a66a7f1
---

{{HTMLSidebar}}

Das **`<td>`** [HTML](/de/docs/Web/HTML)-Element definiert eine Zelle einer Tabelle, die Daten enthält und kann als Kind des {{HTMLElement("tr")}}-Elements verwendet werden.

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

Dieses Element umfasst die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- `colspan`
  - : Enthält einen nicht-negativen Integer-Wert, der angibt, wie viele Spalten die Datenzelle überspannt oder erweitert. Der Standardwert ist `1`. Benutzeragenten ignorieren Werte über 1000 als fehlerhaft und setzen sie auf den Standardwert (`1`).
- `headers`
  - : Enthält eine Liste von durch Leerzeichen getrennten Strings, die jeweils dem `id`-Attribut der {{HTMLElement("th")}}-Elemente entsprechen, die die Überschriften für diese Tabellenzelle bereitstellen.
- `rowspan`
  - : Enthält einen nicht-negativen Integer-Wert, der angibt, für wie viele Zeilen die Datenzelle überspannt oder erweitert wird. Der Standardwert ist `1`; wird der Wert auf `0` gesetzt, verlängert er sich bis zum Ende des Tabellengruppierungsabschnitts ({{HTMLElement("thead")}}, {{HTMLElement("tbody")}}, {{HTMLElement("tfoot")}}, auch wenn implizit definiert), zu dem die Zelle gehört. Werte über `65534` werden auf `65534` begrenzt.

### Veraltete Attribute

Die folgenden Attribute sind veraltet und sollten nicht verwendet werden. Sie sind unten zur Referenz aufgeführt, wenn bestehender Code aktualisiert wird, und aus historischem Interesse.

- `abbr` {{deprecated_inline}}

  - : Enthält eine kurze abgekürzte Beschreibung des Inhalts der Datenzelle. Einige Benutzeragenten, wie Sprachausgabe, können diese Beschreibung vor dem eigentlichen Inhalt präsentieren. Platzieren Sie den abgekürzten Inhalt innerhalb der Zelle und die (längere) Beschreibung im [`title`](/de/docs/Web/HTML/Global_attributes/title)-Attribut, da dieses Attribut veraltet ist. Oder, vorzugsweise, den Inhalt in der Datenzelle einfügen und CSS verwenden, um [Textüberläufe optisch abzuschneiden](/de/docs/Web/CSS/text-overflow).

- `align` {{deprecated_inline}}

  - : Gibt die horizontale Ausrichtung der Datenzelle an. Die möglichen {{Glossary("enumerated", "aufzählbaren")}} Werte sind `left`, `center`, `right`, `justify` und `char`. Bei Unterstützung richtet der `char`-Wert den Textinhalt am im [`char`](#char)-Attribut definierten Zeichen und dem durch das [`charoff`](#charoff)-Attribut definierten Versatz aus. Verwenden Sie stattdessen die {{cssxref("text-align")}} CSS-Eigenschaft, da dieses Attribut veraltet ist.

- `axis` {{deprecated_inline}}

  - : Enthält eine Liste von durch Leerzeichen getrennten Zeichenfolgen, die jeweils dem `id`-Attribut einer Zellengruppe entsprechen, auf die die Datenzelle zutrifft.

- `bgcolor` {{deprecated_inline}}

  - : Definiert die Hintergrundfarbe der Datenzelle. Der Wert ist eine HTML-Farbe; entweder ein [6-stelliger hexadezimaler RGB-Code](/de/docs/Web/CSS/hex-color), vorangestellt durch ein `#`, oder ein [Farbschlüsselwort](/de/docs/Web/CSS/named-color). Andere CSS {{cssxref("color_value", "&lt;color&gt")}}-Werte werden nicht unterstützt. Verwenden Sie stattdessen die {{cssxref("background-color")}} CSS-Eigenschaft, da dieses Attribut veraltet ist.

- `char` {{deprecated_inline}}

  - : Tut nichts. Es war ursprünglich gedacht, um die Ausrichtung des Inhalts an einem Zeichen der Datenzelle zu spezifizieren. Typische Werte hierfür sind ein Punkt (`.`), wenn versucht wird, Zahlen oder Geldbeträge auszurichten. Falls [`align`](#align) nicht auf `char` gesetzt ist, wird dieses Attribut ignoriert.

- `charoff` {{deprecated_inline}}

  - : Tut nichts. Es war ursprünglich gedacht, um die Anzahl der Zeichen zu spezifizieren, um die der Datenzellinhalt vom Ausrichtungszeichen, definiert durch das [`char`](#char)-Attribut, versetzt wird.

- `height` {{deprecated_inline}}

  - : Definiert eine empfohlene Datenzellenhöhe. Verwenden Sie stattdessen die {{cssxref("height")}} CSS-Eigenschaft, da dieses Attribut veraltet ist.

- `scope` {{deprecated_inline}}

  - : Definiert die Zellen, zu denen die Kopfzeile (definiert im {{HTMLElement("th")}}) gehört. Die möglichen {{Glossary("enumerated", "aufzählbaren")}} Werte sind `row`, `col`, `rowgroup` und `colgroup`. Verwenden Sie dieses Attribut nur mit dem {{HTMLElement("th")}}-Element, um die Zeile oder Spalte zu definieren, für die es eine Kopfzeile ist, da dieses Attribut für das `<td>`-Element veraltet ist.

- `valign` {{deprecated_inline}}

  - : Gibt die vertikale Ausrichtung der Datenzelle an. Die möglichen {{Glossary("enumerated", "aufzählbaren")}} Werte sind `baseline`, `bottom`, `middle` und `top`. Verwenden Sie stattdessen die {{cssxref("vertical-align")}} CSS-Eigenschaft, da dieses Attribut veraltet ist.

- `width` {{deprecated_inline}}

  - : Definiert eine empfohlene Datenzellenbreite. Verwenden Sie stattdessen die {{cssxref("width")}} CSS-Eigenschaft, da dieses Attribut veraltet ist.

## Nutzungshinweise

- Das `<td>` darf nur innerhalb eines {{HTMLElement("tr")}}-Elements verwendet werden.
- Bei der Verwendung der [`colspan`](#colspan)- und [`rowspan`](#rowspan)-Attribute, um Datenzellen über mehrere Spalten und Zeilen zu erstrecken, werden Zellen ohne diese definierten Attribute (mit einem Standardwert von `1`) automatisch in die freien verfügbaren Räume der Tabellenstruktur eingefügt, die 1x1-Zellen umfassen, wie in der folgenden Abbildung dargestellt:

  ![Darstellung, die Spalten- und Zeilenerweiterungen von Tabellenzellen zeigt: Zellen 1, 3 und 4 erstrecken sich über zwei Zeilen; Zelle 2 erstreckt sich über zwei Spalten; Zellen 5 und 6 fügen sich in die verfügbaren Zellen ein, die die zweite und dritte Spalte in der zweiten Zeile sind](column-row-span.png)

  > [!NOTE]
  > Diese Attribute dürfen nicht verwendet werden, um Zellen zu überlappen.

## Beispiele

Sehen Sie {{HTMLElement("table")}} für ein vollständiges Tabellenbeispiel, das gängige Standards und Best Practices einführt.

### Grundlegende Datenzellen

Dieses Beispiel verwendet `<td>`-Elemente zusammen mit anderen tabellenbezogenen Elementen, um eine grundlegende Tabelle mit Daten über das phonetische Alphabet einzuführen.

#### HTML

Einige Tabellenzeilen ({{HTMLElement("tr")}}-Elemente) enthalten sowohl Header-Zellen ({{HTMLElement("th")}}-Elemente) als auch Datenzellen `<td>`. Das {{HTMLElement("th")}}-Element, das das erste Kind jeder Zeile darstellt, bildet die erste Spalte der Tabelle, wobei jede `<th>`-Zelle die Zeilenüberschrift für die Datenzellen innerhalb dieser Zeile bereitstellt. Jedes entsprechende `<td>`-Element enthält Daten, die mit seiner jeweiligen Spaltenüberschrift und Zeilenüberschrift ausgerichtet sind.

> [!NOTE]
> Normalerweise würde eine Tabellenkopfgruppe mit Spaltenüberschriften implementiert werden, um die Informationen in den Spalten leichter verständlich zu machen. Die {{HTMLElement("thead")}}- und {{HTMLElement("tbody")}}-Elemente würden verwendet werden, um solche Reihen von Überschriften und Daten in die entsprechenden Tabellenkopf- und -körperabschnitte zu gruppieren. Dies ist in diesem Beispiel nicht implementiert, um den Fokus auf die Datenzellen zu legen und die Komplexität dieses Beispiels zu reduzieren.

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

Ein einfaches CSS wird verwendet, um die Tabelle und ihre Zellen zu gestalten. CSS [Attributselektoren](/de/docs/Web/CSS/Attribute_selectors) und die {{cssxref(":nth-of-type")}} Pseudoklasse werden verwendet, um das Erscheinungsbild der Zellen zu alternieren und die Informationen in der Tabelle leichter verständlich und identifizierbar zu machen.

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

Dieses Beispiel erweitert und verbessert die einfache Tabelle aus dem [vorherigen Beispiel](#grundlegende_datenzellen) durch das Hinzufügen einer zusätzlichen "ABC"-Zelle.

#### HTML

Eine zusätzliche Datenzelle (`<td>`-Element) wird in der ersten Zeile ({{HTMLElement("tr")}}-Element) eingeführt. Dies erzeugt eine vierte Spalte in der Tabelle.

Unter Verwendung des [`rowspan`](#rowspan)-Attributs wird die "ABC"-Zelle über die ersten drei Zeilen der Tabelle gestreckt. Die letzten Datenzellen der nachfolgenden Zeilen erstrecken sich jeweils über zwei Spalten. Dies wird mit dem [`colspan`](#colspan)-Attribut erreicht, indem sie korrekt innerhalb der Tabellenstruktur ausgerichtet werden. Beachten Sie, dass der Tabelle eine zusätzliche Zeile ({{HTMLElement("tr")}}-Element) hinzugefügt wurde, um dies zu veranschaulichen.

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

Bei komplexeren Beziehungen zwischen Datenzellen (`<td>`-Elementen) und Kopfzellen ({{HTMLElement("th")}}-Elementen) kann die Verwendung von {{HTMLElement("th")}}-Elementen mit dem [`scope`](/de/docs/Web/HTML/Element/th#scope)-Attribut allein für unterstützende Technologien, insbesondere Bildschirmlesegeräte, nicht ausreichend sein.

#### HTML

Um die {{Glossary("accessibility", "Barrierefreiheit")}} des [vorherigen Beispiels](#spalten-_und_zeilenüberspannung) zu verbessern und Bildschirmlesegeräten zum Beispiel zu ermöglichen, die mit jeder Datenzelle verbundenen Überschriften zu nennen, kann das [`headers`](#headers)-Attribut zusammen mit [`id`](/de/docs/Web/HTML/Global_attributes/id)-Attributen eingeführt werden. Jede Zeilenkopfzelle ({{HTMLElement("th")}}-Element), die mit der "ABC"-Datenzelle verbunden ist, d. h. die Buchstaben "A", "B" und "C", erhält einen eindeutigen Bezeichner mit dem [`id`](/de/docs/Web/HTML/Global_attributes/id)-Attribut. Die "ABC"-Datenzelle (`<td>`-Element) verwendet dann diese `id`-Werte in einer durch Leerzeichen getrennten Liste für das [`headers`](#headers)-Attribut.

> [!NOTE]
> Es wird empfohlen, beschreibendere und nützlichere Werte für das [`id`](/de/docs/Web/HTML/Global_attributes/id)-Attribut zu verwenden. Jedes `id` in einem Dokument muss für dieses Dokument eindeutig sein. In diesem Beispiel sind die `id`-Werte einzelne Zeichen, um sich auf das Konzept des [`headers`](#headers)-Attributs zu konzentrieren.

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

Während das [visuelle Ergebnis](#result_2) sich nicht vom [vorherigen Tabellenbeispiel](#spalten-_und_zeilenüberspannung) unterscheidet, ist jetzt jede Datenzelle (`<td>`) explizit mit ihrer Zeilenkopfzelle (`<th>`) verknüpft.

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Content_categories"
          >Inhaltskategorien</a
        >
      </th>
      <td>Abschnittswurzel.</td>
    </tr>
    <tr>
      <th scope="row">Zugelassene Inhalte</th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#flow_content"
          >Flussinhalt</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>
        Das Start-Tag ist obligatorisch.<br />Das End-Tag kann weggelassen werden, wenn es
        unmittelbar durch ein {{HTMLElement("th")}} oder
        <code>&lt;td&gt;</code>-Element gefolgt wird oder wenn es keine weiteren Daten in seinem
        Elternelement gibt.
      </td>
    </tr>
    <tr>
      <th scope="row">Zugelassene Eltern</th>
      <td>Ein {{HTMLElement("tr")}}-Element.</td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <code
          ><a href="/de/docs/Web/Accessibility/ARIA/Roles/cell_role"
            >cell</a
          ></code
        >
        wenn ein Nachkomme eines {{HTMLElement("table")}}-Elements, oder <code
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
      <th scope="row">Zugelassene ARIA-Rollen</th>
      <td>Jede</td>
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
- {{cssxref("background-color")}}: CSS-Eigenschaft, um die Hintergrundfarbe jeder Datenzelle festzulegen
- {{cssxref("border")}}: CSS-Eigenschaft zur Steuerung der Ränder von Datenzellen
- {{cssxref("height")}}: CSS-Eigenschaft zur Steuerung der empfohlenen Höhe der Datenzelle
- {{cssxref("text-align")}}: CSS-Eigenschaft zur horizontalen Ausrichtung des Inhalts jeder Datenzelle
- {{cssxref("vertical-align")}}: CSS-Eigenschaft zur vertikalen Ausrichtung des Inhalts jeder Datenzelle
- {{cssxref("width")}}: CSS-Eigenschaft zur Steuerung der empfohlenen Breite der Datenzelle
- {{cssxref(":nth-of-type")}}, {{cssxref(":first-of-type")}}, {{cssxref(":last-of-type")}}: CSS-Pseudoklassen zur Auswahl der gewünschten Datenzellen
