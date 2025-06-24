---
title: "<tfoot>: Das Tabellenfuß-Element"
slug: Web/HTML/Reference/Elements/tfoot
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{HTMLSidebar}}

Das **`<tfoot>`** [HTML](/de/docs/Web/HTML)-Element kapselt eine Reihe von Tabellenzeilen ({{HTMLElement("tr")}}-Elemente) ein, die den Fuß einer Tabelle mit Informationen über die Tabellenspalten bilden. Dies ist in der Regel eine Zusammenfassung der Spalten, z.B. eine Summe der gegebenen Zahlen in einer Spalte.

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

Dieses Element umfasst die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

### Veraltete Attribute

Die folgenden Attribute sind veraltet und sollten nicht verwendet werden. Sie sind unten dokumentiert, um bei der Aktualisierung vorhandenen Codes als Referenz zu dienen und aus historischem Interesse.

- `align` {{deprecated_inline}}

  - : Gibt die horizontale Ausrichtung jeder Fußzelle an. Die möglichen {{Glossary("enumerated", "aufgelisteten")}} Werte sind `left`, `center`, `right`, `justify` und `char`. Wenn unterstützt, richtet der `char`-Wert den Textinhalt an dem im [`char`](#char)-Attribut definierten Zeichen und an der durch das [`charoff`](#charoff)-Attribut definierten Verschiebung aus. Verwenden Sie die {{cssxref("text-align")}} CSS-Eigenschaft stattdessen, da dieses Attribut veraltet ist.

- `bgcolor` {{deprecated_inline}}

  - : Definiert die Hintergrundfarbe jeder Fußzelle. Der Wert ist eine HTML-Farbe; entweder ein [6-stelliges hexadezimales RGB-Code](/de/docs/Web/CSS/hex-color), mit einem `#`-Präfix, oder ein [Farbbegriff](/de/docs/Web/CSS/named-color). Andere CSS {{cssxref("color_value", "&lt;color&gt;")}}-Werte werden nicht unterstützt. Verwenden Sie die {{cssxref("background-color")}} CSS-Eigenschaft stattdessen, da dieses Attribut veraltet ist.

- `char` {{deprecated_inline}}

  - : Macht nichts. Es war ursprünglich dazu gedacht, die Ausrichtung des Inhalts an einem Zeichen jeder Fußzelle festzulegen. Typische Werte dafür sind ein Punkt (`.`), wenn versucht wird, Zahlen oder Geldbeträge auszurichten. Wenn [`align`](#align) nicht auf `char` gesetzt ist, wird dieses Attribut ignoriert.

- `charoff` {{deprecated_inline}}

  - : Macht nichts. Es war ursprünglich dazu gedacht, die Anzahl der Zeichen anzugeben, um den Inhalts der Fußzelle von dem durch das [`char`](#char)-Attribut spezifizierten Ausrichtungszeichen zu versetzen.

- `valign` {{deprecated_inline}}
  - : Gibt die vertikale Ausrichtung jeder Fußzelle an. Die möglichen {{Glossary("enumerated", "aufgelisteten")}} Werte sind `baseline`, `bottom`, `middle` und `top`. Verwenden Sie die {{cssxref("vertical-align")}} CSS-Eigenschaft stattdessen, da dieses Attribut veraltet ist.

## Nutzungshinweise

- Das `<tfoot>` wird nach allen {{HTMLElement("caption")}}, {{HTMLElement("colgroup")}}, {{HTMLElement("thead")}}, {{HTMLElement("tbody")}} und {{HTMLElement("tr")}}-Elementen platziert.
- Zusammen mit den verwandten {{HTMLElement("thead")}} und {{HTMLElement("tbody")}}-Elementen bietet das `<tfoot>`-Element nützliche {{Glossary("semantics", "semantische")}} Informationen und kann beim Rendern für sowohl Bildschirm als auch Druck verwendet werden. Das Angeben solcher Tabelleninhaltgruppen liefert auch wertvolle Kontextinformationen für unterstützende Technologien, einschließlich Bildschirmleser und Suchmaschinen.
- Beim Drucken eines Dokuments in einem mehrseitigen Tabellenfall spezifiziert der Tabellenfuß normalerweise Informationen, die als Zwischensumme auf jeder Seite ausgegeben werden.

## Beispiel

Siehe {{HTMLElement("table")}} für ein vollständiges Tabellenbeispiel, das allgemeine Standards und bewährte Praktiken einführt.

### Tabelle mit Fußzeile

Dieses Beispiel zeigt eine Tabelle, die in einen Kopfbereich mit Spaltenüberschriften, einen Hauptdatenbereich der Tabelle und einen Fußbereich, der die Daten einer Spalte zusammenfasst, unterteilt ist.

#### HTML

Die {{HTMLElement("thead")}}, {{HTMLElement("tbody")}}, und `<tfoot>`-Elemente werden verwendet, um eine grundlegende Tabelle in {{Glossary("semantics", "semantische")}} Abschnitte zu strukturieren. Das `<tfoot>`-Element repräsentiert den Fußbereich der Tabelle, der eine Zeile ({{HTMLElement("tr")}}) enthält, die den berechneten Durchschnitt der Werte in der "Credits"-Spalte darstellt.

Um die Zellen im Fuß den richtigen Spalten zuzuordnen, wird das [`colspan`](/de/docs/Web/HTML/Reference/Elements/th#colspan)-Attribut auf dem {{HTMLElement("th")}}-Element verwendet, um die Zeilen-Header-Zelle über die ersten drei Tabellenspalten zu spannen. Die einzelne Datenzelle ({{HTMLElement("td")}}) im Fuß wird automatisch an der richtigen Stelle, d.h. in der vierten Spalte, platziert, wobei der weggelassene [`colspan`](/de/docs/Web/HTML/Reference/Elements/td#colspan)-Attributwert standardmäßig auf `1` steht. Zusätzlich wird das [`scope`](/de/docs/Web/HTML/Reference/Elements/th#scope)-Attribut auf `row` an der Header-Zelle ({{HTMLElement("th")}}) im Fuß gesetzt, um explizit zu definieren, dass diese Fuß-Header-Zelle mit den Tabellenzellen in derselben Zeile zusammenhängt, was in unserem Beispiel die eine Datenzelle im Fuß ist, die den berechneten Durchschnitt enthält.

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

Einige grundlegende CSS wird verwendet, um den Tabellenfuß zu stylen und hervorzuheben, damit die Fußzellen sich von den Daten im Tabellenkörper abheben.

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
      <td>Null oder mehr {{HTMLElement("tr")}}-Elemente.</td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>
        Das Start-Tag ist obligatorisch. Das End-Tag kann weggelassen werden, wenn kein weiterer Inhalt im übergeordneten {{HTMLElement("table")}}-Element vorhanden ist.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Ein {{HTMLElement("table")}}-Element. Das
        <code>&lt;tfoot&gt;</code> muss nach allen
        {{HTMLElement("caption")}},
        {{HTMLElement("colgroup")}}, {{HTMLElement("thead")}},
        {{HTMLElement("tbody")}}, und {{HTMLElement("tr")}}
        -Elementen erscheinen. Beachten Sie, dass dies die Anforderung in HTML ist.<br />Ursprünglich war in HTML4 das Gegenteil der Fall: das <code>&lt;tfoot&gt;</code>-Element durfte nicht nach einer der
        {{HTMLElement("tbody")}} und {{HTMLElement("tr")}}
        -Elemente platziert werden.
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

- [Lernen: HTML-Tabelle Grundlagen](/de/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics)
- {{HTMLElement("caption")}}, {{HTMLElement("col")}}, {{HTMLElement("colgroup")}}, {{HTMLElement("table")}}, {{HTMLElement("tbody")}}, {{HTMLElement("td")}}, {{HTMLElement("th")}}, {{HTMLElement("thead")}}, {{HTMLElement("tr")}}: Weitere tabellenbezogene Elemente
- {{cssxref("background-color")}}: CSS-Eigenschaft, um die Hintergrundfarbe jeder Fußzelle festzulegen
- {{cssxref("border")}}: CSS-Eigenschaft, um Ränder der Fußzellen zu steuern
- {{cssxref("text-align")}}: CSS-Eigenschaft, um den Inhalt jeder Fußzelle horizontal auszurichten
- {{cssxref("vertical-align")}}: CSS-Eigenschaft, um den Inhalt jeder Fußzelle vertikal auszurichten
