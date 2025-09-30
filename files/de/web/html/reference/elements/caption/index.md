---
title: "<caption>: Das Tabellen-Caption-Element"
slug: Web/HTML/Reference/Elements/caption
l10n:
  sourceCommit: c403dd32f627cd972048db05db04ef76f3ab84fe
---

Das **`<caption>`**-[HTML](/de/docs/Web/HTML)-Element spezifiziert die Überschrift (oder den Titel) einer Tabelle und verleiht der Tabelle einen {{Glossary("accessible_name", "zugänglichen Namen")}} oder eine {{Glossary("accessible_description", "zugängliche Beschreibung")}}.

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
  font:
    1.4rem molot,
    sans-serif;
  text-shadow:
    1px 1px 1px white,
    2px 2px 1px black;
}

.skeletor {
  font:
    1.7rem rapscallion,
    fantasy;
  letter-spacing: 3px;
  text-shadow:
    1px 1px 0 white,
    0 0 9px black;
}
```

## Attribute

Dieses Element beinhaltet die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

### Veraltete Attribute

Die folgenden Attribute sind veraltet und sollten nicht verwendet werden. Sie sind nachfolgend dokumentiert, um bei der Aktualisierung bestehender Codes als Referenz und aus historischen Gründen zu dienen.

- `align` {{deprecated_inline}}
  - : Gibt an, auf welcher Seite der Tabelle die Überschrift angezeigt werden soll. Die möglichen {{Glossary("enumerated", "aufzählbaren")}} Werte sind `left`, `top`, `right` oder `bottom`. Verwenden Sie stattdessen die {{cssxref("caption-side")}}- und {{cssxref("text-align")}}-CSS-Eigenschaften, da dieses Attribut veraltet ist.

## Anwendungshinweise

- Wenn enthalten, muss das `<caption>`-Element das erste Kind des übergeordneten {{htmlelement("table")}}-Elements sein.
- Wenn eine `<table>` innerhalb einer {{HTMLElement("figure")}} als einziger Inhalt des figürlichen Elements eingebettet ist, sollte diese über eine {{HTMLElement("figcaption")}} der `<figure>` anstelle als `<caption>` innerhalb der `<table>` beschriftet werden.
- Jede angewendete {{cssxref("background-color")}} auf eine Tabelle wird nicht auf deren Caption angewendet. Fügen Sie dem `<caption>`-Element auch eine `background-color` hinzu, wenn Sie die gleiche Farbe hinter beiden Elementen haben möchten.

## Beispiel

Siehe {{HTMLElement("table")}} für ein vollständiges Tabellenbeispiel, das gängige Standards und bewährte Praktiken einführt.

### Tabelle mit Überschrift

Dieses Beispiel zeigt eine grundlegende Tabelle, die eine Überschrift enthält, die die dargestellten Daten beschreibt.

Ein solcher "Titel" ist nützlich für Benutzer, die schnell die Seite durchgehen, und er ist besonders nützlich für sehbehinderte Benutzer, die so schnell die Relevanz der Tabelle erkennen können, ohne dass ein Bildschirmlesegerät den Inhalt vieler Zellen durchgehen muss, nur um herauszufinden, worum es bei der Tabelle geht.

#### HTML

Ein `<caption>`-Element wird als erstes Kind der {{HTMLElement("table")}} verwendet, mit einem Textinhalt, der einem Titel ähnelt, um die Tabellendaten zu beschreiben. Drei Zeilen, die erste eine Kopfzeile, mit zwei Spalten werden unter Verwendung der {{HTMLElement("tr")}}, {{HTMLElement("th")}}- und {{HTMLElement("td")}}-Elemente nach dem `<caption>` erstellt.

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

Ein wenig grundlegendes CSS wird verwendet, um das `<caption>` auszurichten und hervorzuheben.

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
        <a href="/de/docs/Web/HTML/Guides/Content_categories">Inhaltskategorien</a>
      </th>
      <td>Keine.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content">Flow-Inhalt</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Entlassung</th>
      <td>
        Das End-Tag kann weggelassen werden, wenn das Element nicht sofort von einem ASCII-Leerzeichen oder einem Kommentar gefolgt wird.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Ein {{HTMLElement("table")}}-Element, als erster Nachfahre.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
      <td>
        <code><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/structural_roles#structural_roles_with_html_equivalents">caption</a></code>
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

- [Lernen: HTML-Tabellen-Grundlagen](/de/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics)
- {{HTMLElement("col")}}, {{HTMLElement("colgroup")}}, {{HTMLElement("table")}}, {{HTMLElement("tbody")}}, {{HTMLElement("td")}}, {{HTMLElement("tfoot")}}, {{HTMLElement("th")}}, {{HTMLElement("thead")}}, {{HTMLElement("tr")}}: Andere tabellenbezogene Elemente
- {{cssxref("caption-side")}}: CSS-Eigenschaft zum Positionieren des `<caption>` relativ zu seinem übergeordneten {{HTMLElement("table")}}
- {{cssxref("text-align")}}: CSS-Eigenschaft zur horizontalen Ausrichtung des Textinhalts des `<caption>`
