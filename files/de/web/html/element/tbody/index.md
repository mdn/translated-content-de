---
title: "<tbody>: Das Tabelle-Körper-Element"
slug: Web/HTML/Element/tbody
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{HTMLSidebar}}

Das **`<tbody>`**-[HTML](/de/docs/Web/HTML) Element kapselt eine Reihe von Tabellenzeilen ({{HTMLElement("tr")}} Elemente) und zeigt an, dass sie den Hauptdatenkörper einer Tabelle bilden.

{{EmbedInteractiveExample("pages/tabbed/tbody.html","tabbed-taller")}}

## Attribute

Dieses Element enthält die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

### Veraltete Attribute

Die folgenden Attribute sind veraltet und sollten nicht verwendet werden. Sie sind hier aus Gründen der Aktualisierung bestehenden Codes und aus historischem Interesse dokumentiert.

- `align` {{deprecated_inline}}

  - : Gibt die horizontale Ausrichtung jeder Tabellenzelle an. Die möglichen {{Glossary("enumerated", "aufgezählten")}} Werte sind `left`, `center`, `right`, `justify` und `char`. Wenn unterstützt, richtet der `char`-Wert den textuellen Inhalt am durch das [`char`](#char)-Attribut definierten Zeichen und dem durch das [`charoff`](#charoff)-Attribut definierten Versatz aus. Nutzen Sie stattdessen die {{cssxref("text-align")}} CSS-Eigenschaft, da dieses Attribut veraltet ist.

- `bgcolor` {{deprecated_inline}}

  - : Definiert die Hintergrundfarbe jeder Tabellenzelle. Der Wert ist eine HTML-Farbe; entweder ein [6-stelliger hexadezimaler RGB-Code](/de/docs/Web/CSS/hex-color), vorangestellt mit einem `#`, oder ein [Farbenschlüsselwort](/de/docs/Web/CSS/named-color). Andere CSS-{{cssxref("color_value", "&lt;color&gt")}}-Werte werden nicht unterstützt. Nutzen Sie stattdessen die {{cssxref("background-color")}} CSS-Eigenschaft, da dieses Attribut veraltet ist.

- `char` {{deprecated_inline}}

  - : Gibt die Ausrichtung des Inhalts an einem Zeichen jeder Tabellenzelle an. Typische Werte hierfür beinhalten einen Punkt (`.`), um Zahlen oder Währungswerte auszurichten. Wenn [`align`](#align) nicht auf `char` gesetzt ist, wird dieses Attribut ignoriert.

- `charoff` {{deprecated_inline}}

  - : Gibt die Anzahl der Zeichen an, um die der Zelleninhalt vom durch das [`char`](#char)-Attribut spezifizierten Ausrichtungszeichen versetzt wird.

- `valign` {{deprecated_inline}}

  - : Gibt die vertikale Ausrichtung jeder Tabellenzelle an. Die möglichen {{Glossary("enumerated", "aufgezählten")}} Werte sind `baseline`, `bottom`, `middle` und `top`. Nutzen Sie stattdessen die {{cssxref("vertical-align")}} CSS-Eigenschaft, da dieses Attribut veraltet ist.

## Anmerkungen zur Verwendung

- Das `<tbody>` wird nach jedem {{HTMLElement("caption")}}, {{HTMLElement("colgroup")}}, und {{HTMLElement("thead")}}-Element platziert.
- Wenn {{HTMLElement("tr")}}-Elemente als direkte Kinder des {{HTMLElement("table")}} angegeben sind (siehe "Tag-Auslassung" in der [technischen Zusammenfassung](#technische_zusammenfassung) für eine Beschreibung, wann dies gültig ist), dann wird das vom Browser generierte Markup ein `<tbody>`-Element enthalten, das sie umschließt. Als Ergebnis werden CSS-Selektoren wie `table > tr` diese Elemente nicht auswählen. Siehe auch das Beispiel [Keinen Körper angeben](#keinen_körper_angeben).
- Es ist erlaubt, mehr als ein `<tbody>` pro Tabelle zu verwenden, solange sie alle aufeinanderfolgend sind. Dies ermöglicht es, die Zeilen ({{HTMLElement("tr")}} Elemente) in großen Tabellen in Abschnitte zu unterteilen, die jeweils separat formatiert werden können, wenn gewünscht. Wenn die Markierung nicht als aufeinanderfolgende Elemente erfolgt, korrigieren Browser diesen Autorfehler und stellen sicher, dass jedes {{HTMLElement("thead")}}- und {{HTMLElement("tfoot")}}-Element als erstes bzw. letztes Element der Tabelle gerendert wird.
- Zusammen mit seinen verwandten {{HTMLElement("thead")}}- und {{HTMLElement("tfoot")}}-Elementen bietet das `<tbody>`-Element nützliche {{Glossary("semantics", "semantische")}} Informationen und kann bei der Ausgabe für Bildschirm oder Druck verwendet werden. Das Spezifizieren solcher Tabellengruppen liefert auch wertvolle Kontextinformationen für Unterstützungstechnologien, einschließlich Bildschirmleser und Suchmaschinen.
- Beim Drucken eines Dokuments, im Fall einer mehrseitigen Tabelle, spezifizieren die {{HTMLElement("thead")}}- und {{htmlelement("tfoot")}}-Elemente normalerweise Informationen, die auf jeder Seite gleich bleiben oder zumindest sehr ähnlich sind, während der Inhalt des `<tbody>`-Elements von Seite zu Seite unterschiedlich sein wird.
- Wenn eine Tabelle in einem Bildschirmkontext (wie ein Fenster) präsentiert wird, das nicht groß genug ist, um die gesamte Tabelle anzuzeigen, kann der {{Glossary("user_agent", "User Agent")}} den Benutzer die Inhalte der {{HTMLElement("thead")}}, `<tbody>`, {{htmlelement("tfoot")}}, und {{HTMLElement("caption")}}-Blöcke separat scrollen lassen.

## Beispiele

Siehe {{HTMLElement("table")}} für ein vollständiges Tabellenbeispiel, das gängige Standards und bewährte Verfahren einführt.

### Keinen Körper angeben

Dieses Beispiel zeigt, dass der Browser {{HTMLElement("tr")}}-Elemente automatisch innerhalb eines `<tbody>`-Elements kapselt, wenn die Zeilen nicht innerhalb eines Tabellen-Gruppenelements (`<tbody>`, `<tfoot>` oder `<thead>`) verschachtelt sind und die direkten Kinder des {{HTMLElement("table")}}-Elements sind, wie in diesem Beispiel.

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

Beachten Sie das CSS im Beispiel, wo eine {{cssxref("background-color")}} für das `<tbody>`-Element festgelegt ist und das `tbody` als Teil eines zusätzlichen {{Glossary("css_selector", "CSS-Selektors")}} verwendet wird. Alternativ können {{Glossary("developer_tools", "Entwicklerwerkzeuge für Browser")}} verwendet werden, um die Anwesenheit des `<tbody>`-Elements im {{Glossary("dom", "DOM")}} zu überprüfen.

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

Dieses Beispiel erweitert und verbessert die grundlegende Tabelle aus dem [vorherigen Beispiel](#keinen_körper_angeben).

#### HTML

Wir führen einen Tabellenkopf ({{HTMLElement("thead")}} Element) ein und verwenden explizit ein `<tbody>`-Element, um die Tabelle in {{Glossary("semantics", "semantische")}} Abschnitte zu strukturieren. Der Tabellenkopf enthält die Spaltenüberschriften ({{HTMLElement("th")}} Elemente). Das `<tbody>`-Element stellt den Tabellenkörper dar, der eine Anzahl von Zeilen ({{HTMLElement("tr")}} Elemente) mit den Hauptdaten der Tabelle enthält, die die Daten jedes Schülers sind.

Die Verwendung solcher Tabellengruppen und {{Glossary("semantics", "semantischer")}} Markup ist nicht nur nützlich für die visuelle Darstellung (über CSS-Styling) und Kontextinformationen für unterstützende Technologien; vielmehr hilft die explizite Verwendung des `<tbody>`-Elements dem Browser, die vorgesehene Tabellenstruktur zu erstellen und unerwünschte Ergebnisse zu vermeiden.

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

Das CSS ist nahezu unverändert im Vergleich zum [vorherigen Beispiel](#keinen_körper_angeben), mit Ausnahme von einigen grundlegenden Stilen, um den Tabellenkopf hervorzuheben, sodass die Überschriften der Spalten sich von den Daten im Tabellenkörper abheben. Wie im [obigen Beispiel](#keinen_körper_angeben) wird der `tbody` [Typ-Selektor](/de/docs/Web/CSS/Type_selectors) verwendet, um die Zellen des Körpers zu stylen.

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

Dieses Beispiel erweitert und verbessert die Tabelle aus dem [obigen Beispiel](#grundlegende_körperstruktur) noch mehr, indem es mehrere Körperabschnitte einführt.

Die Verwendung mehrerer `<tbody>`-Elemente ermöglicht die Erstellung von Zeilengruppen innerhalb einer Tabelle. Jeder Tabellenkörper kann potenziell seine eigene Kopfzeile oder -zeilen haben; _es darf jedoch nur ein {{HTMLElement("thead")}}-Element pro Tabelle geben_! Aus diesem Grund können {{HTMLElement("tr")}} mit {{HTMLElement("th")}}-Elementen verwendet werden, um Überschriften innerhalb jedes `<tbody>` zu erstellen.

#### HTML

Aufbauend auf der Tabelle im [vorherigen einfachen Beispiel](#grundlegende_körperstruktur) werden mehr Studenten hinzugefügt, und anstatt das Hauptfach jedes Studenten auf jeder Zeile aufzulisten, werden die Studenten nach Hauptfach gruppiert. Beachten Sie, dass jedes Hauptfach in einem eigenen `<tbody>`-Block eingeschlossen ist, wobei die erste Zeile ({{HTMLElement("tr")}}-Element) als Kopf des Blocks dient und den Hauptfachtitel in einem {{HTMLElement("th")}}-Element anzeigt, das das [`colspan`](/de/docs/Web/HTML/Element/th#colspan)-Attribut verwendet, um die Kopfzeile über alle drei Spalten der Tabelle zu spannen. Jede verbleibende Zeile innerhalb jedes Hauptfach-`<tbody>` repräsentiert einen Studenten.

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

Der größte Teil des CSS bleibt unverändert. Allerdings wird ein etwas subtilerer Stil für Kopfzellen hinzugefügt, die direkt in einem `<tbody>` enthalten sind (im Gegensatz zu denen, die im {{HTMLElement("thead")}} enthalten sind). Dies wird für die Überschriften verwendet, die das entsprechende Hauptfach jedes Tabellenabschnitts angeben.

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
      <td>Null oder mehr {{ HTMLElement("tr") }} Elemente.</td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>
        Ein <code>&lt;tbody&gt;</code>-Element kann das Starttag weglassen, wenn das erste Element innerhalb des <code>&lt;tbody&gt;</code> ein {{HTMLElement("tr")}}-Element ist und das Element nicht unmittelbar von einem <code>&lt;tbody&gt;</code>, {{HTMLElement("thead")}}, oder {{HTMLElement("tfoot")}}-Element, dessen Endtag weggelassen wurde, gefolgt wird. (Es kann nicht weggelassen werden, wenn das Element leer ist.)
        Ein <code>&lt;tbody&gt;</code>-Element kann das Endtag weglassen, wenn das <code>&lt;tbody&gt;</code>Element unmittelbar von einem <code>&lt;tbody&gt;</code>- oder {{HTMLElement("tfoot")}}-Element gefolgt wird, oder wenn es keinen weiteren Inhalt im Elternelement gibt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Innerhalb des erforderlichen Eltern-{{ HTMLElement("table") }}-Elements kann
        das <code>&lt;tbody&gt;</code>-Element nach jedem
        {{ HTMLElement("caption") }}, {{HTMLElement("colgroup") }},
        und {{ HTMLElement("thead") }}-Element eingefügt werden.
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

- [Lernen: HTML-Tabellen-Grundlagen](/de/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics)
- {{HTMLElement("caption")}}, {{HTMLElement("col")}}, {{HTMLElement("colgroup")}}, {{HTMLElement("table")}}, {{HTMLElement("td")}}, {{HTMLElement("tfoot")}}, {{HTMLElement("th")}}, {{HTMLElement("thead")}}, {{HTMLElement("tr")}}: Andere tabellenbezogene Elemente
- {{cssxref("background-color")}}: CSS-Eigenschaft, um die Hintergrundfarbe jeder Tabellenzelle festzulegen
- {{cssxref("border")}}: CSS-Eigenschaft, um die Ränder von Tabellenzellen zu steuern
- {{cssxref("text-align")}}: CSS-Eigenschaft, um den Inhalt jeder Tabellenzelle horizontal auszurichten
- {{cssxref("vertical-align")}}: CSS-Eigenschaft, um den Inhalt jeder Tabellenzelle vertikal auszurichten
