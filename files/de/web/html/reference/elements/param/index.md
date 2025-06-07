---
title: "<param>: Das Objekt-Parameter-Element"
slug: Web/HTML/Reference/Elements/param
l10n:
  sourceCommit: c1564acf160ef4b320fb7b89ab65211b9c50cf1b
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
  - : Wird nur verwendet, wenn `valuetype` auf `ref` gesetzt ist. Gibt den MIME-Typ von Werten an, die unter der URI gefunden werden, die durch den Wert angegeben ist.
- `valuetype` {{deprecated_inline}}

  - : Gibt den Typ des `value`-Attributs an. Mögliche Werte sind:

    - `data`: Standardwert. Der Wert wird als String an die Implementierung des Objekts übergeben.
    - `ref`: Der Wert ist eine URI zu einer Ressource, an der Laufzeitwerte gespeichert werden.
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
      <td>Keiner; es ist ein {{Glossary("void_element", "void element")}}.</td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Muss ein Start-Tag haben und darf keinen End-Tag haben.</td>
    </tr>
    <tr>
      <th scope="row">Zulässige Eltern</th>
      <td>
        Ein {{HTMLElement("object")}} vor jeglichem
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content"
          >flow content</a
        >.
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
      <th scope="row">Zulässige ARIA-Rollen</th>
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
