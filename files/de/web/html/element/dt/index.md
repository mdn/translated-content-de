---
title: "<dt>: Das Description Term-Element"
slug: Web/HTML/Element/dt
l10n:
  sourceCommit: 9231a7046973685f4600e1891fa644ecce41ef3b
---

{{HTMLSidebar}}

Das **`<dt>`**-[HTML](/de/docs/Web/HTML)-Element spezifiziert einen Begriff in einer Beschreibungs- oder Definitionsliste und muss daher innerhalb eines {{HTMLElement("dl")}}-Elements verwendet werden. Es wird normalerweise von einem {{HTMLElement("dd")}}-Element gefolgt; jedoch weisen mehrere aufeinanderfolgende `<dt>`-Elemente auf mehrere Begriffe hin, die alle vom unmittelbar folgenden {{HTMLElement("dd")}}-Element definiert werden.

Das nachfolgende {{HTMLElement("dd")}} (**Description Details**) Element bietet die Definition oder andere verwandte Informationen, die mit dem mit `<dt>` spezifizierten Begriff verbunden sind.

{{EmbedInteractiveExample("pages/tabbed/dt.html", "tabbed-standard")}}

## Attribute

Dieses Element beinhaltet nur die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

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
        {{HTMLElement("footer")}}, Abschnitts- oder Überschrifteninhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>
        Das Start-Tag ist erforderlich. Das End-Tag kann weggelassen werden, wenn dieses Element
        unmittelbar von einem anderen <code>&#x3C;dt></code>-Element oder einem
        {{HTMLElement("dd")}}-Element gefolgt wird oder wenn kein weiterer Inhalt im
        Elternelement vorhanden ist.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Ein {{HTMLElement("dl")}} oder (in [WHATWG](/de/docs/Glossary/WHATWG) HTML,
        [W3C](/de/docs/Glossary/W3C) HTML 5.2 und später) ein
        {{HTMLElement("div")}}, das ein Kind eines
        {{HTMLElement("dl")}} ist.<br />Dieses Element kann vor einem
        {{HTMLElement("dd")}} oder einem anderen <code>&lt;dt&gt;</code>
        Element verwendet werden.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
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
        [`HTMLElement`](/de/docs/Web/API/HTMLElement) Bis zu Gecko 1.9.2 (inklusive Firefox 4) implementiert Firefox die
        [`HTMLSpanElement`](/de/docs/Web/API/HTMLSpanElement)-Schnittstelle für dieses Element.
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
