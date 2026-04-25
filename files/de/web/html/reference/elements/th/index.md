---
title: "`<th>` HTML-Tabellenkopfelement"
short-title: <th>
slug: Web/HTML/Reference/Elements/th
l10n:
  sourceCommit: 599ae8b7ad414e91df473d91983f4ffc5cafabb3
---

Das **`<th>`** [HTML](/de/docs/Web/HTML) Element definiert eine Zelle als Kopf einer Gruppe von Tabellenzellen und kann als Kind-Element des {{HTMLElement("tr")}} Elements verwendet werden. Die genaue Natur dieser Gruppe wird durch die Attribute [`scope`](#scope) und [`headers`](#headers) definiert.

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

Dieses Element beinhaltet die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `abbr`
  - : Eine kurze, abgekürzte Beschreibung des Inhalts der Kopfzelle, die als alternatives Label zur Nutzung der Kopfzelle beim Referenzieren in anderen Kontexten bereitgestellt wird. Einige Benutzeragenten, wie Bildschirmauslesegeräte, können diese Beschreibung vor dem eigentlichen Inhalt präsentieren.
- `colspan`
  - : Ein nicht-negativer Ganzwert, der angibt, über wie viele Spalten die Kopfzelle sich erstreckt. Der Standardwert ist `1`. Benutzeragenten verwerfen Werte höher als 1000 als falsch und setzen solche Werte auf `1`.
- `headers`
  - : Eine Liste von Leerzeichen-getrennten Zeichenketten, die den `id` Attributen der `<th>` Elemente entsprechen, die die Kopfzeilen für diese Kopfzelle bereitstellen.
- `rowspan`
  - : Ein nicht-negativer Ganzwert, der angibt, über wie viele Zeilen die Kopfzelle sich erstreckt. Der Standardwert ist `1`; wenn sein Wert auf `0` gesetzt ist, wird sich die Kopfzelle bis zum Ende des Tabellengruppierungsabschnitts ({{HTMLElement("thead")}}, {{HTMLElement("tbody")}}, {{HTMLElement("tfoot")}}, auch wenn implizit definiert) erstrecken, zu dem die `<th>` gehört. Werte über `65534` werden bei `65534` abgeschnitten.
- `scope`
  - : Definiert die Zellen, zu denen die Kopfzelle (im `<th>` definiert) gehört. Mögliche {{Glossary("enumerated", "enumerierte")}} Werte sind:
    - `row`: die Kopfzeile bezieht sich auf alle Zellen der Reihe, zu der sie gehört;
    - `col`: die Kopfzeile bezieht sich auf alle Zellen der Spalte, zu der sie gehört;
    - `rowgroup`: die Kopfzeile gehört zu einer Zeilengruppe und bezieht sich auf alle ihre Zellen;
    - `colgroup`: die Kopfzeile gehört zu einer Spaltengruppe und bezieht sich auf all ihre Zellen.

    Wenn das `scope` Attribut nicht angegeben ist oder sein Wert nicht `row`, `col`, `rowgroup` oder `colgroup` ist, wählen Browser automatisch den Satz von Zellen aus, auf die sich die Kopfzelle bezieht.

### Veraltete Attribute

Die folgenden Attribute sind veraltet und sollten nicht verwendet werden. Sie sind hier dokumentiert, um beim Aktualisieren vorhandenen Codes zu helfen und aus historischen Interesse.

- `align` {{deprecated_inline}}
  - : Gibt die horizontale Ausrichtung der Kopfzelle an. Die möglichen {{Glossary("enumerated", "enumerierten")}} Werte sind `left`, `center`, `right`, `justify` und `char`. Wenn unterstützt, richtet der Wert `char` den Textinhalt auf das Zeichen aus, das im [`char`](#char) Attribut definiert ist, sowie auf den Versatz, der durch das [`charoff`](#charoff) Attribut definiert wird. Verwenden Sie stattdessen die {{cssxref("text-align")}} CSS-Eigenschaft, da dieses Attribut veraltet ist.

- `axis` {{deprecated_inline}}
  - : Enthält eine Liste von Leerzeichen-getrennten Zeichenketten, die jeweils dem `id` Attribut einer Gruppe von Zellen entsprechen, auf die sich die Kopfzelle bezieht. Verwenden Sie stattdessen das [`scope`](#scope) Attribut, da dieses Attribut veraltet ist.

- `bgcolor` {{deprecated_inline}}
  - : Definiert die Hintergrundfarbe der Kopfzelle. Der Wert ist eine HTML-Farbe; entweder ein [6-stelliges hexadezimales RGB-Kennzeichen](/de/docs/Web/CSS/Reference/Values/hex-color), das mit einem `#` beginnt, oder ein [Farbenschlüsselwort](/de/docs/Web/CSS/Reference/Values/named-color). Andere CSS {{cssxref("&lt;color&gt;")}} Werte werden nicht unterstützt. Verwenden Sie die {{cssxref("background-color")}} CSS-Eigenschaft stattdessen, da dieses Attribut veraltet ist.

- `char` {{deprecated_inline}}
  - : Hat keine Funktion. War ursprünglich dafür gedacht, die Ausrichtung des Inhalts auf ein Zeichen der Kopfzelle zu spezifizieren. Typische Werte hierfür beinhalten einen Punkt (`.`), wenn versucht wird, Zahlen oder Währungswerte auszurichten. Wenn [`align`](#align) nicht auf `char` gesetzt ist, wird dieses Attribut ignoriert.

- `charoff` {{deprecated_inline}}
  - : Hat keine Funktion. War ursprünglich dafür gedacht, die Anzahl der Zeichen zu spezifizieren, die den Inhalt der Kopfzelle vom Ausrichtungszeichen, das durch das [`char`](#char) Attribut spezifiziert wird, verschieben.

- `height` {{deprecated_inline}}
  - : Definiert eine empfohlene Höhe für die Kopfzelle. Verwenden Sie stattdessen die {{cssxref("height")}} CSS-Eigenschaft, da dieses Attribut veraltet ist.

- `valign` {{deprecated_inline}}
  - : Gibt die vertikale Ausrichtung der Kopfzelle an. Die möglichen {{Glossary("enumerated", "enumerierten")}} Werte sind `baseline`, `bottom`, `middle` und `top`. Verwenden Sie stattdessen die {{cssxref("vertical-align")}} CSS-Eigenschaft, da dieses Attribut veraltet ist.

- `width` {{deprecated_inline}}
  - : Definiert eine empfohlene Breite der Kopfzelle. Verwenden Sie stattdessen die {{cssxref("width")}} CSS-Eigenschaft, da dieses Attribut veraltet ist.

## Hinweise zur Verwendung

- Die `<th>` darf nur innerhalb eines {{HTMLElement("tr")}} Elements verwendet werden.
- In einfachen Kontexten ist die Verwendung des [`scope`](#scope) Attributs auf Kopfzellen (`<th>` Elemente) redundant, weil das [`scope`](#scope) Attribut abgeleitet wird. In bestimmten unterstützenden Technologien kann es jedoch vorkommen, dass die Ableitung fehlschlägt, daher kann das Spezifizieren des Kopfbereichs das Benutzererlebnis verbessern.
- Bei der Verwendung der Attribute [`colspan`](#colspan) und [`rowspan`](#rowspan) zum Spannen von Kopfzeilen über mehrere Spalten und Zeilen werden Zellen ohne definierte Attribute (mit einem Standardwert von `1`) automatisch in freie verfügbare Räume in der Tabellenstruktur eingefügt, die 1x1 Zellen umfassen, wie in der folgenden Abbildung gezeigt:

  ![Illustration zur Demonstration des Spaltens und Zeilen-Spannens von Tabellenzellen: Zellen 1, 3 und 4 erstrecken sich über zwei Zeilen; Zelle 2 erstreckt sich über zwei Spalten; Zellen 5 und 6 passen in die verfügbaren Zellen, die die zweite und dritte Spalte in der zweiten Zeile sind](/shared-assets/images/diagrams/html/table/column-row-span.png)

  > [!NOTE]
  > Diese Attribute dürfen nicht verwendet werden, um Zellen zu überlappen.

## Beispiele

Siehe {{HTMLElement("table")}} für ein vollständiges Tabellenbeispiel, das gängige Standards und bewährte Vorgehensweisen einführt.

### Einfache Spalten- und Zeilenkopfzellen

Dieses Beispiel verwendet `<th>` Elemente, um Spalten- und Zeilenköpfe in einer einfachen Tabellenstruktur einzuführen.

#### HTML

Die erste Zeile ({{HTMLElement("tr")}} Element) enthält die Spaltenköpfe (`<th>` Elemente), die als "Titel" für die Spalten fungieren, um das Verständnis der Informationen in den Spalten zu erleichtern und die Daten zu identifizieren. Um anzuzeigen, dass sich jeder Spaltenkopf auf alle Zellen in der entsprechenden Spalte bezieht, wird das [`scope`](#scope) Attribut auf `col` (Spalte) gesetzt.

Die übrigen Zeilen enthalten die Hauptdaten der Tabelle. Jede dieser Zeilen hat eine Zeilenüberschrift (`<th>` Element), die als erste Zelle eingeführt wird. Dies erstellt eine Spalte mit Zeilenüberschriften als erste Spalte der Tabelle. Ähnlich wie bei den Spaltenköpfen wird das [`scope`](#scope) Attribut auf `row` gesetzt, um anzugeben, auf welche Zellen sich jede Zeilenüberschrift bezieht, die im folgenden Beispiel alle Datenzellen ({{HTMLElement("td")}} Elemente) in jeder Zeile sind.

> [!NOTE]
> Normalerweise werden die Gruppierungselemente {{HTMLElement("thead")}} und {{HTMLElement("tbody")}} verwendet, um Zeilen mit Kopfzellen in die jeweiligen Tabellenkopf- und Körperabschnitte zu gruppieren. Diese Elemente wurden in diesem Beispiel weggelassen, um die Komplexität zu reduzieren und den Fokus auf die Verwendung von Kopfzellen zu legen.

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

Einige grundlegende CSS-Regeln werden verwendet, um die Tabelle und ihre Zellen zu gestalten. Wir verwenden CSS [Attributselektoren](/de/docs/Web/CSS/Reference/Selectors/Attribute_selectors), um Kopfzellen basierend auf ihren [`scope`](#scope) Attributwerten anzusprechen, Spalten- und Zeilenköpfe (`<th>` Elemente) hervorzuheben und sie jeweils untereinander und von den Datenzellen ({{HTMLElement("td")}}) zu unterscheiden.

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

### Spalten- und Zeilen-Spannung

Dieses Beispiel erweitert und verbessert die einfache Tabelle aus dem [vorherigen Beispiel](#einfache_spalten-_und_zeilenkopfzellen) durch Hinzufügen einer zweiten Zeile für zusätzliche Spaltenköpfe.

#### HTML

Eine zusätzliche Tabellenzeile ({{HTMLElement("tr")}} Element) wird als zweite Kopfzeile der Tabelle mit zwei zusätzlichen Spaltenköpfen (`<th>` Elemente) hinzugefügt. Auf diese Weise wird die "Aussprache"-Spalte in zwei Spalten aufgeteilt, eine für die IPA (Internationales Phonetisches Alphabet) Notation und eine für die Umschrift (die ursprüngliche Aussprache-Spalte). Die entsprechenden Datenzellen ({{HTMLElement("td")}} Elemente) werden zu jeder nachfolgenden Zeile hinzugefügt.

Wie in den [Verwendungshinweisen](#hinweise_zur_verwendung) gezeigt, können die [`colspan`](#colspan) und [`rowspan`](#rowspan) Attribute für die `<th>` Element verwendet werden, um die Kopfzellen den richtigen Spalten und Zeilen zuzuweisen. Um eine "zwei-Zeilen"-Kopfzeile in der Tabellenstruktur zu erreichen, werden die ersten beiden Kopfzellen im ersten {{HTMLElement("tr")}} Element über zwei Zeilen gespannt. Die dritte Kopfzelle erstreckt sich über zwei Spalten (bleibt in der ersten Zeile). Dieses Setup lässt zwei verfügbare Bereiche in der dritten und vierten Spalte der zweiten Zeile, wo die beiden Kopfzeilen innerhalb des zweiten {{HTMLElement("tr")}} Elements automatisch platziert werden, mit dem Standardwert `1` für die [`colspan`](#colspan) und [`rowspan`](#rowspan) Attribute.

> [!NOTE]
> Normalerweise werden {{HTMLElement("thead")}} und {{HTMLElement("tbody")}} Elemente verwendet, um Zeilen mit Kopfzeilen in die jeweiligen Tabellenkopf- und Körperabschnitte zu gruppieren. Dies ist in diesem Beispiel nicht implementiert, um sich auf die Kopfzeilen und Spannungen zu konzentrieren und die Komplexität des Beispiels zu reduzieren.

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

Das CSS bleibt unverändert vom [vorherigen Beispiel](#einfache_spalten-_und_zeilenkopfzellen).

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

### Kopfzellen mit anderen Kopfzellen verknüpfen

Für komplexere Beziehungen zwischen Kopfzellen allein mit `th` Elementen und dem [`scope`](#scope) Attribut können Unterstützungstechnologien, insbesondere Bildschirmauslesegeräte, möglicherweise nicht ausreichen.

#### HTML

Um die {{Glossary("accessibility", "Zugänglichkeit")}} des [vorherigen Beispiels](#spalten-_und_zeilen-spannung) zu verbessern und um Bildschirmauslesegeräten, zum Beispiel, das Vorlesen der mit jeder Kopfzelle verbundenen Kopfzellen zu ermöglichen, kann das [`headers`](#headers) Attribut zusammen mit [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) Attributen eingeführt werden. Aufgrund der Art, wie die "Aussprache"-Spalte im Beispiel in zwei Spalten aufgeteilt ist und eine "zwei-Zeilen"-Kopfzeile bildet, können unterstützende Technologien wie Bildschirmauslesegeräte möglicherweise nicht erkennen, mit welchen zusätzlichen Kopfzellen (`th` Elemente) die "Aussprache"-Kopfzelle verbunden ist und umgekehrt. Daher wird das [`headers`](#headers) Attribut auf den Kopfzellen "Aussprache", "IPA" und "Umschrift" verwendet, um die verbundenen Kopfzellen basierend auf den Werten der eindeutigen Identifikatoren der hinzugefügten [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) Attribute in Form einer Leerzeichen-getrennten Liste zu assoziieren.

> [!NOTE]
> Es wird empfohlen, aussagekräftigere und nützlichere Werte für das [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) Attribut zu verwenden. Jede `id` in einem Dokument muss für dieses Dokument eindeutig sein. In diesem Beispiel sind die `id` Werte Einzelzeichen, um die Konzentration auf das Konzept des [`headers`](#headers) Attributs zu beibehalten.

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

Das [visuelle Ergebnis](#result_2) bleibt unverändert im Vergleich zur [vorherigen Beispiel-Tabelle](#spalten-_und_zeilen-spannung).

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
      <th scope="row">Zulässiger Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content"
          >Fließender Inhalt</a
        >, aber ohne Kopf-, Fuß-, Strukturierungsinhalt oder Überschrift-Nachkommen.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>
        Das Starttag ist obligatorisch.<br />Das Endtag kann weggelassen werden, wenn es direkt von einem <code>&lt;th&gt;</code> oder {{HTMLElement("td")}} Element gefolgt wird oder wenn es keine weiteren Daten in seinem Elternelement gibt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>Ein {{HTMLElement("tr")}} Element.</td>
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

- [Lernen: Grundlegendes zu HTML-Tabellen](/de/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics)
- {{HTMLElement("caption")}}, {{HTMLElement("col")}}, {{HTMLElement("colgroup")}}, {{HTMLElement("table")}}, {{HTMLElement("tbody")}}, {{HTMLElement("td")}}, {{HTMLElement("tfoot")}}, {{HTMLElement("thead")}}, {{HTMLElement("tr")}}: Andere tabellenbezogene Elemente
- {{cssxref("background-color")}}: CSS-Eigenschaft zum Setzen der Hintergrundfarbe jeder Kopfzelle
- {{cssxref("border")}}: CSS-Eigenschaft zur Steuerung der Ränder von Kopfzellen
- {{cssxref("height")}}: CSS-Eigenschaft, um die empfohlene Kopfzellenhöhe zu steuern
- {{cssxref("text-align")}}: CSS-Eigenschaft zur horizontalen Ausrichtung des Inhalts jeder Kopfzelle
- {{cssxref("vertical-align")}}: CSS-Eigenschaft zur vertikalen Ausrichtung des Inhalts jeder Kopfzelle
- {{cssxref("width")}}: CSS-Eigenschaft, um die empfohlene Breite der Kopfzelle zu steuern
- {{cssxref(":nth-of-type")}}, {{cssxref(":first-of-type")}}, {{cssxref(":last-of-type")}}: CSS-Pseudoklassen zur Auswahl der gewünschten Kopfzellen
