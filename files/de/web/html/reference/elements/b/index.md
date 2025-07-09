---
title: "<b>: Das Bring Attention To-Element"
slug: Web/HTML/Reference/Elements/b
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

Das **`<b>`**-Element von [HTML](/de/docs/Web/HTML) wird verwendet, um die Aufmerksamkeit des Lesers auf die Inhalte des Elements zu lenken, denen ansonsten keine besondere Bedeutung beigemessen wird. Dies war früher als Fettschrift-Element bekannt, und die meisten Browser zeichnen den Text weiterhin fett. Sie sollten jedoch `<b>` nicht verwenden, um Text zu formatieren oder ihm Bedeutung zu verleihen. Wenn Sie fetten Text erstellen möchten, sollten Sie die CSS-Eigenschaft {{cssxref("font-weight")}} verwenden. Wenn Sie angeben möchten, dass ein Element von besonderer Bedeutung ist, sollten Sie das {{HTMLElement("strong")}}-Element verwenden.

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

- Verwenden Sie `<b>` für Fälle wie Schlüsselwörter in einer Zusammenfassung, Produktnamen in einer Bewertung oder andere Textabschnitte, deren typische Darstellung fett wäre (aber keine besondere Bedeutung einschließt).
- Verwechseln Sie das `<b>`-Element nicht mit den {{HTMLElement("strong")}}, {{HTMLElement("em")}} oder {{HTMLElement("mark")}}-Elementen. Das {{HTMLElement("strong")}}-Element steht für Text von bestimmter _Wichtigkeit_, {{HTMLElement("em")}} betont den Text, und das {{HTMLElement("mark")}}-Element zeigt Text von bestimmter _Relevanz_. Das `<b>`-Element vermittelt keine solche spezielle semantische Information; verwenden Sie es nur, wenn keine anderen passen.
- Ebenso sollten Titel und Überschriften nicht mit dem `<b>`-Element markiert werden. Verwenden Sie dafür die Tags {{HTMLElement("Heading_Elements", "h1")}} bis {{HTMLElement("Heading_Elements", "h6")}}. Außerdem können Stylesheets den Standardstil dieser Elemente ändern, sodass sie nicht _notwendigerweise_ fett angezeigt werden.
- Es ist eine gute Praxis, das [`class`](/de/docs/Web/HTML/Reference/Global_attributes/class)-Attribut im `<b>`-Element zu verwenden, um bei Bedarf zusätzliche semantische Informationen zu vermitteln (zum Beispiel `<b class="lead">` für den ersten Satz in einem Absatz). Dies erleichtert die Verwaltung mehrerer Anwendungsfälle von `<b>`, wenn sich Ihre stilistischen Anforderungen ändern, ohne alle Verwendungen im HTML ändern zu müssen.
- Historisch gesehen war das `<b>`-Element dazu gedacht, Text fett darzustellen. Seit HTML4 wurde Stil-Information als veraltet erklärt, daher wurde die Bedeutung des `<b>`-Elements geändert.
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
          >Flussinhalt</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phrasierungsinhalt</a
        >, fühlbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
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
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phrasierungsinhalt</a
        > akzeptiert.
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

- Andere Elemente, die textuelle Semantik vermitteln: {{HTMLElement("a")}}, {{HTMLElement("em")}}, {{HTMLElement("strong")}}, {{HTMLElement("small")}}, {{HTMLElement("cite")}}, {{HTMLElement("q")}}, {{HTMLElement("dfn")}}, {{HTMLElement("abbr")}}, {{HTMLElement("time")}}, {{HTMLElement("code")}}, {{HTMLElement("var")}}, {{HTMLElement("samp")}}, {{HTMLElement("kbd")}}, {{HTMLElement("sub")}}, {{HTMLElement("sup")}}, {{HTMLElement("i")}}, {{HTMLElement("mark")}}, {{HTMLElement("ruby")}}, {{HTMLElement("rp")}}, {{HTMLElement("rt")}}, {{HTMLElement("bdo")}}, {{HTMLElement("span")}}, {{HTMLElement("br")}}, {{HTMLElement("wbr")}}.
- [Verwendung von \<b> und \<i> Elementen (W3C)](https://www.w3.org/International/questions/qa-b-and-i-tags)
