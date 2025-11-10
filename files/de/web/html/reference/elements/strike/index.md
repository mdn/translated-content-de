---
title: <strike>
slug: Web/HTML/Reference/Elements/strike
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

{{deprecated_header}}

Das **`<strike>`**-[HTML](/de/docs/Web/HTML)-Element platziert einen Durchstrich (horizontale Linie) über den Text.

> [!WARNING]
> Dieses Element ist in HTML 4 und XHTML 1 veraltet und in der [HTML Living Standard](https://html.spec.whatwg.org/multipage/obsolete.html#strike) überflüssig. Wenn es semantisch angemessen ist, d.h. wenn es _gelöschten_ Inhalt darstellt, verwenden Sie stattdessen {{HTMLElement("del")}}. In allen anderen Fällen verwenden Sie {{HTMLElement("s")}}.

## Attribute

Dieses Element umfasst die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

## Beispiele

```html
&lt;strike&gt;: <strike>Today's Special: Salmon</strike> SOLD OUT<br />
&lt;s&gt;: <s>Today's Special: Salmon</s> SOLD OUT
```

### Ergebnis

{{EmbedLiveSample("Example")}}

## Technische Zusammenfassung

<table class="properties">
  <tbody>
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

- Das {{HTMLElement("s")}}-Element.
- Das {{HTMLElement("del")}}-Element sollte verwendet werden, wenn die Daten _gelöscht_ wurden.
- Die CSS-{{CSSxRef("text-decoration")}}-Eigenschaft kann verwendet werden, um Text mit einem Durchstrich zu gestalten.
