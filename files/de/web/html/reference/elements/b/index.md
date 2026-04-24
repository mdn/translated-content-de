---
title: "`<b>` HTML-Element zur Hervorhebung"
short-title: <b>
slug: Web/HTML/Reference/Elements/b
l10n:
  sourceCommit: 599ae8b7ad414e91df473d91983f4ffc5cafabb3
---

Das **`<b>`** [HTML](/de/docs/Web/HTML)-Element wird verwendet, um die Aufmerksamkeit des Lesers auf den Inhalt des Elements zu lenken, dem ansonsten keine besondere Bedeutung zugeschrieben wird. Früher war es als Fettschrift-Element bekannt, und die meisten Browser zeigen den Text weiterhin in Fettschrift an. Allerdings sollten Sie `<b>` nicht für die Textgestaltung oder zur Vermittlung von Bedeutung verwenden. Wenn Sie fetten Text erstellen möchten, sollten Sie die CSS-Eigenschaft {{cssxref("font-weight")}} verwenden. Wenn Sie anzeigen möchten, dass ein Element von besonderer Bedeutung ist, sollten Sie das {{HTMLElement("strong")}}-Element verwenden.

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

Dieses Element umfasst nur die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

## Verwendungshinweise

- Verwenden Sie das `<b>` für Fälle wie Schlüsselwörter in einer Zusammenfassung, Produktnamen in einer Rezension oder andere Textbereiche, deren typische Darstellung fettgedruckt wäre (aber keine besondere Bedeutung haben).
- Verwechseln Sie das `<b>`-Element nicht mit den Elementen {{HTMLElement("strong")}}, {{HTMLElement("em")}} oder {{HTMLElement("mark")}}. Das {{HTMLElement("strong")}}-Element steht für Text von gewisser _Wichtigkeit_, {{HTMLElement("em")}} legt besonderen Nachdruck auf den Text und das {{HTMLElement("mark")}}-Element repräsentiert Text von gewisser _Relevanz_. Das `<b>`-Element übermittelt keine solche besondere semantische Information; verwenden Sie es nur, wenn keine anderen passen.
- Ebenso markieren Sie keine Titel und Überschriften mit dem `<b>`-Element. Verwenden Sie dazu die Tags {{HTMLElement("Heading_Elements", "h1")}} bis {{HTMLElement("Heading_Elements", "h6")}}. Außerdem können Stylesheets den Standardstil dieser Elemente ändern, so dass sie nicht _notwendigerweise_ fett angezeigt werden.
- Es ist eine gute Praxis, das [`class`](/de/docs/Web/HTML/Reference/Global_attributes/class)-Attribut am `<b>`-Element zu verwenden, um bei Bedarf zusätzliche semantische Informationen zu vermitteln (zum Beispiel `<b class="lead">` für den ersten Satz in einem Absatz). Dies erleichtert das Verwalten mehrerer Verwendungsszenarien von `<b>`, falls sich Ihre stilistischen Anforderungen ändern, ohne dass alle Verwendungen im HTML geändert werden müssen.
- Historisch gesehen war das `<b>`-Element dazu gedacht, Text fett darzustellen. Stilinformatio­nen wurden seit HTML4 als veraltet betrachtet, weshalb die Bedeutung des `<b>`-Elements geändert wurde.
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
        <a href="/de/docs/Web/HTML/Guides/Content_categories"
          >Inhaltskategorien</a
        >
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content"
          >Fließtext</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phrasierungsinhalt</a
        >, wahrnehmbarer Inhalt.
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
      <td>Keine, sowohl das öffnende als auch das schließende Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Zulässige Eltern</th>
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

- Andere Elemente, die textuelle Semantik vermitteln: {{HTMLElement("a")}}, {{HTMLElement("em")}}, {{HTMLElement("strong")}}, {{HTMLElement("small")}}, {{HTMLElement("cite")}}, {{HTMLElement("q")}}, {{HTMLElement("dfn")}}, {{HTMLElement("abbr")}}, {{HTMLElement("time")}}, {{HTMLElement("code")}}, {{HTMLElement("var")}}, {{HTMLElement("samp")}}, {{HTMLElement("kbd")}}, {{HTMLElement("sub")}}, {{HTMLElement("sup")}}, {{HTMLElement("i")}}, {{HTMLElement("mark")}}, {{HTMLElement("ruby")}}, {{HTMLElement("rp")}}, {{HTMLElement("rt")}}, {{HTMLElement("bdo")}}, {{HTMLElement("span")}}, {{HTMLElement("br")}}, {{HTMLElement("wbr")}}.
- [Verwendung von \<b> und \<i> Elementen (W3C)](https://www.w3.org/International/questions/qa-b-and-i-tags)
