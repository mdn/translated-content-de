---
title: "<i>: Das Idiomatische Textelement"
slug: Web/HTML/Element/i
l10n:
  sourceCommit: fdd3ac5598c3ddceb71e59949b003936ae99f647
---

{{HTMLSidebar}}

Das **`<i>`** [HTML](/de/docs/Web/HTML) Element repräsentiert einen Textbereich, der aus irgendeinem Grund vom normalen Text abgesetzt ist, wie zum Beispiel idiomatische Ausdrücke, technische Begriffe, taxonomische Bezeichnungen und andere. Historisch wurden diese mit kursiver Schrift dargestellt, was die ursprüngliche Quelle der `<i>` Benennung dieses Elements ist.

{{EmbedInteractiveExample("pages/tabbed/i.html", "tabbed-shorter")}}

## Attribute

Dieses Element umfasst nur die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

## Anwendungshinweise

- Verwenden Sie das `<i>` Element für Texte, die aus Gründen der Lesbarkeit vom normalen Fließtext abgesetzt sind. Dies wäre ein Bereich von Text mit einer anderen semantischen Bedeutung als der umgebende Text. Zu den Anwendungsfällen für das `<i>` Element gehören Textbereiche, die eine andere Qualität oder Modus des Textes repräsentieren, wie zum Beispiel:

  - Alternative Stimme oder Stimmung
  - Taxonomische Bezeichnungen (wie das Genus und Species "_Homo sapiens_")
  - Idiomatische Begriffe aus einer anderen Sprache (wie "_et cetera_"); diese sollten das [`lang`](/de/docs/Web/HTML/Global_attributes#lang) Attribut beinhalten, um die Sprache zu identifizieren
  - Technische Begriffe
  - Transliterationen
  - Gedanken (wie "Sie fragte sich, _Was meint dieser Schriftsteller eigentlich?_")
  - Schiffsnamen in westlichen Schriftsystemen (wie "Sie durchsuchten die Docks nach der _Empress of the Galaxy_, dem Schiff, dem sie zugeteilt waren.")

- In früheren Versionen der HTML-Spezifikation war das `<i>` Element lediglich ein Präsentationselement, das Text kursiv darstellt, ähnlich wie das `<b>` Element verwendet wurde, um Text fett darzustellen. Dies ist nicht mehr zutreffend, da diese Tags nun Semantik statt typografisches Erscheinungsbild definieren. Ein Browser zeigt normalerweise noch den Inhalt des `<i>` Elements in kursiver Schrift an, ist jedoch per Definition nicht mehr dazu verpflichtet. Um Text in kursiver Schrift darzustellen, sollten Autoren die CSS {{cssxref("font-style")}} Eigenschaft verwenden.
- Stellen Sie sicher, dass der betreffende Text nicht tatsächlich besser mit einem anderen Element ausgezeichnet ist.

  - Verwenden Sie {{HTMLElement("em")}}, um betonte Hervorhebung anzuzeigen.
  - Verwenden Sie {{HTMLElement("strong")}}, um Wichtigkeit, Ernsthaftigkeit oder Dringlichkeit anzuzeigen.
  - Verwenden Sie {{HTMLElement("mark")}}, um Relevanz anzuzeigen.
  - Verwenden Sie {{HTMLElement("cite")}}, um den Namen eines Werkes, wie ein Buch, ein Theaterstück oder ein Lied, auszuzeichnen.
  - Verwenden Sie {{HTMLElement("dfn")}}, um die definierende Instanz eines Begriffs auszuzeichnen.

## Beispiele

Dieses Beispiel demonstriert den Gebrauch des `<i>` Elements, um Text zu markieren, der in einer anderen Sprache ist.

```html
<p>
  The Latin phrase <i lang="la">Veni, vidi, vici</i> is often mentioned in
  music, art, and literature.
</p>
```

### Ergebnis

{{EmbedLiveSample("Examples")}}

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
        >,
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >phrasierender Inhalt</a
        >, greifbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasierender Inhalt</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das Start- als auch das Endtag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Zulässige Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >phrasierenden Inhalt</a
        > akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <code
          ><a href="/de/docs/Web/Accessibility/ARIA/Roles/generic_role"
            >generisch</a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA-Rollen</th>
      <td>Alle</td>
    </tr>
    <tr>
      <th scope="row">DOM-Schnittstelle</th>
      <td>[`HTMLElement`](/de/docs/Web/API/HTMLElement)</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTMLElement("em")}}
- Andere kursivierte Elemente: {{HTMLElement("var")}}, {{HTMLElement("dfn")}}, {{HTMLElement("cite")}}, {{HTMLElement("address")}}
