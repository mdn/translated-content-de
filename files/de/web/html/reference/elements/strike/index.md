---
title: "`<strike>` HTML-Element für durchgestrichenen Text"
short-title: <strike>
slug: Web/HTML/Reference/Elements/strike
l10n:
  sourceCommit: 7cabe7010a0ccfcf587ddac1571963eba102090d
---

Das [HTML](/de/docs/Web/HTML)-Element **`<strike>`** stellt Text mit einer horizontalen Linie durchgestrichen dar.

> [!WARNING]
> Dieses Element wurde in HTML 4 und XHTML 1 als veraltet eingestuft und ist im [HTML Living Standard](https://html.spec.whatwg.org/multipage/obsolete.html#strike) nicht mehr vorgesehen. Wenn es semantisch passend ist, das heißt, wenn der Text _gelöschten_ Inhalt darstellt, verwenden Sie stattdessen {{HTMLElement("del")}}. Verwenden Sie in allen anderen Fällen {{HTMLElement("s")}}.

## Attribute

Dieses Element unterstützt die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

## Beispiele

```html
&lt;strike&gt;: <strike>Today's Special: Salmon</strike> SOLD OUT<br />
&lt;s&gt;: <s>Today's Special: Salmon</s> SOLD OUT
```

### Ergebnis

{{EmbedLiveSample("examples")}}

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

- Das Element {{HTMLElement("s")}}.
- Das Element {{HTMLElement("del")}} sollte verwendet werden, wenn der Inhalt _gelöscht_ wurde.
- Mit der CSS-Eigenschaft {{CSSxRef("text-decoration")}} lässt sich Text durchgestrichen darstellen.
