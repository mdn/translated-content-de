---
title: "<caption>: Das Tabellenüberschriftselement"
slug: Web/HTML/Element/caption
l10n:
  sourceCommit: 8b4e6b773d03959d5a5b2d02200243c4714079b9
---

{{HTMLSidebar}}

Das **`<caption>`** [HTML](/de/docs/Web/HTML) Element bezeichnet die Überschrift (oder den Titel) einer Tabelle und bietet der Tabelle eine {{glossary("accessible description", "zugängliche Beschreibung")}}.

{{EmbedInteractiveExample("pages/tabbed/caption.html", "tabbed-taller")}}

## Attribute

Dieses Element enthält die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

### Veraltete Attribute

Die folgenden Attribute sind veraltet und sollten nicht verwendet werden. Sie werden hier zu Referenzzwecken für die Aktualisierung vorhandenen Codes und aus geschichtlichem Interesse dokumentiert.

- `align` {{deprecated_inline}}

  - : Gibt an, auf welcher Seite der Tabelle die Überschrift angezeigt werden soll. Die möglichen {{Glossary("enumerated", "aufgezählten")}} Werte sind `left`, `top`, `right` oder `bottom`. Verwenden Sie stattdessen die {{cssxref("caption-side")}} und {{cssxref("text-align")}} CSS-Eigenschaften, da dieses Attribut veraltet ist.

## Verwendungshinweise

- Wenn vorhanden, muss das `<caption>`-Element das erste Kindelement des übergeordneten {{htmlelement("table")}}-Elements sein.
- Wenn eine `<table>` innerhalb eines {{HTMLElement("figure")}} als einziger Inhalt der Figur verschachtelt ist, sollte sie über ein {{HTMLElement("figcaption")}} für die `<figure>` beschriftet werden, anstatt als `<caption>` innerhalb der `<table>`.
- Jede {{cssxref("background-color")}}, die auf eine Tabelle angewendet wird, gilt nicht für ihre Überschrift. Fügen Sie auch dem `<caption>`-Element eine `background-color` hinzu, wenn Sie möchten, dass dieselbe Farbe hinter beiden angezeigt wird.

## Beispiel

Siehe {{HTMLElement("table")}} für ein vollständiges Tabellenbeispiel mit gängigen Standards und Best Practices.

### Tabelle mit Überschrift

Dieses Beispiel zeigt eine einfache Tabelle mit einer Überschrift, die die dargestellten Daten beschreibt.

Ein solcher "Titel" ist hilfreich für Benutzer, die schnell die Seite durchsehen, und ist besonders vorteilhaft für sehbehinderte Benutzer, da sie so schnell die Relevanz der Tabelle bestimmen können, ohne dass ein Bildschirmleser den Inhalt vieler Zellen lesen muss, nur um herauszufinden, worum es in der Tabelle geht.

#### HTML

Ein `<caption>`-Element wird als erstes Kindelement der {{HTMLElement("table")}} verwendet, mit einem Textinhalt, der einem Titel ähnelt, um die Tabellendaten zu beschreiben. Drei Zeilen, die erste als Kopfzeile, mit zwei Spalten werden unter Verwendung der {{HTMLElement("tr")}}, {{HTMLElement("th")}} und {{HTMLElement("td")}}-Elemente nach dem `<caption>` erstellt.

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

Einige grundlegende CSS werden verwendet, um das `<caption>` auszurichten und hervorzuheben.

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
        <a href="/de/docs/Web/HTML/Content_categories">Inhaltskategorien</a>
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
      <th scope="row">Auslassung des Tags</th>
      <td>
        Das End-Tag kann weggelassen werden, wenn das Element nicht unmittelbar von
        ASCII-Leerzeichen oder einem Kommentar gefolgt wird.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Ein {{HTMLElement("table")}}-Element als sein erster Nachfolger.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
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
      <td>{{domxref("HTMLTableCaptionElement")}}</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Lernen: HTML Tabellen](/de/docs/Learn/HTML/Tables)
- {{HTMLElement("col")}}, {{HTMLElement("colgroup")}}, {{HTMLElement("table")}}, {{HTMLElement("tbody")}}, {{HTMLElement("td")}}, {{HTMLElement("tfoot")}}, {{HTMLElement("th")}}, {{HTMLElement("thead")}}, {{HTMLElement("tr")}}: Andere tabellenbezogene Elemente
- {{cssxref("caption-side")}}: CSS-Eigenschaft, um das `<caption>` relativ zu seinem übergeordneten {{HTMLElement("table")}} zu positionieren
- {{cssxref("text-align")}}: CSS-Eigenschaft, um den Textinhalt des `<caption>` horizontal auszurichten
