---
title: "<caption>: Das Tabellenbeschriftungselement"
slug: Web/HTML/Element/caption
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{HTMLSidebar}}

Das **`<caption>`** [HTML](/de/docs/Web/HTML)-Element gibt die Beschriftung (oder den Titel) einer Tabelle an und bietet der Tabelle eine {{Glossary("accessible_description", "zugängliche Beschreibung")}}.

{{InteractiveExample("HTML Demo: &lt;caption&gt;", "tabbed-taller")}}

```html interactive-example
<table>
  <caption>
    He-Man and Skeletor facts
  </caption>
  <tr>
    <td></td>
    <th scope="col" class="heman">He-Man</th>
    <th scope="col" class="skeletor">Skeletor</th>
  </tr>
  <tr>
    <th scope="row">Role</th>
    <td>Hero</td>
    <td>Villain</td>
  </tr>
  <tr>
    <th scope="row">Weapon</th>
    <td>Power Sword</td>
    <td>Havoc Staff</td>
  </tr>
  <tr>
    <th scope="row">Dark secret</th>
    <td>Expert florist</td>
    <td>Cries at romcoms</td>
  </tr>
</table>
```

```css interactive-example
caption {
  caption-side: bottom;
  padding: 10px;
  font-weight: bold;
}

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

th {
  background-color: rgb(230 230 230);
}

td {
  text-align: center;
}

tr:nth-child(even) td {
  background-color: rgb(250 250 250);
}

tr:nth-child(odd) td {
  background-color: rgb(240 240 240);
}

.heman {
  font: 1.4rem molot;
  text-shadow:
    1px 1px 1px #fff,
    2px 2px 1px #000;
}

.skeletor {
  font: 1.7rem rapscallion;
  letter-spacing: 3px;
  text-shadow:
    1px 1px 0 #fff,
    0 0 9px #000;
}
```

## Attribute

Dieses Element umfasst die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

### Veraltete Attribute

Die folgenden Attribute sind veraltet und sollten nicht verwendet werden. Sie sind hier zur Referenz bei der Aktualisierung vorhandenen Codes und aus historischem Interesse dokumentiert.

- `align` {{deprecated_inline}}

  - : Gibt an, auf welcher Seite der Tabelle die Beschriftung angezeigt werden soll. Die möglichen {{Glossary("enumerated", "aufgezählten")}} Werte sind `left`, `top`, `right` oder `bottom`. Verwenden Sie stattdessen die CSS-Eigenschaften {{cssxref("caption-side")}} und {{cssxref("text-align")}}, da dieses Attribut veraltet ist.

## Verwendungshinweise

- Wenn enthalten, muss das `<caption>`-Element das erste Kind seines übergeordneten {{htmlelement("table")}}-Elements sein.
- Wenn eine `<table>` innerhalb einer {{HTMLElement("figure")}} als einziger Inhalt der Abbildung geschachtelt ist, sollte sie über eine {{HTMLElement("figcaption")}} für das `<figure>` und nicht als `<caption>`, das innerhalb der `<table>` geschachtelt ist, beschriftet werden.
- Jegliche {{cssxref("background-color")}}, die auf eine Tabelle angewendet wird, wird nicht auf deren Beschriftung angewendet. Fügen Sie der `<caption>`-Element ebenfalls eine `background-color` hinzu, wenn Sie dieselbe Farbe sowohl hinter der Tabelle als auch hinter der Beschriftung wünschen.

## Beispiel

Siehe {{HTMLElement("table")}} für ein vollständiges Tabellenbeispiel, das gängige Standards und bewährte Praktiken einführt.

### Tabelle mit Beschriftung

Dieses Beispiel zeigt eine einfache Tabelle, die eine Beschriftung enthält, um die dargestellten Daten zu beschreiben.

Ein solcher "Titel" ist hilfreich für Benutzer, die die Seite schnell durchsuchen, und er ist besonders vorteilhaft für sehbehinderte Benutzer, da er ihnen ermöglicht, die Relevanz der Tabelle schnell zu bestimmen, ohne dass ein Screenreader den Inhalt vieler Zellen lesen muss, nur um herauszufinden, worum es in der Tabelle geht.

#### HTML

Ein `<caption>`-Element wird als erstes Kind der {{HTMLElement("table")}} verwendet, mit einem Textinhalt ähnlich einem Titel, um die Tabellendaten zu beschreiben. Drei Zeilen, die erste als Kopfzeile, mit zwei Spalten werden nach dem `<caption>` unter Verwendung der Elemente {{HTMLElement("tr")}}, {{HTMLElement("th")}} und {{HTMLElement("td")}} erstellt.

```html
<table>
  <caption>
    User login email addresses
  </caption>
  <tr>
    <th>Login</th>
    <th>Email</th>
  </tr>
  <tr>
    <td>user1</td>
    <td>user1@example.com</td>
  </tr>
  <tr>
    <td>user2</td>
    <td>user2@example.com</td>
  </tr>
</table>
```

#### CSS

Ein bisschen grundlegendes CSS wird verwendet, um das `<caption>` auszurichten und hervorzuheben.

```css
caption {
  caption-side: top;
  text-align: left;
  padding-bottom: 10px;
  font-weight: bold;
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

th {
  background-color: rgb(230 230 230);
}

td {
  text-align: center;
}
```

#### Ergebnis

{{EmbedLiveSample('Example', 650, 140)}}

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
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#flow_content"
          >Flow-Inhalt</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>
        Das End-Tag kann weggelassen werden, wenn das Element nicht unmittelbar von
        ASCII-Leerzeichen oder einem Kommentar gefolgt wird.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Ein {{HTMLElement("table")}}-Element, als dessen erster Nachkomme.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
      <td>
        <code
          ><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/structural_roles#structural_roles_with_html_equivalents">caption</a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA-Rollen</th>
      <td>Keine <code>role</code> erlaubt</td>
    </tr>
    <tr>
      <th scope="row">DOM-Schnittstelle</th>
      <td>[`HTMLTableCaptionElement`](/de/docs/Web/API/HTMLTableCaptionElement)</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Lernen: Grundlagen von HTML-Tabellen](/de/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics)
- {{HTMLElement("col")}}, {{HTMLElement("colgroup")}}, {{HTMLElement("table")}}, {{HTMLElement("tbody")}}, {{HTMLElement("td")}}, {{HTMLElement("tfoot")}}, {{HTMLElement("th")}}, {{HTMLElement("thead")}}, {{HTMLElement("tr")}}: Weitere tabellenbezogene Elemente
- {{cssxref("caption-side")}}: CSS-Eigenschaft, um die Position der `<caption>` relativ zu ihrem übergeordneten {{HTMLElement("table")}} festzulegen
- {{cssxref("text-align")}}: CSS-Eigenschaft, um den Textinhalt der `<caption>` horizontal auszurichten
