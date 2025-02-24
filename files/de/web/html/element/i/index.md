---
title: "<i>: Das idiomatische Textelement"
slug: Web/HTML/Element/i
l10n:
  sourceCommit: 8b02826c79b090b5af0d68ae1ef39f932a66a7f1
---

{{HTMLSidebar}}

Das **`<i>`**-[HTML](/de/docs/Web/HTML)-Element repräsentiert einen Bereich von Text, der aus irgendeinem Grund vom normalen Text abgesetzt ist, wie z.B. idiomatische Ausdrücke, technische Begriffe, taxonomische Bezeichnungen und andere. Historisch gesehen wurden diese mit kursiver Schrift dargestellt, was die ursprüngliche Quelle für die Benennung des `<i>`-Elements ist.

{{InteractiveExample("HTML Demo: &lt;i&gt;", "tabbed-shorter")}}

```html interactive-example
<p>I looked at it and thought <i>This can't be real!</i></p>

<p>
  <i>Musa</i> is one of two or three genera in the family <i>Musaceae</i>; it
  includes bananas and plantains.
</p>

<p>
  The term <i>bandwidth</i> describes the measure of how much information can
  pass through a data connection in a given amount of time.
</p>
```

```css interactive-example
/* stylelint-disable-next-line block-no-empty */
i {
}
```

## Attribute

Dieses Element umfasst nur die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

## Nutzungshinweise

- Verwenden Sie das `<i>`-Element für Text, der aus Lesbarkeitsgründen von der normalen Prosa abgesetzt ist. Dies wäre ein Textbereich mit einer anderen semantischen Bedeutung als der umgebende Text. Zu den Anwendungsfällen für das `<i>`-Element gehören Textspannen, die eine andere Qualität oder einen anderen Modus des Textes darstellen, wie zum Beispiel:

  - Alternative Stimme oder Stimmung
  - Taxonomische Bezeichnungen (wie die Gattung und Art "_Homo sapiens_")
  - Idiomatische Begriffe aus einer anderen Sprache (wie "_et cetera_"); diese sollten das [`lang`](/de/docs/Web/HTML/Global_attributes/lang)-Attribut zur Identifikation der Sprache enthalten
  - Technische Begriffe
  - Transliterationen
  - Gedanken (wie "Sie fragte sich, _Worüber redet dieser Autor überhaupt?_")
  - Schiffs- oder Vesselnamen in westlichen Schriftsystemen (wie "Sie durchsuchten die Docks nach der _Empress of the Galaxy_, dem Schiff, dem sie zugeteilt waren.")

- In früheren Versionen der HTML-Spezifikation war das `<i>`-Element lediglich ein Präsentationselement, das dazu diente, Text kursiv darzustellen, ähnlich wie das `<b>`-Element genutzt wurde, um Text fett darzustellen. Das ist nicht länger der Fall, da diese Tags nun Semantik statt typografischer Erscheinung definieren. Ein Browser zeigt den Inhalt des `<i>`-Elements typischerweise dennoch in kursiver Schrift an, ist jedoch per Definition nicht mehr dazu verpflichtet. Um Text in kursiver Schrift darzustellen, sollten Autoren die CSS-Eigenschaft {{cssxref("font-style")}} verwenden.
- Stellen Sie sicher, dass der betreffende Text nicht besser mit einem anderen Element ausgezeichnet werden sollte.

  - Verwenden Sie {{HTMLElement("em")}}, um betonte Betonung zu kennzeichnen.
  - Verwenden Sie {{HTMLElement("strong")}}, um Bedeutung, Ernsthaftigkeit oder Dringlichkeit zu kennzeichnen.
  - Verwenden Sie {{HTMLElement("mark")}}, um Relevanz zu kennzeichnen.
  - Verwenden Sie {{HTMLElement("cite")}}, um den Namen eines Werkes wie eines Buches, Stückes oder Liedes zu kennzeichnen.
  - Verwenden Sie {{HTMLElement("dfn")}}, um das definierende Vorkommen eines Begriffs zu markieren.

## Beispiele

Dieses Beispiel zeigt die Verwendung des `<i>`-Elements zur Markierung von Text, der in einer anderen Sprache steht.

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
          >Phrasierungsinhalt</a
        >, greifbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasierungsinhalt</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das Start- als auch das End-Tag sind zwingend erforderlich.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasierungsinhalt</a
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

## Siehe auch

- {{HTMLElement("em")}}
- Andere kursive Elemente: {{HTMLElement("var")}}, {{HTMLElement("dfn")}}, {{HTMLElement("cite")}}, {{HTMLElement("address")}}
