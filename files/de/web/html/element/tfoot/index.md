---
title: "<tfoot>: Das Table Foot Element"
slug: Web/HTML/Element/tfoot
l10n:
  sourceCommit: 5bd9fe2b25c6eee2a14d0406ce7116998fa48c13
---

{{HTMLSidebar}}

Das **`<tfoot>`** [HTML](/de/docs/Web/HTML)-Element kapselt eine Gruppe von Tabellenzeilen ({{HTMLElement("tr")}}-Elemente) ein und weist darauf hin, dass sie den Fuß einer Tabelle bilden, mit Informationen über die Spalten der Tabelle. Dies ist gewöhnlich eine Zusammenfassung der Spalten, z.B. eine Summe der in einer Spalte angegebenen Zahlen.

{{EmbedInteractiveExample("pages/tabbed/tfoot.html","tabbed-taller")}}

## Attribute

Dieses Element enthält die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

### Veraltete Attribute

Die folgenden Attribute sind veraltet und sollten nicht verwendet werden. Sie sind hier dokumentiert, um vorhandenen Code zu aktualisieren und aus historischem Interesse.

- `align` {{deprecated_inline}}

  - : Gibt die horizontale Ausrichtung jeder Fußzelle an. Die möglichen {{Glossary("enumerated", "aufgezählten")}} Werte sind `left`, `center`, `right`, `justify` und `char`. Wenn unterstützt, richtet der Wert `char` den Textinhalt an dem Zeichen aus, das im [`char`](#char)-Attribut definiert ist, sowie an einem im [`charoff`](#charoff)-Attribut definierten Versatz. Verwenden Sie stattdessen die {{cssxref("text-align")}} CSS-Eigenschaft, da dieses Attribut veraltet ist.

- `bgcolor` {{deprecated_inline}}

  - : Definiert die Hintergrundfarbe jeder Fußzelle. Der Wert ist eine HTML-Farbe; entweder ein [6-stelliger hexadezimaler RGB-Code](/de/docs/Web/CSS/hex-color), vorangestellt von einem `#`, oder ein [Farbschlüsselwort](/de/docs/Web/CSS/named-color). Andere CSS {{cssxref("color_value", "&lt;color&gt")}} Werte werden nicht unterstützt. Verwenden Sie stattdessen die {{cssxref("background-color")}} CSS-Eigenschaft, da dieses Attribut veraltet ist.

- `char` {{deprecated_inline}}

  - : Hat keine Funktion. Ursprünglich gedacht, um die Ausrichtung des Inhalts an einem Zeichen jeder Fußzelle anzugeben. Typische Werte hierfür beinhalten einen Punkt (`.`), wenn versucht wird, Zahlen oder Geldwerte auszurichten. Wenn [`align`](#align) nicht auf `char` gesetzt ist, wird dieses Attribut ignoriert.

- `charoff` {{deprecated_inline}}

  - : Hat keine Funktion. Ursprünglich gedacht, die Anzahl der Zeichen anzugeben, um den Inhalt der Fußzelle von dem im [`char`](#char)-Attribut angegebenen Ausrichtungszeichen zu versetzen.

- `valign` {{deprecated_inline}}

  - : Gibt die vertikale Ausrichtung jeder Fußzelle an. Die möglichen {{Glossary("enumerated", "aufgezählten")}} Werte sind `baseline`, `bottom`, `middle` und `top`. Verwenden Sie stattdessen die {{cssxref("vertical-align")}} CSS-Eigenschaft, da dieses Attribut veraltet ist.

## Verwendungshinweise

- Das `<tfoot>` wird nach allen {{HTMLElement("caption")}}, {{HTMLElement("colgroup")}}, {{HTMLElement("thead")}}, {{HTMLElement("tbody")}} und {{HTMLElement("tr")}} Elementen platziert.
- Zusammen mit seinen verwandten {{HTMLElement("thead")}} und {{HTMLElement("tbody")}} Elementen bietet das `<tfoot>` Element nützliche {{Glossary("semantics", "semantische")}} Informationen und kann sowohl beim Rendern für Bildschirm als auch für Druck verwendet werden. Das Spezifizieren solcher Tabellengruppen liefert auch wertvolle kontextbezogene Informationen für unterstützende Technologien wie Screenreader und Suchmaschinen.
- Beim Drucken eines Dokuments wird im Fall einer mehrseitigen Tabelle der Tabellenfuß normalerweise als Zwischensumme auf jeder Seite ausgegeben.

## Beispiel

Siehe {{HTMLElement("table")}} für ein vollständiges Tabellenbeispiel, das gängige Standards und Best Practices einführt.

### Tabelle mit Fußzeile

Dieses Beispiel zeigt eine Tabelle, die in einen Kopfbereich mit Spaltenüberschriften, einen Hauptbereich mit den Hauptdaten der Tabelle und eine Fußzeile unterteilt ist, die die Daten einer Spalte zusammenfasst.

#### HTML

Die {{HTMLElement("thead")}}, {{HTMLElement("tbody")}} und `<tfoot>` Elemente werden verwendet, um eine grundlegende Tabelle in {{Glossary("semantics", "semantische")}} Abschnitte zu strukturieren. Das `<tfoot>` Element repräsentiert den Fußbereich der Tabelle, der eine Zeile ({{HTMLElement("tr")}}) enthält, die den berechneten Durchschnitt der Werte in der "Credits"-Spalte darstellt.

Um die Zellen im Fuß den richtigen Spalten zuzuordnen, wird das [`colspan`](/de/docs/Web/HTML/Element/th#colspan) Attribut auf dem {{HTMLElement("th")}} Element verwendet, um die Kopfzeile über die ersten drei Tabellenspalten zu spannen. Die einzelne Datenzelle ({{HTMLElement("td")}}) im Fuß wird automatisch an der richtigen Stelle platziert, d.h. in der vierten Spalte, wobei der ausgelassene [`colspan`](/de/docs/Web/HTML/Element/td#colspan) Attributwert standardmäßig auf `1` gesetzt ist. Zusätzlich wird das [`scope`](/de/docs/Web/HTML/Element/th#scope) Attribut auf `row` auf der Kopfzelle ({{HTMLElement("th")}}) im Fuß gesetzt, um explizit zu definieren, dass diese Fußkopfzeile sich auf die Tabellenzellen in derselben Zeile bezieht, die in unserem Beispiel die einzige Datenzelle in der Fußzeile ist, die den berechneten Durchschnitt enthält.

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

Einige grundlegende CSS werden verwendet, um den Tabellenfuß zu gestalten und hervorzuheben, sodass sich die Fußzellen von den Daten im Tabellenkörper abheben.

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
          >Inhaltskategorien</a>
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
        Das Start-Tag ist obligatorisch. Das End-Tag kann weggelassen werden, wenn es keinen weiteren Inhalt im übergeordneten {{HTMLElement("table")}} Element gibt.
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
        Elementen erscheinen. Beachten Sie, dass dies die Anforderung in HTML ist.<br />Ursprünglich, in HTML4, war das Gegenteil der Fall: Das <code>&lt;tfoot&gt;</code> Element konnte nicht nach einem
        {{HTMLElement("tbody")}} und {{HTMLElement("tr")}}
        Element platziert werden.
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
      <th scope="row">Zulässige ARIA-Rollen</th>
      <td>Jede</td>
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

- [Lernen: HTML Tabellen](/de/docs/Learn/HTML/Tables)
- {{HTMLElement("caption")}}, {{HTMLElement("col")}}, {{HTMLElement("colgroup")}}, {{HTMLElement("table")}}, {{HTMLElement("tbody")}}, {{HTMLElement("td")}}, {{HTMLElement("th")}}, {{HTMLElement("thead")}}, {{HTMLElement("tr")}}: Andere tabellenbezogene Elemente
- {{cssxref("background-color")}}: CSS-Eigenschaft, um die Hintergrundfarbe jeder Fußzelle festzulegen
- {{cssxref("border")}}: CSS-Eigenschaft, um die Ränder der Fußzellen zu steuern
- {{cssxref("text-align")}}: CSS-Eigenschaft, um den Inhalt jeder Fußzelle horizontal auszurichten
- {{cssxref("vertical-align")}}: CSS-Eigenschaft, um den Inhalt jeder Fußzelle vertikal auszurichten
