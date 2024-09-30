---
title: "<legend>: Das Legenden-Element für Fieldsets"
slug: Web/HTML/Element/legend
l10n:
  sourceCommit: fdd3ac5598c3ddceb71e59949b003936ae99f647
---

{{HTMLSidebar}}

Das **`<legend>`** [HTML](/de/docs/Web/HTML) Element repräsentiert eine Beschriftung für den Inhalt des übergeordneten {{HTMLElement("fieldset")}}.

{{EmbedInteractiveExample("pages/tabbed/legend.html", "tabbed-standard")}}

## Attribute

Dieses Element enthält nur die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

## Beispiele

Siehe {{HTMLElement("form")}} für Beispiele zu `<legend>`.

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Content_categories"
          >Inhaltskategorien</a>
      </th>
      <td>Keine.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasierung</a>
        und
        <a href="/de/docs/Web/HTML/Element/Heading_Elements">Überschriften</a>
        (h1–h6 Elemente).
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl der startende als auch der endende Tag sind verpflichtend.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Ein {{HTMLElement("fieldset")}}, dessen erstes Kind dieses
        <code>&#x3C;legend></code>-Element ist
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role"
          >Keine entsprechende Rolle</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA-Rollen</th>
      <td>Keine <code>role</code> erlaubt</td>
    </tr>
    <tr>
      <th scope="row">DOM-Schnittstelle</th>
      <td>[`HTMLLegendElement`](/de/docs/Web/API/HTMLLegendElement)</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [ARIA: Form role](/de/docs/Web/Accessibility/ARIA/Roles/form_role)
