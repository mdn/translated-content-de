---
title: "<caption>: Das Tabellenbeschriftungselement"
slug: Web/HTML/Element/caption
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{HTMLSidebar}}

Das **`<caption>`** [HTML](/de/docs/Web/HTML)-Element legt die Beschriftung (oder den Titel) einer Tabelle fest und bietet der Tabelle eine {{Glossary("accessible_description", "zugängliche Beschreibung")}}.

{{EmbedInteractiveExample("pages/tabbed/caption.html", "tabbed-taller")}}

## Attribute

Dieses Element umfasst die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

### Veraltete Attribute

Die folgenden Attribute sind veraltet und sollten nicht verwendet werden. Sie sind hier dokumentiert, um beim Aktualisieren bestehenden Codes als Referenz zu dienen und aus historischem Interesse.

- `align` {{deprecated_inline}}

  - : Gibt an, auf welcher Seite der Tabelle die Beschriftung angezeigt werden soll. Die möglichen {{Glossary("enumerated", "aufzählbaren")}} Werte sind `left`, `top`, `right` oder `bottom`. Verwenden Sie stattdessen die {{cssxref("caption-side")}}- und {{cssxref("text-align")}}-CSS-Eigenschaften, da dieses Attribut veraltet ist.

## Anwendungshinweise

- Wenn enthalten, muss das `<caption>`-Element das erste Kind seines übergeordneten {{htmlelement("table")}}-Elements sein.
- Wenn eine `<table>` innerhalb eines {{HTMLElement("figure")}} verschachtelt ist und den einzigen Inhalt der Figur darstellt, sollte sie über eine {{HTMLElement("figcaption")}} für die `<figure>` anstelle als `<caption>` innerhalb der `<table>` beschriftet werden.
- Jede {{cssxref("background-color")}}, die auf eine Tabelle angewendet wird, gilt nicht für deren Beschriftung. Fügen Sie eine `background-color` zum `<caption>`-Element hinzu, wenn Sie möchten, dass dieselbe Farbe auch hinter der Beschriftung angezeigt wird.

## Beispiel

Sehen Sie sich {{HTMLElement("table")}} für ein vollständiges Tabellenbeispiel an, das gängige Standards und bewährte Praktiken einführt.

### Tabelle mit Beschriftung

Dieses Beispiel zeigt eine einfache Tabelle mit einer Beschriftung, die die dargestellten Daten beschreibt.

Ein solcher "Titel" ist hilfreich für Benutzer, die die Seite schnell überfliegen, und er ist besonders vorteilhaft für sehbehinderte Benutzer, da er ihnen erlaubt, schnell die Relevanz der Tabelle zu erkennen, ohne dass ein Screenreader den Inhalt vieler Zellen vorlesen muss, nur um zu erfahren, worum es in der Tabelle geht.

#### HTML

Ein `<caption>`-Element wird als erstes Kind der {{HTMLElement("table")}} verwendet, mit Textinhalt ähnlich einem Titel, um die Tabellendaten zu beschreiben. Drei Zeilen, die erste davon eine Kopfzeile, mit zwei Spalten werden mit den {{HTMLElement("tr")}}, {{HTMLElement("th")}} und {{HTMLElement("td")}}-Elementen nach dem `<caption>` erstellt.

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

Einige grundlegende CSS-Eigenschaften werden verwendet, um die `<caption>` auszurichten und hervorzuheben.

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
          >Fließender Inhalt</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>
        Der End-Tag kann ausgelassen werden, wenn das Element nicht unmittelbar von
        ASCII-Leerzeichen oder einem Kommentar gefolgt wird.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Ein {{HTMLElement("table")}}-Element, als dessen erster Nachfahre.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
      <td>
        <code
          ><a href="/de/docs/Web/Accessibility/ARIA/Roles/structural_roles#structural_roles_with_html_equivalents">caption</a
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
- {{HTMLElement("col")}}, {{HTMLElement("colgroup")}}, {{HTMLElement("table")}}, {{HTMLElement("tbody")}}, {{HTMLElement("td")}}, {{HTMLElement("tfoot")}}, {{HTMLElement("th")}}, {{HTMLElement("thead")}}, {{HTMLElement("tr")}}: Andere tabellenbezogene Elemente
- {{cssxref("caption-side")}}: CSS-Eigenschaft, um die `<caption>` relativ zu ihrem übergeordneten {{HTMLElement("table")}} zu positionieren
- {{cssxref("text-align")}}: CSS-Eigenschaft, um den Textinhalt der `<caption>` horizontal auszurichten
