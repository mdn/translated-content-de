---
title: "<i>: Das Idiomatische Textelement"
slug: Web/HTML/Reference/Elements/i
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

Das **`<i>`** [HTML](/de/docs/Web/HTML)-Element repräsentiert einen Textbereich, der aus bestimmten Gründen vom normalen Text abgesetzt wird, wie zum Beispiel idiomatischer Text, technische Begriffe, taxonomische Bezeichnungen, unter anderem. Historisch gesehen wurden diese Typen von Texten kursiv dargestellt, was die ursprüngliche Quelle der Benennung des `<i>`-Elements ist.

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

Dieses Element beinhaltet nur die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

## Verwendungshinweise

- Verwenden Sie das `<i>`-Element für Text, der aus Lesbarkeitsgründen von der normalen Prosa abgesetzt ist. Dies wäre ein Textbereich mit einer anderen semantischen Bedeutung als der umgebende Text. Zu den Anwendungsfällen für das `<i>`-Element gehören Textspanne, die eine andere Qualität oder Modus des Textes darstellen, wie zum Beispiel:
  - Alternative Stimme oder Stimmung
  - Taxonomische Bezeichnungen (wie der Gattungs- und Artnamen "_Homo sapiens_")
  - Idiomatische Begriffe aus einer anderen Sprache (wie "_et cetera_"); diese sollten das [`lang`](/de/docs/Web/HTML/Reference/Global_attributes/lang)-Attribut beinhalten, um die Sprache zu identifizieren
  - Technische Begriffe
  - Transliterationen
  - Gedanken (wie "Sie fragte sich, _Worüber spricht dieser Autor eigentlich?_")
  - Schiffs- oder Fahrzeugnamen in westlichen Schriftsystemen (wie "Sie durchsuchten die Docks nach der _Empress of the Galaxy_, dem Schiff, dem sie zugeteilt waren.")

- In früheren Versionen der HTML-Spezifikation war das `<i>`-Element lediglich ein präsentationales Element, das verwendet wurde, um Text kursiv darzustellen, ähnlich wie das `<b>`-Element verwendet wurde, um Text fett darzustellen. Dies ist nicht mehr der Fall, da diese Tags nun Semantik statt typografischem Erscheinungsbild definieren. Ein Browser wird den Inhalt des `<i>`-Elements typischerweise immer noch in kursiver Schrift darstellen, ist aber per Definition nicht mehr dazu verpflichtet. Um Text in kursiver Schrift darzustellen, sollten Autoren die CSS-Eigenschaft {{cssxref("font-style")}} verwenden.
- Stellen Sie sicher, dass der betreffende Text nicht tatsächlich besser mit einem anderen Element ausgezeichnet ist.
  - Verwenden Sie {{HTMLElement("em")}}, um betonte Hervorhebung zu zeigen.
  - Verwenden Sie {{HTMLElement("strong")}}, um Wichtigkeit, Ernsthaftigkeit oder Dringlichkeit anzuzeigen.
  - Verwenden Sie {{HTMLElement("mark")}}, um Relevanz anzuzeigen.
  - Verwenden Sie {{HTMLElement("cite")}}, um den Namen eines Werks wie eines Buchs, Stücks oder Liedes auszuzeichnen.
  - Verwenden Sie {{HTMLElement("dfn")}}, um die definierende Instanz eines Begriffs zu kennzeichnen.

## Beispiele

Dieses Beispiel zeigt die Verwendung des `<i>`-Elements, um Text in einer anderen Sprache zu markieren.

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
        <a href="/de/docs/Web/HTML/Guides/Content_categories">Inhaltskategorien</a>
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content">Fließinhalt</a>,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content">Phraseninhalt</a>,
        greifbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content">Phraseninhalt</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Wege lassen sich aus</th>
      <td>Keine, sowohl das Start- als auch das End-Tag sind erforderlich.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content">Phraseninhalt</a>
        akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
      <td>
        <code><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/generic_role">generic</a></code>
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
- Andere kursivierte Elemente: {{HTMLElement("var")}}, {{HTMLElement("dfn")}}, {{HTMLElement("cite")}}, {{HTMLElement("address")}}
