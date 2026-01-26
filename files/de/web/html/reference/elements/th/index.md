---
title: "<th>: Das Tabellenkopf-Element"
slug: Web/HTML/Reference/Elements/th
l10n:
  sourceCommit: 7c28cd21b705e7b7664d53b4d7822469ea8e6e15
---

Das **`<th>`** [HTML](/de/docs/Web/HTML) Element definiert eine Zelle als Kopfzelle einer Gruppe von Tabellenzellen und kann als Kind des {{HTMLElement("tr")}} Elements verwendet werden. Die genaue Art dieser Gruppe wird durch die Attribute [`scope`](#scope) und [`headers`](#headers) definiert.

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
  - : Eine kurze, abgekürzte Beschreibung des Inhalts der Kopfzelle, die als alternatives Label dient, wenn auf die Kopfzelle in anderen Kontexten verwiesen wird. Einige Benutzeragenten, wie z.B. Screenreader, können diese Beschreibung vor dem eigentlichen Inhalt anzeigen.
- `colspan`
  - : Ein nicht-negativer ganzzahliger Wert, der angibt, wie viele Spalten die Kopfzelle umfasst oder erweitert. Der Standardwert ist `1`. Benutzeragenten verwerfen Werte über 1000 als falsch und setzen solche Werte standardmäßig auf `1`.
- `headers`
  - : Eine durch Leerzeichen getrennte Liste von Zeichenfolgen, die den `id`-Attributen der `<th>`-Elemente entsprechen, die die Kopfzeilen für diese Kopfzelle bereitstellen.
- `rowspan`
  - : Ein nicht-negativer ganzzahliger Wert, der angibt, wie viele Zeilen die Kopfzelle umfasst oder erweitert. Der Standardwert ist `1`; wenn sein Wert auf `0` gesetzt ist, wird die Kopfzelle bis zum Ende des Tabellengruppierungsabschnitts ({{HTMLElement("thead")}}, {{HTMLElement("tbody")}}, {{HTMLElement("tfoot")}}, auch wenn implizit definiert) erweitert, zu dem das `<th>` gehört. Werte über `65534` werden auf `65534` gekappt.
- `scope`
  - : Definiert die Zellen, zu denen die Kopfzeile (definiert im `<th>`) Element gehört. Mögliche {{Glossary("enumerated", "aufgezählte")}} Werte sind:
    - `row`: die Kopfzeile bezieht sich auf alle Zellen der Zeile, zu der sie gehört;
    - `col`: die Kopfzeile bezieht sich auf alle Zellen der Spalte, zu der sie gehört;
    - `rowgroup`: die Kopfzeile gehört zu einer Zeilengruppe und bezieht sich auf alle ihre Zellen;
    - `colgroup`: die Kopfzeile gehört zu einer Spaltengruppe und bezieht sich auf alle ihre Zellen.

    Wenn das `scope`-Attribut nicht spezifiziert ist oder sein Wert nicht `row`, `col`, `rowgroup` oder `colgroup` ist, wählen Browser automatisch die Gruppe von Zellen aus, auf die die Kopfzelle zutrifft.

### Veraltete Attribute

Die folgenden Attribute sind veraltet und sollten nicht verwendet werden. Sie sind hier dokumentiert, um beim Aktualisieren vorhandenen Codes als Referenz zu dienen und aus geschichtlichem Interesse.

- `align` {{deprecated_inline}}
  - : Gibt die horizontale Ausrichtung der Kopfzelle an. Die möglichen {{Glossary("enumerated", "aufgezählten")}} Werte sind `left`, `center`, `right`, `justify` und `char`. Wenn unterstützt, richtet der `char`-Wert den Textinhalt an dem Zeichen aus, das im [`char`](#char) Attribut definiert ist, und an dem Offset, das durch das [`charoff`](#charoff) Attribut definiert ist. Verwenden Sie stattdessen die {{cssxref("text-align")}} CSS-Eigenschaft, da dieses Attribut veraltet ist.

- `axis` {{deprecated_inline}}
  - : Enthält eine Liste von durch Leerzeichen getrennten Zeichenfolgen, die jeweils dem `id`-Attribut einer Gruppe von Zellen entsprechen, auf die die Kopfzelle zutrifft. Verwenden Sie stattdessen das [`scope`](#scope) Attribut, da dieses Attribut veraltet ist.

- `bgcolor` {{deprecated_inline}}
  - : Definiert die Hintergrundfarbe der Kopfzelle. Der Wert ist eine HTML-Farbe; entweder ein [6-stelliger hexadezimaler RGB-Code](/de/docs/Web/CSS/Reference/Values/hex-color), dem ein `#` vorangestellt ist, oder ein [Farb-Begriff](/de/docs/Web/CSS/Reference/Values/named-color). Andere CSS {{cssxref("&lt;color&gt;")}} Werte werden nicht unterstützt. Verwenden Sie stattdessen die {{cssxref("background-color")}} CSS-Eigenschaft, da dieses Attribut veraltet ist.

- `char` {{deprecated_inline}}
  - : Macht nichts. Es war ursprünglich dazu gedacht, die Ausrichtung des Inhalts an einem Zeichen in der Kopfzelle anzugeben. Typische Werte hierfür beinhalten einen Punkt (`.`), wenn versucht wird, Zahlen oder Geldwerte auszurichten. Wenn [`align`](#align) nicht auf `char` gesetzt ist, wird dieses Attribut ignoriert.

- `charoff` {{deprecated_inline}}
  - : Macht nichts. Es war ursprünglich dazu gedacht, die Anzahl der Zeichen anzugeben, die den Inhalt der Kopfzelle vom durch das [`char`](#char) Attribut definierten Ausrichtungszeichen versetzen.

- `height` {{deprecated_inline}}
  - : Definiert eine empfohlene Kopfzellenhöhe. Verwenden Sie stattdessen die {{cssxref("height")}} CSS-Eigenschaft, da dieses Attribut veraltet ist.

- `valign` {{deprecated_inline}}
  - : Gibt die vertikale Ausrichtung der Kopfzelle an. Die möglichen {{Glossary("enumerated", "aufgezählten")}} Werte sind `baseline`, `bottom`, `middle` und `top`. Verwenden Sie stattdessen die {{cssxref("vertical-align")}} CSS-Eigenschaft, da dieses Attribut veraltet ist.

- `width` {{deprecated_inline}}
  - : Definiert eine empfohlene Kopfzellenbreite. Verwenden Sie stattdessen die {{cssxref("width")}} CSS-Eigenschaft, da dieses Attribut veraltet ist.

## Anwendungshinweise

- Das `<th>` kann nur innerhalb eines {{HTMLElement("tr")}} Elements verwendet werden.
- In einfachen Kontexten ist die Verwendung des [`scope`](#scope) Attributs in Kopfzellen (`<th>` Elemente) redundant, da [`scope`](#scope) impliziert ist. Bestimmte unterstützende Technologien könnten jedoch nicht korrekt ableiten, daher kann das Angeben des Kopfbereichs die Benutzererfahrung verbessern.
- Beim Verwenden der [`colspan`](#colspan) und [`rowspan`](#rowspan) Attribute, um Kopfzellen über mehrere Spalten und Zeilen zu erstrecken, werden Zellen ohne diese definierten Attribute (mit einem Standardwert von `1`) automatisch in freie verfügbare Räume in der Tabellenstruktur eingepasst, die 1x1 Zellen umfassen, wie in der folgenden Abbildung illustriert:

  ![Abbildung, die zeigt, wie Tabellenzellen über Spalten und Zeilen erstreckt werden: Zellen 1, 3 und 4 erstrecken sich über zwei Zeilen; Zelle 2 erstreckt sich über zwei Spalten; Zellen 5 und 6 passen in die verfügbaren Zellen, die die zweite und dritte Spalte in der zweiten Zeile bilden](/shared-assets/images/diagrams/html/table/column-row-span.png)

  > [!NOTE]
  > Diese Attribute dürfen nicht verwendet werden, um Zellen zu überlappen.

## Beispiele

Sehen Sie sich {{HTMLElement("table")}} für ein vollständiges Tabellenbeispiel an, das allgemeine Standards und bewährte Verfahren einführt.

### Einfache Spalten- und Zeilenköpfe

In diesem Beispiel werden `<th>` Elemente verwendet, um Spalten- und Zeilenköpfe in einer grundlegenden Tabellenstruktur einzuführen.

#### HTML

Die erste Zeile ({{HTMLElement("tr")}} Element) enthält die Spaltenköpfe (`<th>` Elemente), die als "Titel" für die Spalten fungieren, um das Verstehen der Informationen in den Spalten zu erleichtern und die Daten zu identifizieren. Um anzuzeigen, dass sich jeder Spaltenkopf auf alle Zellen in der entsprechenden Spalte bezieht, ist das [`scope`](#scope) Attribut auf `col` (Spalte) gesetzt.

Die verbleibenden Zeilen enthalten die Hauptdaten der Tabelle. Jede dieser Zeilen hat einen Zeilenkopf (`<th>` Element), der als erste Zelle eingeführt wird. Dadurch entsteht eine Spalte mit Zeilenköpfen als erste Spalte der Tabelle. Ähnlich wie bei den Spaltenköpfen ist das [`scope`](#scope) Attribut auf `row` gesetzt, um anzugeben, auf welche Zellen sich jeder Zeilenkopf bezieht, was in dem folgenden Beispiel alle Datenzellen ({{HTMLElement("td")}} Elemente) in jeder Zeile sind.

> [!NOTE]
> Normalerweise werden die Gruppierungselemente {{HTMLElement("thead")}} und {{HTMLElement("tbody")}} verwendet, um Zeilen mit Kopfzellen in die jeweiligen Kopf- und Hauptabschnitte der Tabelle zu gruppieren. Diese Elemente werden in diesem Beispiel ausgelassen, um die Komplexität zu reduzieren und sich auf die Verwendung von Kopfzellen zu konzentrieren.

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

Ein einfaches CSS wird verwendet, um die Tabelle und ihre Zellen zu stylen. Wir verwenden CSS [Attributselektoren](/de/docs/Web/CSS/Reference/Selectors/Attribute_selectors), um Kopfzellen basierend auf ihren [`scope`](#scope) Attributwerten anzuvisieren, Spalten- und Zeilenköpfe (`<th>` Elemente) hervorzuheben und sie sowohl untereinander als auch von den Datenzellen ({{HTMLElement("td")}}) zu unterscheiden.

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

### Spalten- und Zeilenübergreifend

Dieses Beispiel erweitert und verbessert die Grundtabelle aus dem [vorherigen Beispiel](#einfache_spalten-_und_zeilenköpfe), indem eine zweite Zeile für zusätzliche Spaltenköpfe hinzugefügt wird.

#### HTML

Eine zusätzliche Tabellenzeile ({{HTMLElement("tr")}} Element) wird als zweite Kopfzeile der Tabelle hinzugefügt, mit zwei zusätzlichen Spaltenköpfen (`<th>` Elemente). Auf diese Weise wird die "Aussprache"-Spalte in zwei Spalten unterteilt, eine für die IPA (Internationale Phonetische Alphabet) Notation und eine für die Umschrift (die ursprüngliche Aussprache-Spalte). Die entsprechenden Datenzellen ({{HTMLElement("td")}} Elemente) werden jeder nachfolgenden Zeile hinzugefügt.

Wie in den [Anwendungshinweisen](#anwendungshinweise) gezeigt, können die [`colspan`](#colspan) und [`rowspan`](#rowspan) Attribute für die `<th>` Elemente verwendet werden, um die Kopfzellen den richtigen Spalten und Zeilen zuzuordnen. Um in der Tabellenstruktur einen "zwei-zeiligen" Kopf zu erreichen, werden die ersten beiden Kopfzellen innerhalb des ersten {{HTMLElement("tr")}} Elements über zwei Zeilen erstreckt. Die dritte Kopfzelle wird über zwei Spalten in der ersten Zeile erstreckt. Diese Anordnung lässt zwei verfügbare Bereiche in der dritten und vierten Spalte in der zweiten Zeile, wo die beiden Köpfe innerhalb des zweiten {{HTMLElement("tr")}} Elements automatisch platziert werden, wobei der Standardwert für die [`colspan`](#colspan) und [`rowspan`](#rowspan) Attribute auf `1` gesetzt ist.

> [!NOTE]
> Normalerweise werden {{HTMLElement("thead")}} und {{HTMLElement("tbody")}} Elemente verwendet, um Zeilen mit Kopfzellen in die jeweiligen Kopf- und Hauptabschnitte der Tabelle zu gruppieren. Dies wird in diesem Beispiel nicht implementiert, um sich auf die Köpfe und deren Ausdehnung zu konzentrieren und die Komplexität des Beispiels zu reduzieren.

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

Das CSS ist unverändert gegenüber dem [vorherigen Beispiel](#einfache_spalten-_und_zeilenköpfe).

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

### Kopfzellen mit anderen Kopfzellen assoziieren

Für komplexere Beziehungen zwischen Kopfzellen reicht die Verwendung von `th` Elementen mit dem [`scope`](#scope) Attribut allein möglicherweise nicht aus, insbesondere für unterstützende Technologien wie Screenreader.

#### HTML

Um die {{Glossary("accessibility", "Barrierefreiheit")}} des [vorherigen Beispiels](#spalten-_und_zeilenübergreifend) zu verbessern und um Screenreader beispielsweise die zugeordneten Kopfzellen sprechen zu lassen, kann das [`headers`](#headers) Attribut zusammen mit [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) Attributen eingeführt werden. Durch die Art und Weise, wie die "Aussprache"-Spalte in zwei Spalten unterteilt wird, was einen "zwei-zeiligen" Kopf einführt, können unterstützende Technologien wie Screenreader möglicherweise nicht erkennen, mit welchen zusätzlichen Kopfzellen (`th` Elemente) die "Aussprache"-Kopfzelle verbunden ist und umgekehrt. Daher wird das [`headers`](#headers) Attribut auf den Kopfzellen "Aussprache", "IPA" und "Umschrift" verwendet, um die zugeordneten Kopfzellen basierend auf den Werten der eindeutigen Bezeichner, die aus den hinzugefügten [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) Attributen stammen, als durch Leerzeichen getrennte Liste zu assoziieren.

> [!NOTE]
> Es wird empfohlen, beschreibende und nützliche Werte für das [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) Attribut zu verwenden. Jedes `id` in einem Dokument muss eindeutig für dieses Dokument sein. In diesem Beispiel sind die `id`-Werte einzelne Zeichen, um den Fokus auf das Konzept des [`headers`](#headers) Attributs zu legen.

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

Das [visuelle Ergebnis](#result_2) ist unverändert gegenüber der [vorherigen Tabelle](#spalten-_und_zeilenübergreifend).

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
          >Strukturierter Inhalt</a
        >, jedoch ohne Überschriften, Fußzeilen, Strukturierungselemente oder
        Überschriftselemente.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>
        Der Start-Tag ist obligatorisch.<br />Der End-Tag kann ausgelassen
        werden, wenn er direkt von einem <code>&lt;th&gt;</code> oder
        {{HTMLElement("td")}} Element gefolgt wird oder wenn keine weiteren Daten
        in seinem Elternelement enthalten sind.
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässige Eltern</th>
      <td>Ein {{HTMLElement("tr")}} Element.</td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role"><code>columnheader</code></a> oder <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/rowheader_role"><code>rowheader</code></a>
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässige ARIA-Rollen</th>
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
- {{HTMLElement("caption")}}, {{HTMLElement("col")}}, {{HTMLElement("colgroup")}}, {{HTMLElement("table")}}, {{HTMLElement("tbody")}}, {{HTMLElement("td")}}, {{HTMLElement("tfoot")}}, {{HTMLElement("thead")}}, {{HTMLElement("tr")}}: Weitere tabellenbezogene Elemente
- {{cssxref("background-color")}}: CSS-Eigenschaft, um die Hintergrundfarbe jeder Kopfzelle festzulegen
- {{cssxref("border")}}: CSS-Eigenschaft zur Steuerung der Ränder von Kopfzellen
- {{cssxref("height")}}: CSS-Eigenschaft zur Steuerung der empfohlenen Kopfzellenhöhe
- {{cssxref("text-align")}}: CSS-Eigenschaft zur horizontalen Ausrichtung des Inhalts jeder Kopfzelle
- {{cssxref("vertical-align")}}: CSS-Eigenschaft zur vertikalen Ausrichtung des Inhalts jeder Kopfzelle
- {{cssxref("width")}}: CSS-Eigenschaft zur Steuerung der empfohlenen Kopfzellenbreite
- {{cssxref(":nth-of-type")}}, {{cssxref(":first-of-type")}}, {{cssxref(":last-of-type")}}: CSS-Pseudoklassen zur Auswahl der gewünschten Kopfzellen
