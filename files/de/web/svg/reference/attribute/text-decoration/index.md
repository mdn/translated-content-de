---
title: text-decoration
slug: Web/SVG/Reference/Attribute/text-decoration
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

Das **`text-decoration`** Attribut definiert, ob Text mit einer Unterstreichung, Überstrich und/oder Durchstreichung verziert wird. Es ist eine Kurzform für die Eigenschaften {{cssxref("text-decoration-line")}} und {{cssxref("text-decoration-style")}}.

Die Füllung und der Umriss des Textdekors werden durch die Füllung und den Umriss des Textes an dem Punkt bestimmt, an dem das Textdekor deklariert wird.

Die Malreihenfolge des Textdekors, d.h. die Füllung und Umriss, wird durch den Wert des {{SVGAttr("paint-order")}} Attributs an dem Punkt bestimmt, an dem das Textdekor deklariert wird.

> [!NOTE]
> Als Präsentationsattribut hat `text-decoration` auch eine Entsprechung als CSS-Eigenschaft: {{cssxref("text-decoration")}}. Wenn beides angegeben ist, hat die CSS-Eigenschaft Vorrang.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

- {{SVGElement("text")}}
- {{SVGElement("textPath")}}
- {{SVGElement("tref")}}
- {{SVGElement("tspan")}}

## Beispiel

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 250 50" xmlns="http://www.w3.org/2000/svg">
  <text y="20" text-decoration="underline">Underlined text</text>
  <text x="0" y="40" text-decoration="line-through">Struck-through text</text>
</svg>
```

{{EmbedLiveSample("Example", "250", "100")}}

## Verwendungshinweise

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <code
          ><a href="/de/docs/Web/CSS/text-decoration-line"
            >&#x3C;'text-decoration-line'></a
          ></code
        >
        ||
        <code
          ><a href="/de/docs/Web/CSS/text-decoration-style"
            >&#x3C;'text-decoration-style'></a
          ></code
        >
        ||
        <code
          ><a href="/de/docs/Web/CSS/text-decoration-color"
            >&#x3C;'text-decoration-color'></a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td>Siehe individuelle Eigenschaften</td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

Für eine Beschreibung der Werte bitte auf die [CSS `text-decoration`](/de/docs/Web/CSS/text-decoration#values) Eigenschaft verweisen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- CSS {{cssxref("text-decoration")}} Eigenschaft
