---
title: "<tbody>: Das Tabellenkörperelement"
slug: Web/HTML/Element/tbody
l10n:
  sourceCommit: 5bd9fe2b25c6eee2a14d0406ce7116998fa48c13
---

{{HTMLSidebar}}

Das **`<tbody>`**-Element [HTML](/de/docs/Web/HTML) kapselt eine Reihe von Tabellreihen ({{HTMLElement("tr")}}-Elemente) ein, die darauf hinweisen, dass sie den Tabellen(mittel)korpus der Daten bilden.

{{EmbedInteractiveExample("pages/tabbed/tbody.html","tabbed-taller")}}

## Attribute

Dieses Element umfasst die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

### Veraltete Attribute

Die folgenden Attribute sind veraltet und sollten nicht mehr verwendet werden. Sie sind hier dokumentiert, um bestehende Codes zu aktualisieren und aus historischem Interesse.

- `align` {{deprecated_inline}}

  - : Spezifiziert die horizontale Ausrichtung jeder Tabellenzelle. Die möglichen [enumerierten](/de/docs/Glossary/enumerated) Werte sind `left`, `center`, `right`, `justify` und `char`. Wenn `char` verwendet wird, wird der Textinhalt auf dem im [`char`](#char)-Attribut definierten Zeichen und dem durch das [`charoff`](#charoff)-Attribut definierten Versatz ausgerichtet. Verwenden Sie stattdessen die {{cssxref("text-align")}} CSS-Eigenschaft, da dieses Attribut veraltet ist.

- `bgcolor` {{deprecated_inline}}

  - : Definiert die Hintergrundfarbe jeder Tabellenzelle. Der Wert ist eine HTML-Farbe; entweder ein [6-stelliger hexadezimaler RGB-Code](/de/docs/Web/CSS/hex-color), vorangestellt mit `#`, oder ein [Farbwort](/de/docs/Web/CSS/named-color). Andere CSS {{cssxref("color_value", "&lt;color&gt")}} Werte werden nicht unterstützt. Verwenden Sie stattdessen die {{cssxref("background-color")}} CSS-Eigenschaft, da dieses Attribut veraltet ist.

- `char` {{deprecated_inline}}

  - : Gibt die Ausrichtung des Inhalts auf ein Zeichen jeder Tabellenzelle an. Typische Werte hierfür schließen einen Punkt (`.`) ein, wenn versucht wird, Zahlen oder Geldbeträge auszurichten. Wenn [`align`](#align) nicht auf `char` gesetzt ist, wird dieses Attribut ignoriert.

- `charoff` {{deprecated_inline}}

  - : Gibt die Anzahl der Zeichen an, um die der Tabellenzelleninhalt vom durch das [`char`](#char)-Attribut angegebenen Ausrichtungszeichen versetzt wird.

- `valign` {{deprecated_inline}}

  - : Gibt die vertikale Ausrichtung jeder Tabellenzelle an. Die möglichen [enumerierten](/de/docs/Glossary/enumerated) Werte sind `baseline`, `bottom`, `middle` und `top`. Verwenden Sie stattdessen die {{cssxref("vertical-align")}} CSS-Eigenschaft, da dieses Attribut veraltet ist.

## Verwendungshinweise

- Das `<tbody>` wird nach allen {{HTMLElement("caption")}}, {{HTMLElement("colgroup")}} und {{HTMLElement("thead")}} Elementen platziert.
- Wenn {{HTMLElement("tr")}}-Elemente als direkte Kinder des {{HTMLElement("table")}}-Elements angegeben werden (siehe "Tag-Auslassung" in der [technischen Zusammenfassung](#technische_zusammenfassung) für eine Beschreibung, wann dies gültig ist), wird die vom Browser generierte Markierung ein `<tbody>`-Element enthalten, das sie einkapselt. Infolgedessen wählen CSS-Selektoren wie `table > tr` diese Elemente nicht aus. Siehe auch das Beispiel [Keinen Körper angeben](#keinen_körper_angeben).
- Es ist gestattet, mehr als ein `<tbody>` pro Tabelle zu verwenden, solange diese alle aufeinanderfolgend sind. Dies ermöglicht es, die Reihen ({{HTMLElement("tr")}}-Elemente) in großen Tabellen in Abschnitte zu unterteilen, die bei Bedarf separat formatiert werden können. Wenn sie nicht konsequent als aufeinanderfolgende Elemente markiert werden, korrigieren Browser diesen Autorenfehler und stellen sicher, dass alle {{HTMLElement("thead")}}- und {{HTMLElement("tfoot")}}-Elemente als erste bzw. letzte Elemente der Tabelle gerendert werden.
- Zusammen mit den zugehörigen {{HTMLElement("thead")}}- und {{HTMLElement("tfoot")}}-Elementen bietet das `<tbody>`-Element nützliche [semantische](/de/docs/Glossary/semantics) Informationen und kann sowohl für die Bildschirm- als auch für die Druckdarstellung verwendet werden. Die Angabe solcher Tischinhaltsgruppen liefert auch wertvolle kontextuelle Informationen für unterstützende Technologien, einschließlich Screenreadern und Suchmaschinen.
- Beim Drucken eines Dokuments geben im Fall einer mehrseitigen Tabelle die {{HTMLElement("thead")}}- und {{htmlelement("tfoot")}}-Elemente gewöhnlich Informationen an, die auf jeder Seite gleich bleiben – oder zumindest sehr ähnlich sind – während sich der Inhalt des `<tbody>`-Elements von Seite zu Seite allgemein unterscheidet.
- Wenn eine Tabelle in einem Bildschirmkontext präsentiert wird (wie einem Fenster), das nicht groß genug ist, um die gesamte Tabelle anzuzeigen, kann der [Benutzeragent](/de/docs/Glossary/user_agent) dem Benutzer erlauben, den Inhalt der {{HTMLElement("thead")}}, `<tbody>`, {{htmlelement("tfoot")}} und {{HTMLElement("caption")}}-Blöcke unabhängig voneinander für dasselbe übergeordnete {{htmlelement("table")}} zu scrollen.

## Beispiele

Siehe {{HTMLElement("table")}} für ein vollständiges Tabellenbeispiel, das gängige Standards und bewährte Verfahren einführt.

### Keinen Körper angeben

Dieses Beispiel zeigt, dass der Browser {{HTMLElement("tr")}}-Elemente automatisch innerhalb eines `<tbody>`-Elements einkapselt, wenn die Reihen nicht innerhalb eines Tabellengruppierungselements (`<tbody>`, `<tfoot>` oder `<thead>`) verschachtelt sind und, wie in diesem Beispiel, die direkten Kinder des {{HTMLElement("table")}}-Elements sind.

#### HTML

Hier wird eine sehr einfache Tabelle mit einigen Tabellreihen ({{HTMLElement("tr")}}-Elemente), die Daten ({{HTMLElement("td")}}-Elemente) zu Schülern enthalten, erstellt.

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

Beachten Sie das CSS im Beispiel, bei dem eine {{cssxref("background-color")}} für das `<tbody>`-Element angegeben ist und das `tbody` als Teil eines zusätzlichen [CSS Selektors](/de/docs/Glossary/css_selector) verwendet wird. Alternativ können [Entwicklerwerkzeuge im Browser](/de/docs/Glossary/developer_tools) verwendet werden, um die Anwesenheit des `<tbody>`-Elements im [DOM](/de/docs/Glossary/dom) zu überprüfen.

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

Dieses Beispiel erweitert und verbessert die Basistabelle aus dem [vorherigen Beispiel](#keinen_körper_angeben).

#### HTML

Wir führen einen Tabellenkopf ({{HTMLElement("thead")}}-Element) ein und verwenden explizit ein `<tbody>`-Element, um die Tabelle in [semantische](/de/docs/Glossary/semantics) Abschnitte zu strukturieren. Der Tabellenkopf enthält die Spaltenüberschriften ({{HTMLElement("th")}}-Elemente). Das `<tbody>`-Element stellt den Korpus der Tabelle dar, der eine Reihe von Reihen ({{HTMLElement("tr")}}-Elemente) mit den Hauptdaten der Tabelle enthält, nämlich die Daten jedes Schülers.

Die Verwendung solcher Tabelleninhaltsgruppen und [semantischer](/de/docs/Glossary/semantics) Markup ist nicht nur nützlich für die visuelle Darstellung (via CSS-Styling) und kontextuelle Informationen für unterstützende Technologien; darüber hinaus hilft die explizite Verwendung des `<tbody>`-Elements dem Browser, die beabsichtigte Tabellenstruktur zu erstellen und unerwünschte Ergebnisse zu vermeiden.

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

Das CSS ist fast unverändert vom [vorherigen Beispiel](#keinen_körper_angeben), außer dass ein grundlegendes Styling hinzugefügt wurde, um den Tabellenkopf hervorzuheben, sodass die Überschriften der Spalten sich von den Daten im Tabellenkörper abheben. Wie im [obigen Beispiel](#keinen_körper_angeben) wird der `tbody` [Typ-Selektor](/de/docs/Web/CSS/Type_selectors) verwendet, um die Tabellenzellen zu stylen.

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

Dieses Beispiel erweitert und verbessert die Tabelle aus dem [obigen Beispiel](#grundlegende_körperstruktur) noch weiter durch die Einführung mehrerer Körperabschnitte.

Die Verwendung mehrerer `<tbody>`-Elemente erlaubt es, Reihengruppierungen innerhalb einer Tabelle zu erstellen. Jeder Tabellenkörper kann potenziell seine eigene Kopfzeile oder eigene Kopfzeilen haben; es darf jedoch _nur ein {{HTMLElement("thead")}}-Element pro Tabelle geben_! Aufgrund dessen können {{HTMLElement("tr")}}-Elemente mit {{HTMLElement("th")}}-Elementen verwendet werden, um Überschriften innerhalb jedes `<tbody>` zu erstellen.

#### HTML

Ausgehend von der Tabelle im [vorherigen Grundbeispiel](#grundlegende_körperstruktur) werden weitere Schüler hinzugefügt und, anstatt das Hauptfach jedes Schülers in jeder Reihe aufzuführen, werden die Schüler nach Hauptfach gruppiert. Beachten Sie, dass jedes Hauptfach innerhalb seines eigenen `<tbody>`-Blocks eingeschlossen ist, mit der ersten Reihe ({{HTMLElement("tr")}}-Element), die als Kopfzeile des Blocks dient und den Titel des Hauptfachs innerhalb eines {{HTMLElement("th")}}-Elements anzeigt, das das [`colspan`](/de/docs/Web/HTML/Element/th#colspan)-Attribut verwendet, um die Überschrift über alle drei Spalten der Tabelle zu spannen. Jede verbleibende Reihe innerhalb jedes Hauptfachs `<tbody>` stellt einen Studenten dar.

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

Der Großteil des CSS bleibt unverändert. Es wird jedoch ein etwas subtilerer Stil für Headerzellen hinzugefügt, die direkt innerhalb eines `<tbody>` enthalten sind (im Gegensatz zu denen, die im {{HTMLElement("thead")}} zu finden sind). Dies wird für die Überschriften verwendet, die das entsprechende Hauptfach jedes Tabellenabschnitts anzeigen.

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
      <th scope="row">Zulässiger Inhalt</th>
      <td>Null oder mehr {{ HTMLElement("tr") }}-Elemente.</td>
    </tr>
    <tr>
      <th scope="row">Auslassung des Tags</th>
      <td>
        Ein <code>&lt;tbody&gt;</code>-Element kann weggelassen werden, wenn das erste Element innerhalb des <code>&lt;tbody&gt;</code>-Elements ein {{HTMLElement("tr")}}-Element ist und wenn das Element nicht unmittelbar einem <code>&lt;tbody&gt;</code>-, {{HTMLElement("thead")}}- oder {{HTMLElement("tfoot")}}-Element folgt, bei dem das End-Tag weggelassen wurde. (Es kann nicht weggelassen werden, wenn das Element leer ist.)
        Das End-Tag eines <code>&lt;tbody&gt;</code>-Elements kann weggelassen werden, wenn das <code>&lt;tbody&gt;</code>-Element unmittelbar von einem <code>&lt;tbody&gt;</code>- oder {{HTMLElement("tfoot")}}-Element gefolgt wird oder wenn keine weiteren Inhalte im übergeordneten Element vorhanden sind.
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässige Eltern</th>
      <td>
        Innerhalb des erforderlichen übergeordneten {{ HTMLElement("table") }}-Elements
        kann das <code>&lt;tbody&gt;</code>-Element nach jedem
        {{ HTMLElement("caption") }}, {{HTMLElement("colgroup") }},
        und {{ HTMLElement("thead") }}-Element hinzugefügt werden.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
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

- [Lernen: HTML Tabellen](/de/docs/Learn/HTML/Tables)
- {{HTMLElement("caption")}}, {{HTMLElement("col")}}, {{HTMLElement("colgroup")}}, {{HTMLElement("table")}}, {{HTMLElement("td")}}, {{HTMLElement("tfoot")}}, {{HTMLElement("th")}}, {{HTMLElement("thead")}}, {{HTMLElement("tr")}}: Andere tabellenbezogene Elemente
- {{cssxref("background-color")}}: CSS-Eigenschaft zum Setzen der Hintergrundfarbe jeder Tabellenzelle
- {{cssxref("border")}}: CSS-Eigenschaft zur Steuerung der Rahmen der Tabellenzellen
- {{cssxref("text-align")}}: CSS-Eigenschaft zur horizontalen Ausrichtung des Inhalts jeder Tabellenzelle
- {{cssxref("vertical-align")}}: CSS-Eigenschaft zur vertikalen Ausrichtung des Inhalts jeder Tabellenzelle
