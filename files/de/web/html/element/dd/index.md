---
title: "<dd>: Das Beschreibungselement"
slug: Web/HTML/Element/dd
l10n:
  sourceCommit: 9231a7046973685f4600e1891fa644ecce41ef3b
---

{{HTMLSidebar}}

Das **`<dd>`** [HTML](/de/docs/Web/HTML)-Element liefert die Beschreibung, Definition oder den Wert für den vorangehenden Begriff ({{HTMLElement("dt")}}) in einer Definitionsliste ({{HTMLElement("dl")}}).

{{EmbedInteractiveExample("pages/tabbed/dd.html", "tabbed-standard")}}

## Attribute

Dieses Element enthält nur die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

## Beispiele

Für Beispiele siehe die [bereitgestellten Beispiele für das `<dl>`-Element](/de/docs/Web/HTML/Element/dl#examples).

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
      <th scope="row">Erlaubte Inhalte</th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#flow_content"
          >Flussinhalt</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>
        Das Start-Tag ist erforderlich. Das End-Tag darf weggelassen werden, wenn dieses Element unmittelbar gefolgt wird von einem weiteren <code>&#x3C;dd></code>-Element oder einem {{HTMLElement("dt")}}-Element, oder wenn es keinen weiteren Inhalt im Elternelement gibt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Ein {{HTMLElement("dl")}} oder ein
        {{HTMLElement("div")}}, das ein Kind von
        einem {{HTMLElement("dl")}} ist.<br />Dieses Element kann nach einem
        {{HTMLElement("dt")}} oder einem anderen <code>&lt;dd&gt;</code>
        Element verwendet werden.
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
      <td>{{domxref("HTMLElement")}}</td>
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
