---
title: display
slug: Web/SVG/Attribute/display
l10n:
  sourceCommit: a7615ee2f9e22946edff7633962bc1d9eee9e0ad
---

{{SVGRef}}

Das **`display`**-Attribut ermöglicht es Ihnen, die Darstellung von grafischen oder Container-Elementen zu steuern.

Ein Wert von `display="none"` zeigt an, dass das betreffende Element und seine Kinder nicht gerendert werden. Jeder andere Wert als `none` oder `inherit` zeigt an, dass das betreffende Element vom Browser gerendert wird.

Wenn `display` auf `none` bei einem Container-Element gesetzt wird, bewirkt dies, dass der Container und alle seine Kinder unsichtbar werden; es wirkt also auf Gruppen von Elementen als Gruppe. Das bedeutet, dass jedes Kind eines Elements mit `display="none"` niemals gerendert wird, selbst wenn das Kind einen anderen Wert für `display` als `none` hat.

Wenn das `display`-Attribut auf `none` gesetzt ist, wird das betreffende Element nicht Teil des Rendering-Baums. Dies hat Auswirkungen auf die {{SVGElement("tspan")}}- und {{SVGElement("tref")}}-Elemente, die Ereignisverarbeitung, Berechnungen der Begrenzungsrahmen und Berechnungen von Clipping-Pfaden:

- Wenn `display` auf einem {{SVGElement("tspan")}}- oder {{SVGElement("tref")}}-Element auf `none` gesetzt ist, wird der Textstring für die Textlayout-Zwecke ignoriert.
- Bezüglich Ereignissen: Wenn `display` auf `none` gesetzt ist, erhält das Element keine Ereignisse.
- Die Geometrie eines [Grafikelements](/de/docs/Web/SVG/Element#graphics_elements) mit `display` auf `none` wird nicht in Berechnungen von Begrenzungsrahmen und Clipping-Pfaden eingeschlossen.

Das `display`-Attribut beeinflusst nur das direkte Rendering eines gegebenen Elements, verhindert jedoch nicht, dass Elemente von anderen Elementen referenziert werden. Beispielsweise verhindert das Setzen von `none` auf einem {{SVGElement("path")}}-Element, dass dieses Element direkt auf die Leinwand gerendert wird, aber das {{SVGElement("path")}}-Element kann trotzdem von einem {{SVGElement("textPath")}}-Element referenziert werden; zudem wird seine Geometrie im Text-auf-einem-Pfad-Prozess verwendet, selbst wenn das {{SVGElement("path")}} den `display`-Wert `none` hat.

Dieses Attribut beeinflusst auch das direkte Rendering auf Offscreen-Leinwänden, wie es bei Masken oder Clipping-Pfaden der Fall ist. Wenn `display="none"` auf ein Kind eines {{SVGElement("mask")}} gesetzt wird, verhindert dies, dass das betreffende Kindelement als Teil der Maske gerendert wird. Ebenso wird das Setzen von `display="none"` auf ein Kind eines {{SVGElement("clipPath")}}-Elements verhindern, dass das betreffende Kindelement zum Clipping-Pfad beiträgt.

> [!NOTE]
> Als Präsentationsattribut kann `display` als CSS-Eigenschaft verwendet werden. Siehe CSS {{cssxref("display")}} für weitere Informationen.

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

## Nutzungshinweise

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

Für eine Beschreibung der Werte verweisen Sie bitte auf die CSS {{cssxref("display")}} Eigenschaft.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{SVGAttr("visibility")}}-Attribut
- {{cssxref("display")}}
