---
title: "<thead>: Das Table Head Element"
slug: Web/HTML/Element/thead
l10n:
  sourceCommit: 5bd9fe2b25c6eee2a14d0406ce7116998fa48c13
---

{{HTMLSidebar}}

Das **`<thead>`** [HTML](/de/docs/Web/HTML) Element umfasst eine Gruppe von Tabellenzeilen ({{HTMLElement("tr")}} Elementen), die anzeigen, dass sie den Kopf einer Tabelle bilden, der Informationen über die Spalten der Tabelle enthält. Dies erfolgt gewöhnlich in Form von Spaltenüberschriften ({{HTMLElement("th")}} Elemente).

{{EmbedInteractiveExample("pages/tabbed/thead.html","tabbed-taller")}}

## Attribute

Dieses Element umfasst die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

### Veraltete Attribute

Die folgenden Attribute sind veraltet und sollten nicht verwendet werden. Sie sind hier zu Referenzzwecken dokumentiert, um bestehenden Code zu aktualisieren und aus historischem Interesse.

- `align` {{deprecated_inline}}

  - : Gibt die horizontale Ausrichtung jeder Kopfzelle an. Die möglichen {{Glossary("enumerated", "aufzählbaren")}} Werte sind `left`, `center`, `right`, `justify`, und `char`. Wenn unterstützt, richtet der `char` Wert den Textinhalt auf dem durch das Attribut [`char`](#char) definierten Zeichen und dem durch das Attribut [`charoff`](#charoff) definierten Offset aus. Verwenden Sie stattdessen die {{cssxref("text-align")}} CSS-Eigenschaft, da dieses Attribut veraltet ist.

- `bgcolor` {{deprecated_inline}}

  - : Definiert die Hintergrundfarbe jeder Kopfzelle. Der Wert ist eine HTML-Farbe; entweder ein [6-stelliger Hexadezimal-RGB-Code](/de/docs/Web/CSS/hex-color), mit einem `#`-Präfix, oder ein [Farb-Schlüsselwort](/de/docs/Web/CSS/named-color). Andere CSS {{cssxref("color_value", "&lt;color&gt")}} Werte werden nicht unterstützt. Verwenden Sie stattdessen die {{cssxref("background-color")}} CSS-Eigenschaft, da dieses Attribut veraltet ist.

- `char` {{deprecated_inline}}

  - : Hat keine Funktion. Es war ursprünglich vorgesehen, die Ausrichtung des Inhalts auf ein Zeichen jeder Kopfzelle anzugeben. Wenn [`align`](#align) nicht auf `char` gesetzt ist, wird dieses Attribut ignoriert.

- `charoff` {{deprecated_inline}}

  - : Hat keine Funktion. Es war ursprünglich vorgesehen, die Anzahl der Zeichen anzugeben, um die der Kopfzellinhalt von dem durch das Attribut [`char`](#char) festgelegten Ausrichtungssymbol versetzt wird.

- `valign` {{deprecated_inline}}

  - : Gibt die vertikale Ausrichtung jeder Kopfzelle an. Die möglichen {{Glossary("enumerated", "aufzählbaren")}} Werte sind `baseline`, `bottom`, `middle`, und `top`. Verwenden Sie stattdessen die {{cssxref("vertical-align")}} CSS-Eigenschaft, da dieses Attribut veraltet ist.

## Verwendungshinweise

- Das `<thead>` wird nach allen {{HTMLElement("caption")}} und {{HTMLElement("colgroup")}} Elementen platziert, aber vor allen {{HTMLElement("tbody")}}, {{HTMLElement("tfoot")}}, und {{HTMLElement("tr")}} Elementen.
- Zusammen mit den verwandten {{HTMLElement("tbody")}} und {{HTMLElement("tfoot")}} Elementen bietet das `<thead>`-Element nützliche {{Glossary("semantics", "semantische")}} Informationen und kann sowohl für die Bildschirm- als auch für die Druckwiedergabe verwendet werden. Die Spezifizierung solcher Tabelleninhaltsgruppen liefert auch wertvolle kontextuelle Informationen für unterstützende Technologien, einschließlich Screenreader und Suchmaschinen.
- Beim Drucken eines Dokuments gibt der Tabellenkopf normalerweise Informationen an, die auf jeder Seite gleich bleiben, im Falle einer mehrseitigen Tabelle.

## Beispiele

Sehen Sie {{HTMLElement("table")}} für ein vollständiges Tabellbeispiel, das allgemeine Standards und beste Praktiken einführt.

### Grundlegende Struktur des Kopfbereichs

Dieses Beispiel zeigt eine Tabelle, die in einen Kopfbereich mit Spaltenüberschriften und einen Körperbereich mit den Hauptdaten der Tabelle unterteilt ist.

#### HTML

Die `<thead>` und {{HTMLElement("tbody")}}-Elemente werden verwendet, um die Tabellenzeilen in {{Glossary("semantics", "semantische")}} Abschnitte zu unterteilen. Das `<thead>`-Element repräsentiert den Kopfbereich der Tabelle, der eine Zeile ({{HTMLElement("tr")}}) von Spaltenüberschriftenzellen ({{HTMLElement("th")}}) enthält.

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

Einige grundlegende CSS wird verwendet, um den Tabellenkopf zu gestalten und hervorzuheben, damit die Überschriften der Spalten sich von den Daten im Tabellenkörper abheben.

```css
thead {
  border-bottom: 2px solid rgb(160 160 160);
  text-align: center;
  background-color: #2c5e77;
  color: #fff;
}

tbody {
  background-color: #e4f0f5;
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

tbody > tr > td:last-of-type {
  text-align: center;
}
```

#### Ergebnis

{{EmbedLiveSample("Basic_head_structure", 650, 140)}}

### Mehrere Kopfzeilenzeilen

Dieses Beispiel zeigt einen Kopfbereich der Tabelle mit zwei Zeilen.

#### HTML

In diesem Beispiel erweitern wir das Markup der Tabelle aus dem [Grundbeispiel](#grundlegende_struktur_des_kopfbereichs) durch das Einfügen von zwei Tabellenzeilen ({{HTMLElement("tr")}}) innerhalb des `<thead>`-Elements, wodurch ein mehrzeiliger Tabellenkopf entsteht. Wir haben eine zusätzliche Spalte hinzugefügt, die die Vornamen und Nachnamen der Studierenden aufteilt.

```html
<table>
  <thead>
    <tr>
      <th rowspan="2">Student ID</th>
      <th colspan="2">Student</th>
      <th rowspan="2">Major</th>
      <th rowspan="2">Credits</th>
    </tr>
    <tr>
      <th>First name</th>
      <th>Last name</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>3741255</td>
      <td>Martha</td>
      <td>Jones</td>
      <td>Computer Science</td>
      <td>240</td>
    </tr>
    <tr>
      <td>3971244</td>
      <td>Victor</td>
      <td>Nim</td>
      <td>Russian Literature</td>
      <td>220</td>
    </tr>
    <tr>
      <td>4100332</td>
      <td>Alexandra</td>
      <td>Petrov</td>
      <td>Astrophysics</td>
      <td>260</td>
    </tr>
  </tbody>
</table>
```

#### Zellenüberspannung

Um die Kopfzellen mit den richtigen Spalten und Zeilen zu verknüpfen und auszurichten, werden die Attribute [`colspan`](/de/docs/Web/HTML/Element/th#colspan) und [`rowspan`](/de/docs/Web/HTML/Element/th#rowspan) auf den {{HTMLElement("th")}}-Elementen verwendet. Die in diesen Attributen festgelegten Werte spezifizieren, wie viele Zellen jede Kopfzelle ({{HTMLElement("th")}}) überspannt. Aufgrund der Art und Weise, wie diese Attribute gesetzt sind, sind die beiden zweiten Zeilenüberschriftenzellen mit den Spalten, die sie leiten, ausgerichtet. Diese überspannen jeweils eine Zeile und eine Spalte, da die Standardwerte für die Attribute [`colspan`](/de/docs/Web/HTML/Element/th#colspan) und [`rowspan`](/de/docs/Web/HTML/Element/th#rowspan) beide `1` sind.

Das Spalten- und Zeilenüberspannen, das durch dieses Beispiel demonstriert wird, wird in der folgenden Abbildung veranschaulicht:

![Illustration, die das Spalten- und Zeilenüberspannen von Tabellenzellen zeigt: Zellen 1, 3 und 4 überspannen jeweils eine Spalte und zwei Zeilen; Zelle 2 überspannt zwei Spalten und eine Zeile; Zellen 5 und 6 überspannen jeweils eine einzelne Zeile und Spalte, passen in die verfügbaren Zellen, die die zweite und dritte Spalte in der zweiten Zeile sind](column-row-span.png)

#### CSS

Das CSS bleibt unverändert vom [vorherigen Beispiel](#grundlegende_struktur_des_kopfbereichs).

```css hidden
thead {
  border-bottom: 2px solid rgb(160 160 160);
  background-color: #2c5e77;
  color: #fff;
}

table {
  border-collapse: collapse;
  border: 2px solid rgb(140 140 140);
  font-family: sans-serif;
  font-size: 0.8rem;
  letter-spacing: 1px;
}

tbody {
  background-color: #e4f0f5;
}

th,
td {
  border: 1px solid rgb(160 160 160);
  padding: 8px 10px;
}

tbody > tr > td:last-of-type {
  text-align: center;
}
```

#### Ergebnis

{{EmbedLiveSample("Multiple_head_rows", 650, 180)}}

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
      <td>Null oder mehr {{HTMLElement("tr")}} Elemente.</td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>
        Das Start-Tag ist obligatorisch. Das End-Tag kann weggelassen werden, wenn das
        <code>&lt;thead&gt;</code> Element sofort von einem
        {{HTMLElement("tbody")}} oder {{HTMLElement("tfoot")}}
        Element gefolgt wird.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Ein {{HTMLElement("table")}} Element. Das
        <code>&lt;thead&gt;</code> muss nach allen
        {{HTMLElement("caption")}} und
        {{HTMLElement("colgroup")}} Elementen erscheinen, auch implizit definiert,
        aber vor allen {{HTMLElement("tbody")}},
        {{HTMLElement("tfoot")}}, und {{HTMLElement("tr")}}
        Elementen.
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

- [Lernen: HTML-Tables](/de/docs/Learn/HTML/Tables)
- {{HTMLElement("caption")}}, {{HTMLElement("col")}}, {{HTMLElement("colgroup")}}, {{HTMLElement("table")}}, {{HTMLElement("tbody")}}, {{HTMLElement("td")}}, {{HTMLElement("tfoot")}}, {{HTMLElement("th")}}, {{HTMLElement("tr")}}: Andere tabellenbezogene Elemente
- {{cssxref("background-color")}}: CSS-Eigenschaft zum Setzen der Hintergrundfarbe für jede Kopfzelle
- {{cssxref("border")}}: CSS-Eigenschaft zur Steuerung der Ränder von Kopfzellen
- {{cssxref("text-align")}}: CSS-Eigenschaft zur horizontalen Ausrichtung des Inhalts jeder Kopfzelle
- {{cssxref("vertical-align")}}: CSS-Eigenschaft zur vertikalen Ausrichtung des Inhalts jeder Kopfzelle
