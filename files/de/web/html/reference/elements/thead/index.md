---
title: "<thead>: Das Table Head Element"
slug: Web/HTML/Reference/Elements/thead
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

Das **`<thead>`** [HTML](/de/docs/Web/HTML) Element kapselt eine Reihe von Tabellenspalten ({{HTMLElement("tr")}} Elemente) ein und zeigt damit an, dass sie den Kopf einer Tabelle bilden, der Informationen über die Spalten der Tabelle enthält. Dies sind normalerweise Spaltenüberschriften ({{HTMLElement("th")}} Elemente).

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
  color: white;
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

Die folgenden Attribute sind veraltet und sollten nicht verwendet werden. Sie sind unten dokumentiert, um beim Aktualisieren vorhandener Codes und aus historischem Interesse als Referenz zu dienen.

- `align` {{deprecated_inline}}
  - : Gibt die horizontale Ausrichtung jeder Kopfzelle an. Die möglichen {{Glossary("enumerated", "aufgezählten")}} Werte sind `left`, `center`, `right`, `justify` und `char`. Wenn unterstützt, richtet der `char` Wert den Textinhalt an dem im [`char`](#char) Attribut definierten Zeichen und dem im [`charoff`](#charoff) Attribut definierten Versatz aus. Verwenden Sie stattdessen die {{cssxref("text-align")}} CSS-Eigenschaft, da dieses Attribut veraltet ist.

- `bgcolor` {{deprecated_inline}}
  - : Definiert die Hintergrundfarbe jeder Kopfzelle. Der Wert ist eine HTML-Farbe; entweder ein [6-stelliger hexadezimaler RGB-Code](/de/docs/Web/CSS/Reference/Values/hex-color), der mit einem `#` versehen ist, oder ein [Farb-Keyword](/de/docs/Web/CSS/Reference/Values/named-color). Andere CSS {{cssxref("color_value", "&lt;color&gt;")}} Werte werden nicht unterstützt. Verwenden Sie stattdessen die {{cssxref("background-color")}} CSS-Eigenschaft, da dieses Attribut veraltet ist.

- `char` {{deprecated_inline}}
  - : Tut nichts. Es war ursprünglich vorgesehen, die Ausrichtung des Inhalts an einem Zeichen jeder Kopfzelle zu spezifizieren. Wenn [`align`](#align) nicht auf `char` gesetzt ist, wird dieses Attribut ignoriert.

- `charoff` {{deprecated_inline}}
  - : Tut nichts. Es war ursprünglich vorgesehen, die Anzahl der Zeichen anzugeben, die der Inhalt der Kopfzelle vom Ausrichtungszeichen abgezählt, das durch das [`char`](#char) Attribut angegeben wird.

- `valign` {{deprecated_inline}}
  - : Gibt die vertikale Ausrichtung jeder Kopfzelle an. Die möglichen {{Glossary("enumerated", "aufgezählten")}} Werte sind `baseline`, `bottom`, `middle` und `top`. Verwenden Sie stattdessen die {{cssxref("vertical-align")}} CSS-Eigenschaft, da dieses Attribut veraltet ist.

## Nutzungshinweise

- `<thead>` wird nach allen {{HTMLElement("caption")}} und {{HTMLElement("colgroup")}} Elementen, aber vor allen {{HTMLElement("tbody")}}, {{HTMLElement("tfoot")}} und {{HTMLElement("tr")}} Elementen platziert.
- Zusammen mit den verwandten {{HTMLElement("tbody")}} und {{HTMLElement("tfoot")}} Elementen bietet das `<thead>` Element nützliche {{Glossary("semantics", "semantische")}} Informationen und kann beim Rendern für Bildschirm oder Druck verwendet werden. Die Spezifizierung solcher Tabellengruppen bietet auch wertvolle kontextuelle Informationen für unterstützende Technologien wie Bildschirmleser und Suchmaschinen.
- Beim Drucken eines Dokuments gibt der Tabellenkopf bei einer mehrseitigen Tabelle normalerweise Informationen an, die auf jeder Seite gleich bleiben.

## Beispiele

Siehe {{HTMLElement("table")}} für ein vollständiges Tabellenbeispiel, das allgemeine Standards und bewährte Praktiken einführt.

### Grundlegende Kopfstruktur

Dieses Beispiel zeigt eine Tabelle, die in einen Kopfbereich mit Spaltenüberschriften und einen Hauptdatenbereich gegliedert ist.

#### HTML

Die `<thead>` und {{HTMLElement("tbody")}} Elemente werden verwendet, um die Tabellenzeilen in {{Glossary("semantics", "semantische")}} Abschnitte zu unterteilen. Das `<thead>` Element repräsentiert den Kopfbereich der Tabelle, der eine Zeile ({{HTMLElement("tr")}}) von Spaltenüberschriftenzellen ({{HTMLElement("th")}}) enthält.

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

Einige grundlegende CSS-Stile werden verwendet, um den Tabellenkopf zu gestalten und hervorzuheben, sodass sich die Überschriften der Spalten von den Daten im Tabellenkörper abheben.

```css
thead {
  border-bottom: 2px solid rgb(160 160 160);
  text-align: center;
  background-color: #2c5e77;
  color: white;
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

Wir erweitern die Markup-Tabelle aus dem [Grundbeispiel](#grundlegende_kopfstruktur) in diesem Beispiel, indem wir zwei Tabellenzeilen ({{HTMLElement("tr")}}) innerhalb des `<thead>` Elements einfügen, wodurch ein mehrzeiliger Tabellenkopf entsteht. Wir haben eine zusätzliche Spalte hinzugefügt, die die Schülernamen in Vor- und Nachnamen aufteilt.

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

#### Zellenspannung

Um die Header-Zellen mit den richtigen Spalten und Zeilen zu verknüpfen und auszurichten, werden die Attribute [`colspan`](/de/docs/Web/HTML/Reference/Elements/th#colspan) und [`rowspan`](/de/docs/Web/HTML/Reference/Elements/th#rowspan) auf den {{HTMLElement("th")}} Elementen verwendet. Die in diesen Attributen festgelegten Werte geben an, wie viele Zellen jede Header-Zelle ({{HTMLElement("th")}}) überspannt. Durch die Art und Weise, wie diese Attribute festgelegt sind, sind die beiden Kopfzellen der zweiten Zeile mit den Spalten ausgerichtet, die sie angeben. Diese umfassen jeweils eine Zeile und eine Spalte als Standardwerte für die [`colspan`](/de/docs/Web/HTML/Reference/Elements/th#colspan) und [`rowspan`](/de/docs/Web/HTML/Reference/Elements/th#rowspan) Attribute, die beide `1` sind.

Die in diesem Beispiel demonstrierte Spalten- und Zeilenüberspannung ist in der folgenden Abbildung illustriert:

![Illustration, die die Spalten- und Zeilenüberspannung von Tabellenzellen demonstriert: Zellen 1, 3 und 4 erstrecken sich über eine Spalte und zwei Zeilen jeweils; Zelle 2 erstreckt sich über zwei Spalten und eine Zeile; Zellen 5 und 6 überspannen jeweils eine einzelne Zeile und Spalte, die in die verfügbaren Zellen passen, die die zweite und dritte Spalte in der zweiten Zeile sind](/shared-assets/images/diagrams/html/table/column-row-span.png)

#### CSS

Das CSS ist unverändert gegenüber dem [vorherigen Beispiel](#grundlegende_kopfstruktur).

```css hidden
thead {
  border-bottom: 2px solid rgb(160 160 160);
  background-color: #2c5e77;
  color: white;
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
      <th scope="row">Erlaubter Inhalt</th>
      <td>Null oder mehr {{HTMLElement("tr")}} Elemente.</td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>
        Das Start-Tag ist obligatorisch. Das End-Tag kann weggelassen werden, wenn das
        <code>&lt;thead&gt;</code> Element direkt von einem
        {{HTMLElement("tbody")}} oder {{HTMLElement("tfoot")}}
        Element gefolgt wird.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Ein {{HTMLElement("table")}} Element. Das
        <code>&lt;thead&gt;</code> muss nach jedem
        {{HTMLElement("caption")}} und
        {{HTMLElement("colgroup")}} Element erscheinen, auch wenn es implizit definiert ist, aber vor jedem {{HTMLElement("tbody")}},
        {{HTMLElement("tfoot")}} und {{HTMLElement("tr")}}
        Element.
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

- [Lernen: Grundlagen von HTML-Tabellen](/de/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics)
- {{HTMLElement("caption")}}, {{HTMLElement("col")}}, {{HTMLElement("colgroup")}}, {{HTMLElement("table")}}, {{HTMLElement("tbody")}}, {{HTMLElement("td")}}, {{HTMLElement("tfoot")}}, {{HTMLElement("th")}}, {{HTMLElement("tr")}}: Andere tabellenbezogene Elemente
- {{cssxref("background-color")}}: CSS Eigenschaft um die Hintergrundfarbe jeder Kopfzelle zu setzen
- {{cssxref("border")}}: CSS Eigenschaft um die Ränder von Kopfzellen zu kontrollieren
- {{cssxref("text-align")}}: CSS Eigenschaft, um den Inhalt jeder Kopfzelle horizontal auszurichten
- {{cssxref("vertical-align")}}: CSS Eigenschaft, um den Inhalt jeder Kopfzelle vertikal auszurichten
