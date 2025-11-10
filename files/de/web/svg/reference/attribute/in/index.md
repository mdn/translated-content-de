---
title: in
slug: Web/SVG/Reference/Attribute/in
l10n:
  sourceCommit: a1765c2cad20118be0dad322d3548908787b5791
---

Das Attribut **`in`** identifiziert die Eingabe für das angegebene Filter-Primitive.

Der Wert kann entweder eines der sechs unten definierten Schlüsselwörter sein oder ein String, der mit einem vorherigen Wert des Attributs {{SVGAttr("result")}} innerhalb desselben {{SVGElement("filter")}}-Elements übereinstimmt. Wenn kein Wert angegeben wird und dies das erste Filter-Primitive ist, dann wird dieses Filter-Primitive `SourceGraphic` als seine Eingabe verwenden. Wird kein Wert angegeben und handelt es sich um ein nachfolgendes Filter-Primitive, dann wird dieses Filter-Primitive das Ergebnis des vorherigen Filter-Primitives als Eingabe verwenden.

Wenn der Wert für {{SVGAttr("result")}} mehrfach innerhalb eines gegebenen {{SVGElement("filter")}}-Elements auftritt, dann wird ein Verweis auf dieses Ergebnis das nächstvorhergehende Filter-Primitive mit dem gegebenen Wert für das Attribut {{SVGAttr("result")}} verwenden.

Dieses Attribut kann mit den folgenden SVG-Elementen verwendet werden:

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

## Anwendungshinweise

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
        <code>SourceGraphic</code> für das erste Filter-Primitive, ansonsten Ergebnis
        des vorherigen Filter-Primitives
      </td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

- `SourceGraphic`
  - : Dieses Schlüsselwort repräsentiert die Grafikelemente, die die ursprüngliche Eingabe in das {{SVGElement("filter")}}-Element waren.
- `SourceAlpha`
  - : Dieses Schlüsselwort repräsentiert die Grafikelemente, die die ursprüngliche Eingabe in das `<filter>`-Element waren. `SourceAlpha` hat alle dieselben Regeln wie `SourceGraphic`, außer dass nur der Alpha-Kanal verwendet wird.
- `BackgroundImage`
  - : Dieses Schlüsselwort repräsentiert eine Bildaufnahme des SVG-Dokuments unterhalb der Filterregion zu dem Zeitpunkt, an dem das `<filter>`-Element aufgerufen wurde.
- `BackgroundAlpha`
  - : Gleich wie `BackgroundImage`, außer dass nur der Alpha-Kanal verwendet wird.
- `FillPaint`
  - : Dieses Schlüsselwort repräsentiert den Wert der {{SVGAttr("fill")}}-Eigenschaft auf dem Ziel-Element für den Filtereffekt. In vielen Fällen ist das `FillPaint` überall opak, aber das könnte nicht der Fall sein, wenn eine Form mit einem Verlauf oder Muster gefüllt ist, welches selbst transparente oder halbtransparente Teile enthält.
- `StrokePaint`
  - : Dieses Schlüsselwort repräsentiert den Wert der {{SVGAttr("stroke")}}-Eigenschaft auf dem Ziel-Element für den Filtereffekt. In vielen Fällen ist das `StrokePaint` überall opak, aber das könnte nicht der Fall sein, wenn eine Form mit einem Verlauf oder Muster gestrichen ist, welches selbst transparente oder halbtransparente Teile enthält.
- `<filter-primitive-reference>`
  - : Dieser Wert ist ein zugewiesener Name für das Filter-Primitive in Form eines {{cssxref("custom-ident")}}. Wenn angegeben, können die Grafiken, die aus der Verarbeitung dieses Filter-Primitives resultieren, durch ein in-Attribut auf einem nachfolgenden Filter-Primitive innerhalb desselben Filter-Elements referenziert werden. Wird kein Wert angegeben, steht die Ausgabe nur zur Wiederverwendung als implizite Eingabe in das nächste Filter-Primitive zur Verfügung, wenn dieses Filter-Primitive keinen Wert für sein in-Attribut bereitstellt.

## Workaround für BackgroundImage

`BackgroundImage` wird als Filterquelle in modernen Browsern nicht unterstützt (siehe die [Kompatibilitätstabelle zu feComposite](/de/docs/Web/SVG/Reference/Element/feComposite#browser_compatibility)). Daher müssen wir eines der Bilder innerhalb des Filters selbst mit einem `<feImage>`-Element importieren.

> [!NOTE]
> Firefox [Bug 455986](https://bugzil.la/455986) bedeutet, dass `feImage` keine Teilbilder laden kann, einschließlich Kreise, Rechtecke, Pfade oder andere im Dokument definierte Fragmente. Damit dieses Beispiel in mehr Browsern funktioniert, wird ein vollständiges externes Bild des Logos geladen.

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
    fill="#cc0000"
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
  <circle
    cx="50%"
    cy="40%"
    r="40%"
    fill="#cc0000"
    filter="url(#imageMultiply)" />
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
