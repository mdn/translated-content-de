---
title: "<tbody>: Das Table Body-Element"
slug: Web/HTML/Element/tbody
l10n:
  sourceCommit: 5bd9fe2b25c6eee2a14d0406ce7116998fa48c13
---

{{HTMLSidebar}}

Das **`<tbody>`** [HTML](/de/docs/Web/HTML)-Element fasst eine Gruppe von Tabellenzeilen ({{HTMLElement("tr")}}-Elemente) zusammen und gibt an, dass diese den Hauptteil der Daten einer Tabelle darstellen.

{{EmbedInteractiveExample("pages/tabbed/tbody.html","tabbed-taller")}}

## Attribute

Dieses Element beinhaltet die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

### Veraltete Attribute

Folgende Attribute sind veraltet und sollten nicht verwendet werden. Sie sind nachfolgend dokumentiert für Referenzzwecke beim Aktualisieren bestehender Codes und aus historischem Interesse.

- `align` {{deprecated_inline}}

  - : Spezifiziert die horizontale Ausrichtung jeder Tabellenzelle. Die möglichen {{Glossary("enumerated", "aufzählbaren")}} Werte sind `left`, `center`, `right`, `justify` und `char`. Wenn unterstützt, richtet der `char`-Wert den Textinhalt an dem Zeichen aus, das im [`char`](#char)-Attribut definiert ist, und an der durch das [`charoff`](#charoff)-Attribut bestimmten Versatzposition. Verwenden Sie die {{cssxref("text-align")}} CSS-Eigenschaft anstelle dieses Attributs, da es veraltet ist.

- `bgcolor` {{deprecated_inline}}

  - : Definiert die Hintergrundfarbe jeder Tabellenzelle. Der Wert ist eine HTML-Farbe; entweder ein [6-stelliger hexadezimaler RGB-Code](/de/docs/Web/CSS/hex-color), dem ein `#` vorangestellt ist, oder ein [Farb-Keyword](/de/docs/Web/CSS/named-color). Andere CSS-{{cssxref("color_value", "&lt;color&gt")}}-Werte werden nicht unterstützt. Verwenden Sie die {{cssxref("background-color")}} CSS-Eigenschaft anstelle dieses Attributs, da es veraltet ist.

- `char` {{deprecated_inline}}

  - : Bestimmt die Ausrichtung des Inhalts an einem Zeichen jeder Tabellenzelle. Typische Werte hierfür sind ein Punkt (`.`) beim Versuch, Zahlen oder Geldwerte auszurichten. Wenn [`align`](#align) nicht auf `char` gesetzt ist, wird dieses Attribut ignoriert.

- `charoff` {{deprecated_inline}}

  - : Gibt die Anzahl der Zeichen an, um die der Tabellenzellinhalt von dem durch das [`char`](#char)-Attribut spezifizierten Ausrichtungszeichen versetzt werden soll.

- `valign` {{deprecated_inline}}

  - : Bestimmt die vertikale Ausrichtung jeder Tabellenzelle. Die möglichen {{Glossary("enumerated", "aufzählbaren")}} Werte sind `baseline`, `bottom`, `middle` und `top`. Verwenden Sie die {{cssxref("vertical-align")}} CSS-Eigenschaft anstelle dieses Attributs, da es veraltet ist.

## Verwendungshinweise

- Das `<tbody>` wird nach allen {{HTMLElement("caption")}}, {{HTMLElement("colgroup")}} und {{HTMLElement("thead")}}-Elementen platziert.
- Wenn {{HTMLElement("tr")}}-Elemente als direkte Kinder des {{HTMLElement("table")}}-Elements spezifiziert sind (siehe "Tag-Auslassung" im [technischen Überblick](#technische_zusammenfassung), für eine Beschreibung, wann dies erlaubt ist), dann erzeugt der Browser-Markup ein `<tbody>`-Element, das diese einschließt. Dadurch werden CSS-Selektoren wie `table > tr` diese Elemente nicht auswählen. Siehe auch das Beispiel [Keine Angabe eines Körpers](#keine_angabe_eines_körpers).
- Es ist erlaubt, mehr als ein `<tbody>` pro Tabelle zu verwenden, solange sie alle aufeinanderfolgend sind. Dies ermöglicht es, die Zeilen ({{HTMLElement("tr")}}-Elemente) in großen Tabellen in Abschnitte zu unterteilen, die jeweils separat formatiert werden können, sofern gewünscht. Wenn sie nicht als aufeinanderfolgende Elemente markiert sind, korrigieren Browser diesen Autorenfehler, indem sie sicherstellen, dass alle {{HTMLElement("thead")}}- und {{HTMLElement("tfoot")}}-Elemente als erstes bzw. letztes Element der Tabelle gerendert werden.
- Zusammen mit seinen verwandten {{HTMLElement("thead")}}- und {{HTMLElement("tfoot")}}-Elementen bietet das `<tbody>`-Element nützliche {{Glossary("semantics", "semantische")}} Informationen und kann sowohl beim Rendern für Bildschirme als auch für den Druck verwendet werden. Die Angabe solcher Tabelleninhalt-Gruppen bietet auch wertvolle Kontextinformationen für unterstützende Technologien, einschließlich Screen Reader und Suchmaschinen.
- Beim Drucken eines Dokuments, im Fall einer mehrseitigen Tabelle, geben die {{HTMLElement("thead")}}- und {{htmlelement("tfoot")}}-Elemente normalerweise Informationen an, die auf jeder Seite gleich bleiben - oder zumindest sehr ähnlich sind -, während der Inhalt des `<tbody>`-Elements von Seite zu Seite in der Regel unterschiedlich ist.
- Wenn eine Tabelle in einem Bildschirmkontext (wie einem Fenster) angezeigt wird, das nicht groß genug ist, um die gesamte Tabelle anzuzeigen, kann der {{Glossary("user_agent", "User-Agent")}} dem Benutzer erlauben, die Inhalte der {{HTMLElement("thead")}}, `<tbody>`, {{htmlelement("tfoot")}} und {{HTMLElement("caption")}}-Blöcke separat voneinander zu scrollen, für dasselbe übergeordnete {{htmlelement("table")}}.

## Beispiele

Siehe {{HTMLElement("table")}} für ein vollständiges Tabellenbeispiel, das gängige Standards und Best Practices einführt.

### Keine Angabe eines Körpers

Dieses Beispiel zeigt, dass der Browser automatisch {{HTMLElement("tr")}}-Elemente in einem `<tbody>`-Element einkapselt, wenn die Zeilen nicht innerhalb eines Tabellen-Gruppierungselements (`<tbody>`, `<tfoot>` oder `<thead>`) verschachtelt sind und, wie in diesem Beispiel, die direkten Kinder des {{HTMLElement("table")}}-Elements sind.

#### HTML

Hier wird eine sehr einfache Tabelle mit einigen Tabellenzeilen ({{HTMLElement("tr")}}-Elementen) erstellt, die Daten ({{HTMLElement("td")}}-Elemente) über Schüler enthalten.

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

Beachten Sie das CSS im Beispiel, wo eine {{cssxref("background-color")}} für das `<tbody>`-Element angegeben ist und `tbody` als Teil eines zusätzlichen {{Glossary("css_selector", "CSS-Selectors")}} verwendet wird. Alternativ können {{Glossary("developer_tools", "Entwicklertools im Browser")}} verwendet werden, um die Anwesenheit des `<tbody>`-Elements im {{Glossary("dom", "DOM")}} zu überprüfen.

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

Dieses Beispiel erweitert und verbessert die grundlegende Tabelle aus dem [vorherigen Beispiel](#keine_angabe_eines_körpers).

#### HTML

Wir führen einen Tabellenkopf ({{HTMLElement("thead")}}-Element) ein und verwenden explizit ein `<tbody>`-Element, um die Tabelle in {{Glossary("semantics", "semantische")}} Abschnitte zu gliedern. Der Tabellenkopf enthält die Spaltenüberschriften ({{HTMLElement("th")}}-Elemente). Das `<tbody>`-Element stellt den Hauptteil der Tabelle dar, der eine Anzahl von Zeilen ({{HTMLElement("tr")}}-Elemente) mit den Hauptdaten der Tabelle enthält, also die Daten jedes Schülers.

Die Verwendung solcher Tabelleninhalts-Gruppen und {{Glossary("semantics", "semantischer")}} Markups ist nicht nur nützlich für die visuelle Darstellung (via CSS-Styling) und kontextbezogene Informationen für unterstützende Technologien; zudem hilft die explizite Verwendung des `<tbody>`-Elements dem Browser, die beabsichtigte Tabellenstruktur zu erstellen und unerwünschte Ergebnisse zu vermeiden.

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

Das CSS ist nahezu unverändert gegenüber dem [vorherigen Beispiel](#keine_angabe_eines_körpers), mit Ausnahme einiger grundlegender Stiländerungen, um den Tabellenkopf hervorzuheben, sodass die Spaltenüberschriften sich von den Daten im Tabellenkörper abheben. Wie im [obigen Beispiel](#keine_angabe_eines_körpers) wird der `tbody`-[Typselektor](/de/docs/Web/CSS/Type_selectors) verwendet, um die Tabellenzellen zu gestalten.

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

### Mehrfache Körper

Dieses Beispiel erweitert und verbessert die Tabelle aus dem [obigen Beispiel](#grundlegende_körperstruktur) noch weiter durch die Einführung mehrerer Körperabschnitte.

Die Verwendung mehrerer `<tbody>`-Elemente ermöglicht es, Zeilengruppierungen innerhalb einer Tabelle zu erstellen. Jeder Tabellenkörper kann potenziell eine eigene Kopfzeile oder eigene Kopfzeilen haben; jedoch _darf es nur ein {{HTMLElement("thead")}}-Element pro Tabelle geben_! Aus diesem Grund können {{HTMLElement("tr")}} mit {{HTMLElement("th")}}-Elementen verwendet werden, um Überschriften innerhalb jedes `<tbody>` zu erstellen.

#### HTML

Aufbauend auf der Tabelle im [vorherigen grundlegenden Beispiel](#grundlegende_körperstruktur), werden mehr Schüler hinzugefügt und anstatt das Hauptfach jedes Schülers in jeder Zeile aufzuführen, werden die Schüler nach Hauptfach gruppiert. Bitte beachten Sie, dass jedes Hauptfach innerhalb seines eigenen `<tbody>`-Blocks eingeschlossen ist, wobei die erste Zeile ({{HTMLElement("tr")}}-Element) als Kopfzeile des Blocks dient und den Titelnamen mit einem {{HTMLElement("th")}}-Element anzeigt, das das [`colspan`](/de/docs/Web/HTML/Element/th#colspan)-Attribut verwendet, um die Überschrift über alle drei Spalten der Tabelle zu erstrecken. Jede verbleibende Zeile innerhalb jedes Hauptfachs `<tbody>` repräsentiert einen Schüler.

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

Der größte Teil des CSS bleibt unverändert. Allerdings wird ein etwas subtilerer Stil für Kopfzellen hinzugefügt, die direkt innerhalb eines `<tbody>` (im Gegensatz zu denen, die sich im {{HTMLElement("thead")}} befinden) enthalten sind. Dies wird für die Kopfzeilen verwendet, die das entsprechende Hauptfach eines jeden Tabellenabschnitts anzeigen.

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
        <a href="/de/docs/Web/HTML/Content_categories"
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
        Das Start-Tag eines <code>&lt;tbody&gt;</code>-Elements kann weggelassen werden, wenn das erste Element innerhalb des <code>&lt;tbody&gt;</code>-Elements ein {{HTMLElement("tr")}}-Element ist und wenn das Element nicht direkt vor einem <code>&lt;tbody&gt;</code>, {{HTMLElement("thead")}} oder {{HTMLElement("tfoot")}} steht, dessen End-Tag weggelassen wurde. (Es kann nicht weggelassen werden, wenn das Element leer ist.)
        Das End-Tag eines <code>&lt;tbody&gt;</code>-Elements kann weggelassen werden, wenn das <code>&lt;tbody&gt;</code>-Element direkt von einem <code>&lt;tbody&gt;</code>- oder {{HTMLElement("tfoot")}}-Element gefolgt wird oder wenn kein weiterer Inhalt im übergeordneten Element vorhanden ist.
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

- [Lernen: HTML-Tabellen](/de/docs/Learn/HTML/Tables)
- {{HTMLElement("caption")}}, {{HTMLElement("col")}}, {{HTMLElement("colgroup")}}, {{HTMLElement("table")}}, {{HTMLElement("td")}}, {{HTMLElement("tfoot")}}, {{HTMLElement("th")}}, {{HTMLElement("thead")}}, {{HTMLElement("tr")}}: Andere tabellenbezogene Elemente
- {{cssxref("background-color")}}: CSS-Eigenschaft, um die Hintergrundfarbe jeder Tabellenzelle einzustellen
- {{cssxref("border")}}: CSS-Eigenschaft, um die Rahmen der Tabellenzellen zu kontrollieren
- {{cssxref("text-align")}}: CSS-Eigenschaft, um den Inhalt jeder Tabellenzelle horizontal auszurichten
- {{cssxref("vertical-align")}}: CSS-Eigenschaft, um den Inhalt jeder Tabellenzelle vertikal auszurichten
