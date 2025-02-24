---
title: "<tbody>: Das Table Body Element"
slug: Web/HTML/Element/tbody
l10n:
  sourceCommit: 8b02826c79b090b5af0d68ae1ef39f932a66a7f1
---

{{HTMLSidebar}}

Das **`<tbody>`** [HTML](/de/docs/Web/HTML)-Element kapselt eine Reihe von Tabellenzeilen ({{HTMLElement("tr")}}-Elemente) ein und gibt an, dass sie den Hauptteil der (Haupt-)Daten einer Tabelle bilden.

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

Dieses Element enthält die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

### Veraltete Attribute

Die folgenden Attribute sind veraltet und sollten nicht verwendet werden. Sie sind hier dokumentiert, um beim Aktualisieren vorhandenen Codes zu helfen und aus historischem Interesse.

- `align` {{deprecated_inline}}

  - : Gibt die horizontale Ausrichtung jeder Tabellenzelle an. Die möglichen {{Glossary("enumerated", "aufzählbaren")}} Werte sind `left`, `center`, `right`, `justify` und `char`. Wenn der Wert `char` unterstützt wird, richtet er den Textinhalt am in dem [`char`](#char)-Attribut definierten Zeichen und an dem im [`charoff`](#charoff)-Attribut definierten Offset aus. Verwenden Sie stattdessen die {{cssxref("text-align")}} CSS-Eigenschaft, da dieses Attribut veraltet ist.

- `bgcolor` {{deprecated_inline}}

  - : Definiert die Hintergrundfarbe jeder Tabellenzelle. Der Wert ist eine HTML-Farbe; entweder ein [6-stelliges hexadezimales RGB-Code](/de/docs/Web/CSS/hex-color), vorangestellt von einem `#`, oder ein [Farbkeyword](/de/docs/Web/CSS/named-color). Andere CSS {{cssxref("color_value", "&lt;color&gt")}}-Werte werden nicht unterstützt. Verwenden Sie stattdessen die {{cssxref("background-color")}} CSS-Eigenschaft, da dieses Attribut veraltet ist.

- `char` {{deprecated_inline}}

  - : Gibt die Ausrichtung des Inhalts auf ein Zeichen jeder Tabellenzelle an. Typische Werte hierfür sind ein Punkt (`.`), wenn versucht wird, Zahlen oder Geldwerte auszurichten. Wenn [`align`](#align) nicht auf `char` gesetzt ist, wird dieses Attribut ignoriert.

- `charoff` {{deprecated_inline}}

  - : Gibt die Anzahl der Zeichen an, um die der Tabellenzelleninhalt vom Ausrichtungszeichen, das durch das [`char`](#char)-Attribut festgelegt wurde, versetzt werden soll.

- `valign` {{deprecated_inline}}

  - : Gibt die vertikale Ausrichtung jeder Tabellenzelle an. Die möglichen {{Glossary("enumerated", "aufzählbaren")}} Werte sind `baseline`, `bottom`, `middle` und `top`. Verwenden Sie stattdessen die {{cssxref("vertical-align")}} CSS-Eigenschaft, da dieses Attribut veraltet ist.

## Nutzungshinweise

- Das `<tbody>` wird nach allen {{HTMLElement("caption")}}, {{HTMLElement("colgroup")}} und {{HTMLElement("thead")}}-Elementen platziert.
- Falls {{HTMLElement("tr")}}-Elemente als direkte Kinder des {{HTMLElement("table")}}-Elements spezifiziert sind (siehe "Tag-Auslassung" in der [technischen Übersicht](#technische_übersicht) für eine Beschreibung, wann dies gültig ist), wird das vom Browser generierte Markup ein `<tbody>`-Element enthalten, das sie kapselt. Infolgedessen werden CSS-Selektoren wie `table > tr` diese Elemente nicht auswählen. Siehe auch das Beispiel [Körperelement nicht spezifizieren](#körperelement_nicht_spezifizieren).
- Es ist erlaubt, mehr als ein `<tbody>` pro Tabelle zu verwenden, solange sie alle aufeinanderfolgend sind. Dies ermöglicht es, die Zeilen ({{HTMLElement("tr")}}-Elemente) in großen Tabellen in Abschnitte zu unterteilen, von denen jede bei Bedarf separat formatiert werden kann. Wenn sie nicht als aufeinanderfolgende Elemente markiert sind, korrigieren Browser diesen Autorenfehler, indem sie sicherstellen, dass alle {{HTMLElement("thead")}}- und {{HTMLElement("tfoot")}}-Elemente als das erste und letzte Element der Tabelle dargestellt werden.
- Zusammen mit den verwandten {{HTMLElement("thead")}}- und {{HTMLElement("tfoot")}}-Elementen bietet das `<tbody>`-Element nützliche {{Glossary("semantics", "semantische")}} Informationen und kann beim Rendern sowohl für Bildschirm- als auch für Druckausgaben verwendet werden. Das Spezifizieren solcher Tabelleninhaltsgruppen bietet auch wertvolle kontextuelle Informationen für unterstützende Technologien, einschließlich Bildschirmlesern und Suchmaschinen.
- Beim Drucken eines Dokuments, im Fall einer mehrseitigen Tabelle, geben die {{HTMLElement("thead")}}- und {{htmlelement("tfoot")}}-Elemente normalerweise Informationen an, die auf jeder Seite gleich bleiben oder zumindest sehr ähnlich sind, während der Inhalt des `<tbody>`-Elements von Seite zu Seite in der Regel unterschiedlich ist.
- Wenn eine Tabelle in einem Bildschirmkontext präsentiert wird (wie ein Fenster), das nicht groß genug ist, um die gesamte Tabelle anzuzeigen, kann der {{Glossary("user_agent", "Benutzeragent")}} dem Benutzer erlauben, den Inhalt der {{HTMLElement("thead")}}, `<tbody>`, {{htmlelement("tfoot")}} und {{HTMLElement("caption")}} Blöcke unabhängig voneinander für dasselbe übergeordnete {{htmlelement("table")}} zu scrollen.

## Beispiele

Siehe {{HTMLElement("table")}} für ein vollständiges Tabellenbeispiel, das gängige Standards und bewährte Praktiken einführt.

### Körperelement nicht spezifizieren

Dieses Beispiel zeigt, dass der Browser {{HTMLElement("tr")}}-Elemente automatisch in einem `<tbody>`-Element kapselt, wenn die Zeilen nicht in einem Tabellengruppierungselement (`<tbody>`, `<tfoot>` oder `<thead>`) verschachtelt sind und, wie in diesem Beispiel, die direkten Kinder des {{HTMLElement("table")}}-Elements sind.

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

Beachten Sie das CSS im Beispiel, bei dem eine {{cssxref("background-color")}} für das `<tbody>`-Element angegeben wird und `tbody` als Teil eines zusätzlichen {{Glossary("css_selector", "CSS-Selektors")}} verwendet wird. Alternativ können {{Glossary("developer_tools", "Entwicklertools für den Browser")}} verwendet werden, um die Präsenz des `<tbody>`-Elements im {{Glossary("dom", "DOM")}} zu überprüfen.

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

Dieses Beispiel erweitert und verbessert die einfache Tabelle aus dem [vorherigen Beispiel](#körperelement_nicht_spezifizieren).

#### HTML

Wir führen einen Tabellenkopf ({{HTMLElement("thead")}}-Element) ein und verwenden explizit ein `<tbody>`-Element, um die Tabelle in {{Glossary("semantics", "semantische")}} Abschnitte zu gliedern. Der Tabellenkopf enthält die Spaltenüberschriften ({{HTMLElement("th")}}-Elemente). Das `<tbody>`-Element repräsentiert den Hauptteil der Tabelle, der eine Anzahl von Zeilen ({{HTMLElement("tr")}}-Elemente) mit den Hauptdaten der Tabelle enthält, was die Daten jedes Schülers sind.

Die Verwendung solcher Tabelleninhaltsgruppen und {{Glossary("semantics", "semantischen")}} Markups ist nicht nur nützlich für die visuelle Präsentation (via CSS-Styling) und kontextuelle Informationen für unterstützende Technologien; zudem hilft die explizite Verwendung des `<tbody>`-Elements dem Browser, die gewünschte Tabellenstruktur zu erstellen und unerwünschte Ergebnisse zu vermeiden.

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

Das CSS ist fast unverändert gegenüber dem [vorherigen Beispiel](#körperelement_nicht_spezifizieren), abgesehen von einigen grundlegenden Stilen, um den Tabellenkopf hervorzuheben, sodass die Überschriften der Spalten von den Daten im Tabellenkörper auffallen. Wie im [obigen Beispiel](#körperelement_nicht_spezifizieren) wird der `tbody`- [Typselektor](/de/docs/Web/CSS/Type_selectors) verwendet, um die Tabellenzellen zu stylen.

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

Dieses Beispiel erweitert und verbessert die Tabelle aus dem [obigen Beispiel](#grundlegende_körperstruktur) noch mehr, indem mehrere Körperabschnitte eingeführt werden.

Die Verwendung mehrerer `<tbody>`-Elemente ermöglicht die Erstellung von Zeilengruppen innerhalb einer Tabelle. Jeder Tabellenkörper kann potenziell seine eigene Kopfzeile oder Kopfzeilen haben; jedoch _darf es nur ein {{HTMLElement("thead")}}-Element pro Tabelle geben_! Deshalb können {{HTMLElement("tr")}} mit {{HTMLElement("th")}}-Elementen verwendet werden, um Überschriften innerhalb jedes `<tbody>` zu erstellen.

#### HTML

Aufbauend auf der Tabelle im [vorherigen Grundbeispiel](#grundlegende_körperstruktur), werden mehr Studenten hinzugefügt und anstatt das Hauptfach jedes Schülers in jeder Zeile aufzulisten, werden die Schüler nach Hauptfach gruppiert. Beachten Sie, dass jedes Hauptfach in seinem eigenen `<tbody>`-Block eingeschlossen ist, wobei die erste Zeile ({{HTMLElement("tr")}}-Element) als Kopfzeile des Blocks dient und den Haupttitel innerhalb eines {{HTMLElement("th")}}-Elements anzeigt, das das [`colspan`](/de/docs/Web/HTML/Element/th#colspan)-Attribut verwendet, um die Kopfzeile über alle drei Spalten der Tabelle zu erstrecken. Jede verbleibende Zeile innerhalb jedes Hauptfachs `<tbody>` repräsentiert einen Schüler.

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

Der größte Teil des CSS bleibt unverändert. Jedoch wird ein etwas subtilerer Stil für die Header-Zellen hinzugefügt, die sich direkt in einem `<tbody>` befinden (im Gegensatz zu denen, die in {{HTMLElement("thead")}} sind). Dies wird für die Header verwendet, die das jeweilige Hauptfach des Tabellenabschnitts angeben.

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

## Technische Übersicht

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
        Das Start-Tag eines <code>&lt;tbody&gt;</code>-Elements kann weggelassen werden, wenn das erste Element innerhalb des <code>&lt;tbody&gt;</code>-Elements ein {{HTMLElement("tr")}}-Element ist und wenn das Element nicht unmittelbar von einem <code>&lt;tbody&gt;</code>, {{HTMLElement("thead")}}, oder {{HTMLElement("tfoot")}}-Element, dessen End-Tag weggelassen wurde, vorausgeht. (Es kann nicht weggelassen werden, wenn das Element leer ist.)
        Das End-Tag eines <code>&lt;tbody&gt;</code>-Elements kann weggelassen werden, wenn das <code>&lt;tbody&gt;</code>-Element unmittelbar von einem <code>&lt;tbody&gt;</code> oder {{HTMLElement("tfoot")}}-Element gefolgt wird oder wenn kein Inhalt mehr im übergeordneten Element vorhanden ist.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Innerhalb des erforderlichen übergeordneten {{ HTMLElement("table") }}-Elements kann das <code>&lt;tbody&gt;</code>-Element nach allen {{ HTMLElement("caption") }}, {{HTMLElement("colgroup") }}, und {{ HTMLElement("thead") }}-Elementen hinzugefügt werden.
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

- [Erfahren: HTML-Tabellen-Grundlagen](/de/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics)
- {{HTMLElement("caption")}}, {{HTMLElement("col")}}, {{HTMLElement("colgroup")}}, {{HTMLElement("table")}}, {{HTMLElement("td")}}, {{HTMLElement("tfoot")}}, {{HTMLElement("th")}}, {{HTMLElement("thead")}}, {{HTMLElement("tr")}}: Andere tabellenbezogene Elemente
- {{cssxref("background-color")}}: CSS-Eigenschaft, um die Hintergrundfarbe jeder Tabellenzelle festzulegen
- {{cssxref("border")}}: CSS-Eigenschaft, um die Ränder von Tabellenzellen zu steuern
- {{cssxref("text-align")}}: CSS-Eigenschaft, um den Inhalt jeder Tabellenzelle horizontal auszurichten
- {{cssxref("vertical-align")}}: CSS-Eigenschaft, um den Inhalt jeder Tabellenzelle vertikal auszurichten
