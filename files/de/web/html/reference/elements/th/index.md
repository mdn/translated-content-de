---
title: "<th>: Das Tabellenkopf-Element"
slug: Web/HTML/Reference/Elements/th
l10n:
  sourceCommit: f5fd4776d1c0cd6e4cffc9649f7c4f44badb7ae2
---

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

Dieses Element umfasst die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `abbr`
  - : Eine kurze, abgekürzte Beschreibung des Inhalts der Kopfzelle, die als alternatives Label bereitgestellt wird, um auf die Kopfzelle in anderen Kontexten zu verweisen. Einige Benutzeragenten, wie Screenreader, können diese Beschreibung vor dem eigentlichen Inhalt präsentieren.
- `colspan`
  - : Ein nicht-negativer ganzzahliger Wert, der angibt, wie viele Spalten die Kopfzelle überspannt oder erweitert. Der Standardwert ist `1`. Benutzeragenten verwerfen Werte über 1000 als inkorrekt und setzen solche Werte auf `1`.
- `headers`
  - : Eine Liste von durch Leerzeichen getrennten Zeichenfolgen, die den `id`-Attributen der `<th>`-Elemente entsprechen, die die Überschriften für diese Kopfzelle bereitstellen.
- `rowspan`
  - : Ein nicht-negativer ganzzahliger Wert, der angibt, wie viele Zeilen die Kopfzelle überspannt oder erweitert. Der Standardwert ist `1`; wenn der Wert auf `0` gesetzt ist, wird die Kopfzelle bis zum Ende des Tabellengruppierungsbereichs ({{HTMLElement("thead")}}, {{HTMLElement("tbody")}}, {{HTMLElement("tfoot")}}, auch wenn implizit definiert) verlängert, zu dem das `<th>`-Element gehört. Werte über `65534` werden auf `65534` beschränkt.
- `scope`
  - : Definiert die Zellen, zu denen die Kopfelemente (im `<th>`-Element definiert) gehören. Mögliche {{Glossary("enumerated", "aufzählbare")}} Werte sind:
    - `row`: Die Kopfzeile bezieht sich auf alle Zellen der Zeile, zu der sie gehört;
    - `col`: Die Kopfzeile bezieht sich auf alle Zellen der Spalte, zu der sie gehört;
    - `rowgroup`: Die Kopfzeile gehört zu einer Zeilengruppe und bezieht sich auf alle ihre Zellen;
    - `colgroup`: Die Kopfzeile gehört zu einer Spaltengruppe und bezieht sich auf alle ihre Zellen.

    Wenn das `scope`-Attribut nicht angegeben ist oder sein Wert nicht `row`, `col`, `rowgroup` oder `colgroup` ist, wählen Browser automatisch den Satz von Zellen aus, auf den die Kopfzelle angewendet wird.

### Veraltete Attribute

Die folgenden Attribute sind veraltet und sollten nicht verwendet werden. Sie sind unten dokumentiert, um sie beim Aktualisieren vorhandenen Codes als Referenz und aus historischem Interesse zu nutzen.

