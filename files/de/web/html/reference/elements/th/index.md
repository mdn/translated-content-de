---
title: "`<th>` HTML-Tabellenkopfelement"
short-title: <th>
slug: Web/HTML/Reference/Elements/th
l10n:
  sourceCommit: 3871111d7fb958626f9d926d8809222d318b8c72
---

Das **`<th>`** [HTML](/de/docs/Web/HTML)-Element definiert eine Zelle als Kopf einer Gruppe von Tabellenzellen und kann als Kind des {{HTMLElement("tr")}}-Elements verwendet werden. Die genaue Natur dieser Gruppe wird durch die Attribute [`scope`](#scope) und [`headers`](#headers) definiert.

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
  - : Eine kurze, abgekürzte Beschreibung des Inhalts der Kopfzelle, die als alternatives Label zur Verwendung der Kopfzelle in anderen Kontexten bereitgestellt wird. Einige Benutzeragenten, wie Bildschirmleseprogramme, können diese Beschreibung vor dem eigentlichen Inhalt präsentieren.
- `colspan`
  - : Ein nicht-negativer Ganzzahlenwert, der angibt, wie viele Spalten die Kopfzelle überspannt oder erweitert. Der Standardwert ist `1`. Werte größer als `1000` werden auf `1000` begrenzt.
- `headers`
  - : Eine Liste von durch Leerzeichen getrennten Zeichenfolgen, die den `id`-Attributen der `<th>`-Elemente entsprechen, die die Köpfe der Kopfzelle bereitstellen.
- `rowspan`
  - : Ein nicht-negativer Ganzzahlenwert, der angibt, wie viele Zeilen die Kopfzelle überspannt oder erweitert. Der Standardwert ist `1`; wenn sein Wert auf `0` gesetzt ist, wird die Kopfzelle bis zum Ende des Tabellen-Gruppierungsabschnitts ({{HTMLElement("thead")}}, {{HTMLElement("tbody")}}, {{HTMLElement("tfoot")}}, auch wenn implizit definiert) erweitert, zu dem das `<th>` gehört. Werte größer als `65534` werden bei `65534` abgeschnitten.
- `scope`
  - : Definiert die Zellen, auf die sich das Kopf-Element (definiert in `<th>`) bezieht. Mögliche {{Glossary("enumerated", "aufgezählte")}} Werte sind:
    - `row`: der Kopf bezieht sich auf alle Zellen der Reihe, zu der er gehört;
    - `col`: der Kopf bezieht sich auf alle Zellen der Spalte, zu der er gehört;
    - `rowgroup`: der Kopf gehört zu einer Zeilengruppe und bezieht sich auf alle deren Zellen;
    - `colgroup`: der Kopf gehört zu einer Spaltengruppe und bezieht sich auf alle deren Zellen.

    Wenn das `scope`-Attribut nicht angegeben ist oder wenn sein Wert nicht `row`, `col`, `rowgroup` oder `colgroup` ist, wählen Browser automatisch die Menge der Zellen aus, auf die sich die Kopfzelle bezieht.

### Veraltete Attribute

Die folgenden Attribute sind veraltet und sollten nicht verwendet werden. Sie sind hier dokumentiert, um beim Aktualisieren bestehenden Codes und aus historischem Interesse zu dienen.

- `align` {{deprecated_inline}}
  - : Gibt die horizontale Ausrichtung der Kopfzelle an. Die möglichen {{Glossary("enumerated", "aufgezählten")}} Werte sind `left`, `center`, `right`, `justify` und `char`. Wenn unterstützt, richtet der `char`-Wert den Textinhalt auf dem durch das [`char`](#char)-Attribut definierten Zeichen und dem durch das [`charoff`](#charoff)-Attribut definierten Offset aus. Verwenden Sie stattdessen die CSS-Eigenschaft {{cssxref("text-align")}}, da dieses Attribut veraltet ist.

- `axis` {{deprecated_inline}}
  - : Enthält eine Liste mit durch Leerzeichen getrennten Zeichenfolgen, die jeweils einem `id`-Attribut einer Gruppe von Zellen entsprechen, auf die sich die Kopfzelle bezieht. Verwenden Sie stattdessen das [`scope`](#scope)-Attribut, da dieses Attribut veraltet ist.

- `bgcolor` {{deprecated_inline}}
  - : Definiert die Hintergrundfarbe der Kopfzelle. Der Wert ist eine HTML-Farbe; entweder ein [6-stelliger Hexadezimal-RGB-Code](/de/docs/Web/CSS/Reference/Values/hex-color), mit einem `#` vorangestellt, oder ein [Farbname](/de/docs/Web/CSS/Reference/Values/named-color). Andere CSS-{{cssxref("&lt;color&gt;")}}-Werte werden nicht unterstützt. Verwenden Sie stattdessen die CSS-Eigenschaft {{cssxref("background-color")}}, da dieses Attribut veraltet ist.

- `char` {{deprecated_inline}}
  - : Führt keine Funktion aus. Ursprünglich war es vorgesehen, die Ausrichtung des Inhalts auf ein Zeichen der Kopfzelle zu spezifizieren. Typische Werte hierfür sind ein Punkt (`.`), wenn versucht wird, Zahlen oder Geldbeträge auszurichten. Wenn [`align`](#align) nicht auf `char` gesetzt ist, wird dieses Attribut ignoriert.

- `charoff` {{deprecated_inline}}
  - : Führt keine Funktion aus. Ursprünglich war es vorgesehen, die Anzahl der Zeichen anzugeben, um welche der Kopfzellen-Inhalt von dem durch das [`char`](#char)-Attribut angegebenen Ausrichtungszeichen versetzt werden soll.

- `height` {{deprecated_inline}}
  - : Definiert eine empfohlene Kopfzellenhöhe. Verwenden Sie stattdessen die CSS-Eigenschaft {{cssxref("height")}}, da dieses Attribut veraltet ist.

- `valign` {{deprecated_inline}}
  - : Gibt die vertikale Ausrichtung der Kopfzelle an. Die möglichen {{Glossary("enumerated", "aufgezählten")}} Werte sind `baseline`, `bottom`, `middle` und `top`. Verwenden Sie stattdessen die CSS-Eigenschaft {{cssxref("vertical-align")}}, da dieses Attribut veraltet ist.

- `width` {{deprecated_inline}}
  - : Definiert eine empfohlene Kopfzellenbreite. Verwenden Sie stattdessen die CSS-Eigenschaft {{cssxref("width")}}, da dieses Attribut veraltet ist.

## Verwendungshinweise

- Das `<th>` darf nur innerhalb eines {{HTMLElement("tr")}}-Elements verwendet werden.
- In einfachen Kontexten ist die Verwendung des Attributs [`scope`](#scope) in Kopfzellen (`<th>`-Elemente) überflüssig, da [`scope`](#scope) abgeleitet wird. Jedoch können bestimmte unterstützende Technologien möglicherweise nicht korrekt ableiten, sodass das Angeben des Headers-Bereichs die Benutzererfahrung verbessern kann.
- Wenn die Attribute [`colspan`](#colspan) und [`rowspan`](#rowspan) verwendet werden, um Kopfzellen über mehrere Spalten und Zeilen zu erstrecken, passen Zellen ohne diese definierten Attribute (mit einem Standardwert von `1`) automatisch in freie verfügbare Räume in der Tabellenstruktur, die 1x1-Zellen überspannen, wie im folgenden Bild dargestellt:

  ![Abbildung, die das Überspannen von Spalten und Zeilen von Tabellenzellen zeigt: Zellen 1, 3 und 4 erstrecken sich über zwei Zeilen; Zelle 2 erstreckt sich über zwei Spalten; Zellen 5 und 6 passen in die verfügbaren Zellen, die die zweite und dritte Spalte in der zweiten Zeile sind](/shared-assets/images/diagrams/html/table/column-row-span.png)

  > [!NOTE]
  > Diese Attribute dürfen nicht verwendet werden, um Zellen zu überlappen.

## Beispiele

Siehe {{HTMLElement("table")}} für ein vollständiges Tabellenbeispiel, das gängige Standards und bewährte Praktiken einführt.

### Grundlegende Spalten- und Zeilenköpfe

Dieses Beispiel verwendet `<th>`-Elemente, um Spalten- und Zeilenköpfe in einer einfachen Tabellenstruktur einzuführen.

#### HTML

Die erste Zeile ({{HTMLElement("tr")}}-Element) enthält die Spaltenköpfe (`<th>`-Elemente), die als "Titel" für die Spalten fungieren, um das Verständnis der Informationen in den Spalten zu erleichtern und die Daten zu identifizieren. Um darauf hinzuweisen, dass sich jeder Spaltenkopf auf alle Zellen der entsprechenden Spalte bezieht, ist das Attribut [`scope`](#scope) auf `col` (Spalte) gesetzt.

Die restlichen Zeilen enthalten die Hauptdaten der Tabelle. Jede dieser Zeilen hat einen Zeilenkopf (`<th>`-Element), das als erste Zelle eingeführt wird. Dies erstellt eine Spalte mit Zeilenköpfen als erste Spalte der Tabelle. Ähnlich wie bei den Spaltenköpfen ist das Attribut [`scope`](#scope) auf `row` gesetzt, um anzugeben, auf welche Zellen sich jeder Zeilenkopf bezieht, die im folgenden Beispiel alle Datensätze ({{HTMLElement("td")}}-Elemente) in jeder `Zeile` sind.

> [!NOTE]
> Normalerweise werden die Gruppierungselemente {{HTMLElement("thead")}} und {{HTMLElement("tbody")}} verwendet, um Zeilen mit Köpfen in die jeweiligen Tabellenkopf- und Tabellenkörperabschnitte zu gruppieren. Diese Elemente sind in diesem Beispiel weggelassen, um die Komplexität zu reduzieren und den Fokus auf die Verwendung von Kopfzellen zu legen.

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

Einige einfache CSS-Stile werden verwendet, um die Tabelle und ihre Zellen zu stylen. Wir verwenden CSS-[Attributselektoren](/de/docs/Web/CSS/Reference/Selectors/Attribute_selectors), um die Kopfzellen basierend auf ihren [`scope`](#scope)-Attributwerten anzusprechen, die Spalten- und Zeilenköpfe (`<th>`-Elemente) hervorzuheben und sie voneinander und von den Datensätzen ({{HTMLElement("td")}}) zu unterscheiden.

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

### Spalten- und Zeilenüberspannung

Dieses Beispiel erweitert und verbessert die grundlegende Tabelle aus dem [vorherigen Beispiel](#grundlegende_spalten-_und_zeilenköpfe) durch Hinzufügen einer zweiten Zeile für zusätzliche Spaltenköpfe.

#### HTML

Eine zusätzliche Tabellenzeile ({{HTMLElement("tr")}}-Element) wird als zweite Kopfzeile der Tabelle mit zwei zusätzlichen Spaltenköpfen (`<th>`-Elemente) hinzugefügt. Auf diese Weise wird die "Aussprache"-Spalte in zwei Spalten unterteilt, eine für die IPA-Notation (International Phonetic Alphabet) und eine für die Neuschreibung (die ursprüngliche Aussprache-Spalte). Die entsprechenden Datensätze ({{HTMLElement("td")}}-Elemente) werden jeder nachfolgenden Zeile hinzugefügt.

Wie in den [Verwendungshinweisen](#verwendungshinweise) gezeigt, können die Attribute [`colspan`](#colspan) und [`rowspan`](#rowspan) für die `<th>`-Elemente verwendet werden, um die Kopfzellen den richtigen Spalten und Zeilen zuzuordnen. Um eine "zwei-zeilige" Kopfzeile in der Tabellenstruktur zu erreichen, werden die ersten beiden Kopfzellen innerhalb des ersten {{HTMLElement("tr")}}-Elements über zwei Zeilen erstreckt. Die dritte Kopfzelle erstreckt sich über zwei Spalten (erstklassig in der ersten Zeile). Diese Anordnung lässt zwei verfügbare Bereiche in den dritten und vierten Spalten in der zweiten Zeile, in denen die beiden Köpfe innerhalb des zweiten {{HTMLElement("tr")}}-Elements automatisch platziert werden, mit dem Standardwert `1` für die Attribute [`colspan`](#colspan) und [`rowspan`](#rowspan).

> [!NOTE]
> Normalerweise werden {{HTMLElement("thead")}} und {{HTMLElement("tbody")}}-Elemente verwendet, um Zeilen mit Köpfen in die jeweiligen Tabellenkopf- und -körperabschnitte zu gruppieren. Dies ist in diesem Beispiel nicht implementiert, um sich auf die Köpfe und Überlagerung zu konzentrieren und die Komplexität des Beispiels zu reduzieren.

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

Das CSS ist unverändert gegenüber dem [vorherigen Beispiel](#grundlegende_spalten-_und_zeilenköpfe).

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

Für komplexere Beziehungen zwischen Kopfzellen reicht es möglicherweise nicht aus, `th`-Elemente allein mit dem Attribut [`scope`](#scope) für unterstützende Technologien, insbesondere Bildschirmleseprogramme, zu verwenden.

#### HTML

Um die {{Glossary("accessibility", "Zugänglichkeit")}} des [vorherigen Beispiels](#spalten-_und_zeilenüberspannung) zu verbessern und Bildschirmleseprogrammen zu ermöglichen, beispielsweise die mit jeder Kopfzelle verbundenen Köpfe zu sprechen, kann das Attribut [`headers`](#headers) zusammen mit [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id)-Attributen eingeführt werden. Aufgrund der Art und Weise, wie in dem Beispiel die "Aussprache"-Spalte in zwei Spalten unterteilt wird, wobei eine "zwei-zeilige" Kopfzeile eingeführt wird, können unterstützende Technologien wie Bildschirmleseprogramme möglicherweise nicht erkennen, mit welchen zusätzlichen Kopfzellen (`th`-Elemente) die Kopfzelle "Aussprache" verbunden ist und umgekehrt. Daher wird das Attribut [`headers`](#headers) auf den Kopfzellen "Aussprache", "IPA" und "Neuschreibung" verwendet, um die zugehörigen Kopfzellen basierend auf den Werten der einzigartigen Kennungen aus den hinzugefügten [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id)-Attributen in Form einer durch Leerzeichen getrennten Liste zu verknüpfen.

> [!NOTE]
> Es wird empfohlen, beschreibendere und nützlichere Werte für das Attribut [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) zu verwenden. Jedes `id` in einem Dokument muss eindeutig für dieses Dokument sein. In diesem Beispiel sind die `id`-Werte einzelne Zeichen, um den Fokus auf das Konzept des Attributs [`headers`](#headers) zu legen.

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

Das [visuelle Ergebnis](#result_2) ist unverändert im Vergleich zur [vorherigen Beispieltabelle](#spalten-_und_zeilenüberspannung).

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Guides/Content_categories">Inhaltskategorien</a>
      </th>
      <td>Keine.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content">Flow-Inhalt</a>, jedoch ohne Kopf-, Fuß-, Gliederungselemente oder Kopf-Inhaltsnachfolger.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>
        Das Start-Tag ist obligatorisch.<br />Das End-Tag kann weggelassen werden, wenn ihm unmittelbar ein <code>&lt;th&gt;</code> oder ein {{HTMLElement("td")}}-Element folgt oder wenn es keine weiteren Daten in seinem Elternelement gibt.
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

- [Lernen: HTML-Tabellen Grundlagen](/de/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics)
- {{HTMLElement("caption")}}, {{HTMLElement("col")}}, {{HTMLElement("colgroup")}}, {{HTMLElement("table")}}, {{HTMLElement("tbody")}}, {{HTMLElement("td")}}, {{HTMLElement("tfoot")}}, {{HTMLElement("thead")}}, {{HTMLElement("tr")}}: Andere tabellenbezogene Elemente
- {{cssxref("background-color")}}: CSS-Eigenschaft, um die Hintergrundfarbe jeder Kopfzelle festzulegen
- {{cssxref("border")}}: CSS-Eigenschaft, um die Ränder von Kopfzellen zu steuern
- {{cssxref("height")}}: CSS-Eigenschaft, um die empfohlene Kopfzellenhöhe zu steuern
- {{cssxref("text-align")}}: CSS-Eigenschaft, um den Inhalt jeder Kopfzelle horizontal auszurichten
- {{cssxref("vertical-align")}}: CSS-Eigenschaft, um den Inhalt jeder Kopfzelle vertikal auszurichten
- {{cssxref("width")}}: CSS-Eigenschaft, um die empfohlene Kopfzellenbreite zu steuern
- {{cssxref(":nth-of-type")}}, {{cssxref(":first-of-type")}}, {{cssxref(":last-of-type")}}: CSS-Pseudoklassen, um die gewünschten Kopfzellen auszuwählen
