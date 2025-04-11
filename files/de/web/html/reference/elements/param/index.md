---
title: "<param>: Das Objektsparameter-Element"
slug: Web/HTML/Reference/Elements/param
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar}}{{Deprecated_Header}}

Das **`<param>`** [HTML](/de/docs/Web/HTML)-Element definiert Parameter für ein {{HTMLElement("object")}}-Element.

> [!NOTE]
> Verwenden Sie das {{HTMLElement("object")}}-Element mit einem [`data`](/de/docs/Web/HTML/Reference/Elements/object#data)-Attribut, um die URL einer externen Ressource festzulegen.

## Attribute

Dieses Element beinhaltet die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `name` {{deprecated_inline}}
  - : Name des Parameters.
- `value` {{deprecated_inline}}
  - : Gibt den Wert des Parameters an.
- `type` {{deprecated_inline}}
  - : Wird nur verwendet, wenn der `valuetype` als `ref` festgelegt ist. Gibt den MIME-Typ der Werte an, die sich an der durch den `value` angegebenen URI befinden.
- `valuetype` {{deprecated_inline}}

  - : Gibt den Typ des `value`-Attributs an. Mögliche Werte sind:

    - `data`: Standardwert. Der Wert wird als Zeichenkette an die Implementierung des Objekts übergeben.
    - `ref`: Der Wert ist ein URI zu einer Ressource, in der Laufzeitwerte gespeichert sind.
    - `object`: Eine ID eines anderen {{HTMLElement("object")}} im selben Dokument.

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
      <td>Keine; es ist ein {{Glossary("void_element", "void-Element")}}.</td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Muss ein Start-Tag haben und darf kein End-Tag haben.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Ein {{HTMLElement("object")}} vor jedem
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content"
          >Fließinhalt</a
        >.
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
      <td>[`HTMLParamElement`](/de/docs/Web/API/HTMLParamElement)</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTMLElement("object")}}
