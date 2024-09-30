---
title: "<address>: Das Kontaktadressenelement"
slug: Web/HTML/Element/address
l10n:
  sourceCommit: fdd3ac5598c3ddceb71e59949b003936ae99f647
---

{{HTMLSidebar}}

Das **`<address>`** [HTML](/de/docs/Web/HTML)-Element gibt an, dass das eingeschlossene HTML Kontaktinformationen für eine Person oder Personen oder für eine Organisation bereitstellt.

{{EmbedInteractiveExample("pages/tabbed/address.html", "tabbed-standard")}}

Die vom Inhalt eines `<address>`-Elements bereitgestellten Kontaktinformationen können in jeglicher Form vorliegen, die für den Kontext angemessen ist, und können jede Art von benötigten Kontaktinformationen enthalten, wie z.B. eine physische Adresse, URL, E-Mail-Adresse, Telefonnummer, Social-Media-Handle, geografische Koordinaten usw. Das `<address>`-Element sollte den Namen der Person, der Personen oder der Organisation enthalten, auf die sich die Kontaktinformationen beziehen.

`<address>` kann in verschiedenen Kontexten verwendet werden, z.B. um die Kontaktinformationen eines Unternehmens im Seitenkopf bereitzustellen oder um den Autor eines Artikels zu kennzeichnen, indem ein `<address>`-Element im {{HTMLElement("article")}} enthalten ist.

## Attribute

Dieses Element enthält nur die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

## Nutzungshinweise

- Das `<address>`-Element kann nur verwendet werden, um die Kontaktinformationen für sein nächstliegendes Vorfahrenelement {{HTMLElement("article")}} oder {{HTMLElement("body")}} darzustellen.
- Dieses Element sollte keine Informationen enthalten, die über die Kontaktinformationen hinausgehen, wie z.B. ein Veröffentlichungsdatum (das in ein {{HTMLElement("time")}} Element gehört).
- Typischerweise kann ein `<address>`-Element innerhalb des {{HTMLElement("footer")}}-Elements des aktuellen Abschnitts platziert werden, sofern vorhanden.

## Beispiele

Dieses Beispiel zeigt die Verwendung von `<address>`, um die Kontaktinformationen für den Autor eines Artikels zu kennzeichnen.

```html
<address>
  You can contact author at
  <a href="http://www.example.com/contact">www.example.com</a>.<br />
  If you see any bugs, please
  <a href="mailto:webmaster@example.com">contact webmaster</a>.<br />
  You may also want to visit us:<br />
  Mozilla Foundation<br />
  331 E Evelyn Ave<br />
  Mountain View, CA 94041<br />
  USA
</address>
```

### Ergebnis

{{EmbedLiveSample("Examples", "300", "200")}}

Obwohl es Text mit derselben Standardformatierung wie die {{HTMLElement("i")}}- oder {{HTMLElement("em")}}-Elemente rendert, ist es angemessener, `<address>` zu verwenden, wenn es um Kontaktinformationen geht, da es zusätzliche semantische Informationen vermittelt.

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Content_categories"
          >Inhaltskategorien</a
        >
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#flow_content"
          >Fluss-Inhalt</a
        >, greifbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Inhalte</th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#flow_content"
          >Fluss-Inhalt</a
        >, aber ohne verschachtelte <code>&#x3C;address></code>-Elemente, keine
        Überschriften-Inhalte ({{HTMLElement("hgroup")}}, {{HTMLElement("Heading_Elements", "h1")}},
        {{HTMLElement("Heading_Elements", "h2")}}, {{HTMLElement("Heading_Elements", "h3")}},
        {{HTMLElement("Heading_Elements", "h4")}}, {{HTMLElement("Heading_Elements", "h5")}},
        {{HTMLElement("Heading_Elements", "h6")}}), keine Gliederungsinhalte
        ({{HTMLElement("article")}}, {{HTMLElement("aside")}},
        {{HTMLElement("section")}}, {{HTMLElement("nav")}}), und
        kein {{HTMLElement("header")}} oder {{HTMLElement("footer")}}
        Element.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl der Anfangs- als auch der End-Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#flow_content"
          >Fluss-Inhalt</a
        > akzeptiert, aber immer ausgenommen <code>&#x3C;address></code>-Elemente (nach
        dem logischen Symmetrieprinzip, wenn
        das <code>&#x3C;address></code>-Tag, als Eltern, kein verschachteltes
        <code>&#x3C;address></code>-Element haben kann, dann kann derselbe
        <code>&#x3C;address></code>-Inhalt nicht
        <code>&#x3C;address></code>-Tag als Eltern haben).
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <code
          ><a href="/de/docs/Web/Accessibility/ARIA/Roles/group_role"
            >Gruppe</a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA-Rollen</th>
      <td>Beliebig</td>
    </tr>
    <tr>
      <th scope="row">DOM-Schnittstelle</th>
      <td>
        [`HTMLElement`](/de/docs/Web/API/HTMLElement) Vor Gecko 2.0 (Firefox 4),
        implementierte Gecko dieses Element mit der
        [`HTMLSpanElement`](/de/docs/Web/API/HTMLSpanElement)-Schnittstelle
      </td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Andere abschnittsbezogene Elemente: {{HTMLElement("body")}}, {{HTMLElement("nav")}}, {{HTMLElement("article")}}, {{HTMLElement("aside")}}, {{HTMLElement("Heading_Elements", "h1")}}, {{HTMLElement("Heading_Elements", "h2")}}, {{HTMLElement("Heading_Elements", "h3")}}, {{HTMLElement("Heading_Elements", "h4")}}, {{HTMLElement("Heading_Elements", "h5")}}, {{HTMLElement("Heading_Elements", "h6")}}, {{HTMLElement("hgroup")}}, {{HTMLElement("footer")}}, {{HTMLElement("section")}}, {{HTMLElement("header")}};
- [Abschnitte und Umrisse eines HTML-Dokuments](/de/docs/Web/HTML/Element/Heading_Elements).
