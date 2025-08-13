---
title: "<td>: Das Tabellendatenzellen-Element"
slug: Web/HTML/Reference/Elements/td
l10n:
  sourceCommit: a1765c2cad20118be0dad322d3548908787b5791
---

Das **`<td>`**-Element von [HTML](/de/docs/Web/HTML) definiert eine Zelle einer Tabelle, die Daten enthält und als Kind des {{HTMLElement("tr")}}-Elements verwendet werden kann.

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

Dieses Element beinhaltet die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `colspan`
  - : Enthält einen nichtnegativen ganzzahligen Wert, der angibt, wie viele Spalten die Datenzelle überspannt oder erweitert. Der Standardwert ist `1`. Benutzeragenten ignorieren Werte, die höher als 1000 sind, und setzen den Wert auf den Standardwert (`1`).
- `headers`
  - : Enthält eine Liste von Leerzeichen-getrennten Zeichenfolgen, die jeweils der `id`-Attribut der {{HTMLElement("th")}}-Elemente entsprechen, die Überschriften für diese Tabellenzelle bereitstellen.
- `rowspan`
  - : Enthält einen nichtnegativen ganzzahligen Wert, der angibt, für wie viele Zeilen die Datenzelle überspannt oder erweitert. Der Standardwert ist `1`; wenn der Wert auf `0` gesetzt ist, erstreckt er sich bis zum Ende des zum Zellenverband gehörenden Tabellengruppierungsabschnitts ({{HTMLElement("thead")}}, {{HTMLElement("tbody")}}, {{HTMLElement("tfoot")}}, auch wenn er implizit definiert ist). Werte, die höher als `65534` sind, werden auf `65534` begrenzt.

### Veraltete Attribute

Die folgenden Attribute sind veraltet und sollten nicht verwendet werden. Sie sind unten dokumentiert, um beim Aktualisieren vorhandener Codes zur historischen Interessenszwecken zu dienen.

- `abbr` {{deprecated_inline}}
  - : Enthält eine kurze, abgekürzte Beschreibung des Inhalts der Datenzelle. Einige Benutzeragenten, wie z.B. Sprachausgaben, können diese Beschreibung vor dem eigentlichen Inhalt präsentieren. Platzieren Sie den abgekürzten Inhalt innerhalb der Zelle und die (längere) Beschreibung im [`title`](/de/docs/Web/HTML/Reference/Global_attributes/title)-Attribut, da dieses Attribut veraltet ist. Vorzugsweise sollten Sie den Inhalt innerhalb der Datenzelle selbst einfügen und CSS verwenden, um den überschüssigen Text [visuell abzuschneiden](/de/docs/Web/CSS/text-overflow).

