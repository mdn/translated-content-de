---
title: "<th>: Das Tabellenkopfzeilenelement"
slug: Web/HTML/Reference/Elements/th
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

Das **`<th>`**-Element [HTML](/de/docs/Web/HTML) definiert eine Zelle als Kopfzeile einer Gruppe von Tabellenzellen und kann als Kind des {{HTMLElement("tr")}}-Elements verwendet werden. Die genaue Natur dieser Gruppe wird durch die Attribute [`scope`](#scope) und [`headers`](#headers) definiert.

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

Dieses Element enthält die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `abbr`
  - : Eine kurze, abgekürzte Beschreibung des Inhalts der Kopfzeile, die als alternatives Label für die Kopfzeile verwendet wird, wenn auf die Zelle in anderen Kontexten Bezug genommen wird. Einige Benutzeragenten, wie z. B. Screenreader, können diese Beschreibung vor dem eigentlichen Inhalt präsentieren.
- `colspan`
  - : Ein nicht-negativer ganzzahliger Wert, der angibt, wie viele Spalten die Kopfzeile umfasst oder erweitert. Der Standardwert ist `1`. Benutzeragenten lehnen Werte über 1000 als falsch ab und setzen solche Werte standardmäßig auf `1`.
- `headers`
  - : Eine Liste von durch Leerzeichen getrennten Zeichenfolgen, die den `id`-Attributen der `<th>`-Elemente entsprechen, die die Kopfzeilen für diese Kopfzeile bereitstellen.
- `rowspan`
  - : Ein nicht-negativer ganzzahliger Wert, der angibt, wie viele Zeilen die Kopfzeile umfasst oder erweitert. Der Standardwert ist `1`; wenn der Wert auf `0` gesetzt wird, erstreckt sich die Kopfzeile bis zum Ende des Tabellengruppenabschnitts ({{HTMLElement("thead")}}, {{HTMLElement("tbody")}}, {{HTMLElement("tfoot")}}, auch wenn implizit definiert), zu dem das `<th>` gehört. Werte größer als `65534` werden auf `65534` begrenzt.
- `scope`
  - : Definiert die Zellen, auf die sich die Kopfzeile (im `<th>` definiert) bezieht. Mögliche {{Glossary("enumerated", "enumerierte")}} Werte sind:
    - `row`: die Kopfzeile bezieht sich auf alle Zellen der Zeile, zu der sie gehört;
    - `col`: die Kopfzeile bezieht sich auf alle Zellen der Spalte, zu der sie gehört;
    - `rowgroup`: die Kopfzeile gehört zu einer Zeilengruppe und bezieht sich auf alle ihre Zellen;
    - `colgroup`: die Kopfzeile gehört zu einer Spaltengruppe und bezieht sich auf alle ihre Zellen.

    Wenn das `scope`-Attribut nicht angegeben ist oder sein Wert nicht `row`, `col`, `rowgroup` oder `colgroup` ist, wählen Browser automatisch die Gruppe von Zellen aus, auf die sich die Kopfzeile bezieht.

### Veraltete Attribute

Die folgenden Attribute sind veraltet und sollten nicht mehr verwendet werden. Sie werden hier aus Dokumentationsgründen beim Aktualisieren bestehenden Codes und aus historischem Interesse aufgeführt.

- `align` {{deprecated_inline}}
  - : Gibt die horizontale Ausrichtung der Kopfzeile an. Die möglichen {{Glossary("enumerated", "enumerierten")}} Werte sind `left`, `center`, `right`, `justify` und `char`. Wenn unterstützt, richtet der Wert `char` den Textinhalt an dem Zeichen aus, das im [`char`](#char)-Attribut definiert ist, und an dem Versatz, der im [`charoff`](#charoff)-Attribut definiert ist. Verwenden Sie die {{cssxref("text-align")}}-CSS-Eigenschaft anstelle dieses Attributs, da es veraltet ist.

- `axis` {{deprecated_inline}}
  - : Enthält eine Liste von durch Leerzeichen getrennten Zeichenfolgen, die jeweils dem `id`-Attribut einer Gruppe von Zellen entsprechen, auf die sich die Kopfzeile bezieht. Verwenden Sie das [`scope`](#scope)-Attribut statt dessen, da dieses Attribut veraltet ist.

- `bgcolor` {{deprecated_inline}}
  - : Definiert die Hintergrundfarbe der Kopfzeile. Der Wert ist eine HTML-Farbe; entweder ein [6-stelliger hexadezimaler RGB-Code](/de/docs/Web/CSS/hex-color), mit einem `#` präfixiert, oder ein [Farbbezeichner](/de/docs/Web/CSS/named-color). Andere CSS-{{cssxref("color_value", "&lt;color&gt;")}}-Werte werden nicht unterstützt. Verwenden Sie die {{cssxref("background-color")}}-CSS-Eigenschaft anstelle dieses Attributs, da es veraltet ist.

- `char` {{deprecated_inline}}
  - : Hat keine Funktion. Es war ursprünglich vorgesehen, um die Ausrichtung des Inhalts an einem Zeichen der Kopfzeile festzulegen. Typische Werte hierfür sind ein Punkt (`.`), wenn versucht wird, Zahlen oder Geldwerte auszurichten. Wenn [`align`](#align) nicht auf `char` gesetzt ist, wird dieses Attribut ignoriert.

- `charoff` {{deprecated_inline}}
  - : Hat keine Funktion. Es war ursprünglich vorgesehen, um die Anzahl der Zeichen anzugeben, um die der Inhalt der Kopfzeile von dem im [`char`](#char)-Attribut spezifizierten Ausrichtungszeichen versetzt wird.

- `height` {{deprecated_inline}}
  - : Definiert eine empfohlene Höhe der Kopfzeile. Verwenden Sie die {{cssxref("height")}}-CSS-Eigenschaft anstelle dieses Attributs, da es veraltet ist.

- `valign` {{deprecated_inline}}
  - : Gibt die vertikale Ausrichtung der Kopfzeile an. Die möglichen {{Glossary("enumerated", "enumerierten")}} Werte sind `baseline`, `bottom`, `middle` und `top`. Verwenden Sie die {{cssxref("vertical-align")}}-CSS-Eigenschaft anstelle dieses Attributs, da es veraltet ist.

- `width` {{deprecated_inline}}
  - : Definiert eine empfohlene Breite der Kopfzeile. Verwenden Sie die {{cssxref("width")}}-CSS-Eigenschaft anstelle dieses Attributs, da es veraltet ist.

## Verwendungshinweise

- Die `<th>`-Elemente dürfen nur innerhalb eines {{HTMLElement("tr")}}-Elements verwendet werden.
- In einfachen Kontexten ist die Verwendung des [`scope`](#scope)-Attributs auf Kopfzeilen (`<th>`-Elemente) überflüssig, da [`scope`](#scope) impliziert wird. Allerdings können bestimmte Hilfstechnologien die richtige Ableitung nicht vollziehen, daher kann das Spezifizieren des Kopfzeilenbereichs die Benutzererfahrung verbessern.
- Bei der Verwendung der [`colspan`](#colspan)- und [`rowspan`](#rowspan)-Attribute, um Kopfzeilen über mehrere Spalten und Zeilen zu verteilen, werden Zellen ohne diese definierten Attribute (mit dem Standardwert `1`) automatisch in freie verfügbare Räume in der Tabellenstruktur eingefügt, die 1x1-Zellen umfassen, wie in der folgenden Abbildung dargestellt:

  ![Abbildung, die das Spalten- und Zeilenspan von Tabellenzellen zeigt: Zellen 1, 3 und 4 erstrecken sich über zwei Zeilen; Zelle 2 erstreckt sich über zwei Spalten; Zellen 5 und 6 passen in die verfügbaren Zellen, die die zweite und dritte Spalte in der zweiten Zeile sind](column-row-span.png)

  > [!NOTE]
  > Diese Attribute dürfen nicht verwendet werden, um Zellen zu überlappen.

## Beispiele

Siehe {{HTMLElement("table")}} für ein vollständiges Tabellenbeispiel mit allgemeinen Standards und bewährten Praktiken.

### Grundlegende Spalten- und Zeilenüberschriften

Dieses Beispiel verwendet `<th>`-Elemente, um Spalten- und Zeilenüberschriften in einer grundlegenden Tabellenstruktur einzuführen.

#### HTML

Die erste Zeile ({{HTMLElement("tr")}}-Element) enthält die Spaltenüberschriften (`<th>`-Elemente), die als "Titel" für die Spalten fungieren, um das Verständnis der Informationen in den Spalten zu erleichtern und die Daten zu identifizieren. Um anzuzeigen, dass sich jede Spaltenüberschrift auf alle Zellen in der entsprechenden Spalte bezieht, wird das [`scope`](#scope)-Attribut auf `col` (Spalte) gesetzt.

Die verbleibenden Zeilen enthalten die Hauptdaten der Tabelle. Jede dieser Zeilen hat eine Zeilenüberschrift (`<th>`-Element), die als erste Zelle eingeführt wird. Dadurch entsteht eine Spalte mit Zeilenüberschriften als erste Spalte der Tabelle. Ähnlich den Spaltenüberschriften wird das [`scope`](#scope)-Attribut auf `row` gesetzt, um anzugeben, auf welche Zellen sich jede Zeilenüberschrift bezieht, im untenstehenden Beispiel sind dies alle Datenzellen ({{HTMLElement("td")}}-Elemente) in jeder Zeile.

> [!NOTE]
> Normalerweise werden die Gruppierungselemente {{HTMLElement("thead")}} und {{HTMLElement("tbody")}} verwendet, um Zeilen mit Kopfzeilen in die entsprechenden Kopf- und Hauptabschnitte der Tabelle zu gruppieren. Diese Elemente werden in diesem Beispiel weggelassen, um die Komplexität zu reduzieren und das Augenmerk auf die Verwendung von Kopfzeilen zu lenken.

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

Einige grundlegende CSS werden verwendet, um die Tabelle und ihre Zellen zu gestalten. Wir verwenden CSS-[Attributselektoren](/de/docs/Web/CSS/Attribute_selectors), um Kopfzeilen basierend auf ihren [`scope`](#scope)-Attributwerten zu formatieren, indem Spalten- und Zeilenüberschriften (`<th>`-Elemente) hervorgehoben und voneinander sowie von den Datenzellen ({{HTMLElement("td")}}) unterschieden werden.

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

#### Ergebnis

{{EmbedLiveSample("Basic_column_and_row_headers", 650, 170)}}

### Spalten- und Zeilenspannungs

Dieses Beispiel erweitert und verbessert die grundlegende Tabelle aus dem [vorherigen Beispiel](#grundlegende_spalten-_und_zeilenüberschriften), indem eine zweite Zeile für zusätzliche Spaltenüberschriften hinzugefügt wird.

#### HTML

Eine zusätzliche Tabellenzeile ({{HTMLElement("tr")}}-Element) wird als zweite Kopfzeile der Tabelle hinzugefügt, die zwei zusätzliche Spaltenüberschriften (`<th>`-Elemente) enthält. So wird die "Aussprache"-Spalte in zwei Spalten unterteilt, eine für die IPA (Internationales Phonetisches Alphabet)-Notation und eine für die Umschrift (die ursprüngliche Aussprache-Spalte). Die entsprechenden Datenzellen ({{HTMLElement("td")}}-Elemente) werden jeder folgenden Zeile hinzugefügt.

Wie in den [Verwendungshinweisen](#verwendungshinweise) gezeigt, können die [`colspan`](#colspan)- und [`rowspan`](#rowspan)-Attribute für die `<th>`-Elemente verwendet werden, um die Kopfzeilen den richtigen Spalten und Zeilen zuzuordnen. Um eine "zweizeilige" Kopfzeile in der Tabellenstruktur zu erreichen, werden die ersten beiden Kopfzeilenzellen innerhalb des ersten {{HTMLElement("tr")}}-Elements über zwei Zeilen verteilt. Die dritte Kopfzeilenzelle wird über zwei Spalten (verbleibend in der ersten Zeile) verteilt. Dieses Setup lässt zwei verfügbare Bereiche in der dritten und vierten Spalte in der zweiten Zeile, in denen die zwei Kopfzeilen innerhalb des zweiten {{HTMLElement("tr")}}-Elements automatisch platziert werden, wobei der Standardwert für die [`colspan`](#colspan)- und [`rowspan`](#rowspan)-Attribute `1` ist.

> [!NOTE]
> Normalerweise werden {{HTMLElement("thead")}}- und {{HTMLElement("tbody")}}-Elemente verwendet, um Zeilen mit Kopfzeilen in die entsprechenden Kopf- und Hauptabschnitte der Tabelle zu gruppieren. Dies ist in diesem Beispiel nicht umgesetzt, um den Fokus auf die Kopfzeilen und die Spannungsfunktion zu legen und die Komplexität des Beispiels zu reduzieren.

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
  color: #fff;
}

th[scope="row"] {
  background-color: #d6ecd4;
}

tr:nth-of-type(odd) td {
  background-color: #eee;
}
```

#### Ergebnis

{{EmbedLiveSample("Column_and_row_spanning", 650, 200)}}

### Assoziation von Kopfzeilenzellen mit anderen Kopfzeilenzellen

Für komplexere Beziehungen zwischen Kopfzeilenzellen reicht die Verwendung von `th`-Elementen mit dem [`scope`](#scope)-Attribut allein möglicherweise nicht für Hilfstechnologien aus, insbesondere Screenreader.

#### HTML

Um die {{Glossary("accessibility", "Zugänglichkeit")}} des [vorherigen Beispiels](#spalten-_und_zeilenspannungs) zu verbessern und um Screenreadern beispielsweise zu ermöglichen, die mit jeder Kopfzeilenzelle verbundenen Überschriften auszusprechen, kann das [`headers`](#headers)-Attribut zusammen mit den [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id)-Attributen eingeführt werden. Aufgrund der Art und Weise, wie die "Aussprache"-Spalte in zwei Spalten im Beispiel unterteilt ist und eine "zweizeilige" Kopfzeile einführt, sind Hilfstechnologien wie Screenreader möglicherweise nicht in der Lage, zu identifizieren, mit welchen zusätzlichen Kopfzeilenzellen die "Aussprache"-Kopfzeilenzelle in Beziehung steht und umgekehrt. Daher wird das [`headers`](#headers)-Attribut auf den Kopfzeilenzellen "Aussprache", "IPA" und "Umschrift" verwendet, um die zugehörigen Kopfzeilenzellen basierend auf den Werten der hinzugefügten [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id)-Attribute in der Form einer leerzeichengetrennten Liste zu assoziieren.

> [!NOTE]
> Es wird empfohlen, beschreibendere und nützlichere Werte für das [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id)-Attribut zu verwenden. Jedes `id` in einem Dokument muss eindeutig für dieses Dokument sein. In diesem Beispiel sind die `id`-Werte einzelne Zeichen, um den Fokus auf das Konzept des [`headers`](#headers)-Attributs zu legen.

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

Das [visuelle Ergebnis](#result_2) ist unverändert zum [vorherigen Tabellenbeispiel](#spalten-_und_zeilenspannungs).

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
          >Fließende Inhalte</a
        >, aber ohne header, footer, Abschnittsinhalte oder Überschrifteninhalte
        als Nachkommen.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>
        Der Start-Tag ist obligatorisch.<br />Der End-Tag kann weggelassen werden, wenn er
        unmittelbar von einem <code>&lt;th&gt;</code>- oder
        {{HTMLElement("td")}}-Element gefolgt wird oder wenn es keine weiteren Daten in seinem
        Elternelement gibt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>Ein {{HTMLElement("tr")}}-Element.</td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role"><code>columnheader</code></a> oder <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/rowheader_role"><code>rowheader</code></a>
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA-Rollen</th>
      <td>Alle</td>
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

- [Lernen: HTML-Tabellen-Grundlagen](/de/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics)
- {{HTMLElement("caption")}}, {{HTMLElement("col")}}, {{HTMLElement("colgroup")}}, {{HTMLElement("table")}}, {{HTMLElement("tbody")}}, {{HTMLElement("td")}}, {{HTMLElement("tfoot")}}, {{HTMLElement("thead")}}, {{HTMLElement("tr")}}: Andere tabellenbezogene Elemente
- {{cssxref("background-color")}}: CSS-Eigenschaft, um die Hintergrundfarbe jeder Kopfzeile festzulegen
- {{cssxref("border")}}: CSS-Eigenschaft, um die Ränder von Kopfzeilen zu steuern
- {{cssxref("height")}}: CSS-Eigenschaft, um die empfohlene Höhe der Kopfzeile zu steuern
- {{cssxref("text-align")}}: CSS-Eigenschaft, um den Inhalt jeder Kopfzeile horizontal auszurichten
- {{cssxref("vertical-align")}}: CSS-Eigenschaft, um den Inhalt jeder Kopfzeile vertikal auszurichten
- {{cssxref("width")}}: CSS-Eigenschaft, um die empfohlene Breite der Kopfzeile zu steuern
- {{cssxref(":nth-of-type")}}, {{cssxref(":first-of-type")}}, {{cssxref(":last-of-type")}}: CSS-Pseudoklassen, um die gewünschten Kopfzeilen auszuwählen
