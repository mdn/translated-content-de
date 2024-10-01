---
title: "<param>: Das Objekt-Parameter-Element"
slug: Web/HTML/Element/param
l10n:
  sourceCommit: b7955e77cd4293adf45ef23686df50b0305f02ad
---

{{HTMLSidebar}}{{Deprecated_Header}}

Das **`<param>`** [HTML](/de/docs/Web/HTML)-Element definiert Parameter für ein {{HTMLElement("object")}}-Element.

> [!NOTE]
> Verwenden Sie das {{HTMLElement("object")}}-Element mit einem [`data`](/de/docs/Web/HTML/Element/object#data)-Attribut, um die URL einer externen Ressource festzulegen.

## Attribute

Dieses Element umfasst die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- `name` {{deprecated_inline}}
  - : Name des Parameters.
- `value` {{deprecated_inline}}
  - : Gibt den Wert des Parameters an.
- `type` {{deprecated_inline}}
  - : Wird nur verwendet, wenn `valuetype` auf `ref` gesetzt ist. Gibt den MIME-Typ der Werte an, die unter der durch den Wert angegebenen URI zu finden sind.
- `valuetype` {{deprecated_inline}}

  - : Gibt den Typ des `value`-Attributs an. Mögliche Werte sind:

    - `data`: Standardwert. Der Wert wird der Implementierung des Objekts als Zeichenfolge übergeben.
    - `ref`: Der Wert ist eine URI zu einer Ressource, in der Laufzeitwerte gespeichert sind.
    - `object`: Eine ID eines anderen {{HTMLElement("object")}} im selben Dokument.

## Technische Übersicht

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
      <td>Keiner; es ist ein {{Glossary("void_element", "leeres Element")}}.</td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Es muss ein Start-Tag haben und darf keinen End-Tag haben.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Ein {{HTMLElement("object")}}, vor jedem
        <a href="/de/docs/Web/HTML/Content_categories#flow_content"
          >Fluss-Inhalt</a
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
