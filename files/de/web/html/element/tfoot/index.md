---
title: "<tfoot>: Das Table Foot-Element"
slug: Web/HTML/Element/tfoot
l10n:
  sourceCommit: 8b02826c79b090b5af0d68ae1ef39f932a66a7f1
---

{{HTMLSidebar}}

Das **`<tfoot>`** [HTML](/de/docs/Web/HTML)-Element kapselt eine Reihe von Tabellenzeilen ({{HTMLElement("tr")}}-Elemente) ein und gibt an, dass sie den Fuß einer Tabelle bilden und Informationen über die Tabellenspalten enthalten. Dies ist normalerweise eine Zusammenfassung der Spalten, z. B. eine Summe der in einer Spalte angegebenen Zahlen.

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

Dieses Element enthält die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

### Veraltete Attribute

Die folgenden Attribute sind veraltet und sollten nicht verwendet werden. Sie sind hier dokumentiert, um bei der Aktualisierung vorhandenen Codes als Referenz und nur aus historischem Interesse zur Verfügung zu stehen.

- `align` {{deprecated_inline}}

  - : Gibt die horizontale Ausrichtung jeder Fußzelle an. Die möglichen {{Glossary("enumerated", "aufzählbaren")}} Werte sind `left`, `center`, `right`, `justify` und `char`. Wenn unterstützt, richtet der Wert `char` den Textinhalt am Zeichen aus, das im [`char`](#char)-Attribut definiert ist, und auf den im [`charoff`](#charoff)-Attribut definierten Versatz. Verwenden Sie stattdessen die {{cssxref("text-align")}} CSS-Eigenschaft, da dieses Attribut veraltet ist.

- `bgcolor` {{deprecated_inline}}

  - : Definiert die Hintergrundfarbe jeder Fußzelle. Der Wert ist eine HTML-Farbe; entweder ein [6-stelliger hexadezimaler RGB-Code](/de/docs/Web/CSS/hex-color), eingeleitet durch ein `#`, oder ein [Farbbezeichner](/de/docs/Web/CSS/named-color). Andere CSS {{cssxref("color_value", "&lt;color&gt")}}-Werte werden nicht unterstützt. Verwenden Sie stattdessen die {{cssxref("background-color")}} CSS-Eigenschaft, da dieses Attribut veraltet ist.

- `char` {{deprecated_inline}}

  - : Hat keine Funktion. Es war ursprünglich dazu gedacht, die Ausrichtung des Inhalts an einem Zeichen in jeder Fußzelle anzugeben. Typische Werte hierfür sind ein Punkt (`.`), wenn versucht wird, Zahlen oder Geldbeträge auszurichten. Wenn [`align`](#align) nicht auf `char` gesetzt ist, wird dieses Attribut ignoriert.

- `charoff` {{deprecated_inline}}

  - : Hat keine Funktion. Es war ursprünglich dazu gedacht, die Anzahl der Zeichen anzugeben, die der Inhalt der Fußzelle vom Ausrichtungszeichen, das durch das [`char`](#char)-Attribut spezifiziert wird, versetzt wird.

- `valign` {{deprecated_inline}}

  - : Gibt die vertikale Ausrichtung jeder Fußzelle an. Die möglichen {{Glossary("enumerated", "aufzählbaren")}} Werte sind `baseline`, `bottom`, `middle` und `top`. Verwenden Sie stattdessen die {{cssxref("vertical-align")}} CSS-Eigenschaft, da dieses Attribut veraltet ist.

## Nutzungshinweise

- Das `<tfoot>` wird nach allen {{HTMLElement("caption")}}, {{HTMLElement("colgroup")}}, {{HTMLElement("thead")}}, {{HTMLElement("tbody")}} und {{HTMLElement("tr")}}-Elementen platziert.
- Zusammen mit seinen verwandten {{HTMLElement("thead")}}- und {{HTMLElement("tbody")}}-Elementen bietet das `<tfoot>`-Element nützliche {{Glossary("semantics", "semantische")}} Informationen und kann beim Rendern sowohl auf dem Bildschirm als auch beim Drucken verwendet werden. Das Spezifizieren solcher Tabellengruppierungen bietet auch wertvolle kontextuelle Informationen für unterstützende Technologien, einschließlich Bildschirmlesegeräten und Suchmaschinen.
- Beim Drucken eines Dokuments, im Fall einer mehrseitigen Tabelle, gibt der Tabellenfuß normalerweise Informationen an, die auf jeder Seite als Zwischenzusammenfassung ausgegeben werden.

## Beispiel

Siehe {{HTMLElement("table")}} für ein vollständiges Tabellenbeispiel, das die üblichen Standards und bewährten Verfahren einführt.

### Tabelle mit Fußzeile

Dieses Beispiel zeigt eine Tabelle, die in einen Kopfbereich mit Spaltenüberschriften, einen Hauptbereich mit den Hauptdaten der Tabelle und einen Fußbereich unterteilt ist, der Daten einer Spalte zusammenfasst.

#### HTML

Die {{HTMLElement("thead")}}, {{HTMLElement("tbody")}} und `<tfoot>`-Elemente werden verwendet, um eine grundlegende Tabelle in {{Glossary("semantics", "semantische")}} Abschnitte zu gliedern. Das `<tfoot>`-Element repräsentiert den Fußbereich der Tabelle, der eine Zeile ({{HTMLElement("tr")}}) enthält, die den berechneten Durchschnitt der Werte in der "Credits"-Spalte darstellt.

Um die Zellen im Fuß den richtigen Spalten zuzuordnen, wird das [`colspan`](/de/docs/Web/HTML/Element/th#colspan)-Attribut auf dem {{HTMLElement("th")}}-Element verwendet, um die Zeilenkopfzelle über die ersten drei Tabellenspalten zu spannen. Die einzelne Datenzelle ({{HTMLElement("td")}}) im Fuß wird automatisch an der korrekten Stelle platziert, d. h. in der vierten Spalte, wobei der weggelassene Wert des [`colspan`](/de/docs/Web/HTML/Element/td#colspan)-Attributs standardmäßig `1` ist. Zusätzlich wird das [`scope`](/de/docs/Web/HTML/Element/th#scope)-Attribut auf `row` auf der Kopfzeile ({{HTMLElement("th")}}) im Fuß gesetzt, um explizit zu definieren, dass sich diese Kopfzelle des Fußes auf die Tabellenzellen derselben Zeile bezieht, die in unserem Beispiel die eine Datenzelle in der Fußzeile ist, die den berechneten Durchschnitt enthält.

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

Einige grundlegende CSS-Stile werden verwendet, um den Tabellenfuß zu gestalten und hervorzuheben, sodass die Fußzellen sich von den Daten im Haupttabellenbereich abheben.

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
        <a href="/de/docs/Web/HTML/Content_categories"
          >Inhaltskategorien</a
        >
      </th>
      <td>Keine.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Inhalte</th>
      <td>Null oder mehr {{HTMLElement("tr")}}-Elemente.</td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>
        Das Start-Tag ist obligatorisch. Das End-Tag kann ausgelassen werden, wenn im übergeordneten {{HTMLElement("table")}}-Element kein weiterer Inhalt mehr vorhanden ist.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Ein {{HTMLElement("table")}}-Element. Das
        <code>&lt;tfoot&gt;</code> muss nach allen
        {{HTMLElement("caption")}}, {{HTMLElement("colgroup")}},
        {{HTMLElement("thead")}}, {{HTMLElement("tbody")}} und
        {{HTMLElement("tr")}}-Elementen erscheinen. Beachten Sie, dass dies die Anforderung in HTML ist.<br />Ursprünglich war in HTML4 das Gegenteil der Fall: Das <code>&lt;tfoot&gt;</code> Element durfte nicht nach irgendeinem {{HTMLElement("tbody")}} und {{HTMLElement("tr")}}-Element platziert werden.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
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

- [Lernen: HTML-Tabellen-Grundlagen](/de/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics)
- {{HTMLElement("caption")}}, {{HTMLElement("col")}}, {{HTMLElement("colgroup")}}, {{HTMLElement("table")}}, {{HTMLElement("tbody")}}, {{HTMLElement("td")}}, {{HTMLElement("th")}}, {{HTMLElement("thead")}}, {{HTMLElement("tr")}}: Andere tabellenbezogene Elemente
- {{cssxref("background-color")}}: CSS-Eigenschaft zum Festlegen der Hintergrundfarbe jeder Fußzelle
- {{cssxref("border")}}: CSS-Eigenschaft zur Steuerung der Ränder von Fußzellen
- {{cssxref("text-align")}}: CSS-Eigenschaft zur horizontalen Ausrichtung des Inhalts jeder Fußzelle
- {{cssxref("vertical-align")}}: CSS-Eigenschaft zur vertikalen Ausrichtung des Inhalts jeder Fußzelle
