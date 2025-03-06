---
title: "<address>: Das Kontaktadresse-Element"
slug: Web/HTML/Element/address
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{HTMLSidebar}}

Das **`<address>`**-[HTML](/de/docs/Web/HTML)-Element gibt an, dass der eingeschlossene HTML-Inhalt Kontaktinformationen für eine Person oder Personen oder für eine Organisation bereitstellt.

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

Die durch den Inhalt eines `<address>`-Elements bereitgestellten Kontaktinformationen können in jeder Form vorliegen, die für den Kontext geeignet ist. Sie können jede Art von benötigten Kontaktinformationen enthalten, wie eine physische Adresse, URL, E-Mail-Adresse, Telefonnummer, Social-Media-Handle, geografische Koordinaten usw. Das `<address>`-Element sollte den Namen der Person, Personen oder Organisation enthalten, auf die sich die Kontaktinformationen beziehen.

`<address>` kann in verschiedenen Kontexten verwendet werden, z.B. um die Kontaktdaten eines Unternehmens im Seitenkopf bereitzustellen oder um den Autor eines Artikels anzugeben, indem ein `<address>`-Element innerhalb des {{HTMLElement("article")}} eingefügt wird.

## Attribute

Dieses Element beinhaltet nur die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

## Verwendungshinweise

- Das `<address>`-Element kann nur verwendet werden, um die Kontaktinformationen für sein nächstes übergeordnetes {{HTMLElement("article")}}- oder {{HTMLElement("body")}}-Element darzustellen.
- Dieses Element sollte nicht mehr Informationen enthalten als die Kontaktinformationen, wie ein Veröffentlichungsdatum (das gehört in ein {{HTMLElement("time")}}-Element).
- Typischerweise kann ein `<address>`-Element im {{HTMLElement("footer")}}-Element des aktuellen Abschnitts platziert werden, falls vorhanden.

## Beispiele

Dieses Beispiel demonstriert die Verwendung von `<address>`, um die Kontaktdaten des Artikelautors abzugrenzen.

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

Obwohl es Text mit dem gleichen Standardstil wie die {{HTMLElement("i")}}- oder {{HTMLElement("em")}}-Elemente rendert, ist es angemessener, `<address>` zu verwenden, wenn es um Kontaktinformationen geht, da es zusätzliche semantische Informationen vermittelt.

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
          >Fließender Inhalt</a
        >, greifbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#flow_content"
          >Fließender Inhalt</a
        >, jedoch ohne verschachteltes <code>&#x3C;address></code>-Element, keinen
        Überschrifteninhalt ({{HTMLElement("hgroup")}}, {{HTMLElement("Heading_Elements", "h1")}},
        {{HTMLElement("Heading_Elements", "h2")}}, {{HTMLElement("Heading_Elements", "h3")}},
        {{HTMLElement("Heading_Elements", "h4")}}, {{HTMLElement("Heading_Elements", "h5")}},
        {{HTMLElement("Heading_Elements", "h6")}}), keinen Gliederungsinhalt
        ({{HTMLElement("article")}}, {{HTMLElement("aside")}},
        {{HTMLElement("section")}}, {{HTMLElement("nav")}}), und
        kein {{HTMLElement("header")}} oder {{HTMLElement("footer")}}
        Element.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das Anfangs- als auch das Endtag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Zulässige Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#flow_content"
          >fließenden Inhalt</a
        > akzeptiert, jedoch immer unter Ausschluss von
        <code>&#x3C;address></code>-Elementen (gemäß dem logischen
        Symmetrieprinzip, wenn das
        <code>&#x3C;address></code>-Tag als Elternteil kein verschachteltes
        <code>&#x3C;address></code>-Element haben kann, dann kann auch der gleiche
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
- [Abschnitte und Gliederungen eines HTML-Dokuments](/de/docs/Web/HTML/Element/Heading_Elements).
