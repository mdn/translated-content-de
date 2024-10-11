---
title: "<i>: Das idiomatische Textelement"
slug: Web/HTML/Element/i
l10n:
  sourceCommit: 816cc4d4a5a318a23222946b6981bb92b499aebb
---

{{HTMLSidebar}}

Das **`<i>`** [HTML](/de/docs/Web/HTML)-Element repräsentiert einen Textbereich, der aus irgendeinem Grund vom normalen Text abgehoben ist, wie z.B. idiomatische Ausdrücke, Fachbegriffe, taxonomische Bezeichnungen und andere. Historisch gesehen wurden diese mittels kursiver Schrift dargestellt, was der ursprüngliche Grund für die Benennung des `<i>`-Elements war.

{{EmbedInteractiveExample("pages/tabbed/i.html", "tabbed-shorter")}}

## Attribute

Dieses Element enthält nur die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

## Verwendungshinweise

- Verwenden Sie das `<i>`-Element für Text, der aus Lesbarkeitsgründen vom normalen Fließtext abgehoben wird. Dies wäre ein Textbereich mit einer anderen semantischen Bedeutung als der umgebende Text. Zu den Anwendungsfällen für das `<i>`-Element gehören Textabschnitte, die eine andere Qualität oder eine andere Art von Text darstellen, wie z.B.:

  - Alternative Stimme oder Stimmung
  - Taxonomische Bezeichnungen (wie die Gattung und Art "_Homo sapiens_")
  - Idiomatische Begriffe aus einer anderen Sprache (wie "_et cetera_"); diese sollten das [`lang`](/de/docs/Web/HTML/Global_attributes/lang)-Attribut enthalten, um die Sprache zu identifizieren
  - Fachbegriffe
  - Transliteration
  - Gedanken (wie "Sie wunderte sich, _Worüber schreibt dieser Autor eigentlich?_")
  - Schiffsnamen oder Namen von Schiffen in westlichen Schriftsystemen (wie "Sie durchsuchten die Docks nach der _Empress of the Galaxy_, dem Schiff, dem sie zugeteilt waren.")

- In früheren Versionen der HTML-Spezifikation war das `<i>`-Element lediglich ein Darstellungselement, das Text kursiv darstellte, ähnlich wie das `<b>`-Element Text in fett darstellte. Dies trifft nicht mehr zu, da diese Tags nun Semantik anstelle von typografischer Erscheinung definieren. Ein Browser zeigt den Inhalt des `<i>`-Elements in der Regel weiterhin in kursiver Schrift an, ist aber definitionsgemäß nicht mehr dazu verpflichtet. Um Text kursiv darzustellen, sollten Autoren die CSS-Eigenschaft {{cssxref("font-style")}} verwenden.
- Stellen Sie sicher, dass der betreffende Text nicht eigentlich besser mit einem anderen Element ausgezeichnet wird.

  - Verwenden Sie {{HTMLElement("em")}}, um betonte Hervorhebung anzuzeigen.
  - Verwenden Sie {{HTMLElement("strong")}}, um Wichtigkeit, Ernsthaftigkeit oder Dringlichkeit anzuzeigen.
  - Verwenden Sie {{HTMLElement("mark")}}, um Relevanz anzuzeigen.
  - Verwenden Sie {{HTMLElement("cite")}}, um den Namen eines Werkes, wie ein Buch, ein Theaterstück oder ein Lied, auszuzeichnen.
  - Verwenden Sie {{HTMLElement("dfn")}}, um das definierende Vorkommen eines Begriffs auszuzeichnen.

## Beispiele

Dieses Beispiel demonstriert die Verwendung des `<i>`-Elements, um Text zu markieren, der in einer anderen Sprache ist.

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
          >Phraseninhalt</a
        >, palpabler Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phraseninhalt</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Tagauslassung</th>
      <td>Keine, sowohl das startende als auch das endende Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phraseninhalt</a
        > akzeptiert.
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
      <td>[`HTMLElement`](/de/docs/Web/API/HTMLElement)</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Weitere Informationen

- {{HTMLElement("em")}}
- Andere kursivierte Elemente: {{HTMLElement("var")}}, {{HTMLElement("dfn")}}, {{HTMLElement("cite")}}, {{HTMLElement("address")}}
