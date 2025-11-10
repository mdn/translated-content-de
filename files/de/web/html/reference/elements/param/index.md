---
title: "<param>: Das Objekt-Parameter-Element"
slug: Web/HTML/Reference/Elements/param
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

{{Deprecated_Header}}

Das **`<param>`** [HTML](/de/docs/Web/HTML) Element definiert Parameter für ein {{HTMLElement("object")}} Element.

> [!NOTE]
> Verwenden Sie das {{HTMLElement("object")}} Element mit einem [`data`](/de/docs/Web/HTML/Reference/Elements/object#data) Attribut, um die URL einer externen Ressource festzulegen.

## Attribute

Dieses Element beinhaltet die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `name` {{deprecated_inline}}
  - : Name des Parameters.
- `value` {{deprecated_inline}}
  - : Gibt den Wert des Parameters an.
- `type` {{deprecated_inline}}
  - : Wird nur verwendet, wenn `valuetype` auf `ref` gesetzt ist. Gibt den MIME-Typ der Werte an, die sich an der durch den Wert spezifizierten URI befinden.
- `valuetype` {{deprecated_inline}}
  - : Gibt den Typ des `value` Attributs an. Mögliche Werte sind:
    - `data`: Standardwert. Der Wert wird an die Implementierung des Objekts als Zeichenkette übergeben.
    - `ref`: Der Wert ist eine URI zu einer Ressource, in der Laufzeitwerte gespeichert sind.
    - `object`: Eine ID eines anderen {{HTMLElement("object")}} im gleichen Dokument.

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
      <td>Keine; es ist ein {{Glossary("void_element", "leeres Element")}}.</td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Muss ein Starttag haben und darf keinen Endtag haben.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern-Elemente</th>
      <td>
        Ein {{HTMLElement("object")}} vor jeglichem
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content"
          >Flussinhalt</a
        >.
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
      <td>Kein <code>role</code> erlaubt</td>
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
