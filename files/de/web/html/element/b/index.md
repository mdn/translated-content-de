---
title: "<b>: Das Element, um Aufmerksamkeit zu erregen"
slug: Web/HTML/Element/b
l10n:
  sourceCommit: 8b02826c79b090b5af0d68ae1ef39f932a66a7f1
---

{{HTMLSidebar}}

Das **`<b>`**-[HTML](/de/docs/Web/HTML)-Element wird verwendet, um die Aufmerksamkeit des Lesers auf den Inhalt des Elements zu lenken, dem ansonsten keine besondere Bedeutung beigemessen wird. Früher war es als Fettschrift-Element bekannt, und die meisten Browser stellen den Text weiterhin in Fettschrift dar. Sie sollten jedoch `<b>` nicht verwenden, um Text zu stylen oder ihm Bedeutung beizumessen. Wenn Sie Fettschrift erstellen möchten, sollten Sie die CSS-Eigenschaft {{cssxref("font-weight")}} verwenden. Wenn Sie angeben möchten, dass ein Element von besonderer Bedeutung ist, sollten Sie das {{HTMLElement("strong")}}-Element verwenden.

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

Dieses Element enthält nur die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

## Nutzungshinweise

- Verwenden Sie `<b>` in Fällen wie Schlüsselwörtern in einer Zusammenfassung, Produktnamen in einer Rezension oder anderen Textspannen, deren typische Darstellung fettdruck ist (aber keine besondere Bedeutung einschließt).
- Verwechseln Sie das `<b>`-Element nicht mit den Elementen {{HTMLElement("strong")}}, {{HTMLElement("em")}} oder {{HTMLElement("mark")}}. Das {{HTMLElement("strong")}}-Element steht für Text mit gewisser _Bedeutung_, {{HTMLElement("em")}} hebt den Text hervor und das {{HTMLElement("mark")}}-Element steht für Text mit gewisser _Relevanz_. Das `<b>`-Element vermittelt keine solchen besonderen semantischen Informationen; verwenden Sie es nur, wenn keine anderen passen.
- Markieren Sie Titel und Überschriften nicht mit dem `<b>`-Element. Hierfür sollten Sie die Tags von {{HTMLElement("Heading_Elements", "h1")}} bis {{HTMLElement("Heading_Elements", "h6")}} verwenden. Außerdem können Stylesheets den Standardstil dieser Elemente ändern, sodass sie nicht _notwendigerweise_ fett dargestellt werden.
- Es ist eine gute Praxis, das [`class`](/de/docs/Web/HTML/Global_attributes/class)-Attribut auf dem `<b>`-Element zu verwenden, um bei Bedarf zusätzliche semantische Informationen zu vermitteln (zum Beispiel `<b class="lead">` für den ersten Satz in einem Absatz). Dies erleichtert es, mehrere Anwendungsfälle von `<b>` zu verwalten, wenn sich Ihre stilistischen Bedürfnisse ändern, ohne dass alle Verwendungen im HTML geändert werden müssen.
- Historisch gesehen war das `<b>`-Element dazu gedacht, Text fett darzustellen. Stilinformationen wurden seit HTML4 als veraltet angesehen, daher hat sich die Bedeutung des `<b>`-Elements geändert.
- Wenn es keinen semantischen Zweck für die Verwendung des `<b>`-Elements gibt, sollten Sie die CSS-Eigenschaft {{cssxref("font-weight")}} mit dem Wert `"bold"` verwenden, um Text fett zu machen.

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
          >Fließender Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasierungsinhalt</a
        >, palpabler Inhalt.
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
      <td>Keine, sowohl das Start- als auch das End-Tag sind erforderlich.</td>
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
          ><a href="/de/docs/Web/Accessibility/ARIA/Roles/generic_role"
            >Generisch</a
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

- Andere Elemente, die textbezogene Semantik vermitteln: {{HTMLElement("a")}}, {{HTMLElement("em")}}, {{HTMLElement("strong")}}, {{HTMLElement("small")}}, {{HTMLElement("cite")}}, {{HTMLElement("q")}}, {{HTMLElement("dfn")}}, {{HTMLElement("abbr")}}, {{HTMLElement("time")}}, {{HTMLElement("code")}}, {{HTMLElement("var")}}, {{HTMLElement("samp")}}, {{HTMLElement("kbd")}}, {{HTMLElement("sub")}}, {{HTMLElement("sup")}}, {{HTMLElement("i")}}, {{HTMLElement("mark")}}, {{HTMLElement("ruby")}}, {{HTMLElement("rp")}}, {{HTMLElement("rt")}}, {{HTMLElement("bdo")}}, {{HTMLElement("span")}}, {{HTMLElement("br")}}, {{HTMLElement("wbr")}}.
- [Verwendung der \<b>- und \<i>-Elemente (W3C)](https://www.w3.org/International/questions/qa-b-and-i-tags)
