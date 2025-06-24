---
title: "<thead>: Das Tabellenkopf-Element"
slug: Web/HTML/Reference/Elements/thead
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{HTMLSidebar}}

Das **`<thead>`**-[HTML](/de/docs/Web/HTML)-Element kapselt eine Reihe von Tabellenzeilen ({{HTMLElement("tr")}}-Elemente) und zeigt an, dass sie den Kopf einer Tabelle bilden, mit Informationen über die Spalten der Tabelle. Dies erfolgt normalerweise in Form von Spaltenüberschriften ({{HTMLElement("th")}}-Elemente).

{{InteractiveExample("HTML Demo: &lt;thead&gt;", "tabbed-taller")}}

```html interactive-example
<table>
  <caption>
    Council budget (in £) 2018
  </caption>
  <thead>
    <tr>
      <th scope="col">Items</th>
      <th scope="col">Expenditure</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Donuts</th>
      <td>3,000</td>
    </tr>
    <tr>
      <th scope="row">Stationery</th>
      <td>18,000</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <th scope="row">Totals</th>
      <td>21,000</td>
    </tr>
  </tfoot>
</table>
```

```css interactive-example
thead,
tfoot {
  background-color: #2c5e77;
  color: #fff;
}

tbody {
  background-color: #e4f0f5;
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

th,
td {
  border: 1px solid rgb(160 160 160);
  padding: 8px 10px;
}

td {
  text-align: center;
}
```

## Attribute

Dieses Element umfasst die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

### Veraltete Attribute

Die folgenden Attribute sind veraltet und sollten nicht mehr verwendet werden. Sie sind hier dokumentiert, um eine Referenz beim Aktualisieren von bestehendem Code zu bieten und aus historischem Interesse.

