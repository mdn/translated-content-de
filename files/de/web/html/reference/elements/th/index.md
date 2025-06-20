---
title: "<th>: Das Tabellenkopf-Element"
slug: Web/HTML/Reference/Elements/th
l10n:
  sourceCommit: 4b97f541d0e9d8817d52d7d82d800988f777ab2a
---

{{HTMLSidebar}}

Das **`<th>`** [HTML](/de/docs/Web/HTML)-Element definiert eine Zelle als Kopf einer Gruppe von Tabellenzellen und kann als Kind des {{HTMLElement("tr")}}-Elements verwendet werden. Die genaue Natur dieser Gruppe wird durch die Attribute [`scope`](#scope) und [`headers`](#headers) definiert.

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

Dieses Element beinhaltet die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `abbr`
  - : Eine kurze, abgekürzte Beschreibung des Inhalts der Kopfzelle, die als alternatives Label verwendet wird, wenn auf die Kopfzelle in anderen Kontexten verwiesen wird. Einige Benutzeragenten, wie Bildschirmleser, können diese Beschreibung vor dem eigentlichen Inhalt darstellen.
- `colspan`
  - : Ein nicht-negativer ganzzahliger Wert, der angibt, über wie viele Spalten sich die Kopfzelle erstreckt. Der Standardwert ist `1`. Benutzeragenten verwerfen Werte über 1000 als falsch und verwenden stattdessen `1`.
- `headers`
  - : Eine Liste von durch Leerzeichen getrennten Zeichenfolgen, die den `id`-Attributen der `<th>`-Elemente entsprechen, die die Kopfzeilen für diese Kopfzelle bereitstellen.
- `rowspan`
  - : Ein nicht-negativer ganzzahliger Wert, der angibt, über wie viele Zeilen sich die Kopfzelle erstreckt. Der Standardwert ist `1`; wenn der Wert auf `0` gesetzt wird, erstreckt sich die Kopfzelle bis zum Ende des Tabellenbereichs ({{HTMLElement("thead")}}, {{HTMLElement("tbody")}}, {{HTMLElement("tfoot")}}, auch wenn implizit definiert), zu dem das `<th>` gehört. Werte über `65534` werden bei `65534` abgeschnitten.
- `scope`

  - : Definiert die Zellen, zu denen die Kopfzeile (definiert im `<th>`) gehört. Mögliche {{Glossary("enumerated", "aufgezählte")}} Werte sind:

    - `row`: die Kopfzeile bezieht sich auf alle Zellen der Zeile, zu der sie gehört;
    - `col`: die Kopfzeile bezieht sich auf alle Zellen der Spalte, zu der sie gehört;
    - `rowgroup`: die Kopfzeile gehört zu einer Zeilengruppe und bezieht sich auf alle ihre Zellen;
    - `colgroup`: die Kopfzeile gehört zu einer Spaltengruppe und bezieht sich auf alle ihre Zellen.

    Ist das `scope`-Attribut nicht angegeben oder beträgt sein Wert nicht `row`, `col`, `rowgroup` oder `colgroup`, wählen Browser automatisch die Menge der Zellen aus, auf die sich die Kopfzelle bezieht.

### Veraltete Attribute

Die folgenden Attribute sind veraltet und sollten nicht verwendet werden. Sie werden nur zur Bezugnahme bei der Aktualisierung vorhandenen Codes und zu historischem Interesse dokumentiert.

- `align` {{deprecated_inline}}

  - : Gibt die horizontale Ausrichtung der Kopfzelle an. Die möglichen {{Glossary("enumerated", "aufgezählten")}} Werte sind `left`, `center`, `right`, `justify` und `char`. Wenn unterstützt, richtet der `char`-Wert den Textinhalt an dem im [`char`](#char)-Attribut definierten Zeichen und dem durch das [`charoff`](#charoff)-Attribut definierten Abstand aus. Verwenden Sie die {{cssxref("text-align")}} CSS-Eigenschaft stattdessen, da dieses Attribut veraltet ist.

- `axis` {{deprecated_inline}}

  - : Enthält eine Liste von durch Leerzeichen getrennten Zeichenfolgen, die jeweils dem `id`-Attribut einer Gruppe von Zellen entsprechen, auf die sich die Kopfzelle bezieht. Verwenden Sie das [`scope`](#scope)-Attribut stattdessen, da dieses Attribut veraltet ist.

- `bgcolor` {{deprecated_inline}}

  - : Definiert die Hintergrundfarbe der Kopfzelle. Der Wert ist eine HTML-Farbe, entweder ein [6-stelliger hexadezimaler RGB-Code](/de/docs/Web/CSS/hex-color), eingeleitet von einem `#`, oder ein [Farbenschlüsselwort](/de/docs/Web/CSS/named-color). Andere CSS {{cssxref("color_value", "&lt;color&gt;")}}-Werte werden nicht unterstützt. Verwenden Sie die {{cssxref("background-color")}} CSS-Eigenschaft stattdessen, da dieses Attribut veraltet ist.

- `char` {{deprecated_inline}}

  - : Hat keine Funktion. Es war ursprünglich dazu gedacht, die Ausrichtung des Inhalts an einem Zeichen in der Kopfzelle anzugeben. Typische Werte dafür umfassen einen Punkt (`.`), wenn versucht wird, Zahlen oder Geldbeträge auszurichten. Wenn [`align`](#align) nicht auf `char` gesetzt ist, wird dieses Attribut ignoriert.

- `charoff` {{deprecated_inline}}

  - : Hat keine Funktion. Es war ursprünglich dazu gedacht, die Anzahl der Zeichen anzugeben, um die der Inhalt der Kopfzelle von dem durch das [`char`](#char)-Attribut spezifizierten Ausrichtungszeichen verschoben werden soll.

- `height` {{deprecated_inline}}

  - : Definiert eine empfohlene Höhe der Kopfzelle. Verwenden Sie die {{cssxref("height")}} CSS-Eigenschaft stattdessen, da dieses Attribut veraltet ist.

- `valign` {{deprecated_inline}}

  - : Gibt die vertikale Ausrichtung der Kopfzelle an. Die möglichen {{Glossary("enumerated", "aufgezählten")}} Werte sind `baseline`, `bottom`, `middle`, und `top`. Verwenden Sie die {{cssxref("vertical-align")}} CSS-Eigenschaft stattdessen, da dieses Attribut veraltet ist.

- `width` {{deprecated_inline}}

  - : Definiert eine empfohlene Breite der Kopfzelle. Verwenden Sie die {{cssxref("width")}} CSS-Eigenschaft stattdessen, da dieses Attribut veraltet ist.

## Nutzungshinweise

- Das `<th>` darf nur innerhalb eines {{HTMLElement("tr")}}-Elements verwendet werden.
- In einfachen Kontexten ist die Verwendung des [`scope`](#scope)-Attributs an Kopfzellen (`<th>`-Elemente) überflüssig, da [`scope`](#scope) inferiert wird. Allerdings können bestimmte Hilfstechnologien möglicherweise nicht korrekt ableiten, daher kann die Angabe des Kopfbereichs das Benutzererlebnis verbessern.
- Bei der Verwendung der Attribute [`colspan`](#colspan) und [`rowspan`](#rowspan), um Kopfzellen auf mehrere Spalten und Zeilen zu verteilen, werden Zellen ohne diese definierten Attribute (mit einem Standardwert von `1`) automatisch in freie Markierungen der Tabellenstruktur eingefügt, die 1x1 Zellen umfassen, wie in der folgenden Abbildung gezeigt:

  ![Illustration, die das Spannen von Spalten und Zeilen von Tabellenzellen demonstriert: Zellen 1, 3 und 4 erstrecken sich über zwei Zeilen; Zelle 2 erstreckt sich über zwei Spalten; Zellen 5 und 6 fügen sich in die verfügbaren Zellen ein, die die zweite und dritte Spalte in der zweiten Zeile bilden](column-row-span.png)

  > [!NOTE]
  > Diese Attribute dürfen nicht verwendet werden, um Zellen zu überlagern.

## Beispiele

Sehen Sie {{HTMLElement("table")}} für ein vollständiges Tabellenbeispiel, das allgemeine Standards und bewährte Methoden einführt.

### Grundlegende Spalten- und Zeilenüberschriften

In diesem Beispiel werden `<th>`-Elemente verwendet, um Spalten- und Zeilenüberschriften in einer einfachen Tabellenstruktur einzuführen.

#### HTML

Die erste Zeile ({{HTMLElement("tr")}}-Element) enthält die Spaltenüberschriften (`<th>`-Elemente), die als "Titel" für die Spalten fungieren, um das Verständnis der Informationen in den Spalten zu erleichtern und die Daten zu identifizieren. Um zu zeigen, dass sich jede Spaltenüberschrift auf alle Zellen der entsprechenden Spalte bezieht, wird das [`scope`](#scope)-Attribut auf `col` (Spalte) gesetzt.

Die verbleibenden Zeilen enthalten die Hauptdaten der Tabelle. Jede dieser Zeilen hat eine Zeilenüberschrift (`<th>`-Element), die als erste Zelle eingeführt wird. Dies erstellt eine Spalte mit Zeilenüberschriften als erste Spalte der Tabelle. Ähnlich wie bei den Spaltenüberschriften wird das [`scope`](#scope)-Attribut auf `row` gesetzt, um anzugeben, zu welchen Zellen sich jede Zeilenüberschrift bezieht, was im unten stehenden Beispiel alle Datenelemente ({{HTMLElement("td")}}-Elemente) in jeder `row` sind.

> [!NOTE]
> Normalerweise werden die Gruppierungselemente {{HTMLElement("thead")}} und {{HTMLElement("tbody")}} verwendet, um Zeilen mit Überschriften in den jeweiligen Tabellenkopf und -körper zu gruppieren. Diese Elemente werden in diesem Beispiel weggelassen, um die Komplexität zu reduzieren und sich auf die Verwendung von Kopfzellen zu konzentrieren.

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

Ein bisschen CSS wird verwendet, um die Tabelle und ihre Zellen zu gestalten. Wir verwenden CSS-[Attribut-Selektoren](/de/docs/Web/CSS/Attribute_selectors), um Kopfzellen basierend auf ihren [`scope`](#scope)-Attributwerten zu zielen, wobei Spalten- und Zeilenüberschriften (`<th>`-Elemente) hervorgehoben und voneinander und von den Datenzellen ({{HTMLElement("td")}}) unterschieden werden.

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

### Spalten- und Zeilenüberspannung

In diesem Beispiel wird die grundlegende Tabelle aus dem [vorherigen Beispiel](#grundlegende_spalten-_und_zeilenüberschriften) durch Hinzufügen einer zweiten Zeile für zusätzliche Spaltenüberschriften erweitert und verbessert.

#### HTML

Eine zusätzliche Tabellenzeile ({{HTMLElement("tr")}}-Element) wird als zweite Kopfzeile der Tabelle mit zwei zusätzlichen Spaltenüberschriften (`<th>`-Elemente) hinzugefügt. So wird die Spalte "Aussprache" in zwei Spalten aufgeteilt, eine für die IPA (International Phonetic Alphabet)-Notierung und eine für die Neuschreibung (die ursprüngliche Aussprache-Spalte). Die entsprechenden Datenelemente ({{HTMLElement("td")}}-Elemente) werden zu jeder nachfolgenden Zeile hinzugefügt.

Wie in den [Nutzungshinweisen](#nutzungshinweise) gezeigt, können die Attribute [`colspan`](#colspan) und [`rowspan`](#rowspan) für die `<th>`-Elemente verwendet werden, um die Kopfzeilen den richtigen Spalten und Zeilen zuzuordnen. Um eine "zweizeilige" Kopfzeile im Tabellenlayout zu erreichen, werden die ersten beiden Kopfzellen innerhalb des ersten {{HTMLElement("tr")}}-Elements über zwei Zeilen gespannt. Die dritte Kopfzelle wird zwei Spalten breit gespannt (verbleibt in der ersten Zeile). Dieses Setup lässt zwei verfügbare Flächen in der dritten und vierten Spalte in der zweiten Zeile, in die die beiden Kopfzeilen innerhalb des zweiten {{HTMLElement("tr")}}-Elements automatisch eingefügt werden, mit dem Standardwert `1` für die Attribute [`colspan`](#colspan) und [`rowspan`](#rowspan).

> [!NOTE]
> Normalerweise werden die Elemente {{HTMLElement("thead")}} und {{HTMLElement("tbody")}} verwendet, um Zeilen mit Überschriften in die jeweiligen Tabellenkopf- und -körperabschnitte zu gruppieren. Dies wird in diesem Beispiel nicht umgesetzt, um den Fokus auf die Kopfzeilen und das Spannen zu legen und die Komplexität des Beispiels zu reduzieren.

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

#### Ergebnis

{{EmbedLiveSample("Column_and_row_spanning", 650, 200)}}

### Kopfzellen mit anderen Kopfzellen assoziieren

Für komplexere Beziehungen zwischen Kopfzellen kann die Verwendung von `th`-Elementen mit dem [`scope`](#scope)-Attribut allein möglicherweise nicht ausreichen, insbesondere für Hilfstechnologien wie Bildschirmleser.

#### HTML

Um die {{Glossary("accessibility", "Zugänglichkeit")}} des [vorherigen Beispiels](#spalten-_und_zeilenüberspannung) zu verbessern und um z.B. Bildschirmlesern zu ermöglichen, die mit jeder Kopfzeile verbundenen Überschriften vorzulesen, kann das [`headers`](#headers)-Attribut zusammen mit [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id)-Attributen eingeführt werden. Aufgrund der Aufteilung der "Aussprache"-Spalte in zwei Spalten im Beispiel, wodurch eine "zweizeilige" Kopfzeile entsteht, können Hilfstechnologien wie Bildschirmleser möglicherweise nicht erkennen, mit welchen zusätzlichen Kopfzeilen (`th`-Elementen) die "Aussprache"-Kopfzeile verbunden ist und umgekehrt. Daher wird das [`headers`](#headers)-Attribut auf den Kopfzellen "Aussprache", "IPA" und "Neuschreibung" verwendet, um die zugehörigen Kopfzellen basierend auf den Werten der eindeutigen Kennungen der hinzugefügten [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id)-Attribute in Form einer durch Leerzeichen getrennten Liste zu assoziieren.

> [!NOTE]
> Es wird empfohlen, für das [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id)-Attribut beschreibendere und nützlichere Werte zu verwenden. Jedes `id` in einem Dokument muss für dieses Dokument eindeutig sein. In diesem Beispiel sind die `id`-Werte Einzeichen, um sich auf das Konzept des [`headers`](#headers)-Attributs zu konzentrieren.

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

Das [visuelle Ergebnis](#result_2) ist unverändert im Vergleich zur [vorherigen Beispiel-Tabelle](#spalten-_und_zeilenüberspannung).

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
        >, jedoch ohne Überschrift, Fußzeile, Abschnittsinhalte oder Überschrifteninhalte als Nachkommen.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>
        Das Start-Tag ist obligatorisch.<br />Das End-Tag kann weggelassen
        werden, wenn es unmittelbar von einem <code>&lt;th&gt;</code>- oder {{HTMLElement("td")}}-Element gefolgt wird oder wenn keine weiteren Daten in seinem Parent-Element vorhanden sind.
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
      <td>Beliebige</td>
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
- {{cssxref("background-color")}}: CSS-Eigenschaft, um die Hintergrundfarbe jeder Kopfzelle festzulegen
- {{cssxref("border")}}: CSS-Eigenschaft, um die Ränder der Kopfzellen zu steuern
- {{cssxref("height")}}: CSS-Eigenschaft, um die empfohlene Kopfzellenhöhe zu steuern
- {{cssxref("text-align")}}: CSS-Eigenschaft, um den Inhalt jeder Kopfzelle horizontal auszurichten
- {{cssxref("vertical-align")}}: CSS-Eigenschaft, um den Inhalt jeder Kopfzelle vertikal auszurichten
- {{cssxref("width")}}: CSS-Eigenschaft, um die empfohlene Kopfzellenbreite zu steuern
- {{cssxref(":nth-of-type")}}, {{cssxref(":first-of-type")}}, {{cssxref(":last-of-type")}}: CSS-Pseudoklassen, um die gewünschten Kopfzellen auszuwählen
