---
title: "`<address>` HTML Kontaktadressenelement"
short-title: <address>
slug: Web/HTML/Reference/Elements/address
l10n:
  sourceCommit: c9f3d85f24d7839c9fe36a68d8042d088d906147
---

Das **`<address>`** [HTML](/de/docs/Web/HTML)-Element zeigt an, dass der eingeschlossene HTML-Code Kontaktinformationen für eine Person oder Personen oder für eine Organisation bereitstellt.

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

Die durch den Inhalt eines `<address>`-Elements bereitgestellten Kontaktinformationen können in jeder für den Kontext geeigneten Form vorliegen und können alle erforderlichen Arten von Kontaktinformationen enthalten, wie z. B. eine physische Adresse, URL, E-Mail-Adresse, Telefonnummer, Social-Media-Kennung, geografische Koordinaten und so weiter. Das `<address>`-Element sollte den Namen der Person, der Personen oder der Organisation enthalten, auf die sich die Kontaktinformationen beziehen.

`<address>` kann in verschiedenen Kontexten verwendet werden, beispielsweise um die Kontaktinformationen eines Unternehmens im Seitenkopf anzugeben oder den Autor eines Artikels durch Einfügen eines `<address>`-Elements innerhalb des {{HTMLElement("article")}} hervorzuheben.

## Attribute

Dieses Element enthält nur die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

## Nutzungshinweise

- Das `<address>`-Element kann nur verwendet werden, um die Kontaktinformationen seines nächsten {{HTMLElement("article")}}- oder {{HTMLElement("body")}}-Element-Vorfahren darzustellen.
- Dieses Element sollte nicht mehr Informationen enthalten als die Kontaktinformationen, wie ein Veröffentlichungsdatum (das in ein {{HTMLElement("time")}}-Element gehört).
- Typischerweise kann ein `<address>`-Element innerhalb des {{HTMLElement("footer")}}-Elements des aktuellen Abschnitts platziert werden, falls vorhanden.

## Beispiele

Dieses Beispiel demonstriert die Verwendung von `<address>`, um die Kontaktinformationen des Autors eines Artikels zu kennzeichnen.

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

{{EmbedLiveSample("Beispiele", "300", "200")}}

Obwohl es Text mit derselben Standardformatierung wie die {{HTMLElement("i")}}- oder {{HTMLElement("em")}}-Elemente rendert, ist es angemessener, `<address>` bei der Bearbeitung von Kontaktinformationen zu verwenden, da es zusätzliche semantische Informationen vermittelt.

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Guides/Content_categories"
          >Inhaltskategorien</a
        >
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content"
          >Flow content</a
        >, spürbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässiger Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content"
          >Flow content</a
        >, jedoch ohne verschachteltes <code>&#x3C;address></code>-Element, ohne
        Überschrifteninhalt ({{HTMLElement("hgroup")}}, {{HTMLElement("Heading_Elements", "h1")}},
        {{HTMLElement("Heading_Elements", "h2")}}, {{HTMLElement("Heading_Elements", "h3")}},
        {{HTMLElement("Heading_Elements", "h4")}}, {{HTMLElement("Heading_Elements", "h5")}},
        {{HTMLElement("Heading_Elements", "h6")}}), ohne Gliederungselemente
        ({{HTMLElement("article")}}, {{HTMLElement("aside")}},
        {{HTMLElement("section")}}, {{HTMLElement("nav")}}) und
        ohne {{HTMLElement("header")}} oder {{HTMLElement("footer")}}-Element.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl der Start- als auch der End-Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Zulässige Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content"
          >flow content</a
        > akzeptiert, jedoch immer <code>&#x3C;address></code>-Elemente
        ausschließend (nach dem logischen Prinzip der Symmetrie: wenn
        <code>&#x3C;address></code>-Tag als Elternteil kein verschachteltes
        <code>&#x3C;address></code>-Element haben kann, dann kann
        derselbe <code>&#x3C;address></code>-Inhalt kein
        <code>&#x3C;address></code>-Tag als Elternteil haben).
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <code
          ><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/group_role"
            >group</a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässige ARIA-Rollen</th>
      <td>Jede</td>
    </tr>
    <tr>
      <th scope="row">DOM-Schnittstelle</th>
      <td>
        [`HTMLElement`](/de/docs/Web/API/HTMLElement) Vor Gecko 2.0 (Firefox 4)
        implementierte Gecko dieses Element mithilfe der
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

- Andere artikelbezogene Elemente: {{HTMLElement("body")}}, {{HTMLElement("nav")}}, {{HTMLElement("article")}}, {{HTMLElement("aside")}}, {{HTMLElement("Heading_Elements", "h1")}}, {{HTMLElement("Heading_Elements", "h2")}}, {{HTMLElement("Heading_Elements", "h3")}}, {{HTMLElement("Heading_Elements", "h4")}}, {{HTMLElement("Heading_Elements", "h5")}}, {{HTMLElement("Heading_Elements", "h6")}}, {{HTMLElement("hgroup")}}, {{HTMLElement("footer")}}, {{HTMLElement("section")}}, {{HTMLElement("header")}};
- [Abschnitte und Gliederungen eines HTML-Dokuments](/de/docs/Web/HTML/Reference/Elements/Heading_Elements).
