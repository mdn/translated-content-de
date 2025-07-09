---
title: "<thead>: Das Table Head-Element"
slug: Web/HTML/Reference/Elements/thead
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

Das **`<thead>`** [HTML](/de/docs/Web/HTML)-Element kapselt eine Reihe von Tabellenzeilen ({{HTMLElement("tr")}}-Elementen), die anzeigen, dass sie den Kopf einer Tabelle mit Informationen über die Spalten der Tabelle bilden. Dies erfolgt üblicherweise in Form von Spaltenüberschriften ({{HTMLElement("th")}}-Elementen).

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

Die folgenden Attribute sind veraltet und sollten nicht mehr verwendet werden. Sie sind hier nur aus Referenzzwecken dokumentiert, um bestehenden Code zu aktualisieren und aus historischem Interesse.

- `align` {{deprecated_inline}}
  - : Gibt die horizontale Ausrichtung jeder Kopfzelle an. Die möglichen {{Glossary("enumerated", "enumerierten")}} Werte sind `left`, `center`, `right`, `justify` und `char`. Wenn unterstützt, richtet der `char`-Wert den Textinhalt am in dem [`char`](#char)-Attribut definierten Zeichen und dem im [`charoff`](#charoff)-Attribut definierten Versatz aus. Verwenden Sie stattdessen die {{cssxref("text-align")}} CSS-Eigenschaft, da dieses Attribut veraltet ist.

- `bgcolor` {{deprecated_inline}}
  - : Definiert die Hintergrundfarbe jeder Kopfzelle. Der Wert ist eine HTML-Farbe; entweder ein [6-stelliger hexadezimaler RGB-Code](/de/docs/Web/CSS/hex-color), vorangestellt durch ein `#`, oder ein [Farbkeyword](/de/docs/Web/CSS/named-color). Andere CSS {{cssxref("color_value", "&lt;color&gt;")}}-Werte werden nicht unterstützt. Verwenden Sie die {{cssxref("background-color")}} CSS-Eigenschaft, da dieses Attribut veraltet ist.

- `char` {{deprecated_inline}}
  - : Tut nichts. Es war ursprünglich dazu gedacht, die Ausrichtung des Inhalts an einem Zeichen jeder Kopfzelle zu bestimmen. Wenn [`align`](#align) nicht auf `char` gesetzt ist, wird dieses Attribut ignoriert.

- `charoff` {{deprecated_inline}}
  - : Tut nichts. Es war ursprünglich dazu gedacht, die Anzahl der Zeichen anzugeben, um die der Inhalt der Kopfzelle vom durch das [`char`](#char)-Attribut angegebenen Ausrichtungszeichen versetzt sein soll.

- `valign` {{deprecated_inline}}
  - : Gibt die vertikale Ausrichtung jeder Kopfzelle an. Die möglichen {{Glossary("enumerated", "enumerierten")}} Werte sind `baseline`, `bottom`, `middle` und `top`. Verwenden Sie die {{cssxref("vertical-align")}} CSS-Eigenschaft, da dieses Attribut veraltet ist.

## Nutzungshinweise

- Das `<thead>` wird nach allen {{HTMLElement("caption")}}- und {{HTMLElement("colgroup")}}-Elementen platziert, aber vor allen {{HTMLElement("tbody")}}, {{HTMLElement("tfoot")}} und {{HTMLElement("tr")}}-Elementen.
- Zusammen mit seinen verwandten {{HTMLElement("tbody")}} und {{HTMLElement("tfoot")}}-Elementen, bietet das `<thead>`-Element nützliche {{Glossary("semantics", "semantische")}} Informationen und kann beim Rendering für Bildschirm oder Druck verwendet werden. Die Spezifizierung solcher Inhaltsgruppen der Tabelle bietet auch wertvolle Kontextinformationen für unterstützende Technologien, einschließlich Bildschirmlesegeräten und Suchmaschinen.
- Beim Drucken eines Dokuments gibt der Tabellenkopf üblicherweise Informationen an, die auf jeder Seite gleich bleiben, falls es sich um eine mehrseitige Tabelle handelt.

## Beispiele

Siehe {{HTMLElement("table")}} für ein vollständiges Tabellenbeispiel, das gängige Standards und Best Practices vorstellt.

### Grundlegende Kopfstruktur

Dieses Beispiel zeigt eine Tabelle, die in einen Kopfbereich mit Spaltenüberschriften und einen Hauptbereich mit den Hauptdaten der Tabelle unterteilt ist.

#### HTML

Die `<thead>`- und {{HTMLElement("tbody")}}-Elemente werden verwendet, um die Tabellenzeilen in {{Glossary("semantics", "semantische")}} Abschnitte zu gliedern. Das `<thead>`-Element stellt den Kopfbereich der Tabelle dar, der eine Zeile ({{HTMLElement("tr")}}) mit Spaltenüberschriften ({{HTMLElement("th")}}) enthält.

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

Einige grundlegende CSS-Styles werden verwendet, um den Tabellenkopf zu gestalten und hervorzuheben, sodass die Überschriften der Spalten sich von den Daten im Tabellenkörper abheben.

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

Wir erweitern das Markup der Tabelle aus dem [grundlegenden Beispiel](#grundlegende_kopfstruktur) in diesem Beispiel, indem wir zwei Tabellenzeilen ({{HTMLElement("tr")}}) innerhalb des `<thead>`-Elements einfügen und so einen Kopfbereich mit mehreren Zeilen erstellen. Wir haben eine zusätzliche Spalte eingefügt, um die Namen der Schüler in Vor- und Nachnamen zu unterteilen.

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

#### Zellspannweite

Um die Kopfzellen mit den richtigen Spalten und Zeilen zu verknüpfen und auszurichten, werden die Attribute [`colspan`](/de/docs/Web/HTML/Reference/Elements/th#colspan) und [`rowspan`](/de/docs/Web/HTML/Reference/Elements/th#rowspan) auf den {{HTMLElement("th")}}-Elementen verwendet. Die in diesen Attributen gesetzten Werte geben an, wie viele Zellen jede Kopfzelle ({{HTMLElement("th")}}) überspannt. Aufgrund der Art und Weise, wie diese Attribute gesetzt sind, sind die beiden Kopfzellen der zweiten Zeile mit den Spalten, die sie anführen, ausgerichtet. Jede von ihnen überspannt eine Zeile und eine Spalte, da die Standardwerte für die Attribute [`colspan`](/de/docs/Web/HTML/Reference/Elements/th#colspan) und [`rowspan`](/de/docs/Web/HTML/Reference/Elements/th#rowspan) beide `1` betragen.

Die von diesem Beispiel demonstrierte Spalten- und Zeilenspannung wird in der folgenden Abbildung veranschaulicht:

![Abbildung zur Veranschaulichung der Spalten- und Zeilenspannung von Tabellenzellen: Zellen 1, 3 und 4 überspannen jeweils eine Spalte und zwei Zeilen; Zelle 2 überspannt zwei Spalten und eine Zeile; Zellen 5 und 6 überspannen jeweils eine einzelne Zeile und Spalte und passen in die verfügbaren Zellen, die die zweite und dritte Spalte in der zweiten Reihe sind](column-row-span.png)

#### CSS

Das CSS ist unverändert vom [vorherigen Beispiel](#grundlegende_kopfstruktur).

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
      <th scope="row">Erlaubter Inhalt</th>
      <td>Null oder mehr {{HTMLElement("tr")}}-Elemente.</td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>
        Der Start-Tag ist obligatorisch. Der End-Tag kann weggelassen werden, wenn das
        <code>&lt;thead&gt;</code>-Element sofort gefolgt wird von einem
        {{HTMLElement("tbody")}}- oder {{HTMLElement("tfoot")}}
        -Element.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Ein {{HTMLElement("table")}}-Element. Das
        <code>&lt;thead&gt;</code> muss nach allen
        {{HTMLElement("caption")}}- und
        {{HTMLElement("colgroup")}}-Elementen erscheinen, auch wenn diese implizit definiert sind,
        aber vor allen {{HTMLElement("tbody")}},
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
- {{HTMLElement("caption")}}, {{HTMLElement("col")}}, {{HTMLElement("colgroup")}}, {{HTMLElement("table")}}, {{HTMLElement("tbody")}}, {{HTMLElement("td")}}, {{HTMLElement("tfoot")}}, {{HTMLElement("th")}}, {{HTMLElement("tr")}}: Andere tabellenbezogene Elemente
- {{cssxref("background-color")}}: CSS-Eigenschaft, um die Hintergrundfarbe jeder Kopfzelle festzulegen
- {{cssxref("border")}}: CSS-Eigenschaft zur Steuerung der Ränder von Kopfzellen
- {{cssxref("text-align")}}: CSS-Eigenschaft, um den Inhalt jeder Kopfzelle horizontal auszurichten
- {{cssxref("vertical-align")}}: CSS-Eigenschaft, um den Inhalt jeder Kopfzelle vertikal auszurichten
