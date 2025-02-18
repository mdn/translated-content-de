---
title: overflow
slug: Web/SVG/Attribute/overflow
l10n:
  sourceCommit: 892a7fb41030e07dfd8daaa57d874239be1ecc8a
---

{{SVGRef}}

Das **`overflow`**-Attribut legt fest, was passiert, wenn der Inhalt eines Elements zu groß ist, um in seinen Blockformatierungskontext zu passen. **Diese Funktion ist noch nicht weit verbreitet implementiert**.

Dieses Attribut hat die gleichen Parameterwerte und Bedeutungen wie die CSS-Eigenschaft {{cssxref("overflow")}}, jedoch gelten die folgenden zusätzlichen Punkte:

- Wenn es den Wert `visible` hat, hat das Attribut keine Wirkung (d. h., es wird kein Clipping-Rechteck erstellt).
- Wenn die `overflow`-Eigenschaft den Wert `hidden` oder `scroll` hat, wird ein Clip in der exakten Größe des SVG-Ansichtsfensters angewendet.
- Wenn `scroll` für ein {{SVGElement("svg")}}-Element angegeben wird, wird normalerweise eine Bildlaufleiste oder ein Panner für das SVG-Ansichtsfenster angezeigt, unabhängig davon, ob ein Teil des Inhalts abgeschnitten ist oder nicht.
- Innerhalb von SVG-Inhalten bedeutet der Wert `auto`, dass alle gerenderten Inhalte für Kindelemente sichtbar sein müssen, entweder durch einen Bildlaufmechanismus oder durch Rendering ohne Clip.

> [!NOTE]
> Obwohl der Anfangswert für `overflow` `auto` ist, wird er im User-Agent-Stylesheet für das {{SVGElement("svg")}}-Element (wenn es nicht das Stamm-Element eines eigenständigen Dokuments ist), das {{SVGElement("pattern")}}-Element und das {{SVGElement("marker")}}-Element standardmäßig auf `hidden` überschrieben.

> [!NOTE]
> Als Präsentationsattribut hat `overflow` auch ein entsprechendes CSS-Eigenschaftsgegenstück: {{cssxref("overflow")}}. Wenn beide angegeben sind, hat die CSS-Eigenschaft Vorrang.

Dieses Attribut kann mit den folgenden SVG-Elementen verwendet werden:

- {{SVGElement("foreignObject")}}
- {{SVGElement("image")}}
- {{SVGElement("marker")}}
- {{SVGElement("pattern")}}
- {{SVGElement("symbol")}}
- {{SVGElement("svg")}}
- {{SVGElement("text")}}

## Beispiel

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 200 30" xmlns="http://www.w3.org/2000/svg" overflow="auto">
  <text y="20">
    This text is wider than the SVG, so there should be a scrollbar shown.
  </text>
</svg>
```

{{EmbedLiveSample("Example", "200", "50")}}

## Hinweise zur Verwendung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <code>visible</code> | <code>hidden</code> | <code>scroll</code> |
        <code>auto</code>
      </td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><code>visible</code></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

Für eine Beschreibung der Werte siehe die CSS-Eigenschaft {{cssxref("overflow")}}.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- CSS {{cssxref("overflow")}}-Eigenschaft
