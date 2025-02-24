---
title: "<thead>: Das Table Head-Element"
slug: Web/HTML/Element/thead
l10n:
  sourceCommit: 8b02826c79b090b5af0d68ae1ef39f932a66a7f1
---

{{HTMLSidebar}}

Das **`<thead>`** [HTML](/de/docs/Web/HTML)-Element kapselt eine Gruppe von Tabellenzeilen ({{HTMLElement("tr")}}-Elementen), die den Kopf einer Tabelle mit Informationen über die Spalten der Tabelle bilden. Dies erfolgt in der Regel in Form von Spaltenüberschriften ({{HTMLElement("th")}}-Elementen).

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

Dieses Element umfasst die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

### Veraltete Attribute

Die folgenden Attribute sind veraltet und sollten nicht verwendet werden. Sie sind hier zur Referenz bei der Aktualisierung vorhandenen Codes und aus historischem Interesse dokumentiert.

- `align` {{deprecated_inline}}

  - : Gibt die horizontale Ausrichtung jeder Kopfzelle an. Die möglichen {{Glossary("enumerated", "enumerierten")}} Werte sind `left`, `center`, `right`, `justify` und `char`. Wenn unterstützt, richtet der Wert `char` den Textinhalt am Zeichen aus, das im [`char`](#char)-Attribut definiert ist, und am Offset, das durch das [`charoff`](#charoff)-Attribut definiert ist. Verwenden Sie stattdessen die {{cssxref("text-align")}} CSS-Eigenschaft, da dieses Attribut veraltet ist.

- `bgcolor` {{deprecated_inline}}

  - : Definiert die Hintergrundfarbe jeder Kopfzelle. Der Wert ist eine HTML-Farbe; entweder ein [6-stelliger hexadezimaler RGB-Code](/de/docs/Web/CSS/hex-color), eingeleitet durch ein `#`, oder ein [Farbname](/de/docs/Web/CSS/named-color). Andere CSS {{cssxref("color_value", "&lt;color&gt")}}-Werte werden nicht unterstützt. Verwenden Sie stattdessen die {{cssxref("background-color")}} CSS-Eigenschaft, da dieses Attribut veraltet ist.

- `char` {{deprecated_inline}}

  - : Hat keine Funktion. Es war ursprünglich vorgesehen, die Ausrichtung des Inhalts an einem Zeichen jeder Kopfzelle anzugeben. Wenn [`align`](#align) nicht auf `char` gesetzt ist, wird dieses Attribut ignoriert.

- `charoff` {{deprecated_inline}}

  - : Hat keine Funktion. Es war ursprünglich vorgesehen, die Anzahl Zeichen anzugeben, die der Kopfzelleninhalt vom Ausrichtungszeichen im [`char`](#char)-Attribut abweicht.

- `valign` {{deprecated_inline}}

  - : Gibt die vertikale Ausrichtung jeder Kopfzelle an. Die möglichen {{Glossary("enumerated", "enumerierten")}} Werte sind `baseline`, `bottom`, `middle` und `top`. Verwenden Sie stattdessen die {{cssxref("vertical-align")}} CSS-Eigenschaft, da dieses Attribut veraltet ist.

## Verwendungshinweise

- Das `<thead>` wird nach allen {{HTMLElement("caption")}}- und {{HTMLElement("colgroup")}}-Elementen, aber vor allen {{HTMLElement("tbody")}}, {{HTMLElement("tfoot")}} und {{HTMLElement("tr")}}-Elementen platziert.
- Gemeinsam mit seinen verwandten {{HTMLElement("tbody")}}- und {{HTMLElement("tfoot")}}-Elementen liefert das `<thead>`-Element nützliche {{Glossary("semantics", "semantische")}} Informationen und kann beim Rendern sowohl für Bildschirm als auch Druck verwendet werden. Solche Tabellengruppierungen liefern auch wertvolle Kontextinformationen für assistive Technologien, einschließlich Screenreadern und Suchmaschinen.
- Beim Drucken eines Dokuments liefert der Tabellenkopf in der Regel Informationen, die auf jeder Seite gleich bleiben, wenn es sich um eine mehrseitige Tabelle handelt.

## Beispiele

Siehe {{HTMLElement("table")}} für ein vollständiges Tabellenbeispiel, das gängige Standards und bewährte Praktiken einführt.

### Grundstruktur des Kopfes

Dieses Beispiel zeigt eine Tabelle, die in einen Kopfabschnitt mit Spaltenüberschriften und einen Hauptdatenbereich unterteilt ist.

#### HTML

Die `<thead>`- und {{HTMLElement("tbody")}}-Elemente werden verwendet, um die Tabellenzeilen in {{Glossary("semantics", "semantische")}} Abschnitte zu strukturieren. Das `<thead>`-Element stellt den Kopfabschnitt der Tabelle dar, der eine Zeile ({{HTMLElement("tr")}}) von Spaltenüberschriftenzellen ({{HTMLElement("th")}}) enthält.

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

Ein einfaches CSS wird verwendet, um den Tabellenkopf zu gestalten und hervorzuheben, sodass die Spaltenüberschriften sich von den Daten im Tabellenkörper abheben.

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

Dieses Beispiel zeigt einen Tabellenkopfabschnitt mit zwei Zeilen.

#### HTML

Wir erweitern das Markup der Tabelle aus dem [Grundbeispiel](#grundstruktur_des_kopfes) in diesem Beispiel, indem wir zwei Tabellenzeilen ({{HTMLElement("tr")}}) innerhalb des `<thead>`-Elements hinzufügen, um einen mehrzeiligen Tabellenkopf zu erstellen. Wir haben eine zusätzliche Spalte hinzugefügt, die die Studentennamen in Vor- und Nachnamen aufteilt.

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

#### Zellenüberspannung

Um die Kopfzellen den richtigen Spalten und Zeilen zuzuordnen und auszurichten, werden die Attribute [`colspan`](/de/docs/Web/HTML/Element/th#colspan) und [`rowspan`](/de/docs/Web/HTML/Element/th#rowspan) auf den {{HTMLElement("th")}}-Elementen verwendet. Die in diesen Attributen gesetzten Werte geben an, über wie viele Zellen jede Kopfzelle ({{HTMLElement("th")}}) reicht. Aufgrund der Art und Weise, wie diese Attribute gesetzt sind, sind die beiden zweiten Kopfzeilen den Spalten, die sie anführen, ausgerichtet. Diese Spannen erstrecken sich über je eine Zeile und eine Spalte, da die Standardwerte für die [`colspan`](/de/docs/Web/HTML/Element/th#colspan) und [`rowspan`](/de/docs/Web/HTML/Element/th#rowspan)-Attribute beide `1` sind.

Die durch dieses Beispiel veranschaulichte Spalten- und Zeilenüberspannung wird in der folgenden Abbildung dargestellt:

![Illustration, die die Spalten- und Zeilenüberspannung von Tabellenzellen darstellt: Zellen 1, 3 und 4 erstrecken sich über jeweils eine Spalte und zwei Zeilen; Zelle 2 erstreckt sich über zwei Spalten und eine Zeile; Zellen 5 und 6 erstrecken sich über jeweils eine einzelne Zeile und Spalte und passen in die verfügbaren Zellen, die die zweite und dritte Spalte in der zweiten Zeile sind](column-row-span.png)

#### CSS

Das CSS bleibt unverändert gegenüber dem [vorherigen Beispiel](#grundstruktur_des_kopfes).

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
        <a href="/de/docs/Web/HTML/Content_categories"
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
        {{HTMLElement("colgroup")}}-Elementen erscheinen, auch implizit definiert,
        aber vor allen {{HTMLElement("tbody")}},
        {{HTMLElement("tfoot")}} und {{HTMLElement("tr")}}
        -Elementen.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
      <td>
        <code
          ><a href="/de/docs/Web/Accessibility/ARIA/Roles/rowgroup_role"
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
- {{cssxref("background-color")}}: CSS-Eigenschaft, um die Hintergrundfarbe jeder Kopfzelle festzulegen
- {{cssxref("border")}}: CSS-Eigenschaft, um die Ränder von Kopfzellen zu steuern
- {{cssxref("text-align")}}: CSS-Eigenschaft, um den Inhalt jeder Kopfzelle horizontal auszurichten
- {{cssxref("vertical-align")}}: CSS-Eigenschaft, um den Inhalt jeder Kopfzelle vertikal auszurichten
