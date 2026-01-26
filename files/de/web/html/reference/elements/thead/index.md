---
title: "<thead>: Das Tabellenkopfelement"
slug: Web/HTML/Reference/Elements/thead
l10n:
  sourceCommit: 7c28cd21b705e7b7664d53b4d7822469ea8e6e15
---

Das **`<thead>`** [HTML](/de/docs/Web/HTML)-Element kapselt eine Reihe von Tabellenzeilen ({{HTMLElement("tr")}}-Elemente) und zeigt an, dass sie den Kopf einer Tabelle mit Informationen über die Tabellenspalten bilden. Dies erfolgt normalerweise in Form von Spaltenüberschriften ({{HTMLElement("th")}}-Elemente).

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

Dieses Element beinhaltet die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

### Veraltete Attribute

Die folgenden Attribute sind veraltet und sollten nicht verwendet werden. Sie sind unten zur Orientierung beim Aktualisieren bestehenden Codes und nur aus historischem Interesse dokumentiert.

- `align` {{deprecated_inline}}
  - : Gibt die horizontale Ausrichtung jeder Kopfzelle an. Die möglichen {{Glossary("enumerated", "enumerierten")}} Werte sind `left`, `center`, `right`, `justify` und `char`. Wenn unterstützt, richtet der Wert `char` den Textinhalt am Zeichen aus, das im [`char`](#char)-Attribut definiert ist, und am Offset, das durch das [`charoff`](#charoff)-Attribut definiert ist. Verwenden Sie stattdessen die {{cssxref("text-align")}}-CSS-Eigenschaft, da dieses Attribut veraltet ist.

- `bgcolor` {{deprecated_inline}}
  - : Definiert die Hintergrundfarbe jeder Kopfzelle. Der Wert ist eine HTML-Farbe; entweder ein [6-stelliger hexadezimaler RGB-Code](/de/docs/Web/CSS/Reference/Values/hex-color), der mit einem `#` versehen ist, oder ein [Farbbegriff](/de/docs/Web/CSS/Reference/Values/named-color). Andere CSS-{{cssxref("&lt;color&gt;")}}-Werte werden nicht unterstützt. Verwenden Sie stattdessen die {{cssxref("background-color")}}-CSS-Eigenschaft, da dieses Attribut veraltet ist.

- `char` {{deprecated_inline}}
  - : Hat keine Funktion. Es war ursprünglich vorgesehen, die Ausrichtung des Inhalts an einem Zeichen jeder Kopfzelle festzulegen. Falls [`align`](#align) nicht auf `char` gesetzt ist, wird dieses Attribut ignoriert.

- `charoff` {{deprecated_inline}}
  - : Hat keine Funktion. Es war ursprünglich vorgesehen, die Anzahl der Zeichen zum Versatz des Kopfzelleninhalts vom Ausrichtungszeichen, das durch das [`char`](#char)-Attribut angegeben wird, festzulegen.

- `valign` {{deprecated_inline}}
  - : Gibt die vertikale Ausrichtung jeder Kopfzelle an. Die möglichen {{Glossary("enumerated", "enumerierten")}} Werte sind `baseline`, `bottom`, `middle` und `top`. Verwenden Sie stattdessen die {{cssxref("vertical-align")}}-CSS-Eigenschaft, da dieses Attribut veraltet ist.

## Nutzungsanmerkungen

- Das `<thead>` wird nach allen {{HTMLElement("caption")}}- und {{HTMLElement("colgroup")}}-Elementen, aber vor allen {{HTMLElement("tbody")}}, {{HTMLElement("tfoot")}} und {{HTMLElement("tr")}}-Elementen platziert.
- Zusammen mit den verwandten {{HTMLElement("tbody")}}- und {{HTMLElement("tfoot")}}-Elementen liefert das `<thead>`-Element nützliche {{Glossary("semantics", "semantische")}} Informationen und kann sowohl beim Rendern für den Bildschirm als auch für den Druck verwendet werden. Das Festlegen solcher Tabellengruppen liefert auch wertvolle kontextbezogene Informationen für unterstützende Technologien, einschließlich Bildschirmlesegeräten und Suchmaschinen.
- Beim Drucken eines Dokuments gibt der Tabellenkopf bei einer mehrseitigen Tabelle in der Regel Informationen an, die auf jeder Seite gleich bleiben.

## Beispiele

Siehe {{HTMLElement("table")}} für ein komplettes Tabellenbeispiel, das gängige Standards und bewährte Praktiken einführt.

### Grundlegende Kopfstruktur

Dieses Beispiel zeigt eine Tabelle, die in einen Kopfbereich mit Spaltenüberschriften und einen Hauptdatenbereich der Tabelle unterteilt ist.

#### HTML

Die `<thead>`- und {{HTMLElement("tbody")}}-Elemente werden verwendet, um die Tabellenzeilen in {{Glossary("semantics", "semantische")}} Abschnitte zu unterteilen. Das `<thead>`-Element repräsentiert den Kopfbereich der Tabelle, der eine Zeile ({{HTMLElement("tr")}}) mit Zellen für Spaltenüberschriften ({{HTMLElement("th")}}) enthält.

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

Einige grundlegende CSS-Stile werden verwendet, um den Tabellenkopf zu gestalten und hervorzuheben, damit die Überschriften der Spalten sich von den Daten im Tabellenkörper abheben.

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

### Mehrfache Kopfzeilen

Dieses Beispiel zeigt einen Tabellenkopf mit zwei Zeilen.

#### HTML

In diesem Beispiel erweitern wir das Markup der Tabelle aus dem [Grundbeispiel](#grundlegende_kopfstruktur), indem wir zwei Tabellenzeilen ({{HTMLElement("tr")}}) innerhalb des `<thead>`-Elements einschließen, um einen mehrzeiligen Tabellenkopf zu erstellen. Wir haben eine zusätzliche Spalte hinzugefügt, die die Studentennamen in Vor- und Nachnamen aufteilt.

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

#### Zellenspannen

Um die Kopfzellen korrekt den entsprechenden Spalten und Zeilen zuzuordnen und auszurichten, werden die Attribute [`colspan`](/de/docs/Web/HTML/Reference/Elements/th#colspan) und [`rowspan`](/de/docs/Web/HTML/Reference/Elements/th#rowspan) auf den {{HTMLElement("th")}}-Elementen verwendet. Die in diesen Attributen gesetzten Werte geben an, wie viele Zellen jede Kopfzelle ({{HTMLElement("th")}}) überspannt. Aufgrund der Art und Weise, wie diese Attribute gesetzt sind, sind die zwei Kopfzellen der zweiten Zeile mit den Spalten ausgerichtet, für die sie Überschriften sind. Diese überspannen jeweils eine Zeile und eine Spalte, da die Standardwerte für die Attribute [`colspan`](/de/docs/Web/HTML/Reference/Elements/th#colspan) und [`rowspan`](/de/docs/Web/HTML/Reference/Elements/th#rowspan) beide `1` sind.

Das Spannen von Spalten und Reihen, das in diesem Beispiel demonstriert wird, wird in der folgenden Abbildung gezeigt:

![Illustration, die das Spannen von Spalten und Reihen von Tabellenzellen zeigt: Zellen 1, 3 und 4 spannen jeweils eine Spalte und zwei Reihen; Zelle 2 spannt zwei Spalten und eine Reihe; Zellen 5 und 6 spannen jeweils eine einzelne Reihe und Spalte und passen in die verfügbaren Zellen, die die zweite und dritte Spalte in der zweiten Reihe sind](/shared-assets/images/diagrams/html/table/column-row-span.png)

#### CSS

Das CSS ist unverändert zum [vorherigen Beispiel](#grundlegende_kopfstruktur).

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
      <td>Null oder mehr {{HTMLElement("tr")}}-Elemente.</td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>
        Das Start-Tag ist obligatorisch. Das End-Tag kann weggelassen werden, wenn das
        <code>&lt;thead&gt;</code>-Element unmittelbar von einem
        {{HTMLElement("tbody")}}- oder {{HTMLElement("tfoot")}}
        -Element gefolgt wird.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Ein {{HTMLElement("table")}}-Element. Das
        <code>&lt;thead&gt;</code> muss nach allen
        {{HTMLElement("caption")}}- und
        {{HTMLElement("colgroup")}}-Elementen erscheinen, selbst wenn diese implizit definiert sind,
        jedoch vor allen {{HTMLElement("tbody")}},
        {{HTMLElement("tfoot")}} und {{HTMLElement("tr")}}
        -Elementen.
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
      <td>Alle</td>
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
- {{HTMLElement("caption")}}, {{HTMLElement("col")}}, {{HTMLElement("colgroup")}}, {{HTMLElement("table")}}, {{HTMLElement("tbody")}}, {{HTMLElement("td")}}, {{HTMLElement("tfoot")}}, {{HTMLElement("th")}}, {{HTMLElement("tr")}}: Weitere tabellenbezogene Elemente
- {{cssxref("background-color")}}: CSS-Eigenschaft zum Setzen der Hintergrundfarbe jeder Kopfzelle
- {{cssxref("border")}}: CSS-Eigenschaft zur Steuerung der Ränder der Kopfzellen
- {{cssxref("text-align")}}: CSS-Eigenschaft zum horizontalen Ausrichten des Inhalts jeder Kopfzelle
- {{cssxref("vertical-align")}}: CSS-Eigenschaft zum vertikalen Ausrichten des Inhalts jeder Kopfzelle