- `align` {{deprecated_inline}}
  - : Gibt die horizontale Ausrichtung der Datenzelle an. Die möglichen {{Glossary("enumerated", "aufgezählten")}} Werte sind `left`, `center`, `right`, `justify` und `char`. Wenn der Wert `char` unterstützt wird, richtet er den Textinhalt auf das Zeichen aus, das im [`char`](#char)-Attribut definiert ist, und den Offset, der durch das [`charoff`](#charoff)-Attribut definiert ist. Verwenden Sie die CSS-Eigenschaft {{cssxref("text-align")}}, da dieses Attribut veraltet ist.

- `axis` {{deprecated_inline}}
  - : Enthält eine Liste von Leerzeichen-getrennten Zeichenfolgen, die jeweils der `id`-Attribut einer Gruppe von Zellen entsprechen, auf die sich die Datenzelle bezieht.

- `bgcolor` {{deprecated_inline}}
  - : Definiert die Hintergrundfarbe der Datenzelle. Der Wert ist eine HTML-Farbe; entweder ein [6-stelliger Hexadezimal-RGB-Code](/de/docs/Web/CSS/hex-color), mit einem `#` versehen, oder ein [Farbname](/de/docs/Web/CSS/named-color). Andere CSS {{cssxref("color_value", "&lt;color&gt;")}}-Werte werden nicht unterstützt. Verwenden Sie die CSS-Eigenschaft {{cssxref("background-color")}}, da dieses Attribut veraltet ist.

- `char` {{deprecated_inline}}
  - : Tut nichts. Es war ursprünglich gedacht, die Ausrichtung des Inhalts zu einem Zeichen der Datenzelle anzugeben. Typische Werte dafür sind ein Punkt (`.`), wenn versucht wird, Zahlen oder Geldwerte auszurichten. Wenn [`align`](#align) nicht auf `char` gesetzt ist, wird dieses Attribut ignoriert.

- `charoff` {{deprecated_inline}}
  - : Tut nichts. Es war ursprünglich gedacht, die Anzahl der Zeichen anzugeben, um den Datenzellinhalt vom Ausrichtungszeichen zu versetzen, das durch das [`char`](#char)-Attribut angegeben wird.

- `height` {{deprecated_inline}}
  - : Definiert eine empfohlene Höhe der Datenzelle. Verwenden Sie die CSS-Eigenschaft {{cssxref("height")}}, da dieses Attribut veraltet ist.

- `scope` {{deprecated_inline}}
  - : Definiert die Zellen, auf die sich die Überschrift (definiert im {{HTMLElement("th")}}-Element) bezieht. Die möglichen {{Glossary("enumerated", "aufgezählten")}} Werte sind `row`, `col`, `rowgroup` und `colgroup`. Verwenden Sie dieses Attribut nur mit dem {{HTMLElement("th")}}-Element, um die Zeile oder Spalte zu definieren, für die es eine Überschrift ist, da dieses Attribut für das `<td>`-Element veraltet ist.

- `valign` {{deprecated_inline}}
  - : Gibt die vertikale Ausrichtung der Datenzelle an. Die möglichen {{Glossary("enumerated", "aufgezählten")}} Werte sind `baseline`, `bottom`, `middle` und `top`. Verwenden Sie die CSS-Eigenschaft {{cssxref("vertical-align")}}, da dieses Attribut veraltet ist.

- `width` {{deprecated_inline}}
  - : Definiert eine empfohlene Breite der Datenzelle. Verwenden Sie die CSS-Eigenschaft {{cssxref("width")}}, da dieses Attribut veraltet ist.

## Nutzungshinweise

- Das `<td>`-Element darf nur innerhalb eines {{HTMLElement("tr")}}-Elements verwendet werden.
- Bei der Verwendung der Attribute [`colspan`](#colspan) und [`rowspan`](#rowspan), um Datenzellen über mehrere Spalten und Zeilen hinweg zu spannen, werden Zellen ohne diese Attribute (mit einem Standardwert von `1`) automatisch in die freien verfügbaren Räume in der Tabellenstruktur eingefügt, die 1x1-Zellen umfassen, wie in der folgenden Abbildung gezeigt:

  ![Illustration zeigt das Spannen von Spalten und Zeilen von Tabellenzellen: Die Zellen 1, 3 und 4 spannen sich über zwei Reihen; Zelle 2 spannt sich über zwei Spalten; Zellen 5 und 6 passen in die verfügbaren Zellpositionen, die die zweite und dritte Spalte in der zweiten Reihe bilden](/shared-assets/images/diagrams/html/table/column-row-span.png)

  > [!NOTE]
  > Diese Attribute dürfen nicht verwendet werden, um Zellen zu überlappen.

## Beispiele

Siehe {{HTMLElement("table")}} für ein vollständiges Tabellenbeispiel, das übliche Standards und bewährte Praktiken einführt.

### Grundlegende Datenzellen

Dieses Beispiel verwendet `<td>`-Elemente zusammen mit anderen tabellenbezogenen Elementen, um eine grundlegende Tabelle mit Daten über das phonetische Alphabet einzuführen.

#### HTML

Einige Tabellenzeilen ({{HTMLElement("tr")}}-Elemente) enthalten sowohl Kopfzellen ({{HTMLElement("th")}}-Elemente) als auch Datenzellen `<td>`-Elemente. Das {{HTMLElement("th")}}-Element, das das erste Kind jeder Zeile ist, bildet die erste Spalte der Tabelle, wobei jedes `<th>` die Zeilenüberschrift für die Datenzellen innerhalb dieser Zeile liefert. Jedes entsprechende `<td>`-Element enthält Daten, die mit ihrer jeweiligen Spaltenüberschrift und Zeilenüberschrift abgestimmt sind.

> [!NOTE]
> Normalerweise würde eine Tabellenkopffruppe mit Spaltenüberschriften verwendet werden, um das Verständnis der Informationen in den Spalten zu erleichtern. Die {{HTMLElement("thead")}}- und {{HTMLElement("tbody")}}-Elemente würden verwendet, um solche Reihen von Überschriften und Daten in die jeweiligen Kopf- und Körperabschnitte der Tabelle zu gruppieren. Dies ist in diesem Beispiel nicht implementiert, um den Fokus auf die Datenzellen zu legen und die Komplexität dieses Beispiels zu reduzieren.

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

Einige grundlegende CSS werden verwendet, um die Tabelle und ihre Zellen zu gestalten. CSS [Attributselektoren](/de/docs/Web/CSS/Attribute_selectors) und die {{cssxref(":nth-of-type")}}-Pseudoklasse werden verwendet, um das Erscheinungsbild der Zellen zu verändern, um das Verständnis der Informationen in der Tabelle zu erleichtern und das Erkennen zu vereinfachen.

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

### Spalten- und Zeilenspan

Dieses Beispiel erweitert und verbessert die grundlegende Tabelle aus dem [vorherigen Beispiel](#grundlegende_datenzellen), indem eine zusätzliche "ABC"-Zelle hinzugefügt wird.

#### HTML

Eine zusätzliche Datenzelle (`<td>`-Element) wird in die erste Zeile ({{HTMLElement("tr")}}-Element) eingefügt. Dies erstellt eine vierte Spalte in der Tabelle.

Mithilfe des [`rowspan`](#rowspan)-Attributs wird die "ABC"-Zelle über die ersten drei Zeilen der Tabelle gespannt. Die letzten Datenzellen der nachfolgenden Zeilen erstrecken sich jeweils über zwei Spalten. Dies wird mit dem [`colspan`](#colspan)-Attribut durchgeführt, wodurch sie korrekt in der Tabellenstruktur ausgerichtet werden. Beachten Sie, dass der Tabelle eine zusätzliche Zeile ({{HTMLElement("tr")}}-Element) hinzugefügt wird, um dies zu veranschaulichen.

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

Die Pseudoklassen {{cssxref(":first-of-type")}} und {{cssxref(":last-of-type")}} werden im CSS verwendet, um die hinzugefügte "ABC"-Datenzelle auszuwählen und zu gestalten.

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

### Datenzellen mit Kopfzellen assoziieren

Für komplexere Beziehungen zwischen Datenzellen (`<td>`-Elementen) und Kopfzellen ({{HTMLElement("th")}}-Elementen) kann die Verwendung von {{HTMLElement("th")}}-Elementen mit dem [`scope`](/de/docs/Web/HTML/Reference/Elements/th#scope)-Attribut allein für unterstützende Technologien, insbesondere Bildschirmlesegeräte, nicht ausreichend sein.

#### HTML

Um die {{Glossary("accessibility", "Zugänglichkeit")}} des [vorherigen Beispiels](#spalten-_und_zeilenspan) zu verbessern und Bildschirmlesegeräten, zum Beispiel, die Möglichkeit zu geben, die mit jeder Datenzelle assoziierten Überschriften vorzulesen, kann das [`headers`](#headers)-Attribut zusammen mit [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id)-Attributen eingeführt werden. Jede Zeilenkopfzelle ({{HTMLElement("th")}}-Element), die mit der "ABC"-Datenzelle in Verbindung steht, d.h. die Buchstaben "A", "B" und "C", erhält einen eindeutigen Bezeichner mit dem [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id)-Attribut. Die "ABC"-Datenzelle (`<td>`-Element) verwendet diese `id`-Werte dann in einer Leerzeichengetrennten Liste für das [`headers`](#headers)-Attribut.

> [!NOTE]
> Es wird empfohlen, beschreibendere und nützlichere Werte für das [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id)-Attribut zu verwenden. Jeder `id` in einem Dokument muss eindeutig für dieses Dokument sein. In diesem Beispiel sind die `id`-Werte einzelne Zeichen, um den Fokus auf das Konzept des [`headers`](#headers)-Attributs zu legen.

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

Während das [visuelle Ergebnis](#result_2) unverändert gegenüber der [vorherigen Beispieltabelle](#spalten-_und_zeilenspan) bleibt, ist jetzt jede Datenzelle (`<td>`) explizit mit ihrer Zeilenkopfzelle (`<th>`) verbunden.

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Guides/Content_categories"
          >Inhaltskategorien</a
        >
      </th>
      <td>Abschnitts-Wurzel.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content"
          >Flussinhalt</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>
        Das Start-Tag ist obligatorisch.<br />Das End-Tag kann weggelassen werden, wenn es unmittelbar von einem {{HTMLElement("th")}}- oder einem <code>&lt;td&gt;</code>-Element gefolgt wird oder wenn es keine weiteren Daten in seinem Elternelement gibt.
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
        Wenn ein Nachkomme eines {{HTMLElement("table")}}-Elements, oder <code
          ><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role"
            >gridcell</a
          ></code
        >
        Wenn ein Nachkomme eines Elements mit der <code
          ><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role"
            >grid</a
          ></code
        >-Rolle
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
- {{cssxref("background-color")}}: CSS-Eigenschaft, um die Hintergrundfarbe jeder Datenzelle festzulegen
- {{cssxref("border")}}: CSS-Eigenschaft, um Grenzen der Datenzellen zu steuern
- {{cssxref("height")}}: CSS-Eigenschaft, um die empfohlene Höhe der Datenzelle zu steuern
- {{cssxref("text-align")}}: CSS-Eigenschaft, um den Inhalt jeder Datenzelle horizontal auszurichten
- {{cssxref("vertical-align")}}: CSS-Eigenschaft, um den Inhalt jeder Datenzelle vertikal auszurichten
- {{cssxref("width")}}: CSS-Eigenschaft, um die empfohlene Breite der Datenzelle zu steuern
- {{cssxref(":nth-of-type")}}, {{cssxref(":first-of-type")}}, {{cssxref(":last-of-type")}}: CSS-Pseudoklassen, um die gewünschten Datenzellen auszuwählen
