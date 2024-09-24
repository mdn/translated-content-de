---
title: "<tbody>: Das Table Body-Element"
slug: Web/HTML/Element/tbody
l10n:
  sourceCommit: 9231a7046973685f4600e1891fa644ecce41ef3b
---

{{HTMLSidebar}}

Das **`<tbody>`** [HTML](/de/docs/Web/HTML)-Element umschließt eine Gruppe von Tabellenzeilen ({{HTMLElement("tr")}}-Elemente) und kennzeichnet, dass sie den Hauptinhalt einer Tabelle bilden.

{{EmbedInteractiveExample("pages/tabbed/tbody.html","tabbed-taller")}}

## Attribute

Dieses Element beinhaltet die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

### Veraltete Attribute

Die folgenden Attribute sind veraltet und sollten nicht verwendet werden. Sie werden hier zu Referenzzwecken aufgeführt, um bestehende Codes zu aktualisieren und aus historischem Interesse.

- `align` {{deprecated_inline}}

  - : Gibt die horizontale Ausrichtung jeder Tabellenzelle an. Die möglichen {{Glossary("enumerated")}} Werte sind `left`, `center`, `right`, `justify` und `char`. Wird der `char` Wert unterstützt, wird der Text auf das Zeichen ausgerichtet, das durch das [`char`](#char)-Attribut definiert ist, und auf den Versatz, der durch das [`charoff`](#charoff)-Attribut definiert ist. Stattdessen sollte die {{cssxref("text-align")}} CSS-Eigenschaft verwendet werden, da dieses Attribut veraltet ist.

- `bgcolor` {{deprecated_inline}}

  - : Definiert die Hintergrundfarbe jeder Tabellenzelle. Der Wert ist eine HTML-Farbe; entweder ein [6-stelliger hexadezimaler RGB-Code](/de/docs/Web/CSS/hex-color), der mit einem „#“ vorangestellt wird, oder ein [Farbkeyword](/de/docs/Web/CSS/named-color). Andere CSS {{cssxref("color_value", "&lt;color&gt")}} Werte werden nicht unterstützt. Stattdessen sollte die {{cssxref("background-color")}} CSS-Eigenschaft verwendet werden, da dieses Attribut veraltet ist.

- `char` {{deprecated_inline}}

  - : Gibt die Ausrichtung des Inhalts an ein Zeichen jeder Zelle an. Typische Werte hierfür sind ein Punkt (`.`), wenn versucht wird, Zahlen oder Geldbeträge auszurichten. Wenn [`align`](#align) nicht auf `char` gesetzt ist, wird dieses Attribut ignoriert.

- `charoff` {{deprecated_inline}}

  - : Gibt die Anzahl der Zeichen an, um die der Tabelleninhaltszelle vom Ausrichtungszeichen, das durch das [`char`](#char)-Attribut angegeben ist, versetzt werden soll.

- `valign` {{deprecated_inline}}

  - : Gibt die vertikale Ausrichtung jeder Tabellenzelle an. Die möglichen {{Glossary("enumerated")}} Werte sind `baseline`, `bottom`, `middle` und `top`. Stattdessen sollte die {{cssxref("vertical-align")}} CSS-Eigenschaft verwendet werden, da dieses Attribut veraltet ist.

## Nutzungsnotizen

- Das `<tbody>`-Element wird nach jedem {{HTMLElement("caption")}}, {{HTMLElement("colgroup")}} und {{HTMLElement("thead")}}-Element platziert.
- Wenn {{HTMLElement("tr")}}-Elemente als direkte Nachkommen des {{HTMLElement("table")}}-Elements angegeben sind (siehe „Tag-Omsschluss“ in der [technischen Zusammenfassung](#technische_zusammenfassung) für eine Beschreibung, wann dies zulässig ist), dann umfasst das vom Browser generierte Markup ein `<tbody>`-Element, das sie einkapselt. Infolgedessen werden CSS-Selektoren wie `table > tr` diese Elemente nicht auswählen. Siehe auch das Beispiel [Nicht spezifizierter Tabellenkörper](#nicht_spezifizierter_tabellenkörper).
- Es ist erlaubt, mehr als ein `<tbody>` pro Tabelle zu verwenden, solange sie alle aufeinander folgen. Dies erlaubt es, die Reihen ({{HTMLElement("tr")}}-Elemente) in großen Tabellen in Abschnitte zu unterteilen, die jeweils separat formatiert werden können, wenn dies gewünscht wird. Wenn diese nicht als zusammenhängende Elemente ausgezeichnet sind, beheben Browser diesen Autorenfehler, indem sie sicherstellen, dass alle {{HTMLElement("thead")}} und {{HTMLElement("tfoot")}}-Elemente jeweils als erstes und letztes Element der Tabelle gerendert werden.
- Zusammen mit seinen verwandten {{HTMLElement("thead")}} und {{HTMLElement("tfoot")}}-Elementen liefert das `<tbody>`-Element nützliche {{Glossary("semantics", "semantische")}} Informationen und kann sowohl beim Rendern für den Bildschirm als auch für den Druck verwendet werden. Das Festlegen solcher Tabelleninhaltsgruppen bietet auch wertvolle Kontextinformationen für unterstützende Technologien, einschließlich Bildschirmleser und Suchmaschinen.
- Beim Drucken eines Dokuments geben im Falle einer mehrseitigen Tabelle die {{HTMLElement("thead")}} und {{htmlelement("tfoot")}}-Elemente normalerweise Informationen an, die auf jeder Seite gleich bleiben – oder zumindest sehr ähnlich sind –, während der Inhalt des `<tbody>`-Elements in der Regel von Seite zu Seite variiert.
- Wenn eine Tabelle in einem Bildschirmkontext (wie einem Fenster) präsentiert wird, der nicht groß genug ist, um die gesamte Tabelle anzuzeigen, kann der {{Glossary("user agent")}} dem Benutzer ermöglichen, den Inhalt der {{HTMLElement("thead")}}, `<tbody>`, {{htmlelement("tfoot")}} und {{HTMLElement("caption")}} Blöcke separat voneinander zu scrollen, für dieselbe übergeordnete {{htmlelement("table")}}.

## Beispiele

Siehe {{HTMLElement("table")}} für ein vollständiges Tabellenbeispiel mit Einführung in die allgemeinen Standards und Best Practices.

### Nicht spezifizierter Tabellenkörper

Dieses Beispiel zeigt, dass der Browser {{HTMLElement("tr")}}-Elemente automatisch in einem `<tbody>`-Element einkapselt, wenn die Zeilen nicht innerhalb eines Tabellengruppenelements (`<tbody>`, `<tfoot>` oder `<thead>`) verschachtelt sind und, wie in diesem Beispiel, die direkten Kinder des {{HTMLElement("table")}}-Elements darstellen.

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

Beachten Sie das CSS im Beispiel, bei dem eine {{cssxref("background-color")}} für das `<tbody>`-Element spezifiziert wird und das `tbody` als Teil eines zusätzlichen {{Glossary("css_selector", "CSS-Selektors")}} verwendet wird. Alternativ können {{Glossary("developer_tools", "Entwicklerwerkzeuge des Browsers")}} verwendet werden, um die Anwesenheit des `<tbody>`-Elements im {{Glossary("dom", "DOM")}} zu überprüfen.

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

Dieses Beispiel erweitert und verbessert die grundlegende Tabelle aus dem [vorherigen Beispiel](#nicht_spezifizierter_tabellenkörper).

#### HTML

Ein Tabellenkopf ({{HTMLElement("thead")}}-Element) wird eingeführt und ein `<tbody>`-Element wird explizit verwendet, um die Tabelle in {{Glossary("semantics", "semantische")}} Abschnitte zu strukturieren. Der Tabellenkopf enthält die Spaltenüberschriften ({{HTMLElement("th")}}-Elemente). Das `<tbody>`-Element repräsentiert den Hauptteil der Tabelle, der eine Anzahl von Zeilen ({{HTMLElement("tr")}}-Elemente) mit den Hauptdaten der Tabelle enthält, nämlich die Daten jedes Studenten.

Die Verwendung solcher Tabelleninhaltsgruppen und {{Glossary("semantics", "semantischer")}} Markup ist nicht nur nützlich für die visuelle Darstellung (über CSS-Styling) und Kontextinformationen für unterstützende Technologien; darüber hinaus hilft die explizite Verwendung des `<tbody>`-Elements dem Browser, die beabsichtigte Tabellenstruktur zu erstellen, um ungewollte Ergebnisse zu vermeiden.

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

Das CSS ist fast unverändert gegenüber dem [vorherigen Beispiel](#nicht_spezifizierter_tabellenkörper), mit Ausnahme einiger grundlegender Stile, um den Tabellenkopf hervorzuheben, so dass die Kopfzeilen der Spalten sich von den Daten im Tabellenkörper abheben. Wie im [obigen Beispiel](#nicht_spezifizierter_tabellenkörper), wird der `tbody` [Typselektor](/de/docs/Web/CSS/Type_selectors) verwendet, um die Tabellenzellen zu stylen.

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

Dieses Beispiel erweitert und verbessert die Tabelle aus dem [obigen Beispiel](#grundlegende_körperstruktur) noch mehr durch die Einführung mehrerer Körperabschnitte.

Mehrere `<tbody>`-Elemente ermöglichen die Erstellung von Zeifengruppen innerhalb einer Tabelle. Jeder Tabellenkörper kann potenziell seine eigene Kopfzeile oder –zeilen haben; _jedoch darf es nur ein {{HTMLElement("thead")}}-Element pro Tabelle geben_! Deshalb können {{HTMLElement("tr")}} mit {{HTMLElement("th")}}-Elementen verwendet werden, um Überschriften innerhalb jedes `<tbody>` zu erstellen.

#### HTML

Aufbauend auf der Tabelle im [vorherigen grundlegenden Beispiel](#grundlegende_körperstruktur) werden mehr Studenten hinzugefügt und anstatt das Hauptfach jedes Studenten in jeder Zeile aufzulisten, werden die Studenten nach Hauptfach gruppiert. Beachten Sie, dass jedes Hauptfach innerhalb eines eigenen `<tbody>`-Blocks eingeschlossen ist, wobei die erste Zeile ({{HTMLElement("tr")}}-Element) als Kopf der Gruppe dient und den Titel des Hauptfachs innerhalb eines {{HTMLElement("th")}}-Elements anzeigt, das das [`colspan`](/de/docs/Web/HTML/Element/th#colspan)-Attribut verwendet, um die Kopfzeile über alle drei Spalten der Tabelle zu erweitern. Jede verbleibende Zeile innerhalb jedes Hauptfachs `<tbody>` repräsentiert einen Studenten.

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

Die meisten der CSS-Stile bleiben unverändert. Es wurde jedoch eine etwas subtilere Stilrichtung für die Kopfzellen direkt innerhalb eines `<tbody>` (im Gegensatz zu denen, die im {{HTMLElement("thead")}} sind) hinzugefügt. Diese wird für die Köpfe verwendet, die das jeweilige Hauptfach für jeden Tabellenabschnitt anzeigen.

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
        <a href="/de/docs/Web/HTML/Content_categories">Inhaltskategorien</a>
      </th>
      <td>Keine.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Inhalte</th>
      <td>Null oder mehr {{ HTMLElement("tr") }}-Elemente.</td>
    </tr>
    <tr>
      <th scope="row">Tag-Überspringen</th>
      <td>
        Ein Start-Tag des <code>&lt;tbody&gt;</code>-Elements kann weggelassen werden, wenn das erste innerhalb des <code>&lt;tbody&gt;</code>-Elements stehende Element ein {{HTMLElement("tr")}}-Element ist und das Element nicht unmittelbar einem <code>&lt;tbody&gt;</code>, {{HTMLElement("thead")}}, oder {{HTMLElement("tfoot")}}-Element folgt, dessen End-Tag ausgelassen wurde. (Es kann nicht weggelassen werden, wenn das Element leer ist.)
        Ein End-Tag des <code>&lt;tbody&gt;</code>-Elements kann weggelassen werden, wenn das <code>&lt;tbody&gt;</code>-Element unmittelbar von einem <code>&lt;tbody&gt;</code> oder {{HTMLElement("tfoot")}}-Element gefolgt wird oder wenn kein weiterer Inhalt im übergeordneten Element vorhanden ist.
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
          ><a href="/de/docs/Web/Accessibility/ARIA/Roles/rowgroup_role"
            >rowgroup</a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA-Rollen</th>
      <td>Jede</td>
    </tr>
    <tr>
      <th scope="row">DOM-Schnittstelle</th>
      <td>{{domxref("HTMLTableSectionElement")}}</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- [Lernen: HTML-Tabellen](/de/docs/Learn/HTML/Tables)
- {{HTMLElement("caption")}}, {{HTMLElement("col")}}, {{HTMLElement("colgroup")}}, {{HTMLElement("table")}}, {{HTMLElement("td")}}, {{HTMLElement("tfoot")}}, {{HTMLElement("th")}}, {{HTMLElement("thead")}}, {{HTMLElement("tr")}}: Andere tabellenbezogene Elemente
- {{cssxref("background-color")}}: CSS-Eigenschaft zum Setzen der Hintergrundfarbe jeder Tabellenzelle
- {{cssxref("border")}}: CSS-Eigenschaft zur Kontrolle der Rahmen von Tabellenzellen
- {{cssxref("text-align")}}: CSS-Eigenschaft zur horizontalen Ausrichtung von Inhaltszellen
- {{cssxref("vertical-align")}}: CSS-Eigenschaft zur vertikalen Ausrichtung von Inhaltszellen
