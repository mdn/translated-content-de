---
title: "<tfoot>: Das Tabellenfuß-Element"
slug: Web/HTML/Reference/Elements/tfoot
l10n:
  sourceCommit: 7c28cd21b705e7b7664d53b4d7822469ea8e6e15
---

Das **`<tfoot>`** [HTML](/de/docs/Web/HTML) Element kapselt eine Reihe von Tabellenzeilen ({{HTMLElement("tr")}} Elemente) ein und zeigt an, dass sie den Fuß einer Tabelle mit Informationen über die Tabellenspalten bilden. Dies ist normalerweise eine Zusammenfassung der Spalten, z. B. eine Summe der angegebenen Zahlen in einer Spalte.

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

Die folgenden Attribute sind veraltet und sollten nicht verwendet werden. Sie sind unten dokumentiert, um beim Aktualisieren von bestehendem Code als Referenz und aus historischem Interesse zu dienen.

- `align` {{deprecated_inline}}
  - : Gibt die horizontale Ausrichtung jeder Fußzelle an. Die möglichen {{Glossary("enumerated", "aufgezählten")}} Werte sind `left`, `center`, `right`, `justify` und `char`. Wenn unterstützt, richtet der Wert `char` den Textinhalt an dem in dem [`char`](#char) Attribut definierten Zeichen und dem durch das [`charoff`](#charoff) Attribut definierten Versatz aus. Verwenden Sie stattdessen die {{cssxref("text-align")}} CSS-Eigenschaft, da dieses Attribut veraltet ist.

- `bgcolor` {{deprecated_inline}}
  - : Definiert die Hintergrundfarbe jeder Fußzelle. Der Wert ist eine HTML-Farbe; entweder ein [6-stelliger hexadezimaler RGB-Code](/de/docs/Web/CSS/Reference/Values/hex-color), mit einem `#` vorangestellt, oder ein [Farb-Stichwort](/de/docs/Web/CSS/Reference/Values/named-color). Andere CSS {{cssxref("&lt;color&gt;")}} Werte werden nicht unterstützt. Verwenden Sie stattdessen die {{cssxref("background-color")}} CSS-Eigenschaft, da dieses Attribut veraltet ist.

- `char` {{deprecated_inline}}
  - : Macht nichts. Es war ursprünglich vorgesehen, die Ausrichtung des Inhalts an einem Zeichen jeder Fußzelle festzulegen. Typische Werte hierfür sind ein Punkt (`.`), wenn versucht wird, Zahlen oder Geldbeträge auszurichten. Wenn [`align`](#align) nicht auf `char` gesetzt ist, wird dieses Attribut ignoriert.

- `charoff` {{deprecated_inline}}
  - : Macht nichts. Es war ursprünglich vorgesehen, die Anzahl der Zeichen anzugeben, um den Inhalt der Fußzelle von dem durch das [`char`](#char) Attribut angegebenen Ausrichtungszeichen zu verschieben.

- `valign` {{deprecated_inline}}
  - : Gibt die vertikale Ausrichtung jeder Fußzelle an. Die möglichen {{Glossary("enumerated", "aufgezählten")}} Werte sind `baseline`, `bottom`, `middle` und `top`. Verwenden Sie stattdessen die {{cssxref("vertical-align")}} CSS-Eigenschaft, da dieses Attribut veraltet ist.

## Nutzungshinweise

- Das `<tfoot>` wird nach jedem {{HTMLElement("caption")}}, {{HTMLElement("colgroup")}}, {{HTMLElement("thead")}}, {{HTMLElement("tbody")}}, und {{HTMLElement("tr")}} Element platziert.
- Zusammen mit seinen verwandten {{HTMLElement("thead")}} und {{HTMLElement("tbody")}} Elementen liefert das `<tfoot>` Element nützliche {{Glossary("semantics", "semantische")}} Informationen und kann sowohl bei der Anzeige am Bildschirm als auch beim Drucken verwendet werden. Die Spezifikation solcher Tabellengruppen liefert auch wertvolle kontextuelle Informationen für unterstützende Technologien, einschließlich Bildschirmlesern und Suchmaschinen.
- Beim Drucken eines Dokuments, in der Situation einer mehrseitigen Tabelle, gibt der Tabellenfuß normalerweise Informationen an, die als Zwischensumme auf jeder Seite ausgegeben werden.

## Beispiel

Siehe {{HTMLElement("table")}} für ein vollständiges Tabellenbeispiel mit allgemeinen Standards und bewährten Praktiken.

### Tabelle mit Fußzeile

Dieses Beispiel zeigt eine Tabelle, die in einen Kopfteil mit Spaltenüberschriften, einen Hauptteil mit den Hauptdaten der Tabelle und einen Fußteil, der die Daten einer Spalte zusammenfasst, unterteilt ist.

#### HTML

Die {{HTMLElement("thead")}}, {{HTMLElement("tbody")}} und `<tfoot>` Elemente werden verwendet, um eine grundlegende Tabelle in {{Glossary("semantics", "semantische")}} Abschnitte zu strukturieren. Das `<tfoot>` Element repräsentiert den Fußabschnitt der Tabelle, der eine Zeile ({{HTMLElement("tr")}}) repräsentiert, die den berechneten Durchschnitt der Werte in der "Credits"-Spalte enthält.

Um die Zellen im Fuß den richtigen Spalten zuzuordnen, wird das [`colspan`](/de/docs/Web/HTML/Reference/Elements/th#colspan) Attribut auf dem {{HTMLElement("th")}} Element verwendet, um die Zeilenkopfzelle über die ersten drei Tabellenspalten zu spannen. Die einzelne Datenzelle ({{HTMLElement("td")}}) im Fuß wird automatisch an der richtigen Stelle platziert, d.h. in der vierten Spalte, wobei der weggelassene [`colspan`](/de/docs/Web/HTML/Reference/Elements/td#colspan) Attributwert standardmäßig auf `1` gesetzt wird. Zusätzlich wird das [`scope`](/de/docs/Web/HTML/Reference/Elements/th#scope) Attribut auf `row` in der Kopfzelle ({{HTMLElement("th")}}) im Fuß gesetzt, um explizit zu definieren, dass diese Fußkopfzelle sich auf die Tabellenzellen innerhalb derselben Zeile bezieht, die in unserem Beispiel die eine Datenzelle in der Fußzeile ist, die den berechneten Durchschnitt enthält.

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

Einige grundlegende CSS wird verwendet, um den Tabellenfuß zu stylen und hervorzuheben, damit die Fußzellen sich von den Daten im Tabellenteil abheben.

```css
tfoot {
  border-top: 3px dotted rgb(160 160 160);
  background-color: #2c5e77;
  color: white;
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
        Das Anfangs-Tag ist obligatorisch. Das End-Tag kann weggelassen werden, wenn kein weiterer Inhalt im übergeordneten {{HTMLElement("table")}} Element vorhanden ist.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Ein {{HTMLElement("table")}} Element. Das
        <code>&lt;tfoot&gt;</code> muss nach jedem
        {{HTMLElement("caption")}},
        {{HTMLElement("colgroup")}}, {{HTMLElement("thead")}},
        {{HTMLElement("tbody")}}, und {{HTMLElement("tr")}}
        Element erscheinen. Beachten Sie, dass dies die Anforderung in HTML ist.<br />Ursprünglich, in HTML4, war das Gegenteil der Fall: Das <code>&lt;tfoot&gt;</code> Element konnte nicht nach irgendwelchen
        {{HTMLElement("tbody")}} und {{HTMLElement("tr")}}
        Elementen platziert werden.
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
- {{HTMLElement("caption")}}, {{HTMLElement("col")}}, {{HTMLElement("colgroup")}}, {{HTMLElement("table")}}, {{HTMLElement("tbody")}}, {{HTMLElement("td")}}, {{HTMLElement("th")}}, {{HTMLElement("thead")}}, {{HTMLElement("tr")}}: Andere tabellenbezogene Elemente
- {{cssxref("background-color")}}: CSS-Eigenschaft zum Festlegen der Hintergrundfarbe jeder Fußzelle
- {{cssxref("border")}}: CSS-Eigenschaft zur Steuerung der Ränder von Fußzellen
- {{cssxref("text-align")}}: CSS-Eigenschaft zur horizontalen Ausrichtung des Inhalts jeder Fußzelle
- {{cssxref("vertical-align")}}: CSS-Eigenschaft zur vertikalen Ausrichtung des Inhalts jeder Fußzelle
