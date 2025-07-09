---
title: "<tfoot>: Das Tabellenfuß-Element"
slug: Web/HTML/Reference/Elements/tfoot
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

Das **`<tfoot>`** [HTML](/de/docs/Web/HTML) Element kapselt eine Menge von Tabellenzeilen ({{HTMLElement("tr")}} Elemente) ein und zeigt an, dass diese den Fuß einer Tabelle mit Informationen zu den Spalten der Tabelle bilden. In der Regel handelt es sich dabei um eine Zusammenfassung der Spalten, z. B. eine Summe der in einer Spalte angegebenen Zahlen.

{{InteractiveExample("HTML Demo: &lt;tfoot&gt;", "tabbed-taller")}}

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

Die folgenden Attribute sind veraltet und sollten nicht verwendet werden. Sie sind hier dokumentiert, um beim Aktualisieren von bestehendem Code als Referenz zu dienen und aus historischen Gründen.

- `align` {{deprecated_inline}}
  - : Gibt die horizontale Ausrichtung jeder Fußzelle an. Die möglichen {{Glossary("enumerated", "Aufzählungswerte")}} sind `left`, `center`, `right`, `justify` und `char`. Bei Unterstützung richtet der Wert `char` den Textinhalt am im [`char`](#char)-Attribut definierten Zeichen und am durch das [`charoff`](#charoff)-Attribut definierten Offset aus. Verwenden Sie stattdessen die {{cssxref("text-align")}} CSS-Eigenschaft, da dieses Attribut veraltet ist.

- `bgcolor` {{deprecated_inline}}
  - : Definiert die Hintergrundfarbe jeder Fußzelle. Der Wert ist eine HTML-Farbe; entweder ein [6-stelliger hexadezimaler RGB-Code](/de/docs/Web/CSS/hex-color), der mit einem `#` beginnt, oder ein [Farbstichwort](/de/docs/Web/CSS/named-color). Andere CSS {{cssxref("color_value", "&lt;color&gt;")}} Werte werden nicht unterstützt. Verwenden Sie stattdessen die {{cssxref("background-color")}} CSS-Eigenschaft, da dieses Attribut veraltet ist.

- `char` {{deprecated_inline}}
  - : Hat keine Funktion. Es war ursprünglich vorgesehen, die Ausrichtung des Inhalts an einem Zeichen jeder Fußzelle zu spezifizieren. Typische Werte dafür sind ein Punkt (`.`) beim Versuch, Zahlen oder Geldwerte auszurichten. Wenn [`align`](#align) nicht auf `char` gesetzt ist, wird dieses Attribut ignoriert.

- `charoff` {{deprecated_inline}}
  - : Hat keine Funktion. Es war ursprünglich vorgesehen, die Anzahl der Zeichen anzugeben, um die der Fußzelleninhalt von dem durch das [`char`](#char)-Attribut angegebenen Ausrichtungszeichen versetzt werden soll.

- `valign` {{deprecated_inline}}
  - : Gibt die vertikale Ausrichtung jeder Fußzelle an. Die möglichen {{Glossary("enumerated", "Aufzählungswerte")}} sind `baseline`, `bottom`, `middle` und `top`. Verwenden Sie stattdessen die {{cssxref("vertical-align")}} CSS-Eigenschaft, da dieses Attribut veraltet ist.

## Verwendungshinweise

- Das `<tfoot>` wird nach allen {{HTMLElement("caption")}}, {{HTMLElement("colgroup")}}, {{HTMLElement("thead")}}, {{HTMLElement("tbody")}} und {{HTMLElement("tr")}} Elementen platziert.
- Zusammen mit den zugehörigen {{HTMLElement("thead")}} und {{HTMLElement("tbody")}} Elementen bietet das `<tfoot>` Element nützliche {{Glossary("semantics", "semantische")}} Informationen und kann sowohl beim Rendering für Bildschirm als auch für Druck verwendet werden. Die Spezifikation solcher Tabellengruppen liefert auch wertvolle kontextuelle Informationen für unterstützende Technologien, einschließlich Screenreader und Suchmaschinen.
- Beim Drucken eines Dokuments gibt der Tabellenfuß in der Regel Informationen an, die als Zwischensumme auf jeder Seite einer mehrseitigen Tabelle ausgegeben werden.

## Beispiel

Siehe {{HTMLElement("table")}} für ein vollständiges Tabellenbeispiel, das allgemeine Standards und bewährte Praktiken einführt.

### Tabelle mit Fußzeile

Dieses Beispiel zeigt eine Tabelle, die in einen Kopfbereich mit Spaltenüberschriften, einen Hauptdatenbereich und einen Fußbereich zur Zusammenfassung der Daten einer Spalte unterteilt ist.

#### HTML

Die {{HTMLElement("thead")}}, {{HTMLElement("tbody")}} und `<tfoot>` Elemente werden verwendet, um eine grundlegende Tabelle in {{Glossary("semantics", "semantische")}} Abschnitte zu strukturieren. Das `<tfoot>` Element repräsentiert den Fußbereich der Tabelle, der eine Zeile ({{HTMLElement("tr")}}) enthält, die den berechneten Durchschnitt der Werte in der "Credits"-Spalte darstellt.

Um die Zellen im Fuß den richtigen Spalten zuzuweisen, wird das [`colspan`](/de/docs/Web/HTML/Reference/Elements/th#colspan) Attribut auf dem {{HTMLElement("th")}} Element verwendet, um die Kopfzelle über die ersten drei Tabellenspalten zu spannen. Die einzelne Datenzelle ({{HTMLElement("td")}}) im Fuß wird automatisch an die richtige Stelle platziert, d.h. in die vierte Spalte, wobei der unterlassene [`colspan`](/de/docs/Web/HTML/Reference/Elements/td#colspan) Attributwert standardmäßig auf `1` gesetzt wird. Zusätzlich wird das [`scope`](/de/docs/Web/HTML/Reference/Elements/th#scope) Attribut auf `row` auf der Kopfzelle ({{HTMLElement("th")}}) im Fuß gesetzt, um explizit anzugeben, dass sich diese Fußkopfzelle auf die Tabellenzellen innerhalb derselben Zeile bezieht, die in unserem Beispiel die eine Datenzelle im Fußbereich ist, die den berechneten Durchschnitt enthält.

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
  <tfoot>
    <tr>
      <th colspan="3" scope="row">Average Credits</th>
      <td>240</td>
    </tr>
  </tfoot>
</table>
```

#### CSS

Einige grundlegende CSS werden verwendet, um den Tabellenfuß zu stylen und hervorzuheben, sodass sich die Fußzellen von den Daten im Tabellenkörper abheben.

```css
tfoot {
  border-top: 3px dotted rgb(160 160 160);
  background-color: #2c5e77;
  color: #fff;
}

tfoot th {
  text-align: right;
}

tfoot td {
  font-weight: bold;
}

thead {
  border-bottom: 2px solid rgb(160 160 160);
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

tr > td:last-of-type {
  text-align: center;
}
```

#### Ergebnis

{{EmbedLiveSample("Example", 650, 180)}}

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
        Der Start-Tag ist obligatorisch. Der End-Tag kann weggelassen werden, wenn kein weiterer Inhalt im übergeordneten {{HTMLElement("table")}} Element mehr vorhanden ist.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Ein {{HTMLElement("table")}} Element. Das
        <code>&lt;tfoot&gt;</code> muss nach allen
        {{HTMLElement("caption")}},
        {{HTMLElement("colgroup")}}, {{HTMLElement("thead")}},
        {{HTMLElement("tbody")}}, und {{HTMLElement("tr")}}
        Elementen erscheinen. Beachten Sie, dass dies die Anforderung in HTML ist.<br />Ursprünglich war in HTML4 das Gegenteil der Fall: das <code>&lt;tfoot&gt;</code> Element durfte nicht nach allen
        {{HTMLElement("tbody")}} und {{HTMLElement("tr")}}
        Elementen platziert werden.
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
- {{HTMLElement("caption")}}, {{HTMLElement("col")}}, {{HTMLElement("colgroup")}}, {{HTMLElement("table")}}, {{HTMLElement("tbody")}}, {{HTMLElement("td")}}, {{HTMLElement("th")}}, {{HTMLElement("thead")}}, {{HTMLElement("tr")}}: Andere tabellenbezogene Elemente
- {{cssxref("background-color")}}: CSS-Eigenschaft zum Festlegen der Hintergrundfarbe jeder Fußzelle
- {{cssxref("border")}}: CSS-Eigenschaft zur Steuerung der Rahmen von Fußzellen
- {{cssxref("text-align")}}: CSS-Eigenschaft zur horizontalen Ausrichtung des Inhalts jeder Fußzelle
- {{cssxref("vertical-align")}}: CSS-Eigenschaft zur vertikalen Ausrichtung des Inhalts jeder Fußzelle
