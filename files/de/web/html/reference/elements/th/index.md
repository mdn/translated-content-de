---
title: "<th>: Das Tabellenkopfelement"
slug: Web/HTML/Reference/Elements/th
l10n:
  sourceCommit: 41cf05afdfff38fb460f7cae5b9523405c842ac6
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

Dieses Element enthält die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `abbr`
  - : Eine kurze, abgekürzte Beschreibung des Inhalts der Kopfzelle, bereitgestellt als alternatives Label, das bei Bezugnahme auf die Kopfzelle in anderen Kontexten verwendet wird. Einige Benutzeragenten, wie Sprachleseer, können diese Beschreibung vor dem eigentlichen Inhalt präsentieren.
- `colspan`
  - : Ein nicht-negativer Ganzzahlwert, der angibt, über wie viele Spalten die Kopfzelle sich erstreckt. Der Standardwert ist `1`. Benutzeragenten verwerfen Werte über 1000 als fehlerhaft und setzen solche Werte standardmäßig auf `1`.
- `headers`
  - : Eine Liste von durch Leerzeichen getrennten Zeichenfolgen, die den `id`-Attributen der `<th>`-Elemente entsprechen, die die Kopfzeilen für diese Kopfzelle bereitstellen.
- `rowspan`
  - : Ein nicht-negativer Ganzzahlwert, der angibt, über wie viele Zeilen sich die Kopfzelle erstreckt. Der Standardwert ist `1`; wenn der Wert auf `0` gesetzt ist, erstreckt sich die Kopfzelle bis zum Ende des Tabellenabschnitts ({{HTMLElement("thead")}}, {{HTMLElement("tbody")}}, {{HTMLElement("tfoot")}}, auch wenn implizit definiert), zu dem das `<th>` gehört. Werte über `65534` werden auf `65534` gekürzt.
- `scope`

  - : Definiert die Zellen, auf die sich die Kopfzeile (im `<th>` definiert) bezieht. Mögliche {{Glossary("enumerated", "aufzählbare")}} Werte sind:

    - `row`: Die Kopfzeile bezieht sich auf alle Zellen der Zeile, zu der sie gehört;
    - `col`: Die Kopfzeile bezieht sich auf alle Zellen der Spalte, zu der sie gehört;
    - `rowgroup`: Die Kopfzeile gehört zu einer Zeilengruppe und bezieht sich auf alle ihre Zellen;
    - `colgroup`: Die Kopfzeile gehört zu einer Spaltengruppe und bezieht sich auf alle ihre Zellen.

    Ist das `scope`-Attribut nicht angegeben oder sein Wert weder `row`, `col`, `rowgroup` noch `colgroup`, wählen Browser automatisch die Menge der Zellen, auf die die Kopfzelle angewendet wird.

### Veraltete Attribute

Die folgenden Attribute sind veraltet und sollten nicht verwendet werden. Sie werden zu Referenzzwecken dokumentiert, wenn vorhandener Code aktualisiert wird, und nur aus historischem Interesse.

