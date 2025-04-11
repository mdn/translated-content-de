---
title: "<thead>: Das Table Head Element"
slug: Web/HTML/Reference/Elements/thead
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar}}

Das **`<thead>`** [HTML](/de/docs/Web/HTML) Element kapselt eine Reihe von Tabellenzeilen ({{HTMLElement("tr")}} Elemente) und zeigt an, dass sie den Kopf einer Tabelle mit Informationen über die Tabellenspalten bilden. Dies geschieht normalerweise in Form von Spaltenüberschriften ({{HTMLElement("th")}} Elemente).

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

Dieses Element enthält die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

### Veraltete Attribute

Die folgenden Attribute sind veraltet und sollten nicht verwendet werden. Sie sind unten zur Referenz beim Aktualisieren vorhandenen Codes und aus historischem Interesse dokumentiert.

- `align` {{deprecated_inline}}

  - : Gibt die horizontale Ausrichtung jeder Kopfzelle an. Die möglichen {{Glossary("enumerated", "enumerierten")}} Werte sind `left`, `center`, `right`, `justify` und `char`. Wenn unterstützt, richtet der `char`-Wert den Textinhalt auf dem im [`char`](#char)-Attribut definierten Zeichen und dem durch das [`charoff`](#charoff)-Attribut definierten Offset aus. Verwenden Sie stattdessen die {{cssxref("text-align")}} CSS-Eigenschaft, da dieses Attribut veraltet ist.

- `bgcolor` {{deprecated_inline}}

  - : Definiert die Hintergrundfarbe jeder Kopfzelle. Der Wert ist eine HTML-Farbe; entweder ein [6-stelliger hexadezimaler RGB-Code](/de/docs/Web/CSS/hex-color), der durch ein `#` eingeleitet wird, oder ein [Farb-Schlüsselwort](/de/docs/Web/CSS/named-color). Andere CSS {{cssxref("color_value", "&lt;color&gt")}} Werte werden nicht unterstützt. Verwenden Sie stattdessen die {{cssxref("background-color")}} CSS-Eigenschaft, da dieses Attribut veraltet ist.

- `char` {{deprecated_inline}}

  - : Tut nichts. Es war ursprünglich vorgesehen, die Ausrichtung des Inhalts an einem Zeichen jeder Kopfzelle festzulegen. Wenn [`align`](#align) nicht auf `char` gesetzt ist, wird dieses Attribut ignoriert.

- `charoff` {{deprecated_inline}}

  - : Tut nichts. Es war ursprünglich dazu gedacht, die Anzahl der Zeichen anzugeben, um die der Kopfzelleninhalt von dem durch das [`char`](#char)-Attribut angegebenen Ausrichtungszeichen abgesetzt werden soll.

- `valign` {{deprecated_inline}}

  - : Gibt die vertikale Ausrichtung jeder Kopfzelle an. Die möglichen {{Glossary("enumerated", "enumerierten")}} Werte sind `baseline`, `bottom`, `middle` und `top`. Verwenden Sie stattdessen die {{cssxref("vertical-align")}} CSS-Eigenschaft, da dieses Attribut veraltet ist.

## Verwendungshinweise

- Das `<thead>` wird nach allen {{HTMLElement("caption")}} und {{HTMLElement("colgroup")}} Elementen platziert, jedoch vor alle {{HTMLElement("tbody")}}, {{HTMLElement("tfoot")}} und {{HTMLElement("tr")}} Elementen.
- Zusammen mit den zugehörigen {{HTMLElement("tbody")}} und {{HTMLElement("tfoot")}} Elementen bietet das `<thead>`-Element nützliche {{Glossary("semantics", "semantische")}} Informationen und kann sowohl bei der Darstellung für Bildschirm als auch für Druck verwendet werden. Das Angeben solcher Tabellengruppen bietet auch wertvolle kontextuelle Informationen für unterstützende Technologien, einschließlich Bildschirmleser und Suchmaschinen.
- Beim Drucken eines Dokuments gibt der Tabellenkopf im Falle einer mehrseitigen Tabelle normalerweise Informationen an, die auf jeder Seite gleich bleiben.

## Beispiele

Siehe {{HTMLElement("table")}} für ein vollständiges Tabellenbeispiel, das gemeinsame Standards und Best Practices einführt.

### Grundlegende Kopfstruktur

Dieses Beispiel zeigt eine Tabelle, die in einen Kopfbereich mit Spaltenüberschriften und einen Textbereich mit den Hauptdaten der Tabelle unterteilt ist.

#### HTML

Die `<thead>` und {{HTMLElement("tbody")}} Elemente werden verwendet, um die Tabellenzeilen in {{Glossary("semantics", "semantische")}} Abschnitte zu unterteilen. Das `<thead>`-Element repräsentiert den Kopfbereich der Tabelle, der eine Zeile ({{HTMLElement("tr")}}) mit Spaltenüberschriften-Zellen ({{HTMLElement("th")}}) enthält.

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

Einige grundlegende CSS wird verwendet, um den Tabellenkopf zu gestalten und hervorzuheben, sodass die Überschriften der Spalten von den Daten im Tabellenkörper abgehoben werden.

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

Wir erweitern das Markup der Tabelle aus dem [grundlegenden Beispiel](#grundlegende_kopfstruktur) in diesem Beispiel, indem wir zwei Tabellenzeilen ({{HTMLElement("tr")}}) im `<thead>`-Element hinzufügen, was einen mehrzeiligen Tabellenkopf erzeugt. Wir haben eine zusätzliche Spalte hinzugefügt, die die studentischen Namen in Vor- und Nachnamen aufteilt.

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

#### Zellverknüpfung

Um die Kopfzellen mit den richtigen Spalten und Zeilen zu verbinden und auszurichten, werden die [`colspan`](/de/docs/Web/HTML/Reference/Elements/th#colspan) und [`rowspan`](/de/docs/Web/HTML/Reference/Elements/th#rowspan) Attribute auf den {{HTMLElement("th")}} Elementen verwendet. Die Werte, die in diesen Attributen festgelegt sind, geben an, wie viele Zellen jede Kopfzelle ({{HTMLElement("th")}}) umfasst. Aufgrund der Art und Weise, wie diese Attribute festgelegt sind, sind die beiden Kopfzellen der zweiten Reihe mit den Spalten, die sie überschreiben, übereinstimmend. Diese umfassen jeweils eine Reihe und eine Spalte, da die Standardwerte für die [`colspan`](/de/docs/Web/HTML/Reference/Elements/th#colspan) und [`rowspan`](/de/docs/Web/HTML/Reference/Elements/th#rowspan) Attribute beide auf `1` gesetzt sind.

Die von diesem Beispiel demonstrierte Spalten- und Zeilenverknüpfung wird in der folgenden Abbildung illustriert:

![Illustration, die die Spalten- und Zeilenverknüpfung von Tabellenzellen zeigt: Zellen 1, 3 und 4 spannen jeweils eine Spalte und zwei Reihen; Zelle 2 spannt zwei Spalten und eine Reihe; Zellen 5 und 6 spannen jeweils eine Einzelspalte und -reihe und passen in die verfügbaren Zellen, die die zweite und dritte Spalte in der zweiten Reihe sind](column-row-span.png)

#### CSS

Das CSS bleibt unverändert vom [vorherigen Beispiel](#grundlegende_kopfstruktur).

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
      <td>Null oder mehr {{HTMLElement("tr")}} Elemente.</td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>
        Das Start-Tag ist obligatorisch. Das End-Tag kann weggelassen werden, wenn das
        <code>&lt;thead&gt;</code> Element unmittelbar durch ein
        {{HTMLElement("tbody")}} oder {{HTMLElement("tfoot")}}
        Element gefolgt wird.
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässige Eltern</th>
      <td>
        Ein {{HTMLElement("table")}} Element. Das
        <code>&lt;thead&gt;</code> muss nach allen
        {{HTMLElement("caption")}} und
        {{HTMLElement("colgroup")}} Elementen erscheinen, auch wenn sie implizit definiert sind,
        jedoch vor allen {{HTMLElement("tbody")}},
        {{HTMLElement("tfoot")}} und {{HTMLElement("tr")}}
        Elementen.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
      <td>
        <code
          ><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/rowgroup_role"
            >rowgroup</a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässige ARIA-Rollen</th>
      <td>Irgendeine</td>
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

- [Lernen: HTML Tabellen-Grundlagen](/de/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics)
- {{HTMLElement("caption")}}, {{HTMLElement("col")}}, {{HTMLElement("colgroup")}}, {{HTMLElement("table")}}, {{HTMLElement("tbody")}}, {{HTMLElement("td")}}, {{HTMLElement("tfoot")}}, {{HTMLElement("th")}}, {{HTMLElement("tr")}}: Andere tabellenbezogene Elemente
- {{cssxref("background-color")}}: CSS-Eigenschaft zum Festlegen der Hintergrundfarbe jeder Kopfzelle
- {{cssxref("border")}}: CSS-Eigenschaft zur Steuerung der Ränder von Kopfzellen
- {{cssxref("text-align")}}: CSS-Eigenschaft zur horizontalen Ausrichtung des Inhalts jeder Kopfzelle
- {{cssxref("vertical-align")}}: CSS-Eigenschaft zur vertikalen Ausrichtung des Inhalts jeder Kopfzelle