- `align` {{deprecated_inline}}

  - : Bestimmt die horizontale Ausrichtung jeder Kopfzelle. Die möglichen {{Glossary("enumerated", "aufzählbaren")}} Werte sind `left`, `center`, `right`, `justify` und `char`. Wenn unterstützt, richtet der Wert `char` den Textinhalt am im [`char`](#char)-Attribut definierten Zeichen und dem im [`charoff`](#charoff)-Attribut definierten Versatz aus. Verwenden Sie stattdessen die {{cssxref("text-align")}}-CSS-Eigenschaft, da dieses Attribut veraltet ist.

- `bgcolor` {{deprecated_inline}}

  - : Definiert die Hintergrundfarbe jeder Kopfzelle. Der Wert ist eine HTML-Farbe; entweder ein [6-stelliger hexadezimaler RGB-Code](/de/docs/Web/CSS/hex-color), mit einem `#` vorangestellt oder ein [Farbbezeichner](/de/docs/Web/CSS/named-color). Andere CSS-{{cssxref("color_value", "&lt;color&gt;")}}-Werte werden nicht unterstützt. Verwenden Sie stattdessen die {{cssxref("background-color")}}-CSS-Eigenschaft, da dieses Attribut veraltet ist.

- `char` {{deprecated_inline}}

  - : Tut nichts. Es war ursprünglich dazu gedacht, die Ausrichtung des Inhalts an einem Zeichen jeder Kopfzelle zu spezifizieren. Wenn [`align`](#align) nicht auf `char` gesetzt ist, wird dieses Attribut ignoriert.

- `charoff` {{deprecated_inline}}

  - : Tut nichts. Es war ursprünglich dazu gedacht, die Anzahl der Zeichen zu spezifizieren, um die der Inhalt der Kopfzelle vom im [`char`](#char)-Attribut spezifizierten Ausrichtungszeichen verschoben werden soll.

- `valign` {{deprecated_inline}}
  - : Bestimmt die vertikale Ausrichtung jeder Kopfzelle. Die möglichen {{Glossary("enumerated", "aufzählbaren")}} Werte sind `baseline`, `bottom`, `middle` und `top`. Verwenden Sie stattdessen die {{cssxref("vertical-align")}}-CSS-Eigenschaft, da dieses Attribut veraltet ist.

## Hinweise zur Verwendung

- Das `<thead>`-Element wird nach jedem {{HTMLElement("caption")}}- und {{HTMLElement("colgroup")}}-Element platziert, jedoch vor jedem {{HTMLElement("tbody")}}, {{HTMLElement("tfoot")}} und {{HTMLElement("tr")}}-Element.
- Zusammen mit den verwandten {{HTMLElement("tbody")}}- und {{HTMLElement("tfoot")}}-Elementen bietet das `<thead>`-Element nützliche {{Glossary("semantics", "semantische")}} Informationen und kann beim Rendering sowohl für den Bildschirm als auch beim Drucken verwendet werden. Die Spezifizierung solcher Tabellengruppen bietet auch wertvolle Kontextinformationen für unterstützende Technologien, einschließlich Bildschirmleser und Suchmaschinen.
- Beim Drucken eines Dokuments gibt in einem mehrseitigen Dokument der Tabellenkopf normalerweise Informationen an, die auf jeder Seite gleich bleiben.

## Beispiele

Sehen Sie sich {{HTMLElement("table")}} für ein vollständiges Tabellenbeispiel an, das allgemeine Standards und beste Praktiken einführt.

### Grundstruktur eines Kopfes

Dieses Beispiel zeigt eine Tabelle, die in einen Kopfbereich mit Spaltenüberschriften und einen Körperbereich mit den Hauptdaten der Tabelle unterteilt ist.

#### HTML

Die `<thead>`- und {{HTMLElement("tbody")}}-Elemente werden verwendet, um die Tabellenzeilen in {{Glossary("semantics", "semantische")}} Bereiche zu strukturieren. Das `<thead>`-Element stellt den Kopfbereich der Tabelle dar, der eine Zeile ({{HTMLElement("tr")}}) von Spaltenüberschriftenzellen ({{HTMLElement("th")}}) enthält.

```html
<table>
  <thead>
    <tr>
      <th>Student ID</th>
      <th>Name</th>
      <th>Major</th>
      <th>Credits</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>3741255</td>
      <td>Jones, Martha</td>
      <td>Computer Science</td>
      <td>240</td>
    </tr>
    <tr>
      <td>3971244</td>
      <td>Nim, Victor</td>
      <td>Russian Literature</td>
      <td>220</td>
    </tr>
    <tr>
      <td>4100332</td>
      <td>Petrov, Alexandra</td>
      <td>Astrophysics</td>
      <td>260</td>
    </tr>
  </tbody>
</table>
```

#### CSS

Einige grundlegende CSS wird verwendet, um den Tabellenkopf zu gestalten und hervorzuheben, sodass die Überschriften der Spalten sich von den Daten im Tabellenkörper abheben.

```css
thead {
  border-bottom: 2px solid rgb(160 160 160);
  text-align: center;
  background-color: #2c5e77;
  color: #fff;
}

tbody {
  background-color: #e4f0f5;
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

th,
td {
  border: 1px solid rgb(160 160 160);
  padding: 8px 10px;
}

tbody > tr > td:last-of-type {
  text-align: center;
}
```

#### Ergebnis

{{EmbedLiveSample("Basic_head_structure", 650, 140)}}

### Mehrere Kopfzeilen

Dieses Beispiel zeigt einen Tabellenkopfbereich mit zwei Zeilen.

#### HTML

Wir erweitern das Markup der Tabelle aus dem [Grundbeispiel](#grundstruktur_eines_kopfes) in diesem Beispiel, indem wir zwei Tabellenzeilen ({{HTMLElement("tr")}}) innerhalb des `<thead>`-Elements hinzufügen, um einen mehrzeiligen Tabellenkopf zu erstellen. Wir haben eine zusätzliche Spalte hinzugefügt, die die Vornamen und Nachnamen der Studenten aufteilt.

```html
<table>
  <thead>
    <tr>
      <th rowspan="2">Student ID</th>
      <th colspan="2">Student</th>
      <th rowspan="2">Major</th>
      <th rowspan="2">Credits</th>
    </tr>
    <tr>
      <th>First name</th>
      <th>Last name</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>3741255</td>
      <td>Martha</td>
      <td>Jones</td>
      <td>Computer Science</td>
      <td>240</td>
    </tr>
    <tr>
      <td>3971244</td>
      <td>Victor</td>
      <td>Nim</td>
      <td>Russian Literature</td>
      <td>220</td>
    </tr>
    <tr>
      <td>4100332</td>
      <td>Alexandra</td>
      <td>Petrov</td>
      <td>Astrophysics</td>
      <td>260</td>
    </tr>
  </tbody>
</table>
```

#### Cell-Spanning

Um die Überschriftenzellen korrekt mit den Spalten und Zeilen zu verknüpfen und auszurichten, werden die [`colspan`](/de/docs/Web/HTML/Reference/Elements/th#colspan)- und [`rowspan`](/de/docs/Web/HTML/Reference/Elements/th#rowspan)-Attribute auf den {{HTMLElement("th")}}-Elementen verwendet. Die in diesen Attributen festgelegten Werte geben an, wie viele Zellen jede Überschriftenzelle ({{HTMLElement("th")}}) überspannt. Aufgrund der Art und Weise, wie diese Attribute gesetzt sind, sind die beiden Kopfzellen in der zweiten Reihe mit den Spalten ausgerichtet, die sie überschreiben. Sie überspannen jeweils eine Zeile und eine Spalte, da die Standardwerte für die [`colspan`](/de/docs/Web/HTML/Reference/Elements/th#colspan)- und [`rowspan`](/de/docs/Web/HTML/Reference/Elements/th#rowspan)-Attribute beide `1` sind.

Das in diesem Beispiel demonstrierte Spalten- und Zeilen-Spanning wird in der folgenden Abbildung veranschaulicht:

![Illustration zur Demonstration des Spalten- und Zeilen-Span von Tabellenelementen: Zellen 1, 3 und 4 erstrecken sich über eine Spalte und zwei Zeilen jeweils; Zelle 2 erstreckt sich über zwei Spalten und eine Zeile; Zellen 5 und 6 überspannen jeweils eine einzelne Zeile und Spalte und passen in die verfügbaren Zellen, die die zweite und dritte Spalte der zweiten Zeile bilden.](column-row-span.png)

#### CSS

Das CSS bleibt unverändert gegenüber dem [vorherigen Beispiel](#grundstruktur_eines_kopfes).

```css hidden
thead {
  border-bottom: 2px solid rgb(160 160 160);
  background-color: #2c5e77;
  color: #fff;
}

table {
  border-collapse: collapse;
  border: 2px solid rgb(140 140 140);
  font-family: sans-serif;
  font-size: 0.8rem;
  letter-spacing: 1px;
}

tbody {
  background-color: #e4f0f5;
}

th,
td {
  border: 1px solid rgb(160 160 160);
  padding: 8px 10px;
}

tbody > tr > td:last-of-type {
  text-align: center;
}
```

#### Ergebnis

{{EmbedLiveSample("Multiple_head_rows", 650, 180)}}

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
      <td>Null oder mehr {{HTMLElement("tr")}}-Elemente.</td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>
        Der Start-Tag ist obligatorisch. Der End-Tag kann ausgelassen werden, wenn das
        <code>&lt;thead&gt;</code>-Element direkt von einem
        {{HTMLElement("tbody")}}- oder {{HTMLElement("tfoot")}}
        -Element gefolgt wird.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Ein {{HTMLElement("table")}}-Element. Das
        <code>&lt;thead&gt;</code> muss nach jedem
        {{HTMLElement("caption")}}- und
        {{HTMLElement("colgroup")}}-Element erscheinen, sogar implizit definiert,
        aber vor jedem {{HTMLElement("tbody")}},
        {{HTMLElement("tfoot")}} und {{HTMLElement("tr")}}
        -Element.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <code
          ><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/rowgroup_role"
            >rowgroup</a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA-Rollen</th>
      <td>Beliebig</td>
    </tr>
    <tr>
      <th scope="row">DOM-Schnittstelle</th>
      <td>[`HTMLTableSectionElement`](/de/docs/Web/API/HTMLTableSectionElement)</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Lernen: HTML-Tabellen-Grundlagen](/de/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics)
- {{HTMLElement("caption")}}, {{HTMLElement("col")}}, {{HTMLElement("colgroup")}}, {{HTMLElement("table")}}, {{HTMLElement("tbody")}}, {{HTMLElement("td")}}, {{HTMLElement("tfoot")}}, {{HTMLElement("th")}}, {{HTMLElement("tr")}}: Andere tabellenbezogene Elemente
- {{cssxref("background-color")}}: CSS-Eigenschaft zum Festlegen der Hintergrundfarbe jeder Kopfzelle
- {{cssxref("border")}}: CSS-Eigenschaft zur Steuerung der Ränder von Kopfzellen
- {{cssxref("text-align")}}: CSS-Eigenschaft zur horizontalen Ausrichtung des Inhalts jeder Kopfzelle
- {{cssxref("vertical-align")}}: CSS-Eigenschaft zur vertikalen Ausrichtung des Inhalts jeder Kopfzelle
