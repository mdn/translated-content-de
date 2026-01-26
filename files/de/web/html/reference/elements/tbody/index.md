---
title: "<tbody>: Das Tabellenkörper-Element"
slug: Web/HTML/Reference/Elements/tbody
l10n:
  sourceCommit: 7c28cd21b705e7b7664d53b4d7822469ea8e6e15
---

Das **`<tbody>`** [HTML](/de/docs/Web/HTML)-Element kapselt eine Reihe von Tabellenzeilen ({{HTMLElement("tr")}}-Elemente) ein und zeigt an, dass sie den (Haupt-)Datenkörper einer Tabelle bilden.

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

Die folgenden Attribute sind veraltet und sollten nicht verwendet werden. Sie werden hier nur zur Referenz bei der Aktualisierung vorhandenen Codes und aus historischem Interesse dokumentiert.

- `align` {{deprecated_inline}}
  - : Gibt die horizontale Ausrichtung jeder Körperzelle an. Die möglichen {{Glossary("enumerated", "enumerierten")}} Werte sind `left`, `center`, `right`, `justify` und `char`. Wenn unterstützt, richtet der `char`-Wert den Textinhalt an dem im [`char`](#char)-Attribut definierten Zeichen aus und versetzt ihn um den im [`charoff`](#charoff)-Attribut definierten Offset. Verwenden Sie stattdessen die {{cssxref("text-align")}} CSS-Eigenschaft, da dieses Attribut veraltet ist.

- `bgcolor` {{deprecated_inline}}
  - : Definiert die Hintergrundfarbe jeder Körperzelle. Der Wert ist eine HTML-Farbe; entweder ein [6-stelliger hexadezimaler RGB-Code](/de/docs/Web/CSS/Reference/Values/hex-color), mit einem `#` vorangestellt, oder ein [Farbbegriff](/de/docs/Web/CSS/Reference/Values/named-color). Andere CSS {{cssxref("&lt;color&gt;")}}-Werte werden nicht unterstützt. Verwenden Sie stattdessen die {{cssxref("background-color")}} CSS-Eigenschaft, da dieses Attribut veraltet ist.

- `char` {{deprecated_inline}}
  - : Gibt die Ausrichtung des Inhalts an einem Zeichen jeder Körperzelle an. Typische Werte hierfür sind ein Punkt (`.`), wenn versucht wird, Zahlen oder Geldwerte auszurichten. Wenn [`align`](#align) nicht auf `char` gesetzt ist, wird dieses Attribut ignoriert.

- `charoff` {{deprecated_inline}}
  - : Gibt die Anzahl der Zeichen an, um die der Inhalt der Körperzelle vom im [`char`](#char)-Attribut spezifizierten Ausrichtungszeichen versetzt wird.

- `valign` {{deprecated_inline}}
  - : Gibt die vertikale Ausrichtung jeder Körperzelle an. Die möglichen {{Glossary("enumerated", "enumerierten")}} Werte sind `baseline`, `bottom`, `middle` und `top`. Verwenden Sie stattdessen die {{cssxref("vertical-align")}} CSS-Eigenschaft, da dieses Attribut veraltet ist.

## Verwendungshinweise

- Das `<tbody>` wird nach allen {{HTMLElement("caption")}}, {{HTMLElement("colgroup")}} und {{HTMLElement("thead")}}-Elementen platziert.
- Wenn {{HTMLElement("tr")}}-Elemente als direkte Kinder des {{HTMLElement("table")}}-Elements angegeben werden (siehe "Tag-Omission" im [technischen Überblick](#technischer_überblick) für eine Beschreibung, wann dies gültig ist), dann wird das vom Browser generierte Markup ein `<tbody>`-Element enthalten, das sie umschließt. Infolgedessen wählen CSS-Selektoren wie `table > tr` diese Elemente nicht aus. Siehe auch das Beispiel [Nicht Spezifizieren eines Körpers](#nicht_spezifizieren_eines_körpers).
- Es ist gestattet, mehr als ein `<tbody>` pro Tabelle zu verwenden, solange sie alle aufeinanderfolgend sind. Dies ermöglicht es, die Zeilen ({{HTMLElement("tr")}}-Elemente) in großen Tabellen in Abschnitte zu unterteilen, von denen jeder separat formatiert werden kann, wenn gewünscht. Wenn sie nicht als aufeinanderfolgende Elemente ausgezeichnet sind, korrigieren Browser diesen Autorfehler, indem sie sicherstellen, dass alle {{HTMLElement("thead")}}- und {{HTMLElement("tfoot")}}-Elemente als erste bzw. letzte Elemente der Tabelle gerendert werden.
- Zusammen mit seinen verwandten {{HTMLElement("thead")}}- und {{HTMLElement("tfoot")}}-Elementen liefert das `<tbody>`-Element nützliche {{Glossary("semantics", "semantische")}} Informationen und kann beim Rendern sowohl für Bildschirm- als auch für Druckansichten verwendet werden. Die Angabe solcher Tabelleninhaltsgruppen bietet auch wertvolle kontextuelle Informationen für unterstützende Technologien, einschließlich Bildschirmlesegeräte und Suchmaschinen.
- Beim Drucken eines Dokuments, fall es sich um eine mehrseitige Tabelle handelt, geben die {{HTMLElement("thead")}}- und {{htmlelement("tfoot")}}-Elemente in der Regel Informationen an, die auf jeder Seite gleich bleiben — oder zumindest sehr ähnlich sind —, während der Inhalt des `<tbody>`-Elements normalerweise von Seite zu Seite unterschiedlich ist.
- Wenn eine Tabelle in einem Bildschirmkontext (wie einem Fenster) angezeigt wird, der nicht groß genug ist, um die gesamte Tabelle darzustellen, kann der {{Glossary("user_agent", "Benutzeragent")}} es dem Benutzer ermöglichen, die Inhalte der {{HTMLElement("thead")}}, `<tbody>`, {{htmlelement("tfoot")}} und {{HTMLElement("caption")}}-Blocke separat voneinander für das gleiche übergeordnete {{htmlelement("table")}}-Element zu scrollen.

## Beispiele

Siehe {{HTMLElement("table")}} für ein vollständiges Tabellenbeispiel, das die üblichen Standards und Best Practices einführt.

### Nicht Spezifizieren eines Körpers

Dieses Beispiel zeigt, dass der Browser {{HTMLElement("tr")}}-Elemente automatisch in ein `<tbody>`-Element kapselt, wenn die Zeilen nicht in einem Tabellengruppierungselement (`<tbody>`, `<tfoot>` oder `<thead>`) verschachtelt sind und, wie in diesem Beispiel, direkte Kinder des {{HTMLElement("table")}}-Elements sind.

#### HTML

Hier wird eine sehr einfache Tabelle mit einigen Tabellenzeilen ({{HTMLElement("tr")}}-Elementen) erstellt, die Daten ({{HTMLElement("td")}}-Elemente) über Studenten enthalten.

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

Beachten Sie das CSS im Beispiel, in dem eine {{cssxref("background-color")}} für das `<tbody>`-Element angegeben wird und das `tbody` als Teil eines zusätzlichen {{Glossary("css_selector", "CSS-Selektors")}} verwendet wird. Alternativ können {{Glossary("developer_tools", "Entwicklertools des Browsers")}} verwendet werden, um die Anwesenheit des `<tbody>`-Elements im {{Glossary("dom", "DOM")}} zu überprüfen.

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

Dieses Beispiel erweitert und verbessert die einfache Tabelle aus dem [vorherigen Beispiel](#nicht_spezifizieren_eines_körpers).

#### HTML

Wir führen einen Tabellenkopf ({{HTMLElement("thead")}}-Element) ein und verwenden explizit ein `<tbody>`-Element, um die Tabelle in {{Glossary("semantics", "semantische")}} Abschnitte zu strukturieren. Der Tabellenkopf enthält die Spaltenüberschriften ({{HTMLElement("th")}}-Elemente). Das `<tbody>`-Element repräsentiert den Körperabschnitt der Tabelle, der eine Reihe von Zeilen ({{HTMLElement("tr")}}-Elemente) mit den Hauptdaten der Tabelle, den Daten jedes Schülers, enthält.

Die Verwendung solcher Tabellengruppen und {{Glossary("semantics", "semantischer")}} Markup ist nicht nur nützlich für die visuelle Präsentation (über CSS-Styling) und kontextuelle Informationen für unterstützende Technologien; zudem hilft die explizite Verwendung des `<tbody>`-Elements dem Browser, die beabsichtigte Tabellenstruktur zu erstellen und unerwünschte Ergebnisse zu vermeiden.

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

Das CSS ist nahezu unverändert gegenüber dem [vorherigen Beispiel](#nicht_spezifizieren_eines_körpers), außer für einige grundlegende Stile, um den Tabellenkopf hervorzuheben, sodass die Überschriften der Spalten sich von den Daten im Tabellenkörper abheben. Wie im [obigen Beispiel](#nicht_spezifizieren_eines_körpers) wird der `tbody` [Typselektor](/de/docs/Web/CSS/Reference/Selectors/Type_selectors) verwendet, um die Körperzellen zu gestalten.

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

### Mehrfache Körper

Dieses Beispiel erweitert und verbessert die Tabelle aus dem [obigen Beispiel](#grundlegende_körperstruktur) noch weiter, indem es mehrere Körperabschnitte einführt.

Die Verwendung mehrerer `<tbody>`-Elemente ermöglicht die Erstellung von Zeilengruppierungen innerhalb einer Tabelle. Jeder Tabellenkörper kann potenziell seine eigene Kopfzeile oder -zeilen haben; _es darf jedoch nur ein {{HTMLElement("thead")}}-Element pro Tabelle geben_! Aus diesem Grund können {{HTMLElement("tr")}} mit {{HTMLElement("th")}}-Elementen verwendet werden, um Kopfzeilen innerhalb jedes `<tbody>` zu erstellen.

#### HTML

Ausgehend von der Tabelle im [vorherigen einfachen Beispiel](#grundlegende_körperstruktur) werden weitere Studenten hinzugefügt und anstatt jedes Fach eines jeden Schülers in jeder Zeile aufzulisten, werden die Studenten nach ihrem Fach gruppiert. Beachten Sie, dass jedes Fach in seinem eigenen `<tbody>`-Block eingefasst ist, wobei die erste Zeile ({{HTMLElement("tr")}}-Element) als Kopf des Blocks dient und den Fach-Titel in einem {{HTMLElement("th")}}-Element anzeigt, das das [`colspan`](/de/docs/Web/HTML/Reference/Elements/th#colspan)-Attribut verwendet, um die Kopfzeile über alle drei Spalten der Tabelle zu erstrecken. Jede verbleibende Zeile innerhalb jedes Fach-`<tbody>` repräsentiert einen Studenten.

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

Der Großteil des CSS bleibt unverändert. Es wird jedoch ein etwas subtilerer Stil für Kopfzellen hinzugefügt, die direkt in einem `<tbody>` enthalten sind (im Gegensatz zu denen, die sich im {{HTMLElement("thead")}} befinden). Dies wird für die Kopfzeilen verwendet, die das entsprechende Fach jedes Tabellenabschnitts kennzeichnen.

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

## Technischer Überblick

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
      <th scope="row">Tag-Omission</th>
      <td>
        Der Start-Tag eines <code>&lt;tbody&gt;</code>-Elements kann weggelassen werden, wenn das erste Element innerhalb des <code>&lt;tbody&gt;</code>-Elements ein {{HTMLElement("tr")}}-Element ist und wenn das Element nicht unmittelbar vor einem <code>&lt;tbody&gt;</code>-, {{HTMLElement("thead")}}- oder {{HTMLElement("tfoot")}}-Element steht, dessen End-Tag weggelassen wurde. (Es kann nicht weggelassen werden, wenn das Element leer ist.)
        Der End-Tag eines <code>&lt;tbody&gt;</code>-Elements kann weggelassen werden, wenn das <code>&lt;tbody&gt;</code>-Element unmittelbar auf ein <code>&lt;tbody&gt;</code>- oder {{HTMLElement("tfoot")}}-Element folgt oder wenn es keinen weiteren Inhalt im übergeordneten Element gibt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Innerhalb des erforderlichen übergeordneten {{ HTMLElement("table") }}-Elements
        kann das <code>&lt;tbody&gt;</code>-Element nach jedem
        {{ HTMLElement("caption") }}, {{HTMLElement("colgroup") }},
        und {{ HTMLElement("thead") }}-Element hinzugefügt werden.
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

- [Lernen: HTML-Tabellen-Grundlagen](/de/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics)
- {{HTMLElement("caption")}}, {{HTMLElement("col")}}, {{HTMLElement("colgroup")}}, {{HTMLElement("table")}}, {{HTMLElement("td")}}, {{HTMLElement("tfoot")}}, {{HTMLElement("th")}}, {{HTMLElement("thead")}}, {{HTMLElement("tr")}}: Andere tabellenbezogene Elemente
- {{cssxref("background-color")}}: CSS-Eigenschaft, um die Hintergrundfarbe jeder Körperzelle festzulegen
- {{cssxref("border")}}: CSS-Eigenschaft, um die Ränder von Körperzellen zu kontrollieren
- {{cssxref("text-align")}}: CSS-Eigenschaft, um den Inhalt jeder Körperzelle horizontal auszurichten
- {{cssxref("vertical-align")}}: CSS-Eigenschaft, um den Inhalt jeder Körperzelle vertikal auszurichten
