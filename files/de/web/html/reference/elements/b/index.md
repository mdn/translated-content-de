---
title: "<b>: Das Element zur Hervorhebung"
slug: Web/HTML/Reference/Elements/b
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar}}

Das **`<b>`**-[HTML](/de/docs/Web/HTML)-Element wird verwendet, um die Aufmerksamkeit des Lesers auf den Inhalt des Elements zu lenken, dem ansonsten keine besondere Bedeutung zukommt. Früher war es als Fettgedrucktes Element bekannt, und die meisten Browser stellen den Text immer noch fettgedruckt dar. Sie sollten `<b>` jedoch nicht verwenden, um Text zu stylen oder um Wichtigkeit zu verleihen. Wenn Sie fettgedruckten Text erstellen möchten, sollten Sie die CSS-Eigenschaft {{cssxref("font-weight")}} verwenden. Wenn Sie ein Element als besonders wichtig kennzeichnen möchten, sollten Sie das {{HTMLElement("strong")}}-Element verwenden.

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

Dieses Element enthält nur die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

## Anwendungshinweise

- Verwenden Sie `<b>` für Fälle wie Schlüsselwörter in einer Zusammenfassung, Produktnamen in einer Rezension oder andere Textbereiche, deren typische Darstellung fettgedruckt wäre (aber keine besondere Bedeutung einschließt).
- Verwechseln Sie das `<b>`-Element nicht mit den Elementen {{HTMLElement("strong")}}, {{HTMLElement("em")}} oder {{HTMLElement("mark")}}. Das {{HTMLElement("strong")}}-Element steht für Text von besonderer _Wichtigkeit_, {{HTMLElement("em")}} setzt einen bestimmten Akzent auf den Text und das {{HTMLElement("mark")}}-Element steht für Text von besonderer _Relevanz_. Das `<b>`-Element vermittelt solche besonderen semantischen Informationen nicht; verwenden Sie es nur, wenn kein anderes Element passt.
- Verwenden Sie das `<b>`-Element nicht für Titel und Überschriften. Hierfür sollten die Tags von {{HTMLElement("Heading_Elements", "h1")}} bis {{HTMLElement("Heading_Elements", "h6")}} genutzt werden. Zudem können Stylesheets den Standardstil dieser Elemente ändern, sodass sie nicht _zwangsläufig_ fett dargestellt werden.
- Es ist eine gute Praxis, das [`class`](/de/docs/Web/HTML/Reference/Global_attributes/class)-Attribut bei dem `<b>`-Element zu verwenden, um bei Bedarf zusätzliche semantische Informationen zu vermitteln (zum Beispiel `<b class="lead">` für den ersten Satz eines Absatzes). Dies erleichtert die Verwaltung mehrerer Verwendungsfälle von `<b>`, wenn sich Ihre stilistischen Anforderungen ändern, ohne dass alle Verwendungen in der HTML geändert werden müssen.
- Historisch gesehen sollte das `<b>`-Element Text fett darstellen. Seit HTML4 wurde Styling-Informationen als veraltet betrachtet, so dass die Bedeutung des `<b>`-Elements geändert wurde.
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
        <a href="/de/docs/Web/HTML/Guides/Content_categories"
          >Inhaltskategorien</a
        >
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content"
          >Fließende Inhalte</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >phrasierende Inhalte</a
        >, fassbare Inhalte.
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässiger Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phrasierende Inhalte</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das Start- als auch das End-Tag sind erforderlich.</td>
    </tr>
    <tr>
      <th scope="row">Zulässige Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >phrasierende Inhalte</a
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

- Weitere Elemente, die semantische Informationen auf Textebene vermitteln: {{HTMLElement("a")}}, {{HTMLElement("em")}}, {{HTMLElement("strong")}}, {{HTMLElement("small")}}, {{HTMLElement("cite")}}, {{HTMLElement("q")}}, {{HTMLElement("dfn")}}, {{HTMLElement("abbr")}}, {{HTMLElement("time")}}, {{HTMLElement("code")}}, {{HTMLElement("var")}}, {{HTMLElement("samp")}}, {{HTMLElement("kbd")}}, {{HTMLElement("sub")}}, {{HTMLElement("sup")}}, {{HTMLElement("i")}}, {{HTMLElement("mark")}}, {{HTMLElement("ruby")}}, {{HTMLElement("rp")}}, {{HTMLElement("rt")}}, {{HTMLElement("bdo")}}, {{HTMLElement("span")}}, {{HTMLElement("br")}}, {{HTMLElement("wbr")}}.
- [Verwendung von \<b>- und \<i>-Elementen (W3C)](https://www.w3.org/International/questions/qa-b-and-i-tags)
