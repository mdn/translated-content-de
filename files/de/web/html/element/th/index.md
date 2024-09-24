---
title: "<th>: Das Tabellenkopf-Element"
slug: Web/HTML/Element/th
l10n:
  sourceCommit: 9231a7046973685f4600e1891fa644ecce41ef3b
---

{{HTMLSidebar}}

Das **`<th>`**-[HTML](/de/docs/Web/HTML)-Element definiert eine Zelle als Kopf einer Gruppe von Tabellenzellen und kann als Kind des {{HTMLElement("tr")}}-Elements verwendet werden. Die genaue Beschaffenheit dieser Gruppe wird durch die Attribute [`scope`](#scope) und [`headers`](#headers) bestimmt.

{{EmbedInteractiveExample("pages/tabbed/th.html","tabbed-taller")}}

## Attribute

Dieses Element enthält die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- `abbr`
  - : Eine kurze, abgekürzte Beschreibung des Inhalts der Kopfzelle, die als alternatives Label dient, wenn auf die Kopfzelle in anderen Kontexten verwiesen wird. Einige User-Agents, wie zum Beispiel Sprachsynthesizer, könnten diese Beschreibung vor dem eigentlichen Inhalt präsentieren.
- `colspan`
  - : Ein nicht-negativer ganzzahliger Wert, der angibt, wie viele Spalten die Kopfzelle übergreift. Der Standardwert ist `1`. User Agents ignorieren Werte höher als 1000 als fehlerhaft und setzen solche Werte auf `1` zurück.
- `headers`
  - : Eine Liste von durch Leerzeichen getrennten Zeichenfolgen, die den `id`-Attributen der `<th>`-Elemente entsprechen, die die Kopfzellen für diese Kopfzelle liefern.
- `rowspan`
  - : Ein nicht-negativer ganzzahliger Wert, der angibt, wie viele Zeilen die Kopfzelle übergreift. Der Standardwert ist `1`; wenn sein Wert auf `0` gesetzt wird, erstreckt sich die Kopfzelle bis zum Ende des Tabellenabschnitts ({{HTMLElement("thead")}}, {{HTMLElement("tbody")}}, {{HTMLElement("tfoot")}}, auch wenn implizit definiert), zu dem das `<th>` gehört. Werte höher als `65534` werden auf `65534` gekappt.
- `scope`

  - : Definiert die Zellen, auf die sich der Header (definiert im `<th>`-Element) bezieht. Mögliche {{Glossary("enumerated", "enumerierte")}} Werte sind:

    - `row`: Der Header bezieht sich auf alle Zellen der Zeile, zu der er gehört;
    - `col`: Der Header bezieht sich auf alle Zellen der Spalte, zu der er gehört;
    - `rowgroup`: Der Header gehört zu einer Zeilengruppe und bezieht sich auf alle ihre Zellen;
    - `colgroup`: Der Header gehört zu einer Spaltengruppe und bezieht sich auf alle ihre Zellen.

    Wenn das `scope`-Attribut nicht angegeben ist oder sein Wert nicht `row`, `col`, `rowgroup` oder `colgroup` ist, wählen Browser automatisch die Menge der Zellen aus, auf die sich die Kopfzelle bezieht.

### Veraltete Attribute

Die folgenden Attribute sind veraltet und sollten nicht verwendet werden. Sie sind hier zu Referenzzwecken dokumentiert, um vorhandenen Code zu aktualisieren und aus historischem Interesse.

- `align` {{deprecated_inline}}

  - : Gibt die horizontale Ausrichtung der Kopfzelle an. Die möglichen {{Glossary("enumerated")}} Werte sind `left`, `center`, `right`, `justify` und `char`. Wenn unterstützt, richtet der Wert `char` den textuellen Inhalt am Zeichen aus, das im [`char`](#char)-Attribut definiert wird, und dem Offset, das durch das [`charoff`](#charoff)-Attribut definiert wird. Verwenden Sie stattdessen die CSS-Eigenschaft {{cssxref("text-align")}}, da dieses Attribut veraltet ist.

- `axis` {{deprecated_inline}}

  - : Enthält eine Liste von durch Leerzeichen getrennten Zeichenfolgen, die jeweils dem `id`-Attribut einer Gruppe von Zellen entsprechen, auf die sich die Kopfzelle bezieht. Verwenden Sie stattdessen das [`scope`](#scope)-Attribut, da dieses Attribut veraltet ist.

- `bgcolor` {{deprecated_inline}}

  - : Definiert die Hintergrundfarbe der Kopfzelle. Der Wert ist eine HTML-Farbe; entweder ein [6-stelliger hexadezimaler RGB-Code](/de/docs/Web/CSS/hex-color) mit einem `#`-Präfix oder ein [Farbname](/de/docs/Web/CSS/named-color). Andere CSS {{cssxref("color_value", "&lt;color&gt")}}-Werte werden nicht unterstützt. Verwenden Sie die CSS-Eigenschaft {{cssxref("background-color")}}, da dieses Attribut veraltet ist.

- `char` {{deprecated_inline}}

  - : Tut nichts. Es war ursprünglich vorgesehen, um die Ausrichtung des Inhalts auf ein Zeichen der Kopfzelle zu spezifizieren. Typische Werte hierfür sind ein Punkt (`.`), wenn versucht wird, Zahlen oder Geldbeträge auszurichten. Wenn [`align`](#align) nicht auf `char` gesetzt ist, wird dieses Attribut ignoriert.

- `charoff` {{deprecated_inline}}

  - : Tut nichts. Es war ursprünglich vorgesehen, um die Anzahl der Zeichen anzugeben, die der Inhalt der Kopfzelle von dem durch das [`char`](#char)-Attribut festgelegten Zeichen versetzt ist.

- `height` {{deprecated_inline}}

  - : Definiert eine empfohlene Kopfzellhöhe. Verwenden Sie die CSS-Eigenschaft {{cssxref("height")}}, da dieses Attribut veraltet ist.

- `valign` {{deprecated_inline}}

  - : Gibt die vertikale Ausrichtung der Kopfzelle an. Die möglichen {{Glossary("enumerated")}} Werte sind `baseline`, `bottom`, `middle` und `top`. Verwenden Sie die CSS-Eigenschaft {{cssxref("vertical-align")}}, da dieses Attribut veraltet ist.

- `width` {{deprecated_inline}}

  - : Definiert eine empfohlene Kopfzellenbreite. Verwenden Sie die CSS-Eigenschaft {{cssxref("width")}}, da dieses Attribut veraltet ist.

## Nutzungshinweise

- Das `<th>` darf nur innerhalb eines {{HTMLElement("tr")}}-Elements verwendet werden.
- In einfachen Kontexten ist die Verwendung des [`scope`](#scope)-Attributs bei Kopfzellen (`<th>`-Elementen) redundant, da [`scope`](#scope) angenommen wird. Bestimmte unterstützende Technologien könnten jedoch die Annahme nicht korrekt vornehmen, sodass die Angabe des Kopfbereichs die Benutzererfahrung verbessern könnte.
- Bei der Verwendung der Attribute [`colspan`](#colspan) und [`rowspan`](#rowspan), um Kopfzellen über mehrere Spalten und Zeilen auszudehnen, werden Zellen ohne diese Attribute (mit einem Standardwert von `1`) automatisch in verfügbare freie Plätze in der Tabellenstruktur eingefügt, die 1x1 Zellen umfassen, wie in der folgenden Abbildung dargestellt:

  ![Illustration der Spalten- und Zeilenüberlappung von Tabellenzellen: Zellen 1, 3 und 4, die sich über zwei Zeilen erstrecken; Zelle 2, die sich über zwei Spalten erstreckt; Zellen 5 und 6, die in die verfügbaren Zellen eingefügt werden, die sich in der zweiten und dritten Spalte in der zweiten Zeile befinden](column-row-span.png)

  > [!NOTE]
  > Diese Attribute dürfen nicht verwendet werden, um Zellen zu überlappen.

## Beispiele

Siehe {{HTMLElement("table")}} für ein vollständiges Tabellenbeispiel unter Vorstellung gängiger Standards und bewährter Praktiken.

### Grundlegende Spalten- und Zeilenüberschriften

Dieses Beispiel verwendet `<th>`-Elemente, um Spalten- und Zeilenüberschriften in einer einfachen Tabellenstruktur zu präsentieren.

#### HTML

Die erste Zeile ({{HTMLElement("tr")}}-Element) enthält die Spaltenüberschriften (`<th>`-Elemente), die als "Titel" der Spalten fungieren, um das Verständnis der Informationen in den Spalten zu erleichtern und die Daten schnell zu identifizieren. Um anzugeben, dass sich jede Spaltenüberschrift auf alle Zellen in der entsprechenden Spalte bezieht, ist das [`scope`](#scope)-Attribut auf `col` (Spalte) gesetzt.

Die verbleibenden Zeilen enthalten die Hauptdaten der Tabelle. Jede dieser Zeilen hat eine Zeilenüberschrift (`<th>`-Element), die als erste Zelle eingeführt wird. Dies erstellt eine Spalte mit Zeilenüberschriften als erste Spalte der Tabelle. Ähnlich den Spaltenüberschriften ist das [`scope`](#scope)-Attribut auf `row` gesetzt, um anzugeben, auf welche Zellen sich jede Zeilenüberschrift bezieht, was im untenstehenden Beispiel alle Datensätze ({{HTMLElement("td")}}-Elemente) in jeder Zeile sind.

> [!NOTE]
> Normalerweise werden die Gruppierungselemente {{HTMLElement("thead")}} und {{HTMLElement("tbody")}} verwendet, um Zeilen mit Überschriften in die entsprechenden Tabellenkopf- und -körperabschnitte zu gruppieren. Diese Elemente sind in diesem Beispiel weggelassen, um die Komplexität zu reduzieren und den Fokus auf die Verwendung von Kopfzellen zu legen.

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

Ein einfaches CSS wird verwendet, um die Tabelle und ihre Zellen zu gestalten. Wir verwenden CSS-[Attributselektoren](/de/docs/Web/CSS/Attribute_selectors), um Kopfzellen basierend auf ihren [`scope`](#scope)-Attributwerten zu lokalisieren, Spalten- und Zeilenüberschriften (`<th>`-Elemente) hervorzuheben und sie voneinander und von den Datenzellen ({{HTMLElement("td")}}) zu unterscheiden.

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

Dieses Beispiel erweitert und verbessert die grundlegende Tabelle aus dem [vorherigen Beispiel](#grundlegende_spalten-_und_zeilenüberschriften) durch das Hinzufügen einer zweiten Zeile für zusätzliche Spaltenüberschriften.

#### HTML

Eine zusätzliche Tabellenzeile ({{HTMLElement("tr")}}-Element) wird als zweite Kopfzeile der Tabelle hinzugefügt, mit zwei zusätzlichen Spaltenüberschriften (`<th>`-Elemente). Auf diese Weise wird die "Pronunciation"-Spalte in zwei Spalten aufgeteilt, eine für die IPA (International Phonetic Alphabet) Notation und eine für die Umschreibung (die ursprüngliche Aussprache-Spalte). Die entsprechenden Datenzellen ({{HTMLElement("td")}}-Elemente) werden in jeder nachfolgenden Zeile hinzugefügt.

Wie in den [Nutzungshinweisen](#nutzungshinweise) gezeigt, können die Attribute [`colspan`](#colspan) und [`rowspan`](#rowspan) für die `<th>`-Elemente verwendet werden, um die Kopfzellen den richtigen Spalten und Zeilen zuzuweisen. Um eine "zweizeilige" Kopfzeile in der Tabellenstruktur zu erhalten, werden die ersten beiden Kopfzellen innerhalb des ersten {{HTMLElement("tr")}}-Elements über zwei Zeilen erstreckt. Die dritte Kopfzelle wird über zwei Spalten breit erstreckt (bleibt in der ersten Zeile). Diese Anordnung lässt zwei verfügbare Bereiche in der dritten und vierten Spalte in der zweiten Zeile, wo die beiden Kopfzellen im zweiten {{HTMLElement("tr")}}-Element automatisch platziert werden, wobei der Standardwert für die Attribute [`colspan`](#colspan) und [`rowspan`](#rowspan) `1` ist.

> [!NOTE]
> Normalerweise werden die Elemente {{HTMLElement("thead")}} und {{HTMLElement("tbody")}} verwendet, um Zeilen mit Überschriften in die entsprechenden Tabellenkopf- und -körperabschnitte zu gruppieren. Dies wird in diesem Beispiel nicht implementiert, um sich auf die Kopfzeilen und deren Übergriffe zu konzentrieren und die Komplexität des Beispiels zu reduzieren.

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

Das CSS bleibt unverändert zum [vorherigen Beispiel](#grundlegende_spalten-_und_zeilenüberschriften).

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

### Headerzellen mit anderen Headerzellen verknüpfen

Für komplexere Beziehungen zwischen Headerzellen mag die Verwendung von `th`-Elementen mit dem [`scope`](#scope)-Attribut allein für Hilfstechnologien, insbesondere Bildschirmleser, nicht ausreichen.

#### HTML

Um die {{Glossary("accessibility", "Barrierefreiheit")}} des [vorherigen Beispiels](#spalten-_und_zeilenübergreifung) zu verbessern und damit Bildschirmleser beispielsweise die mit jeder Kopfzelle verbundenen Überschriften aussprechen können, kann das [`headers`](#headers)-Attribut zusammen mit dem [`id`](/de/docs/Web/HTML/Global_attributes/id)-Attribut eingeführt werden. Aufgrund der Art und Weise, wie die "Pronunciation"-Spalte in zwei Spalten im Beispiel aufgeteilt ist, und eine "zweizeilige" Kopfzeile eingeführt wird, können Hilfstechnologien wie Bildschirmleser möglicherweise nicht erkennen, mit welchen zusätzlichen Kopfzellen (`th`-Elementen) die "Pronunciation"-Kopfzelle verbunden ist und umgekehrt. Daher wird das [`headers`](#headers)-Attribut auf den Kopfzellen "Pronunciation", "IPA" und "Respelling" verwendet, um die zugehörigen Kopfzellen basierend auf den Werten der einzigartigen Kennungen der hinzugefügten [`id`](/de/docs/Web/HTML/Global_attributes/id)-Attribute in Form einer durch Leerzeichen getrennten Liste zu verknüpfen.

> [!NOTE]
> Es wird empfohlen, aussagekräftigere und nützlichere Werte für das [`id`](/de/docs/Web/HTML/Global_attributes/id)-Attribut zu verwenden. Jedes `id` in einem Dokument muss eindeutig für dieses Dokument sein. In diesem Beispiel sind die `id`-Werte Ein-Zeichen-Zeichenfolgen, um den Fokus auf das Konzept des [`headers`](#headers)-Attributs zu richten.

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

Das [visuelle Ergebnis](#result_2) ist unverändert zum [vorherigen Beispieltable](#spalten-_und_zeilenübergreifung).

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
      <th scope="row">Zulässiger Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#flow_content"
          >Fließender Inhalt</a
        >, aber ohne Kopf-, Fuß-, Abschnitts- oder Überschriftennachkommen.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>
        Das Start-Tag ist obligatorisch.<br />Das End-Tag kann weggelassen werden, wenn es unmittelbar durch ein <code>&lt;th&gt;</code>- oder {{HTMLElement("td")}}-Element folgt oder wenn keine weiteren Daten im übergeordneten Element vorhanden sind.
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässige Eltern</th>
      <td>Ein {{HTMLElement("tr")}}-Element.</td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <a href="/de/docs/Web/Accessibility/ARIA/Roles/columnheader_role"><code>columnheader</code></a> oder <a href="/de/docs/Web/Accessibility/ARIA/Roles/rowheader_role"><code>rowheader</code></a>
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässige ARIA-Rollen</th>
      <td>Beliebige</td>
    </tr>
    <tr>
      <th scope="row">DOM-Schnittstelle</th>
      <td>{{domxref("HTMLTableCellElement")}}</td>
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
- {{cssxref("background-color")}}: CSS-Eigenschaft, um die Hintergrundfarbe jeder Kopfzelle festzulegen
- {{cssxref("border")}}: CSS-Eigenschaft zur Steuerung der Ränder von Kopfzellen
- {{cssxref("height")}}: CSS-Eigenschaft zur Steuerung der empfohlenen Kopfzellhöhe
- {{cssxref("text-align")}}: CSS-Eigenschaft zum horizontalen Ausrichten des Inhalts jeder Kopfzelle
- {{cssxref("vertical-align")}}: CSS-Eigenschaft zum vertikalen Ausrichten des Inhalts jeder Kopfzelle
- {{cssxref("width")}}: CSS-Eigenschaft zur Steuerung der empfohlenen Kopfzellenbreite
- {{cssxref(":nth-of-type")}}, {{cssxref(":first-of-type")}}, {{cssxref(":last-of-type")}}: CSS-Pseudoklassen zur Auswahl der gewünschten Kopfzellen
