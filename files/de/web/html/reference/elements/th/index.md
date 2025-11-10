---
title: "<th>: Das Tabellenelement für Überschriften"
slug: Web/HTML/Reference/Elements/th
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

Das **`<th>`**-Element in [HTML](/de/docs/Web/HTML) definiert eine Zelle als Überschrift für eine Gruppe von Tabellenzellen und kann als Kind des {{HTMLElement("tr")}}-Elements verwendet werden. Die genaue Natur dieser Gruppe wird durch die Attribute [`scope`](#scope) und [`headers`](#headers) definiert.

{{InteractiveExample("HTML Demo: &lt;th&gt;", "tabbed-taller")}}

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

- `abbr`
  - : Eine kurze, abgekürzte Beschreibung des Inhalts der Überschriftzelle, die als alternatives Label verwendet wird, um die Zelle in anderen Kontexten zu referenzieren. Einige Benutzeragenten, wie Screenreader, können diese Beschreibung vor dem eigentlichen Inhalt darstellen.
- `colspan`
  - : Ein nicht-negativer ganzzahliger Wert, der angibt, wie viele Spalten die Überschriftzelle überspannt oder erweitert. Der Standardwert ist `1`. Benutzeragenten verwerfen Werte über 1000 als falsch und setzen solche Werte standardmäßig auf `1`.
- `headers`
  - : Eine Liste von durch Leerzeichen getrennten Zeichenfolgen, die den `id`-Attributen der `<th>`-Elemente entsprechen, welche die Überschriften für diese Überschriftzelle bereitstellen.
- `rowspan`
  - : Ein nicht-negativer ganzzahliger Wert, der angibt, wie viele Zeilen die Überschriftzelle überspannt oder erweitert. Der Standardwert ist `1`; wenn der Wert auf `0` gesetzt wird, erstreckt sich die Überschriftzelle bis zum Ende des Tabellenbereichs ({{HTMLElement("thead")}}, {{HTMLElement("tbody")}}, {{HTMLElement("tfoot")}}, auch wenn implizit definiert), zu dem das `<th>` gehört. Werte über `65534` werden bei `65534` abgeschnitten.
- `scope`
  - : Definiert die Zellen, auf die sich die Überschrift (im `<th>`-Element definiert) bezieht. Mögliche {{Glossary("enumerated", "aufzählbare")}} Werte sind:
    - `row`: Die Überschrift bezieht sich auf alle Zellen der Zeile, zu der sie gehört;
    - `col`: Die Überschrift bezieht sich auf alle Zellen der Spalte, zu der sie gehört;
    - `rowgroup`: Die Überschrift gehört zu einer Zeilengruppe und bezieht sich auf alle deren Zellen;
    - `colgroup`: Die Überschrift gehört zu einer Spaltengruppe und bezieht sich auf alle deren Zellen.

    Wenn das `scope`-Attribut nicht spezifiziert ist oder sein Wert nicht `row`, `col`, `rowgroup` oder `colgroup` ist, wählen Browser automatisch die Gruppe der Zellen aus, auf die sich die Überschriftzelle bezieht.

### Veraltete Attribute

Die folgenden Attribute sind veraltet und sollten nicht verwendet werden. Sie sind unten dokumentiert, um vorhandenen Code zu aktualisieren und aus historischem Interesse.

- `align` {{deprecated_inline}}
  - : Bestimmt die horizontale Ausrichtung der Überschriftzelle. Die möglichen {{Glossary("enumerated", "aufzählbaren")}} Werte sind `left`, `center`, `right`, `justify` und `char`. Wenn unterstützt, richtet der `char`-Wert den textuellen Inhalt an dem im [`char`](#char)-Attribut definierten Zeichen aus, sowie an dem durch das [`charoff`](#charoff)-Attribut definierten Versatz. Verwenden Sie die {{cssxref("text-align")}} CSS-Eigenschaft statt dieses Attributs, da es veraltet ist.

- `axis` {{deprecated_inline}}
  - : Enthält eine Liste von durch Leerzeichen getrennten Zeichenfolgen, die jeweils dem `id`-Attribut einer Gruppe von Zellen entsprechen, auf die die Überschriftzelle zutrifft. Verwenden Sie das [`scope`](#scope)-Attribut statt dieses Attributs, da es veraltet ist.

- `bgcolor` {{deprecated_inline}}
  - : Definiert die Hintergrundfarbe der Überschriftzelle. Der Wert ist eine HTML-Farbe; entweder ein [sechsstelliger hexadezimaler RGB-Code](/de/docs/Web/CSS/Reference/Values/hex-color), vorangestellt mit einem `#`, oder ein [Farb-Keyword](/de/docs/Web/CSS/Reference/Values/named-color). Andere CSS {{cssxref("color_value", "&lt;color&gt;")}}-Werte werden nicht unterstützt. Verwenden Sie die {{cssxref("background-color")}} CSS-Eigenschaft statt dieses Attributs, da es veraltet ist.

- `char` {{deprecated_inline}}
  - : Tut nichts. Es war ursprünglich gedacht, um die Ausrichtung des Inhalts an einem Zeichen der Überschriftzelle zu spezifizieren. Typische Werte hierfür beinhalten einen Punkt (`.`), wenn versucht wird, Zahlen oder Geldwerte auszurichten. Wenn [`align`](#align) nicht auf `char` gesetzt ist, wird dieses Attribut ignoriert.

- `charoff` {{deprecated_inline}}
  - : Tut nichts. Es war ursprünglich gedacht, um die Anzahl der Zeichen anzugeben, mit denen der Inhalt der Überschriftzelle vom im [`char`](#char)-Attribut spezifizierten Ausrichtungszeichen versetzt werden soll.

- `height` {{deprecated_inline}}
  - : Definiert eine empfohlene Höhe der Überschriftzelle. Verwenden Sie die {{cssxref("height")}} CSS-Eigenschaft statt dieses Attributs, da es veraltet ist.

- `valign` {{deprecated_inline}}
  - : Bestimmt die vertikale Ausrichtung der Überschriftzelle. Die möglichen {{Glossary("enumerated", "aufzählbaren")}} Werte sind `baseline`, `bottom`, `middle` und `top`. Verwenden Sie die {{cssxref("vertical-align")}} CSS-Eigenschaft statt dieses Attributs, da es veraltet ist.

- `width` {{deprecated_inline}}
  - : Definiert eine empfohlene Breite der Überschriftzelle. Verwenden Sie die {{cssxref("width")}} CSS-Eigenschaft statt dieses Attributs, da es veraltet ist.

## Nutzungshinweise

- Das `<th>`-Element darf nur innerhalb eines {{HTMLElement("tr")}}-Elements verwendet werden.
- In einfachen Kontexten ist die Verwendung des [`scope`](#scope)-Attributs in Überschriftzellen (`<th>`-Elemente) redundant, da [`scope`](#scope) abgeleitet wird. Bestimmte unterstützende Technologien können jedoch möglicherweise nicht korrekt ableiten, daher kann die Angabe des Bereichs der Überschrift die Benutzererfahrung verbessern.
- Beim Verwenden der Attribute [`colspan`](#colspan) und [`rowspan`](#rowspan), um Überschriftzellen über mehrere Spalten und Zeilen zu erstrecken, werden Zellen ohne definierte Attribute (mit einem Standardwert von `1`) automatisch in freie verfügbare Räume der Tabellenstruktur integriert, die 1x1-Zellen umfassen, wie im folgenden Bild veranschaulicht:

  ![Abbildung, die das Spalten- und Zeilenspannen von Tabellenzellen veranschaulicht: Zellen 1, 3 und 4 über zwei Zeilen; Zelle 2 über zwei Spalten; Zellen 5 und 6 passen in die verfügbaren Zellen, die die zweite und dritte Spalte in der zweiten Zeile sind](/shared-assets/images/diagrams/html/table/column-row-span.png)

  > [!NOTE]
  > Diese Attribute dürfen nicht verwendet werden, um Zellen zu überlappen.

## Beispiele

Das {{HTMLElement("table")}} zeigt ein vollständiges Tabellenbeispiel, das gängige Standards und bewährte Praktiken einführt.

### Grundlegende Spalten- und Zeilenüberschriften

In diesem Beispiel werden `<th>`-Elemente verwendet, um Spalten- und Zeilenüberschriften in einer grundlegenden Tabellenstruktur einzuführen.

#### HTML

Die erste Zeile ({{HTMLElement("tr")}}-Element) enthält die Spaltenüberschriften (`<th>`-Elemente), die als "Titel" für die Spalten fungieren, um das Verständnis der Informationen in den Spalten und die Identifikation der Daten zu erleichtern. Um anzuzeigen, dass sich jede Spaltenüberschrift auf alle Zellen der entsprechenden Spalte bezieht, wird das [`scope`](#scope)-Attribut auf `col` (Spalte) gesetzt.

Die verbleibenden Zeilen enthalten die Hauptdaten der Tabelle. Jede dieser Zeilen hat eine Zeilenüberschrift (`<th>`-Element), die als erste Zelle eingeführt wird. Dadurch entsteht eine Spalte mit Zeilenüberschriften als erste Spalte der Tabelle. Ähnlich wie bei den Spaltenüberschriften wird das [`scope`](#scope)-Attribut auf `row` gesetzt, um zu spezifizieren, auf welche Zellen sich jede Zeilenüberschrift bezieht, was im unten stehenden Beispiel alle Datenzellen ({{HTMLElement("td")}}-Elemente) in jeder `row` sind.

> [!NOTE]
> Normalerweise werden die Gruppierungselemente {{HTMLElement("thead")}} und {{HTMLElement("tbody")}} verwendet, um Zeilen mit Überschriften in die jeweiligen Tabellenkopf- und -körperabschnitte zu gruppieren. Diese Elemente werden in diesem Beispiel ausgelassen, um die Komplexität zu reduzieren und den Fokus auf die Verwendung von Überschriftzellen zu legen.

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

Einige grundlegende CSS-Regeln werden verwendet, um die Tabelle und ihre Zellen zu gestalten. Wir verwenden CSS-[Attributselektoren](/de/docs/Web/CSS/Reference/Selectors/Attribute_selectors), um Überschriftzellen basierend auf ihren [`scope`](#scope)-Attributwerten auszuwählen und Spalten- und Zeilenüberschriften (`<th>`-Elemente) zu kennzeichnen, um sie voneinander und von den Datenzellen ({{HTMLElement("td")}}) zu unterscheiden.

```css
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

tr:nth-of-type(odd) td {
  background-color: #eeeeee;
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

{{EmbedLiveSample("Basic_column_and_row_headers", 650, 170)}}

### Spalten- und Zeilenspannen

Dieses Beispiel erweitert und verbessert die Grundtabelle aus dem [vorherigen Beispiel](#grundlegende_spalten-_und_zeilenüberschriften) durch das Hinzufügen einer zweiten Zeile für zusätzliche Spaltenüberschriften.

#### HTML

Eine zusätzliche Tabellenzeile ({{HTMLElement("tr")}}-Element) wird als zweite Überschriftenzeile der Tabelle hinzugefügt, mit zwei zusätzlichen Spaltenüberschriften (`<th>`-Elemente). Auf diese Weise wird die "Aussprache"-Spalte in zwei Spalten aufgeteilt, eine für die IPA (Internationale Phonetische Alphabet)-Notation und eine für die erneute Buchstabierung (die ursprüngliche Aussprache-Spalte). Die entsprechenden Datenzellen ({{HTMLElement("td")}}-Elemente) werden zu jeder nachfolgenden Zeile hinzugefügt.

Wie in den [Nutzungshinweisen](#nutzungshinweise) gezeigt, können die [`colspan`](#colspan) und [`rowspan`](#rowspan)-Attribute für die `<th>`-Elemente verwendet werden, um die Überschriftzellen den richtigen Spalten und Zeilen zuzuordnen. Um eine "zweizeilige" Überschrift in der Tabellenstruktur zu erreichen, werden die ersten beiden Überschriftzellen innerhalb des ersten {{HTMLElement("tr")}}-Elements auf zwei Zeilen erstreckt. Die dritte Überschriftzelle erstreckt sich über zwei Spalten (bleibt in der ersten Zeile). Diese Einrichtung lässt zwei verfügbare Bereiche in der dritten und vierten Spalte in der zweiten Zeile frei, in denen die beiden Überschriften innerhalb des zweiten {{HTMLElement("tr")}}-Elements automatisch platziert werden, wobei der Standardwert für die [`colspan`](#colspan) und [`rowspan`](#rowspan)-Attribute `1` ist.

> [!NOTE]
> Normalerweise werden {{HTMLElement("thead")}}- und {{HTMLElement("tbody")}}-Elemente verwendet, um Zeilen mit Überschriften in die jeweiligen Tabellenkopf- und Körperabschnitte zu gruppieren. Dies ist in diesem Beispiel nicht implementiert, um sich auf die Überschriften und das Spannen zu konzentrieren und die Komplexität des Beispiels zu reduzieren.

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

Das CSS ist unverändert zum [vorherigen Beispiel](#grundlegende_spalten-_und_zeilenüberschriften).

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
  color: white;
}

th[scope="row"] {
  background-color: #d6ecd4;
}

tr:nth-of-type(odd) td {
  background-color: #eeeeee;
}
```

#### Ergebnis

{{EmbedLiveSample("Column_and_row_spanning", 650, 200)}}

### Verknüpfen von Überschriftzellen mit anderen Überschriftzellen

Für komplexere Beziehungen zwischen Überschriftzellen kann die alleinige Nutzung von `th`-Elementen mit dem [`scope`](#scope)-Attribut für unterstützende Technologien, insbesondere Screenreader, nicht ausreichen.

#### HTML

Um die {{Glossary("accessibility", "Zugänglichkeit")}} des [vorherigen Beispiels](#spalten-_und_zeilenspannen) zu verbessern und um beispielsweise Screenreadern das Vorlesen der mit jeder Überschriftzelle verbundenen Überschriften zu ermöglichen, kann das [`headers`](#headers)-Attribut zusammen mit [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id)-Attributen eingeführt werden. Aufgrund der Art und Weise, wie die "Aussprache"-Spalte im Beispiel in zwei Spalten aufgeteilt wird, wobei eine "zweizeilige" Überschrift eingeführt wird, können unterstützende Technologien wie Screenreader möglicherweise nicht identifizieren, mit welchen zusätzlichen Überschriftzellen (`th`-Elemente) die "Aussprache"-Überschriftzelle in Beziehung steht und umgekehrt. Daher wird das [`headers`](#headers)-Attribut auf den "Aussprache"-, "IPA"- und "Respelling"-Überschriftzellen verwendet, um die entsprechenden Überschriftzellen basierend auf den Werten der einzigartigen Kennungen aus den hinzugefügten [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id)-Attributen in Form einer durch Leerzeichen getrennten Liste zu verknüpfen.

> [!NOTE]
> Es wird empfohlen, aussagekräftigere und nützlichere Werte für das [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id)-Attribut zu verwenden. Jedes `id` in einem Dokument muss in diesem Dokument eindeutig sein. In diesem Beispiel sind die `id`-Werte Einzelbuchstaben, um den Fokus auf das Konzept des [`headers`](#headers)-Attributs zu legen.

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

#### Ergebnis

Das [visuelle Ergebnis](#result_2) ist unverändert zum [vorherigen Tabellenbeispiel](#spalten-_und_zeilenspannen).

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
          >Flussinhalt</a
        >, aber ohne Header, Footer, Abschnittsinhalte oder Überschrifteninhalte
        als Nachkommen.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>
        Das Start-Tag ist obligatorisch.<br />Das End-Tag kann weggelassen
        werden, wenn es unmittelbar von einem <code>&lt;th&gt;</code> oder
        einem {{HTMLElement("td")}}-Element gefolgt wird oder wenn es keine
        weiteren Daten in seinem Elternelement gibt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>Ein {{HTMLElement("tr")}}-Element.</td>
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

- [Lernen: Grundlegende HTML-Tabellen](/de/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics)
- {{HTMLElement("caption")}}, {{HTMLElement("col")}}, {{HTMLElement("colgroup")}}, {{HTMLElement("table")}}, {{HTMLElement("tbody")}}, {{HTMLElement("td")}}, {{HTMLElement("tfoot")}}, {{HTMLElement("thead")}}, {{HTMLElement("tr")}}: Andere tabellenbezogene Elemente
- {{cssxref("background-color")}}: CSS-Eigenschaft, um die Hintergrundfarbe jeder Überschriftzelle zu setzen
- {{cssxref("border")}}: CSS-Eigenschaft, um die Begrenzungen der Überschriftzellen zu steuern
- {{cssxref("height")}}: CSS-Eigenschaft, um die empfohlene Höhe der Überschriftzelle zu steuern
- {{cssxref("text-align")}}: CSS-Eigenschaft, um den Inhalt jeder Überschriftzelle horizontal auszurichten
- {{cssxref("vertical-align")}}: CSS-Eigenschaft, um den Inhalt jeder Überschriftzelle vertikal auszurichten
- {{cssxref("width")}}: CSS-Eigenschaft, um die empfohlene Breite der Überschriftzelle zu steuern
- {{cssxref(":nth-of-type")}}, {{cssxref(":first-of-type")}}, {{cssxref(":last-of-type")}}: CSS-Pseudoklassen, um die gewünschten Überschriftzellen auszuwählen
