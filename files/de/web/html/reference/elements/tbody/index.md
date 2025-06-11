---
title: "<tbody>: Das Table Body-Element"
slug: Web/HTML/Reference/Elements/tbody
l10n:
  sourceCommit: 41cf05afdfff38fb460f7cae5b9523405c842ac6
---

{{HTMLSidebar}}

Das **`<tbody>`** [HTML](/de/docs/Web/HTML)-Element kapselt eine Reihe von Tabellenzeilen ({{HTMLElement("tr")}}-Elemente) und zeigt an, dass sie den Hauptteil der Daten einer Tabelle darstellen.

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

Die folgenden Attribute sind veraltet und sollten nicht mehr verwendet werden. Sie werden hier lediglich zur Referenz bei der Aktualisierung bestehenden Codes und aus historischem Interesse dokumentiert.

- `align` {{deprecated_inline}}

  - : Gibt die horizontale Ausrichtung jeder Tabellenzelle an. Die möglichen {{Glossary("enumerated", "aufzählbaren")}} Werte sind `left`, `center`, `right`, `justify` und `char`. Wenn unterstützt, richtet der `char`-Wert den Textinhalt an dem im [`char`](#char)-Attribut definierten Zeichen und dem durch das [`charoff`](#charoff)-Attribut definierten Offset aus. Verwenden Sie stattdessen die {{cssxref("text-align")}} CSS-Eigenschaft, da dieses Attribut veraltet ist.

- `bgcolor` {{deprecated_inline}}

  - : Definiert die Hintergrundfarbe jeder Tabellenzelle. Der Wert ist eine HTML-Farbe; entweder ein [6-stelliger hexadezimaler RGB-Code](/de/docs/Web/CSS/hex-color), der mit einem `#` präfixiert ist, oder ein [Farbname](/de/docs/Web/CSS/named-color). Andere CSS {{cssxref("color_value", "&lt;color&gt;")}}-Werte werden nicht unterstützt. Verwenden Sie stattdessen die {{cssxref("background-color")}} CSS-Eigenschaft, da dieses Attribut veraltet ist.

- `char` {{deprecated_inline}}

  - : Gibt die Ausrichtung des Inhalts an einem Zeichen jeder Tabellenzelle an. Typische Werte sind ein Punkt (`.`), wenn versucht wird, Zahlen oder Geldbeträge auszurichten. Wenn [`align`](#align) nicht auf `char` gesetzt ist, wird dieses Attribut ignoriert.

- `charoff` {{deprecated_inline}}

  - : Gibt die Anzahl der Zeichen an, um welche der Inhalt der Tabellenzelle vom Ausrichtungszeichen, das im [`char`](#char)-Attribut angegeben ist, versetzt sein soll.

- `valign` {{deprecated_inline}}

  - : Gibt die vertikale Ausrichtung jeder Tabellenzelle an. Die möglichen {{Glossary("enumerated", "aufzählbaren")}} Werte sind `baseline`, `bottom`, `middle` und `top`. Verwenden Sie stattdessen die {{cssxref("vertical-align")}} CSS-Eigenschaft, da dieses Attribut veraltet ist.

## Verwendungshinweise

- Das `<tbody>` wird nach allen {{HTMLElement("caption")}}, {{HTMLElement("colgroup")}} und {{HTMLElement("thead")}}-Elementen platziert.
- Wenn {{HTMLElement("tr")}}-Elemente als direkte Kinder des {{HTMLElement("table")}} definiert werden (siehe "Tag-Aussparung" im [technischen Überblick](#technische_zusammenfassung) für eine Beschreibung, wann dies gültig ist), dann wird das vom Browser generierte Markup ein `<tbody>`-Element enthalten, das diese kapselt. Infolgedessen werden CSS-Selektoren wie `table > tr` diese Elemente nicht auswählen. Siehe auch das [Beispiel ohne Angabe eines Körpers](#ohne_angabe_eines_körpers).
- Es ist erlaubt, mehr als ein `<tbody>` pro Tabelle zu verwenden, solange sie alle aufeinanderfolgend sind. Dies ermöglicht es, die Zeilen ({{HTMLElement("tr")}}-Elemente) in großen Tabellen in Abschnitte zu unterteilen, von denen jeder bei Bedarf getrennt formatiert werden kann. Wenn sie nicht als aufeinanderfolgende Elemente markiert sind, korrigieren Browser diesen Autorenfehler, indem sie sicherstellen, dass {{HTMLElement("thead")}}- und {{HTMLElement("tfoot")}}-Elemente als erstes und letztes Element der Tabelle dargestellt werden.
- Zusammen mit den verwandten {{HTMLElement("thead")}}- und {{HTMLElement("tfoot")}}-Elementen liefert das `<tbody>`-Element nützliche {{Glossary("semantics", "semantische")}} Informationen und kann sowohl bei der Darstellung für Bildschirm als auch für Druck verwendet werden. Die Spezifizierung solcher Tabellengruppen bietet auch wertvolle kontextuelle Informationen für unterstützende Technologien, einschließlich Bildschirmlesern und Suchmaschinen.
- Beim Drucken eines Dokuments, insbesondere bei einer mehrseitigen Tabelle, geben die {{HTMLElement("thead")}}- und {{htmlelement("tfoot")}}-Elemente in der Regel Informationen an, die auf jeder Seite gleich bleiben oder sich zumindest sehr ähnlich sind, während der Inhalt des `<tbody>`-Elements sich von Seite zu Seite normalerweise unterscheidet.
- Wenn eine Tabelle in einem Bildschirmkontext (wie einem Fenster) dargestellt wird, der nicht groß genug ist, um die gesamte Tabelle anzuzeigen, kann der {{Glossary("user_agent", "User-Agent")}} dem Benutzer ermöglichen, den Inhalt der {{HTMLElement("thead")}}, `<tbody>`, {{htmlelement("tfoot")}} und {{HTMLElement("caption")}} Blöcke getrennt voneinander für denselben übergeordneten {{htmlelement("table")}} zu scrollen.

## Beispiele

Siehe {{HTMLElement("table")}} für ein vollständiges Tabellenbeispiel mit Einführung in gängige Standards und bewährte Praktiken.

### Ohne Angabe eines Körpers

Dieses Beispiel zeigt, dass der Browser die {{HTMLElement("tr")}}-Elemente automatisch in einem `<tbody>`-Element kapselt, wenn die Zeilen nicht innerhalb eines Tabellengruppenelements (`<tbody>`, `<tfoot>` oder `<thead>`) verschachtelt sind und, wie in diesem Beispiel, die direkten Kinder des {{HTMLElement("table")}}-Elements sind.

#### HTML

Hier wird eine sehr einfache Tabelle mit einigen Tabellenzeilen ({{HTMLElement("tr")}}-Elemente) erstellt, die Daten ({{HTMLElement("td")}}-Elemente) über Studenten enthalten.

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

Beachten Sie die CSS im Beispiel, bei der eine {{cssxref("background-color")}} für das `<tbody>`-Element angegeben wird und das `tbody` als Teil eines zusätzlichen {{Glossary("css_selector", "CSS-Selectors")}} verwendet wird. Alternativ können {{Glossary("developer_tools", "Entwicklertools des Browsers")}} verwendet werden, um das Vorhandensein des `<tbody>`-Elements im {{Glossary("dom", "DOM")}} zu überprüfen.

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

Dieses Beispiel erweitert und verbessert die grundlegende Tabelle aus dem [vorherigen Beispiel](#ohne_angabe_eines_körpers).

#### HTML

Wir führen einen Tabellenkopf ({{HTMLElement("thead")}}-Element) ein und verwenden ein `<tbody>`-Element explizit, um die Tabelle in {{Glossary("semantics", "semantische")}} Abschnitte zu strukturieren. Der Tabellenkopf enthält die Spaltenüberschriften ({{HTMLElement("th")}}-Elemente). Das `<tbody>`-Element repräsentiert den Hauptteil der Tabelle, der aus einer Reihe von Zeilen ({{HTMLElement("tr")}}-Elemente) mit den Hauptdaten der Tabelle besteht, d.h. den Daten für jeden Studenten.

Die Verwendung solcher Tabellengruppen und {{Glossary("semantics", "semantischen")}} Markups ist nicht nur nützlich für die visuelle Präsentation (durch CSS-Styling) und kontextuelle Informationen für unterstützende Technologien; zudem hilft die explizite Verwendung des `<tbody>`-Elements dem Browser, die beabsichtigte Tabellenstruktur zu erstellen und unerwünschte Ergebnisse zu vermeiden.

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

Das CSS ist fast unverändert gegenüber dem [vorherigen Beispiel](#ohne_angabe_eines_körpers), mit Ausnahme einiger grundlegender Stile, um den Tabellenkopf hervorzuheben, sodass die Kopfzeilen der Spalten sich von den Daten im Tabellenkörper abheben. Wie im [obigen Beispiel](#ohne_angabe_eines_körpers) wird der `tbody`-[Typ-Selektor](/de/docs/Web/CSS/Type_selectors) verwendet, um die Körperzellen zu stylen.

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

### Mehrere Körper

Dieses Beispiel erweitert und verbessert die Tabelle aus dem [obigen Beispiel](#grundlegende_körperstruktur) noch weiter, indem mehrere Körperabschnitte eingeführt werden.

Das Verwenden mehrerer `<tbody>`-Elemente ermöglicht es, Zeilengruppierungen innerhalb einer Tabelle zu erstellen. Jeder Tabellenkörper kann potenziell seine eigene Kopfzeile oder Zeilen haben; es darf jedoch _nur ein {{HTMLElement("thead")}}-Element pro Tabelle vorhanden sein_! Aus diesem Grund können {{HTMLElement("tr")}} mit {{HTMLElement("th")}}-Elementen verwendet werden, um Kopfzeilen innerhalb jedes `<tbody>` zu erstellen.

#### HTML

Aufbauend auf der Tabelle im [vorherigen grundlegenden Beispiel](#grundlegende_körperstruktur) werden mehr Studenten hinzugefügt, und anstatt das Hauptfach jedes Studenten in jeder Zeile aufzulisten, werden die Studenten nach Hauptfach gruppiert. Beachten Sie, dass jedes Hauptfach innerhalb seines eigenen `<tbody>`-Blocks eingeschlossen ist, wobei die erste Zeile ({{HTMLElement("tr")}}-Element) als Kopf des Blocks dient und den Hauptfachtitel innerhalb eines {{HTMLElement("th")}}-Elements anzeigt, das das [`colspan`](/de/docs/Web/HTML/Reference/Elements/th#colspan)-Attribut verwendet, um die Kopfzeile über alle drei Spalten der Tabelle zu erstrecken. Jede verbleibende Zeile innerhalb jedes Hauptfachs `<tbody>` repräsentiert einen Studenten.

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

Der größte Teil des CSS bleibt unverändert. Es wird jedoch ein leicht subtilerer Stil für Kopfzellen hinzugefügt, die direkt in einem `<tbody>` enthalten sind (im Gegensatz zu denen, die sich im {{HTMLElement("thead")}} befinden). Dies wird für die Kopfzeilen verwendet, die das jeweilige Hauptfach jedes Tabellenabschnitts angeben.

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
      <th scope="row">Erlaubter Inhalt</th>
      <td>Null oder mehr {{ HTMLElement("tr") }}-Elemente.</td>
    </tr>
    <tr>
      <th scope="row">Tag-Aussparung</th>
      <td>
        Ein <code>&lt;tbody&gt;</code>-Element-Start-Tag kann weggelassen werden, wenn das erste Element innerhalb des <code>&lt;tbody&gt;</code>-Elements ein {{HTMLElement("tr")}}-Element ist und wenn das Element nicht unmittelbar von einem abgeschlossenen <code>&lt;tbody&gt;</code>-, {{HTMLElement("thead")}}- oder {{HTMLElement("tfoot")}}-Element vorangegangen ist. (Es kann nicht weggelassen werden, wenn das Element leer ist.)
        Ein <code>&lt;tbody&gt;</code>-Element-End-Tag kann weggelassen werden, wenn das <code>&lt;tbody&gt;</code>-Element unmittelbar von einem <code>&lt;tbody&gt;</code>- oder {{HTMLElement("tfoot")}}-Element gefolgt wird oder wenn kein weiterer Inhalt im übergeordneten Element vorhanden ist.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Innerhalb des erforderlichen übergeordneten {{ HTMLElement("table") }}-Elements
        kann das <code>&lt;tbody&gt;</code>-Element nach allen
        {{ HTMLElement("caption") }}, {{HTMLElement("colgroup") }},
        und {{ HTMLElement("thead") }}-Elementen hinzugefügt werden.
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

- [Lernen: Grundlegende HTML-Tabellen](/de/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics)
- {{HTMLElement("caption")}}, {{HTMLElement("col")}}, {{HTMLElement("colgroup")}}, {{HTMLElement("table")}}, {{HTMLElement("td")}}, {{HTMLElement("tfoot")}}, {{HTMLElement("th")}}, {{HTMLElement("thead")}}, {{HTMLElement("tr")}}: Andere tabellenbezogene Elemente
- {{cssxref("background-color")}}: CSS-Eigenschaft, um die Hintergrundfarbe jeder Tabellenzelle festzulegen
- {{cssxref("border")}}: CSS-Eigenschaft zur Steuerung der Ränder der Tabellenzellen
- {{cssxref("text-align")}}: CSS-Eigenschaft, um den Inhalt jeder Tabellenzelle horizontal auszurichten
- {{cssxref("vertical-align")}}: CSS-Eigenschaft, um den Inhalt jeder Tabellenzelle vertikal auszurichten
