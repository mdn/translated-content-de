---
title: "<thead>: Das Table Head-Element"
slug: Web/HTML/Element/thead
l10n:
  sourceCommit: 5bd9fe2b25c6eee2a14d0406ce7116998fa48c13
---

{{HTMLSidebar}}

Das **`<thead>`** [HTML](/de/docs/Web/HTML)-Element kapselt eine Gruppe von Tabellenzeilen ({{HTMLElement("tr")}}-Elemente) und zeigt an, dass sie den Kopf einer Tabelle bilden und Informationen über die Spalten der Tabelle enthalten. Dies geschieht üblicherweise in Form von Spaltenüberschriften ({{HTMLElement("th")}}-Elemente).

{{EmbedInteractiveExample("pages/tabbed/thead.html","tabbed-taller")}}

## Attribute

Dieses Element beinhaltet die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

### Veraltete Attribute

Die folgenden Attribute sind veraltet und sollten nicht verwendet werden. Sie sind hier zu Referenzzwecken bei der Aktualisierung bestehenden Codes und aus historischem Interesse dokumentiert.

- `align` {{deprecated_inline}}

  - : Gibt die horizontale Ausrichtung jeder Kopfzelle an. Die möglichen [aufgezählten](/de/docs/Glossary/enumerated) Werte sind `left`, `center`, `right`, `justify` und `char`. Wenn unterstützt, richtet der Wert `char` den Textinhalt auf das im [`char`](#char)-Attribut definierte Zeichen und den durch das [`charoff`](#charoff)-Attribut definierten Versatz aus. Verwenden Sie stattdessen die {{cssxref("text-align")}}-CSS-Eigenschaft, da dieses Attribut veraltet ist.

- `bgcolor` {{deprecated_inline}}

  - : Definiert die Hintergrundfarbe jeder Kopfzelle. Der Wert ist eine HTML-Farbe; entweder ein [6-stelliger hexadezimaler RGB-Code](/de/docs/Web/CSS/hex-color), eingeleitet durch ein `#`, oder ein [Farbname](/de/docs/Web/CSS/named-color). Andere CSS {{cssxref("color_value", "&lt;color&gt")}}-Werte werden nicht unterstützt. Verwenden Sie stattdessen die {{cssxref("background-color")}}-CSS-Eigenschaft, da dieses Attribut veraltet ist.

- `char` {{deprecated_inline}}

  - : Hat keine Wirkung. Ursprünglich sollte es die Ausrichtung des Inhalts an einem Zeichen jeder Kopfzelle angeben. Wenn [`align`](#align) nicht auf `char` gesetzt ist, wird dieses Attribut ignoriert.

- `charoff` {{deprecated_inline}}

  - : Hat keine Wirkung. Ursprünglich sollte es die Anzahl der Zeichen angeben, um die der Inhalt der Kopfzelle von dem durch das [`char`](#char)-Attribut angegebenen Ausrichtungszeichen versetzt werden soll.

- `valign` {{deprecated_inline}}

  - : Gibt die vertikale Ausrichtung jeder Kopfzelle an. Die möglichen [aufgezählten](/de/docs/Glossary/enumerated) Werte sind `baseline`, `bottom`, `middle` und `top`. Verwenden Sie die {{cssxref("vertical-align")}}-CSS-Eigenschaft stattdessen, da dieses Attribut veraltet ist.

## Anwendungsnotizen

- Das `<thead>` wird nach jedem {{HTMLElement("caption")}} und {{HTMLElement("colgroup")}}-Element, jedoch vor jedem {{HTMLElement("tbody")}}, {{HTMLElement("tfoot")}} und {{HTMLElement("tr")}}-Element platziert.
- Zusammen mit den verwandten {{HTMLElement("tbody")}} und {{HTMLElement("tfoot")}}-Elementen liefert das `<thead>`-Element nützliche [semantische](/de/docs/Glossary/semantics) Informationen und kann sowohl beim Rendern für Bildschirm als auch für Druck verwendet werden. Durch das Spezifizieren solcher Tabellengruppen werden auch wertvolle kontextuelle Informationen für unterstützende Technologien, einschließlich Screenreadern und Suchmaschinen, bereitgestellt.
- Beim Drucken eines Dokuments gibt der Tabellenkopf häufig Informationen an, die auf jeder Seite gleich bleiben, im Falle einer mehrseitigen Tabelle.

## Beispiele

Sehen Sie {{HTMLElement("table")}} für ein vollständiges Tabellenbeispiel, das übliche Standards und bewährte Verfahren einführt.

### Grundlegende Kopfstruktur

Dieses Beispiel zeigt eine Tabelle mit einem Kopfabschnitt mit Spaltenüberschriften und einem Hauptdatenabschnitt.

#### HTML

Die `<thead>` und {{HTMLElement("tbody")}}-Elemente werden verwendet, um die Tabellenzeilen in [semantische](/de/docs/Glossary/semantics) Abschnitte zu strukturieren. Das `<thead>`-Element repräsentiert den Kopfabschnitt der Tabelle, der eine Zeile ({{HTMLElement("tr")}}) von Kopfzellen ({{HTMLElement("th")}}) mit Spaltenüberschriften enthält.

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

Ein einfaches CSS wird verwendet, um den Tabellenkopf zu gestalten und hervorzuheben, damit die Spaltenüberschriften von den Daten im Tabellenkörper auffallen.

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

### Mehrere Kopfzeilen

Dieses Beispiel zeigt einen Tabellenkopfabschnitt mit zwei Zeilen.

#### HTML

Wir erweitern das Markup der Tabelle aus dem [Grundlagenbeispiel](#grundlegende_kopfstruktur) in diesem Beispiel, indem wir zwei Tabellenzeilen ({{HTMLElement("tr")}}) innerhalb des `<thead>`-Elements einfügen, wodurch ein mehrzeiliger Tabellenkopf entsteht. Wir haben eine zusätzliche Spalte eingefügt, um die Studierendennamen in Vor- und Nachnamen zu unterteilen.

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

#### Zusammenführung von Zellen

Um die Kopfzellen mit den entsprechenden Spalten und Zeilen zu verknüpfen und auszurichten, werden die [`colspan`](/de/docs/Web/HTML/Element/th#colspan) und [`rowspan`](/de/docs/Web/HTML/Element/th#rowspan)-Attribute auf den {{HTMLElement("th")}}-Elementen verwendet. Die in diesen Attributen gesetzten Werte geben an, wie viele Zellen jede Kopfzelle ({{HTMLElement("th")}}) überspannt. Aufgrund der Art, wie diese Attribute gesetzt sind, stehen die beiden zweiten Kopfzeilen-Zellen in Übereinstimmung mit den Spalten, die sie leiten. Diese erstrecken sich jeweils über eine Zeile und eine Spalte, da die Standardwerte für die [`colspan`](/de/docs/Web/HTML/Element/th#colspan) und [`rowspan`](/de/docs/Web/HTML/Element/th#rowspan)-Attribute beide `1` sind.

Die in diesem Beispiel demonstrierte Spalten- und Zeilenüberspannung wird in der folgenden Abbildung illustriert:

![Illustration, die das Überspannen von Spalten und Zeilen von Tabellenzellen zeigt: Zellen 1, 3 und 4 überspannen jeweils eine Spalte und zwei Zeilen; Zelle 2 überspannt zwei Spalten und eine Zeile; Zellen 5 und 6 überspannen jeweils eine einzelne Zeile und Spalte und passen in die verfügbaren Zellen, die die zweite und dritte Spalte in der zweiten Zeile sind.](column-row-span.png)

#### CSS

Das CSS bleibt unverändert vom [vorherigen Beispiel](#grundlegende_kopfstruktur).

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
      <td>Null oder mehr {{HTMLElement("tr")}}-Elemente.</td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>
        Das Start-Tag ist obligatorisch. Das End-Tag kann weggelassen werden, wenn das
        <code>&lt;thead&gt;</code>-Element unmittelbar von einem
        {{HTMLElement("tbody")}}- oder {{HTMLElement("tfoot")}}-
        Element gefolgt wird.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Ein {{HTMLElement("table")}}-Element. Das
        <code>&lt;thead&gt;</code> muss nach jedem
        {{HTMLElement("caption")}} und
        {{HTMLElement("colgroup")}}-Element erscheinen, auch wenn sie implizit definiert sind,
        jedoch vor jedem {{HTMLElement("tbody")}},
        {{HTMLElement("tfoot")}} und {{HTMLElement("tr")}}
        -Element.
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

- [Learn: HTML tables](/de/docs/Learn/HTML/Tables)
- {{HTMLElement("caption")}}, {{HTMLElement("col")}}, {{HTMLElement("colgroup")}}, {{HTMLElement("table")}}, {{HTMLElement("tbody")}}, {{HTMLElement("td")}}, {{HTMLElement("tfoot")}}, {{HTMLElement("th")}}, {{HTMLElement("tr")}}: Weitere tabellenbezogene Elemente
- {{cssxref("background-color")}}: CSS-Eigenschaft, um die Hintergrundfarbe jeder Kopfzelle festzulegen
- {{cssxref("border")}}: CSS-Eigenschaft zur Steuerung der Rahmen von Kopfzellen
- {{cssxref("text-align")}}: CSS-Eigenschaft, um den Inhalt jeder Kopfzelle horizontal auszurichten
- {{cssxref("vertical-align")}}: CSS-Eigenschaft, um den Inhalt jeder Kopfzelle vertikal auszurichten
