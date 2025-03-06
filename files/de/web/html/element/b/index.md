---
title: "<b>: Das Bring Attention To-Element"
slug: Web/HTML/Element/b
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{HTMLSidebar}}

Das **`<b>`** [HTML](/de/docs/Web/HTML)-Element wird verwendet, um die Aufmerksamkeit des Lesers auf den Inhalt des Elements zu lenken, der ansonsten keine besondere Bedeutung hat. Dies war früher als das Fettschrift-Element bekannt, und die meisten Browser stellen den Text weiterhin fett dar. Sie sollten jedoch `<b>` nicht verwenden, um Text zu gestalten oder ihm Bedeutung zu verleihen. Wenn Sie fetten Text erstellen möchten, sollten Sie die CSS-Eigenschaft {{cssxref("font-weight")}} verwenden. Wenn Sie angeben möchten, dass ein Element von besonderer Bedeutung ist, sollten Sie das {{HTMLElement("strong")}}-Element verwenden.

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
/* stylelint-disable-next-line block-no-empty */
b {
}
```

## Attribute

Dieses Element umfasst nur die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

## Verwendungsnotizen

- Verwenden Sie `<b>` für Fälle wie Schlüsselwörter in einer Zusammenfassung, Produktnamen in einer Rezension oder andere Textbereiche, deren übliche Darstellung fettschriftlich wäre (jedoch ohne besondere Bedeutung).
- Verwechseln Sie das `<b>`-Element nicht mit den {{HTMLElement("strong")}}, {{HTMLElement("em")}} oder {{HTMLElement("mark")}}-Elementen. Das {{HTMLElement("strong")}}-Element steht für Text von bestimmter _Bedeutung_, {{HTMLElement("em")}} legt etwas Betonung auf den Text, und das {{HTMLElement("mark")}}-Element steht für Text von bestimmter _Relevanz_. Das `<b>`-Element übermittelt keine derartige besondere semantische Information; verwenden Sie es nur, wenn keine anderen passen.
- Ebenso sollten Titel und Überschriften nicht mit dem `<b>`-Element gekennzeichnet werden. Verwenden Sie hierfür die {{HTMLElement("Heading_Elements", "h1")}} bis {{HTMLElement("Heading_Elements", "h6")}} Tags. Stylesheets können den Standardstil dieser Elemente ändern, sodass sie nicht _notwendigerweise_ fett dargestellt werden.
- Es ist eine gute Praxis, das [`class`](/de/docs/Web/HTML/Global_attributes/class)-Attribut auf dem `<b>`-Element zu verwenden, um gegebenenfalls zusätzliche semantische Informationen zu vermitteln (zum Beispiel `<b class="lead">` für den ersten Satz in einem Absatz). Dies erleichtert es, mehrere Anwendungsfälle von `<b>` zu verwalten, wenn sich Ihre stilistischen Bedürfnisse ändern, ohne dass alle seine Verwendungen im HTML geändert werden müssen.
- Historisch gesehen sollte das `<b>`-Element Text fett darstellen. Stilinformationen sind seit HTML4 veraltet, daher wurde die Bedeutung des `<b>`-Elements geändert.
- Wenn es keinen semantischen Zweck zur Nutzung des `<b>`-Elements gibt, sollten Sie stattdessen die CSS-Eigenschaft {{cssxref("font-weight")}} mit dem Wert `"bold"` verwenden, um Text fett zu machen.

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
          >Ausdrucksinhalt</a
        >, greifbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Ausdrucksinhalt</a
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
          >Ausdrucksinhalt</a
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

- Andere Elemente, die textuelle Semantik übermitteln: {{HTMLElement("a")}}, {{HTMLElement("em")}}, {{HTMLElement("strong")}}, {{HTMLElement("small")}}, {{HTMLElement("cite")}}, {{HTMLElement("q")}}, {{HTMLElement("dfn")}}, {{HTMLElement("abbr")}}, {{HTMLElement("time")}}, {{HTMLElement("code")}}, {{HTMLElement("var")}}, {{HTMLElement("samp")}}, {{HTMLElement("kbd")}}, {{HTMLElement("sub")}}, {{HTMLElement("sup")}}, {{HTMLElement("i")}}, {{HTMLElement("mark")}}, {{HTMLElement("ruby")}}, {{HTMLElement("rp")}}, {{HTMLElement("rt")}}, {{HTMLElement("bdo")}}, {{HTMLElement("span")}}, {{HTMLElement("br")}}, {{HTMLElement("wbr")}}.
- [Verwendung von \<b> und \<i>-Elementen (W3C)](https://www.w3.org/International/questions/qa-b-and-i-tags)
