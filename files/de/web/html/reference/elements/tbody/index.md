---
title: "`<tbody>` HTML-Tabellenkörper-Element"
short-title: <tbody>
slug: Web/HTML/Reference/Elements/tbody
l10n:
  sourceCommit: 56f3d7018159127dbe92842413fb45d0aa7e8193
---

Das **`<tbody>`**-[HTML](/de/docs/Web/HTML)-Element kapselt eine Gruppe von Tabellreihen ({{HTMLElement("tr")}}-Elemente), die den Hauptinhalt einer Tabelle darstellen.

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

Dieses Element enthält die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

### Veraltete Attribute

Die folgenden Attribute sind veraltet und sollten nicht verwendet werden. Sie sind unten zur Referenz beim Aktualisieren bestehenden Codes und aus historischem Interesse dokumentiert.

- `align` {{deprecated_inline}}
  - : Gibt die horizontale Ausrichtung jeder Tabellenzelle an. Die möglichen {{Glossary("enumerated", "enumerierten")}} Werte sind `left`, `center`, `right`, `justify` und `char`. Wenn unterstützt, richtet der Wert `char` den Textinhalt an dem im [`char`](#char)-Attribut definierten Zeichen und dem durch das [`charoff`](#charoff)-Attribut definierten Versatz aus. Verwenden Sie stattdessen die CSS-Eigenschaft {{cssxref("text-align")}}, da dieses Attribut veraltet ist.

- `bgcolor` {{deprecated_inline}} {{non-standard_inline}}
  - : Definiert die Hintergrundfarbe jeder Tabellenzelle. Der Wert ist eine HTML-Farbe; entweder ein [6-stelliger, hexadezimale RGB-Code](/de/docs/Web/CSS/Reference/Values/hex-color), der mit `#` beginnt, oder ein [Farb-Stichwort](/de/docs/Web/CSS/Reference/Values/named-color). Andere CSS {{cssxref("&lt;color&gt;")}}-Werte werden nicht unterstützt. Verwenden Sie stattdessen die CSS-Eigenschaft {{cssxref("background-color")}}, da dieses Attribut veraltet ist.

- `char` {{deprecated_inline}}
  - : Gibt die Ausrichtung des Inhalts an einem Zeichen jeder Tabellenzelle an. Übliche Werte hierfür sind ein Punkt (`.`), wenn versucht wird, Zahlen oder Geldbeträge auszurichten. Falls [`align`](#align) nicht auf `char` gesetzt ist, wird dieses Attribut ignoriert.

- `charoff` {{deprecated_inline}}
  - : Gibt die Anzahl der Zeichen an, um die der Tabelleninhalt vom durch das [`char`](#char)-Attribut angegebenen Ausrichtungszeichen versetzt wird.

- `valign` {{deprecated_inline}}
  - : Gibt die vertikale Ausrichtung jeder Tabellenzelle an. Die möglichen {{Glossary("enumerated", "enumerierten")}} Werte sind `baseline`, `bottom`, `middle` und `top`. Verwenden Sie stattdessen die CSS-Eigenschaft {{cssxref("vertical-align")}}, da dieses Attribut veraltet ist.

## Anmerkungen zur Verwendung

- Das `<tbody>` wird nach jedem {{HTMLElement("caption")}}, {{HTMLElement("colgroup")}} und {{HTMLElement("thead")}} platziert.
- Wenn {{HTMLElement("tr")}}-Elemente als direkte Nachkommen des {{HTMLElement("table")}} angegeben werden (siehe "Tag-Auslassung" in der [technischen Zusammenfassung](#technische_zusammenfassung) für eine Beschreibung, wann dies zulässig ist), wird durch das vom Browser erzeugte Markup ein `<tbody>`-Element enthalten sein, das diese umschließt. Daher werden CSS-Selektoren wie `table > tr` diese Elemente nicht auswählen. Siehe auch das Beispiel [Kein Körper spezifiziert](#kein_körper_spezifiziert).
- Es ist zulässig, mehr als ein `<tbody>` pro Tabelle zu benutzen, solange sie aufeinanderfolgend sind. Dies ermöglicht es, die Zeilen ({{HTMLElement("tr")}}-Elemente) in großen Tabellen in Abschnitte zu unterteilen, die, falls gewünscht, separat formatiert werden können. Wenn sie nicht als aufeinanderfolgende Elemente gekennzeichnet sind, werden Browser diesen Autorenfehler korrigieren, indem sichergestellt wird, dass alle {{HTMLElement("thead")}}- und {{HTMLElement("tfoot")}}-Elemente jeweils als erste und letzte Elemente der Tabelle dargestellt werden.
- Zusammen mit den zugehörigen {{HTMLElement("thead")}}- und {{HTMLElement("tfoot")}}-Elementen bietet das `<tbody>`-Element nützliche {{Glossary("semantics", "semantische")}} Informationen und kann beim Rendern für entweder Bildschirme oder Druck verwendet werden. Die Angabe solcher Table-Content-Groups bietet auch wertvolle kontextuelle Informationen für unterstützende Technologien, einschließlich Bildschirmlesern und Suchmaschinen.
- Beim Drucken eines Dokuments, bei einer mehrseitigen Tabelle, spezifizieren die {{HTMLElement("thead")}}- und {{HTMLElement("tfoot")}}-Elemente normalerweise Informationen, die auf jeder Seite gleich oder zumindest sehr ähnlich bleiben, während der Inhalt des `<tbody>`-Elements von Seite zu Seite normalerweise unterschiedlich sein wird.
- Wenn eine Tabelle in einem Bildschirmkontext (etwa ein Fenster), das nicht groß genug ist, um die gesamte Tabelle anzuzeigen, präsentiert wird, könnte der {{Glossary("user_agent", "Nutzeragent")}} dem Nutzer erlauben, die Inhalte der {{HTMLElement("thead")}}, `<tbody>`, {{htmlelement("tfoot")}} und {{HTMLElement("caption")}}-Blöcke getrennt voneinander zu scrollen, alle zusammengehörig unter demselben {{htmlelement("table")}}-Parent.

## Beispiele

Siehe {{HTMLElement("table")}} für ein vollständiges Tabellenbeispiel, das allgemeine Standards und bewährte Praktiken einführt.

### Kein Körper spezifiziert

Dieses Beispiel zeigt, dass der Browser automatisch {{HTMLElement("tr")}}-Elemente innerhalb eines `<tbody>`-Elements kapselt, wenn die Reihen nicht innerhalb eines Tabellen-Gruppierungselements (`<tbody>`, `<tfoot>` oder `<thead>`) verschachtelt sind und direktes Kind des {{HTMLElement("table")}}-Elements sind, wie in diesem Beispiel.

#### HTML

Hier wird eine sehr grundlegende Tabelle mit einigen Tabellreihen ({{HTMLElement("tr")}}-Elemente), die Daten ({{HTMLElement("td")}}-Elemente) über Studenten enthalten, erstellt.

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

Beachten Sie das CSS im Beispiel, bei dem eine {{cssxref("background-color")}} für das `<tbody>`-Element angegeben ist und `tbody` als Teil eines zusätzlichen {{Glossary("css_selector", "CSS-Selektors")}} verwendet wird. Alternativ können {{Glossary("developer_tools", "Entwicklerwerkzeuge des Browsers")}} verwendet werden, um die Anwesenheit des `<tbody>`-Elements im {{Glossary("dom", "DOM")}} zu überprüfen.

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

### Grundlegende Körperstruktur

Dieses Beispiel erweitert und verbessert die grundlegende Tabelle aus dem [vorherigen Beispiel](#kein_körper_spezifiziert).

#### HTML

Wir stellen einen Tabellenkopf ({{HTMLElement("thead")}}-Element) vor und verwenden explizit ein `<tbody>`-Element, um die Tabelle in {{Glossary("semantics", "semantische")}} Abschnitte zu gliedern. Der Tabellenkopf enthält die Spaltenüberschriften ({{HTMLElement("th")}}-Elemente). Das `<tbody>`-Element stellt den Hauptabschnitt der Tabelle dar, der eine Anzahl von Reihen ({{HTMLElement("tr")}}-Elemente) mit den Hauptdaten der Tabelle enthält, also den Daten jedes Studenten.

Die Verwendung solcher Table-Content-Groups und {{Glossary("semantics", "semantischem")}} Markup ist nicht nur für die visuelle Präsentation (durch CSS-Styling) und kontextuelle Informationen für unterstützende Technologien nützlich; darüber hinaus hilft die explizite Verwendung des `<tbody>`-Elements dem Browser, die beabsichtigte Tabellenstruktur zu erstellen und unerwünschte Ergebnisse zu vermeiden.

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

Das CSS ist nahezu unverändert im Vergleich zum [vorherigen Beispiel](#kein_körper_spezifiziert), außer dass ein grundlegendes Styling hinzugefügt wurde, um den Tabellenkopf hervorzuheben, sodass die Überschriften der Spalten sich von den Daten im Tabellenkörper abheben. Wie im [Beispiel oben](#kein_körper_spezifiziert) wird der `tbody`-[Typen-Selektor](/de/docs/Web/CSS/Reference/Selectors/Type_selectors) verwendet, um die Tabellenzellen zu stylen.

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
  color: white;
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

### Mehrere Körper

Dieses Beispiel erweitert und verbessert die Tabelle aus dem [obigen Beispiel](#grundlegende_körperstruktur) noch weiter, indem mehrere Körperabschnitte eingeführt werden.

Die Verwendung mehrerer `<tbody>`-Elemente erlaubt die Erstellung von Zeilengruppen innerhalb einer Tabelle. Jeder Tabellenkörper kann potenziell seine eigenen Kopfzeilenreihen haben; jedoch _kann es nur ein {{HTMLElement("thead")}}-Element pro Tabelle geben_! Aus diesem Grund können {{HTMLElement("tr")}} mit {{HTMLElement("th")}}-Elemente dazu verwendet werden, Kopfzeilen innerhalb jedes `<tbody>` zu erstellen.

#### HTML

Aufbauend auf der Tabelle im [vorherigen einfachen Beispiel](#grundlegende_körperstruktur) werden mehr Studenten hinzugefügt und statt das Hauptfach jedes Studenten in jeder Reihe aufzulisten, werden die Studenten nach Hauptfächern gruppiert. Beachten Sie, dass jedes Hauptfach innerhalb seines eigenen `<tbody>`-Blocks eingeschlossen ist, wobei die erste Reihe ({{HTMLElement("tr")}}-Element) als Kopf des Blocks dient und den Major-Titel innerhalb eines {{HTMLElement("th")}}-Elements anzeigt, das das [`colspan`](/de/docs/Web/HTML/Reference/Elements/th#colspan)-Attribut verwendet, um die Kopfzeile über alle drei Spalten der Tabelle zu erweitern. Jede verbleibende Reihe innerhalb jedes Hauptfach-`<tbody>` repräsentiert einen Studenten.

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

Der Großteil des CSS bleibt unverändert. Jedoch wird ein leicht subtilerer Stil für Kopfzellen hinzugefügt, die direkt innerhalb eines `<tbody>` enthalten sind (im Gegensatz zu denen, die sich im {{HTMLElement("thead")}} befinden). Dies wird für die Kopfzeilen verwendet, die jeweils den entsprechenden Majoren des Tabellenabschnitts anzeigen.

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
  color: white;
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
      <th scope="row">Erlaubter Inhalt</th>
      <td>Null oder mehr {{ HTMLElement("tr") }}-Elemente.</td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>
        Ein <code>&lt;tbody&gt;</code>-Element kann das Start-Tag weglassen, wenn das erste innerhalb des <code>&lt;tbody&gt;</code>-Elements ein {{HTMLElement("tr")}}-Element ist und wenn das Element nicht unmittelbar von einem <code>&lt;tbody&gt;</code>, {{HTMLElement("thead")}}, oder {{HTMLElement("tfoot")}}-Element, dessen End-Tag weggelassen wurde, gefolgt ist. (Es kann nicht weggelassen werden, wenn das Element leer ist.)
        Ein <code>&lt;tbody&gt;</code>-Element kann das End-Tag weglassen, wenn das <code>&lt;tbody&gt;</code>-Element unmittelbar von einem <code>&lt;tbody&gt;</code> oder {{HTMLElement("tfoot")}}-Element gefolgt wird, oder wenn es keine weiteren Inhalte im Eltern-Element gibt.
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässige Eltern</th>
      <td>
        Innerhalb des erforderlichen Eltern-{{ HTMLElement("table") }}-Elements
        kann das <code>&lt;tbody&gt;</code>-Element nach jedem
        {{ HTMLElement("caption") }}, {{HTMLElement("colgroup") }},
        und {{ HTMLElement("thead") }}-Element hinzugefügt werden.
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
      <th scope="row">Zulässige ARIA-Rollen</th>
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
- {{HTMLElement("caption")}}, {{HTMLElement("col")}}, {{HTMLElement("colgroup")}}, {{HTMLElement("table")}}, {{HTMLElement("td")}}, {{HTMLElement("tfoot")}}, {{HTMLElement("th")}}, {{HTMLElement("thead")}}, {{HTMLElement("tr")}}: Andere tabellenbezogene Elemente
- {{cssxref("background-color")}}: CSS-Eigenschaft, um die Hintergrundfarbe jeder Tabellenzelle festzulegen
- {{cssxref("border")}}: CSS-Eigenschaft zur Steuerung der Ränder von Tabellenzellen
- {{cssxref("text-align")}}: CSS-Eigenschaft, um den Inhalt jeder Tabellenzelle horizontal auszurichten
- {{cssxref("vertical-align")}}: CSS-Eigenschaft, um den Inhalt jeder Tabellenzelle vertikal auszurichten
