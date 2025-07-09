---
title: "<address>: Das Kontaktadresse-Element"
slug: Web/HTML/Reference/Elements/address
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

Das **`<address>`**-[HTML](/de/docs/Web/HTML)-Element gibt an, dass die umschlossenen HTML-Informationen Kontaktdaten für eine Person oder Personen oder für eine Organisation bereitstellen.

{{InteractiveExample("HTML Demo: &lt;address&gt;", "tabbed-standard")}}

```html interactive-example
<p>Contact the author of this page:</p>

<address>
  <a href="mailto:jim@example.com">jim@example.com</a><br />
  <a href="tel:+14155550132">+1 (415) 555‑0132</a>
</address>
```

```css interactive-example
a[href^="mailto"]::before {
  content: "📧 ";
}

a[href^="tel"]::before {
  content: "📞 ";
}
```

Die durch den Inhalt eines `<address>`-Elements bereitgestellten Kontaktdaten können jede für den Kontext angemessene Form annehmen und können jede Art von benötigten Kontaktdaten umfassen, wie z.B. eine physische Adresse, URL, E-Mail-Adresse, Telefonnummer, Social-Media-Handle, geografische Koordinaten und so weiter. Das `<address>`-Element sollte den Namen der Person, der Personen oder der Organisation beinhalten, auf die sich die Kontaktdaten beziehen.

`<address>` kann in verschiedenen Kontexten verwendet werden, wie z.B. die Bereitstellung von Geschäftskontaktinformationen im Seitenkopf oder die Angabe des Autors eines Artikels durch Einfügen eines `<address>`-Elements innerhalb des {{HTMLElement("article")}}.

## Attribute

Dieses Element enthält nur die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

## Verwendungshinweise

- Das `<address>`-Element kann nur verwendet werden, um die Kontaktdaten für sein nächstes {{HTMLElement("article")}}- oder {{HTMLElement("body")}}-Element-Vorfahren darzustellen.
- Dieses Element sollte nicht mehr Informationen als die Kontaktdaten enthalten, wie ein Veröffentlichungsdatum (das gehört in ein {{HTMLElement("time")}}-Element).
- Typischerweise kann ein `<address>`-Element innerhalb des {{HTMLElement("footer")}}-Elements des aktuellen Abschnitts platziert werden, wenn vorhanden.

## Beispiele

Dieses Beispiel zeigt die Verwendung von `<address>`, um die Kontaktdaten des Autors eines Artikels abzugrenzen.

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

Obwohl es Text mit dem gleichen Standard-Styling wie die Elemente {{HTMLElement("i")}} oder {{HTMLElement("em")}} rendert, ist es angemessener, `<address>` bei Kontaktinformationen zu verwenden, da es zusätzliche semantische Informationen vermittelt.

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Guides/Content_categories">Inhaltskategorien</a>
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content">Flussinhalt</a>,
        palpabler Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content">Flussinhalt</a>,
        aber ohne verschachteltes <code>&#x3C;address></code>-Element, kein Überschrifteninhalt
        ({{HTMLElement("hgroup")}}, {{HTMLElement("Heading_Elements", "h1")}},
        {{HTMLElement("Heading_Elements", "h2")}}, {{HTMLElement("Heading_Elements", "h3")}},
        {{HTMLElement("Heading_Elements", "h4")}}, {{HTMLElement("Heading_Elements", "h5")}},
        {{HTMLElement("Heading_Elements", "h6")}}), kein Inhaltsabschnitt
        ({{HTMLElement("article")}}, {{HTMLElement("aside")}},
        {{HTMLElement("section")}}, {{HTMLElement("nav")}}), und
        kein {{HTMLElement("header")}} oder {{HTMLElement("footer")}}-Element.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das Start- als auch das End-Tag sind erforderlich.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content">Flussinhalt</a>
        akzeptiert, jedoch immer unter Ausschluss von <code>&#x3C;address></code>-Elementen
        (gemäß dem logischen Prinzip der Symmetrie, wenn ein <code>&#x3C;address></code>-Tag
        als Elternteil kein verschachteltes <code>&#x3C;address></code>-Element haben kann,
        dann kann derselbe <code>&#x3C;address></code>-Inhalt kein
        <code>&#x3C;address></code>-Tag als Eltern haben).
      </td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
      <td>
        <code><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/group_role">group</a></code>
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA-Rollen</th>
      <td>Jede</td>
    </tr>
    <tr>
      <th scope="row">DOM-Schnittstelle</th>
      <td>
        [`HTMLElement`](/de/docs/Web/API/HTMLElement) Vor Gecko 2.0 (Firefox 4),
        implementierte Gecko dieses Element unter Verwendung der
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

- Andere abschnittbezogene Elemente: {{HTMLElement("body")}}, {{HTMLElement("nav")}}, {{HTMLElement("article")}}, {{HTMLElement("aside")}}, {{HTMLElement("Heading_Elements", "h1")}}, {{HTMLElement("Heading_Elements", "h2")}}, {{HTMLElement("Heading_Elements", "h3")}}, {{HTMLElement("Heading_Elements", "h4")}}, {{HTMLElement("Heading_Elements", "h5")}}, {{HTMLElement("Heading_Elements", "h6")}}, {{HTMLElement("hgroup")}}, {{HTMLElement("footer")}}, {{HTMLElement("section")}}, {{HTMLElement("header")}};
- [Abschnitte und Gliederungen eines HTML-Dokuments](/de/docs/Web/HTML/Reference/Elements/Heading_Elements).
