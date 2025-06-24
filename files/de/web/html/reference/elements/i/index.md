---
title: "<i>: Das idiomatische Textelement"
slug: Web/HTML/Reference/Elements/i
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{HTMLSidebar}}

Das **`<i>`**-[HTML](/de/docs/Web/HTML)-Element repräsentiert einen Textbereich, der aus irgendeinem Grund vom normalen Text abgesetzt ist, wie zum Beispiel idiomatischer Text, technische Begriffe, taxonomische Bezeichnungen und andere. Historisch wurden diese durch kursiv gesetzten Text dargestellt, was die ursprüngliche Quelle der `<i>`-Benennung dieses Elements ist.

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

- Verwenden Sie das `<i>`-Element für Text, der aus Gründen der Lesbarkeit vom normalen Fließtext abgesetzt ist. Dies wäre ein Textbereich mit einer anderen semantischen Bedeutung als der umgebende Text. Anwendungsfälle für das `<i>`-Element sind Textbereiche, die eine andere Qualität oder einen anderen Modus des Textes darstellen, wie zum Beispiel:

  - Alternative Stimme oder Stimmung
  - Taxonomische Bezeichnungen (wie die Gattung und Spezies "_Homo sapiens_")
  - Idiomatische Begriffe aus einer anderen Sprache (wie "_et cetera_"); diese sollten das [`lang`](/de/docs/Web/HTML/Reference/Global_attributes/lang)-Attribut enthalten, um die Sprache zu identifizieren
  - Technische Begriffe
  - Transliteration
  - Gedanken (wie "Sie wunderte sich, _Worum geht es diesem Autor eigentlich?_")
  - Schiffs- oder Schiffsnamen in westlichen Schriftsystemen (wie "Sie durchsuchten die Docks nach der _Empress of the Galaxy_, dem Schiff, dem sie zugewiesen wurden.")

- In früheren Versionen der HTML-Spezifikation war das `<i>`-Element lediglich ein präsentationelles Element, das verwendet wurde, um Text kursiv darzustellen, ähnlich wie das `<b>`-Element verwendet wurde, um Text fett darzustellen. Dies ist nicht mehr der Fall, da diese Tags nun Semantik statt typografischer Erscheinung definieren. Ein Browser wird normalerweise immer noch den Inhalt des `<i>`-Elements in Kursivschrift anzeigen, ist jedoch per Definition nicht mehr dazu verpflichtet. Um Text in Kursivschrift darzustellen, sollten Autoren die CSS-Eigenschaft {{cssxref("font-style")}} verwenden.
- Stellen Sie sicher, dass der in Frage stehende Text nicht tatsächlich besser mit einem anderen Element ausgezeichnet wird.
  - Verwenden Sie {{HTMLElement("em")}}, um Betonung anzuzeigen.
  - Verwenden Sie {{HTMLElement("strong")}}, um Wichtigkeit, Ernsthaftigkeit oder Dringlichkeit zu kennzeichnen.
  - Verwenden Sie {{HTMLElement("mark")}}, um Relevanz zu markieren.
  - Verwenden Sie {{HTMLElement("cite")}}, um den Namen eines Werks, wie eines Buches, eines Theaterstücks oder eines Liedes, zu markieren.
  - Verwenden Sie {{HTMLElement("dfn")}}, um das definierende Vorkommen eines Begriffs zu markieren.

## Beispiele

Dieses Beispiel demonstriert die Verwendung des `<i>`-Elements, um Text zu kennzeichnen, der in einer anderen Sprache steht.

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
          >Flussinhalt</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phraseninhalt</a
        >, fühlbarer Inhalt.
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
      <td>Keine, sowohl Anfangs- als auch End-Tag sind erforderlich.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phraseninhalt</a
        >
        akzeptiert.
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
      <td>Beliebige</td>
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
