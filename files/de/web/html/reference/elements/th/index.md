---
title: "<th>: Das Table Header Element"
slug: Web/HTML/Reference/Elements/th
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{HTMLSidebar}}

Das **`<th>`** [HTML](/de/docs/Web/HTML) Element definiert eine Zelle als Überschrift einer Gruppe von Tabellenzellen und kann als Kind des {{HTMLElement("tr")}} Elements verwendet werden. Die genaue Natur dieser Gruppe wird durch die Attribute [`scope`](#scope) und [`headers`](#headers) definiert.

{{InteractiveExample("HTML Demo: &lt;th&gt;", "tabbed-taller")}}

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

Dieses Element umfasst die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `abbr`
  - : Eine kurze, abgekürzte Beschreibung des Inhalts der Überschriftzelle, die als alternatives Label verwendet wird, um auf die Überschriftzelle in anderen Kontexten zu verweisen. Einige Benutzeragenten, wie Bildschirmleser, können diese Beschreibung vor dem Inhalt selbst präsentieren.
- `colspan`
  - : Ein nicht-negativer Ganzzahlwert, der angibt, wie viele Spalten die Überschriftzelle umfasst oder erweitert. Der Standardwert ist `1`. Benutzeragenten verwerfen Werte, die höher als 1000 sind, als falsch und setzen solche Werte auf `1`.
- `headers`
  - : Eine Liste von durch Leerzeichen getrennten Zeichenfolgen, die den `id` Attributen der `<th>` Elemente entsprechen, die die Überschriften für diese Überschriftzelle bereitstellen.
- `rowspan`
  - : Ein nicht-negativer Ganzzahlwert, der angibt, wie viele Zeilen die Überschriftzelle umfasst oder erstreckt. Der Standardwert ist `1`; ist der Wert auf `0` gesetzt, erstreckt sich die Überschriftzelle bis zum Ende des Tabellenabschnitts ({{HTMLElement("thead")}}, {{HTMLElement("tbody")}}, {{HTMLElement("tfoot")}}, auch wenn implizit definiert), zu dem das `<th>` gehört. Werte höher als `65534` werden bei `65534` abgeschnitten.
- `scope`

  - : Definiert die Zellen, auf die sich die Überschrift (im `<th>` definiert) bezieht. Mögliche {{Glossary("enumerated", "augezählte")}} Werte sind:

    - `row`: Die Überschrift bezieht sich auf alle Zellen der Zeile, zu der sie gehört;
    - `col`: Die Überschrift bezieht sich auf alle Zellen der Spalte, zu der sie gehört;
    - `rowgroup`: Die Überschrift gehört zu einer Zeilengruppe und bezieht sich auf alle ihre Zellen;
    - `colgroup`: Die Überschrift gehört zu einer Spaltengruppe und bezieht sich auf alle ihre Zellen.

    Ist das `scope` Attribut nicht spezifiziert oder sein Wert nicht `row`, `col`, `rowgroup` oder `colgroup`, wählen Browser automatisch die Menge von Zellen aus, auf die sich die Überschriftzelle bezieht.

### Veraltete Attribute

Die folgenden Attribute sind veraltet und sollten nicht mehr verwendet werden. Sie sind unten dokumentiert, um bestehende Codes zu aktualisieren und aus historischem Interesse.

- `align` {{deprecated_inline}}

  - : Gibt die horizontale Ausrichtung der Überschriftzelle an. Die möglichen {{Glossary("enumerated", "augezählten")}} Werte sind `left`, `center`, `right`, `justify` und `char`. Wenn unterstützt, richtet der `char` Wert den Textinhalt am Zeichnen aus, das im [`char`](#char) Attribut definiert ist und versetzt durch das [`charoff`](#charoff) Attribut. Verwenden Sie die {{cssxref("text-align")}} CSS Eigenschaft stattdessen, da dieses Attribut veraltet ist.

- `axis` {{deprecated_inline}}

  - : Enthält eine Liste von durch Leerzeichen getrennten Zeichenfolgen, die jeweils einem `id` Attribut einer Gruppe von Zellen entsprechen, auf die sich die Überschriftzelle bezieht. Verwenden Sie das [`scope`](#scope) Attribut stattdessen, da dieses Attribut veraltet ist.

- `bgcolor` {{deprecated_inline}}

  - : Definiert die Hintergrundfarbe der Überschriftzelle. Der Wert ist eine HTML-Farbe; entweder ein [6-stelliger hexadezimaler RGB Code](/de/docs/Web/CSS/hex-color), mit einem `#` versehen, oder ein [Farbbegriff](/de/docs/Web/CSS/named-color). Andere CSS {{cssxref("color_value", "&lt;color&gt;")}} Werte werden nicht unterstützt. Verwenden Sie die {{cssxref("background-color")}} CSS Eigenschaft stattdessen, da dieses Attribut veraltet ist.

- `char` {{deprecated_inline}}

  - : Hat keine Wirkung. Es war ursprünglich dazu gedacht, die Ausrichtung des Inhalts an einem Zeichen der Überschriftzelle anzugeben. Typische Werte dafür sind ein Punkt (`.`) beim Versuch, Zahlen oder Geldwerte auszurichten. Wenn [`align`](#align) nicht auf `char` gesetzt ist, wird dieses Attribut ignoriert.

- `charoff` {{deprecated_inline}}

  - : Hat keine Wirkung. Es war ursprünglich dazu gedacht, die Anzahl der Zeichen anzugeben, um den Inhalt der Überschriftzelle vom durch das [`char`](#char) Attribut angegebenen Ausrichtungszeichen zu versetzen.

- `height` {{deprecated_inline}}

  - : Definiert eine empfohlene Höhe der Überschriftzelle. Verwenden Sie die {{cssxref("height")}} CSS Eigenschaft stattdessen, da dieses Attribut veraltet ist.

- `valign` {{deprecated_inline}}

  - : Gibt die vertikale Ausrichtung der Überschriftzelle an. Die möglichen {{Glossary("enumerated", "augezählten")}} Werte sind `baseline`, `bottom`, `middle`, und `top`. Verwenden Sie die {{cssxref("vertical-align")}} CSS Eigenschaft stattdessen, da dieses Attribut veraltet ist.

- `width` {{deprecated_inline}}
  - : Definiert eine empfohlene Breite der Überschriftzelle. Verwenden Sie die {{cssxref("width")}} CSS Eigenschaft stattdessen, da dieses Attribut veraltet ist.

## Nutzungshinweise

- Das `<th>` darf nur innerhalb eines {{HTMLElement("tr")}} Elements verwendet werden.
- In einfachen Kontexten ist die Verwendung des [`scope`](#scope) Attributs für Überschriftzellen (`<th>` Elemente) redundant, weil [`scope`](#scope) abgeleitet wird. Bestimmte unterstützende Technologien könnten jedoch nicht korrekt ableiten, sodass das Angeben des Überschriftsbereichs die Benutzererfahrung verbessern kann.
- Bei der Verwendung der Attribute [`colspan`](#colspan) und [`rowspan`](#rowspan) zur Erweiterung von Überschriftzellen über mehrere Spalten und Zeilen hinweg fügen sich Zellen ohne diese Attribute (mit dem Standardwert `1`) automatisch in freie verfügbare Bereiche der Tabellenstruktur ein, die 1x1 Zellen umfassen, wie in der folgenden Abbildung veranschaulicht:

  ![Darstellung der Spalten- und Zeilenüberspannung von Tabellenzellen: Zellen 1, 3 und 4 erstrecken sich über zwei Zeilen; Zelle 2 erstreckt sich über zwei Spalten; Zellen 5 und 6 passen in die verfügbaren Zellen, die die zweite und dritte Spalte in der zweiten Zeile sind](column-row-span.png)

  > [!NOTE]
  > Diese Attribute dürfen nicht verwendet werden, um Zellen zu überlappen.

## Beispiele

Siehe {{HTMLElement("table")}} für ein vollständiges Tabellenbeispiel, das gängige Standards und bewährte Verfahren einführt.

### Grundlegende Spalten- und Zeilenüberschriften

Dieses Beispiel verwendet `<th>` Elemente, um Spalten- und Zeilenüberschriften in einer einfachen Tabellenstruktur einzuführen.

#### HTML

Die erste Zeile ({{HTMLElement("tr")}} Element) enthält die Spaltenüberschriften (`<th>` Elemente), die als "Titel" für die Spalten fungieren, um das Verständnis der Informationen in den Spalten zu erleichtern und die Daten zu identifizieren. Um anzugeben, dass sich jede Spaltenüberschrift auf alle Zellen der entsprechenden Spalte bezieht, wird das `scope` Attribut auf `col` (Spalte) gesetzt.

Die verbleibenden Zeilen enthalten die Hauptdaten der Tabelle. Jede dieser Zeilen hat eine Zeilenüberschrift (`<th>` Element), die als erste Zelle eingeführt ist. Dies erstellt eine Kolumne mit Zeilenüberschriften als erste Kolumne der Tabelle. Ähnlich wie bei den Spaltenüberschriften wird das `scope` Attribut auf `row` gesetzt, um anzugeben, auf welche Zellen sich jede Zeilenüberschrift bezieht, in dem Beispiel unten sind dies alle Datenelemente ({{HTMLElement("td")}} Elemente) in jeder `row`.

> [!NOTE]
> Normalerweise werden die Gruppierungselemente {{HTMLElement("thead")}} und {{HTMLElement("tbody")}} verwendet, um Reihen mit Überschriften in die jeweiligen Kopf- und Körperabschnitte der Tabelle zu gruppieren. Diese Elemente werden in diesem Beispiel weggelassen, um die Komplexität zu reduzieren und den Fokus auf die Verwendung von Überschriftzellen zu richten.

```html
<table>
  <tr>
    <th scope="col">Symbol</th>
    <th scope="col">Code word</th>
    <th scope="col">Pronunciation</th>
  </tr>
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

Einige grundlegende CSS wird verwendet, um die Tabelle und ihre Zellen zu gestalten. Wir verwenden CSS [Attributselektoren](/de/docs/Web/CSS/Attribute_selectors), um Überschriftzellen basierend auf ihren `scope` Attributwerten zu zielen, Spalten- und Zeilenüberschriften (`<th>` Elemente) hervorzuheben und sie voneinander und von den Datenzellen ({{HTMLElement("td")}}) zu unterscheiden.

```css
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

tr:nth-of-type(odd) td {
  background-color: #eee;
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

#### Resultat

{{EmbedLiveSample("Basic_column_and_row_headers", 650, 170)}}

### Spalten- und Zeilenüberspannung

Dieses Beispiel erweitert und verbessert die grundlegende Tabelle aus dem [vorangegangenen Beispiel](#grundlegende_spalten-_und_zeilenüberschriften) durch Hinzufügen einer zweiten Zeile für zusätzliche Spaltenüberschriften.

#### HTML

Eine zusätzliche Tabellenzeile ({{HTMLElement("tr")}} Element) wird als zweite Kopfzeile der Tabelle mit zwei zusätzlichen Spaltenüberschriften (`<th>` Elemente) hinzugefügt. Auf diese Weise wird die "Aussprache" Spalte in zwei Spalten aufgeteilt, eine für die IPA (International Phonetic Alphabet) Notation und eine für die Aussprache (die ursprüngliche Aussprache Spalte). Die entsprechenden Datenelemente ({{HTMLElement("td")}} Elemente) werden zu jeder nachfolgenden Zeile hinzugefügt.

Wie in den [Nutzungshinweisen](#nutzungshinweise) gezeigt, können die `colspan` und `rowspan` Attribute für die `<th>` Elemente verwendet werden, um die Überschriftzellen den richtigen Spalten und Zeilen zuzuordnen. Um eine "zweizeilige" Kopfzeile in der Tabellenstruktur zu schaffen, werden die ersten beiden Überschriftzellen innerhalb des ersten {{HTMLElement("tr")}} Elements über zwei Zeilen hinweg ausgedehnt. Die dritte Überschriftzelle wird über zwei Spalten (weiterhin in der ersten Zeile) ausgedehnt. Diese Anordnung lässt zwei verfügbare Flächen in den dritten und vierten Spalten in der zweiten Zeile frei, wo die beiden Überschriften innerhalb des zweiten {{HTMLElement("tr")}} Elements automatisch platziert werden, wobei der Standardwert `1` für die `colspan` und `rowspan` Attribute ist.

> [!NOTE]
> Normalerweise werden {{HTMLElement("thead")}} und {{HTMLElement("tbody")}} Elemente verwendet, um Reihen mit Überschriften in die jeweiligen Kopf- und Körperabschnitte der Tabelle zu gruppieren. Dies ist in diesem Beispiel nicht implementiert, um sich auf die Überschriften und das Überspannen zu konzentrieren und die Komplexität des Beispiels zu reduzieren.

```html
<table>
  <tr>
    <th scope="col" rowspan="2">Symbol</th>
    <th scope="col" rowspan="2">Code word</th>
    <th scope="col" colspan="2">Pronunciation</th>
  </tr>
  <tr>
    <th scope="col">IPA</th>
    <th scope="col">Respelling</th>
  </tr>
  <tr>
    <th scope="row">A</th>
    <td>Alfa</td>
    <td>ˈælfa</td>
    <td>AL fah</td>
  </tr>
  <tr>
    <th scope="row">B</th>
    <td>Bravo</td>
    <td>ˈbraːˈvo</td>
    <td>BRAH voh</td>
  </tr>
  <tr>
    <th scope="row">C</th>
    <td>Charlie</td>
    <td>ˈtʃɑːli</td>
    <td>CHAR lee</td>
  </tr>
  <tr>
    <th scope="row">D</th>
    <td>Delta</td>
    <td>ˈdeltɑ</td>
    <td>DELL tah</td>
  </tr>
</table>
```

#### CSS

Das CSS bleibt unverändert gegenüber dem [vorherigen Beispiel](#grundlegende_spalten-_und_zeilenüberschriften).

```css hidden
table {
  border-collapse: collapse;
  border: 2px solid rgb(140 140 140);
  font-family: sans-serif;
  font-size: 0.8rem;
  letter-spacing: 1px;
}

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

tr:nth-of-type(odd) td {
  background-color: #eee;
}
```

#### Resultat

{{EmbedLiveSample("Column_and_row_spanning", 650, 200)}}

### Überschriftzellen mit anderen Überschriftzellen assoziieren

Für komplexere Beziehungen zwischen Überschriftzellen reicht die Verwendung von `th` Elementen mit dem `scope` Attribut allein für unterstützende Technologien, insbesondere Bildschirmleser, möglicherweise nicht aus.

#### HTML

Um die {{Glossary("accessibility", "Zugänglichkeit")}} des [vorherigen Beispiels](#spalten-_und_zeilenüberspannung) zu verbessern und Bildschirmlesern beispielsweise zu erlauben, die mit jeder Überschriftzelle verbundenen Überschriften auszusprechen, kann das `headers` Attribut zusammen mit `id` Attributen eingeführt werden. Aufgrund der Art und Weise, wie die "Aussprache" Spalte in zwei Spalten im Beispiel aufgeteilt ist und eine "zweizeilige" Kopfzeile geschaffen wird, können unterstützende Technologien wie Bildschirmleser möglicherweise nicht erkennen, mit welchen zusätzlichen Überschriftzellen (`th` Elemente) die "Aussprache" Überschriftzelle verbunden ist und umgekehrt. Daher wird das `headers` Attribut auf den "Aussprache", "IPA" und "Aussprache" Überschriftzellen verwendet, um die verwandten Überschriftzellen basierend auf den Werten der einzigartigen Identifikatoren von den hinzugefügten `id` Attributen in der Form einer durch Leerzeichen getrennten Liste zu assoziieren.

> [!NOTE]
> Es wird empfohlen, aussagekräftigere und nützlichere Werte für das `id` Attribut zu verwenden. Jedes `id` in einem Dokument muss in diesem Dokument einzigartig sein. In diesem Beispiel sind die `id` Werte einzelne Zeichen, um den Fokus auf das Konzept des `headers` Attributs zu richten.

```html
<table>
  <tr>
    <th scope="col" rowspan="2">Symbol</th>
    <th scope="col" rowspan="2">Code word</th>
    <th scope="col" colspan="2" id="p" headers="i r">Pronunciation</th>
  </tr>
  <tr>
    <th scope="col" id="i" headers="p">IPA</th>
    <th scope="col" id="r" headers="p">Respelling</th>
  </tr>
  <tr>
    <th scope="row">A</th>
    <td>Alfa</td>
    <td>ˈælfa</td>
    <td>AL fah</td>
  </tr>
  <tr>
    <th scope="row">B</th>
    <td>Bravo</td>
    <td>ˈbraːˈvo</td>
    <td>BRAH voh</td>
  </tr>
  <tr>
    <th scope="row">C</th>
    <td>Charlie</td>
    <td>ˈtʃɑːli</td>
    <td>CHAR lee</td>
  </tr>
  <tr>
    <th scope="row">D</th>
    <td>Delta</td>
    <td>ˈdeltɑ</td>
    <td>DELL tah</td>
  </tr>
</table>
```

#### Resultat

Das [visuelle Ergebnis](#result_2) bleibt unverändert gegenüber der [vorherigen Beispieltabelle](#spalten-_und_zeilenüberspannung).

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Guides/Content_categories"
          >Inhaltskategorien</a
        >
      </th>
      <td>Keine.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content"
          >Fließender Inhalt</a
        >, aber ohne header, footer, Abschnittsinhalt oder Überschriftsinhalt
        Nachkommen.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>
        Der Start-Tag ist obligatorisch.<br />Der End-Tag kann weggelassen werden, wenn
        er unmittelbar von einem &lt;th&gt; oder
        {{HTMLElement("td")}} Element gefolgt wird oder wenn keine weiteren Daten
        in seinem Elternelement vorhanden sind.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>Ein {{HTMLElement("tr")}} Element.</td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
      <td>
        <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role"><code>columnheader</code></a> oder <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/rowheader_role"><code>rowheader</code></a>
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
- {{HTMLElement("caption")}}, {{HTMLElement("col")}}, {{HTMLElement("colgroup")}}, {{HTMLElement("table")}}, {{HTMLElement("tbody")}}, {{HTMLElement("td")}}, {{HTMLElement("tfoot")}}, {{HTMLElement("thead")}}, {{HTMLElement("tr")}}: Andere tabellenbezogene Elemente
- {{cssxref("background-color")}}: CSS Eigenschaft, um die Hintergrundfarbe jeder Überschriftzelle zu setzen
- {{cssxref("border")}}: CSS Eigenschaft zur Steuerung der Rahmen von Überschriftzellen
- {{cssxref("height")}}: CSS Eigenschaft zur Steuerung der empfohlenen Höhe der Überschriftzelle
- {{cssxref("text-align")}}: CSS Eigenschaft, um den Inhalt jeder Überschriftzelle horizontal auszurichten
- {{cssxref("vertical-align")}}: CSS Eigenschaft, um den Inhalt jeder Überschriftzelle vertikal auszurichten
- {{cssxref("width")}}: CSS Eigenschaft zur Steuerung der empfohlenen Breite der Überschriftzelle
- {{cssxref(":nth-of-type")}}, {{cssxref(":first-of-type")}}, {{cssxref(":last-of-type")}}: CSS Pseudoklassen, um die gewünschten Überschriftzellen auszuwählen
