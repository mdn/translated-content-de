---
title: "<th>: Das Tabellenkopf-Element"
slug: Web/HTML/Reference/Elements/th
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
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
  - : Eine kurze, abgekürzte Beschreibung des Inhalts der Kopfzelle, die als alternatives Label zur Verwendung für die Kopfzelle bereitgestellt wird, wenn auf die Zelle in anderen Kontexten verwiesen wird. Einige Benutzeragenten, wie Screenreader, können diese Beschreibung vor dem eigentlichen Inhalt wiedergeben.
- `colspan`
  - : Ein nicht-negativer Ganzzahlwert, der angibt, wie viele Spalten die Kopfzelle überbrückt oder erweitert. Der Standardwert ist `1`. Benutzeragenten verwerfen Werte größer als 1000 als unkorrekt und setzen diese Werte auf `1` zurück.
- `headers`
  - : Eine Liste von durch Leerzeichen getrennten Zeichenfolgen, die den `id`-Attributen der `<th>`-Elemente entsprechen, die die Kopfzellen für diese Kopfzelle bereitstellen.
- `rowspan`
  - : Ein nicht-negativer Ganzzahlwert, der angibt, wie viele Zeilen die Kopfzelle überbrückt oder erweitert. Der Standardwert ist `1`; ist der Wert auf `0` gesetzt, erstreckt sich die Kopfzelle bis zum Ende des Tabellensektionsgruppierungsabschnitts ({{HTMLElement("thead")}}, {{HTMLElement("tbody")}}, {{HTMLElement("tfoot")}}, auch wenn implizit definiert), dem das `<th>`-Element gehört. Werte größer als `65534` werden auf `65534` gekürzt.
- `scope`

  - : Definiert die Zellen, zu denen sich die Kopfzelle (im `<th>`-Element definiert) verhält. Mögliche {{Glossary("enumerated", "aufzählbare")}} Werte sind:

    - `row`: Die Kopfzelle bezieht sich auf alle Zellen der Zeile, zu der sie gehört;
    - `col`: Die Kopfzelle bezieht sich auf alle Zellen der Spalte, zu der sie gehört;
    - `rowgroup`: Die Kopfzelle gehört zu einer Zeilengruppe und bezieht sich auf alle ihre Zellen;
    - `colgroup`: Die Kopfzelle gehört zu einer Spaltengruppe und bezieht sich auf alle ihre Zellen.

    Wenn das `scope`-Attribut nicht angegeben ist oder sein Wert nicht `row`, `col`, `rowgroup` oder `colgroup` ist, wählen Browser automatisch den Satz von Zellen aus, auf den sich die Kopfzelle bezieht.

### Veraltete Attribute

Die folgenden Attribute sind veraltet und sollten nicht verwendet werden. Sie werden hier der Vollständigkeit halber dokumentiert, um bestehende Codes zu aktualisieren und aus historischem Interesse.

