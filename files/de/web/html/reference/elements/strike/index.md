---
title: "`<strike>` HTML Strikethrough-Element"
short-title: <strike>
slug: Web/HTML/Reference/Elements/strike
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

Das **`<strike>`** [HTML](/de/docs/Web/HTML)-Element platziert einen Durchstrich (horizontale Linie) über Text.

> [!WARNING]
> Dieses Element ist in HTML 4 und XHTML 1 veraltet und wird im [HTML Living Standard](https://html.spec.whatwg.org/multipage/obsolete.html#strike) als überholt betrachtet. Wenn es semantisch angemessen ist, d.h. wenn es _gelöschte_ Inhalte darstellt, verwenden Sie stattdessen {{HTMLElement("del")}}. In allen anderen Fällen verwenden Sie {{HTMLElement("s")}}.

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
- Die CSS-Eigenschaft {{CSSxRef("text-decoration")}} kann verwendet werden, um Text mit einem Durchstrich zu formatieren.
