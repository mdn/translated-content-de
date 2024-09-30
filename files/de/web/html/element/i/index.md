---
title: "<i>: Das idiomatische Textelement"
slug: Web/HTML/Element/i
l10n:
  sourceCommit: fdd3ac5598c3ddceb71e59949b003936ae99f647
---

{{HTMLSidebar}}

Das **`<i>`** [HTML](/de/docs/Web/HTML) Element repräsentiert einen Textbereich, der aus bestimmten Gründen vom normalen Text abgesetzt ist, wie z.B. idiomatischer Text, Fachbegriffe, taxonomische Bezeichnungen und andere. Historisch gesehen wurden diese mit kursiver Schrift dargestellt, was die ursprüngliche Quelle für die Benennung des `<i>`-Elements ist.

{{EmbedInteractiveExample("pages/tabbed/i.html", "tabbed-shorter")}}

## Attribute

Dieses Element umfasst nur die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

## Anwendungshinweise

- Verwenden Sie das `<i>`-Element für Text, der aus Lesbarkeitsgründen vom normalen Fließtext abgesetzt ist. Dies wäre ein Textbereich mit unterschiedlicher semantischer Bedeutung als der umgebende Text. Zu den Anwendungsfällen für das `<i>`-Element gehören Textbereiche, die eine andere Qualität oder Art des Textes repräsentieren, wie zum Beispiel:

  - Alternative Stimme oder Stimmung
  - Taxonomische Bezeichnungen (wie die Gattung und Art "_Homo sapiens_")
  - Idiomatische Begriffe aus einer anderen Sprache (wie "_et cetera_"); diese sollten das [`lang`](/de/docs/Web/HTML/Global_attributes#lang) Attribut enthalten, um die Sprache zu kennzeichnen.
  - Fachbegriffe
  - Transliteration
  - Gedanken (wie "Sie fragte sich, _Wovon spricht dieser Autor eigentlich?_")
  - Schiffs- oder Schiffsnamen in westlichen Schriftsystemen (wie "Sie durchsuchten die Docks nach der _Empress of the Galaxy_, dem Schiff, dem sie zugewiesen waren.")

- In früheren Versionen der HTML-Spezifikationen war das `<i>`-Element lediglich ein Präsentationselement, das Text kursiv darstellte, ähnlich wie das `<b>`-Element Text fett darstellte. Dies ist nicht mehr der Fall, da diese Tags jetzt Semantik statt typografischem Aussehen definieren. Ein Browser wird in der Regel den Inhalt des `<i>`-Elements weiterhin kursiv darstellen, ist aber per Definition nicht mehr dazu verpflichtet. Um Text kursiv darzustellen, sollten Autoren die CSS {{cssxref("font-style")}} Eigenschaft verwenden.
- Stellen Sie sicher, dass der betreffende Text nicht tatsächlich besser mit einem anderen Element ausgezeichnet wird.

  - Verwenden Sie {{HTMLElement("em")}} um Hervorhebung durch Betonung anzuzeigen.
  - Verwenden Sie {{HTMLElement("strong")}} um Wichtigkeit, Ernsthaftigkeit oder Dringlichkeit anzuzeigen.
  - Verwenden Sie {{HTMLElement("mark")}} um Relevanz anzuzeigen.
  - Verwenden Sie {{HTMLElement("cite")}} um den Namen eines Werkes zu kennzeichnen, wie ein Buch, ein Theaterstück oder ein Lied.
  - Verwenden Sie {{HTMLElement("dfn")}} um die definierende Instanz eines Begriffs zu kennzeichnen.

## Beispiele

Dieses Beispiel demonstriert die Verwendung des `<i>`-Elements, um Text zu markieren, der in einer anderen Sprache vorliegt.

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
          >Verlaufskategorie</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasenkategorie</a
        >, spürbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasenkategorie</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das Start- als auch das End-Tag sind erforderlich.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasenkategorie</a
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
      <th scope="row">Zulässige ARIA-Rollen</th>
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
