---
title: "`<tbody>` HTML-Tabellenkörperelement"
short-title: <tbody>
slug: Web/HTML/Reference/Elements/tbody
l10n:
  sourceCommit: 44a5fa2aace490e0114349d9d683675b2f5cacce
---

Das **`<tbody>`** [HTML](/de/docs/Web/HTML)-Element kapselt eine Gruppe von Tabellenzeilen ({{HTMLElement("tr")}}-Elemente) ein und zeigt an, dass sie den Hauptdatenkörper einer Tabelle bilden.

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

Dieses Element beinhaltet die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

### Veraltete Attribute

Die folgenden Attribute sind veraltet und sollten nicht verwendet werden. Sie sind unten nur zur Referenz beim Aktualisieren vorhandenen Codes und aus historischem Interesse dokumentiert.

- `align` {{deprecated_inline}}
  - : Gibt die horizontale Ausrichtung jeder Tabellenzelle an. Die möglichen {{Glossary("enumerated", "enumerierten")}} Werte sind `left`, `center`, `right`, `justify` und `char`. Wenn unterstützt, richtet der `char`-Wert den Textinhalt an dem im [`char`](#char)-Attribut definierten Zeichen und dem durch das [`charoff`](#charoff)-Attribut festgelegten Offset aus. Verwenden Sie stattdessen die {{cssxref("text-align")}} CSS-Eigenschaft, da dieses Attribut veraltet ist.

- `bgcolor` {{deprecated_inline}} {{non-standard_inline}}
  - : Definiert die Hintergrundfarbe jeder Tabellenzelle. Der Wert ist eine HTML-Farbe; entweder ein [6-stelliger hexadezimaler RGB-Code](/de/docs/Web/CSS/Reference/Values/hex-color), mit einem `#` als Präfix, oder ein [Farbschlüsselwort](/de/docs/Web/CSS/Reference/Values/named-color). Andere CSS {{cssxref("&lt;color&gt;")}}-Werte werden nicht unterstützt. Verwenden Sie stattdessen die {{cssxref("background-color")}} CSS-Eigenschaft, da dieses Attribut veraltet ist.

- `char` {{deprecated_inline}}
  - : Bestimmt die Ausrichtung des Inhalts zu einem Zeichen in jeder Tabellenzelle. Typische Werte hierfür sind ein Punkt (`.`), wenn versucht wird, Zahlen oder Geldwerte auszurichten. Wenn [`align`](#align) nicht auf `char` gesetzt ist, wird dieses Attribut ignoriert.

- `charoff` {{deprecated_inline}}
  - : Gibt an, um wie viele Zeichen der Zellinhalt vom im [`char`](#char)-Attribut angegebenen Ausrichtungszeichen versetzt werden soll.

- `valign` {{deprecated_inline}}
  - : Bestimmt die vertikale Ausrichtung jeder Tabellenzelle. Die möglichen {{Glossary("enumerated", "enumerierten")}} Werte sind `baseline`, `bottom`, `middle` und `top`. Verwenden Sie stattdessen die {{cssxref("vertical-align")}} CSS-Eigenschaft, da dieses Attribut veraltet ist.

## Verwendungshinweise

- Das `<tbody>` wird nach allen {{HTMLElement("caption")}}, {{HTMLElement("colgroup")}} und {{HTMLElement("thead")}}-Elementen platziert.
- Wenn {{HTMLElement("tr")}}-Elemente als direkte Kinder des {{HTMLElement("table")}} spezifiziert werden (siehe "Tag-Auslassung" in der [technischen Zusammenfassung](#technische_zusammenfassung) für eine Beschreibung, wann dies zulässig ist), dann wird das von Browsern generierte Markup ein `<tbody>`-Element enthalten, das sie umschließt. Daher werden CSS-Selektoren wie `table > tr` diese Elemente nicht auswählen. Siehe auch das Beispiel [Keinen Körper spezifizieren](#keinen_körper_spezifizieren).
- Es ist erlaubt, mehr als ein `<tbody>` pro Tabelle zu verwenden, solange sie alle aufeinanderfolgend sind. Dies ermöglicht es, die Zeilen ({{HTMLElement("tr")}}-Elemente) in großen Tabellen in Abschnitte zu unterteilen, von denen jeder bei Bedarf separat formatiert werden kann. Wenn die Markierung nicht aufeinanderfolgend ist, korrigieren Browser diesen Autorenfehler, indem sichergestellt wird, dass alle {{HTMLElement("thead")}}- und {{HTMLElement("tfoot")}}-Elemente als erste bzw. letzte Elemente der Tabelle gerendert werden.
- Zusammen mit seinen verwandten {{HTMLElement("thead")}}- und {{HTMLElement("tfoot")}}-Elementen bietet das `<tbody>`-Element nützliche {{Glossary("semantics", "semantische")}} Informationen und kann sowohl bei der Darstellung für den Bildschirm als auch zum Drucken verwendet werden. Die Angabe solcher Tabellengruppen liefert auch wertvolle Kontextinformationen für unterstützende Technologien, einschließlich Bildschirmlesegeräten und Suchmaschinen.
- Beim Drucken eines Dokuments, im Falle einer mehrseitigen Tabelle, geben die {{HTMLElement("thead")}}- und {{htmlelement("tfoot")}}-Elemente normalerweise Informationen an, die auf jeder Seite gleich bleiben oder zumindest sehr ähnlich sind, während der Inhalt des `<tbody>`-Elements von Seite zu Seite unterschiedlich sein wird.
- Wenn eine Tabelle in einem Bildschirmkontext (wie einem Fenster) präsentiert wird, das nicht groß genug ist, um die gesamte Tabelle anzuzeigen, kann der {{Glossary("user_agent", "Benutzeragent")}} dem Benutzer erlauben, die Inhalte der {{HTMLElement("thead")}}, `<tbody>`, {{htmlelement("tfoot")}} und {{HTMLElement("caption")}}-Blöcke unabhängig voneinander innerhalb derselben übergeordneten {{htmlelement("table")}} zu scrollen.

## Beispiele

Weitere vollständige Tabellenbeispiele mit allgemeinen Standards und Best Practices finden Sie unter {{HTMLElement("table")}}.

### Keinen Körper spezifizieren

Dieses Beispiel zeigt, dass der Browser die {{HTMLElement("tr")}}-Elemente automatisch innerhalb eines `<tbody>`-Elementes kapselt, wenn die Zeilen nicht innerhalb eines Tabellengruppierungselementes (`<tbody>`, `<tfoot>` oder `<thead>`) verschachtelt sind und, wie in diesem Beispiel, die direkten Kinder des {{HTMLElement("table")}}-Elementes sind.

#### HTML

Hier wird eine sehr grundlegende Tabelle mit einigen Tabellenzeilen ({{HTMLElement("tr")}}-Elemente), die Daten ({{HTMLElement("td")}}-Elemente) zu Studenten enthalten, erstellt.

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

Beachten Sie das CSS im Beispiel, bei dem ein {{cssxref("background-color")}} für das `<tbody>`-Element angegeben ist und `tbody` als Teil eines zusätzlichen {{Glossary("css_selector", "CSS-Selektors")}} verwendet wird. Alternativ können {{Glossary("developer_tools", "Entwicklertools des Browsers")}} verwendet werden, um das Vorhandensein des `<tbody>`-Elements im {{Glossary("dom", "DOM")}} zu überprüfen.

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

Dieses Beispiel erweitert und verbessert die grundlegende Tabelle aus dem [vorherigen Beispiel](#keinen_körper_spezifizieren).

#### HTML

Wir führen einen Tabellenkopf ({{HTMLElement("thead")}}-Element) ein und verwenden explizit ein `<tbody>`-Element, um die Tabelle in {{Glossary("semantics", "semantische")}} Abschnitte zu gliedern. Der Tabellenkopf enthält die Spaltenüberschriften ({{HTMLElement("th")}}-Elemente). Das `<tbody>`-Element stellt den Hauptdatenbereich der Tabelle dar, die mehrere Zeilen ({{HTMLElement("tr")}}-Elemente) mit den Hauptdaten der Tabelle enthält, die Daten jedes Studenten.

Die Verwendung solcher Tabellengruppen und {{Glossary("semantics", "semantischer")}} Markierung ist nicht nur nützlich für die visuelle Präsentation (via CSS-Styling) und Kontextinformationen für unterstützende Technologien; darüber hinaus hilft die explizite Verwendung des `<tbody>`-Elements dem Browser dabei, die beabsichtigte Tabellenstruktur zu erstellen und unerwünschte Ergebnisse zu vermeiden.

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

Das CSS ist nahezu unverändert zum [vorherigen Beispiel](#keinen_körper_spezifizieren), außer einige grundlegende Formatierungen, um den Tabellenkopf hervorzuheben, sodass die Überschriften der Spalten sich von den Daten im Tabellenkörper abheben. Wie im [obigen Beispiel](#keinen_körper_spezifizieren) wird der `tbody` [Typselektor](/de/docs/Web/CSS/Reference/Selectors/Type_selectors) verwendet, um die Zellen des Körpers zu gestalten.

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

Dieses Beispiel erweitert und verbessert die Tabelle aus dem [obigen Beispiel](#grundlegende_körperstruktur) noch mehr durch die Einführung mehrerer Körperabschnitte.

Die Verwendung von mehreren `<tbody>`-Elementen ermöglicht die Erstellung von Zeilengruppen innerhalb einer Tabelle. Jeder Tabellenkörper kann möglicherweise seine eigene Kopfzeile oder -zeilen haben; jedoch _darf es nur ein {{HTMLElement("thead")}}-Element pro Tabelle geben_! Aus diesem Grund können {{HTMLElement("tr")}} mit {{HTMLElement("th")}}-Elementen verwendet werden, um Kopfzeilen innerhalb jedes `<tbody>` zu erstellen.

#### HTML

Aufbauend auf der Tabelle im [vorherigen grundlegenden Beispiel](#grundlegende_körperstruktur) werden mehr Studenten hinzugefügt, und statt das Hauptfach jedes Studenten auf jeder Zeile aufzulisten, werden die Studenten nach Hauptfach gruppiert. Beachten Sie, dass jedes Hauptfach innerhalb seines eigenen `<tbody>`-Blocks eingeschlossen ist, mit der ersten Zeile ({{HTMLElement("tr")}}-Element), die als Kopf des Blocks dient und den Hauptfach-Titel innerhalb eines {{HTMLElement("th")}}-Elements anzeigt, das das [`colspan`](/de/docs/Web/HTML/Reference/Elements/th#colspan)-Attribut verwendet, um die Kopfzeile über alle drei Spalten der Tabelle zu erstrecken. Jede verbleibende Zeile innerhalb jedes Hauptfaches `<tbody>` stellt einen Studenten dar.

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

Der Großteil des CSS bleibt unverändert. Jedoch wird eine etwas subtilere Stilierung für Kopfzellen hinzugefügt, die direkt innerhalb eines `<tbody>` enthalten sind (im Gegensatz zu denen, die sich im {{HTMLElement("thead")}} befinden). Dies wird für die Kopfzeilen verwendet, die das entsprechende Hauptfach jedes Tabellensegments anzeigen.

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
        Der Start-Tag eines <code>&lt;tbody&gt;</code>-Elements kann ausgelassen werden, wenn das erste Element innerhalb des <code>&lt;tbody&gt;</code> ein {{HTMLElement("tr")}}-Element ist und wenn das Element nicht unmittelbar von einem <code>&lt;tbody&gt;</code>, {{HTMLElement("thead")}}, oder {{HTMLElement("tfoot")}}-Element, dessen End-Tag weggelassen wurde, direkt vorhergeht. (Es kann nicht ausgelassen werden, wenn das Element leer ist.)
        Der End-Tag eines <code>&lt;tbody&gt;</code>-Elements kann ausgelassen werden, wenn das <code>&lt;tbody&gt;</code>-Element unmittelbar von einem <code>&lt;tbody&gt;</code> oder {{HTMLElement("tfoot")}}-Element gefolgt wird, oder wenn kein weiterer Inhalt im übergeordneten Element vorhanden ist.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Innerhalb des erforderlichen übergeordneten {{ HTMLElement("table") }}-Elements kann das <code>&lt;tbody&gt;</code>-Element nach allen
        {{ HTMLElement("caption") }}, {{HTMLElement("colgroup") }},
        und {{ HTMLElement("thead") }}-Elementen hinzugefügt werden.
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
- {{HTMLElement("caption")}}, {{HTMLElement("col")}}, {{HTMLElement("colgroup")}}, {{HTMLElement("table")}}, {{HTMLElement("td")}}, {{HTMLElement("tfoot")}}, {{HTMLElement("th")}}, {{HTMLElement("thead")}}, {{HTMLElement("tr")}}: Andere tabellenbezogene Elemente
- {{cssxref("background-color")}}: CSS-Eigenschaft zum Setzen der Hintergrundfarbe jeder Tabellenzelle
- {{cssxref("border")}}: CSS-Eigenschaft zur Steuerung der Rahmen von Tabellenzellen
- {{cssxref("text-align")}}: CSS-Eigenschaft zur horizontalen Ausrichtung des Inhalts jeder Tabellenzelle
- {{cssxref("vertical-align")}}: CSS-Eigenschaft zur vertikallen Ausrichtung des Inhalts jeder Tabellenzelle
