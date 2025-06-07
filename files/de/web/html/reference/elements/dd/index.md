---
title: "<dd>: Das Beschreibungselement"
slug: Web/HTML/Reference/Elements/dd
l10n:
  sourceCommit: c1564acf160ef4b320fb7b89ab65211b9c50cf1b
---

{{HTMLSidebar}}

Das **`<dd>`** [HTML](/de/docs/Web/HTML)-Element liefert die Beschreibung, Definition oder den Wert für den vorhergehenden Begriff ({{HTMLElement("dt")}}) in einer Beschreibungsliste ({{HTMLElement("dl")}}).

{{InteractiveExample("HTML Demo: &lt;dd&gt;", "tabbed-standard")}}

```html interactive-example
<p>Cryptids of Cornwall:</p>

<dl>
  <dt>Beast of Bodmin</dt>
  <dd>A large feline inhabiting Bodmin Moor.</dd>

  <dt>Morgawr</dt>
  <dd>A sea serpent.</dd>

  <dt>Owlman</dt>
  <dd>A giant owl-like creature.</dd>
</dl>
```

```css interactive-example
p,
dt {
  font-weight: bold;
}

dl,
dd {
  font-size: 0.9rem;
}

dd {
  margin-bottom: 1em;
}
```

## Attribute

Dieses Element beinhaltet nur die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

## Beispiele

Für Beispiele, siehe die [für das `<dl>`-Element bereitgestellten Beispiele](/de/docs/Web/HTML/Reference/Elements/dl#examples).

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
          >Flow Content</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Weglassen des Tags</th>
      <td>
        Das Start-Tag ist erforderlich. Das End-Tag kann weggelassen werden, wenn dieses Element unmittelbar von einem anderen <code>&#x3C;dd&gt;</code>-Element oder einem {{HTMLElement("dt")}}-Element gefolgt wird oder wenn es keinen weiteren Inhalt im Elternelement gibt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Ein {{HTMLElement("dl")}} oder ein
        {{HTMLElement("div")}}, das ein Kind von einem
        {{HTMLElement("dl")}} ist.<br />Dieses Element kann nach einem
        {{HTMLElement("dt")}} oder einem anderen <code>&lt;dd&gt;</code>
        Element verwendet werden.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <a href="https://w3c.github.io/html-aria/#dfn-no-corresponding-role"
          >Keine entsprechende Rolle</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA-Rollen</th>
      <td>Keine <code>role</code> erlaubt</td>
    </tr>
    <tr>
      <th scope="row">DOM-Schnittstelle</th>
      <td>[`HTMLElement`](/de/docs/Web/API/HTMLElement)</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTMLElement("dl")}}
- {{HTMLElement("dt")}}
