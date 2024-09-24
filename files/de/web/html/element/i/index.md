---
title: "<i>: Das idiomatische Textelement"
slug: Web/HTML/Element/i
l10n:
  sourceCommit: fdd3ac5598c3ddceb71e59949b003936ae99f647
---

{{HTMLSidebar}}

Das **`<i>`** [HTML](/de/docs/Web/HTML) Element repräsentiert einen Bereich von Text, der aus irgendeinem Grund vom normalen Text abgesetzt wird, wie zum Beispiel idiomatischer Text, technische Begriffe, taxonomische Bezeichnungen und andere. Historisch gesehen wurden diese mit kursiver Schrift dargestellt, was die ursprüngliche Quelle der Benennung des `<i>` Elements ist.

{{EmbedInteractiveExample("pages/tabbed/i.html", "tabbed-shorter")}}

## Attribute

Dieses Element enthält nur die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

## Verwendungshinweise

- Verwenden Sie das `<i>` Element für Text, der aus Gründen der Lesbarkeit vom normalen Fließtext abgesetzt ist. Dies wäre ein Textbereich mit anderer semantischer Bedeutung als der umliegende Text. Zu den Anwendungsfällen des `<i>` Elements gehören Textspannen, die eine andere Qualität oder einen anderen Modus des Textes repräsentieren, wie:

  - Alternative Stimme oder Stimmung
  - Taxonomische Bezeichnungen (wie die Gattung und Art "_Homo sapiens_")
  - Idiomatische Begriffe aus einer anderen Sprache (wie "_et cetera_"); diese sollten das [`lang`](/de/docs/Web/HTML/Global_attributes#lang) Attribut enthalten, um die Sprache zu identifizieren
  - Technische Begriffe
  - Transliteration
  - Gedanken (wie "Sie fragte sich, _Worüber redet dieser Autor eigentlich?_")
  - Schiffs- oder Vessel-Namen in westlichen Schriftsystemen (wie "Sie durchsuchten die Docks nach der _Empress of the Galaxy_, das Schiff, dem sie zugeteilt waren.")

- In früheren Versionen der HTML-Spezifikation war das `<i>` Element lediglich ein präsentationales Element, das verwendet wurde, um Text kursiv darzustellen, ähnlich wie das `<b>` Element verwendet wurde, um Text fett darzustellen. Dies ist nicht mehr der Fall, da diese Tags nun Semantik statt typografischen Erscheinungen definieren. Ein Browser wird den Inhalt des `<i>` Elements typischerweise immer noch in kursiver Schrift darstellen, ist jedoch definitionsgemäß nicht mehr dazu verpflichtet. Um Text in kursiver Schrift darzustellen, sollten Autoren die CSS {{cssxref("font-style")}} Eigenschaft verwenden.
- Stellen Sie sicher, dass der fragliche Text nicht tatsächlich besser mit einem anderen Element ausgezeichnet ist.

  - Verwenden Sie {{HTMLElement("em")}}, um Betonung anzuzeigen.
  - Verwenden Sie {{HTMLElement("strong")}}, um Wichtigkeit, Ernsthaftigkeit oder Dringlichkeit anzuzeigen.
  - Verwenden Sie {{HTMLElement("mark")}}, um Relevanz anzuzeigen.
  - Verwenden Sie {{HTMLElement("cite")}}, um den Namen eines Werks, wie ein Buch, ein Stück oder ein Lied, auszuzeichnen.
  - Verwenden Sie {{HTMLElement("dfn")}}, um die definierende Instanz eines Begriffs auszuzeichnen.

## Beispiele

Dieses Beispiel zeigt die Verwendung des `<i>` Elements, um Text zu markieren, der in einer anderen Sprache ist.

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
          >Fließinhalt</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasinhalte</a
        >, fühlbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasinhalte</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das Start- als auch das End-Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasinhalte</a
        > zulässt.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
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
      <td>Beliebig</td>
    </tr>
    <tr>
      <th scope="row">DOM-Schnittstelle</th>
      <td>{{domxref("HTMLElement")}}</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTMLElement("em")}}
- Andere kursiv dargestellte Elemente: {{HTMLElement("var")}}, {{HTMLElement("dfn")}}, {{HTMLElement("cite")}}, {{HTMLElement("address")}}
