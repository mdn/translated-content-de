---
title: "<caption>: Das Tabellenüberschriftselement"
slug: Web/HTML/Element/caption
l10n:
  sourceCommit: 8b4e6b773d03959d5a5b2d02200243c4714079b9
---

{{HTMLSidebar}}

Das **`<caption>`** [HTML](/de/docs/Web/HTML)-Element gibt die Überschrift (oder den Titel) einer Tabelle an und bietet der Tabelle eine [zugängliche Beschreibung](/de/docs/Glossary/accessible_description).

{{EmbedInteractiveExample("pages/tabbed/caption.html", "tabbed-taller")}}

## Attribute

Dieses Element enthält die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

### Veraltete Attribute

Die folgenden Attribute sind veraltet und sollten nicht verwendet werden. Sie sind nur zu Referenzzwecken bei der Aktualisierung von bestehendem Code und aus historischem Interesse dokumentiert.

- `align` {{deprecated_inline}}

  - : Gibt an, auf welcher Seite der Tabelle die Überschrift angezeigt werden soll. Die möglichen [aufgeführten](/de/docs/Glossary/enumerated) Werte sind `left`, `top`, `right` oder `bottom`. Verwenden Sie stattdessen die CSS-Eigenschaften {{cssxref("caption-side")}} und {{cssxref("text-align")}}, da dieses Attribut veraltet ist.

## Verwendungshinweise

- Falls vorhanden, muss das `<caption>`-Element das erste Kind seines übergeordneten {{htmlelement("table")}}-Elements sein.
- Wenn eine `<table>` innerhalb eines {{HTMLElement("figure")}} als einzigem Inhalt der Figur verschachtelt ist, sollte sie über eine {{HTMLElement("figcaption")}} für das `<figure>` und nicht als `<caption>` innerhalb der `<table>` versehen werden.
- Jegliche auf eine Tabelle angewandte {{cssxref("background-color")}} wird nicht auf die Überschrift angewendet. Fügen Sie dem `<caption>`-Element ebenfalls eine `background-color` hinzu, wenn Sie möchten, dass dieselbe Farbe hinter beidem liegt.

## Beispiel

Siehe {{HTMLElement("table")}} für ein vollständiges Tabellenbeispiel, das allgemeine Standards und bewährte Praktiken einführt.

### Tabelle mit Überschrift

Dieses Beispiel zeigt eine einfache Tabelle, die eine Überschrift zur Beschreibung der dargestellten Daten enthält.

Ein solcher "Titel" ist nützlich für Benutzer, die die Seite schnell scannen, und er ist besonders vorteilhaft für sehbehinderte Benutzer, da er ihnen ermöglicht, schnell die Relevanz der Tabelle zu bestimmen, ohne dass ein Screenreader den Inhalt vieler Zellen lesen muss, um herauszufinden, worum es in der Tabelle geht.

#### HTML

Ein `<caption>`-Element wird als erstes Kind der {{HTMLElement("table")}} verwendet, mit Textinhalt ähnlich einem Titel, um die Tabellendaten zu beschreiben. Drei Zeilen, die erste als Kopfzeile, mit zwei Spalten werden mit den {{HTMLElement("tr")}}, {{HTMLElement("th")}} und {{HTMLElement("td")}} -Elementen nach dem `<caption>` erstellt.

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

Ein einfaches CSS wird verwendet, um das `<caption>` auszurichten und hervorzuheben.

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
        Der End-Tag kann weggelassen werden, wenn das Element nicht unmittelbar von ASCII-Leerzeichen oder einem Kommentar gefolgt wird.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Ein {{HTMLElement("table")}}-Element, als dessen erstes Nachkommendes.
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

- [Lernen: HTML-Tabellen](/de/docs/Learn/HTML/Tables)
- {{HTMLElement("col")}}, {{HTMLElement("colgroup")}}, {{HTMLElement("table")}}, {{HTMLElement("tbody")}}, {{HTMLElement("td")}}, {{HTMLElement("tfoot")}}, {{HTMLElement("th")}}, {{HTMLElement("thead")}}, {{HTMLElement("tr")}}: Weitere tabellenbezogene Elemente
- {{cssxref("caption-side")}}: CSS-Eigenschaft, um das `<caption>` relativ zu seinem übergeordneten {{HTMLElement("table")}} zu positionieren
- {{cssxref("text-align")}}: CSS-Eigenschaft, um den Textinhalt des `<caption>` horizontal auszurichten
