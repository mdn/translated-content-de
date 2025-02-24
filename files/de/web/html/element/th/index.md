---
title: "<th>: Das Tabellenkopf-Element"
slug: Web/HTML/Element/th
l10n:
  sourceCommit: 8b02826c79b090b5af0d68ae1ef39f932a66a7f1
---

{{HTMLSidebar}}

Das **`<th>`** [HTML](/de/docs/Web/HTML)-Element definiert eine Zelle als Header einer Gruppe von Tabellenzellen und kann als Kind-Element des {{HTMLElement("tr")}}-Elements verwendet werden. Die genaue Art dieser Gruppe wird durch die Attribute [`scope`](#scope) und [`headers`](#headers) definiert.

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

Dieses Element beinhaltet die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- `abbr`
  - : Eine kurze, abgekürzte Beschreibung des Inhalts der Kopfzelle, die als alternatives Label bereitgestellt wird, um die Kopfzelle in anderen Kontexten zu referenzieren. Einige Benutzeragenten, wie Sprachausgaben, präsentieren diese Beschreibung möglicherweise vor dem eigentlichen Inhalt.
- `colspan`
  - : Ein nicht-negativer Ganzzahlenwert, der angibt, wie viele Spalten die Kopfzelle überspannt oder erweitert. Der Standardwert ist `1`. Benutzeragenten ignorieren Werte über 1000 als fehlerhaft und setzen solche Werte standardmäßig auf `1`.
- `headers`
  - : Eine Liste von durch Leerzeichen getrennten Zeichenfolgen, die den `id`-Attributen der `<th>`-Elemente entsprechen, die die Header für diese Kopfzelle bereitstellen.
- `rowspan`
  - : Ein nicht-negativer Ganzzahlenwert, der angibt, wie viele Zeilen die Kopfzelle überspannt oder erweitert. Der Standardwert ist `1`; Wenn sein Wert auf `0` gesetzt ist, erstreckt sich die Kopfzelle bis zum Ende des Tischabschnitts ({{HTMLElement("thead")}}, {{HTMLElement("tbody")}}, {{HTMLElement("tfoot")}}, auch wenn implizit definiert), zu dem das `<th>` gehört. Werte über `65534` werden auf `65534` begrenzt.
- `scope`

  - : Definiert die Zellen, auf die sich der Header (definiert im `<th>`-Element) bezieht. Mögliche {{Glossary("enumerated", "enumerierte")}} Werte sind:

    - `row`: der Header bezieht sich auf alle Zellen der Zeile, zu der er gehört;
    - `col`: der Header bezieht sich auf alle Zellen der Spalte, zu der er gehört;
    - `rowgroup`: der Header gehört zu einer Rowgroup und bezieht sich auf alle seine Zellen;
    - `colgroup`: der Header gehört zu einem Colgroup und bezieht sich auf alle seine Zellen.

    Wenn das `scope`-Attribut nicht angegeben ist oder sein Wert nicht `row`, `col`, `rowgroup` oder `colgroup` ist, wählen Browser automatisch den Satz von Zellen aus, auf die sich die Kopfzelle bezieht.

### Veraltete Attribute

Die folgenden Attribute sind veraltet und sollten nicht verwendet werden. Sie sind unten dokumentiert, um vorhandenen Code zu aktualisieren und aus historischem Interesse.

- `align` {{deprecated_inline}}

  - : Gibt die horizontale Ausrichtung der Kopfzelle an. Die möglichen {{Glossary("enumerated", "enumerierten")}} Werte sind `left`, `center`, `right`, `justify` und `char`. Wenn unterstützt, richtet der `char`-Wert den Textinhalt an dem im [`char`](#char)-Attribut definierten Zeichen und dem im [`charoff`](#charoff)-Attribut definierten Versatz aus. Verwenden Sie stattdessen die {{cssxref("text-align")}} CSS-Eigenschaft, da dieses Attribut veraltet ist.

- `axis` {{deprecated_inline}}

  - : Enthält eine Liste von durch Leerzeichen getrennten Zeichenfolgen, von denen jede dem `id`-Attribut einer Gruppe von Zellen entspricht, auf die sich die Kopfzelle bezieht. Verwenden Sie stattdessen das [`scope`](#scope)-Attribut, da dieses Attribut veraltet ist.

- `bgcolor` {{deprecated_inline}}

  - : Definiert die Hintergrundfarbe der Kopfzelle. Der Wert ist eine HTML-Farbe; entweder ein [6-stelliger hexadezimaler RGB-Code](/de/docs/Web/CSS/hex-color), der durch ein `#` vorangestellt wird, oder ein [Farb-Keyword](/de/docs/Web/CSS/named-color). Andere CSS-{{cssxref("color_value", "&lt;color&gt")}}-Werte werden nicht unterstützt. Verwenden Sie stattdessen die {{cssxref("background-color")}} CSS-Eigenschaft, da dieses Attribut veraltet ist.

- `char` {{deprecated_inline}}

  - : Hat keine Funktion. Es war ursprünglich dazu gedacht, den Inhalt der Kopfzelle an einem Zeichen auszurichten. Typische Werte dafür sind ein Punkt (`.`), wenn versucht wird, Zahlen oder Währungswerte auszurichten. Wenn [`align`](#align) nicht auf `char` gesetzt ist, wird dieses Attribut ignoriert.

- `charoff` {{deprecated_inline}}

  - : Hat keine Funktion. Es war ursprünglich dazu gedacht, die Anzahl der Zeichen abzugeben, um den Inhalt der Kopfzelle vom Ausrichtungszeichen abzusetzen, das durch das [`char`](#char)-Attribut spezifiziert wurde.

- `height` {{deprecated_inline}}

  - : Definiert eine empfohlene Höhe für die Kopfzelle. Verwenden Sie stattdessen die {{cssxref("height")}} CSS-Eigenschaft, da dieses Attribut veraltet ist.

- `valign` {{deprecated_inline}}

  - : Gibt die vertikale Ausrichtung der Kopfzelle an. Die möglichen {{Glossary("enumerated", "enumerierten")}} Werte sind `baseline`, `bottom`, `middle` und `top`. Verwenden Sie stattdessen die {{cssxref("vertical-align")}} CSS-Eigenschaft, da dieses Attribut veraltet ist.

- `width` {{deprecated_inline}}

  - : Definiert eine empfohlene Breite für die Kopfzelle. Verwenden Sie stattdessen die {{cssxref("width")}} CSS-Eigenschaft, da dieses Attribut veraltet ist.

## Anwendungsnotizen

- Das `<th>`-Element darf nur innerhalb eines {{HTMLElement("tr")}}-Elements verwendet werden.
- In einfachen Kontexten ist die Verwendung des [`scope`](#scope)-Attributs in Kopfzellen (`<th>`-Elemente) redundant, da [`scope`](#scope) abgeleitet wird. Jedoch können bestimmte assistive Technologien die Ableitung nicht korrekt ausführen, daher kann die Angabe von Headerbereich die Benutzererfahrung verbessern.
- Bei Verwendung der Attribute [`colspan`](#colspan) und [`rowspan`](#rowspan) zum Überspannen von Kopfzellen über mehrere Spalten und Zeilen, werden Zellen ohne diese definierten Attribute (mit einem Standardwert von `1`) automatisch in freie verfügbare Bereiche in der Tabellenstruktur eingefügt, die 1x1-Zellen umfassen, wie in der folgenden Abbildung dargestellt:

  ![Abbildung, die das Spalten- und Zeilenüberspannen von Tabellenzellen zeigt: Zellen 1, 3 und 4 erstrecken sich über zwei Zeilen; Zelle 2 erstreckt sich über zwei Spalten; Zellen 5 und 6 passen in die verfügbaren Zellen, die die zweite und dritte Spalte in der zweiten Zeile sind](column-row-span.png)

  > [!NOTE]
  > Diese Attribute dürfen nicht verwendet werden, um Zellen zu überlappen.

## Beispiele

Sehen Sie sich {{HTMLElement("table")}} für ein vollständiges Tabellenbeispiel an, das gängige Standards und Best Practices einführt.

### Grundlegende Spalten- und Zeilen-Header

Dieses Beispiel verwendet `<th>`-Elemente, um Spalten- und Zeilen-Header in einer grundlegenden Tabellenstruktur einzuführen.

#### HTML

Die erste Zeile ({{HTMLElement("tr")}}-Element) enthält die Spalten-Header (`<th>`-Elemente), die als "Titel" für die Spalten dienen, um das Verständnis der Informationen in den Spalten zu erleichtern und die Daten zu identifizieren. Um anzuzeigen, dass sich jeder Spalten-Header auf alle Zellen in der entsprechenden Spalte bezieht, wird das [`scope`](#scope)-Attribut auf `col` (Spalte) gesetzt.

Die restlichen Zeilen enthalten die Hauptdaten der Tabelle. Jede dieser Zeilen hat einen Zeilen-Header (`<th>`-Element), der als erste Zelle eingeführt wird. Dies erstellt eine Spalte mit Zeilen-Headern als die erste Spalte der Tabelle. Ähnlich wie bei den Spalten-Headern wird das [`scope`](#scope)-Attribut auf `row` gesetzt, um festzulegen, auf welche Zellen sich jeder Zeilen-Header bezieht, was im untenstehenden Beispiel alle Datenzellen ({{HTMLElement("td")}}-Elemente) in jeder Zeile sind.

> [!NOTE]
> Normalerweise werden die Gruppierungselemente {{HTMLElement("thead")}} und {{HTMLElement("tbody")}} verwendet, um Zeilen mit Headern in die jeweiligen Tabellenkopf- und Tabellenkorperabschnitte zu gruppieren. Diese Elemente sind in diesem Beispiel weggelassen, um die Komplexität zu reduzieren und den Fokus auf die Verwendung der Kopfzellen zu ermöglichen.

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

Einige grundlegende CSS-Einstellungen werden verwendet, um die Tabelle und ihre Zellen zu stylen. Wir verwenden CSS [Attributselektoren](/de/docs/Web/CSS/Attribute_selectors), um Kopfzellen basierend auf ihren [`scope`](#scope)-Attributwerten zu selektieren und Spalten- und Zeilen-Header (`<th>`-Elemente) hervorzuheben und sie voneinander und von den Datenzellen ({{HTMLElement("td")}}) zu unterscheiden.

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

Dieses Beispiel erweitert und verbessert die grundlegende Tabelle aus dem [vorherigen Beispiel](#grundlegende_spalten-_und_zeilen-header) durch das Hinzufügen einer zweiten Zeile für zusätzliche Spalten-Header.

#### HTML

Eine zusätzliche Tabellenzeile ({{HTMLElement("tr")}}-Element) wird als zweite Kopfzeile der Tabelle hinzugefügt, mit zwei zusätzlichen Spalten-Headern (`<th>`-Elemente). Auf diese Weise wird die "Aussprache"-Spalte in zwei Spalten aufgeteilt, eine für die IPA (International Phonetic Alphabet)-Notation und eine für die Umschrift (die ursprüngliche Aussprache-Spalte). Die entsprechenden Datenzellen ({{HTMLElement("td")}}-Elemente) werden jeder nachfolgenden Zeile hinzugefügt.

Wie in den [Anwendungsnotizen](#anwendungsnotizen) gezeigt, können die Attribute [`colspan`](#colspan) und [`rowspan`](#rowspan) für die `<th>`-Elemente verwendet werden, um die Kopfzellen den richtigen Spalten und Zeilen zuzuordnen. Um in der Tabellenstruktur einen "two-row" Header zu erreichen, werden die ersten beiden Kopfzellen innerhalb des ersten {{HTMLElement("tr")}}-Elements über zwei Zeilen hinweg verteilt. Die dritte Kopfzelle wird über zwei Spalten in der ersten Zeile verteilt. Diese Einrichtung hinterlässt zwei verfügbare Bereiche in den dritten und vierten Spalten in der zweiten Zeile, wo die zwei Header innerhalb des zweiten {{HTMLElement("tr")}}-Elements automatisch platziert werden, mit dem Standardwert `1` für die Attribute [`colspan`](#colspan) und [`rowspan`](#rowspan).

> [!NOTE]
> Normalerweise werden die Elemente {{HTMLElement("thead")}} und {{HTMLElement("tbody")}} verwendet, um Zeilen mit Headern in die jeweiligen Tabellenkopf- und Tabellenkörperabschnitte zu gruppieren. Dies wird in diesem Beispiel nicht implementiert, um sich auf die Header und deren Überspannung zu konzentrieren und die Komplexität des Beispiels zu reduzieren.

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

Das CSS bleibt gegenüber dem [vorherigen Beispiel](#grundlegende_spalten-_und_zeilen-header) unverändert.

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

### Header-Zellen mit anderen Header-Zellen verknüpfen

Für komplexere Beziehungen zwischen Header-Zellen kann die Verwendung von `th`-Elementen mit dem [`scope`](#scope)-Attribut allein für assistive Technologien, insbesondere Bildschirmleseprogramme, nicht ausreichend sein.

#### HTML

Um die {{Glossary("accessibility", "Zugänglichkeit")}} des [vorherigen Beispiels](#spalten-_und_zeilenüberspannung) zu verbessern und es Bildschirmleseprogrammen beispielsweise zu ermöglichen, die mit jeder Header-Zelle verknüpften Header anzusprechen, kann das [`headers`](#headers)-Attribut zusammen mit [`id`](/de/docs/Web/HTML/Global_attributes/id)-Attributen eingeführt werden. Aufgrund der Art und Weise, wie die "Aussprache"-Spalte in zwei Spalten im Beispiel unterteilt ist und so einen "two-row" Header ergibt, können assistive Technologien wie Bildschirmleseprogramme möglicherweise nicht identifizieren, mit welchen zusätzlichen Header-Zellen (`th`-Elemente) die "Aussprache"-Header-Zelle verbunden ist und umgekehrt. Daher wird das [`headers`](#headers)-Attribut auf den Header-Zellen "Aussprache", "IPA" und "Umschrift" verwendet, um die verbundenen Header-Zellen basierend auf den Werten der eindeutigen Kennungen aus den hinzugefügten [`id`](/de/docs/Web/HTML/Global_attributes/id)-Attributen in Form einer durch Leerraum getrennten Liste zu verknüpfen.

> [!NOTE]
> Es wird empfohlen, aussagekräftigere und nützlichere Werte für das [`id`](/de/docs/Web/HTML/Global_attributes/id)-Attribut zu verwenden. Jede `id` in einem Dokument muss für dieses Dokument einzigartig sein. In diesem Beispiel sind die `id`-Werte ein einzelnes Zeichen, um den Fokus auf das Konzept des [`headers`](#headers)-Attributs zu legen.

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

Das [visuelle Ergebnis](#result_2) ändert sich nicht gegenüber der [vorherigen Beispieltabelle](#spalten-_und_zeilenüberspannung).

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
          >Fließinhalt</a
        >, jedoch ohne Header, Footer, Sektionierungsinhalt oder Überschrifteninhalt-Nachkommen.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslass</th>
      <td>
        Das Start-Tag ist obligatorisch.<br />Das End-Tag kann weggelassen werden, wenn es sofort von einem <code>&lt;th&gt;</code> oder {{HTMLElement("td")}}-Element gefolgt wird oder wenn keine weiteren Daten in seinem Elternelement vorhanden sind.
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

- [Lernen: Grundlagen von HTML-Tabellen](/de/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics)
- {{HTMLElement("caption")}}, {{HTMLElement("col")}}, {{HTMLElement("colgroup")}}, {{HTMLElement("table")}}, {{HTMLElement("tbody")}}, {{HTMLElement("td")}}, {{HTMLElement("tfoot")}}, {{HTMLElement("thead")}}, {{HTMLElement("tr")}}: Andere tabellenbezogene Elemente
- {{cssxref("background-color")}}: CSS-Eigenschaft, um die Hintergrundfarbe jeder Kopfzelle festzulegen
- {{cssxref("border")}}: CSS-Eigenschaft, um die Ränder von Kopfzellen zu steuern
- {{cssxref("height")}}: CSS-Eigenschaft, um die empfohlene Höhe der Kopfzelle zu steuern
- {{cssxref("text-align")}}: CSS-Eigenschaft, um den Inhalt jeder Kopfzelle horizontal auszurichten
- {{cssxref("vertical-align")}}: CSS-Eigenschaft, um den Inhalt jeder Kopfzelle vertikal auszurichten
- {{cssxref("width")}}: CSS-Eigenschaft, um die empfohlene Breite der Kopfzelle zu steuern
- {{cssxref(":nth-of-type")}}, {{cssxref(":first-of-type")}}, {{cssxref(":last-of-type")}}: CSS-Pseudoklassen, um die gewünschten Kopfzellen auszuwählen
