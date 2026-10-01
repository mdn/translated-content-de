---
title: "`<address>`: HTML-Element für Kontaktinformationen"
short-title: <address>
slug: Web/HTML/Reference/Elements/address
l10n:
  sourceCommit: bcb7d4dde9f0a43664c64587d9d70b8835286eb7
---

Das **`<address>`**-Element von [HTML](/de/docs/Web/HTML) kennzeichnet Kontaktinformationen zu einer Person, mehreren Personen oder einer Organisation.

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

## Attribute

Dieses Element unterstützt nur die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

## Verwendungshinweise

Die Kontaktinformationen innerhalb eines `<address>`-Elements können jede für den jeweiligen Kontext geeignete Form annehmen. Dazu gehören beispielsweise eine Postanschrift, eine URL, eine E-Mail-Adresse, eine Telefonnummer, ein Social-Media-Benutzername oder geografische Koordinaten. Das `<address>`-Element sollte den Namen der Person, der Personen oder der Organisation enthalten, auf die sich die Kontaktinformationen beziehen. Es sollte jedoch keine darüber hinausgehenden Angaben enthalten, etwa ein Veröffentlichungsdatum (dieses gehört in ein {{HTMLElement("time")}}-Element).

`<address>` kann in verschiedenen Kontexten verwendet werden: beispielsweise, um im Seitenkopf die Kontaktinformationen eines Unternehmens anzugeben oder innerhalb eines {{HTMLElement("article")}}-Elements den Autor eines Artikels zu kennzeichnen. Das `<address>`-Element darf nur die Kontaktinformationen für das nächstgelegene übergeordnete {{HTMLElement("article")}}- oder {{HTMLElement("body")}}-Element darstellen. Üblicherweise kann ein `<address>`-Element im {{HTMLElement("footer")}}-Element des aktuellen Abschnitts platziert werden, sofern ein solches vorhanden ist.

## Beispiele

Dieses Beispiel zeigt, wie `<address>` die Kontaktinformationen des Autors eines Artikels kennzeichnet.

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

Obwohl der Text standardmäßig genauso dargestellt wird wie bei den Elementen {{HTMLElement("i")}} und {{HTMLElement("em")}}, ist `<address>` für Kontaktinformationen besser geeignet, da es zusätzliche semantische Informationen vermittelt.

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
        >, wahrnehmbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässiger Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content"
          >Flussinhalt</a
        >, jedoch ohne verschachtelte <code>&#x3C;address></code>-Elemente,
        ohne Überschrifteninhalt ({{HTMLElement("hgroup")}}, {{HTMLElement("Heading_Elements", "h1")}},
        {{HTMLElement("Heading_Elements", "h2")}}, {{HTMLElement("Heading_Elements", "h3")}},
        {{HTMLElement("Heading_Elements", "h4")}}, {{HTMLElement("Heading_Elements", "h5")}},
        {{HTMLElement("Heading_Elements", "h6")}}), ohne gliedernden Inhalt
        ({{HTMLElement("article")}}, {{HTMLElement("aside")}},
        {{HTMLElement("section")}}, {{HTMLElement("nav")}}) und
        ohne {{HTMLElement("header")}}- oder {{HTMLElement("footer")}}-Element.
      </td>
    </tr>
    <tr>
      <th scope="row">Auslassen von Tags</th>
      <td>Nicht zulässig; sowohl das Start- als auch das End-Tag sind erforderlich.</td>
    </tr>
    <tr>
      <th scope="row">Zulässige Elternelemente</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content"
          >Flussinhalt</a
        > akzeptiert, mit Ausnahme von <code>&#x3C;address></code>-Elementen.
        Dies folgt aus dem Symmetrieprinzip: Da ein <code>&#x3C;address></code>-Element
        als Elternelement kein weiteres <code>&#x3C;address></code>-Element
        enthalten darf, kann ein <code>&#x3C;address></code>-Element auch kein
        <code>&#x3C;address></code>-Element als Elternelement haben.
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
      <td>Alle</td>
    </tr>
    <tr>
      <th scope="row">DOM-Schnittstelle</th>
      <td>
        [`HTMLElement`](/de/docs/Web/API/HTMLElement). Vor Gecko 2.0 (Firefox 4)
        implementierte Gecko dieses Element über die
        [`HTMLSpanElement`](/de/docs/Web/API/HTMLSpanElement)-Schnittstelle.
      </td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Weitere Elemente zur Gliederung: {{HTMLElement("body")}}, {{HTMLElement("nav")}}, {{HTMLElement("article")}}, {{HTMLElement("aside")}}, {{HTMLElement("Heading_Elements", "h1")}}, {{HTMLElement("Heading_Elements", "h2")}}, {{HTMLElement("Heading_Elements", "h3")}}, {{HTMLElement("Heading_Elements", "h4")}}, {{HTMLElement("Heading_Elements", "h5")}}, {{HTMLElement("Heading_Elements", "h6")}}, {{HTMLElement("hgroup")}}, {{HTMLElement("footer")}}, {{HTMLElement("section")}}, {{HTMLElement("header")}}
- [Abschnitte und Gliederung eines HTML-Dokuments](/de/docs/Web/HTML/Reference/Elements/Heading_Elements)
