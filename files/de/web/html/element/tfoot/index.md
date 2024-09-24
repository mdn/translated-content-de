---
title: "<tfoot>: Das Tabellenfuß-Element"
slug: Web/HTML/Element/tfoot
l10n:
  sourceCommit: 8b4e6b773d03959d5a5b2d02200243c4714079b9
---

{{HTMLSidebar}}

Das **`<tfoot>`**-[HTML](/de/docs/Web/HTML)-Element kapselt eine Gruppe von Tabellenzeilen ({{HTMLElement("tr")}}-Elemente) und signalisiert, dass sie den Fuß einer Tabelle bilden, die Informationen über die Spalten der Tabelle enthält. Dies ist gewöhnlich eine Zusammenfassung der Spalten, z.B. eine Summe der in einer Spalte angegebenen Zahlen.

{{EmbedInteractiveExample("pages/tabbed/tfoot.html","tabbed-taller")}}

## Attribute

Dieses Element enthält die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

### Veraltete Attribute

Die folgenden Attribute sind veraltet und sollten nicht mehr verwendet werden. Sie sind hier dokumentiert, um beim Aktualisieren vorhandenen Codes als Referenz und aus historischem Interesse betrachtet zu werden.

- `align` {{deprecated_inline}}

  - : Gibt die horizontale Ausrichtung jeder Fußzelle an. Die möglichen {{Glossary("enumerierten")}} Werte sind `left`, `center`, `right`, `justify` und `char`. Wenn unterstützt, richtet der `char`-Wert den Textinhalt am Zeichen aus, das im [`char`](#char)-Attribut definiert ist, sowie an einem Offset, das durch das [`charoff`](#charoff)-Attribut festgelegt ist. Verwenden Sie stattdessen die {{cssxref("text-align")}} CSS-Eigenschaft, da dieses Attribut veraltet ist.

- `bgcolor` {{deprecated_inline}}

  - : Definiert die Hintergrundfarbe jeder Fußzelle. Der Wert ist eine HTML-Farbe; entweder ein [6-stelliger hexadezimaler RGB-Code](/de/docs/Web/CSS/hex-color), der mit einem '`#`' eingeleitet wird, oder ein [Farbenschlüsselwort](/de/docs/Web/CSS/named-color). Andere CSS-{{cssxref("color_value", "&lt;color&gt")}}-Werte werden nicht unterstützt. Verwenden Sie stattdessen die {{cssxref("background-color")}} CSS-Eigenschaft, da dieses Attribut veraltet ist.

- `char` {{deprecated_inline}}

  - : Macht nichts. Es war ursprünglich dazu gedacht, die Ausrichtung des Inhalts an einem Zeichen jeder Fußzelle zu spezifizieren. Typische Werte umfassen einen Punkt (`.`), wenn versucht wird, Zahlen oder Geldwerte auszurichten. Wenn [`align`](#align) nicht auf `char` gesetzt ist, wird dieses Attribut ignoriert.

- `charoff` {{deprecated_inline}}

  - : Macht nichts. Es war ursprünglich dazu gedacht, die Anzahl von Zeichen zu spezifizieren, um die der Inhalt der Fußzelle vom Ausrichtungszeichen, das durch das [`char`](#char)-Attribut festgelegt ist, versetzt werden soll.

- `valign` {{deprecated_inline}}

  - : Gibt die vertikale Ausrichtung jeder Fußzelle an. Die möglichen {{Glossary("enumerierten")}} Werte sind `baseline`, `bottom`, `middle` und `top`. Verwenden Sie stattdessen die {{cssxref("vertical-align")}} CSS-Eigenschaft, da dieses Attribut veraltet ist.

## Verwendungshinweise

- Das `<tfoot>` wird nach allen {{HTMLElement("caption")}}, {{HTMLElement("colgroup")}}, {{HTMLElement("thead")}}, {{HTMLElement("tbody")}} und {{HTMLElement("tr")}}-Elementen platziert.
- Zusammen mit seinen zugehörigen {{HTMLElement("thead")}}- und {{HTMLElement("tbody")}}-Elementen bietet das `<tfoot>`-Element nützliche {{Glossary("Semantik", "semantische")}} Informationen und kann sowohl bei der Darstellung auf Bildschirmen als auch beim Drucken verwendet werden. Solche Tabellengruppen anzugeben, bietet auch wertvolle kontextuelle Informationen für unterstützende Technologien, einschließlich Bildschirmleser und Suchmaschinen.
- Beim Drucken eines Dokuments gibt der Tabellenfuß bei einer mehrseitigen Tabelle normalerweise Informationen an, die als Zwischensumme auf jeder Seite ausgegeben werden.

## Beispiel

Siehe {{HTMLElement("table")}} für ein vollständiges Tabellenbeispiel mit gängigen Standards und bewährten Vorgehensweisen.

### Tabelle mit Fuß

Dieses Beispiel zeigt eine Tabelle, die in einen Kopfbereich mit Spaltenüberschriften, einen Hauptbereich mit den Hauptdaten der Tabelle und einen Fußbereich unterteilt ist, der Daten einer Spalte zusammenfasst.

#### HTML

Die {{HTMLElement("thead")}}, {{HTMLElement("tbody")}}, und `<tfoot>`-Elemente werden verwendet, um eine Grundtabelle in {{Glossary("semantische", "semantische")}} Abschnitte zu strukturieren. Das `<tfoot>`-Element stellt den Fußabschnitt der Tabelle dar, der eine Zeile ({{HTMLElement("tr")}}) enthält, die den berechneten Durchschnitt der Werte in der "Credits"-Spalte darstellt.

Um die Zellen im Fuß den richtigen Spalten zuzuordnen, wird das [`colspan`](/de/docs/Web/HTML/Element/th#colspan)-Attribut auf dem {{HTMLElement("th")}}-Element verwendet, um die Spaltenkopfzelle über die ersten drei Tabellenspalten zu spannen. Die einzelne Datenzelle ({{HTMLElement("td")}}) im Fuß wird automatisch am richtigen Ort platziert, d.h., in der vierten Spalte, wobei der ausgelassene [`colspan`](/de/docs/Web/HTML/Element/td#colspan)-Attributwert standardmäßig auf `1` gesetzt wird. Zusätzlich wird das [`scope`](/de/docs/Web/HTML/Element/th#scope)-Attribut auf `row` für die Kopfzelle ({{HTMLElement("th")}}) im Fuß gesetzt, um explizit anzugeben, dass sich diese Fußkopfzelle auf die Tabellenzellen in derselben Zeile bezieht, die in unserem Beispiel die eine Datenzelle in der Fußzeile mit dem berechneten Durchschnitt enthält.

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

Einfaches CSS wird verwendet, um den Tabellenfuß zu gestalten und hervorzuheben, sodass sich die Fußzellen vom Datenkörper der Tabelle abheben.

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
      <th scope="row">Erlaubter Inhalt</th>
      <td>Null oder mehr {{HTMLElement("tr")}}-Elemente.</td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>
        Das Start-Tag ist zwingend erforderlich. Das End-Tag kann weggelassen werden, wenn im übergeordneten {{HTMLElement("table")}}-Element kein weiterer Inhalt vorhanden ist.
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
        Elementen erscheinen. Beachten Sie, dass dies die Anforderung in HTML ist.<br />Ursprünglich, in HTML4, galt das Gegenteil: Das <code>&lt;tfoot&gt;</code>-Element durfte nicht nach einem
        {{HTMLElement("tbody")}} und {{HTMLElement("tr")}}
        Element platziert werden.
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
      <td>Beliebige</td>
    </tr>
    <tr>
      <th scope="row">DOM-Schnittstelle</th>
      <td>{{domxref("HTMLTableSectionElement")}}</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- [Lernen: HTML-Tabellen](/de/docs/Learn/HTML/Tables)
- {{HTMLElement("caption")}}, {{HTMLElement("col")}}, {{HTMLElement("colgroup")}}, {{HTMLElement("table")}}, {{HTMLElement("tbody")}}, {{HTMLElement("td")}}, {{HTMLElement("th")}}, {{HTMLElement("thead")}}, {{HTMLElement("tr")}}: Andere tabellenbezogene Elemente
- {{cssxref("background-color")}}: CSS-Eigenschaft zum Festlegen der Hintergrundfarbe jeder Fußzelle
- {{cssxref("border")}}: CSS-Eigenschaft zur Steuerung der Ränder der Fußzellen
- {{cssxref("text-align")}}: CSS-Eigenschaft zur horizontalen Ausrichtung des Inhalts jeder Fußzelle
- {{cssxref("vertical-align")}}: CSS-Eigenschaft zur vertikalen Ausrichtung des Inhalts jeder Fußzelle
