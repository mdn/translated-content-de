---
title: "<tbody>: Das Table Body-Element"
slug: Web/HTML/Reference/Elements/tbody
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{HTMLSidebar}}

Das **`<tbody>`** [HTML](/de/docs/Web/HTML)-Element umfasst eine Gruppe von Tabellenzeilen ({{HTMLElement("tr")}}-Elemente) und kennzeichnet sie als den Hauptkörper der Tabellendaten.

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

Die folgenden Attribute sind veraltet und sollten nicht mehr benutzt werden. Sie sind hier nur der Vollständigkeit halber dokumentiert, für die Aktualisierung bestehenden Codes und aus historischem Interesse.

- `align` {{deprecated_inline}}

  - : Bestimmt die horizontale Ausrichtung jeder Tabellenzelle. Die möglichen {{Glossary("enumerated", "aufgezählten")}} Werte sind `left`, `center`, `right`, `justify` und `char`. Wenn unterstützt, richtet der `char`-Wert den Textinhalt auf das im [`char`](#char)-Attribut definierte Zeichen und auf den durch das [`charoff`](#charoff)-Attribut definierten Versatz aus. Verwenden Sie stattdessen die {{cssxref("text-align")}} CSS-Eigenschaft, da dieses Attribut veraltet ist.

- `bgcolor` {{deprecated_inline}}

  - : Definiert die Hintergrundfarbe jeder Zelle des Körpers. Der Wert ist eine HTML-Farbe; entweder ein [6-stelliger, hexadezimaler RGB-Farbcode](/de/docs/Web/CSS/hex-color), der mit einem `#` versehen ist, oder ein [Farbkeyword](/de/docs/Web/CSS/named-color). Andere CSS {{cssxref("color_value", "&lt;color&gt;")}}-Werte werden nicht unterstützt. Verwenden Sie stattdessen die {{cssxref("background-color")}} CSS-Eigenschaft, da dieses Attribut veraltet ist.

- `char` {{deprecated_inline}}

  - : Gibt die Ausrichtung des Inhalts auf ein Zeichen in jeder Zelle des Körperbereichs an. Typische Werte hierfür sind Punkt (`.`), um beispielsweise Zahlen oder Geldbeträge auszurichten. Wenn [`align`](#align) nicht auf `char` gesetzt ist, wird dieses Attribut ignoriert.

- `charoff` {{deprecated_inline}}

  - : Gibt die Anzahl der Zeichen an, um die der Zellinhalt vom durch das [`char`](#char)-Attribut festgelegten Ausrichtungszeichen versetzt wird.

- `valign` {{deprecated_inline}}
  - : Gibt die vertikale Ausrichtung jeder Zelle des Körpers an. Die möglichen {{Glossary("enumerated", "aufgezählten")}} Werte sind `baseline`, `bottom`, `middle` und `top`. Verwenden Sie stattdessen die {{cssxref("vertical-align")}} CSS-Eigenschaft, da dieses Attribut veraltet ist.

## Nutzungshinweise

- Das `<tbody>` wird nach allen {{HTMLElement("caption")}}, {{HTMLElement("colgroup")}} und {{HTMLElement("thead")}}-Elementen platziert.
- Wenn {{HTMLElement("tr")}}-Elemente als direkte Kinder des {{HTMLElement("table")}} spezifiziert sind (siehe "Tag-Auslassung" in der [technischen Zusammenfassung](#technische_zusammenfassung) für eine Beschreibung, wann dies zulässig ist), wird das vom Browser generierte Markup ein `<tbody>`-Element enthalten, das sie umschließt. Infolgedessen werden CSS-Selektoren wie `table > tr` diese Elemente nicht auswählen. Siehe auch das [Beispiel Ohne Spezifikation eines Körpers](#ohne_spezifikation_eines_körpers).
- Es ist erlaubt, mehr als ein `<tbody>` pro Tabelle zu verwenden, solange sie alle aufeinander folgen. Dies ermöglicht es, die Zeilen ({{HTMLElement("tr")}}-Elemente) in großen Tabellen in Abschnitte zu unterteilen, die jeweils bei Bedarf separat formatiert werden können. Falls nicht so markiert, dass sie aufeinander folgende Elemente sind, werden Browser diesen Autorenfehler korrigieren, indem sichergestellt wird, dass die {{HTMLElement("thead")}}- und {{HTMLElement("tfoot")}}-Elemente als erste und letzte Elemente der Tabelle gerendert werden.
- Zusammen mit den verwandten {{HTMLElement("thead")}}- und {{HTMLElement("tfoot")}}-Elementen bietet das `<tbody>`-Element nützliche {{Glossary("semantics", "semantische")}} Informationen und kann sowohl beim Rendern für Bildschirm als auch für Druck verwendet werden. Das Spezifizieren solcher Tabellengruppen bietet auch wertvolle kontextuelle Informationen für unterstützende Technologien, einschließlich Bildschirmlesegeräten und Suchmaschinen.
- Beim Drucken eines Dokuments spezifizieren die {{HTMLElement("thead")}}- und {{htmlelement("tfoot")}}-Elemente in der Regel Informationen, die auf jeder Seite gleich bleiben oder zumindest sehr ähnlich sind, während sich der Inhalt des `<tbody>`-Elements von Seite zu Seite unterscheidet.
- Wenn eine Tabelle in einem Bildschirmkontext (z.B. ein Fenster), das nicht groß genug ist, um die gesamte Tabelle anzuzeigen, dargestellt wird, kann der {{Glossary("user_agent", "User Agent")}} es ermöglichen, den Inhalt der {{HTMLElement("thead")}}, `<tbody>`, {{htmlelement("tfoot")}} und {{HTMLElement("caption")}}-Blöcke unabhängig voneinander zu scrollen, jeweils für das gleiche übergeordnete {{htmlelement("table")}}-Element.

## Beispiele

Siehe {{HTMLElement("table")}} für ein vollständiges Tabellenbeispiel, das gängige Standards und bewährte Praktiken vorstellt.

### Ohne Spezifikation eines Körpers

Dieses Beispiel zeigt, dass der Browser automatisch {{HTMLElement("tr")}}-Elemente in ein `<tbody>`-Element einfügt, wenn die Zeilen nicht innerhalb eines Tabellengruppierungselements (`<tbody>`, `<tfoot>` oder `<thead>`) verschachtelt sind und als direkte Kinder des {{HTMLElement("table")}}-Elements, wie in diesem Beispiel, erscheinen.

#### HTML

Hier wird eine sehr einfache Tabelle mit einigen Tabellenzeilen ({{HTMLElement("tr")}}-Elemente), die Daten ({{HTMLElement("td")}}-Elemente) über Studenten enthalten, erstellt.

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

Beachten Sie das CSS im Beispiel, in dem ein {{cssxref("background-color")}} für das `<tbody>`-Element angegeben wird und `tbody` als Teil eines zusätzlichen {{Glossary("css_selector", "CSS-Selektors")}} verwendet wird. Alternativ können {{Glossary("developer_tools", "Browser-Entwicklertools")}} verwendet werden, um die Anwesenheit des `<tbody>`-Elements im {{Glossary("dom", "DOM")}} zu prüfen.

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

Dieses Beispiel erweitert und verbessert die grundlegende Tabelle aus dem [vorherigen Beispiel](#ohne_spezifikation_eines_körpers).

#### HTML

Wir führen einen Tabellenkopf ({{HTMLElement("thead")}}-Element) ein und verwenden explizit ein `<tbody>`-Element, um die Tabelle in {{Glossary("semantics", "semantische")}} Abschnitte zu unterteilen. Der Tabellenkopf enthält die Spaltenüberschriften ({{HTMLElement("th")}}-Elemente). Das `<tbody>`-Element repräsentiert den Hauptkorpus der Tabelle, der eine Anzahl von Zeilen ({{HTMLElement("tr")}}-Elemente) mit den Hauptdaten der Tabelle enthält, nämlich die Daten jedes Studenten.

Der Einsatz solcher Tabellengruppierungen und {{Glossary("semantics", "semantischen")}} Markups ist nicht nur nützlich für die visuelle Präsentation (über CSS-Styling) und für kontextuelle Informationen für unterstützende Technologien; außerdem hilft der explizite Einsatz des `<tbody>`-Elements dem Browser, die beabsichtigte Tabellenstruktur zu erstellen und unerwünschte Ergebnisse zu vermeiden.

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

Das CSS ist fast unverändert gegenüber dem [vorherigen Beispiel](#ohne_spezifikation_eines_körpers), abgesehen von einigen grundlegenden Stilelementen, um den Tabellenkopf hervorzuheben, damit sich die Kopfzeilen der Spalten von den Daten im Tabellenkörper abheben. Wie im [obigen Beispiel](#ohne_spezifikation_eines_körpers) wird der [Type-Selector](/de/docs/Web/CSS/Type_selectors) `tbody` verwendet, um die Körperzellen zu stylen.

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

Die Verwendung mehrerer `<tbody>`-Elemente ermöglicht die Erstellung von Zeilengruppierungen innerhalb einer Tabelle. Jeder Tabellenkörper kann potenziell seine eigenen Kopfzeilen oder -zeilen haben; es _darf jedoch nur ein {{HTMLElement("thead")}}-Element pro Tabelle geben_! Aus diesem Grund können {{HTMLElement("tr")}} mit {{HTMLElement("th")}}-Elementen verwendet werden, um Überschriften innerhalb jedes `<tbody>` zu erstellen.

#### HTML

Ausgehend von der Tabelle im [vorherigen Basisbeispiel](#grundlegende_körperstruktur) werden weitere Studenten hinzugefügt und anstatt das Hauptfach jedes Studenten auf jeder Zeile aufzuführen, werden die Studenten nach Hauptfach gruppiert. Beachten Sie, dass jedes Hauptfach innerhalb seines eigenen `<tbody>`-Blocks eingeschlossen ist, wobei die erste Zeile ({{HTMLElement("tr")}}-Element) als Kopf des Blocks dient und den Titel des Hauptfachs in einem {{HTMLElement("th")}}-Element anzeigt, das das [`colspan`](/de/docs/Web/HTML/Reference/Elements/th#colspan)-Attribut verwendet, um die Überschrift über alle drei Spalten der Tabelle zu spannen. Jede verbleibende Zeile innerhalb jedes Hauptfachs `<tbody>` repräsentiert einen Studenten.

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

Der größte Teil des CSS bleibt unverändert. Jedoch wird ein etwas subtilerer Stil für Kopfzellen direkt innerhalb eines `<tbody>` hinzugefügt (im Gegensatz zu denen, die sich im {{HTMLElement("thead")}} befinden). Dies wird für die Überschriften verwendet, die das entsprechende Hauptfach jedes Tabellenabschnitts angeben.

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
      <th scope="row">Tag-Auslassung</th>
      <td>
        Das Start-Tag eines <code>&lt;tbody&gt;</code>-Elements kann ausgelassen werden, wenn das erste Element innerhalb des <code>&lt;tbody&gt;</code>-Elements ein {{HTMLElement("tr")}}-Element ist und wenn dem Element nicht unmittelbar ein <code>&lt;tbody&gt;</code>-, {{HTMLElement("thead")}}- oder {{HTMLElement("tfoot")}}-Element vorausgeht, dessen End-Tag ausgelassen wurde. (Es kann nicht ausgelassen werden, wenn das Element leer ist.)
        Das End-Tag eines <code>&lt;tbody&gt;</code>-Elements kann ausgelassen werden, wenn das <code>&lt;tbody&gt;</code>-Element unmittelbar von einem <code>&lt;tbody&gt;</code>- oder {{HTMLElement("tfoot")}}-Element gefolgt wird, oder wenn es keinen weiteren Inhalt im übergeordneten Element gibt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Innerhalb des erforderlichen Eltern-{{ HTMLElement("table") }}-Elements
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

- [Lernen: Grundlegendes zu HTML-Tabellen](/de/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics)
- {{HTMLElement("caption")}}, {{HTMLElement("col")}}, {{HTMLElement("colgroup")}}, {{HTMLElement("table")}}, {{HTMLElement("td")}}, {{HTMLElement("tfoot")}}, {{HTMLElement("th")}}, {{HTMLElement("thead")}}, {{HTMLElement("tr")}}: Andere tabellenbezogene Elemente
- {{cssxref("background-color")}}: CSS-Eigenschaft zum Festlegen der Hintergrundfarbe jeder Körperzelle
- {{cssxref("border")}}: CSS-Eigenschaft zum Steuern der Ränder von Körperzellen
- {{cssxref("text-align")}}: CSS-Eigenschaft zur horizontalen Ausrichtung des Inhalts jeder Körperzelle
- {{cssxref("vertical-align")}}: CSS-Eigenschaft zur vertikalen Ausrichtung des Inhalts jeder Körperzelle
