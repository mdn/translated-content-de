---
title: text-decoration
slug: Web/SVG/Reference/Attribute/text-decoration
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

Das **`text-decoration`** Attribut definiert, ob der Text mit einer Unterstreichung, Überstreichung und/oder Durchstreichung dekoriert wird. Es ist eine Kurzform für die {{cssxref("text-decoration-line")}} und {{cssxref("text-decoration-style")}} Eigenschaften.

Die Füllung und der Umriss der Textdekoration werden durch die Füllung und den Umriss des Textes an dem Punkt bestimmt, an dem die Textdekoration deklariert wird.

Die Malreihenfolge der Textdekoration, d.h. die Füllung und der Umriss, wird durch den Wert des {{SVGAttr("paint-order")}} Attributs an dem Punkt bestimmt, an dem die Textdekoration deklariert wird.

> [!NOTE]
> Als Präsentationsattribut hat `text-decoration` auch ein CSS-Eigenschaften-Gegenstück: {{cssxref("text-decoration")}}. Wenn beide angegeben sind, hat die CSS-Eigenschaft Vorrang.

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

## Anwendungshinweise

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

Für eine Beschreibung der Werte siehe bitte die [CSS `text-decoration`](/de/docs/Web/CSS/text-decoration#values) Eigenschaft.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- CSS {{cssxref("text-decoration")}} Eigenschaft