- `align` {{deprecated_inline}}

  - : Gibt die horizontale Ausrichtung der Kopfzelle an. Die möglichen {{Glossary("enumerated", "aufzählbaren")}} Werte sind `left`, `center`, `right`, `justify` und `char`. Wenn unterstützt, richtet der `char`-Wert den Textinhalt an dem im [`char`](#char)-Attribut definierten Zeichen und dem im [`charoff`](#charoff)-Attribut definierten Offset aus. Verwenden Sie stattdessen die {{cssxref("text-align")}} CSS-Eigenschaft, da dieses Attribut veraltet ist.

- `axis` {{deprecated_inline}}

  - : Enthält eine Liste von durch Leerzeichen getrennten Zeichenfolgen, die jeweils dem `id`-Attribut einer Gruppe von Zellen entsprechen, auf die sich die Kopfzelle bezieht. Verwenden Sie stattdessen das [`scope`](#scope)-Attribut, da dieses Attribut veraltet ist.

- `bgcolor` {{deprecated_inline}}

  - : Definiert die Hintergrundfarbe der Kopfzelle. Der Wert ist eine HTML-Farbe; entweder ein [6-stelliger hexadezimaler RGB-Code](/de/docs/Web/CSS/hex-color), dem ein `#` vorangestellt ist, oder ein [Farbname](/de/docs/Web/CSS/named-color). Andere CSS {{cssxref("color_value", "&lt;color&gt")}}-Werte werden nicht unterstützt. Verwenden Sie stattdessen die {{cssxref("background-color")}} CSS-Eigenschaft, da dieses Attribut veraltet ist.

- `char` {{deprecated_inline}}

  - : Hat keine Funktion. Es war ursprünglich vorgesehen, die Ausrichtung des Inhalts an einem Zeichen der Kopfzelle zu spezifizieren. Typische Werte hierfür sind ein Punkt (`.`), wenn versucht wird, Zahlen oder Geldbeträge auszurichten. Wenn [`align`](#align) nicht auf `char` gesetzt ist, wird dieses Attribut ignoriert.

- `charoff` {{deprecated_inline}}

  - : Hat keine Funktion. Es war ursprünglich vorgesehen, die Anzahl der Zeichen anzugeben, um die der Kopfzelleninhalt vom im [`char`](#char)-Attribut angegebenen Zeichen auszugleichen.

- `height` {{deprecated_inline}}

  - : Definiert eine empfohlene Höhe der Kopfzelle. Verwenden Sie stattdessen die {{cssxref("height")}} CSS-Eigenschaft, da dieses Attribut veraltet ist.

- `valign` {{deprecated_inline}}

  - : Gibt die vertikale Ausrichtung der Kopfzelle an. Die möglichen {{Glossary("enumerated", "aufzählbaren")}} Werte sind `baseline`, `bottom`, `middle`, und `top`. Verwenden Sie stattdessen die {{cssxref("vertical-align")}} CSS-Eigenschaft, da dieses Attribut veraltet ist.

- `width` {{deprecated_inline}}

  - : Definiert eine empfohlene Breite der Kopfzelle. Verwenden Sie stattdessen die {{cssxref("width")}} CSS-Eigenschaft, da dieses Attribut veraltet ist.

## Verwendungshinweise

- Das `<th>` kann nur innerhalb eines {{HTMLElement("tr")}}-Elements verwendet werden.
- In einfachen Kontexten ist die Verwendung des [`scope`](#scope)-Attributs in Kopfzellen (`<th>`-Elemente) redundant, weil [`scope`](#scope) impliziert wird. Allerdings kann es bei bestimmten unterstützenden Technologien zu Problemen bei der korrekten Interpretation kommen, sodass die Angabe der Kopfzeilenreichweite die Benutzererfahrung verbessern kann.
- Bei der Verwendung der Attribute [`colspan`](#colspan) und [`rowspan`](#rowspan), um Kopfzellen über mehrere Spalten und Zeilen hinweg zu erweitern, werden Zellen ohne definierte Attribute (mit einem Standardwert von `1`) automatisch in frei verfügbaren Bereichen in der Tabellenstruktur platziert, die 1x1-Zellen abdecken, wie in der folgenden Abbildung gezeigt:

  ![Illustration, die das Überbrücken von Spalten und Zeilen von Tabellenzellen zeigt: Zellen 1, 3 und 4 überbrücken zwei Zeilen; Zelle 2 überbrückt zwei Spalten; Zellen 5 und 6 passen in die verfügbaren Zellen, die die zweite und dritte Spalte in der zweiten Zeile bilden.](column-row-span.png)

  > [!NOTE]
  > Diese Attribute dürfen nicht verwendet werden, um Zellen zu überlappen.

## Beispiele

Siehe {{HTMLElement("table")}} für ein vollständiges Tabellenbeispiel, das gängige Standards und Best Practices einführt.

### Grundlegende Spalten- und Zeilenüberschriften

Dieses Beispiel verwendet `<th>`-Elemente, um Spalten- und Zeilenüberschriften in einer grundlegenden Tabellenstruktur einzuführen.

#### HTML

Die erste Zeile ({{HTMLElement("tr")}}-Element) enthält die Spaltenüberschriften (`<th>`-Elemente), die als "Titel" für die Spalten fungieren, um das Verständnis der Informationen in den Spalten zu erleichtern und die Daten zu identifizieren. Um anzuzeigen, dass sich jede Spaltenüberschrift auf alle Zellen in der entsprechenden Spalte bezieht, wird das [`scope`](#scope)-Attribut auf `col` (Spalte) gesetzt.

Die verbleibenden Zeilen enthalten die Hauptdaten der Tabelle. Jede dieser Zeilen hat eine Zeilenüberschrift (`<th>`-Element), die als erste Zelle eingeführt wird. Dies erstellt eine Spalte mit Zeilenüberschriften als erste Spalte der Tabelle. Ähnlich wie bei den Spaltenüberschriften wird das [`scope`](#scope)-Attribut auf `row` gesetzt, um festzulegen, auf welche Zellen sich jede Zeilenüberschrift bezieht; im folgenden Beispiel sind dies alle Datenzellen ({{HTMLElement("td")}}-Elemente) in jeder Zeile.

> [!NOTE]
> Normalerweise werden die Gruppierungselemente {{HTMLElement("thead")}} und {{HTMLElement("tbody")}} verwendet, um Zeilen mit Überschriften in die entsprechenden Tabellenkopf- und Tabellenkörperabschnitte zu gruppieren. Diese Elemente sind in diesem Beispiel weggelassen, um die Komplexität zu reduzieren und den Fokus auf die Verwendung von Kopfzellen zu legen.

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

Einige grundlegende CSS-Regeln werden verwendet, um die Tabelle und ihre Zellen zu stylen. Wir verwenden CSS-[Attributselektoren](/de/docs/Web/CSS/Attribute_selectors), um Kopfzellen basierend auf ihren [`scope`](#scope)-Attributwerten zu adressieren und Spalten- sowie Zeilenüberschriften (`<th>`-Elemente) hervorzuheben, sie von den anderen zu unterscheiden und von den Datenzellen ({{HTMLElement("td")}}).

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

### Spalten- und Zeilenübergreifung

Dieses Beispiel erweitert und verbessert die grundlegende Tabelle aus dem [vorherigen Beispiel](#grundlegende_spalten-_und_zeilenüberschriften), indem eine zweite Zeile für zusätzliche Spaltenüberschriften hinzugefügt wird.

#### HTML

Eine zusätzliche Tabellenzeile ({{HTMLElement("tr")}}-Element) wird als zweite Kopfzeile der Tabelle mit zwei zusätzlichen Spaltenüberschriften (`<th>`-Elemente) hinzugefügt. Auf diese Weise wird die "Aussprache"-Spalte in zwei Spalten aufgeteilt, eine für die IPA (International Phonetic Alphabet) Notation und eine für die lautschriftliche Wiedergabe (die ursprüngliche Aussprache-Spalte). Die entsprechenden Datenzellen ({{HTMLElement("td")}}-Elemente) werden jeder folgenden Zeile hinzugefügt.

Wie in den [Verwendungshinweisen](#verwendungshinweise) gezeigt, können die Attribute [`colspan`](#colspan) und [`rowspan`](#rowspan) bei den `<th>`-Elementen verwendet werden, um die Kopfzellen den korrekten Spalten und Zeilen zuzuordnen. Um eine "Zwei-Zeilen"-Kopfzeile in der Tabellenstruktur zu erreichen, werden die ersten zwei Kopfzellen innerhalb des ersten {{HTMLElement("tr")}}-Elements über zwei Zeilen gespannt. Die dritte Kopfzelle wird über zwei Spalten hinweg erweitert (verbleibend in der ersten Zeile). Dieses Setup lässt zwei verfügbare Bereiche in der dritten und vierten Spalte in der zweiten Zeile, in denen die zwei Überschriften innerhalb des zweiten {{HTMLElement("tr")}}-Elements automatisch platziert werden, wobei der Standardwert für die Attribute [`colspan`](#colspan) und [`rowspan`](#rowspan) `1` ist.

> [!NOTE]
> Normalerweise werden {{HTMLElement("thead")}} und {{HTMLElement("tbody")}}-Elemente verwendet, um Zeilen mit Kopfzeilen in die jeweiligen Tabellenkopf- und Tabellenkörperabschnitte zu gruppieren. Dies ist in diesem Beispiel nicht implementiert, um den Fokus auf die Kopfzeilen und die Übergreifung zu legen und die Komplexität des Beispiels zu reduzieren.

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

Das CSS ist unverändert vom [vorherigen Beispiel](#grundlegende_spalten-_und_zeilenüberschriften).

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

### Kopfzellen mit anderen Kopfzellen verbinden

Für komplexere Beziehungen zwischen Kopfzeilen reicht die Verwendung von `th`-Elementen mit dem [`scope`](#scope)-Attribut allein möglicherweise nicht aus, um unterstützenden Technologien, insbesondere Screenreadern, gerecht zu werden.

#### HTML

Um die {{Glossary("accessibility", "Zugänglichkeit")}} des [vorherigen Beispiels](#spalten-_und_zeilenübergreifung) zu verbessern und Screenreader, z. B., die mit jeder Kopfzelle verbundenen Überschriften aussprechen zu lassen, kann das [`headers`](#headers)-Attribut zusammen mit `id`-Attributen eingeführt werden. Aufgrund der Art und Weise, wie die "Aussprache"-Spalte im Beispiel in zwei Spalten unterteilt ist, die eine "Zwei-Zeilen"-Kopfzeile bilden, könnte es für unterstützende Technologien wie Screenreader schwierig sein, zu erkennen, mit welchen zusätzlichen Kopfzellen (`th`-Elemente) die "Aussprache"-Kopfzelle verwandt ist und umgekehrt. Deshalb wird das [`headers`](#headers)-Attribut bei der "Aussprache"-, "IPA"- und "Umschrift"-Kopfzelle verwendet, um die verwandten Kopfzellen anhand der Werte der einzigartigen Bezeichner aus den hinzugefügten `id`-Attributen in Form einer durch Leerzeichen getrennten Liste zuzuordnen.

> [!NOTE]
> Es wird empfohlen, beschreibendere und nützlichere Werte für das `id`-Attribut zu verwenden. Jedes `id` in einem Dokument muss in diesem Dokument eindeutig sein. In diesem Beispiel sind die `id`-Werte einstellige Zeichen, um den Fokus auf den Kernpunkt des [`headers`](#headers)-Attributs zu legen.

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

Das [visuelle Ergebnis](#result_2) ist unverändert von der [vorherigen Beispielstabelle](#spalten-_und_zeilenübergreifung).

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
        >, jedoch ohne Nachkommen von header, footer, sectioning content oder heading content.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>
        Das Start-Tag ist verpflichtend.<br />Das End-Tag kann weggelassen werden, wenn es unmittelbar von einem <code>&lt;th&gt;</code> oder {{HTMLElement("td")}}-Element gefolgt wird oder wenn keine weiteren Daten in seinem Elternelement mehr vorhanden sind.
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

- [Lernen: Grundlegende HTML-Tabellen](/de/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics)
- {{HTMLElement("caption")}}, {{HTMLElement("col")}}, {{HTMLElement("colgroup")}}, {{HTMLElement("table")}}, {{HTMLElement("tbody")}}, {{HTMLElement("td")}}, {{HTMLElement("tfoot")}}, {{HTMLElement("thead")}}, {{HTMLElement("tr")}}: Andere tabellenbezogene Elemente
- {{cssxref("background-color")}}: CSS-Eigenschaft zur Festlegung der Hintergrundfarbe jeder Kopfzelle
- {{cssxref("border")}}: CSS-Eigenschaft zur Steuerung der Rahmen der Kopfzellen
- {{cssxref("height")}}: CSS-Eigenschaft zur Steuerung der empfohlenen Kopfzellenhöhe
- {{cssxref("text-align")}}: CSS-Eigenschaft zur horizontalen Ausrichtung des Inhalts jeder Kopfzelle
- {{cssxref("vertical-align")}}: CSS-Eigenschaft zur vertikalen Ausrichtung des Inhalts jeder Kopfzelle
- {{cssxref("width")}}: CSS-Eigenschaft zur Steuerung der empfohlenen Kopfzellenbreite
- {{cssxref(":nth-of-type")}}, {{cssxref(":first-of-type")}}, {{cssxref(":last-of-type")}}: CSS-Pseudoklassen zur Auswahl der gewünschten Kopfzellen
