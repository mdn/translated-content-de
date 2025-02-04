---
title: display
slug: Web/SVG/Attribute/display
l10n:
  sourceCommit: 64d85b74ce1cce6a24ae8979da4f3f4a01a47229
---

{{SVGRef}}

Das **`display`** Attribut ermöglicht es Ihnen, die Darstellung von grafischen oder Containerelementen zu steuern.

Ein Wert von `display="none"` bedeutet, dass das angegebene Element und seine Kinder nicht dargestellt werden. Jeder Wert außer `none` oder `inherit` bedeutet, dass das angegebene Element vom Browser dargestellt wird.

Wenn `display` auf `none` für ein Containerelement gesetzt wird, führt dies dazu, dass der Container und alle seine Kinder unsichtbar werden; es wirkt also auf Gruppen von Elementen als eine Einheit. Das bedeutet, dass ein Kind eines Elements mit `display="none"` niemals gerendert wird, selbst wenn das Kind einen anderen Wert als `none` für `display` hat.

Wenn das `display` Attribut auf `none` gesetzt ist, wird das gegebene Element nicht Teil des Rendering-Baums. Dies hat Auswirkungen auf die {{SVGElement("tspan")}} und {{SVGElement("tref")}} Elemente, die Ereignisverarbeitung, die Berechnung von Begrenzungsrahmen und die Berechnung von Clip-Pfaden:

- Wenn `display` auf einem {{SVGElement("tspan")}} oder {{SVGElement("tref")}} Element auf `none` gesetzt ist, wird der Textstring für die Textlayout-Zwecke ignoriert.
- In Bezug auf Ereignisse erhält das Element, wenn `display` auf `none` gesetzt ist, keine Ereignisse.
- Die Geometrie eines [Grafik-Elements](/de/docs/Web/SVG/Element#graphics_elements) mit `display` auf `none` wird nicht in die Berechnungen von Begrenzungsrahmen und Clip-Pfaden einbezogen.

Das `display` Attribut beeinflusst nur das direkte Rendering eines gegebenen Elements, verhindert jedoch nicht, dass Elemente von anderen Elementen referenziert werden. Wenn es zum Beispiel auf `none` bei einem {{SVGElement("path")}} Element gesetzt wird, verhindert dies, dass das Element direkt auf die Leinwand gezeichnet wird, jedoch kann das {{SVGElement("path")}} Element immer noch von einem {{SVGElement("textPath")}} Element referenziert werden; zudem wird seine Geometrie in der Text-auf-einem-Pfadverarbeitung genutzt, auch wenn das {{SVGElement("path")}} einen `display` Wert von `none` hat.

Dieses Attribut beeinflusst auch das direkte Rendering in Offscreen-Canvases, wie es bei Masken oder Clip-Pfaden der Fall ist. Das Setzen von `display="none"` bei einem Kind eines {{SVGElement("mask")}} verhindert, dass das jeweilige Kind als Teil der Maske gerendert wird. Ebenso verhindert das Setzen von `display="none"` bei einem Kind eines {{SVGElement("clipPath")}} Elements, dass das jeweilige Kind zum Clip-Pfad beiträgt.

> [!NOTE]
> Als Präsentationsattribut kann `display` als CSS-Eigenschaft verwendet werden. Weitere Informationen finden Sie in der CSS {{cssxref("display")}}.

Sie können dieses Attribut mit jedem SVG-Element verwenden.

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

## Verwendungshinweise

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

Für eine Beschreibung der Werte lesen Sie bitte die CSS {{cssxref("display")}} Eigenschaft.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{SVGAttr("visibility")}} Attribut
- CSS {{cssxref("display")}} Eigenschaft
