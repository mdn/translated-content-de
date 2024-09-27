---
title: "<tfoot>: Das Table Foot-Element"
slug: Web/HTML/Element/tfoot
l10n:
  sourceCommit: 5bd9fe2b25c6eee2a14d0406ce7116998fa48c13
---

{{HTMLSidebar}}

Das **`<tfoot>`** [HTML](/de/docs/Web/HTML)-Element kapselt eine Gruppe von Tabellenzeilen ({{HTMLElement("tr")}}-Elemente), die angeben, dass sie den Fuß einer Tabelle bilden, der Informationen über die Spalten der Tabelle enthält. Dies ist normalerweise eine Zusammenfassung der Spalten, z. B. eine Summe der angegebenen Zahlen in einer Spalte.

{{EmbedInteractiveExample("pages/tabbed/tfoot.html","tabbed-taller")}}

## Attribute

Dieses Element enthält die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

### Veraltete Attribute

Die folgenden Attribute sind veraltet und sollten nicht verwendet werden. Sie sind unten dokumentiert, um beim Aktualisieren von bestehendem Code als Referenz und aus historischen Gründen nützlich zu sein.

- `align` {{deprecated_inline}}

  - : Gibt die horizontale Ausrichtung jeder Fußzelle an. Die möglichen [enumerierten](/de/docs/Glossary/enumerated) Werte sind `left`, `center`, `right`, `justify` und `char`. Wenn unterstützt, richtet der `char`-Wert den Textinhalt auf dem Zeichen aus, das im [`char`](#char)-Attribut definiert und durch den im [`charoff`](#charoff)-Attribut definierten Versatz eingestellt ist. Verwenden Sie stattdessen die {{cssxref("text-align")}} CSS-Eigenschaft, da dieses Attribut veraltet ist.

- `bgcolor` {{deprecated_inline}}

  - : Definiert die Hintergrundfarbe jeder Fußzelle. Der Wert ist eine HTML-Farbe; entweder ein [6-stelliger hexadezimaler RGB-Code](/de/docs/Web/CSS/hex-color), mit einem `#` vorangestellt, oder ein [Farbschlüsselwort](/de/docs/Web/CSS/named-color). Andere CSS {{cssxref("color_value", "&lt;color&gt")}} Werte werden nicht unterstützt. Verwenden Sie stattdessen die {{cssxref("background-color")}} CSS-Eigenschaft, da dieses Attribut veraltet ist.

- `char` {{deprecated_inline}}

  - : Macht nichts. Es war ursprünglich dazu gedacht, die Ausrichtung des Inhalts auf ein Zeichen in jeder Fußzelle anzugeben. Typische Werte hierfür sind ein Punkt (`.`), wenn versucht wird, Zahlen oder Geldwerte auszurichten. Wenn [`align`](#align) nicht auf `char` gesetzt ist, wird dieses Attribut ignoriert.

- `charoff` {{deprecated_inline}}

  - : Macht nichts. Es war ursprünglich dazu gedacht, die Anzahl der Zeichen anzugeben, um den Inhalt der Fußzelle vom im [`char`](#char)-Attribut angegebenen Ausrichtungszeichen zu versetzen.

- `valign` {{deprecated_inline}}

  - : Gibt die vertikale Ausrichtung jeder Fußzelle an. Die möglichen [enumerierten](/de/docs/Glossary/enumerated) Werte sind `baseline`, `bottom`, `middle` und `top`. Verwenden Sie stattdessen die {{cssxref("vertical-align")}} CSS-Eigenschaft, da dieses Attribut veraltet ist.

## Nutzungshinweise

- Das `<tfoot>` wird nach allen {{HTMLElement("caption")}}, {{HTMLElement("colgroup")}}, {{HTMLElement("thead")}}, {{HTMLElement("tbody")}} und {{HTMLElement("tr")}} Elementen platziert.
- Zusammen mit den verwandten {{HTMLElement("thead")}} und {{HTMLElement("tbody")}} Elementen bietet das `<tfoot>`-Element nützliche [semantische](/de/docs/Glossary/semantics) Informationen und kann sowohl beim Rendern für Bildschirm als auch für Druck verwendet werden. Das Angeben solcher Tablecontent-Gruppen bietet auch wertvolle kontextuelle Informationen für assistive Technologien, einschließlich Bildschirmlesegeräte und Suchmaschinen.
- Beim Drucken eines Dokuments, im Falle einer mehrseitigen Tabelle, gibt der Tabellenfuß normalerweise Informationen an, die als Zwischensumme auf jeder Seite ausgegeben werden.

## Beispiel

Siehe {{HTMLElement("table")}} für ein vollständiges Tabellenbeispiel, das allgemeine Standards und Best Practices einführt.

### Tabelle mit Fußzeile

Dieses Beispiel zeigt eine Tabelle, die in einen Kopfbereich mit Spaltenüberschriften, einen Hauptdatenbereich der Tabelle und einen Fußbereich, der die Daten einer Spalte zusammenfasst, unterteilt ist.

#### HTML

Die {{HTMLElement("thead")}}, {{HTMLElement("tbody")}} und `<tfoot>` Elemente werden verwendet, um eine grundlegende Tabelle in [semantische](/de/docs/Glossary/semantics) Abschnitte zu strukturieren. Das `<tfoot>` Element repräsentiert den Fußbereich der Tabelle, der eine Zeile ({{HTMLElement("tr")}}) enthält, die den berechneten Durchschnitt der Werte in der "Credits"-Spalte darstellt.

Um die Zellen im Fuß den richtigen Spalten zuzuordnen, wird das [`colspan`](/de/docs/Web/HTML/Element/th#colspan)-Attribut auf dem {{HTMLElement("th")}} Element verwendet, um die Kopfzeile der Zeile über die ersten drei Tabellenspalten zu spannen. Die einzelne Datenzelle ({{HTMLElement("td")}}) im Fuß wird automatisch an der richtigen Stelle platziert, d. h. in der vierten Spalte, wobei der ausgelassene [`colspan`](/de/docs/Web/HTML/Element/td#colspan)-Attributwert standardmäßig auf `1` gesetzt ist. Zusätzlich wird das [`scope`](/de/docs/Web/HTML/Element/th#scope)-Attribut auf `row` in der Kopfzelle ({{HTMLElement("th")}}) im Fuß gesetzt, um explizit festzulegen, dass diese Fußkopfzelle sich auf die Tabellenzellen innerhalb derselben Zeile bezieht, die in unserem Beispiel die eine Datenzelle in der Fußzeile ist, die den berechneten Durchschnitt enthält.

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

Einige grundlegende CSS wird verwendet, um den Tabellenfuß zu stylen und hervorzuheben, sodass sich die Fußzellen von den Daten im Tabellenkörper abheben.

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
        Der Start-Tag ist obligatorisch. Der End-Tag kann weggelassen werden, wenn kein weiterer Inhalt im übergeordneten {{HTMLElement("table")}}-Element vorhanden ist.
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
        Elementen erscheinen. Beachten Sie, dass dies die Anforderung in HTML ist.<br />Ursprünglich war im HTML4 das Gegenteil der Fall: Das <code>&lt;tfoot&gt;</code>-Element konnte nicht nach irgendwelchen
        {{HTMLElement("tbody")}} und {{HTMLElement("tr")}}
        Elementen platziert werden.
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

- [Lernen: HTML Tabellen](/de/docs/Learn/HTML/Tables)
- {{HTMLElement("caption")}}, {{HTMLElement("col")}}, {{HTMLElement("colgroup")}}, {{HTMLElement("table")}}, {{HTMLElement("tbody")}}, {{HTMLElement("td")}}, {{HTMLElement("th")}}, {{HTMLElement("thead")}}, {{HTMLElement("tr")}}: Andere tabellenbezogene Elemente
- {{cssxref("background-color")}}: CSS-Eigenschaft zur Einstellung der Hintergrundfarbe jeder Fußzelle
- {{cssxref("border")}}: CSS-Eigenschaft zur Steuerung der Ränder von Fußzellen
- {{cssxref("text-align")}}: CSS-Eigenschaft zur horizontalen Ausrichtung des Inhalts jeder Fußzelle
- {{cssxref("vertical-align")}}: CSS-Eigenschaft zur vertikalen Ausrichtung des Inhalts jeder Fußzelle
