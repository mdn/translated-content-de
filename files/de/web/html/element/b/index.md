---
title: "<b>: Das Hervorhebungs-Element"
slug: Web/HTML/Element/b
l10n:
  sourceCommit: fdd3ac5598c3ddceb71e59949b003936ae99f647
---

{{HTMLSidebar}}

Das **`<b>`**-Element in [HTML](/de/docs/Web/HTML) wird verwendet, um die Aufmerksamkeit des Lesers auf den Inhalt des Elements zu lenken, dem ansonsten keine besondere Bedeutung zugemessen wird. Früher war es als das Fettdruck-Element bekannt, und die meisten Browser stellen den Text immer noch fett dar. Sie sollten `<b>` jedoch nicht zur Textgestaltung oder zur Hervorhebung von Bedeutung verwenden. Wenn Sie Fettdrucktext erstellen möchten, sollten Sie die CSS-{{cssxref("font-weight")}}-Eigenschaft verwenden. Wenn Sie darauf hinweisen möchten, dass ein Element von besonderer Bedeutung ist, sollten Sie das {{HTMLElement("strong")}}-Element verwenden.

{{EmbedInteractiveExample("pages/tabbed/b.html", "tabbed-shorter")}}

## Attribute

Dieses Element enthält nur die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

## Verwendungshinweise

- Verwenden Sie `<b>` für Fälle wie Schlüsselwörter in einer Zusammenfassung, Produktnamen in einer Bewertung oder andere Textabschnitte, deren typische Darstellung fettdruck wäre (aber keine besondere Bedeutung hat).
- Verwechseln Sie das `<b>`-Element nicht mit den {{HTMLElement("strong")}}, {{HTMLElement("em")}} oder {{HTMLElement("mark")}}-Elementen. Das {{HTMLElement("strong")}}-Element steht für Text von besonderer _Bedeutung_, {{HTMLElement("em")}} betont den Text etwas und das {{HTMLElement("mark")}}-Element steht für Text von besonderer _Relevanz_. Das `<b>`-Element vermittelt keine solche besondere semantische Information; verwenden Sie es nur, wenn keine anderen passen.
- Markieren Sie Titel und Überschriften nicht mit dem `<b>`-Element. Verwenden Sie hierzu die {{HTMLElement("Heading_Elements", "h1")}} bis {{HTMLElement("Heading_Elements", "h6")}} Tags. Zusätzlich können Stylesheets den Standardstil dieser Elemente ändern, sodass sie nicht _notwendigerweise_ fett angezeigt werden.
- Es ist eine gute Praxis, das [`class`](/de/docs/Web/HTML/Global_attributes#class)-Attribut auf dem `<b>`-Element zu verwenden, um bei Bedarf zusätzliche semantische Informationen zu übermitteln (zum Beispiel `<b class="lead">` für den ersten Satz eines Absatzes). Dadurch wird es einfacher, verschiedene Anwendungsfälle von `<b>` zu verwalten, wenn sich Ihre stilistischen Bedürfnisse ändern, ohne dass alle Verwendungen in der HTML geändert werden müssen.
- Historisch gesehen war das `<b>`-Element dazu gedacht, Text fett zu gestalten. Stilinformationen wurden seit HTML4 veraltet, sodass die Bedeutung des `<b>`-Elements geändert wurde.
- Wenn es keinen semantischen Zweck für die Verwendung des `<b>`-Elements gibt, sollten Sie stattdessen die CSS-{{cssxref("font-weight")}}-Eigenschaft mit dem Wert `"bold"` verwenden, um Text fett zu machen.

## Beispiele

```html
<p>
  Dieser Artikel beschreibt mehrere <b class="keywords">textbezogene</b> Elemente. Er
  erklärt deren Verwendung in einem <b class="keywords">HTML</b>-Dokument.
</p>
Schlüsselwörter werden im Standardstil des
<b>Elements angezeigt, wahrscheinlich fett.</b>
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
          >formatierender Inhalt</a
        >, fühlbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässiger Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Formatierender Inhalt</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl der Anfangs- als auch der End-Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Zulässige Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >formatierenden Inhalt</a
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
      <td>{{domxref("HTMLElement")}}</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Andere Elemente, die Textsemantik vermitteln: {{HTMLElement("a")}}, {{HTMLElement("em")}}, {{HTMLElement("strong")}}, {{HTMLElement("small")}}, {{HTMLElement("cite")}}, {{HTMLElement("q")}}, {{HTMLElement("dfn")}}, {{HTMLElement("abbr")}}, {{HTMLElement("time")}}, {{HTMLElement("code")}}, {{HTMLElement("var")}}, {{HTMLElement("samp")}}, {{HTMLElement("kbd")}}, {{HTMLElement("sub")}}, {{HTMLElement("sup")}}, {{HTMLElement("i")}}, {{HTMLElement("mark")}}, {{HTMLElement("ruby")}}, {{HTMLElement("rp")}}, {{HTMLElement("rt")}}, {{HTMLElement("bdo")}}, {{HTMLElement("span")}}, {{HTMLElement("br")}}, {{HTMLElement("wbr")}}.
- [Verwendung von \<b> und \<i> Elementen (W3C)](https://www.w3.org/International/questions/qa-b-and-i-tags)
