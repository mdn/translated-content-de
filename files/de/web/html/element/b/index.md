---
title: "<b>: Das Hervorhebungselement"
slug: Web/HTML/Element/b
l10n:
  sourceCommit: fdd3ac5598c3ddceb71e59949b003936ae99f647
---

{{HTMLSidebar}}

Das **`<b>`** [HTML](/de/docs/Web/HTML) Element wird verwendet, um die Aufmerksamkeit des Lesers auf den Inhalt des Elements zu lenken, dem sonst keine besondere Bedeutung zukommt. Dies war früher als das "Fettdruckelement" bekannt, und die meisten Browser stellen den Text weiterhin in Fettdruck dar. Sie sollten `<b>` jedoch nicht zum Stylen von Text oder zur Vergabe von Bedeutung verwenden. Wenn Sie einen Fettdruck erstellen möchten, sollten Sie die CSS-Eigenschaft {{cssxref("font-weight")}} verwenden. Wenn Sie angeben möchten, dass ein Element von besonderer Bedeutung ist, sollten Sie das {{HTMLElement("strong")}} Element verwenden.

{{EmbedInteractiveExample("pages/tabbed/b.html", "tabbed-shorter")}}

## Attribute

Dieses Element enthält nur die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

## Verwendungshinweise

- Verwenden Sie `<b>` für Fälle wie Schlüsselwörter in einer Zusammenfassung, Produktnamen in einer Bewertung oder andere Textspannen, deren übliche Darstellung fett wäre (aber keine besondere Bedeutung hat).
- Verwechseln Sie das `<b>` Element nicht mit den {{HTMLElement("strong")}}, {{HTMLElement("em")}} und {{HTMLElement("mark")}} Elementen. Das {{HTMLElement("strong")}} Element repräsentiert Text mit _gewisser Bedeutung_, {{HTMLElement("em")}} legt eine Hervorhebung auf den Text, und das {{HTMLElement("mark")}} Element steht für Text mit _gewisser Relevanz_. Das `<b>` Element vermittelt keine solche besondere semantische Information; verwenden Sie es nur, wenn kein anderes Element passt.
- Ebenso sollten Sie Titel und Überschriften nicht mit dem `<b>` Element markieren. Verwenden Sie hierfür die {{HTMLElement("Heading_Elements", "h1")}} bis {{HTMLElement("Heading_Elements", "h6")}} Tags. Zudem können Stylesheets die Standarddarstellung dieser Elemente ändern, sodass sie nicht _zwangsläufig_ fett dargestellt werden.
- Es ist eine gute Praxis, das [`class`](/de/docs/Web/HTML/Global_attributes#class) Attribut am `<b>` Element zu verwenden, um zusätzliche semantische Informationen zu vermitteln (z. B. `<b class="lead">` für den ersten Satz in einem Absatz). Dies erleichtert die Verwaltung der verschiedenen Einsatzmöglichkeiten von `<b>`, falls sich Ihre stilistischen Anforderungen ändern, ohne dass alle Verwendungen im HTML geändert werden müssen.
- Historisch gesehen war das `<b>` Element dazu gedacht, Text in Fettdruck darzustellen. Stilinformationen wurden seit HTML4 veraltet, sodass sich die Bedeutung des `<b>` Elements verändert hat.
- Wenn es keinen semantischen Zweck für die Verwendung des `<b>` Elements gibt, sollten Sie stattdessen die CSS-Eigenschaft {{cssxref("font-weight")}} mit dem Wert `"bold"` verwenden, um Text fett zu machen.

## Beispiele

```html
<p>
  This article describes several <b class="keywords">text-level</b> elements. It
  explains their usage in an <b class="keywords">HTML</b> document.
</p>
Keywords are displayed with the default style of the
<b>element, likely in bold.</b>
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
          >Flow-Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasing-Inhalt</a
        >, greifbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasing-Inhalt</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Tags-Auslassung</th>
      <td>Keine, sowohl das öffnende als auch das schließende Tag sind erforderlich.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasing-Inhalt</a
        > akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
      <td>
        <code
          ><a href="/de/docs/Web/Accessibility/ARIA/Roles/generic_role"
            >generic</a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA-Rollen</th>
      <td>Any</td>
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

- Andere Elemente, die textuelle Semantik vermitteln: {{HTMLElement("a")}}, {{HTMLElement("em")}}, {{HTMLElement("strong")}}, {{HTMLElement("small")}}, {{HTMLElement("cite")}}, {{HTMLElement("q")}}, {{HTMLElement("dfn")}}, {{HTMLElement("abbr")}}, {{HTMLElement("time")}}, {{HTMLElement("code")}}, {{HTMLElement("var")}}, {{HTMLElement("samp")}}, {{HTMLElement("kbd")}}, {{HTMLElement("sub")}}, {{HTMLElement("sup")}}, {{HTMLElement("i")}}, {{HTMLElement("mark")}}, {{HTMLElement("ruby")}}, {{HTMLElement("rp")}}, {{HTMLElement("rt")}}, {{HTMLElement("bdo")}}, {{HTMLElement("span")}}, {{HTMLElement("br")}}, {{HTMLElement("wbr")}}.
- [Verwendung von \<b> und \<i> Elementen (W3C)](https://www.w3.org/International/questions/qa-b-and-i-tags)
