---
title: "<tbody>: Das Table Body-Element"
slug: Web/HTML/Reference/Elements/tbody
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar}}

Das **`<tbody>`** [HTML](/de/docs/Web/HTML)-Element kapselt eine Reihe von Tabellenzeilen ({{HTMLElement("tr")}}-Elemente) ein, die den Hauptbestandteil der (Haupt-)Daten einer Tabelle darstellen.

{{InteractiveExample("HTML Demo: &lt;tbody&gt;", "tabbed-taller")}}

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

Die folgenden Attribute sind veraltet und sollten nicht verwendet werden. Sie sind hier nur als Referenz dokumentiert, wenn bestehender Code aktualisiert wird, sowie aus historischem Interesse.

- `align` {{deprecated_inline}}

  - : Gibt die horizontale Ausrichtung jeder Tabellenzelle an. Die möglichen {{Glossary("enumerated", "aufgezählten")}} Werte sind `left`, `center`, `right`, `justify` und `char`. Wenn unterstützt, richtet der Wert `char` den Textinhalt am Zeichen aus, das im [`char`](#char)-Attribut definiert ist, und am Offset, der durch das [`charoff`](#charoff)-Attribut festgelegt ist. Verwenden Sie stattdessen die CSS-Eigenschaft {{cssxref("text-align")}}, da dieses Attribut veraltet ist.

- `bgcolor` {{deprecated_inline}}

  - : Legt die Hintergrundfarbe jeder Tabellenzelle fest. Der Wert ist eine HTML-Farbe, entweder ein [6-stelliger hexadezimaler RGB-Code](/de/docs/Web/CSS/hex-color), der mit einem `#` beginnt, oder ein [Farbbegriff](/de/docs/Web/CSS/named-color). Andere CSS {{cssxref("color_value", "&lt;color&gt")}}-Werte werden nicht unterstützt. Verwenden Sie stattdessen die CSS-Eigenschaft {{cssxref("background-color")}}, da dieses Attribut veraltet ist.

- `char` {{deprecated_inline}}

  - : Gibt die Ausrichtung des Inhalts an einem Zeichen jeder Tabellenzelle an. Typische Werte hierfür sind ein Punkt (`.`), wenn versucht wird, Zahlen oder Geldbeträge auszurichten. Wenn [`align`](#align) nicht auf `char` gesetzt ist, wird dieses Attribut ignoriert.

- `charoff` {{deprecated_inline}}

  - : Gibt die Anzahl der Zeichen an, um den Tabellenzellinhalt von dem Zeichenversatz auszurichten, der durch das [`char`](#char)-Attribut angegeben ist.

- `valign` {{deprecated_inline}}

  - : Gibt die vertikale Ausrichtung jeder Tabellenzelle an. Die möglichen {{Glossary("enumerated", "aufgezählten")}} Werte sind `baseline`, `bottom`, `middle` und `top`. Verwenden Sie stattdessen die CSS-Eigenschaft {{cssxref("vertical-align")}}, da dieses Attribut veraltet ist.

## Verwendungshinweise

- Das `<tbody>`-Element wird nach jedem {{HTMLElement("caption")}}, {{HTMLElement("colgroup")}} und {{HTMLElement("thead")}}-Element platziert.
- Wenn {{HTMLElement("tr")}}-Elemente als direkte Kinder des {{HTMLElement("table")}}-Elements angegeben werden (siehe "Tag omission" in der [technischen Zusammenfassung](#technische_zusammenfassung) für eine Beschreibung, wann dies gültig ist), enthält das vom Browser generierte Markup ein `<tbody>`-Element, das sie kapselt. Infolgedessen werden CSS-Selektoren wie `table > tr` diese Elemente nicht auswählen. Siehe auch das Beispiel [Not specifying a body](#keinen_body_angeben).
- Es ist erlaubt, mehr als ein `<tbody>` pro Tabelle zu verwenden, solange sie alle aufeinander folgend sind. Dies ermöglicht es, die Zeilen ({{HTMLElement("tr")}}-Elemente) in großen Tabellen in Abschnitte zu unterteilen, von denen jeder separat formatiert werden kann, wenn gewünscht. Wenn sie nicht als aufeinander folgende Elemente markiert sind, korrigieren Browser diesen Autorfehler, indem sie sicherstellen, dass {{HTMLElement("thead")}}- und {{HTMLElement("tfoot")}}-Elemente als erste bzw. letzte Elemente der Tabelle angezeigt werden.
- Zusammen mit den zugehörigen {{HTMLElement("thead")}}- und {{HTMLElement("tfoot")}}-Elementen bietet das `<tbody>`-Element nützliche {{Glossary("semantics", "semantische")}} Informationen und kann sowohl bei der Bildschirm- als auch bei der Druckausgabe verwendet werden. Das Spezifizieren solcher Tabelleninhaltsgruppen bietet auch wertvolle kontextuelle Informationen für unterstützende Technologien, einschließlich Bildschirmlesegeräten und Suchmaschinen.
- Beim Drucken eines Dokuments geben die {{HTMLElement("thead")}}- und {{HTMLElement("tfoot")}}-Elemente im Falle einer mehrseitigen Tabelle normalerweise Informationen an, die auf jeder Seite gleich bleiben oder zumindest sehr ähnlich sind, während der Inhalt des `<tbody>`-Elements pageweise unterschiedlich sein wird.
- Wenn eine Tabelle in einem Bildschirmkontext (wie ein Fenster) vorgestellt wird, der nicht groß genug ist, um die gesamte Tabelle anzuzeigen, kann der {{Glossary("user_agent", "User-Agent")}} dem Benutzer ermöglichen, die Inhalte der {{HTMLElement("thead")}}, `<tbody>`, {{HTMLElement("tfoot")}} und {{HTMLElement("caption")}}-Blöcke separat zu scrollen.

## Beispiele

Siehe {{HTMLElement("table")}} für ein vollständiges Tabellenbeispiel mit allgemeinen Standards und Best Practices.

### Keinen Body angeben

Dieses Beispiel zeigt, dass der Browser {{HTMLElement("tr")}}-Elemente automatisch in ein `<tbody>`-Element kapselt, wenn die Zeilen nicht innerhalb eines Tabellen-Gruppenelements (`<tbody>`, `<tfoot>` oder `<thead>`) eingebettet und, wie in diesem Beispiel, direkte Kinder des {{HTMLElement("table")}}-Elements sind.

#### HTML

Hier wird eine sehr einfache Tabelle mit einigen Zeilen ({{HTMLElement("tr")}}-Elemente) erstellt, die Daten ({{HTMLElement("td")}}-Elemente) über Studenten enthalten.

```html
<table>
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
</table>
```

#### CSS

Beachten Sie das CSS im Beispiel, wo eine {{cssxref("background-color")}} für das `<tbody>`-Element angegeben und `tbody` als Teil eines zusätzlichen {{Glossary("css_selector", "CSS-Selektors")}} verwendet wird. Alternativ können {{Glossary("developer_tools", "Entwicklerwerkzeuge des Browsers")}} verwendet werden, um die Anwesenheit des `<tbody>`-Elements im {{Glossary("dom", "DOM")}} zu überprüfen.

```css
tbody {
  background-color: #e4f0f5;
}

tbody > tr > td:last-of-type {
  width: 60px;
  text-align: center;
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

td {
  border: 1px solid rgb(160 160 160);
  padding: 8px 10px;
}
```

#### Ergebnis

{{EmbedLiveSample("Not_specifying_a_body", 650, 100)}}

### Grundlegende Body-Struktur

Dieses Beispiel erweitert und verbessert die Basis-Tabelle aus dem [vorherigen Beispiel](#keinen_body_angeben).

#### HTML

Wir führen einen Tabellenkopf ({{HTMLElement("thead")}}-Element) ein und verwenden explizit ein `<tbody>`-Element, um die Tabelle in {{Glossary("semantics", "semantische")}} Abschnitte zu strukturieren. Der Tabellenkopf enthält die Spaltenüberschriften ({{HTMLElement("th")}}-Elemente). Das `<tbody>`-Element repräsentiert den Hauptbereich der Tabelle, der eine Reihe von Zeilen ({{HTMLElement("tr")}}-Elemente) mit den Hauptdaten der Tabelle darstellt, welche die Daten jedes Schülers sind.

Die Verwendung solcher Tabelleninhaltsgruppen und semantischer Markierungen ist nicht nur für die visuelle Präsentation (über CSS-Styling) und kontextuelle Informationen für assistierende Technologien nützlich; zudem hilft die explizite Verwendung des `<tbody>`-Elements dem Browser, die beabsichtigte Tabellenstruktur zu erstellen und unerwünschte Ergebnisse zu vermeiden.

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

Das CSS ist fast unverändert gegenüber dem [vorherigen Beispiel](#keinen_body_angeben), mit Ausnahme einiger grundlegender Stile, um den Tabellenkopf hervorzuheben, damit die Überschriften der Spalten sich von den Daten im Tabellenkörper abheben. Wie im [obigen Beispiel](#keinen_body_angeben) wird der `tbody` [Typselektor](/de/docs/Web/CSS/Type_selectors) verwendet, um die Tabellendatenzellen zu stylen.

```css
tbody {
  background-color: #e4f0f5;
}

tbody > tr > td:last-of-type {
  text-align: center;
}

thead {
  border-bottom: 2px solid rgb(160 160 160);
  background-color: #2c5e77;
  color: #fff;
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
```

#### Ergebnis

{{EmbedLiveSample("Basic_body_structure", 650, 140)}}

### Mehrfachkörper

Dieses Beispiel erweitert und verbessert die Tabelle vom [obigen Beispiel](#grundlegende_body-struktur) weiter, indem mehrere Body-Abschnitte eingeführt werden.

Der Einsatz mehrerer `<tbody>`-Elemente ermöglicht es, Reihen innerhalb einer Tabelle zu gruppieren. Jeder Tabellenkörper kann potenziell seine eigene Kopfzeile oder eigene Kopfzeilen haben; es _darf jedoch nur ein {{HTMLElement("thead")}}-Element pro Tabelle geben_! Aufgrund dessen können {{HTMLElement("tr")}}-Elemente mit {{HTMLElement("th")}}-Elementen verwendet werden, um Überschriften innerhalb jedes `<tbody>` zu erstellen.

#### HTML

Aufbauend auf der Tabelle im [vorherigen grundlegenden Beispiel](#grundlegende_body-struktur) werden mehr Studenten hinzugefügt und anstatt das Hauptfach jedes einzelnen Schülers in jeder Zeile aufzuführen, werden die Studenten nach Hauptfach gruppiert. Beachten Sie, dass jedes Hauptfach in seinem eigenen `<tbody>`-Block eingeschlossen ist, wobei die erste Reihe ({{HTMLElement("tr")}}-Element) als Kopfzeile des Blocks dient und den Titel des Hauptfachs innerhalb eines {{HTMLElement("th")}}-Elements anzeigt, das das [`colspan`](/de/docs/Web/HTML/Reference/Elements/th#colspan)-Attribut verwendet, um die Kopfzeile über alle drei Spalten der Tabelle zu spannen. Jede verbleibende Zeile innerhalb jedes Hauptfachs `<tbody>` repräsentiert einen Schüler.

```html
<table>
  <thead>
    <tr>
      <th>Student ID</th>
      <th>Name</th>
      <th>Credits</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th colspan="3">Computer Science</th>
    </tr>
    <tr>
      <td>3741255</td>
      <td>Jones, Martha</td>
      <td>240</td>
    </tr>
    <tr>
      <td>4077830</td>
      <td>Pierce, Benjamin</td>
      <td>200</td>
    </tr>
    <tr>
      <td>5151701</td>
      <td>Kirk, James</td>
      <td>230</td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th colspan="3">Russian Literature</th>
    </tr>
    <tr>
      <td>3971244</td>
      <td>Nim, Victor</td>
      <td>220</td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th colspan="3">Astrophysics</th>
    </tr>
    <tr>
      <td>4100332</td>
      <td>Petrov, Alexandra</td>
      <td>260</td>
    </tr>
    <tr>
      <td>8892377</td>
      <td>Toyota, Hiroko</td>
      <td>240</td>
    </tr>
  </tbody>
</table>
```

#### CSS

Die meisten CSS-Eigenschaften sind unverändert. Es wird jedoch ein subtilerer Stil für Kopfzeilenzellen hinzugefügt, die direkt innerhalb eines `<tbody>` anstelle des {{HTMLElement("thead")}}-Elements enthalten sind. Dies wird für die Überschriften verwendet, die das entsprechende Hauptfach jeder Tabellenabschnitts anzeigen.

```css
tbody > tr > th {
  border-top: 2px solid rgb(160 160 160);
  border-bottom: 1px solid rgb(140 140 140);
  background-color: #e4f0f5;
  font-weight: normal;
}

tbody {
  background-color: whitesmoke;
}

thead {
  background-color: #2c5e77;
  color: #fff;
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
  padding: 6px 8px;
  text-align: left;
}

tbody > tr > td:last-of-type {
  text-align: center;
}
```

#### Ergebnis

{{EmbedLiveSample("Multiple_bodies", 650, 300)}}

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
      <th scope="row">Erlaubte Inhalte</th>
      <td>Null oder mehr {{ HTMLElement("tr") }}-Elemente.</td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>
        Das Start-Tag eines <code>&lt;tbody&gt;</code>-Elements kann weggelassen werden, wenn das erste Element in diesem <code>&lt;tbody&gt;</code> ein {{HTMLElement("tr")}}-Element ist und wenn das Element nicht direkt von einem <code>&lt;tbody&gt;</code>, {{HTMLElement("thead")}} oder {{HTMLElement("tfoot")}}-Element, dessen End-Tag weggelassen wurde, unmittelbar vorangestellt ist. (Es kann nicht weggelassen werden, wenn das Element leer ist.) Das End-Tag eines <code>&lt;tbody&gt;</code>-Elements kann weggelassen werden, wenn es unmittelbar von einem <code>&lt;tbody&gt;</code> oder {{HTMLElement("tfoot")}}-Element gefolgt wird oder wenn es keine weiteren Inhalte im Elternelement gibt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Innerhalb des erforderlichen Eltern-{{ HTMLElement("table") }}-Elements kann das <code>&lt;tbody&gt;</code>-Element nach jedem {{ HTMLElement("caption") }}, {{HTMLElement("colgroup") }},
        und {{ HTMLElement("thead") }}-Element eingefügt werden.
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
      <th scope="row">Zulässige ARIA-Rollen</th>
      <td>Beliebig</td>
    </tr>
    <tr>
      <th scope="row">DOM-Interface</th>
      <td>[`HTMLTableSectionElement`](/de/docs/Web/API/HTMLTableSectionElement)</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Learn: HTML Basics zu Tabellen](/de/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics)
- {{HTMLElement("caption")}}, {{HTMLElement("col")}}, {{HTMLElement("colgroup")}}, {{HTMLElement("table")}}, {{HTMLElement("td")}}, {{HTMLElement("tfoot")}}, {{HTMLElement("th")}}, {{HTMLElement("thead")}}, {{HTMLElement("tr")}}: Weitere tabellezogene Elemente
- {{cssxref("background-color")}}: CSS-Eigenschaft, um die Hintergrundfarbe jeder Tabellenzelle festzulegen
- {{cssxref("border")}}: CSS-Eigenschaft, um die Ränder der Tabellenzellen zu steuern
- {{cssxref("text-align")}}: CSS-Eigenschaft, um den Inhalt jeder Tabellenzelle horizontal auszurichten
- {{cssxref("vertical-align")}}: CSS-Eigenschaft, um den Inhalt jeder Tabellenzelle vertikal auszurichten
