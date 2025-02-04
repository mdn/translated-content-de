---
title: text-decoration
slug: Web/SVG/Attribute/text-decoration
l10n:
  sourceCommit: 64d85b74ce1cce6a24ae8979da4f3f4a01a47229
---

{{SVGRef}}

Das **`text-decoration`** Attribut definiert, ob Text mit einer Unterstreichung, Überstrich und/oder durchgestrichen dekoriert wird. Es ist eine Kurzform für die {{cssxref("text-decoration-line")}} und {{cssxref("text-decoration-style")}} Eigenschaften.

Die Füllung und der Strich der Textdekoration werden durch die Füllung und den Strich des Textes an dem Punkt bestimmt, an dem die Textdekoration deklariert wird.

Die Farbfolge der Textdekoration, d.h. die Füllung und der Strich, wird durch den Wert des {{SVGAttr("paint-order")}} Attributs an dem Punkt bestimmt, an dem die Textdekoration deklariert wird.

> [!NOTE]
> Als Präsentationsattribut kann `text-decoration` als CSS-Eigenschaft verwendet werden. Weitere Informationen finden Sie in der CSS {{cssxref("text-decoration")}} Eigenschaft.

Dieses Attribut kann mit den folgenden SVG-Elementen verwendet werden:

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

## Nutzungshinweise

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
      <td>Siehe einzelne Eigenschaften</td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

Eine Beschreibung der Werte finden Sie in der [CSS `text-decoration`](/de/docs/Web/CSS/text-decoration#values) Eigenschaft.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- CSS {{cssxref("text-decoration")}} Eigenschaft
