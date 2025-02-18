---
title: display
slug: Web/SVG/Attribute/display
l10n:
  sourceCommit: 892a7fb41030e07dfd8daaa57d874239be1ecc8a
---

{{SVGRef}}

Das **`display`**-Attribut ermöglicht es Ihnen, die Darstellung von grafischen oder Container-Elementen zu steuern.

Ein Wert von `display="none"` zeigt an, dass das gegebene Element und seine Kinder nicht gerendert werden. Jeder andere Wert außer `none` oder `inherit` zeigt an, dass das gegebene Element vom Browser gerendert wird.

Wenn das `display`-Attribut auf ein Container-Element angewendet wird und auf `none` gesetzt ist, führt dies dazu, dass der Container und alle seine Kinder unsichtbar sind; es wirkt also auf Gruppen von Elementen als eine Einheit. Dies bedeutet, dass jedes Kind eines Elements mit `display="none"` niemals gerendert wird, selbst wenn das Kind einen anderen `display`-Wert als `none` hat.

Wenn das `display`-Attribut auf `none` gesetzt ist, wird das gegebene Element nicht Teil des Rendering-Baums. Das hat Auswirkungen auf die {{SVGElement("tspan")}}- und {{SVGElement("tref")}}-Elemente, die Verarbeitung von Ereignissen, die Berechnung des Begrenzungsrahmens und die Berechnung von Clipping-Pfaden:

- Wenn `display` auf einem {{SVGElement("tspan")}}- oder {{SVGElement("tref")}}-Element auf `none` gesetzt ist, wird die Textzeichenkette für Layoutzwecke ignoriert.
- Bezüglich Ereignissen gilt, dass ein Element keine Ereignisse empfängt, wenn `display` auf `none` gesetzt ist.
- Die Geometrie eines [grafischen Elements](/de/docs/Web/SVG/Element#graphics_elements) mit `display="none"` wird nicht in die Berechnung des Begrenzungsrahmens und der Clipping-Pfade einbezogen.

Das `display`-Attribut beeinflusst nur die direkte Darstellung eines gegebenen Elements, es verhindert jedoch nicht, dass Elemente von anderen Elementen referenziert werden. Zum Beispiel verhindert das Setzen von `display="none"` auf einem {{SVGElement("path")}}-Element, dass dieses Element direkt auf die Leinwand gerendert wird. Allerdings kann das {{SVGElement("path")}}-Element weiterhin von einem {{SVGElement("textPath")}} referenziert werden; seine Geometrie wird sogar für die Verarbeitung von Text-auf-einem-Pfad verwendet, selbst wenn das {{SVGElement("path")}} den `display`-Wert `none` hat.

Dieses Attribut beeinflusst auch die direkte Darstellung in Offscreen-Canvasen, wie sie bei Masken oder Clip-Pfaden vorkommt. Wenn z.B. `display="none"` auf einem Kind eines {{SVGElement("mask")}}-Elements gesetzt wird, verhindert dies, dass das entsprechende Kindelement als Teil der Maske gerendert wird. Ebenso verhindert das Setzen von `display="none"` auf ein Kind eines {{SVGElement("clipPath")}}-Elements, dass dieses Kindelement zum Clipping-Pfad beiträgt.

> [!NOTE]
> Als Präsentationsattribut hat `display` auch ein entsprechendes CSS-Eigenschafts-Pendant: {{cssxref("display")}}. Wenn beide angegeben sind, hat die CSS-Eigenschaft Vorrang.

Dieses Attribut kann mit jedem SVG-Element verwendet werden.

## Beispiel

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 220 100" xmlns="http://www.w3.org/2000/svg">
  <!-- Here the yellow rectangle is displayed -->
  <rect x="0" y="0" width="100" height="100" fill="skyblue"></rect>
  <rect x="20" y="20" width="60" height="60" fill="yellow"></rect>

  <!-- Here the yellow rectangle is not displayed -->
  <rect x="120" y="0" width="100" height="100" fill="skyblue"></rect>
  <rect
    x="140"
    y="20"
    width="60"
    height="60"
    fill="yellow"
    display="none"></rect>
</svg>
```

{{EmbedLiveSample("Example", "240", "120")}}

## Anwendungsnotizen

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Standardwert</th>
      <td><code>inline</code></td>
    </tr>
    <tr>
      <th scope="row">Wert</th>
      <td>Siehe {{cssxref("display", "", "#formal_syntax")}}</td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

Für eine Beschreibung der Werte beziehen Sie sich bitte auf die CSS-{{cssxref("display")}}-Eigenschaft.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{SVGAttr("visibility")}}-Attribut
- CSS {{cssxref("display")}}-Eigenschaft
