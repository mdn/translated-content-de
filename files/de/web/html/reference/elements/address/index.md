---
title: "<address>: Das Kontaktadressenelement"
slug: Web/HTML/Reference/Elements/address
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar}}

Das **`<address>`** [HTML](/de/docs/Web/HTML)-Element zeigt an, dass die eingeschlossenen HTML-Inhalte Kontaktinformationen für eine Person oder Personen oder eine Organisation bereitstellen.

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

Die von den Inhalten eines `<address>`-Elements bereitgestellten Kontaktinformationen können in jeder für den Kontext geeigneten Form vorliegen und dürfen jede Art von benötigten Kontaktinformationen enthalten, wie z.B. eine physische Adresse, URL, E-Mail-Adresse, Telefonnummer, Social Media Handle, geografische Koordinaten und so weiter. Das `<address>`-Element sollte den Namen der Person, Personen oder Organisation enthalten, auf die sich die Kontaktinformationen beziehen.

`<address>` kann in verschiedenen Kontexten verwendet werden, wie z.B. zur Bereitstellung von Kontaktinformationen eines Unternehmens im Seitenkopf oder zur Angabe des Autors eines Artikels, indem ein `<address>`-Element innerhalb des {{HTMLElement("article")}}-Elements eingefügt wird.

## Attribute

Dieses Element enthält nur die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

## Nutzungshinweise

- Das `<address>`-Element kann nur verwendet werden, um die Kontaktinformationen für seinen nächsten {{HTMLElement("article")}}- oder {{HTMLElement("body")}}-Element-Vorfahren darzustellen.
- Dieses Element sollte nicht mehr Informationen als die Kontaktinformationen enthalten, wie z.B. ein Veröffentlichungsdatum (welches in ein {{HTMLElement("time")}}-Element gehört).
- Typischerweise kann ein `<address>`-Element innerhalb des {{HTMLElement("footer")}}-Elements des aktuellen Abschnitts platziert werden, wenn einer vorhanden ist.

## Beispiele

Dieses Beispiel zeigt die Verwendung von `<address>` zur Markierung der Kontaktinformationen für den Autor eines Artikels.

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

Obwohl es Text mit der gleichen Standardformatierung wie die Elemente {{HTMLElement("i")}} oder {{HTMLElement("em")}} darstellt, ist es bei der Behandlung von Kontaktinformationen angemessener, `<address>` zu verwenden, da es zusätzliche semantische Informationen vermittelt.

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
          >Flussinhalt</a
        >, fühlbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content"
          >Flussinhalt</a
        >, jedoch ohne verschachteltes <code>&#x3C;address></code>-Element, keiner Überschrift
        ({{HTMLElement("hgroup")}}, {{HTMLElement("Heading_Elements", "h1")}},
        {{HTMLElement("Heading_Elements", "h2")}}, {{HTMLElement("Heading_Elements", "h3")}},
        {{HTMLElement("Heading_Elements", "h4")}}, {{HTMLElement("Heading_Elements", "h5")}},
        {{HTMLElement("Heading_Elements", "h6")}}), keiner Abschnittsinhalte
        ({{HTMLElement("article")}}, {{HTMLElement("aside")}},
        {{HTMLElement("section")}}, {{HTMLElement("nav")}}), und
        kein {{HTMLElement("header")}} oder {{HTMLElement("footer")}}
        -Element.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Weglassen</th>
      <td>Keine, sowohl das öffnende als auch das schließende Tag sind zwingend erforderlich.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content"
          >Flussinhalt</a
        > akzeptiert, jedoch immer ohne <code>&#x3C;address></code>-Elemente (gemäß
        dem logischen Prinzip der Symmetrie kann, wenn
        <code>&#x3C;address></code>-Tag als Elternteil keine verschachtelten
        <code>&#x3C;address></code>-Elemente haben kann, der gleiche
        <code>&#x3C;address></code>-Inhalt kein
        <code>&#x3C;address></code>-Tag als Elternteil haben).
      </td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
      <td>
        <code
          ><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/group_role"
            >group</a
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
        [`HTMLSpanElement`](/de/docs/Web/API/HTMLSpanElement) Schnittstelle
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
- [Abschnitte und Gliederungen eines HTML-Dokuments](/de/docs/Web/HTML/Reference/Elements/Heading_Elements).
