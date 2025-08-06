---
title: "<th>: Das Tabellenkopfzellen-Element"
slug: Web/HTML/Reference/Elements/th
l10n:
  sourceCommit: f2d281d86396bcd2dcecfdabd5837b1590132aa6
---

Das **`<th>`** [HTML](/de/docs/Web/HTML)-Element definiert eine Zelle als Kopfzelle einer Gruppe von Tabellenspalten und kann als Kindelement des {{HTMLElement("tr")}}-Elements verwendet werden. Die genaue Natur dieser Gruppe wird durch die Attribute [`scope`](#scope) und [`headers`](#headers) definiert.

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
  color: white;
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
  - : Eine kurze, abgekürzte Beschreibung des Inhalts der Kopfzelle, die als alternatives Label bereitgestellt wird, um die Kopfzelle in anderen Kontexten zu referenzieren. Einige Benutzeragenten, wie z. B. Bildschirmlesegeräte, können diese Beschreibung vor dem eigentlichen Inhalt präsentieren.
- `colspan`
  - : Ein nicht-negativer Ganzzahlwert, der angibt, wie viele Spalten die Kopfzelle überspannt oder erweitert. Der Standardwert ist `1`. Benutzeragenten verwerfen Werte größer als 1000 als inkorrekt und setzen solche Werte auf `1`.
- `headers`
  - : Eine Liste von durch Leerzeichen getrennten Zeichenfolgen, die den `id`-Attributen der `<th>`-Elemente entsprechen, die die Kopfzeilen für diese Kopfzelle bereitstellen.
- `rowspan`
  - : Ein nicht-negativer Ganzzahlwert, der angibt, wie viele Zeilen die Kopfzelle überspannt oder erweitert. Der Standardwert ist `1`; wenn der Wert auf `0` gesetzt ist, erstreckt sich die Kopfzelle bis zum Ende des Tabellenbereichsabschnitts ({{HTMLElement("thead")}}, {{HTMLElement("tbody")}}, {{HTMLElement("tfoot")}}, auch wenn implizit definiert), zu dem das `<th>` gehört. Werte höher als `65534` werden auf `65534` gekürzt.
- `scope`
  - : Definiert die Zellen, zu denen die im `<th>` definierte Kopfzelle gehört. Mögliche {{Glossary("enumerated", "Aufzählungswerte")}} sind:
    - `row`: die Kopfzelle gehört zu allen Zellen der Zeile, zu der sie gehört;
    - `col`: die Kopfzelle gehört zu allen Zellen der Spalte, zu der sie gehört;
    - `rowgroup`: die Kopfzelle gehört zu einer Zeilengruppe und zu allen darin enthaltenen Zellen;
    - `colgroup`: die Kopfzelle gehört zu einer Spaltengruppe und zu allen darin enthaltenen Zellen.

    Wenn das `scope`-Attribut nicht angegeben ist oder sein Wert nicht `row`, `col`, `rowgroup` oder `colgroup` ist, wählen die Browser automatisch den Satz von Zellen aus, auf den die Kopfzelle angewendet wird.

### Veraltete Attribute

Die folgenden Attribute sind veraltet und sollten nicht verwendet werden. Sie sind unten zur Referenz aufgeführt, wenn bestehender Code aktualisiert wird oder aus historischem Interesse.

- `align` {{deprecated_inline}}
  - : Gibt die horizontale Ausrichtung der Kopfzelle an. Die möglichen {{Glossary("enumerated", "Aufzählungswerte")}} sind `left`, `center`, `right`, `justify` und `char`. Wenn unterstützt, richtet der `char`-Wert den Textinhalt an dem im [`char`](#char)-Attribut definierten Zeichen und dem im [`charoff`](#charoff)-Attribut definierten Versatz aus. Verwenden Sie die CSS-Eigenschaft {{cssxref("text-align")}}, da dieses Attribut veraltet ist.

- `axis` {{deprecated_inline}}
  - : Enthält eine Liste von durch Leerzeichen getrennten Werten, die jeweils dem `id`-Attribut einer Gruppe von Zellen entsprechen, auf die die Kopfzelle angewendet wird. Verwenden Sie das [`scope`](#scope)-Attribut stattdessen, da dieses Attribut veraltet ist.

- `bgcolor` {{deprecated_inline}}
  - : Definiert die Hintergrundfarbe der Kopfzelle. Der Wert ist eine HTML-Farbe; entweder ein [6-stelliges hexadezimales RGB-Code](/de/docs/Web/CSS/hex-color), vorangestellt mit `#`, oder ein [Farb-Schlüsselwort](/de/docs/Web/CSS/named-color). Andere CSS {{cssxref("color_value", "&lt;color&gt;")}}-Werte werden nicht unterstützt. Verwenden Sie die CSS-Eigenschaft {{cssxref("background-color")}}, da dieses Attribut veraltet ist.

- `char` {{deprecated_inline}}
  - : Tut nichts. Ursprünglich war es vorgesehen, die Ausrichtung des Inhalts an einem Zeichen der Kopfzelle zu spezifizieren. Typische Werte hierfür sind ein Punkt (`.`), um zu versuchen, Zahlen oder Geldwerte auszurichten. Wenn [`align`](#align) nicht auf `char` gesetzt ist, wird dieses Attribut ignoriert.

- `charoff` {{deprecated_inline}}
  - : Tut nichts. Ursprünglich war es vorgesehen, die Anzahl der Zeichen anzugeben, um den Inhalt der Kopfzelle vom durch das [`char`](#char)-Attribut angegebenen Ausrichtungszeichen zu versetzen.

- `height` {{deprecated_inline}}
  - : Definiert eine empfohlene Höhe der Kopfzelle. Verwenden Sie die CSS-Eigenschaft {{cssxref("height")}}, da dieses Attribut veraltet ist.

- `valign` {{deprecated_inline}}
  - : Gibt die vertikale Ausrichtung der Kopfzelle an. Die möglichen {{Glossary("enumerated", "Aufzählungswerte")}} sind `baseline`, `bottom`, `middle` und `top`. Verwenden Sie die CSS-Eigenschaft {{cssxref("vertical-align")}}, da dieses Attribut veraltet ist.

- `width` {{deprecated_inline}}
  - : Definiert eine empfohlene Breite der Kopfzelle. Verwenden Sie die CSS-Eigenschaft {{cssxref("width")}}, da dieses Attribut veraltet ist.

## Verwendungshinweise

- Die `<th>` darf nur innerhalb eines {{HTMLElement("tr")}}-Elements verwendet werden.
- In einfachen Kontexten ist die Verwendung des [`scope`](#scope)-Attributs bei Kopfzellen (`<th>`-Elementen) redundant, da [`scope`](#scope) abgeleitet wird. Jedoch können einige unterstützende Technologien das nicht richtig erkennen, daher kann die Angabe des Bereichs der Kopfzelle die Benutzererfahrung verbessern.
- Wenn die [`colspan`](#colspan)- und [`rowspan`](#rowspan)-Attribute verwendet werden, um Kopfzellen über mehrere Spalten und Zeilen hinweg zu spannen, werden Zellen ohne diese definierten Attribute (mit einem Standardwert von `1`) automatisch in freien verfügbaren Räumen der Tabellenstruktur, die 1x1-Zellen umfassen, eingepasst, wie in der folgenden Abbildung gezeigt:

  ![Illustration, die zeigt, wie Spalten- und Zeilenüberspannung von Tabellenzellen funktioniert: Zellen 1, 3 und 4 überspannen zwei Zeilen; Zelle 2 überspannt zwei Spalten; Zellen 5 und 6 passen in die verfügbaren Zellen, die die zweite und dritte Spalte in der zweiten Zeile sind](/shared-assets/images/diagrams/html/table/column-row-span.png)

  > [!NOTE]
  > Diese Attribute dürfen nicht verwendet werden, um Zellen zu überlappen.

## Beispiele

Sehen Sie {{HTMLElement("table")}} für ein vollständiges Tabellenbeispiel, das gemeinsame Standards und bewährte Praktiken einführt.

### Grundlegende Spalten- und Zeilenköpfe

Dieses Beispiel verwendet `<th>`-Elemente, um Spalten- und Zeilenköpfe in einer grundlegenden Tabellenstruktur einzuführen.

#### HTML

Die erste Zeile ({{HTMLElement("tr")}}-Element) enthält die Spaltenköpfe (`<th>`-Elemente), die als "Titel" für die Spalten fungieren, um das Verständnis der Informationen in den Spalten zu erleichtern und die Daten zu identifizieren. Um anzuzeigen, dass sich jeder Spaltenkopf auf alle Zellen in der entsprechenden Spalte bezieht, ist das [`scope`](#scope)-Attribut auf `col` (Spalte) gesetzt.

Die verbleibenden Zeilen enthalten die Hauptdaten der Tabelle. Jede dieser Zeilen hat einen Zeilenkopf (`<th>`-Element), der als erste Zelle eingeführt wird. Dies erzeugt eine Spalte mit Zeilenköpfen als erste Spalte der Tabelle. Ähnlich wie bei den Spaltenköpfen ist das [`scope`](#scope)-Attribut auf `row` gesetzt, um anzugeben, auf welche Zellen sich jeder Zeilenkopf bezieht, was im folgenden Beispiel alle Datenzellen ({{HTMLElement("td")}}-Elemente) in jeder Zeile sind.

> [!NOTE]
> Normalerweise werden die Gruppierungselemente {{HTMLElement("thead")}} und {{HTMLElement("tbody")}} verwendet, um Zeilen mit Kopfzeilen in die jeweiligen Tabellenkopf- und Körperabschnitte zu gruppieren. Diese Elemente werden in diesem Beispiel weggelassen, um die Komplexität zu reduzieren und den Fokus auf die Verwendung von Kopfzeilen zu legen.

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

Einige grundlegende CSS-Einstellungen werden verwendet, um die Tabelle und ihre Zellen zu gestalten. Wir verwenden CSS [Attributselektoren](/de/docs/Web/CSS/Attribute_selectors), um Kopfzellen basierend auf ihren [`scope`](#scope)-Attributwerten anzusprechen, wobei Spalten- und Zeilenköpfe (`<th>`-Elemente) hervorgehoben und von den Datenzellen ({{HTMLElement("td")}}) unterschieden werden.

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

Dieses Beispiel erweitert und verbessert die grundlegende Tabelle aus dem [vorherigen Beispiel](#grundlegende_spalten-_und_zeilenköpfe), indem eine zweite Zeile für zusätzliche Spaltenköpfe hinzugefügt wird.

#### HTML

Es wird eine zusätzliche Tabellenzeile ({{HTMLElement("tr")}}-Element) als zweite Kopfzeile der Tabelle hinzugefügt, mit zwei zusätzlichen Spaltenköpfen (`<th>`-Elemente). Auf diese Weise wird die "Aussprache"-Spalte in zwei Spalten aufgeteilt: eine für die IPA-Notation (International Phonetic Alphabet) und eine für die umgeschriebene Aussprache (die ursprüngliche Aussprache-Spalte). Die entsprechenden Datenzellen ({{HTMLElement("td")}}-Elemente) werden zu jeder nachfolgenden Zeile hinzugefügt.

Wie in den [Verwendungshinweisen](#verwendungshinweise) gezeigt, können die [`colspan`](#colspan)- und [`rowspan`](#rowspan)-Attribute bei den `<th>`-Elementen verwendet werden, um die Kopfzellen den richtigen Spalten und Zeilen zuzuordnen. Um eine "zwei Zeilen"-Kopfzeile in der Tabellenstruktur zu erreichen, werden die ersten beiden Kopfzellen innerhalb des ersten {{HTMLElement("tr")}}-Elements über zwei Zeilen hinweg überspannt. Die dritte Kopfzelle wird über zwei Spalten in der ersten Zeile überspannt. Diese Anordnung lässt in der zweiten Zeile zwei verfügbare Bereiche in der dritten und vierten Spalte, in die die beiden Kopfzeilen im zweiten {{HTMLElement("tr")}}-Element automatisch platziert werden, wobei der Standardwert für die [`colspan`](#colspan)- und [`rowspan`](#rowspan)-Attribute `1` beträgt.

> [!NOTE]
> Normalerweise werden die {{HTMLElement("thead")}} und {{HTMLElement("tbody")}}-Elemente verwendet, um Zeilen mit Kopfzeilen in die entsprechenden Tabellenkopf- und Körperabschnitte zu gruppieren. Dies ist in diesem Beispiel nicht implementiert, um den Fokus auf die Kopfzeilen und das Überspannen zu legen und die Komplexität des Beispiels zu reduzieren.

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

Das CSS bleibt unverändert gegenüber dem [vorherigen Beispiel](#grundlegende_spalten-_und_zeilenköpfe).

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
  background-color: #eee;
}
```

#### Ergebnis

{{EmbedLiveSample("Column_and_row_spanning", 650, 200)}}

### Kopfzellen mit anderen Kopfzellen verknüpfen

Für komplexere Beziehungen zwischen Kopfzellen reicht die Verwendung von `th`-Elementen mit dem [`scope`](#scope)-Attribut allein möglicherweise nicht aus, um unterstützende Technologien wie Bildschirmlesegeräte zu unterstützen.

#### HTML

Um die {{Glossary("accessibility", "Barrierefreiheit")}} des [vorherigen Beispiels](#spalten-_und_zeilenüberspannung) zu verbessern und Bildschirmlesegeräten beispielsweise zu ermöglichen, die mit jeder Kopfzelle verknüpften Überschriften vorzulesen, kann das [`headers`](#headers)-Attribut zusammen mit [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id)-Attributen eingeführt werden. Aufgrund der Aufteilung der "Aussprache"-Spalte in zwei Spalten im Beispiel, die eine "zwei Zeilen"-Kopfzeile einführt, sind unterstützende Technologien wie Bildschirmlesegeräte möglicherweise nicht in der Lage zu erkennen, mit welchen zusätzlichen Kopfzellen (`th`-Elementen) die "Aussprache"-Kopfzeile verbunden ist und umgekehrt. Daher wird das [`headers`](#headers)-Attribut auf den Kopfzellen "Aussprache", "IPA" und "Umschrift" verwendet, um die entsprechenden Kopfzellen basierend auf den Werten der eindeutigen IDs aus den hinzugefügten [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id)-Attributen in Form einer durch Leerzeichen getrennten Liste zu verknüpfen.

> [!NOTE]
> Es wird empfohlen, aussagekräftigere und nützlichere Werte für das [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id)-Attribut zu verwenden. Jedes `id` in einem Dokument muss in diesem Dokument eindeutig sein. In diesem Beispiel sind die `id`-Werte Einzelzeichen, um den Fokus auf das Konzept des [`headers`](#headers)-Attributs zu legen.

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

Das [visuelle Ergebnis](#result_2) ist unverändert gegenüber der [vorherigen Beispielstabelle](#spalten-_und_zeilenüberspannung).

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
          >Fließ-Content</a
        >, jedoch ohne Header, Footer, Gliederungselemente oder Überschriftselemente als Nachkommen.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>
        Das Start-Tag ist obligatorisch.<br />Das End-Tag kann weggelassen werden, wenn es direkt von einem <code>&lt;th&gt;</code> oder einem {{HTMLElement("td")}}-Element gefolgt wird oder wenn es keine weiteren Daten in seinem Elternelement gibt.
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

- [Lernen: Grundlagen der HTML-Tabelle](/de/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics)
- {{HTMLElement("caption")}}, {{HTMLElement("col")}}, {{HTMLElement("colgroup")}}, {{HTMLElement("table")}}, {{HTMLElement("tbody")}}, {{HTMLElement("td")}}, {{HTMLElement("tfoot")}}, {{HTMLElement("thead")}}, {{HTMLElement("tr")}}: Weitere tabellenbezogene Elemente
- {{cssxref("background-color")}}: CSS-Eigenschaft zum Festlegen der Hintergrundfarbe jeder Kopfzelle
- {{cssxref("border")}}: CSS-Eigenschaft zur Steuerung der Ränder der Kopfzellen
- {{cssxref("height")}}: CSS-Eigenschaft zur Kontrolle der empfohlenen Höhe der Kopfzelle
- {{cssxref("text-align")}}: CSS-Eigenschaft zur horizontalen Ausrichtung des Inhalts jeder Kopfzelle
- {{cssxref("vertical-align")}}: CSS-Eigenschaft zur vertikalen Ausrichtung des Inhalts jeder Kopfzelle
- {{cssxref("width")}}: CSS-Eigenschaft zur Kontrolle der empfohlenen Breite der Kopfzelle
- {{cssxref(":nth-of-type")}}, {{cssxref(":first-of-type")}}, {{cssxref(":last-of-type")}}: CSS-Pseudoklassen zur Auswahl der gewünschten Kopfzellen
