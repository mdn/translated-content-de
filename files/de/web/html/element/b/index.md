---
title: "<b>: Das Aufmerksamkeits-Element"
slug: Web/HTML/Element/b
l10n:
  sourceCommit: 816cc4d4a5a318a23222946b6981bb92b499aebb
---

{{HTMLSidebar}}

Das **`<b>`** [HTML](/de/docs/Web/HTML)-Element wird verwendet, um die Aufmerksamkeit des Lesers auf den Inhalt des Elements zu lenken, dem ansonsten keine besondere Bedeutung beigemessen wird. Früher war es als das Fettelement bekannt, und die meisten Browser zeigen den Text immer noch fett an. Sie sollten jedoch `<b>` nicht verwenden, um Text zu stylen oder Bedeutung zu verleihen. Wenn Sie fettgedruckten Text erstellen möchten, sollten Sie die CSS-Eigenschaft {{cssxref("font-weight")}} verwenden. Wenn Sie angeben möchten, dass ein Element von besonderer Bedeutung ist, sollten Sie das {{HTMLElement("strong")}}-Element verwenden.

{{EmbedInteractiveExample("pages/tabbed/b.html", "tabbed-shorter")}}

## Attribute

Dieses Element umfasst nur die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

## Verwendungshinweise

- Verwenden Sie das `<b>` für Fälle wie Schlüsselwörter in einer Zusammenfassung, Produktnamen in einer Rezension oder andere Textabschnitte, deren übliche Darstellung fett gedruckt wäre (aber ohne besondere Bedeutung).
- Verwechseln Sie das `<b>`-Element nicht mit den Elementen {{HTMLElement("strong")}}, {{HTMLElement("em")}} oder {{HTMLElement("mark")}}. Das {{HTMLElement("strong")}}-Element steht für Text von gewisser _Bedeutung_, {{HTMLElement("em")}} legt eine gewisse Betonung auf den Text und das {{HTMLElement("mark")}}-Element steht für Text von gewisser _Relevanz_. Das `<b>`-Element enthält keine solche besondere semantische Information; verwenden Sie es nur, wenn keine anderen passen.
- Markieren Sie Titel und Überschriften nicht mit dem `<b>`-Element. Verwenden Sie hierfür die Tags {{HTMLElement("Heading_Elements", "h1")}} bis {{HTMLElement("Heading_Elements", "h6")}}. Darüber hinaus können Stylesheets den Standardstil dieser Elemente ändern, sodass sie _nicht unbedingt_ fett dargestellt werden.
- Es ist eine gute Praxis, das Attribut [`class`](/de/docs/Web/HTML/Global_attributes/class) auf dem `<b>`-Element zu verwenden, um bei Bedarf zusätzliche semantische Informationen zu übermitteln (zum Beispiel `<b class="lead">` für den ersten Satz in einem Absatz). Dies erleichtert die Verwaltung mehrerer Anwendungsfälle von `<b>`, wenn sich Ihre stilistischen Anforderungen ändern, ohne dass alle Verwendungen im HTML geändert werden müssen.
- Historisch gesehen war das `<b>`-Element dazu gedacht, Text fett zu machen. Styling-Informationen wurden seit HTML4 als veraltet markiert, sodass sich die Bedeutung des `<b>`-Elements geändert hat.
- Wenn es keinen semantischen Zweck für die Verwendung des `<b>`-Elements gibt, sollten Sie stattdessen die CSS-Eigenschaft {{cssxref("font-weight")}} mit dem Wert `"bold"` verwenden, um Text fett zu machen.

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
        <a href="/de/docs/Web/HTML/Content_categories">Inhaltskategorien</a>
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#flow_content">Fließinhalt</a>,
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content">Phrasing-Inhalt</a>, greifbar Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content">Phrasing-Inhalt</a>.
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
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content">Phrasing-Inhalt</a> akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <code
          ><a href="/de/docs/Web/Accessibility/ARIA/Roles/generic_role">generic</a></code>
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

- Andere Elemente, die textuelle Semantik vermitteln: {{HTMLElement("a")}}, {{HTMLElement("em")}}, {{HTMLElement("strong")}}, {{HTMLElement("small")}}, {{HTMLElement("cite")}}, {{HTMLElement("q")}}, {{HTMLElement("dfn")}}, {{HTMLElement("abbr")}}, {{HTMLElement("time")}}, {{HTMLElement("code")}}, {{HTMLElement("var")}}, {{HTMLElement("samp")}}, {{HTMLElement("kbd")}}, {{HTMLElement("sub")}}, {{HTMLElement("sup")}}, {{HTMLElement("i")}}, {{HTMLElement("mark")}}, {{HTMLElement("ruby")}}, {{HTMLElement("rp")}}, {{HTMLElement("rt")}}, {{HTMLElement("bdo")}}, {{HTMLElement("span")}}, {{HTMLElement("br")}}, {{HTMLElement("wbr")}}.
- [Verwendung von \<b> und \<i> Elementen (W3C)](https://www.w3.org/International/questions/qa-b-and-i-tags)