- `align` {{deprecated_inline}}
  - : Gibt die horizontale Ausrichtung der Kopfzelle an. Die möglichen {{Glossary("enumerated", "aufzählbaren")}} Werte sind `left`, `center`, `right`, `justify` und `char`. Wenn unterstützt, richtet der `char`-Wert den Textinhalt an dem Zeichen aus, das im [`char`](#char)-Attribut definiert ist, und an dem Versatz, der im [`charoff`](#charoff)-Attribut definiert ist. Verwenden Sie stattdessen die {{cssxref("text-align")}} CSS-Eigenschaft, da dieses Attribut veraltet ist.

- `axis` {{deprecated_inline}}
  - : Enthält eine Liste von durch Leerzeichen getrennten Zeichenfolgen, die jeweils dem `id`-Attribut einer Gruppe von Zellen entsprechen, auf die die Kopfzelle angewendet wird. Verwenden Sie stattdessen das [`scope`](#scope)-Attribut, da dieses Attribut veraltet ist.

- `bgcolor` {{deprecated_inline}}
  - : Definiert die Hintergrundfarbe der Kopfzelle. Der Wert ist eine HTML-Farbe; entweder ein [sechsstelliger hexadezimaler RGB-Code](/de/docs/Web/CSS/hex-color), dem ein `#` vorangestellt ist, oder ein [Farbbegriff](/de/docs/Web/CSS/named-color). Andere CSS {{cssxref("color_value", "&lt;color&gt;")}}-Werte werden nicht unterstützt. Verwenden Sie stattdessen die {{cssxref("background-color")}} CSS-Eigenschaft, da dieses Attribut veraltet ist.

- `char` {{deprecated_inline}}
  - : Tut nichts. Es war ursprünglich dazu gedacht, die Ausrichtung des Inhalts an einem Zeichen der Kopfzelle anzugeben. Typische Werte hierfür sind ein Punkt (`.`), wenn versucht wird, Zahlen oder Währungswerte auszurichten. Wenn [`align`](#align) nicht auf `char` gesetzt ist, wird dieses Attribut ignoriert.

- `charoff` {{deprecated_inline}}
  - : Tut nichts. Es war ursprünglich dazu gedacht, die Anzahl der Zeichen anzugeben, um die der Inhalt der Kopfzelle vom Ausrichtungszeichen, das durch das [`char`](#char)-Attribut spezifiziert ist, zu versetzen.

- `height` {{deprecated_inline}}
  - : Definiert eine empfohlene Höhe für die Kopfzelle. Verwenden Sie stattdessen die {{cssxref("height")}} CSS-Eigenschaft, da dieses Attribut veraltet ist.

- `valign` {{deprecated_inline}}
  - : Gibt die vertikale Ausrichtung der Kopfzelle an. Die möglichen {{Glossary("enumerated", "aufzählbaren")}} Werte sind `baseline`, `bottom`, `middle` und `top`. Verwenden Sie stattdessen die {{cssxref("vertical-align")}} CSS-Eigenschaft, da dieses Attribut veraltet ist.

- `width` {{deprecated_inline}}
  - : Definiert eine empfohlene Breite für die Kopfzelle. Verwenden Sie stattdessen die {{cssxref("width")}} CSS-Eigenschaft, da dieses Attribut veraltet ist.

## Verwendungshinweise

- Das `<th>`-Element darf nur innerhalb eines {{HTMLElement("tr")}}-Elements verwendet werden.
- In einfachen Kontexten ist die Verwendung des [`scope`](#scope)-Attributs auf Kopfzellen (`<th>`-Elemente) redundant, da [`scope`](#scope) abgeleitet wird. Bestimmte unterstützende Technologien können jedoch möglicherweise nicht korrekt ableiten, sodass die Angabe der Kopfbereichs die Benutzererfahrung verbessern kann.
- Bei der Verwendung der Attribute [`colspan`](#colspan) und [`rowspan`](#rowspan), um Kopfzellen über mehrere Spalten und Zeilen hinweg zu umfassen, werden Zellen ohne diese definierten Attribute (mit einem Standardwert von `1`) automatisch in freie verfügbare Räume in der Tabellenstruktur eingefügt, die 1x1-Zellen umfassen, wie in der folgenden Abbildung dargestellt:

  ![Illustration, die das Spannen von Spalten und Zeilen in Tabellenzellen zeigt: Zellen 1, 3 und 4, die zwei Zeilen umfassen; Zelle 2, die zwei Spalten umfasst; Zellen 5 und 6, die in die verfügbaren Zellen passen, die die zweite und dritte Spalte in der zweiten Zeile sind](/shared-assets/images/diagrams/html/table/column-row-span.png)

  > [!NOTE]
  > Diese Attribute dürfen nicht verwendet werden, um Zellen zu überlappen.

## Beispiele

Siehe {{HTMLElement("table")}} für ein vollständiges Tabellenbeispiel, das allgemeine Standards und Best Practices einführt.

### Grundlegende Spalten- und Zeilenüberschriften

Dieses Beispiel verwendet `<th>`-Elemente, um Spalten- und Zeilenüberschriften in einer grundlegenden Tabellenstruktur einzuführen.

#### HTML

Die erste Zeile ({{HTMLElement("tr")}}-Element) enthält die Spaltenüberschriften (`<th>`-Elemente), die als "Titel" für die Spalten fungieren, um das Verständnis der Informationen in den Spalten zu erleichtern und die Daten zu identifizieren. Um anzuzeigen, dass sich jede Spaltenüberschrift auf alle Zellen in der entsprechenden Spalte bezieht, wird das [`scope`](#scope)-Attribut auf `col` (Spalte) gesetzt.

Die verbleibenden Zeilen enthalten die Hauptdaten der Tabelle. Jede dieser Zeilen hat eine Zeilenüberschrift (`<th>`-Element) als erste Zelle. Dadurch wird eine Spalte mit Zeilenüberschriften als erste Spalte der Tabelle erstellt. Ähnlich wie bei den Spaltenüberschriften wird das [`scope`](#scope)-Attribut auf `row` gesetzt, um anzugeben, auf welche Zellen sich jede Zeilenüberschrift bezieht, die in dem untenstehenden Beispiel alle Datenzellen ({{HTMLElement("td")}}-Elemente) in jeder `row` sind.

> [!NOTE]
> Normalerweise werden die Gruppierungselemente {{HTMLElement("thead")}} und {{HTMLElement("tbody")}} verwendet, um Zeilen mit Überschriften in die jeweiligen Tabellenkopf- und Tabellenabschnittsbereiche zu gruppieren. Diese Elemente werden in diesem Beispiel weggelassen, um die Komplexität zu reduzieren und den Fokus auf die Verwendung von Kopfzellen zu richten.

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

Ein einfaches CSS wird verwendet, um die Tabelle und ihre Zellen zu gestalten. Wir verwenden CSS-[Attributselektoren](/de/docs/Web/CSS/Attribute_selectors), um Kopfzellen basierend auf ihren [`scope`](#scope)-Attributwerten anzusprechen, Spalten- und Zeilenüberschriften (`<th>`-Elemente) hervorzuheben und sie voneinander und von den Datenzellen ({{HTMLElement("td")}}) zu unterscheiden.

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

Dieses Beispiel erweitert und verbessert die grundlegende Tabelle aus dem [vorherigen Beispiel](#grundlegende_spalten-_und_zeilenüberschriften) durch Hinzufügen einer zweiten Zeile für zusätzliche Spaltenüberschriften.

#### HTML

Eine zusätzliche Tabellenzeile ({{HTMLElement("tr")}}-Element) wird als zweite Kopfzeile der Tabelle mit zwei zusätzlichen Spaltenüberschriften (`<th>`-Elemente) hinzugefügt. Auf diese Weise wird die "Aussprache"-Spalte in zwei Spalten unterteilt, eine für die IPA (International Phonetic Alphabet)-Notation und eine für die Lautumschrift (die ursprüngliche Aussprachespalte). Die entsprechenden Datenzellen ({{HTMLElement("td")}}-Elemente) werden zu jeder nachfolgenden Zeile hinzugefügt.

Wie in den [Verwendungshinweisen](#verwendungshinweise) gezeigt, können die Attribute [`colspan`](#colspan) und [`rowspan`](#rowspan) für die `<th>`-Elemente verwendet werden, um die Kopfzellen den richtigen Spalten und Zeilen zuzuordnen. Um in der Tabellenstruktur einen "zweizeiligen" Kopf zu erreichen, werden die ersten beiden Kopfzellen innerhalb des ersten {{HTMLElement("tr")}}-Elements über zwei Zeilen gespannt. Die dritte Kopfzelle wird zwei Spalten lang (in der ersten Zeile verbleibend) gespannt. Diese Konfiguration lässt zwei verfügbare Bereiche in der dritten und vierten Spalte in der zweiten Zeile frei, in denen die beiden Kopfzellen innerhalb des zweiten {{HTMLElement("tr")}}-Elements automatisch platziert werden, wobei der Standardwert für die Attribute [`colspan`](#colspan) und [`rowspan`](#rowspan) `1` ist.

> [!NOTE]
> Normalerweise werden {{HTMLElement("thead")}}- und {{HTMLElement("tbody")}}-Elemente verwendet, um Zeilen mit Überschriften in die jeweiligen Tabellenkopf- und Tabellenabschnittsgruppen zu gruppieren. Dies ist in diesem Beispiel nicht implementiert, um sich auf die Überschriften und das Überspannen zu konzentrieren und die Komplexität des Beispiels zu reduzieren.

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

### Kopfzellen mit anderen Kopfzellen verknüpfen

Für komplexere Beziehungen zwischen Kopfzellen kann die alleinige Verwendung von `th`-Elementen mit dem [`scope`](#scope)-Attribut für unterstützende Technologien, insbesondere Screenreader, nicht ausreichen.

#### HTML

Um die {{Glossary("accessibility", "Barrierefreiheit")}} des [vorhergehenden Beispiels](#spalten-_und_zeilenüberspannung) zu verbessern und zum Beispiel zu ermöglichen, dass Screenreader die mit jeder Kopfzelle assoziierten Überschriften vorlesen können, kann das [`headers`](#headers)-Attribut zusammen mit [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id)-Attributen eingeführt werden. Aufgrund der Weise, in der die "Aussprachespalte" in zwei Spalten in dem Beispiel unterteilt ist und eine "zweizeilige" Kopfzeile eingeführt wird, können unterstützende Technologien wie Screenreader möglicherweise nicht erkennen, mit welchen zusätzlichen Kopfzellen (`th`-Elementen) die "Aussprache"-Kopfzeile in Beziehung steht, und umgekehrt. Daher wird das [`headers`](#headers)-Attribut auf den "Aussprache"-, "IPA"- und "Umschrift"-Kopfzellen verwendet, um die entsprechenden Kopfzellen basierend auf den Werten der eindeutigen Bezeichner der hinzugefügten [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id)-Attribute in Form einer Leerzeichen-getrennten Liste zu verknüpfen.

> [!NOTE]
> Es wird empfohlen, beschreibendere und nützlichere Werte für das [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id)-Attribut zu verwenden. Jedes `id` in einem Dokument muss eindeutig für dieses Dokument sein. In diesem Beispiel sind die `id`-Werte Einzelbuchstaben, um den Fokus auf das Konzept des [`headers`](#headers)-Attributs zu bewahren.

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

Das [visuelle Ergebnis](#result_2) bleibt unverändert gegenüber der [vorherigen Beispielstabelle](#spalten-_und_zeilenüberspannung).

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
          >Flow-Inhalt</a
        >, jedoch ohne Nachkommen von Header, Footer, Gliederungsinhalt oder Überschrifteninhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>
        Das Anfangstag ist obligatorisch.<br />Das Endtag kann weggelassen werden, wenn es unmittelbar von einem <code>&lt;th&gt;</code> oder {{HTMLElement("td")}}-Element gefolgt wird oder wenn es keine weiteren Daten in seinem Elternelement gibt.
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
- {{cssxref("background-color")}}: CSS-Eigenschaft zum Setzen der Hintergrundfarbe jeder Kopfzelle
- {{cssxref("border")}}: CSS-Eigenschaft zur Kontrolle der Rahmen von Kopfzellen
- {{cssxref("height")}}: CSS-Eigenschaft zur Kontrolle der empfohlenen Höhe der Kopfzelle
- {{cssxref("text-align")}}: CSS-Eigenschaft zur horizontalen Ausrichtung des Inhalts jeder Kopfzelle
- {{cssxref("vertical-align")}}: CSS-Eigenschaft zur vertikalen Ausrichtung des Inhalts jeder Kopfzelle
- {{cssxref("width")}}: CSS-Eigenschaft zur Kontrolle der empfohlenen Breite der Kopfzelle
- {{cssxref(":nth-of-type")}}, {{cssxref(":first-of-type")}}, {{cssxref(":last-of-type")}}: CSS-Pseudoklassen zum Auswählen der gewünschten Kopfzellen
