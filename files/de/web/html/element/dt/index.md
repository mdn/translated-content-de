---
title: "<dt>: Das Beschreibungsbegriffelement"
slug: Web/HTML/Element/dt
l10n:
  sourceCommit: 9231a7046973685f4600e1891fa644ecce41ef3b
---

{{HTMLSidebar}}

Das **`<dt>`** [HTML](/de/docs/Web/HTML)-Element spezifiziert einen Begriff in einer Beschreibung oder Definitionsliste und muss daher in einem {{HTMLElement("dl")}}-Element verwendet werden. Es wird normalerweise von einem {{HTMLElement("dd")}}-Element gefolgt; mehrere `<dt>`-Elemente in Folge weisen jedoch auf mehrere Begriffe hin, die alle durch das unmittelbar folgende {{HTMLElement("dd")}}-Element definiert werden.

Das nachfolgende {{HTMLElement("dd")}} (**Description Details**) Element bietet die Definition oder andere verwandte Texte, die mit dem mittels `<dt>` spezifizierten Begriff assoziiert sind.

{{EmbedInteractiveExample("pages/tabbed/dt.html", "tabbed-standard")}}

## Attribute

Dieses Element umfasst nur die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

## Beispiele

Für Beispiele siehe die [bereitgestellten Beispiele für das `<dl>`-Element](/de/docs/Web/HTML/Element/dl#examples).

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
        >, jedoch ohne {{HTMLElement("header")}},
        {{HTMLElement("footer")}}, Gliederungs- oder Überschrifteninhalt
        als Nachfahren.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>
        Der Start-Tag ist erforderlich. Der End-Tag kann weggelassen werden, wenn dieses Element
        unmittelbar von einem anderen <code>&#x3C;dt></code>-Element oder einem
        {{HTMLElement("dd")}}-Element gefolgt wird oder wenn kein weiterer Inhalt im
        Elternelement vorhanden ist.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Ein {{HTMLElement("dl")}} oder (in {{Glossary("WHATWG")}} HTML,
        {{Glossary("W3C")}} HTML 5.2 und später) ein
        {{HTMLElement("div")}}, das ein Kind eines
        {{HTMLElement("dl")}} ist.<br />Dieses Element kann vor einem
        {{HTMLElement("dd")}} oder einem anderen <code>&lt;dt&gt;</code>
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
        {{domxref("HTMLElement")}} Bis einschließlich Gecko 1.9.2 (Firefox 4)
        implementiert Firefox die
        {{domxref("HTMLSpanElement")}} Schnittstelle für dieses Element.
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
