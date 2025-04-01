---
title: "<b>: Das Aufmerksamkeitselement"
slug: Web/HTML/Element/b
l10n:
  sourceCommit: 215e1b1590b1210152e3570627933c0303171e11
---

{{HTMLSidebar}}

Das **`<b>`** [HTML](/de/docs/Web/HTML)-Element wird verwendet, um die Aufmerksamkeit des Lesers auf den Inhalt des Elements zu lenken, der ansonsten keine besondere Bedeutung hat. Dieses Element war früher als Boldface-Element bekannt, und die meisten Browser stellen den Text immer noch im Fettdruck dar. Sie sollten jedoch `<b>` nicht zur Textgestaltung oder zur Hervorhebung verwenden. Wenn Sie Fettdrucktext erstellen möchten, sollten Sie die CSS-Eigenschaft {{cssxref("font-weight")}} nutzen. Wenn Sie angeben möchten, dass ein Element von besonderer Bedeutung ist, sollten Sie das {{HTMLElement("strong")}}-Element verwenden.

{{InteractiveExample("HTML Demo: &lt;b&gt;", "tabbed-shorter")}}

```html interactive-example
<p>
  The two most popular science courses offered by the school are
  <b class="term">chemistry</b> (the study of chemicals and the composition of
  substances) and <b class="term">physics</b> (the study of the nature and
  properties of matter and energy).
</p>
```

```css interactive-example
b {
  /* Add your styles here */
}
```

## Attribute

Dieses Element enthält nur die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

## Hinweise zur Verwendung

- Verwenden Sie `<b>` für Fälle wie Stichwörter in einer Zusammenfassung, Produktnamen in einer Rezension oder andere Textabschnitte, deren typische Darstellung im Fettdruck erfolgen würde (aber ohne spezielle Bedeutung).
- Verwechseln Sie das `<b>`-Element nicht mit den Elementen {{HTMLElement("strong")}}, {{HTMLElement("em")}} oder {{HTMLElement("mark")}}. Das {{HTMLElement("strong")}}-Element stellt Text von gewisser _Wichtigkeit_ dar, {{HTMLElement("em")}} legt eine Betonung auf den Text und das {{HTMLElement("mark")}}-Element steht für Text von gewissen _Relevanz_. Das `<b>`-Element vermittelt keine solcherart spezielle semantische Informationen; verwenden Sie es nur, wenn keine anderen passen.
- Markieren Sie Titel und Überschriften nicht mit dem `<b>`-Element. Verwenden Sie hierfür die {{HTMLElement("Heading_Elements", "h1")}} bis {{HTMLElement("Heading_Elements", "h6")}} Tags. Weiterhin können Stylesheets den Standardstil dieser Elemente ändern, was dazu führen kann, dass sie _nicht zwingend_ im Fettdruck angezeigt werden.
- Es ist eine gute Praxis, das [`class`](/de/docs/Web/HTML/Global_attributes/class)-Attribut auf dem `<b>`-Element zu verwenden, um bei Bedarf zusätzliche semantische Informationen zu übermitteln (zum Beispiel `<b class="lead">` für den ersten Satz in einem Absatz). Dies erleichtert es, mehrere Anwendungsfälle von `<b>` zu verwalten, wenn sich Ihre stilistischen Anforderungen ändern, ohne dass alle Verwendungen im HTML geändert werden müssen.
- Historisch gesehen war das `<b>`-Element dazu gedacht, Text fett darzustellen. Stilinformationen wurden seit HTML4 als veraltet eingestuft, daher wurde die Bedeutung des `<b>`-Elements geändert.
- Wenn es keinen semantischen Zweck für die Verwendung des `<b>`-Elements gibt, sollten Sie stattdessen die CSS-Eigenschaft {{cssxref("font-weight")}} mit dem Wert `"bold"` verwenden, um Text fett darzustellen.

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
          >Flussinhalt</a
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
      <td>Keine, sowohl das Start- als auch das End-Tag sind obligatorisch.</td>
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
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <code
          ><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/generic_role"
            >generic</a
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

- Andere Elemente, die textuelle Semantik vermitteln: {{HTMLElement("a")}}, {{HTMLElement("em")}}, {{HTMLElement("strong")}}, {{HTMLElement("small")}}, {{HTMLElement("cite")}}, {{HTMLElement("q")}}, {{HTMLElement("dfn")}}, {{HTMLElement("abbr")}}, {{HTMLElement("time")}}, {{HTMLElement("code")}}, {{HTMLElement("var")}}, {{HTMLElement("samp")}}, {{HTMLElement("kbd")}}, {{HTMLElement("sub")}}, {{HTMLElement("sup")}}, {{HTMLElement("i")}}, {{HTMLElement("mark")}}, {{HTMLElement("ruby")}}, {{HTMLElement("rp")}}, {{HTMLElement("rt")}}, {{HTMLElement("bdo")}}, {{HTMLElement("span")}}, {{HTMLElement("br")}}, {{HTMLElement("wbr")}}.
- [Using \<b> and \<i> elements (W3C)](https://www.w3.org/International/questions/qa-b-and-i-tags)
