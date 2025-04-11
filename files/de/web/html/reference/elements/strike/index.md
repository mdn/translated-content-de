---
title: <strike>
slug: Web/HTML/Reference/Elements/strike
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar}}{{deprecated_header}}

Das **`<strike>`** [HTML](/de/docs/Web/HTML)-Element platziert eine Durchstreichungslinie (horizontale Linie) über den Text.

> [!WARNING]
> Dieses Element ist in HTML 4 und XHTML 1 veraltet und in der [HTML Living Standard](https://html.spec.whatwg.org/multipage/obsolete.html#strike) abgeschafft. Falls es semantisch passend ist, das heißt, wenn es _gelöschten_ Inhalt repräsentiert, verwenden Sie stattdessen {{HTMLElement("del")}}. In allen anderen Fällen verwenden Sie {{HTMLElement("s")}}.

## Attribute

Dieses Element enthält die [Globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

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
- Die CSS-Eigenschaft {{CSSxRef("text-decoration")}} kann verwendet werden, um Text mit einer Durchstreichung zu stylen.
