---
title: "<th>: Das Tabellenkopf-Element"
slug: Web/HTML/Element/th
l10n:
  sourceCommit: 5bd9fe2b25c6eee2a14d0406ce7116998fa48c13
---

{{HTMLSidebar}}

Das **`<th>`** [HTML](/de/docs/Web/HTML)-Element definiert eine Zelle als Überschrift einer Gruppe von Tabellenzellen und kann als Kind des {{HTMLElement("tr")}}-Elements verwendet werden. Die genaue Natur dieser Gruppe wird durch die Attribute [`scope`](#scope) und [`headers`](#headers) definiert.

{{EmbedInteractiveExample("pages/tabbed/th.html","tabbed-taller")}}

## Attribute

Dieses Element enthält die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- `abbr`
  - : Eine kurze, abgekürzte Beschreibung des Inhalts der Kopfzelle, die als alternatives Label verwendet werden kann, um die Kopfzelle in anderen Kontexten zu referenzieren. Einige Benutzeragenten, wie z.B. Screenreader, können diese Beschreibung vor dem eigentlichen Inhalt präsentieren.
- `colspan`
  - : Ein nicht-negativer Ganzzahlwert, der angibt, wie viele Spalten die Kopfzelle überspannt. Der Standardwert ist `1`. Benutzeragenten ignorieren Werte, die höher als 1000 sind, als fehlerhaft und setzen solche Werte auf `1`.
- `headers`
  - : Eine Liste von blankseparierten Zeichenfolgen, die den `id`-Attributen der `<th>`-Elemente entsprechen, die die Kopfzeilen für diese Kopfzelle bereitstellen.
- `rowspan`
  - : Ein nicht-negativer Ganzzahlwert, der angibt, wie viele Zeilen die Kopfzelle überspannt. Der Standardwert ist `1`. Wenn sein Wert auf `0` gesetzt ist, erstreckt sich die Kopfzelle bis zum Ende des Tabellengruppierungsabschnitts ({{HTMLElement("thead")}}, {{HTMLElement("tbody")}}, {{HTMLElement("tfoot")}}, selbst wenn dieser implizit definiert ist), zu dem das `<th>` gehört. Werte, die höher als `65534` sind, werden bei `65534` abgeschnitten.
- `scope`

  - : Definiert, auf welche Zellen sich die Kopfzeile (definiert im `<th>`-Element) bezieht. Mögliche [aufgelistete](/de/docs/Glossary/enumerated) Werte sind:

    - `row`: Die Kopfzeile bezieht sich auf alle Zellen der Zeile, zu der sie gehört;
    - `col`: Die Kopfzeile bezieht sich auf alle Zellen der Spalte, zu der sie gehört;
    - `rowgroup`: Die Kopfzeile gehört zu einer Zeilengruppe und bezieht sich auf alle ihre Zellen;
    - `colgroup`: Die Kopfzeile gehört zu einer Spaltengruppe und bezieht sich auf alle ihre Zellen.

    Wenn das `scope`-Attribut nicht angegeben ist oder sein Wert nicht `row`, `col`, `rowgroup` oder `colgroup` ist, wählen Browser automatisch die Menge der Zellen aus, auf die sich die Kopfzelle bezieht.

### Veraltete Attribute

Die folgenden Attribute sind veraltet und sollten nicht verwendet werden. Sie sind hier zu Referenzzwecken dokumentiert, um bestehende Codes zu aktualisieren und aus historischem Interesse.

- `align` {{deprecated_inline}}

  - : Gibt die horizontale Ausrichtung der Kopfzelle an. Die möglichen [aufgelisteten](/de/docs/Glossary/enumerated) Werte sind `left`, `center`, `right`, `justify` und `char`. Wenn unterstützt, richtet der Wert `char` den Textinhalt auf dem Zeichen aus, das im [`char`](#char)-Attribut definiert ist, und dem Versatz, der im [`charoff`](#charoff)-Attribut definiert ist. Verwenden Sie die {{cssxref("text-align")}} CSS-Eigenschaft stattdessen, da dieses Attribut veraltet ist.

- `axis` {{deprecated_inline}}

  - : Enthält eine Liste von Leerzeichen-getrennten Zeichenfolgen, die jeweils dem `id`-Attribut einer Gruppe von Zellen entsprechen, auf die die Kopfzelle angewendet wird. Verwenden Sie stattdessen das [`scope`](#scope)-Attribut, da dieses Attribut veraltet ist.

- `bgcolor` {{deprecated_inline}}

  - : Definiert die Hintergrundfarbe der Kopfzelle. Der Wert ist eine HTML-Farbe; entweder ein [6-stelliges hexadezimales RGB-Codes](/de/docs/Web/CSS/hex-color) mit einem vorangestellten `#`, oder ein [Farbstichwort](/de/docs/Web/CSS/named-color). Andere CSS {{cssxref("color_value", "&lt;color&gt")}}-Werte werden nicht unterstützt. Verwenden Sie die {{cssxref("background-color")}} CSS-Eigenschaft stattdessen, da dieses Attribut veraltet ist.

- `char` {{deprecated_inline}}

  - : Hat keine Funktion. Ursprünglich gedacht, um die Ausrichtung des Inhalts an einem Zeichen der Kopfzelle zu spezifizieren. Typische Werte dafür sind ein Punkt (`.`) bei dem Versuch, Zahlen oder Geldwerte auszurichten. Wenn [`align`](#align) nicht auf `char` gesetzt ist, wird dieses Attribut ignoriert.

- `charoff` {{deprecated_inline}}

  - : Hat keine Funktion. Ursprünglich gedacht, um die Anzahl der Zeichen anzugeben, um den Inhalt der Kopfzelle von dem durch das [`char`](#char)-Attribut spezifizierten Ausrichtungszeichen zu versetzen.

- `height` {{deprecated_inline}}

  - : Definiert eine empfohlene Höhe der Kopfzelle. Verwenden Sie die {{cssxref("height")}} CSS-Eigenschaft stattdessen, da dieses Attribut veraltet ist.

- `valign` {{deprecated_inline}}

  - : Gibt die vertikale Ausrichtung der Kopfzelle an. Die möglichen [aufgelisteten](/de/docs/Glossary/enumerated) Werte sind `baseline`, `bottom`, `middle` und `top`. Verwenden Sie die {{cssxref("vertical-align")}} CSS-Eigenschaft stattdessen, da dieses Attribut veraltet ist.

- `width` {{deprecated_inline}}

  - : Definiert eine empfohlene Breite der Kopfzelle. Verwenden Sie die {{cssxref("width")}} CSS-Eigenschaft stattdessen, da dieses Attribut veraltet ist.

## Anmerkungen zur Nutzung

- Das `<th>` darf nur innerhalb eines {{HTMLElement("tr")}}-Elements verwendet werden.
- In einfachen Kontexten ist die Verwendung des [`scope`](#scope)-Attributs bei Kopfzellen (`<th>`-Elemente) überflüssig, da [`scope`](#scope) impliziert wird. Bestimmte unterstützende Technologien können jedoch möglicherweise nicht korrekt ableiten, sodass das Angeben des Kopfbereichs die Benutzererfahrung verbessern kann.
- Wenn Sie die Attribute [`colspan`](#colspan) und [`rowspan`](#rowspan) verwenden, um Kopfzellen über mehrere Spalten und Zeilen zu erstrecken, werden Zellen ohne diese definierten Attribute (mit einem Standardwert von `1`) automatisch in die freien verfügbaren Bereiche der Tabellenstruktur eingefügt, die 1x1-Zellen umfassen, wie in der folgenden Abbildung dargestellt:

  ![Abbildung zur Verdeutlichung des Übergreifens von Spalten und Zeilen in Tabellenzellen: Zellen 1, 3 und 4 erstrecken sich über zwei Zeilen; Zelle 2 erstreckt sich über zwei Spalten; Zellen 5 und 6 passen in die verfügbaren Zellen, die die zweite und dritte Spalte in der zweiten Zeile sind](column-row-span.png)

  > [!NOTE]
  > Diese Attribute dürfen nicht verwendet werden, um Zellen zu überlappen.

## Beispiele

Siehe {{HTMLElement("table")}} für ein vollständiges Tabellenbeispiel, das allgemeine Standards und Best Practices einführt.

### Grundlegende Spalten- und Zeilenköpfe

Dieses Beispiel verwendet `<th>`-Elemente, um Spalten- und Zeilenköpfe in einer grundlegenden Tabellenstruktur einzuführen.

#### HTML

Die erste Zeile ({{HTMLElement("tr")}}-Element) enthält die Spaltenköpfe (`<th>`-Elemente), die als "Titel" für die Spalten fungieren, um das Verständnis der Informationen in den Spalten und die Identifizierung der Daten zu erleichtern. Um anzuzeigen, dass sich jeder Spaltenkopf auf alle Zellen der entsprechenden Spalte bezieht, ist das [`scope`](#scope)-Attribut auf `col` (Spalte) eingestellt.

Die verbleibenden Zeilen enthalten die Hauptdaten der Tabelle. Jede dieser Zeilen hat einen Zeilenkopf (`<th>`-Element), der als erste Zelle eingeführt wird. Dies schafft eine Spalte mit Zeilenköpfen als erste Spalte der Tabelle. Ähnlich wie bei den Spaltenköpfen ist das [`scope`](#scope)-Attribut auf `row` eingestellt, um anzugeben, auf welche Zellen sich jeder Zeilenkopf bezieht, was im untenstehenden Beispiel alle Datenzellen ({{HTMLElement("td")}}-Elemente) in jeder `row` sind.

> [!NOTE]
> Normalerweise werden die Gruppenelemente {{HTMLElement("thead")}} und {{HTMLElement("tbody")}} verwendet, um Zeilen mit Kopfzellen in die jeweiligen Tabellenköpfe und -körperabschnitte zu gruppieren. Diese Elemente sind in diesem Beispiel weggelassen, um die Komplexität zu reduzieren und sich auf die Verwendung von Kopfzellen zu konzentrieren.

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

Einige grundlegende CSS-Stile werden verwendet, um die Tabelle und ihre Zellen zu gestalten. Wir verwenden CSS-[Attributselektoren](/de/docs/Web/CSS/Attribute_selectors), um Kopfzellen basierend auf ihren [`scope`](#scope)-Attributwerten zu kennzeichnen, indem wir Spalten- und Zeilenköpfe (`<th>`-Elemente) hervorheben und sie voneinander und von den Datenzellen ({{HTMLElement("td")}}) unterscheiden.

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

### Spalten- und Zeilenübergreifend

Dieses Beispiel erweitert und verbessert die grundlegende Tabelle aus dem [vorherigen Beispiel](#grundlegende_spalten-_und_zeilenköpfe) durch das Hinzufügen einer zweiten Zeile für zusätzliche Spaltenköpfe.

#### HTML

Eine zusätzliche Tabellenzeile ({{HTMLElement("tr")}}-Element) wird als zweite Kopfzeile der Tabelle mit zwei zusätzlichen Spaltenköpfen (`<th>`-Elemente) hinzugefügt. Auf diese Weise wird die "Aussprach"-Spalte in zwei Spalten aufgeteilt, eine für die IPA (International Phonetic Alphabet)-Notation und eine für die Umverteilung (die ursprüngliche Aussprachspalte). Die entsprechenden Datenzellen ({{HTMLElement("td")}}-Elemente) werden zu jeder nachfolgenden Zeile hinzugefügt.

Wie in den [Nutzungshinweisen](#anmerkungen_zur_nutzung) gezeigt, können die Attribute [`colspan`](#colspan) und [`rowspan`](#rowspan) für die `<th>`-Elemente verwendet werden, um die Kopfzellen den korrekten Spalten und Zeilen zuzuordnen. Um eine "zweizeilige" Kopfzeile in der Tabellenstruktur zu erreichen, werden die ersten beiden Kopfzellen innerhalb des ersten {{HTMLElement("tr")}}-Elements über zwei Zeilen gespannt. Die dritte Kopfzelle wird über zwei Spalten gezogen (bleibt in der ersten Zeile). Diese Anordnung lässt zwei verfügbare Bereiche in der dritten und vierten Spalte in der zweiten Zeile, in denen die beiden Köpfe innerhalb des zweiten {{HTMLElement("tr")}}-Elements automatisch platziert werden, mit dem Standardwert `1` für die Attribute [`colspan`](#colspan) und [`rowspan`](#rowspan).

> [!NOTE]
> Normalerweise werden {{HTMLElement("thead")}}- und {{HTMLElement("tbody")}}-Elemente verwendet, um Zeilen mit Köpfen in die entsprechenden Tabellenköpfe und -körperabschnitte zu gruppieren. Dies wird in diesem Beispiel nicht umgesetzt, um sich auf die Köpfe und das Übergreifen zu konzentrieren und die Komplexität des Beispiels zu reduzieren.

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

Das CSS bleibt unverändert vom [vorherigen Beispiel](#grundlegende_spalten-_und_zeilenköpfe).

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

### Kopfzellen mit anderen Kopfzellen assoziieren

Für komplexere Beziehungen zwischen Kopfzellen kann die Nutzung von `th`-Elementen mit dem [`scope`](#scope)-Attribut allein für unterstützende Technologien, insbesondere Screenreader, nicht ausreichen.

#### HTML

Um die [Barrierefreiheit](/de/docs/Glossary/accessibility) des [vorherigen Beispiels](#spalten-_und_zeilenübergreifend) zu verbessern und es Screenreadern zu ermöglichen, beispielsweise die mit jeder Kopfzelle assoziierten Kopfzellen auszusprechen, kann das [`headers`](#headers)-Attribut zusammen mit [`id`](/de/docs/Web/HTML/Global_attributes/id)-Attributen eingeführt werden. Aufgrund der Art und Weise, wie die "Aussprach"-Spalte in zwei Spalten im Beispiel aufgeteilt wird, durch Einführung einer "zweizeiligen" Kopfzeile, können unterstützende Technologien wie Screenreader möglicherweise nicht identifizieren, mit welchen zusätzlichen Kopfzellen (`th`-Elemente) die "Aussprach"-Kopfzelle verbunden ist und umgekehrt. Daher wird das [`headers`](#headers)-Attribut verwendet, um die "Aussprach"-, "IPA"- und "Umverteilung"-Kopfzellen zu verknüpfen, indem die verwandten Kopfzellen anhand der Werte der eindeutigen Bezeichner aus den hinzugefügten [`id`](/de/docs/Web/HTML/Global_attributes/id)-Attributen in Form einer leerzeichenseparierten Liste zugeordnet werden.

> [!NOTE]
> Es wird empfohlen, aussagekräftigere und nützlichere Werte für das [`id`](/de/docs/Web/HTML/Global_attributes/id)-Attribut zu verwenden. Jedes `id` in einem Dokument muss eindeutig für dieses Dokument sein. In diesem Beispiel sind die `id`-Werte einzelne Zeichen, um den Fokus auf das Konzept des [`headers`](#headers)-Attributs zu legen.

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

Das [visuelle Ergebnis](#result_2) bleibt unverändert im Vergleich zur [vorstehenden Beispiel-Tabelle](#spalten-_und_zeilenübergreifend).

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
      <th scope="row">Erlaubte Inhalte</th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#flow_content"
          >Fließinhalt</a
        >, jedoch ohne Header, Footer, Abschnittsinhalte oder Überschrifteninhalte
        als Nachkommen.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>
        Das Start-Tag ist obligatorisch.<br />Das End-Tag kann ausgelassen werden,
        wenn es unmittelbar gefolgt wird von einem <code>&lt;th&gt;</code> oder
        {{HTMLElement("td")}}-Element oder wenn es in seinem Elternelement
        keine weiteren Daten gibt.
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

- [Lernen: HTML-Tabellen](/de/docs/Learn/HTML/Tables)
- {{HTMLElement("caption")}}, {{HTMLElement("col")}}, {{HTMLElement("colgroup")}}, {{HTMLElement("table")}}, {{HTMLElement("tbody")}}, {{HTMLElement("td")}}, {{HTMLElement("tfoot")}}, {{HTMLElement("thead")}}, {{HTMLElement("tr")}}: Andere tabellenbezogene Elemente
- {{cssxref("background-color")}}: CSS-Eigenschaft, um die Hintergrundfarbe jeder Kopfzelle festzulegen
- {{cssxref("border")}}: CSS-Eigenschaft zur Steuerung von Rahmen um Kopfzellen
- {{cssxref("height")}}: CSS-Eigenschaft zur Steuerung der empfohlenen Höhe der Kopfzelle
- {{cssxref("text-align")}}: CSS-Eigenschaft zur horizontalen Ausrichtung des Inhalts jeder Kopfzelle
- {{cssxref("vertical-align")}}: CSS-Eigenschaft zur vertikalen Ausrichtung des Inhalts jeder Kopfzelle
- {{cssxref("width")}}: CSS-Eigenschaft zur Steuerung der empfohlenen Breite der Kopfzelle
- {{cssxref(":nth-of-type")}}, {{cssxref(":first-of-type")}}, {{cssxref(":last-of-type")}}: CSS-Pseudoklassen zur Auswahl der gewünschten Kopfzellen
