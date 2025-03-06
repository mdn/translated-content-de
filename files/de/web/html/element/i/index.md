---
title: "<i>: Das idiomatische Textelement"
slug: Web/HTML/Element/i
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{HTMLSidebar}}

Das **`<i>`** [HTML](/de/docs/Web/HTML) Element repräsentiert einen Textabschnitt, der aus dem normalen Text aus einem bestimmten Grund herausgehoben wird, wie idiomatischer Text, technische Begriffe, taxonomische Bezeichnungen unter anderem. Historisch gesehen wurden diese mit kursiver Schrift dargestellt, was die ursprüngliche Quelle der Benennung des `<i>` Elements ist.

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

## Hinweise zur Nutzung

- Verwenden Sie das `<i>`-Element für Text, der aus Gründen der Lesbarkeit vom normalen Fließtext abgesetzt wird. Dies wäre ein Textabschnitt mit einer anderen semantischen Bedeutung als der umgebende Text. Zu den Anwendungsfällen des `<i>`-Elements gehören Textabschnitte, die eine andere Qualität oder Art des Textes repräsentieren, wie z.B.:

  - Alternative Stimme oder Stimmung
  - Taxonomische Bezeichnungen (wie die Gattung und Art "_Homo sapiens_")
  - Idiomatische Begriffe aus einer anderen Sprache (wie "_et cetera_"); diese sollten das [`lang`](/de/docs/Web/HTML/Global_attributes/lang) Attribut enthalten, um die Sprache anzugeben
  - Technische Begriffe
  - Transliterationen
  - Gedanken (wie "Sie fragte sich, _Wovon spricht dieser Autor eigentlich?_")
  - Schiff- oder Schiffsnamen in westlichen Schriftsystemen (wie "Sie durchsuchten die Docks nach der _Empress of the Galaxy_, dem Schiff, dem sie zugewiesen waren.")

- In früheren Versionen der HTML-Spezifikation war das `<i>`-Element lediglich ein Präsentationselement, das zur Anzeige von Text in Kursivschrift diente, ähnlich wie das `<b>`-Element zur Anzeige von Text in Fettschrift verwendet wurde. Dies ist nicht mehr der Fall, da diese Tags nun Semantik statt typografisches Erscheinungsbild definieren. Ein Browser wird typischerweise den Inhalt des `<i>`-Elements immer noch in Kursivschrift anzeigen, ist jedoch per Definition nicht mehr dazu verpflichtet. Um Text in Kursivschrift darzustellen, sollten Autoren die CSS {{cssxref("font-style")}} Eigenschaft verwenden.
- Stellen Sie sicher, dass der betreffende Text nicht tatsächlich mit einem anderen Element besser markiert wäre.

  - Verwenden Sie {{HTMLElement("em")}} um betonte Betonung anzuzeigen.
  - Verwenden Sie {{HTMLElement("strong")}} um Wichtigkeit, Ernsthaftigkeit oder Dringlichkeit anzuzeigen.
  - Verwenden Sie {{HTMLElement("mark")}} um Relevanz anzuzeigen.
  - Verwenden Sie {{HTMLElement("cite")}} um den Namen eines Werkes wie eines Buches, eines Stücks oder eines Liedes zu markieren.
  - Verwenden Sie {{HTMLElement("dfn")}} um die definierende Instanz eines Begriffs zu markieren.

## Beispiele

Dieses Beispiel zeigt, wie das `<i>`-Element verwendet wird, um Text zu markieren, der in einer anderen Sprache ist.

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
          >Phrasierungsinhalt</a
        >, fühlbarer Inhalt.
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
- Andere kursive Elemente: {{HTMLElement("var")}}, {{HTMLElement("dfn")}}, {{HTMLElement("cite")}}, {{HTMLElement("address")}}
