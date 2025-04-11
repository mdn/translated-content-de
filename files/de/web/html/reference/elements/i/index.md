---
title: "<i>: Das idiomatische Textelement"
slug: Web/HTML/Reference/Elements/i
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar}}

Das **`<i>`** [HTML](/de/docs/Web/HTML) Element repräsentiert einen Textbereich, der aus irgendeinem Grund von normalem Text abgesetzt ist, wie z.B. idiomatischer Text, technische Begriffe, taxonomische Bezeichnungen, unter anderem. Historisch gesehen wurden diese durch kursiven Schriftstil dargestellt, was die ursprüngliche Quelle für die Benennung des `<i>` Elements ist.

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
i {
  /* Add your styles here */
}
```

## Attribute

Dieses Element enthält nur die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

## Verwendungshinweise

- Verwenden Sie das `<i>` Element für Text, der für Lesbarkeitsgründe vom normalen Prosa-Text abgesetzt ist. Dies wäre ein Textbereich mit einer anderen semantischen Bedeutung als der umgebende Text. Zu den Anwendungsfällen für das `<i>` Element gehören Textabschnitte, die eine andere Qualität oder Art von Text darstellen, wie:

  - Alternative Stimme oder Stimmung
  - Taxonomische Bezeichnungen (wie die Gattung und Art "_Homo sapiens_")
  - Idiomatische Begriffe aus einer anderen Sprache (wie "_et cetera_"); diese sollten das [`lang`](/de/docs/Web/HTML/Reference/Global_attributes/lang) Attribut enthalten, um die Sprache zu identifizieren
  - Technische Begriffe
  - Transliteration
  - Gedanken (wie "Sie fragte sich, _Worüber redet dieser Autor überhaupt?_")
  - Schiffs- oder Fahrzeugnamen in westlichen Schriftsystemen (wie "Sie durchsuchten die Docks nach der _Empress of the Galaxy_, dem Schiff, dem sie zugewiesen waren.")

- In früheren Versionen der HTML-Spezifikation war das `<i>` Element lediglich ein präsentationelles Element, das zum Anzeigen von Text in Kursivschrift verwendet wurde, ähnlich wie das `<b>` Element zum Anzeigen von Text in Fettdruck verwendet wurde. Dies trifft nicht mehr zu, da diese Tags jetzt Semantik statt typografischer Darstellung definieren. Ein Browser zeigt typischerweise immer noch den Inhalt des `<i>` Elements in Kursivschrift an, ist jedoch per Definition nicht mehr dazu verpflichtet. Um Text in Kursivschrift darzustellen, sollten Autoren die CSS {{cssxref("font-style")}} Eigenschaft verwenden.
- Stellen Sie sicher, dass der fragliche Text nicht eigentlich besser mit einem anderen Element ausgezeichnet wäre.

  - Verwenden Sie {{HTMLElement("em")}}, um Betonung hervorzuheben.
  - Verwenden Sie {{HTMLElement("strong")}}, um Wichtigkeit, Ernsthaftigkeit oder Dringlichkeit zu kennzeichnen.
  - Verwenden Sie {{HTMLElement("mark")}}, um Relevanz anzuzeigen.
  - Verwenden Sie {{HTMLElement("cite")}}, um den Namen eines Werkes zu markieren, wie z.B. ein Buch, ein Theaterstück oder ein Lied.
  - Verwenden Sie {{HTMLElement("dfn")}}, um das definierende Vorkommen eines Begriffs zu markieren.

## Beispiele

Dieses Beispiel demonstriert die Verwendung des `<i>` Elements, um Text zu markieren, der in einer anderen Sprache ist.

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
        <a href="/de/docs/Web/HTML/Guides/Content_categories"
          >Inhaltskategorien</a
        >
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content"
          >Fließ-Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phraseninhalt</a
        >, greifbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phraseninhalt</a
        >.
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
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phraseninhalt</a
        > akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <code
          ><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/generic_role"
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
- Andere kursiv gesetzte Elemente: {{HTMLElement("var")}}, {{HTMLElement("dfn")}}, {{HTMLElement("cite")}}, {{HTMLElement("address")}}
