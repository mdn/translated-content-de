---
title: "<b>: Das Bring Attention To-Element"
slug: Web/HTML/Element/b
l10n:
  sourceCommit: fdd3ac5598c3ddceb71e59949b003936ae99f647
---

{{HTMLSidebar}}

Das **`<b>`** [HTML](/de/docs/Web/HTML)-Element wird verwendet, um die Aufmerksamkeit des Lesers auf den Inhalt des Elements zu lenken, dem sonst keine besondere Bedeutung beigemessen wird. Früher war es bekannt als das Boldface-Element und die meisten Browser stellen den Text immer noch fett dar. Sie sollten `<b>` jedoch nicht verwenden, um Text zu stylen oder ihm Bedeutung zu verleihen. Wenn Sie fettgedruckten Text erstellen möchten, sollten Sie die CSS {{cssxref("font-weight")}} Eigenschaft verwenden. Wenn Sie angeben möchten, dass ein Element von besonderer Bedeutung ist, sollten Sie das {{HTMLElement("strong")}}-Element verwenden.

{{EmbedInteractiveExample("pages/tabbed/b.html", "tabbed-shorter")}}

## Attribute

Dieses Element enthält nur die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

## Anwendungshinweise

- Verwenden Sie `<b>` für Fälle wie Schlüsselwörter in einer Zusammenfassung, Produktnamen in einer Rezension oder andere Textabschnitte, deren typische Präsentation fettgedruckt wäre (aber keine besondere Bedeutung einschließt).
- Verwechseln Sie das `<b>`-Element nicht mit den Elementen {{HTMLElement("strong")}}, {{HTMLElement("em")}} oder {{HTMLElement("mark")}}. Das {{HTMLElement("strong")}}-Element steht für Text von gewisser _Wichtigkeit_, {{HTMLElement("em")}} betont den Text und das {{HTMLElement("mark")}}-Element stellt Text mit gewisser _Relevanz_ dar. Das `<b>`-Element vermittelt keine solche spezielle semantische Information; verwenden Sie es nur, wenn keine anderen passen.
- Ebenso sollten Titel und Überschriften nicht mit dem `<b>`-Element markiert werden. Verwenden Sie dafür die {{HTMLElement("Heading_Elements", "h1")}} bis {{HTMLElement("Heading_Elements", "h6")}} Tags. Zudem können Stylesheets den Standardstil dieser Elemente ändern, sodass sie nicht _zwangsläufig_ fett angezeigt werden.
- Es ist eine gute Praxis, das [`class`](/de/docs/Web/HTML/Global_attributes#class)-Attribut auf dem `<b>`-Element zu verwenden, um bei Bedarf zusätzliche semantische Informationen zu vermitteln (zum Beispiel `<b class="lead">` für den ersten Satz in einem Absatz). Dies erleichtert das Verwalten mehrerer Anwendungsfälle von `<b>`, wenn sich Ihre stilistischen Bedürfnisse ändern, ohne alle Verwendungen im HTML ändern zu müssen.
- Historisch gesehen war das `<b>`-Element dazu gedacht, Text fett darzustellen. Stilinformationen wurden seit HTML4 als veraltet betrachtet, daher wurde die Bedeutung des `<b>`-Elements geändert.
- Wenn es keinen semantischen Zweck für die Verwendung des `<b>`-Elements gibt, sollten Sie stattdessen die CSS {{cssxref("font-weight")}}-Eigenschaft mit dem Wert `"bold"` verwenden, um Text fett zu machen.

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
        >
        akzeptiert.
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
- [Verwendung von \<b> und \<i> Elementen (W3C)](https://www.w3.org/International/questions/qa-b-and-i-tags)
