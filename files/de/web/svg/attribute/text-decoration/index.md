---
title: text-decoration
slug: Web/SVG/Attribute/text-decoration
l10n:
  sourceCommit: a7615ee2f9e22946edff7633962bc1d9eee9e0ad
---

{{SVGRef}}

Das **`text-decoration`** Attribut definiert, ob Text mit einer Unterlinie, Überlinie und/oder Durchstreichung verziert wird. Es ist eine Kurzform für die Eigenschaften {{cssxref("text-decoration-line")}} und {{cssxref("text-decoration-style")}}.

Die Füllung und der Umriss der Textdekoration werden durch die Füllung und den Umriss des Textes an dem Punkt bestimmt, an dem die Textdekoration deklariert wird.

Die Reihenfolge des Zeichnens der Textdekoration, d.h. die Füllung und der Umriss, wird durch den Wert des Attributs {{SVGAttr("paint-order")}} an dem Punkt bestimmt, an dem die Textdekoration deklariert wird.

> [!NOTE]
> Als Präsentationsattribut kann `text-decoration` als CSS-Eigenschaft verwendet werden. Weitere Informationen finden Sie in der CSS-Eigenschaft {{cssxref("text-decoration")}}.

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

Für eine Beschreibung der Werte siehe die [CSS `text-decoration`](/de/docs/Web/CSS/text-decoration#values) Eigenschaft.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("text-decoration")}}
