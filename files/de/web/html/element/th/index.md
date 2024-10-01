---
title: "<th>: Das Table Header-Element"
slug: Web/HTML/Element/th
l10n:
  sourceCommit: 5bd9fe2b25c6eee2a14d0406ce7116998fa48c13
---

{{HTMLSidebar}}

Das **`<th>`** [HTML](/de/docs/Web/HTML) Element definiert eine Zelle als Überschrift einer Gruppe von Tabellenzellen und kann als Kind des {{HTMLElement("tr")}}-Elements verwendet werden. Die genaue Natur dieser Gruppe wird durch die Attribute [`scope`](#scope) und [`headers`](#headers) definiert.

{{EmbedInteractiveExample("pages/tabbed/th.html","tabbed-taller")}}

## Attribute

Dieses Element umfasst die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- `abbr`
  - : Eine kurze, abgekürzte Beschreibung des Inhalts der Kopfzelle, die als alternatives Label verwendet wird, um die Kopfzelle in anderen Kontexten zu referenzieren. Einige Benutzeragenten, wie beispielsweise Bildschirmleser, können diese Beschreibung vor dem eigentlichen Inhalt präsentieren.
- `colspan`
  - : Ein nicht-negativer Ganzzahlenwert, der angibt, wie viele Spalten die Kopfzelle überspannt oder erweitert. Der Standardwert ist `1`. Benutzeragenten verwerfen Werte höher als 1000 als falsch und setzen solche Werte auf `1` zurück.
- `headers`
  - : Eine Liste von durch Leerzeichen getrennten Zeichenfolgen, die den `id`-Attributen der `<th>`-Elemente entsprechen, die die Kopfzellen für diese Kopfzelle bereitstellen.
- `rowspan`
  - : Ein nicht-negativer Ganzzahlenwert, der angibt, wie viele Zeilen die Kopfzelle überspannt oder erweitert. Der Standardwert ist `1`; wenn der Wert auf `0` gesetzt wird, erstreckt sich die Kopfzelle bis zum Ende des Tabellengruppierungsabschnitts ({{HTMLElement("thead")}}, {{HTMLElement("tbody")}}, {{HTMLElement("tfoot")}}, auch wenn implizit definiert), zu dem das `<th>` gehört. Werte höher als `65534` werden auf `65534` gekürzt.
- `scope`

  - : Definiert die Zellen, auf die sich die im `<th>` definierte Kopfzelle bezieht. Mögliche {{Glossary("enumerated", "enumerierte")}} Werte sind:

    - `row`: Der Kopf bezieht sich auf alle Zellen der Zeile, zu der er gehört;
    - `col`: Der Kopf bezieht sich auf alle Zellen der Spalte, zu der er gehört;
    - `rowgroup`: Der Kopf gehört zu einer Zeilengruppe und bezieht sich auf alle ihre Zellen;
    - `colgroup`: Der Kopf gehört zu einer Spaltengruppe und bezieht sich auf alle ihre Zellen.

    Wenn das `scope`-Attribut nicht angegeben ist oder sein Wert nicht `row`, `col`, `rowgroup` oder `colgroup` ist, wählen Browser automatisch die Menge an Zellen, auf die sich die Kopfzelle bezieht.

### Veraltete Attribute

Die folgenden Attribute sind veraltet und sollten nicht verwendet werden. Sie sind unten dokumentiert, um bestehenden Code zu aktualisieren und aus historischem Interesse.

- `align` {{deprecated_inline}}

  - : Gibt die horizontale Ausrichtung der Kopfzelle an. Mögliche {{Glossary("enumerated", "enumerierte")}} Werte sind `left`, `center`, `right`, `justify` und `char`. Wenn unterstützt, richtet der `char`-Wert den textuellen Inhalt auf dem Zeichen aus, das im [`char`](#char)-Attribut definiert ist, und dem Offset, das durch das [`charoff`](#charoff)-Attribut definiert ist. Verwenden Sie die {{cssxref("text-align")}} CSS-Eigenschaft, da dieses Attribut veraltet ist.

- `axis` {{deprecated_inline}}

  - : Enthält eine Liste von durch Leerzeichen getrennten Zeichenfolgen, die jeweils dem `id`-Attribut einer Gruppe von Zellen entsprechen, auf die sich die Kopfzelle bezieht. Verwenden Sie das [`scope`](#scope)-Attribut stattdessen, da dieses Attribut veraltet ist.

- `bgcolor` {{deprecated_inline}}

  - : Definiert die Hintergrundfarbe der Kopfzelle. Der Wert ist eine HTML-Farbe; entweder ein [6-stelliger hexadezimale RGB-Code](/de/docs/Web/CSS/hex-color), mit einem `#`-Präfix, oder ein [Farbname](/de/docs/Web/CSS/named-color). Andere CSS-{{cssxref("color_value", "&lt;color&gt")}}-Werte werden nicht unterstützt. Verwenden Sie die {{cssxref("background-color")}} CSS-Eigenschaft, da dieses Attribut veraltet ist.

- `char` {{deprecated_inline}}

  - : Tut nichts. Es war ursprünglich gedacht, die Ausrichtung des Inhalts an einem Zeichen der Kopfzelle zu spezifizieren. Typische Werte hierfür sind ein Punkt (`.`), wenn versucht wird, Zahlen oder Geldbeträge auszurichten. Wenn [`align`](#align) nicht auf `char` gesetzt ist, wird dieses Attribut ignoriert.

- `charoff` {{deprecated_inline}}

  - : Tut nichts. Es war ursprünglich gedacht, die Anzahl der Zeichen anzugeben, um den Inhalt der Kopfzelle ab dem Ausrichtungszeichen zu versetzen, das durch das [`char`](#char)-Attribut angegeben ist.

- `height` {{deprecated_inline}}

  - : Definiert eine empfohlene Höhe der Kopfzelle. Verwenden Sie die {{cssxref("height")}} CSS-Eigenschaft, da dieses Attribut veraltet ist.

- `valign` {{deprecated_inline}}

  - : Gibt die vertikale Ausrichtung der Kopfzelle an. Die möglichen {{Glossary("enumerated", "enumerierten")}} Werte sind `baseline`, `bottom`, `middle` und `top`. Verwenden Sie die {{cssxref("vertical-align")}} CSS-Eigenschaft, da dieses Attribut veraltet ist.

- `width` {{deprecated_inline}}

  - : Definiert eine empfohlene Breite der Kopfzelle. Verwenden Sie die {{cssxref("width")}} CSS-Eigenschaft, da dieses Attribut veraltet ist.

## Nutzungshinweise

- Das `<th>` kann nur innerhalb eines {{HTMLElement("tr")}}-Elements verwendet werden.
- In einfachen Kontexten ist die Verwendung des [`scope`](#scope)-Attributs auf Kopfzellen (`<th>`-Elemente) überflüssig, da [`scope`](#scope) impliziert wird. Einige unterstützende Technologien können jedoch möglicherweise keine korrekten Inferenz machen, daher kann die Angabe eines Kopfbereichs das Nutzungserlebnis verbessern.
- Beim Verwenden der Attribute [`colspan`](#colspan) und [`rowspan`](#rowspan), um Kopfzellen über mehrere Spalten und Zeilen zu spannen, werden Zellen ohne diese definierten Attribute (mit einem Standardwert von `1`) automatisch in die freien verfügbaren Räume in der Tabellenstruktur eingefügt, die 1x1 Zellen überspannen, wie in der folgenden Abbildung veranschaulicht:

  ![Illustration, die das Spannen von Spalten und Zeilen von Tabellenzellen demonstriert: Zellen 1, 3 und 4 spannen sich über zwei Zeilen; Zelle 2 spannt sich über zwei Spalten; Zellen 5 und 6 passen in die verfügbaren Zellen, die die zweite und dritte Spalte in der zweiten Zeile sind](column-row-span.png)

  > [!NOTE]
  > Diese Attribute dürfen nicht verwendet werden, um Zellen zu überlappen.

## Beispiele

Siehe {{HTMLElement("table")}} für ein vollständiges Tabellenbeispiel, das gängige Standards und bewährte Praktiken einführt.

### Grundlegende Spalten- und Zeilenüberschriften

Dieses Beispiel verwendet `<th>`-Elemente, um Spalten- und Zeilenüberschriften in einer einfachen Tabellenstruktur einzuführen.

#### HTML

Die erste Zeile ({{HTMLElement("tr")}} Element) enthält die Spaltenüberschriften (`<th>`-Elemente), die als "Titel" für die Spalten fungieren, um das Verständnis der in den Spalten enthaltenen Informationen zu erleichtern und die Daten zu identifizieren. Um anzuzeigen, dass sich jede Spaltenüberschrift auf alle Zellen der entsprechenden Spalte bezieht, wird das Attribut [`scope`](#scope) auf `col` (Spalte) gesetzt.

Die restlichen Zeilen enthalten die Hauptdaten der Tabelle. Jede dieser Zeilen hat eine Zeilenüberschrift (`<th>`-Element), die als erste Zelle eingeführt wird. Dies erstellt eine Spalte mit Zeilenüberschriften als erste Spalte der Tabelle. Ähnlich wie bei den Spaltenüberschriften wird das Attribut [`scope`](#scope) auf `row` gesetzt, um anzugeben, auf welche Zellen sich jede Zeilenüberschrift bezieht, die in dem unten stehenden Beispiel alle Datenzellen ({{HTMLElement("td")}}-Elemente) in jeder `row` sind.

> [!NOTE]
> Normalerweise werden die Gruppierungselemente {{HTMLElement("thead")}} und {{HTMLElement("tbody")}} verwendet, um Zeilen mit Überschriften in die jeweiligen Kopf- und Körperabschnitte der Tabelle zu gruppieren. Diese Elemente wurden in diesem Beispiel weggelassen, um die Komplexität zu reduzieren und sich auf die Verwendung von Kopfzellen zu konzentrieren.

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

Einige grundlegende CSS wird verwendet, um die Tabelle und ihre Zellen zu stylen. Wir verwenden CSS- [Attributselektoren](/de/docs/Web/CSS/Attribute_selectors), um Kopfzellen basierend auf ihren [`scope`](#scope)-Attributwerten zu wählen, Spalten- und Zeilenüberschriften (`<th>`-Elemente) hervorzuheben und sie voneinander und von den Datenzellen ({{HTMLElement("td")}}) zu unterscheiden.

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

### Spalten- und Zeilen-Spannung

Dieses Beispiel erweitert und verbessert die Basis-Tabelle aus dem [vorherigen Beispiel](#grundlegende_spalten-_und_zeilenüberschriften) durch das Hinzufügen einer zweiten Zeile für zusätzliche Spaltenüberschriften.

#### HTML

Eine zusätzliche Tabellenzeile ({{HTMLElement("tr")}}-Element) wird als zweite Kopfzeile der Tabelle mit zwei zusätzlichen Spaltenüberschriften (`<th>`-Elementen) hinzugefügt. Auf diese Weise wird die "Aussprache"-Spalte in zwei Spalten aufgeteilt, eine für die IPA (International Phonetic Alphabet)-Notation und eine für die Umschrift (die ursprüngliche Aussprache-Spalte). Die entsprechenden Datenzellen ({{HTMLElement("td")}}-Elemente) werden zu jeder nachfolgenden Zeile hinzugefügt.

Wie in den [Nutzungshinweisen](#nutzungshinweise) gezeigt, können die Attribute [`colspan`](#colspan) und [`rowspan`](#rowspan) für die `<th>`-Elemente verwendet werden, um die Kopfzellen den richtigen Spalten und Zeilen zuzuweisen. Um eine "zwei Zeilen"-Kopfzeile in der Tabellenstruktur zu erreichen, werden die ersten beiden Kopfzellen innerhalb des ersten {{HTMLElement("tr")}}-Elements über zwei Zeilen gespannt. Die dritte Kopfzelle wird über zwei Spalten hinweg gespannt (bleibt in der ersten Zeile). Dieses Setup lässt zwei verfügbare Bereiche in der dritten und vierten Spalte in der zweiten Zeile, wo die beiden Kopfzellen innerhalb des zweiten {{HTMLElement("tr")}}-Elements automatisch platziert werden, wobei der Standardwert `1` für die Attribute [`colspan`](#colspan) und [`rowspan`](#rowspan) gilt.

> [!NOTE]
> Normalerweise werden {{HTMLElement("thead")}}- und {{HTMLElement("tbody")}}-Elemente verwendet, um Zeilen mit Überschriften in die jeweiligen Kopf- und Körperabschnitte der Tabelle zu gruppieren. Dies wird in diesem Beispiel nicht implementiert, um sich auf die Kopfzellen und die Spannungsweise zu konzentrieren und die Komplexität des Beispiels zu reduzieren.

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

Das CSS bleibt unverändert vom [vorherigen Beispiel](#grundlegende_spalten-_und_zeilenüberschriften).

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

Für komplexere Beziehungen zwischen Kopfzellen kann die alleinige Verwendung von `th`-Elementen mit dem [`scope`](#scope)-Attribut für unterstützende Technologien, insbesondere Bildschirmleser, möglicherweise nicht ausreichend sein.

#### HTML

Um die {{Glossary("accessibility", "Barrierefreiheit")}} des [vorherigen Beispiels](#spalten-_und_zeilen-spannung) zu verbessern und beispielsweise Bildschirmlesern zu ermöglichen, die mit jeder Kopfzelle assoziierten Überschriften anzuzeigen, kann das Attribut [`headers`](#headers) zusammen mit [`id`](/de/docs/Web/HTML/Global_attributes/id)-Attributen eingeführt werden. Aufgrund der Art und Weise, wie die "Aussprache"-Spalte in zwei Spalten in dem Beispiel aufgeteilt ist, wodurch eine "zwei-zeilige" Kopfzeile entsteht, können unterstützende Technologien wie Bildschirmleser möglicherweise nicht identifizieren, mit welchen zusätzlichen Kopfzellen (`th`-Elementen) die "Aussprache"-Kopfzelle in Beziehung steht und umgekehrt. Daher wird das Attribut [`headers`](#headers) auf der "Aussprache", "IPA" und "Respelling"-Kopfzelle verwendet, um die zugehörigen Kopfzellen basierend auf den Werten der eindeutigen Kennungen aus den hinzugefügten [`id`](/de/docs/Web/HTML/Global_attributes/id)-Attributen in Form einer durch Leerzeichen getrennten Liste zu verknüpfen.

> [!NOTE]
> Es wird empfohlen, beschreibendere und nützlichere Werte für das [`id`](/de/docs/Web/HTML/Global_attributes/id)-Attribut zu verwenden. Jede `id` in einem Dokument muss eindeutig für dieses Dokument sein. In diesem Beispiel sind die `id`-Werte einzelne Zeichen, um den Fokus auf das Konzept des [`headers`](#headers)-Attributs zu behalten.

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

Das [visuelle Ergebnis](#result_2) bleibt unverändert von der [vorherigen Tabellenausgabe](#spalten-_und_zeilen-spannung).

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Content_categories"
          >Inhaltskategorien</a
        >
      </th>
      <td>Keine.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#flow_content"
          >Flussinhalt</a
        >, jedoch ohne Kopf-, Fuß-, Gliederungs- oder Überschrifteninhalt Nachkommen.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>
        Der Start-Tag ist obligatorisch.<br />Der End-Tag kann ausgelassen werden, wenn er unmittelbar von einem <code>&lt;th&gt;</code>- oder
        {{HTMLElement("td")}}-Element gefolgt wird oder wenn es keine weiteren Daten in seinem übergeordneten Element gibt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>Ein {{HTMLElement("tr")}}-Element.</td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
      <td>
        <a href="/de/docs/Web/Accessibility/ARIA/Roles/columnheader_role"><code>columnheader</code></a> oder <a href="/de/docs/Web/Accessibility/ARIA/Roles/rowheader_role"><code>rowheader</code></a>
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

- [Lernen: HTML-Tabellen](/de/docs/Learn/HTML/Tables)
- {{HTMLElement("caption")}}, {{HTMLElement("col")}}, {{HTMLElement("colgroup")}}, {{HTMLElement("table")}}, {{HTMLElement("tbody")}}, {{HTMLElement("td")}}, {{HTMLElement("tfoot")}}, {{HTMLElement("thead")}}, {{HTMLElement("tr")}}: Andere tabellenbezogene Elemente
- {{cssxref("background-color")}}: CSS-Eigenschaft zum Setzen der Hintergrundfarbe jeder Kopfzelle
- {{cssxref("border")}}: CSS-Eigenschaft zur Steuerung der Ränder von Kopfzellen
- {{cssxref("height")}}: CSS-Eigenschaft zur Steuerung der empfohlenen Höhe der Kopfzelle
- {{cssxref("text-align")}}: CSS-Eigenschaft zur horizontalen Ausrichtung des Inhalts jeder Kopfzelle
- {{cssxref("vertical-align")}}: CSS-Eigenschaft zur vertikalen Ausrichtung des Inhalts jeder Kopfzelle
- {{cssxref("width")}}: CSS-Eigenschaft zur Steuerung der empfohlenen Breite der Kopfzelle
- {{cssxref(":nth-of-type")}}, {{cssxref(":first-of-type")}}, {{cssxref(":last-of-type")}}: CSS-Pseudoklassen, um die gewünschten Kopfzellen auszuwählen
