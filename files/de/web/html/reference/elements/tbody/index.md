---
title: "<tbody>: Das Table Body-Element"
slug: Web/HTML/Reference/Elements/tbody
l10n:
  sourceCommit: f2d281d86396bcd2dcecfdabd5837b1590132aa6
---

Das **`<tbody>`** [HTML](/de/docs/Web/HTML) Element kapselt eine Gruppe von Tabellenzeilen ({{HTMLElement("tr")}} Elemente) ein und zeigt an, dass sie den Hauptteil der Tabellen(daten) darstellen.

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

Die folgenden Attribute sind veraltet und sollten nicht verwendet werden. Sie sind unten zur Referenz dokumentiert, um vorhandenen Code zu aktualisieren und aus historischem Interesse.

- `align` {{deprecated_inline}}
  - : Bestimmt die horizontale Ausrichtung jeder Tabellenzelle. Die möglichen {{Glossary("enumerated", "aufgezählten")}} Werte sind `left`, `center`, `right`, `justify` und `char`. Wenn unterstützt, richtet der `char`-Wert den Textinhalt auf das im [`char`](#char)-Attribut definierte Zeichen und den im [`charoff`](#charoff)-Attribut definierten Versatz aus. Verwenden Sie stattdessen die {{cssxref("text-align")}} CSS-Eigenschaft, da dieses Attribut veraltet ist.

- `bgcolor` {{deprecated_inline}}
  - : Definiert die Hintergrundfarbe jeder Tabellenzelle. Der Wert ist eine HTML-Farbe; entweder ein [6-stelliger hexadezimaler RGB-Code](/de/docs/Web/CSS/hex-color), der mit einem `#` versehen ist, oder ein [Farb-Schlüsselwort](/de/docs/Web/CSS/named-color). Andere CSS {{cssxref("color_value", "&lt;color&gt;")}} Werte werden nicht unterstützt. Verwenden Sie stattdessen die {{cssxref("background-color")}} CSS-Eigenschaft, da dieses Attribut veraltet ist.

- `char` {{deprecated_inline}}
  - : Gibt die Ausrichtung des Inhalts an einem Zeichen jeder Tabellenzelle an. Typische Werte sind ein Punkt (`.`), wenn versucht wird, Zahlen oder Währungswerte auszurichten. Wenn [`align`](#align) nicht auf `char` gesetzt ist, wird dieses Attribut ignoriert.

- `charoff` {{deprecated_inline}}
  - : Gibt die Anzahl der Zeichen an, um die der Tabellenzelleninhalt vom Ausrichtungszeichen verschoben wird, das durch das [`char`](#char)-Attribut angegeben wird.

- `valign` {{deprecated_inline}}
  - : Bestimmt die vertikale Ausrichtung jeder Tabellenzelle. Die möglichen {{Glossary("enumerated", "aufgezählten")}} Werte sind `baseline`, `bottom`, `middle` und `top`. Verwenden Sie die {{cssxref("vertical-align")}} CSS-Eigenschaft, da dieses Attribut veraltet ist.

## Nutzungshinweise

- Das `<tbody>` wird nach allen {{HTMLElement("caption")}}, {{HTMLElement("colgroup")}} und {{HTMLElement("thead")}} Elementen platziert.
- Wenn {{HTMLElement("tr")}} Elemente als direkte Kinder des {{HTMLElement("table")}} spezifiziert werden (siehe „Tag-Auslassung“ im [Technischen Überblick](#technische_übersicht) für eine Beschreibung, wann dies gültig ist), wird der von dem Browser generierte Markup ein `<tbody>`-Element enthalten, das sie umschließt. Dadurch werden solche Elemente nicht von CSS-Selektoren wie `table > tr` ausgewählt. Siehe auch das Beispiel [Kein Body spezifiziert](#kein_body_spezifiziert).
- Es ist erlaubt, mehr als ein `<tbody>` pro Tabelle zu verwenden, solange sie alle aufeinander folgen. Dies ermöglicht es, die Zeilen ({{HTMLElement("tr")}} Elemente) in großen Tabellen in Abschnitte zu unterteilen, von denen jeder separat formatiert werden kann, wenn gewünscht. Wenn nicht als aufeinanderfolgende Elemente markiert, wird der Autorfehler vom Browser korrigiert, der sicherstellt, dass alle {{HTMLElement("thead")}} und {{HTMLElement("tfoot")}} Elemente als erstes bzw. letztes Element der Tabelle gerendert werden.
- Zusammen mit den zugehörigen {{HTMLElement("thead")}} und {{HTMLElement("tfoot")}} Elementen bietet das `<tbody>` Element nützliche {{Glossary("semantics", "semantische")}} Informationen und kann verwendet werden, wenn der Inhalt entweder für Bildschirm oder Druck rendert. Die Spezifizierung solcher Tabelleninhaltsgruppen bietet außerdem wertvolle kontextuelle Informationen für unterstützende Technologien, einschließlich Screenreadern und Suchmaschinen.
- Beim Drucken eines Dokuments, im Fall einer mehrseitigen Tabelle, spezifizieren die {{HTMLElement("thead")}} und {{HTMLElement("tfoot")}} Elemente normalerweise Informationen, die auf jeder Seite gleichbleiben (oder mindestens sehr ähnlich sind), während die Inhalte des `<tbody>`-Elements normalerweise von Seite zu Seite unterschiedlich sein werden.
- Wenn eine Tabelle in einem Bildschirmkontext (wie ein Fenster) präsentiert wird, das nicht groß genug ist, um die gesamte Tabelle anzuzeigen, kann der {{Glossary("user_agent", "Benutzeragent")}} dem Benutzer erlauben, die Inhalte der {{HTMLElement("thead")}}, `<tbody>`, {{HTMLElement("tfoot")}}, und {{HTMLElement("caption")}} Blöcke separat voneinander für das gleiche Elternteil-{{HTMLElement("table")}} zu scrollen lassen.

## Beispiele

Siehe {{HTMLElement("table")}} für ein vollständiges Beispiel einer Tabelle, das gängige Standards und bewährte Praktiken vorstellt.

### Kein Body spezifiziert

Dieses Beispiel demonstriert, dass der Browser {{HTMLElement("tr")}} Elemente innerhalb eines `<tbody>`-Elements automatisch kapselt, wenn die Zeilen nicht innerhalb eines Tabellengruppenelements (`<tbody>`, `<tfoot>` oder `<thead>`) verschachtelt sind und, wie in diesem Beispiel, die direkten Kinder des {{HTMLElement("table")}} Elements sind.

#### HTML

Hier wird eine sehr einfache Tabelle mit einigen Tabellenspalten ({{HTMLElement("tr")}} Elemente) erstellt, die Daten ({{HTMLElement("td")}} Elemente) über Studenten enthalten.

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

Beachten Sie das CSS im Beispiel, wo eine {{cssxref("background-color")}} für das `<tbody>`-Element spezifiziert ist und `tbody` als Teil eines zusätzlichen {{Glossary("css_selector", "CSS-Selektors")}} verwendet wird. Alternativ können {{Glossary("developer_tools", "Entwicklertools des Browsers")}} verwendet werden, um das Vorhandensein des `<tbody>`-Elements im {{Glossary("dom", "DOM")}} zu überprüfen.

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

Dieses Beispiel erweitert und verbessert die grundlegende Tabelle aus dem [vorherigen Beispiel](#kein_body_spezifiziert).

#### HTML

Ein Tabellenkopf ({{HTMLElement("thead")}} Element) wird eingeführt und ein `<tbody>`-Element explizit verwendet, um die Tabelle in {{Glossary("semantics", "semantische")}} Abschnitte zu strukturieren. Der Tabellenkopf enthält die Spaltenüberschriften ({{HTMLElement("th")}} Elemente). Das `<tbody>`-Element repräsentiert den Körperabschnitt der Tabelle, der eine Anzahl von Zeilen ({{HTMLElement("tr")}} Elemente) mit den Hauptdaten der Tabelle enthält, das sind die Daten jedes Studenten.

Die Verwendung solcher Tabelleninhaltsgruppen und {{Glossary("semantics", "semantische")}} Markup ist nicht nur nützlich für visuelle Präsentation (durch CSS-Styling) und kontextuelle Informationen für unterstützende Technologien; darüber hinaus hilft die explizite Verwendung des `<tbody>`-Elements dem Browser, die beabsichtigte Tabellenstruktur zu erstellen und unerwünschte Ergebnisse zu vermeiden.

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

Das CSS ist fast unverändert vom [vorherigen Beispiel](#kein_body_spezifiziert), abgesehen von einigen grundlegenden Stiländerungen, um den Tabellenkopf hervorzuheben, sodass die Überschriften der Spalten sich vom Dateninhalt im Tabellenkörper abheben. Wie im [Beispiel oben](#kein_body_spezifiziert) wird der `tbody` [Typ-Selektor](/de/docs/Web/CSS/Type_selectors) verwendet, um die Körperzellen zu stylen.

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

Dieses Beispiel erweitert und verbessert die Tabelle aus dem [oben genannten Beispiel](#grundlegende_körperstruktur) noch weiter durch die Einführung mehrerer Körperabschnitte.

Die Verwendung mehrerer `<tbody>`-Elemente erlaubt die Erstellung von Zeilengruppierungen innerhalb einer Tabelle. Jeder Tabellenkörper kann potenziell seine eigene Kopfzeile oder -zeilen haben; jedoch _darf es nur ein {{HTMLElement("thead")}}-Element pro Tabelle geben_! Aufgrund dessen können {{HTMLElement("tr")}} mit {{HTMLElement("th")}}-Elementen verwendet werden, um innerhalb jedes `<tbody>` Kopfzeilen zu erstellen.

#### HTML

Ausgehend von der Tabelle im [vorherigen grundlegenden Beispiel](#grundlegende_körperstruktur), werden weitere Studenten hinzugefügt, und anstatt das Hauptfach jedes Studenten in jeder Zeile aufzulisten, werden die Studenten nach Hauptfach gruppiert. Beachten Sie, dass jedes Hauptfach in seinem eigenen `<tbody>`-Block eingeschlossen ist, wobei die erste Zeile ({{HTMLElement("tr")}} Element) als Kopf des Blocks dient und den Titel des Hauptfachs innerhalb eines {{HTMLElement("th")}} Elements anzeigt, das das [`colspan`](/de/docs/Web/HTML/Reference/Elements/th#colspan) Attribut verwendet, um die Kopfzeile über alle drei Spalten der Tabelle zu erstrecken. Jede verbleibende Zeile innerhalb jedes Hauptfach-`<tbody>` repräsentiert einen Studenten.

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

Der Großteil des CSS bleibt unverändert. Es wurde jedoch ein etwas subtilerer Stil für Kopfzeilen hinzugefügt, die direkt innerhalb eines `<tbody>` (im Gegensatz zu jenen, die sich im {{HTMLElement("thead")}} befinden) enthalten sind. Dies wird verwendet, um die Kopfzeilen anzuzeigen, die dem entsprechenden Hauptfach jeder Tabellensektion zugeordnet sind.

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

## Technische Übersicht

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
      <th scope="row">Zulässiger Inhalt</th>
      <td>Null oder mehr {{ HTMLElement("tr") }} Elemente.</td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>
        Ein <code>&lt;tbody&gt;</code>-Elementanfangstag kann weggelassen werden, wenn das erste Element im <code>&lt;tbody&gt;</code>-Element ein {{HTMLElement("tr")}}-Element ist und wenn das Element nicht unmittelbar von einem <code>&lt;tbody&gt;</code>, {{HTMLElement("thead")}} oder {{HTMLElement("tfoot")}} Element gefolgt wird, dessen Endetag weggelassen wurde. (Es kann nicht weggelassen werden, wenn das Element leer ist.)
        Ein <code>&lt;tbody&gt;</code>-Elementendtag kann weggelassen werden, wenn das <code>&lt;tbody&gt;</code>-Element unmittelbar von einem <code>&lt;tbody&gt;</code> oder {{HTMLElement("tfoot")}}-Element gefolgt wird, oder wenn im Elternelement kein weiterer Inhalt mehr vorhanden ist.
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässige Eltern</th>
      <td>
        Innerhalb des erforderlichen Elternelements {{ HTMLElement("table") }}
        kann das <code>&lt;tbody&gt;</code>-Element nach allen
        {{ HTMLElement("caption") }},
        {{HTMLElement("colgroup") }},
        und {{ HTMLElement("thead") }} Elementen hinzugefügt werden.
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

- [Lernen: HTML Tabellen Grundlagen](/de/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics)
- {{HTMLElement("caption")}}, {{HTMLElement("col")}}, {{HTMLElement("colgroup")}}, {{HTMLElement("table")}}, {{HTMLElement("td")}}, {{HTMLElement("tfoot")}}, {{HTMLElement("th")}}, {{HTMLElement("thead")}}, {{HTMLElement("tr")}}: Andere tabellenbezogene Elemente
- {{cssxref("background-color")}}: CSS-Eigenschaft, um die Hintergrundfarbe jeder Tabellenzelle zu setzen
- {{cssxref("border")}}: CSS-Eigenschaft zur Steuerung der Begrenzungen von Tabellenzellen
- {{cssxref("text-align")}}: CSS-Eigenschaft zur horizontalen Ausrichtung des Inhalts jeder Tabellenzelle
- {{cssxref("vertical-align")}}: CSS-Eigenschaft zur vertikalen Ausrichtung des Inhalts jeder Tabellenzelle
