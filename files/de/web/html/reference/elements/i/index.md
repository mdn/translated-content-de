---
title: "`<i>` HTML idiomatisches Textelement"
short-title: <i>
slug: Web/HTML/Reference/Elements/i
l10n:
  sourceCommit: 599ae8b7ad414e91df473d91983f4ffc5cafabb3
---

Das **`<i>`** [HTML](/de/docs/Web/HTML) Element repräsentiert einen Textbereich, der aus irgendeinem Grund vom normalen Text abgehoben ist, wie z.B. idiomatischer Text, technische Begriffe, taxonomische Bezeichnungen und andere. Historisch gesehen wurden diese durch kursiven Schriftsatz dargestellt, was die ursprüngliche Quelle der Benennung des `<i>`-Elements ist.

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

- Verwenden Sie das `<i>`-Element für Text, der aus Lesbarkeitsgründen vom normalen Fließtext abgehoben wird. Dies wäre ein Textbereich mit einer anderen semantischen Bedeutung als der umgebende Text. Zu den Anwendungsfällen für das `<i>`-Element gehören Textbereiche, die eine andere Qualität oder Modus des Textes darstellen, wie z.B.:
  - Alternative Stimme oder Stimmung
  - Taxonomische Bezeichnungen (wie die Gattung und Art "_Homo sapiens_")
  - Idiomatische Begriffe aus einer anderen Sprache (wie "_et cetera_"); diese sollten das [`lang`](/de/docs/Web/HTML/Reference/Global_attributes/lang)-Attribut enthalten, um die Sprache zu identifizieren
  - Technische Begriffe
  - Transliteration
  - Gedanken (wie "Sie wunderte sich, _Worüber redet dieser Autor eigentlich?_")
  - Schiffsnamen oder Namen von Wasserfahrzeugen in westlichen Schriftsystemen (wie "Sie durchsuchten die Docks nach der _Empress of the Galaxy_, dem Schiff, dem sie zugeteilt waren.")

- In früheren Versionen der HTML-Spezifikation war das `<i>`-Element lediglich ein Präsentationselement, das verwendet wurde, um Text in Kursivschrift darzustellen, ähnlich wie das `<b>`-Element verwendet wurde, um Text in Fettschrift darzustellen. Dies ist nicht mehr der Fall, da diese Tags nun Semantik statt typografischem Erscheinungsbild definieren. Ein Browser wird typischerweise den Inhalt des `<i>`-Elements immer noch kursiv darstellen, ist jedoch per Definition nicht mehr dazu verpflichtet. Um Text in Kursivschrift darzustellen, sollten Autoren die CSS-Eigenschaft {{cssxref("font-style")}} verwenden.
- Stellen Sie sicher, dass der betreffende Text nicht tatsächlich besser mit einem anderen Element ausgezeichnet werden sollte.
  - Verwenden Sie {{HTMLElement("em")}}, um betonte Hervorhebung anzugeben.
  - Verwenden Sie {{HTMLElement("strong")}}, um Wichtigkeit, Ernsthaftigkeit oder Dringlichkeit anzuzeigen.
  - Verwenden Sie {{HTMLElement("mark")}}, um Relevanz anzuzeigen.
  - Verwenden Sie {{HTMLElement("cite")}}, um den Namen eines Werkes, wie ein Buch, ein Stück oder ein Lied, zu kennzeichnen.
  - Verwenden Sie {{HTMLElement("dfn")}}, um die definierende Instanz eines Begriffs zu markieren.

## Beispiele

Dieses Beispiel demonstriert die Verwendung des `<i>`-Elements, um Text zu kennzeichnen, der in einer anderen Sprache ist.

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
          >Fließender Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phrasierungsinhalt</a
        >, palpabler Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phrasierungsinhalt</a
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
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phrasierungsinhalt</a
        > akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
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
- Andere kursivierte Elemente: {{HTMLElement("var")}}, {{HTMLElement("dfn")}}, {{HTMLElement("cite")}}, {{HTMLElement("address")}}