- `align` {{deprecated_inline}}

  - : Gibt die horizontale Ausrichtung der Kopfzelle an. Die möglichen {{Glossary("enumerated", "aufzählbaren")}} Werte sind `left`, `center`, `right`, `justify` und `char`. Wenn unterstützt, richtet der `char`-Wert den Textinhalt am im [`char`](#char)-Attribut definierten Zeichen und dem im [`charoff`](#charoff)-Attribut definierten Offset aus. Verwenden Sie stattdessen die {{cssxref("text-align")}} CSS-Eigenschaft, da dieses Attribut veraltet ist.

- `axis` {{deprecated_inline}}

  - : Enthält eine Liste von durch Leerzeichen getrennten Zeichenfolgen, die jeweils dem `id`-Attribut einer Gruppe von Zellen entsprechen, auf die sich die Kopfzelle bezieht. Verwenden Sie stattdessen das [`scope`](#scope)-Attribut, da dieses Attribut veraltet ist.

- `bgcolor` {{deprecated_inline}}

  - : Definiert die Hintergrundfarbe der Kopfzelle. Der Wert ist eine HTML-Farbe, entweder ein [6-stelliger hexadezimaler RGB-Code](/de/docs/Web/CSS/hex-color), eingeleitet durch ein `#`, oder ein [Farbkeyword](/de/docs/Web/CSS/named-color). Andere CSS {{cssxref("color_value", "&lt;color&gt;")}}-Werte werden nicht unterstützt. Verwenden Sie stattdessen die {{cssxref("background-color")}} CSS-Eigenschaft, da dieses Attribut veraltet ist.

- `char` {{deprecated_inline}}

  - : Tut nichts. Es war ursprünglich vorgesehen, den Inhalt an einem Zeichen der Kopfzelle auszurichten. Typische Werte hierfür beinhalten einen Punkt (`.`), wenn versucht wird, Zahlen oder Geldwerte auszurichten. Wenn [`align`](#align) nicht auf `char` gesetzt ist, wird dieses Attribut ignoriert.

- `charoff` {{deprecated_inline}}

  - : Tut nichts. Es war ursprünglich vorgesehen, die Anzahl der Zeichen anzugeben, um den Inhalt der Kopfzelle vom im [`char`](#char)-Attribut angegebenen Ausrichtungszeichen zu versetzen.

- `height` {{deprecated_inline}}

  - : Definiert eine empfohlene Höhe der Kopfzelle. Verwenden Sie stattdessen die {{cssxref("height")}} CSS-Eigenschaft, da dieses Attribut veraltet ist.

- `valign` {{deprecated_inline}}

  - : Gibt die vertikale Ausrichtung der Kopfzelle an. Die möglichen {{Glossary("enumerated", "aufzählbaren")}} Werte sind `baseline`, `bottom`, `middle` und `top`. Verwenden Sie stattdessen die {{cssxref("vertical-align")}} CSS-Eigenschaft, da dieses Attribut veraltet ist.

- `width` {{deprecated_inline}}

  - : Definiert eine empfohlene Breite der Kopfzelle. Verwenden Sie stattdessen die {{cssxref("width")}} CSS-Eigenschaft, da dieses Attribut veraltet ist.

## Nutzungshinweise

- Das `<th>` darf nur innerhalb eines {{HTMLElement("tr")}}-Elements verwendet werden.
- In einfachen Kontexten ist die Verwendung des [`scope`](#scope)-Attributes für Kopfzellen (`<th>`-Elemente) überflüssig, da [`scope`](#scope) erschlossen wird. Bestimmte Hilfstechnologien können jedoch die richtige Erschließung nicht durchführen, daher kann die Angabe des Kopfumfangs die Benutzererfahrung verbessern.
- Beim Verwenden der Attribute [`colspan`](#colspan) und [`rowspan`](#rowspan), um Kopfzellen über mehrere Spalten und Zeilen zu erstrecken, werden Zellen ohne diese Attribute (mit einem Standardwert von `1`) automatisch in den freien verfügbaren Bereichen in der Tabellenstruktur platziert, die 1x1-Zellen umfassen, wie in der folgenden Darstellung veranschaulicht:

  ![Illustration, die das Spalten- und Zeilen-Spannen von Tabellenzellen zeigt: Zellen 1, 3 und 4 erstrecken sich über zwei Zeilen; Zelle 2 erstreckt sich über zwei Spalten; Zellen 5 und 6 passen in die verfügbaren Zellen, die die zweite und dritte Spalte in der zweiten Zeile sind](column-row-span.png)

  > [!NOTE]
  > Diese Attribute dürfen nicht verwendet werden, um Zellen zu überlappen.

## Beispiele

Siehe {{HTMLElement("table")}} für ein vollständiges Tabellenbeispiel, das gängige Standards und bewährte Praktiken einführt.

### Grundlegende Spalten- und Zeilenköpfe

Dieses Beispiel verwendet `<th>`-Elemente, um Spalten- und Zeilenköpfe in einer einfachen Tabellenstruktur einzuführen.

#### HTML

Die erste Zeile ({{HTMLElement("tr")}}-Element) enthält die Spaltenköpfe (`<th>`-Elemente), die als "Titel" für die Spalten dienen, um die Informationen in den Spalten leichter verständlich zu machen und die Daten zu identifizieren. Um anzugeben, dass sich jeder Spaltenkopf auf alle Zellen in der entsprechenden Spalte bezieht, wird das [`scope`](#scope)-Attribut auf `col` (Spalte) gesetzt.

Die verbleibenden Zeilen enthalten die Hauptdaten der Tabelle. Jede dieser Zeilen hat einen Zeilenkopf (`<th>`-Element), der als erste Zelle eingeführt wird. Dies erstellt eine Spalte mit Zeilenköpfen als erste Spalte der Tabelle. Ähnlich wie bei den Spaltenköpfen wird das [`scope`](#scope)-Attribut auf `row` gesetzt, um anzugeben, auf welche Zellen sich jeder Zeilenkopf bezieht. In dem Beispiel unten sind dies alle Datenzellen ({{HTMLElement("td")}}-Elemente) in jeder `row`.

> [!NOTE]
> Normalerweise werden die Gruppierungselemente {{HTMLElement("thead")}} und {{HTMLElement("tbody")}} verwendet, um Zeilen mit Köpfen in die entsprechenden Tabellenkopf- und Korpusabschnitte zu gruppieren. Diese Elemente sind in diesem Beispiel weggelassen, um die Komplexität zu reduzieren und sich auf die Verwendung von Kopfzellen zu konzentrieren.

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

Einige grundlegende CSS-Stile werden verwendet, um die Tabelle und ihre Zellen zu gestalten. Wir verwenden CSS [Attributselektoren](/de/docs/Web/CSS/Attribute_selectors), um Kopfzellen basierend auf ihren [`scope`](#scope)-Attributwerten zu gestalten und Spalten- und Zeilenköpfe (`<th>`-Elemente) hervorzuheben, um sie sowohl voneinander als auch von den Datenzellen ({{HTMLElement("td")}}) zu unterscheiden.

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

### Spalten- und Zeilen-Spannen

Dieses Beispiel erweitert und verbessert die einfache Tabelle aus dem [vorherigen Beispiel](#grundlegende_spalten-_und_zeilenköpfe), indem eine zweite Zeile für zusätzliche Spaltenköpfe hinzugefügt wird.

#### HTML

Eine zusätzliche Tabellenzeile ({{HTMLElement("tr")}}-Element) wird als zweite Kopfzeile der Tabelle mit zwei zusätzlichen Spaltenköpfen (`<th>`-Elemente) hinzugefügt. Auf diese Weise wird die "Aussprache"-Spalte in zwei Spalten aufgeteilt, eine für die IPA-Notation (Internationales Phonetisches Alphabet) und eine für die Re-Spellings (die ursprüngliche Aussprache-Spalte). Die entsprechenden Datenzellen ({{HTMLElement("td")}}-Elemente) werden jeder folgenden Zeile hinzugefügt.

Wie in den [Nutzungshinweisen](#nutzungshinweise) gezeigt, können die Attribute [`colspan`](#colspan) und [`rowspan`](#rowspan) für die `<th>`-Elemente verwendet werden, um die Kopfzellen den richtigen Spalten und Zeilen zuzuweisen. Um eine "zweizeilige" Kopfzeile in der Tabellenstruktur zu erzielen, werden die ersten beiden Kopfzellen innerhalb des ersten {{HTMLElement("tr")}}-Elements über zwei Zeilen erstreckt. Die dritte Kopfzelle erstreckt sich zwei Spalten weit (bleibt in der ersten Zeile). Dieses Setup lässt zwei verfügbare Bereiche in der dritten und vierten Spalte in der zweiten Zeile, in denen die beiden Köpfe innerhalb des zweiten {{HTMLElement("tr")}}-Elements automatisch platziert werden, mit dem Standardwert `1` für die Attribute [`colspan`](#colspan) und [`rowspan`](#rowspan).

> [!NOTE]
> Normalerweise werden die {{HTMLElement("thead")}} und {{HTMLElement("tbody")}}-Elemente verwendet, um Zeilen mit Köpfen in die entsprechenden Tabellenkopf- und Korpusabschnitte zu gruppieren. Dies wurde in diesem Beispiel nicht implementiert, um den Fokus auf die Köpfe und das Spannen zu legen und die Komplexität des Beispiels zu reduzieren.

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

Das CSS bleibt vom [vorherigen Beispiel](#grundlegende_spalten-_und_zeilenköpfe) unverändert.

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

Für komplexere Beziehungen zwischen Kopfzellen kann die Verwendung von `th`-Elementen mit dem [`scope`](#scope)-Attribut allein für unterstützende Technologien, insbesondere Bildschirmleser, möglicherweise nicht ausreichend sein.

#### HTML

Um die {{Glossary("accessibility", "Zugänglichkeit")}} des [vorherigen Beispiels](#spalten-_und_zeilen-spannen) zu verbessern und beispielsweise Bildschirmlesern zu ermöglichen, die mit jeder Kopfzelle verknüpften Kopfzeilen zu lesen, kann das [`headers`](#headers)-Attribut zusammen mit [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id)-Attributen eingeführt werden. Aufgrund der Art und Weise, wie die "Aussprache"-Spalte in zwei Spalten unterteilt wird, wird im Beispiel eine "zweizeilige" Kopfzeile eingeführt, wobei unterstützende Technologien wie Bildschirmleser möglicherweise nicht in der Lage sind zu ermitteln, auf welche zusätzlichen Kopfzellen (`th`-Elemente) sich die Kopfzelle "Aussprache" bezieht und umgekehrt. Daher wird das [`headers`](#headers)-Attribut auf den "Aussprache", "IPA" und "Umschrift"-Kopfzellen verwendet, um die verknüpften Kopfzellen anhand der Werte der eindeutigen Kennungen der hinzugefügten [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id)-Attribute in Form einer durch Leerzeichen getrennten Liste zu verknüpfen.

> [!NOTE]
> Es wird empfohlen, beschreibendere und nützlichere Werte für das [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id)-Attribut zu verwenden. Jedes `id` in einem Dokument muss für dieses Dokument eindeutig sein. In diesem Beispiel sind die `id`-Werte Einzelzeichen, um den Fokus auf das Konzept des [`headers`](#headers)-Attributs zu legen.

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

Das [visuelle Ergebnis](#result_2) ist unverändert zum [vorherigen Beispiel der Tabelle](#spalten-_und_zeilen-spannen).

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
        >, jedoch ohne header, footer, sectioning-Inhalt oder Überschrifteninhalt als Nachfolger.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>
        Der Start-Tag ist obligatorisch.<br />Der End-Tag kann weggelassen werden, wenn er sofort von einem <code>&lt;th&gt;</code> oder {{HTMLElement("td")}}-Element gefolgt wird oder wenn keine weiteren Daten im Elternelement vorhanden sind.
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

- [Erlernen: Grundlagen von HTML-Tabellen](/de/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics)
- {{HTMLElement("caption")}}, {{HTMLElement("col")}}, {{HTMLElement("colgroup")}}, {{HTMLElement("table")}}, {{HTMLElement("tbody")}}, {{HTMLElement("td")}}, {{HTMLElement("tfoot")}}, {{HTMLElement("thead")}}, {{HTMLElement("tr")}}: Andere tabellenbezogene Elemente
- {{cssxref("background-color")}}: CSS-Eigenschaft, um die Hintergrundfarbe jeder Kopfzelle zu setzen
- {{cssxref("border")}}: CSS-Eigenschaft, um die Ränder der Kopfzellen zu steuern
- {{cssxref("height")}}: CSS-Eigenschaft, um die empfohlene Höhe der Kopfzelle zu steuern
- {{cssxref("text-align")}}: CSS-Eigenschaft, um den Inhalt jeder Kopfzelle horizontal auszurichten
- {{cssxref("vertical-align")}}: CSS-Eigenschaft, um den Inhalt jeder Kopfzelle vertikal auszurichten
- {{cssxref("width")}}: CSS-Eigenschaft, um die empfohlene Breite der Kopfzelle zu steuern
- {{cssxref(":nth-of-type")}}, {{cssxref(":first-of-type")}}, {{cssxref(":last-of-type")}}: CSS-Pseudoklassen, um die gewünschten Kopfzellen auszuwählen
