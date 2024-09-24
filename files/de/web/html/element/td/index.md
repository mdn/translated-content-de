---
title: "<td>: Das Tabellen-Datenzellen-Element"
slug: Web/HTML/Element/td
l10n:
  sourceCommit: 9231a7046973685f4600e1891fa644ecce41ef3b
---

{{HTMLSidebar}}

Das **`<td>`**-Element in [HTML](/de/docs/Web/HTML) definiert eine Zelle einer Tabelle, die Daten enthält, und kann als Kind eines {{HTMLElement("tr")}}-Elements verwendet werden.

{{EmbedInteractiveExample("pages/tabbed/td.html","tabbed-taller")}}

## Attribute

Dieses Element umfasst die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- `colspan`
  - : Enthält einen nicht-negativen Ganzzahlwert, der angibt, über wie viele Spalten sich die Datenzelle erstreckt oder ausdehnt. Der Standardwert ist `1`. Benutzeragenten verwerfen Werte über 1000 als inkorrekt und setzen den Standardwert (`1`).
- `headers`
  - : Enthält eine Liste von durch Leerzeichen getrennten Zeichenfolgen, die jeweils dem `id`-Attribut der {{HTMLElement("th")}}-Elemente entsprechen, die Überschriften für diese Tabellenzelle bereitstellen.
- `rowspan`
  - : Enthält einen nicht-negativen Ganzzahlwert, der angibt, über wie viele Zeilen sich die Datenzelle erstreckt oder ausdehnt. Der Standardwert ist `1`; wenn sein Wert auf `0` gesetzt ist, erstreckt es sich bis zum Ende des Tabellenbereichs ({{HTMLElement("thead")}}, {{HTMLElement("tbody")}}, {{HTMLElement("tfoot")}}, auch wenn implizit definiert), zu dem die Zelle gehört. Werte über `65534` werden auf `65534` gekürzt.

### Veraltete Attribute

Die folgenden Attribute sind veraltet und sollten nicht verwendet werden. Sie sind hier aus Referenzgründen dokumentiert, um bestehende Codes zu aktualisieren und aus historischem Interesse.

- `abbr` {{deprecated_inline}}

  - : Enthält eine kurze, abgekürzte Beschreibung des Inhalts der Datenzelle. Einige Benutzeragenten, wie z.B. Screenreader, können diese Beschreibung vor dem eigentlichen Inhalt präsentieren. Setzen Sie den abgekürzten Inhalt in die Zelle und platzieren Sie die (längere) Beschreibung im [`title`](/de/docs/Web/HTML/Global_attributes/title)-Attribut, da dieses Attribut veraltet ist. Bevorzugen Sie es, den Inhalt innerhalb der Datenzelle zu platzieren und CSS zu verwenden, um [überlaufenden Text visuell zu kürzen](/de/docs/Web/CSS/text-overflow).

