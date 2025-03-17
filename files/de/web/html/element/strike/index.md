---
title: <strike>
slug: Web/HTML/Element/strike
l10n:
  sourceCommit: b7955e77cd4293adf45ef23686df50b0305f02ad
---

{{HTMLSidebar}}{{deprecated_header}}

Das **`<strike>`**-Element [HTML](/de/docs/Web/HTML) fügt einen Durchstreichungseffekt (horizontale Linie) über den Text ein.

> [!WARNING]
> Dieses Element ist in HTML 4 und XHTML 1 veraltet und im [HTML Living Standard](https://html.spec.whatwg.org/multipage/obsolete.html#strike) überflüssig geworden. Wenn es semantisch angemessen ist, d.h. wenn es _gelöschten_ Inhalt darstellt, verwenden Sie stattdessen {{HTMLElement("del")}}. In allen anderen Fällen verwenden Sie {{HTMLElement("s")}}.

## Attribute

Dieses Element beinhaltet die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

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
- Die CSS-Eigenschaft {{CSSxRef("text-decoration")}} kann verwendet werden, um Text mit einem Durchstreichungseffekt zu gestalten.
