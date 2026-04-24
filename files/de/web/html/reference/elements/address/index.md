---
title: "`<address>` HTML-Kontaktadressenelement"
short-title: <address>
slug: Web/HTML/Reference/Elements/address
l10n:
  sourceCommit: 599ae8b7ad414e91df473d91983f4ffc5cafabb3
---

Das **`<address>`**-[HTML](/de/docs/Web/HTML)-Element gibt an, dass das eingeschlossene HTML Kontaktinformationen für eine Person oder Personen oder für eine Organisation bereitstellt.

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

Die von den Inhalten eines `<address>`-Elements bereitgestellten Kontaktinformationen können jede Form annehmen, die für den Kontext angemessen ist, und können jede Art von Kontaktinformation enthalten, die benötigt wird, wie z. B. eine physische Adresse, URL, E-Mail-Adresse, Telefonnummer, Social-Media-Kennung, geografische Koordinaten und so weiter. Das `<address>`-Element sollte den Namen der Person, der Personen oder der Organisation enthalten, auf die sich die Kontaktinformationen beziehen.

`<address>` kann in verschiedenen Kontexten verwendet werden, wie z. B. bei der Bereitstellung von Geschäftskontaktinformationen im Seitenkopf oder zur Angabe des Autors eines Artikels, indem ein `<address>`-Element innerhalb des {{HTMLElement("article")}} enthalten ist.

## Attribute

Dieses Element beinhaltet nur die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

## Verwendungshinweise

- Das `<address>`-Element kann nur für die Darstellung der Kontaktinformationen seines nächstgelegenen {{HTMLElement("article")}}- oder {{HTMLElement("body")}}-Element-Vorfahren verwendet werden.
- Dieses Element sollte nicht mehr Informationen als die Kontaktinformationen enthalten, wie z. B. ein Veröffentlichungsdatum (das in ein {{HTMLElement("time")}}-Element gehört).
- Typischerweise kann ein `<address>`-Element innerhalb des {{HTMLElement("footer")}}-Elements des aktuellen Abschnitts platziert werden, falls vorhanden.

## Beispiele

Dieses Beispiel demonstriert die Verwendung von `<address>`, um die Kontaktinformationen des Autors eines Artikels abzugrenzen.

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

Obwohl es Text mit demselben Standardstil wie die {{HTMLElement("i")}}- oder {{HTMLElement("em")}}-Elemente rendert, ist es angemessener, `<address>` zu verwenden, wenn es um Kontaktinformationen geht, da es zusätzliche semantische Informationen vermittelt.

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
          >Fließender Inhalt</a
        >, greifbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content"
          >Fließender Inhalt</a
        >, jedoch ohne verschachtelte <code>&#x3C;address></code>-Elemente, keine Überschrifteninhalte ({{HTMLElement("hgroup")}}, {{HTMLElement("Heading_Elements", "h1")}},
        {{HTMLElement("Heading_Elements", "h2")}}, {{HTMLElement("Heading_Elements", "h3")}},
        {{HTMLElement("Heading_Elements", "h4")}}, {{HTMLElement("Heading_Elements", "h5")}},
        {{HTMLElement("Heading_Elements", "h6")}}), keine Abschnittsinhalte
        ({{HTMLElement("article")}}, {{HTMLElement("aside")}},
        {{HTMLElement("section")}}, {{HTMLElement("nav")}}), und
        kein {{HTMLElement("header")}} oder {{HTMLElement("footer")}}
        Element.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das öffnende als auch das schließende Tag sind erforderlich.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content"
          >fließenden Inhalt</a
        > akzeptiert, jedoch stets ohne <code>&#x3C;address></code>-Elemente (gemäß
        dem logischen Symmetrieprinzip kann ein
        <code>&#x3C;address></code>-Tag, als Elternteil, kein verschachteltes
        <code>&#x3C;address></code>-Element haben, dann kann derselbe
        <code>&#x3C;address></code>-Inhalt auch kein
        <code>&#x3C;address></code>-Tag als Eltern haben).
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
- [Abschnitte und Umrisse eines HTML-Dokuments](/de/docs/Web/HTML/Reference/Elements/Heading_Elements).