- `align` {{deprecated_inline}}

  - : Gibt die horizontale Ausrichtung der Datenzelle an. Die möglichen {{Glossary("enumerated")}} Werte sind `left`, `center`, `right`, `justify` und `char`. Wenn unterstützt, richtet der `char`-Wert den Textinhalt auf dem im [`char`](#char)-Attribut definierten Zeichen und dem durch das [`charoff`](#charoff)-Attribut definierten Versatz aus. Verwenden Sie stattdessen die {{cssxref("text-align")}} CSS-Eigenschaft, da dieses Attribut veraltet ist.

- `axis` {{deprecated_inline}}

  - : Enthält eine Liste von, durch Leerzeichen getrennten, Zeichenfolgen, die jeweils dem `id`-Attribut einer Gruppe von Zellen entsprechen, auf die sich die Datenzelle bezieht.

- `bgcolor` {{deprecated_inline}}

  - : Definiert die Hintergrundfarbe der Datenzelle. Der Wert ist eine HTML-Farbe; entweder ein [6-stelliger hexadezimaler RGB-Code](/de/docs/Web/CSS/hex-color), dem ein '#' vorangestellt ist, oder ein [Farbname](/de/docs/Web/CSS/named-color). Andere CSS {{cssxref("color_value", "&lt;color&gt")}}-Werte werden nicht unterstützt. Verwenden Sie stattdessen die {{cssxref("background-color")}} CSS-Eigenschaft, da dieses Attribut veraltet ist.

- `char` {{deprecated_inline}}

  - : Hat keine Funktion. Es war ursprünglich dazu gedacht, die Ausrichtung des Inhalts an einem Zeichen der Datenzelle anzugeben. Übliche Werte dafür sind ein Punkt (`.`), wenn versucht wird, Zahlen oder Geldwerte auszurichten. Wenn [`align`](#align) nicht auf `char` gesetzt ist, wird dieses Attribut ignoriert.

- `charoff` {{deprecated_inline}}

  - : Hat keine Funktion. Es war ursprünglich dazu gedacht, die Anzahl der Zeichen anzugeben, um die der Datenzelleninhalt vom Alignment-Zeichen, das durch das [`char`](#char)-Attribut spezifiziert wird, abweicht.

- `height` {{deprecated_inline}}

  - : Definiert eine empfohlene Datenzellenhöhe. Verwenden Sie stattdessen die {{cssxref("height")}} CSS-Eigenschaft, da dieses Attribut veraltet ist.

- `scope` {{deprecated_inline}}

  - : Definiert die Zellen, zu denen der Header (definiert im {{HTMLElement("th")}}-Element) gehört. Die möglichen {{Glossary("enumerated")}}Werte sind `row`, `col`, `rowgroup` und `colgroup`. Verwenden Sie dieses Attribut nur mit dem {{HTMLElement("th")}}-Element, um die Zeile oder Spalte zu definieren, für die es ein Header ist, da dieses Attribut für das `<td>`-Element veraltet ist.

- `valign` {{deprecated_inline}}

  - : Gibt die vertikale Ausrichtung der Datenzelle an. Die möglichen {{Glossary("enumerated")}} Werte sind `baseline`, `bottom`, `middle` und `top`. Verwenden Sie stattdessen die {{cssxref("vertical-align")}} CSS-Eigenschaft, da dieses Attribut veraltet ist.

- `width` {{deprecated_inline}}

  - : Definiert eine empfohlene Datenzellenbreite. Verwenden Sie stattdessen die {{cssxref("width")}} CSS-Eigenschaft, da dieses Attribut veraltet ist.

## Hinweise zur Verwendung

- Das `<td>`-Element darf nur innerhalb eines {{HTMLElement("tr")}}-Elements verwendet werden.
- Beim Einsatz der [`colspan`](#colspan)- und [`rowspan`](#rowspan)-Attribute, um Datenzellen über mehrere Spalten und Zeilen hinweg zu spannen, passen sich Zellen ohne diese Attribute (mit einem Standardwert von `1`) automatisch in die freien verfügbaren Plätze der Tabellenstruktur ein, die 1x1-Zellen spannen, wie in der folgenden Abbildung dargestellt:

  ![Illustration, die das Spannen von Tabellenzellen über Spalten und Zeilen zeigt: Zellen 1, 3 und 4 spannen sich über zwei Zeilen; Zelle 2 spannt sich über zwei Spalten; Zellen 5 und 6 passen in die verfügbaren Zellen, die die zweite und dritte Spalte in der zweiten Zeile darstellen.](column-row-span.png)

  > [!NOTE]
  > Diese Attribute dürfen nicht verwendet werden, um Zellen zu überlappen.

## Beispiele

Sehen Sie {{HTMLElement("table")}} für ein vollständiges Tabellenbeispiel, in dem allgemeine Standards und bewährte Verfahren vorgestellt werden.

### Grundlegende Datenzellen

Dieses Beispiel verwendet `<td>`-Elemente zusammen mit anderen tabellenbezogenen Elementen, um eine grundlegende Tabelle mit Daten über das phonetische Alphabet einzuführen.

#### HTML

Einige Tabellenzeilen ({{HTMLElement("tr")}}-Elemente) enthalten sowohl Headerzellen ({{HTMLElement("th")}}-Elemente) als auch Datenzellen `<td>`-Elemente. Das {{HTMLElement("th")}}-Element, das das erste Kind jeder Zeile ist, bildet die erste Spalte der Tabelle, wobei jedes `<th>` die Kopfzeile für die Datenzellen innerhalb dieser Zeile bereitstellt. Jedes entsprechende `<td>`-Element enthält Daten, die mit seiner jeweiligen Spaltenüberschrift und Zeilenspaltungszelle übereinstimmen.

> [!NOTE]
> Normalerweise würde eine Tabellenkopfgruppe mit Spaltenüberschriften implementiert werden, um das Verständnis der Informationen in den Spalten zu erleichtern. Die {{HTMLElement("thead")}}- und {{HTMLElement("tbody")}}-Elemente würden verwendet, um solche Überschriftenzeilen und Daten in die entsprechenden Kopf- und Körperabschnitte der Tabelle zu gruppieren. Dies wird in diesem Beispiel nicht implementiert, um sich auf die Datenzellen zu konzentrieren und die Komplexität dieses Beispiels zu reduzieren.

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

Einige grundlegende CSS wird verwendet, um die Tabelle und ihre Zellen zu gestalten. CSS [Attributselektoren](/de/docs/Web/CSS/Attribute_selectors) und die {{cssxref(":nth-of-type")}} Pseudo-Klasse werden verwendet, um das Erscheinungsbild der Zellen abzuwechseln und die Information in der Tabelle leichter verständlich und erkennbar zu machen.

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

### Spalten- und Zeilenspannen

Dieses Beispiel erweitert und verbessert die grundlegende Tabelle aus dem [vorherigen Beispiel](#grundlegende_datenzellen) durch das Hinzufügen einer zusätzlichen "ABC"-Zelle.

#### HTML

Eine zusätzliche Datenzelle (`<td>`-Element) wird in die erste Zeile ({{HTMLElement("tr")}}-Element) eingefügt. Dies erzeugt eine vierte Spalte in der Tabelle.

Mit dem [`rowspan`](#rowspan)-Attribut wird die "ABC"-Zelle über die ersten drei Zeilen der Tabelle gespannt. Die letzten Datenzellen der nachfolgenden Zeilen spannen sich jeweils über zwei Spalten. Dies erfolgt durch das [`colspan`](#colspan)-Attribut, wodurch sie korrekt innerhalb der Tabellenstruktur ausgerichtet werden. Beachten Sie, dass eine zusätzliche Zeile ({{HTMLElement("tr")}}-Element) der Tabelle hinzugefügt wird, um dies aufzuzeigen.

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

Die {{cssxref(":first-of-type")}} und {{cssxref(":last-of-type")}} Pseudo-Klassen werden im CSS verwendet, um die hinzugefügte "ABC"-Datenzelle auszuwählen und zu gestalten.

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

### Assoziieren von Datenzellen mit Headerzellen

Für komplexere Beziehungen zwischen Datenzellen (`<td>`-Elemente) und Headerzellen ({{HTMLElement("th")}}-Elemente) kann es für unterstützende Technologien, insbesondere Screenreader, nicht ausreichend sein, lediglich {{HTMLElement("th")}}-Elemente mit dem [`scope`](/de/docs/Web/HTML/Element/th#scope)-Attribut zu verwenden.

#### HTML

Um die {{Glossary("accessibility", "Barrierefreiheit")}} des [vorherigen Beispiels](#spalten-_und_zeilenspannen) zu verbessern und um Screenreader beispielsweise die zugehörigen Header zu jeder Datenzelle aussprechen zu lassen, kann das [`headers`](#headers)-Attribut zusammen mit [`id`](/de/docs/Web/HTML/Global_attributes/id)-Attributen eingeführt werden. Jede Zeilenheaderzelle ({{HTMLElement("th")}}-Element), die mit der "ABC" Datenzelle assoziiert ist, d.h. die Buchstaben "A", "B" und "C", erhält einen eindeutigen Bezeichner mit dem [`id`](/de/docs/Web/HTML/Global_attributes/id)-Attribut. Die „ABC“-Datenzelle (`<td>`-Element) verwendet dann diese `id`-Werte in einer durch Leerzeichen getrennten Liste für das [`headers`](#headers)-Attribut.

> [!NOTE]
> Es wird empfohlen, beschreibendere und nützlichere Werte für das [`id`](/de/docs/Web/HTML/Global_attributes/id)-Attribut zu verwenden. Jedes `id` in einem Dokument muss eindeutig sein. In diesem Beispiel sind die `id`-Werte Einzelzeichen, um den Fokus auf den Begriff des [`headers`](#headers)-Attributes zu legen.

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

Während das [visuelle Ergebnis](#result_2) sich nicht von der [vorherigen Beispiel-Tabelle](#spalten-_und_zeilenspannen) unterscheidet, ist jetzt jede Datenzelle (`<td>`) explizit mit ihrer Zeilenheader-Zelle (`<th>`) verbunden.

## Technische Übersicht

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
      <th scope="row">Zulässiger Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#flow_content"
          >Flussinhalt</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>
        Das Start-Tag ist obligatorisch.<br />Das End-Tag kann weggelassen
        werden, wenn es unmittelbar von einem {{HTMLElement("th")}}- oder
        <code>&lt;td&gt;</code>-Element gefolgt wird oder wenn im
        Elternelement keine weiteren Daten vorhanden sind.
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
          ><a href="/de/docs/Web/Accessibility/ARIA/Roles/cell_role"
            >cell</a
          ></code
        >
        als Nachfahre eines {{HTMLElement("table")}}-Elements
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässige ARIA-Rollen</th>
      <td>Beliebig</td>
    </tr>
    <tr>
      <th scope="row">DOM-Schnittstelle</th>
      <td>{{domxref("HTMLTableCellElement")}}</td>
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
- {{cssxref("border")}}: CSS-Eigenschaft zur Steuerung von Rändern der Datenzellen
- {{cssxref("height")}}: CSS-Eigenschaft zur Steuerung der empfohlenen Datenzellenhöhe
- {{cssxref("text-align")}}: CSS-Eigenschaft zum horizontalen Ausrichten des Inhalts jeder Datenzelle
- {{cssxref("vertical-align")}}: CSS-Eigenschaft zur vertikalen Ausrichtung des Inhalts jeder Datenzelle
- {{cssxref("width")}}: CSS-Eigenschaft zur Steuerung der empfohlenen Breite der Datenzelle
- {{cssxref(":nth-of-type")}}, {{cssxref(":first-of-type")}}, {{cssxref(":last-of-type")}}: CSS-Pseudo-Klassen zur Auswahl der gewünschten Datenzellen
