---
title: in
slug: Web/SVG/Reference/Attribute/in
l10n:
  sourceCommit: a9063bb88f28dc2a9b32e39f060ab6930663da52
---

Das **`in`** Attribut identifiziert die Eingabe für die gegebene Filterprimitive.

Der Wert kann entweder eines der sechs unten definierten Schlüsselwörter sein oder ein String, der mit einem vorherigen {{SVGAttr("result")}} Attributwert innerhalb desselben {{SVGElement("filter")}} Element übereinstimmt. Wenn kein Wert angegeben ist und dies die erste Filterprimitive ist, dann wird diese Filterprimitive `SourceGraphic` als Eingabe verwenden. Wenn kein Wert angegeben ist und es sich um eine nachfolgende Filterprimitive handelt, verwendet diese Filterprimitive das Ergebnis der vorherigen Filterprimitive als Eingabe.

Erscheint der Wert für {{SVGAttr("result")}} mehrmals innerhalb eines gegebenen {{SVGElement("filter")}} Elements, dann wird ein Verweis auf dieses Ergebnis die nächstgelegene vorhergehende Filterprimitive mit dem gegebenen Wert für das Attribut {{SVGAttr("result")}} verwenden.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

- {{SVGElement("feBlend")}}
- {{SVGElement("feColorMatrix")}}
- {{SVGElement("feComponentTransfer")}}
- {{SVGElement("feComposite")}}
- {{SVGElement("feConvolveMatrix")}}
- {{SVGElement("feDiffuseLighting")}}
- {{SVGElement("feDisplacementMap")}}
- {{SVGElement("feDropShadow")}}
- {{SVGElement("feGaussianBlur")}}
- {{SVGElement("feMergeNode")}}
- {{SVGElement("feMorphology")}}
- {{SVGElement("feOffset")}}
- {{SVGElement("feSpecularLighting")}}
- {{SVGElement("feTile")}}

## Verwendungshinweise

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <code>SourceGraphic</code> | <code>SourceAlpha</code> |
        <code>BackgroundImage</code> | <code>BackgroundAlpha</code> |
        <code>FillPaint</code> | <code>StrokePaint</code> |
        <code>&#x3C;filter-primitive-reference></code>
      </td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td>
        <code>SourceGraphic</code> für die erste Filterprimitive, ansonsten das Ergebnis
        der vorherigen Filterprimitive
      </td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

- `SourceGraphic`
  - : Dieses Schlüsselwort steht für die Grafikelemente, die ursprünglich in das {{SVGElement("filter")}} Element eingegeben wurden.
- `SourceAlpha`
  - : Dieses Schlüsselwort steht für die Grafikelemente, die ursprünglich in das `<filter>` Element eingegeben wurden. `SourceAlpha` hat alle dieselben Regeln wie `SourceGraphic`, außer dass nur der Alphakanal verwendet wird.
- `BackgroundImage`
  - : Dieses Schlüsselwort repräsentiert ein Bild-Snapshot des SVG-Dokuments unter der Filterregion zu dem Zeitpunkt, an dem das `<filter>` Element aufgerufen wurde.
- `BackgroundAlpha`
  - : Gleich wie `BackgroundImage`, außer dass nur der Alphakanal genutzt wird.
- `FillPaint`
  - : Dieses Schlüsselwort steht für den Wert der {{SVGAttr("fill")}} Eigenschaft auf dem Ziel-Element für den Filtereffekt. In vielen Fällen ist das `FillPaint` überall undurchsichtig, aber das könnte sich ändern, wenn eine Form mit einem Verlauf oder Muster gemalt wird, das selbst transparente oder halbtransparente Teile enthält.
- `StrokePaint`
  - : Dieses Schlüsselwort steht für den Wert der {{SVGAttr("stroke")}} Eigenschaft auf dem Ziel-Element für den Filtereffekt. In vielen Fällen ist das `StrokePaint` überall undurchsichtig, aber das könnte sich ändern, wenn eine Form mit einem Verlauf oder Muster gemalt wird, das selbst transparente oder halbtransparente Teile enthält.
- `<filter-primitive-reference>`
  - : Dieser Wert ist ein zugewiesener Name für die Filterprimitive in Form eines {{cssxref("custom-ident")}}. Wenn angegeben, können Grafiken, die aus der Verarbeitung dieser Filterprimitive resultieren, durch ein in-Attribut auf eine nachfolgende Filterprimitive innerhalb desselben Filterelements referenziert werden. Wenn kein Wert angegeben wird, steht die Ausgabe nur für die Wiederverwendung als implizite Eingabe für die nächste Filterprimitive zur Verfügung, wenn diese Filterprimitive keinen Wert für ihr in-Attribut angibt.

## Workaround für BackgroundImage

`BackgroundImage` wird als Filterquelle in modernen Browsern nicht unterstützt (siehe die [feComposite-Kompatibilitätstabelle](/de/docs/Web/SVG/Reference/Element/feComposite#browser_compatibility)). Daher müssen wir eines der Bilder importieren, um es innerhalb des Filters selbst zu mischen, indem wir ein `<feImage>` Element verwenden.

> [!NOTE]
> Firefox [Bug 455986](https://bugzil.la/455986) bedeutet, dass `feImage` keine partiellen Bilder laden kann, einschließlich Kreise, Rechtecke, Pfade oder andere im Dokument definierte Fragmente. Damit dieses Beispiel in mehr Browsern funktioniert, wird ein vollständiges externes Bild des Logos geladen.

### HTML

```html
<svg
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <filter id="backgroundMultiply">
      <!-- This will not work. -->
      <feBlend in="BackgroundImage" in2="SourceGraphic" mode="multiply" />
    </filter>
  </defs>
  <image
    href="mdn_logo_only_color.png"
    x="10%"
    y="10%"
    width="80%"
    height="80%" />
  <circle
    cx="50%"
    cy="40%"
    r="40%"
    fill="#c00"
    filter="url(#backgroundMultiply)" />
</svg>

<svg
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <filter id="imageMultiply">
      <!-- This is a workaround. -->
      <feImage
        href="mdn_logo_only_color.png"
        x="10%"
        y="10%"
        width="80%"
        height="80%" />
      <feBlend in2="SourceGraphic" mode="multiply" />
    </filter>
  </defs>
  <circle cx="50%" cy="40%" r="40%" fill="#c00" filter="url(#imageMultiply)" />
</svg>
```

```css hidden
svg {
  width: 200px;
  height: 200px;
  display: inline;
}
```

### Ergebnis

{{EmbedLiveSample("Workaround_for_BackgroundImage")}}

## Spezifikationen

{{Specifications}}
