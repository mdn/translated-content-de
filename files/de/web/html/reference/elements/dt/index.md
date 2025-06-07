---
title: "<dt>: Das Beschreibungsterm-Element"
slug: Web/HTML/Reference/Elements/dt
l10n:
  sourceCommit: c1564acf160ef4b320fb7b89ab65211b9c50cf1b
---

{{HTMLSidebar}}

Das **`<dt>`** [HTML](/de/docs/Web/HTML) Element spezifiziert einen Begriff in einer Beschreibungs- oder Definitionsliste und muss daher innerhalb eines {{HTMLElement("dl")}} Elements verwendet werden. Es wird üblicherweise von einem {{HTMLElement("dd")}} Element gefolgt; jedoch weisen mehrere aufeinanderfolgende `<dt>` Elemente auf mehrere Begriffe hin, die alle durch das unmittelbar folgende {{HTMLElement("dd")}} Element definiert werden.

Das folgende {{HTMLElement("dd")}} (**Beschreibungseinzelheiten**) Element liefert die Definition oder andere verwandte Texte, die dem mit `<dt>` angegebenen Begriff zugeordnet sind.

{{InteractiveExample("HTML Demo: &lt;dt&gt;", "tabbed-standard")}}

```html interactive-example
<p>Please use the following paint colors for the new house:</p>

<dl>
  <dt>Denim (semigloss finish)</dt>
  <dd>Ceiling</dd>

  <dt>Denim (eggshell finish)</dt>
  <dt>Evening Sky (eggshell finish)</dt>
  <dd>Layered on the walls</dd>
</dl>
```

```css interactive-example
p,
dl {
  font:
    1rem "Fira Sans",
    sans-serif;
}

dl > dt {
  font-weight: normal;
  font-style: oblique;
}

dd {
  margin-bottom: 1rem;
}
```

## Attribute

Dieses Element enthält nur die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

## Beispiele

Für Beispiele siehe die [bereitgestellten Beispiele für das `<dl>` Element](/de/docs/Web/HTML/Reference/Elements/dl#examples).

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Guides/Content_categories"
          >Inhaltskategorien</a
        >
      </th>
      <td>Keine.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content"
          >Fließender Inhalt</a
        >, jedoch ohne {{HTMLElement("header")}},
        {{HTMLElement("footer")}}, Gliederungsinhalte oder
        Überschrifteninhalte als Nachfahren.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>
        Das Start-Tag ist erforderlich. Das End-Tag kann weggelassen werden, wenn diesem Element
        sofort ein anderes <code>&#x3C;dt></code> Element oder ein
        {{HTMLElement("dd")}} Element folgt, oder wenn es keinen weiteren Inhalt im
        Elternelement gibt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Ein {{HTMLElement("dl")}} oder (in {{Glossary("WHATWG", "WHATWG")}} HTML,
        {{Glossary("W3C", "W3C")}} HTML 5.2 und später) ein
        {{HTMLElement("div")}}, das ein Kind eines
        {{HTMLElement("dl")}} ist.<br />Dieses Element kann vor einem
        {{HTMLElement("dd")}} oder einem anderen <code>&lt;dt&gt;</code>
        Element verwendet werden.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
      <td>
        <a href="https://w3c.github.io/html-aria/#dfn-no-corresponding-role"
          >Keine entsprechende Rolle</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA-Rollen</th>
      <td>
        <code
          ><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/listitem_role"
            >listitem</a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">DOM-Schnittstelle</th>
      <td>
        [`HTMLElement`](/de/docs/Web/API/HTMLElement) Bis einschließlich Gecko 1.9.2 (Firefox 4)
        implementiert Firefox die
        [`HTMLSpanElement`](/de/docs/Web/API/HTMLSpanElement) Schnittstelle für dieses Element.
      </td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTMLElement("dl")}}
- {{HTMLElement("dd")}}
