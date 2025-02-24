---
title: "<dt>: Das Beschreibungstermen-Element"
slug: Web/HTML/Element/dt
l10n:
  sourceCommit: 8b02826c79b090b5af0d68ae1ef39f932a66a7f1
---

{{HTMLSidebar}}

Das **`<dt>`** [HTML](/de/docs/Web/HTML) Element spezifiziert einen Begriff in einer Beschreibungs- oder Definitionsliste und muss daher innerhalb eines {{HTMLElement("dl")}} Elements verwendet werden. Es wird normalerweise von einem {{HTMLElement("dd")}} Element gefolgt; jedoch deuten mehrere `<dt>` Elemente hintereinander mehrere Begriffe an, die alle durch das unmittelbar folgende {{HTMLElement("dd")}} Element definiert werden.

Das nachfolgende {{HTMLElement("dd")}} (**Beschreibung Details**) Element liefert die Definition oder anderen relevanten Text, der mit dem durch `<dt>` angegebenen Begriff verknüpft ist.

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

Dieses Element enthält nur die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

## Beispiele

Für Beispiele siehe die [beim `<dl>` Element bereitgestellten Beispiele](/de/docs/Web/HTML/Element/dl#examples).

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
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#flow_content"
          >Flussinhalt</a
        >, jedoch ohne {{HTMLElement("header")}},
        {{HTMLElement("footer")}}, Abschnittsinhalte oder Überschrifteninhalte
        als Nachfahren.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>
        Der Starttag ist erforderlich. Der Endtag kann weggelassen werden, wenn dieses Element
        unmittelbar gefolgt wird von einem weiteren <code>&#x3C;dt></code> Element oder einem
        {{HTMLElement("dd")}} Element oder wenn kein weiterer Inhalt im
        Elternelement vorhanden ist.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Ein {{HTMLElement("dl")}} oder (in {{Glossary("WHATWG", "WHATWG")}} HTML,
        {{Glossary("W3C", "W3C")}} HTML 5.2 und später) ein
        {{HTMLElement("div")}}, das ein Kind eines
        {{HTMLElement("dl")}} ist.<br />Dieses Element kann vor einem
        {{HTMLElement("dd")}} oder einem weiteren <code>&lt;dt&gt;</code>
        Element verwendet werden.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
      <td>
        <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role"
          >Keine entsprechende Rolle</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA-Rollen</th>
      <td>
        <code
          ><a href="/de/docs/Web/Accessibility/ARIA/Roles/listitem_role"
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
