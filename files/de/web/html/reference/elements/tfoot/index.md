---
title: "<tfoot>: Das Tabellenfuß-Element"
slug: Web/HTML/Reference/Elements/tfoot
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar}}

Das **`<tfoot>`** [HTML](/de/docs/Web/HTML)-Element umfasst eine Reihe von Tabellenzeilen ({{HTMLElement("tr")}} Elemente), die angeben, dass sie den Fuß einer Tabelle mit Informationen über die Spalten der Tabelle bilden. Dies ist normalerweise eine Zusammenfassung der Spalten, z. B. eine Summe der angegebenen Zahlen in einer Spalte.

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

Die folgenden Attribute sind veraltet und sollten nicht verwendet werden. Sie werden hier aus Gründen der Referenzierung beim Aktualisieren vorhandenen Codes und des historischen Interesses dokumentiert.

- `align` {{deprecated_inline}}

  - : Gibt die horizontale Ausrichtung jeder Fußzelle an. Die möglichen {{Glossary("enumerated", "aufgezählten")}} Werte sind `left`, `center`, `right`, `justify` und `char`. Wenn unterstützt, richtet der `char`-Wert den Textinhalt am Zeichen aus, das im [`char`](#char)-Attribut definiert ist, und am Offset, das durch das [`charoff`](#charoff)-Attribut festgelegt ist. Verwenden Sie stattdessen die {{cssxref("text-align")}} CSS-Eigenschaft, da dieses Attribut veraltet ist.

- `bgcolor` {{deprecated_inline}}

  - : Definiert die Hintergrundfarbe jeder Fußzelle. Der Wert ist eine HTML-Farbe; entweder ein [6-stelliger hexadezimaler RGB-Code](/de/docs/Web/CSS/hex-color), der mit einem `#` beginnt, oder ein [Farb-Schlüsselwort](/de/docs/Web/CSS/named-color). Andere CSS {{cssxref("color_value", "&lt;color&gt")}} Werte werden nicht unterstützt. Verwenden Sie stattdessen die {{cssxref("background-color")}} CSS-Eigenschaft, da dieses Attribut veraltet ist.

- `char` {{deprecated_inline}}

  - : Tut nichts. Es war ursprünglich dazu gedacht, die Ausrichtung des Inhalts an einem Zeichen jeder Fußzelle anzugeben. Typische Werte dafür sind ein Punkt (`.`), wenn versucht wird, Zahlen oder Geldwerte auszurichten. Wenn [`align`](#align) nicht auf `char` gesetzt ist, wird dieses Attribut ignoriert.

- `charoff` {{deprecated_inline}}

  - : Tut nichts. Es war ursprünglich dafür gedacht, die Anzahl der Zeichen anzugeben, um die der Inhalt der Fußzelle vom Ausrichtungszeichen versetzt werden sollte, das durch das [`char`](#char)-Attribut festgelegt ist.

- `valign` {{deprecated_inline}}

  - : Gibt die vertikale Ausrichtung jeder Fußzelle an. Die möglichen {{Glossary("enumerated", "aufgezählten")}} Werte sind `baseline`, `bottom`, `middle` und `top`. Verwenden Sie stattdessen die {{cssxref("vertical-align")}} CSS-Eigenschaft, da dieses Attribut veraltet ist.

## Verwendungshinweise

- Das `<tfoot>` steht nach allen {{HTMLElement("caption")}}, {{HTMLElement("colgroup")}}, {{HTMLElement("thead")}}, {{HTMLElement("tbody")}} und {{HTMLElement("tr")}} Elementen.
- Zusammen mit den verwandten {{HTMLElement("thead")}} und {{HTMLElement("tbody")}} Elementen liefert das `<tfoot>`-Element nützliche {{Glossary("semantics", "semantische")}} Informationen und kann beim Rendern für Bildschirm oder Druck verwendet werden. Die Spezifizierung solcher Tabelleninhaltsgruppen liefert auch wertvolle kontextuelle Informationen für unterstützende Technologien, einschließlich Bildschirmlesegeräten und Suchmaschinen.
- Beim Drucken eines Dokuments gibt der Tabellenfuß im Falle einer mehrseitigen Tabelle normalerweise Informationen aus, die auf jeder Seite als Zwischensumme dargestellt werden.

## Beispiel

Siehe {{HTMLElement("table")}} für ein vollständiges Tabellenbeispiel, das allgemeine Standards und bewährte Praktiken vorstellt.

### Tabelle mit Fußzeile

Dieses Beispiel zeigt eine Tabelle, die in einen Kopfteil mit Spaltenüberschriften, einen Hauptteil mit den Hauptdaten der Tabelle und einen Fußteil unterteilt ist, der die Daten einer Spalte zusammenfasst.

#### HTML

Die {{HTMLElement("thead")}}, {{HTMLElement("tbody")}} und `<tfoot>`-Elemente werden verwendet, um eine grundlegende Tabelle in {{Glossary("semantics", "semantische")}} Abschnitte zu strukturieren. Das `<tfoot>`-Element repräsentiert den Fußabschnitt der Tabelle, der eine Zeile ({{HTMLElement("tr")}}) enthält, die den berechneten Durchschnitt der Werte in der "Credits"-Spalte darstellt.

Um die Zellen im Fuß den richtigen Spalten zuzuordnen, wird das [`colspan`](/de/docs/Web/HTML/Reference/Elements/th#colspan)-Attribut auf dem {{HTMLElement("th")}}-Element verwendet, um die Kopfzeilenzelle über die ersten drei Tabellenspalten zu spannen. Die einzige Datenzelle ({{HTMLElement("td")}}) im Fuß wird automatisch in die richtige Position gesetzt, d.h. in die vierte Spalte, wobei der ausgelassene [`colspan`](/de/docs/Web/HTML/Reference/Elements/td#colspan)-Attributwert standardmäßig auf `1` gesetzt ist. Zusätzlich wird das [`scope`](/de/docs/Web/HTML/Reference/Elements/th#scope)-Attribut in der Fußkopfzelle ({{HTMLElement("th")}}) auf `row` gesetzt, um explizit zu definieren, dass diese Fußkopfzelle in unserer Beispielzeile in Beziehung steht zu den Tabellendatenzellen in derselben Zeile, die die berechnete Durchschnittswerte enthalten.

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

Einige grundlegende CSS-Anweisungen werden verwendet, um das Tabellenfußelement zu formatieren und hervorzuheben, sodass sich die Fußzellen von den Daten im Tabellenkörper abheben.

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
        Das Starttag ist obligatorisch. Das Endtag kann weggelassen werden, wenn es keinen
        weiteren Inhalts im übergeordneten {{HTMLElement("table")}}-Element gibt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Ein {{HTMLElement("table")}}-Element. Das
        <code>&lt;tfoot&gt;</code> muss nach allen
        {{HTMLElement("caption")}},
        {{HTMLElement("colgroup")}}, {{HTMLElement("thead")}},
        {{HTMLElement("tbody")}} und {{HTMLElement("tr")}}
        Elementen erscheinen. Beachten Sie, dass dies die Anforderung in HTML ist.<br />Ursprünglich, in HTML4, war das Gegenteil der Fall: Das <code>&lt;tfoot&gt;</code>-Element konnte nicht nach einem
        {{HTMLElement("tbody")}} und {{HTMLElement("tr")}}
        Element platziert werden.
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
- {{cssxref("border")}}: CSS-Eigenschaft zur Steuerung der Ränder von Fußzellen
- {{cssxref("text-align")}}: CSS-Eigenschaft zur horizontalen Ausrichtung jedes Fußzelleninhalts
- {{cssxref("vertical-align")}}: CSS-Eigenschaft zur vertikalen Ausrichtung jedes Fußzelleninhalts
