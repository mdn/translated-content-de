---
title: "`<param>` HTML Objekt-Parameter-Element"
short-title: <param>
slug: Web/HTML/Reference/Elements/param
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

Das **`<param>`** [HTML](/de/docs/Web/HTML) Element definiert Parameter für ein {{HTMLElement("object")}} Element.

> [!NOTE]
> Verwenden Sie das {{HTMLElement("object")}} Element mit einem [`data`](/de/docs/Web/HTML/Reference/Elements/object#data) Attribut, um die URL einer externen Ressource festzulegen.

## Attribute

Dieses Element enthält die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `name` {{deprecated_inline}} {{non-standard_inline}}
  - : Name des Parameters.
- `value` {{deprecated_inline}} {{non-standard_inline}}
  - : Gibt den Wert des Parameters an.
- `type` {{deprecated_inline}} {{non-standard_inline}}
  - : Nur verwendet, wenn `valuetype` auf `ref` gesetzt ist. Gibt den MIME-Typ der Werte an, die unter der durch `value` angegebenen URI gefunden werden.
- `valuetype` {{deprecated_inline}} {{non-standard_inline}}
  - : Gibt den Typ des `value` Attributs an. Mögliche Werte sind:
    - `data`: Standardwert. Der Wert wird als Zeichenfolge an die Implementierung des Objekts übergeben.
    - `ref`: Der Wert ist eine URI zu einer Ressource, in der zur Laufzeit Werte gespeichert sind.
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
      <td>Kein; es ist ein {{Glossary("void_element", "Void-Element")}}.</td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Muss ein Start-Tag haben und darf keinen End-Tag haben.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Ein {{HTMLElement("object")}} vor jedem
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
