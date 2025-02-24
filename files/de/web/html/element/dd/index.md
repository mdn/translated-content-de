---
title: "<dd>: Das Description Details-Element"
slug: Web/HTML/Element/dd
l10n:
  sourceCommit: 8b02826c79b090b5af0d68ae1ef39f932a66a7f1
---

{{HTMLSidebar}}

Das **`<dd>`** [HTML](/de/docs/Web/HTML)-Element bietet die Beschreibung, Definition oder den Wert für den vorangehenden Begriff ({{HTMLElement("dt")}}) in einer Definitionsliste ({{HTMLElement("dl")}}).

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

Dieses Element umfasst nur die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

## Beispiele

Für Beispiele siehe die [Beispiele für das `<dl>`-Element](/de/docs/Web/HTML/Element/dl#examples).

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
          >Flussinhalt</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>
        Das Start-Tag ist erforderlich. Das End-Tag kann weggelassen werden, wenn dieses Element unmittelbar von einem anderen <code>&#x3C;dd></code>-Element oder einem {{HTMLElement("dt")}}-Element gefolgt wird oder wenn kein weiterer Inhalt im übergeordneten Element vorhanden ist.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Ein {{HTMLElement("dl")}} oder ein
        {{HTMLElement("div")}}, das ein Kind eines
        {{HTMLElement("dl")}} ist.<br />Dieses Element kann nach einem
        {{HTMLElement("dt")}} oder einem anderen <code>&lt;dd&gt;</code>-Element verwendet werden.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role"
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
