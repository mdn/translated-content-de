---
title: "<address>: Das Kontaktadressen-Element"
slug: Web/HTML/Element/address
l10n:
  sourceCommit: 8b02826c79b090b5af0d68ae1ef39f932a66a7f1
---

{{HTMLSidebar}}

Das **`<address>`** [HTML](/de/docs/Web/HTML)-Element zeigt an, dass die darin enthaltene HTML-Kontaktinformationen für eine Person oder Personen oder für eine Organisation bereitstellt.

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

Die von einem `<address>`-Element bereitgestellten Kontaktinformationen können in jeder form für den Kontext geeignet sein und können jegliche Art von benötigten Kontaktinformationen enthalten, wie z.B. eine physikalische Adresse, URL, E-Mail-Adresse, Telefonnummer, Social Media-Handle, geografische Koordinaten und so weiter. Das `<address>`-Element sollte den Namen der Person, Personen oder Organisation enthalten, auf die sich die Kontaktinformationen beziehen.

`<address>` kann in einer Vielzahl von Kontexten verwendet werden, wie z.B. Bereitstellung von Kontaktinformationen eines Unternehmens im Seitenkopf oder Angabe des Autors eines Artikels durch Einfügen eines `<address>`-Elements innerhalb des {{HTMLElement("article")}}.

## Attribute

Dieses Element enthält nur die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

## Nutzungshinweise

- Das `<address>`-Element kann nur verwendet werden, um die Kontaktinformationen für sein nächstes {{HTMLElement("article")}}- oder {{HTMLElement("body")}}-Element als Vorfahren darzustellen.
- Dieses Element sollte nicht mehr Informationen als die Kontaktinformationen enthalten, wie z.B. ein Veröffentlichungsdatum (das gehört in ein {{HTMLElement("time")}}-Element).
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

Obwohl es den Text mit demselben Standardstil wie die {{HTMLElement("i")}}- oder {{HTMLElement("em")}}-Elemente rendert, ist es angemessener, `<address>` zu verwenden, wenn es um Kontaktinformationen geht, da es zusätzliche semantische Informationen vermittelt.

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
          >Fließende Inhalte</a
        >, greifbare Inhalte.
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässiger Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#flow_content"
          >Fließende Inhalte</a
        >, aber ohne verschachtelte <code>&#x3C;address></code>-Elemente, keine
        Überschrifteninhalte ({{HTMLElement("hgroup")}}, {{HTMLElement("Heading_Elements", "h1")}},
        {{HTMLElement("Heading_Elements", "h2")}}, {{HTMLElement("Heading_Elements", "h3")}},
        {{HTMLElement("Heading_Elements", "h4")}}, {{HTMLElement("Heading_Elements", "h5")}},
        {{HTMLElement("Heading_Elements", "h6")}}), keine Abschnittsinhalte
        ({{HTMLElement("article")}}, {{HTMLElement("aside")}},
        {{HTMLElement("section")}}, {{HTMLElement("nav")}}), und
        keine {{HTMLElement("header")}} oder {{HTMLElement("footer")}}
        Elemente.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das Start- als auch das Endzeichen sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#flow_content"
          >fließende Inhalte</a
        > akzeptiert, jedoch immer ohne <code>&#x3C;address></code>-Elemente
        (nach dem logischen Prinzip der Symmetrie kann, wenn
        <code>&#x3C;address></code> als übergeordnetes Element keine verschachtelten
        <code>&#x3C;address></code>-Elemente enthalten kann, dasselbe
        <code>&#x3C;address></code> kein <code>&#x3C;address></code>-Tag als
        übergeordneten Element enthalten).
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
      <td>Beliebige</td>
    </tr>
    <tr>
      <th scope="row">DOM-Schnittstelle</th>
      <td>
        [`HTMLElement`](/de/docs/Web/API/HTMLElement) Vor Gecko 2.0 (Firefox 4) implementierte Gecko dieses Element unter Verwendung der
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
