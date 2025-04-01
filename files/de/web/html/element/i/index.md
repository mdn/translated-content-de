---
title: "<i>: Das idiomatische Textelement"
slug: Web/HTML/Element/i
l10n:
  sourceCommit: 215e1b1590b1210152e3570627933c0303171e11
---

{{HTMLSidebar}}

Das **`<i>`** [HTML](/de/docs/Web/HTML) Element repräsentiert einen Textbereich, der aus irgendeinem Grund vom normalen Text abgesetzt ist, wie z.B. idiomatischer Text, technische Begriffe, taxonomische Bezeichnungen, unter anderem. Historisch gesehen wurden diese mit kursiver Schrift dargestellt, was der ursprüngliche Grund für die Benennung des `<i>` Tags war.

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

Dieses Element enthält nur die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

## Hinweise zur Verwendung

- Verwenden Sie das `<i>`-Element für Text, der aus Gründen der Lesbarkeit vom normalen Fließtext abgesetzt ist. Dies wäre ein Textbereich mit einer anderen semantischen Bedeutung als der umgebende Text. Unter den Anwendungsfällen für das `<i>`-Element sind Textbereiche, die eine andere Qualität oder einen anderen Modus darstellen, wie:

  - Alternative Stimme oder Stimmung
  - Taxonomische Bezeichnungen (wie die Gattung und Art "_Homo sapiens_")
  - Idiomatische Begriffe aus einer anderen Sprache (wie "_et cetera_"); diese sollten das [`lang`](/de/docs/Web/HTML/Global_attributes/lang) Attribut enthalten, um die Sprache zu identifizieren
  - Technische Begriffe
  - Transliterationen
  - Gedanken (wie: "Sie wunderte sich, _Worüber schreibt dieser Autor eigentlich?_")
  - Schiffsnamen in westlichen Schriftsystemen (wie: "Sie suchten die Docks nach der _Empress of the Galaxy_ ab, dem Schiff, dem sie zugeteilt waren.")

- In früheren Versionen der HTML-Spezifikation war das `<i>`-Element lediglich ein Präsentationselement zur Darstellung von Text in Kursivschrift, ähnlich wie das `<b>`-Element verwendet wurde, um Text in fetten Buchstaben darzustellen. Dies ist nicht mehr der Fall, da diese Tags nun Semantik statt typographischem Erscheinungsbild definieren. Ein Browser wird normalerweise den Inhalt des `<i>`-Elements in Kursivschrift anzeigen, ist jedoch per Definition nicht mehr dazu verpflichtet. Um Text in Kursivschrift darzustellen, sollten Autoren die CSS-{{cssxref("font-style")}}-Eigenschaft verwenden.
- Stellen Sie sicher, dass der betreffende Text nicht tatsächlich geeigneter mit einem anderen Element ausgezeichnet ist.

  - Verwenden Sie {{HTMLElement("em")}}, um hervorgehobene Betonung anzuzeigen.
  - Verwenden Sie {{HTMLElement("strong")}}, um Wichtigkeit, Ernsthaftigkeit oder Dringlichkeit anzuzeigen.
  - Verwenden Sie {{HTMLElement("mark")}}, um Relevanz anzuzeigen.
  - Verwenden Sie {{HTMLElement("cite")}}, um den Namen eines Werkes, wie ein Buch, ein Theaterstück oder ein Lied, auszuzeichnen.
  - Verwenden Sie {{HTMLElement("dfn")}}, um das definierende Vorkommen eines Begriffs auszuzeichnen.

## Beispiele

Dieses Beispiel zeigt die Verwendung des `<i>`-Elements zur Markierung von Text, der in einer anderen Sprache verfasst ist.

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
        <a href="/de/docs/Web/HTML/Content_categories">Inhaltskategorien</a>
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#flow_content">Fließinhalt</a>,
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content">Phrasierungsinhalt</a>, spürbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content">Phrasierungsinhalt</a>.
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
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content">Phrasierungsinhalt</a>
        akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
      <td>
        <code
          ><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/generic_role">generisch</a></code>
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA-Rollen</th>
      <td>Jede</td>
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
- Andere kursiv dargestellte Elemente: {{HTMLElement("var")}}, {{HTMLElement("dfn")}}, {{HTMLElement("cite")}}, {{HTMLElement("address")}}
